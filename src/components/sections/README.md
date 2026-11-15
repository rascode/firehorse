# Sections

The record sidecar and the library of pluggable sections: the sidecar shell (`fh-sidecar`), the section shell (`fh-panel-section`) and one section per data kind (properties, records, timetable, timeline, chat, log, prompts, metrics, links, files, form, stage).

Docs: https://firehorse.rascode.dev/components/sections/

## Notes

Every section has the same header: an icon, a title in the strongest text role, and a collapse control. A collapsed section shows summary chips for what it holds; chips live only there and in the sidecar header, with one exception: a row may carry one status chip, for status only (a log line level, a prompt state), using the chip component with a status tone. The map from data kind to section class is `sections.json`, exported as `@rascode/firehorse/sections.json`.

Page templates (`fh-tpl--landing|list|detail|form|empty`), the landing metric row (`fh-metrics--four`), the reference cell (`fh-ref`), record datatable cells (`fh-dt--records`) and the status chip (`fh-chip[data-status]`) are in `templates.css`, `records.css` and `components/actions/chip-status.css`; `sections.json` maps them under `templates`, `cells` and `chips`. Chip rule: `fh-chip` for status, `fh-badge` for counts only, `fh-status` for inline status text only. The templates use `fh-record` and `fh-section-card`, which are in the core bundle, so `firehorse.css` is all a page needs.

A records row can expand: a toggle first (`button.fh-dt__expand` with `aria-expanded` and `aria-controls`) and a detail row right after it (`tr.fh-dt__detail[hidden]`, one cell spanning every column) that holds a stage (`fh-panel-section__stage`) or a nested records table. `data-state="warning"` on a row gives it a quiet warning edge and tint. Both are plain markup; `records.js` (`@rascode/firehorse/records`) only flips `aria-expanded` and `hidden`, and `sidecar.js` never opens a row's sidecar from its toggle. These rules are scoped to a records table that holds an `fh-ref`, so the public build leaves them out with the rest of Sections.

A timetable whose steps run over more than one day puts a day mark before the first step of each day: `<tr class="fh-panel-section__day"><th colspan="3" scope="colgroup">Sat 15 Nov</th></tr>`, at the Label tier, with no `details` and no control (STT-1.3). Give every step cell a `data-label` (Time, Step, Detail): under 36rem of the table's width it stacks into labelled rows by the `fh-table` reflow rule, and the day mark stays one full-width row.

The relay record (SDC-2.1) is the full specimen of one record in the dialog sidecar, open in place: header (eyebrow, mark, title, slug in mono, three chips), then Summary (properties, one `renderValue()` row per value in the record context), Settings (form: the read rows, a Segment for the mode, Entity pickers, Save and one `fh-status`), Prompts, Timetable with day marks, Replies, Tokens (records, with a Total row), Commits (links, one row with a status chip) and References (links). A page building a record sidecar copies it and changes only the data.

Inside `fh-sidecar` the type scale steps down through the public text tokens, so every Firehorse component placed in a section follows without a one-off size. The metrics section uses `fh-metric`, which is in the core bundle, so a page needs only `firehorse.css`.
