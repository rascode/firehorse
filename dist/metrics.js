/*!
 * Firehorse metric tiles from data: dist/metrics.js · MIT
 * ---------------------------------------------------------------
 * A Metric tile (MET) whose figure, delta, ratio and people come from the data display contract's metric context
 * (renderValue in values.js), so an amount, a share or a team reads the same in a tile as in a table or a record.
 *   money      the compact figure with its delta (VAL-4.5)        $48.2K ↑ $5.2K
 *   number     the figure with its delta (VAL-6.4)                42 ↑ 8, a series beside it as a sparkline (VAL-6.5)
 *   ratio      a ring (VAL-5.3), a meter against a target (VAL-5.4), or the figure over a bar (display: { metric: "bar" })
 *   entities   the count, with the people as a stack (VAL-3.7); one rich record (organization, application, brand,
 *              AI model) as its logo and link (VAL-3.12)
 *   duration, temporal, options, files, flags: the metric variant the grid names (count, relative, duration)
 * A field that the grid leaves out of the metric context (text, a status) names its variant: display: { metric: "line" }.
 *
 *   import { metricTile } from "@rascode/firehorse/metrics";
 *   metricTile({ key: "revenue", semanticType: "fiat_amount", currency: "USD" }, 48210,
 *     { label: "Revenue · 30 d", icon: "dollar-sign", tone: "lime", previous: 43000, sub: "vs September" });
 *   <div data-fh-metric><script type="application/json">{ "field": {…}, "value": 48210, "label": "Revenue" }</script></div>
 *
 * Options: label, icon, iconStyle ("soft" | "outline"; default the solid Icon cube), sub, source, tone, previous, good ("down" when falling is good), series (numbers for a
 * sparkline), target (a ratio's target), href (the tile opens it), modifiers (["spread", "tinted", "wide", "full",
 * "needed"]), badge (html at the end of the label), below (html under the figure), more ({ summary, html }), id (the
 * tile's Index ID), locale, now.
 */
import { renderValue, resolveValue, isEmpty } from "./values.js";

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const icon = (n) => (n ? `<i class="fh-icon fh-icon--${esc(n)}" aria-hidden="true"></i>` : "");
// The tile's icon sits in the Icon cube (CUB-1.5), the sidebar's part: solid, or iconStyle "soft" | "outline".
const cube = (n, look) => (n ? `<span class="fh-cube fh-cube--icon${look === "soft" || look === "outline" ? ` fh-cube--${look}` : ""}">${icon(n)}</span>` : "");

/** The figure (and what sits beside or under it) for a value in the metric context. */
export function metricFigure(field = {}, value, o = {}) {
  const f = o.target != null && field.target == null ? { ...field, target: o.target } : field;
  const r = resolveValue(f, "metric");
  const v = { previous: o.previous, good: o.good, locale: o.locale, now: o.now, label: o.label ?? f.label };
  if (!r.variant) return { figure: "", below: "" };
  if (r.shape === "ratio" && (r.variant === "ring" || r.variant === "meter")) return { figure: renderValue(f, value, "metric", v), below: "", direct: true };
  if (r.shape === "ratio") return { figure: `<p class="fh-metric__value">${renderValue(f, value, "record", { ...v, align: false })}</p>`, below: renderValue(f, value, "metric", v) };
  // One rich record (an organization, an application, an AI model): its logo and its link, a step up in size.
  if (r.shape === "entity" && !r.multiple) return { figure: `<div class="fh-metric__figure">${renderValue(f, value, "metric", { ...v, size: "lg" })}</div>`, below: "" };
  if (r.shape === "entity") {
    const n = isEmpty(value) ? 0 : [].concat(value).length;
    return { figure: `<div class="fh-metric__figure"><p class="fh-metric__value">${renderValue({ key: `${f.key}-count`, shape: "number" }, n, "card")}</p>${renderValue(f, value, "metric", v)}</div>`, below: "" };
  }
  const spark = o.series ? renderValue({ key: `${f.key}-series`, shape: "series", tone: o.tone }, o.series, "card", { label: v.label }) : "";
  return { figure: `<div class="fh-metric__figure"><p class="fh-metric__value">${renderValue(f, value, "metric", { ...v, align: false })}</p>${spark}</div>`, below: "" };
}

/** A whole tile. */
export function metricTile(field = {}, value, o = {}) {
  const { figure, below } = metricFigure(field, value, o);
  const tag = o.href ? "a" : "article";
  const cls = ["fh-metric", ...(o.modifiers ?? []).map((m) => `fh-metric--${m}`)].join(" ");
  const more = o.more ? `\n  <details class="fh-metric__more"><summary>${esc(o.more.summary ?? "Breakdown")} ${icon("chevron-down")}</summary>\n    ${o.more.html}\n  </details>` : "";
  return `<${tag} class="${cls}"${o.tone ? ` data-tone="${esc(o.tone)}"` : ""}${o.good ? ` data-good="${esc(o.good)}"` : ""}${o.href ? ` href="${esc(o.href)}"` : ""}${o.id ? ` data-fh-id="${esc(o.id)}"` : ""}${o.name ? ` data-fh-name="${esc(o.name)}"` : ""}>
  <p class="fh-metric__label">${cube(o.icon, o.iconStyle)}${esc(o.label ?? field.label ?? field.key)}${o.badge ?? ""}</p>${o.sub ? `\n  <p class="fh-metric__sub">${esc(o.sub)}</p>` : ""}
  ${figure}${below ? `\n  ${below}` : ""}${o.below ? `\n  ${o.below}` : ""}${o.source ? `\n  <p class="fh-metric__source">${esc(o.source)}</p>` : ""}${more}
</${tag}>`;
}

function boot() {
  for (const el of document.querySelectorAll("[data-fh-metric]:not([data-fh-ready])")) {
    const src = el.querySelector('script[type="application/json"]');
    if (!src) continue;
    try {
      el.dataset.fhReady = "";
      const { field, value, ...opts } = JSON.parse(src.textContent);
      el.outerHTML = metricTile(field, value, opts);
    } catch (err) { console.error("Firehorse metric tile:", err); }
  }
}
if (typeof document !== "undefined") {
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
}
