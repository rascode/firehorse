// Specimen pages: one generated page per public component family, all with one anatomy, nothing written by hand.
//   1. Head      breadcrumb, then the name with the ID and tier beside it, then the summary (head)
//   2. Stage     one .site-stage per variant, holding only the component's markup       (stages)
//   3. Switcher  the family's groups as labelled rows of its public variants              (switcher)
//   4. Panels    Markup, Classes & tokens, Agent notes                                     (panels)
//   5. Foot      previous and next family in the category, back to the category grid    (foot)
// Built from dist/full/index.json (gen-index.mjs) and release.json (release.mjs). The address is the family's
// category page plus its name as a slug: /components/actions/button/. A category gets specimens when its
// release.json key is in SPECIMEN_CATEGORIES; its category page then shows a grid of cards instead of its demos
// (pages.mjs, categoryGrid). Without script the switcher is a list of anchors to every variant's section;
// site/specimen.js shows one variant at a time and keeps the address (#BTN-1.2) in step.
// Specimen chrome is the site-specimen block in site/site.css. The component sits in .site-stage
// (an opaque frame, fill or inline). Nothing with a site-* class goes inside a stage
// (scripts/lint-site.mjs fails the build if it does).
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { showAll, isPublic, shownStatus, tierOf, categoryOf, chip } from "./release.mjs";
import { LAYOUT, isBlock } from "./fh-tag.mjs";

/** release.json category keys whose families get specimen pages. Two live categories are not here yet:
 *  motion (its variants are data-fh-enter and scroll classes on site helper tiles, art and cards: the helper is the
 *  element that moves) and pro (TML-1.3, TML-1.4, CAL-2.1 and KEY-2.1 are whole site demos, on private pages).
 *  foundations and theming are held back too: NEU, TON, SPC, RAD and THM are token displays drawn by site helpers,
 *  so their clean markup has no fh- class and an unstyled stage. They need Firehorse-owned token specimens first. */
export const SPECIMEN_CATEGORIES = ["actions", "layout", "forms", "navigation", "overlays", "content", "data", "design-patterns"];

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const base = "https://firehorse.rascode.dev";

/** Does this family (or any ID in it) get a specimen page in some build? */
export const hasSpecimen = (id) => SPECIMEN_CATEGORIES.includes(categoryOf(String(id).slice(0, 3)));
/** A family's specimen address: its docs page plus its ID in lower case. f: { id, page }. */
// The address is the family's name, not its ID: names are unambiguous to people, search and answer engines.
export const nameSlug = (t) => t.toLowerCase().replace(/&amp;|&/g, "and").replace(/<[^>]+>/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const specimenPath = (f) => `${f.page}${nameSlug(f.name)}/`;
/** Is this ID shown in this build (public, or everything with --all)? */
const shown = (id) => showAll || isPublic(id);

const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// A root is inline only when it is one of these. Anything else (a div, a form, a list) fills the stage.
const INLINE_ROOTS = new Set(["a", "button", "span", "code", "kbd", "img", "svg", "label", "small", "strong", "b", "em", "time", "output"]);
const VOID_TAGS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
// One narrow column by nature: form fields, choices, upload, tag field, key value list, checklist.
// The stage is then at most 40rem. The component still fills that stage.
export const NARROW_STAGE = new Set(["FLD", "CHO", "UPL", "TAG", "KVL", "CKL"]);

/** The next tag, comment or null. Quotes are respected, so a ">" inside an attribute does not end the tag. */
const readTag = (s, i) => {
  if (i < 0 || i >= s.length || s[i] !== "<") return null;
  if (s.startsWith("<!--", i)) {
    const end = s.indexOf("-->", i + 4);
    return { kind: "comment", end: end < 0 ? s.length : end + 3 };
  }
  if (s.startsWith("</", i)) {
    const m = /^<\/([a-zA-Z][\w:-]*)\s*>/.exec(s.slice(i));
    return m ? { kind: "close", name: m[1].toLowerCase(), end: i + m[0].length } : null;
  }
  const name = /^<([a-zA-Z][\w:-]*)/.exec(s.slice(i));
  if (!name) return null;
  let j = i + name[0].length, quote = "";
  while (j < s.length) {
    const c = s[j];
    if (quote) { if (c === quote) quote = ""; j++; continue; }
    if (c === "\"" || c === "'") { quote = c; j++; continue; }
    if (c === ">") {
      let k = j - 1;
      while (k > i && /\s/.test(s[k])) k--;
      const tag = name[1].toLowerCase();
      return { kind: "open", name: tag, self: s[k] === "/" || VOID_TAGS.has(tag), end: j + 1 };
    }
    j++;
  }
  return null;
};

/** Tag names of the markup's root elements. A non-element root is "#text". */
export const rootTags = (markup) => {
  const tags = [];
  const s = String(markup ?? "");
  let i = 0;
  while (i < s.length) {
    while (i < s.length && /\s/.test(s[i])) i++;
    if (s.startsWith("<!--", i)) { const end = s.indexOf("-->", i + 4); i = end < 0 ? s.length : end + 3; continue; }
    if (i >= s.length) break;
    if (s[i] !== "<") {
      tags.push("#text");
      const next = s.indexOf("<", i);
      i = next < 0 ? s.length : next;
      continue;
    }
    const t = readTag(s, i);
    if (!t || t.kind === "close") break;
    if (t.kind !== "open") { i = t.end; continue; }
    tags.push(t.name);
    i = t.end;
    if (t.self) continue;
    let depth = 1;
    while (depth > 0 && i < s.length) {
      const lt = s.indexOf("<", i);
      if (lt < 0) { i = s.length; break; }
      const n = readTag(s, lt);
      if (!n) { i = lt + 1; continue; }
      if (n.kind === "open" && n.name === t.name && !n.self) depth++;
      else if (n.kind === "close" && n.name === t.name) depth--;
      i = n.end;
    }
  }
  return tags;
};

/** "inline" when every root is an inline tag, otherwise "fill". Written as data-stage. */
export const stageMode = (markup) => {
  const tags = rootTags(markup);
  return tags.length > 0 && tags.every((tag) => INLINE_ROOTS.has(tag)) ? "inline" : "fill";
};
// The same highlighter the demo Markup panels use (site/site.js), run at build time.
const highlight = (html) => esc(html).replace(/&quot;/g, '"')
  .replace(/([a-z][a-z0-9-:]*)="([^"]*)"/g, '<span class="a">$1</span>=<span class="v">"$2"</span>')
  .replace(/(&lt;\/?)([a-z0-9-]+)/g, '$1<span class="t">$2</span>');
