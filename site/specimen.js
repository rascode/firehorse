// Specimen pages (scripts/specimen.mjs). Without this script a specimen shows every variant in order and its
// switcher is a list of anchors; with it, the stage shows one variant at a time, the Markup panel and the
// agent line follow it, and the address carries its ID (#BTN-1.2). On a category grid page it sends old demo
// links (#BTN, #c-button, #BTN-1.2) on to the specimen that holds them now.
(() => {
  const hash = () => decodeURIComponent(location.hash.slice(1));

  /* —— Category grid: old addresses —— */
  const map = document.getElementById("site-specimen-map");
  if (map) {
    let to;
    try { to = JSON.parse(map.textContent)[hash()]; } catch {}
    if (to) location.replace(to);
    return;
  }

  /* —— Specimen: the variant switcher —— */
  const body = document.querySelector("[data-specimen]");
  const picks = [...document.querySelectorAll("[data-specimen-pick]")];
  if (!body || !picks.length) return;
  const ids = picks.map((a) => a.dataset.specimenPick);
  const parts = [...document.querySelectorAll("[data-specimen-for]")];
  // An ID, or a group ID (BTN-2), or nothing: the variant to show.
  const resolve = (id) => (ids.includes(id) ? id : ids.find((v) => v.startsWith(`${id}.`)) ?? null);
  const show = (id) => {
    for (const el of parts) el.hidden = el.dataset.specimenFor !== id;
    for (const a of picks) a.dataset.specimenPick === id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current");
    body.dataset.specimenShown = id;
  };
  show(resolve(hash()) ?? ids[0]);
  document.addEventListener("click", (e) => {
    const a = e.target.closest?.("[data-specimen-pick]");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    show(a.dataset.specimenPick);
    history.replaceState(null, "", `#${a.dataset.specimenPick}`);
  });
  addEventListener("hashchange", () => { const id = resolve(hash()); if (id) show(id); });
})();
