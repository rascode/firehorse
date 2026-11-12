// Release manifest: release.json (repo root) decides what the public site, the Index and the agent files show.
// Every category, family, field group, field type and page has a status: live, hold or draft.
//   - Not listed means held (default deny). draft is treated like hold in the public build.
//   - A variant (or group) has its family's status unless the family lists it under "variants" ({"EYE-7.1": "hold"}).
//   - A family is public only if it is live and its category is live. tier is free or pro.
//   - A docs page is live when "pages" says so; if it is not listed, when it shows at least one public family.
// showAll (--all on the command line, or FH_RELEASE=all) builds everything, with a Held / Draft / Pro chip.
// Run: node scripts/release.mjs --check   validates release.json against the docs pages and schema/semantic-types.json
//      node scripts/release.mjs --links   fails if a link in site/dist points at a held page or a held family
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
export const STATUSES = ["live", "hold", "draft"];
export const TIERS = ["free", "pro"];
export const release = JSON.parse(readFileSync(join(root, "release.json"), "utf8"));
export const showAll = process.argv.includes("--all") || process.env.FH_RELEASE === "all";

const categories = new Map((release.categories ?? []).map((c) => [c.key, c]));
const components = new Map((release.components ?? []).map((c) => [c.id, c]));
const groups = new Map((release.fieldGroups ?? []).map((g) => [g.key, g]));
const types = new Map((release.fieldTypes ?? []).map((t) => [t.key, t]));
const pageList = new Map((release.pages ?? []).map((p) => [p.path, p]));

const familyOf = (id) => String(id).slice(0, 3);
const groupIdOf = (id) => String(id).split(".")[0];

/** An ID's own status: a variant or group listed under its family's "variants" wins, else the family's. Unlisted: hold. */
export const statusOf = (id) => {
  const c = components.get(familyOf(id));
  if (!c) return "hold";
  if (id.includes("-")) return c.variants?.[id] ?? c.variants?.[groupIdOf(id)] ?? c.status;
  return c.status;
};
/** Every family, group and variant ID release.json names. */
export const releaseIds = () => [...components.values()].flatMap((c) => [c.id, ...Object.keys(c.variants ?? {})]);
/** "free" or "pro"; an unlisted family is free. */
export const tierOf = (id) => components.get(familyOf(id))?.tier ?? "free";
/** The category an ID belongs to, or undefined. */
export const categoryOf = (id) => components.get(familyOf(id))?.category;
/** Public: the family is live, its category is live, and (for a group or variant) its own status is live. */
export const isPublic = (id) => {
  const c = components.get(familyOf(id));
  if (!c || c.status !== "live" || categories.get(c.category)?.status !== "live") return false;
  return statusOf(id) === "live";
};
/** The status the site shows for an ID: its own, or its category's when the category is not live. */
export const shownStatus = (id) => {
  const own = statusOf(id);
  if (own !== "live") return own;
  const cat = categories.get(categoryOf(id))?.status ?? "hold";
  return cat === "live" ? "live" : cat;
};

/** A page's status. famIds: the family IDs the page shows (used when the page is not listed). */
export const pageStatus = (path, famIds = []) => {
  const p = pageList.get(path);
  if (p) return p.status;
  return famIds.some((id) => isPublic(id)) ? "live" : "hold";
};
/** Is a page in the public build? With showAll every page is. */
export const isLivePage = (path, famIds = [], { public: pub = false } = {}) => (showAll && !pub) || pageStatus(path, famIds) === "live";

/** Field groups in order, each with its field types (in schema order is the caller's job; here, release.json order).
 *  live: only live groups and live types (the public build). */
export const fieldGroups = ({ live = !showAll } = {}) => [...groups.values()]
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  .filter((g) => !live || g.status === "live")
  .map((g) => ({ ...g, types: [...types.values()].filter((t) => t.group === g.key && (!live || t.status === "live")).map((t) => t.key) }));
/** A field type's status (unlisted: hold; a type in a held group is held). */
export const fieldTypeStatus = (key) => {
  const t = types.get(key);
  if (!t) return "hold";
  const g = groups.get(t.group);
  return g?.status !== "live" ? (g?.status ?? "hold") : t.status;
};
/** Live field types, in group order. */
export const liveFieldTypes = () => fieldGroups({ live: true }).flatMap((g) => g.types);

