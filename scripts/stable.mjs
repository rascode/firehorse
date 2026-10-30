// The Stable — the Firehorse blog. Builds site/dist/stable/ from Markdown
// posts in site/stable/posts/*.md (front matter + body):
//   stable/index.html          the blog front page
//   stable/<slug>/index.html   each post
//   stable/feed.xml            RSS
// Run after scripts/site.mjs (it writes into site/dist).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";
import { assemble, part, absolutize } from "./pages.mjs";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "site/dist/stable");
const BASE = "https://firehorse.rascode.dev";
// Cache stamps so a deploy never serves a stale stylesheet or script.
const stamp = (f) => createHash("sha1").update(readFileSync(join(root, "site/stable", f))).digest("hex").slice(0, 8);
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const horse = readFileSync(join(root, "site/parts/horse.svg"), "utf8").trim();
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// The site header is shared: site/parts/header.html, same as every docs page.
const ctx = assemble();
const header = (() => {
  let h = part("header");
  for (const [k, v] of Object.entries(ctx.nav)) h = h.replace(k, () => v);
  h = absolutize(h).replace(/href="#([^"]+)"/g, (t, id) => {
    const to = ctx.where.get(id) ?? "/";
    return to.endsWith("#") ? `href="${to.slice(0, -1)}"` : `href="${to}#${id}"`;
  });
  return h.replace(/(<a class="fh-nav__link") (href="\/stable\/")/, '$1 aria-current="page" $2')
    .replace(/(<li><a) (href="\/stable\/")/, '$1 aria-current="page" $2');
})();
const TOPICS = {
  release: { name: "Release", tone: "accent" },
  agents: { name: "Agents", tone: "sky" },
  components: { name: "Components", tone: "amber" },
  index: { name: "Index", tone: "teal" },
  pro: { name: "Pro", tone: "fuchsia" },
};

// —— Posts ——
const posts = readdirSync(join(root, "site/stable/posts")).filter((f) => f.endsWith(".md")).map((f) => {
  const src = readFileSync(join(root, "site/stable/posts", f), "utf8");
  const [, fm, body] = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const meta = Object.fromEntries(fm.split("\n").map((l) => l.match(/^(\w+):\s*(.*)$/)).filter(Boolean).map(([, k, v]) => [k, v.startsWith("[") ? v.slice(1, -1).split(",").map((x) => x.trim()) : v]));
  const words = body.replace(/```[\s\S]*?```/g, "").split(/\s+/).length;
  // Release posts carry the version they announce (front matter `version: 1.1`).
  if (meta.topics?.includes("release") && !meta.version) throw new Error(`stable: ${f} is a release post but has no \`version:\` in its front matter`);
  return { ...meta, body, minutes: Math.max(1, Math.round(words / 230)), words };
}).sort((a, b) => b.date.localeCompare(a.date));

