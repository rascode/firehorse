#!/usr/bin/env node
// Firehorse media export: every .fh-canvas in an HTML page → a PNG at its native size.
//   npx firehorse-export page.html [--out media] [--scale 1] [--only "#og, .fh-canvas--cover"]
// File names come from the canvas's data-fh-export, then its id, then canvas-01, canvas-02, …
// Slides (.fh-slide) export too; for a PDF deck use reveal.js's ?print-pdf instead.
// Needs Playwright: npm i -D playwright && npx playwright install chromium
import { mkdirSync } from "node:fs";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args.splice(i, 2)[1] : def; };
const out = resolve(opt("out", "media"));
const scale = Number(opt("scale", "1"));
const only = opt("only", ".fh-canvas");
const input = args[0];
if (!input) { console.error("usage: firehorse-export <page.html | url> [--out dir] [--scale 1] [--only selector]"); process.exit(1); }

let chromium;
try { ({ chromium } = await import("playwright")); }
catch { console.error("firehorse-export needs Playwright:\n  npm i -D playwright && npx playwright install chromium"); process.exit(1); }

const url = /^https?:/.test(input) ? input : pathToFileURL(resolve(input)).href;
const browser = await chromium.launch();
// Wide enough for a 3000 px cover drawn at native size.
const page = await browser.newPage({ viewport: { width: 3200, height: 1800 }, deviceScaleFactor: scale });
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
mkdirSync(out, { recursive: true });

const els = await page.$$(only);
const used = new Set();
let n = 0;
for (const [i, el] of els.entries()) {
  if (!(await el.evaluate((c) => c.classList.contains("fh-canvas")))) continue;
  let name = await el.evaluate((c, i) => (c.dataset.fhExport || c.id || `canvas-${String(i + 1).padStart(2, "0")}`).replace(/[^\w.-]+/g, "-"), i);
  for (let k = 2; used.has(name); k++) name = `${name}-${k}`;
  used.add(name);
  // Draw it at its real size, out of the page flow, then capture it.
  await el.evaluate((c) => { c.classList.add("fh-canvas--native"); c.style.position = "fixed"; c.style.inset = "0 auto auto 0"; c.style.zIndex = "2147483647"; });
  await el.screenshot({ path: join(out, `${name}.png`), animations: "disabled" });
  await el.evaluate((c) => { c.classList.remove("fh-canvas--native"); c.style.position = c.style.inset = c.style.zIndex = ""; });
  const { w, h } = await el.evaluate((c) => { const s = getComputedStyle(c); return { w: s.getPropertyValue("--fh-canvas-w").trim(), h: s.getPropertyValue("--fh-canvas-h").trim() }; });
  console.log(`  ${name}.png  ${Number(w) * scale} × ${Number(h) * scale}`);
  n++;
}
await browser.close();
console.log(n ? `✓ ${n} canvas${n === 1 ? "" : "es"} → ${out}` : `✗ no .fh-canvas matched "${only}"`);
process.exit(n ? 0 : 1);
