// Firehorse Index: every component family and variant on the docs site
// carries a stable ID (data-fh-id="CHP", "CHP-02"). This script reads them
// from every docs page (site/pages/**), validates them and writes:
//   dist/index.json   — the registry (shipped in the package)
//   agent/index.md    — the lookup table agents read when a person names an ID
// Run: node scripts/gen-index.mjs [--check]   (--check only validates)
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "node-html-parser";
import { allMain, pageOf } from "./pages.mjs";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const base = "https://firehorse.rascode.dev";
const doc = parse(allMain());
const check = process.argv.includes("--check");

const text = (el) => (el?.text ?? "").replace(/\s+/g, " ").trim();
const clean = (html) => {
  const s = html.replace(/ data-fh-(?:id|name)="[^"]*"/g, "").replace(/^\n+|\s+$/g, "");
  const lines = s.split("\n");
  const ind = Math.min(...lines.slice(1).filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length), Infinity);
  return [lines[0].trimStart(), ...lines.slice(1).map((l) => (Number.isFinite(ind) ? l.slice(ind) : l))].join("\n").trim();
};
const classesOf = (html) => [...new Set([...html.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)).filter((c) => /^fh-/.test(c) && !/^fh-icon--/.test(c)))];
const anchorOf = (el) => { for (let e = el; e; e = e.parentNode) if (e.getAttribute?.("id")) return e.getAttribute("id"); return ""; };
const sectionOf = (el) => { for (let e = el; e; e = e.parentNode) if (e.tagName === "SECTION" && e.getAttribute("data-fh-label")) return e.getAttribute("data-fh-label"); return ""; };

const errors = [];
const families = new Map();
const all = doc.querySelectorAll("[data-fh-id]");
const seen = new Set();
for (const el of all) {
  const id = el.getAttribute("data-fh-id");
  if (seen.has(id)) errors.push(`duplicate ID ${id}`);
  seen.add(id);
  if (!/^[A-Z]{3}(-\d{2})?$/.test(id)) errors.push(`bad ID format ${id} (use ABC or ABC-01)`);
}
for (const el of all) {
  const id = el.getAttribute("data-fh-id");
  if (id.includes("-")) continue;
  const head = el.querySelector(".site-demo__head");
  const stage = el.querySelector("[data-demo]");
  const name = el.getAttribute("data-fh-name") || text(head?.querySelector("h3")) || id;
  const summary = text(head?.querySelector("p")) || text(head?.querySelector("code"));
  const markup = clean(stage ? stage.innerHTML : el.outerHTML);
  families.set(id, { id, name, section: sectionOf(el), anchor: anchorOf(el), page: pageOf(el), url: `${base}${pageOf(el)}#${id}`, summary, classes: classesOf(markup), markup, variants: [], el });
}
for (const el of all) {
  const id = el.getAttribute("data-fh-id");
  if (!id.includes("-")) continue;
  const fam = families.get(id.slice(0, 3));
  if (!fam) { errors.push(`${id} has no family ${id.slice(0, 3)}`); continue; }
  let inside = false; for (let e = el.parentNode; e; e = e.parentNode) if (e === fam.el) inside = true;
  if (!inside) errors.push(`${id} is not inside its family ${fam.id}`);
  let name = el.getAttribute("data-fh-name"), markup, config = {};
  if (el.classList.contains("site-cat")) {
    // Catalog cards: the card markup, plus the config attributes on the slide.
    markup = clean(el.querySelector(".site-cat__stage").innerHTML);
    name = name || text(el.querySelector("figcaption span:last-child"));
    for (const [k, v] of Object.entries(el.attributes)) if (/^data-fh-(card|avatar|button|chip|radius|density|table|card-media)$/.test(k)) config[k] = v;
  } else {
    markup = clean(el.outerHTML);
    name = name || text(el) || id;
  }
  fam.variants.push({ id, name, classes: classesOf(markup), config, markup });
}
for (const f of families.values()) {
  if (f.variants.length) f.classes = [...new Set(f.variants.flatMap((v) => v.classes))];
  f.variants.sort((a, b) => a.id.localeCompare(b.id));
  f.variants.forEach((v, i) => { if (v.id !== `${f.id}-${String(i + 1).padStart(2, "0")}`) errors.push(`${f.id}: variants must run 01, 02, … without gaps (found ${v.id})`); });
  delete f.el;
}
// Ledger: every ID ever issued. An ID may be retired, never removed or reused.
const ledgerPath = join(root, "index-ledger.json");
let ledger = { issued: {}, retired: {} };
try { ledger = JSON.parse(readFileSync(ledgerPath, "utf8")); } catch {}
const live = new Map([...families.values()].flatMap((f) => [[f.id, f.name], ...f.variants.map((v) => [v.id, `${f.name} › ${v.name}`])]));
for (const id of Object.keys(ledger.issued)) if (!live.has(id) && !ledger.retired[id]) errors.push(`${id} (${ledger.issued[id]}) was issued but is gone: restore it or list it under "retired" in index-ledger.json`);
for (const id of live.keys()) if (ledger.retired[id]) errors.push(`${id} is retired and can't be reused`);
if (errors.length) { console.error("✗ index:\n  " + errors.join("\n  ")); process.exit(1); }
const list = [...families.values()];
const nV = list.reduce((n, f) => n + f.variants.length, 0);
if (check) { console.log(`✓ index: ${list.length} families, ${nV} variants, IDs unique and in order`); process.exit(0); }

