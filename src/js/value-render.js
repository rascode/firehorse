// Firehorse data display contract: the Values (VAL) parts as markup.
//
//   import { renderValue } from "@rascode/firehorse/values";
//   renderValue({ key: "state", semanticType: "status" }, "running", "cell");
//   // → <span class="fh-value fh-value--dot" data-tone="sky" data-fh="VAL-1.1"><span class="fh-dot"></span>Running</span>
//
// Every surface (datatable, table, record table, metric tile, card) draws a value with this one function, so a
// status, a person or an amount looks the same wherever it sits. resolveValue() picks the variant (the field
// decides, the grid decides per context, a surface never does); this file only writes that variant's markup,
// exactly as agent/components/values.md shows it. A viewer's own pick (the column display menu) comes in as
// opts.variant and is used only when variants() allows it for the field and context.
// Data display contract W3 (platform relay/2026-11-14-dc-w3-surfaces.md).
import { rules, resolveValue, variants, textOf, isEmpty, toneOf, rampOf, isoDuration, avatarOf, thumbMarkup, thumbClusterMarkup, formatBytes } from "./values.js";

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const attr = (name, v) => (v == null || v === false ? "" : v === true ? ` ${name}` : ` ${name}="${esc(v)}"`);
const icon = (n) => `<i class="fh-icon fh-icon--${n}" aria-hidden="true"></i>`;
const list = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);
const DAY = 864e5;
let uidN = 0;
const uid = (p = "val") => `${p}-${Date.now().toString(36).slice(-4)}${(uidN++).toString(36)}`;

/* —— What a value is: an option, an entity, a file —— */
const optLabel = (set, v) => {
  if (v && typeof v === "object") return String(v.label ?? v.value ?? "");
  return set?.options?.find((o) => String(o.value) === String(v))?.label ?? String(v);
};
const optValue = (v) => (v && typeof v === "object" ? v.value ?? v.label : v);
const optLive = (set, v) => Boolean(set?.options?.find((o) => String(o.value) === String(optValue(v)))?.live);

/** An entity: { id, label, description?, image?, initials?, tone?, key?, href?, sidecar?, stat? }; a string is its label. */
export function entityOf(e) {
  if (e == null) return null;
  if (typeof e !== "object") return { label: String(e) };
  return { ...e, label: String(e.label ?? e.name ?? e.title ?? e.id ?? "") };
}
// Initials skip words with no letter ("Oak & Ember" is OE, not O&).
const initialsOf = (n = "") => n.split(/\s+/).filter((w) => /\p{L}/u.test(w)).map((p) => p.match(/\p{L}/u)[0]).slice(0, 2).join("").toUpperCase();
// The avatar's shape comes from what it stands for (DR2): data-kind, from the entity's kind. A rich record's kind
// (an application, an organization, a brand, a model) maps onto the avatar system's rounded kinds.
const RICH_KIND = { application: "record", organization: "org", brand: "org", model: "agent", agent: "agent", user: "person", owner: "person" };
const kindOf = (e, fallback = "person") => avatarOf(RICH_KIND[e?.kind] ?? e?.kind ?? fallback).kind ?? avatarOf(fallback).kind;
function avatar(e, { kind = "person", alt = "", more = false } = {}) {
  const k = more ? kind : kindOf(e, kind);
  const cls = `fh-avatar${k === "person" ? " fh-avatar--circle" : ""}${more ? " fh-avatars__more" : ""}`;
  const dk = attr("data-kind", k);
  if (more) return `<span class="${cls}"${dk} aria-hidden="true">${esc(e)}</span>`;
  if (e.image) return `<span class="${cls}"${dk}${attr("data-tone", e.tone)}><img src="${esc(e.image)}" alt="${esc(alt)}"></span>`;
  return `<span class="${cls}"${dk}${attr("data-tone", e.tone)} aria-hidden="true">${esc(String(e.initials ?? initialsOf(e.label)).slice(0, rules.avatars?.initials ?? 2))}</span>`;
}

/** A file: { name, size?, type?, url?, image?, date? }; a string is its name. */
export function fileOf(f) {
  if (f == null) return null;
  if (typeof f !== "object") return { name: String(f) };
  return { ...f, name: String(f.name ?? f.filename ?? f.label ?? "") };
}
const extOf = (f) => (f.type && !f.type.includes("/") ? f.type : (f.name.split(".").pop() ?? "")).toUpperCase();
const EXT_TONE = { PDF: "rose", DOC: "sky", DOCX: "sky", TXT: "neutral", MD: "neutral", PNG: "violet", JPG: "violet", JPEG: "violet", GIF: "violet", SVG: "violet", WEBP: "violet", XLS: "lime", XLSX: "lime", CSV: "lime", ZIP: "amber", MP4: "fuchsia", MOV: "fuchsia", MP3: "teal", WAV: "teal" };
const isImage = (f) => Boolean(f.image) || /^(PNG|JPE?G|GIF|SVG|WEBP|AVIF)$/.test(extOf(f));
const sizeOf = (b) => (b == null || b === "" ? "" : typeof b === "string" ? b : b < 1024 ? `${b} B` : b < 1048576 ? `${Math.round(b / 1024)} KB` : `${(b / 1048576).toFixed(1)} MB`);

