// References page (/references/) from site/data/references.json, the Rascode
// HIG's sources exported from the platform's reference schema
// (pnpm db seed:references --export …). Run by scripts/site.mjs.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "site/data/references.json");
if (existsSync(src)) {
  const { references } = JSON.parse(readFileSync(src, "utf8"));
  const esc = (v) => String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const CHAPTERS = { spacing: "Spacing", items: "Items", anatomy: "Anatomy", layout: "Frame and layout", type: "Type", color: "Color", lines: "Lines", surfaces: "Surfaces", motion: "Motion", density: "Density", accessibility: "Accessibility", naming: "Naming" };
  const TONE = { design_system: "sky", standard: "fuchsia", practice: "teal", research: "violet" };
  const ORDER = ["design_system", "standard", "practice", "research"];
  const groups = ORDER.map((k) => [k, references.filter((r) => r.category === k)]).filter(([, rs]) => rs.length);
  const card = (r) => `<article class="fh-card" id="ref-${esc(r.key)}" data-tone="${TONE[r.category] ?? "neutral"}">
  <p class="fh-card__meta">${esc(r.originator ?? r.source_name ?? "")}${r.published_year ? ` · ${r.published_year}` : ""}</p>
  <h3 class="fh-card__title"><a href="${esc(r.source_url)}" rel="noopener">${esc(r.title)}</a></h3>
  <p class="fh-card__body">${esc(r.summary)}</p>
  ${r.explanation ? `<p class="fh-small fh-muted">${esc(r.explanation)}</p>` : ""}
  <div class="fh-chips fh-chips--wrap">${(r.hig_chapters ?? []).map((c) => `<a class="fh-chip" href="#ch-${c}">${esc(CHAPTERS[c] ?? c)}</a>`).join("")}</div>
</article>`;
  const byChapter = Object.keys(CHAPTERS).map((c) => [c, references.filter((r) => (r.hig_chapters ?? []).includes(c))]).filter(([, rs]) => rs.length);
  const index = byChapter.map(([c, rs]) => `<div id="ch-${c}"><dt>${esc(CHAPTERS[c])}</dt><dd><div class="fh-chips fh-chips--wrap">${rs.map((r) => `<a class="fh-chip" href="#ref-${esc(r.key)}">${esc(r.title.replace("Apple Human Interface Guidelines", "Apple HIG").replace("Understanding WCAG 2.2 ", "WCAG 2.2 ").replace("ARIA Authoring Practices Guide", "ARIA APG"))}</a>`).join("")}</div></dd></div>`).join("\n");
  const sections = groups.map(([k, rs], i) => `    <section id="${k.replace(/_/g, "-")}" class="fh-section fh-section--ruled site-anchor" data-tone="${TONE[k]}" aria-labelledby="${k}-title" data-fh-label="${esc(rs[0].category_label)}" data-fh-index="${String(i + 2).padStart(2, "0")}">
      <header class="fh-section-head"><p class="fh-eyebrow">${esc(rs[0].category_label)} · ${rs.length}</p><h2 id="${k}-title">${esc({ design_system: "Published design systems", standard: "Standards: W3C, WAI and CSS", practice: "Practice", research: "Usability research" }[k] ?? rs[0].category_label)}</h2></header>
      <div class="fh-grid" data-cols="2">
${rs.map(card).join("\n")}
      </div>
    </section>`).join("\n\n");
  const page = `<!--@meta {
  "path": "/references/",
  "order": 6,
  "name": "References",
  "tone": "sky",
  "title": "References · Rascode HIG",
  "description": "The sources behind the Rascode HIG: published design systems, W3C and CSS standards, practitioner expertise and usability research. Also at /references.json.",
  "headline": "References, <em>where the rules come from</em>",
  "lede": "Every rule in the <a class=\\"fh-link\\" href=\\"/guidelines/\\">Rascode HIG</a> rests on practice and published standards. These are the sources, grouped by kind and indexed by chapter. The same list is at <a class=\\"fh-link\\" href=\\"/references.json\\">references.json</a> for agents and the MCP.",
  "scripts": [],
  "icon": "bookmark",
  "summary": [
    { "value": "${references.length}", "label": "Sources", "blurb": "Design systems, standards, practice and research." },
    { "value": "${byChapter.length}", "label": "Chapters", "blurb": "Each source is tagged with the HIG chapters it informs." }
  ]
}-->
<!--@main-->
    <section id="by-chapter" class="fh-section fh-section--ruled site-anchor" data-tone="sky" aria-labelledby="by-chapter-title" data-fh-label="By chapter" data-fh-index="01">
      <header class="fh-section-head"><p class="fh-eyebrow">Index</p><h2 id="by-chapter-title">By chapter</h2><p>Each chapter of the HIG and the sources it draws on.</p></header>
      <dl class="fh-dl">
${index}
      </dl>
    </section>

${sections}
`;
  mkdirSync(join(root, "site/pages/references"), { recursive: true });
  writeFileSync(join(root, "site/pages/references/index.html"), page);
}
