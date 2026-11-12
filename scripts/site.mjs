import { gzipSync } from "node:zlib";
import { createHash } from "node:crypto";
// Builds the firehorse.rascode.dev static site into site/dist.
// Run after `npm run build`. Deploy site/dist to any static host.
import { existsSync, mkdirSync, copyFileSync, readFileSync, writeFileSync, readdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { pages, assemble, render, absolutize } from "./pages.mjs";
import { sourceFiles } from "./developer.mjs";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = process.env.FH_SITE_OUT ?? join(root, "site/dist"); // FH_SITE_OUT: build elsewhere (e.g. where site/dist can't be cleared)
rmSync(out, { recursive: true, force: true });
for (const d of ["", "themes", "agent"]) mkdirSync(join(out, d), { recursive: true });

const cp = (from, to = from) => copyFileSync(join(root, from), join(out, to));
const tokenCount = Object.keys(JSON.parse(readFileSync(join(root, "dist/tokens.json"), "utf8")).tokens).length;
const gzipKb = (gzipSync(readFileSync(join(root, "dist/firehorse.min.css"))).length / 1024).toFixed(1);
const schemaMap = JSON.parse(readFileSync(join(root, "schema/mappings.json"), "utf8"));
const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const schemaRows = schemaMap.components.map((c) =>
  `            <tr><td data-label="Component"><code>${esc(c.component)}</code></td><td data-label="Attribute"><code>${esc(c.attribute)}</code></td><td data-label="Schema.org type">${esc(c.type)}</td><td data-label="Built from">${esc(c.from)}</td></tr>`).join("\n");
// Semantic types (schema/semantic-types.json, published from the platform's devops.semantic_types): every
// type rendered as the field it becomes. Standard types go on the Forms page; vault-reference types are
// Firehorse Pro key fields and go on the Pro Keys page.
const semanticTypes = JSON.parse(readFileSync(join(root, "schema/semantic-types.json"), "utf8")).types;
const isKeyType = (t) => t.htmlInputType === "password" || /^vault:/.test(t.example ?? "");
const at = (k, v) => (v == null || v === "" ? "" : ` ${k}="${esc(v)}"`);
const slug = (k) => `st-${k.replace(/[^a-z0-9]+/gi, "-").replace(/-+$/, "")}`;
const fieldOf = (t) => {
  const id = slug(t.key);
  const gen = `<button type="button" class="fh-action fh-field__sample" data-fh-sample data-type="${esc(t.key)}" data-label="${esc(t.label)}">Generate</button>`;
  const hint = `<p class="fh-field__hint">${esc(t.help ?? "")} <code>${esc(t.key)}</code> ${gen}</p>`;
  const opts = t.options?.options;
  if (t.htmlInputType === "checkbox") {
    return `<div class="fh-field" data-fh-sample-type="${esc(t.key)}"><label class="fh-check"><input type="checkbox" id="${id}"${t.example === "true" ? " checked" : ""}> ${esc(t.label)}</label>${hint}</div>`;
  }
  let control;
  if (Array.isArray(opts) && opts.length) {
    control = `<div class="fh-select-wrap"><select class="fh-select" id="${id}"><option value="">Choose…</option>${opts.map((o) => `<option${o === t.example ? " selected" : ""}>${esc(o)}</option>`).join("")}</select></div>`;
  } else if (t.htmlInputType === "textarea") {
    control = `<textarea class="fh-textarea" id="${id}" rows="2"${at("placeholder", t.placeholder ?? t.example)}${at("autocomplete", t.autocomplete)}></textarea>`;
  } else if (t.htmlInputType == null) {
    control = `<input class="fh-input" id="${id}" readonly${at("value", t.example)}>`;
  } else {
    control = `<input class="fh-input" id="${id}" type="${esc(t.htmlInputType)}"${at("inputmode", t.inputMode)}${at("autocomplete", t.autocomplete)}${at("placeholder", t.placeholder ?? (["number", "checkbox", "date", "time", "datetime-local"].includes(t.htmlInputType) ? null : t.example))}${["number", "date", "time", "datetime-local"].includes(t.htmlInputType) ? at("value", t.example) : ""}>`;
  }
  return `<div class="fh-field" data-fh-sample-type="${esc(t.key)}"><label for="${id}">${esc(t.label)}</label>${control}${hint}</div>`;
};
const standardTypes = semanticTypes.filter((t) => !isKeyType(t));
const keyTypes = semanticTypes.filter(isKeyType);
const groupsOf = [
  ["Text and numbers", (t) => !t.options?.options && t.htmlInputType != null && !["date", "time", "datetime-local"].includes(t.htmlInputType)],
  ["Choices", (t) => Array.isArray(t.options?.options)],
  ["Dates and times", (t) => !t.options?.options && ["date", "time", "datetime-local"].includes(t.htmlInputType)],
  ["Computed and system", (t) => !t.options?.options && t.htmlInputType == null],
];
const semanticFields = `        <div class="site-demo site-anchor" id="c-field-types">
          <div class="site-demo__head"><h3>Field types</h3><p>Every semantic type the Rascode platform publishes, ${standardTypes.length} in all, as the field it renders: label, input type, input mode, autocomplete, placeholder and example from <code>schema/semantic-types.json</code>. Computed and system types are read-only. Each type's <strong>Generate</strong> opens a Firehorse Pro panel (count, copy, CSV) against the platform API. The ${keyTypes.length} credential types are <a href="/pro/keys/">Pro key fields</a>.</p></div>
          <div class="site-demo__stage" data-demo>
<form class="fh-stack fh-stack--lg" novalidate onsubmit="event.preventDefault()">
${groupsOf.map(([title, test]) => {
    const list = standardTypes.filter(test);
    return list.length ? `  <fieldset class="fh-stack" style="border:0;padding:0;margin:0"><legend class="fh-subheading" style="margin-block-end: var(--fh-space-4)">${esc(title)} <span class="fh-muted">${list.length}</span></legend>
  <div class="fh-grid" style="--fh-grid-min: 15rem; --fh-grid-max-cols: 3; --fh-gap: var(--fh-space-5)">
${list.map((t) => `    ${fieldOf(t)}`).join("\n")}
  </div></fieldset>` : "";
  }).join("\n")}
</form>
          </div>
        </div>
`;
const semanticKeyFields = `        <div class="site-demo" id="key-types">
          <div class="site-demo__head"><h3>Credential types</h3><p>The semantic types that hold secrets. Each one stores a vault reference, never the value, so there is no example to show: the field starts not set. From <code>schema/semantic-types.json</code>.</p></div>
          <div class="fh-stack" style="padding: var(--fh-inset-card)">
${keyTypes.map((t, i) => `<div class="fh-keyfield" data-fh-keyfield data-kind="credential" data-state="empty">
  <div class="fh-keyfield__head"><span class="fh-keyfield__label" id="kt-${i + 1}">${esc(t.label)}</span><span class="fh-keyfield__type" data-kind="credential">Vault reference</span></div>
  <code class="fh-keyfield__name">${esc(t.key)}</code>
  <div class="fh-keyfield__value">
    <output class="fh-keyfield__mask" aria-labelledby="kt-${i + 1}">Not set</output>
    <button class="fh-keyfield__action" type="button" aria-label="Set ${esc(t.label.toLowerCase())}" title="Set"><i class="fh-icon fh-icon--pencil" aria-hidden="true"></i></button>
  </div>
  <form class="fh-keyfield__editor" hidden>
    <input class="fh-input" type="${esc(t.htmlInputType ?? "password")}" autocomplete="${esc(t.autocomplete ?? "off")}" spellcheck="false" aria-label="${esc(t.label)}">
    <button class="fh-button fh-button--sm" type="submit">Save</button>
    <p class="fh-keyfield__hint">${esc(t.help ?? "")}</p>
  </form>
</div>`).join("\n")}
          </div>
        </div>
`;
const horse = readFileSync(join(root, "site/parts/horse.svg"), "utf8").trim();
// Cache-bust local stylesheets and site.js (CSS is served with max-age=3600) so edits show on the next load.
const stamp = (f) => createHash("sha1").update(readFileSync(join(root, f))).digest("hex").slice(0, 8);
const busted = {
  "firehorse.css": stamp("dist/firehorse.css"), "themes.css": stamp("dist/themes.css"), "icons.css": stamp("dist/icons.css"),
  "themes/rascode.css": stamp("dist/themes/rascode.css"), "site.css": stamp("site/site.css"), "playground.css": stamp("site/playground.css"),
};
const siteJs = stamp("site/site.js");
const bust = (s) => Object.entries(busted).reduce((acc, [f, v]) => acc.replaceAll(`href="${f}"`, `href="${f}?v=${v}"`).replaceAll(`href="/${f}"`, `href="/${f}?v=${v}"`), s);
// Every local script gets a content stamp too (module scripts are cached hard by browsers).
const jsStamp = Object.fromEntries([...readdirSync(join(root, "site")).filter((f) => f.endsWith(".js")).map((f) => [f, stamp(`site/${f}`)]),
  ...["firehorse.js", "audio.js", "datatable.js", "sidecar.js"].map((f) => [f, stamp(`dist/${f}`)])]);
const bustJs = (s) => s.replace(/src="(\/?)([\w-]+\.js)"/g, (m, slash, f) => (jsStamp[f] ? `src="${slash}${f}?v=${jsStamp[f]}"` : m));
const fill = (s) => bustJs(bust(s)).replaceAll('src="site.js"', `src="site.js?v=${siteJs}"`).replaceAll('src="/site.js"', `src="/site.js?v=${siteJs}"`).replaceAll("{{HORSE}}", horse).replaceAll("{{TOKENS}}", String(tokenCount)).replaceAll("{{GZIP}}", gzipKb).replaceAll("{{SCHEMA_ROWS}}", schemaRows).replaceAll("{{SEMANTIC_FIELDS}}", semanticFields).replaceAll("{{SEMANTIC_KEY_FIELDS}}", semanticKeyFields).replaceAll("{{DS_VERSION}}", JSON.parse(readFileSync(join(root, "package.json"), "utf8")).version);
// Docs pages: site/pages/**/*.html wrapped in site/parts/layout.html (see scripts/pages.mjs).
await import("./gen-references.mjs");
const docPages = pages();
const ctx = assemble(docPages);
for (const p of docPages) {
  mkdirSync(dirname(join(out, p.out)), { recursive: true });
  writeFileSync(join(out, p.out), fill(absolutize(render(p, ctx))));
  for (const id of new Set(p.missing)) console.warn(`  ! ${p.path}: link to #${id} has no target on any page`);
}
if (process.argv.includes("--check") && docPages.some((p) => p.missing?.length)) { console.error("✗ site: dead links (above)"); process.exit(1); }
// Old single-page links (/#c-button) land on the right page: site.js looks the hash up here.
writeFileSync(join(out, "anchors.json"), JSON.stringify(Object.fromEntries([...ctx.where].filter(([, path]) => path !== "/").map(([id, path]) => [id, path.replace(/#$/, "")]))));
cp("site/site.css", "site.css");
cp("site/site.js", "site.js");
for (const f of readdirSync(join(root, "site"))) if (/\.(js|css)$/.test(f) && !["site.js", "site.css"].includes(f)) cp(`site/${f}`, f);
for (const f of ["datatable.js", "audio.js", "sidecar.js", "icons.css", "icons.json", "reveal.css", "admin.css"]) cp(`dist/${f}`, f);
// Firehorse Pro (private, git-ignored): its demo pages need the built CSS, calendar.js and keyfield.js.
if (existsSync(join(root, "pro/dist/firehorse-pro.min.css"))) {
  cp("pro/dist/firehorse-pro.min.css", "firehorse-pro.css");
  cp("pro/dist/calendar.js", "calendar.js");
  cp("pro/dist/keyfield.js", "keyfield.js");
  if (existsSync(join(root, "pro/dist/motion.js"))) cp("pro/dist/motion.js", "motion-pro.js");
}
for (const dir of ["img/supply", "img/backdrop", "img/og", "img/brand", "img/theme-horses", "audio"]) {
  mkdirSync(join(out, dir), { recursive: true });
  for (const f of readdirSync(join(root, `site/${dir}`))) cp(`site/${dir}/${f}`, `${dir}/${f}`);
}
for (const f of readdirSync(join(root, "site"))) if (f.endsWith(".html") && f !== "index.html") writeFileSync(join(out, f), fill(readFileSync(join(root, "site", f), "utf8")));
// Developer portal: the CSS source and folder READMEs, served raw at /src/… for the viewer.
for (const f of sourceFiles()) { mkdirSync(join(out, "src", dirname(f)), { recursive: true }); cp(`src/${f}`, `src/${f}`); }
cp("dist/firehorse.css", "firehorse.css");
cp("dist/firehorse.min.css", "firehorse.min.css");
cp("dist/firehorse.js", "firehorse.js");
mkdirSync(join(out, "fonts"), { recursive: true });
for (const f of readdirSync(join(root, "site/fonts"))) cp(`site/fonts/${f}`, `fonts/${f}`);
mkdirSync(join(out, "img/avatars"), { recursive: true });
for (const f of readdirSync(join(root, "site/img/avatars"))) cp(`site/img/avatars/${f}`, `img/avatars/${f}`);
cp("dist/tokens.json", "tokens.json");
cp("site/favicon.svg", "favicon.svg");
cp("dist/themes.css", "themes.css");
cp("dist/themes.json", "themes.json");
for (const f of readdirSync(join(root, "dist/themes"))) cp(`dist/themes/${f}`, `themes/${f}`);
mkdirSync(join(out, "art"), { recursive: true });
for (const f of readdirSync(join(root, "dist/art"))) cp(`dist/art/${f}`, `art/${f}`);
cp("agent/system.md", "agent/system.md");
cp("agent/components.md", "agent/components.md");
cp("agent/schema.md", "agent/schema.md");
cp("agent/index.md", "agent/index.md");
cp("agent/kc.md", "agent/kc.md");
cp("agent/patterns.md", "agent/patterns.md");
cp("dist/index.json", "index.json");
cp("schema/mappings.json", "schema.json");
if (existsSync(join(root, "site/data/references.json"))) cp("site/data/references.json", "references.json");

const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const base = "https://firehorse.rascode.dev";
const themes = JSON.parse(readFileSync(join(root, "dist/themes.json"), "utf8")).themes;
const themeList = themes.filter((t) => !t.base).map((t) => t.label).join(", ");
const themeLinks = themes.map((t) => `- [themes/${t.name}.css](${base}/themes/${t.name}.css): ${t.label}${t.base ? " (restores the defaults inside a themed page)" : ""}. ${t.tagline}`).join("\n");
// The Stable's posts (front matter slug and date), for the sitemap and llms.txt; drafts stay out.
const stablePosts = readdirSync(join(root, "site/stable/posts")).filter((f) => f.endsWith(".md")).map((f) => {
  const fm = readFileSync(join(root, "site/stable/posts", f), "utf8").match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
  const get = (k) => fm.match(new RegExp(`^${k}:\\s*(.*)$`, "m"))?.[1]?.trim();
  return { slug: get("slug"), date: get("date"), title: get("title"), draft: get("draft") === "true" };
}).filter((p) => p.slug && p.date && !p.draft).sort((a, b) => b.date.localeCompare(a.date));
const llms = `# Firehorse

> Firehorse (v${pkg.version}, MIT) is a dark-first, container-native CSS design system by Rascode. Components respond to the container they sit in, not the viewport. It uses cascade layers, light-dark() schemes, data-tone category colors and native HTML (details, dialog, popover). The core needs no JavaScript; optional modules (firehorse.js, datatable.js, audio.js) add behavior.

Use it by linking ${base}/firehorse.css (or \`npm i ${base}/npm/firehorse-${pkg.version}.tgz\`; installs as ${pkg.name}), then writing HTML with the fh-* classes documented below. Read the agent contract before generating markup.

## Agent files

- [Agent contract](${base}/agent/system.md): imports, mental model, MUST / NEVER rules, theming, self-check
- [Component markup](${base}/agent/components.md): canonical HTML for every component and the page skeleton
- [Design patterns](${base}/agent/patterns.md): page layouts by ID (Fender, Cinch, …): anatomy, what to keep, what to change, phones, markup
- [Firehorse Index](${base}/agent/index.md): a stable ID for every component, group and variant (CHP, CHP-1, CHP-1.2…). When a person names an ID, look it up here and use that markup
- [KC](${base}/agent/kc.md): who KC is (the Firehorse guide) and how he speaks, for agents that answer as him
- [Structured data](${base}/agent/schema.md): which components map to which Schema.org types, and how to generate and check the JSON-LD
- [Index registry](${base}/index.json): every family and variant with name, classes and markup, as JSON
- [Design tokens](${base}/tokens.json): all ${Object.keys(JSON.parse(readFileSync(join(root, "dist/tokens.json"), "utf8")).tokens).length} tokens with value, type, tier and group

## Stylesheets

- [firehorse.css](${base}/firehorse.css): readable build, Baseline 2024 browsers
- [firehorse.min.css](${base}/firehorse.min.css): minified
- [themes.css](${base}/themes.css): every built-in theme in one sheet (${themeList}); apply one with \`data-fh-theme\` on \`<html>\`
- [themes.json](${base}/themes.json): the themes with labels, descriptions, swatches and the component decisions each one makes
${themeLinks}
- [themes/rascode.css](${base}/themes/rascode.css): the Rascode brand layer (Inter, Geist Mono, Caveat)

## Docs pages

${docPages.filter((p) => p.path !== "/").map((p) => `- [${p.meta.parent ? docPages.find((x) => x.path === p.meta.parent).meta.name + " › " : ""}${p.meta.name}](${base}${p.path}): ${p.meta.description}`).join("\n")}

## The Stable (blog)

- [The Stable](${base}/stable/): release notes and articles ([RSS](${base}/stable/feed.xml))
${stablePosts.map((p) => `- [${p.title}](${base}/stable/${p.slug}/)`).join("\n")}

## Optional

- [Full context in one file](${base}/llms-full.txt): system.md, patterns.md, index.md, schema.md and components.md in one file
- [Source repository](https://github.com/rascode/firehorse)
`;
writeFileSync(join(out, "llms.txt"), llms);
writeFileSync(join(out, "llms-full.txt"),
  readFileSync(join(root, "agent/system.md"), "utf8") + "\n\n---\n\n" + readFileSync(join(root, "agent/patterns.md"), "utf8") + "\n\n---\n\n" + readFileSync(join(root, "agent/index.md"), "utf8") + "\n\n---\n\n" + readFileSync(join(root, "agent/schema.md"), "utf8") + "\n\n---\n\n" + readFileSync(join(root, "agent/components.md"), "utf8"));
writeFileSync(join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
writeFileSync(join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...docPages.map((p) => p.path), "/playground.html", "/stable/"].map((u) => `  <url><loc>${base}${u}</loc></url>`).concat(stablePosts.map((p) => `  <url><loc>${base}/stable/${p.slug}/</loc><lastmod>${p.date}</lastmod></url>`)).join("\n")}\n</urlset>\n`);
// Cloudflare Pages / Workers static assets headers
writeFileSync(join(out, "_headers"), `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n/*.css\n  Access-Control-Allow-Origin: *\n  Cache-Control: public, max-age=3600\n/tokens.json\n  Access-Control-Allow-Origin: *\n/themes.json\n  Access-Control-Allow-Origin: *\n/schema.json\n  Access-Control-Allow-Origin: *\n/index.json\n  Access-Control-Allow-Origin: *\n/llms*.txt\n  Access-Control-Allow-Origin: *\n  Content-Type: text/plain; charset=utf-8\n/agent/*\n  Access-Control-Allow-Origin: *\n  Content-Type: text/markdown; charset=utf-8\n`);

// Artifact preview variant: body-only page (the host adds the document skeleton).
const html = fill(render(docPages.find((p) => p.path === "/"), ctx));
const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
const keep = head.split("\n").filter((l) => /<title>|fonts\.g|stylesheet/.test(l)).join("\n");
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1];
writeFileSync(join(out, "artifact.html"), keep + "\n" + body);
console.log("site/dist ready:", readdirSync(out).join(" "));
