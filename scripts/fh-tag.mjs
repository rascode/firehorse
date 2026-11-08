// data-fh: the Firehorse reference on shipped markup. Every copied or generated
// snippet carries data-fh="<ID>" on each component root, so a page built from
// it can be audited (firehorse-audit) and read by agents without guessing.
// The docs mark demos with data-fh-id; this turns those marks into data-fh on
// the element that is actually the component (not the demo wrapper).
// Shared rule, mirrored in site/site-index.js (tagSnippet) for the copy button.
import { parse } from "node-html-parser";

// Layout primitives wrap components; they identify themselves by class and never take the tag
// on a component's behalf.
export const LAYOUT = new Set(["fh-stack", "fh-cluster", "fh-grid", "fh-auto-grid", "fh-row", "fh-split", "fh-frame", "fh-container", "fh-section", "fh-center", "fh-cover", "fh-switcher", "fh-sidebar", "fh-page", "fh-full", "fh-bento"]);
// Type and utility classes: they style text or behaviour inside components and are never a component's root.
export const TEXT = new Set(["fh-label", "fh-title", "fh-heading", "fh-subheading", "fh-lede", "fh-display", "fh-body", "fh-small", "fh-mono", "fh-muted", "fh-subtle", "fh-tabular", "fh-nowrap", "fh-sr-only", "fh-skip", "fh-text-center", "fh-text-end", "fh-text-start", "fh-tone-text", "fh-hide-narrow", "fh-hide-wide", "fh-reveal", "fh-reveal-children", "fh-index", "fh-prose", "fh-eyebrow", "fh-signature", "fh-parallax", "fh-scroll-progress", "fh-roll", "fh-kbd", "fh-dot", "fh-dl", "fh-close", "fh-section-head"]);
export const NON_ROOT = new Set([...LAYOUT, ...TEXT]);
export const isBlock = (c) => /^fh-[a-z0-9-]+$/.test(c) && !c.includes("--") && !/^fh-icon/.test(c);
const isRoot = (c) => !NON_ROOT.has(c);
export const blocksOf = (el) => (el.getAttribute?.("class") || "").split(/\s+/).filter(isBlock);
const DOC_ATTRS = ["data-fh-id", "data-fh-name", "data-fh-groups", "data-fh-summary"];

const elements = (n) => (n.childNodes || []).filter((c) => c.nodeType === 1);
function* walk(n) { for (const c of elements(n)) { yield c; yield* walk(c); } }

/** Which family owns each component class: the family whose variants are built on it (fh-button → BTN).
 *  A family demo that shows another family's component (a dialog demo's buttons) doesn't tag it. */
