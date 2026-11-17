/*!
 * Firehorse crumb menus — dist/crumb-menu.js · MIT
 * ---------------------------------------------------------------
 * Optional. The crumb trail (MST-5, src/components/content/crumb-trail.css) opens a menu from each
 * crumb: the area menu, a record's switcher and the overflow list. Markup:
 *
 *   <li class="fh-crumb fh-crumb--record" data-fh-crumb data-fh-parent="org-12">
 *     <button class="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false"
 *       aria-controls="sw-1" aria-label="Rascode, switch organization">…</button>
 *     <div id="sw-1" popover="manual" class="fh-menu fh-menu--rich fh-crumb-menu" role="menu"
 *       aria-label="Organizations" data-fh-source="organizations">
 *       <div class="fh-crumb-menu__search"><input type="search" aria-label="Filter organizations" placeholder="Filter"></div>
 *       <div class="fh-crumb-menu__list">…rows…</div>
 *       <p class="fh-crumb-menu__status" data-empty hidden>Nothing matches.</p>
 *     </div>
 *   </li>
 *
 * Opening: a fine pointer resting on the crumb opens it after 150 ms and it closes 300 ms after the
 * pointer leaves the crumb and its menu; hover never moves focus. A click, tap, Enter or ↓ opens it and
 * moves focus to the filter. Typing filters the rows, ↑ and ↓ move, Home and End jump, Enter goes to the
 * row, Escape closes and returns focus to the crumb, Tab leaves. Moving across the bar in under 150 ms
 * opens nothing.
 *
 * Choosing a row dispatches a cancelable `fh:crumb-select` on the crumb (detail: { row, href }); a host
 * that routes in the page calls preventDefault and goes itself, otherwise the row's link is followed.
 *
 * Rows from the host: a menu with data-fh-source asks for its rows when it opens and when the filter
 * changes (after 200 ms). The crumb gets a bubbling `fh:crumb-load`, detail { source, parent, q, menu,
 * respond(rows), fail() }, and the menu shows its loading state until the host answers. A row is
 * { name, href?, meta?, mark?, group?, current?, depth?, id? }; mark is an element, an image URL or short
 * text. Answers to an older request are dropped. The host filters by q; the script filters only menus with
 * no source.
 *
 *   import "@rascode/firehorse/crumb-menu";
 *   import { initCrumbMenu, openCrumb, closeCrumb, setCrumbRows } from "@rascode/firehorse/crumb-menu";
 */

const CRUMB = "[data-fh-crumb]";
const OPEN_DELAY = 150;
const CLOSE_DELAY = 300;
const LOAD_DELAY = 200;
const ROW = ".fh-crumb-menu__row";

const doc = typeof document === "undefined" ? null : document;
const state = new WeakMap();
let uid = 0;

const parts = (crumb) => {
  const button = crumb.querySelector(":scope > .fh-crumb__button");
  const menu = crumb.querySelector(":scope > .fh-crumb-menu");
  return { button, menu, search: menu?.querySelector(".fh-crumb-menu__search input") ?? null };
};
const stateOf = (crumb) => {
  let s = state.get(crumb);
  if (!s) { s = { open: null, hover: 0, leave: 0, load: 0, req: 0 }; state.set(crumb, s); }
  return s;
};
const isOpen = (crumb) => !!stateOf(crumb).open;
const visibleRows = (menu) => [...menu.querySelectorAll(ROW)].filter((row) => !row.hidden);

function place(button, menu) {
  // Anchor positioning where supported (the CSS); the pointer-free fallback reads the button's box.
  const id = button.dataset.fhAnchor || (button.dataset.fhAnchor = `--fh-crumb-${++uid}`);
  button.style.setProperty("anchor-name", id);
  menu.style.setProperty("position-anchor", id);
  const box = button.getBoundingClientRect();
  menu.style.setProperty("--fh-crumb-x", `${Math.max(0, Math.min(box.left, innerWidth - 16))}px`);
  menu.style.setProperty("--fh-crumb-y", `${box.bottom + 4}px`);
}

/** Opens a crumb's menu. { focus: true } moves focus to the filter (click, Enter, ↓); hover leaves focus alone. */
export function openCrumb(crumb, { focus = false, how = focus ? "click" : "hover" } = {}) {
  const { button, menu, search } = parts(crumb);
  if (!button || !menu) return;
  const s = stateOf(crumb);
  clearTimeout(s.hover);
  clearTimeout(s.leave);
  if (!s.open) {
    for (const other of doc.querySelectorAll(CRUMB)) if (other !== crumb && isOpen(other)) closeCrumb(other);
    if (!menu.hasAttribute("popover")) menu.setAttribute("popover", "manual");
    place(button, menu);
    menu.showPopover?.();
    button.setAttribute("aria-expanded", "true");
    if (menu.dataset.fhSource) requestRows(crumb, search?.value ?? "");
  }
  // A hover open becomes pinned once the person clicks or types in.
  s.open = how === "hover" ? (s.open || "hover") : "pinned";
  if (focus) (search ?? visibleRows(menu)[0])?.focus({ preventScroll: true });
}

