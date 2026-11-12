#!/usr/bin/env node
/**
 * firehorse-audit — is every piece of UI on the page connected to Firehorse?
 *
 *   npx firehorse-audit <page.html | folder | https://url> … [options]
 *
 * Audit what ships: built HTML files, a build folder, or a live URL (server-rendered
 * HTML; for client-rendered apps, audit the built output or a saved page).
 *
 * Every component root carries data-fh="<Index ID>" (copied Firehorse markup already
 * does). The audit reads every element that has a class and sorts it:
 *
 *   connected    a Firehorse component root tagged with a live ID whose classes agree
 *   untagged     a Firehorse component root with no data-fh. The audit names the ID
 *                from its classes (EYE-1.2) and --fix writes it in.
 *   mismatch     data-fh says one thing, the classes say another (drift)
 *   retired      data-fh uses an old ID; --fix rewrites it to the replacement
 *   unknown      data-fh names an ID the Index doesn't have
 *   local        data-fh="local:<name>": custom on purpose. Locals used on several
 *                pages are listed as candidates to become Firehorse components.
 *   unconnected  styled with custom classes, no Firehorse class, no data-fh.
 *                Make it a Firehorse component, mark it local:, or build a new one.
 *   no ID yet    a Firehorse component class the Index has no ID for: a gap in
 *                Firehorse itself, listed so it can be given one.
 *
 * Layout primitives (fh-stack, fh-grid…), utilities and component parts
 * (fh-card__title) identify themselves by class and need no tag.
 *
 * Every finding becomes an action in the report, sorted by who does it (the app or
 * Firehorse) and by priority: fix, tag, update, decide, add to Firehorse, review.
 *
 * Options
 *   --crawl <n>      for a URL: also audit up to n pages of the same site (sitemap.xml
 *                    first, then links). Sign-out and delete links are never followed.
 *   --header "K: v"  send a request header (repeatable), e.g. a session cookie for an
 *                    internal app. Sent only to the site being audited.
 *   --report md      the action report as Markdown (for people, skills and tickets)
 *   --fix            write data-fh into untagged roots and rewrite retired IDs (files only)
 *   --json           machine-readable report with findings and actions (for CI and agents)
 *   --strict         exit 1 on any unconnected, unknown or mismatched element
 *   --min <n>        exit 1 when coverage is below n percent
 *   --ignore a,b     class prefixes that aren't UI (state or JS hooks). Default: js-,is-,has-
 *   --index <path|url>  audit against this index.json, whatever the page declares
 *   --expect <key>   the design system the site should be on (from a catalog, e.g. Helm).
 *                    Used when a page declares none; a page declaring another is reported.
 *   --expect-index <path|url>  where --expect's index.json lives (default: the installed one)
 *   --limit <n>      findings shown per kind (default 12)
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "node-html-parser";

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 && args[i + 1] ? args[i + 1] : d; };
const takes = new Set(["--min", "--ignore", "--index", "--limit", "--crawl", "--header", "--report", "--expect", "--expect-index"]);
const inputs = args.filter((a, i) => !a.startsWith("--") && !takes.has(args[i - 1]));
if (!inputs.length || flag("--help")) {
  console.log(readFileSync(fileURLToPath(import.meta.url), "utf8").match(/\/\*\*([\s\S]*?)\*\//)[1].replace(/^ \* ?/gm, "").trim());
  process.exit(inputs.length ? 0 : 1);
}
const FIX = flag("--fix"), JSON_OUT = flag("--json"), STRICT = flag("--strict");
const MIN = Number(opt("--min", 0)), LIMIT = Number(opt("--limit", 12));
const IGNORE = opt("--ignore", "js-,is-,has-").split(",").map((s) => s.trim()).filter(Boolean);
const CRAWL = Math.max(1, Number(opt("--crawl", 1)) || 1), REPORT = opt("--report", "");
const HEADERS = Object.fromEntries(args.flatMap((a, i) => (a === "--header" && args[i + 1] ? [args[i + 1]] : [])).map((h) => [h.slice(0, h.indexOf(":")).trim(), h.slice(h.indexOf(":") + 1).trim()]).filter(([k]) => k));

const files = [];
const walkDir = (d) => { for (const n of readdirSync(d)) { if (n === "node_modules" || n.startsWith(".")) continue; const p = join(d, n); if (statSync(p).isDirectory()) walkDir(p); else if (/\.html?$/.test(n)) files.push(p); } };
const pages = [];
// A deployed site: the start page, then (with --crawl) more pages of the same origin.
// Headers go only to that origin; links that end a session or change data are skipped.
const UNSAFE = /sign-?out|log-?out|logoff|\/delete|\/remove|\/destroy|unsubscribe|\/api\//i;
const ASSET = /\.(png|jpe?g|gif|webp|avif|svg|ico|pdf|zip|css|js|mjs|json|xml|txt|mp[34]|woff2?|ttf)$/i;
const fetchErrors = [];
async function getHtml(url, origin) {
  const headers = { "user-agent": "firehorse-audit", ...(new URL(url).origin === origin ? HEADERS : {}) };
  const r = await fetch(url, { headers, redirect: "follow", signal: AbortSignal.timeout(20000) });
  if (new URL(r.url).origin !== origin) throw new Error(`redirected off the site to ${new URL(r.url).origin}`);
  if (!/html/.test(r.headers.get("content-type") || "")) return null;
  return { url: r.url, status: r.status, html: await r.text() };
}
async function crawl(start) {
  const origin = new URL(start).origin, norm = (u) => { const x = new URL(u, origin); x.hash = ""; return x.href; };
  const queue = [norm(start)], seen = new Set(queue), out = [];
  const enqueue = (u) => { try { const n = norm(u); if (new URL(n).origin === origin && !seen.has(n) && !UNSAFE.test(n) && !ASSET.test(new URL(n).pathname) && seen.size < CRAWL * 4) { seen.add(n); queue.push(n); } } catch {} };
  if (CRAWL > 1) {
    try { const r = await fetch(`${origin}/sitemap.xml`, { headers: HEADERS, signal: AbortSignal.timeout(10000) }); if (r.ok) for (const m of (await r.text()).matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)) enqueue(m[1]); } catch {}
  }
  while (queue.length && out.length < CRAWL) {
    const batch = queue.splice(0, Math.min(4, CRAWL - out.length));
    await Promise.all(batch.map(async (u) => {
      try {
        const page = await getHtml(u, origin);
        if (!page) return;
        out.push({ name: page.url, html: page.html, status: page.status });
        if (CRAWL > 1) for (const m of page.html.matchAll(/<a\b[^>]*\shref="([^"#][^"]*)"/g)) enqueue(m[1].replace(/&amp;/g, "&"));
      } catch (e) { fetchErrors.push({ url: u, error: e.message }); }
    }));
  }
  return out;
}
for (const inp of inputs) {
  if (/^https?:\/\//.test(inp)) {
    const got = await crawl(inp);
    if (!got.length) { console.error(`firehorse-audit: couldn't fetch ${inp}${fetchErrors.length ? `: ${fetchErrors.at(-1).error}` : ""}`); process.exitCode = 2; }
    pages.push(...got);
  } else if (existsSync(inp) && statSync(inp).isDirectory()) walkDir(inp);
  else if (existsSync(inp)) files.push(inp);
  else { console.error(`firehorse-audit: no such file ${inp}`); process.exitCode = 2; }
}
for (const f of files) { const r = relative(process.cwd(), f); pages.push({ name: r && !r.startsWith("..") ? r : f, path: f, html: readFileSync(f, "utf8") }); }


/* —— Which design system: the page says so ——
 * Every page declares the design system it's built on, so the audit (and any agent)
 * checks it against the right Index, Firehorse or the next one:
 *   <meta name="design-system" content="firehorse@1.1.0">
 *   <link rel="design-system" href="https://firehorse.dev/index.json">
 * --index overrides it. A page with no declaration is audited against the installed
 * Firehorse and reported, because the reference is what keeps the audit honest.
 */
