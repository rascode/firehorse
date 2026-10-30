// Renders the Firehorse email templates (src/email) into site/dist/email/
// with sample data, one file per template per theme, plus an index page
// that shows them side by side. Run after site.mjs (part of `npm run site`).
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { leadNotification, stableWelcome } from "../src/email/email.js";
import { palette } from "../src/email/palette.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "site/dist/email");
mkdirSync(out, { recursive: true });

const sampleLead = {
  name: "Ava Moreno", email: "ava@example.com", company: "Northwind Studio", needs: ["design-system", "website"],
  timeline: "Next month", budget: "$15–30k",
  message: "We're rebuilding our marketing site and want one design system for it and the app.\nCould we talk next week?",
  placement: "services:design", page_path: "/", utm_source: "x", utm_medium: "social", utm_campaign: "launch-week",
  first_utm_source: "x", first_utm_medium: "social", first_utm_campaign: "launch-week", landing_page: "/?utm_source=x&utm_medium=social&utm_campaign=launch-week",
  country: "US", at: "2026-11-04T15:12:00.000Z",
};
const templates = [
  ["lead", "Lead notification", (theme) => leadNotification(sampleLead, { theme })],
  ["welcome", "The Stable welcome", (theme) => stableWelcome({ name: "Ava Moreno", list: "highlights" }, { theme })],
];
const themes = ["firehorse", ...Object.keys(palette).filter((t) => t !== "firehorse")];
for (const [id, , make] of templates) for (const theme of themes) writeFileSync(join(out, `${id}-${theme}.html`), make(theme).html);

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
writeFileSync(join(out, "index.html"), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Email templates · Firehorse</title>
<meta name="robots" content="noindex">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/firehorse.css">
<link rel="stylesheet" href="/themes.css">
<style>.email-frame{inline-size:100%;block-size:760px;border:var(--fh-border-thin) solid var(--fh-color-border-strong);border-radius:var(--fh-radius-md);background:#fff}</style>
</head>
<body>
<div class="fh-page"><main class="fh-main">
<section class="fh-section">
  <header class="fh-section-head"><div>
    <p class="fh-label">Firehorse · email</p>
    <h1 class="fh-heading">Email templates, drawn from the themes</h1>
    <p class="fh-lede">The same palette, type and lines as the site, rendered as inline-styled tables so they hold up in every inbox. Light by default, dark where the client supports it. <code>import { leadNotification } from "@rascode/firehorse/email"</code></p>
  </div></header>
  ${templates.map(([id, name]) => `<h2 class="fh-subheading">${esc(name)}</h2>
  <div class="fh-grid" style="--fh-grid-min: 22rem; --fh-gap: var(--fh-space-5)">
    ${themes.map((t) => `<figure class="fh-stack fh-stack--sm" style="margin:0"><figcaption class="fh-label">${esc(palette[t].label)} · <a class="fh-link" href="${id}-${t}.html">open</a></figcaption><iframe class="email-frame" title="${esc(name)}, ${esc(palette[t].label)}" src="${id}-${t}.html" loading="lazy"></iframe></figure>`).join("\n    ")}
  </div>`).join("\n  ")}
</section>
</main></div>
</body>
</html>
`);
console.log(`email: ${templates.length} templates × ${themes.length} themes → site/dist/email/`);
