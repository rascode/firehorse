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
 * Field types are a registry, so you can add your own:
 *   FirehorseTable.defineType("sku", { icon: "barcode", kind: "text",
 *     render: (v) => `<code>${v}</code>` });
 *
 * Events (bubble from the table element):
 *   fh:row-open  { row }          a row or card was opened
 *   fh:change    { row, key, value } a value changed (checkbox, board drag)
 *   fh:bulk      { action, rows }  a bulk action ran
 *   fh:action    {}               the toolbar's primary action
 */

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const icon = (n, extra = "") => (n ? `<i class="fh-icon fh-icon--${n} ${extra}" aria-hidden="true"></i>` : "");
const uid = () => Math.random().toString(36).slice(2, 8);
const DAY = 864e5;

/* —— Field types ———————————————————————————————————————— */
const kinds = {
  text: { ops: ["contains", "does not contain", "is", "is not", "is empty", "is not empty"] },
  number: { ops: ["=", "≠", ">", "<", "≥", "≤", "is empty", "is not empty"] },
  option: { ops: ["is", "is not", "is any of", "is empty", "is not empty"] },
  options: { ops: ["has any of", "has all of", "has none of", "is empty", "is not empty"] },
  date: { ops: ["is before", "is after", "is within the next", "is within the past", "is empty", "is not empty"] },
  bool: { ops: ["is checked", "is not checked"] },
};