/** A release-for target (a page path like "/commerce/" or a family ID like "CUB") is held. */
export const isHeldTarget = (v) => String(v).split(/\s+/).filter(Boolean)
  .some((t) => (t.startsWith("/") ? pageStatus(t.split("#")[0]) !== "live" : !isPublic(t)));

/** The small chip the --all preview puts in a held, draft or Pro head. */
export const chip = (status, tier = "free") => {
  if (status !== "live") return `<span class="site-release-chip" data-fh-release="${status}">${status === "draft" ? "Draft" : "Held"}</span>`;
  return tier === "pro" ? `<span class="site-release-chip" data-fh-release="pro">Pro</span>` : "";
};

// HTML helpers (string based, so the source markup is kept byte for byte).
/** Every element whose opening tag matches attrRe, from its open tag to its balanced close tag. */
export const elements = (html, attrRe) => {
  const out = [];
  const openRe = /<([a-z][\w-]*)\b[^>]*>/gi;
  for (const m of html.matchAll(openRe)) {
    if (!attrRe.test(m[0])) continue;
    const tag = m[1].toLowerCase();
    const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, "gi");
    re.lastIndex = m.index + m[0].length;
    let depth = 1, end = html.length, t;
    while (depth && (t = re.exec(html))) { depth += t[1] ? -1 : t[0].endsWith("/>") ? 0 : 1; if (!depth) end = t.index + t[0].length; }
    out.push({ start: m.index, end, open: m[0], tag });
  }
  return out;
};
/** Remove the given ranges (outermost wins), with the indent and newline before each one. A range marked
 *  data-fh-release-as="text" (a link inside a sentence) leaves its content behind, unlinked. */
export const cut = (html, ranges) => {
  const outer = ranges.sort((a, b) => a.start - b.start).filter((r, i, a) => !a.slice(0, i).some((o) => o.start <= r.start && o.end >= r.end));
  let s = html;
  for (const r of outer.reverse()) {
    if (r.open && /\sdata-fh-release-as="text"/.test(r.open)) {
      s = s.slice(0, r.start) + s.slice(r.start + r.open.length, r.end).replace(new RegExp(`</${r.tag}>$`, "i"), "") + s.slice(r.end);
      continue;
    }
    let start = r.start;
    const before = s.slice(0, start).match(/\n[ \t]*$/);
    if (before) start -= before[0].length - 1;
    let end = r.end;
    if (before && s[end] === "\n") end += 1;
    s = s.slice(0, start) + s.slice(end);
  }
  return s;
};
/** Public build: drop every element marked data-fh-release-for="/page/" or ="ID" whose target is held. */
export const dropHeldLinks = (html, { public: pub = false } = {}) => (showAll && !pub ? html : cut(html, elements(html, /\sdata-fh-release-for="[^"]*"/).filter((e) => isHeldTarget(e.open.match(/data-fh-release-for="([^"]*)"/)[1]))));

const famRe = /\sdata-fh-id="([A-Z]{3}(?:-\d+(?:\.\d+)?)?)"/;
/** One page's <main> for this build. Public: held families (whole demo, with its anchor), held groups and
 *  variants and marked links go; a section left with no demos goes with its heading. showAll: everything stays,
 *  held and draft demos (and Pro ones) get data-fh-release and a chip in their head. { public: true } forces the
 *  public result whatever the flag (the agent files are always public). */
export const releaseMain = (main, { public: pub = false } = {}) => {
  const tagged = elements(main, famRe).map((e) => ({ ...e, id: e.open.match(famRe)[1] }));
  if (showAll && !pub) {
    // Point edits on the source string (attribute before the open tag's ">", chip after the head's <h3>), applied
    // from the end so nested demos keep their offsets.
    const edits = [];
    for (const e of tagged) {
      const status = shownStatus(e.id), tier = tierOf(e.id), family = !e.id.includes("-");
      if (status !== "live") edits.push({ at: e.start + e.open.length - 1, text: ` data-fh-release="${status}"` });
      if (!family || (status === "live" && tier !== "pro")) continue;
      const head = /^\s*<div class="site-demo__head">\s*<h3[^>]*>[\s\S]*?<\/h3>/.exec(main.slice(e.start + e.open.length, e.end));
      if (head) edits.push({ at: e.start + e.open.length + head[0].length, text: chip(status, tier) });
    }
    return edits.sort((a, b) => b.at - a.at).reduce((s, x) => s.slice(0, x.at) + x.text + s.slice(x.at), main);
  }
  const held = tagged.filter((e) => !isPublic(e.id));
  const links = elements(main, /\sdata-fh-release-for="[^"]*"/).filter((e) => isHeldTarget(e.open.match(/data-fh-release-for="([^"]*)"/)[1]));
  const gone = [...held, ...links];
  // Sections that had demos and have none left go whole (their heading is inside them).
  const demoRe = /\sdata-fh-id="[A-Z]{3}(?:-\d+)?"|class="site-demo\b/;
  const inside = (r, o) => r.start >= o.start && r.end <= o.end;
  for (const sec of elements(main, /^<section\b/)) {
    const demos = elements(main.slice(sec.start, sec.end), demoRe).filter((d) => d.start > 0).map((d) => ({ start: d.start + sec.start, end: d.end + sec.start }));
    if (demos.length && demos.every((d) => gone.some((g) => inside(d, g)))) gone.push(sec);
  }
  return cut(main, gone);
};

