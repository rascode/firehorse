// Docs-site pages. Each site/pages/**/*.html file is one page:
//   <!--@meta {json}-->   path, order, name, tone, title, description, headline, lede, scripts[], heroCta (raw HTML under the lede), dockCta (raw HTML: replaces the dock's chips and Next button), dockBadge (raw HTML: replaces the dock pill's section count)
//                         panel: true → the offset panel from [data-fh-panel-start] down, with a tall footer
//                         optional: parent (hub path), hub, chips [[id, label]], labels {id: label}, aliases [old ids → this page]
//   <!--@jsonld-->        the page's JSON-LD <script> (optional)
//   <!--@main-->          everything inside <main>
//   <!--@after-->         page-only dialogs/popovers that live after the footer (optional)
// site/parts/layout.html wraps it; {{> name}} pulls in site/parts/name.html.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pagesDir = join(root, "site/pages");
const partsDir = join(root, "site/parts");

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : f.endsWith(".html") ? [p] : [];
});

const parse = (file) => {
  const src = readFileSync(file, "utf8");
  const block = (name) => {
    const m = src.match(new RegExp(`<!--@${name}-->\\n?([\\s\\S]*?)(?=\\n?<!--@|$)`));
    return m ? m[1].replace(/\n+$/, "") : "";
  };
  const meta = JSON.parse(src.match(/<!--@meta ([\s\S]*?)-->/)[1]);
  const rel = relative(pagesDir, file).replace(/\\/g, "/");
  const path = meta.path ?? "/" + rel.replace(/(^|\/)index\.html$/, "$1").replace(/\.html$/, "/");
  const out = path === "/" ? "index.html" : path.replace(/^\//, "") + "index.html";
  return { file, rel, out, path, meta, jsonld: block("jsonld"), main: block("main"), after: block("after") };
};

/** Every page, in site order (meta.order, then path). */
export const pages = () => walk(pagesDir).map(parse)
  .sort((a, b) => (a.meta.order ?? 0) - (b.meta.order ?? 0) || a.path.localeCompare(b.path));

/** All pages' <main> content in one document, each wrapped in <div data-fh-page="/path/">, for the generators. */
export const allMain = () => pages().map((p) => `<div data-fh-page="${p.path}">\n${p.main}\n</div>`).join("\n");

/** The page an element sits on (walks up to its data-fh-page wrapper). */
export const pageOf = (el) => { for (let e = el; e; e = e.parentNode) if (e.getAttribute?.("data-fh-page")) return e.getAttribute("data-fh-page"); return "/"; };

export const part = (name) => readFileSync(join(partsDir, `${name}.html`), "utf8").replace(/\n$/, "");

const escHtml = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const stripTags = (h) => h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
/** Text from markup, kept as HTML text (entities stay encoded), safe inside an attribute. */
const textOf = (h) => stripTags(h).replace(/"/g, "&quot;");
const slug = (t) => t.toLowerCase().replace(/&amp;|&/g, "and").replace(/<[^>]+>/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const pad = (n) => String(n).padStart(2, "0");
const idsIn = (h) => [...h.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
const counts = (h) => {
  const ids = [...h.matchAll(/data-fh-id="([A-Z]{3}(?:-\d{2})?)"/g)].map((m) => m[1]);
  return { families: ids.filter((i) => !i.includes("-")), variants: ids.filter((i) => i.includes("-")).length };
};

/** Give every .site-demo an anchor (id from its heading) so the dock can link to it. */
const anchorDemos = (main) => {
  const taken = new Set(idsIn(main));
  return main.replace(/<div class="site-demo\b([^"]*)"([^>]*)>([\s\S]{0,900}?<h3[^>]*>([\s\S]*?)<\/h3>)?/g, (m, cls, rest, tail, h3) => {
    if (/\sid="/.test(rest) || !h3) return m;
    let id = "c-" + slug(stripTags(h3)), i = 2;
    while (taken.has(id)) id = `c-${slug(stripTags(h3))}-${i++}`;
    taken.add(id);
    return `<div class="site-demo${/site-anchor/.test(cls) ? cls : cls + " site-anchor"}" id="${id}"${rest}>${tail ?? ""}`;
  });
};

/** The section dock's chips: every component family on the page (its Index unit), in order; a section with no
 *  families is one chip. Targets get an id if they lack one, plus page-local data-fh-label / data-fh-index for the
 *  rollover heading. A section that is split into family chips gives up its id/label (kept as data-fh-was) so the
 *  scroll spy follows its families. meta.chips [[id, label]] overrides all of this. */
const planChips = (p, main) => {
  const taken = new Set(idsIn(main));
  const uid = (base) => { let id = base, i = 2; while (taken.has(id)) id = `${base}-${i++}`; taken.add(id); return id; };
  const secRe = /<section id="([^"]+)" class="[^"]*site-anchor[^"]*"[^>]*>/g;
  const starts = [...main.matchAll(secRe)].map((m) => ({ at: m.index, tag: m[0], id: m[1] }));
  if (p.meta.chips) return { main, chips: p.meta.chips.map(([id, label]) => ({ id, label })) };
  const chips = [];
  let out = "", last = 0;
  starts.forEach((sec, k) => {
    const end = k + 1 < starts.length ? starts[k + 1].at : main.length;
    let body = main.slice(sec.at, end);
    const fams = [...body.matchAll(/<([a-z][\w-]*)\s([^>]*?)data-fh-id="([A-Z]{3})"([^>]*)>/g)];
    if (!fams.length) {
      chips.push({ id: sec.id, label: (p.meta.labels ?? {})[sec.id] ?? sec.tag.match(/data-fh-label="([^"]*)"/)?.[1] ?? sec.id, tone: sec.tag.match(/data-tone="([^"]*)"/)?.[1], tag: sec.tag });
    } else {
      body = body.replace(sec.tag, `<section ${sec.tag.replace(/^<section id="[^"]+"\s*/, "").replace(/\s*data-fh-(label|index)="[^"]*"/g, "").replace(/>$/, "")} data-fh-was="${sec.id}">`);
      const src = body;
      body = body.replace(/<([a-z][\w-]*)\s([^>]*?)data-fh-id="([A-Z]{3})"([^>]*)>/g, (m, tag, a, fid, b, at) => {
        const attrs = a + b, tail = src.slice(at + m.length, at + m.length + 700);
        const h3 = /class="site-demo\b/.test(attrs) ? tail.match(/<div class="site-demo__head"><h3[^>]*>([\s\S]*?)<\/h3>/)?.[1] : null;
        const label = (p.meta.labels ?? {})[fid] ?? attrs.match(/data-fh-name="([^"]*)"/)?.[1] ?? (h3 && stripTags(h3)) ?? fid;
        let id = attrs.match(/\bid="([^"]+)"/)?.[1];
        let open = `<${tag} ${a}data-fh-id="${fid}"${b}>`;
        if (!id) { id = uid("c-" + slug(label)); open = `<${tag} id="${id}" ${a}data-fh-id="${fid}"${b}>`; }
        chips.push({ id, label, fid, tone: attrs.match(/data-tone="([^"]+)"/)?.[1], tag: open });
        return open;
      });
    }
    out += main.slice(last, sec.at) + body;
    last = end;
  });
  out += main.slice(last);
  // page-local labels and numbers on each target's opening tag
  chips.forEach((c, i) => {
    if (!c.tag) return;
    const labelled = c.tag.replace(/\s*data-fh-(label|index)="[^"]*"/g, "").replace(/>$/, ` data-fh-label="${textOf(c.label)}" data-fh-index="${pad(i + 1)}">`);
    out = out.replace(c.tag, labelled);
  });
  return { main: out, chips };
};

