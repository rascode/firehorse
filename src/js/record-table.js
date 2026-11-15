/*!
 * Firehorse record table: dist/record-table.js · MIT
 * ---------------------------------------------------------------
 * One record as a table turned on its side (TBL-3): a row per field, the label on the left and the value on the
 * right, every value drawn by the data display contract in the record context (or the form context in Fields).
 *   read     TBL-3.1  one column of rows
 *   fields   TBL-3.2  a field beside each label (the form context: inputs, selects, switches)
 *   mixed    TBL-3.3  two columns of rows from 38rem; long values (prose, a full entity row, a code block) span both
 *   review   TBL-3.4  label, value and an Edit action on each row (a form's last step)
 *   stacked  TBL-3.5  the label over its value in a narrow slot, beside it from 28rem
 * The Key value list (KVL), Review rows (RVW) and the description list (DET) moved here; their classes still work.
 *
 *   import { recordTable, RecordTable } from "@rascode/firehorse/record-table";
 *   el.innerHTML = recordTable(fields, record, { variant: "read" });   // static markup
 *   new RecordTable(el, { fields, record, variant: "mixed" });         // with the column display menu
 *   <div data-fh-record><script type="application/json">{ "fields": [...], "record": {...}, "variant": "read" }</script></div>
 *
 * The column display menu sits on each row's label (Read, Mixed, Review, Stacked): any viewer re-displays that
 * field with the variants the grid allows in the record context. Saved per viewer under fh:presentation:<id>, or
 * handed in by the app (presentation: { initial, store: false, choose: false }); fh:presentation-change fires.
 * Review's Edit fires fh:record-edit { key }.
 */
import { renderValue, resolveValue, describeField, isEmpty } from "./values.js";
import { menuTrigger, bindColumnMenu, presentationStore } from "./column-menu.js";

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const VARIANTS = { read: "TBL-3.1", fields: "TBL-3.2", mixed: "TBL-3.3", review: "TBL-3.4", stacked: "TBL-3.5" };
const FULL = new Set(["full", "code-block", "file-row"]);
let seq = 0;
const raw = (v) => esc(JSON.stringify(v ?? null));
/** What a static row carries so a script can redraw it: the semantic type, and the rest of the field when there is more. */
const fieldAttrs = (f) => {
  const { key, label, semanticType, ...rest } = f;
  return `${semanticType ? ` data-semantic="${esc(semanticType)}"` : ""}${Object.keys(rest).length ? ` data-fh-field-json="${esc(JSON.stringify(rest))}"` : ""}`;
};

/** One record as its record table markup. opts: { variant, label (the list's name), choice ({ key: variant }), choose, idPrefix, locale, now, currency, edit (Review's button word) }. */
export function recordTable(fields = [], record = {}, opts = {}) {
  const variant = VARIANTS[opts.variant] ? opts.variant : "read";
  const prefix = opts.idPrefix ?? `fh-rt-${++seq}`;
  const form = variant === "fields";
  const rows = fields.map((f) => {
    const value = record?.[f.key];
    const label = esc(f.label ?? f.key);
    const shared = { row: record, label: f.label ?? f.key, locale: opts.locale, now: opts.now, currency: opts.currency };
    if (form) {
      const id = `${prefix}-${f.key}`;
      const r = resolveValue(f, "form");
      if (!r.variant) return "";
      const html = renderValue(f, value, "form", { ...shared, id, name: f.key });
      const full = describeField(f).shape === "prose" || r.variant === "textarea" || r.variant === "textarea-mono";
      return `  <div${full ? ` class="fh-record__full"` : ""} data-fh-field="${esc(f.key)}"${fieldAttrs(f)}><dt>${r.editable ? `<label for="${esc(id)}">${label}</label>` : label}</dt><dd data-fh-value="${raw(value)}">${html}</dd></div>`;
    }
    const r = resolveValue(f, "record");
    if (!r.variant) return "";
    const chosen = opts.choice?.[f.key];
    const html = renderValue(f, value, "record", { ...shared, variant: chosen });
    const shown = chosen && html.includes(`data-fh="`) ? chosen : r.variant;
    const full = variant === "mixed" && (r.shape === "prose" || FULL.has(shown));
    const trigger = opts.choose === false ? "" : menuTrigger(f, "record", { choose: opts.choose !== false });
    const head = trigger ? `<dt data-fh-colmenu-host><span class="fh-roll">${label}</span>${trigger}</dt>` : `<dt>${label}</dt>`;
    const edit = variant === "review" ? `<button type="button" class="fh-action fh-record__edit" data-fh-record-edit="${esc(f.key)}" aria-label="${esc(`${opts.edit ?? "Edit"} ${f.label ?? f.key}`)}">${esc(opts.edit ?? "Edit")}</button>` : "";
    return `  <div${full ? ` class="fh-record__full"` : ""} data-fh-field="${esc(f.key)}"${fieldAttrs(f)}>${head}<dd data-fh-value="${raw(value)}">${html}</dd>${edit}</div>`;
  }).filter(Boolean);
  return `<dl class="fh-record fh-record--${variant}"${opts.label ? ` aria-label="${esc(opts.label)}"` : ""} data-fh="${VARIANTS[variant]}">\n${rows.join("\n")}\n</dl>`;
}

