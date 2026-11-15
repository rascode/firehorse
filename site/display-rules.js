// Firehorse site: the display rules specimen (data display contract W1, approved by Rascode 2026-11-14; updated
// for W2b, plan section 7). Every row of schema/display-rules.json in every context, the text context as the
// string textOf() makes, every option set published from devops.option_sets, then all 127 semantic types as
// resolveValue() resolves them. Everything on this page is read from the contract at load: change
// display-rules.json (or publish the platform's option sets), run node scripts/value-rules.mjs, reload.
// Sample data only: people and figures are invented.
import { resolveValue, textOf, rules, semanticTypes, optionSets, CONTEXTS, EMPTY } from "./values.js";

const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const icon = (n) => `<i class="fh-icon fh-icon--${n}" aria-hidden="true"></i>`;
const people = [["Maya Chen", "maya", "Owner"], ["Mateo Ruiz", "mateo", "Designer"], ["Ava Marlow", "ava", "Engineer"], ["Ruth Okoye", "ruth", "Finance"], ["Sam Hale", "sam", "Support"], ["Isla Grant", "isla", "Sales"]];
const av = ([name, img], size = "fh-avatar--xs") => `<span class="fh-avatar ${size}" title="${esc(name)}"><img src="/img/avatars/${img}.webp" alt=""></span>`;
const stack = (list, max) => `<span class="fh-avatars">${list.slice(0, max).map((p) => av(p)).join("")}${list.length > max ? `<span class="fh-avatar fh-avatar--xs">+${list.length - max}</span>` : ""}</span>`;
const chip = (text, tone = "neutral", extra = "", ramp = null) => `<span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="${tone}"${ramp ? ` data-ramp="${ramp}"` : ""}>${extra}${esc(text)}</span>`;
// Dot and word (VAL-1.1): a status in a table cell (decision 5); an ordinal option takes its ramp step instead of a tone.
const dot = (o) => `<span class="fh-value fh-value--dot" ${o.ramp ? `data-ramp="${o.ramp}"` : `data-tone="${o.tone}"`} data-fh="VAL-1.1"><span class="fh-dot"></span>${esc(o.label)}</span>`;
const optionChip = (o) => chip(o.label, o.tone, "", o.ramp);
const chev = ` ${icon("chevron-down")}`;
const num = (s) => `<span class="fh-num site-dr__num">${s}</span>`;
const delta = (s, tone) => ` <span class="site-dr__delta" data-tone="${tone}">${s}</span>`;
const input = (v, type = "text", extra = "") => `<input class="fh-input fh-input--quiet site-dr__input" type="${type}" value="${esc(v)}" aria-label="Sample"${extra}>`;
const select = (v) => `<span class="fh-select-wrap"><select class="fh-select site-dr__input" aria-label="Sample"><option>${esc(v)}</option></select></span>`;
const spark = (values) => {
  const w = 72, h = 20, max = Math.max(...values), min = Math.min(...values);
  const pts = values.map((v, i) => [(i / (values.length - 1)) * w, h - 2 - ((v - min) / (max - min || 1)) * (h - 4)]);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  return `<span data-tone="sky" class="site-dr__spark"><svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></span>`;
};
const tags = ["demo", "featured", "internal", "beta", "q4"];
const files = [["Proposal.pdf", "PDF", "412 KB"], ["Brief.docx", "DOCX", "38 KB"], ["Hero.png", "PNG", "1.2 MB"], ["Budget.xlsx", "XLSX", "64 KB"]];
const prose = "Kickoff went well. The client wants the design system first, then the marketing site on top of it, with a review every Friday and a shared board for open questions.";