/* —— Numbers, money, time —— */
const nf = (locale, o) => new Intl.NumberFormat(locale ?? "en-US", o);
function currencyName(code, locale) {
  try { return new Intl.DisplayNames([locale ?? "en-US"], { type: "currency" }).of(code); } catch { return code; }
}
function moneyParts(field, value, r, opts) {
  const amount = Number(value && typeof value === "object" ? value.amount : value);
  const code = (value && typeof value === "object" ? value.currency : null) ?? field.currency ?? (r.currencyFrom ? opts.row?.[r.currencyFrom] : null) ?? opts.currency ?? null;
  const crypto = r.kind === "crypto";
  const iso = typeof code === "string" && /^[A-Z]{3}$/.test(code) && !crypto;
  const digits = crypto ? { minimumFractionDigits: 2, maximumFractionDigits: 8 } : opts.cents === false ? { maximumFractionDigits: 0 } : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  const fmt = (n, extra = {}) => (iso ? nf(opts.locale, { style: "currency", currency: code, ...digits, ...extra }) : nf(opts.locale, { ...digits, ...extra })).format(n);
  const full = `${fmt(amount, { minimumFractionDigits: crypto ? 2 : 2, maximumFractionDigits: crypto ? 8 : 2 })}${code ? ` ${code}` : r.unit ? ` ${r.unit}` : ""}`;
  return { amount, code: code ?? (crypto ? r.unit : null), iso, fmt, full };
}
function deltaOf(value, opts, field) {
  const prev = value && typeof value === "object" && "previous" in value ? value.previous : opts.previous ?? null;
  if (value && typeof value === "object" && "delta" in value) return Number(value.delta);
  if (prev == null) return null;
  const now = Number(value && typeof value === "object" ? value.amount ?? value.value : value);
  return now - Number(prev);
}
function deltaMarkup(d, text, field, opts) {
  const trend = d > 0 ? "up" : d < 0 ? "down" : "flat";
  const good = opts.good ?? field.good;
  const words = { up: "Up", down: "Down", flat: "No change" }[trend];
  const label = `${words}${trend === "flat" ? "" : ` ${text}`}${good && trend !== "flat" ? `, ${good} is good` : ""}`;
  return `<span class="fh-metric__delta" data-trend="${trend}"${attr("data-good", good)} aria-label="${esc(label)}">${esc(text)}</span>`;
}
const asDate = (v) => (v instanceof Date ? v : new Date(typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v) ? `${v}T00:00` : v));
const dayDiff = (d, now) => Math.round((new Date(d).setHours(0, 0, 0, 0) - new Date(now).setHours(0, 0, 0, 0)) / DAY);
function relWords(d, now) {
  const days = dayDiff(d, now);
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  if (days === -1) return "Yesterday";
  if (Math.abs(days) < 45) return days > 0 ? `in ${days}d` : `${-days}d ago`;
  const months = Math.round(days / 30.4);
  if (Math.abs(months) < 12) return days > 0 ? `in ${months}mo` : `${-months}mo ago`;
  const years = Math.round(days / 365);
  return days > 0 ? `in ${years}y` : `${-years}y ago`;
}
const SECONDS = { s: 1, min: 60, h: 3600, d: 86400, ms: 0.001 };
function durationWords(seconds) {
  let s = Math.round(Math.abs(seconds));
  const d = Math.floor(s / 86400); s -= d * 86400;
  const h = Math.floor(s / 3600); s -= h * 3600;
  const m = Math.floor(s / 60); s -= m * 60;
  const parts = [d && `${d}d`, h && `${h}h`, m && `${m}m`, !d && !h && s && `${s}s`].filter(Boolean);
  return `${seconds < 0 ? "−" : ""}${parts.join(" ") || "0m"}`;
}
const toSeconds = (v, unit) => (typeof v === "string" && /^-?P/.test(v) ? isoSeconds(v) : Number(v) * (SECONDS[unit ?? "s"] ?? 1));
function isoSeconds(iso) {
  const m = /^(-)?P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:([\d.]+)S)?)?$/.exec(iso);
  if (!m) return 0;
  const s = (+m[2] || 0) * 86400 + (+m[3] || 0) * 3600 + (+m[4] || 0) * 60 + (+m[5] || 0);
  return m[1] ? -s : s;
}

/** The sparkline the metric tile uses: 120 × 32, an area and a line. */
export function sparkline(values = []) {
  const v = values.map(Number).filter(Number.isFinite);
  if (!v.length) return "";
  const w = 120, h = 32, min = Math.min(...v), max = Math.max(...v);
  const pts = v.map((x, i) => [(i / (v.length - 1 || 1)) * w, h - 2 - ((x - min) / (max - min || 1)) * (h - 4)]);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  return `<svg class="fh-sparkline" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"><path d="${d} L${w} ${h} L0 ${h}Z" fill="currentColor" opacity=".12"></path><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg>`;
}

/* —— The root —— */
const CLASS = { range: "range-dates" };
function rootOpen(tag, r, variant, opts, extra = {}) {
  const cls = ["fh-value", `fh-value--${r.shape === "temporal" && CLASS[variant] ? CLASS[variant] : variant}`];
  if (extra.cls) cls.push(...[].concat(extra.cls));
  const numeric = ["number", "money", "series"].includes(r.shape) || (r.shape === "ratio" && variant === "text") || ["time", "duration", "count", "phone"].includes(variant);
  if (numeric) cls.push("fh-value--tabular");
  if (r.shape === "money" || (r.shape === "code" && ["mono", "input-mono", "textarea-mono"].includes(variant)) || (r.shape === "file" && variant === "type-chip")) if (!cls.includes("fh-value--mono")) cls.push("fh-value--mono");
  if (opts.align ?? r.align === "end") cls.push("fh-value--end");
  if (opts.size === "lg") cls.push("fh-value--lg");
  return `<${tag} class="${cls.join(" ")}"${extra.mode ? ` data-mode="${extra.mode}"` : ""}${attr("data-tone", extra.tone)}${attr("data-ramp", extra.ramp)}${attr("title", extra.title)}${extra.empty ? " data-empty" : ""} data-fh="${esc(extra.id)}">`;
}

/**
 * A value as its Values part.
 *   field    the field (see describeField in values.js): { key, label?, semanticType? | type? | shape?, optionSet?, options?, currency?, … }
 *   value    the raw value (an option's value, an entity object, an amount, a list for several values)
 *   context  "cell" | "record" | "card" | "metric" | "form" | "text" (text returns textOf(), escaped)
 *   opts     { mode, variant (a viewer's pick, kept only when variants() allows it), size: "lg", locale, currency,
 *              row (the record, for a currency held in a sibling), previous (for a delta), now (a Date, for relative
 *              times), cents (false: whole units, a cell column whose every row is whole), edit (a check in a cell
 *              takes clicks), name, id, label (the aria-label), optionSets, href (a record's link), max (the +N limit) }
 * Returns the markup, or "" when the grid leaves the field out of that context.
 */
export function renderValue(field = {}, value, context = "cell", opts = {}) {
  if (context === "text") { const t = textOf(field, value, opts); return t == null ? "" : esc(t); }
  const r = resolveValue(field, context, opts.mode, opts);
  let variant = r.variant;
  if (opts.variant && opts.variant !== variant && context !== "form" && variants(field, context, opts).some((v) => v.variant === opts.variant)) variant = opts.variant;
  if (!variant) return "";
  // The field may ask for overdue: a date before today draws as overdue (VAL-7.6) where it would draw as a date.
  if (r.shape === "temporal" && field.overdue && !isEmpty(value) && ["date", "date-relative"].includes(variant) && context !== "form" && dayDiff(asDate(value), opts.now ?? Date.now()) < 0) variant = "overdue";
  const meta = rules.variants[r.shape].variants[variant];
  const id = meta?.id ?? r.id;
  const label = opts.label ?? field.label ?? field.key ?? "";
  const edit = context === "form" && r.editable;
  if (isEmpty(value) && !(r.shape === "flag") && !edit) {
    return `${rootOpen("span", r, variant, opts, { id, empty: true })}<span aria-hidden="true">${esc(rules.empty.text)}</span><span class="fh-sr-only">Empty</span></span>`;
  }
  const draw = DRAW[r.shape]?.[variant] ?? DRAW.text.line;
  return draw({ field, value, r, variant, id, opts, label, edit, context });
}

