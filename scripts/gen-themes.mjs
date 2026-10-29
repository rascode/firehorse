#!/usr/bin/env node
// Firehorse themes: compiles theme definitions (JSON) into theme CSS.
//
// A theme is the whole look of a site in one file: type, color (light and
// dark), shape, density and every component decision the old global
// configuration made (avatar, card, button, chip, radius, table…). It is
// applied with one attribute and can be switched at runtime:
//
//   <html data-fh-theme="friesian">
//
// In this repo (no arguments) it reads src/themes/*.json, writes the
// generated src/themes/<name>.css next to each one and dist/themes.json.
// In your project, point it at your own definition:
//
//   npx firehorse-theme ./themes/appaloosa.json            → ./themes/appaloosa.css
//   npx firehorse-theme ./themes/appaloosa.json --out dist
//
// Fails (exit 1) when a theme's text or accent drops below WCAG AA.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, dirname, basename, resolve as resolvePath } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const strip = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "");
const read = (f) => strip(readFileSync(join(root, "src/tokens", f), "utf8"));
const decls = (block) => [...block.matchAll(/(--fh-[\w-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].replace(/\s+/g, " ").trim()]);

/* —— Sources the compiler expands from ———————————————————————— */
const primitivesCss = read("primitives.css");
const semanticCss = read("semantic.css");
const adaptiveCss = read("adaptive.css");
const configCss = read("config.css");

const primitives = Object.fromEntries(decls(primitivesCss));
const semanticBlock = semanticCss.match(/:root\s*\{([^}]*--fh-color-canvas[^}]*)\}/)[1];
const semantic = decls(semanticBlock);
// Tokens adaptive.css computes from the background. A theme leaves those to
// adaptive.css (which re-evaluates them on [data-fh-theme]) and only ships
// their static values for browsers without relative color.
const adaptiveSupports = adaptiveCss.slice(adaptiveCss.indexOf("@supports"));
const adaptive = new Set(decls(adaptiveSupports).map(([n]) => n));

// Config presets, parsed from config.css so a theme and an attribute can never drift.
const presets = {};
for (const m of configCss.matchAll(/\[data-fh-([\w-]+)="([\w-]+)"\]\s*\{([^}]*)\}/g)) (presets[m[1]] ??= {})[m[2]] = decls(m[3]);
const densityRamp = decls(configCss.match(/\[data-fh-density\]\s*\{([^}]*)\}/)[1]);
const CONFIG_KEYS = { avatar: "avatar", card: "card", cardMedia: "card-media", button: "button", chip: "chip", radius: "radius", density: "density", table: "table" };

