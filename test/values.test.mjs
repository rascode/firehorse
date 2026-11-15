// Data display contract (W1, W2b): resolveValue(), textOf(), schema/display-rules.json and the published option sets.
//   node test/values.test.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv from "ajv/dist/2020.js";
import { resolveValue, describeField, optionSetFor, toneOf, rampOf, defaultTone, isEmpty, textOf, isoDuration, SHAPES, CONTEXTS, DRAWN_CONTEXTS, STATES, EMPTY, rules, optionSets, renderValue, variants, CHOICE_CONTEXTS } from "../src/js/values.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const types = JSON.parse(readFileSync(join(root, "schema/semantic-types.json"), "utf8")).types;
const ledger = JSON.parse(readFileSync(join(root, "index-ledger.json"), "utf8")).issued;
let n = 0;
const t = (name, fn) => { fn(); n++; };

t("fourteen shapes (series is the 14th), six contexts (text is the sixth)", () => {
  assert.deepEqual([...SHAPES], ["text", "prose", "number", "money", "ratio", "temporal", "option", "options", "entity", "file", "link", "flag", "code", "series"]);
  assert.deepEqual([...CONTEXTS], ["cell", "record", "card", "metric", "form", "text"]);
  assert.deepEqual([...DRAWN_CONTEXTS], ["cell", "record", "card", "metric", "form"]);
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
  assert.equal(used.size, 14, "all fourteen shapes are used");
});

t("the grid only names variants its shape has, and every part is a Firehorse family", () => {
  for (const row of rules.grid) {
    assert.ok(SHAPES.includes(row.shape), row.row);
    for (const c of DRAWN_CONTEXTS) if (row[c] != null) assert.ok(rules.variants[row.shape].variants[row[c]], `${row.row}.${c} = ${row[c]}`);
    assert.ok(Object.hasOwn(row, "text"), `${row.row} names its text form (null for none)`);
    if (row.text != null) assert.ok(rules.textFormats[row.text], `${row.row}.text = ${row.text}`);
  }
  for (const [shape, fam] of Object.entries(rules.variants)) {
    assert.match(fam.group, /^VAL-\d+$/, shape);
    for (const [v, meta] of Object.entries(fam.variants)) {
      for (const p of meta.parts) assert.ok(ledger[p], `${shape}.${v} built from unknown ${p}`);
      // A shared variant is the same part as its home shape's variant of that ID.
      if (meta.of) assert.ok(Object.values(rules.variants[meta.of].variants).some((x) => x.id === meta.id && !x.of), `${shape}.${v} (${meta.id}) is not a ${meta.of} part`);
    }
  }
  for (const s of SHAPES) assert.ok(rules.grid.some((r) => r.shape === s && !r.match), `${s} has a default row`);
});

t("the datatable's 22 types are aliases that resolve", () => {
  const dt = ["text", "long", "number", "currency", "percent", "progress", "select", "status", "multi", "tags", "date", "check", "rating", "user", "users", "url", "email", "phone", "link", "attachment", "formula", "sparkline"];
  assert.deepEqual(Object.keys(rules.aliases).sort(), [...dt].sort());
  const want = { text: "text", long: "prose", number: "number", currency: "money", percent: "ratio", progress: "ratio", select: "option", status: "option", multi: "options", tags: "options", date: "temporal", check: "flag", rating: "ratio", user: "entity", users: "entity", url: "link", email: "link", phone: "link", link: "entity", attachment: "file", formula: "text", sparkline: "series" };
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
  assert.equal(resolveValue({ semanticType: "barcode_format" }, "form").variant, "select", "5 options");
  assert.equal(resolveValue({ semanticType: "language_code" }, "form").variant, "select-search", "a generated code set always searches");
  assert.equal(resolveValue({ semanticType: "country_code" }, "form").row, "option.code");
  assert.equal(resolveValue({ type: "select" }, "form").variant, "select", "no options known");
  assert.equal(resolveValue({ semanticType: "honorific" }, "metric").variant, null, "a choice is not a metric");
});

