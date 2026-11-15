# Values: how a value is drawn (data display contract)

One rulebook for drawing a single value (a status, a person, an amount, a file) the same way in every part
and from every endpoint. Plan: platform `relay/2026-11-14-data-display-contract-plan.md`.

- **Rules (machine):** `schema/display-rules.json` (`@rascode/firehorse/schema/display-rules.json`)
- **Function:** `resolveValue(field, context, mode)` and `textOf(field, value)` in `@rascode/firehorse/values`
- **Field list:** `schema/semantic-types.json` (published from `devops.semantic_types`; every type has `display.shape`, and `display.optionSet` for options)
- **Option sets:** `schema/option-sets.json` (published from `devops.option_sets`, migration 435), one entry per set, checked by `schema/option-sets.schema.json`
- **Shared shapes:** `schema/option-set.schema.json`, `schema/entity.schema.json`
- **Parts:** the Values family, VAL-1 to VAL-11 (wave W2): one part per variant, `r.id` names it (`VAL-1.1`).
  Specimen: https://firehorse.rascode.dev/data/values/ (held until Helm makes VAL live). CSS: `src/components/data/values.css`.

## The four layers

```
endpoint ──► FIELD ──► RULE GRID ──► VALUE PART ──► SURFACE
             what the data is   what to draw here   how it looks   where it sits
```

