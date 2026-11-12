// firehorse.dev — static assets plus one route: POST /api/lead.
// The lead is forwarded to whichever destinations are configured as secrets:
//   LEAD_WEBHOOK_URL       any JSON webhook (Slack, Discord, n8n, Zapier, your CRM)
//   RESEND_API_KEY + LEAD_TO (+ LEAD_FROM, EMAIL_THEME)   an email via Resend,
//                          drawn with the Firehorse email templates (src/email)
// Set them with `npx wrangler secret put <NAME>`.
//
// POST /api/agent-request — "Don't see your agent?" from the Send to an agent menu: an agent
// (or agent system) someone uses and wants in Firehorse's list. Delivered like a lead (webhook
// and/or Resend to LEAD_TO) so the team can open a PR adding it to AGENTS in site-features.js.
//
// POST /api/subscribe — The Stable mailing list. Forwarded server-to-server to
// the Rascode forms API (api.rascode.dev/v1/forms/firehorse/stable-subscribe),
// so sign-ups and their campaign attribution land in Rascode admin and the
// browser never needs CORS. Optional: STABLE_WELCOME_FROM (a verified Resend
// sender) sends the Firehorse "welcome" email after a successful sign-up.

import { leadNotification, stableWelcome } from "../src/email/email.js";

const NEEDS = new Set(["design-system", "website", "product-ui", "ai-agents", "automation", "architecture", "consulting", "firehorse-pro", "system-from-url"]);
const PLANS = new Set(["pro", "team", "custom-build", "question"]);
const BILLING = new Set(["monthly", "annual"]);
const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
const clean = (v, max) => String(v ?? "").trim().slice(0, max);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/subscribe") return subscribe(request, env);
    if (url.pathname === "/api/agent-request") return agentRequest(request, env);
    if (url.pathname !== "/api/lead") return env.ASSETS.fetch(request);
    if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

    let input;
    try { input = await request.json(); } catch { return json({ error: "Send JSON." }, 400); }
    if (clean(input.website, 200)) return json({ ok: true }); // honeypot filled: drop quietly

    const lead = {
      name: clean(input.name, 120),
      email: clean(input.email, 200),
      company: clean(input.company, 160),
      timeline: clean(input.timeline, 40),
      budget: clean(input.budget, 40),
      needs: (Array.isArray(input.needs) ? input.needs : []).map(String).filter((n) => NEEDS.has(n)),
      plan: PLANS.has(input.plan) ? input.plan : "",
      billing: BILLING.has(input.billing) ? input.billing : "",
      message: clean(input.message, 5000),
      page: clean(input.page, 300),
      at: new Date().toISOString(),
      country: request.cf?.country ?? "",
    };
    // Campaign attribution from site/attribution.js: UTMs, first touch, placement, page.
    const ATTR = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "ref", "first_utm_source", "first_utm_medium", "first_utm_campaign", "landing_page", "referrer", "placement", "page_path", "page_title"];
    const attr = input.attribution && typeof input.attribution === "object" ? input.attribution : {};
    for (const k of ATTR) { const v = clean(attr[k], 500); if (v) lead[k] = v; }
    // Pro plan requests can come without a message; everything else needs one.
    const needsMessage = !lead.plan || lead.plan === "custom-build";
    if (!lead.name || (needsMessage && !lead.message) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      return json({ error: needsMessage ? "Name, a valid email and a message are required." : "Name and a valid email are required." }, 422);
    }

    const jobs = [];
    if (env.LEAD_WEBHOOK_URL) {
      jobs.push(fetch(env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text: `New lead from ${lead.name} <${lead.email}>: ${lead.plan ? `Pro plan: ${lead.plan}${lead.billing ? ` (${lead.billing})` : ""}` : lead.needs.join(", ") || "general"}`, lead }),
      }));
    }
    if (env.RESEND_API_KEY && env.LEAD_TO) {
      // Eat our own hay: the notification is a Firehorse email template (src/email).
      const mail = leadNotification(lead, { theme: env.EMAIL_THEME || "firehorse" });
      jobs.push(fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({
          from: env.LEAD_FROM ?? "Firehorse <leads@rascode.dev>",
          to: env.LEAD_TO.split(","),
          reply_to: lead.email,
          subject: mail.subject,
          html: mail.html,
          text: mail.text,
        }),
      }));
    }
    if (!jobs.length) return json({ error: "Lead delivery isn't configured." }, 503);

    const results = await Promise.allSettled(jobs);
    const delivered = results.some((r) => r.status === "fulfilled" && r.value.ok);
    return delivered ? json({ ok: true }) : json({ error: "Couldn't deliver the lead." }, 502);
  },
};

