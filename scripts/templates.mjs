// Starter files built from the live media demos (site/pages/media), so they can't drift:
//   templates/media.html   every social / cover / card format, ready to edit and export (npx firehorse-export)
//   templates/slides.html  a reveal.js deck with the ten slide layouts
// Run: node scripts/templates.mjs   (part of `npm run site`)
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { parse } from "node-html-parser";
import { pages, root } from "./pages.mjs";

const page = pages().find((p) => p.path === "/media/");
if (!page) { console.error("✗ templates: no /media/ page"); process.exit(1); }
const doc = parse(page.main);
const site = "https://firehorse.rascode.dev";
const tidy = (el, indent) => {
  let html = el.outerHTML.replace(/ data-fh-(?:id|name)="[^"]*"/g, "").replace(/ (src|href)="(?!https?:|#|\/\/)\/?([^"]+)"/g, ` $1="${site}/$2"`);
  // Re-indent markup lines, but never lines inside a <pre> (their whitespace is content).
  const lines = html.split("\n");
  let inPre = false;
  const kinds = lines.map((l) => { const was = inPre; if (/<pre[\s>]/.test(l)) inPre = true; if (/<\/pre>/.test(l)) inPre = false; return was; });
  const min = Math.min(...lines.slice(1).filter((l, i) => l.trim() && !kinds[i + 1]).map((l) => l.match(/^\s*/)[0].length), Infinity);
  const cut = Number.isFinite(min) ? new RegExp(`^ {0,${min}}`) : /^/;
  return lines.map((l, i) => (kinds[i] ? l : i ? " ".repeat(indent) + l.replace(cut, "") : " ".repeat(indent) + l.trimStart())).join("\n");
};
const canvases = (prefixes) => doc.querySelectorAll("[data-fh-id]").filter((el) => prefixes.some((p) => el.getAttribute("data-fh-id").startsWith(p + "-")));
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const fonts = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300..700&display=swap">`;
const head = (title, extra = "") => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<!-- Paths point into the package (node_modules/@rascode/firehorse/templates/).
     Moved the file? Use ${site}/firehorse.css (and /reveal.css) instead. -->
${fonts}${extra}
<link rel="stylesheet" href="../dist/firehorse.css">
<link rel="stylesheet" href="../dist/themes/rascode.css">`;

mkdirSync(join(root, "templates"), { recursive: true });

// —— Media ——
const media = canvases(["THB", "SOC", "HDR", "CVR", "BIZ"]).map((el) => {
  const name = slug(el.getAttribute("data-fh-name") || el.getAttribute("data-fh-id"));
  el.setAttribute("data-fh-export", name);
  return `  <!-- ${el.getAttribute("data-fh-id")} · ${el.getAttribute("data-fh-name")} -->\n` + tidy(el, 2);
});
writeFileSync(join(root, "templates/media.html"), `${head("Firehorse media")}
<style>
  /* Preview layout only. Export: npx firehorse-export templates/media.html --out media */
  body { display: grid; gap: 48px; max-inline-size: 960px; margin: 0 auto; padding: 48px 24px; }
  .fh-canvas { box-shadow: 0 0 0 1px var(--fh-color-rule); }
  :is(.fh-canvas--post, .fh-canvas--square, .fh-canvas--story, .fh-canvas--cover) { max-inline-size: 420px; }
</style>
</head>
<body>
<!-- Each canvas exports to <data-fh-export>.png at its native size. Add data-fh-guides to see its safe area. -->
${media.join("\n\n")}
</body>
</html>
`);

// —— Slides (reveal.js) ——
const slides = canvases(["SLD"]).map((el) => `    <!-- ${el.getAttribute("data-fh-id")} · ${el.getAttribute("data-fh-name")} -->\n` + tidy(el, 4));
writeFileSync(join(root, "templates/slides.html"), `${head("Firehorse deck", `
<!-- reveal.js core only: Firehorse styles the deck, so no reveal theme. -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@6/dist/reveal.css">`)}
<link rel="stylesheet" href="../dist/reveal.css">
</head>
<body>
<div class="reveal">
  <div class="slides">
${slides.join("\n\n")}
  </div>
</div>
<script type="module">
  import Reveal from "https://cdn.jsdelivr.net/npm/reveal.js@6/dist/reveal.mjs";
  import Notes from "https://cdn.jsdelivr.net/npm/reveal.js@6/dist/plugin/notes.mjs";
  // Firehorse slides are 1280 × 720 canvases. Add <aside class="notes"> to any slide; press S for speaker view.
  // PDF: open with ?print-pdf and print to PDF.
  Reveal.initialize({ width: 1280, height: 720, margin: 0.04, center: false, hash: true, plugins: [Notes] });
</script>
</body>
</html>
`);
console.log(`templates: media.html (${media.length} canvases), slides.html (${slides.length} slides)`);
