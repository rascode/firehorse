// Firehorse developer area: everything the /developer/ page shows about the
// source, read from src/ at build time so it can't drift. pages.mjs expands
// <!-- gen:NAME --> placeholders in a page's main with these blocks.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const read = (p) => readFileSync(join(src, p), "utf8");
const kb = (n) => (n < 1024 ? `${n} B` : `${(n / 1024).toFixed(n < 10240 ? 1 : 0)} KB`);

const manifest = (file) => [...read(file).matchAll(/@import "\.\/([^"]+)";/g)].map((m) => join(dirname(file), m[1]).replace(/^\.\//, ""));
const layerOrder = (/@layer ([^;{]+);/.exec(read("firehorse.css"))?.[1] ?? "").split(",").map((s) => s.trim());

let cache = null;
/** Every source module, in the order the bundles import them. */
export function modules() {
  if (cache) return cache;
  const families = existsSync(join(root, "dist/index.json")) ? JSON.parse(readFileSync(join(root, "dist/index.json"), "utf8")).families : [];
  const pageOf = new Map(families.map((f) => [f.id, f.page]));
  const list = [
    ...manifest("firehorse.css").map((path) => ({ path, bundle: "firehorse.css" })),
    ...manifest("admin/admin.css").map((path) => ({ path, bundle: "admin.css" })),
    { path: "icons/icons.css", bundle: "icons.css" },
    { path: "integrations/reveal.css", bundle: "reveal.css" },
  ].filter((m) => existsSync(join(src, m.path)));
  cache = list.map((m, i) => {
    const text = read(m.path);
    const code = text.replace(/\/\*[\s\S]*?\*\//g, "");
    const head = /Firehorse — (.+?)(?: \(([A-Z]{2,4}(?:-[A-Z0-9]{2,4})?)\))?\n/.exec(text);
    const name = head ? head[1].trim() : basename(m.path, ".css").replace(/-/g, " ");
    const id = head?.[2] ?? null;
    const classes = new Set();
    for (const sel of code.matchAll(/([^{};]+)\{/g)) for (const c of sel[1].matchAll(/\.(fh-[a-z0-9_-]+)/g)) classes.add(c[1]);
    const tokens = new Set([...code.matchAll(/(--fh-[a-z0-9-]+)\s*:/g)].map((x) => x[1]));
    const layers = [...new Set([...code.matchAll(/@layer (fh\.[a-z]+)\s*\{/g)].map((x) => x[1]))];
    return {
      ...m, order: i + 1, folder: dirname(m.path), file: basename(m.path), name: name.charAt(0).toUpperCase() + name.slice(1), id,
      docs: id ? pageOf.get(id) ?? null : null, layers, classes: [...classes].sort(), tokens: [...tokens].sort(),
      lines: text.split("\n").length, bytes: Buffer.byteLength(text),
    };
  });
  return cache;
}

/** A folder's README: title and first paragraph. */
function folderInfo(folder) {
  const p = join(src, folder, "README.md");
  if (!existsSync(p)) return { title: folder.split("/").pop(), text: "" };
  const md = readFileSync(p, "utf8");
  const title = /^# (.+)$/m.exec(md)?.[1] ?? folder;
  const text = md.replace(/^# .+\n+/, "").split(/\n\n/)[0].trim();
  return { title, text };
}
const inline = (md) => esc(md).replace(/`([^`]+)`/g, "<code>$1</code>");

const BLOCKS = {
  /** Headline numbers. */
  stats() {
    const ms = modules();
    const classes = new Set(ms.flatMap((m) => m.classes));
    const tokens = new Set(ms.flatMap((m) => m.tokens));
    const min = existsSync(join(root, "dist/firehorse.min.css")) ? readFileSync(join(root, "dist/firehorse.min.css")) : Buffer.alloc(0);
    const cells = [
      [ms.length, "Modules", "One file per component, in folders that match the docs."],
      [ms.reduce((n, m) => n + m.lines, 0).toLocaleString("en-US"), "Lines", "Native CSS with nesting; no preprocessor."],
      [classes.size, "Classes", "Every one starts with fh-."],
      [tokens.size, "Custom properties", "Tokens and component knobs."],
      [kb(gzipSync(min).length), "Core, gzipped", "firehorse.min.css over the wire."],
    ];
    return `<ul class="fh-cube-cards" data-tone="teal" aria-label="The source in numbers">
${cells.map(([v, l, b]) => `  <li class="fh-cube-card"><b class="fh-cube fh-cube--lg">${esc(v)}</b><span><strong>${esc(l)}</strong>${esc(b)}</span></li>`).join("\n")}
</ul>`;
  },

  /** The cascade layers, lowest first, and what lives in each. */
  layers() {
    const ms = modules();
    const rows = layerOrder.map((layer) => {
      const here = ms.filter((m) => m.layers.includes(layer));
      const folders = [...new Set(here.map((m) => m.folder.split("/").slice(0, 2).join("/")))];
      const note = { "fh.themes": "Theme files (src/themes, compiled from JSON)", "fh.config": "Preset switches set by data-fh-* attributes (tokens/config.css)" }[layer];
      return `    <tr><td><code>${esc(layer)}</code></td><td>${here.length || "—"}</td><td>${folders.length ? folders.map((f) => `<code>${esc(f)}/</code>`).join(" ") : esc(note ?? "")}</td></tr>`;
    });
    return `<div class="fh-table-wrap"><table class="fh-table">
  <caption class="fh-sr-only">Cascade layers, lowest to highest</caption>
  <thead><tr><th scope="col">Layer</th><th scope="col">Modules</th><th scope="col">Where</th></tr></thead>
  <tbody>
${rows.join("\n")}
  </tbody>
</table></div>`;
  },

  /** Every module, grouped by folder, searchable, each one opens its source. */
  modules() {
    const ms = modules();
    const folders = [...new Set(ms.map((m) => m.folder))];
    const groups = folders.map((folder) => {
      const info = folderInfo(folder);
      const rows = ms.filter((m) => m.folder === folder).map((m) => {
        const search = [m.name, m.file, m.id, ...m.classes].filter(Boolean).join(" ").toLowerCase();
        const id = m.id ? (m.docs ? `<a class="fh-badge" href="${esc(m.docs)}#${esc(m.id)}">${esc(m.id)}</a>` : `<span class="fh-badge">${esc(m.id)}</span>`) : "";
        const cls = m.classes.filter((c) => !/__|--/.test(c)).slice(0, 3);
        return `      <tr data-dev-row data-search="${esc(search)}">
        <th scope="row"><button class="site-dev__open" type="button" data-dev-src="${esc(m.path)}" data-dev-name="${esc(m.name)}" data-dev-id="${esc(m.id ?? "")}" data-dev-layer="${esc(m.layers.join(", "))}" data-dev-bundle="${esc(m.bundle)}">${esc(m.name)}</button><small>${esc(m.file)}</small></th>
        <td>${id}</td>
        <td><span title="${esc(m.classes.join(" "))}">${cls.map((c) => `<code>.${esc(c)}</code>`).join(" ")}${m.classes.length > cls.length ? ` <span class="fh-muted">+${m.classes.length - cls.length}</span>` : ""}</span></td>
        <td class="fh-num">${m.lines}</td>
        <td class="fh-num">${kb(m.bytes)}</td>
      </tr>`;
      });
      return `  <section class="site-dev__group" data-dev-group aria-labelledby="dev-${esc(folder.replace(/\W+/g, "-"))}">
    <header class="site-dev__group-head">
      <h3 id="dev-${esc(folder.replace(/\W+/g, "-"))}">${esc(info.title)} <code>src/${esc(folder)}/</code></h3>
      ${info.text ? `<p>${inline(info.text)}</p>` : ""}
    </header>
    <div class="fh-table-wrap"><table class="fh-table">
      <thead><tr><th scope="col">Module</th><th scope="col">ID</th><th scope="col">Defines</th><th scope="col" class="fh-num">Lines</th><th scope="col" class="fh-num">Size</th></tr></thead>
      <tbody>
${rows.join("\n")}
      </tbody>
    </table></div>
  </section>`;
    });
    return groups.join("\n");
  },

  /** The bundles' import order, which is the cascade order inside each layer. */
  cascade() {
    const ms = modules();
    const list = (bundle) => ms.filter((m) => m.bundle === bundle).map((m) => `      <li><button class="site-dev__open" type="button" data-dev-src="${esc(m.path)}" data-dev-name="${esc(m.name)}" data-dev-id="${esc(m.id ?? "")}" data-dev-layer="${esc(m.layers.join(", "))}" data-dev-bundle="${esc(m.bundle)}"><code>${esc(m.path)}</code></button></li>`).join("\n");
    return `<details class="fh-accordion" data-schema="none">
  <summary>src/firehorse.css · ${ms.filter((m) => m.bundle === "firehorse.css").length} modules</summary>
  <div><ol class="site-dev__cascade">
${list("firehorse.css")}
  </ol></div>
</details>
<details class="fh-accordion" data-schema="none">
  <summary>src/admin/admin.css · ${ms.filter((m) => m.bundle === "admin.css").length} modules</summary>
  <div><ol class="site-dev__cascade">
${list("admin.css")}
  </ol></div>
</details>`;
  },

  /** What ships in dist/, with sizes. */
  bundles() {
    const files = [
      ["firehorse.css", "Core: every token, base, layout, component, pattern and utility module.", "@import \"@rascode/firehorse/css\";"],
      ["firehorse.min.css", "The core, minified.", "@import \"@rascode/firehorse/min.css\";"],
      ["firehorse.compat.min.css", "The core lowered for 2022–23 browsers (no nesting, no light-dark()).", "@import \"@rascode/firehorse/compat.css\";"],
      ["admin.css", "Admin: app shell, environment selector, composer, dock. Load after the core.", "@import \"@rascode/firehorse/admin.css\";"],
      ["themes.css", "Every built-in theme in one sheet, for a theme select.", "@import \"@rascode/firehorse/themes.css\";"],
      ["icons.css", "The optional icon set.", "@import \"@rascode/firehorse/icons.css\";"],
      ["reveal.css", "reveal.js adapter for slide decks.", ""],
    ].filter(([f]) => existsSync(join(root, "dist", f)));
    return `<div class="fh-table-wrap"><table class="fh-table">
  <thead><tr><th scope="col">File</th><th scope="col">What it is</th><th scope="col" class="fh-num">Size</th><th scope="col" class="fh-num">Gzipped</th></tr></thead>
  <tbody>
${files.map(([f, what, imp]) => {
      const buf = readFileSync(join(root, "dist", f));
      return `    <tr><th scope="row"><code>dist/${esc(f)}</code></th><td>${esc(what)}${imp ? `<br><code>${esc(imp)}</code>` : ""}</td><td class="fh-num">${kb(buf.length)}</td><td class="fh-num">${kb(gzipSync(buf).length)}</td></tr>`;
    }).join("\n")}
  </tbody>
</table></div>`;
  },
};

/** The hero's summary strip (pages.mjs uses it for meta.summaryFrom: "developer"). */
export function summaryCells() {
  const ms = modules();
  const min = existsSync(join(root, "dist/firehorse.min.css")) ? readFileSync(join(root, "dist/firehorse.min.css")) : Buffer.alloc(0);
  return [
    { value: String(ms.length), label: "Modules", blurb: "One file per component, in folders that match the docs." },
    { value: ms.reduce((n, m) => n + m.lines, 0).toLocaleString("en-US"), label: "Lines", blurb: "Native CSS with nesting; no preprocessor." },
    { value: String(new Set(ms.flatMap((m) => m.classes)).size), label: "Classes", blurb: "Every one starts with fh-." },
    { value: kb(gzipSync(min).length), label: "Gzipped", blurb: "The whole core, minified, over the wire." },
  ];
}

/** Replace <!-- gen:NAME --> in page HTML with the block. */
export function expandGenerated(html) {
  return html.replace(/<!-- gen:([a-z]+) -->/g, (m, name) => (BLOCKS[name] ? BLOCKS[name]() : m));
}

/** Every file the developer area serves raw (src CSS and folder READMEs), relative to src/. */
export function sourceFiles(dir = src, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) sourceFiles(p, out);
    else if (/\.(css|md)$/.test(f)) out.push(p.slice(src.length + 1));
  }
  return out;
}
