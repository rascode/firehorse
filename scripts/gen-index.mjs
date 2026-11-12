// Firehorse Index: every component family and variant on the docs site
// carries a stable ID: family "CHP", group "CHP-2", variant "CHP-2.3". This script reads them
// from every docs page (site/pages/**), validates them and writes:
//   dist/full/index.json: every family and variant, each with its release status and tier (release.json)
//   dist/index.json: the public registry, public families and variants only (shipped in the package, read by the MCP server)
//   agent/index.md: the lookup table agents read when a person names an ID (public set)
// Validation and the ledger always read every family, held or not.
// Run: node scripts/gen-index.mjs [--check|--dist]   (--check only validates, both sets; --dist writes the two
//      index.json files only, no ledger and no agent/index.md: the first step of npm run build)
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "node-html-parser";
import { allMain, pageOf } from "./pages.mjs";
import { snippet as snip, ownersOf, NON_ROOT } from "./fh-tag.mjs";
import { isPublic, shownStatus, tierOf, releaseIds } from "./release.mjs";
import { hasSpecimen, specimenPath } from "./specimen.mjs";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const base = "https://firehorse.rascode.dev";
const doc = parse(allMain());
const check = process.argv.includes("--check");
const distOnly = process.argv.includes("--dist");
const owners = ownersOf(doc);
const snippet = (el, part) => snip(el, part, owners);

const text = (el) => (el?.text ?? "").replace(/\s+/g, " ").trim();
const clean = (html) => {
  const s = html.replace(/ data-fh-(?:id|name|groups|summary)="[^"]*"/g, "").replace(/^\n+|\s+$/g, "");
  const lines = s.split("\n");
  const ind = Math.min(...lines.slice(1).filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length), Infinity);
  return [lines[0].trimStart(), ...lines.slice(1).map((l) => (Number.isFinite(ind) ? l.slice(ind) : l))].join("\n").trim();
};
const classesOf = (html) => [...new Set([...html.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)).filter((c) => /^fh-/.test(c) && !/^fh-icon--/.test(c)))];
// A demo stage without its site helpers: a site-* list of rows (site-variants, site-rows) keeps only what its
// rows show (the dd content; the dt labels are docs), an element that is also a component keeps the component's
// classes, and any other site-* element gives way to its children. The family markup the specimens stage.
const unwrapSite = (html) => {
  const doc = parse(html, { comment: true });
  const site = (n) => (n.getAttribute?.("class") || "").split(/\s+/).filter((c) => /^site-/.test(c));
  for (const n of doc.querySelectorAll("*").reverse()) {
    if (!site(n).length) continue;
    const rest = n.getAttribute("class").split(/\s+/).filter((c) => c && !/^site-/.test(c));
    if (n.rawTagName === "dl") n.replaceWith(n.querySelectorAll(":scope > div > dd, :scope > dd").map((dd) => dd.innerHTML).join("\n"));
    else if (rest.some((c) => /^fh-/.test(c))) n.setAttribute("class", rest.join(" "));
    else n.replaceWith(n.innerHTML);
  }
  return doc.toString();
};
const anchorOf = (el) => { for (let e = el; e; e = e.parentNode) if (e.getAttribute?.("id")) return e.getAttribute("id"); return ""; };
const sectionOf = (el) => { for (let e = el; e; e = e.parentNode) if (e.tagName === "SECTION" && e.getAttribute("data-fh-label")) return e.getAttribute("data-fh-label"); return ""; };