for (const [id, name] of live) ledger.issued[id] ??= name;
writeFileSync(ledgerPath, JSON.stringify({ note: "Every Firehorse Index ID ever issued. Never delete an entry; move retired IDs to \"retired\" with the date.", issued: Object.fromEntries(Object.entries(ledger.issued).sort()), retired: ledger.retired }, null, 2) + "\n");
const registry = { name: "Firehorse Index", version: pkg.version, url: `${base}/agent/index.md`, families: list };
mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist/index.json"), JSON.stringify(registry, null, 2) + "\n");

const esc = (s) => s.replace(/\|/g, "\\|");
let md = `# Firehorse Index

> Every Firehorse component and variant has a stable ID, v${pkg.version}. People
> name what they want by ID instead of describing it ("use CHP-02", "swap the
> pricing badge for TIR"). Look the ID up here and use the markup exactly.
> Generated from ${base}. Rules: [system.md](system.md). Full markup for each
> family: [components.md](components.md). Machine-readable: [index.json](../index.json).

## How IDs work

- A **family** ID is three letters: \`CHP\` is the chip family.
- A **variant** ID adds a two-digit number: \`CHP-02\` is one specific chip treatment.
- IDs are stable. A retired ID is never reused; new variants take the next number.
- On the site, every demo shows its ID. Click an ID to copy it with its markup.
- When a person gives you an ID, use that family or variant's markup and classes,
  keep its structure, and change only the content. If an ID isn't listed here,
  say so; don't guess.

## Families

| ID | Name | Section | Variants | Demo |
|---|---|---|---|---|
${list.map((f) => `| \`${f.id}\` | ${esc(f.name)} | ${esc(f.section)} | ${f.variants.length ? `${f.variants[0].id}…${f.variants.at(-1).id}` : "—"} | [open](${f.url}) |`).join("\n")}

`;
for (const f of list) {
  md += `## ${f.id} · ${f.name}\n\n`;
  if (f.summary) md += `${f.summary}\n\n`;
  md += `Classes: ${f.classes.map((c) => `\`${c}\``).join(" ")}\n\n`;
  if (!f.variants.length) { md += `Markup: see [components.md](components.md) or copy from ${f.url}.\n\n`; continue; }
  for (const v of f.variants) {
    md += `### ${v.id} · ${v.name}\n\n`;
    const cfg = Object.entries(v.config).map(([k, val]) => `\`${k}="${val}"\``).join(" ");
    if (cfg) md += `Config on the parent: ${cfg}\n\n`;
    md += "```html\n" + v.markup + "\n```\n\n";
  }
}
writeFileSync(join(root, "agent/index.md"), md);
console.log(`index: ${list.length} families, ${nV} variants → dist/index.json, agent/index.md`);