1. **Field.** What the data is: a semantic type (or one of the datatable's 22 type names, kept as aliases),
   an option set, an entity kind. Endpoints send `fields` next to `rows`.
2. **Rule grid.** Shape (14) x context (6) gives a variant. Rows are matched in order; the first fits. The sixth
   context, `text`, is never drawn: it names the plain string the value becomes (`textOf`).
3. **Value part.** One Firehorse part per shape (the Values family, VAL), with read and edit states.
4. **Surface.** Datatable, table, record table, metric, card, sidecar, form. A surface never decides how a value
   looks; it calls `resolveValue` and draws what it gets.

## How to use it (agents)

```js
import { resolveValue } from "@rascode/firehorse/values";

const field = { key: "state", semanticType: "status", optionSet: "relay.status" };
const r = resolveValue(field, "cell");           // read in a datatable row
// r.variant  "dot"        what to draw
// r.id       "VAL-1.1"    the Values part to copy (see Parts below)
// r.parts    ["MRK"]      the Firehorse families it is built from
// r.optionSet.options     [{ value, label, tone }], tones filled from the default tone map
// r.align, r.figures, r.max, r.mono, r.empty, r.warnings

resolveValue(field, "form");                      // { variant: "select", editable: true }
resolveValue(field, "cell", "edit");              // { variant: "dot", editable: true, control: "select" }
textOf(field, "active");                          // "Active": CSV export, aria-label, copy and search
```

Pick the context by where the value sits, never by how you want it to look:

| Context | Where |
|---|---|
| `cell` | a datatable or table row |
| `record` | a label and value row: sidecar, record table, review |
| `card` | gallery, board, tile |
| `metric` | the big figure |
| `form` | editing |
| `text` | never drawn: the plain string for CSV export, `aria-label`, copy and search. `variant` is a text format (`rules.textFormats`), `null` for a secret, which has no text form, export included |

`variant: null` means the grid leaves that field out of that context (a description is not a metric): skip it.
Read `warnings`: an unknown semantic type, money without a currency, a refused override.

## Rules

<!-- rules:start -->
1. Status is dot and word in a table cell, and a chip in a record, card and board.
2. A value with options never renders as free text. If it has an option set, it gets an Option or Options part.
3. Numbers align left like every other value (Rascode 2026-11-15) and use tabular figures in every cell and record row.
4. Money always knows its currency. Cents show in record and form; cells may round to whole units only when every row in the column does.
5. The field overrides the grid, the grid overrides the surface. A field may name a variant (display: { cell: "chip" }); a surface never can.
6. Editable is the same part with a chevron or a control, never a different-looking part. Read and edit share size, colour and position.
7. Empty is a muted em dash, never a blank cell or null.
8. An ordinal set sorts by its order, never the alphabet, and draws its tones as a ramp in that order. Status tones are for states only.
9. Option sets are data: a field points at its set (devops.option_sets, published as schema/option-sets.json). A status option's tone is its state's: done lime, moving sky, waiting amber, failed rose, ended neutral.
10. Every value has a text form, the plain string for CSV export, aria-label, copy and search. A secret has none, export included.
11. A viewer may re-display a column with the variants its grid row lists under choices, and nothing else; a secret offers none. The metric and form contexts offer no choice.
12. A record with its own logo or icon (an application, an organization, a brand, an AI model) draws its avatar beside its reference, in cells, records, cards and summary tiles: the square avatar, or its initials, then the link that opens it.
<!-- rules:end -->

## The grid

<!-- grid:start -->
| Row | cell | record | card | metric | form | text | Group |
|---|---|---|---|---|---|---|---|
| option, ordinal, 2 to 4 values (Priority is ordinal: a tone ramp in order, low to urgent, sorted by option order (decision 6)) | `dot` | `chip` | `dot` | `chip` | `segmented` | `label` | VAL-1 |
| option, ordinal (Priority is ordinal: a tone ramp in order, low to urgent, sorted by option order (decision 6)) | `dot` | `chip` | `dot` | `chip` | `select` | `label` | VAL-1 |
| option, status (toned) (Dot and word in a table cell; chip in record, card and board (decision 5)) | `dot` | `chip` | `chip` | `chip` | `select` | `label` | VAL-1 |
| option, generated code set (A code set (countries, currencies, zones) is generated from a standard, so its form always searches (decision 7)) | `chip` | `chip` | `chip` | · | `select-search` | `value` | VAL-1 |
| option, 2 to 4 values | `chip` | `chip` | `chip` | · | `segmented` | `label` | VAL-1 |
| option, 8 or more values | `chip` | `chip` | `chip` | · | `select-search` | `label` | VAL-1 |
| option, 5 to 7 values (or unknown) (Not in the approved grid: fills the gap between 4 and 8 values) | `chip` | `chip` | `chip` | · | `select` | `label` | VAL-1 |
| options | `chips` +N after 3 | `chips-inline` | `chips` +N after 2 | `count` | `tag-field` | `labels` | VAL-2 |
| entities (several) (Record context lists one per line, faces at the inline size with the hairline; the form picker shows the stack and a count (6 people), never a truncated name. A stack shows 3 faces, then +N, in every context (DR2)) | `stack` +N after 3 | `avatar-name` +N after 3 | `stack` +N after 3 | `stack` +N after 3 | `picker-multi` +N after 3 | `names` | VAL-3 |
| entity, person or org (One person is one face: avatar and name in a metric, never a stack (DR2)) | `avatar-name` | `full` | `chip` | `avatar-name` | `picker` | `name` | VAL-3 |
| entity, rich record (application, organization, brand, AI model, agent) (A record with its own logo or icon (an application, an organization such as Claude's maker, a brand, an AI model) draws its avatar (or initials) beside its reference in every context, summary tiles included (decision 10, Rascode 2026-11-14)) | `avatar-ref` | `avatar-ref` | `avatar-ref` | `avatar-ref` | `picker` | `name` | VAL-3 |
| entity, record (The form picker row shows name and description) | `ref` | `ref-key` | `name` | · | `picker` | `name` | VAL-3 |
| money | `amount` | `amount-code` | `compact` | `compact-delta` | `money-input` | `amount-code` | VAL-4 |
| ratio (Metric uses meter instead of ring when the field has a target) | `bar` | `text` | `ring` | `ring` | `range` | `percent` | VAL-5 |
| series (Series is the 14th shape: a sparkline, and with its last value in record and metric (decision 4)) | `sparkline` | `sparkline-last` | `sparkline` | `sparkline-last` | · | `last` | VAL-6 |
| number, duration (Durations are numbers drawn 8h 34m; duration_iso8601 is read as seconds (decision 4)) | `duration` | `duration` | `duration` | `duration` | `duration-input` | `iso-duration` | VAL-6 |
| number, identifier (An identifier-like number (chain_id) shows its digits without thousands separators (decision 4)) | `plain` | `plain` | `plain` | · | `number-input` | `digits` | VAL-6 |
| number | `plain` | `unit` | `plain` | `plain-delta` | `number-input` | `number-unit` | VAL-6 |
| temporal, date | `date-relative` | `date` | `relative` | `relative` | `date-picker` | `iso-date` | VAL-7 |
| temporal, time of day (Not in the approved grid: a time of day has no relative form) | `time` | `time` | `time` | · | `time-input` | `time` | VAL-7 |
| temporal, moment | `date-relative` | `datetime` | `relative` | `relative` | `date-picker` | `iso-datetime` | VAL-7 |
| images, several | `thumbs` +N after 3 | `gallery` | `media-badge` | `count` | `dropzone` | `file-names` | VAL-8 |
| image | `thumb` | `preview` | `media` | `thumb` | `dropzone` | `file-names` | VAL-8 |
| document | `doc-cell` | `doc-portrait` | `doc-portrait` | `count` | `dropzone` | `file-names` | VAL-8 |
| file | `type-chip` +N after 3 | `file-row` | `thumb` | `count` | `dropzone` | `file-names` | VAL-8 |
| link, email | `email` | `email` | `link-chip` | · | `email-input` | `value` | VAL-9 |
| link, phone | `phone` | `phone` | `link-chip` | · | `phone-input` | `value` | VAL-9 |
| link, URL | `link` | `link` | `link-chip` | · | `url-input` | `value` | VAL-9 |
| flag | `check` | `yes-no` | `yes-no` | `count` | `switch` | `yes-no` | VAL-10 |
| prose | `clamp-2` | `full` | `clamp-3` | · | `textarea` | `plain` | VAL-11 |
| code, secret (vault reference) (Not in the approved grid: credential types store a vault reference, never the value) | `masked` | `masked` | `masked` | · | `key-field` | · | VAL-11 |
| code, structured (JSON) (Not in the approved grid: JSON needs a block in the record) | `mono` | `code-block` | `mono` | · | `textarea-mono` | `json` | VAL-11 |
| code, git branch | `branch` | `branch` | `branch` | · | `input-mono` | `value` | VAL-11 |
| code, file path | `path` | `path-copy` | `path` | · | `input-mono` | `value` | VAL-11 |
| code | `mono` | `copyable` | `mono` | · | `input-mono` | `value` | VAL-11 |
| text, action (computed button) (computed_button is text / action: an action renderer, left out of sort, filter and export (decision 4)) | `action` | `action` | `action` | · | · | `label` | VAL-11 |
| text (Not in the approved grid (the plan's grid had no text row)) | `line` | `line` | `line` | · | `input` | `value` | VAL-11 |

`·` = not shown in that context. Variants and the parts each is built from:

| Group | Shape | Variants (parts) |
|---|---|---|
| VAL-1 Option | option | `dot` MRK · `chip` CHP, SCR · `chip-solid` CHP · `select` (edit) CHP, FLD · `segmented` (edit) SEG · `select-search` (edit) CHP, FLD · `cube` CUB |
| VAL-2 Options | options | `chips` CHP · `chips-inline` CHP · `count` · `tag-field` (edit) TAG |
| VAL-3 Entity | entity | `name` · `name-key` DET · `avatar-name` AVT · `avatar-name-description` AVT, ENT · `full` AVT, ENT · `chip` CHP, AVT · `stack` AVT · `ref` REF · `ref-key` REF · `picker` (edit) ENT · `picker-multi` (edit) ENT · `avatar-ref` AVT, REF · `cube` CUB |
| VAL-4 Money | money | `amount` · `amount-code` · `compact` · `delta` · `compact-delta` · `money-input` (edit) FLD · `cube` CUB |
| VAL-5 Ratio | ratio | `text` · `bar` MET · `ring` FBK · `meter` MET, GAU · `range` (edit) UPL |
| VAL-6 Number | number | `plain` · `unit` · `delta` · `plain-delta` · `sparkline` MET · `number-input` (edit) FLD · `duration` · `duration-input` (edit) FLD · `cube` CUB |
| VAL-6 Number | series | `sparkline` MET · `sparkline-last` MET |
| VAL-7 Temporal | temporal | `date` · `date-relative` · `relative` · `datetime` · `range` · `overdue` · `time` · `duration` · `date-picker` (edit) FLD · `time-input` (edit) FLD · `duration-input` (edit) FLD |
| VAL-8 File | file | `type-chip` CHP · `thumb` THB · `thumbs` THB · `file-row` SFL · `count` · `dropzone` (edit) UPL · `preview` THB, SFL · `gallery` THB · `media` THB · `media-badge` THB · `doc-cell` CHP, THB · `doc-portrait` THB |
| VAL-9 Link | link | `link` ACT · `email` ACT · `phone` ACT · `link-chip` CHP · `action` ACT · `url-input` (edit) FLD · `email-input` (edit) FLD · `phone-input` (edit) FLD |
| VAL-10 Flag | flag | `check` CHO · `yes-no` · `count` · `switch` (edit) CHO |
| VAL-11 Prose, text and code | prose | `clamp-2` · `clamp-3` · `full` · `textarea` (edit) FLD |
| VAL-11 Prose, text and code | text | `line` · `input` (edit) FLD · `action` ACT |
| VAL-11 Prose, text and code | code | `mono` DET · `copyable` DET · `masked` DET · `code-block` DET · `input-mono` (edit) FLD · `textarea-mono` (edit) FLD · `key-field` (edit) KEY · `branch` DET · `path` DET · `path-copy` DET |
<!-- grid:end -->

## Fields

A field is what an endpoint sends for each column. Only `semanticType` (or a datatable `type`) is needed;
everything else narrows it.

| Key | Meaning |
|---|---|
| `semanticType` | a `devops.semantic_types` key; decides the shape |
| `type` | one of the datatable's 22 names; an alias for a semantic type (see below) |
| `shape`, `kind` | set only when no semantic type fits |
| `entity` | `person`, `org` or `record` for the entity shape; `application`, `organization`, `brand`, `model` or `agent` for a rich record |
| `multiple` | several values: options, entities (stack), files |
| `optionSet` | a key (`relay.status`) or an option set object; else `options`, else the semantic type's own options |
| `currency` | for money (rule 4), unless the type names the sibling that holds it (`currencyFrom`: `fiat_currency_code`, `network_name` …) |
| `resultShape` | for `computed_formula`: the shape its formula returns, set per column (`devops.column_semantic_types.display_result_shape`); text when unset |
| `unit` | overrides the semantic type's unit |
| `target` | a ratio with a target is a meter in a metric |
| `readOnly` | computed and system types are read-only already |
| `display` | `{ cell: "chip" }`: the field names a variant for a context; it must be a variant of its shape |

An **entity** is `{ id, label, kind?, description?, image?, initials?, tone?, key?, href?, sidecar?, stat?, fallback? }`.
`fallback` is the avatar cascade: `{ image?, label?, fallback? }`. An entity with no `image` draws the first image
down its fallback chain, then its initials. A model with no mark of its own names its family, and the family names
its platform: `{ label: "Claude Opus 5.5", kind: "model", fallback: { label: "Claude", fallback: { label: "Claude Code CLI", image: "/marks/cli.svg" } } }`
draws the platform's mark. `avatarImageOf(entity)` returns the image the avatar shows (`{ image, label }`, or
`null` for initials); `avatarMarkup()` and every VAL-3 variant use it.

**Branches and paths** (`code.branch`, `code.path`): a `git_branch` value draws the `git-branch` icon and the name
on one line (VAL-11.14 `branch`; it ends in an ellipsis, the full name is its title). A `file_path` value draws its
last two segments after `…/` (VAL-11.15 `path`, the full path is its title); in a record it adds the copyable's copy
control (VAL-11.16 `path-copy`), which copies the full path. Both are mono at the Value tier and type in `input-mono`.

An **option set** is `{ key, label?, kind: "status" | "choice" | "code", ordinal?, generator?, options: [{ value, label?, tone?, state?, icon?, description?, live? }] }`.
Sets are data (`devops.option_sets`): a semantic type names its set (`display.optionSet`), a field may name another.
A status option has a `state` from the five groups and takes its tone: done lime, moving sky, waiting amber,
failed rose, ended neutral. A choice option has its own tone (teal, violet, fuchsia, orange, accent: hues no
state uses). A code set (countries, currencies, zones) is generated from a standard (`generator`) and untoned.
An ordinal choice set (priority) draws as a ramp of one hue in its order: each option gets `ramp` 1 to 4, drawn
with `data-ramp` (`utilities/tone.css`), and sorts by its order (`r.sort === "order"`). A value with no set and
no tone takes the default tone map (the Status chip's words).

## Option sets

<!-- option-sets:start -->
| Set | Kind | Used by | Options (state or tone) |
|---|---|---|---|
| `barcode_format` Barcode format | choice | `barcode_format` | `qr` teal, `ean13` violet, `ean8` fuchsia, `code128` orange, `upc` accent |
| `codec` Codec | choice | `codec` | `h264` teal, `aac` violet, `opus` fuchsia, `vp9` orange, `flac` accent |
| `crypto_currency` Crypto currency | code, generated (crypto_ticker; samples) | `crypto_currency_code` | `BTC`, `ETH`, `SOL` |
| `honorific` Honorific | choice | `honorific` | `Mx` teal, `Ms` violet, `Mr` fuchsia, `Dr` orange |
| `iana_timezone` Timezone | code, generated (iana_tz; samples) | `timezone_id` | `America/New_York`, `America/Los_Angeles`, `Europe/London`, `UTC` |
| `iso_country` Country | code, generated (iso_3166_1_alpha2; samples) | `country_code`, `nationality_code` | `US`, `GB`, `CA`, `DE`, `FR`, `JP`, `MX`, `BR` |
| `iso_currency` Currency | code, generated (iso_4217; samples) | `fiat_currency_code` | `USD`, `EUR`, `GBP`, `JPY`, `CAD`, `AUD`, `CHF` |
| `iso_language` Language | code, generated (iso_639_1; samples) | `language_code` | `en`, `es`, `fr`, `de`, `pt`, `ja` |
| `key_status` Key status | status | `key_status` | `active` done, `rotated` ended, `revoked` failed |
| `lifecycle_stage` Lifecycle stage | status, ordinal | `lifecycle_stage` | `idea` waiting, `planned` waiting, `building` moving, `live` done, `sunset` ended |
| `media_format` Media format | choice | `media_format` | `image` teal, `audio` violet, `video` fuchsia, `document` orange |
| `mime_type` MIME type | code, generated (iana_media_types; samples) | `mime_type` | `image/jpeg`, `image/png`, `image/webp`, `application/pdf`, `text/plain`, `audio/mpeg`, `video/mp4` |
| `name_prefix` Name prefix | choice | `name_prefix` | `Mx` teal, `Dr` violet |
| `name_suffix` Name suffix | choice | `name_suffix` | `Jr` teal, `Sr` violet, `III` fuchsia |
| `network` Network | choice | `network_name` | `ethereum` teal, `polygon` violet, `solana` fuchsia, `bitcoin` orange |
| `priority` Priority | choice, ordinal | `priority` | `low` orange, `medium` orange, `high` orange, `urgent` orange · ramp in this order |
| `pronouns` Pronouns | choice | `pronouns` | `she/her` teal, `he/him` violet, `they/them` fuchsia |
| `scan_status` Scan status | status | `barcode_scan_status` | `unread` waiting, `read` done, `rejected` failed |
| `tags` Tags | choice | `tags` | `demo` teal, `featured` violet, `internal` fuchsia |
| `token_standard` Token standard | choice | `token_standard` | `erc20` teal, `erc721` violet, `erc1155` fuchsia |
| `transaction_status` Transaction status | status | `transaction_status` | `pending` moving, `confirmed` done, `failed` failed |
| `us_state` US state | code, generated (usps_state; samples) | `state_region_code` | `OR`, `CA`, `NY`, `TX`, `WA` |
| `workflow_status` Workflow status | status | `status` | `draft` waiting, `active` moving, `paused` waiting, `archived` ended |
<!-- option-sets:end -->

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
| `attachment` | `image_asset` | file, several |  |
| `image` | `image_asset` | file |  |
| `images` | `image_asset` | file, several |  |
| `document` | `document_file` | file |  |
| `formula` | `computed_formula` | text |  |
| `sparkline` | · | series | No semantic type yet: a list of numbers. |
<!-- aliases:end -->

## Semantic types by shape

<!-- types:start -->
| Shape | Kind | Semantic types |
|---|---|---|
| text | · | `city`, `display_name`, `family_name`, `first_name`, `full_name`, `given_name`, `initials`, `last_name`, `legal_name`, `middle_name`, `nickname`, `postal_code`, `preferred_name`, `query`, `short_text`, `street_address`, `title`, `username` |
| text | action | `computed_button` |
| text | formula | `computed_formula` |
| prose | markdown | `markdown` |
| prose | plain | `description`, `long_text`, `transcript` |
| prose | rich | `rich_text` |
| number | coordinate | `latitude` (°), `longitude` (°) |
| number | count | `block_number`, `channels`, `gas_used`, `nonce`, `number_(whole)`, `quantity`, `sort_order` |
| number | duration | `duration_iso8601` (s), `duration_minutes` (min), `duration_seconds` (s) |
| number | id | `chain_id` |
| number | measure | `bitrate_kbps` (kbps), `number_(decimal)`, `sample_rate_hz` (Hz) |
| number | rollup | `computed_rollup` |
| money | crypto | `crypto_amount`, `gas_price` (gwei) |
| money | fiat | `fiat_amount` |
| ratio | percent | `percentage` |
| temporal | date | `date` |
| temporal | datetime | `created_at`, `deleted_at`, `local_datetime`, `system_created_time`, `system_modified_time`, `timestamp`, `updated_at` |
| temporal | time | `time` |
| option | choice | `barcode_format`, `codec`, `country_code`, `crypto_currency_code`, `fiat_currency_code`, `honorific`, `language_code`, `media_format`, `mime_type`, `name_prefix`, `name_suffix`, `nationality_code`, `network_name`, `pronouns`, `state_region_code`, `timezone_id`, `token_standard` |
| option | ordinal | `priority` |
| option | status | `barcode_scan_status`, `key_status`, `lifecycle_stage`, `status`, `transaction_status` |
| options | choice | `tags` |
| entity | person | `owner_reference` |
| entity | record | `computed_lookup`, `entity_reference`, `parent_reference` |
| file | document | `document_file` |
| file | image | `barcode_image_asset`, `image_asset` |
| file | media | `media_file` |
| link | email | `email` |
| link | phone | `phone_e164` |
| link | url | `domain_name`, `url` |
| flag | · | `checkbox` |
| code | address | `btc_wallet_address`, `eth_wallet_address`, `public_key`, `smart_contract_address`, `sol_wallet_address`, `token_contract_address`, `wallet_address` |
| code | branch | `git_branch` |
| code | hash | `block_hash`, `permaweb_data_hash`, `transaction_hash`, `wallet_signature` |
| code | id | `assigned_id`, `computed_slug`, `external_id`, `qr_payload`, `short_code`, `slug`, `system_id`, `system_uuid`, `token_id` |
| code | identifier | `barcode_value`, `duns_number`, `ein`, `gtin`, `isbn_10`, `isbn_13`, `tax_id_number`, `vat_number` |
| code | json | `barcode_metadata`, `json_object` |
| code | path | `file_path` |
| code | secret | `access_token_ref`, `api_key_secret_ref`, `private_key_ref`, `secret_key_ref` |
| series | · | `waveform_data` |
<!-- types:end -->

## Parts

### VAL · Values

One part per variant in `schema/display-rules.json`: call `resolveValue(field, context, mode)`, take `r.id`, copy that part's markup and fill in the value. The root is `fh-value` plus `fh-value--<variant>`; the part inside is the existing Firehorse part the variant lists (chip, dot, avatar, entity row, reference, progress, ring, gauge, sparkline, field, tag field, check, switch, range, dropzone, files, key field). Never draw a look-alike.

Read and edit (rule 6): read is the value as drawn; edit is `data-mode="edit"` on the root, at the same size and position. A value chosen from a list keeps its part and adds `fh-value--chevron` and a control: `<select class="fh-value__select">` (options carry `data-tone`; `data-tone="option"` on the root recolours as it changes, no script), or `<button class="fh-value__trigger" popovertarget>` that opens the entity picker's list. Open, a select's list is the Menu (DRP-1.1 rows in the Rich frame, the check on the chosen option in its tone) where the browser has customizable select, and the native list elsewhere. The select with search (VAL-1.6) is `<input class="fh-value__select" type="search" list="…">` and its `<datalist>`: firehorse.js opens the same Menu as a listbox, filtered as you type (a combobox: arrows, Home, End, Enter, Escape), and without script the datalist opens as it is. A value you type becomes `<input class="fh-value__input">`. An editable variant (select, picker, the inputs, switch, dropzone) is the live control in edit and the same control, `readonly` or `disabled`, in read. Computed values (delta, sparkline, action, a flag count) stay as they are in edit.

Shared modifiers: `fh-value--end` when `r.align` is `end`, `fh-value--tabular` when `r.figures` is `tabular`, `fh-value--mono` when `r.mono`, `fh-value--lg` for the one size step. Empty (rule 7): `<span class="fh-value" data-empty><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>`. Over `r.max`, show the first `r.max` and a `fh-badge` with `+N`.

Every part below shows read, edit and `--lg`, in that order (generated from the Index).

<!-- parts:start -->
#### VAL-1 Option

`VAL-1.1` Dot and word · `option` `dot` · built from MRK

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--dot" data-tone="sky" data-fh="VAL-1.1"><span class="fh-dot"></span>running</span>
  <span class="fh-value fh-value--dot fh-value--chevron" data-mode="edit" data-tone="option" data-fh="VAL-1.1"><span class="fh-dot"></span><select class="fh-value__select" aria-label="Status"><option value="queued" data-tone="amber">queued</option><option value="running" data-tone="sky" selected>running</option><option value="merged" data-tone="lime">merged</option><option value="failed" data-tone="rose">failed</option><option value="archived" data-tone="neutral">archived</option></select></span>
  <span class="fh-value fh-value--dot fh-value--lg" data-tone="sky" data-fh="VAL-1.1"><span class="fh-dot"></span>running</span>
  <span class="fh-value" data-empty data-fh="VAL-1.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-1.2` Toned chip · `option` `chip` · built from CHP, SCR

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--chip" data-fh="VAL-1.2"><span class="fh-chip fh-chip--tone fh-chip--sm" data-status="merged">merged</span></span>
  <span class="fh-value fh-value--chip fh-value--chevron" data-mode="edit" data-tone="option" data-fh="VAL-1.2"><span class="fh-chip fh-chip--tone fh-chip--sm"><select class="fh-value__select" aria-label="Status"><option value="queued" data-tone="amber">queued</option><option value="running" data-tone="sky">running</option><option value="merged" data-tone="lime" selected>merged</option><option value="failed" data-tone="rose">failed</option><option value="archived" data-tone="neutral">archived</option></select></span></span>
  <span class="fh-value fh-value--chip fh-value--lg" data-fh="VAL-1.2"><span class="fh-chip fh-chip--tone" data-status="merged">merged</span></span>
</div>
```

`VAL-1.3` Solid chip · `option` `chip-solid` · built from CHP

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--chip-solid" data-fh="VAL-1.3"><span class="fh-chip fh-chip--solid fh-chip--sm" data-tone="amber">high</span></span>
  <span class="fh-value fh-value--chip-solid fh-value--chevron" data-mode="edit" data-tone="option" data-fh="VAL-1.3"><span class="fh-chip fh-chip--solid fh-chip--sm"><select class="fh-value__select" aria-label="Priority"><option value="low" data-tone="neutral">low</option><option value="medium" data-tone="sky">medium</option><option value="high" data-tone="amber" selected>high</option><option value="urgent" data-tone="rose">urgent</option></select></span></span>
  <span class="fh-value fh-value--chip-solid fh-value--lg" data-fh="VAL-1.3"><span class="fh-chip fh-chip--solid" data-tone="amber">high</span></span>
</div>
```

`VAL-1.4` Chip with chevron · `option` `select` · editable · built from CHP, FLD

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--select" data-mode="read" data-fh="VAL-1.4"><span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="sky">medium</span></span>
  <span class="fh-value fh-value--select fh-value--chevron" data-mode="edit" data-tone="option" data-fh="VAL-1.4"><span class="fh-chip fh-chip--tone fh-chip--sm"><select class="fh-value__select" aria-label="Priority"><option value="low" data-tone="neutral">low</option><option value="medium" data-tone="sky" selected>medium</option><option value="high" data-tone="amber">high</option><option value="urgent" data-tone="rose">urgent</option></select></span></span>
  <span class="fh-value fh-value--select fh-value--chevron fh-value--lg" data-mode="edit" data-tone="option" data-fh="VAL-1.4"><span class="fh-chip fh-chip--tone"><select class="fh-value__select" aria-label="Priority"><option value="low" data-tone="neutral">low</option><option value="medium" data-tone="sky" selected>medium</option><option value="high" data-tone="amber">high</option><option value="urgent" data-tone="rose">urgent</option></select></span></span>
</div>
```

`VAL-1.5` Segmented · `option` `segmented` · editable · built from SEG

```html
<div class="fh-stack">
  <div class="fh-value fh-value--segmented" data-mode="read" data-fh="VAL-1.5"><div class="fh-segment fh-segment--mode" role="group" aria-label="Billing"><button type="button" aria-pressed="false" disabled>Monthly</button><button type="button" aria-pressed="false" disabled>Quarterly</button><button type="button" aria-pressed="true" disabled>Annual</button></div></div>
  <div class="fh-value fh-value--segmented" data-mode="edit" data-fh="VAL-1.5"><div class="fh-segment fh-segment--mode" role="group" aria-label="Billing" onclick="const b = event.target.closest('button'); if (b && !b.disabled) for (const x of this.querySelectorAll('button')) x.setAttribute('aria-pressed', String(x === b))"><button type="button" aria-pressed="false">Monthly</button><button type="button" aria-pressed="false">Quarterly</button><button type="button" aria-pressed="true">Annual</button></div></div>
  <div class="fh-value fh-value--segmented fh-value--lg" data-mode="edit" data-fh="VAL-1.5"><div class="fh-segment fh-segment--mode fh-segment--lg" role="group" aria-label="Billing" onclick="const b = event.target.closest('button'); if (b && !b.disabled) for (const x of this.querySelectorAll('button')) x.setAttribute('aria-pressed', String(x === b))"><button type="button" aria-pressed="false">Monthly</button><button type="button" aria-pressed="false">Quarterly</button><button type="button" aria-pressed="true">Annual</button></div></div>
</div>
```

`VAL-1.6` Select with search · `option` `select-search` · editable · built from CHP, FLD

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--select-search" data-mode="read" data-fh="VAL-1.6"><span class="fh-chip fh-chip--sm" data-tone="teal">Healthcare</span></span>
  <span class="fh-value fh-value--select-search fh-value--chevron" data-mode="edit" data-fh="VAL-1.6"><span class="fh-chip fh-chip--sm" data-tone="teal"><input class="fh-value__select" type="search" list="val-dl-1" value="Healthcare" aria-label="Industry"></span><datalist id="val-dl-1"><option value="Agriculture"></option><option value="Construction"></option><option value="Education"></option><option value="Finance"></option><option value="Healthcare"></option><option value="Hospitality"></option><option value="Legal"></option><option value="Logistics"></option><option value="Manufacturing"></option><option value="Media"></option><option value="Nonprofit"></option><option value="Real estate"></option><option value="Retail"></option><option value="Software"></option></datalist></span>
  <span class="fh-value fh-value--select-search fh-value--chevron fh-value--lg" data-mode="edit" data-fh="VAL-1.6"><span class="fh-chip" data-tone="teal"><input class="fh-value__select" type="search" list="val-dl-2" value="Healthcare" aria-label="Industry"></span><datalist id="val-dl-2"><option value="Agriculture"></option><option value="Construction"></option><option value="Education"></option><option value="Finance"></option><option value="Healthcare"></option><option value="Hospitality"></option><option value="Legal"></option><option value="Logistics"></option><option value="Manufacturing"></option><option value="Media"></option><option value="Nonprofit"></option><option value="Real estate"></option><option value="Retail"></option><option value="Software"></option></datalist></span>
</div>
```

`VAL-1.7` Cube · `option` `cube` · built from CUB

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--cube" data-fh="VAL-1.7"><b class="fh-cube" data-tone="lime">Won</b></span>
  <span class="fh-value fh-value--cube" data-fh="VAL-1.7"><b class="fh-cube" data-tone="amber">Proposal</b></span>
  <span class="fh-value fh-value--cube" data-fh="VAL-1.7"><b class="fh-cube" data-tone="sky">Lead</b></span>
  <span class="fh-value fh-value--cube fh-value--lg" data-fh="VAL-1.7"><b class="fh-cube" data-tone="lime">Won</b></span>
</div>
```

#### VAL-2 Options

`VAL-2.1` Chips, +N after the limit · `options` `chips` · built from CHP

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--chips" data-fh="VAL-2.1"><span class="fh-chips"><span class="fh-chip fh-chip--sm" data-tone="sky">Email</span><span class="fh-chip fh-chip--sm" data-tone="teal">SMS</span><span class="fh-chip fh-chip--sm" data-tone="lime">WhatsApp</span></span><span class="fh-badge">+2</span></span>
  <span class="fh-value fh-value--chips" data-mode="edit" data-fh="VAL-2.1"><span class="fh-tags fh-tags--inline"><span class="fh-chip fh-chip--sm" data-tone="sky">Email <button class="fh-chip__remove" type="button" aria-label="Remove Email"></button></span><span class="fh-chip fh-chip--sm" data-tone="teal">SMS <button class="fh-chip__remove" type="button" aria-label="Remove SMS"></button></span><span class="fh-chip fh-chip--sm" data-tone="lime">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span><input aria-label="Add a channel" placeholder="Add a channel"></span></span>
  <span class="fh-value fh-value--chips fh-value--lg" data-fh="VAL-2.1"><span class="fh-chips"><span class="fh-chip" data-tone="sky">Email</span><span class="fh-chip" data-tone="teal">SMS</span><span class="fh-chip" data-tone="lime">WhatsApp</span></span><span class="fh-badge">+2</span></span>
  <span class="fh-value" data-empty data-fh="VAL-2.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-2.2` Chips, wrapping · `options` `chips-inline` · built from CHP

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--chips-inline" data-fh="VAL-2.2"><span class="fh-chips"><span class="fh-chip fh-chip--sm" data-tone="sky">Email</span><span class="fh-chip fh-chip--sm" data-tone="teal">SMS</span><span class="fh-chip fh-chip--sm" data-tone="lime">WhatsApp</span><span class="fh-chip fh-chip--sm" data-tone="violet">Messenger</span><span class="fh-chip fh-chip--sm" data-tone="orange">Voice</span></span></span>
  <span class="fh-value fh-value--chips-inline" data-mode="edit" data-fh="VAL-2.2"><span class="fh-tags fh-tags--inline"><span class="fh-chip fh-chip--sm" data-tone="sky">Email <button class="fh-chip__remove" type="button" aria-label="Remove Email"></button></span><span class="fh-chip fh-chip--sm" data-tone="teal">SMS <button class="fh-chip__remove" type="button" aria-label="Remove SMS"></button></span><span class="fh-chip fh-chip--sm" data-tone="lime">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span><span class="fh-chip fh-chip--sm" data-tone="violet">Messenger <button class="fh-chip__remove" type="button" aria-label="Remove Messenger"></button></span><span class="fh-chip fh-chip--sm" data-tone="orange">Voice <button class="fh-chip__remove" type="button" aria-label="Remove Voice"></button></span><input aria-label="Add a channel" placeholder="Add a channel"></span></span>
  <span class="fh-value fh-value--chips-inline fh-value--lg" data-fh="VAL-2.2"><span class="fh-chips"><span class="fh-chip" data-tone="sky">Email</span><span class="fh-chip" data-tone="teal">SMS</span><span class="fh-chip" data-tone="lime">WhatsApp</span><span class="fh-chip" data-tone="violet">Messenger</span><span class="fh-chip" data-tone="orange">Voice</span></span></span>
</div>
```

`VAL-2.3` Count (3 tags) · `options` `count`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--count fh-value--tabular" data-fh="VAL-2.3">5 channels</span>
  <span class="fh-value fh-value--count fh-value--tabular" data-mode="edit" data-fh="VAL-2.3"><button class="fh-value__trigger" type="button" popovertarget="val-list-3" aria-haspopup="listbox" aria-label="Channels: 5. Change" style="anchor-name: --val-list-3">5 channels</button><div class="fh-entity-picker__list" id="val-list-3" popover role="listbox" aria-label="Channels" aria-multiselectable="true" style="position-anchor: --val-list-3"><fieldset class="fh-entity-picker__group"><legend>Channels</legend><label class="fh-entity"><input type="checkbox" name="val-list-3" value="Email" checked><span class="fh-entity__who"><b>Email</b></span></label><label class="fh-entity"><input type="checkbox" name="val-list-3" value="SMS" checked><span class="fh-entity__who"><b>SMS</b></span></label><label class="fh-entity"><input type="checkbox" name="val-list-3" value="WhatsApp" checked><span class="fh-entity__who"><b>WhatsApp</b></span></label><label class="fh-entity"><input type="checkbox" name="val-list-3" value="Messenger" checked><span class="fh-entity__who"><b>Messenger</b></span></label><label class="fh-entity"><input type="checkbox" name="val-list-3" value="Voice" checked><span class="fh-entity__who"><b>Voice</b></span></label><label class="fh-entity"><input type="checkbox" name="val-list-3" value="Postal"><span class="fh-entity__who"><b>Postal</b></span></label></fieldset></div></span>
  <span class="fh-value fh-value--count fh-value--tabular fh-value--lg" data-fh="VAL-2.3">5 channels</span>
</div>
```

`VAL-2.4` Tag field · `options` `tag-field` · editable · built from TAG

```html
<div class="fh-stack">
  <div class="fh-value fh-value--tag-field fh-value--field" data-mode="read" data-fh="VAL-2.4"><div class="fh-tags"><span class="fh-chip" data-tone="sky">Email</span><span class="fh-chip" data-tone="teal">SMS</span><span class="fh-chip" data-tone="lime">WhatsApp</span></div></div>
  <div class="fh-value fh-value--tag-field fh-value--field" data-mode="edit" data-fh="VAL-2.4"><div class="fh-tags"><span class="fh-chip" data-tone="sky">Email <button class="fh-chip__remove" type="button" aria-label="Remove Email"></button></span><span class="fh-chip" data-tone="teal">SMS <button class="fh-chip__remove" type="button" aria-label="Remove SMS"></button></span><span class="fh-chip" data-tone="lime">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span><input aria-label="Add a channel" placeholder="Add a channel"></div></div>
  <div class="fh-value fh-value--tag-field fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-2.4"><div class="fh-tags"><span class="fh-chip" data-tone="sky">Email <button class="fh-chip__remove" type="button" aria-label="Remove Email"></button></span><span class="fh-chip" data-tone="teal">SMS <button class="fh-chip__remove" type="button" aria-label="Remove SMS"></button></span><span class="fh-chip" data-tone="lime">WhatsApp <button class="fh-chip__remove" type="button" aria-label="Remove WhatsApp"></button></span><input aria-label="Add a channel" placeholder="Add a channel"></div></div>
</div>
```

#### VAL-3 Entity

`VAL-3.1` Name · `entity` `name`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--name" data-fh="VAL-3.1"><span class="fh-value__name">Northwind Studio</span></span>
  <span class="fh-value fh-value--name" data-mode="edit" data-fh="VAL-3.1"><button class="fh-value__trigger" type="button" popovertarget="val-list-4" aria-haspopup="listbox" aria-label="Client: Northwind Studio. Change" style="anchor-name: --val-list-4"><span class="fh-value__name">Northwind Studio</span></button><div class="fh-entity-picker__list" id="val-list-4" popover role="listbox" aria-label="Clients" style="position-anchor: --val-list-4"><fieldset class="fh-entity-picker__group"><legend>Clients</legend><label class="fh-entity"><input type="radio" name="val-list-4" value="NW-204" checked><span class="fh-entity__who"><b>Northwind Studio</b><small>NW-204</small></span></label><label class="fh-entity"><input type="radio" name="val-list-4" value="HH-118"><span class="fh-entity__who"><b>Halcyon Health</b><small>HH-118</small></span></label><label class="fh-entity"><input type="radio" name="val-list-4" value="JL-077"><span class="fh-entity__who"><b>Juniper Labs</b><small>JL-077</small></span></label></fieldset></div></span>
  <span class="fh-value fh-value--name fh-value--lg" data-fh="VAL-3.1"><span class="fh-value__name">Northwind Studio</span></span>
  <span class="fh-value" data-empty data-fh="VAL-3.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-3.2` Name and key · `entity` `name-key` · built from DET

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--name-key" data-fh="VAL-3.2"><span class="fh-value__name">Northwind Studio</span><code class="fh-kbd">NW-204</code></span>
  <span class="fh-value fh-value--name-key" data-mode="edit" data-fh="VAL-3.2"><button class="fh-value__trigger" type="button" popovertarget="val-list-5" aria-haspopup="listbox" aria-label="Client: Northwind Studio, NW-204. Change" style="anchor-name: --val-list-5"><span class="fh-value__name">Northwind Studio</span><code class="fh-kbd">NW-204</code></button><div class="fh-entity-picker__list" id="val-list-5" popover role="listbox" aria-label="Clients" style="position-anchor: --val-list-5"><fieldset class="fh-entity-picker__group"><legend>Clients</legend><label class="fh-entity"><input type="radio" name="val-list-5" value="NW-204" checked><span class="fh-entity__who"><b>Northwind Studio</b><small>NW-204</small></span></label><label class="fh-entity"><input type="radio" name="val-list-5" value="HH-118"><span class="fh-entity__who"><b>Halcyon Health</b><small>HH-118</small></span></label><label class="fh-entity"><input type="radio" name="val-list-5" value="JL-077"><span class="fh-entity__who"><b>Juniper Labs</b><small>JL-077</small></span></label></fieldset></div></span>
  <span class="fh-value fh-value--name-key fh-value--lg" data-fh="VAL-3.2"><span class="fh-value__name">Northwind Studio</span><code class="fh-kbd">NW-204</code></span>
</div>
```

`VAL-3.3` Avatar and name · `entity` `avatar-name` · built from AVT

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--avatar-name" data-fh="VAL-3.3"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-value__name">Ava Mendes</span></span>
  <span class="fh-value fh-value--avatar-name" data-mode="edit" data-fh="VAL-3.3"><button class="fh-value__trigger" type="button" popovertarget="val-list-6" aria-haspopup="listbox" aria-label="Owner: Ava Mendes. Change" style="anchor-name: --val-list-6"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-value__name">Ava Mendes</span></button><div class="fh-entity-picker__list" id="val-list-6" popover role="listbox" aria-label="People" style="position-anchor: --val-list-6"><fieldset class="fh-entity-picker__group"><legend>People</legend><label class="fh-entity"><input type="radio" name="val-list-6" value="ava" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></label><label class="fh-entity"><input type="radio" name="val-list-6" value="mateo"><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Mateo Ruiz</b><small>Engineer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-6" value="eleanor"><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Eleanor Park</b><small>Producer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-6" value="ray"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ray Okafor</b><small>Account manager</small></span></label><label class="fh-entity"><input type="radio" name="val-list-6" value="isla"><span class="fh-avatar" data-kind="person"><img src="img/avatars/isla.webp" alt="Isla Brandt"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Isla Brandt</b><small>Finance</small></span></label></fieldset></div></span>
  <span class="fh-value fh-value--avatar-name fh-value--lg" data-fh="VAL-3.3"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-value__name">Ava Mendes</span></span>
</div>
```

`VAL-3.4` Avatar, name and description · `entity` `avatar-name-description` · built from AVT, ENT

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--avatar-name-description" data-fh="VAL-3.4"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></span>
  <span class="fh-value fh-value--avatar-name-description" data-mode="edit" data-fh="VAL-3.4"><button class="fh-value__trigger" type="button" popovertarget="val-list-7" aria-haspopup="listbox" aria-label="Owner: Ava Mendes, Design lead. Change" style="anchor-name: --val-list-7"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></button><div class="fh-entity-picker__list" id="val-list-7" popover role="listbox" aria-label="People" style="position-anchor: --val-list-7"><fieldset class="fh-entity-picker__group"><legend>People</legend><label class="fh-entity"><input type="radio" name="val-list-7" value="ava" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></label><label class="fh-entity"><input type="radio" name="val-list-7" value="mateo"><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Mateo Ruiz</b><small>Engineer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-7" value="eleanor"><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Eleanor Park</b><small>Producer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-7" value="ray"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ray Okafor</b><small>Account manager</small></span></label><label class="fh-entity"><input type="radio" name="val-list-7" value="isla"><span class="fh-avatar" data-kind="person"><img src="img/avatars/isla.webp" alt="Isla Brandt"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Isla Brandt</b><small>Finance</small></span></label></fieldset></div></span>
  <span class="fh-value fh-value--avatar-name-description fh-value--lg" data-fh="VAL-3.4"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></span>
</div>
```

`VAL-3.5` Full row · `entity` `full` · built from AVT, ENT

```html
<div class="fh-stack">
  <div class="fh-value fh-value--full" data-fh="VAL-3.5"><span class="fh-entity"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead · Northwind</small></span><span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span></span></div>
  <div class="fh-value fh-value--full" data-mode="edit" data-fh="VAL-3.5"><button class="fh-entity fh-value__trigger" type="button" popovertarget="val-list-8" aria-haspopup="listbox" aria-label="Owner: Ava Mendes. Change" style="anchor-name: --val-list-8"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead · Northwind</small></span><span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span></button><div class="fh-entity-picker__list" id="val-list-8" popover role="listbox" aria-label="People" style="position-anchor: --val-list-8"><fieldset class="fh-entity-picker__group"><legend>People</legend><label class="fh-entity"><input type="radio" name="val-list-8" value="ava" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></label><label class="fh-entity"><input type="radio" name="val-list-8" value="mateo"><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Mateo Ruiz</b><small>Engineer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-8" value="eleanor"><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Eleanor Park</b><small>Producer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-8" value="ray"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ray Okafor</b><small>Account manager</small></span></label><label class="fh-entity"><input type="radio" name="val-list-8" value="isla"><span class="fh-avatar" data-kind="person"><img src="img/avatars/isla.webp" alt="Isla Brandt"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Isla Brandt</b><small>Finance</small></span></label></fieldset></div></div>
  <div class="fh-value fh-value--full fh-value--lg" data-fh="VAL-3.5"><span class="fh-entity"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead · Northwind</small></span><span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span></span></div>
</div>
```

`VAL-3.6` Avatar chip · `entity` `chip` · built from CHP, AVT

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--chip" data-fh="VAL-3.6"><span class="fh-chip fh-chip--sm"><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span>Mateo Ruiz</span></span>
  <span class="fh-value fh-value--chip fh-value--chevron" data-mode="edit" data-fh="VAL-3.6"><button class="fh-value__trigger" type="button" popovertarget="val-list-9" aria-haspopup="listbox" aria-label="Assignee: Mateo Ruiz. Change" style="anchor-name: --val-list-9"><span class="fh-chip fh-chip--sm"><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span>Mateo Ruiz</span></button><div class="fh-entity-picker__list" id="val-list-9" popover role="listbox" aria-label="People" style="position-anchor: --val-list-9"><fieldset class="fh-entity-picker__group"><legend>People</legend><label class="fh-entity"><input type="radio" name="val-list-9" value="ava"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></label><label class="fh-entity"><input type="radio" name="val-list-9" value="mateo" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Mateo Ruiz</b><small>Engineer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-9" value="eleanor"><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Eleanor Park</b><small>Producer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-9" value="ray"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ray Okafor</b><small>Account manager</small></span></label><label class="fh-entity"><input type="radio" name="val-list-9" value="isla"><span class="fh-avatar" data-kind="person"><img src="img/avatars/isla.webp" alt="Isla Brandt"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Isla Brandt</b><small>Finance</small></span></label></fieldset></div></span>
  <span class="fh-value fh-value--chip fh-value--lg" data-fh="VAL-3.6"><span class="fh-chip"><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span>Mateo Ruiz</span></span>
</div>
```

`VAL-3.7` Avatar stack, +N · `entity` `stack` · built from AVT

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--stack" data-fh="VAL-3.7"><span class="fh-avatars" role="group" aria-label="Assignees: Ava, Mateo, Eleanor and 4 more"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-avatar fh-avatars__more" data-kind="person">+4</span></span></span>
  <span class="fh-value fh-value--stack" data-mode="edit" data-fh="VAL-3.7"><button class="fh-value__trigger" type="button" popovertarget="val-list-10" aria-haspopup="listbox" aria-label="Assignees: 7. Change" style="anchor-name: --val-list-10"><span class="fh-avatars" role="group" aria-label="Assignees: Ava, Mateo, Eleanor and 4 more"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-avatar fh-avatars__more" data-kind="person">+4</span></span></button><div class="fh-entity-picker__list" id="val-list-10" popover role="listbox" aria-label="People" aria-multiselectable="true" style="position-anchor: --val-list-10"><fieldset class="fh-entity-picker__group"><legend>People</legend><label class="fh-entity"><input type="checkbox" name="val-list-10" value="ava" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-10" value="mateo" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Mateo Ruiz</b><small>Engineer</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-10" value="eleanor" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Eleanor Park</b><small>Producer</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-10" value="ray" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ray Okafor</b><small>Account manager</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-10" value="isla"><span class="fh-avatar" data-kind="person"><img src="img/avatars/isla.webp" alt="Isla Brandt"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Isla Brandt</b><small>Finance</small></span></label></fieldset></div></span>
  <span class="fh-value fh-value--stack fh-value--lg" data-fh="VAL-3.7"><span class="fh-avatars" role="group" aria-label="Assignees: Ava, Mateo, Eleanor and 4 more"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-avatar fh-avatars__more" data-kind="person">+4</span></span></span>
</div>
```

`VAL-3.8` Reference (opens the sidecar) · `entity` `ref` · built from REF

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--ref" data-fh="VAL-3.8"><a class="fh-ref" href="#c-values-entity" data-sidecar="goal-harbor"><span class="fh-ref__label">Harbor index refresh</span></a></span>
  <span class="fh-value fh-value--ref fh-value--chevron" data-mode="edit" data-fh="VAL-3.8"><button class="fh-value__trigger" type="button" popovertarget="val-list-11" aria-haspopup="listbox" aria-label="Goal: Harbor index refresh. Change" style="anchor-name: --val-list-11"><span class="fh-ref"><span class="fh-ref__label">Harbor index refresh</span></span></button><div class="fh-entity-picker__list" id="val-list-11" popover role="listbox" aria-label="Goals" style="position-anchor: --val-list-11"><fieldset class="fh-entity-picker__group"><legend>Goals</legend><label class="fh-entity"><input type="radio" name="val-list-11" value="goal-harbor" checked><span class="fh-entity__who"><b>Harbor index refresh</b><small>GL-014 · Due Nov 27</small></span></label><label class="fh-entity"><input type="radio" name="val-list-11" value="goal-orchard"><span class="fh-entity__who"><b>Orchard onboarding</b><small>GL-015 · Due Dec 4</small></span></label><label class="fh-entity"><input type="radio" name="val-list-11" value="goal-tide"><span class="fh-entity__who"><b>Tide reporting</b><small>GL-016 · Due Dec 11</small></span></label></fieldset></div></span>
  <span class="fh-value fh-value--ref fh-value--lg" data-fh="VAL-3.8"><a class="fh-ref" href="#c-values-entity" data-sidecar="goal-harbor"><span class="fh-ref__label">Harbor index refresh</span></a></span>
</div>
```

`VAL-3.9` Reference and key · `entity` `ref-key` · built from REF

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--ref-key" data-fh="VAL-3.9"><a class="fh-ref" href="#c-values-entity" data-sidecar="goal-harbor"><span class="fh-ref__label">Harbor index refresh</span><code class="fh-ref__key">GL-014</code></a></span>
  <span class="fh-value fh-value--ref-key fh-value--chevron" data-mode="edit" data-fh="VAL-3.9"><button class="fh-value__trigger" type="button" popovertarget="val-list-12" aria-haspopup="listbox" aria-label="Goal: Harbor index refresh. Change" style="anchor-name: --val-list-12"><span class="fh-ref"><span class="fh-ref__label">Harbor index refresh</span><code class="fh-ref__key">GL-014</code></span></button><div class="fh-entity-picker__list" id="val-list-12" popover role="listbox" aria-label="Goals" style="position-anchor: --val-list-12"><fieldset class="fh-entity-picker__group"><legend>Goals</legend><label class="fh-entity"><input type="radio" name="val-list-12" value="goal-harbor" checked><span class="fh-entity__who"><b>Harbor index refresh</b><small>GL-014 · Due Nov 27</small></span></label><label class="fh-entity"><input type="radio" name="val-list-12" value="goal-orchard"><span class="fh-entity__who"><b>Orchard onboarding</b><small>GL-015 · Due Dec 4</small></span></label><label class="fh-entity"><input type="radio" name="val-list-12" value="goal-tide"><span class="fh-entity__who"><b>Tide reporting</b><small>GL-016 · Due Dec 11</small></span></label></fieldset></div></span>
  <span class="fh-value fh-value--ref-key fh-value--lg" data-fh="VAL-3.9"><a class="fh-ref" href="#c-values-entity" data-sidecar="goal-harbor"><span class="fh-ref__label">Harbor index refresh</span><code class="fh-ref__key">GL-014</code></a></span>
</div>
```

`VAL-3.10` Picker · `entity` `picker` · editable · built from ENT

```html
<div class="fh-stack">
  <div class="fh-value fh-value--picker fh-value--field" data-mode="read" data-fh="VAL-3.10"><div class="fh-entity-picker" data-fh-entity><button class="fh-entity" type="button" popovertarget="val-list-13" aria-haspopup="listbox" aria-label="Owner" style="anchor-name: --val-list-13" disabled><span class="fh-entity__value"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></span></button></div></div>
  <div class="fh-value fh-value--picker fh-value--field" data-mode="edit" data-fh="VAL-3.10"><div class="fh-entity-picker" data-fh-entity><button class="fh-entity" type="button" popovertarget="val-list-14" aria-haspopup="listbox" aria-label="Owner" style="anchor-name: --val-list-14"><span class="fh-entity__value"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></span></button><div class="fh-entity-picker__list" id="val-list-14" popover role="listbox" aria-label="People" style="position-anchor: --val-list-14"><fieldset class="fh-entity-picker__group"><legend>People</legend><label class="fh-entity"><input type="radio" name="val-list-14" value="ava" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></label><label class="fh-entity"><input type="radio" name="val-list-14" value="mateo"><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Mateo Ruiz</b><small>Engineer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-14" value="eleanor"><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Eleanor Park</b><small>Producer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-14" value="ray"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ray Okafor</b><small>Account manager</small></span></label><label class="fh-entity"><input type="radio" name="val-list-14" value="isla"><span class="fh-avatar" data-kind="person"><img src="img/avatars/isla.webp" alt="Isla Brandt"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Isla Brandt</b><small>Finance</small></span></label></fieldset></div></div></div>
  <div class="fh-value fh-value--picker fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-3.10"><div class="fh-entity-picker" data-fh-entity><button class="fh-entity" type="button" popovertarget="val-list-15" aria-haspopup="listbox" aria-label="Owner" style="anchor-name: --val-list-15"><span class="fh-entity__value"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></span></button><div class="fh-entity-picker__list" id="val-list-15" popover role="listbox" aria-label="People" style="position-anchor: --val-list-15"><fieldset class="fh-entity-picker__group"><legend>People</legend><label class="fh-entity"><input type="radio" name="val-list-15" value="ava" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></label><label class="fh-entity"><input type="radio" name="val-list-15" value="mateo"><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Mateo Ruiz</b><small>Engineer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-15" value="eleanor"><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Eleanor Park</b><small>Producer</small></span></label><label class="fh-entity"><input type="radio" name="val-list-15" value="ray"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ray Okafor</b><small>Account manager</small></span></label><label class="fh-entity"><input type="radio" name="val-list-15" value="isla"><span class="fh-avatar" data-kind="person"><img src="img/avatars/isla.webp" alt="Isla Brandt"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Isla Brandt</b><small>Finance</small></span></label></fieldset></div></div></div>
</div>
```

`VAL-3.11` Picker, several · `entity` `picker-multi` · editable · built from ENT

```html
<div class="fh-stack">
  <div class="fh-value fh-value--picker-multi fh-value--field" data-mode="read" data-fh="VAL-3.11"><div class="fh-entity-picker" data-fh-entity><button class="fh-entity" type="button" popovertarget="val-list-16" aria-haspopup="listbox" aria-label="Reviewers" style="anchor-name: --val-list-16" disabled><span class="fh-entity__value"><span class="fh-avatars" aria-hidden="true"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span></span><span class="fh-entity__who"><b>3 people</b></span></span></button></div></div>
  <div class="fh-value fh-value--picker-multi fh-value--field" data-mode="edit" data-fh="VAL-3.11"><div class="fh-entity-picker" data-fh-entity><button class="fh-entity" type="button" popovertarget="val-list-17" aria-haspopup="listbox" aria-label="Reviewers" style="anchor-name: --val-list-17"><span class="fh-entity__value"><span class="fh-avatars" aria-hidden="true"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span></span><span class="fh-entity__who"><b>3 people</b></span></span></button><div class="fh-entity-picker__list" id="val-list-17" popover role="listbox" aria-label="People" aria-multiselectable="true" style="position-anchor: --val-list-17"><fieldset class="fh-entity-picker__group"><legend>People</legend><label class="fh-entity"><input type="checkbox" name="val-list-17" value="ava" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-17" value="mateo" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Mateo Ruiz</b><small>Engineer</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-17" value="eleanor" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Eleanor Park</b><small>Producer</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-17" value="ray"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ray Okafor</b><small>Account manager</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-17" value="isla"><span class="fh-avatar" data-kind="person"><img src="img/avatars/isla.webp" alt="Isla Brandt"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Isla Brandt</b><small>Finance</small></span></label></fieldset></div></div></div>
  <div class="fh-value fh-value--picker-multi fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-3.11"><div class="fh-entity-picker" data-fh-entity><button class="fh-entity" type="button" popovertarget="val-list-18" aria-haspopup="listbox" aria-label="Reviewers" style="anchor-name: --val-list-18"><span class="fh-entity__value"><span class="fh-avatars" aria-hidden="true"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span></span><span class="fh-entity__who"><b>3 people</b></span></span></button><div class="fh-entity-picker__list" id="val-list-18" popover role="listbox" aria-label="People" aria-multiselectable="true" style="position-anchor: --val-list-18"><fieldset class="fh-entity-picker__group"><legend>People</legend><label class="fh-entity"><input type="checkbox" name="val-list-18" value="ava" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/ava.webp" alt="Ava Mendes"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ava Mendes</b><small>Design lead</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-18" value="mateo" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/mateo.webp" alt="Mateo Ruiz"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Mateo Ruiz</b><small>Engineer</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-18" value="eleanor" checked><span class="fh-avatar" data-kind="person"><img src="img/avatars/eleanor.webp" alt="Eleanor Park"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Eleanor Park</b><small>Producer</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-18" value="ray"><span class="fh-avatar" data-kind="person"><img src="img/avatars/ray.webp" alt="Ray Okafor"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Ray Okafor</b><small>Account manager</small></span></label><label class="fh-entity"><input type="checkbox" name="val-list-18" value="isla"><span class="fh-avatar" data-kind="person"><img src="img/avatars/isla.webp" alt="Isla Brandt"></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Isla Brandt</b><small>Finance</small></span></label></fieldset></div></div></div>
</div>
```

`VAL-3.12` Avatar and reference · `entity` `avatar-ref` · built from AVT, REF

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--avatar-ref" data-fh="VAL-3.12"><span class="fh-avatar fh-avatar--square" data-tone="accent"><img src="img/brand/rascode-mark.svg" alt></span><a class="fh-ref" href="#c-values-entity" data-sidecar="app-helm"><span class="fh-ref__label">Helm</span></a></span>
  <span class="fh-value fh-value--avatar-ref" data-fh="VAL-3.12"><span class="fh-avatar fh-avatar--square" data-tone="teal" aria-hidden="true">NW</span><a class="fh-ref" href="#c-values-entity" data-sidecar="org-northwind"><span class="fh-ref__label">Northwind Studio</span></a></span>
  <span class="fh-value fh-value--avatar-ref fh-value--chevron" data-mode="edit" data-fh="VAL-3.12"><button class="fh-value__trigger" type="button" popovertarget="val-list-19" aria-haspopup="listbox" aria-label="Application: Helm. Change" style="anchor-name: --val-list-19"><span class="fh-avatar fh-avatar--square" data-tone="accent"><img src="img/brand/rascode-mark.svg" alt></span><span class="fh-ref"><span class="fh-ref__label">Helm</span></span></button><div class="fh-entity-picker__list" id="val-list-19" popover role="listbox" aria-label="Applications" style="position-anchor: --val-list-19"><fieldset class="fh-entity-picker__group"><legend>Applications</legend><label class="fh-entity"><input type="radio" name="val-list-19" value="app-helm" checked><span class="fh-avatar fh-avatar--square" data-tone="accent"><img src="img/brand/rascode-mark.svg" alt></span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Helm</b><small>APP-001</small></span></label><label class="fh-entity"><input type="radio" name="val-list-19" value="app-firehorse"><span class="fh-avatar fh-avatar--square" data-tone="orange" aria-hidden="true">FH</span><span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Firehorse</b><small>APP-002</small></span></label></fieldset></div></span>
  <span class="fh-value fh-value--avatar-ref fh-value--lg" data-fh="VAL-3.12"><span class="fh-avatar fh-avatar--square" data-tone="accent"><img src="img/brand/rascode-mark.svg" alt></span><a class="fh-ref" href="#c-values-entity" data-sidecar="app-helm"><span class="fh-ref__label">Helm</span></a></span>
</div>
```

`VAL-3.13` Cube · `entity` `cube` · built from CUB

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--cube" data-fh="VAL-3.13"><b class="fh-cube" data-tone="orange">Claude</b></span>
  <span class="fh-value fh-value--cube" data-fh="VAL-3.13"><b class="fh-cube" data-tone="teal">Northwind Studio</b></span>
  <span class="fh-value fh-value--cube" data-fh="VAL-3.13"><b class="fh-cube" data-tone="accent">Helm</b></span>
  <span class="fh-value fh-value--cube fh-value--lg" data-fh="VAL-3.13"><b class="fh-cube" data-tone="orange">Claude</b></span>
</div>
```

#### VAL-4 Money

`VAL-4.1` Amount · `money` `amount`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--amount fh-value--tabular fh-value--mono" data-fh="VAL-4.1"><data value="4800.00">$4,800.00</data></span>
  <span class="fh-value fh-value--amount fh-value--tabular fh-value--mono" data-mode="edit" data-fh="VAL-4.1"><span class="fh-value__sub">$</span><input class="fh-value__input" type="text" value="4,800.00" aria-label="Amount, US dollars" inputmode="decimal"></span>
  <span class="fh-value fh-value--amount fh-value--tabular fh-value--mono fh-value--lg" data-fh="VAL-4.1"><data value="4800.00">$4,800.00</data></span>
  <span class="fh-value" data-empty data-fh="VAL-4.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-4.2` Amount and currency code · `money` `amount-code`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-fh="VAL-4.2"><data value="4800.00">$4,800.00</data><abbr class="fh-value__sub" title="US dollar">USD</abbr></span>
  <span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono" data-mode="edit" data-fh="VAL-4.2"><span class="fh-value__sub">$</span><input class="fh-value__input" type="text" value="4,800.00" aria-label="Amount, US dollars" inputmode="decimal"><abbr class="fh-value__sub" title="US dollar">USD</abbr></span>
  <span class="fh-value fh-value--amount-code fh-value--tabular fh-value--mono fh-value--lg" data-fh="VAL-4.2"><data value="4800.00">$4,800.00</data><abbr class="fh-value__sub" title="US dollar">USD</abbr></span>
</div>
```

`VAL-4.3` Compact ($1.2M) · `money` `compact`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--compact fh-value--tabular fh-value--mono" data-fh="VAL-4.3"><data value="1240000" title="$1,240,000.00 USD">$1.2M</data></span>
  <span class="fh-value fh-value--compact fh-value--tabular fh-value--mono" data-mode="edit" data-fh="VAL-4.3"><span class="fh-value__sub">$</span><input class="fh-value__input" type="text" value="1,240,000.00" aria-label="Amount, US dollars" inputmode="decimal"></span>
  <span class="fh-value fh-value--compact fh-value--tabular fh-value--mono fh-value--lg" data-fh="VAL-4.3"><data value="1240000" title="$1,240,000.00 USD">$1.2M</data></span>
</div>
```

`VAL-4.4` Delta · `money` `delta`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--delta fh-value--tabular fh-value--mono" data-fh="VAL-4.4"><span class="fh-metric__delta" data-trend="up" aria-label="Up $1,250.00">$1,250.00</span></span>
  <span class="fh-value fh-value--delta fh-value--tabular fh-value--mono" data-mode="edit" title="Computed: the change stays read-only while editing" data-fh="VAL-4.4"><span class="fh-metric__delta" data-trend="up" aria-label="Up $1,250.00">$1,250.00</span></span>
  <span class="fh-value fh-value--delta fh-value--tabular fh-value--mono fh-value--lg" data-fh="VAL-4.4"><span class="fh-metric__delta" data-trend="up" aria-label="Up $1,250.00">$1,250.00</span></span>
</div>
```

`VAL-4.5` Compact with delta · `money` `compact-delta`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-fh="VAL-4.5"><data value="1240000" title="$1,240,000.00 USD">$1.2M</data><span class="fh-metric__delta" data-trend="up" aria-label="Up $1,250.00">$1,250.00</span></span>
  <span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono" data-mode="edit" data-fh="VAL-4.5"><span class="fh-value__sub">$</span><input class="fh-value__input" type="text" value="1,240,000.00" aria-label="Amount, US dollars" inputmode="decimal"><span class="fh-metric__delta" data-trend="up" aria-label="Up $1,250.00">$1,250.00</span></span>
  <span class="fh-value fh-value--compact-delta fh-value--tabular fh-value--mono fh-value--lg" data-fh="VAL-4.5"><data value="1240000" title="$1,240,000.00 USD">$1.2M</data><span class="fh-metric__delta" data-trend="up" aria-label="Up $1,250.00">$1,250.00</span></span>
</div>
```

`VAL-4.6` Money input · `money` `money-input` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--money-input fh-value--field" data-mode="read" data-fh="VAL-4.6"><div class="fh-field fh-money" data-fh-money data-currency="USD"><div class="fh-input-group"><span class="fh-money__currency">USD</span><input class="fh-input" name="amount" inputmode="decimal" autocomplete="off" placeholder="0.00" value="4800" aria-label="Amount" readonly><input type="hidden" data-fh-money-value></div></div></div>
  <div class="fh-value fh-value--money-input fh-value--field" data-mode="edit" data-fh="VAL-4.6"><div class="fh-field fh-money" data-fh-money data-currency="USD"><div class="fh-input-group"><span class="fh-money__currency">USD</span><input class="fh-input" name="amount" inputmode="decimal" autocomplete="off" placeholder="0.00" value="4800" aria-label="Amount"><input type="hidden" data-fh-money-value></div></div></div>
  <div class="fh-value fh-value--money-input fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-4.6"><div class="fh-field fh-money" data-fh-money data-currency="USD"><div class="fh-input-group"><span class="fh-money__currency">USD</span><input class="fh-input" name="amount" inputmode="decimal" autocomplete="off" placeholder="0.00" value="4800" aria-label="Amount"><input type="hidden" data-fh-money-value></div></div></div>
</div>
```

`VAL-4.7` Cube · `money` `cube` · built from CUB

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--cube" data-fh="VAL-4.7"><b class="fh-cube" data-tone="teal" title="$48,200.00 USD">$48.2K</b></span>
  <span class="fh-value fh-value--cube" data-fh="VAL-4.7"><b class="fh-cube" data-tone="violet" title="$1,250,000.00 USD">$1.3M</b></span>
  <span class="fh-value fh-value--cube fh-value--lg" data-fh="VAL-4.7"><b class="fh-cube" data-tone="teal" title="$48,200.00 USD">$48.2K</b></span>
</div>
```

#### VAL-5 Ratio

`VAL-5.1` Percent · `ratio` `text`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--text fh-value--tabular" data-fh="VAL-5.1">69%</span>
  <span class="fh-value fh-value--text fh-value--tabular" data-mode="edit" data-fh="VAL-5.1"><input class="fh-value__input" type="number" value="69" aria-label="Progress, percent" min="0" max="100"><span class="fh-value__sub">%</span></span>
  <span class="fh-value fh-value--text fh-value--tabular fh-value--lg" data-fh="VAL-5.1">69%</span>
  <span class="fh-value" data-empty data-fh="VAL-5.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-5.2` Bar · `ratio` `bar` · built from MET

```html
<div class="fh-stack">
  <span class="fh-value fh-value--bar" data-tone="lime" data-fh="VAL-5.2"><progress class="fh-progress" value="69" max="100">69%</progress><b>69%</b></span>
  <span class="fh-value fh-value--bar" data-mode="edit" data-tone="lime" data-fh="VAL-5.2"><input class="fh-range" type="range" min="0" max="100" value="69" aria-label="Progress" oninput="this.nextElementSibling.value = this.value + '%'"><output>69%</output></span>
  <span class="fh-value fh-value--bar fh-value--lg" data-tone="lime" data-fh="VAL-5.2"><progress class="fh-progress" value="69" max="100">69%</progress><b>69%</b></span>
</div>
```

`VAL-5.3` Ring · `ratio` `ring` · built from FBK

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--ring" data-tone="teal" data-fh="VAL-5.3"><span class="fh-ring" style="--fh-value: 69" role="img" aria-label="69% complete"><b>69%</b></span></span>
  <span class="fh-value fh-value--ring" data-mode="edit" data-tone="teal" data-fh="VAL-5.3"><span class="fh-ring" style="--fh-value: 69" role="img" aria-label="69% complete"><b>69%</b></span><input class="fh-value__input" type="number" value="69" aria-label="Progress, percent" min="0" max="100"><span class="fh-value__sub">%</span></span>
  <span class="fh-value fh-value--ring fh-value--lg" data-tone="teal" data-fh="VAL-5.3"><span class="fh-ring" style="--fh-value: 69" role="img" aria-label="69% complete"><b>69%</b></span></span>
</div>
```

`VAL-5.4` Meter against a target · `ratio` `meter` · built from MET, GAU

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--meter" data-tone="amber" data-fh="VAL-5.4"><span class="fh-gauge" style="--fh-value: 72" role="img" aria-label="72%, target 80%"><b>72%</b><small>of 80%</small></span></span>
  <span class="fh-value fh-value--meter" data-mode="edit" data-tone="amber" data-fh="VAL-5.4"><span class="fh-gauge" style="--fh-value: 72" role="img" aria-label="72%, target 80%"><b>72%</b><small>of 80%</small></span><input class="fh-value__input" type="number" value="72" aria-label="Value, percent" min="0" max="100"><span class="fh-value__sub">% of 80%</span></span>
  <span class="fh-value fh-value--meter fh-value--lg" data-tone="amber" data-fh="VAL-5.4"><span class="fh-gauge" style="--fh-value: 72" role="img" aria-label="72%, target 80%"><b>72%</b><small>of 80%</small></span></span>
</div>
```

`VAL-5.5` Range · `ratio` `range` · editable · built from UPL

```html
<div class="fh-stack">
  <span class="fh-value fh-value--range" data-mode="read" data-tone="sky" data-fh="VAL-5.5"><input class="fh-range" type="range" min="0" max="100" value="69" aria-label="Progress" disabled><output>69%</output></span>
  <span class="fh-value fh-value--range" data-mode="edit" data-tone="sky" data-fh="VAL-5.5"><input class="fh-range" type="range" min="0" max="100" value="69" aria-label="Progress" oninput="this.nextElementSibling.value = this.value + '%'"><output>69%</output></span>
  <span class="fh-value fh-value--range fh-value--lg" data-mode="edit" data-tone="sky" data-fh="VAL-5.5"><input class="fh-range" type="range" min="0" max="100" value="69" aria-label="Progress" oninput="this.nextElementSibling.value = this.value + '%'"><output>69%</output></span>
</div>
```

#### VAL-6 Number

`VAL-6.1` Plain · `number` `plain`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--plain fh-value--tabular" data-fh="VAL-6.1">1,284</span>
  <span class="fh-value fh-value--plain fh-value--tabular" data-mode="edit" data-fh="VAL-6.1"><input class="fh-value__input" type="number" value="1284" aria-label="Count"></span>
  <span class="fh-value fh-value--plain fh-value--tabular fh-value--lg" data-fh="VAL-6.1">1,284</span>
  <span class="fh-value" data-empty data-fh="VAL-6.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-6.2` With unit · `number` `unit`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--unit fh-value--tabular" data-fh="VAL-6.2">12<span class="fh-value__sub">min</span></span>
  <span class="fh-value fh-value--unit fh-value--tabular" data-mode="edit" data-fh="VAL-6.2"><input class="fh-value__input" type="number" value="12" aria-label="Duration, minutes" min="0"><span class="fh-value__sub">min</span></span>
  <span class="fh-value fh-value--unit fh-value--tabular fh-value--lg" data-fh="VAL-6.2">12<span class="fh-value__sub">min</span></span>
</div>
```

`VAL-6.3` Delta · `number` `delta`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--delta fh-value--tabular" data-fh="VAL-6.3"><span class="fh-metric__delta" data-trend="down" data-good="down" aria-label="Down 3, down is good">3</span></span>
  <span class="fh-value fh-value--delta fh-value--tabular" data-mode="edit" title="Computed: the change stays read-only while editing" data-fh="VAL-6.3"><span class="fh-metric__delta" data-trend="down" data-good="down" aria-label="Down 3, down is good">3</span></span>
  <span class="fh-value fh-value--delta fh-value--tabular fh-value--lg" data-fh="VAL-6.3"><span class="fh-metric__delta" data-trend="down" data-good="down" aria-label="Down 3, down is good">3</span></span>
</div>
```

`VAL-6.4` Plain with delta · `number` `plain-delta`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--plain-delta fh-value--tabular" data-fh="VAL-6.4">42<span class="fh-metric__delta" data-trend="up" aria-label="Up 8">8</span></span>
  <span class="fh-value fh-value--plain-delta fh-value--tabular" data-mode="edit" data-fh="VAL-6.4"><input class="fh-value__input" type="number" value="42" aria-label="Open relays"><span class="fh-metric__delta" data-trend="up" aria-label="Up 8">8</span></span>
  <span class="fh-value fh-value--plain-delta fh-value--tabular fh-value--lg" data-fh="VAL-6.4">42<span class="fh-metric__delta" data-trend="up" aria-label="Up 8">8</span></span>
</div>
```

`VAL-6.5` Sparkline · `number` `sparkline` · built from MET

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--sparkline fh-value--tabular" data-tone="teal" data-fh="VAL-6.5"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg><b>42</b></span>
  <span class="fh-value fh-value--sparkline fh-value--tabular" data-mode="edit" data-tone="teal" title="A series is computed: it stays read-only while editing" data-fh="VAL-6.5"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg><b>42</b></span>
  <span class="fh-value fh-value--sparkline fh-value--tabular fh-value--lg" data-tone="teal" data-fh="VAL-6.5"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg><b>42</b></span>
</div>
```

`VAL-6.6` Number input · `number` `number-input` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--number-input fh-value--field" data-mode="read" data-fh="VAL-6.6"><div class="fh-input-group"><input class="fh-input" type="number" min="0" value="12" aria-label="Duration, minutes" readonly><span>min</span></div></div>
  <div class="fh-value fh-value--number-input fh-value--field" data-mode="edit" data-fh="VAL-6.6"><div class="fh-input-group"><input class="fh-input" type="number" min="0" value="12" aria-label="Duration, minutes"><span>min</span></div></div>
  <div class="fh-value fh-value--number-input fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-6.6"><div class="fh-input-group"><input class="fh-input" type="number" min="0" value="12" aria-label="Duration, minutes"><span>min</span></div></div>
</div>
```

`VAL-7.8` Duration · `number` `duration`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--duration fh-value--tabular" data-fh="VAL-7.8"><time datetime="PT1H25M">1h 25m</time></span>
  <span class="fh-value fh-value--duration fh-value--tabular" data-mode="edit" data-fh="VAL-7.8"><input class="fh-value__input" type="number" value="1" aria-label="Hours" min="0"><span class="fh-value__sub">h</span><input class="fh-value__input" type="number" value="25" aria-label="Minutes" min="0" max="59"><span class="fh-value__sub">m</span></span>
  <span class="fh-value fh-value--duration fh-value--tabular fh-value--lg" data-fh="VAL-7.8"><time datetime="PT1H25M">1h 25m</time></span>
</div>
```

`VAL-7.11` Duration input · `number` `duration-input` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--duration-input fh-value--field" data-mode="read" data-fh="VAL-7.11"><div class="fh-input-group"><input class="fh-input" type="number" min="0" value="1" aria-label="Hours" readonly><span>h</span><input class="fh-input" type="number" min="0" max="59" value="25" aria-label="Minutes" readonly><span>m</span></div></div>
  <div class="fh-value fh-value--duration-input fh-value--field" data-mode="edit" data-fh="VAL-7.11"><div class="fh-input-group"><input class="fh-input" type="number" min="0" value="1" aria-label="Hours"><span>h</span><input class="fh-input" type="number" min="0" max="59" value="25" aria-label="Minutes"><span>m</span></div></div>
  <div class="fh-value fh-value--duration-input fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-7.11"><div class="fh-input-group"><input class="fh-input" type="number" min="0" value="1" aria-label="Hours"><span>h</span><input class="fh-input" type="number" min="0" max="59" value="25" aria-label="Minutes"><span>m</span></div></div>
</div>
```

`VAL-6.7` Cube · `number` `cube` · built from CUB

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--cube" data-fh="VAL-6.7"><b class="fh-cube" data-tone="sky">1,250</b></span>
  <span class="fh-value fh-value--cube" data-fh="VAL-6.7"><b class="fh-cube" data-tone="lime">42</b></span>
  <span class="fh-value fh-value--cube fh-value--lg" data-fh="VAL-6.7"><b class="fh-cube" data-tone="sky">1,250</b></span>
</div>
```

`VAL-6.5` Sparkline · `series` `sparkline` · built from MET

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--sparkline fh-value--tabular" data-tone="teal" data-fh="VAL-6.5"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg><b>42</b></span>
  <span class="fh-value fh-value--sparkline fh-value--tabular" data-mode="edit" data-tone="teal" title="A series is computed: it stays read-only while editing" data-fh="VAL-6.5"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg><b>42</b></span>
  <span class="fh-value fh-value--sparkline fh-value--tabular fh-value--lg" data-tone="teal" data-fh="VAL-6.5"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg><b>42</b></span>
</div>
```

`VAL-6.5` Sparkline and last value · `series` `sparkline-last` · built from MET

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--sparkline fh-value--tabular" data-tone="teal" data-fh="VAL-6.5"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg><b>42</b></span>
  <span class="fh-value fh-value--sparkline fh-value--tabular" data-mode="edit" data-tone="teal" title="A series is computed: it stays read-only while editing" data-fh="VAL-6.5"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg><b>42</b></span>
  <span class="fh-value fh-value--sparkline fh-value--tabular fh-value--lg" data-tone="teal" data-fh="VAL-6.5"><svg class="fh-sparkline" viewBox="0 0 120 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0 L120 32 L0 32Z" fill="currentColor" opacity=".12"></path><path d="M0.0 30.0 L10.9 25.3 L21.8 27.7 L32.7 20.7 L43.6 23.0 L54.5 16.0 L65.5 18.3 L76.4 11.3 L87.3 12.5 L98.2 6.7 L109.1 9.0 L120.0 2.0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path></svg><b>42</b></span>
</div>
```

#### VAL-7 Temporal

`VAL-7.1` Date · `temporal` `date`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--date" data-fh="VAL-7.1"><time datetime="2026-11-27">Nov 27, 2026</time></span>
  <span class="fh-value fh-value--date" data-mode="edit" data-fh="VAL-7.1"><input class="fh-value__input" type="date" value="2026-11-27" aria-label="Due date"></span>
  <span class="fh-value fh-value--date fh-value--lg" data-fh="VAL-7.1"><time datetime="2026-11-27">Nov 27, 2026</time></span>
  <span class="fh-value" data-empty data-fh="VAL-7.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-7.2` Date and relative · `temporal` `date-relative`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--date-relative" data-fh="VAL-7.2"><time datetime="2026-11-27">Nov 27</time><span class="fh-value__sub">in 13d</span></span>
  <span class="fh-value fh-value--date-relative" data-mode="edit" data-fh="VAL-7.2"><input class="fh-value__input" type="date" value="2026-11-27" aria-label="Due date"><span class="fh-value__sub">in 13d</span></span>
  <span class="fh-value fh-value--date-relative fh-value--lg" data-fh="VAL-7.2"><time datetime="2026-11-27">Nov 27</time><span class="fh-value__sub">in 13d</span></span>
</div>
```

`VAL-7.3` Relative · `temporal` `relative`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--relative" data-fh="VAL-7.3"><time datetime="2026-11-12T14:05" title="Nov 12, 2026, 2:05 PM">2 days ago</time></span>
  <span class="fh-value fh-value--relative" data-mode="edit" data-fh="VAL-7.3"><input class="fh-value__input" type="datetime-local" value="2026-11-12T14:05" aria-label="Last run"></span>
  <span class="fh-value fh-value--relative fh-value--lg" data-fh="VAL-7.3"><time datetime="2026-11-12T14:05" title="Nov 12, 2026, 2:05 PM">2 days ago</time></span>
</div>
```

`VAL-7.4` Date and time · `temporal` `datetime`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--datetime" data-fh="VAL-7.4"><time datetime="2026-11-12T14:05">Nov 12, 2026 · 2:05 PM</time></span>
  <span class="fh-value fh-value--datetime" data-mode="edit" data-fh="VAL-7.4"><input class="fh-value__input" type="datetime-local" value="2026-11-12T14:05" aria-label="Last run"></span>
  <span class="fh-value fh-value--datetime fh-value--lg" data-fh="VAL-7.4"><time datetime="2026-11-12T14:05">Nov 12, 2026 · 2:05 PM</time></span>
</div>
```

`VAL-7.5` Range · `temporal` `range`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--range-dates" data-fh="VAL-7.5"><time datetime="2026-11-03">Nov 3</time> – <time datetime="2026-11-27">Nov 27, 2026</time></span>
  <span class="fh-value fh-value--range-dates" data-mode="edit" data-fh="VAL-7.5"><input class="fh-value__input" type="date" value="2026-11-03" aria-label="Starts"> – <input class="fh-value__input" type="date" value="2026-11-27" aria-label="Ends"></span>
  <span class="fh-value fh-value--range-dates fh-value--lg" data-fh="VAL-7.5"><time datetime="2026-11-03">Nov 3</time> – <time datetime="2026-11-27">Nov 27, 2026</time></span>
</div>
```

`VAL-7.6` Overdue · `temporal` `overdue`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--overdue" data-fh="VAL-7.6"><time datetime="2026-11-10">Nov 10</time><span class="fh-value__sub">4d overdue</span></span>
  <span class="fh-value fh-value--overdue" data-mode="edit" data-fh="VAL-7.6"><input class="fh-value__input" type="date" value="2026-11-10" aria-label="Due date"><span class="fh-value__sub">4d overdue</span></span>
  <span class="fh-value fh-value--overdue fh-value--lg" data-fh="VAL-7.6"><time datetime="2026-11-10">Nov 10</time><span class="fh-value__sub">4d overdue</span></span>
</div>
```

`VAL-7.7` Time of day · `temporal` `time`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--time fh-value--tabular" data-fh="VAL-7.7"><time datetime="14:05">2:05 PM</time></span>
  <span class="fh-value fh-value--time fh-value--tabular" data-mode="edit" data-fh="VAL-7.7"><input class="fh-value__input" type="time" value="14:05" aria-label="Start time"></span>
  <span class="fh-value fh-value--time fh-value--tabular fh-value--lg" data-fh="VAL-7.7"><time datetime="14:05">2:05 PM</time></span>
</div>
```

`VAL-7.8` Duration · `temporal` `duration`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--duration fh-value--tabular" data-fh="VAL-7.8"><time datetime="PT1H25M">1h 25m</time></span>
  <span class="fh-value fh-value--duration fh-value--tabular" data-mode="edit" data-fh="VAL-7.8"><input class="fh-value__input" type="number" value="1" aria-label="Hours" min="0"><span class="fh-value__sub">h</span><input class="fh-value__input" type="number" value="25" aria-label="Minutes" min="0" max="59"><span class="fh-value__sub">m</span></span>
  <span class="fh-value fh-value--duration fh-value--tabular fh-value--lg" data-fh="VAL-7.8"><time datetime="PT1H25M">1h 25m</time></span>
</div>
```

`VAL-7.9` Date picker · `temporal` `date-picker` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--date-picker fh-value--field" data-mode="read" data-fh="VAL-7.9"><input class="fh-input" type="date" value="2026-11-27" aria-label="Due date" readonly></div>
  <div class="fh-value fh-value--date-picker fh-value--field" data-mode="edit" data-fh="VAL-7.9"><input class="fh-input" type="date" value="2026-11-27" aria-label="Due date"></div>
  <div class="fh-value fh-value--date-picker fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-7.9"><input class="fh-input" type="date" value="2026-11-27" aria-label="Due date"></div>
</div>
```

`VAL-7.10` Time input · `temporal` `time-input` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--time-input fh-value--field" data-mode="read" data-fh="VAL-7.10"><input class="fh-input" type="time" value="14:05" aria-label="Start time" readonly></div>
  <div class="fh-value fh-value--time-input fh-value--field" data-mode="edit" data-fh="VAL-7.10"><input class="fh-input" type="time" value="14:05" aria-label="Start time"></div>
  <div class="fh-value fh-value--time-input fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-7.10"><input class="fh-input" type="time" value="14:05" aria-label="Start time"></div>
</div>
```

`VAL-7.11` Duration input · `temporal` `duration-input` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--duration-input fh-value--field" data-mode="read" data-fh="VAL-7.11"><div class="fh-input-group"><input class="fh-input" type="number" min="0" value="1" aria-label="Hours" readonly><span>h</span><input class="fh-input" type="number" min="0" max="59" value="25" aria-label="Minutes" readonly><span>m</span></div></div>
  <div class="fh-value fh-value--duration-input fh-value--field" data-mode="edit" data-fh="VAL-7.11"><div class="fh-input-group"><input class="fh-input" type="number" min="0" value="1" aria-label="Hours"><span>h</span><input class="fh-input" type="number" min="0" max="59" value="25" aria-label="Minutes"><span>m</span></div></div>
  <div class="fh-value fh-value--duration-input fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-7.11"><div class="fh-input-group"><input class="fh-input" type="number" min="0" value="1" aria-label="Hours"><span>h</span><input class="fh-input" type="number" min="0" max="59" value="25" aria-label="Minutes"><span>m</span></div></div>
</div>
```

#### VAL-8 File

`VAL-8.1` Type chip (PDF) · `file` `type-chip` · built from CHP

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--type-chip fh-value--mono" data-fh="VAL-8.1"><span class="fh-chips"><span class="fh-chip fh-chip--sm" data-tone="rose" title="scope-of-work.pdf · 212 KB">PDF</span><span class="fh-chip fh-chip--sm" data-tone="sky" title="brief.docx · 48 KB">DOCX</span><span class="fh-chip fh-chip--sm" data-tone="violet" title="sections-1440.png · 63 KB">PNG</span></span><span class="fh-badge">+1</span></span>
  <span class="fh-value fh-value--type-chip fh-value--mono" data-mode="edit" data-fh="VAL-8.1"><span class="fh-chips"><span class="fh-chip fh-chip--sm" data-tone="rose" title="scope-of-work.pdf · 212 KB">PDF <button class="fh-chip__remove" type="button" aria-label="Remove scope-of-work.pdf"></button></span><span class="fh-chip fh-chip--sm" data-tone="sky" title="brief.docx · 48 KB">DOCX <button class="fh-chip__remove" type="button" aria-label="Remove brief.docx"></button></span><span class="fh-chip fh-chip--sm" data-tone="violet" title="sections-1440.png · 63 KB">PNG <button class="fh-chip__remove" type="button" aria-label="Remove sections-1440.png"></button></span></span><label class="fh-value__action" aria-label="Add a file" title="Add a file"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i><input type="file" hidden></label></span>
  <span class="fh-value fh-value--type-chip fh-value--mono fh-value--lg" data-fh="VAL-8.1"><span class="fh-chips"><span class="fh-chip" data-tone="rose" title="scope-of-work.pdf · 212 KB">PDF</span><span class="fh-chip" data-tone="sky" title="brief.docx · 48 KB">DOCX</span><span class="fh-chip" data-tone="violet" title="sections-1440.png · 63 KB">PNG</span></span><span class="fh-badge">+1</span></span>
  <span class="fh-value" data-empty data-fh="VAL-8.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-8.2` Thumb · `file` `thumb` · built from THB

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--thumb" data-fh="VAL-8.2"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span></span>
  <span class="fh-value fh-value--thumb fh-value--chevron" data-mode="edit" data-fh="VAL-8.2"><label class="fh-value__trigger" aria-label="Replace ceramic-jar.svg"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><input type="file" accept="image/*" hidden></label></span>
  <span class="fh-value fh-value--thumb fh-value--lg" data-fh="VAL-8.2"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span></span>
</div>
```

`VAL-8.3` Thumbs, +N · `file` `thumbs` · built from THB

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--thumbs" data-fh="VAL-8.3"><span class="fh-avatars" role="group" aria-label="5 images"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/candle.svg" alt="candle.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/soap.svg" alt="soap.svg"></span><span class="fh-avatar fh-avatar--square fh-avatars__more">+2</span></span></span>
  <span class="fh-value fh-value--thumbs" data-mode="edit" data-fh="VAL-8.3"><span class="fh-avatars" role="group" aria-label="5 images"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/candle.svg" alt="candle.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/soap.svg" alt="soap.svg"></span><span class="fh-avatar fh-avatar--square fh-avatars__more">+2</span></span><label class="fh-value__action" aria-label="Add an image" title="Add an image"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i><input type="file" hidden></label></span>
  <span class="fh-value fh-value--thumbs fh-value--lg" data-fh="VAL-8.3"><span class="fh-avatars" role="group" aria-label="5 images"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/candle.svg" alt="candle.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/soap.svg" alt="soap.svg"></span><span class="fh-avatar fh-avatar--square fh-avatars__more">+2</span></span></span>
</div>
```

`VAL-8.4` File row · `file` `file-row` · built from SFL

```html
<div class="fh-stack">
  <div class="fh-value fh-value--file-row" data-fh="VAL-8.4"><ul class="fh-files"><li><a href="#c-values-file"><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>relay-report.md</span><small>12 KB</small><time datetime="2026-11-11">Nov 11</time></a></li></ul></div>
  <div class="fh-value fh-value--file-row" data-mode="edit" data-fh="VAL-8.4"><ul class="fh-files"><li><a href="#c-values-file"><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>relay-report.md</span><small>12 KB</small><time datetime="2026-11-11">Nov 11</time></a></li></ul><button class="fh-value__action" type="button" aria-label="Remove relay-report.md" title="Remove"><i class="fh-icon fh-icon--x" aria-hidden="true"></i></button><label class="fh-value__action" aria-label="Replace the file" title="Replace the file"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i><input type="file" hidden></label></div>
  <div class="fh-value fh-value--file-row fh-value--lg" data-fh="VAL-8.4"><ul class="fh-files"><li><a href="#c-values-file"><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>relay-report.md</span><small>12 KB</small><time datetime="2026-11-11">Nov 11</time></a></li></ul></div>
</div>
```

`VAL-8.5` Count · `file` `count`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--count fh-value--tabular" data-fh="VAL-8.5"><i class="fh-icon fh-icon--paperclip" aria-hidden="true"></i>4 files</span>
  <span class="fh-value fh-value--count fh-value--tabular" data-mode="edit" data-fh="VAL-8.5"><i class="fh-icon fh-icon--paperclip" aria-hidden="true"></i>4 files<label class="fh-value__action" aria-label="Add a file" title="Add a file"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i><input type="file" hidden></label></span>
  <span class="fh-value fh-value--count fh-value--tabular fh-value--lg" data-fh="VAL-8.5"><i class="fh-icon fh-icon--paperclip" aria-hidden="true"></i>4 files</span>
</div>
```

`VAL-8.6` Dropzone · `file` `dropzone` · editable · built from UPL

```html
<div class="fh-stack">
  <div class="fh-value fh-value--dropzone fh-value--field" data-mode="read" data-fh="VAL-8.6"><label class="fh-dropzone" data-tone="sky"><input type="file" multiple disabled><span class="fh-dropzone__title">Drop files or browse</span><span class="fh-dropzone__hint">PDF, PNG or JPG · up to 10 MB</span></label></div>
  <div class="fh-value fh-value--dropzone fh-value--field" data-mode="edit" data-fh="VAL-8.6"><label class="fh-dropzone" data-tone="sky"><input type="file" multiple><span class="fh-dropzone__title">Drop files or browse</span><span class="fh-dropzone__hint">PDF, PNG or JPG · up to 10 MB</span></label></div>
  <div class="fh-value fh-value--dropzone fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-8.6"><label class="fh-dropzone" data-tone="sky"><input type="file" multiple><span class="fh-dropzone__title">Drop files or browse</span><span class="fh-dropzone__hint">PDF, PNG or JPG · up to 10 MB</span></label></div>
</div>
```

`VAL-8.4` Preview (lg) · `file` `preview` · built from THB, SFL

```html
<div class="fh-stack">
  <div class="fh-value fh-value--file-row" data-fh="VAL-8.4"><ul class="fh-files"><li><a href="#c-values-file"><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>relay-report.md</span><small>12 KB</small><time datetime="2026-11-11">Nov 11</time></a></li></ul></div>
  <div class="fh-value fh-value--file-row" data-mode="edit" data-fh="VAL-8.4"><ul class="fh-files"><li><a href="#c-values-file"><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>relay-report.md</span><small>12 KB</small><time datetime="2026-11-11">Nov 11</time></a></li></ul><button class="fh-value__action" type="button" aria-label="Remove relay-report.md" title="Remove"><i class="fh-icon fh-icon--x" aria-hidden="true"></i></button><label class="fh-value__action" aria-label="Replace the file" title="Replace the file"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i><input type="file" hidden></label></div>
  <div class="fh-value fh-value--file-row fh-value--lg" data-fh="VAL-8.4"><ul class="fh-files"><li><a href="#c-values-file"><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>relay-report.md</span><small>12 KB</small><time datetime="2026-11-11">Nov 11</time></a></li></ul></div>
</div>
```

`VAL-8.3` Gallery grid · `file` `gallery` · built from THB

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--thumbs" data-fh="VAL-8.3"><span class="fh-avatars" role="group" aria-label="5 images"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/candle.svg" alt="candle.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/soap.svg" alt="soap.svg"></span><span class="fh-avatar fh-avatar--square fh-avatars__more">+2</span></span></span>
  <span class="fh-value fh-value--thumbs" data-mode="edit" data-fh="VAL-8.3"><span class="fh-avatars" role="group" aria-label="5 images"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/candle.svg" alt="candle.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/soap.svg" alt="soap.svg"></span><span class="fh-avatar fh-avatar--square fh-avatars__more">+2</span></span><label class="fh-value__action" aria-label="Add an image" title="Add an image"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i><input type="file" hidden></label></span>
  <span class="fh-value fh-value--thumbs fh-value--lg" data-fh="VAL-8.3"><span class="fh-avatars" role="group" aria-label="5 images"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/candle.svg" alt="candle.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/soap.svg" alt="soap.svg"></span><span class="fh-avatar fh-avatar--square fh-avatars__more">+2</span></span></span>
</div>
```

`VAL-8.2` Media frame · `file` `media` · built from THB

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--thumb" data-fh="VAL-8.2"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span></span>
  <span class="fh-value fh-value--thumb fh-value--chevron" data-mode="edit" data-fh="VAL-8.2"><label class="fh-value__trigger" aria-label="Replace ceramic-jar.svg"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><input type="file" accept="image/*" hidden></label></span>
  <span class="fh-value fh-value--thumb fh-value--lg" data-fh="VAL-8.2"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span></span>
</div>
```

`VAL-8.3` Media frame, +N · `file` `media-badge` · built from THB

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--thumbs" data-fh="VAL-8.3"><span class="fh-avatars" role="group" aria-label="5 images"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/candle.svg" alt="candle.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/soap.svg" alt="soap.svg"></span><span class="fh-avatar fh-avatar--square fh-avatars__more">+2</span></span></span>
  <span class="fh-value fh-value--thumbs" data-mode="edit" data-fh="VAL-8.3"><span class="fh-avatars" role="group" aria-label="5 images"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/candle.svg" alt="candle.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/soap.svg" alt="soap.svg"></span><span class="fh-avatar fh-avatar--square fh-avatars__more">+2</span></span><label class="fh-value__action" aria-label="Add an image" title="Add an image"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i><input type="file" hidden></label></span>
  <span class="fh-value fh-value--thumbs fh-value--lg" data-fh="VAL-8.3"><span class="fh-avatars" role="group" aria-label="5 images"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/candle.svg" alt="candle.svg"></span><span class="fh-avatar fh-avatar--square"><img src="img/shop/soap.svg" alt="soap.svg"></span><span class="fh-avatar fh-avatar--square fh-avatars__more">+2</span></span></span>
</div>
```

`VAL-8.4` Document cell · `file` `doc-cell` · built from CHP, THB

```html
<div class="fh-stack">
  <div class="fh-value fh-value--file-row" data-fh="VAL-8.4"><ul class="fh-files"><li><a href="#c-values-file"><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>relay-report.md</span><small>12 KB</small><time datetime="2026-11-11">Nov 11</time></a></li></ul></div>
  <div class="fh-value fh-value--file-row" data-mode="edit" data-fh="VAL-8.4"><ul class="fh-files"><li><a href="#c-values-file"><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>relay-report.md</span><small>12 KB</small><time datetime="2026-11-11">Nov 11</time></a></li></ul><button class="fh-value__action" type="button" aria-label="Remove relay-report.md" title="Remove"><i class="fh-icon fh-icon--x" aria-hidden="true"></i></button><label class="fh-value__action" aria-label="Replace the file" title="Replace the file"><i class="fh-icon fh-icon--plus" aria-hidden="true"></i><input type="file" hidden></label></div>
  <div class="fh-value fh-value--file-row fh-value--lg" data-fh="VAL-8.4"><ul class="fh-files"><li><a href="#c-values-file"><i class="fh-icon fh-icon--file-text" aria-hidden="true"></i><span>relay-report.md</span><small>12 KB</small><time datetime="2026-11-11">Nov 11</time></a></li></ul></div>
</div>
```

`VAL-8.2` Portrait preview · `file` `doc-portrait` · built from THB

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--thumb" data-fh="VAL-8.2"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span></span>
  <span class="fh-value fh-value--thumb fh-value--chevron" data-mode="edit" data-fh="VAL-8.2"><label class="fh-value__trigger" aria-label="Replace ceramic-jar.svg"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span><input type="file" accept="image/*" hidden></label></span>
  <span class="fh-value fh-value--thumb fh-value--lg" data-fh="VAL-8.2"><span class="fh-avatar fh-avatar--square"><img src="img/shop/ceramic-jar.svg" alt="ceramic-jar.svg"></span></span>
</div>
```

#### VAL-9 Link

`VAL-9.1` Link (trimmed URL) · `link` `link` · built from ACT

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--link" data-fh="VAL-9.1"><a class="fh-link" href="https://firehorse.rascode.dev/data/" title="https://firehorse.rascode.dev/data/">firehorse.rascode.dev/data</a></span>
  <span class="fh-value fh-value--link" data-mode="edit" data-fh="VAL-9.1"><input class="fh-value__input" type="url" value="https://firehorse.rascode.dev/data/" aria-label="Website"></span>
  <span class="fh-value fh-value--link fh-value--lg" data-fh="VAL-9.1"><a class="fh-link" href="https://firehorse.rascode.dev/data/" title="https://firehorse.rascode.dev/data/">firehorse.rascode.dev/data</a></span>
  <span class="fh-value" data-empty data-fh="VAL-9.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-9.2` Email · `link` `email` · built from ACT

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--email" data-fh="VAL-9.2"><a class="fh-link" href="mailto:ava@northwind.example">ava@northwind.example</a></span>
  <span class="fh-value fh-value--email" data-mode="edit" data-fh="VAL-9.2"><input class="fh-value__input" type="email" value="ava@northwind.example" aria-label="Email"></span>
  <span class="fh-value fh-value--email fh-value--lg" data-fh="VAL-9.2"><a class="fh-link" href="mailto:ava@northwind.example">ava@northwind.example</a></span>
</div>
```

`VAL-9.3` Phone · `link` `phone` · built from ACT

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--phone fh-value--tabular" data-fh="VAL-9.3"><a class="fh-link" href="tel:+17045550142">+1 704 555 0142</a></span>
  <span class="fh-value fh-value--phone fh-value--tabular" data-mode="edit" data-fh="VAL-9.3"><input class="fh-value__input" type="tel" value="+1 704 555 0142" aria-label="Phone"></span>
  <span class="fh-value fh-value--phone fh-value--tabular fh-value--lg" data-fh="VAL-9.3"><a class="fh-link" href="tel:+17045550142">+1 704 555 0142</a></span>
</div>
```

`VAL-9.4` Link chip · `link` `link-chip` · built from CHP

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--link-chip" data-fh="VAL-9.4"><a class="fh-chip fh-chip--sm" data-tone="sky" href="https://firehorse.rascode.dev/"><i class="fh-icon fh-icon--link" aria-hidden="true"></i>firehorse.rascode.dev</a></span>
  <span class="fh-value fh-value--link-chip" data-mode="edit" data-fh="VAL-9.4"><span class="fh-chip fh-chip--sm" data-tone="sky"><i class="fh-icon fh-icon--link" aria-hidden="true"></i><input class="fh-value__input" type="url" value="firehorse.rascode.dev" aria-label="Website"></span></span>
  <span class="fh-value fh-value--link-chip fh-value--lg" data-fh="VAL-9.4"><a class="fh-chip" data-tone="sky" href="https://firehorse.rascode.dev/"><i class="fh-icon fh-icon--link" aria-hidden="true"></i>firehorse.rascode.dev</a></span>
</div>
```

`VAL-9.5` Action · `link` `action` · built from ACT

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--action" data-fh="VAL-9.5"><a class="fh-action" href="#c-values-link">Open invoice</a></span>
  <span class="fh-value fh-value--action" data-mode="edit" title="An action is computed: it stays as it is while editing" data-fh="VAL-9.5"><a class="fh-action" href="#c-values-link">Open invoice</a></span>
  <span class="fh-value fh-value--action fh-value--lg" data-fh="VAL-9.5"><a class="fh-action fh-action--lg" href="#c-values-link">Open invoice</a></span>
</div>
```

`VAL-9.6` URL input · `link` `url-input` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--url-input fh-value--field" data-mode="read" data-fh="VAL-9.6"><div class="fh-input-group"><span>https://</span><input class="fh-input" type="url" value="firehorse.rascode.dev/data" aria-label="Website" readonly></div></div>
  <div class="fh-value fh-value--url-input fh-value--field" data-mode="edit" data-fh="VAL-9.6"><div class="fh-input-group"><span>https://</span><input class="fh-input" type="url" value="firehorse.rascode.dev/data" aria-label="Website"></div></div>
  <div class="fh-value fh-value--url-input fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-9.6"><div class="fh-input-group"><span>https://</span><input class="fh-input" type="url" value="firehorse.rascode.dev/data" aria-label="Website"></div></div>
</div>
```

`VAL-9.7` Email input · `link` `email-input` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--email-input fh-value--field" data-mode="read" data-fh="VAL-9.7"><input class="fh-input" type="email" value="ava@northwind.example" aria-label="Email" readonly></div>
  <div class="fh-value fh-value--email-input fh-value--field" data-mode="edit" data-fh="VAL-9.7"><input class="fh-input" type="email" value="ava@northwind.example" aria-label="Email"></div>
  <div class="fh-value fh-value--email-input fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-9.7"><input class="fh-input" type="email" value="ava@northwind.example" aria-label="Email"></div>
</div>
```

`VAL-9.8` Phone input · `link` `phone-input` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--phone-input fh-value--field" data-mode="read" data-fh="VAL-9.8"><input class="fh-input" type="tel" value="+1 704 555 0142" aria-label="Phone" readonly></div>
  <div class="fh-value fh-value--phone-input fh-value--field" data-mode="edit" data-fh="VAL-9.8"><input class="fh-input" type="tel" value="+1 704 555 0142" aria-label="Phone"></div>
  <div class="fh-value fh-value--phone-input fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-9.8"><input class="fh-input" type="tel" value="+1 704 555 0142" aria-label="Phone"></div>
</div>
```

#### VAL-10 Flag

`VAL-10.1` Check · `flag` `check` · built from CHO

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--check" data-mode="read" data-fh="VAL-10.1"><label class="fh-check"><input type="checkbox" checked aria-label="Billable" disabled></label></span>
  <span class="fh-value fh-value--check" data-mode="edit" data-fh="VAL-10.1"><label class="fh-check"><input type="checkbox" checked aria-label="Billable"></label></span>
  <span class="fh-value fh-value--check fh-value--lg" data-mode="read" data-fh="VAL-10.1"><label class="fh-check"><input type="checkbox" checked aria-label="Billable" disabled></label></span>
  <span class="fh-value" data-empty data-fh="VAL-10.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-10.2` Yes or no · `flag` `yes-no`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--yes-no" data-fh="VAL-10.2"><i class="fh-icon fh-icon--check" aria-hidden="true"></i>Yes</span> <span class="fh-value fh-value--yes-no fh-value--no" data-fh="VAL-10.2">No</span>
  <span class="fh-value fh-value--yes-no fh-value--chevron" data-mode="edit" data-fh="VAL-10.2"><select class="fh-value__select" aria-label="Billable"><option value="yes" selected>Yes</option><option value="no">No</option></select></span>
  <span class="fh-value fh-value--yes-no fh-value--lg" data-fh="VAL-10.2"><i class="fh-icon fh-icon--check" aria-hidden="true"></i>Yes</span>
</div>
```

`VAL-10.3` Count · `flag` `count`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--count fh-value--tabular" data-fh="VAL-10.3">4<span class="fh-value__sub">of 12 billable</span></span>
  <span class="fh-value fh-value--count fh-value--tabular" data-mode="edit" title="A count is computed: it stays read-only while editing" data-fh="VAL-10.3">4<span class="fh-value__sub">of 12 billable</span></span>
  <span class="fh-value fh-value--count fh-value--tabular fh-value--lg" data-fh="VAL-10.3">4<span class="fh-value__sub">of 12 billable</span></span>
</div>
```

`VAL-10.4` Switch · `flag` `switch` · editable · built from CHO

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--switch" data-mode="read" data-fh="VAL-10.4"><label class="fh-check"><input class="fh-switch" role="switch" type="checkbox" checked aria-label="Send me a copy" disabled></label></span>
  <span class="fh-value fh-value--switch" data-mode="edit" data-fh="VAL-10.4"><label class="fh-check"><input class="fh-switch" role="switch" type="checkbox" checked aria-label="Send me a copy"></label></span>
  <span class="fh-value fh-value--switch fh-value--lg" data-mode="edit" data-fh="VAL-10.4"><label class="fh-check"><input class="fh-switch" role="switch" type="checkbox" checked aria-label="Send me a copy"></label></span>
</div>
```

#### VAL-11 Prose, text and code

`VAL-11.1` Two lines · `prose` `clamp-2`

```html
<div class="fh-stack">
  <span class="fh-value fh-value--clamp-2" data-fh="VAL-11.1">The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</span>
  <div class="fh-value fh-value--clamp-2 fh-value--field" data-mode="edit" data-fh="VAL-11.1"><textarea class="fh-value__input" rows="2" aria-label="Summary">The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</textarea></div>
  <span class="fh-value fh-value--clamp-2 fh-value--lg" data-fh="VAL-11.1">The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</span>
  <span class="fh-value" data-empty data-fh="VAL-11.1"><span aria-hidden="true">—</span><span class="fh-sr-only">Empty</span></span>
</div>
```

`VAL-11.2` Three lines · `prose` `clamp-3`

```html
<div class="fh-stack">
  <span class="fh-value fh-value--clamp-3" data-fh="VAL-11.2">The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</span>
  <div class="fh-value fh-value--clamp-3 fh-value--field" data-mode="edit" data-fh="VAL-11.2"><textarea class="fh-value__input" rows="3" aria-label="Summary">The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</textarea></div>
  <span class="fh-value fh-value--clamp-3 fh-value--lg" data-fh="VAL-11.2">The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</span>
</div>
```

`VAL-11.3` Full · `prose` `full`

```html
<div class="fh-stack">
  <div class="fh-value fh-value--prose" data-fh="VAL-11.3"><p>The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</p><p>Owners see the breach in their next relay readout.</p></div>
  <div class="fh-value fh-value--prose fh-value--field" data-mode="edit" data-fh="VAL-11.3"><textarea class="fh-value__input" rows="5" aria-label="Summary">The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.

Owners see the breach in their next relay readout.</textarea></div>
  <div class="fh-value fh-value--prose fh-value--lg" data-fh="VAL-11.3"><p>The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</p><p>Owners see the breach in their next relay readout.</p></div>
</div>
```

`VAL-11.4` Textarea · `prose` `textarea` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--textarea fh-value--field" data-mode="read" data-fh="VAL-11.4"><textarea class="fh-textarea" rows="4" aria-label="Summary" readonly>The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</textarea></div>
  <div class="fh-value fh-value--textarea fh-value--field" data-mode="edit" data-fh="VAL-11.4"><textarea class="fh-textarea" rows="4" aria-label="Summary">The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</textarea></div>
  <div class="fh-value fh-value--textarea fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-11.4"><textarea class="fh-textarea" rows="4" aria-label="Summary">The index refresh moves every goal onto the new display contract, so a status, a person or an amount reads the same in Helm, on the site and in the sidecar. Rows that fail the check are flagged in the audit and sent back to their owner with the rule they broke.</textarea></div>
</div>
```

`VAL-11.5` Line · `text` `line`

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--line" data-fh="VAL-11.5"><span class="fh-value__name">Harbor index refresh</span></span>
  <span class="fh-value fh-value--line" data-mode="edit" data-fh="VAL-11.5"><input class="fh-value__input" type="text" value="Harbor index refresh" aria-label="Title"></span>
  <span class="fh-value fh-value--line fh-value--lg" data-fh="VAL-11.5"><span class="fh-value__name">Harbor index refresh</span></span>
</div>
```

`VAL-11.6` Input · `text` `input` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--input fh-value--field" data-mode="read" data-fh="VAL-11.6"><input class="fh-input" type="text" value="Harbor index refresh" aria-label="Title" readonly></div>
  <div class="fh-value fh-value--input fh-value--field" data-mode="edit" data-fh="VAL-11.6"><input class="fh-input" type="text" value="Harbor index refresh" aria-label="Title"></div>
  <div class="fh-value fh-value--input fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-11.6"><input class="fh-input" type="text" value="Harbor index refresh" aria-label="Title"></div>
</div>
```

`VAL-9.5` Action · `text` `action` · built from ACT

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--action" data-fh="VAL-9.5"><a class="fh-action" href="#c-values-link">Open invoice</a></span>
  <span class="fh-value fh-value--action" data-mode="edit" title="An action is computed: it stays as it is while editing" data-fh="VAL-9.5"><a class="fh-action" href="#c-values-link">Open invoice</a></span>
  <span class="fh-value fh-value--action fh-value--lg" data-fh="VAL-9.5"><a class="fh-action fh-action--lg" href="#c-values-link">Open invoice</a></span>
</div>
```

`VAL-11.7` Mono · `code` `mono` · built from DET

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--mono" data-fh="VAL-11.7">rc_01HF3K9ZQ4</span>
  <span class="fh-value fh-value--mono" data-mode="edit" data-fh="VAL-11.7"><input class="fh-value__input" type="text" value="rc_01HF3K9ZQ4" aria-label="System ID"></span>
  <span class="fh-value fh-value--mono fh-value--lg" data-fh="VAL-11.7">rc_01HF3K9ZQ4</span>
</div>
```

`VAL-11.8` Copyable code · `code` `copyable` · built from DET

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--copyable" data-fh="VAL-11.8"><code class="fh-kbd" title="0x7a250d5630b4cf539739df2c5dacb4c659f2488d">0x7a25…f3c1</code><button class="fh-value__action" type="button" aria-label="Copy the transaction hash" title="Copy" onclick="navigator.clipboard?.writeText(this.previousElementSibling.title)"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button></span>
  <span class="fh-value fh-value--copyable fh-value--mono" data-mode="edit" data-fh="VAL-11.8"><input class="fh-value__input" type="text" value="0x7a250d5630b4cf539739df2c5dacb4c659f2488d" aria-label="Transaction hash"></span>
  <span class="fh-value fh-value--copyable fh-value--lg" data-fh="VAL-11.8"><code class="fh-kbd" title="0x7a250d5630b4cf539739df2c5dacb4c659f2488d">0x7a25…f3c1</code><button class="fh-value__action" type="button" aria-label="Copy the transaction hash" title="Copy" onclick="navigator.clipboard?.writeText(this.previousElementSibling.title)"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button></span>
</div>
```

`VAL-11.9` Masked vault reference · `code` `masked` · built from DET

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--masked" data-fh="VAL-11.9"><code class="fh-kbd" aria-label="Secret key ending 4f2a"><span aria-hidden="true">••••••••</span>4f2a</code></span>
  <span class="fh-value fh-value--masked fh-value--mono" data-mode="edit" data-fh="VAL-11.9"><code class="fh-kbd" aria-label="Secret key ending 4f2a"><span aria-hidden="true">••••••••</span>4f2a</code><input class="fh-value__input" type="password" value aria-label="Replace the secret key" placeholder="Paste a new key" autocomplete="off" spellcheck="false"></span>
  <span class="fh-value fh-value--masked fh-value--lg" data-fh="VAL-11.9"><code class="fh-kbd" aria-label="Secret key ending 4f2a"><span aria-hidden="true">••••••••</span>4f2a</code></span>
</div>
```

`VAL-11.10` Code block · `code` `code-block` · built from DET

```html
<div class="fh-stack">
  <div class="fh-value fh-value--code-block" data-fh="VAL-11.10"><figure class="fh-code"><pre><code>{
  &quot;kind&quot;: &quot;relay&quot;,
  &quot;turns&quot;: 2,
  &quot;status&quot;: &quot;merged&quot;
}</code></pre></figure></div>
  <div class="fh-value fh-value--code-block fh-value--mono fh-value--field" data-mode="edit" data-fh="VAL-11.10"><textarea class="fh-value__input" rows="5" aria-label="Settings, JSON">{
  &quot;kind&quot;: &quot;relay&quot;,
  &quot;turns&quot;: 2,
  &quot;status&quot;: &quot;merged&quot;
}</textarea></div>
  <div class="fh-value fh-value--code-block fh-value--lg" data-fh="VAL-11.10"><figure class="fh-code"><pre><code>{
  &quot;kind&quot;: &quot;relay&quot;,
  &quot;turns&quot;: 2,
  &quot;status&quot;: &quot;merged&quot;
}</code></pre></figure></div>
</div>
```

`VAL-11.11` Input, mono · `code` `input-mono` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--input-mono fh-value--mono fh-value--field" data-mode="read" data-fh="VAL-11.11"><input class="fh-input" type="text" value="rc_01HF3K9ZQ4" aria-label="System ID" readonly></div>
  <div class="fh-value fh-value--input-mono fh-value--mono fh-value--field" data-mode="edit" data-fh="VAL-11.11"><input class="fh-input" type="text" value="rc_01HF3K9ZQ4" aria-label="System ID"></div>
  <div class="fh-value fh-value--input-mono fh-value--mono fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-11.11"><input class="fh-input" type="text" value="rc_01HF3K9ZQ4" aria-label="System ID"></div>
</div>
```

`VAL-11.12` Textarea, mono · `code` `textarea-mono` · editable · built from FLD

```html
<div class="fh-stack">
  <div class="fh-value fh-value--textarea-mono fh-value--mono fh-value--field" data-mode="read" data-fh="VAL-11.12"><textarea class="fh-textarea" rows="4" aria-label="Settings, JSON" readonly>{
  &quot;kind&quot;: &quot;relay&quot;,
  &quot;turns&quot;: 2,
  &quot;status&quot;: &quot;merged&quot;
}</textarea></div>
  <div class="fh-value fh-value--textarea-mono fh-value--mono fh-value--field" data-mode="edit" data-fh="VAL-11.12"><textarea class="fh-textarea" rows="4" aria-label="Settings, JSON">{
  &quot;kind&quot;: &quot;relay&quot;,
  &quot;turns&quot;: 2,
  &quot;status&quot;: &quot;merged&quot;
}</textarea></div>
  <div class="fh-value fh-value--textarea-mono fh-value--mono fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-11.12"><textarea class="fh-textarea" rows="4" aria-label="Settings, JSON">{
  &quot;kind&quot;: &quot;relay&quot;,
  &quot;turns&quot;: 2,
  &quot;status&quot;: &quot;merged&quot;
}</textarea></div>
</div>
```

`VAL-11.13` Key field · `code` `key-field` · editable · built from KEY

```html
<div class="fh-stack">
  <div class="fh-value fh-value--key-field fh-value--field" data-mode="read" data-fh="VAL-11.13"><div class="fh-keyfield" data-fh-keyfield data-kind="credential" data-state="set" data-key-id="val-secret-1"><div class="fh-keyfield__head"><span class="fh-keyfield__label" id="val-kf-1">Secret key</span><span class="fh-keyfield__type" data-kind="credential">Stripe secret</span></div><code class="fh-keyfield__name">ACME__STRIPE_SECRET_KEY</code><div class="fh-keyfield__value"><output class="fh-keyfield__mask" aria-labelledby="val-kf-1"><span class="fh-keyfield__dots" aria-hidden="true"></span><span class="fh-keyfield__last">4f2a</span></output><button class="fh-keyfield__action" type="button" data-keyfield-copy aria-label="Copy secret key" title="Copy"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button></div></div></div>
  <div class="fh-value fh-value--key-field fh-value--field" data-mode="edit" data-fh="VAL-11.13"><div class="fh-keyfield" data-fh-keyfield data-kind="credential" data-state="empty" data-key-id="val-secret-2"><div class="fh-keyfield__head"><span class="fh-keyfield__label" id="val-kf-2">Secret key</span><span class="fh-keyfield__type" data-kind="credential">Stripe secret</span></div><code class="fh-keyfield__name">ACME__STRIPE_SECRET_KEY</code><div class="fh-keyfield__value"><output class="fh-keyfield__mask" aria-labelledby="val-kf-2"><span class="fh-keyfield__dots" aria-hidden="true"></span><span class="fh-keyfield__last">4f2a</span></output><button class="fh-keyfield__action" type="button" aria-label="Replace secret key" title="Replace"><i class="fh-icon fh-icon--pencil" aria-hidden="true"></i></button></div><form class="fh-keyfield__editor" hidden><input class="fh-input" type="password" autocomplete="off" spellcheck="false" placeholder="sk_live_…" aria-label="Secret key"><button class="fh-button fh-button--sm" type="submit">Save</button></form></div></div>
  <div class="fh-value fh-value--key-field fh-value--field fh-value--lg" data-mode="edit" data-fh="VAL-11.13"><div class="fh-keyfield" data-fh-keyfield data-kind="credential" data-state="empty" data-key-id="val-secret-3"><div class="fh-keyfield__head"><span class="fh-keyfield__label" id="val-kf-3">Secret key</span><span class="fh-keyfield__type" data-kind="credential">Stripe secret</span></div><code class="fh-keyfield__name">ACME__STRIPE_SECRET_KEY</code><div class="fh-keyfield__value"><output class="fh-keyfield__mask" aria-labelledby="val-kf-3"><span class="fh-keyfield__dots" aria-hidden="true"></span><span class="fh-keyfield__last">4f2a</span></output><button class="fh-keyfield__action" type="button" aria-label="Replace secret key" title="Replace"><i class="fh-icon fh-icon--pencil" aria-hidden="true"></i></button></div><form class="fh-keyfield__editor" hidden><input class="fh-input" type="password" autocomplete="off" spellcheck="false" placeholder="sk_live_…" aria-label="Secret key"><button class="fh-button fh-button--sm" type="submit">Save</button></form></div></div>
</div>
```

`VAL-11.14` Git branch · `code` `branch` · built from DET

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--branch fh-value--mono" data-fh="VAL-11.14"><i class="fh-icon fh-icon--git-branch" aria-hidden="true"></i><span class="fh-value__name" title="relay/rs1-fh-relay-sidecar-parts">relay/rs1-fh-relay-sidecar-parts</span></span>
  <span class="fh-value fh-value--branch fh-value--mono" data-mode="edit" data-fh="VAL-11.14"><input class="fh-value__input" type="text" value="relay/rs1-fh-relay-sidecar-parts" aria-label="Branch" spellcheck="false"></span>
  <span class="fh-value fh-value--branch fh-value--mono fh-value--lg" data-fh="VAL-11.14"><i class="fh-icon fh-icon--git-branch" aria-hidden="true"></i><span class="fh-value__name" title="relay/rs1-fh-relay-sidecar-parts">relay/rs1-fh-relay-sidecar-parts</span></span>
</div>
```

`VAL-11.15` File path, last two segments · `code` `path` · built from DET

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--path fh-value--mono" data-fh="VAL-11.15"><span class="fh-value__name" title="apps/helm/scripts/relay-audit.mts">…/scripts/relay-audit.mts</span></span>
  <span class="fh-value fh-value--path fh-value--mono" data-mode="edit" data-fh="VAL-11.15"><input class="fh-value__input" type="text" value="apps/helm/scripts/relay-audit.mts" aria-label="Path" spellcheck="false"></span>
  <span class="fh-value fh-value--path fh-value--mono fh-value--lg" data-fh="VAL-11.15"><span class="fh-value__name" title="apps/helm/scripts/relay-audit.mts">…/scripts/relay-audit.mts</span></span>
</div>
```

`VAL-11.16` File path with copy · `code` `path-copy` · built from DET

```html
<div class="fh-cluster">
  <span class="fh-value fh-value--path-copy fh-value--mono" data-fh="VAL-11.16"><span class="fh-value__name" title="apps/helm/scripts/relay-audit.mts">…/scripts/relay-audit.mts</span><button class="fh-value__action" type="button" aria-label="Copy the path" title="Copy" onclick="navigator.clipboard?.writeText(this.previousElementSibling.title)"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button></span>
  <span class="fh-value fh-value--path-copy fh-value--mono" data-mode="edit" data-fh="VAL-11.16"><input class="fh-value__input" type="text" value="apps/helm/scripts/relay-audit.mts" aria-label="Path" spellcheck="false"></span>
  <span class="fh-value fh-value--path-copy fh-value--mono fh-value--lg" data-fh="VAL-11.16"><span class="fh-value__name" title="apps/helm/scripts/relay-audit.mts">…/scripts/relay-audit.mts</span><button class="fh-value__action" type="button" aria-label="Copy the path" title="Copy" onclick="navigator.clipboard?.writeText(this.previousElementSibling.title)"><i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button></span>
</div>
```
<!-- parts:end -->
