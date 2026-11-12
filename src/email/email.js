/*!
 * Firehorse email — transactional email built from the Firehorse themes.
 *
 * Email clients ignore custom properties, cascade layers and container
 * queries, so this renders the same look the hard way: a 600px table,
 * inline styles, colors resolved from the theme palette (light, plus a
 * dark-mode block for clients that honor prefers-color-scheme). Clean
 * lines, a flat button, no gradients, no images (the mark is drawn with
 * table cells, so it shows even with images blocked).
 *
 *   import { renderEmail, leadNotification } from "@rascode/firehorse/email";
 *   const { subject, html, text } = leadNotification(lead, { theme: "friesian" });
 *
 * Themes: firehorse (default), mustang, friesian, akhal-teke.
 */
import { palette } from "./palette.js";

const SANS = '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, Helvetica, Arial, sans-serif';
const MONO = '"SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace';
const BRAND_RED = "#da3a00";
const INK = "#000000";

const q = (stack) => stack.replace(/"/g, "'");
const withGeneric = (stack, fallback) => (!stack ? fallback : /(^|,)\s*(serif|sans-serif|monospace|system-ui|cursive)\s*$/.test(stack) ? stack : `${stack}, ${fallback}`);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
// Mix two hex colors, w = share of the first (lines and quiet fills).
const mix = (a, b, w) => "#" + hex(a).map((x, i) => Math.round(x * w + hex(b)[i] * (1 - w)).toString(16).padStart(2, "0")).join("");

/** Resolve a theme into the handful of colors and fonts an email needs. */
export function emailTheme(name = "firehorse") {
  const t = palette[name] ?? palette.firehorse;
  const scheme = (s) => ({
    ...s,
    rule: mix(s.text, s.surface, 0.14),
    etch: mix(s.text, s.surface, 0.22),
    field: mix(s.text, s.surface, 0.04),
  });
  return {
    name: palette[name] ? name : "firehorse",
    label: t.label,
    light: scheme(t.light),
    dark: scheme(t.dark),
    // Single quotes only: these go inside style="…" attributes.
    sans: q(t.fonts?.sans || SANS),
    // A display stack without a generic family falls back to the sans, not the client's serif.
    display: q(withGeneric(t.fonts?.display, t.fonts?.sans || SANS)),
    mono: q(t.fonts?.mono || MONO),
    radius: t.radius ?? 7,
    buttonRadius: t.button === "pill" ? 999 : t.button === "sharp" || t.radius === 0 ? 0 : 3,
  };
}

/**
 * The layout. Every part is optional except title.
 *   preheader  inbox preview line (hidden)
 *   eyebrow    mono label above the title
 *   title, intro
 *   fields     [[label, value], …] as etched label/value rows
 *   quote      a block of the sender's own words (message)
 *   action     { label, href } — one flat button
 *   meta       [[label, value], …] small print under the card (where it came from)
 *   footer     line under everything
 */
export function renderEmail({ theme = "firehorse", preheader = "", eyebrow = "", title, intro = "", fields = [], quote = "", action = null, meta = [], footer = "" }) {
  const t = emailTheme(theme);
  const c = t.light;
  const r = t.radius;
  const row = ([k, v], i, all) => `<tr>
<td class="fh-m" style="padding:10px 0;border-bottom:${i === all.length - 1 ? "0" : `1px dashed ${c.etch}`};font:400 13px/1.45 ${t.sans};color:${c.muted};width:38%;vertical-align:top;">${esc(k)}</td>
<td class="fh-t" style="padding:10px 0;border-bottom:${i === all.length - 1 ? "0" : `1px dashed ${c.etch}`};font:500 14px/1.45 ${t.sans};color:${c.text};vertical-align:top;">${v && v.html ? v.html : esc(v)}</td>
</tr>`;
  const metaRow = ([k, v]) => `<tr><td class="fh-m" style="padding:2px 12px 2px 0;font:400 11px/1.5 ${t.mono};letter-spacing:.06em;text-transform:uppercase;color:${c.muted};white-space:nowrap;vertical-align:top;">${esc(k)}</td><td class="fh-m" style="padding:2px 0;font:400 12px/1.5 ${t.sans};color:${c.muted};word-break:break-all;">${esc(v)}</td></tr>`;
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>${esc(title)}</title>
<style>
  @media (prefers-color-scheme: dark) {
    .fh-bg { background:${t.dark.canvas} !important; }
    .fh-card { background:${t.dark.surface} !important; border-color:${t.dark.rule} !important; }
    .fh-t { color:${t.dark.text} !important; }
    .fh-m { color:${t.dark.muted} !important; }
    .fh-rule { border-color:${t.dark.etch} !important; }
    .fh-quote { background:${t.dark.field} !important; border-color:${t.dark.etch} !important; color:${t.dark.text} !important; }
    .fh-btn { background:${t.dark.text} !important; color:${t.dark.canvas} !important; }
  }
  @media (max-width: 620px) { .fh-pad { padding:24px 20px !important; } }
</style>
</head>
<body class="fh-bg" style="margin:0;padding:0;background:${c.canvas};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${esc(preheader)}&#8203;&#160;&#8203;&#160;&#8203;&#160;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="fh-bg" style="background:${c.canvas};">
<tr><td align="center" style="padding:32px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
  <tr><td style="padding:0 4px 16px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td width="22" height="22" style="width:22px;height:22px;background:${BRAND_RED};border-radius:3px;vertical-align:bottom;padding:0 4px 4px;"><div style="height:4px;line-height:4px;font-size:0;background:${INK};">&nbsp;</div></td>
      <td class="fh-t" style="padding-left:10px;font:700 15px/1 ${t.sans};letter-spacing:-.01em;color:${c.text};">firehorse</td>
    </tr></table>
  </td></tr>
  <tr><td class="fh-card fh-pad" style="background:${c.surface};border:1px solid ${c.rule};border-radius:${r}px;padding:32px 36px;">
    ${eyebrow ? `<p class="fh-m" style="margin:0 0 12px;font:500 11px/1.4 ${t.mono};letter-spacing:.14em;text-transform:uppercase;color:${c.muted};"><span style="color:${c.accent};">&#9679;</span>&nbsp; ${esc(eyebrow)}</p>` : ""}
    <h1 class="fh-t" style="margin:0 0 ${intro ? 12 : 20}px;font:600 24px/1.2 ${t.display};letter-spacing:-.015em;color:${c.text};">${esc(title)}</h1>
    ${intro ? `<p class="fh-m" style="margin:0 0 20px;font:400 15px/1.55 ${t.sans};color:${c.muted};">${esc(intro)}</p>` : ""}
    ${fields.length ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="fh-rule" style="border-top:1px solid ${c.rule};border-bottom:1px solid ${c.rule};margin:0 0 20px;">${fields.map(row).join("")}</table>` : ""}
    ${quote ? `<div class="fh-quote" style="margin:0 0 24px;padding:14px 16px;background:${c.field};border-left:2px solid ${c.etch};font:400 14px/1.6 ${t.sans};color:${c.text};white-space:pre-wrap;">${esc(quote)}</div>` : ""}
    ${action ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td class="fh-btn" style="background:${c.text};border-radius:${t.buttonRadius}px;"><a class="fh-btn" href="${esc(action.href)}" style="display:inline-block;padding:12px 20px;font:600 12px/1 ${t.mono};letter-spacing:.12em;text-transform:uppercase;color:${c.canvas};text-decoration:none;border-radius:${t.buttonRadius}px;background:${c.text};">${esc(action.label)}&nbsp;&#8599;</a></td></tr></table>` : ""}
  </td></tr>
  ${meta.length ? `<tr><td style="padding:16px 4px 0;"><table role="presentation" cellpadding="0" cellspacing="0" border="0">${meta.map(metaRow).join("")}</table></td></tr>` : ""}
  <tr><td class="fh-m" style="padding:20px 4px 0;font:400 12px/1.5 ${t.sans};color:${c.muted};">${footer ? esc(footer) : `Sent by firehorse.rascode.dev · ${t.name === "firehorse" ? "drawn with Firehorse" : `drawn with the Firehorse ${esc(t.label)} theme`}`}</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
  // Plain-text twin for clients (and filters) that want one.
  const text = [eyebrow && eyebrow.toUpperCase(), title, "", intro, "", ...fields.map(([k, v]) => `${k}: ${v && v.text ? v.text : v}`), quote && `\n${quote}\n`, action && `${action.label}: ${action.href}`, meta.length ? "\n" + meta.map(([k, v]) => `${k}: ${v}`).join("\n") : "", "", footer || "Sent by firehorse.rascode.dev"].filter((x) => x !== "" && x != null && x !== false).join("\n");
  return { html, text };
}

const NEED_LABELS = { "design-system": "Design system", website: "Website", "product-ui": "Product UI", "ai-agents": "AI agents", automation: "Automation", architecture: "Architecture", consulting: "Consulting", "firehorse-pro": "Firehorse Pro", "system-from-url": "System from a URL" };

/** The email Rascode gets when someone sends the "Start a project" form. */
export function leadNotification(lead, { theme = "firehorse" } = {}) {
  const what = lead.plan ? `Pro · ${lead.plan}${lead.billing ? ` (${lead.billing})` : ""}` : (lead.needs ?? []).map((n) => NEED_LABELS[n] ?? n).join(", ") || "General";
  const fields = [
    ["Name", lead.name],
    ["Email", { html: `<a href="mailto:${esc(lead.email)}" style="color:inherit;">${esc(lead.email)}</a>`, text: lead.email }],
    lead.company && ["Company", lead.company],
    ["Interested in", what],
    lead.timeline && ["Timeline", lead.timeline],
    lead.budget && ["Budget", lead.budget],
  ].filter(Boolean);
  const campaign = lead.utm_campaign || lead.first_utm_campaign;
  const meta = [
    ["Placement", lead.placement],
    ["Page", lead.page_path || lead.page],
    ["Campaign", campaign && [lead.utm_source, lead.utm_medium, campaign].filter(Boolean).join(" / ")],
    ["First touch", lead.first_utm_source && [lead.first_utm_source, lead.first_utm_medium, lead.first_utm_campaign].filter(Boolean).join(" / ")],
    ["Content", lead.utm_content],
    ["Landed on", lead.landing_page],
    ["Referrer", lead.referrer],
    ["Country", lead.country],
    ["Received", lead.at],
  ].filter(([, v]) => v);
  const { html, text } = renderEmail({
    theme,
    preheader: `${lead.name}${lead.company ? ` at ${lead.company}` : ""} · ${what}`,
    eyebrow: lead.plan ? "Firehorse Pro request" : "New project lead",
    title: `${lead.name}${lead.company ? `, ${lead.company}` : ""}`,
    intro: lead.plan ? "Asked about a Firehorse Pro plan from firehorse.rascode.dev." : "Sent the Start a project form on firehorse.rascode.dev.",
    fields,
    quote: lead.message,
    action: { label: `Reply to ${String(lead.name).split(/\s+/)[0] || "them"}`, href: `mailto:${lead.email}?subject=${encodeURIComponent("Re: your Firehorse inquiry")}` },
    meta,
  });
  const subject = `Firehorse ${lead.plan ? `Pro (${lead.plan})` : "lead"}: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`;
  return { subject, html, text };
}

/** Welcome email for The Stable mailing list (for whichever sender delivers it). */
export function stableWelcome({ name = "", list = "highlights" } = {}, { theme = "firehorse" } = {}) {
  const first = String(name).trim().split(/\s+/)[0];
  const { html, text } = renderEmail({
    theme,
    preheader: "You're on The Stable list.",
    eyebrow: "The Stable",
    title: first ? `You're in, ${first}.` : "You're in.",
    intro: list === "pro" ? "You'll get every detailed change to Firehorse, as it ships." : "You'll get the highlights: releases and the big ideas, no more than you'd want.",
    action: { label: "Read The Stable", href: "https://firehorse.rascode.dev/stable/" },
    footer: "You subscribed on firehorse.rascode.dev. Every email has an unsubscribe link.",
  });
  return { subject: "Welcome to The Stable", html, text };
}