/* —— One drawer per variant ———————————————————————————————————— */
const maxOf = (r, opts, ctx, fallback) => opts.max ?? r.max ?? fallback;
const word = (n, one, many) => `${n} ${n === 1 ? one : many}`;
const nounOf = (field, n) => {
  const base = String(field.noun ?? field.label ?? field.key ?? "item").toLowerCase();
  return n === 1 ? base.replace(/s$/, "") : /s$/.test(base) ? base : `${base}s`;
};
function selectOptions(set, current) {
  return (set?.options ?? []).map((o) => `<option value="${esc(o.value)}"${attr("data-tone", o.tone)}${attr("data-ramp", o.ramp)}${String(o.value) === String(current) ? " selected" : ""}>${esc(o.label)}</option>`).join("");
}
function chip(text, tone, { solid = false, ramp = null, extra = "" } = {}) {
  return `<span class="fh-chip ${solid ? "fh-chip--solid" : "fh-chip--tone"} fh-chip--sm"${attr("data-tone", ramp ? null : tone)}${attr("data-ramp", ramp)}>${extra}${esc(text)}</span>`;
}
const inputAttrs = (o, label) => `${attr("name", o.opts.name ?? o.field.key)}${attr("id", o.opts.id)} aria-label="${esc(label)}"${o.edit ? "" : " readonly"}`;
const field = (o, inner, extraCls = []) => `${rootOpen("div", o.r, o.variant, o.opts, { id: o.id, mode: o.edit ? "edit" : "read", cls: ["fh-value--field", ...extraCls] })}${inner}</div>`;

// Cube (Rascode 2026-11-15): the value inside a Cube (CUB), in its tone: an option's tone, an entity's own colour
// (its logo's), a number or an amount in the field's tone. A viewer picks it from the column display menu.
const cubeOf = (text, { tone, ramp, title } = {}) => `<b class="fh-cube"${attr("data-tone", tone)}${attr("data-ramp", ramp)}${attr("title", title)}>${esc(text)}</b>`;
const option = {
  cube: (o) => {
    const set = o.r.optionSet, v = optValue(o.value), ramp = rampOf(set, v);
    return `${rootOpen("span", o.r, "cube", o.opts, { id: o.id })}${cubeOf(optLabel(set, o.value), { tone: ramp ? null : toneOf(set, v), ramp })}</span>`;
  },
  dot: (o) => {
    const set = o.r.optionSet, v = optValue(o.value);
    return `${rootOpen("span", o.r, "dot", o.opts, { id: o.id, tone: rampOf(set, v) ? null : toneOf(set, v), ramp: rampOf(set, v) })}<span class="fh-dot${optLive(set, v) ? " fh-dot--live" : ""}"></span>${esc(optLabel(set, o.value))}</span>`;
  },
  chip: (o) => {
    const set = o.r.optionSet, v = optValue(o.value);
    return `${rootOpen("span", o.r, "chip", o.opts, { id: o.id })}${chip(optLabel(set, o.value), toneOf(set, v), { ramp: rampOf(set, v) })}</span>`;
  },
  "chip-solid": (o) => {
    const set = o.r.optionSet, v = optValue(o.value);
    return `${rootOpen("span", o.r, "chip-solid", o.opts, { id: o.id })}${chip(optLabel(set, o.value), toneOf(set, v), { solid: true, ramp: rampOf(set, v) })}</span>`;
  },
  select: (o) => {
    const set = o.r.optionSet, v = optValue(o.value);
    if (!o.edit) return `${rootOpen("span", o.r, "select", o.opts, { id: o.id, mode: "read" })}${chip(optLabel(set, o.value), toneOf(set, v), { ramp: rampOf(set, v) })}</span>`;
    return `${rootOpen("span", o.r, "select", o.opts, { id: o.id, mode: "edit", tone: "option", cls: "fh-value--chevron" })}<span class="fh-chip fh-chip--tone fh-chip--sm"><select class="fh-value__select"${inputAttrs({ ...o, edit: true }, o.label).replace(" readonly", "")}>${isEmpty(v) ? `<option value="" selected>${esc(rules.empty.text)}</option>` : ""}${selectOptions(set, v)}</select></span></span>`;
  },
  "select-search": (o) => {
    const set = o.r.optionSet, v = optValue(o.value);
    if (!o.edit) return `${rootOpen("span", o.r, "select-search", o.opts, { id: o.id, mode: "read" })}${chip(optLabel(set, o.value), toneOf(set, v), { ramp: rampOf(set, v) })}</span>`;
    const dl = uid("val-dl");
    return `${rootOpen("span", o.r, "select-search", o.opts, { id: o.id, mode: "edit", cls: "fh-value--chevron" })}<span class="fh-chip fh-chip--sm"${attr("data-tone", toneOf(set, v))}><input class="fh-value__select" type="search" list="${dl}" value="${esc(isEmpty(v) ? "" : optLabel(set, o.value))}"${attr("name", o.opts.name ?? o.field.key)} aria-label="${esc(o.label)}"></span><datalist id="${dl}">${(set?.options ?? []).map((x) => `<option value="${esc(x.label)}"></option>`).join("")}</datalist></span>`;
  },
  segmented: (o) => {
    const set = o.r.optionSet, v = optValue(o.value);
    const buttons = (set?.options ?? []).map((x) => `<button type="button" value="${esc(x.value)}" aria-pressed="${String(x.value) === String(v)}"${o.edit ? "" : " disabled"}>${esc(x.label)}</button>`).join("");
    const pick = o.edit ? ` onclick="const b = event.target.closest('button'); if (b &amp;&amp; !b.disabled) for (const x of this.querySelectorAll('button')) x.setAttribute('aria-pressed', String(x === b))"` : "";
    return `${rootOpen("div", o.r, "segmented", o.opts, { id: o.id, mode: o.edit ? "edit" : "read" })}<div class="fh-segment fh-segment--mode" role="group" aria-label="${esc(o.label)}"${pick}>${buttons}</div></div>`;
  },
};