// IDs: family "EYE", group "EYE-5" (a numbered set of related variants), variant "EYE-5.2".
// Groups are named by an element carrying the group ID (a demo or a variants row), by the
// family's data-fh-groups="Lines|Shapes|…" (in number order), or, for a single group, by the family.
const ID_RE = /^([A-Z]{3})(?:-(\d+)(?:\.(\d+))?)?$/;
const byNum = (a, b) => { const x = a.split(/[-.]/).slice(1).map(Number), y = b.split(/[-.]/).slice(1).map(Number); return (x[0] ?? 0) - (y[0] ?? 0) || (x[1] ?? 0) - (y[1] ?? 0); };
const errors = [];
const families = new Map();
const all = doc.querySelectorAll("[data-fh-id]");
const seen = new Set();
for (const el of all) {
  const id = el.getAttribute("data-fh-id");
  if (seen.has(id)) errors.push(`duplicate ID ${id}`);
  seen.add(id);
  if (!ID_RE.test(id)) errors.push(`bad ID format ${id} (use ABC, ABC-1 or ABC-1.2)`);
}
const parts = (el) => ID_RE.exec(el.getAttribute("data-fh-id")) ?? [];
const headOf = (el) => el.querySelector(":scope > .site-demo__head");
const stageOf = (el) => el.querySelector(":scope > [data-demo]");
for (const el of all) {
  const [id, fid, g] = parts(el);
  if (!fid || g) continue;
  const head = headOf(el), stage = stageOf(el);
  const name = el.getAttribute("data-fh-name") || text(head?.querySelector("h3")) || id;
  const summary = el.getAttribute("data-fh-summary") || text(head?.querySelector("p")) || text(head?.querySelector("code"));
  const markup = el.tagName === "SECTION" ? "" : clean(snippet(el, stage ? "stage" : "outer"));
  const groupNames = (el.getAttribute("data-fh-groups") || "").split("|").map((s) => s.trim()).filter(Boolean);
  const page = pageOf(el);
  families.set(id, { id, name, section: sectionOf(el), anchor: anchorOf(el), page, url: hasSpecimen(id) ? base + specimenPath({ id, name, page }) : `${base}${page}#${id}`, summary, classes: classesOf(markup), markup, groups: [], variants: [], el, groupNames, groupEls: new Map() });
}
const inside = (el, host) => { for (let e = el.parentNode; e; e = e.parentNode) if (e === host) return true; return false; };
// Group elements: a demo (has its own head and stage) or a row that names a set of variants.
for (const el of all) {
  const [id, fid, g, v] = parts(el);
  if (!g || v) continue;
  const fam = families.get(fid);
  if (!fam) { errors.push(`${id} has no family ${fid}`); continue; }
  const head = headOf(el), stage = stageOf(el);
  const dt = el.querySelector(":scope > dt");
  const name = el.getAttribute("data-fh-name") || text(head?.querySelector("h3")) || (dt ? text(dt.childNodes[0]) : "") || fam.groupNames[g - 1] || id;
  const summary = el.getAttribute("data-fh-summary") || text(head?.querySelector("p")) || text(head?.querySelector("code")) || text(dt?.querySelector("code"));
  fam.groupEls.set(+g, { id, name, summary, el, demo: !!head, markup: clean(snippet(el, stage ? "stage" : "outer")) });
}
for (const el of all) {
  const [id, fid, g, v] = parts(el);
  if (!v) continue;
  const fam = families.get(fid);
  if (!fam) { errors.push(`${id} has no family ${fid}`); continue; }
  const gel = fam.groupEls.get(+g);
  if (!inside(el, gel ? gel.el : fam.el)) errors.push(`${id} is not inside ${gel ? `its group ${gel.id}` : `its family ${fam.id}`}`);
  let name = el.getAttribute("data-fh-name"), markup, config = {};
  if (el.classList.contains("site-cat")) {
    // Catalog cards: the card markup, plus the config attributes on the slide.
    markup = clean(snippet(el, ".site-cat__stage"));
    name = name || text(el.querySelector("figcaption span:last-child"));
    for (const [k, val] of Object.entries(el.attributes)) if (/^data-fh-(card|avatar|button|chip|radius|density|table|card-media|card-content)$/.test(k)) config[k] = val;
  } else {
    markup = clean(snippet(el));
    name = name || text(el) || id;
  }
  fam.variants.push({ id, group: `${fid}-${g}`, name, classes: classesOf(markup), config, markup });
}
for (const f of families.values()) {
  f.variants.sort((a, b) => byNum(a.id, b.id));
  const nums = new Set([...f.variants.map((v) => +v.group.split("-")[1]), ...f.groupEls.keys()]);
  const n = Math.max(0, ...nums);
  if (f.groupNames.length && f.groupNames.length !== n) errors.push(`${f.id}: data-fh-groups names ${f.groupNames.length} groups, the family has ${n}`);
  for (let g = 1; g <= n; g++) {
    const gid = `${f.id}-${g}`, gel = f.groupEls.get(g);
    const vs = f.variants.filter((v) => v.group === gid);
    if (!gel && !vs.length) { errors.push(`${f.id}: groups must run 1, 2, … without gaps (no ${gid})`); continue; }
    vs.forEach((v, i) => { if (v.id !== `${gid}.${i + 1}`) errors.push(`${gid}: variants must run .1, .2, … without gaps (found ${v.id})`); });
    const name = gel?.name || f.groupNames[g - 1] || (n === 1 ? f.name : "");
    if (!name) errors.push(`${gid} has no name: add data-fh-groups to ${f.id} or data-fh-name to the group`);
    const group = { id: gid, name, summary: gel?.summary || "", variants: vs.map((v) => v.id) };
    if (!vs.length) { group.markup = gel.markup; group.classes = classesOf(gel.markup); }
    if (gel) { group.anchor = anchorOf(gel.el) || gid; if (gel.demo) group.demo = true; }
    f.groups.push(group);
  }
  const leafClasses = f.groups.flatMap((g) => g.classes ?? []);
  if (f.variants.length || leafClasses.length) f.classes = [...new Set([...f.variants.flatMap((v) => v.classes), ...leafClasses])];
  // Clean family markup (stage and chrome split): the first public variant (or group with its own markup), in
  // group order; with none, the family's own stage with its site-* wrappers unwrapped.
  const entries = f.groups.flatMap((g) => (g.variants.length ? g.variants.map((vid) => f.variants.find((v) => v.id === vid)) : g.markup ? [{ id: g.id, markup: g.markup }] : []));
  const first = entries.find((e) => isPublic(e.id)) ?? entries[0];
  // stageClasses: every fh- class the family's whole docs stage uses, kept so the public CSS build (builds.mjs)
  // still counts parts of a demo that are no variant of their own (a spinner beside the meters).
  if (f.markup) f.stageClasses = classesOf(f.markup);
  if (first) f.markup = first.markup;
  else if (f.markup) { f.markup = clean(unwrapSite(f.markup)); f.classes = classesOf(f.markup); }
  delete f.el; delete f.groupNames; delete f.groupEls;
}
// Ledger: every ID ever issued. An ID may be retired, never removed or reused.
// "moved" forwards a retired ID to its replacement, so old links and old prompts still resolve.
const ledgerPath = join(root, "index-ledger.json");
let ledger = { issued: {}, retired: {}, moved: {} };
try { ledger = { moved: {}, ...JSON.parse(readFileSync(ledgerPath, "utf8")) }; } catch {}
const list = [...families.values()];
const live = new Map(list.flatMap((f) => [[f.id, f.name], ...f.groups.map((g) => [g.id, `${f.name} › ${g.name}`]), ...f.variants.map((v) => [v.id, `${f.name} › ${f.groups.find((g) => g.id === v.group)?.name} › ${v.name}`])]));
for (const id of Object.keys(ledger.issued)) if (!live.has(id) && !ledger.retired[id]) errors.push(`${id} (${ledger.issued[id]}) was issued but is gone: restore it or list it under "retired" in index-ledger.json`);
for (const id of live.keys()) if (ledger.retired[id]) errors.push(`${id} is retired and can't be reused`);
for (const [old, to] of Object.entries(ledger.moved)) { if (!ledger.retired[old]) errors.push(`moved ${old} → ${to}, but ${old} isn't retired`); if (!live.has(to)) errors.push(`moved ${old} → ${to}, but ${to} isn't live`); }
if (errors.length) { console.error("✗ index:\n  " + errors.join("\n  ")); process.exit(1); }
const nV = list.reduce((n, f) => n + f.variants.length, 0);
const nG = list.reduce((n, f) => n + f.groups.length, 0);
// Release manifest (release.json): the full Index carries each family's and variant's status and tier;
// the public Index (dist/index.json, agent/index.md) keeps public families and variants only.
for (const f of list) {
  Object.assign(f, { status: shownStatus(f.id), tier: tierOf(f.id) });
  for (const v of f.variants) Object.assign(v, { status: shownStatus(v.id), tier: tierOf(v.id) });
}
const publicList = list.filter((f) => isPublic(f.id)).map((f) => {
  const variants = f.variants.filter((v) => isPublic(v.id)).map(({ status, ...v }) => v);
  const kept = new Set(variants.map((v) => v.id));
  const groups = f.groups.filter((g) => isPublic(g.id) && (!g.variants.length || g.variants.some((id) => kept.has(id)))).map((g) => ({ ...g, variants: g.variants.filter((id) => kept.has(id)) }));
  const { status, ...rest } = f;
  return { ...rest, groups, variants };
});
const pV = publicList.reduce((n, f) => n + f.variants.length, 0);
const pG = publicList.reduce((n, f) => n + f.groups.length, 0);
const ids = new Set(list.flatMap((f) => [f.id, ...f.groups.map((g) => g.id), ...f.variants.map((v) => v.id)]));
for (const id of releaseIds()) if (!ids.has(id)) errors.push(`release.json lists ${id}, which the Index doesn't have`);
if (errors.length) { console.error("✗ index:\n  " + errors.join("\n  ")); process.exit(1); }
if (check) {
  console.log(`✓ index: ${list.length} families, ${nG} groups, ${nV} variants, IDs unique and in order`);
  console.log(`✓ index (public): ${publicList.length} families, ${pG} groups, ${pV} variants`);
  process.exit(0);
}

