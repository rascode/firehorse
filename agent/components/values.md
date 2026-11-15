# Values: how a value is drawn (data display contract)

One rulebook for drawing a single value (a status, a person, an amount, a file) the same way in every part
and from every endpoint. Plan: platform `relay/2026-11-14-data-display-contract-plan.md`.

- **Rules (machine):** `schema/display-rules.json` (`@rascode/firehorse/schema/display-rules.json`)
- **Function:** `resolveValue(field, context, mode)` in `@rascode/firehorse/values`
- **Field list:** `schema/semantic-types.json` (published from `devops.semantic_types`; every type has `display.shape`)
- **Shared shapes:** `schema/option-set.schema.json`, `schema/entity.schema.json`
- **Status:** contract only (wave W1). The Values family parts (VAL-1 to VAL-11) are wave W2; until then draw the
  part each variant is built from (the `parts` list).

## The four layers

```
endpoint ──► FIELD ──► RULE GRID ──► VALUE PART ──► SURFACE
             what the data is   what to draw here   how it looks   where it sits
```

1. **Field.** What the data is: a semantic type (or one of the datatable's 22 type names, kept as aliases),
   an option set, an entity kind. Endpoints send `fields` next to `rows`.
2. **Rule grid.** Shape (13) x context (5) gives a variant. Rows are matched in order; the first fits.
3. **Value part.** One Firehorse part per shape (the Values family, VAL), with read and edit states.
4. **Surface.** Datatable, table, record table, metric, card, sidecar, form. A surface never decides how a value
   looks; it calls `resolveValue` and draws what it gets.

## How to use it (agents)

```js
import { resolveValue } from "@rascode/firehorse/values";

const field = { key: "state", semanticType: "status", optionSet: "relay.status" };
const r = resolveValue(field, "cell");           // read in a datatable row
// r.variant  "dot"        what to draw
// r.parts    ["MRK"]      the Firehorse families it is built from
// r.optionSet.options     [{ value, label, tone }], tones filled from the default tone map
// r.align, r.figures, r.max, r.mono, r.empty, r.warnings

resolveValue(field, "form");                      // { variant: "select", editable: true }
resolveValue(field, "cell", "edit");              // { variant: "dot", editable: true, control: "select" }
```

Pick the context by where the value sits, never by how you want it to look:

| Context | Where |
|---|---|
| `cell` | a datatable or table row |
| `record` | a label and value row: sidecar, record table, review |
| `card` | gallery, board, tile |
| `metric` | the big figure |
| `form` | editing |

`variant: null` means the grid leaves that field out of that context (a description is not a metric): skip it.
Read `warnings`: an unknown semantic type, money without a currency, a refused override.

## Rules

<!-- rules:start -->
1. Status is a chip, once per row. The dot is for dense cells and prose only.
2. A value with options never renders as free text. If it has an option set, it gets an Option or Options part.
3. Numbers align right and use tabular figures in every cell and record row.
4. Money always knows its currency. Cents show in record and form; cells may round to whole units only when every row in the column does.
5. The field overrides the grid, the grid overrides the surface. A field may name a variant (display: { cell: "chip" }); a surface never can.
6. Editable is the same part with a chevron or a control, never a different-looking part. Read and edit share size, colour and position.
7. Empty is a muted em dash, never a blank cell or null.
<!-- rules:end -->

## The grid

<!-- grid:start -->
| Row | cell | record | card | metric | form | Group |
|---|---|---|---|---|---|---|
| option, status (toned) (Status is a chip once per row; the dot is for dense cells and prose only) | `dot` | `chip` | `chip` | `chip` | `select` | VAL-1 |
| option, 2 to 4 values | `chip` | `chip` | `chip` | · | `segmented` | VAL-1 |
| option, 8 or more values | `chip` | `chip` | `chip` | · | `select-search` | VAL-1 |
| option, 5 to 7 values (or unknown) (Not in the approved grid: fills the gap between 4 and 8 values) | `chip` | `chip` | `chip` | · | `select` | VAL-1 |
| options | `chips` +N after 3 | `chips-inline` | `chips` +N after 2 | `count` | `tag-field` | VAL-2 |
| entities (several) (Record context lists one per line) | `stack` +N after 4 | `avatar-name` | `stack` | `stack` | `picker-multi` | VAL-3 |
| entity, person or org | `avatar-name` | `full` | `chip` | `stack` | `picker` | VAL-3 |
| entity, record (The form picker row shows name and description) | `ref` | `ref-key` | `name` | · | `picker` | VAL-3 |
| money | `amount`, right | `amount-code`, right | `compact` | `compact-delta` | `money-input` | VAL-4 |
| ratio (Metric uses meter instead of ring when the field has a target) | `bar` | `text` | `ring` | `ring` | `range` | VAL-5 |
| number, series | `sparkline` | `sparkline` | `sparkline` | `sparkline` | · | VAL-6 |
| number | `plain`, right | `unit`, right | `plain` | `plain-delta` | `number-input` | VAL-6 |
| temporal, date | `date-relative` | `date` | `relative` | `relative` | `date-picker` | VAL-7 |
| temporal, time of day (Not in the approved grid: a time of day has no relative form) | `time` | `time` | `time` | · | `time-input` | VAL-7 |
| temporal, duration (Not in the approved grid: durations were an open item from the value inventory) | `duration` | `duration` | `duration` | `duration` | `duration-input` | VAL-7 |
| temporal, moment | `date-relative` | `datetime` | `relative` | `relative` | `date-picker` | VAL-7 |
| file | `type-chip` +N after 3 | `file-row` | `thumb` | `count` | `dropzone` | VAL-8 |
| link, email | `email` | `email` | `link-chip` | · | `email-input` | VAL-9 |
| link, phone | `phone` | `phone` | `link-chip` | · | `phone-input` | VAL-9 |
| link, action (computed button) (Not in the approved grid: computed_button is an action, not a value) | `action` | `action` | `action` | · | · | VAL-9 |
| link, URL | `link` | `link` | `link-chip` | · | `url-input` | VAL-9 |
| flag | `check` | `yes-no` | `yes-no` | `count` | `switch` | VAL-10 |
| prose | `clamp-2` | `full` | `clamp-3` | · | `textarea` | VAL-11 |
| code, secret (vault reference) (Not in the approved grid: credential types store a vault reference, never the value) | `masked` | `masked` | `masked` | · | `key-field` | VAL-11 |
| code, structured (JSON) (Not in the approved grid: JSON needs a block in the record) | `mono` | `code-block` | `mono` | · | `textarea-mono` | VAL-11 |
| code | `mono` | `copyable` | `mono` | · | `input-mono` | VAL-11 |
| text (Not in the approved grid (the plan's grid had no text row)) | `line` | `line` | `line` | · | `input` | VAL-11 |

`·` = not shown in that context. Variants and the parts each is built from:

| Group | Shape | Variants (parts) |
|---|---|---|
| VAL-1 Option | option | `dot` MRK · `chip` CHP, SCR · `chip-solid` CHP · `select` (edit) CHP, FLD · `segmented` (edit) SEG · `select-search` (edit) CHP, FLD |
| VAL-2 Options | options | `chips` CHP · `chips-inline` CHP · `count` · `tag-field` (edit) TAG |
| VAL-3 Entity | entity | `name` · `name-key` DET · `avatar-name` AVT · `avatar-name-description` AVT, ENT · `full` AVT, ENT · `chip` CHP, AVT · `stack` AVT · `ref` REF · `ref-key` REF · `picker` (edit) ENT · `picker-multi` (edit) ENT |
| VAL-4 Money | money | `amount` · `amount-code` · `compact` · `delta` · `compact-delta` · `money-input` (edit) FLD |
| VAL-5 Ratio | ratio | `text` · `bar` MET · `ring` FBK · `meter` MET, GAU · `range` (edit) UPL |
| VAL-6 Number | number | `plain` · `unit` · `delta` · `plain-delta` · `sparkline` MET · `number-input` (edit) FLD |
| VAL-7 Temporal | temporal | `date` · `date-relative` · `relative` · `datetime` · `range` · `overdue` · `time` · `duration` · `date-picker` (edit) FLD · `time-input` (edit) FLD · `duration-input` (edit) FLD |
| VAL-8 File | file | `type-chip` CHP · `thumb` THB · `thumbs` THB · `file-row` SFL · `count` · `dropzone` (edit) UPL |
| VAL-9 Link | link | `link` ACT · `email` ACT · `phone` ACT · `link-chip` CHP · `action` ACT · `url-input` (edit) FLD · `email-input` (edit) FLD · `phone-input` (edit) FLD |
| VAL-10 Flag | flag | `check` CHO · `yes-no` · `count` · `switch` (edit) CHO |
| VAL-11 Prose, text and code | prose | `clamp-2` · `clamp-3` · `full` · `textarea` (edit) FLD |
| VAL-11 Prose, text and code | text | `line` · `input` (edit) FLD |
| VAL-11 Prose, text and code | code | `mono` DET · `copyable` DET · `masked` DET · `code-block` DET · `input-mono` (edit) FLD · `textarea-mono` (edit) FLD · `key-field` (edit) KEY |
<!-- grid:end -->

## Fields

A field is what an endpoint sends for each column. Only `semanticType` (or a datatable `type`) is needed;
everything else narrows it.

| Key | Meaning |
|---|---|
| `semanticType` | a `devops.semantic_types` key; decides the shape |
| `type` | one of the datatable's 22 names; an alias for a semantic type (see below) |
| `shape`, `kind` | set only when no semantic type fits |
| `entity` | `person`, `org` or `record` for the entity shape |
| `multiple` | several values: options, entities (stack), files |
| `optionSet` | a key (`relay.status`) or an option set object; else `options`, else the semantic type's own options |
| `currency` | always for money (rule 4) |
| `unit` | overrides the semantic type's unit |
| `target` | a ratio with a target is a meter in a metric |
| `readOnly` | computed and system types are read-only already |
| `display` | `{ cell: "chip" }`: the field names a variant for a context; it must be a variant of its shape |

An **option set** is `{ key, label?, kind: "status" | "choice", ordinal?, options: [{ value, label?, tone?, icon?, description?, live? }] }`.
A value with no tone takes the default tone map (the Status chip's words): done lime, moving sky, waiting amber,
failed rose, finished neutral.

An **entity** is `{ id, kind?, label, description?, image?, initials?, tone?, key?, href?, sidecar?, stat? }`.
Every relation cell and picker row reads this object and shows as much as its variant allows.

## Datatable type aliases

<!-- aliases:start -->
| Datatable type | Semantic type | Shape | Note |
|---|---|---|---|
| `text` | `short_text` | text |  |
| `long` | `long_text` | prose |  |
| `number` | `number_(decimal)` | number |  |
| `currency` | `fiat_amount` | money |  |
| `percent` | `percentage` | ratio |  |
| `progress` | `percentage` | ratio | keeps bar in cell, bar in record |
| `select` | · | option |  |
| `status` | `status` | option |  |
| `multi` | · | options |  |
| `tags` | `tags` | options |  |
| `date` | `date` | temporal |  |
| `check` | `checkbox` | flag |  |
| `rating` | · | ratio | No semantic type yet: a score out of 5. |
| `user` | `owner_reference` | entity |  |
| `users` | `owner_reference` | entity, several |  |
| `url` | `url` | link |  |
| `email` | `email` | link |  |
| `phone` | `phone_e164` | link |  |
| `link` | `entity_reference` | entity, several |  |
| `attachment` | `document_file` | file, several |  |
| `formula` | `computed_formula` | number |  |
| `sparkline` | · | number | No semantic type yet: a list of numbers. |
<!-- aliases:end -->

## Semantic types by shape

<!-- types:start -->
| Shape | Kind | Semantic types |
|---|---|---|
| text | · | `city`, `computed_slug`, `display_name`, `family_name`, `first_name`, `full_name`, `given_name`, `initials`, `last_name`, `legal_name`, `middle_name`, `nickname`, `postal_code`, `preferred_name`, `query`, `short_text`, `slug`, `street_address`, `title`, `username` |
| text | domain | `domain_name` |
| prose | markdown | `markdown` |
| prose | plain | `description`, `long_text`, `transcript` |
| prose | rich | `rich_text` |
| number | coordinate | `latitude` (°), `longitude` (°) |
| number | count | `block_number`, `channels`, `gas_used`, `nonce`, `number_(whole)`, `quantity`, `sort_order` |
| number | duration | `duration_minutes` (min), `duration_seconds` (s) |
| number | formula | `computed_formula` |
| number | measure | `bitrate_kbps` (kbps), `gas_price` (gwei), `number_(decimal)`, `sample_rate_hz` (Hz) |
| number | rollup | `computed_rollup` |
| number | series | `waveform_data` |
| money | crypto | `crypto_amount` |
| money | fiat | `fiat_amount` |
| ratio | percent | `percentage` |
| temporal | date | `date` |
| temporal | datetime | `created_at`, `deleted_at`, `local_datetime`, `system_created_time`, `system_modified_time`, `timestamp`, `updated_at` |
| temporal | duration | `duration_iso8601` |
| temporal | time | `time` |
| option | choice | `barcode_format`, `codec`, `country_code`, `crypto_currency_code`, `fiat_currency_code`, `honorific`, `language_code`, `media_format`, `mime_type`, `name_prefix`, `name_suffix`, `nationality_code`, `network_name`, `pronouns`, `state_region_code`, `timezone_id`, `token_standard` |
| option | status | `barcode_scan_status`, `key_status`, `lifecycle_stage`, `priority`, `status`, `transaction_status` |
| options | choice | `tags` |
| entity | person | `owner_reference` |
| entity | record | `computed_lookup`, `entity_reference`, `parent_reference` |
| file | document | `document_file` |
| file | image | `barcode_image_asset`, `image_asset` |
| file | media | `media_file` |
| link | action | `computed_button` |
| link | email | `email` |
| link | phone | `phone_e164` |
| link | url | `url` |
| flag | · | `checkbox` |
| code | address | `btc_wallet_address`, `eth_wallet_address`, `public_key`, `smart_contract_address`, `sol_wallet_address`, `token_contract_address`, `wallet_address` |
| code | hash | `block_hash`, `permaweb_data_hash`, `transaction_hash`, `wallet_signature` |
| code | id | `assigned_id`, `chain_id`, `external_id`, `qr_payload`, `short_code`, `system_id`, `system_uuid`, `token_id` |
| code | identifier | `barcode_value`, `duns_number`, `ein`, `gtin`, `isbn_10`, `isbn_13`, `tax_id_number`, `vat_number` |
| code | json | `barcode_metadata`, `json_object` |
| code | secret | `access_token_ref`, `api_key_secret_ref`, `private_key_ref`, `secret_key_ref` |
<!-- types:end -->