/** Family IDs a page shows (for the unlisted-page rule). */
export const familiesIn = (html) => [...new Set([...html.matchAll(/data-fh-id="([A-Z]{3})"/g)].map((m) => m[1]))];

/** The page list for this build: held pages out (public), every main released. Each page gets .release, its status. */
export const releasePages = (list, opts = {}) => list
  .filter((p) => isLivePage(p.path, familiesIn(p.main), opts))
  .map((p) => {
    // Marked links can sit in the page's raw-HTML meta too (lede, heroCta, dockCta).
    const meta = { ...p.meta };
    for (const k of ["lede", "headline", "heroCta", "dockCta", "dockBadge"]) if (typeof meta[k] === "string") meta[k] = dropHeldLinks(meta[k], opts);
    return { ...p, meta, release: pageStatus(p.path, familiesIn(p.main)), main: releaseMain(p.main, opts), after: dropHeldLinks(p.after ?? "", opts) };
  });

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const ID_RE = /^[A-Z]{3}(?:-\d+(?:\.\d+)?)?$/;

/** Every held page path: docs pages and the static site/*.html pages. */
export const heldPagePaths = (list) => {
  const statics = readdirSync(join(root, "site")).filter((f) => f.endsWith(".html") && f !== "index.html").map((f) => "/" + f);
  return [...list.map((p) => p.path), ...statics].filter((path) => pageStatus(path, familiesIn(list.find((p) => p.path === path)?.main ?? "")) !== "live");
};

/** Links in a built site that point at a held page, at a held family's ID (#CUB, #CUB-1.2) or at the anchor a held
 *  family's demo has in the full build (#c-cubes) when the public page has no such id. */
