/*!
 * Firehorse column display menu: dist/column-menu.js · MIT
 * ---------------------------------------------------------------
 * Any viewer can re-display a column with the variants the data display contract allows for it
 * (decision 9): a people table's Status from dot and word to a chip, an Owner from an avatar and
 * name to a chip. The datatable (DTB), the table in fields mode (TBL-1.2) and the record table
 * (TBL-3) all use it; it is the header's short menu, the Rich menu (DRP-4.1).
 *
 *   menuTrigger(field, "cell")      the 1.5rem button for a header (or a record row's label); "" when
 *                                   the field offers one variant or less, or the author locked it
 *   bindColumnMenu(root, { … })     opens the menu from those buttons, under `root`
 *   presentationStore(id, opts)     the viewer's picks per table, in localStorage (fh:presentation:<id>)
 *
 * The menu lists only variants(field, context) (values.js): the grid row's choices, the default first,
 * each drawn as a live preview from the column's first non-empty value. The resolver's pick says Default;
 * the menu ends with Reset to default. Opening: tap, click, Enter or Space on the button (focus moves in);
 * on a fine pointer, resting on the label opens it after 220 ms and it closes 280 ms after the pointer
 * leaves both. Arrows move, Home and End jump, Enter picks, Escape closes and returns focus.
 * Data display contract W3 (platform relay/2026-11-14-dc-w3-surfaces.md).
 */
import { renderValue, variants } from "./values.js";

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const ICON = {
  dot: "circle-dot", chip: "tag", "chip-solid": "tag", chips: "tag", "chips-inline": "list", count: "hash",
  name: "type", "name-key": "type", "avatar-name": "user", "avatar-name-description": "user", full: "users", stack: "users", ref: "link-2", "ref-key": "link-2", "avatar-ref": "layout-grid", cube: "box",
  amount: "dollar-sign", "amount-code": "dollar-sign", compact: "dollar-sign", text: "percent", bar: "chart-bar", ring: "gauge", meter: "gauge",
  plain: "hash", unit: "ruler", sparkline: "chart-line", "sparkline-last": "chart-line", duration: "timer",
  date: "calendar", "date-relative": "calendar-clock", relative: "clock", datetime: "calendar-clock", time: "clock",
  "type-chip": "file", thumb: "image", thumbs: "image", "file-row": "file-text",
  link: "link", email: "at-sign", phone: "phone", "link-chip": "link", check: "check", "yes-no": "check",
  "clamp-2": "file-text", "clamp-3": "file-text", line: "type", mono: "code", copyable: "copy", "code-block": "code",
};
// One step of the root's walk per row, as the header's menus do; Reset takes the deep root.
const WALK = [0, 1, 2, 4, 5, 6, 7, 3];
const HOVER_OPEN = 220;
const HOVER_CLOSE = 280;
let seq = 0;

/** The display button for a column header or a record row's label; "" when there is nothing to choose. */
export function menuTrigger(field = {}, context = "cell", { choose = true, label } = {}) {
  if (choose === false || field.choose === false) return "";
  if (variants(field, context).length < 2) return "";
  const name = label ?? field.label ?? field.key ?? "";
  return `<button class="fh-colmenu__button" type="button" aria-haspopup="menu" aria-expanded="false" data-fh-colmenu="${esc(field.key)}" aria-label="${esc(`Display ${name} as`)}" title="Display as"></button>`;
}

/** The viewer's picks for one table: { [field key]: variant }. store: false keeps nothing (the app saves them). */
export function presentationStore(id, { store = true } = {}) {
  const key = `fh:presentation:${id}`;
  return {
    key,
    load() {
      if (!store) return {};
      try { const v = JSON.parse(globalThis.localStorage?.getItem(key) ?? "{}"); return v && typeof v === "object" ? v : {}; } catch { return {}; }
    },
    save(map) {
      if (!store) return;
      try { Object.keys(map).length ? globalThis.localStorage?.setItem(key, JSON.stringify(map)) : globalThis.localStorage?.removeItem(key); } catch {}
    },
  };
}

/**
 * Opens the column display menu from every [data-fh-colmenu] button under root.
 *   context   "cell" | "record" | "card"
 *   field     (key) => the field
 *   sample    (key) => the column's first non-empty value (the previews draw it)
 *   current   (key) => the variant in effect, or null for the field's default
 *   pick      (key, variant | null) => void   null is Reset to default
 *   options   (key) => renderValue() opts for the previews (row, currency, now)
 * Returns { close(), menu }.
 */