/** Markup for one variant of one row, for the row's sample field r (what resolveValue() returned). */
function draw(row, variant, max, r) {
  const opt = (v) => r?.optionSet?.options.find((o) => o.value === v) ?? { value: v, label: v, tone: "neutral" };
  switch (`${row}:${variant}`) {
    case "option.ordinal.few:dot": case "option.ordinal:dot": return dot(opt(row === "option.ordinal" ? "l" : "high"));
    case "option.ordinal.few:chip": case "option.ordinal:chip": return optionChip(opt(row === "option.ordinal" ? "l" : "high"));
    case "option.ordinal.few:segmented": return `<nav class="fh-segment" aria-label="Sample">${r.optionSet.options.map((o) => `<a${o.value === "high" ? ' aria-current="true"' : ""}>${esc(o.label)}</a>`).join("")}</nav>`;
    case "option.ordinal:select": return `${optionChip(opt("l"))}${chev}`;
    case "option.status:dot": return dot(opt("active"));
    case "option.status:chip": return optionChip(opt("active"));
    case "option.status:select": return `<button class="fh-chip fh-chip--tone fh-chip--sm" type="button" data-tone="${opt("active").tone}">${esc(opt("active").label)}${chev}</button>`;
    case "option.code:chip": return chip("MX", "neutral");
    case "option.code:select-search": return `<span class="site-dr__row">${icon("search")}${select("MX · Mexico")}</span>`;
    case "option.few:chip": return chip("she/her");
    case "option.few:segmented": return `<nav class="fh-segment" aria-label="Sample"><a aria-current="true">she/her</a><a>he/him</a><a>they/them</a></nav>`;
    case "option.many:chip": return chip("Northeast", "teal");
    case "option.many:select-search": return `<span class="site-dr__row">${icon("search")}${select("Northeast")}</span>`;
    case "option:chip": return optionChip(opt("ean13"));
    case "option:select": return select("EAN-13");
    case "options:chips": return tags.slice(0, max).map((t) => optionChip(opt(t))).join(" ") + (tags.length > max ? ` ${chip(`+${tags.length - max}`)}` : "");
    case "options:chips-inline": return `<span class="site-dr__wrap">${tags.map((t) => optionChip(opt(t))).join(" ")}</span>`;
    case "options:count": return num(`${tags.length} tags`);
    case "options:tag-field": return `<span class="fh-input site-dr__wrap site-dr__field">${tags.slice(0, 3).map((t) => chip(t, "neutral")).join(" ")}<span class="site-dr__muted">Add a tag</span></span>`;
    case "entities:stack": return stack(people, max ?? 4);
    case "entities:avatar-name": return `<span class="site-dr__list">${people.slice(0, 3).map((p) => `<span class="site-dr__row">${av(p)}${esc(p[0])}</span>`).join("")}</span>`;
    case "entities:picker-multi": return `<button class="fh-entity site-dr__field" type="button"><span class="fh-entity__value">${stack(people, 3)}<span class="fh-entity__who"><b>6 people</b></span></span>${chev}</button>`;
    case "entity.person:avatar-name": return `<span class="site-dr__row">${av(people[0])}Maya Chen</span>`;
    case "entity.person:full": return `<span class="fh-entity__value">${av(people[0], "fh-avatar--circle")}<span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Maya Chen</b><small>Owner</small></span><span class="fh-entity__stat" data-tone="amber"><b>5</b><small>Open</small></span></span>`;
    case "entity.person:chip": return `<span class="fh-chip fh-chip--sm site-dr__row">${av(people[0])}Maya Chen</span>`;
    case "entity.person:stack": return stack(people.slice(0, 3), 4);
    case "entity.person:picker": return `<button class="fh-entity site-dr__field" type="button"><span class="fh-entity__value">${av(people[0], "fh-avatar--circle")}<span class="fh-entity__sep"></span><span class="fh-entity__who"><b>Maya Chen</b><small>Owner</small></span></span>${chev}</button>`;
    case "entity.record:ref": return `<a class="fh-ref" href="#dr-grid"><span class="fh-ref__label">Harbor index refresh</span></a>`;
    case "entity.record:ref-key": return `<a class="fh-ref" href="#dr-grid"><span class="fh-ref__label">Harbor index refresh</span><code class="fh-ref__key">GL-014</code></a>`;
    case "entity.record:name": return "Harbor index refresh";
    case "entity.record:picker": return `<button class="fh-entity site-dr__field" type="button"><span class="fh-entity__value"><span class="fh-entity__who"><b>Harbor index refresh</b><small>Goal · Q4</small></span></span>${chev}</button>`;
    case "money:amount": return num("$12,481");
    case "money:amount-code": return num("$12,480.50 USD");
    case "money:compact": return num("$12.5K");
    case "money:compact-delta": return `${num("$12.5K")}${delta("+8.2%", "lime")}`;
    case "money:money-input": return `<span class="site-dr__row site-dr__field"><span class="site-dr__muted">USD</span>${input("12,480.50")}</span>`;
    case "ratio:bar": return `<span class="site-dr__row"><progress class="fh-progress site-dr__bar" value="69" max="100">69%</progress>${num("69%")}</span>`;
    case "ratio:text": return num("69%");
    case "ratio:ring": return `<div class="fh-ring site-dr__ring" style="--fh-value: 69" role="img" aria-label="69%"><b>69%</b></div>`;
    case "ratio:range": return `<input class="fh-range" type="range" min="0" max="100" value="69" aria-label="Sample">`;
    case "series:sparkline": return spark([4, 7, 5, 9, 8, 12, 10, 14]);
    case "series:sparkline-last": return `<span class="site-dr__row">${spark([4, 7, 5, 9, 8, 12, 10, 14])}${num("14")}</span>`;
    case "number.duration:duration": return num("8h 34m");
    case "number.duration:duration-input": return input("8h 34m");
    case "number.id:plain": return num("11155111");
    case "number.id:number-input": return input("11155111", "text", ' inputmode="numeric"');
    case "number:plain": return num("1,411");
    case "number:unit": return num("1,411 kbps");
    case "number:plain-delta": return `${num("1,411")}${delta("+12", "lime")}`;
    case "number:number-input": return input("1411", "number");
    case "temporal.date:date-relative": return `Nov 27 <span class="site-dr__muted">· in 13d</span>`;
    case "temporal.date:date": return "Nov 27, 2026";
    case "temporal.date:relative": return "in 13 days";
    case "temporal.date:date-picker": return input("2026-11-27", "date");
    case "temporal.time:time": return num("9:27 AM");
    case "temporal.time:time-input": return input("09:27", "time");
    case "temporal:date-relative": return `Nov 14 <span class="site-dr__muted">· 2h ago</span>`;
    case "temporal:datetime": return "Nov 14, 2026, 5:01 PM";
    case "temporal:relative": return "2 hours ago";
    case "temporal:date-picker": return input("2026-11-14T17:01", "datetime-local");
    case "file:type-chip": return files.slice(0, max).map((f) => chip(f[1])).join(" ") + (files.length > max ? ` ${chip(`+${files.length - max}`)}` : "");
    case "file:file-row": return `<span class="site-dr__row">${icon("file-text")}<b>Proposal.pdf</b><span class="site-dr__muted">412 KB</span></span>`;
    case "file:thumb": return `<span class="site-dr__thumb">PDF</span>`;
    case "file:count": return num("4 files");
    case "file:dropzone": return `<div class="fh-dropzone fh-dropzone--compact"><span class="fh-dropzone__title">Drop files or browse</span></div>`;
    case "link.email:email": return `<a href="mailto:maya.chen@example.com">maya.chen@example.com</a>`;
    case "link.email:link-chip": return chip("maya.chen@example.com", "sky", `${icon("at-sign")} `);
    case "link.email:email-input": return input("maya.chen@example.com", "email");
    case "link.phone:phone": return `<a href="tel:+14005222613">+1 400 522 2613</a>`;
    case "link.phone:link-chip": return chip("+1 400 522 2613", "sky", `${icon("phone")} `);
    case "link.phone:phone-input": return input("+1 400 522 2613", "tel");
    case "text.action:action": return `<a class="fh-action" href="#dr-grid">Open ${icon("arrow-up-right")}</a>`;
    case "link:link": return `<a href="#dr-grid">example.com/demo</a>`;
    case "link:link-chip": return chip("example.com", "sky", `${icon("link")} `);
    case "link:url-input": return input("https://example.com/demo", "url");
    case "flag:check": return `<span data-tone="lime" class="site-dr__tone">${icon("circle-check")}</span>`;
    case "flag:yes-no": return "Yes";
    case "flag:count": return num("12 of 40");
    case "flag:switch": return `<input class="fh-switch" type="checkbox" role="switch" checked aria-label="Sample">`;
    case "prose:clamp-2": return `<span class="site-dr__clamp" style="--lines: 2">${esc(prose)}</span>`;
    case "prose:full": return esc(prose);
    case "prose:clamp-3": return `<span class="site-dr__clamp" style="--lines: 3">${esc(prose)}</span>`;
    case "prose:textarea": return `<textarea class="fh-textarea site-dr__input" rows="2" aria-label="Sample">${esc(prose)}</textarea>`;
    case "code.secret:masked": return `<code>vault:••••7f3a</code>`;
    case "code.secret:key-field": return input("vault:••••7f3a", "password");
    case "code.json:mono": return `<code>{"format":"ean13",…}</code>`;
    case "code.json:code-block": return `<figure class="fh-code site-dr__block"><pre><code>{\n  "format": "ean13",\n  "checksum": true\n}</code></pre></figure>`;
    case "code.json:textarea-mono": return `<textarea class="fh-textarea site-dr__input site-dr__mono" rows="2" aria-label="Sample">{"format":"ean13"}</textarea>`;
    case "code:mono": return `<code>0xef11…6709</code>`;
    case "code:copyable": return `<span class="site-dr__row"><code>0xef111265…6709</code><button class="fh-button fh-button--sm fh-button--ghost" type="button" aria-label="Copy">${icon("copy")}</button></span>`;
    case "code:input-mono": return input("0xef111265ee51e58e", "text", ' spellcheck="false"');
    case "text:line": return "Weekly review";
    case "text:input": return input("Weekly review");
    default: return `<span class="site-dr__muted">${esc(variant)}</span>`;
  }
}

