// Composition: what every Firehorse family is made of (#210, C0 composition spec sections 1, 2 and 8).
// schema/composition.json holds each family's layer, transparent flag and slots; the specimens say the rest with
// data-fh on every component root (children included) and data-fh-slot on every element that fills a slot.
// gen-index.mjs reads both: it emits layer, transparent, slots and compositions per family, and fails the build on
//   M1 an element in a specimen carries a component root class and no data-fh (a class the surrounding
//      component's family owns is its own markup and needs none)
//   M2 a data-fh value is not an Index ID (local:<name> is refused in Firehorse)
//   M3 a direct child component of a composite, section or template has no data-fh-slot, or a key that is not a
//      slot key or not declared for the parent
//   M4 a required slot of the parent is empty in its specimen
//   M5 a child's layer (its own row in layers, else its group's, else its family's) outranks its parent's, or a field holds a field (layerExceptions skipped, until ruled)
//   M6 data-fh-slot sits on a transparent or layout element
//   M7 a public FireKit View whose doc comment names an fh-/hx- class or a code has no "/// fh:" line
// and, on the compositions all specimens emit together (Helm's guards, migration 480):
//   M8 a child the slot does not accept: not in its accepts, and not a field in a slot that binds a field type
//   M9 more than one child in a one slot
//   M10 a self edge (the same ID as parent and child) or a cycle
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse } from "node-html-parser";
import { LAYOUT, NON_ROOT, isBlock } from "./fh-tag.mjs";

export const RANK = { token: 0, part: 1, field: 2, composite: 3, section: 4, template: 5 };
const fam = (id) => id.split("-")[0];
/** An ID's layer: its own row in its family's "layers", else its group's, else the family's (C0 section 1: groups
 *  and variants inherit their family's layer unless a row overrides it; a split part ranks part in a composite family). */
export const layerOf = (comp, id) => { const f = comp.families[fam(id)]; return f?.layers?.[id] ?? f?.layers?.[id.split(".")[0]] ?? f?.layer; };

/** schema/composition.json, checked against the rules of schema/composition.schema.json. */
export function readComposition(root, errors) {
  const c = JSON.parse(readFileSync(join(root, "schema/composition.json"), "utf8"));
  const contexts = new Set(c.contexts);
  for (const [code, f] of Object.entries(c.families)) {
    if (!(f.layer in RANK)) errors.push(`composition: ${code} has layer ${f.layer}`);
    for (const [id, l] of Object.entries(f.layers ?? {})) if (!id.startsWith(code + "-") || !(l in RANK)) errors.push(`composition: ${code} layers ${id} as ${l}`);
    const keys = new Set();
    for (const s of f.slots ?? []) {
      if (!c.slotKeys[s.key]) errors.push(`composition: ${code} slot ${s.key} is not a slot key`);
      if (keys.has(s.key)) errors.push(`composition: ${code} declares slot ${s.key} twice`);
      keys.add(s.key);
      if (s.fieldType && !contexts.has(s.context)) errors.push(`composition: ${code} slot ${s.key} binds ${s.fieldType} with no display context`);
      for (const a of [...(s.accepts ?? []), ...(s.default ? [s.default] : [])]) if (!c.families[a]) errors.push(`composition: ${code} slot ${s.key} accepts ${a}, which is no family`);
    }
  }
  for (const e of c.layerExceptions ?? []) if (!c.families[e.parent] || !c.families[e.child]) errors.push(`composition: layer exception ${e.parent} > ${e.child} names no family`);
  return c;
}

/** Component root classes: a class that starts a selector in the source CSS (.fh-input { }, not
 *  .fh-table .fh-num), or one the Index owns or roots a tagged element on. Layout and text classes never. */
export function rootClasses(root, owners, markups) {
  const css = (d) => (existsSync(d) ? readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? css(p) : n.endsWith(".css") ? [readFileSync(p, "utf8")] : []; }) : []);
  const roots = new Set(Object.keys(owners));
  for (const s of ["src/components", "src/patterns", "src/admin"].flatMap((d) => css(join(root, d)))) for (const m of s.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/(?:^|[,{}])\s*(?::where\(|:is\()?\.(fh-[a-z0-9-]+)(?![\w-])/gm)) roots.add(m[1]);
  for (const html of markups) for (const el of parse(html).querySelectorAll("[data-fh]")) for (const c of (el.getAttribute("class") || "").split(/\s+/)) roots.add(c);
  return new Set([...roots].filter((c) => isBlock(c) && !NON_ROOT.has(c)));
}