/** Closes a crumb's menu. { restoreFocus: true } returns focus to the crumb's button (Escape). */
export function closeCrumb(crumb, { restoreFocus = false } = {}) {
  const { button, menu, search } = parts(crumb);
  const s = stateOf(crumb);
  clearTimeout(s.hover);
  clearTimeout(s.leave);
  clearTimeout(s.load);
  s.open = null;
  s.req++;
  if (!button || !menu) return;
  if (menu.matches(":popover-open")) menu.hidePopover?.();
  button.setAttribute("aria-expanded", "false");
  if (search && search.value) { search.value = ""; filter(menu, ""); }
  if (restoreFocus) button.focus();
}

/** Writes rows into a menu's list: group headings, then one row per item. Replaces what was there. */
export function setCrumbRows(menu, rows) {
  const list = menu.querySelector(".fh-crumb-menu__list");
  if (!list) return;
  const frag = doc.createDocumentFragment();
  let group;
  for (const item of rows) {
    if (item.group && item.group !== group) {
      group = item.group;
      const label = doc.createElement("p");
      label.className = "fh-menu__label";
      label.textContent = group;
      frag.append(label);
    }
    frag.append(buildRow(item));
  }
  list.replaceChildren(frag);
  menu.removeAttribute("data-state");
  syncEmpty(menu);
}

function buildRow(item) {
  const row = doc.createElement(item.href ? "a" : "button");
  row.className = "fh-crumb-menu__row";
  if (item.href) row.href = item.href; else row.type = "button";
  row.setAttribute("role", "menuitemradio");
  row.setAttribute("aria-checked", String(!!item.current));
  row.tabIndex = -1;
  if (item.id != null) row.dataset.fhId = String(item.id);
  if (item.depth) row.dataset.depth = String(item.depth);
  if (item.current) row.setAttribute("aria-current", "true");
  const mark = doc.createElement("span");
  mark.className = "fh-crumb__mark";
  mark.setAttribute("aria-hidden", "true");
  if (item.mark instanceof Node) mark.append(item.mark);
  else if (typeof item.mark === "string" && /^(https?:|\/|data:image\/)/.test(item.mark)) {
    const img = doc.createElement("img");
    img.alt = "";
    img.src = item.mark;
    mark.append(img);
  } else if (item.mark) mark.textContent = item.mark;
  const name = doc.createElement("span");
  name.className = "fh-crumb__name";
  name.textContent = item.name;
  row.append(mark, name);
  if (item.meta) {
    const meta = doc.createElement("span");
    meta.className = "fh-crumb__meta";
    meta.textContent = item.meta;
    row.append(meta);
  }
  return row;
}

function syncEmpty(menu) {
  const status = menu.querySelector("[data-empty]");
  const none = visibleRows(menu).length === 0 && menu.dataset.state !== "loading";
  menu.toggleAttribute("data-empty", none);
  if (status) status.hidden = !none;
  // A heading stays only while a visible row follows it.
  for (const label of menu.querySelectorAll(".fh-menu__label")) {
    let next = label.nextElementSibling;
    let any = false;
    while (next && !next.matches(".fh-menu__label")) { if (next.matches(ROW) && !next.hidden) any = true; next = next.nextElementSibling; }
    label.hidden = !any;
  }
}

function filter(menu, q) {
  const needle = q.trim().toLowerCase();
  for (const row of menu.querySelectorAll(ROW)) row.hidden = !!needle && !row.textContent.toLowerCase().includes(needle);
  syncEmpty(menu);
  menu.querySelector(ROW + "[data-active]")?.removeAttribute("data-active");
}

function requestRows(crumb, q) {
  const { menu } = parts(crumb);
  const s = stateOf(crumb);
  const req = ++s.req;
  menu.dataset.state = "loading";
  syncEmpty(menu);
  crumb.dispatchEvent(new CustomEvent("fh:crumb-load", {
    bubbles: true,
    detail: {
      source: menu.dataset.fhSource,
      parent: crumb.dataset.fhParent ?? null,
      q,
      menu,
      respond(rows) { if (req === s.req && s.open) setCrumbRows(menu, rows); },
      fail() { if (req === s.req) { menu.removeAttribute("data-state"); syncEmpty(menu); } },
    },
  }));
}

function move(menu, from, step) {
  const rows = visibleRows(menu);
  if (!rows.length) return;
  const i = rows.indexOf(from);
  const next = step === "first" ? rows[0] : step === "last" ? rows.at(-1) : rows[Math.max(0, Math.min(rows.length - 1, (i < 0 ? (step > 0 ? -1 : rows.length) : i) + step))];
  next.focus({ preventScroll: false });
}

function choose(crumb, row) {
  const href = row.getAttribute("href");
  const go = crumb.dispatchEvent(new CustomEvent("fh:crumb-select", { bubbles: true, cancelable: true, detail: { row, href } }));
  closeCrumb(crumb);
  return go;
}