export function ownersOf(doc) {
  // A family owns a class when at least half its variants are built on it: buttons are BTN's even
  // though a catalog card or a profile menu also contains one.
  const uses = {}, sizes = {}, built = new Set();
  for (const n of doc.querySelectorAll("[data-fh-id]")) {
    const id = n.getAttribute("data-fh-id");
    if (!id.includes(".")) continue;
    const fam = id.split("-")[0];
    sizes[fam] = (sizes[fam] ?? 0) + 1; built.add(fam);
    let b = blocksOf(n).filter(isRoot);
    if (!b.length) for (const d of walk(n)) { b = blocksOf(d).filter(isRoot); if (b.length) break; }
    for (const c of new Set(b)) ((uses[c] ??= {})[fam] = (uses[c][fam] ?? 0) + 1);
  }
  // A family without variants votes with its demo: the components at the top of its stage
  // (the Fields demo is mostly fh-field, so fh-field is FLD's even though date pickers sit in one).
  for (const n of doc.querySelectorAll("[data-fh-id]")) {
    const fam = n.getAttribute("data-fh-id");
    if (fam.includes("-") || sizes[fam]) continue;
    // Layout, foundation and theming demos show other components; they never own them.
    let sec = ""; for (let p = n; p; p = p.parentNode) if (p.rawTagName === "section" && p.getAttribute("data-fh-label")) { sec = p.getAttribute("data-fh-label"); break; }
    if (/^(Layout|Foundations|Theming|Themes)$/.test(sec)) continue;
    const stage = n.querySelector(":scope > [data-demo]");
    if (!stage || stage.querySelector("[data-fh-id]")) continue;
    const tops = [];
    for (const d of walk(stage)) {
      if (!blocksOf(d).some(isRoot)) continue;
      let inner = false; for (let p = d.parentNode; p && p !== stage; p = p.parentNode) if (tops.includes(p)) inner = true;
      if (!inner) tops.push(d);
    }
    if (!tops.length) continue;
    sizes[fam] = tops.length;
    for (const d of tops) for (const c of new Set(blocksOf(d).filter(isRoot))) ((uses[c] ??= {})[fam] = (uses[c][fam] ?? 0) + 1);
  }
  // A list root owns its items: fh-chips → fh-chip, fh-cubes → fh-cube, fh-tiers → fh-tier.
  for (const [c, by] of Object.entries({ ...uses })) if (c.endsWith("s") && !uses[c.slice(0, -1)]) uses[c.slice(0, -1)] = by;
  const owners = {};
  // A family named for the class owns it outright: fh-field is FLD's (Fields), fh-chip is CHP's (Chips).
  const named = {};
  for (const n of doc.querySelectorAll("[data-fh-id]")) {
    const fam = n.getAttribute("data-fh-id");
    if (fam.includes("-")) continue;
    const name = (n.getAttribute("data-fh-name") || n.querySelector(":scope > .site-demo__head h3")?.text || "").toLowerCase();
    for (const w of name.split(/[^a-z-]+/).filter(Boolean)) { const stem = w.replace(/s$/, ""); (named[`fh-${stem}`] ??= new Set()).add(fam); }
  }
  // A family whose whole name is the class (Fields, Chips, Button) beats one that only mentions it (Tag field).
  for (const n of doc.querySelectorAll("[data-fh-id]")) {
    const fam = n.getAttribute("data-fh-id");
    if (fam.includes("-")) continue;
    const name = (n.getAttribute("data-fh-name") || n.querySelector(":scope > .site-demo__head h3")?.text || "").trim().toLowerCase();
    if (/^[a-z-]+$/.test(name)) owners[`fh-${name.replace(/s$/, "")}`] ??= fam;
  }
  for (const [c, fams] of Object.entries(named)) if (fams.size === 1) owners[c] ??= [...fams][0];
  for (const [c, by] of Object.entries(uses)) {
    if (owners[c]) continue;
    const share = ([f, n]) => n / sizes[f] + (built.has(f) ? 0.001 : 0); // ties go to the family with variants
    const [fam, n] = Object.entries(by).sort((x, y) => share(y) - share(x))[0];
    if (n / sizes[fam] >= 0.5) owners[c] = fam;
  }
  return owners;
}

/** Tag one marked element (in place, on a clone): data-fh goes on the component root(s). */
function tagOne(node, id, owners) {
  const fam = id.split("-")[0];
  // A variant's author marked this element, so any component class counts; a family or group
  // demo counts only the components it owns.
  const ok = id.includes(".") ? isRoot : (c) => isRoot(c) && (!owners[c] || owners[c] === fam);
  const scope = node.querySelector(":scope > [data-demo]") || node;
  // A family or group whose demo holds its variants: the variants carry the tags.
  for (const d of walk(scope)) if (d.getAttribute("data-fh-id")) return;
  if (scope === node && blocksOf(node).some(ok)) { node.setAttribute("data-fh", id); return; }
  // Otherwise every top-most component of this kind in the demo (a row of buttons, a set of avatars,
  // the search, stepper and pagination of a navigation demo).
  const tagged = [];
  for (const d of walk(scope)) {
    if (!blocksOf(d).some(ok)) continue;
    let inner = false; for (let p = d.parentNode; p && p !== scope; p = p.parentNode) if (tagged.includes(p)) inner = true;
    if (!inner) { d.setAttribute("data-fh", id); tagged.push(d); }
  }
}

/** The shippable markup for a docs element: data-fh on component roots, docs-only attributes gone.
 *  part: "outer" (the element), "stage" (its demo stage) or a selector inside it. */
export function snippet(el, part = "outer", owners = {}) {
  const root = parse(el.outerHTML, { comment: true });
  const top = elements(root)[0];
  const marked = [top, ...walk(top)].filter((n) => n.getAttribute("data-fh-id"));
  for (const n of marked.reverse()) tagOne(n, n.getAttribute("data-fh-id"), owners);
  for (const n of [top, ...walk(top)]) for (const a of DOC_ATTRS) n.removeAttribute(a);
  if (part === "outer") return top.outerHTML;
  const inner = part === "stage" ? top.querySelector(":scope > [data-demo]") : top.querySelector(part);
  return (inner ?? top).innerHTML;
}