// A sample field per grid row, so the page shows what resolveValue() really returns for it, and a sample value
// for its text form (textOf). Two rows have no semantic type of their own yet: a sample field carries its set.
const sizes = { key: "size", optionSet: { key: "sample.size", kind: "choice", ordinal: true, options: ["xs", "s", "m", "l", "xl"].map((v) => ({ value: v, label: v.toUpperCase() })) } };
const regions = { key: "region", optionSet: { key: "sample.region", kind: "choice", options: ["Northeast", "Southeast", "Midwest", "Southwest", "West", "Northwest", "Mountain", "Pacific"].map((v) => ({ value: v, tone: "teal" })) } };
const sampleField = {
  "option.ordinal.few": { semanticType: "priority" }, "option.ordinal": sizes,
  "option.status": { semanticType: "status" }, "option.code": { semanticType: "country_code" }, "option.few": { semanticType: "pronouns" }, "option.many": regions,
  option: { semanticType: "barcode_format" }, options: { semanticType: "tags" }, entities: { semanticType: "owner_reference", multiple: true },
  "entity.person": { semanticType: "owner_reference" }, "entity.record": { semanticType: "entity_reference" }, money: { semanticType: "fiat_amount", currency: "USD" },
  ratio: { semanticType: "percentage" }, series: { semanticType: "waveform_data" }, "number.duration": { semanticType: "duration_iso8601" },
  "number.id": { semanticType: "chain_id" }, number: { semanticType: "bitrate_kbps" },
  "temporal.date": { semanticType: "date" }, "temporal.time": { semanticType: "time" },
  temporal: { semanticType: "updated_at", readOnly: false }, file: { semanticType: "document_file", multiple: true }, "link.email": { semanticType: "email" },
  "link.phone": { semanticType: "phone_e164" }, link: { semanticType: "url" },
  flag: { semanticType: "checkbox" }, prose: { semanticType: "description" }, "code.secret": { semanticType: "api_key_secret_ref" },
  "code.json": { semanticType: "barcode_metadata", readOnly: false }, code: { semanticType: "transaction_hash" }, "text.action": { semanticType: "computed_button" },
  text: { semanticType: "title" },
};
const sampleValue = {
  "option.ordinal.few": "high", "option.ordinal": "l", "option.status": "active", "option.code": "MX", "option.few": "she/her", "option.many": "Northeast",
  option: "ean13", options: ["demo", "featured", "internal"], entities: people.slice(0, 3).map(([label], id) => ({ id, label })), "entity.person": { id: 1, label: "Maya Chen" },
  "entity.record": { id: 14, label: "Harbor index refresh" }, money: 12480.5, ratio: 69, series: [4, 7, 5, 9, 8, 12, 10, 14], "number.duration": 30840,
  "number.id": 11155111, number: 1411, "temporal.date": "2026-11-27", "temporal.time": "09:27:00", temporal: "2026-11-14T22:01:00Z",
  file: files.map(([name]) => ({ name })), "link.email": "maya.chen@example.com", "link.phone": "+14005222613", link: "https://example.com/demo", flag: true,
  prose: "Kickoff went **well**. See [the brief](https://example.com).", "code.secret": "vault:7f3a", "code.json": { format: "ean13" },
  code: "0xef111265ee51e58e6709", "text.action": "Open", text: "Weekly review",
};
const nameOf = (field) => field.semanticType ?? field.optionSet?.key ?? field.key;