const fmtDate = (d, opt = { month: "long", day: "numeric", year: "numeric" }) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { ...opt, timeZone: "UTC" });
const unent = (t) => t.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const slugify = (t) => unent(t).toLowerCase().replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Markdown → Firehorse prose: section ids for the table of contents,
// figures for images, an aside for the TL;DR list.
function render(md) {
  const toc = [];
  const r = new marked.Renderer();
  r.heading = ({ tokens, depth }) => {
    const html = marked.Parser.parseInline(tokens);
    const id = slugify(html);
    if (depth === 2) toc.push({ id, text: unent(html.replace(/<[^>]+>/g, "")) });
    return `<h${depth} id="${id}">${html}</h${depth}>\n`;
  };
  r.image = ({ href, text }) => `</p><figure class="stable-figure"><img src="${href}" alt="${esc(text)}" loading="lazy" decoding="async"></figure><p>`;
  let html = marked.parse(md, { renderer: r }).replace(/<p><\/p>/g, "").replace(/<p>\s*<\/p>/g, "");
  // TL;DR → "In short": a ruled table of numbered rows. Each item may lead
  // with an icon name in colons (`- :palette: Themes …`).
  html = html.replace(/<p><strong>TL;DR<\/strong><\/p>\s*<ul>([\s\S]*?)<\/ul>/, (_, list) => {
    const items = [...list.matchAll(/<li>([\s\S]*?)<\/li>/g)].map(([, t]) => t.trim());
    const rows = items.map((t, i) => {
      const [, icon = "check", text] = t.match(/^(?::([a-z0-9-]+):\s*)?([\s\S]*)$/);
      return `<li><span class="fh-cube fh-cube--outline stable-tldr__n">${String(i + 1).padStart(2, "0")}</span><span class="fh-icon fh-icon--${icon} stable-tldr__icon" aria-hidden="true"></span><span class="stable-tldr__text">${text}</span></li>`;
    }).join("");
    return `<aside class="stable-tldr" aria-labelledby="tldr-title"><header class="stable-tldr__head"><p class="fh-label" id="tldr-title">In short</p><span class="fh-label stable-tldr__count">${items.length} points</span></header><ol class="stable-tldr__rows">${rows}</ol></aside>`;
  });
  // Section rhythm: a rule before every h2 except the first.
  let first = true;
  html = html.replace(/<h2 /g, (m) => (first ? ((first = false), m) : `<hr class="stable-rule">\n${m}`));
  return { html, toc };
}

// —— Shared chrome ——
const head = ({ title, description, path, type = "website", image, jsonld }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#161616">
<meta name="fh-kc-endpoint" content="">
<!-- Subscribe endpoint (POST JSON {fields:{name,email,list,source}}). Empty: the form explains it isn't open yet. -->
<meta name="fh-subscribe-endpoint" content="https://api.rascode.dev/v1/forms/firehorse/stable-subscribe">
<link rel="canonical" href="${BASE}${path}">
<link rel="alternate" type="application/rss+xml" title="The Stable" href="${BASE}/stable/feed.xml">
<meta property="og:type" content="${type}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${BASE}${path}">
${image ? `<meta property="og:image" content="${BASE}${image}">\n<meta name="twitter:card" content="summary_large_image">` : ""}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300..700&display=swap">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/firehorse.css">
<link rel="stylesheet" href="/themes/rascode.css">
<link rel="stylesheet" href="/themes.css">
<script>try{var t=localStorage.getItem("fh-theme");if(t!==null)t?document.documentElement.setAttribute("data-fh-theme",t):document.documentElement.removeAttribute("data-fh-theme")}catch(e){}</script>
<link rel="stylesheet" href="/icons.css">
<link rel="stylesheet" href="/site.css?v=${createHash("sha1").update(readFileSync(join(root, "site/site.css"))).digest("hex").slice(0, 8)}">
<link rel="stylesheet" href="/stable/stable.css?v=${stamp("stable.css")}">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ""}
</head>
<body>
<a class="fh-skip" href="#main">Skip to content</a>
<div class="fh-page">
${horse}
${header}
<main id="main" class="fh-main">`;

const subscribe = (source, placement) => `
<section class="fh-section fh-section--ruled stable-subscribe" id="subscribe" data-tone="accent" aria-labelledby="subscribe-title">
  <div class="fh-split fh-split--wide-start">
    <div class="fh-stack fh-stack--lg">
      <p class="fh-eyebrow-pill" data-tone="accent"><span class="fh-dot fh-dot--live"></span><span class="fh-eyebrow-pill__seg">The Stable</span><span class="fh-eyebrow-pill__seg"><strong>By email</strong></span></p>
      <h2 class="fh-heading" id="subscribe-title">New posts, in your inbox</h2>
      <p class="fh-lede">Highlights when something ships, or every detailed change if you build on Firehorse Pro. No more than you'd want. Unsubscribe from any email.</p>
      <p class="fh-small fh-muted">Prefer a reader? <a class="fh-link" href="/stable/feed.xml">RSS feed</a>.</p>
    </div>
    <form class="fh-form stable-form" data-subscribe data-source="${esc(source)}" data-placement="${esc(placement)}" novalidate>
      <div class="fh-field"><label for="sub-name">Name</label><input class="fh-input" id="sub-name" name="name" autocomplete="name"></div>
      <div class="fh-field"><label for="sub-email">Email</label><input class="fh-input" id="sub-email" name="email" type="email" autocomplete="email" required aria-describedby="sub-email-error"><p class="fh-field__error" id="sub-email-error">Enter an email address so we know where to send it.</p></div>
      <fieldset class="fh-choice-cards stable-lists"><legend class="fh-label">What to send</legend>
        <label class="fh-choice-card"><input type="radio" name="list" value="highlights" checked><span><b>Highlights</b><small>Releases and big ideas</small></span></label>
        <label class="fh-choice-card"><input type="radio" name="list" value="pro"><span><b>Every change</b><small>Detailed notes for Pro customers</small></span></label>
      </fieldset>
      <input type="text" name="_hp" tabindex="-1" autocomplete="off" class="fh-sr-only" aria-hidden="true">
      <div class="fh-form__actions"><button class="fh-button" type="submit"><span class="fh-roll">Subscribe</span></button></div>
      <p class="stable-form__status fh-small" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>`;

const foot = () => `</main>
<footer class="fh-footer fh-frame">
  <div class="fh-footer__base"><p>The Stable · the Firehorse blog · <a href="/">firehorse.rascode.dev</a> · <a href="/stable/feed.xml">RSS</a></p><p>© Rascode · KC's face traced from <a href="https://commons.wikimedia.org/wiki/File:Frison_au_galop_dans_la_neige.JPG">a photo by Fchosson</a>, CC BY-SA 3.0</p></div>