const optionOf = (f, v) => (f.options ?? []).find((o) => (o.value ?? o) === v);
const toneOf = (f, v) => optionOf(f, v)?.tone ?? f.tone ?? "neutral";
const initials = (n = "") => n.split(/\s+/).map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function relDate(d) {
  const days = Math.round((new Date(d).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / DAY);
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  if (days === -1) return "Yesterday";
  return days > 0 ? `in ${days}d` : `${-days}d ago`;
}

function avatar(p, size = "") {
  if (!p) return "";
  const name = typeof p === "string" ? p : p.name;
  const img = typeof p === "object" && p.image ? `<img src="${esc(p.image)}" alt="">` : esc(initials(name));
  return `<span class="fh-avatar ${size}" title="${esc(name)}">${img}</span>`;
}

function spark(values = []) {
  if (!values.length) return "";
  const w = 88, h = 22, min = Math.min(...values), max = Math.max(...values) || 1;
  const pts = values.map((v, i) => [(i / (values.length - 1 || 1)) * w, h - 2 - ((v - min) / (max - min || 1)) * (h - 4)]);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const [lx, ly] = pts.at(-1);
  return `<svg class="fh-sparkline" viewBox="0 0 ${w} ${h}" aria-hidden="true"><path d="${d} L${w} ${h} L0 ${h}Z" fill="currentColor" opacity=".12"/><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/><circle cx="${lx}" cy="${ly}" r="2.2" fill="currentColor"/></svg>`;
}

export const types = {
  text: { icon: "type", kind: "text", render: (v) => esc(v) },
  long: { icon: "file-text", kind: "text", cell: "long", render: (v) => `<span>${esc(v)}</span>` },
  number: { icon: "hash", kind: "number", agg: "sum", render: (v, f, t) => (v == null || v === "" ? "" : t.nf.format(v)) },
  currency: {
    icon: "dollar-sign", kind: "number", agg: "sum",
    render: (v, f, t) => (v == null || v === "" ? "" : new Intl.NumberFormat(t.locale, { style: "currency", currency: f.currency ?? t.currency, maximumFractionDigits: 0 }).format(v)),
    text: (v, f, t) => (v == null ? "" : new Intl.NumberFormat(t.locale, { style: "currency", currency: f.currency ?? t.currency, maximumFractionDigits: 0 }).format(v)),
  },
  percent: { icon: "percent", kind: "number", agg: "avg", render: (v, f) => (v == null ? "" : `<span class="fh-cell__bar" data-tone="${f.tone ?? "sky"}" style="--v:${Math.max(0, Math.min(100, v))}"><i></i><span>${Math.round(v)}%</span></span>`) },
  progress: { icon: "loader-circle", kind: "number", agg: "avg", render: (v, f) => types.percent.render(v, f) },
  select: { icon: "circle-dot", kind: "option", render: (v, f) => (v ? `<span class="fh-pill" data-tone="${toneOf(f, v)}">${esc(v)}</span>` : "") },
  status: { icon: "activity", kind: "option", render: (v, f) => (v ? `<span class="fh-status" data-tone="${toneOf(f, v)}">${esc(v)}</span>` : "") },
  multi: { icon: "list-checks", kind: "options", render: (v = [], f) => v.map((x) => `<span class="fh-pill" data-tone="${toneOf(f, x)}">${esc(x)}</span>`).join("") },
  tags: { icon: "tag", kind: "options", render: (v = [], f) => v.map((x) => `<span class="fh-pill" data-tone="${f.tone ?? "neutral"}">#${esc(x)}</span>`).join("") },
  date: {
    icon: "calendar", kind: "date",
    render: (v, f, t) => {
      if (!v) return "";
      const d = new Date(v);
      return `<time datetime="${esc(v)}">${d.toLocaleDateString(t.locale, { month: "short", day: "numeric" })}</time><small>${relDate(v)}</small>`;
    },
    attrs: (v, f) => (f.overdue && v && new Date(v) < new Date(new Date().toDateString()) ? " data-overdue" : ""),
    text: (v) => v ?? "",
  },
  check: { icon: "circle-check", kind: "bool", agg: "checked", render: (v, f, t, row) => `<input class="fh-dt__checkbox" type="checkbox" ${v ? "checked" : ""} data-edit="${esc(f.key)}" aria-label="${esc(f.label)}: ${esc(row[t.primary])}">` },
  rating: { icon: "star", kind: "number", agg: "avg", render: (v, f) => (v == null ? "" : `<span class="fh-rating" data-tone="${f.tone ?? "amber"}" style="--v:${v}" role="img" aria-label="${v} of 5"></span>`) },
  user: {
    icon: "user", kind: "text",
    render: (v) => (v ? `<span class="fh-cell__user">${avatar(v, "fh-avatar--xs")}<span>${esc(v.name ?? v)}</span></span>` : ""),
    text: (v) => v?.name ?? v ?? "",
  },
  users: {
    icon: "users", kind: "options",
    render: (v = []) => `<span class="fh-avatars">${v.slice(0, 4).map((p) => avatar(p, "fh-avatar--xs")).join("")}${v.length > 4 ? `<span class="fh-avatar fh-avatar--xs">+${v.length - 4}</span>` : ""}</span>`,
    text: (v = []) => v.map((p) => p.name ?? p).join(", "),
    values: (v = []) => v.map((p) => p.name ?? p),
  },
  url: { icon: "link", kind: "text", render: (v) => (v ? `<a href="${esc(v)}" target="_blank" rel="noopener">${esc(String(v).replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</a>` : "") },
  email: { icon: "at-sign", kind: "text", render: (v) => (v ? `<a href="mailto:${esc(v)}">${esc(v)}</a>` : "") },
  phone: { icon: "phone", kind: "text", render: (v) => (v ? `<a href="tel:${esc(String(v).replace(/[^\d+]/g, ""))}">${esc(v)}</a>` : "") },
  link: { icon: "link-2", kind: "options", render: (v = [], f) => [].concat(v).map((x) => `<span class="fh-pill fh-pill--link" data-tone="${f.tone ?? "sky"}">${esc(x)}</span>`).join("") },
  attachment: {
    icon: "paperclip", kind: "options",
    render: (v = []) => `<span class="fh-thumbs">${v.slice(0, 3).map((a) => (a.image ? `<img src="${esc(a.image)}" alt="${esc(a.name ?? "")}">` : `<span title="${esc(a.name ?? "")}">${esc((a.name ?? "").split(".").pop()?.toUpperCase() ?? "")}</span>`)).join("")}${v.length > 3 ? `<span>+${v.length - 3}</span>` : ""}</span>`,
    text: (v = []) => v.map((a) => a.name).join(", "),
    values: (v = []) => v.map((a) => a.name),
  },
  formula: { icon: "sigma", kind: "number", render: (v, f, t) => (typeof v === "number" ? t.nf.format(v) : esc(v)) },
  sparkline: { icon: "chart-line", kind: "number", render: (v, f) => `<span data-tone="${f.tone ?? "sky"}">${spark(v)}</span>`, value: (v = []) => v.at(-1) ?? 0, text: (v = []) => v.join(" ") },
};

/* —— The table ——————————————————————————————————————————— */
export class FirehorseTable {
  static types = types;
  static defineType(name, def) { types[name] = { kind: "text", render: (v) => esc(v), ...def }; }

  constructor(el, config = {}) {
    this.el = el;
    this.id = el.id || `fh-dt-${uid()}`;
    this.cfg = config;
    this.fields = config.fields.map((f) => ({ label: f.key, type: "text", ...f }));
    this.primary = config.primary ?? this.fields[0].key;
    this.rows = config.rows.map((r, i) => ({ id: r.id ?? String(i + 1), ...r }));
    this.locale = config.locale ?? undefined;
    this.currency = config.currency ?? "USD";
    this.nf = new Intl.NumberFormat(this.locale);
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
    };
    this.pageSize = config.pageSize ?? 25;
    this.boardField = config.boardField ?? this.fields.find((f) => f.type === "status" || f.type === "select")?.key;
    this.el.classList.add("fh-dt");
    this.mount();
  }

  field(key) { return this.fields.find((f) => f.key === key); }
  type(f) { return types[f.type] ?? types.text; }
  text(f, v) { const t = this.type(f); return t.text ? t.text(v, f, this) : Array.isArray(v) ? v.join(", ") : String(v ?? ""); }
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
    if (kind === "option" && f.options) {
      const i = (v) => f.options.findIndex((o) => (o.value ?? o) === v);
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
    if (t.agg === "sum") { const s = rows.reduce((n, r) => n + (Number(r[f.key]) || 0), 0); return `Sum <b>${t.text ? t.text(s, f, this) : this.nf.format(s)}</b>`; }
    if (t.agg === "avg") { const vals = rows.map((r) => this.num(f, r[f.key])).filter((x) => !Number.isNaN(x)); const a = vals.length ? vals.reduce((m, x) => m + x, 0) / vals.length : 0; return `Avg <b>${f.type === "rating" ? a.toFixed(1) : Math.round(a) + (f.type === "percent" || f.type === "progress" ? "%" : "")}</b>`; }
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

  cell(f, row) {
    const t = this.type(f);
    const v = row[f.key];
    return `<td class="fh-cell fh-cell--${t.cell ?? f.type}"${t.attrs ? t.attrs(v, f) : ""} data-label="${esc(f.label)}">${t.render(v, f, this, row)}</td>`;
  }

  grid(rows) {
    const vis = this.visible.filter((f) => f.key !== this.primary);
    const p = this.field(this.primary);
    const sortOf = (k) => { const s = this.state.sort.find((x) => x.key === k); return s ? ` aria-sort="${s.dir === "asc" ? "ascending" : "descending"}"` : ""; };
    const rank = (k) => (this.state.sort.length > 1 ? this.state.sort.findIndex((x) => x.key === k) + 1 : 0);
    const w = (f) => this.state.widths[f.key] ?? f.width ?? ({ long: "18rem", user: "11rem", users: "8rem", multi: "14rem", tags: "12rem", attachment: "7rem", check: "6rem", rating: "8rem", sparkline: "8rem", email: "14rem", url: "12rem" }[f.type] ?? "10rem");
    const head = (f, sticky) => `<th scope="col"${sticky ? ' data-sticky="primary"' : ""}${sortOf(f.key)} style="position:${sticky ? "sticky" : "sticky"}"><button class="fh-dt__th" type="button" data-sort-key="${esc(f.key)}" title="Sort by ${esc(f.label)} (shift-click to add)">${icon(this.type(f).icon)}<span>${esc(f.label)}</span>${rank(f.key) ? `<span class="fh-dt__sort-rank">${rank(f.key)}</span>` : ""}</button><span class="fh-dt__resize" data-resize="${esc(f.key)}" aria-hidden="true"></span></th>`;
    const allSel = rows.length && rows.every((r) => this.state.selected.has(r.id));
    const row = (r) => `<tr tabindex="0" data-id="${esc(r.id)}" aria-selected="${this.state.selected.has(r.id)}">
        <td data-sticky="select"><input type="checkbox" data-select aria-label="Select ${esc(r[this.primary])}" ${this.state.selected.has(r.id) ? "checked" : ""}></td>
        <th scope="row" data-sticky="primary" class="fh-cell fh-cell--${p.type}">${this.type(p).render(r[p.key], p, this, r)}</th>
        ${vis.map((f) => this.cell(f, r)).join("")}</tr>`;
    let bodyRows = "";
    if (this.state.group) {
      const gf = this.field(this.state.group);
      const groups = new Map();
      for (const r of rows) {
        const keys = this.type(gf).kind === "options" ? (this.values(gf, r[gf.key]).length ? this.values(gf, r[gf.key]) : ["(empty)"]) : [this.text(gf, r[gf.key]) || "(empty)"];
        for (const k of keys) { if (!groups.has(k)) groups.set(k, []); groups.get(k).push(r); }
      }
      for (const [k, list] of groups) {
        const open = !this.state.collapsed.has(k);
        const tone = toneOf(gf, k);
        const aggs = vis.map((f) => this.aggregate(f, list)).filter(Boolean).slice(0, 2).join(" · ");
        bodyRows += `<tr class="fh-dt__group" data-tone="${tone}"><td colspan="${vis.length + 2}"><button class="fh-dt__group-toggle" type="button" data-group-toggle="${esc(k)}" aria-expanded="${open}">${types[gf.type]?.kind === "option" ? `<span class="fh-pill" data-tone="${tone}">${esc(k)}</span>` : esc(k)}</button><span class="fh-dt__group-meta">${list.length} record${list.length === 1 ? "" : "s"}${aggs ? ` · ${aggs.replace(/<\/?b>/g, "")}` : ""}</span></td></tr>`;
        if (open) bodyRows += list.map(row).join("");
      }
    } else bodyRows = rows.map(row).join("");
    const all = this.result;
    const foot = `<tfoot><tr><td data-sticky="select"></td><td data-sticky="primary"><b>${all.length}</b> records</td>${vis.map((f) => `<td class="fh-cell--${f.type}">${this.aggregate(f, all)}</td>`).join("")}</tr></tfoot>`;
    return `<div class="fh-dt__scroll" tabindex="-1"><table class="fh-dt__table" aria-label="${esc(this.cfg.title ?? "Records")}">
      <colgroup><col style="inline-size:2.6rem;width:2.6rem"><col data-col="${esc(p.key)}" style="width:${w(p)}">${vis.map((f) => `<col data-col="${esc(f.key)}" style="width:${w(f)}">`).join("")}</colgroup>
      <thead><tr><th scope="col" data-sticky="select"><input type="checkbox" data-select-all aria-label="Select all on this page" ${allSel ? "checked" : ""}></th>${head(p, true)}${vis.map((f) => head(f)).join("")}</tr></thead>
      <tbody>${bodyRows}</tbody>${foot}</table></div>`;
  }

  cardFields(r, n = 4, skip = null) {
    return this.visible.filter((f) => f.key !== this.primary && f.key !== skip && f.type !== "long").slice(0, n)
      .map((f) => `<div><dt>${icon(this.type(f).icon)} ${esc(f.label)}</dt><dd>${this.type(f).render(r[f.key], f, this, r)}</dd></div>`).join("");
  }

  gallery(rows) {
    const toneField = this.field(this.boardField);
    return `<div class="fh-dt__gallery">${rows.map((r) => `<article class="fh-dt__card" tabindex="0" data-id="${esc(r.id)}" data-tone="${toneField ? toneOf(toneField, r[toneField.key]) : "sky"}" aria-selected="${this.state.selected.has(r.id)}">
      <div class="fh-dt__cover"></div>
      <h4>${this.type(this.field(this.primary)).render(r[this.primary], this.field(this.primary), this, r)}</h4>
      <dl>${this.cardFields(r, 5)}</dl></article>`).join("")}</div>`;
  }

  board(rows) {
    const f = this.field(this.boardField);
    if (!f) return this.gallery(rows);
    const lanes = (f.options ?? [...new Set(rows.map((r) => r[f.key]))]).map((o) => o.value ?? o);
    return `<div class="fh-dt__board">${lanes.map((lane) => {
      const list = rows.filter((r) => r[f.key] === lane);
      const tone = toneOf(f, lane);
      const sumField = this.fields.find((x) => x.type === "currency");
      return `<section class="fh-dt__lane" data-tone="${tone}" data-lane="${esc(lane)}"><header><span class="fh-status" data-tone="${tone}">${esc(lane)}</span><span class="fh-dt__count">${list.length}${sumField ? ` · ${types.currency.text(list.reduce((n, r) => n + (r[sumField.key] || 0), 0), sumField, this)}` : ""}</span></header>
        <div>${list.map((r) => `<article class="fh-dt__card" tabindex="0" draggable="true" data-id="${esc(r.id)}" data-tone="${tone}"><h4>${this.type(this.field(this.primary)).render(r[this.primary], this.field(this.primary), this, r)}</h4><dl>${this.cardFields(r, 3, this.boardField)}</dl></article>`).join("")}</div></section>`;
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
            const opts = (f.options ?? [...new Set(this.rows.flatMap((r) => this.values(f, r[f.key])))]).map((o) => o.value ?? o);
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
      const groupable = (f) => ["select", "status", "multi", "tags", "user", "users", "check", "rating", "link"].includes(f.type);
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
      if (part === "collapse") { const gf = this.field(this.state.group); for (const r of this.rows) for (const k of this.type(gf).kind === "options" ? this.values(gf, r[gf.key]) : [this.text(gf, r[gf.key]) || "(empty)"]) this.state.collapsed.add(k); }
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
  setRows(rows) { this.rows = rows.map((r, i) => ({ id: r.id ?? String(i + 1), ...r })); this.render(); }
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
