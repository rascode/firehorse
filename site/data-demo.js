// Firehorse site: the datatable demo and its record drawer.
// Sample data only: companies, people and figures are invented.
import { FirehorseTable } from "./datatable.js";

const people = ["ava", "cole", "eleanor", "isla", "mateo", "maya", "ray", "reginald", "ruth", "sam", "wes"];
const person = (n) => ({ name: n[0].toUpperCase() + n.slice(1), image: `img/avatars/${n}.webp` });
const team = ["ava", "mateo", "ruth", "sam"].map(person);
const companies = ["Northwind Labs", "Halcyon Health", "Tastin & Co", "Brennan Landscapes", "Oak & Ember", "Juniper Dental", "Kestrel Freight", "Marigold Studio", "Lumen Legal", "Cobalt Analytics", "Saltwater Supply", "Pioneer Roofing", "Atlas Wealth", "Verdant Farms", "Quill & Ink", "Summit Physio", "Harbor Coffee", "Nimbus Air", "Fernwood Realty", "Copperline Electric", "Bluebird Bakery", "Granite Works", "Meridian Clinic", "Wildflower Events", "Ironclad Security", "Lighthouse Learning", "Redwood Dental", "Sable & Stone", "Orbit Logistics", "Thistle Botanicals", "Vantage Capital", "Willow Pet Care", "Ember Hospitality", "Keystone Builders", "Lark Audio", "Mosaic Media", "Prairie Supply", "Riverbend Vet", "Solstice Yoga", "Tidewater Marine", "Upland Outfitters", "Zephyr Wind"];
const stages = [{ value: "Lead", tone: "sky" }, { value: "Qualified", tone: "teal" }, { value: "Proposal", tone: "amber" }, { value: "Won", tone: "lime" }, { value: "Lost", tone: "rose" }];
const services = [{ value: "Design system", tone: "fuchsia" }, { value: "Website", tone: "violet" }, { value: "AI agents", tone: "sky" }, { value: "Automation", tone: "orange" }, { value: "Consulting", tone: "teal" }];
const sources = [{ value: "Referral", tone: "lime" }, { value: "Firehorse", tone: "accent" }, { value: "Upwork", tone: "teal" }, { value: "LinkedIn", tone: "sky" }, { value: "Event", tone: "amber" }];

// Deterministic pseudo-random, so the demo looks the same on every load.
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const pick = (a) => a[Math.floor(rnd() * a.length)];
const day = (offset) => { const d = new Date(); d.setDate(d.getDate() + offset); return d.toISOString().slice(0, 10); };

const rows = companies.map((company, i) => {
  const stage = stages[Math.min(4, Math.floor(rnd() * 5))].value;
  const contact = person(people[i % people.length]);
  const slug = company.toLowerCase().replace(/&/g, "and").replace(/[^a-z]+/g, "");
  const svc = services.filter(() => rnd() > 0.62).map((s) => s.value);
  if (!svc.length) svc.push(pick(services).value);
  const value = Math.round((1200 + rnd() * 38000) / 50) * 50;
  const prob = { Lead: 10, Qualified: 30, Proposal: 60, Won: 100, Lost: 0 }[stage] + (stage === "Won" || stage === "Lost" ? 0 : Math.round(rnd() * 15));
  return {
    id: `r${i + 1}`,
    company,
    contact,
    stage,
    services: svc,
    value,
    probability: prob,
    weighted: Math.round((value * prob) / 100),
    next: day(Math.round(rnd() * 30) - 8),
    owner: pick(team),
    watchers: team.filter(() => rnd() > 0.5),
    priority: 1 + Math.floor(rnd() * 5),
    source: pick(sources).value,
    website: `https://${slug}.example`,
    email: `${contact.name.toLowerCase()}@${slug}.example`,
    phone: `(704) 555-0${String(100 + i).slice(-3)}`,
    signed: stage === "Won",
    health: Array.from({ length: 10 }, (_, k) => Math.round(20 + rnd() * 60 + (stage === "Won" ? k * 4 : stage === "Lost" ? -k * 3 : 0))),
    files: [{ name: "scope.pdf" }, { name: "brief.docx" }, { name: "mood.png" }].filter(() => rnd() > 0.45),
    notes: pick(["Wants a design system before the relaunch.", "Asked for an AI receptionist on phone and SMS.", "Needs their CRM and invoicing to talk to each other.", "Second opinion on a Postgres migration plan.", "Rebrand in Q1; site and tokens together.", "Follow up after the board meeting."]),
  };
});