function gridTable() {
  const head = `<thead><tr><th scope="col">Row</th>${CONTEXTS.map((c) => `<th scope="col">${c}<small>${esc(rules.contexts[c])}</small></th>`).join("")}</tr></thead>`;
  const body = rules.grid.map((row) => {
    const field = sampleField[row.row];
    const isNew = /^Not in the approved grid/.test(row.note ?? "");
    const isW2b = /\(decision \d\)\.?$/.test(row.note ?? "");
    const cells = CONTEXTS.map((c) => {
      const r = resolveValue(field, c);
      if (r.row !== row.row) return `<td class="site-dr__cell" data-mismatch>resolves to ${esc(r.row)}</td>`;
      if (c === "text") {
        // The text context is never drawn: show the string textOf() makes for the sample value.
        if (!r.variant) return `<td class="site-dr__cell"><div class="site-dr__sample site-dr__muted">no text form</div><code class="site-dr__name">none</code></td>`;
        return `<td class="site-dr__cell"><div class="site-dr__sample"><code class="site-dr__text">${esc(textOf(field, sampleValue[row.row]))}</code></div><code class="site-dr__name">${esc(r.variant)}</code></td>`;
      }
      if (!r.variant) return `<td class="site-dr__cell site-dr__none"><span class="site-dr__muted" aria-label="Not shown">·</span></td>`;
      return `<td class="site-dr__cell"${r.align === "end" ? ' data-align="end"' : ""}><div class="site-dr__sample">${draw(row.row, r.variant, r.max, r)}</div><code class="site-dr__name">${esc(r.variant)}${r.max ? ` +N after ${r.max}` : ""}</code></td>`;
    }).join("");
    return `<tr${isNew ? " data-new" : ""}${isW2b ? " data-w2b" : ""}><th scope="row"><b>${esc(row.label)}</b><small>${esc(rules.variants[row.shape].group)} ${esc(rules.variants[row.shape].name)} · <code>${esc(nameOf(field))}</code></small>${isNew ? `<span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="amber">Added</span>` : ""}${isW2b ? `<span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="violet">Section 7</span>` : ""}${row.note ? `<small class="site-dr__note">${esc(row.note)}</small>` : ""}</th>${cells}</tr>`;
  }).join("");
  const empty = `<tr><th scope="row"><b>Empty (any shape)</b><small>Rule 7</small></th>${CONTEXTS.map(() => `<td class="site-dr__cell"><div class="site-dr__sample site-dr__muted">${EMPTY.text}</div><code class="site-dr__name">empty</code></td>`).join("")}</tr>`;
  return `<div class="fh-table-wrap site-dr__scroll"><table class="fh-table site-dr__grid">${head}<tbody>${body}${empty}</tbody></table></div>`;
}