/* —— OKLCH ⇄ sRGB ——————————————————————————————————————————— */
const toLin = (x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
const toGam = (x) => (x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055);
const hexRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const rgbHex = (c) => "#" + c.map((x) => Math.round(Math.min(1, Math.max(0, x)) * 255).toString(16).padStart(2, "0")).join("");
function oklch(hex) {
  const [r, g, b] = hexRgb(hex).map(toLin);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  const C = Math.hypot(A, B);
  return [L, C, C < 1e-4 ? 0 : ((Math.atan2(B, A) * 180) / Math.PI + 360) % 360];
}
function rgbOf(L, C, H) {
  const a = C * Math.cos((H * Math.PI) / 180), b = C * Math.sin((H * Math.PI) / 180);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s, -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s];
}
function hexOf(L, C, H) {
  // Reduce chroma until the color fits in sRGB.
  let c = C;
  for (let i = 0; i < 40; i++) { const rgb = rgbOf(L, c, H); if (rgb.every((x) => x >= -1e-4 && x <= 1 + 1e-4)) break; c *= 0.94; }
  return rgbHex(rgbOf(L, c, H).map(toGam));
}
const lum = (hex) => { const [r, g, b] = hexRgb(hex).map(toLin); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
export { oklch, hexOf };
export const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const round = (x, n = 3) => Number(x.toFixed(n));

/* —— Compile one theme ——————————————————————————————————————— */
export function compile(def, { source = "" } = {}) {
  const name = String(def.name ?? "").toLowerCase();
  if (!/^[a-z][a-z0-9-]*$/.test(name)) throw new Error(`theme "name" must be lowercase letters, digits and dashes (got "${def.name}")`);
  const errors = [];
  const out = [];
  // Last write wins, and only the last one is kept.
  const add = (n, v) => { const i = out.findIndex(([k]) => k === n); if (i >= 0) out.splice(i, 1); out.push([n, v]); };
  const color = def.color ?? {};
  const pair = (v) => (typeof v === "string" ? { light: v, dark: v } : v);

  // A base theme restores Firehorse's own values inside any other theme
  // (used to preview the defaults in a page that has a theme applied).
  if (def.base) {
    for (const [n, v] of Object.entries(primitives)) add(n, v);
    for (const [n, v] of decls(adaptiveCss.slice(0, adaptiveCss.indexOf("@supports")).match(/:root\s*\{([^}]*)\}/)[1])) if (/^--fh-ember-/.test(n)) add(n, v);
  }

  // Type
  const font = def.font ?? {};
  if (font.sans) add("--fh-font-sans", font.sans);
  // Always set the display face, so a theme nested in another never inherits its headings.
  add("--fh-font-display", font.display ?? "var(--fh-font-sans)");
  if (font.mono) add("--fh-font-mono", font.mono);
  if (font.script) add("--fh-font-script", font.script);

  // Neutral ramp: every gray keeps its lightness and takes the theme's hue.
  const grays = Object.entries(primitives).filter(([n]) => /^--fh-gray-\d+$/.test(n));
  const tinted = { ...primitives };
  if (color.neutral && color.neutral.chroma > 0) {
    const { hue = 0, chroma } = color.neutral;
    for (const [n, hex] of grays) {
      if (n === "--fh-gray-0" || n === "--fh-gray-1000") continue;
      const [L] = oklch(hex);
      // Taper chroma toward white and black so the ends stay clean.
      const v = hexOf(L, chroma * Math.min(1, (1 - L) * 4, L * 6), hue);
      tinted[n] = v;
      add(n, v);
    }
  }

  // Accent: light-canvas and dark-canvas values, plus hover, text and the color on top of it.
  const accent = color.accent && pair(color.accent);
  if (accent) {
    const hover = pair(color.accentHover ?? accent);
    const text = pair(color.accentText ?? accent);
    const on = pair(color.onAccent ?? { light: "#ffffff", dark: "#ffffff" });
    Object.assign(tinted, { "--fh-ember-700": accent.light, "--fh-ember-500": accent.dark, "--fh-ember-400": text.dark });
    add("--fh-ember-700", accent.light);
    add("--fh-ember-500", accent.dark);
    add("--fh-ember-400", text.dark);
    const [dl, dc, dh] = oklch(text.dark), [ll, lc, lh] = oklch(text.light);
    add("--fh-ember-dl", round(dl)); add("--fh-ember-dc", round(dc)); add("--fh-ember-dh", round(dh, 1));
    add("--fh-ember-ll", round(ll)); add("--fh-ember-lc", round(lc)); add("--fh-ember-lh", round(lh, 1));
    color._resolved = { accent, hover, text, on };
  }

  // Semantic roles, re-declared in scope so they resolve against this theme's primitives.
  const sem = semantic.filter(([n]) => !adaptive.has(n));
  const fallback = semantic.filter(([n]) => adaptive.has(n));
  const roles = Object.fromEntries(semantic);
  for (const [n, v] of sem) add(n, v);
  if (color._resolved) {
    const { accent: a, hover, text, on } = color._resolved;
    add("--fh-color-accent", (roles["--fh-color-accent"] = `light-dark(${a.light}, ${a.dark})`));
    add("--fh-color-accent-hover", (roles["--fh-color-accent-hover"] = `light-dark(${hover.light}, ${hover.dark})`));
    add("--fh-color-on-accent", (roles["--fh-color-on-accent"] = `light-dark(${on.light}, ${on.dark})`));
    roles["--fh-color-accent-text"] = `light-dark(${text.light}, ${text.dark})`;
    const i = fallback.findIndex(([n]) => n === "--fh-color-accent-text");
    if (i >= 0) fallback[i] = ["--fh-color-accent-text", roles["--fh-color-accent-text"]];
  }
  for (const [n, v] of Object.entries(color.roles ?? {})) { add(n, v); roles[n] = v; }
  add("--fh-color-bg", "var(--fh-color-canvas)");

  // Component decisions (what data-fh-* used to set), expanded from config.css.
  const config = def.config ?? {};
  for (const [key, value] of Object.entries(config)) {
    const attr = CONFIG_KEYS[key];
    if (!attr) { errors.push(`unknown config key "${key}" (use ${Object.keys(CONFIG_KEYS).join(", ")})`); continue; }
    if (value === "default") continue;
    const set = presets[attr]?.[value];
    if (!set) { errors.push(`config.${key}: "${value}" is not a preset (use ${Object.keys(presets[attr] ?? {}).join(", ")})`); continue; }
    if (attr === "density") for (const d of densityRamp) add(...d);
    for (const d of set) add(...d);
  }

  // Escape hatch: any other token.
  for (const [n, v] of Object.entries(def.tokens ?? {})) {
    if (!/^--[\w-]+$/.test(n)) { errors.push(`tokens: "${n}" is not a custom property`); continue; }
    add(n, String(v));
  }

  // —— Contrast, both schemes, from the static palette ——
  const resolve = (v, scheme, depth = 0) => {
    if (v == null || depth > 12) return null;
    v = String(v).trim();
    const ld = v.match(/^light-dark\((.+)\)$/);
    if (ld) { const p = ld[1].split(/,(?![^(]*\))/).map((s) => s.trim()); v = scheme === "light" ? p[0] : p[1]; }
    const ref = v.match(/^var\((--[\w-]+)\)$/);
    if (ref) return resolve(roles[ref[1]] ?? tinted[ref[1]], scheme, depth + 1);
    return /^#[0-9a-f]{6}$/i.test(v) ? v.toLowerCase() : null;
  };
  const swatches = {};
  for (const scheme of ["light", "dark"]) {
    const r = (n) => resolve(`var(${n})`, scheme);
    const canvas = r("--fh-color-canvas"), surface = r("--fh-color-surface"), raised = r("--fh-color-surface-raised");
    swatches[scheme] = { canvas, surface, text: r("--fh-color-text"), muted: r("--fh-color-text-muted"), accent: r("--fh-color-accent"), onAccent: r("--fh-color-on-accent") };
    const checks = [
      ...["--fh-color-text", "--fh-color-text-muted", "--fh-color-text-subtle"].flatMap((t) => [canvas, surface, raised].map((bg) => [t, r(t), bg, 4.5])),
      ["--fh-color-accent-text", r("--fh-color-accent-text"), canvas, 4.5],
      ["--fh-color-accent (focus)", r("--fh-color-accent"), canvas, 3],
      ["--fh-color-on-accent", r("--fh-color-on-accent"), r("--fh-color-accent"), 4.5],
      ["--fh-color-text-placeholder", r("--fh-color-text-placeholder"), r("--fh-color-field"), 4.5],
    ];
    for (const [label, fg, bg, min] of checks) {
      if (!fg || !bg) { errors.push(`${scheme}: could not resolve ${label}`); continue; }
      const c = contrast(fg, bg);
      if (c < min) errors.push(`${scheme}: ${label} ${fg} on ${bg} is ${c.toFixed(2)}:1 (needs ${min})`);
    }
  }
  if (errors.length) throw new Error(`theme "${name}":\n  ${errors.join("\n  ")}`);

  const pad = (list) => list.map(([n, v]) => `    ${n}: ${v};`).join("\n");
  const sel = `[data-fh-theme="${name}"]`;
  const css = `/*
 * Firehorse theme — ${def.label ?? name}${def.tagline ? `\n * ${def.tagline}` : ""}
 * ---------------------------------------------------------------
 * GENERATED by firehorse-theme from ${source || `${name}.json`}.
 * Edit the JSON, not this file.
 *
 *   <html data-fh-theme="${name}">
 *
 * Light and dark both ship; data-fh-scheme still picks between them.
 * A data-fh-* attribute (data-fh-card="solid", …) on any element still
 * overrides this theme's decision for that element and everything in it.
 */

@layer fh.themes {
  ${sel} {
${pad(out)}
  }

  @supports not (color: oklch(from red l c h)) {
    ${sel} {
${pad(fallback).replace(/^ {4}/gm, "      ")}
    }
  }
}
`;
  const manifest = { name, base: Boolean(def.base), label: def.label ?? name, tagline: def.tagline ?? "", description: def.description ?? "", breed: def.breed ?? "", config, swatches, css: `themes/${name}.css` };
  return { name, css, manifest };
}