const options = {
  chips: (o) => {
    const set = o.r.optionSet, vals = list(o.value), n = maxOf(o.r, o.opts, o.context, vals.length);
    const shown = vals.slice(0, n), rest = vals.length - shown.length;
    return `${rootOpen("span", o.r, "chips", o.opts, { id: o.id })}<span class="fh-chips">${shown.map((v) => chip(optLabel(set, v), toneOf(set, optValue(v)), { ramp: rampOf(set, optValue(v)) }).replace("fh-chip--tone ", "")).join("")}</span>${rest > 0 ? `<span class="fh-badge">+${rest}</span>` : ""}</span>`;
  },
  "chips-inline": (o) => {
    const set = o.r.optionSet;
    return `${rootOpen("span", o.r, "chips-inline", o.opts, { id: o.id })}<span class="fh-chips">${list(o.value).map((v) => chip(optLabel(set, v), toneOf(set, optValue(v)), { ramp: rampOf(set, optValue(v)) }).replace("fh-chip--tone ", "")).join("")}</span></span>`;
  },
  count: (o) => {
    const n = list(o.value).length;
    return `${rootOpen("span", o.r, "count", o.opts, { id: o.id })}${esc(`${n} ${nounOf(o.field, n)}`)}</span>`;
  },
  "tag-field": (o) => {
    const set = o.r.optionSet;
    const chips = list(o.value).map((v) => `<span class="fh-chip"${attr("data-tone", toneOf(set, optValue(v)))}>${esc(optLabel(set, v))}${o.edit ? ` <button class="fh-chip__remove" type="button" aria-label="Remove ${esc(optLabel(set, v))}"></button>` : ""}</span>`).join("");
    return field(o, `<div class="fh-tags">${chips}${o.edit ? `<input aria-label="Add to ${esc(o.label)}" placeholder="Add">` : ""}</div>`);
  },
};

const entityName = (e) => `<span class="fh-value__name" title="${esc(e.label)}">${esc(e.label)}</span>`;
const who = (e, desc = e.description) => `<span class="fh-entity__who"><b title="${esc(e.label)}">${esc(e.label)}</b>${desc ? `<small title="${esc(desc)}">${esc(desc)}</small>` : ""}</span>`;
const refLink = (e, key, o) => {
  const href = e.href ?? o.opts.href ?? null;
  const inner = `<span class="fh-ref__label" title="${esc(e.label)}">${esc(e.label)}</span>${key && e.key ? `<code class="fh-ref__key">${esc(e.key)}</code>` : ""}`;
  if (e.gone) return `<span class="fh-ref fh-ref--gone" title="This record was removed">${inner}<span class="fh-ref__note">removed</span></span>`;
  return href || e.sidecar ? `<a class="fh-ref"${attr("href", href ?? "#")}${attr("data-sidecar", e.sidecar)}>${inner}</a>` : `<span class="fh-ref">${inner}</span>`;
};
// A one-entity variant asked to draw several: each entity as that part, one per line (the entities row in a record).
const each = (draw) => (o) => {
  const items = list(o.value).map(entityOf).filter(Boolean);
  if (items.length <= 1) return draw({ ...o, value: items[0] });
  return `<span class="fh-stack" style="--fh-stack-gap: var(--fh-gap-related)">${items.map((e) => draw({ ...o, value: e })).join("")}</span>`;
};
const entity = {
  cube: each((o) => { const e = entityOf(o.value); return `${rootOpen("span", o.r, "cube", o.opts, { id: o.id })}${cubeOf(e.label, { tone: e.tone })}</span>`; }),
  name: each((o) => `${rootOpen("span", o.r, "name", o.opts, { id: o.id })}${entityName(entityOf(o.value))}</span>`),
  "name-key": each((o) => { const e = entityOf(o.value); return `${rootOpen("span", o.r, "name-key", o.opts, { id: o.id })}${entityName(e)}${e.key ? `<code class="fh-kbd">${esc(e.key)}</code>` : ""}</span>`; }),
  "avatar-name": each((o) => { const e = entityOf(o.value); return `${rootOpen("span", o.r, "avatar-name", o.opts, { id: o.id })}${avatar(e, { kind: o.r.avatar?.kind ?? "person" })}${entityName(e)}</span>`; }),
  "avatar-name-description": each((o) => { const e = entityOf(o.value); return `${rootOpen("span", o.r, "avatar-name-description", o.opts, { id: o.id })}${avatar(e, { kind: o.r.avatar?.kind ?? "person" })}${who(e)}</span>`; }),
  full: each((o) => {
    const e = entityOf(o.value);
    const stat = e.stat ? `<span class="fh-entity__stat"${attr("data-tone", e.stat.tone)}><b>${esc(e.stat.value)}</b>${e.stat.label ? `<small>${esc(e.stat.label)}</small>` : ""}</span>` : "";
    return `${rootOpen("div", o.r, "full", o.opts, { id: o.id })}<span class="fh-entity">${avatar(e, { kind: o.r.avatar?.kind ?? "person" })}<span class="fh-entity__sep"></span>${who(e)}${stat}</span></div>`;
  }),
  chip: each((o) => { const e = entityOf(o.value); return `${rootOpen("span", o.r, "chip", o.opts, { id: o.id })}<span class="fh-chip fh-chip--sm fh-chip--avatar">${avatar(e, { kind: o.r.avatar?.kind ?? "person" })}${esc(e.label)}</span></span>`; }),
  stack: (o) => {
    const items = list(o.value).map(entityOf).filter(Boolean), n = maxOf(o.r, o.opts, o.context, rules.avatars?.max ?? 3);
    const shown = items.slice(0, n), rest = items.length - shown.length;
    const names = shown.map((e) => e.label.split(/\s+/)[0]).join(", ") + (rest > 0 ? ` and ${rest} more` : "");
    return `${rootOpen("span", o.r, "stack", o.opts, { id: o.id })}<span class="fh-avatars" role="group" aria-label="${esc(`${o.label}: ${names}`)}">${shown.map((e) => avatar(e, { alt: e.label, kind: o.r.avatar?.kind ?? "person" }).replace(' aria-hidden="true"', ` role="img" aria-label="${esc(e.label)}"`)).join("")}${rest > 0 ? avatar(`+${rest}`, { more: true, kind: kindOf(shown[0]) }) : ""}</span></span>`;
  },
  ref: each((o) => `${rootOpen("span", o.r, "ref", o.opts, { id: o.id })}${refLink(entityOf(o.value), false, o)}</span>`),
  // A rich record (an application, an organization, a brand): its square avatar or initials, then its reference.
  "avatar-ref": each((o) => { const e = entityOf(o.value); return `${rootOpen("span", o.r, "avatar-ref", o.opts, { id: o.id })}${avatar(e, { kind: RICH_KIND[o.r.kind] ?? "record" })}${refLink(e, false, o)}</span>`; }),
  "ref-key": each((o) => `${rootOpen("span", o.r, "ref-key", o.opts, { id: o.id })}${refLink(entityOf(o.value), true, o)}</span>`),
  picker: (o) => {
    const e = entityOf(list(o.value)[0]);
    return field(o, `<div class="fh-entity-picker" data-fh-entity><button class="fh-entity" type="button" aria-haspopup="listbox" aria-label="${esc(o.label)}"${o.edit ? "" : " disabled"}><span class="fh-entity__value">${e ? `${avatar(e, { kind: o.r.avatar?.kind ?? "person" })}<span class="fh-entity__sep"></span>${who(e)}` : `<span class="fh-entity__who"><b>${esc(rules.empty.text)}</b></span>`}</span></button></div>`);
  },
  "picker-multi": (o) => {
    const items = list(o.value).map(entityOf).filter(Boolean);
    return field(o, `<div class="fh-entity-picker" data-fh-entity><button class="fh-entity" type="button" aria-haspopup="listbox" aria-label="${esc(o.label)}"${o.edit ? "" : " disabled"}><span class="fh-entity__value"><span class="fh-avatars" aria-hidden="true">${items.slice(0, rules.avatars?.max ?? 3).map((e) => avatar(e, { kind: o.r.avatar?.kind ?? "person" })).join("")}</span><span class="fh-entity__who"><b>${esc(items.map((e) => e.label.split(/\s+/)[0]).join(", "))}</b><small>${esc(word(items.length, "person", "people"))}</small></span></span></button></div>`);
  },
};

