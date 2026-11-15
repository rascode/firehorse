/*!
 * Firehorse datatable — optional module (MIT)
 * ---------------------------------------------------------------
 * Renders a database-style table in Firehorse markup from a field
 * definition and rows, then adds search, filters, multi-sort, grouping
 * with aggregates, field visibility, density, column resizing, row
 * selection with bulk actions, pagination, and three views: grid,
 * gallery and board (drag cards between lanes).
 *
 *   <div class="fh-dt" data-fh-datatable>
 *     <script type="application/json">{ "fields": [...], "rows": [...] }</script>
 *   </div>
 *   <script type="module" src="datatable.js"></script>
 *
 * or:  import { FirehorseTable } from "@rascode/firehorse/datatable";
 *      new FirehorseTable(el, { fields, rows });
 *
 * Every value is drawn by the data display contract (values.js): a field's type is an alias for a
 * semantic type (or send semanticType, optionSet, entity kind and the rest directly), and
 * renderValue() draws it as its Values (VAL) part in the cell, card or record context. The table
 * never decides how a value looks. A viewer can re-display any column with the variants the grid
 * allows (the column display menu, column-menu.js): saved per viewer in this browser under
 * fh:presentation:<table id>, or handed in by the app (presentation: { initial, store: false }).
 *
 * Field types are a registry, so you can add your own (a custom type draws itself):
 *   FirehorseTable.defineType("sku", { icon: "barcode", kind: "text",
 *     render: (v) => `<code>${v}</code>` });
 *
 * Expandable rows (the records table, DTB-2): expand: true opens a row's other fields as a record
 * table under it; expand: (row) => html puts your own content there.
 *
 * Events (bubble from the table element):
 *   fh:row-open             { row }                         a row or card was opened
 *   fh:change               { row, key, value }             a value changed (checkbox, board drag)
 *   fh:bulk                 { action, rows }                a bulk action ran
 *   fh:action               {}                              the toolbar's primary action
 *   fh:presentation-change  { table, key, context, variant } a viewer re-displayed a column (null: reset)
 *   fh:record-toggle        { open, toggle, detail, row }   a row's detail opened or closed
 */

import { renderValue, textOf, describeField, optionSetFor, toneOf as toneIn, isEmpty, resolveValue, rules } from "./values.js";
import { menuTrigger, bindColumnMenu, presentationStore } from "./column-menu.js";
import { recordTable } from "./record-table.js";

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const icon = (n, extra = "") => (n ? `<i class="fh-icon fh-icon--${n} ${extra}" aria-hidden="true"></i>` : "");
const uid = () => Math.random().toString(36).slice(2, 8);
const DAY = 864e5;

/* —— Field types: what the toolbar knows (icon, filter kind, aggregate). How a value looks is the
 * contract's: every built-in type is an alias in display-rules.json and draws through renderValue(). —— */
const kinds = {
  text: { ops: ["contains", "does not contain", "is", "is not", "is empty", "is not empty"] },
  number: { ops: ["=", "≠", ">", "<", "≥", "≤", "is empty", "is not empty"] },
  option: { ops: ["is", "is not", "is any of", "is empty", "is not empty"] },
  options: { ops: ["has any of", "has all of", "has none of", "is empty", "is not empty"] },
  date: { ops: ["is before", "is after", "is within the next", "is within the past", "is empty", "is not empty"] },
  bool: { ops: ["is checked", "is not checked"] },
};

const names = (v = []) => [].concat(v ?? []).map((p) => (p && typeof p === "object" ? p.name ?? p.label ?? p.id : p));
export const types = {
  text: { icon: "type", kind: "text" },
  long: { icon: "file-text", kind: "text", cell: "long" },
  number: { icon: "hash", kind: "number", agg: "sum" },
  currency: { icon: "dollar-sign", kind: "number", agg: "sum" },
  percent: { icon: "percent", kind: "number", agg: "avg" },
  progress: { icon: "loader-circle", kind: "number", agg: "avg" },
  select: { icon: "circle-dot", kind: "option" },
  status: { icon: "activity", kind: "option" },
  multi: { icon: "list-checks", kind: "options" },
  tags: { icon: "tag", kind: "options" },
  date: { icon: "calendar", kind: "date" },
  check: { icon: "circle-check", kind: "bool", agg: "checked" },
  rating: { icon: "star", kind: "number", agg: "avg" },
  user: { icon: "user", kind: "text" },
  users: { icon: "users", kind: "options", values: names },
  url: { icon: "link", kind: "text" },
  email: { icon: "at-sign", kind: "text" },
  phone: { icon: "phone", kind: "text" },
  link: { icon: "link-2", kind: "options", values: names },
  attachment: { icon: "paperclip", kind: "options", values: (v = []) => [].concat(v ?? []).map((a) => a?.name ?? a) },
  formula: { icon: "sigma", kind: "number" },
  sparkline: { icon: "chart-line", kind: "number", value: (v = []) => v.at(-1) ?? 0, text: (v = []) => v.join(" ") },
};
// A field that names no built-in type (semanticType, shape) gets its toolbar kind from its shape.
const SHAPE_TYPE = {
  text: { icon: "type", kind: "text" }, prose: { icon: "file-text", kind: "text", cell: "long" }, code: { icon: "code", kind: "text" },
  number: { icon: "hash", kind: "number", agg: "sum" }, money: { icon: "dollar-sign", kind: "number", agg: "sum" },
  ratio: { icon: "percent", kind: "number", agg: "avg" }, series: types.sparkline, temporal: { icon: "calendar", kind: "date" },
  option: { icon: "circle-dot", kind: "option" }, options: { icon: "tag", kind: "options" }, entity: { icon: "user", kind: "text" },
  file: types.attachment, link: { icon: "link", kind: "text" }, flag: types.check,
};

/* —— The table ——————————————————————————————————————————— */
export class FirehorseTable {
  static types = types;
  static defineType(name, def) { types[name] = { kind: "text", render: (v) => esc(v), ...def }; }

