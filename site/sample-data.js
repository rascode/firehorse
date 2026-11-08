/**
 * Firehorse Pro · sample data panel (idea #147).
 * On Forms › Field types (#c-field-types), each type's Generate opens a panel:
 * count · Generate · copy · download CSV. Signed out or not Pro: the panel says
 * it's a Pro feature and links to /pro/. The Firehorse site has no Rascode
 * sign-in yet; the panel still talks to the platform API so a future session
 * (or a Bearer token in localStorage `fh-api-token`) can unlock it.
 *
 * API: POST {api}/v1/firehorse/samples  { type, count: 10|100|1000, format, seed? }
 * Override API host with localStorage `fh-api-base` (e.g. http://api.rascode.local).
 */
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};

const apiBase = () => (store.get("fh-api-base") || "https://api.rascode.dev").replace(/\/$/, "");
const token = () => store.get("fh-api-token") || store.get("fh-rascode-token") || "";

const COUNTS = [10, 100, 1000];

function ensurePanel() {
  let el = document.getElementById("fh-sample-panel");
  if (el) return el;
  el = document.createElement("dialog");
  el.id = "fh-sample-panel";
  el.className = "fh-dialog fh-dialog--float site-sample";
  el.innerHTML = `
    <form method="dialog" class="fh-stack fh-stack--md" style="margin:0">
      <header class="fh-cluster fh-cluster--between" style="align-items:flex-start">
        <div>
          <p class="fh-eyebrow" style="margin:0">Sample data</p>
          <h2 class="fh-heading" id="fh-sample-title" style="margin:0;font-size:var(--fh-text-lg)">Type</h2>
          <p class="fh-muted" id="fh-sample-key" style="margin:0"><code></code></p>
        </div>
        <button class="fh-close" type="submit" aria-label="Close"></button>
      </header>
      <div id="fh-sample-gate" class="fh-stack fh-stack--sm" hidden>
        <p class="fh-lede" style="margin:0">Sample data is a Firehorse Pro feature. Sign in with a Rascode account that has an active Pro membership, then generate values from any field type's mock formula.</p>
        <p><a class="fh-button" href="/pro/">Become a Pro member</a></p>
      </div>
      <div id="fh-sample-body" class="fh-stack fh-stack--md">
        <fieldset class="fh-segmented" aria-label="How many">
          ${COUNTS.map((n, i) => `<label><input type="radio" name="fh-sample-count" value="${n}"${i === 1 ? " checked" : ""}> ${n}</label>`).join("")}
        </fieldset>
        <div class="fh-cluster" style="gap:var(--fh-gap-grouped)">
          <button type="button" class="fh-button" id="fh-sample-run">Generate</button>
          <button type="button" class="fh-button fh-button--ghost" id="fh-sample-copy" disabled>Copy</button>
          <button type="button" class="fh-button fh-button--ghost" id="fh-sample-csv" disabled>Download CSV</button>
        </div>
        <p class="fh-muted" id="fh-sample-status" style="margin:0" role="status"></p>
        <pre class="site-sample__out" id="fh-sample-out" hidden></pre>
      </div>
    </form>`;
  document.body.appendChild(el);
  return el;
}

async function probeAccess() {
  const t = token();
  if (!t) return { member: false, reason: "signed_out" };
  try {
    const res = await fetch(`${apiBase()}/v1/firehorse/pro/me`, {
      headers: { authorization: `Bearer ${t}`, accept: "application/json" },
    });
    if (res.status === 401 || res.status === 403) return { member: false, reason: "signed_out" };
    if (!res.ok) return { member: false, reason: "error", message: await res.text() };
    const me = await res.json();
    return { member: !!me.member, rowsLeftToday: me.rowsLeftToday, plan: me.plan, reason: me.member ? "ok" : "not_member" };
  } catch (e) {
    return { member: false, reason: "error", message: e instanceof Error ? e.message : String(e) };
  }
}

