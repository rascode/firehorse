// Firehorse verify (adaptive): renders the computed text and tone tokens in a
// real browser on a range of backgrounds, reads back the painted pixels and
// checks WCAG contrast. Needs Playwright (`npx playwright install chromium`);
// skips with a notice when it isn't available.
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
import { createRequire } from "node:module";
let chromium;
try { ({ chromium } = await import("playwright")); }
catch {
  try { ({ chromium } = createRequire(import.meta.url)("playwright")); }
  catch { console.log("○ verify-adaptive: Playwright not installed, skipped"); process.exit(0); }
}

const css = readFileSync(join(root, "dist/firehorse.css"), "utf8");
// Backgrounds: the built-in surfaces in both schemes, plus branded canvases.
const backgrounds = [
  ["dark canvas", "dark", "var(--fh-color-canvas)"], ["dark surface", "dark", "var(--fh-color-surface)"],
  ["dark raised", "dark", "var(--fh-color-surface-raised)"], ["dark chrome", "dark", "var(--fh-color-surface-chrome)"],
  ["dark sunken", "dark", "var(--fh-color-surface-sunken)"],
  ["light canvas", "light", "var(--fh-color-canvas)"], ["light surface", "light", "var(--fh-color-surface)"],
  ["light chrome", "light", "var(--fh-color-surface-chrome)"], ["light sunken", "light", "var(--fh-color-surface-sunken)"],
  ["cream", "light", "#f3ede2"], ["sand", "light", "#e7dcc7"], ["ivory", "light", "#fffdf6"], ["mist", "light", "#e6ecf2"],
  ["navy", "dark", "#0f1b2d"], ["forest", "dark", "#12241b"], ["plum", "dark", "#26142c"], ["slate", "dark", "#1e293b"], ["espresso", "dark", "#2a1d16"],
];
const roles = [
  ["--fh-color-text", 7], ["--fh-color-text-muted", 4.5], ["--fh-color-text-subtle", 4.5], ["--fh-color-accent-text", 4.5],
  ["--fh-color-success", 4.5], ["--fh-color-danger", 4.5], ["--fh-color-warning", 4.5],
  ...["sky", "lime", "orange", "teal", "fuchsia", "violet", "rose", "amber"].map((t) => [`--fh-tone-${t}`, 4.5]),
];
const tones = ["sky", "lime", "orange", "teal", "fuchsia", "violet", "rose", "amber", "accent"];

let b;
try { b = await chromium.launch(); }
catch (e) {
  // CI must run it; locally, a missing browser download only skips.
  if (process.env.CI) { console.error(`✗ verify-adaptive: Chromium unavailable (${e.message.split("\n")[0]})`); process.exit(1); }
  console.log("○ verify-adaptive: Chromium not installed (npx playwright install chromium), skipped"); process.exit(0);
}
const p = await b.newPage();
await p.setContent(`<!doctype html><style>${css}</style><body></body>`);
const results = await p.evaluate(({ backgrounds, roles, tones }) => {
  const cv = document.createElement("canvas"); cv.width = cv.height = 1;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  const px = (color) => { ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = "#000"; ctx.fillStyle = color; ctx.fillRect(0, 0, 1, 1); return [...ctx.getImageData(0, 0, 1, 1).data].slice(0, 3); };
  const lum = ([r, g, bl]) => { const f = (x) => { x /= 255; return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(bl); };
  const ratio = (a, c) => { const [x, y] = [lum(a), lum(c)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
  const out = [];
  for (const [name, scheme, bg] of backgrounds) {
    const s = document.createElement("div");
    s.setAttribute("data-fh-scheme", scheme); s.setAttribute("data-fh-surface", "");
    s.style.setProperty("--fh-color-bg", bg);
    document.body.append(s);
    const bgPx = px(getComputedStyle(s).backgroundColor);
    for (const [role, min] of roles) {
      const el = document.createElement("span"); el.style.color = `var(${role})`; s.append(el);
      const r = ratio(px(getComputedStyle(el).color), bgPx);
      out.push({ bg: name, role, ratio: r, min });
    }
    for (const t of tones) {
      const fill = document.createElement("span"); fill.setAttribute("data-tone", t);
      fill.style.background = "var(--fh-tone)"; fill.style.color = "var(--fh-color-on-tone)"; s.append(fill);
      const cs = getComputedStyle(fill);
      out.push({ bg: name, role: `on-tone/${t}`, ratio: ratio(px(cs.color), px(cs.backgroundColor)), min: 4.5 });
    }
  }
  return out;
}, { backgrounds, roles, tones });
await b.close();
const fails = results.filter((r) => r.ratio < r.min);
for (const f of fails) console.error(`✗ ${f.bg.padEnd(13)} ${f.role.padEnd(26)} ${f.ratio.toFixed(2)} (< ${f.min})`);
const worst = results.reduce((m, r) => (r.ratio / r.min < m.ratio / m.min ? r : m));
if (fails.length) { console.error(`\n✗ verify-adaptive: ${fails.length} of ${results.length} pairs below target`); process.exit(1); }
console.log(`✓ verify-adaptive: ${results.length} rendered pairs on ${backgrounds.length} backgrounds pass (tightest: ${worst.role} on ${worst.bg}, ${worst.ratio.toFixed(2)}:1)`);
