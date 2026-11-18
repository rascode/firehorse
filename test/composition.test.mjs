// Composition rules M1 to M7 (scripts/composition.mjs) catch what they say they catch, and the built Index carries
// layer, transparent, slots and compositions. Run: node test/composition.test.mjs   (part of npm test)
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readComposition, compose, lintFireKit } from "../scripts/composition.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fails = [];
const expect = (ok, msg) => { if (!ok) fails.push(msg); };
const comp = readComposition(root, fails);
const ids = new Set(["REC", "REC-1.1", "BTN", "BTN-2.2", "EYE", "STK", "CHP", "VAL", "VAL-1.1", "SFL", "MET"]);
const roots = new Set(["fh-record", "fh-button", "fh-eyebrow-pill", "fh-chip", "fh-value"]);
const run = (html) => { const errors = []; const edges = compose({ markups: [{ id: "T", html }], comp, ids, roots, errors }); return { errors, edges }; };
const rec = (inner) => `<header class="fh-record" data-fh="REC-1.1"><span class="fh-record__mark" data-fh-slot="mark"></span><h2 class="fh-record__title" data-fh-slot="title">T</h2><p class="fh-record__sub" data-fh-slot="sub">S</p>${inner}</header>`;
const has = (r, rule) => r.errors.some((e) => e.startsWith(rule));

const ok = run(rec(`<div class="fh-stack"><button class="fh-button" data-fh="BTN-2.2" data-fh-slot="actions">Go</button></div>`));
expect(!ok.errors.length, `a marked record fails: ${ok.errors.join("; ")}`);
expect(ok.edges.length === 1 && ok.edges[0].parent === "REC-1.1" && ok.edges[0].child === "BTN-2.2" && ok.edges[0].slot === "actions" && ok.edges[0].order === 1, "the record's button is one composition, through the stack");
expect(has(run(rec(`<button class="fh-button" data-fh-slot="actions">Go</button>`)), "M1"), "M1: an unmarked button passes");
expect(has(run(rec(`<button class="fh-button" data-fh="BTN-9.9" data-fh-slot="actions">Go</button>`)), "M2"), "M2: an unknown ID passes");
expect(has(run(rec(`<button class="fh-button" data-fh="local:hx-log" data-fh-slot="actions">Go</button>`)), "M2"), "M2: a local name passes in Firehorse");
expect(has(run(rec(`<button class="fh-button" data-fh="BTN-2.2">Go</button>`)), "M3"), "M3: a child with no slot passes");
expect(has(run(rec(`<button class="fh-button" data-fh="BTN-2.2" data-fh-slot="stage">Go</button>`)), "M3"), "M3: a slot the parent does not declare passes");
expect(has(run(rec(`<button class="fh-button" data-fh="BTN-2.2" data-fh-slot="widget">Go</button>`)), "M3"), "M3: a key that is no slot key passes");
expect(has(run(`<header class="fh-record" data-fh="REC-1.1"><h2 class="fh-record__title" data-fh-slot="title">T</h2></header>`), "M4"), "M4: a record with no mark passes");
expect(has(run(`<span class="fh-value" data-fh="VAL-1.1"><span class="fh-value" data-fh="VAL-1.1"></span></span>`), "M5"), "M5: a field in a field passes");
expect(has(run(`<span class="fh-chip" data-fh="CHP"><header class="fh-record" data-fh="REC-1.1"></header></span>`), "M5"), "M5: a composite in a part passes");
expect(!has(run(`<span class="fh-value" data-fh="VAL-1.1"><span class="fh-files" data-fh="SFL"></span></span>`), "M5"), "M5: a listed layer exception (VAL > SFL) fails");
expect(has(run(rec(`<div class="fh-stack" data-fh-slot="actions"><button class="fh-button" data-fh="BTN-2.2" data-fh-slot="actions">Go</button></div>`)), "M6"), "M6: a slot on a layout element passes");

const kit = []; const counts = lintFireKit(join(root, "test/composition-firekit"), new Set(["TIL-1.1", "VAL-5.2"]), kit);
expect(counts?.views === 4 && counts.annotated === 3, `M7 counts ${JSON.stringify(counts)}`);
expect(kit.length === 2 && kit.some((e) => /Unmarked\.swift:3:.*no \/\/\/ fh: line/.test(e)) && kit.some((e) => /Wrong\.swift:2:.*not an Index ID/.test(e)), `M7: ${kit.join("; ")}`);

// The built Index: every family has a layer; the record header's compositions name the eyebrow pill.
const full = JSON.parse(readFileSync(join(root, "dist/full/index.json"), "utf8"));
expect(full.families.every((f) => f.layer && typeof f.transparent === "boolean" && Array.isArray(f.slots) && Array.isArray(f.compositions)), "a family in dist/full/index.json lacks layer, transparent, slots or compositions");
expect(full.families.find((f) => f.id === "REC")?.compositions.some((e) => e.child.startsWith("EYE") && e.slot === "eyebrow"), "REC has no eyebrow composition (REC-1.1's pill)");
expect(full.owners["fh-row"] === undefined, "fh-row is owned (it is a layout class, not a component)");

if (fails.length) { console.error("✗ composition:\n  " + fails.join("\n  ")); process.exit(1); }
console.log("✓ composition: M1 to M7 catch their cases; the Index carries layers, slots and compositions");