for (const [id, name] of live) ledger.issued[id] ??= name;
const sortIds = (o) => Object.fromEntries(Object.entries(o).sort(([a], [b]) => a.slice(0, 3).localeCompare(b.slice(0, 3)) || byNum(a, b)));
if (!distOnly) writeFileSync(ledgerPath, JSON.stringify({ note: "Every Firehorse Index ID ever issued. Never delete an entry; move retired IDs to \"retired\" with the date, and to \"moved\" when they have a replacement.", issued: sortIds(ledger.issued), retired: sortIds(ledger.retired), moved: sortIds(ledger.moved) }, null, 2) + "\n");
// Component classes the stylesheet defines: the audit flags any of them that the Index has no ID for.
const cssIn = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? cssIn(p) : n.endsWith(".css") ? [readFileSync(p, "utf8")] : []; });
const components = [...new Set(["src/components", "src/patterns"].flatMap((d) => cssIn(join(root, d))).join("\n").replace(/\/\*[\s\S]*?\*\//g, "").match(/\.fh-[a-z0-9-]+(?![\w-])/g).map((c) => c.slice(1)).filter((c) => !c.includes("--") && !/^fh-icon/.test(c) && !NON_ROOT.has(c)))].sort();
// Who this Index belongs to. Pages declare it (<meta name="design-system" content="firehorse@x.y.z">,
// <link rel="design-system" href=".../index.json">) and audits read the prefix and attribute from here,
// so the same audit works for the next design system.
const system = { key: "firehorse", name: "Firehorse", version: pkg.version, prefix: "fh-", attribute: "data-fh", site: base, index: `${base}/index.json`,
  reference: `<meta name="design-system" content="firehorse@${pkg.version}">\n<link rel="design-system" href="${base}/index.json">` };
const registry = { name: "Firehorse Index", version: pkg.version, url: `${base}/agent/index.md`, system, families: list, moved: sortIds(ledger.moved), nonRoot: [...NON_ROOT].sort(), owners, components };
mkdirSync(join(root, "dist/full"), { recursive: true });
writeFileSync(join(root, "dist/full/index.json"), JSON.stringify(registry, null, 2) + "\n");
// The public registry: classes that only held families use leave owners, components and nonRoot with them,
// and a forward survives only when its replacement is public.
const publicClasses = new Set(publicList.flatMap((f) => f.classes ?? []));
const heldOnly = new Set(list.filter((f) => !isPublic(f.id)).flatMap((f) => f.classes ?? []).filter((c) => !publicClasses.has(c)));
const keep = (c) => !heldOnly.has(c) && (!owners[c] || isPublic(owners[c]));
const publicIds = new Set(publicList.flatMap((f) => [f.id, ...f.groups.map((g) => g.id), ...f.variants.map((v) => v.id)]));
const movedPublic = Object.fromEntries(Object.entries(registry.moved).filter(([, to]) => publicIds.has(to)));
const publicRegistry = { ...registry, families: publicList, moved: movedPublic, nonRoot: registry.nonRoot.filter(keep), owners: Object.fromEntries(Object.entries(owners).filter(([c]) => keep(c))), components: components.filter(keep) };
writeFileSync(join(root, "dist/index.json"), JSON.stringify(publicRegistry, null, 2) + "\n");
if (distOnly) { console.log(`index: ${list.length} families → dist/full/index.json; public ${publicList.length} → dist/index.json`); process.exit(0); }

const esc = (s) => s.replace(/\|/g, "\\|");
let md = `# Firehorse Index

> Every Firehorse component, group and variant has a stable ID, v${pkg.version}. People
> name what they want by ID instead of describing it ("use CHP-1.3", "swap the
> pricing badge for TIR"). Look the ID up here and use the markup exactly.
> Generated from ${base}. Rules: [system.md](system.md). Full markup for each
> family: [components.md](components.md). Machine-readable: [index.json](../index.json).

## How IDs work

- A **family** ID is three letters: \`EYE\` is the eyebrow pill family.
- A **group** adds a number: \`EYE-5\` is the eyebrow pill's parts (index, segments, count).
- A **variant** adds a dot: \`EYE-5.2\` is one specific treatment in that group.
  Variants that share the number before the dot are siblings.
- IDs are stable. A retired ID is never reused; new variants take the next number
  in their group. Retired IDs that moved are listed under [Former IDs](#former-ids).
- On the site, every demo shows its ID. Click an ID to copy it with its markup.
- When a person gives you an ID, use that family, group or variant's markup and
  classes, keep its structure, and change only the content. If an ID isn't listed
  here (or under Former IDs), say so; don't guess.

## Families

| ID | Name | Section | Groups | Demo |
|---|---|---|---|---|
${publicList.map((f) => `| \`${f.id}\` | ${esc(f.name)} | ${esc(f.section)} | ${f.groups.length ? f.groups.map((g) => `${g.id.slice(4)} ${esc(g.name)}${g.variants.length ? ` (${g.variants.length})` : ""}`).join(" · ") : "—"} | [open](${f.url}) |`).join("\n")}

`;
for (const f of publicList) {
  md += `## ${f.id} · ${f.name}\n\n`;
  if (f.summary) md += `${f.summary}\n\n`;
  md += `Classes: ${f.classes.map((c) => `\`${c}\``).join(" ")}\n\n`;
  if (!f.groups.length) { md += `Markup: see [components.md](components.md) or copy from ${f.url}.\n\n`; continue; }
  for (const g of f.groups) {
    md += `### ${g.id} · ${g.name}\n\n`;
    if (g.summary) md += `${g.summary}\n\n`;
    if (g.markup) { md += "```html\n" + g.markup + "\n```\n\n"; continue; }
    for (const id of g.variants) {
      const v = f.variants.find((x) => x.id === id);
      md += `#### ${v.id} · ${v.name}\n\n`;
      const cfg = Object.entries(v.config).map(([k, val]) => `\`${k}="${val}"\``).join(" ");
      if (cfg) md += `Config on the parent: ${cfg}\n\n`;
      md += "```html\n" + v.markup + "\n```\n\n";
    }
  }
}
const moved = Object.entries(movedPublic);
if (moved.length) md += `## Former IDs\n\nIDs retired before or since release, and what replaced them. Use the new ID.\n\n| Was | Now |\n|---|---|\n${moved.map(([a, b]) => `| \`${a}\` | \`${b}\` |`).join("\n")}\n`;
writeFileSync(join(root, "agent/index.md"), md);
console.log(`index: ${list.length} families, ${nG} groups, ${nV} variants → dist/full/index.json; public ${publicList.length} families, ${pG} groups, ${pV} variants → dist/index.json, agent/index.md`);