/** The hero's summary strip: what's in this category, in up to four cube cards. Groups, families and
 *  variants are counted from the pages; meta.summary adds hand-checked facts ({value, label, blurb, replaces?}). */
const summary = (p, chips, kids, all) => {
  const famsOf = (x) => counts(x.main);
  const totals = all.reduce((t, x) => { const c = famsOf(x); return { f: t.f + c.families.length, v: t.v + c.variants }; }, { f: 0, v: 0 });
  const c = kids.length ? kids.reduce((t, k) => { const kc = famsOf(k); return { families: [...t.families, ...kc.families], variants: t.variants + kc.variants }; }, { families: [], variants: 0 }) : famsOf(p);
  const names = (arr) => arr.length <= 3 ? arr.join(" · ") : `${arr.slice(0, 3).join(" · ")} and ${arr.length - 3} more`;
  const example = [...(kids.length ? kids.map((k) => k.main).join("") : p.main).matchAll(/data-fh-id="([A-Z]{3}-\d{2})"/g)].map((m) => m[1])[0];
  const cells = [];
  if (kids.length) cells.push({ value: kids.length, label: "Groups", blurb: names(kids.map((k) => k.meta.name)) + "." });
  if (c.families.length) cells.push({ value: c.families.length, label: "Families", blurb: kids.length ? "Each with an Index ID and its own section." : names(chips.filter((ch) => ch.fid).map((ch) => textOf(ch.label))) + "." });
  if (c.variants) cells.push({ value: c.variants, label: "Variants", blurb: `Each has its own ID${example ? `, like ${example}` : ""}. Copy it with its markup.` });
  // an authored fact can stand in for a counted one ({replaces: "Variants"}) when it says the same thing better
  for (const x of p.meta.summary ?? []) { const i = cells.findIndex((y) => y.label === x.replaces); i >= 0 ? cells.splice(i, 1, x) : cells.push(x); }
  const fill = (v) => String(v).replace("{{FAMILIES_TOTAL}}", totals.f).replace("{{VARIANTS_TOTAL}}", totals.v);
  if (!cells.length) return "";
  return `      <ul class="fh-cube-cards site-page-summary" data-tone="${p.meta.tone ?? "accent"}" aria-label="In this category">
${cells.slice(0, 4).map((x) => `        <li class="fh-cube-card"><b class="fh-cube fh-cube--xl">${fill(x.value)}</b><div class="fh-cube-card__text"><b>${x.label}</b><small>${fill(x.blurb)}</small></div></li>`).join("\n")}
      </ul>`;
};

