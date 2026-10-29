/* Firehorse site · campaign attribution for forms.
 *
 * Captures UTM parameters (and ref) from the landing URL and remembers them:
 *   last touch  → sessionStorage, refreshed whenever a URL carries new values
 *   first touch → localStorage, set once (the campaign that first brought them)
 * Every form submit adds them, plus where the form sat (placement, page path and
 * title), the landing page and the referrer. Field names match rascode.dev's
 * lead-attribution.ts and the forms seeded in Rascode admin
 * (backend/db scripts/rascodev/seed-firehorse-forms.ts), so submissions line up
 * with the campaigns managed there.
 *
 *   window.fhAttribution.fields(form)  → the fields to send with this form
 */
(() => {
  const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "ref"];
  const LAST = "fh.attribution", FIRST = "fh.attribution.first";
  const read = (store, k) => { try { return JSON.parse(store.getItem(k) || "null"); } catch { return null; } };
  const write = (store, k, v) => { try { store.setItem(k, JSON.stringify(v)); } catch {} };
  const clip = (v, n = 200) => String(v ?? "").trim().slice(0, n);

  const params = new URLSearchParams(location.search);
  const fromUrl = {};
  for (const k of KEYS) { const v = clip(params.get(k)); if (v) fromUrl[k] = v; }
  const hasNew = Object.keys(fromUrl).length > 0;
  // An outside referrer, not a click from page to page on this site.
  const referrer = document.referrer && new URL(document.referrer).host !== location.host ? clip(document.referrer, 500) : "";

  let last = read(sessionStorage, LAST);
  if (hasNew || !last) {
    last = { ...(hasNew ? {} : last), ...fromUrl, landing_page: clip(location.pathname + location.search, 500), referrer: referrer || last?.referrer || "" };
    write(sessionStorage, LAST, last);
  }
  let first = read(localStorage, FIRST);
  if (!first && (hasNew || referrer)) {
    first = { utm_source: fromUrl.utm_source || (referrer ? new URL(referrer).host : ""), utm_medium: fromUrl.utm_medium || (referrer ? "referral" : ""), utm_campaign: fromUrl.utm_campaign || "", at: new Date().toISOString() };
    write(localStorage, FIRST, first);
  }

  const fields = (form) => {
    const out = {};
    for (const k of KEYS) if (last?.[k]) out[k] = last[k];
    if (first?.utm_source) out.first_utm_source = first.utm_source;
    if (first?.utm_medium) out.first_utm_medium = first.utm_medium;
    if (first?.utm_campaign) out.first_utm_campaign = first.utm_campaign;
    if (last?.landing_page) out.landing_page = last.landing_page;
    if (last?.referrer) out.referrer = last.referrer;
    // Where this form sits: data-placement on the form, else the nearest section id.
    out.placement = clip(form?.dataset.placement || form?.closest("section[id]")?.id || "unknown", 120);
    out.page_path = clip(location.pathname, 300);
    out.page_title = clip(document.title, 200);
    return out;
  };
  window.fhAttribution = { fields, keys: KEYS };
})();