t("option sets: tones fall back to the default tone map; a registry key wins over the type's options", () => {
  const set = optionSetFor({ semanticType: "status" });
  assert.equal(set.key, "workflow_status", "the published set (devops.option_sets) wins over the type's own options");
  assert.equal(set.kind, "status");
  assert.deepEqual(set.options.map((o) => [o.value, o.state, o.tone]), [["draft", "waiting", "amber"], ["active", "moving", "sky"], ["paused", "waiting", "amber"], ["archived", "ended", "neutral"]]);
  assert.equal(set.options[1].label, "Active");
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
  assert.equal(resolveValue({ semanticType: "fiat_amount" }, "cell").currencyFrom, "fiat_currency_code", "the type names the sibling that holds its currency");
  assert.match(resolveValue({ shape: "money" }, "cell").warnings[0], /currency/, "money with no currency and no source warns");
  assert.equal(resolveValue({ semanticType: "fiat_amount", currency: "USD" }, "metric").variant, "compact-delta");
  const q = resolveValue({ semanticType: "bitrate_kbps" }, "record");
  assert.equal(q.variant, "unit");
  assert.equal(q.unit, "kbps");
  assert.equal(q.align, "end");
  assert.equal(resolveValue({ semanticType: "quantity" }, "card").figures, null);
});

