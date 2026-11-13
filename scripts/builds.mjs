// Two builds of the package (relay L2). The full build is src/firehorse.css as written; the public build keeps
// the CSS of public families only (release.json, through isPublic in release.mjs).
//   - A class is held when every family that owns or uses it in dist/full/index.json is not public. A modifier or
//     element counts its block's families too (fh-dt__toolbar follows fh-dt). A class no family names is public,
//     and so is every class only tokens, base, layout and utilities define, and the layout and text classes of
//     fh-tag.mjs (NON_ROOT).
//   - A public JS module renders classes the Index never sees (datatable.js builds the toolbar and every
//     fh-cell--<type>); RUNTIME counts them as used by the family that mounts the module.
//   - Default deny: a component or pattern file (src/components, src/patterns) none of whose classes belongs to a
//     family in the Index is left out of the public entry, so a new file cannot leak before the Index knows it.
//     A component or pattern file whose classes are all held is left out too.
//   - The public entry is src/firehorse.css with those @import lines commented out (publicEntry). It is bundled
//     from memory (bundleAsync with a resolver) and never written to disk; rules in it whose selectors name a held
//     class are stripped at bundle time (stripHeld, a lightningcss visitor).
// The source stays whole: nothing under src is split or deleted.
// The docs site loads the public CSS. Its own chrome (header, dock, search, command menu) is built from a few held
// families; siteChrome() cuts those rules out of the full build into a site-only sheet (site/dist/site-chrome.css).
// Run: node scripts/builds.mjs   prints the plan (files left out and why, rules stripped, the site chrome families)
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { bundleAsync } from "lightningcss";
import { isPublic } from "./release.mjs";
import { NON_ROOT } from "./fh-tag.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
export const ENTRY = join(root, "src/firehorse.css");
/** The public entry's file name: next to the real one so its relative @imports resolve. Never written. */
export const PUBLIC_ENTRY = join(root, "src/firehorse.public.css");
/** Integration sheets: each file is its own stylesheet (dist/<name>, dist/full/<name>), not part of the entry. */
export const INTEGRATIONS = join(root, "src/integrations");
/** Public JS modules and the family that mounts each one. */
export const RUNTIME = { "src/js/datatable.js": "DTB" };
/** The site's own chrome: the parts and scripts every docs page carries. */
export const CHROME = ["site/parts/layout.html", "site/parts/header.html", "site/parts/dock.html", "site/parts/bar.html", "site/parts/cmdk.html", "site/parts/footer.html", "site/site.js", "site/site-index.js", "scripts/pages.mjs"];