</footer>
</div>
<div class="fh-toaster" role="region" aria-label="Notifications" id="toaster"></div>
<script type="module" src="/firehorse.js"></script>
<script src="/attribution.js" defer></script>
<script src="/site.js?v=${createHash("sha1").update(readFileSync(join(root, "site/site.js"))).digest("hex").slice(0, 8)}" defer></script>
<script src="/stable/stable.js?v=${stamp("stable.js")}" defer></script>
<script type="module" src="/site-index.js"></script>
</body>
</html>
`;

// The post's eyebrow pill: The Stable · Topic · vX.Y (release posts).
const postPill = (p, topic) => `<p class="fh-eyebrow-pill" data-tone="${topic.tone}"><span class="fh-dot fh-dot--live"></span><span class="fh-eyebrow-pill__seg"><a href="/stable/">The Stable</a></span><span class="fh-eyebrow-pill__seg"><strong>${esc(topic.name)}</strong></span>${p.version ? `<span class="fh-eyebrow-pill__seg">v${esc(String(p.version).replace(/^v/i, ""))}</span>` : ""}</p>`;
const topicChips = (keys = []) => `<ul class="fh-chips fh-chips--wrap stable-topics" aria-label="Topics">${keys.map((k) => TOPICS[k] ?? { name: k, tone: "neutral" }).map((t) => `<li><span class="fh-chip fh-chip--sm" data-tone="${t.tone}">${esc(t.name)}</span></li>`).join("")}</ul>`;
const initials = (n) => n.split(/\s+/).filter((w) => /^[A-Z]/.test(w)).slice(-2).map((w) => w[0]).join("");

mkdirSync(out, { recursive: true });
for (const f of ["stable.css", "stable.js"]) copyFileSync(join(root, "site/stable", f), join(out, f));
mkdirSync(join(out, "img"), { recursive: true });
for (const f of readdirSync(join(root, "site/stable/img"))) copyFileSync(join(root, "site/stable/img", f), join(out, "img", f));

// —— Post pages ——
for (const p of posts) {
  const { html, toc } = render(p.body.replace(/\(\.\.\/img\//g, "(/stable/img/"));
  const topic = TOPICS[p.topics?.[0]] ?? { name: "Field note", tone: "accent" };
  const path = `/stable/${p.slug}/`;
  const jsonld = { "@context": "https://schema.org", "@graph": [
    { "@type": "BlogPosting", headline: p.title, description: p.description, datePublished: p.date, url: `${BASE}${path}`, image: p.cover ? `${BASE}/stable/img/${p.cover}.webp` : undefined, author: { "@type": "Person", name: p.author }, publisher: { "@type": "Organization", name: "Rascode", url: "https://rascode.dev" }, isPartOf: { "@type": "Blog", name: "The Stable", url: `${BASE}/stable/` } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Firehorse", item: `${BASE}/` }, { "@type": "ListItem", position: 2, name: "The Stable", item: `${BASE}/stable/` }, { "@type": "ListItem", position: 3, name: p.title, item: `${BASE}${path}` }] },
  ] };
  const page = head({ title: `${p.title} · The Stable`, description: p.description, path, type: "article", image: p.cover ? `/stable/img/${p.cover}.webp` : null, jsonld }) + `
