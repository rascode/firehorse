# Sections

The record sidecar and the library of pluggable sections: the sidecar shell (`fh-sidecar`), the section shell (`fh-panel-section`) and one section per data kind (properties, records, timetable, timeline, chat, log, prompts, metrics, links, files).

Docs: https://firehorse.rascode.dev/components/sections/

## Notes

Every section has the same header: an icon, a title in the strongest text role, and a collapse control. A collapsed section shows summary chips for what it holds; chips live only there and in the sidecar header, with one exception: a row may carry one status chip, for status only (a log line level, a prompt state), using the chip component with a status tone. The map from data kind to section class is `sections.json`, exported as `@rascode/firehorse/sections.json`.

Page templates (`fh-tpl--landing|list|detail|form|empty`), the landing metric row (`fh-metrics--four`), the reference cell (`fh-ref`), record datatable cells (`fh-dt--records`) and the status chip (`fh-chip[data-status]`) are in `templates.css`, `records.css` and `components/actions/chip-status.css`; `sections.json` maps them under `templates`, `cells` and `chips`. Chip rule: `fh-chip` for status, `fh-badge` for counts only, `fh-status` for inline status text only. The templates use `fh-record` and `fh-section-card`, which are in the core bundle, so `firehorse.css` is all a page needs.

Inside `fh-sidecar` the type scale steps down through the public text tokens, so every Firehorse component placed in a section follows without a one-off size. The metrics section uses `fh-metric`, which is in the core bundle, so a page needs only `firehorse.css`.
