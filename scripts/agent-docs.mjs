// Generates agent/components.md from the live demos on every docs page (site/pages/**),
// so the markup agents copy is exactly the markup the docs render.
import { allMain } from "./pages.mjs";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = allMain();
const strip = (s = "") => s.replace(/<code>(.*?)<\/code>/g, "`$1`").replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').trim();
const re = /<div class="site-demo__head"><h3>(.*?)<\/h3>(?:<p>(.*?)<\/p>|<code>(.*?)<\/code>)?(?:(?!site-demo__head)[\s\S])*?<div class="site-demo__stage[^"]*" data-demo>\n([\s\S]*?)\n {8,}<\/div>/g;
const blocks = [];
for (const m of html.matchAll(re)) blocks.push({ title: strip(m[1]), note: strip(m[2] || (m[3] ? "`" + m[3] + "`" : "")), code: m[4].replace(/ data-fh-(?:id|name)="[^"]*"/g, "").replace(/\s+$/, "") });
// Firehorse Index IDs, so a heading reads "CHP · Chips".
let ids = {}, tagged = {};
try {
  const fams = JSON.parse(readFileSync(join(root, "dist/index.json"), "utf8")).families;
  for (const f of fams) ids[f.name] = f.id;
  // Groups that are demos of their own (AVT-1 Shapes, CUB-2 Cube cards) head their own block.
  for (const f of fams) for (const g of f.groups ?? []) if (g.demo) ids[g.name] ??= g.id;
  // The Index's markup carries data-fh on every component root; prefer it over the raw demo.
  for (const f of fams) { if (f.markup) tagged[f.id] = f.markup; for (const g of f.groups ?? []) if (g.markup) tagged[g.id] = g.markup; }
} catch {}
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
let md = `# Firehorse — component markup

> Canonical markup for every Firehorse component, v${pkg.version}. Generated from the
> live demos on https://firehorse.rascode.dev — copy these exactly, then change
> the copy. Rules live in [system.md](system.md).

## Class index

| Group | Classes |
|---|---|
| Frame | \`fh-page\` \`fh-frame\` \`fh-section\` (\`--ruled\` \`--hero\` \`--flush\` \`--tight\` \`--narrow\`) \`fh-main\` \`fh-bleed\` \`fh-container\` \`fh-rule\` \`fh-cq\` |
| Layout | \`fh-stack\` (\`--2xs\`…\`--2xl\`) \`fh-cluster\` (\`--between\` \`--end\`) \`fh-grid\` (\`[data-cols]\` \`--ruled\` \`--etched\` \`--rounded\`) \`fh-split\` (\`--wide-start\` \`--wide-end\` \`--sidebar\`) \`fh-center\` \`fh-ratio\` \`fh-reel\` |
| Type | \`fh-display\` \`fh-title\` \`fh-heading\` \`fh-subheading\` \`fh-lede\` \`fh-body\` \`fh-small\` \`fh-label\` \`fh-eyebrow\` \`fh-mono\` \`fh-index\` \`fh-price\` \`fh-signature\` \`fh-prose\` \`fh-muted\` \`fh-subtle\` |
| Actions | \`fh-button\` (\`--secondary\` \`--outline\` \`--ghost\` \`--accent\` \`--plain\` \`--sm\` \`--lg\` \`--block\` \`--icon\`) \`fh-action\` (\`--lg\`) \`fh-link\` (\`--quiet\`) \`fh-roll\` \`fh-close\` |
| Markers | \`fh-dot\` (\`--live\`) \`fh-eyebrow-pill\` (\`--sentence\`) \`fh-breadcrumb\` \`fh-badge\` (\`--solid\`) |
| Content | \`fh-card\` (\`__meta\` \`__title\` \`__body\` \`__footer\` \`__price\` \`--solid\`) \`fh-stats\` \`fh-kv\` (\`__full\` \`--fields\` \`--single\`) \`[data-fh-rows]\` \`[data-fh-rows-select]\` \`fh-checklist\` \`fh-steps\` (\`--grid\`) \`fh-quote\` \`fh-crosses\` \`fh-table-wrap\` \`fh-table\` (\`--reflow\`) \`fh-matrix\` \`fh-deck\` (\`__card\` \`__card--split\` \`__media\` \`__body\` \`__caption\` \`__caption--top\` \`__index\` \`__title\` \`__meta\` \`--hero\` \`--fade\` \`--blur\` \`--lift\` \`--fan\` \`--count\` \`--x\` \`--reverse\` \`--flush\` \`--plain\`) \`fh-member\` (\`__art\` \`__glyphs\` \`__body\` \`__name\` \`__id\` \`__facts\` \`__role\` \`__stamp\` \`__tagline\` \`__meta\` \`__badge\` \`--glow\` \`--square\` \`--plates\` \`--smear\`) \`fh-story\` (\`__head\` \`__logo\` \`__tag\` \`__field\` \`__field--lines\` \`__mark\` \`__figure\` \`__figure-label\` \`__ring\` \`__chart\` \`__foot\` \`__quote\` \`__link\` \`__media\` \`--deep\` \`--ink\` \`--paper\` \`--duotone\` \`--glare\`) \`fh-speed\` (\`__smear\` \`__img\` \`--orbit\` \`--still\`) \`fh-dither\` (\`__plate\` \`--paper\` \`--lines\` \`--fine\` \`--coarse\`) \`fh-glass\` (\`--dark\` \`--clear\` \`--pill\` \`--prism\`) |
| Admin (admin.css) | \`fh-app\` \`fh-backdrop\` \`fh-masthead\` (\`__caption\` \`__index\` \`__title\` \`__foot\` \`__meta\` \`__tools\` \`--bar\`) \`fh-record\` (\`--cover\` \`__cover\`) \`fh-section-card\` (\`__head\` \`__title\` \`__tools\` \`__lede\` \`__subhead\` \`__note\` \`__foot\` \`--inset\` \`--aside\`) \`fh-metrics\` \`fh-metric\` (\`__label\` \`__value\` \`__sub\` \`__source\` \`__row\` \`__more\` \`__delta\` \`__figure\` \`--needed\` \`--spread\` \`--tinted\` \`--wide\`) \`fh-gauge\` |
| People | \`fh-social\` (\`__photo\` \`__body\` \`__name\` \`__check\` \`__bio\` \`__foot\` \`__stats\` \`--fade\` \`--dark\`) |
| Commerce | \`fh-invoice\` (\`__cover\` \`__head\` \`__logo\` \`__number\` \`__title\` \`__parties\` \`__label\` \`__dates\` \`__items\` \`__totals\` \`__total\` \`__sign\` \`__foot\` \`--classic\`) \`fh-pay\` (\`--float\` \`__mark\` \`__doc\` \`__amount\` \`__icon\` \`__panel\` \`__head\` \`__route\` \`__party\` \`__sum\` \`__total\` \`__details\` \`__actions\`) |
| Forms | \`fh-form\` (\`__row\` \`__actions\`) \`fh-field\` (\`--optional\` \`__hint\` \`__error\`) \`fh-input\` \`fh-textarea\` \`fh-select\` \`fh-select-wrap\` \`fh-input-group\` \`fh-check\` \`fh-switch\` \`fh-segmented\` |
| Disclosure | \`fh-accordion\` \`fh-tabs\` (\`--mono\`) \`fh-dialog\` (\`__header\` \`__body\` \`__footer\`) \`fh-menu\` \`fh-toaster\` \`fh-toast\` |
| Chrome | \`fh-header\` (\`__bar\` \`__brand\` \`__actions\` \`__toggle\`) \`fh-nav\` \`fh-nav__link\` \`fh-drawer\` (\`__group\`) \`fh-mega\` (\`__grid\` \`__rail\`) \`fh-footer\` (\`__columns\` \`__column\` \`__base\`) |
| Patterns | \`fh-hero\` \`fh-hero__actions\` \`fh-hero-split\` \`fh-section-head\` \`fh-etched-split\` (\`__pane\`) \`fh-cta-band\` (\`__main\` \`__title\` \`__aside\` \`__people\` \`__fine\`) \`fh-window\` (\`__bar\` \`__body\`) \`fh-letter\` (\`__portrait\`) \`fh-panel\` \`fh-panel-inset\` \`[data-fh-panel-start]\` \`fh-footer--tall\` |
| Media | \`fh-canvas\` (\`__body\` \`__top\` \`__main\` \`__foot\` \`__title\` \`__sub\` \`__eyebrow\` \`__mark\` \`__badge\` \`__index\` \`__cubes\` \`__media\` \`__ui\` (\`--crop\`) \`--og\` \`--yt-thumb\` \`--yt-banner\` \`--x-header\` \`--li-banner\` \`--post\` \`--square\` \`--story\` \`--cover\` \`--card\` \`--center\` \`--split\` \`--row\` \`--plain\` \`--plate\` \`--native\` \`__cubes--rows\`) \`[data-fh-guides]\` |
| Slides | \`fh-slide\` (\`--title\` \`--section\` \`--middle\` \`__list\` \`__stats\` \`__quote\` \`__cite\` \`__code\`) on an \`fh-canvas\`; reveal.js: \`dist/reveal.css\` |
| Helpers | \`fh-sr-only\` \`fh-skip\` \`fh-reveal\` \`fh-reveal-children\` \`fh-hide-narrow\` \`fh-hide-wide\` \`fh-tone-text\` \`fh-text-start|center|end\` \`fh-nowrap\` \`fh-tabular\` \`fh-full\` |

Attributes: \`data-tone\` (tone), \`data-fh-scheme\` (light | dark | auto),
\`data-fh-theme\` (brand), \`data-cols\` (grid max columns), \`data-label\` (table reflow).

## Page chrome

\`\`\`html
<div class="fh-page">
  <header class="fh-header fh-frame">
    <div class="fh-header__bar">
      <a class="fh-header__brand" href="/">Brand</a>
      <nav class="fh-nav" aria-label="Primary">
        <a class="fh-nav__link" href="/work">Work</a>
        <button class="fh-nav__link" type="button" popovertarget="mega-services">Services</button>
      </nav>
      <div class="fh-header__actions"><a class="fh-button fh-button--sm" href="/contact">Contact</a></div>
      <button class="fh-header__toggle" type="button" popovertarget="drawer" aria-label="Open menu"></button>
    </div>
  </header>
  <div id="mega-services" popover class="fh-mega fh-frame">
    <div class="fh-mega__grid">
      <section data-tone="sky"><h3>Agents</h3><ul><li><a href="#">…</a></li></ul></section>
    </div>
    <div class="fh-mega__rail"><a class="fh-action" href="/services">All services</a></div>
  </div>
  <div id="drawer" popover class="fh-drawer">
    <div class="fh-drawer__group"><p class="fh-label">Menu</p><ul><li><a href="/work">Work</a></li></ul></div>
  </div>
  <main id="main" class="fh-main">
    <section class="fh-section fh-section--hero">
      <div class="fh-hero">
        <p class="fh-eyebrow-pill" data-tone="live"><span class="fh-dot fh-dot--live"></span>Now booking</p>
        <h1 class="fh-display">Headline in sentence case.</h1>
        <p class="fh-lede">One or two sentences.</p>
        <div class="fh-hero__actions"><a class="fh-button" href="/contact">Primary</a><a class="fh-button fh-button--secondary" href="/work">Secondary</a></div>
      </div>
    </section>
    <section class="fh-section fh-section--ruled" aria-labelledby="s1">
      <header class="fh-section-head">
        <div><p class="fh-eyebrow-pill" data-tone="teal"><span class="fh-dot"></span>Label</p><h2 id="s1" class="fh-heading">Section title</h2></div>
        <a class="fh-action fh-action--lg" href="#">View all</a>
      </header>
      <!-- components -->
    </section>
  </main>
  <footer class="fh-footer fh-frame">
    <nav class="fh-footer__columns" aria-label="Footer">
      <div class="fh-footer__column" data-tone="sky"><h2>Group</h2><ul><li><a href="#">Link</a></li></ul></div>
    </nav>
    <div class="fh-footer__base"><span>© Brand</span></div>
  </footer>
</div>
\`\`\`

## Etched split (full-bleed pair)

\`\`\`html
<section class="fh-section fh-section--flush">
  <div class="fh-etched-split fh-bleed">
    <div class="fh-etched-split__pane fh-crosses">…problem…</div>
    <div class="fh-etched-split__pane fh-crosses">…approach or form…</div>
  </div>
</section>
\`\`\`

## Components

`;
for (const b of blocks) if (tagged[ids[b.title]]) b.code = tagged[ids[b.title]];
for (const b of blocks) md += `### ${ids[b.title] ? ids[b.title] + " · " : ""}${b.title}\n\n${b.note ? b.note + "\n\n" : ""}\`\`\`html\n${b.code}\n\`\`\`\n\n`;
writeFileSync(join(root, "agent/components.md"), md);
console.log(`agent/components.md: ${blocks.length} components`);

// agent/schema.md: the Schema.org contract, generated from schema/mappings.json.
const map = JSON.parse(readFileSync(join(root, "schema/mappings.json"), "utf8"));
let sm = `# Firehorse structured data (Schema.org)

Firehorse publishes Schema.org JSON-LD from the components on the page.
You mark the component; the tool writes the JSON-LD from the visible
content and fails the build if the two ever disagree.

## Workflow

1. Add \`data-schema\` to components that hold **real** content (table below).
2. Hand-write the page-level nodes in \`<head>\`: one \`Organization\` with an
   \`@id\`, and \`WebSite\` on the home page. Generated nodes link to the
   Organization as provider or seller.
3. Run \`npx firehorse-schema <file.html> --write\` after building the page.
   It writes \`<script type="application/ld+json" id="fh-schema">\` and
   leaves your hand-written blocks alone.
4. In CI run \`npx firehorse-schema <file.html>\` (no \`--write\`). It exits 1
   when JSON-LD is invalid, missing required properties, or doesn't match
   the page.

## Components

| Component | Attribute | Schema.org type | Built from | Must match |
| --- | --- | --- | --- | --- |
`;
for (const c of map.components) sm += `| \`${c.component}\` | \`${c.attribute}\` | ${c.type} | ${c.from} | ${c.parity} |\n`;
sm += `
Extra attributes: \`data-currency\` (ISO 4217, default USD) on \`fh-tiers\`,
\`data-schema-name\` on \`fh-tiers\` / \`fh-steps\`, \`data-schema-item\` on
\`fh-testimonial\`, \`data-schema-author\` on \`fh-prose\`. Use
\`data-schema="none"\` to silence a hint on content you don't want published.

## Page-level nodes

`;
for (const p of map.page) sm += `- **${p.type}**: required ${p.required.map((r) => `\`${r}\``).join(", ")}${p.recommended ? `; recommended ${p.recommended.map((r) => `\`${r}\``).join(", ")}` : ""}. ${p.note}\n`;
sm += `
## Required properties the checker enforces

${Object.entries(map.rules).map(([t, r]) => `- ${t}: ${r.map((x) => `\`${x}\``).join(", ")}`).join("\n")}

Also: Offer \`price\` is a plain number and \`priceCurrency\` a 3-letter code;
BreadcrumbList positions run 1, 2, 3… in order.

## NEVER

- Mark demo, sample or placeholder content with \`data-schema\`.
- Write JSON-LD that says something the page doesn't show.
- Invent reviews, ratings, prices, people or dates.
- Mark AI agents, mascots or sample personas as \`Person\`.
- Hand-edit the \`#fh-schema\` block; change the page and regenerate.
`;
writeFileSync(join(root, "agent/schema.md"), sm);
console.log(`agent/schema.md: ${map.components.length} component mappings`);
