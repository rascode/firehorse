// firehorse.rascode.dev — static assets plus one route: POST /api/lead.
// The lead is forwarded to whichever destinations are configured as secrets:
//   LEAD_WEBHOOK_URL       any JSON webhook (Slack, Discord, n8n, Zapier, your CRM)
//   RESEND_API_KEY + LEAD_TO (+ LEAD_FROM)   an email via Resend
// Set them with `npx wrangler secret put <NAME>`.

const NEEDS = new Set(["design-system", "website", "product-ui", "ai-agents", "automation", "architecture", "consulting"]);
const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
const clean = (v, max) => String(v ?? "").trim().slice(0, max);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
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
      message: clean(input.message, 5000),
      page: clean(input.page, 300),
      at: new Date().toISOString(),
      country: request.cf?.country ?? "",
    };
    // Campaign attribution from site/attribution.js: UTMs, first touch, placement, page.
    const ATTR = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "ref", "first_utm_source", "first_utm_medium", "first_utm_campaign", "landing_page", "referrer", "placement", "page_path", "page_title"];
    const attr = input.attribution && typeof input.attribution === "object" ? input.attribution : {};
    for (const k of ATTR) { const v = clean(attr[k], 500); if (v) lead[k] = v; }
    if (!lead.name || !lead.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      return json({ error: "Name, a valid email and a message are required." }, 422);
    }

    const jobs = [];
    if (env.LEAD_WEBHOOK_URL) {
      jobs.push(fetch(env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text: `New lead from ${lead.name} <${lead.email}>: ${lead.needs.join(", ") || "general"}`, lead }),
      }));
    }
    if (env.RESEND_API_KEY && env.LEAD_TO) {
      const rows = Object.entries(lead).map(([k, v]) => `<tr><th align="left">${k}</th><td>${esc(Array.isArray(v) ? v.join(", ") : v)}</td></tr>`).join("");
      jobs.push(fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({
          from: env.LEAD_FROM ?? "Firehorse <leads@rascode.dev>",
          to: env.LEAD_TO.split(","),
          reply_to: lead.email,
          subject: `Firehorse lead: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
          html: `<table cellpadding="6">${rows}</table>`,
        }),
      }));
    }
    if (!jobs.length) return json({ error: "Lead delivery isn't configured." }, 503);

    const results = await Promise.allSettled(jobs);
    const delivered = results.some((r) => r.status === "fulfilled" && r.value.ok);
    return delivered ? json({ ok: true }) : json({ error: "Couldn't deliver the lead." }, 502);
  },
};
