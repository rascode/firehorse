// The 404 page: the built home page's chrome (header, menus, footer, themes,
// KC) around a short "not here" message. Cloudflare serves it for unknown
// paths (wrangler.jsonc: not_found_handling = "404-page").
// Run after site.mjs (part of `npm run site`).
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "site/dist");
let html = readFileSync(join(out, "index.html"), "utf8");

const main = `<main id="main" class="fh-main">
  <section class="fh-section site-not-found" aria-labelledby="nf-title">
    <div class="fh-stack fh-stack--lg" style="max-inline-size: 44rem">
      <p class="fh-eyebrow-pill" data-tone="accent"><span class="fh-dot"></span><span class="fh-eyebrow-pill__seg">404</span><span class="fh-eyebrow-pill__seg"><strong>Not found</strong></span></p>
      <h1 id="nf-title" class="fh-display">This page has wandered off.</h1>
      <p class="fh-lede">The link may be old, or the page moved when the docs split into sections. Everything is still here, one click away.</p>
      <div class="fh-cluster" style="--fh-gap: var(--fh-space-3)">
        <a class="fh-button" href="/"><span class="fh-roll">Home</span></a>
        <a class="fh-button fh-button--secondary" href="/components/"><span class="fh-roll">Components</span></a>
        <a class="fh-button fh-button--secondary" href="/stable/"><span class="fh-roll">The Stable</span></a>
      </div>
      <p class="fh-muted">Looking for a component? Press <kbd class="fh-kbd">⌘K</kbd> and type its name or Index ID.</p>
    </div>
  </section>
</main>`;
const swapped = html.replace(/<main[\s\S]*?<\/main>/, main);
if (swapped === html) { console.error("✗ not-found: no <main> in site/dist/index.html"); process.exit(1); }
html = swapped
  .replace(/<title>[\s\S]*?<\/title>/, "<title>Not found · Firehorse</title>")
  .replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="This page isn\'t here. Firehorse docs, components and The Stable are one click away.">\n<meta name="robots" content="noindex">')
  .replace(/<link rel="canonical"[^>]*>\n?/, "")
  .replace(/<script type="application\/ld\+json"[\s\S]*?<\/script>\n?/g, "");
writeFileSync(join(out, "404.html"), html);
console.log("404: site/dist/404.html");