/* —— CLI ———————————————————————————————————————————————————— */
const isMain = process.argv[1] && resolvePath(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = process.argv.slice(2);
  const outIdx = args.indexOf("--out");
  const outDir = outIdx >= 0 ? args[outIdx + 1] : null;
  const files = args.filter((a, i) => a.endsWith(".json") && i !== outIdx + 1);
  const repoMode = files.length === 0;
  const srcDir = join(root, "src/themes");
  const list = repoMode ? readdirSync(srcDir).filter((f) => f.endsWith(".json") && !f.startsWith("_")).sort().map((f) => join(srcDir, f)) : files.map((f) => resolvePath(f));
  const manifests = [];
  let failed = 0;
  for (const file of list) {
    try {
      const def = JSON.parse(readFileSync(file, "utf8"));
      const { name, css, manifest } = compile(def, { source: repoMode ? `src/themes/${basename(file)}` : basename(file) });
      const dir = outDir ? resolvePath(outDir) : dirname(file);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, `${name}.css`), css);
      manifests.push(manifest);
      console.log(`✓ theme ${name.padEnd(12)} → ${repoMode ? `src/themes/${name}.css` : join(dir, `${name}.css`)}`);
    } catch (e) { failed++; console.error(`✗ ${basename(file)}: ${e.message}`); }
  }
  if (repoMode) {
    mkdirSync(join(root, "dist"), { recursive: true });
    writeFileSync(join(root, "dist/themes.json"), JSON.stringify({ themes: manifests }, null, 2) + "\n");
  }
  if (failed) process.exit(1);
}
