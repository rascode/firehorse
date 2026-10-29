/* The Stable: reading progress in the floating bar, the subscribe form and toasts. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const toaster = $("#toaster");
  window.fhToast = (msg, tone = "success") => {
    if (!toaster) return;
    const t = document.createElement("div");
    t.className = "fh-toast"; t.dataset.tone = tone; t.setAttribute("role", "status");
    t.innerHTML = `<p></p><button class="fh-close" type="button" aria-label="Dismiss"></button>`;
    t.querySelector("p").textContent = msg; t.querySelector("button").onclick = () => t.remove();
    toaster.append(t); setTimeout(() => t.remove(), 4800);
  };

  // Reading progress
  const prose = $(".stable-prose"), meter = $("[data-progress]");
  if (prose && meter) {
    let raf = 0;
    const tick = () => { raf = 0; const r = prose.getBoundingClientRect(); const p = Math.min(1, Math.max(0, (innerHeight * 0.4 - r.top) / r.height)); meter.textContent = `${Math.round(p * 100)}%`; };
    addEventListener("scroll", () => { raf ||= requestAnimationFrame(tick); }, { passive: true }); tick();
  }

  // Subscribe
  const endpoint = document.querySelector('meta[name="fh-subscribe-endpoint"]')?.content || "";
  for (const form of document.querySelectorAll("[data-subscribe]")) {
    const status = $(".stable-form__status", form), email = form.elements.email;
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      if (!email.value || !email.checkValidity()) { email.setAttribute("aria-invalid", "true"); email.focus(); return; }
      email.removeAttribute("aria-invalid");
      const fields = { name: form.elements.name.value.trim(), email: email.value.trim(), list: form.elements.list.value, mailing_list: true, source: form.dataset.source, ...(window.fhAttribution?.fields(form) ?? {}), _hp: form.elements._hp.value };
      if (fields._hp) { form.reset(); return; }
      if (!endpoint) { status.textContent = "Subscriptions open soon. Nothing was sent: this form isn't connected to a mailing list yet."; window.fhToast("Subscriptions open soon. Nothing was sent.", "warning"); return; }
      const btn = form.querySelector("button[type=submit]"); btn.setAttribute("aria-busy", "true"); btn.disabled = true;
      try {
        const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ source_url: location.href, fields }) });
        const body = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(body.error || "Couldn't subscribe. Try again.");
        form.reset(); status.textContent = "You're in. Watch your inbox for the next post."; window.fhToast("You're on the list.");
      } catch (e) { status.textContent = e.message; window.fhToast(e.message, "danger"); }
      finally { btn.removeAttribute("aria-busy"); btn.disabled = false; }
    });
  }
})();
