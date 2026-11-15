/*!
 * Firehorse table, fields mode: dist/table.js · MIT
 * ---------------------------------------------------------------
 * The Table (TBL) from data: the same fields + rows the datatable takes, drawn as static fh-table markup with no
 * toolbar (TBL-1.2). Every cell goes through the data display contract (renderValue in the cell context), so a
 * status, a person or an amount looks the same here as in the datatable and the record table.
 *
 *   import { table, FieldsTable } from "@rascode/firehorse/table";
 *   el.innerHTML = table(fields, rows, { caption: "Invoices" });   // static markup, for a server
 *   new FieldsTable(el, { fields, rows });                         // with the column display menu
 *   <div data-fh-table><script type="application/json">{ "fields": [...], "rows": [...] }</script></div>
 *
 * Each header names its field (th[data-fh-field]) and each cell carries its raw value (td[data-fh-value]), so the
 * column display menu can redraw a column in place. A hand-written <table class="fh-table"> gets the menu too when
 * it carries the same two attributes (data-semantic on the th names the semantic type); without them it draws as
 * written and shows no button. Options: caption, reflow (cards under 36rem, default true), presentation
 * ({ initial, store, choose }), locale, now, currency. Events: fh:presentation-change { table, key, context, variant }.
 */
import { renderValue, resolveValue, isEmpty } from "./values.js";
import { menuTrigger, bindColumnMenu, presentationStore } from "./column-menu.js";

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const raw = (v) => esc(JSON.stringify(v ?? null));

/** Money columns draw whole units only when every row is whole (rule 4). */
const centsOf = (f, rows) => (resolveValue(f, "cell").shape === "money" && rows.every((r) => isEmpty(r[f.key]) || Number.isInteger(Number(r[f.key]?.amount ?? r[f.key]))) ? false : undefined);

/** The table's markup. opts: { caption, reflow, choice ({ key: variant }), choose, locale, now, currency, label }. */
export function table(fields = [], rows = [], opts = {}) {
  const shown = fields.filter((f) => resolveValue(f, "cell").variant);
  const cents = Object.fromEntries(shown.map((f) => [f.key, centsOf(f, rows)]));
  const end = (f) => resolveValue(f, "cell").align === "end";
  const head = shown.map((f) => {
    const trigger = opts.choose === false ? "" : menuTrigger(f, "cell");
    const { key, label, semanticType, ...rest } = f;
    return `<th scope="col" data-fh-field="${esc(f.key)}"${f.semanticType ? ` data-semantic="${esc(f.semanticType)}"` : ""}${Object.keys(rest).length ? ` data-fh-field-json="${esc(JSON.stringify(rest))}"` : ""}${end(f) ? ` class="fh-num"` : ""}${trigger ? " data-fh-colmenu-host" : ""}>${trigger ? `<span class="fh-table__th"><span class="fh-roll">${esc(f.label ?? f.key)}</span>${trigger}</span>` : esc(f.label ?? f.key)}</th>`;
  }).join("");
  const body = rows.map((row) => `<tr>${shown.map((f) => `<td data-label="${esc(f.label ?? f.key)}" data-fh-value="${raw(row[f.key])}"${end(f) ? ` class="fh-num"` : ""}>${renderValue(f, row[f.key], "cell", { row, label: f.label, variant: opts.choice?.[f.key], cents: cents[f.key], locale: opts.locale, now: opts.now, currency: opts.currency })}</td>`).join("")}</tr>`).join("\n      ");
  return `<table class="fh-table${opts.reflow === false ? "" : " fh-table--reflow"}"${opts.label ? ` aria-label="${esc(opts.label)}"` : ""} data-fh="TBL-1.2">
    ${opts.caption ? `<caption>${esc(opts.caption)}</caption>` : ""}<thead><tr>${head}</tr></thead>
    <tbody>
      ${body}
    </tbody>
  </table>`;
}

/** Reads a static table's fields and rows back from its markup (th[data-fh-field], td[data-fh-value]). */
export function readTable(tableEl) {
  const ths = [...tableEl.querySelectorAll("thead th")];
  const fields = ths.map((th) => ({ key: th.dataset.fhField, label: th.textContent.trim() || th.dataset.fhField, ...(th.dataset.semantic ? { semanticType: th.dataset.semantic } : {}), ...(th.dataset.fhFieldJson ? JSON.parse(th.dataset.fhFieldJson) : {}) }));
  if (fields.some((f) => !f.key)) return null;
  const rows = [...tableEl.querySelectorAll("tbody tr")].map((tr) => Object.fromEntries([...tr.children].map((td, i) => [fields[i]?.key, td.dataset.fhValue == null ? undefined : JSON.parse(td.dataset.fhValue)])));
  if (rows.some((r) => Object.values(r).some((v) => v === undefined))) return null;
  return { fields, rows };
}

/** A table from fields and rows (or a static table that carries them) with the column display menu. */
export class FieldsTable {
  constructor(el, config = {}) {
    this.el = el;
    this.cfg = config;
    const read = !config.fields && el.querySelector("table") ? readTable(el.querySelector("table")) : null;
    this.fields = config.fields ?? read?.fields ?? [];
    this.rows = config.rows ?? read?.rows ?? [];
    this.caption = config.caption ?? el.querySelector("caption")?.textContent ?? "";
    const pres = config.presentation ?? {};
    this.choose = pres.choose !== false;
    this.id = config.id ?? (el.id || null);
    this.store = presentationStore(this.id ?? "table", { store: pres.store !== false });
    this.choice = { ...(pres.initial ?? {}), ...this.store.load() };
    if (!this.fields.length) return;
    this.render();
    bindColumnMenu(el, {
      context: "cell",
      field: (k) => this.fields.find((f) => f.key === k),
      sample: (k) => this.rows.map((r) => r[k]).find((v) => !isEmpty(v)),
      current: (k) => this.choice[k] ?? null,
      options: (k) => ({ row: this.rows.find((r) => !isEmpty(r[k])), locale: config.locale, now: config.now, cents: centsOf(this.fields.find((f) => f.key === k), this.rows) }),
      pick: (k, v) => this.present(k, v),
    });
  }
  render() {
    const menu = this.el.querySelector(":scope > .fh-colmenu__menu");
    this.el.innerHTML = table(this.fields, this.rows, { ...this.cfg, caption: this.caption, choice: this.choice, choose: this.choose });
    if (menu) this.el.append(menu);
  }
  present(key, variant) {
    variant ? (this.choice[key] = variant) : delete this.choice[key];
    this.store.save(this.choice);
    this.el.dispatchEvent(new CustomEvent("fh:presentation-change", { bubbles: true, detail: { table: this.id, key, context: "cell", variant: variant ?? null } }));
    this.render();
  }
  setRows(rows) { this.rows = rows; this.render(); }
}

function boot() {
  for (const el of document.querySelectorAll("[data-fh-table]:not([data-fh-ready])")) {
    const src = el.querySelector(':scope > script[type="application/json"]');
    try {
      el.dataset.fhReady = "";
      el.fhTable = new FieldsTable(el, src ? JSON.parse(src.textContent) : {});
    } catch (err) { console.error("Firehorse table:", err); }
  }
}
if (typeof document !== "undefined") {
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
  (globalThis.Firehorse ??= {}).FieldsTable = FieldsTable;
}