export const blockOf = (c) => c.replace(/(__|--).*$/, "");
const uncomment = (css) => css.replace(/\/\*[\s\S]*?\*\//g, "");
/** The fh- classes a stylesheet names in its selectors (an fh- class never appears in a declaration). */
export const classesIn = (css) => [...new Set([...uncomment(css).matchAll(/\.(fh-[\w-]+)/g)].map((m) => m[1]))];
/** The fh- classes a script or a part names, and the blocks it builds modifiers of at run time ("fh-cell--${…}"). */
const classesInCode = (s) => [...new Set([...s.matchAll(/\bfh-[a-z0-9]+(?:(?:__|--|-)[a-z0-9]+)*/g)].map((m) => m[0]))];
/** The fh- classes in an Index entry's markup (its class attributes). */
export const markupClasses = (html = "") => [...new Set([...html.matchAll(/\sclass="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)).filter((c) => c.startsWith("fh-")))];
const dynamicBlocks = (s) => [...new Set([...s.matchAll(/\b(fh-[a-z0-9-]+?)--\$\{/g)].map((m) => m[1]))];

/** For every class the full Index names: the families that own or use it, plus the RUNTIME ones. */
export const familiesByClass = (index) => {
  const by = new Map();
  const add = (c, f) => (by.get(c) ?? by.set(c, new Set()).get(c)).add(f);
  for (const f of index.families) {
    for (const x of [f, ...(f.variants ?? []), ...(f.groups ?? [])]) for (const c of [...(x.classes ?? []), ...(x.stageClasses ?? []), ...markupClasses(x.markup)]) add(c, f.id);
  }
  for (const [c, f] of Object.entries(index.owners ?? {})) add(c, f);
  for (const [file, fam] of Object.entries(RUNTIME)) {
    const js = readFileSync(join(root, file), "utf8");
    for (const c of [...classesInCode(js), ...dynamicBlocks(js)]) add(c, fam);
  }
  return by;
};

/** The build plan, from the full Index (dist/full/index.json by default). */
export const plan = (index = JSON.parse(readFileSync(join(root, "dist/full/index.json"), "utf8"))) => {
  const by = familiesByClass(index);
  const source = readFileSync(ENTRY, "utf8");
  const read = [...source.matchAll(/^@import\s+"([^"]+)";[^\n]*$/gm)].map((m) => {
    const file = join(dirname(ENTRY), m[1]), path = relative(root, file);
    return { line: m[0], spec: m[1], file, path, classes: classesIn(readFileSync(file, "utf8")), component: /^src\/(components|patterns)\//.test(path) };
  });
  const inComponents = new Set(read.filter((f) => f.component).flatMap((f) => f.classes));
  const foundation = new Set([...NON_ROOT, ...read.filter((f) => !f.component).flatMap((f) => f.classes).filter((c) => !inComponents.has(c))]);
  const famsOf = (c) => { const s = new Set([...(by.get(c) ?? []), ...(by.get(blockOf(c)) ?? [])]); return s.size ? s : null; };
  const isHeld = (c) => { if (foundation.has(c)) return false; const f = famsOf(c); return !!f && [...f].every((id) => !isPublic(id)); };
  const files = read.map(({ component, ...f }) => {
    const held = f.classes.filter(isHeld);
    let out = "";
    if (component && !f.classes.some(famsOf)) out = "no family in the Index";
    else if (component && held.length === f.classes.length) out = "every class held";
    return { ...f, held, out };
  });
  const heldClasses = new Set(files.flatMap((f) => f.classes).filter(isHeld));
  // Integration sheets (src/integrations, built one per file beside the core): public only when a live family uses
  // a class the sheet styles. reveal.css styles fh-canvas slides (Media, held), so it is in the full build only.
  const integrations = (existsSync(INTEGRATIONS) ? readdirSync(INTEGRATIONS) : []).filter((f) => f.endsWith(".css")).sort().map((name) => {
    const file = join(INTEGRATIONS, name), classes = classesIn(readFileSync(file, "utf8"));
    const live = classes.some((c) => [...(famsOf(c) ?? [])].some((id) => isPublic(id)));
    return { name, file, path: relative(root, file), classes, out: live ? "" : "no live family uses its classes" };
  });
  return { files, famsOf, isHeld, heldClasses, integrations, left: files.filter((f) => f.out), kept: files.filter((f) => !f.out) };
};

/** The public entry: src/firehorse.css with the left-out @import lines turned into comments. */
export const publicEntry = (p = plan()) => {
  let css = readFileSync(ENTRY, "utf8");
  for (const f of p.left) css = css.replace(f.line, `/* public build: left out (${f.out}): ${f.spec} */`);
  return css;
};

// —— Selector walking (lightningcss AST) ——
// A selector that names a held class goes. Inside :not() only the held alternatives go (".fh-x:not(.fh-held)"
// still styles .fh-x); inside :is(), :where() and :has() the held alternatives go, and the selector goes when none
// is left. A rule left with no selector goes with everything nested in it.
const LISTS = new Set(["is", "where", "has", "not", "any", "matches"]);
const mentions = (node, set) => {
  if (!node || typeof node !== "object") return false;
  if (Array.isArray(node)) return node.some((n) => mentions(n, set));
  if (node.type === "class" && set.has(node.name)) return true;
  return Object.values(node).some((n) => mentions(n, set));
};
const cleanSelector = (sel, held) => {
  const out = [];
  for (const c of sel) {
    if (c.type === "class") { if (held.has(c.name)) return null; out.push(c); continue; }
    if (c.type === "pseudo-class" && LISTS.has(c.kind) && Array.isArray(c.selectors)) {
      const list = c.selectors.map((s) => cleanSelector(s, held)).filter(Boolean);
      if (!list.length) { if (c.kind === "not") continue; return null; }
      out.push({ ...c, selectors: list });
      continue;
    }
    if (mentions(c, held)) return null;
    out.push(c);
  }
  return out;
};
/** lightningcss (1.33) hands absent options to JS as null but cannot read a null back ("failed to deserialize":
 *  var(--x) has from: null, fallback: null). A returned node must leave them out. */
export const dropNulls = (n) => {
  if (Array.isArray(n)) n.forEach(dropNulls);
  else if (n && typeof n === "object") for (const k of Object.keys(n)) n[k] === null ? delete n[k] : dropNulls(n[k]);
  return n;
};
/** A lightningcss visitor that removes every selector naming a held class. stats counts what went. */
export const stripHeld = (held, stats = { rules: 0, selectors: 0 }) => ({
  Rule: {
    style(rule) {
      const sels = rule.value.selectors;
      if (!mentions(sels, held)) return;
      const kept = sels.map((s) => cleanSelector(s, held)).filter(Boolean);
      stats.selectors += sels.length - kept.length;
      if (!kept.length) { stats.rules++; return []; }
      return dropNulls({ ...rule, value: { ...rule.value, selectors: kept } });
    },
  },
});

/** Bundle an entry held in memory (the @imports it names are read from disk). */
export const bundleFrom = async (filename, code, opts) => {
  const { code: out, warnings } = await bundleAsync({
    filename, sourceMap: false, ...opts,
    resolver: { read: (f) => (f === filename ? code : readFileSync(f, "utf8")), resolve: (spec, from) => resolve(dirname(from), spec) },
  });
  return { code: out, warnings };
};

// —— The public package (the tarball the site serves; pack-site.mjs) ——
/** Package-relative paths the public package leaves out: the full build, admin CSS and its source, the component
 *  source the public build leaves out, and each held integration sheet (its source and any dist/<name> copy). */
export const heldPackagePath = (path, p = plan()) => {
  const heldInt = p.integrations.filter((i) => i.out);
  const held = new Set([...p.left.map((f) => f.path), ...heldInt.flatMap((i) => [i.path, `dist/${i.name}`])]);
  // A folder's README goes with it when every stylesheet under the folder is left out (src/components/finance).
  const readme = /^(src\/.+)\/README\.md$/.exec(path)?.[1];
  const css = readme ? [...p.files, ...p.integrations].filter((f) => f.path.startsWith(readme + "/")) : [];
  // templates/ (the Media starters: media, slides, wallpapers) is full build only: Media is held.
  return path === "dist/full" || path.startsWith("dist/full/") || /^dist\/admin(\.min)?\.css$/.test(path)
    || path === "templates" || path.startsWith("templates/")
    || path === "src/admin" || path.startsWith("src/admin/") || held.has(path) || (css.length > 0 && css.every((f) => held.has(f.path)));
};
/** The exports map without the full build and admin entries, and without an entry whose every target is held. */
export const publicExports = (exports, p = plan()) => Object.fromEntries(Object.entries(exports).filter(([k, v]) => {
  if (/^\.\/(full|admin)/.test(k)) return false;
  const targets = (typeof v === "string" ? [v] : Object.values(v)).filter((t) => !t.includes("*"));
  return !targets.length || !targets.every((t) => heldPackagePath(t.replace(/^\.\//, ""), p));
}));

// —— The docs site's chrome sheet ——
/** Held classes the site chrome uses (a held block the chrome uses brings its modifiers and elements). */
export const chromeClasses = (p = plan()) => {
  const used = new Set(CHROME.filter((f) => existsSync(join(root, f))).flatMap((f) => classesInCode(readFileSync(join(root, f), "utf8"))));
  return new Set([...p.heldClasses].filter((c) => used.has(c) || used.has(blockOf(c))));
};
/** Keep only the rules that style a chrome class, so the sheet repeats nothing the public CSS has (a repeat loaded
 *  later would beat the public rules after it in the same layer):
 *  - a style rule keeps the selectors that name a chrome class (other held classes stripped) and everything nested
 *    in it; one that names none stays, with no declarations, only as the parent of a nested rule that does;
 *  - a grouping rule (@layer, @media, @container, @supports) stays when something in it does; @layer statements
 *    stay so the layer order matches; @keyframes, @property and the rest go.
 *  The visitor sees a parent before its children, so a kept rule marks its descendants (by source location). */
const keepOnly = (set, others) => {
  const at = (r) => { const l = r.value?.loc; return l ? `${l.source_index}:${l.line}:${l.column}` : ""; };
  const inherit = new Set();
  const markAll = (rules) => { for (const r of rules ?? []) { inherit.add(at(r)); markAll(r.value?.rules); } };
  const has = (rules) => (rules ?? []).some((r) => (r.type === "style" && mentions(r.value.selectors, set)) || has(r.value?.rules));
  const empty = { declarations: [], importantDeclarations: [] };
  // ":is(header, main, .fh-header)" → ":is(.fh-header)": the other alternatives are public rules.
  const narrow = (sel) => sel.map((c) => (c.type === "pseudo-class" && (c.kind === "is" || c.kind === "where") && mentions(c.selectors, set)
    ? { ...c, selectors: c.selectors.filter((s) => mentions(s, set)).map(narrow) } : c));
  return (rule) => {
    const kept = inherit.has(at(rule));
    if (rule.type === "layer-statement") return;
    if (rule.type === "style") {
      const sels = rule.value.selectors;
      const own = kept ? sels : sels.filter((s) => mentions(s, set)).map(narrow);
      if (own.length) {
        markAll(rule.value.rules);
        const clean = own.map((s) => cleanSelector(s, others)).filter(Boolean);
        if (!clean.length) return [];
        return JSON.stringify(clean) === JSON.stringify(sels) ? undefined : dropNulls({ ...rule, value: { ...rule.value, selectors: clean } });
      }
      return has(rule.value.rules) ? dropNulls({ ...rule, value: { ...rule.value, declarations: empty } }) : [];
    }
    if (kept) return;
    if (Array.isArray(rule.value?.rules)) return has(rule.value.rules) ? undefined : [];
    return [];
  };
};
/** The site-only sheet: the rules of the full build that style the chrome's held classes, with every other held
 *  class stripped from them. The site loads it after the public firehorse.css. */
export const siteChrome = async ({ targets, minify = true } = {}, p = plan()) => {
  const chrome = chromeClasses(p);
  const others = new Set([...p.heldClasses].filter((c) => !chrome.has(c)));
  const { code } = await bundleFrom(ENTRY, readFileSync(ENTRY, "utf8"), { targets, minify, visitor: { Rule: keepOnly(chrome, others) } });
  const families = [...new Set([...chrome].flatMap((c) => [...(p.famsOf(c) ?? [])]))].sort();
  const head = `/* Firehorse docs site chrome: rules of held families the site's header, dock, search and command menu use (${families.join(" ")}). Site only, not in the package. */\n`;
  return { code: head + code, families, classes: chrome };
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (!existsSync(join(root, "dist/full/index.json"))) { console.error("✗ builds: no dist/full/index.json (run node scripts/gen-index.mjs --dist)"); process.exit(1); }
  const p = plan();
  console.log(`public entry: ${p.kept.length}/${p.files.length} files kept, ${p.left.length} left out, ${p.heldClasses.size} held classes`);
  for (const f of p.left) console.log(`  left out ${f.path} (${f.out})`);
  for (const f of p.kept.filter((f) => f.held.length)) console.log(`  stripped in ${f.path}: ${f.held.join(" ")}`);
  for (const i of p.integrations) console.log(`  integration ${i.path}: ${i.out ? `full build only (${i.out})` : "public"}`);
  const chrome = chromeClasses(p);
  console.log(`site chrome: ${chrome.size} held classes from ${[...new Set([...chrome].flatMap((c) => [...p.famsOf(c)]))].sort().join(" ")}`);
}