  constructor(el, config = {}) {
    this.el = el;
    this.id = el.id || `fh-dt-${uid()}`;
    this.cfg = config;
    // A field with no type, semantic type or shape is text.
    this.fields = config.fields.map((f) => ({ label: f.key, ...(f.type || f.semanticType || f.shape || f.optionSet ? {} : { type: "text" }), ...f }));
    this.primary = config.primary ?? this.fields[0].key;
    this.rows = config.rows.map((r, i) => ({ id: r.id ?? String(i + 1), ...r }));
    this.locale = config.locale ?? undefined;
    this.currency = config.currency ?? "USD";
    this.nf = new Intl.NumberFormat(this.locale);
    this.vfs = new Map(this.fields.map((f) => [f.key, this.valueField(f)]));
    this.cents = new Map();
    this.measure();
    // The column display menu: on for every viewer, unless the author locks it (presentation.choose: false, or a
    // field's choose: false). Picks are kept per viewer in this browser, or handed in by the app (initial, store: false).
    const pres = config.presentation ?? {};
    this.choose = pres.choose !== false;
    this.storeId = config.id ?? (el.id || null) ?? null;
    this.store = presentationStore(this.storeId ?? String(config.title ?? "records").toLowerCase().replace(/[^a-z0-9]+/g, "-"), { store: pres.store !== false });
    this.choice = { ...(pres.initial ?? {}), ...this.store.load() };
    this.state = {
      query: "",
      filters: config.filters ?? [],
      sort: config.sort ?? [],
      group: config.groupBy ?? null,
      hidden: new Set(config.hidden ?? []),
      view: config.view ?? "grid",
      density: config.density ?? "comfortable",
      page: 0,
      selected: new Set(),
      collapsed: new Set(),
      widths: {},
      expanded: new Set(config.expanded ?? []),
    };
    this.pageSize = config.pageSize ?? 25;
    this.boardField = config.boardField ?? this.fields.find((f) => this.type(f).kind === "option")?.key;
    this.el.classList.add("fh-dt");
    this.mount();
  }

  field(key) { return this.fields.find((f) => f.key === key); }
  /** The field as the contract reads it: a built-in type stays its alias; a custom type (defineType) is not passed. */
  valueField(f) {
    const builtin = Boolean(types[f.type]) && !types[f.type].render && Boolean(rules.aliases[f.type]);
    const vf = { ...f, type: builtin ? f.type : undefined };
    if (describeField(vf).shape === "money" && !vf.currency && !vf.currencyFrom) vf.currency = this.currency;
    return vf;
  }
  vf(f) { return this.vfs?.get(f.key) ?? this.valueField(f); }
  /** A custom type (defineType with render) draws itself; every other field draws through the contract. */
  custom(f) { return Boolean(types[f.type]?.render); }
  shape(f) { return this.custom(f) ? null : describeField(this.vf(f)).shape; }
  type(f) { return types[f.type] ?? SHAPE_TYPE[this.shape(f)] ?? types.text; }
  set(f) { return this.custom(f) ? (f.options ? { options: f.options.map((o) => (typeof o === "object" ? { label: String(o.value), ...o } : { value: o, label: String(o) })) } : null) : optionSetFor(this.vf(f)); }
  options(f) { return this.set(f)?.options ?? []; }
  toneOf(f, v) { return toneIn(this.set(f), v); }
  /** Money columns draw whole units in cells only when every row is whole (rule 4). */
  measure() {
    for (const f of this.fields) {
      if (this.shape(f) !== "money") continue;
      const whole = this.rows.every((r) => isEmpty(r[f.key]) || Number.isInteger(Number(r[f.key]?.amount ?? r[f.key])));
      whole ? this.cents.set(f.key, false) : this.cents.delete(f.key);
    }
  }
  /** One value, drawn by the contract in a context (cell, card, record); a custom type draws itself. */
  draw(f, v, context, row, extra = {}) {
    const t = types[f.type];
    if (t?.render) return t.render(v, f, this, row);
    const opts = { row, label: f.label, locale: this.locale, ...extra };
    if (context === "cell") {
      if (this.choice[f.key]) opts.variant = this.choice[f.key];
      if (this.cents.has(f.key)) opts.cents = this.cents.get(f.key);
      if (this.shape(f) === "flag" && f.editable !== false && row) Object.assign(opts, { edit: true, editKey: f.key, label: `${f.label}: ${this.text(this.field(this.primary), row[this.primary])}` });
    }
    return renderValue(this.vf(f), v, context, opts);
  }
  text(f, v) {
    const t = this.type(f);
    if (t.text) return t.text(v, f, this);
    if (this.custom(f)) return Array.isArray(v) ? v.join(", ") : String(v ?? "");
    return textOf(this.vf(f), v) ?? "";
  }
  values(f, v) { const t = this.type(f); return t.values ? t.values(v) : [].concat(v ?? []); }
  num(f, v) { const t = this.type(f); return t.value ? t.value(v) : Number(v); }
  get visible() { return this.fields.filter((f) => !this.state.hidden.has(f.key)); }

  /* —— Query pipeline —— */
  match(row, { key, op, value }) {
    const f = this.field(key); if (!f) return true;
    const v = row[key];
    const kind = this.type(f).kind;
    const empty = v == null || v === "" || (Array.isArray(v) && !v.length);
    if (op === "is empty") return empty;
    if (op === "is not empty") return !empty;
    if (kind === "bool") return op === "is checked" ? !!v : !v;
    if (kind === "number") {
      const a = this.num(f, v), b = Number(value);
      if (empty || value === "" || Number.isNaN(b)) return op === "≠";
      return { "=": a === b, "≠": a !== b, ">": a > b, "<": a < b, "≥": a >= b, "≤": a <= b }[op] ?? true;
    }
    if (kind === "date") {
      if (empty) return false;
      const t = new Date(v).getTime(), now = Date.now();
      if (op === "is before") return value ? t < new Date(value).getTime() : true;
      if (op === "is after") return value ? t > new Date(value).getTime() : true;
      const n = Number(value || 7) * DAY;
      return op === "is within the next" ? t >= now - DAY && t <= now + n : t <= now && t >= now - n;
    }
    if (kind === "option") {
      const list = [].concat(value ?? []);
      if (op === "is") return v === list[0];
      if (op === "is not") return v !== list[0];
      return !list.length || list.includes(v);
    }
    if (kind === "options") {
      const have = this.values(f, v), list = [].concat(value ?? []);
      if (!list.length) return true;
      if (op === "has all of") return list.every((x) => have.includes(x));
      if (op === "has none of") return !list.some((x) => have.includes(x));
      return list.some((x) => have.includes(x));
    }
    const s = this.text(f, v).toLowerCase(), q = String(value ?? "").toLowerCase();
    return { contains: s.includes(q), "does not contain": !s.includes(q), is: s === q, "is not": s !== q }[op] ?? true;
  }