const money = {
  cube: (o) => { const m = moneyParts(o.field, o.value, o.r, o.opts); return `${rootOpen("span", o.r, "cube", o.opts, { id: o.id })}${cubeOf(m.fmt(m.amount, { notation: "compact", minimumFractionDigits: 0, maximumFractionDigits: 1 }), { tone: o.field.tone, title: m.full })}</span>`; },
  amount: (o) => { const m = moneyParts(o.field, o.value, o.r, o.opts); return `${rootOpen("span", o.r, "amount", o.opts, { id: o.id })}<data value="${m.amount.toFixed(o.r.kind === "crypto" ? 8 : 2)}"${m.iso ? "" : ""}>${esc(m.fmt(m.amount))}</data>${!m.iso && m.code ? `<span class="fh-value__sub">${esc(m.code)}</span>` : ""}</span>`; },
  "amount-code": (o) => { const m = moneyParts(o.field, o.value, o.r, { ...o.opts, cents: true }); return `${rootOpen("span", o.r, "amount-code", o.opts, { id: o.id })}<data value="${m.amount.toFixed(o.r.kind === "crypto" ? 8 : 2)}">${esc(m.fmt(m.amount))}</data>${m.code ? `<abbr class="fh-value__sub" title="${esc(m.iso ? currencyName(m.code, o.opts.locale) : m.code)}">${esc(m.code)}</abbr>` : ""}</span>`; },
  compact: (o) => { const m = moneyParts(o.field, o.value, o.r, o.opts); return `${rootOpen("span", o.r, "compact", o.opts, { id: o.id })}<data value="${m.amount}" title="${esc(m.full)}">${esc(m.fmt(m.amount, { notation: "compact", minimumFractionDigits: 0, maximumFractionDigits: 1 }))}</data></span>`; },
  delta: (o) => { const m = moneyParts(o.field, o.value, o.r, o.opts); const d = deltaOf(o.value, o.opts, o.field) ?? m.amount; return `${rootOpen("span", o.r, "delta", o.opts, { id: o.id })}${deltaMarkup(d, m.fmt(Math.abs(d)), o.field, o.opts)}</span>`; },
  "compact-delta": (o) => {
    const m = moneyParts(o.field, o.value, o.r, o.opts); const d = deltaOf(o.value, o.opts, o.field);
    return `${rootOpen("span", o.r, "compact-delta", o.opts, { id: o.id })}<data value="${m.amount}" title="${esc(m.full)}">${esc(m.fmt(m.amount, { notation: "compact", minimumFractionDigits: 0, maximumFractionDigits: 1 }))}</data>${d == null ? "" : deltaMarkup(d, m.fmt(Math.abs(d), { notation: "compact", minimumFractionDigits: 0, maximumFractionDigits: 1 }), o.field, o.opts)}</span>`;
  },
  "money-input": (o) => { const m = moneyParts(o.field, o.value, o.r, o.opts); return field(o, `<div class="fh-field fh-money" data-fh-money${attr("data-currency", m.code)}><div class="fh-input-group">${m.code ? `<span class="fh-money__currency">${esc(m.code)}</span>` : ""}<input class="fh-input" inputmode="decimal" autocomplete="off" placeholder="0.00"${isEmpty(o.value) ? "" : ` value="${esc(Number.isFinite(m.amount) ? m.amount : "")}"`}${inputAttrs(o, o.label)}><input type="hidden" data-fh-money-value></div></div>`); },
};

const pctOf = (o) => {
  const n = Number(o.value && typeof o.value === "object" ? o.value.value : o.value);
  if (o.r.kind === "rating") return (n / Number(o.field.max ?? 5)) * 100;
  return o.field.scale === 1 ? n * 100 : n;
};
const pctText = (o) => (o.r.kind === "rating" ? `${nf(o.opts.locale, { maximumFractionDigits: 1 }).format(Number(o.value))} of ${o.field.max ?? 5}` : `${nf(o.opts.locale, { maximumFractionDigits: 1 }).format(pctOf(o))}%`);
const clampPct = (n) => Math.max(0, Math.min(100, Math.round(n)));
const ratio = {
  text: (o) => `${rootOpen("span", o.r, "text", o.opts, { id: o.id })}${esc(pctText(o))}</span>`,
  bar: (o) => `${rootOpen("span", o.r, "bar", o.opts, { id: o.id, tone: o.field.tone ?? "sky" })}<progress class="fh-progress" value="${clampPct(pctOf(o))}" max="100">${esc(pctText(o))}</progress><b>${esc(pctText(o))}</b></span>`,
  ring: (o) => `${rootOpen("span", o.r, "ring", o.opts, { id: o.id, tone: o.field.tone ?? "teal" })}<span class="fh-ring" style="--fh-value: ${clampPct(pctOf(o))}" role="img" aria-label="${esc(`${pctText(o)} ${o.label}`.trim())}"><b>${esc(pctText(o))}</b></span></span>`,
  meter: (o) => { const t = Number(o.field.target); return `${rootOpen("span", o.r, "meter", o.opts, { id: o.id, tone: o.field.tone ?? "amber" })}<span class="fh-gauge" style="--fh-value: ${clampPct(pctOf(o))}" role="img" aria-label="${esc(`${pctText(o)}, target ${t}%`)}"><b>${esc(pctText(o))}</b><small>of ${esc(t)}%</small></span></span>`; },
  range: (o) => `${rootOpen("span", o.r, "range", o.opts, { id: o.id, mode: o.edit ? "edit" : "read", tone: o.field.tone ?? "sky" })}<input class="fh-range" type="range" min="0" max="100" value="${clampPct(pctOf(o))}"${attr("name", o.opts.name ?? o.field.key)} aria-label="${esc(o.label)}"${o.edit ? "" : " disabled"}><output>${esc(pctText(o))}</output></span>`,
};

