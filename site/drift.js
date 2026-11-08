/* Firehorse Drift — a library of reveal effects for a photo backdrop.
 *
 * A drift shows a share of an image at a time (the "showing" setting, 0–1) and lets the rest
 * move in and out. Every style is randomised each time it is seeded, so no two runs repeat.
 *
 * Two kinds of style:
 *   field   a formula value(u, v, t) over the window. Each frame the engine cuts the field at the
 *           quantile that leaves exactly `share` of it showing, with a soft edge, so any formula
 *           holds the share without tuning.
 *   blocks  rectangles (panels, slats) each on its own clock, visible for `share` of its cycle.
 *
 * Tiers: "free" ships in the open package; "pro" is Firehorse Pro. The tier is data here so the
 * site can gate it (Rascode sign-in) without touching the styles.
 *
 * Usage:
 *   import { STYLES, createDrift } from "/drift.js";
 *   const d = createDrift(canvas, { paused: () => false });
 *   d.setPhoto(img, [0.5, 0.4], 0.13);   // position, and a share cropped off the top (optional)
 *   d.setPhoto(img, [1, 0.5], 0, { fit: "height", fill: "#c7c3b1" }); // whole photo, flush right
 *   d.setStyle("wave"); d.setShare(0.74); d.start();
 */

const rnd = (a, b) => a + Math.random() * (b - a);
const smooth = (a) => (a <= 0 ? 0 : a >= 1 ? 1 : a * a * (3 - 2 * a));
const TAU = Math.PI * 2;
const SWEEP = (-16 * Math.PI) / 180; // the Firehorse light sweep's angle

/* —— Field styles —————————————————————————————————————————————————————————— */
const wave = () => {
  const w = Array.from({ length: 5 }, () => {
    const a = rnd(0, TAU), k = rnd(2.2, 6.7);
    return { kx: Math.cos(a) * k, ky: Math.sin(a) * k, w: rnd(0.25, 0.75) * (Math.random() < 0.5 ? -1 : 1), p: rnd(0, TAU), amp: rnd(0.55, 1) };
  });
  const cs = Math.cos(SWEEP), sn = Math.sin(SWEEP);
  return (u, v, t) => {
    let f = 1.2 * Math.sin((u * cs + v * sn) * 5 - t * 0.6); // one slow band along the sweep
    for (const q of w) f += q.amp * Math.sin(q.kx * u + q.ky * v + q.w * t + q.p);
    return f;
  };
};
const ripple = () => {
  const c = [0, 1].map(() => ({ x: rnd(0.15, 0.85), y: rnd(0.15, 0.85), k: rnd(14, 24), s: rnd(0.8, 1.6) * (Math.random() < 0.5 ? -1 : 1) }));
  return (u, v, t, ar) => c.reduce((f, q) => f + Math.sin(Math.hypot((u - q.x) * ar, v - q.y) * q.k - t * q.s), 0) + 0.35 * Math.sin(u * 3 + t * 0.3);
};
const dapple = () => {
  const gx = 11, gy = 7;
  const cells = Array.from({ length: (gx + 1) * (gy + 1) }, () => ({ p: rnd(0, TAU), s: rnd(0.35, 1.1) }));
  return (u, v, t) => {
    const x = u * gx, y = v * gy, i = Math.min(gx - 1, x | 0), j = Math.min(gy - 1, y | 0), fx = smooth(x - i), fy = smooth(y - j);
    const at = (a, b) => { const c = cells[b * (gx + 1) + a]; return Math.sin(t * c.s + c.p); };
    const top = at(i, j) * (1 - fx) + at(i + 1, j) * fx, bot = at(i, j + 1) * (1 - fx) + at(i + 1, j + 1) * fx;
    return top * (1 - fy) + bot * fy + 0.25 * Math.sin(u * 2.3 - t * 0.2);
  };
};
const tides = () => {
  const k1 = rnd(9, 14), k2 = rnd(4, 7), tilt = rnd(-0.5, 0.5);
  return (u, v, t) => Math.sin((v + u * tilt) * k1 - t * 0.7) + 0.6 * Math.sin((v - u * 0.4) * k2 + t * 0.45 + Math.sin(u * 4 + t * 0.3) * 0.8);
};