<script>document.documentElement.toggleAttribute("data-stable-top", scrollY < 1)</script>
<article class="stable-post" data-tone="${topic.tone}">
  <div class="fh-dock fh-frame stable-dock" data-tone="${topic.tone}" data-follow>
    <div class="fh-dock__bar">
      <div class="fh-dock__identity">
        ${postPill(p, topic)}
        <p class="fh-dock__title stable-dock__title">${esc(p.title)}</p>
      </div>
      <ul class="fh-cubes stable-dock__cubes" aria-label="Reading">
        <li><b class="fh-cube">${p.minutes}</b> min read</li>
        <li><b class="fh-cube" data-progress>0%</b> read</li>
      </ul>
      <div class="fh-dock__actions"><a class="fh-button fh-button--sm fh-button--outline" href="#subscribe"><span class="fh-roll">Subscribe</span></a></div>
    </div>
    <span class="fh-dock__progress" aria-hidden="true"></span>
  </div>

  <header class="fh-section stable-head">
    <div class="stable-measure stable-head__top">
      ${postPill(p, topic)}
      <h1 class="fh-display stable-title">${esc(p.title)}</h1>
    </div>
    <div class="fh-frame stable-byline-strip"><div class="stable-measure"><div class="stable-byline">
      <span class="stable-author"><span class="fh-avatar fh-avatar--circle stable-author__mark" aria-hidden="true">${initials(p.author)}</span><span><b>${esc(p.author)}</b><small>${esc(p.role ?? "")}</small></span></span>
      <ul class="fh-cubes" data-tone="${topic.tone}">
        <li><b class="fh-cube"><time datetime="${p.date}">${fmtDate(p.date, { month: "short", day: "numeric" })}</time></b> ${fmtDate(p.date, { year: "numeric" })}</li>
        <li><b class="fh-cube">${p.minutes}</b> min read</li>
      </ul>
      ${topicChips(p.topics)}
    </div></div></div>
    <div class="stable-measure"><p class="fh-lede stable-deck">${esc(p.description)}</p></div>
  </header>

  <div class="fh-section stable-body">
    <div class="stable-layout">
      <nav class="fh-toc stable-toc" aria-label="In this post"><p class="fh-label">In this post</p><ol>${toc.map((t) => `<li><a href="#${t.id}">${esc(t.text)}</a></li>`).join("")}</ol><span class="stable-toc__marker" aria-hidden="true"></span></nav>
      <div class="fh-prose stable-prose">
${html}
      </div>
    </div>
    <footer class="stable-foot">
      <div class="stable-author stable-author--lg"><span class="fh-avatar fh-avatar--circle stable-author__mark" aria-hidden="true">${initials(p.author)}</span><span><small>Written by</small><b>${esc(p.author)}</b><small>${esc(p.role ?? "")} · <time datetime="${p.date}">${fmtDate(p.date)}</time></small></span></div>
      <div class="fh-cluster"><a class="fh-action" href="/stable/">More from The Stable</a><button class="fh-button fh-button--sm fh-button--ghost" type="button" data-kc-open>Ask KC about it</button></div>
    </footer>
  </div>
