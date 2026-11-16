/*!
 * Firehorse image field — dist/image-field.js · MIT
 * ---------------------------------------------------------------
 * Optional. The image field (IMF, src/components/forms/image-field.css) is one
 * image: a preview, then Upload, From a URL, and (with data-icons) Icon.
 *
 * Without this script the panes are whatever the page authored (hidden on the
 * ones that are closed). With it, the Segmented buttons switch panes, a drop,
 * a paste or a browse on the dropzone previews the file, the icon search
 * filters the buttons in the grid, and a choice dispatches:
 *
 *   fh-image-field:change
 *   detail: { kind: "file"|"url"|"icon"|"remove"|"reset", file?, url?, icon?, tone? }
 *
 * Fetching a URL is the host's job. Fetch dispatches kind "url" and does not
 * request the address. The host sets data-state on the URL pane
 * (idle, loading, error, ready) and, when it is ready, the preview.
 *
 *   import "@rascode/firehorse/image-field";
 *   import { initImageField, setImageFieldPane } from "@rascode/firehorse/image-field";
 */

const SELECTOR = ".fh-image-field";
const EVENT = "fh-image-field:change";
const MAX = 10 * 1024 * 1024;

const doc = typeof document === "undefined" ? null : document;
const seen = new WeakSet();
const objectUrls = new WeakMap();

const emit = (root, detail) => root.dispatchEvent(new CustomEvent(EVENT, { bubbles: true, detail }));

const previewOf = (root) => root.querySelector(".fh-image-field__preview .fh-avatar");

const paintImage = (root, url) => {
  const avatar = previewOf(root);
  if (!avatar) return;
  const img = doc.createElement("img");
  img.alt = "";
  img.src = url;
  avatar.replaceChildren(img);
};

const paintIcon = (root, name, tone) => {
  const avatar = previewOf(root);
  if (!avatar) return;
  if (tone) avatar.setAttribute("data-tone", tone);
  const icon = doc.createElement("i");
  icon.className = `fh-icon fh-icon--${name}`;
  icon.setAttribute("aria-hidden", "true");
  avatar.replaceChildren(icon);
};

const rememberUrl = (root, url) => {
  const prev = objectUrls.get(root);
  if (prev) URL.revokeObjectURL(prev);
  objectUrls.set(root, url);
};

const selectedIcon = (root) => root.querySelector(".fh-image-field__icons [data-icon][aria-pressed='true']")?.getAttribute("data-icon") || "";

const selectedTone = (root) => root.querySelector(".fh-image-field__tones [data-tone][aria-pressed='true']")?.getAttribute("data-tone") || previewOf(root)?.getAttribute("data-tone") || "";

/** Shows one pane and presses its Segmented button. */
export function setImageFieldPane(root, pane) {
  for (const button of root.querySelectorAll(".fh-image-field__modes [data-pane]")) {
    button.setAttribute("aria-pressed", String(button.getAttribute("data-pane") === pane));
  }
  for (const panel of root.querySelectorAll(".fh-image-field__pane")) {
    panel.hidden = panel.getAttribute("data-pane") !== pane;
  }
}

function takeFile(root, file) {
  const zone = root.querySelector(".fh-dropzone");
  if (!file) return;
  const image = file.type.startsWith("image/");
  const small = file.size <= MAX;
  if (zone) zone.toggleAttribute("data-invalid", !(image && small));
  if (!image || !small) return;
  const url = URL.createObjectURL(file);
  rememberUrl(root, url);
  paintImage(root, url);
  emit(root, { kind: "file", file });
}

function filterIcons(root, query) {
  const q = query.trim().toLowerCase();
  for (const button of root.querySelectorAll(".fh-image-field__icons [data-icon]")) {
    const name = button.getAttribute("data-icon") || "";
    button.hidden = q.length > 0 && !name.includes(q);
  }
}

/** Sets up one image field (once): panes, drop, paste, browse, icon search. */
export function initImageField(root) {
  if (!root || seen.has(root)) return root;
  seen.add(root);
  const zone = root.querySelector(".fh-dropzone");
  if (zone) {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.setAttribute("data-dragging", "");
    });
    zone.addEventListener("dragleave", () => zone.removeAttribute("data-dragging"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.removeAttribute("data-dragging");
      takeFile(root, event.dataTransfer?.files?.[0]);
    });
  }
  root.addEventListener("change", (event) => {
    const input = event.target;
    if (input?.type === "file" && root.contains(input)) takeFile(root, input.files?.[0]);
  });
  root.addEventListener("input", (event) => {
    const input = event.target;
    if (input?.hasAttribute?.("data-icon-search") && root.contains(input)) filterIcons(root, input.value || "");
  });
  return root;
}

function initAll(root = doc) {
  for (const field of root.querySelectorAll(SELECTOR)) initImageField(field);
}

function onClick(event) {
  const root = event.target?.closest?.(SELECTOR);
  if (!root || !seen.has(root)) return;
  const pane = event.target.closest(".fh-image-field__modes [data-pane]");
  if (pane && root.contains(pane)) {
    setImageFieldPane(root, pane.getAttribute("data-pane"));
    return;
  }
  const icon = event.target.closest(".fh-image-field__icons [data-icon]");
  if (icon && root.contains(icon)) {
    for (const button of root.querySelectorAll(".fh-image-field__icons [data-icon]")) {
      button.setAttribute("aria-pressed", String(button === icon));
    }
    const name = icon.getAttribute("data-icon");
    const tone = selectedTone(root);
    paintIcon(root, name, tone);
    emit(root, { kind: "icon", icon: name, tone: tone || undefined });
    return;
  }
  const toneBtn = event.target.closest(".fh-image-field__tones [data-tone]");
  if (toneBtn && root.contains(toneBtn)) {
    for (const button of root.querySelectorAll(".fh-image-field__tones [data-tone]")) {
      button.setAttribute("aria-pressed", String(button === toneBtn));
    }
    const tone = toneBtn.getAttribute("data-tone");
    const name = selectedIcon(root);
    if (name) {
      paintIcon(root, name, tone);
      emit(root, { kind: "icon", icon: name, tone });
    } else {
      const avatar = previewOf(root);
      if (avatar) avatar.setAttribute("data-tone", tone);
    }
    return;
  }
  if (event.target.closest("[data-fetch]")) {
    const input = root.querySelector(".fh-image-field__pane[data-pane='url'] input[type='url']");
    emit(root, { kind: "url", url: input?.value || "" });
    return;
  }
  if (event.target.closest("[data-remove]")) {
    emit(root, { kind: "remove" });
    return;
  }
  if (event.target.closest("[data-reset]")) emit(root, { kind: "reset" });
}

if (doc) {
  doc.addEventListener("click", onClick);
  doc.addEventListener("paste", (event) => {
    const root = event.target?.closest?.(SELECTOR);
    if (!root || !seen.has(root)) return;
    const file = [...(event.clipboardData?.files ?? [])].find((item) => item.type.startsWith("image/"));
    if (!file) return;
    event.preventDefault();
    takeFile(root, file);
  });
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", () => initAll(), { once: true });
  else initAll();
}