/* —— Block styles —————————————————————————————————————————————————————————— */
const clock = (q, now, lo, hi) => { q.T = rnd(lo, hi); q.start = now; };
const panels = (aspect) => {
  const out = [], now = performance.now() / 1000;
  const cut = (x, y, w, h, d) => {
    const n = w * h;
    if (d > 5 || (d > 2 && n < 0.05 && Math.random() < 0.6) || n < 0.018) { out.push({ x, y, w, h }); return; }
    const r = rnd(0.28, 0.72);
    if (w * aspect >= h) { cut(x, y, w * r, h, d + 1); cut(x + w * r, y, w * (1 - r), h, d + 1); }
    else { cut(x, y, w, h * r, d + 1); cut(x, y + h * r, w, h * (1 - r), d + 1); }
  };
  cut(0, 0, 1, 1, 0);
  return out.map((q) => { clock(q, now, 5, 12); q.start -= Math.random() * q.T; q.lo = 5; q.hi = 12; return q; });
};
const shutters = () => {
  const out = [], now = performance.now() / 1000;
  for (let x = 0; x < 1; ) { const w = Math.min(1 - x, rnd(0.025, 0.08)); out.push({ x, y: 0, w, h: 1 }); x += w; }
  return out.map((q, i) => { clock(q, now, 4, 8); q.start -= ((i * 0.37) % 1) * q.T + rnd(0, 0.6); q.lo = 4; q.hi = 8; return q; });
};

export const STYLES = [
  { id: "wave", name: "Wave", note: "Soft drifting gaps", tier: "free", kind: "field", make: wave },
  { id: "panels", name: "Panels", note: "Random panels, own clocks", tier: "free", kind: "blocks", make: panels },
  { id: "ripple", name: "Ripple", note: "Rings from two points", tier: "pro", kind: "field", make: ripple },
  { id: "dapple", name: "Dapple", note: "Light through leaves", tier: "pro", kind: "field", make: dapple },
  { id: "tides", name: "Tide lines", note: "Bands rolling across", tier: "pro", kind: "field", make: tides },
  { id: "shutters", name: "Shutters", note: "Staggered vertical slats", tier: "pro", kind: "blocks", make: shutters },
];