const numText = (o, n = o.value) => nf(o.opts.locale, { maximumFractionDigits: 2, useGrouping: o.r.grouping !== false }).format(Number(n && typeof n === "object" ? n.value : n));
const seriesOf = (v) => (Array.isArray(v) ? v : Array.isArray(v?.values) ? v.values : []);
const number = {
  cube: (o) => `${rootOpen("span", o.r, "cube", o.opts, { id: o.id })}${cubeOf(numText(o), { tone: o.field.tone })}</span>`,
  plain: (o) => `${rootOpen("span", o.r, "plain", o.opts, { id: o.id })}${esc(numText(o))}</span>`,
  unit: (o) => `${rootOpen("span", o.r, "unit", o.opts, { id: o.id })}${esc(numText(o))}${o.r.unit ? `<span class="fh-value__sub">${esc(o.r.unit)}</span>` : ""}</span>`,
  delta: (o) => { const d = deltaOf(o.value, o.opts, o.field) ?? Number(o.value); return `${rootOpen("span", o.r, "delta", o.opts, { id: o.id })}${deltaMarkup(d, numText(o, Math.abs(d)), o.field, o.opts)}</span>`; },
  "plain-delta": (o) => { const d = deltaOf(o.value, o.opts, o.field); return `${rootOpen("span", o.r, "plain-delta", o.opts, { id: o.id })}${esc(numText(o))}${d == null ? "" : deltaMarkup(d, numText(o, Math.abs(d)), o.field, o.opts)}</span>`; },
  sparkline: (o) => `${rootOpen("span", o.r, "sparkline", o.opts, { id: o.id, tone: o.field.tone ?? "teal" })}${sparkline(seriesOf(o.value))}</span>`,
  "sparkline-last": (o) => { const s = seriesOf(o.value); return `${rootOpen("span", o.r, "sparkline", o.opts, { id: o.id, tone: o.field.tone ?? "teal" })}${sparkline(s)}<b>${esc(s.length ? numText(o, s[s.length - 1]) : "")}</b></span>`; },
  "number-input": (o) => field(o, `<div class="fh-input-group"><input class="fh-input" type="number"${isEmpty(o.value) ? "" : ` value="${esc(o.value)}"`}${inputAttrs(o, o.label)}>${o.r.unit ? `<span>${esc(o.r.unit)}</span>` : ""}</div>`),
  duration: (o) => { const s = toSeconds(o.value, o.r.unit); return `${rootOpen("span", o.r, "duration", o.opts, { id: o.id })}<time datetime="${isoDuration(s)}">${esc(durationWords(s))}</time></span>`; },
  "duration-input": (o) => {
    const s = toSeconds(o.value, o.r.unit), h = Math.floor(Math.abs(s) / 3600), m = Math.round((Math.abs(s) % 3600) / 60);
    return field(o, `<div class="fh-input-group"><input class="fh-input" type="number" min="0" value="${h}" aria-label="${esc(o.label)}, hours"${o.edit ? "" : " readonly"}><span>h</span><input class="fh-input" type="number" min="0" max="59" value="${m}" aria-label="${esc(o.label)}, minutes"${o.edit ? "" : " readonly"}><span>m</span></div>`);
  },
};

const dateText = (d, o, opt) => d.toLocaleDateString(o.opts.locale ?? "en-US", opt);
const timeText = (d, o) => d.toLocaleTimeString(o.opts.locale ?? "en-US", { hour: "numeric", minute: "2-digit" });
const isoDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const sameYear = (d, now) => d.getFullYear() === new Date(now).getFullYear();
const temporal = {
  date: (o) => { const d = asDate(o.value); return `${rootOpen("span", o.r, "date", o.opts, { id: o.id })}<time datetime="${isoDay(d)}">${esc(dateText(d, o, { month: "short", day: "numeric", year: "numeric" }))}</time></span>`; },
  "date-relative": (o) => { const d = asDate(o.value), now = o.opts.now ?? Date.now(); return `${rootOpen("span", o.r, "date-relative", o.opts, { id: o.id })}<time datetime="${isoDay(d)}">${esc(dateText(d, o, sameYear(d, now) ? { month: "short", day: "numeric" } : { month: "short", day: "numeric", year: "numeric" }))}</time><span class="fh-value__sub">${esc(relWords(d, now))}</span></span>`; },
  relative: (o) => { const d = asDate(o.value), now = o.opts.now ?? Date.now(); return `${rootOpen("span", o.r, "relative", o.opts, { id: o.id })}<time datetime="${esc(typeof o.value === "string" ? o.value : d.toISOString())}" title="${esc(`${dateText(d, o, { month: "short", day: "numeric", year: "numeric" })}, ${timeText(d, o)}`)}">${esc(relWords(d, now))}</time></span>`; },
  datetime: (o) => { const d = asDate(o.value); return `${rootOpen("span", o.r, "datetime", o.opts, { id: o.id })}<time datetime="${esc(typeof o.value === "string" ? o.value : d.toISOString())}">${esc(`${dateText(d, o, { month: "short", day: "numeric", year: "numeric" })} · ${timeText(d, o)}`)}</time></span>`; },
  range: (o) => { const a = asDate(o.value.start ?? o.value[0]), b = asDate(o.value.end ?? o.value[1]); return `${rootOpen("span", o.r, "range", o.opts, { id: o.id })}<time datetime="${isoDay(a)}">${esc(dateText(a, o, { month: "short", day: "numeric" }))}</time> – <time datetime="${isoDay(b)}">${esc(dateText(b, o, { month: "short", day: "numeric", year: "numeric" }))}</time></span>`; },
  overdue: (o) => { const d = asDate(o.value), days = -dayDiff(d, o.opts.now ?? Date.now()); return `${rootOpen("span", o.r, "overdue", o.opts, { id: o.id })}<time datetime="${isoDay(d)}">${esc(dateText(d, o, { month: "short", day: "numeric" }))}</time><span class="fh-value__sub">${esc(`${days}d overdue`)}</span></span>`; },
  time: (o) => { const v = String(o.value); const d = /^\d{1,2}:\d{2}/.test(v) ? new Date(`2000-01-01T${v.slice(0, 5)}`) : asDate(o.value); return `${rootOpen("span", o.r, "time", o.opts, { id: o.id })}<time datetime="${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}">${esc(timeText(d, o))}</time></span>`; },
  duration: (o) => number.duration(o),
  "date-picker": (o) => field(o, `<input class="fh-input" type="date"${isEmpty(o.value) ? "" : ` value="${isoDay(asDate(o.value))}"`}${inputAttrs(o, o.label)}>`),
  "time-input": (o) => field(o, `<input class="fh-input" type="time"${isEmpty(o.value) ? "" : ` value="${esc(String(o.value).slice(0, 5))}"`}${inputAttrs(o, o.label)}>`),
  "duration-input": (o) => number["duration-input"](o),
};

