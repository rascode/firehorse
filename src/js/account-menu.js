/*!
 * Firehorse account menu — dist/account-menu.js · MIT
 * ---------------------------------------------------------------
 * Optional. The account menu (PRF-2, src/components/navigation/profile-picker.css) is a popover of sidebar rows.
 * A row with details names its panel in aria-controls; the panel is in the same menu, marked data-fh-panel:
 *
 *   <div id="me" popover class="fh-account-menu" role="menu" aria-label="Account">
 *     <div class="fh-account-menu__stage">
 *       <div class="fh-account-menu__panel" data-fh-panel="main" data-state="active">
 *         <button class="fh-sidebar__item fh-account-row" role="menuitem" aria-controls="me-now" aria-expanded="false">…</button>
 *       </div>
 *       <div class="fh-account-menu__panel" id="me-now" data-fh-panel="now" role="group" aria-label="Now">
 *         <button class="fh-sidebar__item fh-account-row fh-account-row--back" data-fh-back>…</button>
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

function initAll(root = doc) {
  for (const menu of root.querySelectorAll(SELECTOR)) initAccountMenu(menu);
}

if (doc) {
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", () => initAll(), { once: true });
  else initAll();
}