/** Reads a static record table's fields, record and variant back from its markup (div[data-fh-field], dd[data-fh-value]). */
export function readRecord(dl) {
  const variant = Object.keys(VARIANTS).find((v) => dl.classList.contains(`fh-record--${v}`)) ?? "read";
  const fields = [], record = {};
  for (const row of dl.querySelectorAll(":scope > div[data-fh-field]")) {
    const dd = row.querySelector(":scope > dd[data-fh-value]");
    if (!dd) return null;
    const key = row.dataset.fhField;
    const label = row.querySelector(":scope > dt")?.textContent.trim() ?? key;
    fields.push({ key, label, ...(row.dataset.semantic ? { semanticType: row.dataset.semantic } : {}), ...(row.dataset.fhFieldJson ? JSON.parse(row.dataset.fhFieldJson) : {}) });
    record[key] = JSON.parse(dd.dataset.fhValue);
  }
  return fields.length ? { fields, record, variant, label: dl.getAttribute("aria-label") ?? undefined, attrs: [...dl.attributes].filter((a) => /^data-fh-(id|name|was)$/.test(a.name)) } : null;
}

/** A record table that keeps a viewer's display picks (the column display menu) and re-renders on change. */
export class RecordTable {
  constructor(el, config = {}) {
    this.el = el;
    // A static record table (server markup) is read back from its own rows.
    const read = !config.fields && el.querySelector(":scope > dl.fh-record") ? readRecord(el.querySelector(":scope > dl.fh-record")) : null;
    this.cfg = { ...(read ?? {}), ...config };
    this.fields = config.fields ?? read?.fields ?? [];
    this.record = config.record ?? read?.record ?? {};
    this.keep = read?.attrs ?? [];
    const pres = config.presentation ?? {};
    this.choose = pres.choose !== false;
    this.id = config.id ?? (el.id || null);
    this.store = presentationStore(this.id ?? "record", { store: pres.store !== false && Boolean(this.id ?? true) });
    this.choice = { ...(pres.initial ?? {}), ...this.store.load() };
    if (!this.fields.length) return;
    this.render();
    if (this.cfg.variant !== "fields") {
      bindColumnMenu(el, {
        context: "record",
        field: (k) => this.fields.find((f) => f.key === k),
        sample: (k) => this.record[k],
        current: (k) => this.choice[k] ?? null,
        options: () => ({ row: this.record, locale: config.locale, now: config.now }),
        pick: (k, v) => this.present(k, v),
      });
    }
    el.addEventListener("click", (e) => {
      const b = e.target.closest?.("[data-fh-record-edit]");
      if (b && el.contains(b)) el.dispatchEvent(new CustomEvent("fh:record-edit", { bubbles: true, detail: { key: b.dataset.fhRecordEdit } }));
    });
  }
  render() {
    const menu = this.el.querySelector(":scope > .fh-colmenu__menu");
    this.el.innerHTML = recordTable(this.fields, this.record, { ...this.cfg, choice: this.choice, choose: this.choose, idPrefix: this.id ?? undefined });
    // The table keeps its Index attributes (data-fh-id, data-fh-name, data-fh-was) through a redraw.
    const dl = this.el.querySelector(":scope > dl");
    for (const a of this.keep) dl?.setAttribute(a.name, a.value);
    if (menu) this.el.append(menu);
  }
  present(key, variant) {
    variant ? (this.choice[key] = variant) : delete this.choice[key];
    this.store.save(this.choice);
    this.el.dispatchEvent(new CustomEvent("fh:presentation-change", { bubbles: true, detail: { table: this.id, key, context: "record", variant: variant ?? null } }));
    this.render();
  }
  setRecord(record) { this.record = record ?? {}; this.render(); }
}

function boot() {
  for (const el of document.querySelectorAll("[data-fh-record]:not([data-fh-ready])")) {
    const src = el.querySelector(':scope > script[type="application/json"]');
    try { el.dataset.fhReady = ""; el.fhRecord = new RecordTable(el, src ? JSON.parse(src.textContent) : {}); }
    catch (err) { console.error("Firehorse record table:", err); }
  }
}
if (typeof document !== "undefined") {
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
  (globalThis.Firehorse ??= {}).RecordTable = RecordTable;
}
export { isEmpty };