export const heldLinks = async (dir = join(root, "site/dist")) => {
  const { pages, assemble } = await import("./pages.mjs");
  const list = pages();
  const known = new Set(list.flatMap((p) => familiesIn(p.main)));
  // Anchors as the full build gives them (anchorDemos and planChips add ids at build time).
  const full = assemble(list.map((p) => ({ ...p }))).list;
  const anchors = new Set();
  for (const p of full) for (const e of elements(p.built, famRe)) {
    const id = e.open.match(famRe)[1];
    const a = e.open.match(/\sid="([^"]+)"/)?.[1];
    if (a && !isPublic(id)) anchors.add(a);
  }
  const held = heldPagePaths(list);
  const files = walk(dir).filter((f) => f.endsWith(".html"));
  const idsIn = new Map(files.map((f) => [f, new Set([...readFileSync(f, "utf8").matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]));
  const fileOf = (from, path) => (!path ? from : join(dir, path.replace(/^\//, ""), path.endsWith("/") ? "index.html" : ""));
  const bad = [];
  for (const file of files) {
    for (const m of readFileSync(file, "utf8").matchAll(/\shref="([^"]*)"/g)) {
      const href = m[1].replace(/^https:\/\/firehorse\.dev(?=\/)/, "");
      if (/^[a-z][\w+.-]*:/i.test(href)) continue;
      const [rest, hash = ""] = href.split("#");
      const path = rest.split("?")[0];
      const where = `${relative(root, file)}: ${m[1]}`;
      if (path && held.some((h) => path === h || (h.endsWith("/") && path === h.slice(0, -1)))) { bad.push(`${where} (held page)`); continue; }
      if (!hash) continue;
      if (ID_RE.test(hash) && known.has(hash.slice(0, 3)) && !isPublic(hash)) bad.push(`${where} (held family)`);
      else if (anchors.has(hash) && !idsIn.get(fileOf(file, path))?.has(hash)) bad.push(`${where} (held family anchor)`);
    }
  }
  return [...new Set(bad)];
};

// --check
const validate = async () => {
  const errors = [];
  const { pages } = await import("./pages.mjs");
  const list = pages();
  const ids = new Set(list.flatMap((p) => [...p.main.matchAll(/data-fh-id="([A-Z]{3}(?:-\d+(?:\.\d+)?)?)"/g)].map((m) => m[1])));
  const semantic = new Set(JSON.parse(readFileSync(join(root, "schema/semantic-types.json"), "utf8")).types.map((t) => t.key));
  const statics = new Set(readdirSync(join(root, "site")).filter((f) => f.endsWith(".html") && f !== "index.html").map((f) => "/" + f));
  const paths = new Set([...list.map((p) => p.path), ...statics, "/stable/"]);
  const status = (where, s) => { if (!STATUSES.includes(s)) errors.push(`${where}: unknown status "${s}" (use ${STATUSES.join(", ")})`); };
  for (const c of categories.values()) status(`category ${c.key}`, c.status);
  for (const c of components.values()) {
    status(`component ${c.id}`, c.status);
    if (!ids.has(c.id)) errors.push(`component ${c.id}: no family ${c.id} on any docs page`);
    if (!categories.has(c.category)) errors.push(`component ${c.id}: category "${c.category}" is not listed`);
    if (c.tier && !TIERS.includes(c.tier)) errors.push(`component ${c.id}: unknown tier "${c.tier}" (use ${TIERS.join(", ")})`);
    for (const [v, s] of Object.entries(c.variants ?? {})) {
      status(`variant ${v}`, s);
      if (familyOf(v) !== c.id) errors.push(`variant ${v} is listed under ${c.id}`);
      if (!ids.has(v)) errors.push(`variant ${v}: no such ID on any docs page`);
    }
  }
  for (const g of groups.values()) status(`field group ${g.key}`, g.status);
  for (const t of types.values()) {
    status(`field type ${t.key}`, t.status);
    if (!semantic.has(t.key)) errors.push(`field type ${t.key}: not in schema/semantic-types.json`);
    if (!groups.has(t.group)) errors.push(`field type ${t.key}: group "${t.group}" is not listed`);
  }
  for (const p of pageList.values()) {
    status(`page ${p.path}`, p.status);
    if (!paths.has(p.path)) errors.push(`page ${p.path}: no such page`);
  }
  const fams = [...ids].filter((i) => !i.includes("-"));
  const livePages = [...paths].filter((path) => pageStatus(path, familiesIn(list.find((p) => p.path === path)?.main ?? "")) === "live");
  return { errors, counts: { families: fams.filter(isPublic).length, familiesAll: fams.length, unlisted: fams.filter((i) => !components.has(i)), pages: livePages.length, pagesAll: paths.size, types: liveFieldTypes().length, typesAll: types.size } };
};

// No top-level await here: pages.mjs imports this module, so it must finish evaluating before pages.mjs can load.
if (process.argv[1] === fileURLToPath(import.meta.url)) (async () => {
  if (process.argv.includes("--check")) {
    const { errors, counts: c } = await validate();
    if (errors.length) { console.error("✗ release:\n  " + errors.join("\n  ")); process.exit(1); }
    console.log(`✓ release: ${c.families}/${c.familiesAll} families public, ${c.pages}/${c.pagesAll} pages live, ${c.types}/${c.typesAll} field types live${c.unlisted.length ? `, ${c.unlisted.length} unlisted (held): ${c.unlisted.join(" ")}` : ""}`);
  }
  if (process.argv.includes("--links")) {
    if (showAll) { console.log("release: --all build, link check skipped"); return; }
    if (!existsSync(join(root, "site/dist"))) { console.error("✗ release: no site/dist (run npm run site)"); process.exit(1); }
    const bad = await heldLinks();
    if (bad.length) { console.error(`✗ release: ${bad.length} link(s) in site/dist point at held content:\n  ` + bad.join("\n  ")); process.exit(1); }
    console.log("✓ release: no link in site/dist points at a held page or family");
  }
})();
