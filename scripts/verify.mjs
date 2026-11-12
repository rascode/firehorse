// Firehorse verify: WCAG contrast for every text role, in both schemes,
// resolved straight from the token source. Exits 1 on any failure.
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = ["primitives", "semantic"].map((f) => readFileSync(join(root, `src/tokens/${f}.css`), "utf8")).join("\n").replace(/\/\*[\s\S]*?\*\//g, "");
const raw = {};
for (const m of css.matchAll(/(--fh-[\w-]+)\s*:\s*([^;]+);/g)) raw[m[1]] = m[2].trim();

function resolve(name, scheme, depth = 0) {
  let v = raw[name];
  if (!v || depth > 10) return null;
  const ld = v.match(/^light-dark\((.+)\)$/);
  if (ld) {
    const parts = ld[1].split(/,(?![^(]*\))/).map((s) => s.trim());
    v = scheme === "light" ? parts[0] : parts[1];
  }
  const ref = v.match(/^var\((--[\w-]+)\)$/);
  if (ref) return resolve(ref[1], scheme, depth + 1);
  return /^#[0-9a-f]{6}$/i.test(v) ? v : null;
}
const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

const checks = [
  // [foreground, background, minimum]
  ...["text", "text-muted", "text-subtle"].flatMap((t) => ["canvas", "surface", "surface-raised"].map((bg) => [`--fh-color-${t}`, `--fh-color-${bg}`, 4.5])),
  ["--fh-color-text", "--fh-color-field", 4.5],
  ["--fh-color-text-placeholder", "--fh-color-field", 4.5],
  ["--fh-color-danger", "--fh-color-canvas", 4.5],
  ["--fh-color-success", "--fh-color-canvas", 4.5],
  ["--fh-color-focus", "--fh-color-canvas", 3],
  ["--fh-color-accent-text", "--fh-color-canvas", 4.5],
  ...["sky", "lime", "orange", "teal", "fuchsia", "violet", "rose", "amber", "accent"].map((t) => [`--fh-tone-${t}`, "--fh-color-canvas", 4.5]),
  ...["sky", "lime", "orange", "teal", "fuchsia", "violet", "rose", "amber"].map((t) => ["--fh-color-on-tone", `--fh-tone-${t}`, 4.5]),
];
let fail = 0;
for (const scheme of ["dark", "light"]) {
  for (const [fg, bg, min] of checks) {
    const a = resolve(fg, scheme), b = resolve(bg, scheme);
    if (!a || !b) { console.error(`? ${scheme} ${fg} on ${bg}: could not resolve`); fail++; continue; }
    const r = ratio(a, b);
    if (r < min) { console.error(`✗ ${scheme.padEnd(5)} ${fg} ${a} on ${bg} ${b} = ${r.toFixed(2)} (< ${min})`); fail++; }
  }
}
// Both builds (scripts/builds.mjs): public at dist/, full (admin included) under dist/full/.
const publicBuild = ["dist/firehorse.css", "dist/firehorse.min.css", "dist/firehorse.compat.min.css", "dist/index.json"];
const fullBuild = ["firehorse.css", "firehorse.min.css", "firehorse.compat.min.css", "admin.css", "admin.min.css", "index.json"].map((f) => `dist/full/${f}`);
for (const f of [...publicBuild, ...fullBuild, "dist/tokens.json", "dist/tokens.d.ts", "agent/system.md", "agent/components.md"]) {
  if (!existsSync(join(root, f))) { console.error(`✗ missing ${f}`); fail++; }
}
// The public sheet is the full one with held families taken out: never empty, never bigger.
for (const f of ["firehorse.css", "firehorse.min.css", "firehorse.compat.min.css"]) {
  const [pub, full] = [`dist/${f}`, `dist/full/${f}`].map((p) => (existsSync(join(root, p)) ? statSync(join(root, p)).size : 0));
  if (pub && full && !(pub > 0 && pub < full)) { console.error(`✗ dist/${f} (${pub} B) should be smaller than dist/full/${f} (${full} B)`); fail++; }
}
if (fail) { console.error(`\n✗ verify: ${fail} problem(s)`); process.exit(1); }
console.log(`✓ verify: ${checks.length * 2} contrast pairs pass AA in dark and light; public and full build artifacts present`);
