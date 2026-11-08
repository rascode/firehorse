#!/usr/bin/env node
/**
 * firehorse-schema — Schema.org structured data for Firehorse pages.
 *
 *   npx firehorse-schema page.html [more.html…] [--write] [--base https://example.com/page] [--quiet]
 *
 * Reads components marked with data-schema (see schema/mappings.json),
 * builds the matching JSON-LD from the visible content, and checks that
 * every JSON-LD block on the page is valid and agrees with what's shown.
 *
 *   (default)  check only: exit 1 on any error
 *   --write    also write the generated JSON-LD into <head> as
 *              <script type="application/ld+json" id="fh-schema">, replacing
 *              the previous one. Hand-written blocks are left alone.
 *   --base     absolute URL of the page, used to resolve relative links
 *              (breadcrumb items, images). Defaults to <link rel=canonical>
 *              or og:url when the page has one.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "node-html-parser";

const here = dirname(fileURLToPath(import.meta.url));
const MAP = JSON.parse(readFileSync(join(here, "../schema/mappings.json"), "utf8"));
const RULES = MAP.rules;
const CTX = MAP.context;

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => { const i = args.indexOf(n); return i > -1 ? args[i + 1] : undefined; };
const files = args.filter((a, i) => !a.startsWith("--") && args[i - 1] !== "--base");
if (!files.length) {
  console.log("Usage: firehorse-schema <file.html…> [--write] [--base URL] [--quiet]");
  process.exit(2);
}

const text = (el) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const same = (a, b) => text({ textContent: a }).toLowerCase() === text({ textContent: b }).toLowerCase();
const types = (n) => [].concat(n?.["@type"] ?? []);
const is = (n, t) => types(n).includes(t);

/* —— Generate JSON-LD from data-schema components —— */
function generate(root, base, orgRef) {
  const abs = (href) => { try { return new URL(href, base).href; } catch { return href; } };
  const nodes = [];
  for (const el of root.querySelectorAll("[data-schema]")) {
    const kind = el.getAttribute("data-schema");
    const label = `${el.rawTagName}.${(el.classList.value[0] ?? "")}[data-schema="${kind}"]`;
    if (kind === "none") continue;

    if (kind === "breadcrumb") {
      const crumbs = el.querySelectorAll("ol > li, ul > li").map((li) => {
        const a = li.querySelector("a");
        return { name: text(li), href: a?.getAttribute("href") };
      }).filter((c) => c.name);
      nodes.push({ label, el, node: {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem", position: i + 1, name: c.name,
          ...(c.href ? { item: abs(c.href) } : base ? { item: base } : {}),
        })),
      } });
    }

    if (kind === "faq") {
      const qa = el.querySelectorAll("details").map((d) => {
        const q = text(d.querySelector("summary"));
        const a = text({ textContent: d.childNodes.filter((c) => c.rawTagName !== "summary").map((c) => c.textContent).join(" ") });
        return { q, a };
      }).filter((x) => x.q && x.a);
      nodes.push({ label, el, node: {
        "@type": "FAQPage",
        mainEntity: qa.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      } });
    }

    if (kind === "offers") {
      const currency = el.getAttribute("data-currency") ?? "USD";
      const name = el.getAttribute("data-schema-name") ?? text(el.closest("section")?.querySelector("h2, h3"));
      const offers = el.querySelectorAll(".fh-tier").map((t) => {
        const price = (text(t.querySelector(".fh-tier__price")).match(/[\d.,]+/) ?? [""])[0].replace(/,/g, "");
        return { "@type": "Offer", name: text(t.querySelector(".fh-tier__name")), price, priceCurrency: currency, ...(orgRef ? { seller: orgRef } : {}) };
      });
      nodes.push({ label, el, node: { "@type": "Service", name, ...(orgRef ? { provider: orgRef } : {}), offers } });
    }

    if (kind === "service") {
      const name = text(el.querySelector(".fh-card__title"));
      const description = text(el.querySelector(".fh-card__body"));
      const serviceType = text(el.querySelector(".fh-card__meta"));
      nodes.push({ label, el, node: {
        "@type": "Service", name,
        ...(description ? { description } : {}),
        ...(serviceType ? { serviceType } : {}),
        ...(orgRef ? { provider: orgRef } : {}),
      } });
    }

    if (kind === "review") {
      const who = el.querySelector(".fh-person__text b");
      const item = el.getAttribute("data-schema-item");
      nodes.push({ label, el, node: {
        "@type": "Review",
        reviewBody: text(el.querySelector("blockquote")),
        author: { "@type": "Person", name: text(who) },
        ...(item ? { itemReviewed: { "@type": "Thing", name: item } } : {}),
      } });
    }

    if (kind === "howto") {
      const name = el.getAttribute("data-schema-name") ?? text(el.closest("section")?.querySelector("h2, h3"));
      const steps = el.childNodes.filter((c) => c.rawTagName === "li").map((li) => ({
        "@type": "HowToStep", name: text(li.querySelector("h3, h4, b")), text: text(li.querySelector("p")) || text(li),
      }));
      nodes.push({ label, el, node: { "@type": "HowTo", name, step: steps } });
    }

    if (kind === "person") {
      const t = el.querySelector(".fh-person__text");
      const img = el.querySelector("img")?.getAttribute("src");
      nodes.push({ label, el, node: {
        "@type": "Person", name: text(t?.querySelector("b")),
        ...(text(t?.querySelector("span")) ? { jobTitle: text(t.querySelector("span")) } : {}),
        ...(img ? { image: abs(img) } : {}),
      } });
    }

    if (kind === "article") {
      const time = el.querySelector("time[datetime]")?.getAttribute("datetime");
      const author = el.getAttribute("data-schema-author");
      nodes.push({ label, el, node: {
        "@type": "Article", headline: text(el.querySelector("h1, h2")),
        ...(author ? { author: { "@type": "Person", name: author } } : {}),
        ...(time ? { datePublished: time } : {}),
      } });
    }

    if (!["breadcrumb", "faq", "offers", "service", "review", "howto", "person", "article"].includes(kind)) {
      nodes.push({ label, el, unknown: kind });
    }
  }
  return nodes;
}

