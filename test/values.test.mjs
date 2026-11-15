// Data display contract (W1): resolveValue() and schema/display-rules.json.
//   node test/values.test.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { resolveValue, describeField, optionSetFor, toneOf, defaultTone, isEmpty, SHAPES, CONTEXTS, EMPTY, rules } from "../src/js/values.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const types = JSON.parse(readFileSync(join(root, "schema/semantic-types.json"), "utf8")).types;
const ledger = JSON.parse(readFileSync(join(root, "index-ledger.json"), "utf8")).issued;
let n = 0;
const t = (name, fn) => { fn(); n++; };

t("thirteen shapes, five contexts", () => {
  assert.deepEqual([...SHAPES], ["text", "prose", "number", "money", "ratio", "temporal", "option", "options", "entity", "file", "link", "flag", "code"]);
  assert.deepEqual([...CONTEXTS], ["cell", "record", "card", "metric", "form"]);
});

t("every one of the 127 semantic types has a shape and resolves in every context", () => {
  assert.equal(types.length, 127);
  const used = new Set();
  for (const type of types) {
    assert.ok(SHAPES.includes(type.display?.shape), `${type.key} has no valid shape`);
    used.add(type.display.shape);
    for (const c of CONTEXTS) {
      const r = resolveValue({ key: type.key, semanticType: type.key, currency: "USD" }, c);
      assert.equal(r.shape, type.display.shape, type.key);
      assert.deepEqual(r.warnings, [], `${type.key} in ${c}: ${r.warnings}`);
    }
  }
  assert.equal(used.size, 13, "all thirteen shapes are used");
});

t("the grid only names variants its shape has, and every part is a Firehorse family", () => {
  for (const row of rules.grid) {
    assert.ok(SHAPES.includes(row.shape), row.row);
    for (const c of CONTEXTS) if (row[c] != null) assert.ok(rules.variants[row.shape].variants[row[c]], `${row.row}.${c} = ${row[c]}`);
  }
  for (const [shape, fam] of Object.entries(rules.variants)) {
    assert.match(fam.group, /^VAL-\d+$/, shape);
    for (const [v, meta] of Object.entries(fam.variants)) for (const p of meta.parts) assert.ok(ledger[p], `${shape}.${v} built from unknown ${p}`);
  }
  for (const s of SHAPES) assert.ok(rules.grid.some((r) => r.shape === s && !r.match), `${s} has a default row`);
});

t("the datatable's 22 types are aliases that resolve", () => {
  const dt = ["text", "long", "number", "currency", "percent", "progress", "select", "status", "multi", "tags", "date", "check", "rating", "user", "users", "url", "email", "phone", "link", "attachment", "formula", "sparkline"];
  assert.deepEqual(Object.keys(rules.aliases).sort(), [...dt].sort());
  const want = { text: "text", long: "prose", number: "number", currency: "money", percent: "ratio", progress: "ratio", select: "option", status: "option", multi: "options", tags: "options", date: "temporal", check: "flag", rating: "ratio", user: "entity", users: "entity", url: "link", email: "link", phone: "link", link: "entity", attachment: "file", formula: "number", sparkline: "number" };
  for (const type of dt) {
    const d = describeField({ type });
    assert.equal(d.shape, want[type], type);
    assert.deepEqual(d.warnings, [], type);
  }
  assert.equal(resolveValue({ type: "users" }, "cell").row, "entities");
  assert.equal(resolveValue({ type: "progress" }, "record").variant, "bar", "progress keeps its bar via the alias's display");
  assert.equal(resolveValue({ type: "sparkline" }, "cell").variant, "sparkline");
});

t("status: dot in a cell, chip in a record, card and metric, select in a form", () => {
  const f = { key: "state", semanticType: "status" };
  assert.equal(resolveValue(f, "cell").variant, "dot");
  assert.equal(resolveValue(f, "record").variant, "chip");
  assert.equal(resolveValue(f, "card").variant, "chip");
  assert.equal(resolveValue(f, "metric").variant, "chip");
  const form = resolveValue(f, "form");
  assert.equal(form.variant, "select");
  assert.equal(form.editable, true);
  assert.equal(form.mode, "edit");
  assert.equal(resolveValue({ type: "status", options: [{ value: "done" }, { value: "failed" }] }, "cell").row, "option.status", "the datatable status alias stays a status");
});