function showGate(panel, access) {
  const gate = panel.querySelector("#fh-sample-gate");
  const body = panel.querySelector("#fh-sample-body");
  gate.hidden = false;
  body.hidden = true;
  const p = gate.querySelector(".fh-lede");
  if (access.reason === "not_member") {
    p.textContent = "Your Rascode account is signed in, but Sample data needs an active Firehorse Pro membership.";
  } else if (access.reason === "error") {
    p.textContent = `Couldn't reach the API (${access.message || "error"}). Check fh-api-base or try again.`;
  } else {
    p.innerHTML = `Sample data is a Firehorse Pro feature. Sign in with a Rascode account that has an active Pro membership, then generate values from any field type's mock formula. <span class="fh-muted">(The Firehorse site has no sign-in yet; a future session will unlock this.)</span>`;
  }
}

function showBody(panel, access) {
  panel.querySelector("#fh-sample-gate").hidden = true;
  panel.querySelector("#fh-sample-body").hidden = false;
  const status = panel.querySelector("#fh-sample-status");
  status.textContent = access.rowsLeftToday != null
    ? `${access.rowsLeftToday} sample values left today${access.plan ? ` · ${access.plan}` : ""}`
    : "";
}

let current = { type: "", label: "", values: [], seed: "" };

async function openPanel(type, label) {
  const panel = ensurePanel();
  current = { type, label, values: [], seed: "" };
  panel.querySelector("#fh-sample-title").textContent = label || type;
  panel.querySelector("#fh-sample-key code").textContent = type;
  panel.querySelector("#fh-sample-out").hidden = true;
  panel.querySelector("#fh-sample-out").textContent = "";
  panel.querySelector("#fh-sample-copy").disabled = true;
  panel.querySelector("#fh-sample-csv").disabled = true;
  const access = await probeAccess();
  if (!access.member) showGate(panel, access);
  else showBody(panel, access);
  if (typeof panel.showModal === "function") panel.showModal();
  else panel.setAttribute("open", "");
}

async function runGenerate() {
  const panel = ensurePanel();
  const status = panel.querySelector("#fh-sample-status");
  const out = panel.querySelector("#fh-sample-out");
  const count = Number(panel.querySelector('input[name="fh-sample-count"]:checked')?.value || 100);
  status.textContent = "Generating…";
  out.hidden = true;
  try {
    const res = await fetch(`${apiBase()}/v1/firehorse/samples`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token()}`,
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ type: current.type, count, format: "json" }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.status === 401 || res.status === 403 || data.code === "not_member") {
      showGate(panel, { member: false, reason: data.code === "not_member" ? "not_member" : "signed_out" });
      return;
    }
    if (!res.ok) {
      status.textContent = data.error || `Request failed (${res.status})`;
      return;
    }
    current.values = Array.isArray(data.values) ? data.values : [];
    current.seed = data.seed || "";
    out.textContent = current.values.map((v) => (typeof v === "string" ? v : JSON.stringify(v))).join("\n");
    out.hidden = false;
    panel.querySelector("#fh-sample-copy").disabled = !current.values.length;
    panel.querySelector("#fh-sample-csv").disabled = !current.values.length;
    status.textContent = `${current.values.length} values · seed ${current.seed}${data.rowsLeftToday != null ? ` · ${data.rowsLeftToday} left today` : ""}`;
  } catch (e) {
    status.textContent = e instanceof Error ? e.message : String(e);
  }
}

function copyValues() {
  const text = current.values.map((v) => (typeof v === "string" ? v : JSON.stringify(v))).join("\n");
  navigator.clipboard?.writeText(text);
  ensurePanel().querySelector("#fh-sample-status").textContent = "Copied.";
}

function downloadCsv() {
  const rows = [current.type, ...current.values.map((v) => {
    const s = typeof v === "string" ? v : JSON.stringify(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  })];
  const blob = new Blob([rows.join("\n") + "\n"], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${current.type || "samples"}-${current.values.length}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function bind() {
  if (!document.getElementById("c-field-types")) return;
  document.addEventListener("click", (e) => {
    const btn = e.target.closest?.("[data-fh-sample]");
    if (!btn) return;
    e.preventDefault();
    openPanel(btn.getAttribute("data-type") || "", btn.getAttribute("data-label") || "");
  });
  const panel = ensurePanel();
  panel.querySelector("#fh-sample-run")?.addEventListener("click", (e) => { e.preventDefault(); runGenerate(); });
  panel.querySelector("#fh-sample-copy")?.addEventListener("click", (e) => { e.preventDefault(); copyValues(); });
  panel.querySelector("#fh-sample-csv")?.addEventListener("click", (e) => { e.preventDefault(); downloadCsv(); });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
else bind();
