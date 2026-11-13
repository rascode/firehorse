/*!
 * Firehorse app shell rail - dist/app-shell.js - MIT
 * ---------------------------------------------------------------
 * Optional. The collapsible sidebar (SHL-1.2, .fh-app--rail) already
 * changes width without this file: a visually hidden checkbox and :has()
 * drive it, and the narrow sheet is a popover.
 *
 * This adds what CSS cannot:
 *   - keeps data-fh-side ("open" or "rail") in step with the checkbox
 *   - sets the toggle's aria-expanded (the markup leaves it off)
 *   - remembers the choice in localStorage under the one key "fh-app-side"
 *   - toggles on Cmd+B or Ctrl+B (not while typing in a field)
 *
 *   import { initAppShell } from "@rascode/firehorse/src/js/app-shell.js";
 *
 * The package exports map does not name this file (admin stays held).
 * The build still copies it to dist/app-shell.js.
 */

const ROOT = ".fh-app--rail";
const KEY = "fh-app-side";
const doc = typeof document === "undefined" ? null : document;

let keysBound = false;

const readStore = () => {
  try {
    const value = localStorage.getItem(KEY);
    return value === "open" || value === "rail" ? value : null;
  } catch {
    return null;
  }
};

const writeStore = (mode) => {
  try {
    localStorage.setItem(KEY, mode);
  } catch {
    /* Storage can be blocked. The shell still toggles for this view. */
  }
};

const modeOf = (app) => (app.getAttribute("data-fh-side") === "rail" ? "rail" : "open");

const apply = (app, mode) => {
  const rail = mode === "rail";
  app.setAttribute("data-fh-side", rail ? "rail" : "open");
  const box = app.querySelector(":scope > .fh-app__side .fh-app__side-state");
  if (box) box.checked = rail;
  const button = app.querySelector(":scope > .fh-app__side .fh-app__side-toggle");
  if (button) button.setAttribute("aria-expanded", rail ? "false" : "true");
};

const toggle = (app, persist) => {
  const next = modeOf(app) === "rail" ? "open" : "rail";
  apply(app, next);
  if (persist) writeStore(next);
};

const typing = (target) => {
  if (!target?.closest) return false;
  if (target.closest("textarea, select, [contenteditable]:not([contenteditable='false'])")) return true;
  const input = target.closest("input");
  if (!input) return false;
  const type = (input.getAttribute("type") || "text").toLowerCase();
  return !/^(checkbox|radio|button|submit|reset|file|color|range)$/.test(type);
};

const onKey = (event) => {
  if (!(event.metaKey || event.ctrlKey) || event.altKey || event.shiftKey) return;
  if (event.key.toLowerCase() !== "b") return;
  if (typing(event.target)) return;
  const apps = [...doc.querySelectorAll(ROOT)].filter((app) => app.dataset.fhAppShellReady != null);
  if (!apps.length) return;
  const focused = doc.activeElement?.closest?.(ROOT);
  const app = (focused && apps.includes(focused) && focused) || apps[0];
  event.preventDefault();
  toggle(app, true);
};

const bind = (app) => {
  if (app.dataset.fhAppShellReady != null) return;
  app.dataset.fhAppShellReady = "";
  const box = app.querySelector(":scope > .fh-app__side .fh-app__side-state");
  const button = app.querySelector(":scope > .fh-app__side .fh-app__side-toggle");
  if (box) {
    box.tabIndex = -1;
    box.setAttribute("aria-hidden", "true");
  }
  if (button) {
    button.tabIndex = 0;
    button.addEventListener("click", () => toggle(app, true));
  }
  const stored = readStore();
  if (stored) apply(app, stored);
  else apply(app, app.getAttribute("data-fh-side") === "rail" || box?.checked ? "rail" : "open");
};

/**
 * Wires every .fh-app--rail under root (default: the document).
 * Safe to call twice.
 */
export function initAppShell(root = doc) {
  if (!root) return;
  const apps = [];
  if (root.matches?.(ROOT)) apps.push(root);
  if (root.querySelectorAll) apps.push(...root.querySelectorAll(ROOT));
  for (const app of apps) bind(app);
  if (doc && !keysBound) {
    keysBound = true;
    doc.addEventListener("keydown", onKey);
  }
}

if (doc) {
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", () => initAppShell(doc), { once: true });
  else initAppShell(doc);
}