const elements = (n) => (n.childNodes || []).filter((c) => c.nodeType === 1);
function* walk(n) { for (const c of elements(n)) { yield c; yield* walk(c); } }
const classes = (n) => (n.getAttribute?.("class") || "").split(/\s+/).filter(Boolean);

/** Lint one family's specimen markup (M1 to M6) and return its compositions: parent, child, slot, order. */
export function compose({ markups, comp, ids, roots, owners = {}, errors }) {
  const layer = (id) => layerOf(comp, id);
  // A transparent family passes its children through; so does a token family's demo frame (a motion card
  // shows other components, it never holds them).
  const through = (id) => !!comp.families[fam(id)]?.transparent || layer(id) === "token";
  const exempt = new Set((comp.layerExceptions ?? []).map((e) => `${e.parent}>${e.child}`));
  const declared = (id, key) => (comp.families[fam(id)]?.slots ?? []).some((s) => s.key === key);
  const edges = new Map();
  for (const { id: where, html } of markups) {
    const doc = parse(html, { comment: true });
    const docs = new Set(); // docs chrome inside a stage: nested demo heads and catalog captions
    for (const n of walk(doc)) if (classes(n).some((c) => /^site-[a-z-]+__head$/.test(c)) || n.rawTagName === "figcaption") { docs.add(n); for (const d of walk(n)) docs.add(d); }
    const parentOf = (n) => { for (let p = n.parentNode; p; p = p.parentNode) { const id = p.getAttribute?.("data-fh"); if (id && !through(id)) return p; } return null; };
    const fills = new Map(); // parent element → Map(key → count)
    for (const n of walk(doc)) {
      if (docs.has(n)) continue;
      const id = n.getAttribute("data-fh"), key = n.getAttribute("data-fh-slot");
      const at = `${where}: <${n.rawTagName} class="${classes(n).join(" ")}">`;
      const P = parentOf(n), pid = P?.getAttribute("data-fh");
      // A class the surrounding component's own family owns, or lists as a piece, is that component's markup
      // (fh-tier in fh-tiers, fh-message in fh-chat): no ID of its own, so no child and no data-fh.
      const own = (c) => P && (owners[c] === fam(pid) || !!comp.families[fam(pid)]?.pieces?.includes(c));
      if (!id && classes(n).some((c) => roots.has(c) && !own(c))) errors.push(`M1 ${at} is a component root with no data-fh`);
      if (id && !ids.has(id)) errors.push(`M2 ${at} data-fh="${id}" is ${id.startsWith("local:") ? "a local name (refused in Firehorse)" : "not an Index ID"}`);
      if (key && (classes(n).some((c) => LAYOUT.has(c)) || (id && through(id)))) errors.push(`M6 ${at} data-fh-slot="${key}" sits on a transparent or layout element`);
      if (id && !through(id) && P) {
        const a = RANK[layer(pid)], b = RANK[layer(id)];
        if ((b > a || (a === RANK.field && b === RANK.field)) && !exempt.has(`${fam(pid)}>${fam(id)}`)) errors.push(`M5 ${at} ${id} (${layer(id)}) inside ${pid} (${layer(pid)})`);
      }
      const slotted = P && RANK[layer(pid)] >= RANK.composite;
      if (id && !through(id) && slotted && !key) errors.push(`M3 ${at} ${id} fills no slot of ${pid}`);
      if (key) {
        if (!comp.slotKeys[key]) errors.push(`M3 ${at} data-fh-slot="${key}" is not a slot key`);
        // A variant shown alone keeps the slot it fills in its family's demo: no parent here, nothing to check.
        else if (!P) continue;
        else if (!declared(pid, key)) errors.push(`M3 ${at} data-fh-slot="${key}" is not a slot of ${fam(pid)}`);
        else {
          const m = fills.get(P) ?? new Map(); fills.set(P, m);
          const order = (m.get(key) ?? 0) + 1; m.set(key, order);
          if (id) { const e = { parent: pid, child: id, slot: key, order, source: "specimen" }; edges.set(`${pid}|${id}|${key}|${order}`, e); }
        }
      }
    }
    // M4: every instance of a family with required slots fills them.
    for (const n of walk(doc)) {
      const id = n.getAttribute("data-fh");
      if (!id || docs.has(n) || through(id)) continue;
      for (const s of comp.families[fam(id)]?.slots ?? []) if (s.required && !fills.get(n)?.get(s.key)) errors.push(`M4 ${where}: ${id} leaves its required slot ${s.key} empty`);
    }
  }
  return [...edges.values()];
}

