/*!
 * Firehorse account menu — dist/account-menu.js · MIT
 * ---------------------------------------------------------------
 * Optional. The account menu (PRF-2, src/components/navigation/profile-picker.css) is a popover of sidebar rows.
 * A row with details names its panel in aria-controls; the panel is in the same menu, marked data-fh-panel:
 *
 *   <div id="me" popover class="fh-account-menu" role="menu" aria-label="Account">
 *     <div class="fh-account-menu__stage">
 *       <div class="fh-account-menu__panel" data-fh-panel="main" data-state="active">
 *         <button class="fh-account-row" role="menuitem" aria-controls="me-now" aria-expanded="false">…</button>
 *       </div>
 *       <div class="fh-account-menu__panel" id="me-now" data-fh-panel="now" role="group" aria-label="Now">
 *         <button class="fh-account-row fh-account-row--back" data-fh-back>…</button>
 *       </div>
 *     </div>
 *   </div>
 *
 * Without this script the main list shows and the rows with details do nothing. With it:
 *   Enter, a click or → on a row opens its panel; the list slides out, the panel slides in, focus moves to the
 *   panel's first item (the back row).
 *   Esc or ← goes back (the panel slides out, focus returns to the row). Esc on the main list closes the menu.
 *   ↑ ↓ Home End move between the shown panel's items.
 *   The stage's height follows the shown panel. Reduced motion: no slide, no height change.
 *   Closing the menu puts it back on the main list. Each change fires `fh:account-panel` on the menu
 *   (detail: { panel, row }), where panel is the shown panel's name ("main" for the list).
 *
 *   import "@rascode/firehorse/account-menu";
 *   import { initAccountMenu, showAccountPanel } from "@rascode/firehorse/account-menu";
 *
 * A row with data-fh-now fills its value from the row's datetime attribute and data-fh-summary
 * (parts separated by |). The value is "Tue 17 Nov", or that date plus the parts joined
 * with " · ". A date-only datetime is that calendar day. With no datetime the row is left as written.
 */

const SELECTOR = ".fh-account-menu";
const PANEL = "[data-fh-panel]";
const MAIN = "main";
const ITEMS = 'button:not([disabled]), a[href], input:not([disabled]), [role="menuitem"]:not([aria-disabled="true"])';

const doc = typeof document === "undefined" ? null : document;
const seen = new WeakSet();
// The row that opened the shown panel, per menu, so Back puts focus where it was.
const openers = new WeakMap();

const still = () => !!globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const panelsOf = (menu) => [...menu.querySelectorAll(PANEL)];
const nameOf = (panel) => panel.dataset.fhPanel;
const mainOf = (menu) => menu.querySelector(`${PANEL}[data-fh-panel="${MAIN}"]`) ?? menu.querySelector(PANEL);
const activeOf = (menu) => menu.querySelector(`${PANEL}[data-state="active"]`) ?? mainOf(menu);
const itemsOf = (panel) => [...panel.querySelectorAll(ITEMS)];

/** The name of the shown panel ("main" for the list). */
export function currentAccountPanel(menu) {
  const panel = activeOf(menu);
  return panel ? nameOf(panel) : MAIN;
}

// Sets every panel's state: the shown one is active, the main list sits before the others, which wait after it.
function setStates(menu, shown) {
  const main = mainOf(menu);
  for (const panel of panelsOf(menu)) {
    const state = panel === shown ? "active" : panel === main ? "before" : "after";
    panel.dataset.state = state;
    panel.inert = panel !== shown;
  }
  for (const row of menu.querySelectorAll("[aria-controls][aria-expanded]")) {
    row.setAttribute("aria-expanded", String(row.getAttribute("aria-controls") === shown.id));
  }
}

// Makes the stage as tall as the shown panel; animated unless motion is reduced.
function follow(menu, from, instant) {
  const stage = menu.querySelector(".fh-account-menu__stage");
  if (!stage) return;
  const to = activeOf(menu).offsetHeight;
  if (instant || still() || !from || from === to) { stage.style.blockSize = ""; return; }
  stage.style.blockSize = `${from}px`;
  void stage.offsetHeight;
  stage.style.blockSize = `${to}px`;
  const done = () => { stage.style.blockSize = ""; stage.removeEventListener("transitionend", done); };
  stage.addEventListener("transitionend", done);
}

function show(menu, panel, { row = null, focus = true, instant = false } = {}) {
  const stage = menu.querySelector(".fh-account-menu__stage");
  const from = stage ? stage.offsetHeight : 0;
  const was = activeOf(menu);
  if (panel === was) return;
  setStates(menu, panel);
  follow(menu, from, instant);
  menu.dispatchEvent(new CustomEvent("fh:account-panel", { detail: { panel: nameOf(panel), row } }));
  if (!focus) return;
  if (panel === mainOf(menu)) (openers.get(menu) ?? itemsOf(panel)[0])?.focus({ preventScroll: true });
  else itemsOf(panel)[0]?.focus({ preventScroll: true });
}