const ATTRIBUTION = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "ref", "first_utm_source", "first_utm_medium", "first_utm_campaign", "landing_page", "referrer", "placement", "page_path", "page_title"];
const LISTS = new Set(["highlights", "pro"]);

async function subscribe(request, env) {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
  let input;
  try { input = await request.json(); } catch { return json({ error: "Send JSON." }, 400); }
  const f = input.fields && typeof input.fields === "object" ? input.fields : {};
  if (clean(f._hp, 200)) return json({ ok: true }); // honeypot filled: drop quietly
  const email = clean(f.email, 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "Enter a valid email address." }, 422);
  const fields = {
    name: clean(f.name, 120),
    email,
    list: LISTS.has(f.list) ? f.list : "highlights",
    mailing_list: true,
    source: clean(f.source, 120),
    _hp: "",
  };
  for (const k of ATTRIBUTION) { const v = clean(f[k], 500); if (v) fields[k] = v; }
  const sourceUrl = clean(input.source_url, 500);

  const api = (env.RASCODE_API_URL || "https://api.rascode.dev").replace(/\/$/, "");
  let res;
  try {
    res = await fetch(`${api}/v1/forms/firehorse/stable-subscribe`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "user-agent": request.headers.get("user-agent") ?? "firehorse-site",
        "x-forwarded-for": request.headers.get("cf-connecting-ip") ?? "",
      },
      body: JSON.stringify({ source_url: sourceUrl, fields }),
    });
  } catch { return json({ error: "Couldn't reach the mailing list. Try again in a minute." }, 502); }
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = res.status === 429 ? "Too many sign-ups from here. Try again shortly." : res.status === 400 ? body.error || "Check the form and try again." : "Couldn't subscribe. Try again in a minute.";
    return json({ error: msg }, res.status === 400 || res.status === 429 ? res.status : 502);
  }

  if (env.RESEND_API_KEY && env.STABLE_WELCOME_FROM) {
    const mail = stableWelcome({ name: fields.name, list: fields.list }, { theme: env.EMAIL_THEME || "firehorse" });
    // A welcome that fails to send doesn't undo the sign-up.
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({ from: env.STABLE_WELCOME_FROM, to: [email], subject: mail.subject, html: mail.html, text: mail.text }),
    }).catch(() => {});
  }
  return json({ ok: true });
}

async function agentRequest(request, env) {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
  let input;
  try { input = await request.json(); } catch { return json({ error: "Send JSON." }, 400); }
  if (clean(input.website, 200)) return json({ ok: true }); // honeypot filled: drop quietly
  const req = {
    agent: clean(input.agent, 120),
    link: clean(input.link, 300),
    email: clean(input.email, 200),
    page: clean(input.page, 300),
    at: new Date().toISOString(),
    country: request.cf?.country ?? "",
  };
  const attr = input.attribution && typeof input.attribution === "object" ? input.attribution : {};
  for (const k of ATTRIBUTION) { const v = clean(attr[k], 500); if (v) req[k] = v; }
  if (!req.agent) return json({ error: "Tell us which agent." }, 422);
  if (req.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.email)) return json({ error: "That email doesn't look right." }, 422);

  const line = `Agent request: ${req.agent}${req.link ? ` (${req.link})` : ""}${req.email ? ` from ${req.email}` : ""}`;
  const jobs = [];
  if (env.LEAD_WEBHOOK_URL) {
    jobs.push(fetch(env.LEAD_WEBHOOK_URL, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ text: line, agentRequest: req }) }));
  }
  if (env.RESEND_API_KEY && env.LEAD_TO) {
    const rows = Object.entries(req).filter(([, v]) => v).map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${esc(k)}</td><td style="padding:4px 0">${esc(String(v))}</td></tr>`).join("");
    jobs.push(fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({
        from: env.LEAD_FROM ?? "Firehorse <leads@rascode.dev>",
        to: env.LEAD_TO.split(","),
        ...(req.email ? { reply_to: req.email } : {}),
        subject: `Firehorse agent request: ${req.agent}`,
        html: `<p>Someone wants an agent added to the Send to an agent list. Add it to <code>AGENTS</code> in <code>site/site-features.js</code> and open a PR.</p><table>${rows}</table>`,
        text: `${line}\n\n${Object.entries(req).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n")}`,
      }),
    }));
  }
  if (!jobs.length) return json({ error: "Requests aren't connected here yet." }, 503);
  const results = await Promise.allSettled(jobs);
  return results.some((r) => r.status === "fulfilled" && r.value.ok) ? json({ ok: true }) : json({ error: "Couldn't send that. Try again in a minute." }, 502);
}