const typeChip = (f) => `<span class="fh-chip fh-chip--sm" data-tone="${EXT_TONE[extOf(f)] ?? "neutral"}" title="${esc([f.name, sizeOf(f.size)].filter(Boolean).join(" · "))}">${esc(extOf(f) || "FILE")}</span>`;
// Image thumbs and clusters are the THB part's markup (DR4): thumbMarkup() and thumbClusterMarkup() in values.js.
const urlOf = (f) => (f ? f.url ?? f.image ?? f.preview ?? "" : "");
const thumb = (f, opts = {}) => (isImage(f) && urlOf(f) ? thumbMarkup(f, opts) : typeChip(f));
const mediaFrame = (f) => `<figure class="fh-card__media"><img src="${esc(urlOf(f))}" alt="${esc(f.alt ?? f.name)}"></figure>`;
const docThumb = (f, opts = {}) => (f.preview ? thumbMarkup({ ...f, url: f.preview, image: f.preview }, { portrait: true, ...opts }) : typeChip(f));
const bytesOf = (f) => (f.bytes != null ? formatBytes(f.bytes) : sizeOf(f.size));
const file = {
  "type-chip": (o) => {
    const files = list(o.value).map(fileOf), n = maxOf(o.r, o.opts, o.context, files.length), rest = files.length - Math.min(n, files.length);
    return `${rootOpen("span", o.r, "type-chip", o.opts, { id: o.id })}<span class="fh-chips">${files.slice(0, n).map(typeChip).join("")}</span>${rest > 0 ? `<span class="fh-badge">+${rest}</span>` : ""}</span>`;
  },
  thumb: (o) => `${rootOpen("span", o.r, "thumb", o.opts, { id: o.id })}${thumb(fileOf(list(o.value)[0]))}</span>`,
  thumbs: (o) => {
    const files = list(o.value).map(fileOf);
    return `${rootOpen("span", o.r, "thumbs", o.opts, { id: o.id })}${thumbClusterMarkup(files, { max: maxOf(o.r, o.opts, o.context, rules.avatars?.max ?? 3) })}</span>`;
  },
  preview: (o) => {
    const f = fileOf(list(o.value)[0]);
    return `${rootOpen("span", o.r, "preview", o.opts, { id: o.id })}${thumb(f, { lg: true })}<span><b>${esc(f.name)}</b>${bytesOf(f) ? `<span class="fh-value__sub">${esc(bytesOf(f))}</span>` : ""}</span></span>`;
  },
  gallery: (o) => `${rootOpen("span", o.r, "gallery", o.opts, { id: o.id })}<span class="fh-thumb-gallery">${list(o.value).map(fileOf).map((f) => thumb(f)).join("")}</span></span>`,
  media: (o) => { const f = fileOf(list(o.value)[0]); return `${rootOpen("span", o.r, "media", o.opts, { id: o.id })}${urlOf(f) ? mediaFrame(f) : typeChip(f)}</span>`; },
  "media-badge": (o) => {
    const files = list(o.value).map(fileOf), f = files[0], rest = files.length - 1;
    return `${rootOpen("span", o.r, "media-badge", o.opts, { id: o.id })}${urlOf(f) ? mediaFrame(f) : typeChip(f)}${rest > 0 ? `<span class="fh-badge">+${rest}</span>` : ""}</span>`;
  },
  "doc-cell": (o) => { const f = fileOf(list(o.value)[0]); return `${rootOpen("span", o.r, "doc-cell", o.opts, { id: o.id })}<span class="fh-cell__file">${docThumb(f)}<span>${esc(f.name)}</span></span></span>`; },
  "doc-portrait": (o) => {
    const f = fileOf(list(o.value)[0]);
    return `${rootOpen("span", o.r, "doc-portrait", o.opts, { id: o.id })}${docThumb(f, { lg: true })}<span><b>${esc(f.name)}</b><span class="fh-value__sub">${esc([bytesOf(f), extOf(f)].filter(Boolean).join(" · "))}</span></span></span>`;
  },
  "file-row": (o) => `${rootOpen("div", o.r, "file-row", o.opts, { id: o.id })}<ul class="fh-files">${list(o.value).map(fileOf).map((f) => { const inner = `${icon(isImage(f) ? "image" : "file-text")}<span>${esc(f.name)}</span>${f.size != null ? `<small>${esc(sizeOf(f.size))}</small>` : ""}${f.date ? `<time datetime="${esc(f.date)}">${esc(dateText(asDate(f.date), o, { month: "short", day: "numeric" }))}</time>` : ""}`; return `<li>${f.url ? `<a href="${esc(f.url)}">${inner}</a>` : `<span>${inner}</span>`}</li>`; }).join("")}</ul></div>`,
  count: (o) => { const n = list(o.value).length; return `${rootOpen("span", o.r, "count", o.opts, { id: o.id })}${icon("paperclip")}${esc(word(n, "file", "files"))}</span>`; },
  dropzone: (o) => field(o, `<label class="fh-dropzone" data-tone="sky"><input type="file" multiple${attr("name", o.opts.name ?? o.field.key)}${o.edit ? "" : " disabled"}><span class="fh-dropzone__title">Drop files or browse</span>${list(o.value).length ? `<span class="fh-dropzone__hint">${esc(list(o.value).map(fileOf).map((f) => f.name).join(", "))}</span>` : ""}</label>`),
};

