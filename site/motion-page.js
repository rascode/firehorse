/* Motion docs page (/motion/): replay buttons, the circle reveal demo, and a live Drift. */
{
  // Replay: restart every entrance inside the demo (cancel and play its animations).
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-motion-replay]");
    if (!b) return;
    const box = document.querySelector(b.dataset.motionReplay);
    box?.querySelectorAll("[data-fh-enter], [data-fh-enter-children] > *").forEach((el) => el.getAnimations().forEach((a) => { a.cancel(); a.play(); }));
  });
  // Circle reveal: the section's tone changes, opening out from the button.
  const tones = ["violet", "sky", "teal", "lime", "amber", "orange", "rose", "fuchsia"];
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-motion-reveal]");
    if (!b) return;
    const sec = b.closest("section");
    const next = tones[(tones.indexOf(sec.dataset.tone) + 1) % tones.length];
    const change = () => { sec.dataset.tone = next; };
    window.Firehorse?.reveal ? window.Firehorse.reveal(change, b) : change();
  });
}
// Drift on a photo, with the style and share controls.
(async () => {
  const box = document.querySelector(".site-motion-drift");
  if (!box) return;
  const { createDrift } = await import("/drift.js");
  const cv = box.querySelector("canvas");
  const img = new Image();
  img.src = "/img/backdrop/hv-rider.webp";
  await img.decode().catch(() => {});
  const d = createDrift(cv, { paused: () => !box.isConnected });
  d.setPhoto(img, [0.5, 0.4]);
  d.setShare(0.74);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) d.frame(); else d.start();
  const out = box.querySelector("output"), range = box.querySelector("input[type=range]");
  range.addEventListener("input", () => { out.textContent = range.value; d.setShare(range.value / 100); d.frame(); });
  box.querySelector(".site-motion-drift__styles").addEventListener("click", (e) => {
    const b = e.target.closest("[data-drift]");
    if (!b) return;
    d.setStyle(b.dataset.drift); d.frame();
    box.querySelectorAll("[data-drift]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  });
  addEventListener("resize", () => d.resize(), { passive: true });
})();