const config = {
  title: "Client pipeline",
  icon: "briefcase",
  tone: "sky",
  primary: "company",
  action: "New record",
  pageSize: 15,
  sort: [{ key: "value", dir: "desc" }],
  hidden: ["email", "phone", "website", "watchers", "weighted"],
  footnote: "Sample data",
  fields: [
    { key: "company", label: "Company", type: "text", width: "13rem" },
    { key: "contact", label: "Contact", type: "user" },
    { key: "stage", label: "Stage", type: "status", options: stages },
    { key: "services", label: "Services", type: "multi", options: services },
    { key: "value", label: "Value", type: "currency", width: "8rem" },
    { key: "probability", label: "Probability", type: "percent", tone: "teal", width: "9rem" },
    { key: "weighted", label: "Weighted", type: "currency", width: "8rem" },
    { key: "next", label: "Next step", type: "date", overdue: true, width: "9rem" },
    { key: "owner", label: "Owner", type: "user", width: "9rem" },
    { key: "watchers", label: "Watchers", type: "users" },
    { key: "priority", label: "Priority", type: "rating" },
    { key: "source", label: "Source", type: "select", options: sources, width: "8rem" },
    { key: "health", label: "Health", type: "sparkline", tone: "lime" },
    { key: "signed", label: "Signed", type: "check" },
    { key: "files", label: "Files", type: "attachment" },
    { key: "website", label: "Website", type: "url" },
    { key: "email", label: "Email", type: "email" },
    { key: "phone", label: "Phone", type: "phone" },
    { key: "notes", label: "Notes", type: "long" },
  ],
  rows,
};