const trimUrl = (u) => String(u).replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const hrefOf = (v, kind) => (kind === "email" ? `mailto:${v}` : kind === "phone" ? `tel:${String(v).replace(/[^\d+]/g, "")}` : /^[a-z][a-z0-9+.-]*:/i.test(v) ? v : `https://${v}`);
const linkOf = (o) => { const v = o.value && typeof o.value === "object" ? o.value.href ?? o.value.url : o.value; return { href: hrefOf(v, o.r.kind), text: o.value?.label ?? (o.r.kind === "email" || o.r.kind === "phone" ? String(v) : trimUrl(v)), raw: String(v) }; };
const link = {
  link: (o) => { const l = linkOf(o); return `${rootOpen("span", o.r, "link", o.opts, { id: o.id })}<a class="fh-link" href="${esc(l.href)}" title="${esc(l.raw)}">${esc(l.text)}</a></span>`; },
  email: (o) => { const l = linkOf(o); return `${rootOpen("span", o.r, "email", o.opts, { id: o.id })}<a class="fh-link" href="${esc(l.href)}">${esc(l.text)}</a></span>`; },
  phone: (o) => { const l = linkOf(o); return `${rootOpen("span", o.r, "phone", o.opts, { id: o.id })}<a class="fh-link" href="${esc(l.href)}">${esc(l.text)}</a></span>`; },
  "link-chip": (o) => { const l = linkOf(o); return `${rootOpen("span", o.r, "link-chip", o.opts, { id: o.id })}<a class="fh-chip fh-chip--sm" data-tone="sky" href="${esc(l.href)}">${icon(o.r.kind === "email" ? "at-sign" : o.r.kind === "phone" ? "phone" : "link")}${esc(l.text)}</a></span>`; },
  action: (o) => { const v = o.value && typeof o.value === "object" ? o.value : { label: o.value }; return `${rootOpen("span", o.r, "action", o.opts, { id: o.id })}${v.href ? `<a class="fh-action" href="${esc(v.href)}">${esc(v.label)}</a>` : `<button class="fh-action" type="button"${attr("data-action", v.action ?? o.field.key)}>${esc(v.label)}</button>`}</span>`; },
  "url-input": (o) => field(o, `<input class="fh-input" type="url"${isEmpty(o.value) ? "" : ` value="${esc(o.value)}"`}${inputAttrs(o, o.label)}>`),
  "email-input": (o) => field(o, `<input class="fh-input" type="email"${isEmpty(o.value) ? "" : ` value="${esc(o.value)}"`}${inputAttrs(o, o.label)}>`),
  "phone-input": (o) => field(o, `<input class="fh-input" type="tel"${isEmpty(o.value) ? "" : ` value="${esc(o.value)}"`}${inputAttrs(o, o.label)}>`),
};

const flag = {
  check: (o) => { const live = o.edit || o.opts.edit; return `${rootOpen("span", o.r, "check", o.opts, { id: o.id, mode: live ? "edit" : "read" })}<label class="fh-check"><input type="checkbox"${o.value ? " checked" : ""}${attr("data-edit", o.opts.edit ? o.opts.editKey ?? o.field.key : null)}${attr("name", o.edit ? o.opts.name ?? o.field.key : null)} aria-label="${esc(o.label)}"${live ? "" : " disabled"}></label></span>`; },
  "yes-no": (o) => (o.value ? `${rootOpen("span", o.r, "yes-no", o.opts, { id: o.id })}${icon("check")}Yes</span>` : `${rootOpen("span", o.r, "yes-no", o.opts, { id: o.id, cls: "fh-value--no" })}No</span>`),
  count: (o) => { const vals = list(o.value); const n = vals.filter(Boolean).length; return `${rootOpen("span", o.r, "count", o.opts, { id: o.id })}${n}<span class="fh-value__sub">of ${vals.length} ${esc(String(o.label).toLowerCase())}</span></span>`; },
  switch: (o) => `${rootOpen("span", o.r, "switch", o.opts, { id: o.id, mode: o.edit ? "edit" : "read" })}<label class="fh-check"><input class="fh-switch" role="switch" type="checkbox"${o.value ? " checked" : ""}${attr("name", o.opts.name ?? o.field.key)} aria-label="${esc(o.label)}"${o.edit ? "" : " disabled"}></label></span>`,
};

const plainText = (v) => String(v && typeof v === "object" ? v.text ?? JSON.stringify(v) : v);
const prose = {
  "clamp-2": (o) => `${rootOpen("span", o.r, "clamp-2", o.opts, { id: o.id })}${esc(plainText(o.value))}</span>`,
  "clamp-3": (o) => `${rootOpen("span", o.r, "clamp-3", o.opts, { id: o.id })}${esc(plainText(o.value))}</span>`,
  full: (o) => `${rootOpen("div", o.r, "full", o.opts, { id: o.id, cls: "fh-value--prose" })}${plainText(o.value).split(/\n\s*\n/).map((p) => `<p>${esc(p.trim())}</p>`).join("")}</div>`.replace("fh-value--full fh-value--prose", "fh-value--prose"),
  textarea: (o) => field(o, `<textarea class="fh-textarea" rows="4"${inputAttrs(o, o.label)}>${esc(isEmpty(o.value) ? "" : plainText(o.value))}</textarea>`),
};

const text = {
  line: (o) => `${rootOpen("span", o.r, "line", o.opts, { id: o.id })}<span class="fh-value__name">${esc(plainText(o.value))}</span></span>`,
  input: (o) => field(o, `<input class="fh-input" type="text"${isEmpty(o.value) ? "" : ` value="${esc(plainText(o.value))}"`}${inputAttrs(o, o.label)}>`),
  action: (o) => link.action(o),
};

const shortCode = (s) => (s.length > 14 ? `${s.slice(0, 6)}…${s.slice(-4)}` : s);
const code = {
  mono: (o) => `${rootOpen("span", o.r, "mono", o.opts, { id: o.id })}${esc(plainText(o.value))}</span>`.replace("fh-value--mono fh-value--mono", "fh-value--mono"),
  copyable: (o) => { const s = plainText(o.value); return `${rootOpen("span", o.r, "copyable", o.opts, { id: o.id })}<code class="fh-kbd" title="${esc(s)}">${esc(shortCode(s))}</code><button class="fh-value__action" type="button" aria-label="${esc(`Copy ${o.label}`.trim())}" title="Copy" onclick="navigator.clipboard?.writeText(this.previousElementSibling.title)">${icon("copy")}</button></span>`; },
  masked: (o) => { const last = String(o.value?.last4 ?? plainText(o.value).slice(-4)); return `${rootOpen("span", o.r, "masked", o.opts, { id: o.id })}<code class="fh-kbd" aria-label="${esc(`${o.label} ending ${last}`.trim())}"><span aria-hidden="true">••••••••</span>${esc(last)}</code></span>`; },
  "code-block": (o) => `${rootOpen("div", o.r, "code-block", o.opts, { id: o.id })}<figure class="fh-code"><pre><code>${esc(typeof o.value === "string" ? o.value : JSON.stringify(o.value, null, 2))}</code></pre></figure></div>`,
  "input-mono": (o) => field(o, `<input class="fh-input" type="text"${isEmpty(o.value) ? "" : ` value="${esc(plainText(o.value))}"`}${inputAttrs(o, o.label)}>`, ["fh-value--mono"]),
  "textarea-mono": (o) => field(o, `<textarea class="fh-textarea" rows="4"${inputAttrs(o, o.label)}>${esc(isEmpty(o.value) ? "" : typeof o.value === "string" ? o.value : JSON.stringify(o.value, null, 2))}</textarea>`, ["fh-value--mono"]),
  "key-field": (o) => code.masked(o),
};

const series = { sparkline: number.sparkline, "sparkline-last": number["sparkline-last"] };

const DRAW = { option, options, entity, money, ratio, number, series, temporal, file, link, flag, prose, text, code };