t("editing outside a form keeps the read part and adds its control (rule 6)", () => {
  const r = resolveValue({ semanticType: "status" }, "cell", "edit");
  assert.equal(r.variant, "dot");
  assert.equal(r.editable, true);
  assert.equal(r.control, "select");
  const ro = resolveValue({ semanticType: "created_at" }, "cell", "edit");
  assert.equal(ro.editable, false);
  assert.equal(ro.control, null);
});

t("option form control follows the number of options", () => {
  assert.equal(resolveValue({ semanticType: "pronouns" }, "form").variant, "segmented", "3 options");
  assert.equal(resolveValue({ semanticType: "honorific" }, "form").variant, "segmented", "4 options");
  assert.equal(resolveValue({ semanticType: "language_code" }, "form").variant, "select", "6 options");
  assert.equal(resolveValue({ semanticType: "country_code" }, "form").variant, "select-search", "8 options");
  assert.equal(resolveValue({ type: "select" }, "form").variant, "select", "no options known");
  assert.equal(resolveValue({ semanticType: "honorific" }, "metric").variant, null, "a choice is not a metric");
});

t("option sets: tones fall back to the default tone map; a registry key wins over the type's options", () => {
  const set = optionSetFor({ semanticType: "status" });
  assert.equal(set.key, "semantic.status");
  assert.equal(set.kind, "status");
  assert.deepEqual(set.options.map((o) => [o.value, o.tone]), [["draft", "amber"], ["active", "lime"], ["paused", "amber"], ["archived", "neutral"]]);
  const reg = { "relay.status": { kind: "status", options: [{ value: "open", tone: "violet" }, "merged"] } };
  const r = resolveValue({ semanticType: "status", optionSet: "relay.status" }, "record", undefined, { optionSets: reg });
  assert.equal(r.optionSet.key, "relay.status");
  assert.equal(toneOf(r.optionSet, "open"), "violet");
  assert.equal(toneOf(r.optionSet, "merged"), "lime");
  assert.equal(defaultTone("In-Progress"), "sky");
  assert.equal(defaultTone("something new"), "neutral");
});

t("the tone map and the Status chip's CSS agree word for word", () => {
  const css = readFileSync(join(root, "src/components/actions/chip-status.css"), "utf8");
  for (const tone of ["lime", "sky", "amber", "rose"]) {
    const line = css.split("\n").find((l) => l.includes(`--fh-tone: var(--fh-tone-${tone})`) && l.includes("&:is("));
    const words = [...line.matchAll(/data-status="([^"]+)" i/g)].map((m) => m[1]);
    assert.deepEqual(words.sort(), [...rules.toneMap[tone]].sort(), tone);
  }
});

t("options overflow, entities and people", () => {
  const tags = resolveValue({ semanticType: "tags" }, "cell");
  assert.equal(tags.variant, "chips");
  assert.equal(tags.max, 3);
  assert.equal(resolveValue({ semanticType: "tags" }, "card").max, 2);
  assert.equal(resolveValue({ semanticType: "tags" }, "metric").variant, "count");
  assert.equal(resolveValue({ type: "multi" }, "form").variant, "tag-field");
  assert.equal(resolveValue({ semanticType: "status", multiple: true }, "cell").shape, "options", "several options are the options shape");
  assert.equal(resolveValue({ semanticType: "owner_reference" }, "record").variant, "full");
  assert.equal(resolveValue({ semanticType: "owner_reference" }, "card").variant, "chip");
  assert.equal(resolveValue({ semanticType: "entity_reference" }, "cell").variant, "ref");
  assert.equal(resolveValue({ semanticType: "entity_reference" }, "record").variant, "ref-key");
  assert.equal(resolveValue({ semanticType: "entity_reference", entity: "org" }, "cell").variant, "avatar-name");
  const many = resolveValue({ semanticType: "owner_reference", multiple: true }, "cell");
  assert.equal(many.variant, "stack");
  assert.equal(many.max, 4);
});

