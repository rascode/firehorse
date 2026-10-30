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
  // Clicking a label would focus its radio, and focusing a control in the
  // sticky header scrolls the page. Check it ourselves and focus without scrolling.
  $$('input[name="scheme"], input[name="scheme-m"]').forEach((r) => r.closest("label")?.addEventListener("click", (e) => {
    if (e.target === r) return;
    e.preventDefault();
    if (!r.checked) { r.checked = true; r.dispatchEvent(new Event("change", { bubbles: true })); }
    r.focus({ preventScroll: true });
  }));

  /* —— Dock call to action: as wide as the header's actions ——
   * The dock's CTA (.site-dock-cta) spans from the left edge of the header's
   * scheme switch to the right edge of its Download button, so the two line up. */
  const dockCta = $(".site-dock-cta"), hdrActions = $(".fh-header__actions");
  if (dockCta && hdrActions) {
    const fit = () => dockCta.style.setProperty("--site-hdr-actions-w", `${hdrActions.getBoundingClientRect().width}px`);
    new ResizeObserver(fit).observe(hdrActions);
    fit();
  }

  /* —— Avatar shuffle: rotate the photos among data-face avatars —— */
  $("#avatar-shuffle")?.addEventListener("click", () => {
    const faces = $$("[data-face] img");
    const srcs = faces.map((i) => i.getAttribute("src"));
    for (let i = srcs.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [srcs[i], srcs[j]] = [srcs[j], srcs[i]]; }
    faces.forEach((img, i) => img.setAttribute("src", srcs[i]));
  });

  /* —— Old single-page links: /#c-button now lives on /components/actions/ —— */
  const lost = decodeURIComponent(location.hash.slice(1));
  if (lost && !/^work/.test(lost) && !document.getElementById(lost) && !document.querySelector(`[data-fh-id="${CSS.escape(lost)}"]`)) {
    fetch("/anchors.json").then((r) => r.json()).then((map) => {
      const to = map[lost];
      if (to && to !== location.pathname) location.replace(`${to}#${lost}`);
    }).catch(() => {});
  }

  /* —— Hero backdrop: frost over once the hero has mostly scrolled away —— */
  const backdrop = $(".site-backdrop"), hero = $("#top");
  if (backdrop && hero) {
    new IntersectionObserver(([e]) => backdrop.classList.toggle("is-frosted", !e.isIntersecting), { rootMargin: "0px 0px -55% 0px" }).observe(hero);
  }

  /* —— Cards rise in as they scroll into view (category cards, component groups) —— */
  const rise = $$(".site-page-cards > .fh-card");
  if (rise.length) {
    rise.forEach((c, i) => c.style.setProperty("--_i", String(i % 3)));
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -10% 0px" });
    rise.forEach((c) => io.observe(c));
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
  /* —— Token explorer ——
   * Tiers filter (and explain) the list; each row previews its value live in
   * this page's theme and scheme; values that point at other tokens become
   * links you can follow; clicking a name copies var(--name). */
  const rows = $("#token-rows");
  if (rows) {
    fetch("/tokens.json").then((r) => r.json()).then(({ tokens }) => {
      // Primitives, then semantic, then component; each group kept together.
      const tierOrder = { primitives: 0, semantic: 1, config: 2 }, groupOrder = new Map();
      Object.values(tokens).forEach((t) => { const g = `${t.tier}·${t.group}`; if (!groupOrder.has(g)) groupOrder.set(g, groupOrder.size); });
      const all = Object.entries(tokens).map((e, i) => [...e, i]).sort((a, b) => (tierOrder[a[1].tier] ?? 9) - (tierOrder[b[1].tier] ?? 9) || groupOrder.get(`${a[1].tier}·${a[1].group}`) - groupOrder.get(`${b[1].tier}·${b[1].group}`) || a[2] - b[2]).map(([n, t]) => [n, t]);
      const q = $("#token-q"), count = $("#token-count");
      for (const el of $$("[data-tier-count]")) { const t = el.dataset.tierCount; el.textContent = t === "all" ? all.length : all.filter(([, v]) => v.tier === t).length; }
      const refs = (v) => escapeHtml(v).replace(/var\((--fh-[\w-]+)\)/g, (m, n) => tokens[n] ? `var(<button class="site-tok__ref" type="button" data-tok="${n}">${n}</button>)` : m);
      const preview = (n, t) => {
        const v = String(t.$value);
        if (t.$type === "color") return /light-dark\(/.test(v)
          ? `<span class="site-tok__pair" title="Light and dark"><i style="--sw: var(${n}); color-scheme: light"></i><i style="--sw: var(${n}); color-scheme: dark"></i></span>`
          : `<span class="site-tok__sw" style="--sw: var(${n})"></span>`;
        if (t.$type === "shadow") return `<span class="site-tok__shadow" style="box-shadow: var(${n})"></span>`;
        if (t.$type === "fontFamily") return `<span class="site-tok__font" style="font-family: var(${n})">Aa</span>`;
        if (t.$type === "fontWeight") return `<span class="site-tok__font" style="font-weight: var(${n})">Aa</span>`;
        if (t.$type === "dimension" && /radius/.test(n)) return `<span class="site-tok__radius" style="border-radius: var(${n})"></span>`;
        if (t.$type === "dimension") return `<span class="site-tok__bar"><i style="inline-size: min(var(${n}), 100%)"></i></span>`;
        if (t.$type === "duration" || t.$type === "cubicBezier") return `<span class="site-tok__ease" style="--d: ${t.$type === "duration" ? `var(${n})` : "0.8s"}; --e: ${t.$type === "cubicBezier" ? `var(${n})` : "ease"}"><i></i></span>`;
        return `<span class="site-tok__type">${escapeHtml(t.$type)}</span>`;
      };
      const tierName = { primitives: "Primitive", semantic: "Semantic", config: "Component" };
      const render = () => {
        const term = q.value.trim().toLowerCase();
        const tier = $('input[name="tier"]:checked')?.value ?? "all";
        const list = all.filter(([n, t]) => (tier === "all" || t.tier === tier) && (!term || n.includes(term) || String(t.$value).toLowerCase().includes(term) || t.$type.toLowerCase().includes(term) || (t.group ?? "").includes(term)));
        let group = "";
        rows.innerHTML = list.map(([n, t]) => {
          const g = `${t.tier}·${t.group ?? ""}`;
          const head = g !== group ? `<tr class="site-tok__group"><th colspan="3"><span class="site-tok__tier" data-tier="${t.tier}">${tierName[t.tier] ?? t.tier}</span>${escapeHtml(t.group ?? "")}</th></tr>` : "";
          group = g;
          const v = String(t.$value);
          return `${head}<tr><td data-label="Token"><button class="site-tok__name" type="button" data-copy-tok="${n}" title="Copy var(${n})">${n}<i class="fh-icon fh-icon--copy" aria-hidden="true"></i></button></td><td data-label="Preview">${preview(n, t)}</td><td data-label="Value"><code>${refs(v.length > 140 ? v.slice(0, 140) + "…" : v)}</code></td></tr>`;
        }).join("") || `<tr><td colspan="3" class="fh-muted">No tokens match “${escapeHtml(term)}”.</td></tr>`;
        count.textContent = `${list.length} of ${all.length}`;
      };
      // Searching looks across every tier.
      q.addEventListener("input", () => { if (q.value.trim()) $('input[name="tier"][value="all"]').checked = true; render(); });
      $$('input[name="tier"]').forEach((r) => r.addEventListener("change", render));
      rows.addEventListener("click", async (e) => {
        const ref = e.target.closest("[data-tok]");
        if (ref) { $('input[name="tier"][value="all"]').checked = true; q.value = ref.dataset.tok; render(); rows.closest(".site-tokens").scrollTop = 0; return; }
        const nm = e.target.closest("[data-copy-tok]");
        if (nm) { try { await navigator.clipboard.writeText(`var(${nm.dataset.copyTok})`); window.fhToast?.(`Copied var(${nm.dataset.copyTok})`, "success"); } catch {} }
      });
      render();
    }).catch(() => { rows.innerHTML = `<tr><td colspan="3">Couldn't load tokens.json. <a class="fh-link" href="/tokens.json">Open it directly</a>.</td></tr>`; });
  }

  /* —— Work with Rascode: lead dialog ——
   * The form slides in from the right as a full-height sheet everywhere
   * (data-lead-side="start" flips it to the left), and the Pro presets swap
   * the copy and show a plan picker. */
  const lead = $("#lead"), leadForm = $("#lead-form");
  if (lead && leadForm) {
    const presets = { design: ["design-system", "website"], ai: ["ai-agents", "automation"], consulting: ["architecture", "consulting"], pro: ["firehorse-pro"], "pro-build": ["firehorse-pro", "design-system", "system-from-url"] };
    const steps = { form: $('[data-lead-step="form"]', lead), done: $('[data-lead-step="done"]', lead) };
    const submit = $("[data-lead-submit]", lead), cancel = $("[data-lead-cancel]", lead), status = $("[data-lead-status]", lead);
    const note = status.textContent;
    const ui = {
      kicker: $("[data-lead-kicker]", lead), title: $("[data-lead-title]", lead), plan: $("[data-lead-plan]", lead),
      planSet: $("[data-lead-plan] fieldset", lead), planNote: $("[data-lead-plan-note]", lead), billing: $('input[name="billing"]', lead),
      needs: $("[data-lead-needs]", lead), budget: $("[data-lead-budget]", lead), message: $("#lead-message"),
      messageLabel: $('[data-lead-message] label', lead), submitLabel: $("span", submit),
    };
    const base = { kicker: ui.kicker.textContent, title: ui.title.textContent, label: ui.messageLabel.textContent, placeholder: ui.message.placeholder, submit: ui.submitLabel.textContent };
    let submitText = base.submit;
    // The lead form is always a full-height sheet from the right, on every page.
    lead.classList.add("fh-dialog--sheet", "site-lead--sheet");
    // .fh-main is a size container, which traps position: fixed; lift the side tab to <body>.
    $$(".site-lead-tab").forEach((t) => document.body.append(t));
    // Plan copy shown under the picker; prices follow the billing toggle on the page.
    const billingNow = () => $('input[name="billing"]:checked')?.value || "annual";
    const planCopy = {
      pro: () => billingNow() === "annual" ? "$24/mo per project, billed $290 yearly." : "$29/mo per project, billed monthly.",
      team: () => billingNow() === "annual" ? "$82/mo for up to 5 projects, billed $990 yearly." : "$99/mo for up to 5 projects, billed monthly.",
      "custom-build": () => "From $7,500, fixed scope. We send a written brief and price before any work starts.",
      question: () => "Tell us what you're weighing and we'll point you to the right plan.",
    };
    const setPlan = (plan) => {
      ui.planNote.textContent = planCopy[plan]?.() ?? "";
      const build = plan === "custom-build";
      ui.budget.hidden = !build;
      ui.messageLabel.textContent = build ? "What are you building?" : "Anything we should know?";
      ui.message.placeholder = build ? "The product, the sites involved, and any links we should see." : "Your site, which fields you'd use first, or a question. Optional.";
      ui.message.required = build;
      ui.message.closest(".fh-field").classList.toggle("fh-field--optional", !build);
    };
    $$('input[name="plan"]', lead).forEach((r) => r.addEventListener("change", () => setPlan(r.value)));
    const setMode = (plan) => {
      const pro = Boolean(plan);
      ui.plan.hidden = !pro; ui.planSet.disabled = !pro; ui.billing.disabled = !pro;
      ui.needs.hidden = pro;
      ui.kicker.textContent = pro ? "Firehorse Pro" : base.kicker;
      ui.kicker.closest(".site-lead__kicker")?.setAttribute("data-tone", pro ? "fuchsia" : "accent");
      ui.title.textContent = pro ? (plan === "custom-build" ? "Scope a custom build" : plan === "question" ? "Ask us anything" : "Get Firehorse Pro") : base.title;
      submitText = pro ? (plan === "custom-build" ? "Request a brief" : plan === "question" ? "Send question" : "Get started") : base.submit;
      ui.submitLabel.textContent = submitText;
      if (pro) {
        ui.billing.value = billingNow();
        const r = $(`input[name="plan"][value="${plan}"]`, lead) ?? $('input[name="plan"][value="pro"]', lead);
        r.checked = true; setPlan(r.value);
      } else {
        ui.budget.hidden = false; ui.message.required = true;
        ui.messageLabel.textContent = base.label; ui.message.placeholder = base.placeholder;
        ui.message.closest(".fh-field").classList.remove("fh-field--optional");
      }
    };
    const reset = () => {
      leadForm.reset(); leadForm.removeAttribute("data-checked");
      steps.form.hidden = false; steps.done.hidden = true; submit.hidden = false;
      cancel.textContent = "Cancel"; setStatus(note);
    };
    const setStatus = (text, tone) => { status.textContent = text; tone ? status.setAttribute("data-tone", tone) : status.removeAttribute("data-tone"); };
    // placement = the section the button sits in + which offer it opened (e.g. "pricing:pro", "side-tab:pro").
    const openLead = (preset, from) => {
      if (lead.open) return;
      const plan = from?.dataset.plan || (preset?.startsWith("pro") ? "pro" : "");
      leadForm.dataset.placement = `${from?.dataset.leadPlacement || from?.closest("[data-lead-sheet][id], section[id], header, footer")?.id || from?.closest("header, footer")?.localName || (from ? "page" : "deep-link")}:${plan || preset || "general"}`;
      if (!steps.done.hidden) reset();
      const pick = presets[preset];
      if (pick) $$('input[name="needs"]', leadForm).forEach((c) => { if (pick.includes(c.value)) c.checked = true; });
      setMode(plan);
      // data-lead-side="end" (or "start") on the button: this time the form is a
      // full-height sheet from the right (or left) instead of the centred dialog.
      clearTimeout(lead._sideTimer);
      const side = from?.dataset.leadSide;
      lead.classList.toggle("site-lead--start", side === "start");
      if (side && !lead.classList.contains("site-lead--sheet")) lead.classList.add("fh-dialog--sheet", "site-lead--sheet", "site-lead--temp");
      lead.showModal();
      requestAnimationFrame(() => $("#lead-name").focus());
    };
    $$("[data-lead]").forEach((b) => b.addEventListener("click", () => openLead(b.dataset.lead, b)));
    // Deep links: #work opens the form; #work-design, #work-ai, #work-consulting, #work-pro preselect a service.
    const fromHash = () => {
      const m = location.hash.match(/^#work(?:-(design|ai|consulting|pro))?$/);
      if (!m) return;
      $("#services")?.scrollIntoView({ block: "start" });
      openLead(m[1]);
    };
    fromHash();
    addEventListener("hashchange", fromHash);
    // A one-off left sheet goes back to the page's normal dialog once it has slid away.
    lead.addEventListener("close", () => {
      if (!lead.classList.contains("site-lead--temp")) return;
      lead._sideTimer = setTimeout(() => { if (!lead.open) lead.classList.remove("fh-dialog--sheet", "site-lead--sheet", "site-lead--start", "site-lead--temp"); }, 450);
    });
    lead.addEventListener("close", () => { if (/^#work/.test(location.hash)) history.replaceState(null, "", location.pathname + location.search + ($("#services") ? "#services" : "")); });
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
      submit.querySelector("span").textContent = submitText;
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