/** The masthead every category page opens with: breadcrumb, title, lede, counts; then the section dock. */
const pageHead = (p, chips, all) => {
  const m = p.meta, tone = m.tone ?? "accent";
  const parent = m.parent ? all.find((x) => x.path === m.parent) : null;
  const crumbs = [`<li><a href="/">Firehorse</a></li>`, parent ? `<li><a href="${parent.path}">${escHtml(parent.meta.name)}</a></li>` : "", `<li><span aria-current="page">${escHtml(m.name)}</span></li>`].filter(Boolean).join("");
  const c = counts(p.main);
  const kids = all.filter((x) => x.meta.parent === p.path);
  const order = all.filter((x) => x.path !== "/");
  const next = order[order.indexOf(p) + 1];
  const chipHtml = chips.map((ch, i) => `          <a class="fh-chip fh-chip--indexed" data-tone="${ch.tone ?? tone}" href="#${ch.id}"><b class="fh-chip__index">${ch.fid ?? pad(i + 1)}</b><span class="fh-roll">${textOf(ch.label)}</span></a>`).join("\n");
  return `    <!-- Page head and section dock: generated by scripts/pages.mjs from this page's meta and sections. -->
    <section id="top" class="fh-section site-page-hero" data-tone="${tone}" aria-labelledby="page-title">
      <div class="fh-hero">
        <nav class="fh-breadcrumb" aria-label="Breadcrumb" data-tone="${tone}" data-schema="breadcrumb">
          <a class="fh-breadcrumb__back" href="${parent ? parent.path : "/"}" aria-label="Back to ${escHtml(parent ? parent.meta.name : "Firehorse")}"><span class="fh-dot fh-dot--live"></span></a>
          <ol>${crumbs}</ol>
        </nav>
        <h1 class="fh-display" id="page-title">${m.headline ?? escHtml(m.name)}</h1>
        ${m.lede ? `<p class="fh-lede">${m.lede}</p>` : ""}
        ${m.heroCta ?? ""}
      </div>
${summary(p, chips, kids, all)}
    </section>

    <div class="fh-dock fh-frame site-page-dock" data-tone="${tone}" data-follow data-engage="#top">
      <div class="fh-dock__bar">
        <div class="fh-dock__identity">
          <p class="fh-eyebrow-pill fh-dock__heading" data-tone="${tone}"><span class="fh-dot fh-dot--live"></span><span class="fh-eyebrow-pill__seg"><span class="fh-rollover" data-fh-rollover="sections" data-fh-default="${escHtml(m.name)}" aria-live="polite"><span class="fh-rollover__item">${escHtml(m.name)}</span></span></span><span class="fh-eyebrow-pill__seg">${m.dockBadge ?? `<strong><span class="fh-rollover" data-fh-rollover="sections" data-fh-part="index" data-fh-default="${pad(chips.length)}" aria-hidden="true"><span class="fh-rollover__item">${pad(chips.length)}</span></span></strong>`}</span></p>
        </div>
${m.dockCta ? "" : `        <nav class="fh-chips" aria-label="On this page">
${chipHtml}
        </nav>
`}${m.dockCta ? `        <div class="fh-dock__actions">${m.dockCta}</div>` : next ? `        <div class="fh-dock__actions">
          <a class="fh-button fh-button--sm fh-button--outline" href="${next.path}"><span class="fh-roll">Next · ${escHtml(next.meta.name)}</span></a>
        </div>` : ""}
      </div>
      <span class="fh-dock__progress" aria-hidden="true"></span>
    </div>
`;
};