function bind() {
  const crumbOf = (el) => el?.closest?.(CRUMB);
  const fine = (event) => event.pointerType === "mouse" || event.pointerType === "pen";

  doc.addEventListener("pointerover", (event) => {
    if (!fine(event)) return;
    const crumb = crumbOf(event.target);
    if (!crumb) return;
    const s = stateOf(crumb);
    clearTimeout(s.leave);
    if (s.open || !parts(crumb).menu) return;
    // Only the button (or the menu) counts as resting on the crumb: the cursor must stay for the delay.
    if (!event.target.closest(".fh-crumb__button")) return;
    clearTimeout(s.hover);
    s.hover = setTimeout(() => openCrumb(crumb, { how: "hover" }), OPEN_DELAY);
  });

  doc.addEventListener("pointerout", (event) => {
    if (!fine(event)) return;
    const crumb = crumbOf(event.target);
    if (!crumb || crumb.contains(event.relatedTarget)) return;
    const s = stateOf(crumb);
    clearTimeout(s.hover);
    if (s.open === "hover") s.leave = setTimeout(() => closeCrumb(crumb), CLOSE_DELAY);
  });

  doc.addEventListener("click", (event) => {
    const button = event.target.closest?.(".fh-crumb__button");
    const crumb = crumbOf(button);
    if (crumb && parts(crumb).menu) {
      const s = stateOf(crumb);
      if (s.open === "pinned") closeCrumb(crumb);
      else openCrumb(crumb, { focus: true, how: "click" });
      return;
    }
    const row = event.target.closest?.(ROW);
    const owner = crumbOf(row);
    if (owner && !choose(owner, row)) event.preventDefault();
  });

  doc.addEventListener("pointerdown", (event) => {
    for (const crumb of doc.querySelectorAll(CRUMB)) if (isOpen(crumb) && !crumb.contains(event.target)) closeCrumb(crumb);
  });

  doc.addEventListener("input", (event) => {
    const search = event.target.closest?.(".fh-crumb-menu__search input");
    const crumb = crumbOf(search);
    if (!crumb) return;
    const { menu } = parts(crumb);
    const s = stateOf(crumb);
    s.open = "pinned";
    if (menu.dataset.fhSource) {
      clearTimeout(s.load);
      s.load = setTimeout(() => requestRows(crumb, search.value), LOAD_DELAY);
    } else filter(menu, search.value);
  });

  doc.addEventListener("keydown", (event) => {
    const crumb = crumbOf(event.target);
    if (!crumb) return;
    const { button, menu, search } = parts(crumb);
    if (!menu) return;
    const key = event.key;
    if (event.target === button) {
      if (key === "ArrowDown") { event.preventDefault(); openCrumb(crumb, { focus: true, how: "key" }); }
      return;
    }
    if (!menu.contains(event.target)) return;
    const row = event.target.closest(ROW);
    if (key === "Escape") { event.preventDefault(); event.stopPropagation(); closeCrumb(crumb, { restoreFocus: true }); }
    else if (key === "Tab") closeCrumb(crumb);
    else if (key === "ArrowDown") { event.preventDefault(); move(menu, row, 1); }
    else if (key === "ArrowUp") {
      event.preventDefault();
      if (row === visibleRows(menu)[0] && search) search.focus();
      else move(menu, row, -1);
    } else if (key === "Home" && row) { event.preventDefault(); move(menu, row, "first"); }
    else if (key === "End" && row) { event.preventDefault(); move(menu, row, "last"); }
    else if (key === "Enter" && event.target === search) {
      event.preventDefault();
      const first = visibleRows(menu)[0];
      if (first) first.click();
    } else if (row && key.length === 1 && !event.metaKey && !event.ctrlKey && !event.altKey && search) search.focus();
  });

  // Focus leaving a pinned crumb entirely (a click elsewhere is handled by pointerdown).
  doc.addEventListener("focusout", (event) => {
    const crumb = crumbOf(event.target);
    if (!crumb || !isOpen(crumb) || stateOf(crumb).open !== "pinned") return;
    if (event.relatedTarget && !crumb.contains(event.relatedTarget)) closeCrumb(crumb);
  });
}

/** Marks the menus under a root ready: each gets popover="manual" and the button its aria-controls. */
export function initCrumbMenu(root = doc) {
  if (!root?.querySelectorAll) return;
  for (const crumb of root.querySelectorAll(CRUMB)) {
    const { button, menu } = parts(crumb);
    if (!button || !menu) continue;
    if (!menu.id) menu.id = `fh-crumb-menu-${++uid}`;
    if (!menu.hasAttribute("popover")) menu.setAttribute("popover", "manual");
    button.setAttribute("aria-controls", menu.id);
    if (!button.hasAttribute("aria-haspopup")) button.setAttribute("aria-haspopup", "menu");
    if (!button.hasAttribute("aria-expanded")) button.setAttribute("aria-expanded", "false");
  }
}

if (doc && !globalThis.__fhCrumbMenu) {
  globalThis.__fhCrumbMenu = true;
  bind();
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", () => initCrumbMenu(), { once: true });
  else initCrumbMenu();
}