t("ratio: bar, text, ring; a target makes the metric a meter", () => {
  const f = { semanticType: "percentage" };
  assert.deepEqual(DRAWN_CONTEXTS.map((c) => resolveValue(f, c).variant), ["bar", "text", "ring", "ring", "range"]);
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

t("every variant is a Values part: its ID is in the Index, with the same name, in grid order", () => {
  const index = JSON.parse(readFileSync(new URL("../dist/full/index.json", import.meta.url), "utf8"));
  const val = index.families.find((f) => f.id === "VAL");
  assert.ok(val, "VAL is in dist/full/index.json (run the build)");
  // Shared variants (`of`) are the same part as their home shape's, so they are left out of the count.
  const ids = Object.values(rules.variants).flatMap((f) => Object.values(f.variants).filter((v) => !v.of).map((v) => v.id));
  assert.equal(new Set(ids).size, ids.length, "variant IDs are unique");
  assert.deepEqual(val.variants.map((v) => v.id), ids, "the Index has one part per variant, in display-rules.json order");
  for (const f of Object.values(rules.variants)) for (const v of Object.values(f.variants).filter((x) => !x.of)) {
    assert.ok(v.id.startsWith(f.group + "."), `${v.id} is in ${f.group}`);
    assert.equal(val.variants.find((x) => x.id === v.id).name, v.label, `${v.id} is named ${v.label}`);
  }
  assert.equal(resolveValue({ semanticType: "status" }, "cell").id, "VAL-1.1");
  assert.equal(resolveValue({ semanticType: "status" }, "record").id, "VAL-1.2");
});

t("published option sets: valid against the schema, every option type has one, states carry their tones (decision 7)", () => {
  const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
  const one = JSON.parse(readFileSync(join(root, "schema/option-set.schema.json"), "utf8"));
  ajv.addSchema(one, "option-set.schema.json");
  const check = (schema, data, what) => {
    const ok = ajv.validate(schema, data);
    assert.ok(ok, `${what}: ${ajv.errorsText()}`);
  };
  const published = JSON.parse(readFileSync(join(root, "schema/option-sets.json"), "utf8"));
  check(JSON.parse(readFileSync(join(root, "schema/option-sets.schema.json"), "utf8")), published, "schema/option-sets.json");
  check(JSON.parse(readFileSync(join(root, "schema/semantic-types.schema.json"), "utf8")), JSON.parse(readFileSync(join(root, "schema/semantic-types.json"), "utf8")), "schema/semantic-types.json");
  assert.equal(published.sets.length, 23);
  for (const type of types) if (["option", "options"].includes(type.display.shape)) assert.ok(optionSets[type.display.optionSet], `${type.key} has a published set`);
  for (const set of published.sets) for (const o of set.options) {
    if (set.kind === "status") assert.equal(o.tone, STATES[o.state], `${set.key}.${o.value}`);
    if (set.kind === "choice") assert.ok(o.tone && !["lime", "amber", "rose"].includes(o.tone) || set.ordinal, `${set.key}.${o.value} is toned with a hue no state uses`);
    if (set.kind === "code") assert.ok(!o.tone && set.generator, `${set.key} is a generated, untoned code set`);
  }
  assert.equal(resolveValue({ key: "size", optionSet: { kind: "choice", ordinal: true, options: ["s", "m", "l"] } }, "cell").row, "option.ordinal.few", "a field that brings a set is an option, never text (rule 2)");
  assert.equal(resolveValue({ key: "region", options: ["a", "b", "c", "d", "e", "f", "g", "h"] }, "form").variant, "select-search");
  // A status option's tone is its state's even when only the state is given.
  assert.equal(optionSetFor({ optionSet: { kind: "status", options: [{ value: "x", state: "failed" }] } }).options[0].tone, "rose");
});

t("priority is ordinal: a ramp in order, sorted by order, never status tones (decision 6)", () => {
  const cell = resolveValue({ semanticType: "priority" }, "cell");
  assert.equal(cell.row, "option.ordinal.few");
  assert.equal(cell.variant, "dot");
  assert.equal(cell.ramp, true);
  assert.equal(cell.sort, "order");
  assert.deepEqual(cell.optionSet.options.map((o) => [o.value, o.ramp, o.tone]), [["low", 1, "orange"], ["medium", 2, "orange"], ["high", 3, "orange"], ["urgent", 4, "orange"]]);
  assert.equal(rampOf(cell.optionSet, "high"), 3);
  assert.deepEqual(DRAWN_CONTEXTS.map((c) => resolveValue({ semanticType: "priority" }, c).variant), ["dot", "chip", "dot", "chip", "segmented"]);
  const life = resolveValue({ semanticType: "lifecycle_stage" }, "cell");
  assert.equal(life.row, "option.status", "an ordered status set keeps state tones");
  assert.equal(life.ramp, false);
  assert.equal(life.sort, "order");
  assert.equal(toneOf(life.optionSet, "building"), "sky");
  const css = readFileSync(join(root, "src/utilities/tone.css"), "utf8");
  for (let i = 1; i <= rules.ramp.steps; i++) assert.ok(css.includes(`[data-ramp="${i}"]`), `tone.css has ramp step ${i}`);
});

t("the nine types of decision 4 resolve where the Sheet puts them", () => {
  const sem = (k) => describeField({ semanticType: k });
  assert.deepEqual([sem("chain_id").shape, sem("chain_id").kind], ["number", "id"]);
  assert.equal(resolveValue({ semanticType: "chain_id" }, "cell").grouping, false, "chain_id has no thousands separators");
  assert.equal(resolveValue({ semanticType: "quantity" }, "cell").grouping, true);
  for (const k of ["slug", "computed_slug"]) assert.deepEqual([sem(k).shape, sem(k).kind], ["code", "id"], k);
  assert.deepEqual([sem("domain_name").shape, sem("domain_name").kind], ["link", "url"]);
  assert.equal(resolveValue({ semanticType: "domain_name" }, "cell").variant, "link");
  const dur = resolveValue({ semanticType: "duration_iso8601" }, "cell");
  assert.deepEqual([dur.shape, dur.row, dur.variant, dur.id, dur.group, dur.unit], ["number", "number.duration", "duration", "VAL-7.8", "VAL-7", "s"]);
  assert.equal(resolveValue({ semanticType: "duration_minutes" }, "form").variant, "duration-input");
  const gas = resolveValue({ semanticType: "gas_price" }, "record");
  assert.deepEqual([gas.shape, gas.kind, gas.unit, gas.currencyFrom, gas.warnings.length], ["money", "crypto", "gwei", "network_name", 0]);
  const btn = resolveValue({ semanticType: "computed_button" }, "cell");
  assert.deepEqual([btn.shape, btn.row, btn.variant, btn.id, btn.group], ["text", "text.action", "action", "VAL-9.5", "VAL-9"]);
  assert.deepEqual(btn.excluded, ["sort", "filter", "export"]);
  assert.equal(resolveValue({ semanticType: "computed_formula" }, "cell").shape, "text", "a formula with no result shape is text");
  const f = resolveValue({ semanticType: "computed_formula", resultShape: "money", currency: "USD" }, "cell");
  assert.deepEqual([f.shape, f.variant, f.formula, f.readOnly], ["money", "amount", true, true]);
  assert.match(resolveValue({ semanticType: "computed_formula", resultShape: "nope" }, "cell").warnings[0], /unknown result shape/);
  const wave = DRAWN_CONTEXTS.map((c) => resolveValue({ semanticType: "waveform_data" }, c));
  assert.deepEqual(wave.map((r) => r.variant), ["sparkline", "sparkline-last", "sparkline", "sparkline-last", "sparkline-last"], "a series is computed: the form shows its record variant");
  assert.equal(wave[4].readOnly, true);
  assert.deepEqual(wave.slice(0, 2).map((r) => [r.id, r.last]), [["VAL-6.5", false], ["VAL-6.5", true]]);
});

t("status in a table cell is dot and word; chip in record, card and board (decision 5)", () => {
  for (const k of ["status", "key_status", "transaction_status", "barcode_scan_status", "lifecycle_stage"]) {
    assert.equal(resolveValue({ semanticType: k }, "cell").variant, "dot", k);
    assert.equal(resolveValue({ semanticType: k }, "card").variant, "chip", k);
  }
  assert.match(rules.rules[0], /dot and word in a table cell/);
});

t("the text context: one plain string per value, none for a secret (decision 8)", () => {
  for (const type of types) {
    const r = resolveValue({ semanticType: type.key, currency: "USD" }, "text");
    assert.equal(r.id, null, type.key);
    if (type.display.kind === "secret") assert.equal(r.variant, null, `${type.key} has no text form`);
    else assert.ok(rules.textFormats[r.variant], `${type.key} text = ${r.variant}`);
  }
  assert.equal(resolveValue({ semanticType: "status" }, "text", "edit").mode, "read", "text is never edited");
  const cases = [
    [{ semanticType: "status" }, "active", "Active"],
    [{ semanticType: "tags" }, ["demo", "internal"], "demo, internal"],
    [{ semanticType: "priority" }, "urgent", "Urgent"],
    [{ semanticType: "fiat_amount", currency: "USD" }, 1250, "1,250.00 USD"],
    [{ semanticType: "fiat_amount" }, { amount: 12.5, currency: "EUR" }, "12.50 EUR"],
    [{ semanticType: "crypto_amount" }, { amount: 0.12345678, currency: "ETH" }, "0.12345678 ETH"],
    [{ semanticType: "gas_price" }, 31.5, "31.50 gwei"],
    [{ semanticType: "percentage" }, 42.5, "42.5%"],
    [{ semanticType: "duration_minutes" }, 514, "PT8H34M"],
    [{ semanticType: "duration_seconds" }, 90, "PT1M30S"],
    [{ semanticType: "duration_iso8601" }, 30840, "PT8H34M"],
    [{ semanticType: "duration_iso8601" }, "PT2H", "PT2H"],
    [{ semanticType: "chain_id" }, 11155111, "11155111"],
    [{ semanticType: "bitrate_kbps" }, 320, "320 kbps"],
    [{ semanticType: "date" }, "2026-11-27", "2026-11-27"],
    [{ semanticType: "time" }, "09:27:00", "09:27"],
    [{ semanticType: "updated_at" }, new Date("2026-11-14T22:01:00Z"), "2026-11-14T22:01:00Z"],
    [{ semanticType: "checkbox" }, false, "No"],
    [{ semanticType: "owner_reference", multiple: true }, [{ id: 1, label: "Maya Chen" }, { id: 2, label: "Sam Hale" }], "Maya Chen, Sam Hale"],
    [{ semanticType: "document_file", multiple: true }, [{ name: "Brief.pdf" }, { name: "Plan.docx" }], "Brief.pdf, Plan.docx"],
    [{ semanticType: "markdown" }, "**Ship** it, see [notes](https://example.com)", "Ship it, see notes"],
    [{ semanticType: "json_object" }, { a: 1 }, '{"a":1}'],
    [{ semanticType: "waveform_data" }, [3, 5, 8], "8"],
    [{ semanticType: "computed_button" }, "Open", "Open"],
    [{ semanticType: "title" }, null, ""],
  ];
  for (const [field, value, want] of cases) assert.equal(textOf(field, value), want, `${field.semanticType} ${JSON.stringify(value)}`);
  assert.equal(textOf({ semanticType: "api_key_secret_ref" }, "vault:abc"), null, "a secret has no text, export included");
  assert.equal(isoDuration(0), "PT0S");
  assert.equal(isoDuration(90061), "P1DT1H1M1S");
});

// —— W3: renderValue() and variants() (the surfaces draw from the contract) ——
t("every grid row lists choices for cell, record and card, the grid's own first, all of them its shape's variants", () => {
  for (const row of rules.grid) {
    for (const c of CHOICE_CONTEXTS) {
      const list = row.choices?.[c];
      assert.ok(Array.isArray(list), `${row.row} has choices.${c}`);
      if (list.length) assert.equal(list[0], row[c], `${row.row} ${c}: the grid's own variant comes first`);
      for (const v of list) assert.ok(rules.variants[row.shape].variants[v], `${row.row} ${c}: ${v} is a ${row.shape} variant`);
      for (const v of list) assert.ok(!rules.variants[row.shape].variants[v].editable, `${row.row} ${c}: ${v} is a read variant`);
    }
  }
});

t("variants(): the default first, none for a secret, none in metric or form, a meter only with a target", () => {
  const s = variants({ semanticType: "status" }, "cell");
  assert.deepEqual(s.map((v) => v.variant), ["dot", "chip"]);
  assert.ok(s[0].default && !s[1].default);
  assert.deepEqual(variants({ semanticType: "api_key_secret_ref" }, "cell"), []);
  assert.deepEqual(variants({ semanticType: "status" }, "metric"), []);
  assert.deepEqual(variants({ semanticType: "status" }, "form"), []);
  assert.ok(!variants({ semanticType: "percentage" }, "card").some((v) => v.variant === "meter"));
  const own = variants({ semanticType: "status", display: { cell: "chip" } }, "cell");
  assert.equal(own[0].variant, "chip", "a field's own variant is the default");
  for (const type of types) for (const c of CHOICE_CONTEXTS) for (const v of variants({ semanticType: type.key, currency: "USD" }, c)) assert.match(v.id ?? "", /^VAL-\d+\.\d+$/, `${type.key} ${c} ${v.variant}`);
});

t("renderValue(): every semantic type draws in every drawn context as the part resolveValue() names", () => {
  const sample = { option: "active", options: ["demo"], entity: { label: "Ava Mendes", key: "AM-1" }, money: 1250, ratio: 42, number: 12, series: [1, 3, 2], temporal: "2026-11-27", file: [{ name: "brief.pdf" }], link: "https://example.com", flag: true, prose: "Two\n\nparagraphs", text: "Line", code: "rc_01HF3K9ZQ4" };
  for (const type of types) {
    for (const c of DRAWN_CONTEXTS) {
      const field = { key: "f", label: "F", semanticType: type.key, currency: "USD" };
      const r = resolveValue(field, c);
      const html = renderValue(field, sample[type.display.shape], c, { now: new Date("2026-11-14T12:00") });
      if (!r.variant) { assert.equal(html, "", `${type.key} ${c} is left out`); continue; }
      const id = html.match(/data-fh="([^"]+)"/)?.[1];
      assert.equal(id, r.id ?? rules.variants[r.shape].variants[r.variant]?.id, `${type.key} ${c} draws ${r.variant}`);
      assert.ok(html.startsWith("<span class=\"fh-value") || html.startsWith("<div class=\"fh-value") || html.startsWith("<span class=\"fh-stack"), `${type.key} ${c} is a Values part`);
      assert.ok(!/fh-pill|fh-status\b/.test(html), `${type.key} ${c}: no private pill or status`);
    }
  }
});

t("renderValue(): the empty dash, a viewer's pick only when allowed, escaping, and the form's live controls", () => {
  const empty = renderValue({ semanticType: "status" }, null, "cell");
  assert.match(empty, /data-empty/);
  assert.match(empty, /—/);
  assert.match(renderValue({ semanticType: "status" }, "active", "cell", { variant: "chip" }), /data-fh="VAL-1\.2"/);
  assert.match(renderValue({ semanticType: "status" }, "active", "cell", { variant: "amount" }), /data-fh="VAL-1\.1"/, "a variant the grid does not allow is ignored");
  assert.ok(!renderValue({ semanticType: "short_text" }, "<b>x</b>", "cell").includes("<b>x</b>"), "values are escaped");
  assert.match(renderValue({ semanticType: "email", label: "Email" }, "a@b.co", "form"), /<input class="fh-input" type="email" value="a@b.co" name="undefined"|<input class="fh-input" type="email"/);
  assert.match(renderValue({ semanticType: "status", key: "s", label: "Status" }, "active", "form"), /<select class="fh-value__select" name="s" aria-label="Status">/);
  assert.match(renderValue({ semanticType: "date", overdue: true }, "2026-11-10", "cell", { now: new Date("2026-11-14T12:00") }), /data-fh="VAL-7\.6"[^>]*>.*4d overdue/);
  assert.match(renderValue({ type: "currency", currency: "USD" }, 4800, "cell", { cents: false }), />\$4,800</);
  assert.match(renderValue({ semanticType: "fiat_amount", currency: "USD" }, 4800, "record"), /\$4,800\.00<\/data><abbr class="fh-value__sub" title="US Dollar">USD/);
  assert.equal(renderValue({ semanticType: "api_key_secret_ref" }, "vault:abcd", "text"), "");
});

t("a rich record (application, organization, brand) draws its avatar beside its reference (VAL-3.12, decision 10)", () => {
  for (const entity of ["application", "organization", "brand"]) {
    const f = { key: "r", label: "Record", semanticType: "entity_reference", entity };
    assert.equal(resolveValue(f, "cell").variant, "avatar-ref", entity);
    const html = renderValue(f, { label: "Helm", initials: "HM", sidecar: "app-helm", href: "/apps/helm" }, "cell");
    assert.match(html, /data-fh="VAL-3\.12"><span class="fh-avatar fh-avatar--square"[^>]*>HM<\/span><a class="fh-ref" href="\/apps\/helm" data-sidecar="app-helm">/);
  }
  assert.equal(resolveValue({ semanticType: "entity_reference" }, "cell").variant, "ref", "a plain record stays a reference");
  assert.deepEqual(variants({ semanticType: "entity_reference", entity: "brand" }, "cell").map((v) => v.variant), ["avatar-ref", "ref", "ref-key", "name"]);
});

console.log(`values: ${n} checks passed`);