/** Cards for a set of pages: name, lede, family IDs. Fills {{GROUP_CARDS}} (hub children) and {{CATEGORY_CARDS}} (top level). */
const cards = (list) => `      <div class="fh-grid fh-grid--ruled fh-grid--etched site-page-cards" data-cols="3">
${list.map((x) => {
    const c = counts(x.main);
    const ids = c.families.slice(0, 10).map((id) => `<li><b class="fh-cube fh-cube--sm">${id}</b></li>`).join("");
    const meta = [c.families.length ? `${c.families.length} families` : "", c.variants ? `${c.variants} variants` : ""].filter(Boolean).join(" · ") || "Guide";
    return `        <article class="fh-card" data-tone="${x.meta.tone ?? "accent"}">
          <p class="fh-card__meta">${meta}</p>
          <h3 class="fh-card__title"><a href="${x.path}">${escHtml(x.meta.name)}</a></h3>
          <p class="fh-card__body">${escHtml(x.meta.description)}</p>
          ${ids ? `<footer class="fh-card__footer"><ul class="fh-cubes">${ids}</ul></footer>` : ""}
        </article>`;
  }).join("\n")}
      </div>`;


/** Site navigation, generated from the pages so it can't drift: the Docs mega, the drawer list,
 *  the footer Docs column, ⌘K pages and the home dock's category chips. */