export function bindColumnMenu(root, cfg) {
  const doc = root.ownerDocument;
  const menu = doc.createElement("div");
  menu.className = "fh-menu fh-menu--rich fh-colmenu__menu";
  menu.id = `fh-colmenu-${++seq}`;
  menu.setAttribute("popover", "auto");
  menu.setAttribute("role", "menu");
  const anchor = `--${menu.id}`;
  let button = null;
  let timer = 0;
  const fine = globalThis.matchMedia?.("(hover: hover) and (pointer: fine)");
  const isOpen = () => menu.matches(":popover-open");
  const items = () => [...menu.querySelectorAll('[role^="menuitem"]')];

  const fill = (key) => {
    const field = cfg.field(key);
    const list = variants(field, cfg.context);
    const cur = cfg.current(key) ?? list.find((v) => v.default)?.variant;
    const sample = cfg.sample(key);
    const opts = cfg.options?.(key) ?? {};
    const name = field.label ?? field.key;
    menu.setAttribute("aria-label", `${name}, display`);
    menu.innerHTML = `<p class="fh-menu__label">${esc(name)} · display</p>${list.map((v, i) => `<button class="fh-menu__item" type="button" role="menuitemradio" tabindex="-1" aria-checked="${v.variant === cur}" data-variant="${esc(v.variant)}" style="--_w: var(--fh-walk-${WALK[i % WALK.length]})"><span class="fh-menu__tile"><i class="fh-icon fh-icon--${ICON[v.variant] ?? "eye"}" aria-hidden="true"></i></span><span><span class="fh-roll">${esc(v.label)}</span>${v.default ? `<small class="fh-menu__suffix">Default</small>` : ""}</span><span class="fh-menu__line" inert>${renderValue(field, sample, cfg.context, { ...opts, variant: v.variant })}</span></button>`).join("")}<hr><button class="fh-menu__item" type="button" role="menuitem" tabindex="-1" data-variant="" style="--_w: var(--fh-walk-8)"${cfg.current(key) == null ? ' aria-disabled="true"' : ""}><span class="fh-menu__tile"><i class="fh-icon fh-icon--rotate-ccw" aria-hidden="true"></i></span><span class="fh-roll">Reset to default</span></button>`;
  };

  const open = (b, { focus = true } = {}) => {
    clearTimeout(timer);
    if (!menu.isConnected) root.append(menu);
    if (button && button !== b) button.setAttribute("aria-expanded", "false");
    button = b;
    fill(b.dataset.fhColmenu);
    b.style.setProperty("anchor-name", anchor);
    menu.style.setProperty("position-anchor", anchor);
    if (!isOpen()) menu.showPopover();
    b.setAttribute("aria-expanded", "true");
    if (focus) (items().find((i) => i.getAttribute("aria-checked") === "true") ?? items()[0])?.focus();
  };
  const close = ({ focus = false } = {}) => {
    clearTimeout(timer);
    if (isOpen()) menu.hidePopover();
    if (button) { button.setAttribute("aria-expanded", "false"); if (focus && button.isConnected) button.focus(); }
  };
  const later = (fn, ms) => { clearTimeout(timer); timer = setTimeout(fn, ms); };

  menu.addEventListener("toggle", (e) => { if (e.newState === "closed" && button) button.setAttribute("aria-expanded", "false"); });
  root.addEventListener("click", (e) => {
    const b = e.target.closest?.("[data-fh-colmenu]");
    if (!b || !root.contains(b) || menu.contains(b)) return;
    e.preventDefault();
    e.stopPropagation();
    if (isOpen() && button === b) close({ focus: true });
    else open(b, { focus: true });
  });
  root.addEventListener("keydown", (e) => {
    const b = e.target.closest?.("[data-fh-colmenu]");
    if (b && (e.key === "ArrowDown" || e.key === "ArrowUp")) { e.preventDefault(); open(b, { focus: true }); }
  });
  // Hover intent on the label (a fine pointer only; keyboard and touch never depend on hover).
  const hostOf = (el) => el?.closest?.("[data-fh-colmenu-host]");
  root.addEventListener("pointerover", (e) => {
    if (!fine?.matches || menu.contains(e.target)) return;
    const host = hostOf(e.target);
    if (!host || host.contains(e.relatedTarget)) return;
    const b = host.querySelector("[data-fh-colmenu]");
    if (!b) return;
    if (isOpen() && button === b) { clearTimeout(timer); return; }
    later(() => open(b, { focus: false }), HOVER_OPEN);
  });
  root.addEventListener("pointerout", (e) => {
    if (!fine?.matches || menu.contains(e.target)) return;
    const host = hostOf(e.target);
    if (!host || host.contains(e.relatedTarget) || menu.contains(e.relatedTarget)) return;
    if (isOpen()) later(() => close(), HOVER_CLOSE);
    else clearTimeout(timer);
  });
  menu.addEventListener("pointerenter", () => clearTimeout(timer));
  menu.addEventListener("pointerleave", (e) => {
    if (!fine?.matches || (button && hostOf(button)?.contains(e.relatedTarget))) return;
    if (menu.contains(doc.activeElement)) return;
    later(() => close(), HOVER_CLOSE);
  });
  menu.addEventListener("click", (e) => {
    const item = e.target.closest("[data-variant]");
    if (!item || !button || item.getAttribute("aria-disabled") === "true") return;
    const key = button.dataset.fhColmenu;
    const picked = item.dataset.variant || null;
    // Picking the field's own variant is the same as Reset: nothing is kept for it.
    const own = variants(cfg.field(key), cfg.context).find((x) => x.default)?.variant;
    close({ focus: true });
    cfg.pick(key, picked === own ? null : picked);
    // The surface redraws its header: focus returns to the column's new button.
    root.querySelector(`[data-fh-colmenu="${CSS.escape(key)}"]`)?.focus();
  });
  menu.addEventListener("keydown", (e) => {
    const list = items();
    const i = list.indexOf(doc.activeElement);
    // Handled here, so firehorse.js's own menu keys (when the page loads it) don't move focus a second time.
    const go = (n) => { e.preventDefault(); e.stopPropagation(); list[(n + list.length) % list.length]?.focus(); };
    if (e.key === "ArrowDown") go(i + 1);
    else if (e.key === "ArrowUp") go(i - 1);
    else if (e.key === "Home") go(0);
    else if (e.key === "End") go(list.length - 1);
    else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); close({ focus: true }); }
    else if (e.key === "Tab") close();
  });
  return { menu, close, open };
}