/** Shows the named panel ("main" for the list). Returns true when it exists. */
export function showAccountPanel(menu, name, options) {
  const panel = panelsOf(menu).find((p) => nameOf(p) === name);
  if (!panel) return false;
  show(menu, panel, options);
  return true;
}

function open(menu, row) {
  const panel = row.getAttribute("aria-controls") && menu.querySelector(`#${CSS.escape(row.getAttribute("aria-controls"))}`);
  if (!panel?.matches(PANEL)) return;
  openers.set(menu, row);
  show(menu, panel, { row });
}

function back(menu) {
  if (activeOf(menu) === mainOf(menu)) return false;
  show(menu, mainOf(menu), { row: openers.get(menu) ?? null });
  return true;
}

function onKeydown(menu, event) {
  const target = event.target;
  const field = target instanceof HTMLInputElement;
  const detailsRow = target.closest?.("[aria-controls]");
  if (event.key === "Escape") {
    // On a panel, Esc steps back; the popover must not close. On the list it closes the menu as usual.
    if (back(menu)) { event.preventDefault(); event.stopPropagation(); }
    return;
  }
  if (event.key === "ArrowRight" && detailsRow && menu.contains(detailsRow) && !field) {
    event.preventDefault();
    open(menu, detailsRow);
    return;
  }
  if (event.key === "ArrowLeft" && !field) {
    if (back(menu)) event.preventDefault();
    return;
  }
  if (field) return;
  const keys = ["ArrowDown", "ArrowUp", "Home", "End"];
  if (!keys.includes(event.key)) return;
  const items = itemsOf(activeOf(menu));
  if (!items.length) return;
  event.preventDefault();
  const at = items.indexOf(target.closest?.(ITEMS) ?? target);
  const next = event.key === "Home" ? 0
    : event.key === "End" ? items.length - 1
    : event.key === "ArrowDown" ? (at + 1) % items.length
    : (at <= 0 ? items.length - 1 : at - 1);
  items[next].focus();
}

/** Sets up one account menu (once): the panel states, the keys and the opening and closing. */
export function initAccountMenu(menu) {
  if (!menu || seen.has(menu)) return menu;
  seen.add(menu);
  const main = mainOf(menu);
  if (!main) return menu;
  setStates(menu, main);
  menu.addEventListener("click", (event) => {
    const row = event.target.closest?.("[aria-controls]");
    if (row && menu.contains(row) && row.getAttribute("aria-controls")) { open(menu, row); return; }
    if (event.target.closest?.("[data-fh-back]")) back(menu);
  });
  menu.addEventListener("keydown", (event) => onKeydown(menu, event));
  // Closing puts the menu back on the list, with no slide; opening focuses its first item.
  menu.addEventListener("toggle", (event) => {
    if (event.newState === "closed") { openers.delete(menu); show(menu, main, { focus: false, instant: true }); }
    else itemsOf(activeOf(menu))[0]?.focus({ preventScroll: true });
  });
  return menu;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function dateFrom(value) {
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (typeof value !== "string" || !value.trim()) return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (match) return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

/** The date block for a Now row: label "Tue 17 Nov", day of the year, days left, year. Null when there is no date. */
export function accountNowParts(input) {
  const date = dateFrom(input);
  if (!date) return null;
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const n = Math.round((Date.UTC(year, month, day) - Date.UTC(year, 0, 1)) / 86400000) + 1;
  const leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return { label: `${WEEKDAYS[date.getDay()]} ${day} ${MONTHS[month]}`, day: n, left: (leap ? 366 : 365) - n, year };
}

/** The collapsed value. The date alone when summary is missing or empty. */
export function accountNowValue(input, summary) {
  const parts = accountNowParts(input);
  if (!parts) return "";
  const extra = [];
  for (const part of summary ?? []) {
    const text = String(part).trim();
    if (text) extra.push(text);
  }
  return extra.length ? `${parts.label} · ${extra.join(" · ")}` : parts.label;
}

function summaryOf(row) {
  return (row.getAttribute("data-fh-summary") || "").split("|").map((part) => part.trim()).filter(Boolean);
}

function fillNow(row) {
  if (!row.hasAttribute("datetime")) return;
  const text = accountNowValue(row.getAttribute("datetime"), summaryOf(row));
  let value = row.querySelector(".fh-account-row__value");
  if (!text) { value?.remove(); return; }
  if (!value) {
    value = row.ownerDocument.createElement("span");
    value.className = "fh-account-row__value";
    row.insertBefore(value, row.querySelector(".fh-account-row__go"));
  }
  value.textContent = text;
}

function fillNowRows(root) {
  if (!root?.querySelectorAll) return;
  for (const row of root.querySelectorAll("[data-fh-now]")) fillNow(row);
}

function initAll(root = doc) {
  fillNowRows(root);
  for (const menu of root.querySelectorAll(SELECTOR)) initAccountMenu(menu);
}

if (doc) {
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", () => initAll(), { once: true });
  else initAll();
}
