// Firehorse lint: enforces the system's own rules on its source.
// node scripts/lint.mjs   (exits 1 on any error)
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");
// `node scripts/lint.mjs pro/src` lints another source tree (Firehorse Pro)
// against the core tokens: core files define, only the target is checked.
const argPath = process.argv.slice(2).find((a) => !a.startsWith("--"));
const target = argPath ? join(root, argPath) : src;
const walkCss = (dir, out) => { for (const f of readdirSync(dir)) { const p = join(dir, f); statSync(p).isDirectory() ? walkCss(p, out) : p.endsWith(".css") && out.push(p); } return out; };
const files = walkCss(target, []);
const coreFiles = target === src ? files : walkCss(src, []);

const errors = [];
// Rascode HIG · Spacing: components space by relationship (--fh-gap-*,
// --fh-inset-*, --fh-item-*), never by a raw --fh-space-* step. An error;
// `--loose-spacing` turns it back into a warning with a count (for another
// source tree that is still moving over, e.g. Firehorse Pro).
const strictSpacing = !process.argv.includes("--loose-spacing");
const spacing = [];
const defined = new Set();
const read = (f) => readFileSync(f, "utf8").replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "));
for (const f of new Set([...coreFiles, ...files])) for (const m of read(f).matchAll(/(--[\w-]+)\s*:/g)) defined.add(m[1]);
for (const f of new Set([...coreFiles, ...files])) for (const m of read(f).matchAll(/@property\s+(--[\w-]+)/g)) defined.add(m[1]);
// CSS custom functions: @function --name(--arg <type>, …) defines its arguments for its own body.
for (const f of new Set([...coreFiles, ...files])) for (const m of read(f).matchAll(/@function\s+--[\w-]+\(([^)]*)\)/g)) for (const arg of m[1].matchAll(/(--[\w-]+)/g)) defined.add(arg[1]);

const PRIMITIVE = /--fh-(gray|ember|sky|lime|orange|teal|fuchsia|violet|rose|amber|green|red)-\d+/;
for (const f of files) {
  const rel = relative(target, f);
  const isToken = rel.startsWith("tokens/") || rel.startsWith("themes/");
  // integrations/ style a third-party library (reveal.js), so its own class names are allowed.
  const isIntegration = rel.startsWith("integrations/");
  const css = read(f);
  const lines = css.split("\n");
  lines.forEach((line, i) => {
    const at = `${rel}:${i + 1}`;
    if (!isToken && /#[0-9a-f]{3,8}\b/i.test(line) && !/url\(/.test(line)) errors.push(`${at} raw hex color — use a token`);
    if (!isToken && /\brgba?\(/.test(line)) errors.push(`${at} raw rgb() color — use a token`);
    if (!isToken && PRIMITIVE.test(line)) errors.push(`${at} primitive token in component — use a semantic token`);
    const isSpacingExempt = isToken || isIntegration || rel.startsWith("layout/") || rel.startsWith("base/") || rel.startsWith("utilities/");
    if (!isSpacingExempt) for (const m of line.matchAll(/var\(--fh-space-[\w-]+/g)) spacing.push(`${at} raw spacing ${m[0].slice(4)} — use a --fh-gap-* or --fh-inset-* token (HIG · Spacing)`);
    const fs = line.match(/font-size:\s*(\d*\.?\d+)(rem|px)\b/);
    if (!isToken && fs && (fs[2] === "rem" ? Number(fs[1]) < 0.6875 : Number(fs[1]) < 11)) errors.push(`${at} font-size under 11px — the floor is --fh-text-micro (HIG · Type)`);
    if (/!important/.test(line) && !/(reset\.css|document\.css)/.test(rel)) errors.push(`${at} !important outside reset/motion safety`);
    const mq = line.match(/@media\s+([^{]+)/);
    if (mq && /(min|max)-width|width\s*[<>]/.test(mq[1])) errors.push(`${at} viewport width media query — use @container`);
    for (const m of line.matchAll(/var\((--[\w-]+)\s*(,)?/g)) {
      const [, name, hasFallback] = m;
      if (!defined.has(name) && !hasFallback && !name.startsWith("--font-rascode")) errors.push(`${at} ${name} is never defined and has no fallback`);
    }
    for (const m of line.matchAll(/(?<![\w-])\.([a-zA-Z][\w-]*)(?=[\s,.:{>+~)\[]|$)/g)) {
      const cls = m[1];
      if (/^\d/.test(cls) || /^(5|25|35|55|65|75|85|95)/.test(cls)) continue;
      if (/:\s*[^{]*$/.test(line.split(m[0])[0]) && !line.trim().startsWith(".") && !line.includes("{") && !line.trim().startsWith("&") && !line.trim().startsWith(":")) continue; // inside a value
      if (!cls.startsWith("fh-") && !isIntegration) errors.push(`${at} class .${cls} is not fh- prefixed`);
    }
  });
}

if (spacing.length) {
  if (strictSpacing) errors.push(...spacing);
  else {
    const byFile = {};
    for (const w of spacing) { const f = w.split(":")[0]; byFile[f] = (byFile[f] || 0) + 1; }
    const top = Object.entries(byFile).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([f, n]) => `${n} ${f}`).join(", ");
    console.warn(`! spacing: ${spacing.length} raw --fh-space-* uses in ${Object.keys(byFile).length} component files (HIG · Spacing). Most: ${top}`);
  }
}
if (errors.length) { console.error(errors.join("\n")); console.error(`\n✗ ${errors.length} lint error(s)`); process.exit(1); }
console.log(`✓ lint: ${files.length} files, ${defined.size} custom properties, 0 errors`);