const declOf = (html) => {
  const head = html.slice(0, Math.max(html.indexOf("</head>"), 0) || 20000);
  const attr = (tag, name) => new RegExp(`\\s${name}\\s*=\\s*"([^"]*)"`, "i").exec(tag)?.[1] ?? null;
  const meta = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]).find((t) => /name\s*=\s*"design-system"/i.test(t));
  const link = [...head.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]).find((t) => /rel\s*=\s*"[^"]*\bdesign-system\b[^"]*"/i.test(t));
  if (!meta && !link) return null;
  const [key, version] = (attr(meta ?? "", "content") ?? "").split("@").map((x) => x.trim().toLowerCase());
  return { key: key || null, version: version || null, href: link ? attr(link, "href") : null };
};
for (const page of pages) page.decl = declOf(page.html);
const declared = pages.map((p) => p.decl).find((d) => d?.key || d?.href) ?? null;
const localIndex = [join(here, "../dist/index.json"), join(process.cwd(), "node_modules/@rascode/firehorse/dist/index.json")].find(existsSync);
const readIndex = async (src) => (/^https?:\/\//.test(src) ? (await fetch(src, { signal: AbortSignal.timeout(20000) })).json() : JSON.parse(readFileSync(src, "utf8")));
const EXPECT = opt("--expect", "").toLowerCase() || null;
async function loadIndex() {
  if (opt("--index", "")) return { index: await readIndex(opt("--index", "")), source: opt("--index", "") };
  const local = localIndex ? JSON.parse(readFileSync(localIndex, "utf8")) : null;
  const localKey = local?.system?.key ?? "firehorse";
  // Nothing declared: the catalog's expectation decides, else the installed Index.
  if (!declared && EXPECT && EXPECT !== localKey) {
    const src = opt("--expect-index", "");
    if (!src) { console.error(`firehorse-audit: expected ${EXPECT} but no --expect-index to read it from`); process.exit(2); }
    try { return { index: await readIndex(src), source: src }; } catch (e) { console.error(`firehorse-audit: couldn't read ${EXPECT}'s index at ${src}: ${e.message}`); process.exit(2); }
  }
  if (declared && declared.key && declared.key !== localKey || declared && !declared.key && declared.href && local?.system?.index !== declared.href) {
    if (!declared.href) { console.error(`firehorse-audit: the page declares ${declared.key} but links no index (add <link rel="design-system" href=".../index.json">, or pass --index)`); process.exit(2); }
    const base = pages.find((p) => p.decl === declared)?.name;
    const url = new URL(declared.href, /^https?:/.test(base ?? "") ? base : undefined).href;
    try { const r = await fetch(url, { signal: AbortSignal.timeout(20000) }); return { index: await r.json(), source: url }; }
    catch (e) { console.error(`firehorse-audit: couldn't read ${declared.key ?? "the declared"} index at ${url}: ${e.message}`); process.exit(2); }
  }
  if (!local) { console.error("firehorse-audit: can't find index.json (pass --index path/to/index.json)"); process.exit(2); }
  return { index: local, source: localIndex };
}
const { index: LOADED, source: INDEX_SOURCE } = await loadIndex();

/* —— What the design system is: its Index (IDs and tagged markup), class prefix and reference attribute —— */
const INDEX = LOADED;
const SYS = { key: "firehorse", name: "Firehorse", prefix: "fh-", attribute: "data-fh", ...(INDEX.system ?? {}), version: INDEX.version };
const P = SYS.prefix, A = SYS.attribute, NAME = SYS.name;
const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const MOVED = INDEX.moved ?? {};
const LAYOUT_SECTIONS = new Set(["Layout", "Foundations"]);
const NON_ROOT = new Set(INDEX.nonRoot ?? []);
const OWNERS = INDEX.owners ?? {};
const COMPONENTS = new Set(INDEX.components ?? []);
const isBlock = (c) => c.startsWith(P) && /^[a-z0-9-]+$/.test(c.slice(P.length)) && !c.includes("--") && !c.startsWith(`${P}icon`) && !NON_ROOT.has(c);
const fhOf = (cls) => cls.filter((c) => c.startsWith(P));
// Element parts inside a component (fh-eyebrow-pill__index): they tell siblings with the same classes apart.
const partsOf = (el) => [...new Set(el.querySelectorAll("[class]").flatMap((d) => (d.getAttribute("class") || "").split(/\s+/)).filter((c) => c.startsWith(P) && c.includes("__")))];

const live = new Map();            // ID → { family, group, name }
const signatures = [];             // { id, family, group, classes, parts } from data-fh elements in the Index markup
const rootFamilies = new Map();    // block class → Set(family IDs) that use it as a component root
const selfIdentifying = new Set(); // block classes of layout and foundation families: no tag needed
for (const f of INDEX.families) {
  live.set(f.id, { family: f.id, name: f.name });
  for (const g of f.groups ?? []) live.set(g.id, { family: f.id, group: g.id, name: `${f.name} › ${g.name}` });
  for (const v of f.variants) live.set(v.id, { family: f.id, group: v.group, name: `${f.name} › ${v.name}` });
}
for (const f of INDEX.families) {
  const markups = [f.markup, ...(f.groups ?? []).map((g) => g.markup), ...f.variants.map((v) => v.markup)].filter(Boolean);
  for (const m of markups) for (const el of parse(m).querySelectorAll(`[${A}]`)) {
    const id = el.getAttribute(A), cls = fhOf((el.getAttribute("class") || "").split(/\s+/));
    const info = live.get(id) ?? { family: id.split("-")[0] };
    signatures.push({ id, family: info.family, group: info.group, classes: cls, parts: partsOf(el) });
    for (const c of cls.filter(isBlock)) {
      if (LAYOUT_SECTIONS.has(f.section)) { selfIdentifying.add(c); continue; }
      if (!rootFamilies.has(c)) rootFamilies.set(c, new Set());
      rootFamilies.get(c).add(info.family);
    }
  }
}

/** A Firehorse component class with no Index ID: not a root, not owned, not an item of a root (fh-chip of fh-chips). */
const gap = (c) => COMPONENTS.has(c) && !rootFamilies.has(c) && !OWNERS[c] && ![...rootFamilies.keys()].some((k) => k === `${c}s` || k.startsWith(`${c}-`) || c.startsWith(`${k}-`));

/** The most specific Index entries whose classes (and inner parts) this element has. */
function identify(cls, el) {
  const have = new Set(cls), parts = new Set(el ? partsOf(el) : []);
  const fits = signatures.filter((s) => s.classes.length && s.classes.every((c) => have.has(c)) && s.classes.some((c) => rootFamilies.has(c)) && (!el || s.parts.every((c) => parts.has(c))));
  if (!fits.length) return el ? identify(cls) : null;
  const score = (s) => s.classes.length * 10 + s.parts.length;
  const best = Math.max(...fits.map(score));
  const top = fits.filter((s) => score(s) === best);
  const ids = [...new Set(top.map((s) => s.id))];
  if (ids.length === 1) return { id: ids[0], sure: true, candidates: ids };
  const groups = new Set(top.map((s) => s.group ?? s.id)), fams = new Set(top.map((s) => s.family));
  if (groups.size === 1 && top[0].group) return { id: top[0].group, sure: true, candidates: ids };
  if (fams.size === 1) return { id: top[0].family, sure: true, candidates: ids };
  return { id: null, sure: false, candidates: ids };
}
const familyOf = (id) => live.get(id)?.family ?? id.split("-")[0];

/* —— Pages —— */

const SKIP = new Set(["HTML", "HEAD", "BODY", "SCRIPT", "STYLE", "TEMPLATE", "NOSCRIPT", "META", "LINK", "TITLE"]);
const findings = [];
const totals = { elements: 0, roots: 0, tagged: 0, connected: 0, unconnected: 0, local: 0, firehorse: 0 };
const locals = new Map(); // name → { count, pages:Set }
const lineOf = (html, at) => html.slice(0, at).split("\n").length;
// Where to find it on the page: a short CSS path (main > section.pricing > div.pricing-box).
const pathOf = (el) => {
  const parts = [];
  for (let e = el; e && e.rawTagName && parts.length < 4; e = e.parentNode) {
    const id = e.getAttribute?.("id"), cls = (e.getAttribute?.("class") || "").split(/\s+/).filter(Boolean)[0];
    parts.unshift(`${e.rawTagName.toLowerCase()}${id ? `#${id}` : cls ? `.${cls}` : ""}`);
    if (id || /^(body|main)$/i.test(e.rawTagName)) break;
  }
  return parts.join(" > ");
};
const short = (el) => `<${el.rawTagName}${el.getAttribute("class") ? ` class="${el.getAttribute("class")}"` : ""}${el.getAttribute(A) ? ` ${A}="${el.getAttribute(A)}"` : ""}>`;

for (const page of pages) {
  const root = parse(page.html, { comment: false, blockTextElements: { script: false, style: false, noscript: false, pre: true } });
  const edits = [];
  const add = (kind, el, extra = {}) => findings.push({ kind, page: page.name, line: lineOf(page.html, el.range?.[0] ?? 0), element: short(el), path: pathOf(el), ...extra });
  const visit = (el, ctx) => {
    if (el.nodeType !== 1) return;
    const tag = el.rawTagName?.toUpperCase();
    if (tag === "SVG") return; // icons and art: inside, not UI structure
    let next = ctx;
    if (!SKIP.has(tag)) {
      const cls = (el.getAttribute("class") || "").split(/\s+/).filter(Boolean);
      const ui = cls.filter((c) => !IGNORE.some((p) => c.startsWith(p)));
      const tagVal = el.getAttribute(A);
      const fh = fhOf(ui), custom = ui.filter((c) => !c.startsWith(P));
      const rootClasses = fh.filter((c) => rootFamilies.has(c));
      if (ui.length || tagVal) totals.elements++;
      if (tagVal && tagVal.startsWith("local:")) {
        const name = tagVal.slice(6) || "(unnamed)";
        const l = locals.get(name) ?? { count: 0, pages: new Set() }; l.count++; l.pages.add(page.name); locals.set(name, l);
        totals.local++; totals.connected++;
        next = { inside: "local" };
      } else if (tagVal) {
        const now = MOVED[tagVal];
        if (rootClasses.length) totals.roots++;
        if (now) {
          add("retired", el, { id: tagVal, fix: now });
          if (page.path && FIX) edits.push({ at: el.range[0], from: `${A}="${tagVal}"`, to: `${A}="${now}"` });
          totals.connected++; if (rootClasses.length) totals.tagged++;
        } else if (!live.has(tagVal)) {
          const seen = rootClasses.length ? identify(fh, el) : null;
          add("unknown", el, { id: tagVal, looksLike: seen?.id ?? null, hint: `Not in the ${NAME} Index.${seen?.id ? ` Its classes say ${seen.id}.` : ""} Check the ID, or use ${A}="local:<name>" for custom work.` });
        } else {
          const fam = familyOf(tagVal);
          const agrees = rootClasses.length ? rootClasses.some((c) => rootFamilies.get(c).has(fam)) : signatures.some((s) => s.family === fam && s.classes.every((c) => fh.includes(c)));
          if (!agrees) {
            const seen = identify(fh, el), fams = [...new Set(rootClasses.flatMap((c) => [...rootFamilies.get(c)]))];
            add("mismatch", el, { id: tagVal, looksLike: seen?.id ?? (fams.length === 1 ? fams[0] : fams.length ? fams : seen?.candidates ?? null) });
          }
          else { totals.connected++; if (rootClasses.length) totals.tagged++; }
        }
        next = { inside: tagVal, family: familyOf(tagVal) };
      } else if (rootClasses.length && ctx.family && rootClasses.every((c) => rootFamilies.get(c).has(ctx.family))) {
        // An item of the component it sits in (a chip in a chips list): covered by the parent's tag.
        totals.firehorse++; totals.connected++;
      } else if (rootClasses.length) {
        totals.roots++;
        let seen = identify(fh, el);
        // Candidates that all sit in one group or one family still give a sure answer at that level.
        const cands = seen?.candidates ?? [...new Set(rootClasses.flatMap((c) => [...rootFamilies.get(c)]))];
        if (!seen?.sure && cands.length) {
          const groups = new Set(cands.map((c) => live.get(c)?.group ?? c)), fams = new Set(cands.map(familyOf));
          if (groups.size === 1) seen = { id: [...groups][0], sure: true, candidates: cands };
          else if (fams.size === 1) seen = { id: [...fams][0], sure: true, candidates: cands };
        }
        if (seen?.sure) {
          add("untagged", el, { suggest: seen.id, candidates: seen.candidates });
          if (page.path && FIX) edits.push({ at: el.range[0], insert: ` ${A}="${seen.id}"`, tag: el.rawTagName });
        } else add("untagged", el, { suggest: null, candidates: seen?.candidates ?? [...new Set(rootClasses.flatMap((c) => [...rootFamilies.get(c)]))] });
        totals.connected++; // a ${NAME} component either way; the tag is what's missing
        next = { inside: "firehorse", family: seen?.id ? familyOf(seen.id) : [...rootFamilies.get(rootClasses[0])][0] };
      } else if (!ctx.family && fh.some(gap)) {
        // A Firehorse component the Index doesn't have an ID for yet: a gap in the system, not the page.
        add("no-id", el, { classes: fh.filter(gap) });
        totals.firehorse++; totals.connected++;
        next = { inside: "firehorse" };
      } else if (fh.length) {
        totals.firehorse++; totals.connected++;
        if (custom.length && ctx.inside && ctx.inside !== "unconnected" && ctx.inside !== "local") add("custom-inside", el, { classes: custom, within: ctx.inside });
      } else if (custom.length && !ctx.inside) {
        totals.unconnected++;
        add("unconnected", el, { classes: custom });
        next = { inside: "unconnected" };
      } else if (custom.length && ctx.inside && ctx.inside !== "unconnected" && ctx.inside !== "local") {
        add("custom-inside", el, { classes: custom, within: ctx.inside });
      }
    }
    for (const c of el.childNodes) visit(c, next);
  };
  for (const c of root.childNodes) visit(c, {});
  if (FIX && edits.length && page.path) {
    let out = page.html;
    for (const e of edits.sort((a, b) => b.at - a.at)) {
      if (e.insert) { const at = e.at + 1 + e.tag.length; out = out.slice(0, at) + e.insert + out.slice(at); }
      else { const end = out.indexOf(">", e.at); out = out.slice(0, e.at) + out.slice(e.at, end).replace(e.from, e.to) + out.slice(end); }
    }
    writeFileSync(page.path, out);
    page.fixed = edits.length;
  }
}

/* —— Report —— */
const count = (k) => findings.filter((f) => f.kind === k).length;
const denom = totals.connected + totals.unconnected + count("unknown") + count("mismatch");
const coverage = denom ? Math.round((totals.connected / denom) * 1000) / 10 : 100;
const taggedPct = totals.roots ? Math.round((totals.tagged / totals.roots) * 1000) / 10 : 100;
const candidates = [...locals].filter(([, l]) => l.pages.size >= 2 || l.count >= 3).sort((a, b) => b[1].count - a[1].count).map(([name, l]) => ({ name, uses: l.count, pages: l.pages.size }));
// Unconnected blocks that repeat (same classes) are the strongest case for a new component.
const repeats = new Map();
for (const f of findings.filter((x) => x.kind === "unconnected")) { const k = f.classes.join(" "); const r = repeats.get(k) ?? { classes: k, uses: 0, pages: new Set() }; r.uses++; r.pages.add(f.page); repeats.set(k, r); }
const repeated = [...repeats.values()].filter((r) => r.uses >= 2).sort((a, b) => b.uses - a.uses).map((r) => ({ ...r, pages: r.pages.size }));
const fixed = pages.reduce((n, p) => n + (p.fixed ?? 0), 0);
const report = { firehorse: INDEX.version, pages: pages.length, coverage, tagged: taggedPct, totals, counts: Object.fromEntries(["untagged", "retired", "mismatch", "unknown", "unconnected", "no-id", "custom-inside"].map((k) => [k, count(k)])), fixed, candidates, repeated, findings };

const undeclared = pages.filter((p) => !p.decl);
report.system = { key: SYS.key, name: NAME, version: INDEX.version, index: INDEX_SOURCE, declared, expected: EXPECT, pagesWithoutDeclaration: undeclared.length };
report.actions = actionsOf(report);
if (undeclared.length) report.actions.unshift({ who: "app", priority: 1, verb: "Declare", key: "declare", title: `${undeclared.length === pages.length ? "No page declares" : `${undeclared.length} of ${pages.length} pages don't declare`} the design system`, how: `Add to every page's <head>: <meta name="design-system" content="${SYS.key}@${INDEX.version}"> and <link rel="design-system" href="${SYS.index ?? "…/index.json"}">. Audits and agents read it to pick the right Index; without it this run assumed ${NAME}.`, autofix: false, count: undeclared.length, pages: undeclared.map((p) => p.name).slice(0, 50), examples: undeclared.slice(0, 5).map((p) => ({ page: p.name, line: 1, element: "<head>", path: "head" })) });
if (EXPECT && declared?.key && declared.key !== EXPECT) report.actions.unshift({ who: "app", priority: 1, verb: "Fix", key: "system-mismatch", title: `The page declares ${declared.key}; the catalog says ${EXPECT}`, how: `Either the site moved to ${declared.key} (update its surface's design system in the catalog) or the declaration is wrong (set <meta name="design-system"> to ${EXPECT}).`, autofix: false, count: 1, pages: [], examples: [] });
if (declared?.version && declared.key === SYS.key && declared.version !== INDEX.version) report.actions.push({ who: "app", priority: 2, verb: "Update", key: "version", title: `Built on ${NAME} ${declared.version}; the Index is ${INDEX.version}`, how: `Upgrade to ${NAME} ${INDEX.version} (see its changelog), then update the design-system meta. Until then some IDs may read as unknown or retired.`, autofix: false, count: 1, pages: [], examples: [] });
if (fetchErrors.length) report.fetchErrors = fetchErrors;
if (JSON_OUT) console.log(JSON.stringify(report, null, 2));
else if (REPORT === "md") console.log(markdown(report));
else {
  const tty = process.stdout.isTTY, b = (s) => (tty ? `\x1b[1m${s}\x1b[0m` : s), dim = (s) => (tty ? `\x1b[2m${s}\x1b[0m` : s);
  const out = [];
  out.push(`${b("firehorse-audit")} · ${NAME} ${INDEX.version} · ${pages.length} page${pages.length === 1 ? "" : "s"} · ${totals.elements} styled elements`);
  out.push(`  Connected ${b(coverage + "%")} · component roots tagged ${b(taggedPct + "%")} (${totals.tagged} of ${totals.roots})${totals.local ? ` · ${totals.local} local` : ""}${fixed ? ` · ${b(`fixed ${fixed}`)}` : ""}`);
  const show = (kind, title, fmt) => {
    const list = findings.filter((f) => f.kind === kind);
    if (!list.length) return;
    out.push("", `${title} (${list.length})`);
    for (const f of list.slice(0, LIMIT)) out.push(`  ${dim(`${f.page}:${f.line}`)}  ${fmt(f)}`);
    if (list.length > LIMIT) out.push(dim(`  … ${list.length - LIMIT} more (--json for all)`));
  };
  show("unknown", "✗ Unknown IDs", (f) => `${f.element}  ${dim(f.hint)}`);
  show("mismatch", "✗ Tag and classes disagree", (f) => `${f.element}  ${dim(`${f.looksLike ? `classes look like ${[].concat(f.looksLike).join(" or ")}` : `classes don't match ${f.id}`}`)}`);
  show("unconnected", `● Not connected to ${NAME}`, (f) => `${f.element}`);
  show("retired", "↻ Retired IDs", (f) => `${f.id} → ${f.fix}${FIX ? "" : dim("  (--fix)")}`);
  show("untagged", "+ Untagged component roots", (f) => `${f.element}  ${f.suggest ? `→ ${A}="${f.suggest}"${FIX ? "" : dim("  (--fix)")}` : dim(`could be ${f.candidates.join(", ")}: tag it by hand`)}`);
  const gaps = new Map(); for (const f of findings.filter((x) => x.kind === "no-id")) for (const c of f.classes) gaps.set(c, (gaps.get(c) ?? 0) + 1);
  if (gaps.size) { out.push("", `○ ${NAME} components with no Index ID yet (${gaps.size}): the system owes these an ID`); out.push("  " + [...gaps].sort((a, b) => b[1] - a[1]).map(([c, n]) => `.${c}${n > 1 ? dim(` ×${n}`) : ""}`).join("  ")); }
  if (repeated.length) { out.push("", "◆ Repeated custom blocks: candidates for a ${NAME} component"); for (const r of repeated.slice(0, LIMIT)) out.push(`  .${r.classes.split(" ").join(".")}  ${dim(`×${r.uses} on ${r.pages} page${r.pages === 1 ? "" : "s"}`)}`); }
  if (candidates.length) { out.push("", "◆ Local components used widely: candidates to upstream"); for (const c of candidates) out.push(`  local:${c.name}  ${dim(`×${c.uses} on ${c.pages} page${c.pages === 1 ? "" : "s"}`)}`); }
  const ci = count("custom-inside");
  if (ci) out.push("", dim(`${ci} element${ci === 1 ? "" : "s"} with custom classes inside ${NAME} components (customisations; --json lists them)`));
  if (!findings.length) out.push("", "Every styled element is connected to ${NAME}.");
  console.log(out.join("\n"));
}
const failed = (STRICT && (count("unconnected") || count("unknown") || count("mismatch"))) || (MIN && coverage < MIN);
if (failed) process.exitCode = 1;

/* —— Actions: every finding as something to do, so the report needs no interpretation ——
 * who: "app" (change the site's markup) or "firehorse" (change the design system).
 * priority: 1 now (wrong or broken), 2 next (unlabelled or out of date), 3 later (tidy-up).
 */
function actionsOf(r) {
  const acts = [];
  const pagesOf = (list) => [...new Set(list.map((f) => f.page))];
  const examplesOf = (list) => list.slice(0, 5).map(({ page, line, element, path }) => ({ page, line, element, path }));
  const push = (a, list) => acts.push({ ...a, count: list.length, pages: pagesOf(list), examples: examplesOf(list) });
  const group = (list, keyOf) => { const m = new Map(); for (const f of list) { const k = keyOf(f); if (!m.has(k)) m.set(k, []); m.get(k).push(f); } return [...m]; };
  const of = (k) => r.findings.filter((f) => f.kind === k);
  const famName = (id) => live.get(id)?.name ?? id;
  // A Firehorse family whose name shares a word with a custom class (pricing-box → TIR Pricing tiers).
  const words = (s) => s.toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 3);
  const famWords = INDEX.families.map((f) => ({ id: f.id, name: f.name, words: new Set(words(f.name).map((w) => w.replace(/s$/, ""))) }));
  const closest = (classes) => { const w = classes.flatMap(words).map((x) => x.replace(/s$/, "")); return famWords.find((f) => w.some((x) => f.words.has(x))) ?? null; };

  for (const [key, list] of group(of("mismatch"), (f) => `${f.id}→${[].concat(f.looksLike ?? "").join(",")}`)) {
    const f = list[0], to = typeof f.looksLike === "string" ? f.looksLike : null;
    push({ who: "app", priority: 1, verb: "Fix", key, title: `Tagged ${f.id} but built as ${to ?? "something else"}`, how: to ? `Change ${A}="${f.id}" to ${A}="${to}" (${famName(to)}), or rebuild it as ${f.id} if that was the intent.` : `The classes don't match ${f.id} (${famName(f.id)}). Rebuild it from ${f.id}'s markup, or tag it with what it is.`, autofix: false }, list);
  }
  for (const [id, list] of group(of("unknown"), (f) => f.id)) {
    const to = list[0].looksLike;
    push({ who: "app", priority: 1, verb: "Fix", key: `unknown:${id}`, title: `${id} isn't in the ${NAME} Index`, how: to ? `Use ${A}="${to}" (${famName(to)}): its classes say so.` : `Correct the ID from agent/index.md, or mark it ${A}="local:<name>" if it's custom.`, autofix: false }, list);
  }
  for (const [cls, list] of group(of("unconnected"), (f) => f.classes.join(" "))) {
    // The app's own shell (a wrapper straight under <body> on every page) is the app's call, not a component.
    if (list.every((f) => /^body(\.[^ ]+)? > [^>]+$/.test(f.path))) { push({ who: "app", priority: 3, verb: "Decide", key: `shell:${cls}`, title: `.${cls.split(" ").join(".")} wraps every page`, how: `It's the app shell. Mark it ${A}="local:shell" so audits count it as deliberate, or move its styles into the theme.`, autofix: false }, list); continue; }
    const repeated = list.length >= 2, near = closest(list[0].classes);
    const sel = `.${cls.split(" ").join(".")}`;
    if (repeated) push({ who: "system", priority: 1, verb: `Add to ${NAME}`, key: `build:${cls}`, title: `${sel} is custom and repeats ${list.length}×`, how: near ? `Check ${near.id} (${near.name}) first; if it can't do this, build ${sel} as a ${NAME} component (ID, demo, changelog, components.md) and swap it in.` : `Build it as a ${NAME} component (ID, demo, changelog, components.md), then replace these with it. Until then, tag them ${A}="local:${list[0].classes[0]}".`, autofix: false }, list);
    else push({ who: "app", priority: 2, verb: "Decide", key: `decide:${cls}`, title: `${sel} isn't connected to ${NAME}`, how: near ? `Rebuild it with ${near.id} (${near.name}), or mark it ${A}="local:${list[0].classes[0]}" if it's deliberate. Remove it if it's left over.` : `Rebuild it from a ${NAME} component, mark it ${A}="local:${list[0].classes[0]}" if it's deliberate, or remove it if it's left over.`, autofix: false }, list);
  }
  for (const [old, list] of group(of("retired"), (f) => f.id)) push({ who: "app", priority: 2, verb: "Update", key: `retired:${old}`, title: `${old} was retired`, how: `Replace ${A}="${old}" with ${A}="${list[0].fix}" (${famName(list[0].fix)}). firehorse-audit --fix does it in source files.`, autofix: true }, list);
  const sure = of("untagged").filter((f) => f.suggest), unsure = of("untagged").filter((f) => !f.suggest);
  if (sure.length) {
    const breakdown = group(sure, (f) => f.suggest).map(([id, l]) => ({ id, name: famName(id), count: l.length })).sort((x, y) => y.count - x.count);
    push({ who: "app", priority: 2, verb: "Tag", key: "tag", title: `Tag ${sure.length} component root${sure.length === 1 ? "" : "s"} with ${A} (${breakdown.length} kind${breakdown.length === 1 ? "" : "s"})`, how: `Each is a ${NAME} component without its Index ID. Add ${A}="<ID>" where the markup is rendered (once per component in a framework); firehorse-audit --fix writes them into HTML files. The breakdown lists each ID.`, autofix: true, breakdown }, sure);
  }
  if (unsure.length) {
    const breakdown = group(unsure, (f) => f.candidates.slice(0, 4).join(" or ")).map(([id, l]) => ({ id, name: "Pick one", count: l.length })).sort((x, y) => y.count - x.count);
    push({ who: "app", priority: 2, verb: "Tag", key: "choose", title: `Choose the ID for ${unsure.length} element${unsure.length === 1 ? "" : "s"} that fit more than one entry`, how: `Their classes match several Index entries. Pick the one each is (agent/index.md shows them) and add data-fh.`, autofix: false, breakdown }, unsure);
  }
  for (const [c, list] of group(of("no-id").flatMap((f) => f.classes.map((cls) => ({ ...f, cls }))), (f) => f.cls)) push({ who: "system", priority: 2, verb: `Add to ${NAME}`, key: `id:${c}`, title: `.${c} has no Index ID`, how: `It's a ${NAME} component without an ID. Give it one (or a group in its family), with a demo, changelog and components.md entry; then tag these.`, autofix: false }, list);
  for (const c of r.candidates) acts.push({ who: "system", priority: 2, verb: `Add to ${NAME}`, key: `local:${c.name}`, title: `local:${c.name} is used ${c.uses}× on ${c.pages} page${c.pages === 1 ? "" : "s"}`, how: `Promote it to a ${NAME} component, then replace the local copies.`, autofix: false, count: c.uses, pages: [], examples: [] });
  const custom = of("custom-inside");
  if (custom.length) {
    const breakdown = group(custom, (f) => f.classes[0]).map(([c, l]) => ({ id: `.${c}`, name: [...new Set(l.map((f) => (f.within === "firehorse" ? `${NAME} component` : famName(f.within))))].slice(0, 2).join(", "), count: l.length })).sort((x, y) => y.count - x.count);
    push({ who: "app", priority: 3, verb: "Review", key: "custom", title: `${breakdown.length} custom class${breakdown.length === 1 ? "" : "es"} restyle ${NAME} components`, how: `Each changes a ${NAME} component from the outside. Move look-and-feel into the theme or a ${NAME} modifier; rename pure script hooks js-… so audits skip them. The breakdown lists each class.`, autofix: false, breakdown }, custom);
  }
  const order = { app: 0, system: 1 };
  return acts.sort((a, b) => a.priority - b.priority || order[a.who] - order[b.who] || b.count - a.count);
}

function markdown(r) {
  const PRI = { 1: "Now", 2: "Next", 3: "Later" };
  const line = (a) => `- **${a.verb}: ${a.title}**${a.count > 1 ? ` (${a.count})` : ""}  \n  ${a.how}${a.breakdown ? `  \n  ${a.breakdown.slice(0, 12).map((b) => `\`${b.id}\` ×${b.count}`).join(" · ")}${a.breakdown.length > 12 ? " · …" : ""}` : ""}${a.examples.length ? `  \n  ${a.examples.slice(0, 3).map((e) => `\`${e.path || e.element}\` on ${e.page}`).join("; ")}` : ""}`;
  const out = [`# ${NAME} audit`, "", `${NAME} ${r.firehorse} · ${r.pages} page${r.pages === 1 ? "" : "s"} · connected **${r.coverage}%** · component roots tagged **${r.tagged}%**`, ""];
  for (const [who, title] of [["app", "In the app"], ["system", `In ${NAME}`]]) {
    const list = r.actions.filter((a) => a.who === who);
    if (!list.length) continue;
    out.push(`## ${title}`, "");
    for (const p of [1, 2, 3]) { const l = list.filter((a) => a.priority === p); if (l.length) out.push(`### ${PRI[p]}`, "", ...l.map(line), ""); }
  }
  if (!r.actions.length) out.push(`Nothing to do: every styled element is connected to ${NAME}.`);
  if (r.fetchErrors?.length) out.push("", `Couldn't read ${r.fetchErrors.length} page(s): ${r.fetchErrors.slice(0, 3).map((e) => `${e.url} (${e.error})`).join("; ")}`);
  return out.join("\n");
}