/** M8 to M10: Helm's guards (migration 480, firehorse.guard_composition) on the emitted compositions, all
 *  specimens together, as sync sees them. A family code accepts its groups and variants, a group its variants. */
export const accepts = (code, id) => id === code || id.startsWith(code + (code.includes("-") ? "." : "-"));
export function guard(edges, comp, errors) {
  const slotOf = (id, key) => (comp.families[fam(id)]?.slots ?? []).find((s) => s.key === key);
  const isField = (id) => layerOf(comp, id) === "field";
  const filled = new Map(); // parent|slot → edges, for one slots
  const next = new Map(); // parent → children, for cycles
  for (const e of edges) {
    const at = `${e.parent} > ${e.child} in ${e.slot}`;
    const s = slotOf(e.parent, e.slot);
    if (s && !(s.accepts ?? []).some((a) => accepts(a, e.child)) && !(s.fieldType && isField(e.child)))
      errors.push(`M8 ${at}: the slot accepts ${s.accepts?.length ? s.accepts.join(", ") : "no component"}${s.fieldType ? ` or a ${s.fieldType} field` : ""}`);
    if (s?.cardinality === "one") { const k = `${e.parent}|${e.slot}`; filled.set(k, [...(filled.get(k) ?? []), e]); }
    if (e.parent === e.child) errors.push(`M10 ${at} is a self edge`);
    else next.set(e.parent, new Set([...(next.get(e.parent) ?? []), e.child]));
  }
  for (const [k, es] of filled) if (es.length > 1) errors.push(`M9 ${k.replace("|", " slot ")} is a one slot holding ${es.length}: ${es.map((e) => `${e.child} (${e.order})`).join(", ")}`);
  // A cycle is a path back to a node still on the stack; each is reported once, from its smallest ID.
  const state = new Map(), seen = new Set();
  const visit = (id, path) => {
    state.set(id, 1); path.push(id);
    for (const c of [...(next.get(id) ?? [])].sort()) {
      if (state.get(c) === 1) { const loop = path.slice(path.indexOf(c)); const min = [...loop].sort()[0]; const r = [...loop.slice(loop.indexOf(min)), ...loop.slice(0, loop.indexOf(min)), min].join(" > "); if (!seen.has(r)) { seen.add(r); errors.push(`M10 cycle ${r}`); } }
      else if (!state.has(c)) visit(c, path);
    }
    state.set(id, 2); path.pop();
  };
  for (const id of [...next.keys()].sort()) if (!state.has(id)) visit(id, []);
}

/** M7: public FireKit views name what they implement on a "/// fh: <CODE> v<N>" or "/// fh: local:<block>" line. */
export const FH_LINE = /^\s*\/\/\/ fh: ((?:[A-Z]{3}(?:-\d+(?:\.\d+)?)?)|local:[a-z0-9-]+)(?: v(\d+))?\s*$/;
export function lintFireKit(dir, ids, errors) {
  if (!existsSync(dir)) return null;
  const swift = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? swift(p) : n.endsWith(".swift") ? [p] : []; });
  let views = 0, annotated = 0;
  for (const f of swift(dir)) {
    const lines = readFileSync(f, "utf8").split("\n");
    lines.forEach((line, i) => {
      if (!/^\s*public struct \w+(?:<[^>]*>)?\s*:\s*(?:[\w.]+\s*,\s*)*View\b/.test(line)) return;
      views++;
      const doc = [];
      for (let j = i - 1; j >= 0 && /^\s*(\/\/\/|@)/.test(lines[j]); j--) if (/^\s*\/\/\//.test(lines[j])) doc.unshift(lines[j]);
      const marks = doc.filter((l) => /^\s*\/\/\/ fh:/.test(l));
      for (const m of marks) {
        const x = FH_LINE.exec(m);
        if (!x) errors.push(`M7 ${f}:${i + 1}: "${m.trim()}" does not read /// fh: <CODE> v<N> or /// fh: local:<block>`);
        else if (!x[1].startsWith("local:") && !ids.has(x[1])) errors.push(`M7 ${f}:${i + 1}: ${x[1]} is not an Index ID`);
      }
      if (marks.length) annotated++;
      else if (doc.some((l) => /\b(?:fh|hx)-[a-z0-9-]+|\b[A-Z]{3}-\d+(?:\.\d+)?\b/.test(l))) errors.push(`M7 ${f}:${i + 1}: a public View whose doc comment names a class or code has no /// fh: line`);
    });
  }
  return { views, annotated };
}