  compare(f, a, b) {
    const kind = this.type(f).kind;
    if (kind === "number") return (this.num(f, a) || 0) - (this.num(f, b) || 0);
    if (kind === "date") return (a ? new Date(a) : 0) - (b ? new Date(b) : 0);
    if (kind === "bool") return Number(!!a) - Number(!!b);
    if (kind === "option" && this.options(f).length) {
      const opts = this.options(f);
      const i = (v) => opts.findIndex((o) => String(o.value) === String(v));
      return i(a) - i(b);
    }
    return this.text(f, a).localeCompare(this.text(f, b), this.locale, { numeric: true, sensitivity: "base" });
  }

  get result() {
    const { query, filters, sort, group } = this.state;
    const q = query.trim().toLowerCase();
    let rows = this.rows.filter((r) => filters.every((fl) => this.match(r, fl)));
    if (q) rows = rows.filter((r) => this.fields.some((f) => this.text(f, r[f.key]).toLowerCase().includes(q)));
    const order = [...(group ? [{ key: group, dir: "asc" }] : []), ...sort];
    if (order.length) {
      rows = [...rows].sort((a, b) => {
        for (const { key, dir } of order) {
          const f = this.field(key);
          const c = this.compare(f, a[key], b[key]);
          if (c) return dir === "desc" ? -c : c;
        }
        return 0;
      });
    }
    return rows;
  }

  aggregate(f, rows) {
    const t = this.type(f);
    if (t.agg === "sum") { const s = rows.reduce((n, r) => n + (Number(r[f.key]?.amount ?? r[f.key]) || 0), 0); return `Sum <b>${this.shape(f) === "money" ? renderValue(this.vf(f), s, "cell", { align: false, cents: this.cents.get(f.key), locale: this.locale }) : this.nf.format(s)}</b>`; }
    if (t.agg === "avg") { const vals = rows.map((r) => this.num(f, r[f.key])).filter((x) => !Number.isNaN(x)); const a = vals.length ? vals.reduce((m, x) => m + x, 0) / vals.length : 0; return `Avg <b>${f.type === "rating" ? a.toFixed(1) : Math.round(a) + (this.shape(f) === "ratio" ? "%" : "")}</b>`; }
    if (t.agg === "checked") return `<b>${rows.filter((r) => r[f.key]).length}</b> checked`;
    return "";
  }

  /* —— Mount: toolbar once, body on every change —— */
  mount() {
    const id = this.id;
    const c = this.cfg;
    const tool = (name, label, ic) => `<button class="fh-dt__tool" type="button" popovertarget="${id}-${name}" style="anchor-name: --${id}-${name}" data-tool="${name}">${icon(ic)}<span>${label}</span><b hidden></b></button>`;
    this.el.innerHTML = `
      <div class="fh-dt__toolbar">
        <h3 class="fh-dt__title">${c.icon ? `<span class="fh-icon-tile" data-tone="${c.tone ?? "accent"}" style="--fh-icon-tile: 1.75rem">${icon(c.icon)}</span>` : ""}${esc(c.title ?? "Records")}</h3>
        <span class="fh-dt__count" data-count aria-live="polite"></span>
        <fieldset class="fh-segmented fh-segmented--sm fh-dt__views" aria-label="View">
          ${(c.views ?? ["grid", "gallery", "board"]).map((v) => `<label><input type="radio" name="${id}-view" value="${v}" ${this.state.view === v ? "checked" : ""}> ${icon({ grid: "table-2", gallery: "layout-grid", board: "kanban" }[v])} ${v[0].toUpperCase() + v.slice(1)}</label>`).join("")}
        </fieldset>
        <span class="fh-dt__spacer"></span>
        <label class="fh-search fh-dt__search"><span class="fh-sr-only">Search records</span><input type="search" placeholder="Search" data-search></label>
        <span class="fh-dt__tools">${tool("filter", "Filter", "filter")}${tool("sort", "Sort", "arrow-up-down")}${tool("group", "Group", "rows-3")}${tool("fields", "Fields", "eye-off")}</span>
        <fieldset class="fh-segmented fh-segmented--sm fh-dt__density" aria-label="Row height">
          ${["compact", "comfortable", "spacious"].map((d) => `<label title="${d[0].toUpperCase() + d.slice(1)}"><input type="radio" name="${id}-density" value="${d}" ${this.state.density === d ? "checked" : ""}> ${{ compact: "S", comfortable: "M", spacious: "L" }[d]}</label>`).join("")}
        </fieldset>
        ${c.action ? `<button class="fh-dt__tool fh-dt__tool--action" type="button" data-action>${icon("plus")}<span>${esc(c.action)}</span></button>` : ""}
      </div>
      ${["filter", "sort", "group", "fields"].map((n) => `<div class="fh-dt__panel" id="${id}-${n}" popover style="position-anchor: --${id}-${n}" data-panel="${n}"></div>`).join("")}
      <div class="fh-dt__filters" data-filters></div>
      <div class="fh-dt__body" data-body></div>
      <div class="fh-dt__footer" data-footer></div>`;
    this.el.dataset.density = this.state.density;
    this.el.dataset.view = this.state.view;
    if (c.expand) this.el.dataset.expandable = "";
    this.bind();
    this.render();
  }