const el = document.getElementById("pipeline");
if (el) {
  const table = new FirehorseTable(el, config);
  window.fhPipeline = table;
  const toast = (msg) => window.fhToast?.(msg);
  el.addEventListener("fh:bulk", (e) => { if (e.detail.action !== "clear") toast(`${e.detail.rows.length} records: ${e.detail.action === "csv" ? "exported as CSV" : "copied"}`); });
  el.addEventListener("fh:action", () => toast("New record: wire this to your create form."));
  el.addEventListener("fh:change", (e) => toast(`${e.detail.row.company}: ${e.detail.key} → ${e.detail.value}`));

  // —— Record drawer ——
  const dlg = document.getElementById("record");
  const $ = (s) => dlg.querySelector(s);
  const money = (v) => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);
  let current = null;
  const render = (row) => {
    current = row;
    const stage = stages.find((s) => s.value === row.stage);
    dlg.dataset.tone = stage.tone;
    $("[data-r='title']").textContent = row.company;
    $("[data-r='subtitle']").textContent = `${row.contact.name} · ${row.source}`;
    $("[data-r='logo']").textContent = row.company.split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
    $("[data-r='chips']").innerHTML =
      `<span class="fh-chip fh-chip--solid fh-chip--sm" data-tone="${stage.tone}">${row.stage}</span>` +
      row.services.map((s) => `<span class="fh-chip fh-chip--tone fh-chip--sm" data-tone="${services.find((x) => x.value === s).tone}">${s}</span>`).join("") +
      (row.signed ? `<span class="fh-chip fh-chip--sm" data-tone="lime"><i class="fh-icon fh-icon--badge-check" aria-hidden="true"></i>Signed</span>` : "");
    $("[data-r='facts']").innerHTML = `<div><dt>Value</dt><dd>${money(row.value)}</dd></div><div><dt>Probability</dt><dd>${row.probability}%</dd></div><div><dt>Weighted</dt><dd>${money(row.weighted)}</dd></div>`;
    $("[data-r='deal']").innerHTML = [
      ["user", "Owner", `<span class="fh-cell__user"><span class="fh-avatar fh-avatar--xs"><img src="${row.owner.image}" alt=""></span>${row.owner.name}</span>`],
      ["calendar", "Next step", new Date(row.next).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })],
      ["star", "Priority", `<span class="fh-rating" data-tone="amber" style="--v:${row.priority}" role="img" aria-label="${row.priority} of 5"></span>`],
      ["chart-line", "Health", el.querySelector(`[data-id="${row.id}"] .fh-sparkline`)?.outerHTML ?? ""],
    ].map(([i, k, v]) => `<div><dt><i class="fh-icon fh-icon--${i}" aria-hidden="true"></i>${k}</dt><dd>${v}</dd></div>`).join("");
    $("[data-r='contact']").innerHTML = [
      ["user", "Name", `<span class="fh-cell__user"><span class="fh-avatar fh-avatar--xs"><img src="${row.contact.image}" alt=""></span>${row.contact.name}</span>`],
      ["at-sign", "Email", `<a class="fh-link" href="mailto:${row.email}">${row.email}</a>`],
      ["phone", "Phone", row.phone],
      ["globe", "Website", `<a class="fh-link" href="${row.website}" target="_blank" rel="noopener">${row.website.replace("https://", "")}</a>`],
    ].map(([i, k, v]) => `<div><dt><i class="fh-icon fh-icon--${i}" aria-hidden="true"></i>${k}</dt><dd>${v}</dd></div>`).join("");
    const sel = $("[data-r-edit='stage']");
    sel.innerHTML = stages.map((s) => `<option ${s.value === row.stage ? "selected" : ""}>${s.value}</option>`).join("");
    $("[data-r-edit='next']").value = row.next;
    $("[data-r-edit='signed']").checked = row.signed;
    dlg.querySelectorAll("[name='r-priority']").forEach((r) => (r.checked = Number(r.value) === row.priority));
    $("[data-r='notes']").value = row.notes;
    $("[data-r='activity']").innerHTML = [
      ["lime", "Today · 9:41", `<strong>${row.owner.name}</strong> moved the deal to ${row.stage}.`],
      ["sky", "Yesterday", `<strong>${row.contact.name}</strong> opened the proposal.`],
      ["amber", "3 days ago", `Discovery call booked from ${row.source}.`],
    ].map(([t, w, p]) => `<li data-tone="${t}"><time>${w}</time><p>${p}</p></li>`).join("");
    $("[data-r='files']").innerHTML = row.files.length
      ? row.files.map((f) => `<div class="fh-chip-card" data-tone="${f.name.endsWith(".pdf") ? "rose" : f.name.endsWith(".png") ? "violet" : "sky"}"><span class="fh-chip-card__block">${f.name.split(".").pop().toUpperCase()}</span><span class="fh-chip-card__text"><b>${f.name}</b><small>Sample file</small></span></div>`).join("")
      : `<p class="fh-muted" style="margin:0">No files yet.</p>`;
  };
  el.addEventListener("fh:row-open", (e) => { render(e.detail.row); if (!dlg.open) dlg.showModal(); });
  dlg.addEventListener("click", (e) => {
    if (e.target.closest("[data-r-close]")) dlg.close();
    const step = e.target.closest("[data-r-step]");
    if (step) {
      const list = table.result;
      const i = list.findIndex((r) => r.id === current.id);
      const next = list[(i + Number(step.dataset.rStep) + list.length) % list.length];
      if (next) render(next);
    }
    if (e.target.closest("[data-r-save]")) {
      table.update(current.id, {
        stage: $("[data-r-edit='stage']").value,
        next: $("[data-r-edit='next']").value,
        signed: $("[data-r-edit='signed']").checked,
        priority: Number(dlg.querySelector("[name='r-priority']:checked")?.value ?? current.priority),
        notes: $("[data-r='notes']").value,
      });
      toast(`${current.company} saved`);
      dlg.close();
    }
  });
}