const MEGA = [
  { title: "System", tone: "teal", paths: ["/foundations/", "/layout/", "/patterns/", "/theming/", "/agents/"] },
  { title: "Components", tone: "amber", parent: "/components/" },
  { title: "Product UI", tone: "orange", paths: ["/forms/", "/data/", "/commerce/", "/audio/"] },
  // Links can point into a page: { path, name } (the target id must exist; site.mjs --check fails on a dead #link).
  { title: "Media", tone: "fuchsia", paths: [{ path: "/media/", name: "Social & print" }, { path: "/media/#slide-layouts", name: "Slides" }] },
];
const navParts = (list) => {
  const by = (path) => list.find((x) => x.path === path);
  const top = list.filter((x) => x.path !== "/" && !x.meta.parent);
  const li = (x, pre = "") => `${pre}<li><a href="${x.path}"><span class="fh-roll">${escHtml(x.meta.name)}</span></a></li>`;
  const mega = `    <div class="fh-mega__grid">
${MEGA.map((col) => {
    const items = col.parent ? [by(col.parent), ...list.filter((x) => x.meta.parent === col.parent)] : col.paths.map((p) => (typeof p === "string" ? by(p) : { path: p.path, meta: { name: p.name } }));
    return `      <section data-tone="${col.tone}">
        <h3>${col.title}</h3>
        <ul>
${items.filter(Boolean).map((x) => li(x, "          ")).join("\n")}
        </ul>
      </section>`;
  }).join("\n")}
    </div>`;
  const docsList = top.flatMap((x) => [x, ...list.filter((k) => k.meta.parent === x.path)]).map((x) => li(x, x.meta.parent ? "        " : "        ").replace("<li>", x.meta.parent ? '<li class="site-drawer__sub">' : "<li>")).join("\n");
  const footer = top.map((x) => `<li><a href="${x.path}">${escHtml(x.meta.name)}</a></li>`).join("");
  const cmdk = [...list.filter((x) => x.path !== "/"), ...MEGA.flatMap((c) => (c.paths ?? []).filter((p) => typeof p !== "string" && p.path.includes("#")).map((p) => ({ path: p.path, meta: { name: p.name, tone: by(p.path.split("#")[0])?.meta.tone, icon: "monitor", parent: p.path.split("#")[0] } })))].map((x) => `    <a href="${x.path}" data-tone="${x.meta.tone ?? "accent"}"><span class="fh-icon-tile"><i class="fh-icon fh-icon--${x.meta.icon ?? "file-text"}" aria-hidden="true"></i></span>${escHtml(x.meta.parent ? `${by(x.meta.parent).meta.name} › ${x.meta.name}` : x.meta.name)}</a>`).join("\n");
  const chips = top.map((x, i) => `          <a class="fh-chip fh-chip--indexed" data-tone="${x.meta.tone ?? "accent"}" href="${x.path}"><b class="fh-chip__index">${pad(i + 1)}</b><span class="fh-roll">${escHtml(x.meta.name)}</span></a>`).join("\n");
  return { "{{DOCS_MEGA}}": mega, "{{DOCS_LIST}}": docsList, "{{FOOTER_DOCS}}": footer, "{{CMDK_PAGES}}": cmdk, "{{CATEGORY_CHIPS}}": chips };
};

/** Build every page's <main> (head, anchors, labels, cards) once, so links can resolve across pages. */
export const assemble = (list = pages()) => {
  for (const p of list) {
    let main = p.main;
    if (p.path !== "/") {
      main = anchorDemos(main);
      const plan = planChips(p, main);
      main = plan.main;
      const chips = plan.chips;
      main = (main.includes("{{PAGE_HEAD}}") ? main : "{{PAGE_HEAD}}\n" + main).replace("{{PAGE_HEAD}}", () => pageHead(p, chips, list));
    }
    main = main.replace("{{GROUP_CARDS}}", () => cards(list.filter((x) => x.meta.parent === p.path)))
      .replace("{{CATEGORY_CARDS}}", () => `    <section id="explore" class="fh-section fh-section--ruled site-anchor" data-tone="accent" aria-labelledby="explore-title" data-fh-label="Explore" data-fh-index="02">
      <header class="fh-section-head"><div><p class="site-chapter" data-tone="accent"><b>02</b> Explore</p><h2 id="explore-title" class="fh-heading">Everything in Firehorse, one category at a time</h2><p class="fh-lede">Good artists copy: every component here copies its markup, with its Index ID, in one click. Great artists clone: <code>git clone</code> the whole system and make it yours.</p></div></header>
${cards(list.filter((x) => x.path !== "/" && !x.meta.parent))}
    </section>`);
    p.built = main;
  }
  // where every id lives, for cross-page links and old /#hash links
  const where = new Map();
  for (const p of list) for (const id of idsIn(p.built)) if (!where.has(id)) where.set(id, p.path);
  for (const p of list) for (const m of p.built.matchAll(/data-fh-was="([^"]+)"/g)) if (!where.has(m[1])) where.set(m[1], p.path + "#");
  for (const p of list) for (const id of p.meta.aliases ?? []) if (!where.has(id)) where.set(id, p.path + "#");
  for (const p of list) for (const m of p.built.matchAll(/data-fh-id="([A-Z]{3}(?:-\d{2})?)"/g)) if (!where.has(m[1])) where.set(m[1], p.path);
  return { list, where, nav: navParts(list) };
};

