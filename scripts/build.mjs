// Firehorse build: bundle + minify CSS, emit token manifest.
// Zero config: `node scripts/build.mjs`
import { bundle, browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
import { mkdirSync, writeFileSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");
const dist = join(root, "dist");
mkdirSync(join(dist, "themes"), { recursive: true });
// Themes are defined in JSON; compile them to CSS first (fails on low contrast).
execFileSync(process.execPath, [join(root, "scripts/gen-themes.mjs")], { stdio: "inherit" });

// Modern build: Baseline 2024 browsers (native nesting, light-dark, @starting-style).
const modern = browserslistToTargets(browserslist(["chrome >= 123", "edge >= 123", "firefox >= 128", "safari >= 17.5", "ios_saf >= 17.5"]));
// Compat build: lowers nesting and light-dark() for 2022–23 browsers.
const compat = browserslistToTargets(browserslist(["chrome >= 108", "firefox >= 115", "safari >= 16.4", "ios_saf >= 16.4"]));

function build(entry, out, targets, minify) {
  const { code, warnings } = bundle({ filename: entry, targets, minify, sourceMap: false });
  for (const w of warnings) if (!/scroll-(marker|button)/.test(w.message)) console.warn(`warn ${basename(entry)}: ${w.message}`);
  writeFileSync(out, code);
  return code.length;
}

const sizes = {};
// —— Two builds (scripts/builds.mjs) ——
// Full, under dist/full/: everything in src, admin included (Helm, rascode.dev and the UI audit import it).
// Public, at dist/: the CSS of public families only (release.json). Which classes are held comes from the full
// Index, so the Index is written first, straight from the docs pages (gen-index --dist: the two index.json files,
// no ledger, no agent docs). That keeps `npm run build` working on a clean dist.
execFileSync(process.execPath, [join(root, "scripts/gen-index.mjs"), "--dist"], { stdio: "inherit" });
const { plan, publicEntry, stripHeld, bundleFrom, PUBLIC_ENTRY } = await import("./builds.mjs");
const full = join(dist, "full");
mkdirSync(full, { recursive: true });
const entry = join(src, "firehorse.css");
sizes["full/firehorse.css"] = build(entry, join(full, "firehorse.css"), modern, false);
sizes["full/firehorse.min.css"] = build(entry, join(full, "firehorse.min.css"), modern, true);
sizes["full/firehorse.compat.min.css"] = build(entry, join(full, "firehorse.compat.min.css"), compat, true);
// Admin category: operator UI, its own stylesheet (load after firehorse.css), in the full build only.
sizes["full/admin.css"] = build(join(src, "admin/admin.css"), join(full, "admin.css"), modern, false);
sizes["full/admin.min.css"] = build(join(src, "admin/admin.css"), join(full, "admin.min.css"), modern, true);
// Public: the generated entry (left-out files commented out), held rules stripped as it bundles.
const p = plan();
const pubCss = publicEntry(p);
async function buildPublic(out, targets, minify) {
  const stats = { rules: 0, selectors: 0 };
  const { code, warnings } = await bundleFrom(PUBLIC_ENTRY, pubCss, { targets, minify, visitor: stripHeld(p.heldClasses, stats) });
  for (const w of warnings) if (!/scroll-(marker|button)/.test(w.message)) console.warn(`warn firehorse.css (public): ${w.message}`);
  writeFileSync(out, code);
  return { size: code.length, stats };
}
let stripped;
sizes["firehorse.css"] = (stripped = await buildPublic(join(dist, "firehorse.css"), modern, false)).size;
sizes["firehorse.min.css"] = (await buildPublic(join(dist, "firehorse.min.css"), modern, true)).size;
sizes["firehorse.compat.min.css"] = (await buildPublic(join(dist, "firehorse.compat.min.css"), compat, true)).size;
// Optional icon set, shipped as its own stylesheet.
sizes["icons.css"] = build(join(src, "icons/icons.css"), join(dist, "icons.css"), modern, true);
writeFileSync(join(dist, "icons.json"), readFileSync(join(src, "icons/icons.json")));
// Integration sheets (src/integrations, e.g. the reveal.js adapter, loaded after firehorse.css): every one in the
// full build; at dist/ only when a live family uses the classes it styles (builds.mjs). reveal.css styles fh-canvas
// slides (Media, held), so it is dist/full/reveal.css only.
for (const i of p.integrations) {
  sizes[`full/${i.name}`] = build(i.file, join(full, i.name), modern, true);
  if (!i.out) sizes[i.name] = build(i.file, join(dist, i.name), modern, true);
}
// Art the components point at by default (e.g. the auth panel's etched contours).
mkdirSync(join(dist, "art"), { recursive: true });
// The full build's sheets point at the same art by a relative url(), so it sits beside them too.
mkdirSync(join(dist, "full", "art"), { recursive: true });
for (const f of readdirSync(join(src, "art"))) for (const d of ["art", "full/art"]) writeFileSync(join(dist, d, f), readFileSync(join(src, "art", f)));
for (const f of readdirSync(join(src, "themes"))) {
  if (!f.endsWith(".css") || f.startsWith("_")) continue;
  sizes[`themes/${f}`] = build(join(src, "themes", f), join(dist, "themes", f), modern, false);
}
// Every JSON-defined theme in one sheet, for sites that offer a theme select.
const manifest = JSON.parse(readFileSync(join(dist, "themes.json"), "utf8"));
const allThemes = manifest.themes.map((t) => readFileSync(join(dist, "themes", `${t.name}.css`), "utf8")).join("\n");
writeFileSync(join(dist, "themes.css"), allThemes);
sizes["themes.css"] = allThemes.length;

// —— Optional JavaScript modules (enhancer, datatable, …) ——
for (const f of readdirSync(join(src, "js"))) {
  if (f.endsWith(".js")) {
    const js = readFileSync(join(src, "js", f), "utf8");
    writeFileSync(join(dist, f), js);
    sizes[f] = js.length;
  } else if (f.endsWith(".d.ts")) {
    // Ship TypeScript types next to the JS (e.g. datatable.d.ts).
    writeFileSync(join(dist, f), readFileSync(join(src, "js", f), "utf8"));
    sizes[f] = statSync(join(src, "js", f)).size;
  }
}

// —— Token manifest (W3C DTCG-style JSON + TypeScript names) ——
const tokens = {};
for (const f of ["primitives.css", "semantic.css", "config.css"]) {
  const css = readFileSync(join(src, "tokens", f), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const tier = f.replace(".css", "");
  for (const m of css.matchAll(/(--fh-[\w-]+)\s*:\s*([^;]+);/g)) {
    const name = m[1];
    const value = m[2].replace(/\s+/g, " ").trim();
    const group = name.replace("--fh-", "").split("-")[0];
    tokens[name] = { $value: value, $type: typeOf(name, value), tier, group };
  }
}
function typeOf(name, v) {
  if (/color|gray|ember|sky|lime|orange|teal|fuchsia|violet|rose|amber|green|red|tone/.test(name)) return "color";
  if (name.includes("font-")) return "fontFamily";
  if (name.includes("weight")) return "fontWeight";
  if (name.includes("duration")) return "duration";
  if (name.includes("ease")) return "cubicBezier";
  if (name.includes("shadow")) return "shadow";
  if (name.includes("icon")) return "asset";
  if (name.includes("z-")) return "number";
  if (/leading/.test(name)) return "number";
  return "dimension";
}
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
writeFileSync(join(dist, "tokens.json"), JSON.stringify({ $schema: "https://design-tokens.github.io/community-group/format/", name: "firehorse", version: pkg.version, tokens }, null, 2));
writeFileSync(join(dist, "tokens.d.ts"),
  `/** Firehorse ${pkg.version} — CSS custom property names. Generated. */\nexport type FirehorseToken =\n${Object.keys(tokens).map((t) => `  | "${t}"`).join("\n")};\n\nexport type Token = FirehorseToken;\n\nexport declare const tokens: Record<FirehorseToken, { $value: string; $type: string; tier: string; group: string }>;\n`);
writeFileSync(join(dist, "tokens.js"), `export const tokens = ${JSON.stringify(tokens, null, 2)};\n`);

console.log(`Firehorse ${pkg.version}`);
console.log(`  public build: ${p.kept.length}/${p.files.length} source files, ${p.heldClasses.size} held classes, ${stripped.stats.rules} rules and ${stripped.stats.selectors} selectors stripped`);
for (const f of p.left) console.log(`    left out ${f.path} (${f.out})`);
for (const i of p.integrations.filter((i) => i.out)) console.log(`    full build only: ${i.path} (${i.out})`);
for (const [k, v] of Object.entries(sizes)) console.log(`  dist/${k.padEnd(28)} ${(v / 1024).toFixed(1)} KB`);
console.log(`  dist/tokens.json                ${Object.keys(tokens).length} tokens`);