/* —— Validate a JSON-LD graph —— */
function flatten(value, out = []) {
  if (Array.isArray(value)) value.forEach((v) => flatten(v, out));
  else if (value && typeof value === "object") {
    if (value["@type"]) out.push(value);
    for (const [k, v] of Object.entries(value)) if (k !== "@context") flatten(v, out);
  }
  return out;
}

function validateNode(n, where, problems) {
  for (const t of types(n)) {
    for (const prop of RULES[t] ?? []) {
      const v = n[prop];
      const empty = v == null || v === "" || (Array.isArray(v) && !v.length);
      // Nodes that only reference another node by @id are fine.
      if (empty && !(Object.keys(n).length <= 2 && n["@id"])) problems.push({ level: "error", where, msg: `${t} is missing "${prop}"` });
    }
    if (t === "Offer" && n.price != null && !/^\d+(\.\d+)?$/.test(String(n.price))) problems.push({ level: "error", where, msg: `Offer price "${n.price}" must be a plain number` });
    if (t === "Offer" && n.priceCurrency && !/^[A-Z]{3}$/.test(n.priceCurrency)) problems.push({ level: "error", where, msg: `priceCurrency "${n.priceCurrency}" must be a 3-letter ISO 4217 code` });
    if (t === "BreadcrumbList") (n.itemListElement ?? []).forEach((li, i) => {
      if (li.position !== i + 1) problems.push({ level: "error", where, msg: `BreadcrumbList item ${i + 1} has position ${li.position}` });
      if (li.item && !/^https?:\/\//.test(li.item)) problems.push({ level: "warn", where, msg: `Breadcrumb item "${li.name}" is a relative URL; pass --base or add <link rel="canonical">` });
    });
    if (!RULES[t]) problems.push({ level: "warn", where, msg: `No Firehorse rule for type "${t}" (not checked)` });
  }
}

/* —— Parity: does the page's JSON-LD say what the page shows? —— */
function parity(gen, existing, problems) {
  const pool = existing.filter((n) => !n.__generated);
  for (const g of gen) {
    if (g.unknown) { problems.push({ level: "error", where: g.label, msg: `Unknown data-schema value "${g.unknown}"` }); continue; }
    const want = g.node;
    const t = types(want)[0];
    const candidates = existing.filter((n) => is(n, t));
    if (!candidates.length) { problems.push({ level: "error", where: g.label, msg: `No ${t} JSON-LD on the page. Run with --write to add it.` }); continue; }
    const match = candidates.find((n) => {
      if (t === "FAQPage") {
        const qs = [].concat(n.mainEntity ?? []);
        return qs.length === want.mainEntity.length && want.mainEntity.every((q, i) => same(qs[i]?.name ?? "", q.name) && same(qs[i]?.acceptedAnswer?.text ?? "", q.acceptedAnswer.text));
      }
      if (t === "BreadcrumbList") {
        const li = [].concat(n.itemListElement ?? []);
        return li.length === want.itemListElement.length && want.itemListElement.every((x, i) => same(li[i]?.name ?? "", x.name));
      }
      if (t === "Service" && want.offers) {
        const o = [].concat(n.offers ?? []);
        return o.length === want.offers.length && want.offers.every((x, i) => String(o[i]?.price) === String(x.price) && same(o[i]?.name ?? "", x.name));
      }
      if (t === "HowTo") return [].concat(n.step ?? []).length === want.step.length;
      if (t === "Review") return same(n.reviewBody ?? "", want.reviewBody);
      if (t === "Article") return same(n.headline ?? "", want.headline);
      return same(n.name ?? "", want.name ?? "");
    });
    if (!match) problems.push({ level: "error", where: g.label, msg: `${t} JSON-LD doesn't match the visible content. Run with --write to regenerate it.` });
  }
  void pool;
}

/* —— Hints for content that probably should be marked —— */
function hints(root, problems) {
  for (const el of root.querySelectorAll("nav.fh-breadcrumb:not([data-schema]), .fh-accordion:not([data-schema]), .fh-tiers:not([data-schema])")) {
    if (el.closest("[data-demo]")) continue;
    const kind = el.classList.contains("fh-breadcrumb") ? "breadcrumb" : el.classList.contains("fh-tiers") ? "offers" : "faq";
    problems.push({ level: "hint", where: `.${el.classList.value[0]}`, msg: `Real content? Add data-schema="${kind}" to publish it as structured data, or data-schema="none" to silence this.` });
  }
}

let errors = 0;
for (const file of files) {
  const html = readFileSync(file, "utf8");
  const root = parse(html, { comment: true });
  const base = opt("--base") ?? root.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? root.querySelector('meta[property="og:url"]')?.getAttribute("content");
  const problems = [];

  const blocks = root.querySelectorAll('script[type="application/ld+json"]');
  const handBlocks = blocks.filter((b) => b.getAttribute("id") !== "fh-schema");
  const hand = [];
  for (const b of handBlocks) {
    try {
      const data = JSON.parse(b.textContent);
      for (const top of [].concat(data)) {
        if (!String(top["@context"] ?? "").includes("schema.org")) problems.push({ level: "error", where: "ld+json", msg: `Missing "@context": "${CTX}"` });
      }
      hand.push(...flatten(data));
    } catch (e) { problems.push({ level: "error", where: "ld+json", msg: `Invalid JSON: ${e.message}` }); }
  }
  const org = hand.find((n) => is(n, "Organization") && n["@id"]);
  const orgRef = org ? { "@id": org["@id"] } : undefined;

  const gen = generate(root, base, orgRef);
  const generated = gen.filter((g) => !g.unknown).map((g) => g.node);
  let existingGenerated = [];

  if (flag("--write")) {
    const old = root.querySelector('script#fh-schema');
    const payload = generated.length ? JSON.stringify({ "@context": CTX, "@graph": generated }, null, 2) : null;
    let out = html;
    const tag = payload ? `<script type="application/ld+json" id="fh-schema">\n${payload}\n</script>` : "";
    if (old) out = out.replace(/<script type="application\/ld\+json" id="fh-schema">[\s\S]*?<\/script>\n?/, tag ? tag + "\n" : "");
    else if (tag) out = out.replace("</head>", `${tag}\n</head>`);
    writeFileSync(file, out);
    existingGenerated = flatten(generated);
  } else {
    const old = root.querySelector('script#fh-schema');
    if (old) {
      try { existingGenerated = flatten(JSON.parse(old.textContent)); }
      catch (e) { problems.push({ level: "error", where: "#fh-schema", msg: `Invalid JSON: ${e.message}` }); }
    }
  }

  const all = [...hand, ...existingGenerated];
  for (const n of all) validateNode(n, types(n).join("/") || "node", problems);
  parity(gen, all, problems);
  hints(root, problems);

  const count = (l) => problems.filter((p) => p.level === l).length;
  errors += count("error");
  const summary = [...new Set(all.map((n) => types(n)[0]))].filter((t) => !["ListItem", "Question", "Answer", "Offer", "HowToStep", "Thing"].includes(t));
  const head = count("error") ? "✗" : "✓";
  console.log(`${head} ${file}: ${summary.length ? summary.join(", ") : "no structured data"}${flag("--write") && generated.length ? ` (wrote ${generated.length} generated node${generated.length > 1 ? "s" : ""})` : ""}`);
  for (const p of problems) {
    if (flag("--quiet") && p.level !== "error") continue;
    console.log(`  ${p.level === "error" ? "error" : p.level === "warn" ? "warn " : "hint "} ${p.where}: ${p.msg}`);
  }
}
process.exit(errors ? 1 : 0);