  bind() {
    const $ = (s) => this.el.querySelector(s);
    $("[data-search]").addEventListener("input", (e) => { this.state.query = e.target.value; this.state.page = 0; this.render(); });
    this.el.addEventListener("change", (e) => {
      const t = e.target;
      if (t.name === `${this.id}-view`) { this.state.view = t.value; this.el.dataset.view = t.value; this.render(); }
      else if (t.name === `${this.id}-density`) { this.state.density = t.value; this.el.dataset.density = t.value; }
      else if (t.matches("[data-edit]")) {
        const row = this.rows.find((r) => r.id === t.closest("[data-id]").dataset.id);
        row[t.dataset.edit] = t.checked;
        this.emit("fh:change", { row, key: t.dataset.edit, value: t.checked });
        this.renderFooter();
      } else if (t.matches("[data-select]")) {
        const id = t.closest("[data-id]").dataset.id;
        t.checked ? this.state.selected.add(id) : this.state.selected.delete(id);
        t.closest("tr, .fh-dt__card")?.setAttribute("aria-selected", t.checked);
        this.renderBulk();
      } else if (t.matches("[data-select-all]")) {
        for (const r of this.pageRows) t.checked ? this.state.selected.add(r.id) : this.state.selected.delete(r.id);
        this.renderBody();
      }
    });
    this.el.addEventListener("click", (e) => {
      const t = e.target;
      const x = t.closest(".fh-dt__expand");
      if (x && this.el.contains(x)) {
        // The row's own toggle: records.js (if loaded) must not flip it back.
        e.stopPropagation();
        const id = x.closest("[data-id]")?.dataset.id;
        const open = x.getAttribute("aria-expanded") !== "true";
        open ? this.state.expanded.add(id) : this.state.expanded.delete(id);
        x.setAttribute("aria-expanded", String(open));
        const detail = this.el.querySelector(`#${CSS.escape(x.getAttribute("aria-controls"))}`);
        if (detail) detail.hidden = !open;
        return this.emit("fh:record-toggle", { open, toggle: x, detail, row: this.rows.find((r) => r.id === id) });
      }
      const th = t.closest("[data-sort-key]");
      if (th) return this.toggleSort(th.dataset.sortKey, e.shiftKey);
      const g = t.closest("[data-group-toggle]");
      if (g) { const k = g.dataset.groupToggle; this.state.collapsed.has(k) ? this.state.collapsed.delete(k) : this.state.collapsed.add(k); return this.renderBody(); }
      const rm = t.closest("[data-remove-filter]");
      if (rm) { this.state.filters.splice(Number(rm.dataset.removeFilter), 1); return this.render(); }
      if (t.closest("[data-clear-filters]")) { this.state.filters = []; this.state.query = ""; this.el.querySelector("[data-search]").value = ""; return this.render(); }
      const pg = t.closest("[data-page]");
      if (pg) { this.state.page += Number(pg.dataset.page); return this.render(); }
      const bulk = t.closest("[data-bulk]");
      if (bulk) return this.bulk(bulk.dataset.bulk);
      if (t.closest("[data-action]")) return this.emit("fh:action", {});
      if (t.closest("a, button, input, label, select, .fh-dt__resize")) return;
      const open = t.closest("[data-id]");
      if (open && this.el.querySelector("[data-body]").contains(open)) this.openRow(open.dataset.id);
    });
    this.el.addEventListener("keydown", (e) => {
      const row = e.target.closest?.("[data-id]");
      if (!row || e.target !== row) return;
      if (e.key === "Enter") { e.preventDefault(); this.openRow(row.dataset.id); }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const all = [...this.el.querySelectorAll("[data-body] [data-id]")];
        all[all.indexOf(row) + (e.key === "ArrowDown" ? 1 : -1)]?.focus();
      }
      if (e.key === " ") { e.preventDefault(); const cb = row.querySelector("[data-select]"); if (cb) { cb.checked = !cb.checked; cb.dispatchEvent(new Event("change", { bubbles: true })); } }
    });
    // Panels render fresh each time they open.
    for (const p of this.el.querySelectorAll("[data-panel]")) {
      p.addEventListener("toggle", (e) => { if (e.newState === "open") this.renderPanel(p.dataset.panel); });
      p.addEventListener("input", (e) => this.onPanel(p.dataset.panel, e));
      p.addEventListener("change", (e) => this.onPanel(p.dataset.panel, e));
      p.addEventListener("click", (e) => this.onPanel(p.dataset.panel, e));
    }
    this.bindResize();
    this.bindBoard();
    bindColumnMenu(this.el, {
      context: "cell",
      field: (k) => this.vf(this.field(k)),
      sample: (k) => this.rows.map((r) => r[k]).find((v) => !isEmpty(v)),
      current: (k) => this.choice[k] ?? null,
      options: (k) => ({ label: this.field(k)?.label, cents: this.cents.get(k), locale: this.locale, row: this.rows.find((r) => !isEmpty(r[k])) }),
      pick: (k, v) => this.present(k, v),
    });
  }

  emit(name, detail) { this.el.dispatchEvent(new CustomEvent(name, { bubbles: true, detail })); }
  openRow(id) { const row = this.rows.find((r) => r.id === id); if (row) this.emit("fh:row-open", { row, fields: this.fields, table: this }); }

  toggleSort(key, add) {
    const s = this.state.sort;
    const i = s.findIndex((x) => x.key === key);
    if (i < 0) { if (!add) s.length = 0; s.push({ key, dir: "asc" }); }
    else if (s[i].dir === "asc") s[i].dir = "desc";
    else s.splice(i, 1);
    this.render();
  }

  bulk(action) {
    const rows = this.rows.filter((r) => this.state.selected.has(r.id));
    if (action === "clear") { this.state.selected.clear(); return this.renderBody(); }
    if (action === "csv") this.download(this.csv(rows), `${(this.cfg.title ?? "records").toLowerCase().replace(/\W+/g, "-")}.csv`);
    if (action === "copy") navigator.clipboard?.writeText(this.csv(rows, "\t")).catch(() => {});
    this.emit("fh:bulk", { action, rows });
  }

  csv(rows = this.result, sep = ",") {
    const f = this.visible;
    const cell = (s) => (/[",\n\t]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s);
    return [f.map((x) => cell(x.label)).join(sep), ...rows.map((r) => f.map((x) => cell(this.text(x, r[x.key]))).join(sep))].join("\n");
  }

  download(text, name) {
    const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(new Blob([text], { type: "text/csv" })), download: name });
    a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  /* —— Render —— */
  render() { this.renderFilters(); this.renderBody(); this.renderFooter(); this.renderTools(); }

  renderTools() {
    const set = (n, count) => {
      const b = this.el.querySelector(`[data-tool="${n}"]`);
      const badge = b.querySelector("b");
      badge.hidden = !count; badge.textContent = count || "";
      count ? b.setAttribute("data-active", "") : b.removeAttribute("data-active");
    };
    set("filter", this.state.filters.length);
    set("sort", this.state.sort.length);
    set("group", this.state.group ? 1 : 0);
    set("fields", this.state.hidden.size);
  }

  renderFilters() {
    const el = this.el.querySelector("[data-filters]");
    const chips = this.state.filters.map((fl, i) => {
      const f = this.field(fl.key);
      const v = ["is empty", "is not empty", "is checked", "is not checked"].includes(fl.op) ? "" : ` ${[].concat(fl.value ?? []).join(", ")}${fl.op.startsWith("is within") ? " days" : ""}`;
      return `<span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="${this.cfg.tone ?? "accent"}">${icon(this.type(f).icon)}<span><b>${esc(f.label)}</b> ${esc(fl.op)}${esc(v)}</span><button class="fh-chip__remove" type="button" data-remove-filter="${i}" aria-label="Remove filter ${esc(f.label)}"></button></span>`;
    });
    if (this.state.group) chips.push(`<span class="fh-chip fh-chip--underline fh-chip--sm">${icon("rows-3")} Grouped by ${esc(this.field(this.state.group).label)}</span>`);
    this.state.sort.forEach((s, i) => chips.push(`<span class="fh-chip fh-chip--underline fh-chip--sm">${icon("arrow-up-down")} ${i ? "then" : "Sorted by"} ${esc(this.field(s.key).label)} ${s.dir === "asc" ? "↑" : "↓"}</span>`));
    el.innerHTML = chips.length ? `${chips.join("")}${this.state.filters.length ? `<button class="fh-dt__tool" type="button" data-clear-filters>Clear filters</button>` : ""}` : "";
  }

  get pageRows() {
    const rows = this.result;
    if (this.state.group || this.state.view !== "grid") return rows;
    const start = this.state.page * this.pageSize;
    return rows.slice(start, start + this.pageSize);
  }

  renderBody() {
    const body = this.el.querySelector("[data-body]");
    const rows = this.pageRows;
    const total = this.result.length;
    this.el.querySelector("[data-count]").textContent = `${total} of ${this.rows.length} records`;
    if (!total) {
      body.innerHTML = `<div class="fh-dt__empty">${icon("search", "fh-icon--lg")}<p><b>No records match.</b><br>Try a different search or remove a filter.</p><button class="fh-button fh-button--sm fh-button--secondary" type="button" data-clear-filters>Clear filters</button></div>`;
      return this.renderBulk();
    }
    body.innerHTML = this.state.view === "gallery" ? this.gallery(rows) : this.state.view === "board" ? this.board(rows) : this.grid(rows);
    this.renderBulk();
  }

  /** A viewer re-displayed a column (the column display menu); null puts it back to the field's default. */
  present(key, variant) {
    variant ? (this.choice[key] = variant) : delete this.choice[key];
    this.store.save(this.choice);
    this.emit("fh:presentation-change", { table: this.storeId ?? this.id, key, context: "cell", variant: variant ?? null });
    this.renderBody();
  }

  cellClass(f) {
    const end = !this.custom(f) && resolveValue(this.vf(f), "cell").align === "end";
    return `fh-cell fh-cell--${esc(this.type(f).cell ?? f.type ?? this.shape(f))}${end ? " fh-cell--end" : ""}`;
  }

  cell(f, row) {
    return `<td class="${this.cellClass(f)}" data-label="${esc(f.label)}">${this.draw(f, row[f.key], "cell", row)}</td>`;
  }

  /** The detail under an expandable row: your own (expand: (row) => html), or the row's other fields as a record table. */
  detail(r) {
    if (typeof this.cfg.expand === "function") return this.cfg.expand(r, this) ?? "";
    const shown = new Set(this.visible.map((f) => f.key));
    const keys = this.cfg.detailFields ?? this.fields.filter((f) => !shown.has(f.key) && f.key !== this.primary).map((f) => f.key);
    const fields = (keys.length ? keys : this.fields.filter((f) => f.key !== this.primary).map((f) => f.key)).map((k) => this.field(k)).filter((f) => f && !this.custom(f)).map((f) => this.vf(f));
    return recordTable(fields, r, { variant: "mixed", label: `${this.text(this.field(this.primary), r[this.primary])}, details`, locale: this.locale });
  }

  /** The groups a row falls in: [{ key, raw, label }]. */
  groupKeys(gf, r) {
    const kind = this.type(gf).kind;
    const raws = kind === "options" ? this.values(gf, r[gf.key]) : [r[gf.key]];
    if (!raws.length || raws.every((x) => isEmpty(x))) return [{ key: "(empty)", raw: null, label: "(empty)" }];
    return raws.map((raw) => {
      const label = kind === "options" ? String(raw) : this.text(gf, raw) || "(empty)";
      return { key: kind === "option" ? String(raw) : label, raw, label };
    });
  }

  trigger(f) { return this.custom(f) ? "" : menuTrigger(this.vf(f), "cell", { choose: this.choose }); }

  grid(rows) {
    const vis = this.visible.filter((f) => f.key !== this.primary);
    const p = this.field(this.primary);
    const sortOf = (k) => { const s = this.state.sort.find((x) => x.key === k); return s ? ` aria-sort="${s.dir === "asc" ? "ascending" : "descending"}"` : ""; };
    const rank = (k) => (this.state.sort.length > 1 ? this.state.sort.findIndex((x) => x.key === k) + 1 : 0);
    const w = (f) => this.state.widths[f.key] ?? f.width ?? ({ long: "18rem", user: "11rem", users: "8rem", multi: "14rem", tags: "12rem", attachment: "7rem", check: "6rem", rating: "8rem", sparkline: "8rem", email: "14rem", url: "12rem" }[f.type] ?? "10rem");
    const head = (f, sticky) => `<th scope="col"${sticky ? ' data-sticky="primary"' : ""}${sortOf(f.key)} data-fh-colmenu-host style="position:sticky"><span class="fh-dt__head"><button class="fh-dt__th" type="button" data-sort-key="${esc(f.key)}" title="Sort by ${esc(f.label)} (shift-click to add)">${icon(this.type(f).icon)}<span><span class="fh-roll">${esc(f.label)}</span></span>${rank(f.key) ? `<span class="fh-dt__sort-rank">${rank(f.key)}</span>` : ""}</button>${this.trigger(f)}</span><span class="fh-dt__resize" data-resize="${esc(f.key)}" aria-hidden="true"></span></th>`;
    const allSel = rows.length && rows.every((r) => this.state.selected.has(r.id));
    const expand = Boolean(this.cfg.expand);
    const name = (r) => this.text(p, r[p.key]);
    const row = (r) => {
      const open = this.state.expanded.has(r.id);
      const did = `${this.id}-d-${String(r.id).replace(/[^\w-]/g, "_")}`;
      return `<tr tabindex="0" data-id="${esc(r.id)}" aria-selected="${this.state.selected.has(r.id)}">
        <td data-sticky="select">${expand ? `<button class="fh-dt__expand" type="button" aria-expanded="${open}" aria-controls="${did}" aria-label="Details of ${esc(name(r))}"></button>` : ""}<input type="checkbox" data-select aria-label="Select ${esc(name(r))}" ${this.state.selected.has(r.id) ? "checked" : ""}></td>
        <th scope="row" data-sticky="primary" class="${this.cellClass(p)}">${this.draw(p, r[p.key], "cell", r)}</th>
        ${vis.map((f) => this.cell(f, r)).join("")}</tr>${expand ? `<tr class="fh-dt__detail" id="${did}"${open ? "" : " hidden"}><td colspan="${vis.length + 2}">${this.detail(r)}</td></tr>` : ""}`;
    };
    let bodyRows = "";
    if (this.state.group) {
      const gf = this.field(this.state.group);
      const groups = new Map();
      for (const r of rows) {
        for (const g of this.groupKeys(gf, r)) { if (!groups.has(g.key)) groups.set(g.key, { ...g, list: [] }); groups.get(g.key).list.push(r); }
      }
      const optionKind = this.type(gf).kind === "option" || this.type(gf).kind === "options";
      for (const [k, { raw, label, list }] of groups) {
        const open = !this.state.collapsed.has(k);
        const tone = optionKind && raw != null ? this.toneOf(gf, raw) : "neutral";
        const title = optionKind && raw != null && !this.custom(gf) ? renderValue({ ...this.vf(gf), multiple: false, shape: "option" }, raw, "record") : esc(label);
        const aggs = vis.map((f) => this.aggregate(f, list)).filter(Boolean).slice(0, 2).join(" · ");
        bodyRows += `<tr class="fh-dt__group" data-tone="${tone}"><td colspan="${vis.length + 2}"><button class="fh-dt__group-toggle" type="button" data-group-toggle="${esc(k)}" aria-expanded="${open}">${title}</button><span class="fh-dt__group-meta">${list.length} record${list.length === 1 ? "" : "s"}${aggs ? ` · ${aggs}` : ""}</span></td></tr>`;
        if (open) bodyRows += list.map(row).join("");
      }
    } else bodyRows = rows.map(row).join("");
    const all = this.result;
    const foot = `<tfoot><tr><td data-sticky="select"></td><td data-sticky="primary"><b>${all.length}</b> records</td>${vis.map((f) => `<td class="${this.cellClass(f)}">${this.aggregate(f, all)}</td>`).join("")}</tr></tfoot>`;
    const lead = expand ? "4.6rem" : "2.6rem";
    return `<div class="fh-dt__scroll" tabindex="-1"><table class="fh-dt__table" aria-label="${esc(this.cfg.title ?? "Records")}">
      <colgroup><col style="inline-size:${lead};width:${lead}"><col data-col="${esc(p.key)}" style="width:${w(p)}">${vis.map((f) => `<col data-col="${esc(f.key)}" style="width:${w(f)}">`).join("")}</colgroup>
      <thead><tr><th scope="col" data-sticky="select"><input type="checkbox" data-select-all aria-label="Select all on this page" ${allSel ? "checked" : ""}></th>${head(p, true)}${vis.map((f) => head(f)).join("")}</tr></thead>
      <tbody>${bodyRows}</tbody>${foot}</table></div>`;
  }

  /** A card's fields, each drawn in the card context (gallery and board). Long text stays in the record. */
  cardValues(r, n = 4, skip = null) {
    return this.visible.filter((f) => f.key !== this.primary && f.key !== skip && this.type(f).cell !== "long" && (this.custom(f) || resolveValue(this.vf(f), "card").variant))
      .slice(0, n)
      .map((f) => `<div><dt>${icon(this.type(f).icon)} ${esc(f.label)}</dt><dd>${this.draw(f, r[f.key], "card", r)}</dd></div>`).join("");
  }

  gallery(rows) {
    const toneField = this.field(this.boardField);
    return `<div class="fh-dt__gallery">${rows.map((r) => `<article class="fh-dt__card" tabindex="0" data-id="${esc(r.id)}" data-tone="${toneField ? this.toneOf(toneField, r[toneField.key]) : "sky"}" aria-selected="${this.state.selected.has(r.id)}">
      <div class="fh-dt__cover"></div>
      <h4>${this.draw(this.field(this.primary), r[this.primary], "card", r)}</h4>
      <dl>${this.cardValues(r, 5)}</dl></article>`).join("")}</div>`;
  }

  board(rows) {
    const f = this.field(this.boardField);
    if (!f) return this.gallery(rows);
    const set = this.options(f);
    const lanes = set.length ? set.map((o) => o.value) : [...new Set(rows.map((r) => r[f.key]))];
    const p = this.field(this.primary);
    const sumField = this.fields.find((x) => this.shape(x) === "money");
    return `<div class="fh-dt__board">${lanes.map((lane) => {
      const list = rows.filter((r) => String(r[f.key]) === String(lane));
      const tone = this.toneOf(f, lane);
      const sum = sumField ? list.reduce((n, r) => n + (Number(r[sumField.key]?.amount ?? r[sumField.key]) || 0), 0) : null;
      // The lane's status is a chip, as on every card and board (decision 5).
      return `<section class="fh-dt__lane" data-tone="${tone}" data-lane="${esc(lane)}"><header>${this.custom(f) ? esc(lane) : renderValue(this.vf(f), lane, "card")}<span class="fh-dt__count">${list.length}${sumField ? ` · ${renderValue(this.vf(sumField), sum, "card", { locale: this.locale })}` : ""}</span></header>
        <div>${list.map((r) => `<article class="fh-dt__card" tabindex="0" draggable="true" data-id="${esc(r.id)}" data-tone="${tone}"><h4>${this.draw(p, r[p.key], "card", r)}</h4><dl>${this.cardValues(r, 3, this.boardField)}</dl></article>`).join("")}</div></section>`;
    }).join("")}</div>`;
  }

  renderFooter() {
    const el = this.el.querySelector("[data-footer]");
    const total = this.result.length;
    if (this.state.view !== "grid" || this.state.group || total <= this.pageSize) { el.innerHTML = `<span>${total} records${this.state.selected.size ? ` · ${this.state.selected.size} selected` : ""}</span><span>${this.cfg.footnote ?? ""}</span>`; return; }
    const pages = Math.ceil(total / this.pageSize);
    this.state.page = Math.min(this.state.page, pages - 1);
    const a = this.state.page * this.pageSize + 1, b = Math.min(total, a + this.pageSize - 1);
    el.innerHTML = `<span>${a}–${b} of ${total}</span><span class="fh-cluster" style="--fh-gap: var(--fh-space-1)"><button class="fh-dt__tool" type="button" data-page="-1" ${this.state.page ? "" : "disabled"}>${icon("chevron-left")}<span>Previous</span></button><span class="fh-dt__count">Page ${this.state.page + 1} of ${pages}</span><button class="fh-dt__tool" type="button" data-page="1" ${this.state.page < pages - 1 ? "" : "disabled"}><span>Next</span>${icon("chevron-right")}</button></span>`;
  }

  renderBulk() {
    let bar = this.el.querySelector(".fh-dt__bulk");
    const n = this.state.selected.size;
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "fh-dt__bulk";
      bar.setAttribute("role", "region");
      bar.setAttribute("aria-label", "Bulk actions");
      this.el.querySelector("[data-body]").after(bar);
    }
    bar.hidden = !n;
    bar.innerHTML = `<b>${n} selected</b>${(this.cfg.bulk ?? [["csv", "Export CSV", "download"], ["copy", "Copy", "copy"]]).map(([a, l, ic]) => `<button class="fh-button fh-button--sm fh-button--secondary" type="button" data-bulk="${a}">${icon(ic)} ${esc(l)}</button>`).join("")}<button class="fh-close" type="button" data-bulk="clear" aria-label="Clear selection"></button>`;
    this.renderFooter();
  }

  /* —— Panels —— */
  renderPanel(name) {
    const p = this.el.querySelector(`[data-panel="${name}"]`);
    const fieldOpts = (sel, filter = () => true) => this.fields.filter(filter).map((f) => `<option value="${esc(f.key)}" ${f.key === sel ? "selected" : ""}>${esc(f.label)}</option>`).join("");
    if (name === "filter") {
      const rows = this.state.filters.map((fl, i) => {
        const f = this.field(fl.key), kind = this.type(f).kind;
        const ops = kinds[kind].ops.map((o) => `<option ${o === fl.op ? "selected" : ""}>${o}</option>`).join("");
        const noValue = ["is empty", "is not empty", "is checked", "is not checked"].includes(fl.op);
        let value = "";
        if (!noValue) {
          if (kind === "option" || kind === "options") {
            const opts = this.options(f).length ? this.options(f).map((o) => o.value) : [...new Set(this.rows.flatMap((r) => this.values(f, r[f.key])))];
            const cur = [].concat(fl.value ?? []);
            value = `<select class="fh-select" data-i="${i}" data-part="value" ${fl.op.includes("of") ? "multiple size=3" : ""}>${fl.op.includes("of") ? "" : "<option value=''>Any</option>"}${opts.map((o) => `<option ${cur.includes(o) ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
          } else value = `<input class="fh-input" data-i="${i}" data-part="value" type="${kind === "number" || fl.op.startsWith("is within") ? "number" : kind === "date" ? "date" : "text"}" value="${esc(fl.value ?? "")}" placeholder="${fl.op.startsWith("is within") ? "days" : "Value"}">`;
        }
        return `<div class="fh-dt__rule"><select class="fh-select" data-i="${i}" data-part="key">${fieldOpts(fl.key)}</select><select class="fh-select" data-i="${i}" data-part="op">${ops}</select>${value || "<span></span>"}<button class="fh-close" type="button" data-i="${i}" data-part="remove" aria-label="Remove filter"></button></div>`;
      }).join("");
      p.innerHTML = `<h3>Filters</h3>${rows || `<p class="fh-muted" style="margin:0">No filters yet. Add one to narrow the records.</p>`}<div class="fh-cluster" style="--fh-gap: var(--fh-space-2)"><button class="fh-button fh-button--sm fh-button--secondary" type="button" data-part="add">${icon("plus")} Add filter</button>${rows ? `<button class="fh-dt__tool" type="button" data-part="clear">Clear all</button>` : ""}</div>`;
    }
    if (name === "sort") {
      const rows = this.state.sort.map((s, i) => `<div class="fh-dt__rule" style="grid-template-columns: minmax(0,1fr) auto auto"><select class="fh-select" data-i="${i}" data-part="key">${fieldOpts(s.key)}</select><fieldset class="fh-segmented fh-segmented--sm"><label><input type="radio" name="${this.id}-dir-${i}" value="asc" data-i="${i}" data-part="dir" ${s.dir === "asc" ? "checked" : ""}> A→Z</label><label><input type="radio" name="${this.id}-dir-${i}" value="desc" data-i="${i}" data-part="dir" ${s.dir === "desc" ? "checked" : ""}> Z→A</label></fieldset><button class="fh-close" type="button" data-i="${i}" data-part="remove" aria-label="Remove sort"></button></div>`).join("");
      p.innerHTML = `<h3>Sort</h3>${rows || `<p class="fh-muted" style="margin:0">Click a column header to sort. Shift-click to add a second sort.</p>`}<div><button class="fh-button fh-button--sm fh-button--secondary" type="button" data-part="add">${icon("plus")} Add sort</button></div>`;
    }
    if (name === "group") {
      const groupable = (f) => ["option", "options", "bool"].includes(this.type(f).kind) || ["user", "users", "rating", "link"].includes(f.type) || this.shape(f) === "entity";
      p.innerHTML = `<h3>Group by</h3><select class="fh-select" data-part="group"><option value="">None</option>${fieldOpts(this.state.group, groupable)}</select>${this.state.group ? `<div class="fh-cluster" style="--fh-gap: var(--fh-space-2)"><button class="fh-dt__tool" type="button" data-part="collapse">Collapse all</button><button class="fh-dt__tool" type="button" data-part="expand">Expand all</button></div>` : ""}`;
    }
    if (name === "fields") {
      p.innerHTML = `<h3>Fields</h3>${this.fields.map((f) => `<label class="fh-dt__field-row"><span>${icon(this.type(f).icon)} ${esc(f.label)}</span><input class="fh-switch" type="checkbox" role="switch" data-part="field" value="${esc(f.key)}" ${this.state.hidden.has(f.key) ? "" : "checked"} ${f.key === this.primary ? "disabled" : ""}></label>`).join("")}<div class="fh-cluster" style="--fh-gap: var(--fh-space-2)"><button class="fh-dt__tool" type="button" data-part="show-all">Show all</button><button class="fh-dt__tool" type="button" data-part="hide-all">Hide all</button></div>`;
    }
  }

  onPanel(name, e) {
    const t = e.target.closest("[data-part]");
    if (!t) return;
    const part = t.dataset.part, i = Number(t.dataset.i);
    if (e.type === "click" && !["add", "remove", "clear", "collapse", "expand", "show-all", "hide-all"].includes(part)) return;
    if (e.type === "input" && t.tagName === "SELECT") return;
    if (name === "filter") {
      const fl = this.state.filters;
      if (part === "add") { const f = this.fields.find((x) => x.key !== this.primary) ?? this.fields[0]; fl.push({ key: f.key, op: kinds[this.type(f).kind].ops[0], value: "" }); }
      if (part === "remove") fl.splice(i, 1);
      if (part === "clear") fl.length = 0;
      if (part === "key") { const f = this.field(t.value); fl[i] = { key: t.value, op: kinds[this.type(f).kind].ops[0], value: "" }; }
      if (part === "op") fl[i].op = t.value;
      if (part === "value") fl[i].value = t.multiple ? [...t.selectedOptions].map((o) => o.value) : t.tagName === "SELECT" ? (t.value ? [t.value] : []) : t.value;
      this.state.page = 0;
      this.render();
      if (part !== "value") this.renderPanel("filter");
    }
    if (name === "sort") {
      const s = this.state.sort;
      if (part === "add") { const used = new Set(s.map((x) => x.key)); const f = this.fields.find((x) => !used.has(x.key)); if (f) s.push({ key: f.key, dir: "asc" }); }
      if (part === "remove") s.splice(i, 1);
      if (part === "key") s[i].key = t.value;
      if (part === "dir") s[i].dir = t.value;
      this.render();
      if (part !== "dir") this.renderPanel("sort");
    }
    if (name === "group") {
      if (part === "group") { this.state.group = t.value || null; this.state.collapsed.clear(); }
      if (part === "collapse") { const gf = this.field(this.state.group); for (const r of this.rows) for (const g of this.groupKeys(gf, r)) this.state.collapsed.add(g.key); }
      if (part === "expand") this.state.collapsed.clear();
      this.render();
      this.renderPanel("group");
    }
    if (name === "fields") {
      if (part === "field") t.checked ? this.state.hidden.delete(t.value) : this.state.hidden.add(t.value);
      if (part === "show-all") this.state.hidden.clear();
      if (part === "hide-all") for (const f of this.fields) if (f.key !== this.primary) this.state.hidden.add(f.key);
      this.render();
      if (part !== "field") this.renderPanel("fields");
    }
  }

  /* —— Column resizing —— */
  bindResize() {
    this.el.addEventListener("pointerdown", (e) => {
      const h = e.target.closest("[data-resize]");
      if (!h) return;
      e.preventDefault();
      const key = h.dataset.resize;
      const col = this.el.querySelector(`col[data-col="${CSS.escape(key)}"]`);
      const start = e.clientX, w0 = h.parentElement.getBoundingClientRect().width;
      h.setPointerCapture(e.pointerId);
      h.dataset.dragging = "";
      const move = (ev) => { const w = Math.max(72, w0 + (ev.clientX - start)); col.style.width = `${w}px`; this.state.widths[key] = `${w}px`; };
      const up = () => { delete h.dataset.dragging; h.removeEventListener("pointermove", move); h.removeEventListener("pointerup", up); };
      h.addEventListener("pointermove", move);
      h.addEventListener("pointerup", up);
    });
  }

  /* —— Board drag and drop —— */
  bindBoard() {
    let dragId = null;
    this.el.addEventListener("dragstart", (e) => { const c = e.target.closest?.(".fh-dt__lane .fh-dt__card"); if (!c) return; dragId = c.dataset.id; c.dataset.dragging = ""; e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", dragId); });
    this.el.addEventListener("dragend", (e) => { e.target.closest?.(".fh-dt__card")?.removeAttribute("data-dragging"); this.el.querySelectorAll("[data-drop]").forEach((l) => l.removeAttribute("data-drop")); });
    this.el.addEventListener("dragover", (e) => { const lane = e.target.closest?.("[data-lane]"); if (!lane || !dragId) return; e.preventDefault(); this.el.querySelectorAll("[data-drop]").forEach((l) => l !== lane && l.removeAttribute("data-drop")); lane.dataset.drop = ""; });
    this.el.addEventListener("drop", (e) => {
      const lane = e.target.closest?.("[data-lane]"); if (!lane || !dragId) return;
      e.preventDefault();
      const row = this.rows.find((r) => r.id === dragId);
      row[this.boardField] = lane.dataset.lane;
      this.emit("fh:change", { row, key: this.boardField, value: lane.dataset.lane });
      dragId = null;
      this.render();
    });
  }

  /* —— Public helpers —— */
  setRows(rows) { this.rows = rows.map((r, i) => ({ id: r.id ?? String(i + 1), ...r })); this.measure(); this.render(); }
  update(id, patch) { Object.assign(this.rows.find((r) => r.id === id) ?? {}, patch); this.render(); }
}

/* —— Auto-init: <div data-fh-datatable><script type="application/json">…</script></div> —— */
function boot() {
  for (const el of document.querySelectorAll("[data-fh-datatable]:not([data-fh-ready])")) {
    const src = el.querySelector('script[type="application/json"]');
    if (!src) continue;
    try { el.dataset.fhReady = ""; el.fhTable = new FirehorseTable(el, JSON.parse(src.textContent)); }
    catch (err) { console.error("Firehorse datatable:", err); }
  }
}
if (typeof document !== "undefined") {
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
  (globalThis.Firehorse ??= {}).Table = FirehorseTable;
}
export default FirehorseTable;