// Every option set published from devops.option_sets (migration 435): its kind, who uses it, and its options as
// they draw (a status option by its state's tone, a category by its own, an ordinal choice set as a ramp).
function setsTable() {
  const used = (key) => Object.keys(semanticTypes).filter((k) => semanticTypes[k].optionSet === key);
  const rows = Object.entries(optionSets).map(([key, set]) => {
    const r = resolveValue({ optionSet: key, shape: "option", kind: set.ordinal && set.kind !== "status" ? "ordinal" : set.kind === "status" ? "status" : "choice" }, "record");
    const options = r.optionSet.options.map((o) => `<span class="site-dr__opt">${set.kind === "status" ? dot(o) : optionChip(o)}${o.state ? `<small class="site-dr__muted">${esc(o.state)}</small>` : ""}</span>`).join("");
    const kind = `${set.kind}${set.ordinal ? ", ordinal" : ""}${r.ramp ? ", ramp" : ""}`;
    return `<tr><th scope="row"><code>${esc(key)}</code><small>${esc(set.label ?? "")}</small></th><td><small>${esc(kind)}${set.generator ? `<br>generated: ${esc(set.generator)} (samples)` : ""}</small></td><td><small>${used(key).map((k) => `<code>${esc(k)}</code>`).join(" ")}</small></td><td><div class="site-dr__wrap">${options}</div></td></tr>`;
  }).join("");
  return `<div class="fh-table-wrap site-dr__scroll"><table class="fh-table site-dr__types"><thead><tr><th scope="col">Set</th><th scope="col">Kind</th><th scope="col">Used by</th><th scope="col">Options, in order</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function typesTable() {
  const order = Object.keys(rules.shapes);
  const keys = Object.keys(semanticTypes).sort((a, b) => order.indexOf(semanticTypes[a].shape) - order.indexOf(semanticTypes[b].shape) || a.localeCompare(b));
  let last = null;
  const rows = keys.map((key) => {
    const t = semanticTypes[key];
    const r = CONTEXTS.map((c) => resolveValue({ semanticType: key, currency: t.shape === "money" ? "USD" : undefined }, c));
    const group = t.shape !== last ? `<tr class="site-dr__group"><th colspan="${CONTEXTS.length + 2}" scope="rowgroup">${esc(t.shape)} <small>${esc(rules.shapes[t.shape])} · ${keys.filter((k) => semanticTypes[k].shape === t.shape).length}</small></th></tr>` : "";
    last = t.shape;
    return `${group}<tr><th scope="row"><code>${esc(key)}</code><small>${esc(t.label)}</small></th><td><small>${esc(r[0].row)}${t.unit ? ` · ${esc(t.unit)}` : ""}</small></td>${r.map((x) => `<td>${x.variant ? `<code>${esc(x.variant)}</code>` : '<span class="site-dr__muted">·</span>'}${x.readOnly && x.context === "form" ? ' <small class="site-dr__muted">read-only</small>' : ""}</td>`).join("")}</tr>`;
  }).join("");
  return `<div class="fh-table-wrap site-dr__scroll"><table class="fh-table site-dr__types"><thead><tr><th scope="col">Semantic type</th><th scope="col">Grid row</th>${CONTEXTS.map((c) => `<th scope="col">${c}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>`;
}


const fill = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
fill("dr-grid-table", gridTable());
fill("dr-types-table", typesTable());
fill("dr-sets-table", setsTable());
fill("dr-count-sets", String(Object.keys(optionSets).length));
fill("dr-count-rules", String(rules.rules.length));
fill("dr-count-w2b", String(rules.grid.filter((r) => /\(decision \d\)\.?$/.test(r.note ?? "")).length));
fill("dr-rules-list", rules.rules.map((r) => `<li>${esc(r)}</li>`).join(""));
fill("dr-count-rows", String(rules.grid.length));
fill("dr-count-new", String(rules.grid.filter((r) => /^Not in the approved grid/.test(r.note ?? "")).length));
fill("dr-count-types", String(Object.keys(semanticTypes).length));

// Dark / light: one Mode toggle for the grid and the types. The choice is remembered on this browser only.
const frames = [...document.querySelectorAll("[data-dr-frame]")];
const buttons = [...document.querySelectorAll("#dr-mode button[data-mode]")];
const setMode = (mode) => {
  for (const f of frames) f.dataset.fhScheme = mode;
  for (const b of buttons) b.setAttribute("aria-pressed", String(b.dataset.mode === mode));
  try { localStorage.setItem("fh-dr-mode", mode); } catch {}
};
let start = "dark";
try { start = localStorage.getItem("fh-dr-mode") ?? (getComputedStyle(document.documentElement).colorScheme === "light" ? "light" : "dark"); } catch {}
for (const b of buttons) b.addEventListener("click", () => setMode(b.dataset.mode));
setMode(start === "light" ? "light" : "dark");