/** Assemble a full page from the layout (before the build's fill/cache-bust). Same-page #links stay; others point at their page. */
export const render = (p, ctx, base = "https://firehorse.rascode.dev") => {
  const m = p.meta;
  const scripts = (m.scripts ?? []).map((s) => `<script type="module" src="${s}"></script>`).join("\n");
  const jsonld = p.jsonld || (p.path === "/" ? "" : `<script type="application/ld+json">
${JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", "@id": base + p.path, name: m.title, description: m.description, url: base + p.path, isPartOf: { "@id": base + "/#website" } }, null, 2)}
</script>`);
  let html = part("layout")
    .replace(/^<!-- Firehorse docs page layout[^\n]*\n/, "")
    .replace(/\{\{> ([\w-]+)\}\}/g, (_, n) => part(n))
    // meta.panel: the offset panel (src/patterns/panel.css) runs from [data-fh-panel-start] to the page bottom,
    // and the footer runs tall under it.
    // Every other page gets the same footer: tall, with the panel starting at the footer itself.
    .replace("{{PANEL}}", () => `  <div class="fh-panel" aria-hidden="true"></div>\n`)
    .replace('class="fh-footer fh-frame site-footer"', () => (m.panel ? 'class="fh-footer fh-footer--tall fh-frame site-footer"' : 'class="fh-footer fh-footer--tall fh-frame site-footer" data-fh-panel-start'))
    .replaceAll("{{TITLE}}", m.title)
    .replaceAll("{{DESCRIPTION}}", escHtml(m.description))
    .replaceAll("{{OG_TITLE}}", m.ogTitle ?? m.title)
    .replaceAll("{{OG_DESCRIPTION}}", escHtml(m.ogDescription ?? m.description))
    .replaceAll("{{URL}}", base + p.path)
    .replace("{{JSONLD}}", () => jsonld)
    .replace("{{MAIN}}", () => p.built ?? p.main)
    .replace("{{AFTER}}", () => p.after)
    .replace("{{SCRIPTS}}", () => scripts);
  if (ctx) {
    for (const [k, v] of Object.entries(ctx.nav)) html = html.replace(k, () => v);
    // mark where we are in the nav lists
    html = html.replace(new RegExp(`(<li(?: class="[^"]*")?><a) (href="${p.path.replace(/\//g, "\\/")}")`, "g"), '$1 aria-current="page" $2');
    const here = new Set(idsIn(html));
    html = html.replace(/href="#([^"]+)"/g, (t, id) => {
      if (here.has(id) || !ctx.where.has(id)) return t;
      const to = ctx.where.get(id);
      return to.endsWith("#") ? `href="${to.slice(0, -1)}"` : `href="${to}#${id}"`;
    });
    p.missing = [...html.matchAll(/href="#([^"]+)"/g)].map((x) => x[1]).filter((id) => !here.has(id) && !ctx.where.has(id) && !/^work/.test(id));
  }
  return html;
};

/** Root-absolute local URLs so pages work at any depth (/components/actions/). */
export const absolutize = (html) =>
  html.replace(/\b(href|src|poster|action)="(?![a-z][\w+.-]*:|\/|#|\{|\?)([^"]*)"/gi, '$1="/$2"');

// `node scripts/pages.mjs --dist` prints each built page's path (for the schema step).
if (process.argv[1] === fileURLToPath(import.meta.url) && process.argv.includes("--dist"))
  console.log(pages().map((p) => "site/dist/" + p.out).join(" "));