/* —— Engine ————————————————————————————————————————————————————————————————— */
export function createDrift(canvas, { paused = () => false, fps = 30, maxDpr = 1.5, gap = 3, fade = 0.9 } = {}) {
  const ctx = canvas.getContext("2d");
  const mk = document.createElement("canvas"), mctx = mk.getContext("2d");
  const sharp = { canvas: document.createElement("canvas") }; sharp.ctx = sharp.canvas.getContext("2d");
  let photo = null, pos = [0.5, 0.5], lift = 0, fit = "cover", fill = "", style = STYLES[0], share = 0.74, fn = null, blocks = [], vals = null, sorted = null;
  let running = false, last = 0;
  const t0 = performance.now();
  const dpr = () => Math.min(devicePixelRatio || 1, maxDpr);

  const resize = () => {
    const r = canvas.getBoundingClientRect(), d = dpr();
    canvas.width = Math.max(1, Math.round(r.width * d));
    canvas.height = Math.max(1, Math.round(r.height * d));
    if (style.kind === "field") { mk.width = 72; mk.height = Math.max(8, Math.round((72 * canvas.height) / canvas.width)); }
    else { mk.width = canvas.width; mk.height = canvas.height; }
    vals = new Float32Array(mk.width * mk.height); sorted = new Float32Array(vals.length);
  };
  const seed = () => {
    resize();
    if (style.kind === "field") fn = style.make();
    else blocks = style.make(canvas.width / Math.max(1, canvas.height));
  };

  const maskField = (t) => {
    const W = mk.width, H = mk.height, ar = canvas.width / Math.max(1, canvas.height);
    for (let y = 0, i = 0; y < H; y++) for (let x = 0; x < W; x++, i++) vals[i] = fn(x / W, y / H, t, ar);
    sorted.set(vals); sorted.sort();
    const n = sorted.length, thr = sorted[Math.min(n - 1, Math.floor((1 - share) * n))];
    const soft = Math.max(1e-3, (sorted[Math.floor(0.9 * n)] - sorted[Math.floor(0.1 * n)]) * 0.07);
    const id = mctx.createImageData(W, H), px = id.data;
    for (let i = 0; i < n; i++) px[i * 4 + 3] = smooth(0.5 + (vals[i] - thr) / (2 * soft)) * 255;
    mctx.putImageData(id, 0, 0);
  };
  const maskBlocks = (now) => {
    const cw = mk.width, ch = mk.height, g = (gap * dpr()) / 2;
    mctx.clearRect(0, 0, cw, ch);
    mctx.fillStyle = "#000";
    for (const q of blocks) {
      let t = now - q.start;
      if (t >= q.T) { const T = q.T; clock(q, now, q.lo, q.hi); q.start = now - ((t - T) % q.T); t = now - q.start; }
      const vis = q.T * share, f = Math.min(fade, vis / 3);
      const a = smooth(t < f ? t / f : t < vis - f ? 1 : t < vis ? (vis - t) / f : 0);
      if (a <= 0) continue;
      const x = Math.round(q.x * cw + g), y = Math.round(q.y * ch + (q.h < 1 ? g : 0));
      const w = Math.round(q.w * cw - g * 2), h = Math.round(q.h * ch - (q.h < 1 ? g * 2 : 0));
      if (w < 1 || h < 1) continue;
      mctx.globalAlpha = a; mctx.fillRect(x, y, w, h);
    }
    mctx.globalAlpha = 1;
  };
  const frame = (nowMs = performance.now()) => {
    if (!photo) return;
    if (share <= 0) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; } // nothing showing
    if (style.kind === "field") maskField((nowMs - t0) / 1000); else maskBlocks(nowMs / 1000);
    const cw = canvas.width, ch = canvas.height, iw = photo.naturalWidth, ih = photo.naturalHeight;
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, cw, ch);
    if (fit === "height") {
      // the whole photo, top to bottom, flush right, over a soft, enlarged, blurred copy of
      // itself that fills the window, so the left side is the photo too, never a blank band;
      // the sharp photo's left fifth feathers into the blur
      const s = Math.max(cw / iw, ch / ih), bw = iw * s * 1.08, bh2 = ih * s * 1.08;
      ctx.filter = `blur(${Math.round(cw / 40)}px) brightness(0.92)`;
      ctx.drawImage(photo, (cw - bw) / 2, (ch - bh2) * 0.7, bw, bh2);
      ctx.filter = "none";
      const dh = ch, dw = (iw * ch) / ih, x0 = cw - dw;
      if (x0 > 0) {
        const t = sharp.canvas; t.width = Math.ceil(dw); t.height = ch;
        sharp.ctx.globalCompositeOperation = "source-over";
        sharp.ctx.clearRect(0, 0, t.width, t.height);
        sharp.ctx.drawImage(photo, 0, 0, dw, dh);
        const g = sharp.ctx.createLinearGradient(0, 0, dw * 0.22, 0);
        g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,1)");
        sharp.ctx.globalCompositeOperation = "destination-in";
        sharp.ctx.fillStyle = g; sharp.ctx.fillRect(0, 0, t.width, t.height);
        ctx.drawImage(t, x0, 0);
      } else ctx.drawImage(photo, x0, 0, dw, dh);
    } else {
      // cover a box `lift` taller than the canvas, running up past its top, so that share of the
      // photo is cropped off the top and the subject sits higher
      const bh = ch / (1 - lift), by = ch - bh;
      const s = Math.max(cw / iw, bh / ih), dw = iw * s, dh = ih * s;
      ctx.drawImage(photo, (cw - dw) * pos[0], by + (bh - dh) * pos[1], dw, dh);
    }
    ctx.globalCompositeOperation = "destination-in";
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = "high";
    ctx.drawImage(mk, 0, 0, cw, ch);
    ctx.globalCompositeOperation = "source-over";
  };
  const loop = (now) => {
    if (!running) return;
    if (!document.hidden && !paused() && now - last > 1000 / fps) { last = now; frame(now); }
    requestAnimationFrame(loop);
  };
  return {
    setPhoto(img, p = [0.5, 0.5], l = 0, o = {}) { photo = img; pos = p; lift = Math.min(0.5, Math.max(0, +l || 0)); fit = o.fit || "cover"; fill = /^#[0-9a-f]{6}$/i.test(o.fill || "") ? o.fill : ""; seed(); },
    setStyle(id) { style = STYLES.find((s) => s.id === id) || STYLES[0]; seed(); },
    setShare(p) { share = Math.min(1, Math.max(0, p)); seed(); },
    get style() { return style.id; },
    resize() { resize(); if (style.kind === "blocks") seed(); frame(); },
    frame,
    start() { if (!running) { running = true; requestAnimationFrame(loop); } },
    stop() { running = false; },
  };
}
