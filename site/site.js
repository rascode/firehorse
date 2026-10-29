// firehorse.rascode.dev — progressive enhancements for the docs.
// Firehorse itself needs no JavaScript; this file only powers the
// documentation (code samples, copy buttons, token explorer, lab).
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  };

  /* —— Scheme switch (CSS does the switching; this remembers it) —— */
  // Two radio groups (header + drawer) mirror each other; CSS reads the
  // header group, so the drawer group just checks the matching header radio.
  const setScheme = (v) => {
    $$(`input[name="scheme"][value="${v}"], input[name="scheme-m"][value="${v}"]`).forEach((r) => (r.checked = true));
    store.set("fh-scheme", v);
    requestAnimationFrame(paintContrast);
  };
  const saved = store.get("fh-scheme");
  if (saved) $$(`input[name="scheme"][value="${saved}"], input[name="scheme-m"][value="${saved}"]`).forEach((r) => (r.checked = true));
  $$('input[name="scheme"], input[name="scheme-m"]').forEach((r) => r.addEventListener("change", () => setScheme(r.value)));

  /* —— Avatar shuffle: rotate the photos among data-face avatars —— */
  $("#avatar-shuffle")?.addEventListener("click", () => {
    const faces = $$("[data-face] img");
    const srcs = faces.map((i) => i.getAttribute("src"));
    for (let i = srcs.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [srcs[i], srcs[j]] = [srcs[j], srcs[i]]; }
    faces.forEach((img, i) => img.setAttribute("src", srcs[i]));
  });

  /* —— Hero backdrop: frost over once the hero has mostly scrolled away —— */
  const backdrop = $(".site-backdrop"), hero = $("#top");
  if (backdrop && hero) {
    new IntersectionObserver(([e]) => backdrop.classList.toggle("is-frosted", !e.isIntersecting), { rootMargin: "0px 0px -55% 0px" }).observe(hero);
  }

  /* —— Toasts —— */
  const toaster = $("#toaster");
  function toast(msg, tone = "success") {
    const t = document.createElement("div");
    t.className = "fh-toast";
    t.dataset.tone = tone;
    t.setAttribute("role", "status");
    t.innerHTML = `<p></p><button class="fh-close" type="button" aria-label="Dismiss"></button>`;
    t.querySelector("p").textContent = msg;
    t.querySelector("button").onclick = () => t.remove();
    toaster.append(t);
    setTimeout(() => t.remove(), 4200);
  }
  $$("[data-toast]").forEach((b) => b.addEventListener("click", () => toast(b.dataset.toast)));
  window.fhToast = toast;

  /* —— Copy —— */
  async function copy(text, label = "Copied") {
    try { await navigator.clipboard.writeText(text); toast(label); }
    catch { toast("Select the text and copy it with your keyboard.", "danger"); }
  }
  $$("[data-copy]").forEach((b) => b.addEventListener("click", () => {
    const el = $(b.dataset.copy);
    if (el) copy(el.textContent.trim(), "Copied to clipboard");
  }));

  /* —— Dialog openers —— */
  $$("[data-open-dialog]").forEach((b) => b.addEventListener("click", () => {
    $(`#${b.dataset.openDialog}`)?.showModal();
  }));

  /* —— Close the mega panel / drawer after choosing a link —— */
  $$(".fh-mega a, .fh-drawer a").forEach((a) => a.addEventListener("click", () => {
    a.closest("[popover]")?.hidePopover?.();
  }));

  /* —— Code panels: generated from the live demo, so they can't drift —— */
  const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  function highlight(html) {
    // Attributes first: the tag pass only matches escaped "&lt;", so it
    // never touches the spans the attribute pass inserts.
    return escapeHtml(html)
      .replace(/([a-z][a-z0-9-:]*)="([^"]*)"/g, '<span class="a">$1</span>=<span class="v">"$2"</span>')
      .replace(/(&lt;\/?)([a-z0-9-]+)/g, '$1<span class="t">$2</span>');
  }
  $$("[data-demo]").forEach((stage) => {
    const raw = stage.innerHTML.replace(/ data-fh-(?:id|name)="[^"]*"/g, "").replace(/^\n+|\s+$/g, "");
    const indent = Math.min(...raw.split("\n").filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
    const code = raw.split("\n").map((l) => l.slice(indent)).join("\n");
    const d = document.createElement("details");
    d.className = "site-code";
    d.innerHTML = `<summary>Markup</summary><pre class="site-pre"><button class="fh-button fh-button--sm fh-button--ghost site-copy" type="button">Copy</button><code></code></pre>`;
    d.querySelector("code").innerHTML = highlight(code);
    d.querySelector("button").onclick = () => copy(code, "Markup copied");
    stage.after(d);
  });

  /* —— Container lab —— */
  const range = $("#lab-width"), box = $("#lab-box"), out = $("#lab-out");
  if (range && box) {
    const viewport = box.parentElement;
    const setW = (px) => {
      const max = viewport.clientWidth - 32;
      const w = Math.min(px, max);
      box.style.setProperty("--lab-w", `${w}px`);
      box.style.inlineSize = `${w}px`;
      out.textContent = `${Math.round(w)}px · ${(w / 16).toFixed(1)}rem`;
    };
    range.addEventListener("input", () => setW(+range.value));
    $$("[data-lab]").forEach((b) => b.addEventListener("click", () => { range.value = b.dataset.lab; setW(+b.dataset.lab); }));
    new ResizeObserver(([e]) => {
      out.textContent = `${Math.round(e.contentRect.width)}px · ${(e.contentRect.width / 16).toFixed(1)}rem`;
    }).observe(box);
    setW(+range.value);
  }

  /* —— Live contrast ratios for tones —— */
  function luminance(rgb) {
    const [r, g, b] = rgb.map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  const probe = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  function toRgb(css) {
    probe.clearRect(0, 0, 1, 1);
    probe.fillStyle = "#000"; probe.fillStyle = css; probe.fillRect(0, 0, 1, 1);
    return [...probe.getImageData(0, 0, 1, 1).data.slice(0, 3)];
  }
  function paintContrast() {
    const bg = toRgb(getComputedStyle(document.body).backgroundColor);
    $$(".site-tone").forEach((el) => {
      const c = toRgb(getComputedStyle(el).getPropertyValue("--fh-tone") || getComputedStyle(el.querySelector(".site-tone__chip")).backgroundColor);
      const [a, b] = [luminance(c), luminance(bg)].sort((x, y) => y - x);
      const ratio = (a + 0.05) / (b + 0.05);
      const span = el.querySelector("[data-contrast]");
      if (span) span.textContent = `${ratio.toFixed(2)}:1`;
    });
  }
  paintContrast();
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", paintContrast);

  /* —— Token explorer —— */
  const rows = $("#token-rows");
  if (rows) {
    fetch("tokens.json").then((r) => r.json()).then(({ tokens }) => {
      const all = Object.entries(tokens);
      const q = $("#token-q"), count = $("#token-count");
      const render = () => {
        const term = q.value.trim().toLowerCase();
        const tier = $('input[name="tier"]:checked')?.value ?? "all";
        const list = all.filter(([n, t]) => (tier === "all" || t.tier === tier) && (!term || n.includes(term) || t.$value.toLowerCase().includes(term) || t.$type.toLowerCase().includes(term)));
        rows.innerHTML = list.map(([n, t]) => {
          const sw = t.$type === "color" ? `<i class="site-sw" style="--sw: var(${n})"></i>` : "";
          return `<tr><td data-label="Token">${sw}${n}</td><td data-label="Value">${escapeHtml(t.$value.length > 90 ? t.$value.slice(0, 90) + "…" : t.$value)}</td><td data-label="Type"><span class="fh-badge">${t.$type}</span></td></tr>`;
        }).join("") || `<tr><td colspan="3" class="fh-muted">No tokens match “${escapeHtml(term)}”.</td></tr>`;
        count.textContent = `${list.length} of ${all.length}`;
      };
      q.addEventListener("input", render);
      $$('input[name="tier"]').forEach((r) => r.addEventListener("change", render));
      render();
    }).catch(() => { rows.innerHTML = `<tr><td colspan="3">Couldn't load tokens.json. <a class="fh-link" href="tokens.json">Open it directly</a>.</td></tr>`; });
  }

  /* —— Work with Rascode: lead dialog —— */
  const lead = $("#lead"), leadForm = $("#lead-form");
  if (lead && leadForm) {
    const presets = { design: ["design-system", "website"], ai: ["ai-agents", "automation"], consulting: ["architecture", "consulting"], pro: ["firehorse-pro", "system-from-url"] };
    const steps = { form: $('[data-lead-step="form"]', lead), done: $('[data-lead-step="done"]', lead) };
    const submit = $("[data-lead-submit]", lead), cancel = $("[data-lead-cancel]", lead), status = $("[data-lead-status]", lead);
    const note = status.textContent;
    const setStatus = (text, tone) => { status.textContent = text; tone ? status.setAttribute("data-tone", tone) : status.removeAttribute("data-tone"); };
    const reset = () => {
      leadForm.reset(); leadForm.removeAttribute("data-checked");
      steps.form.hidden = false; steps.done.hidden = true; submit.hidden = false;
      cancel.textContent = "Cancel"; setStatus(note);
    };
    // placement = the section the button sits in + which offer it opened (e.g. "pro:pro", "hero:design").
    const openLead = (preset, from) => {
      if (lead.open) return;
      leadForm.dataset.placement = `${from?.closest("section[id], header, footer")?.id || from?.closest("header, footer")?.localName || (from ? "page" : "deep-link")}:${preset || "general"}`;
      if (!steps.done.hidden) reset();
      const pick = presets[preset];
      if (pick) $$('input[name="needs"]', leadForm).forEach((c) => { if (pick.includes(c.value)) c.checked = true; });
      lead.showModal();
      requestAnimationFrame(() => $("#lead-name").focus());
    };
    $$("[data-lead]").forEach((b) => b.addEventListener("click", () => openLead(b.dataset.lead, b)));
    // Deep links: #work opens the form; #work-design, #work-ai, #work-consulting preselect a service.
    const fromHash = () => {
      const m = location.hash.match(/^#work(?:-(design|ai|consulting))?$/);
      if (!m) return;
      $("#services")?.scrollIntoView({ block: "start" });
      openLead(m[1]);
    };
    fromHash();
    addEventListener("hashchange", fromHash);
    lead.addEventListener("close", () => { if (/^#work/.test(location.hash)) history.replaceState(null, "", location.pathname + location.search + "#services"); });
    $$("[data-lead-close]", lead).forEach((b) => b.addEventListener("click", () => lead.close()));
    lead.addEventListener("click", (e) => { if (e.target === lead) lead.close(); });

    leadForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      leadForm.setAttribute("data-checked", "");
      if (!leadForm.checkValidity()) {
        $(":invalid:not(fieldset)", leadForm)?.focus();
        setStatus("Check the highlighted fields.", "danger");
        return;
      }
      const fd = new FormData(leadForm);
      const data = { ...Object.fromEntries(fd), needs: fd.getAll("needs"), page: location.href, attribution: window.fhAttribution?.fields(leadForm) ?? {} };
      submit.setAttribute("aria-busy", "true");
      submit.querySelector("span").textContent = "Sending";
      submit.insertAdjacentHTML("afterbegin", '<i class="fh-spinner" aria-hidden="true"></i>');
      setStatus("Sending…");
      let sent = false, preview = false;
      try {
        const r = await fetch(leadForm.action, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
        sent = r.ok;
        preview = !r.ok && r.status !== 422 && location.hostname !== "firehorse.rascode.dev";
      } catch { preview = location.hostname !== "firehorse.rascode.dev"; }
      submit.removeAttribute("aria-busy");
      submit.querySelector(".fh-spinner")?.remove();
      submit.querySelector("span").textContent = "Send to Rascode";
      if (!sent && !preview) { setStatus("That didn't go through. Try again in a minute, or reach us at rascode.dev.", "danger"); return; }
      const first = String(data.name).trim().split(/\s+/)[0];
      $("[data-lead-thanks]", lead).textContent = `Got it, ${first}. We'll be in touch.`;
      $("[data-lead-email]", lead).textContent = data.email;
      steps.form.hidden = true; steps.done.hidden = false; submit.hidden = true;
      cancel.textContent = "Close";
      setStatus(preview ? "Preview copy: the form isn't connected here, so nothing was sent." : "Sent. A copy of your details is with the Rascode team.", preview ? "amber" : "lime");
      $("[data-lead-thanks]", lead).focus();
    });
  }
  // Hero breathing window: measure its tallest frame, then pin it in a
  // fixed-height stage so its live reflow never shifts the page (or anchor links).
  const stage = $(".site-breathe-stage");
  if (stage) {
    const win = $(".site-breathe", stage);
    const measure = () => {
      const prev = { a: win.style.animation, w: win.style.inlineSize };
      stage.removeAttribute("data-pinned");
      win.style.animation = "none";
      let h = 0;
      for (const w of ["100%", "62%", "38%"]) { win.style.inlineSize = w; h = Math.max(h, win.offsetHeight); }
      win.style.animation = prev.a; win.style.inlineSize = prev.w;
      stage.style.setProperty("--site-breathe-h", `${Math.ceil(h)}px`);
      stage.setAttribute("data-pinned", "");
    };
    measure();
    document.fonts?.ready.then(measure);
    let lastW = stage.clientWidth;
    new ResizeObserver(() => { if (stage.clientWidth !== lastW) { lastW = stage.clientWidth; measure(); } }).observe(stage);
  }

  /* —— Render-skipped sections: learn their real sizes once —— 
   * Sections use content-visibility: auto. Render each one for a frame
   * after load (and after a width change) so the browser remembers its
   * true height; then jumps across the page land exactly. */
  const skipped = $$('main > section[style*="--site-h"]');
  const prime = () => {
    let k = 0;
    const next = () => {
      const s = skipped[k++];
      if (!s) return;
      s.style.contentVisibility = "visible";
      requestAnimationFrame(() => requestAnimationFrame(() => { s.style.contentVisibility = ""; next(); }));
    };
    next();
  };
  if (skipped.length) {
    (globalThis.requestIdleCallback || ((f) => setTimeout(f, 200)))(prime);
    let lastW = innerWidth, t;
    addEventListener("resize", () => { if (innerWidth === lastW) return; lastW = innerWidth; clearTimeout(t); t = setTimeout(prime, 300); });
  }
})();