t("numbers and money align right with tabular figures; money knows its currency", () => {
  const m = resolveValue({ semanticType: "fiat_amount", currency: "USD" }, "cell");
  assert.equal(m.variant, "amount");
  assert.equal(m.align, "end");
  assert.equal(m.figures, "tabular");
  assert.equal(m.mono, true);
  assert.equal(m.currency, "USD");
  assert.deepEqual(m.warnings, []);
  assert.match(resolveValue({ semanticType: "fiat_amount" }, "cell").warnings[0], /currency/);
  assert.equal(resolveValue({ semanticType: "fiat_amount", currency: "USD" }, "metric").variant, "compact-delta");
  const q = resolveValue({ semanticType: "duration_minutes" }, "record");
  assert.equal(q.variant, "unit");
  assert.equal(q.unit, "min");
  assert.equal(q.align, "end");
  assert.equal(resolveValue({ semanticType: "quantity" }, "card").figures, null);
});

t("ratio: bar, text, ring; a target makes the metric a meter", () => {
  const f = { semanticType: "percentage" };
  assert.deepEqual(CONTEXTS.map((c) => resolveValue(f, c).variant), ["bar", "text", "ring", "ring", "range"]);
  assert.equal(resolveValue({ ...f, target: 80 }, "metric").variant, "meter");
});

t("read-only types show their record variant in a form", () => {
  const r = resolveValue({ semanticType: "created_at" }, "form");
  assert.equal(r.readOnly, true);
  assert.equal(r.editable, false);
  assert.equal(r.variant, "datetime");
  assert.equal(resolveValue({ semanticType: "computed_rollup" }, "form").readOnly, true);
  assert.equal(resolveValue({ semanticType: "short_text" }, "form", "read").editable, false, "a form in read mode");
});

t("the field overrides the grid; an unknown variant is refused with a warning (rule 5)", () => {
  const r = resolveValue({ semanticType: "status", display: { cell: "chip" } }, "cell");
  assert.equal(r.variant, "chip");
  assert.equal(r.source, "field");
  const bad = resolveValue({ semanticType: "status", display: { cell: "ring" } }, "cell");
  assert.equal(bad.variant, "dot");
  assert.equal(bad.source, "grid");
  assert.match(bad.warnings[0], /not a option variant/);
});

t("unknown inputs: text with a warning; unknown contexts throw", () => {
  const r = resolveValue({ semanticType: "nope" }, "cell");
  assert.equal(r.shape, "text");
  assert.match(r.warnings[0], /unknown semantic type/);
  assert.match(resolveValue({ type: "nope" }, "cell").warnings[0], /unknown datatable type/);
  assert.throws(() => resolveValue({}, "sidebar"), /unknown context/);
  assert.throws(() => resolveValue({}, "cell", "write"), /unknown mode/);
});

t("empty is a muted em dash (rule 7)", () => {
  assert.deepEqual(EMPTY, { text: "—", tone: "muted" });
  assert.equal(resolveValue({ semanticType: "title" }, "cell").empty.text, "—");
  assert.ok(isEmpty(null) && isEmpty("") && isEmpty([]) && !isEmpty(0) && !isEmpty(false));
});

t("specific kinds: secrets masked, JSON as a block, time and duration, actions", () => {
  assert.equal(resolveValue({ semanticType: "api_key_secret_ref" }, "cell").variant, "masked");
  assert.equal(resolveValue({ semanticType: "api_key_secret_ref" }, "form").variant, "key-field");
  assert.equal(resolveValue({ semanticType: "json_object" }, "record").variant, "code-block");
  assert.equal(resolveValue({ semanticType: "time" }, "cell").variant, "time");
  assert.equal(resolveValue({ semanticType: "duration_iso8601" }, "record").variant, "duration");
  assert.equal(resolveValue({ semanticType: "computed_button" }, "cell").variant, "action");
  assert.equal(resolveValue({ semanticType: "email" }, "cell").variant, "email");
  assert.equal(resolveValue({ semanticType: "date" }, "record").variant, "date");
  assert.equal(resolveValue({ semanticType: "timestamp" }, "record").variant, "datetime");
});

console.log(`values: ${n} checks passed`);