</article>
` + subscribe(`stable:${p.slug}`, "stable-post-footer") + foot();
  mkdirSync(join(out, p.slug), { recursive: true });
  writeFileSync(join(out, p.slug, "index.html"), page);
}

// —— Front page ——
const [lead, ...rest] = posts;
const index = head({ title: "The Stable · Firehorse blog", description: "News, release notes and deep dives from Firehorse, the design system from Rascode.", path: "/stable/", jsonld: { "@context": "https://schema.org", "@type": "Blog", name: "The Stable", url: `${BASE}/stable/`, publisher: { "@type": "Organization", name: "Rascode" }, blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${BASE}/stable/${p.slug}/`, datePublished: p.date })) } }) + `
<section class="fh-section stable-hero" data-tone="accent" aria-labelledby="stable-title">
  <div class="fh-stack fh-stack--lg">
    <p class="fh-eyebrow-pill" data-tone="accent"><span class="fh-dot fh-dot--live"></span><span class="fh-eyebrow-pill__seg">Firehorse</span><span class="fh-eyebrow-pill__seg"><strong>The blog</strong></span></p>
    <h1 class="fh-display" id="stable-title">The Stable</h1>
    <p class="fh-lede">Release notes, new components and the thinking behind them. Stable by name, stable by design.</p>
  </div>
</section>
${lead ? `<section class="fh-section fh-section--ruled" aria-labelledby="latest-title">
  <a class="stable-lead fh-frame" href="/stable/${lead.slug}/" data-tone="${(TOPICS[lead.topics?.[0]] ?? {}).tone ?? "accent"}">
    ${lead.cover ? `<figure class="stable-lead__media"><img src="/stable/img/${lead.cover}.webp" alt=""></figure>` : ""}
    <div class="stable-lead__text fh-stack">
      <p class="fh-label stable-meta"><span class="fh-dot fh-dot--live"></span>Latest · <time datetime="${lead.date}">${fmtDate(lead.date)}</time> · ${lead.minutes} min read</p>
      <h2 class="fh-heading" id="latest-title">${esc(lead.title)}</h2>
      <p class="fh-muted">${esc(lead.description)}</p>
      ${topicChips(lead.topics)}
      <span class="fh-action" data-tone>Read the post</span>
    </div>
  </a>
</section>` : ""}
<section class="fh-section fh-section--ruled" aria-labelledby="archive-title">
  <header class="fh-section-head"><div><p class="fh-label">Archive</p><h2 class="fh-heading" id="archive-title">Earlier posts</h2></div></header>
  ${rest.length ? `<ul class="stable-list">${rest.map((p) => `<li><a href="/stable/${p.slug}/"><time datetime="${p.date}">${fmtDate(p.date)}</time><b>${esc(p.title)}</b><span>${esc(p.description)}</span></a></li>`).join("")}</ul>` : `<div class="fh-empty stable-empty"><p class="fh-subheading">More are on the way</p><p class="fh-muted">The next posts cover the Firehorse Index in depth, and how KC turns a description into an ID. Subscribe and they'll come to you.</p></div>`}
</section>
` + subscribe("stable:index", "stable-index-footer") + foot();
writeFileSync(join(out, "index.html"), index);

// —— RSS ——
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>The Stable</title>
<link>${BASE}/stable/</link>
<atom:link href="${BASE}/stable/feed.xml" rel="self" type="application/rss+xml"/>
<description>News, release notes and deep dives from Firehorse.</description>
<language>en</language>
${posts.map((p) => `<item><title>${esc(p.title)}</title><link>${BASE}/stable/${p.slug}/</link><guid>${BASE}/stable/${p.slug}/</guid><pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate><description>${esc(p.description)}</description></item>`).join("\n")}
</channel>
</rss>
`;
writeFileSync(join(out, "feed.xml"), rss);
console.log(`stable: ${posts.length} post(s) → site/dist/stable`);