/** An ID as an element id fragment safe in a CSS selector: BTN-1.2 → BTN-1-2. */
const key = (id) => id.replace(/\./g, "-");
const firstSentence = (t = "") => t.split(/(?<=\.)\s/)[0];

/** The Index the specimens read: every family with status and tier (gen-index.mjs). */
const readIndex = () => {
  const file = join(root, "dist/full/index.json");
  if (!existsSync(file)) return null;
  return JSON.parse(readFileSync(file, "utf8"));
};

/** A family's entries, by group: its shown variants, or a group's own markup when the group has no variants. */
export const entriesOf = (f) => f.groups.map((g) => ({
  id: g.id, name: g.name,
  items: g.variants.length
    ? g.variants.filter(shown).map((id) => f.variants.find((v) => v.id === id)).filter(Boolean)
    : g.markup && shown(g.id) ? [{ id: g.id, name: g.name, markup: g.markup, group: g.id }] : [],
})).filter((g) => g.items.length);

// Tokens: the --fh-* custom properties a family's CSS reads. Its CSS is every source file with a rule that starts
// with one of the family's component classes (button.css starts .fh-button); themes and tokens are left out.
let cssCache;
const sources = () => cssCache ??= (function walk(d) {
  return readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : n.endsWith(".css") ? [p] : []; });
})(join(root, "src")).filter((p) => !/\/src\/(tokens|themes|integrations|email)\//.test(p) && !p.endsWith("firehorse.css"))
  .map((p) => ({ file: relative(root, p).replace(/\\/g, "/"), css: readFileSync(p, "utf8").replace(/\/\*[\s\S]*?\*\//g, "") }));
export const tokensOf = (classes = []) => {
  const blocks = classes.filter((c) => isBlock(c) && !LAYOUT.has(c));
  const files = sources().filter((s) => blocks.some((b) => new RegExp(`^\\s*\\.${b}(?![\\w-])`, "m").test(s.css)));
  const tokens = [...new Set(files.flatMap((s) => [...s.css.matchAll(/var\((--fh-[\w-]+)/g)].map((m) => m[1])))].sort();
  return { files: files.map((s) => s.file), tokens };
};

// Agent notes: the family's entry in agent/components.md (### ID · Name, up to the next heading).
let agentCache;
const agentEntry = (id) => {
  agentCache ??= existsSync(join(root, "agent/components.md")) ? readFileSync(join(root, "agent/components.md"), "utf8") : "";
  const m = agentCache.match(new RegExp(`^### ${id} · [^\\n]*\\n([\\s\\S]*?)(?=^##+ |(?![\\s\\S]))`, "m"));
  return m ? m[1].trim() : "";
};
const mdToHtml = (md) => md.split(/(```html\n[\s\S]*?\n```)/).filter((s) => s.trim()).map((s) => {
  const code = s.match(/^```html\n([\s\S]*?)\n```$/);
  if (code) return `<pre class="site-pre"><code>${highlight(code[1])}</code></pre>`;
  return s.trim().split(/\n{2,}/).map((p) => `<p>${esc(p).replace(/`([^`]+)`/g, "<code>$1</code>")}</p>`).join("\n");
}).join("\n");
const askLine = (id, label) => `Use Firehorse ${id} (${label}). Look it up in ${base}/agent/index.md and copy its markup as is.`;

const crumbsOf = (list, path) => {
  const out = [];
  for (let p = list.find((x) => x.path === path); p; p = p.meta.parent ? list.find((x) => x.path === p.meta.parent) : null) out.unshift(p);
  return out;
};

/** One specimen page's <main>. f: the family from the full Index; ctx: { list, prev, next, category }. */
export const specimenMain = (f, { list, prev, next, category }) => {
  const tone = category.meta.tone ?? "accent";
  const status = shownStatus(f.id), tier = tierOf(f.id);
  const groups = entriesOf(f);
  const items = groups.flatMap((g) => g.items);
  const entries = items.length ? items : [{ id: f.id, name: f.name, markup: f.markup }];
  const crumbs = [`<li><a href="/">Firehorse</a></li>`, ...crumbsOf(list, category.path).map((p) => `<li><a href="${p.path}">${esc(p.meta.name)}</a></li>`), `<li><span aria-current="page">${esc(f.name)}</span></li>`].join("");
  const held = status !== "live" ? chip(status) : "";
  const label = (e) => e.id === f.id ? f.name : `${f.name} › ${groups.find((g) => g.items.includes(e))?.name ?? ""} › ${e.name}`.replace(/ › $/, "");
  const forAttr = (e) => items.length ? ` data-specimen-for="${e.id}"` : "";
  const releaseOf = (id) => (shownStatus(id) !== "live" ? ` data-fh-release="${shownStatus(id)}"` : "");
  const openStage = (markup) => {
    const narrow = NARROW_STAGE.has(f.id) ? ` data-stage-width="narrow"` : "";
    return `<div class="site-stage" data-stage="${stageMode(markup)}"${narrow} data-specimen-stage>`;
  };

  // 2. Stage: a figure per variant. The frame holds the component's markup and nothing else.
  const stages = entries.map((e) => `        <figure class="site-specimen__variant"${items.length ? ` id="${e.id}"` : ""}${forAttr(e)}${releaseOf(e.id)}>
          ${items.length ? `<figcaption class="site-specimen__caption"><code>${e.id}</code> ${esc(e.name)}</figcaption>` : `<figcaption class="fh-sr-only">${esc(f.name)}</figcaption>`}
          ${openStage(e.markup)}
${e.markup}
          </div>
        </figure>`).join("\n");

  // 3. Switcher: one labelled row per group, a chip per variant.
  const switcher = items.length ? `      <nav class="site-specimen__switcher" aria-label="Variants of ${esc(f.name)}" data-specimen-switcher>
${groups.map((g) => `        <div class="site-specimen__row" id="${g.id}">
          <p class="site-specimen__group"><code>${g.id}</code> ${esc(g.name)}</p>
          <div class="fh-chips fh-chips--wrap">
${g.items.map((e) => `            <a class="fh-chip fh-chip--indexed" data-tone="${tone}" href="#${e.id}" data-specimen-pick="${e.id}"${releaseOf(e.id)}><b class="fh-chip__index">${e.id}</b>${esc(e.name)}</a>`).join("\n")}
          </div>
        </div>`).join("\n")}
      </nav>
` : "";

  // 4. Panels.
  const markupPanel = entries.map((e) => `          <div class="site-specimen__source"${forAttr(e)}>
            <div class="site-specimen__source-head">${items.length ? `<p class="site-specimen__caption"><code>${e.id}</code> ${esc(e.name)}</p>` : `<p class="site-specimen__caption"><code>${f.id}</code> ${esc(f.name)}</p>`}<button class="fh-button fh-button--sm fh-button--ghost" type="button" data-copy="#src-${key(e.id)}">Copy</button></div>
            <pre class="site-pre"><code id="src-${key(e.id)}">${highlight(e.markup)}</code></pre>
          </div>`).join("\n");
  const { files, tokens } = tokensOf(f.classes);
  const list_ = (xs) => `<ul class="site-specimen__codes">${xs.map((x) => `<li><code>${esc(x)}</code></li>`).join("")}</ul>`;
  const notes = agentEntry(f.id);
  const asks = [`<p class="site-specimen__ask"><code>${esc(askLine(f.id, f.name))}</code></p>`, ...items.map((e) => `<p class="site-specimen__ask"${forAttr(e)}><code>${esc(askLine(e.id, label(e)))}</code></p>`)].join("\n            ");

  // 5. Foot.
  const foot = [
    prev ? `<a class="fh-button fh-button--sm fh-button--outline" href="${prev.path}" rel="prev"><span class="fh-roll">Previous · ${esc(prev.meta.name)}</span></a>` : "",
    `<a class="fh-action" href="${category.path}">All ${esc(category.meta.name)}</a>`,
    next ? `<a class="fh-button fh-button--sm fh-button--outline" href="${next.path}" rel="next"><span class="fh-roll">Next · ${esc(next.meta.name)}</span></a>` : "",
  ].filter(Boolean).join("\n        ");

  return `    <!-- Specimen: generated by scripts/specimen.mjs from dist/full/index.json and release.json. Do not edit. -->
    <section id="top" class="fh-section site-specimen site-specimen__head" data-tone="${tone}" aria-labelledby="specimen-title"${status !== "live" ? ` data-fh-release="${status}"` : ""}>
      <nav class="fh-breadcrumb" aria-label="Breadcrumb" data-tone="${tone}" data-schema="breadcrumb">
        <a class="fh-breadcrumb__back" href="${category.path}" aria-label="Back to ${esc(category.meta.name)}"><span class="fh-dot fh-dot--live"></span></a>
        <ol>${crumbs}</ol>
      </nav>
      <div class="site-specimen__title">
        <h1 class="fh-display" id="specimen-title">${esc(f.name)}</h1>
        <p class="site-specimen__meta"><code class="fh-chip fh-chip--plain fh-mono" id="${f.id}">${f.id}</code> <span class="fh-chip fh-chip--tone" data-tone="${tier === "pro" ? "fuchsia" : tone}" data-specimen-tier>${tier === "pro" ? "Pro" : "Free"}</span>${held}</p>
      </div>
      ${f.summary ? `<p class="fh-lede">${esc(f.summary)}</p>` : ""}
    </section>

    <section class="fh-section site-specimen site-specimen__body" data-tone="${tone}" aria-label="${esc(f.name)} specimen" data-specimen="${f.id}">
      <div class="site-specimen__stages">
${stages}
      </div>
${switcher}      <div class="site-specimen__panels">
        <section class="site-specimen__panel" aria-labelledby="panel-markup" data-specimen-panel="markup">
          <h2 class="fh-subheading" id="panel-markup">Markup</h2>
${markupPanel}
        </section>
        <section class="site-specimen__panel" aria-labelledby="panel-classes" data-specimen-panel="classes">
          <h2 class="fh-subheading" id="panel-classes">Classes &amp; tokens</h2>
          <p class="fh-small fh-muted">Classes from the Firehorse Index.</p>
          ${list_(f.classes ?? [])}
          <p class="fh-small fh-muted">Custom properties its CSS reads${files.length ? `, from ${files.map((x) => `<code>${x}</code>`).join(", ")}` : ""}.</p>
          ${tokens.length ? list_(tokens) : `<p class="fh-small">None found in <code>src</code>.</p>`}
        </section>
        <section class="site-specimen__panel" aria-labelledby="panel-agent" data-specimen-panel="agent">
          <h2 class="fh-subheading" id="panel-agent">Agent notes</h2>
          <div class="fh-prose site-specimen__notes">
            ${notes ? mdToHtml(notes) : `<p>No entry in <code>agent/components.md</code> for ${f.id} in this build.</p>`}
          </div>
          <p class="fh-small fh-muted">To ask an agent for it by ID:</p>
            ${asks}
        </section>
      </div>
    </section>

    <nav class="fh-section site-specimen site-specimen__foot" data-tone="${tone}" aria-label="More in ${esc(category.meta.name)}">
      <div class="fh-cluster fh-cluster--between">
        ${foot}
      </div>
    </nav>`;
};

/** The families of one docs page that get specimens in this build, in Index order. */
const familiesFor = (index, path) => index.families.filter((f) => f.page === path && hasSpecimen(f.id) && shown(f.id));

/** The page list with specimen pages after their category page. A category page whose every family has a
 *  specimen gets .specimenGrid (its specimens, in order); pages.mjs then shows the grid in place of its demos. */
export const withSpecimens = (list) => {
  const index = readIndex();
  if (!index) return list;
  const out = [];
  // An address belongs to one family (and to no docs page): two families whose names slug alike fail the build.
  const taken = new Map(list.map((p) => [p.path, `the page ${p.path}`]));
  for (const p of list) {
    out.push(p);
    const fams = familiesFor(index, p.path);
    if (!fams.length) continue;
    const specs = fams.map((f) => {
      const path = specimenPath(f);
      if (taken.has(path)) throw new Error(`specimen: ${f.id} (${f.name}) and ${taken.get(path)} share the address ${path}`);
      taken.set(path, `${f.id} (${f.name})`);
      return {
        file: null, rel: null, path, out: path.slice(1) + "index.html",
        meta: { path, name: f.name, parent: p.path, tone: p.meta.tone, icon: p.meta.icon, order: p.meta.order,
          title: `${f.name} (${f.id}) · ${p.meta.name} · Firehorse`,
          description: firstSentence(f.summary) || `${f.name}, a Firehorse ${p.meta.name.toLowerCase()} component (${f.id}).`,
          scripts: ["/specimen.js"] },
        jsonld: "", after: "", release: shownStatus(f.id), specimen: f,
      };
    });
    specs.forEach((s, i) => { s.main = specimenMain(s.specimen, { list, prev: specs[i - 1], next: specs[i + 1], category: p }); });
    // Every family the page shows (held ones too) must have a specimen category before the page becomes a grid.
    const all = index.families.filter((f) => f.page === p.path);
    if (all.every((f) => hasSpecimen(f.id))) {
      p.specimenGrid = specs;
      p.meta = { ...p.meta, scripts: [...(p.meta.scripts ?? []), "/specimen.js"] };
    }
    out.push(...specs);
  }
  return out;
};

// Words that only name a state. They are dropped from a card preview, never from a family page.
const STATE_LABEL_TEXT = /^(?:states|morphs|opens|open|closed|hover|focus|disabled|with label|cross|arrow|spin|squeeze|minus|plus|dots|full-screen menu|side drawer|dropdown)$/i;

/** Remove elements whose only job is to name a state: a caption, a data-state-label, an fh-sr-only
 *  state name (it shows as plain text when it is not really a screen-reader label), or a text node
 *  sitting outside the control. */
const dropStateLabels = (markup) => String(markup)
  .replace(/<figcaption\b[^>]*>[\s\S]*?<\/figcaption>/gi, "")
  .replace(/<([a-z][\w:-]*)\b[^>]*\bdata-state-label\b[^>]*>[\s\S]*?<\/\1>/gi, "")
  .replace(/<([a-z][\w:-]*)\b[^>]*\bfh-sr-only\b[^>]*>([\s\S]*?)<\/\1>/gi, (all, _tag, text) => STATE_LABEL_TEXT.test(text.replace(/<[^>]+>/g, "").trim()) ? "" : all)
  .replace(/(^|>)([^<]+)(?=<|$)/g, (all, edge, text) => STATE_LABEL_TEXT.test(text.trim()) ? edge : all);

/** The closed control: the first button that is not an open state, after state labels are gone.
 *  Later buttons in these families are other states or items inside an open menu. */
const closedControl = (markup) => {
  const cleaned = dropStateLabels(markup);
  const buttons = [...cleaned.matchAll(/<button\b[^>]*>[\s\S]*?<\/button>/gi)];
  const closed = buttons.find((m) => !/\bfh-[\w-]*--open\b/.test(m[0]) && !/\baria-expanded="true"/.test(m[0]));
  return (closed ? closed[0] : cleaned).trim();
};

/** DRW opens on :popover-open (src/components/navigation/drawer.css). A card cannot show that
 *  pseudo-class, and there is no open class. Mark the popover open and set the same open look,
 *  in the card instead of the viewport. The user agent hides a closed popover. */
const openDrawer = (markup) => markup.replace(/<(div|dialog)(\s[^>]*\bpopover\b[^>]*)>/, (full, tag, attrs) => {
  if (!/\bfh-drawer\b/.test(attrs)) return full;
  let next = /\sopen(?:[\s=]|$)/.test(attrs) ? attrs : `${attrs} open`;
  const shown = "position: relative; inset: auto; display: block; opacity: 1; translate: 0 0;";
  next = /\sstyle="/.test(next) ? next.replace(/\sstyle="/, ` style="${shown} `) : `${next} style="${shown}"`;
  return `<${tag}${next}>`;
});

/** Family code to card-preview markup. Absent codes use the family markup unchanged. */
const CARD_PREVIEW = { DRW: openDrawer, BRG: closedControl, DRP: closedControl };

/** The category grid: the page's hero stays; one Explore card per specimen (the Components hub card) with ID,
 *  name, summary, a small live preview from the family's clean markup (CARD_PREVIEW when the card
 *  must differ), and the link. Old addresses (#BTN, #c-button, #BTN-1.2) go to the specimen:
 *  site/specimen.js reads the map, noscript lists the links. */
export const categoryGrid = (p, redirects) => {
  const tone = p.meta.tone ?? "accent";
  const cards = p.specimenGrid.map((s) => {
    const f = s.specimen, st = shownStatus(f.id);
    const n = entriesOf(f), vs = n.reduce((t, g) => t + g.items.length, 0);
    const meta = [n.length ? `${n.length} group${n.length > 1 ? "s" : ""}` : "", vs ? `${vs} variant${vs > 1 ? "s" : ""}` : ""].filter(Boolean).join(" · ") || "One component";
    const preview = CARD_PREVIEW[f.id] ? CARD_PREVIEW[f.id](f.markup) : f.markup;
    return `        <article class="fh-card" data-tone="${tone}"${st !== "live" ? ` data-fh-release="${st}"` : ""} data-specimen-card="${f.id}">
          <div class="site-stage site-stage--card" data-stage="${stageMode(f.markup)}" inert aria-hidden="true">
${preview}
          </div>
          <p class="fh-card__meta">${meta}${chip(st, tierOf(f.id))}</p>
          <h3 class="fh-card__title"><a href="${s.path}">${esc(f.name)}</a></h3>
          <p class="fh-card__body">${esc(firstSentence(f.summary))}</p>
          <footer class="fh-card__footer"><ul class="fh-cubes"><li><b class="fh-cube fh-cube--sm">${f.id}</b></li></ul></footer>
        </article>`;
  }).join("\n");
  const map = JSON.stringify(Object.fromEntries([...redirects].sort()));
  return `    <section id="families" class="fh-section fh-section--ruled site-anchor" data-tone="${tone}" data-fh-label="Families" aria-label="${esc(p.meta.name)} families">
      <!-- Generated by scripts/specimen.mjs: one card per family, each opening its specimen page. -->
      <div class="fh-grid fh-grid--ruled fh-grid--etched site-page-cards" data-cols="3">
${cards}
      </div>
      <noscript>
        <p class="fh-small">Each family has its own page now. An old link to a demo on this page lands here; follow it on:</p>
        <ul class="site-specimen__codes">${p.specimenGrid.map((s) => `<li><a class="fh-link" href="${s.path}">${s.specimen.id} · ${esc(s.specimen.name)}</a></li>`).join("")}</ul>
      </noscript>
      <script type="application/json" id="site-specimen-map">${map.replace(/</g, "\\u003c")}</script>
    </section>`;
};

/** Old addresses on a category page that now live on a specimen: the family ID, its demo anchor, every shown
 *  group and variant ID, and each group's own anchor. Values are site paths (with a #variant when there is one). */
export const redirectsFor = (p) => {
  const out = new Map();
  for (const s of p.specimenGrid ?? []) {
    const f = s.specimen;
    out.set(f.id, s.path);
    if (f.anchor) out.set(f.anchor, s.path);
    for (const g of entriesOf(f)) {
      out.set(g.id, `${s.path}#${g.items[0].id}`);
      const anchor = f.groups.find((x) => x.id === g.id)?.anchor;
      if (anchor && anchor !== g.id && !out.has(anchor)) out.set(anchor, `${s.path}#${g.items[0].id}`);
      for (const e of g.items) out.set(e.id, `${s.path}#${e.id}`);
    }
  }
  return out;
};
