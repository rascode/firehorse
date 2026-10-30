// Generates agent/patterns.md from the Patterns page (site/pages/patterns): every pattern and
// building block with its anatomy, spec (built from / keep / change freely / phones) and markup,
// so agents follow the same rules the page shows.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "node-html-parser";
import { pages, root } from "./pages.mjs";

const page = pages().find((p) => p.path === "/patterns/");
if (!page) { console.error("✗ patterns-docs: no /patterns/ page"); process.exit(1); }
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const doc = parse(page.main);
const md = (el) => (el ? el.innerHTML : "")
  .replace(/<code>(.*?)<\/code>/g, "`$1`").replace(/<b>(.*?)<\/b>/g, "**$1**").replace(/<[^>]+>/g, "")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const dedent = (s) => {
  const lines = s.replace(/^\n+|\s+$/g, "").split("\n");
  const min = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
  return lines.map((l) => l.slice(min)).join("\n");
};

let out = `# Firehorse — patterns

> Page layouts by ID, v${pkg.version}. Generated from https://firehorse.rascode.dev/patterns/.
> A pattern is the saddle tree; the theme, tones and content are the leather and
> tooling. When a person
> names a pattern, build it with this markup and keep every **Keep** rule. Change
> only what **Change freely** allows. Rules: [system.md](system.md).

`;
for (const sec of doc.querySelectorAll("section.site-anchor")) {
  const title = md(sec.querySelector(".fh-section-head h2"));
  if (title) out += `## ${md(sec.querySelector(".site-chapter")).replace(/^\*\*\d+\*\*\s*/, "")}\n\n${md(sec.querySelector(".fh-section-head .fh-lede"))}\n\n`;
  for (const demo of sec.querySelectorAll(".site-demo[data-fh-id]")) {
    const id = demo.getAttribute("data-fh-id");
    out += `### ${id} · ${md(demo.querySelector(".site-demo__head h3"))}\n\n${md(demo.querySelector(".site-demo__head p"))}\n\n`;
    const legend = demo.querySelectorAll(".site-anatomy__legend li");
    if (legend.length) out += `Anatomy, top to bottom:\n\n${legend.map((li, i) => `${i + 1}. ${md(li)}`).join("\n")}\n\n`;
    for (const row of demo.querySelectorAll(".site-spec > div")) out += `- **${md(row.querySelector("dt"))}:** ${md(row.querySelector("dd"))}\n`;
    if (demo.querySelector(".site-spec")) out += "\n";
    const stage = demo.querySelector("[data-demo]");
    // Docs-site helper classes (site-*) only size the demo; agents get the plain Firehorse markup.
    const plain = (h) => h.replace(/ data-fh-(?:id|name)="[^"]*"/g, "")
      .replace(/ class="([^"]*)"/g, (m, c) => { const k = c.split(/\s+/).filter((x) => x && !x.startsWith("site-")); return k.length ? ` class="${k.join(" ")}"` : ""; });
    if (stage) out += "```html\n" + dedent(plain(stage.innerHTML)) + "\n```\n\n";
  }
}
writeFileSync(join(root, "agent/patterns.md"), out);
console.log(`agent/patterns.md: ${doc.querySelectorAll(".site-demo[data-fh-id]").length} patterns`);
