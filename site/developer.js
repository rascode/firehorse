// Firehorse Developer Portal: module search and the source viewer.
// The page is static HTML built from src/; this only filters it and
// loads a module's source (served at /src/…) into the viewer.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* —— Search: by module name, file, Index ID or any class it defines —— */
  const search = $("[data-dev-search]");
  const none = $("[data-dev-none]");
  const filter = () => {
    const q = (search?.value ?? "").trim().toLowerCase().replace(/^\./, "");
    let shown = 0;
    for (const group of $$("[data-dev-group]")) {
      let inGroup = 0;
      for (const row of $$("[data-dev-row]", group)) {
        const hit = !q || row.dataset.search.includes(q);
        row.hidden = !hit;
        inGroup += hit ? 1 : 0;
      }
      group.hidden = inGroup === 0;
      shown += inGroup;
    }
    if (none) none.hidden = shown > 0;
  };
  search?.addEventListener("input", filter);

  /* —— Viewer —— */
  const viewer = $("#dev-viewer");
  if (!viewer) return;
  const code = $("[data-dev-code]", viewer);
  const copy = $("[data-dev-copy]", viewer);
  let current = "";
  // The site absolutises src-like attributes, so tolerate a leading slash.
  const pathOf = (btn) => btn.dataset.devSrc.replace(/^\/+/, "");

  const highlight = (text) =>
    text
      .replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c])
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="site-dev__c">$1</span>')
      .replace(/(^|\n)(\s*)(@[a-z-]+)/g, '$1$2<span class="site-dev__a">$3</span>')
      .replace(/(\.fh-[a-z0-9_-]+)/g, '<span class="site-dev__s">$1</span>')
      .replace(/(--fh-[a-z0-9-]+)/g, '<span class="site-dev__v">$1</span>');

  async function open(btn, push = true) {
    const path = pathOf(btn);
    $("[data-dev-title]", viewer).textContent = btn.dataset.devName || path;
    $("[data-dev-path]", viewer).textContent = `src/${path}`;
    $("[data-dev-file]", viewer).textContent = path.split("/").pop();
    $("[data-dev-raw]", viewer).href = `/src/${path}`;
    const chips = [
      btn.dataset.devId && `<span class="fh-chip fh-chip--sm" data-tone="teal">${btn.dataset.devId}</span>`,
      btn.dataset.devLayer && `<span class="fh-chip fh-chip--sm" data-tone="violet">${btn.dataset.devLayer}</span>`,
      btn.dataset.devBundle && `<span class="fh-chip fh-chip--sm" data-tone="amber">${btn.dataset.devBundle}</span>`,
    ].filter(Boolean);
    $("[data-dev-chips]", viewer).innerHTML = chips.join("");
    code.textContent = "Loading…";
    if (!viewer.open) viewer.showModal();
    if (push) history.replaceState(null, "", `#src=${encodeURIComponent(path)}`);
    try {
      const res = await fetch(`/src/${path}`);
      if (!res.ok) throw new Error(String(res.status));
      current = await res.text();
      code.innerHTML = highlight(current);
    } catch {
      current = "";
      code.textContent = "Couldn’t load this file.";
    }
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-dev-src]");
    if (btn) { e.preventDefault(); void open(btn); }
  });
  $("[data-dev-close]", viewer)?.addEventListener("click", () => viewer.close());
  viewer.addEventListener("close", () => {
    if (location.hash.startsWith("#src=")) history.replaceState(null, "", location.pathname + location.search);
  });
  copy?.addEventListener("click", async () => {
    if (!current) return;
    try {
      await navigator.clipboard.writeText(current);
      const label = $("span", copy);
      label.textContent = "Copied";
      setTimeout(() => (label.textContent = "Copy"), 1400);
    } catch { /* clipboard blocked */ }
  });

  // Deep link: /developer/#src=components/actions/button.css
  const deep = /^#src=(.+)$/.exec(location.hash);
  if (deep) {
    const path = decodeURIComponent(deep[1]);
    const btn = $$("[data-dev-src]").find((b) => pathOf(b) === path);
    if (btn) void open(btn, false);
  }
})();
