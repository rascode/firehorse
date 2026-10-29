/*!
 * Firehorse audio — dist/audio.js · MIT
 * ---------------------------------------------------------------
 * Optional enhancer for the audio components in audio.css. It wires
 * plain markup to real <audio> elements and keeps two CSS properties
 * current on each component:
 *   --p      progress 0–1
 *   --level  live output level 0–1 (needs a same-origin or CORS source)
 *
 * Boots everything with [data-fh-player], [data-fh-playlist],
 * [data-fh-captions], [data-fh-reel], [data-fh-mixer] and .fh-param.
 * Without it, the native <audio controls> fallback stays visible.
 *
 *   import { FirehorsePlayer, FirehorseMixer, peaksFromBuffer } from "@rascode/firehorse/audio";
 */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export const formatTime = (sec) => {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const s = Math.floor(sec);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = String(s % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${r}` : `${m}:${r}`;
};

/* —— Peaks —— */
let ctx = null;
const audioContext = () => {
  const AC = globalThis.AudioContext || globalThis.webkitAudioContext;
  if (!AC) return null;
  if (!ctx || ctx.state === "closed") ctx = new AC();
  return ctx;
};

/** Normalised peak per bar (0.06–1) from a decoded AudioBuffer. */
export function peaksFromBuffer(buffer, bars = 120) {
  const ch = buffer.numberOfChannels;
  const len = buffer.length;
  const block = Math.max(1, Math.floor(len / bars));
  const data = [...Array(ch)].map((_, i) => buffer.getChannelData(i));
  const out = [];
  let max = 0;
  for (let b = 0; b < bars; b++) {
    let peak = 0;
    const start = b * block;
    for (let i = start; i < start + block && i < len; i += 4) {
      let v = 0;
      for (let c = 0; c < ch; c++) v += Math.abs(data[c][i]);
      peak = Math.max(peak, v / ch);
    }
    out.push(peak);
    max = Math.max(max, peak);
  }
  return out.map((v) => clamp(v / (max || 1), 0.06, 1));
}

const peakCache = new Map();
/** Fetch and decode a URL into peaks. Cached per URL. */
export function loadPeaks(url, bars = 120) {
  const key = `${url}#${bars}`;
  if (!peakCache.has(key)) {
    peakCache.set(key, (async () => {
      const ac = audioContext();
      if (!ac) throw new Error("No Web Audio");
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = await ac.decodeAudioData(await res.arrayBuffer());
      return { peaks: peaksFromBuffer(buf, bars), duration: buf.duration };
    })());
  }
  return peakCache.get(key);
}

/** Bars → SVG mask URL. style: mirror | bottom | line */
export function waveMask(peaks, { style = "mirror", gap = 0.4, radius = 1 } = {}) {
  const n = peaks.length;
  const w = 1000;
  const h = 100;
  const pitch = w / n;
  const bw = Math.max(1, pitch * (1 - gap));
  let body = "";
  if (style === "line") {
    const pts = peaks.map((p, i) => `${(i + 0.5) * pitch},${h / 2 - p * h * 0.46}`);
    const low = peaks.map((p, i) => `${(i + 0.5) * pitch},${h / 2 + p * h * 0.46}`).reverse();
    body = `<path d="M0,50 L${pts.join(" L")} L${w},50 L${low.join(" L")} Z"/>`;
  } else {
    body = peaks.map((p, i) => {
      const bh = Math.max(2, p * h * (style === "bottom" ? 0.96 : 0.92));
      const y = style === "bottom" ? h - bh : (h - bh) / 2;
      return `<rect x="${(i * pitch + (pitch - bw) / 2).toFixed(2)}" y="${y.toFixed(2)}" width="${bw.toFixed(2)}" height="${bh.toFixed(2)}" rx="${radius}"/>`;
    }).join("");
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" fill="black">${body}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

/** Fill a .fh-wave with its layers and mask. */
export function renderWave(el, peaks, opts = {}) {
  if (!el.querySelector(".fh-wave__bars")) {
    el.insertAdjacentHTML("afterbegin", '<span class="fh-wave__bars"></span><span class="fh-wave__hover"></span><span class="fh-wave__head"></span><span class="fh-wave__tip"></span>');
  }
  el.style.setProperty("--fh-wave-mask", waveMask(peaks, { style: el.dataset.fhWaveStyle || opts.style }));
  el.removeAttribute("data-loading");
}

/* Web Audio taps silence cross-origin media that lacks CORS, so only tap safe sources. */
const tappable = (a) => {
  try { return new URL(a.currentSrc || a.src, location.href).origin === location.origin || a.crossOrigin != null; } catch { return false; }
};

const readPeaks = (el) => (el?.dataset.peaks ? el.dataset.peaks.split(",").map(Number).filter((n) => !Number.isNaN(n)) : null);

/* Placeholder silhouette while loading or when decoding is impossible. */
const placeholderPeaks = (n = 120, seed = 1) => [...Array(n)].map((_, i) => clamp(0.3 + 0.45 * Math.abs(Math.sin(i * 0.21 + seed)) + 0.2 * Math.abs(Math.sin(i * 0.07 + seed * 2)), 0.08, 1));

/* —— Seek surface: pointer + keyboard → fraction —— */
function bindSeek(el, { get, set, label = "Seek", duration = () => 0 }) {
  el.setAttribute("role", "slider");
  el.tabIndex = 0;
  el.setAttribute("aria-label", el.getAttribute("aria-label") || label);
  el.setAttribute("aria-valuemin", "0");
  el.setAttribute("aria-valuemax", "100");
  const frac = (e) => { const r = el.getBoundingClientRect(); return clamp((e.clientX - r.left) / r.width); };
  let drag = false;
  el.addEventListener("pointerdown", (e) => { drag = true; el.setPointerCapture(e.pointerId); set(frac(e)); });
  el.addEventListener("pointermove", (e) => {
    const f = frac(e);
    el.style.setProperty("--hover", f);
    const tip = el.querySelector(".fh-wave__tip");
    if (tip) tip.textContent = formatTime(f * duration());
    if (drag) set(f);
  });
  const end = (e) => { drag = false; if (el.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId); };
  el.addEventListener("pointerup", end);
  el.addEventListener("pointercancel", end);
  el.addEventListener("keydown", (e) => {
    const step = e.shiftKey ? 0.1 : 0.02;
    const map = { ArrowRight: get() + step, ArrowUp: get() + step, ArrowLeft: get() - step, ArrowDown: get() - step, Home: 0, End: 1, PageUp: get() + 0.1, PageDown: get() - 0.1 };
    if (e.key in map) { e.preventDefault(); set(clamp(map[e.key])); }
  });
}

const playing = new Set();

/* —— Player —— */
export class FirehorsePlayer {
  constructor(el, opts = {}) {
    if (el.fhPlayer) return el.fhPlayer;
    el.fhPlayer = this;
    this.el = el;
    this.opts = opts;
    this.audio = $("audio", el) || el.appendChild(Object.assign(document.createElement("audio"), { preload: "metadata" }));
    this.audio.controls = false;
    this.wave = $("[data-fh-wave], .fh-wave", el);
    this.playBtns = $$("[data-fh-play]", el);
    this.timeEl = $("[data-fh-time]", el);
    this.durEl = $("[data-fh-duration]", el);
    this.analyser = null;
    this.bind();
    el.setAttribute("data-ready", "");
    this.load(this.audio.currentSrc || this.audio.getAttribute("src"), { peaks: readPeaks(this.wave), keep: true });
  }

  bind() {
    const a = this.audio;
    this.playBtns.forEach((b) => { b.setAttribute("aria-pressed", "false"); b.addEventListener("click", () => this.toggle()); });
    a.addEventListener("play", () => this.state(true));
    a.addEventListener("pause", () => this.state(false));
    a.addEventListener("ended", () => { this.state(false); this.el.dispatchEvent(new CustomEvent("fh:ended", { bubbles: true })); });
    a.addEventListener("loadedmetadata", () => this.tick(true));
    a.addEventListener("waiting", () => this.playBtns.forEach((b) => b.setAttribute("data-loading", "")));
    a.addEventListener("playing", () => this.playBtns.forEach((b) => b.removeAttribute("data-loading")));
    a.addEventListener("timeupdate", () => this.tick());
    if (this.wave) {
      bindSeek(this.wave, { get: () => this.progress, set: (f) => this.seek(f), label: "Playback position", duration: () => a.duration || 0 });
    }
    // Volume, mute, speed, loop, skip.
    $$("[data-fh-volume]", this.el).forEach((r) => {
      const sync = () => { a.volume = r.value / 100; r.style.setProperty("--p", r.value / 100); if (a.volume > 0) a.muted = false; this.syncMute(); };
      r.addEventListener("input", sync); sync();
    });
    $$("[data-fh-mute]", this.el).forEach((b) => b.addEventListener("click", () => { a.muted = !a.muted; this.syncMute(); }));
    $$("[data-fh-speed]", this.el).forEach((c) => c.addEventListener("change", (e) => { if (e.target.value) a.playbackRate = Number(e.target.value); }));
    $$("[data-fh-loop]", this.el).forEach((b) => b.addEventListener("click", () => { a.loop = !a.loop; b.setAttribute("aria-pressed", String(a.loop)); }));
    $$("[data-fh-skip]", this.el).forEach((b) => b.addEventListener("click", () => { a.currentTime = clamp(a.currentTime + Number(b.dataset.fhSkip), 0, a.duration || 0); this.tick(true); }));
    this.el.addEventListener("keydown", (e) => {
      if (e.target.closest("input, select, textarea, [role=slider]")) return;
      if (e.key === " " || e.key === "k") { e.preventDefault(); this.toggle(); }
    });
  }

  syncMute() { $$("[data-fh-mute]", this.el).forEach((b) => { b.setAttribute("aria-pressed", String(this.audio.muted)); b.setAttribute("aria-label", this.audio.muted ? "Unmute" : "Mute"); }); }

  get progress() { const d = this.audio.duration; return d ? this.audio.currentTime / d : 0; }

  async load(src, { title, by, art, peaks, autoplay = false, keep = false } = {}) {
    if (!src) return;
    const a = this.audio;
    if (!keep) { a.src = src; a.load(); }
    if (title) $$(".fh-player__title", this.el).forEach((t) => (t.textContent = title));
    if (by) $$(".fh-player__by", this.el).forEach((t) => (t.textContent = by));
    if (art !== undefined) { const img = $(".fh-player__art img", this.el); if (img && art) img.src = art; }
    this.el.style.setProperty("--p", 0);
    if (this.wave) {
      this.wave.setAttribute("data-loading", "");
      renderWave(this.wave, peaks || placeholderPeaks());
      if (!peaks) this.wave.setAttribute("data-loading", "");
      if (!peaks) loadPeaks(new URL(src, location.href).href).then(({ peaks: p }) => renderWave(this.wave, p)).catch(() => this.wave.removeAttribute("data-loading"));
    }
    this.tick(true);
    if (autoplay) this.play();
  }

  connect() {
    if (this.analyser || this.opts.analyse === false || !tappable(this.audio)) return;
    const ac = audioContext();
    if (!ac) return;
    try {
      const src = ac.createMediaElementSource(this.audio);
      this.analyser = ac.createAnalyser();
      this.analyser.fftSize = 512;
      this.buf = new Uint8Array(this.analyser.fftSize);
      src.connect(this.analyser).connect(ac.destination);
    } catch { this.opts.analyse = false; }
  }

  play() {
    for (const p of playing) if (p !== this) p.pause();
    this.connect();
    audioContext()?.resume?.();
    return this.audio.play().catch(() => this.state(false));
  }
  pause() { this.audio.pause(); }
  toggle() { return this.audio.paused ? this.play() : this.pause(); }
  seek(f) { const d = this.audio.duration; if (d) { this.audio.currentTime = f * d; } this.el.style.setProperty("--p", f); this.tick(true); }

  state(on) {
    on ? playing.add(this) : playing.delete(this);
    this.el.toggleAttribute("data-playing", on);
    this.wave?.toggleAttribute("data-playing", on);
    this.playBtns.forEach((b) => { b.setAttribute("aria-pressed", String(on)); b.setAttribute("aria-label", on ? "Pause" : "Play"); });
    this.el.dispatchEvent(new CustomEvent(on ? "fh:play" : "fh:pause", { bubbles: true, detail: { player: this } }));
    if (on) this.loop(); else this.el.style.setProperty("--level", 0);
    if (on && "mediaSession" in navigator) {
      const title = $(".fh-player__title", this.el)?.textContent?.trim();
      if (title) navigator.mediaSession.metadata = new MediaMetadata({ title, artist: $(".fh-player__by", this.el)?.textContent?.trim() || "" });
    }
  }

  loop() {
    if (this.audio.paused) return;
    this.tick();
    if (this.analyser) {
      this.analyser.getByteTimeDomainData(this.buf);
      let sum = 0;
      for (const v of this.buf) { const s = (v - 128) / 128; sum += s * s; }
      this.el.style.setProperty("--level", clamp(Math.sqrt(sum / this.buf.length) * 4).toFixed(3));
    }
    requestAnimationFrame(() => this.loop());
  }

  tick(force) {
    const a = this.audio;
    const p = this.progress;
    this.el.style.setProperty("--p", p.toFixed(4));
    if (this.timeEl) this.timeEl.textContent = formatTime(a.currentTime);
    if (this.durEl && (force || !this._dur)) { this._dur = a.duration; this.durEl.textContent = formatTime(a.duration); }
    if (this.wave) {
      this.wave.setAttribute("aria-valuenow", Math.round(p * 100));
      this.wave.setAttribute("aria-valuetext", `${formatTime(a.currentTime)} of ${formatTime(a.duration)}`);
    }
    this.el.dispatchEvent(new CustomEvent("fh:time", { detail: { time: a.currentTime, duration: a.duration, progress: p } }));
  }
}

/* —— Playlist: buttons that load a target player —— */
export function bindPlaylist(list) {
  const target = document.querySelector(list.dataset.fhPlaylist);
  const player = target && (target.fhPlayer || new FirehorsePlayer(target));
  if (!player) return;
  const tracks = $$(".fh-track", list);
  const select = (t, autoplay) => {
    tracks.forEach((x) => x.removeAttribute("aria-current"));
    t.setAttribute("aria-current", "true");
    if (t.dataset.tone) target.dataset.tone = t.dataset.tone;
    player.load(t.dataset.src, { title: t.dataset.title, by: t.dataset.by, art: t.dataset.art, peaks: readPeaks(t), autoplay });
  };
  tracks.forEach((t) => t.addEventListener("click", () => (t.getAttribute("aria-current") === "true" ? player.toggle() : select(t, true))));
  target.addEventListener("fh:play", () => list.setAttribute("data-playing", ""));
  target.addEventListener("fh:pause", () => list.removeAttribute("data-playing"));
  target.addEventListener("fh:ended", () => { const i = tracks.findIndex((t) => t.getAttribute("aria-current") === "true"); if (tracks[i + 1]) select(tracks[i + 1], true); });
}

/* —— Captions: word-level highlight inside timed lines ——
 * Cues: <script type="application/json">[{"start":0,"end":4.2,"text":"…"}]</script>
 * or one line per <p data-start data-end>. Words are weighted by length. */
export function bindCaptions(box) {
  const target = document.querySelector(box.dataset.fhCaptions);
  const player = target && (target.fhPlayer || new FirehorsePlayer(target));
  if (!player) return;
  let cues = [];
  const json = $("script[type='application/json']", box);
  if (json) cues = JSON.parse(json.textContent);
  else cues = $$("[data-start]", box).map((p) => ({ start: +p.dataset.start, end: +p.dataset.end, text: p.textContent.trim() }));
  box.replaceChildren();
  const line = document.createElement("p");
  line.className = "fh-captions__line";
  box.append(line);
  let current = -1;
  const words = (text) => text.split(/\s+/).filter(Boolean);
  const draw = (t) => {
    const i = cues.findIndex((c) => t >= c.start && t < c.end);
    const idx = i === -1 ? (t < (cues[0]?.start ?? 0) ? 0 : current) : i;
    const cue = cues[idx];
    if (!cue) return;
    if (idx !== current) {
      current = idx;
      line.innerHTML = words(cue.text).map((w) => `<span data-state="pending">${w.replace(/</g, "&lt;")}</span>`).join(" ");
    }
    const spans = [...line.children];
    const weights = spans.map((s) => Math.max(1.2, s.textContent.replace(/[^\p{L}']/gu, "").length) + (/[.!?,]$/.test(s.textContent) ? 2 : 0));
    const total = weights.reduce((a, b) => a + b, 0);
    const f = clamp((t - cue.start) / Math.max(0.01, cue.end - cue.start)) * total;
    let acc = 0;
    spans.forEach((s, k) => {
      const st = f >= acc + weights[k] ? "done" : f >= acc ? "active" : "pending";
      if (s.dataset.state !== st) s.dataset.state = st;
      acc += weights[k];
    });
  };
  target.addEventListener("fh:time", (e) => draw(e.detail.time));
  draw(0);
}

/* —— Reel: one line at a time —— */
export function bindReel(box) {
  const target = document.querySelector(box.dataset.fhReel);
  const player = target && (target.fhPlayer || new FirehorsePlayer(target));
  if (!player) return;
  const lines = $$("template", box)[0]?.content ? [...$$("template", box)[0].content.querySelectorAll("p")].map((p) => p.textContent.trim()) : [];
  const count = $(".fh-reel__count", box) || box.appendChild(Object.assign(document.createElement("span"), { className: "fh-reel__count" }));
  const line = $(".fh-reel__line", box) || box.appendChild(Object.assign(document.createElement("p"), { className: "fh-reel__line" }));
  let cur = -1;
  const draw = (f) => {
    const i = Math.min(lines.length - 1, Math.floor(f * lines.length));
    if (i === cur || i < 0) return;
    cur = i;
    count.textContent = `${i + 1}/${lines.length}`;
    line.textContent = lines[i];
    line.removeAttribute("data-enter");
    void line.offsetWidth;
    line.setAttribute("data-enter", "");
  };
  target.addEventListener("fh:time", (e) => draw(e.detail.progress || 0));
  draw(0);
}

/* —— Mixer: synced stems with gain, mute, solo and meters —— */
export class FirehorseMixer {
  constructor(el) {
    if (el.fhMixer) return el.fhMixer;
    el.fhMixer = this;
    this.el = el;
    this.channels = $$(".fh-channel", el).map((c) => {
      const audio = new Audio();
      audio.preload = "auto";
      if (c.hasAttribute("data-crossorigin")) audio.crossOrigin = "anonymous";
      audio.src = c.dataset.src;
      return { el: c, audio, gain: null, an: null, buf: null, muted: c.hasAttribute("data-muted"), solo: false };
    });
    this.master = this.channels[0]?.audio;
    this.wave = $(".fh-mixer__bar .fh-wave", el);
    this.btn = $("[data-fh-play]", el);
    this.timeEl = $("[data-fh-time]", el);
    this.durEl = $("[data-fh-duration]", el);
    this.channels.forEach((ch) => this.bindChannel(ch));
    if (this.btn) { this.btn.setAttribute("aria-pressed", "false"); this.btn.addEventListener("click", () => this.toggle()); }
    if (this.wave && this.master) {
      renderWave(this.wave, readPeaks(this.wave) || placeholderPeaks(140, 2));
      loadPeaks(new URL(this.master.src, location.href).href, 140).then(({ peaks }) => renderWave(this.wave, peaks)).catch(() => {});
      bindSeek(this.wave, { get: () => this.progress, set: (f) => this.seek(f), label: "Mix position", duration: () => this.master.duration || 0 });
    }
    this.master?.addEventListener("loadedmetadata", () => this.tick());
    this.master?.addEventListener("ended", () => this.stop());
    el.setAttribute("data-ready", "");
  }
  get progress() { const d = this.master?.duration; return d ? this.master.currentTime / d : 0; }
  bindChannel(ch) {
    const c = ch.el;
    const wave = $(".fh-wave", c);
    if (wave) {
      renderWave(wave, readPeaks(wave) || placeholderPeaks(90, Math.random() * 5));
      loadPeaks(new URL(ch.audio.src, location.href).href, 90).then(({ peaks }) => renderWave(wave, peaks)).catch(() => {});
      bindSeek(wave, { get: () => this.progress, set: (f) => this.seek(f), label: `${$(".fh-channel__name b", c)?.textContent || "Channel"} position`, duration: () => this.master?.duration || 0 });
    }
    const range = $(".fh-channel__gain input", c);
    const out = $(".fh-channel__value", c);
    const apply = () => {
      const v = Number(range?.value ?? 100) / 100;
      range?.style.setProperty("--p", v / (Number(range.max) / 100 || 1));
      if (out) out.textContent = v <= 0.001 ? "−∞ dB" : `${(20 * Math.log10(v)).toFixed(1)} dB`;
      this.mixGains();
    };
    range?.addEventListener("input", apply);
    $("[data-fh-mute]", c)?.addEventListener("click", (e) => { ch.muted = !ch.muted; e.currentTarget.setAttribute("aria-pressed", String(ch.muted)); this.mixGains(); });
    $("[data-fh-solo]", c)?.addEventListener("click", (e) => { ch.solo = !ch.solo; e.currentTarget.setAttribute("aria-pressed", String(ch.solo)); this.mixGains(); });
    ch.apply = apply;
    apply();
  }
  graph() {
    if (this.wired) return;
    const ac = audioContext();
    if (!ac) return;
    this.wired = true;
    this.channels.forEach((ch) => {
      if (!tappable(ch.audio)) return;
      try {
        const src = ac.createMediaElementSource(ch.audio);
        ch.gain = ac.createGain();
        ch.an = ac.createAnalyser();
        ch.an.fftSize = 256;
        ch.buf = new Uint8Array(ch.an.fftSize);
        src.connect(ch.gain).connect(ch.an).connect(ac.destination);
      } catch { /* cross-origin without CORS: falls back to element volume */ }
    });
    this.mixGains();
  }
  mixGains() {
    const anySolo = this.channels.some((c) => c.solo);
    this.channels.forEach((ch) => {
      const range = $(".fh-channel__gain input", ch.el);
      const v = Number(range?.value ?? 100) / 100;
      const audible = !ch.muted && (!anySolo || ch.solo);
      const g = audible ? v : 0;
      ch.el.toggleAttribute("data-muted", !audible);
      if (ch.gain) ch.gain.gain.setTargetAtTime(g, audioContext().currentTime, 0.02);
      else ch.audio.volume = clamp(g);
    });
  }
  async play() {
    for (const p of playing) if (p !== this) p.pause();
    this.graph();
    await audioContext()?.resume?.();
    const t = this.master.currentTime;
    this.channels.forEach((ch) => { ch.audio.currentTime = t; });
    await Promise.all(this.channels.map((ch) => ch.audio.play().catch(() => {})));
    this.state(true);
    this.loop();
  }
  pause() { this.channels.forEach((ch) => ch.audio.pause()); this.state(false); }
  stop() { this.pause(); this.seek(0); }
  toggle() { return this.master.paused ? this.play() : this.pause(); }
  seek(f) { const d = this.master.duration || 0; this.channels.forEach((ch) => { ch.audio.currentTime = f * d; }); this.tick(); }
  state(on) {
    on ? playing.add(this) : playing.delete(this);
    this.el.toggleAttribute("data-playing", on);
    $$(".fh-wave", this.el).forEach((w) => w.toggleAttribute("data-playing", on));
    if (this.btn) { this.btn.setAttribute("aria-pressed", String(on)); this.btn.setAttribute("aria-label", on ? "Pause mix" : "Play mix"); }
    if (!on) this.channels.forEach((ch) => ch.el.style.setProperty("--level", 0));
  }
  loop() {
    if (this.master.paused) return;
    this.tick();
    // Keep stems locked to the first channel.
    const t = this.master.currentTime;
    this.channels.slice(1).forEach((ch) => { if (Math.abs(ch.audio.currentTime - t) > 0.08) ch.audio.currentTime = t; });
    this.channels.forEach((ch) => {
      if (!ch.an) return;
      ch.an.getByteTimeDomainData(ch.buf);
      let s = 0;
      for (const v of ch.buf) { const x = (v - 128) / 128; s += x * x; }
      ch.el.style.setProperty("--level", clamp(Math.sqrt(s / ch.buf.length) * 4.5).toFixed(3));
    });
    requestAnimationFrame(() => this.loop());
  }
  tick() {
    const p = this.progress;
    this.el.style.setProperty("--p", p.toFixed(4));
    if (this.timeEl) this.timeEl.textContent = formatTime(this.master.currentTime);
    if (this.durEl) this.durEl.textContent = formatTime(this.master.duration);
    $$(".fh-wave", this.el).forEach((w) => w.setAttribute("aria-valuenow", Math.round(p * 100)));
  }
}

/* —— Parameter readouts —— */
const units = {
  Hz: (v) => (v >= 1000 ? `${(v / 1000).toFixed(v % 1000 ? 1 : 0)} kHz` : `${Math.round(v)} Hz`),
  dB: (v) => `${v > 0 ? "+" : ""}${Number(v).toFixed(1)} dB`,
  x: (v) => `${Number(v).toFixed(2)}×`,
  "%": (v) => `${Math.round(v)}%`,
  s: (v) => `${Number(v).toFixed(1)} s`,
};
export function bindParam(label) {
  const input = $("input[type=range]", label);
  const out = $("output", label);
  if (!input) return;
  const fmt = units[input.dataset.unit] || ((v) => `${v}${input.dataset.unit ? ` ${input.dataset.unit}` : ""}`);
  const sync = () => {
    const min = Number(input.min || 0);
    const max = Number(input.max || 100);
    input.style.setProperty("--p", (input.value - min) / (max - min));
    if (out) out.textContent = fmt(Number(input.value));
    input.setAttribute("aria-valuetext", fmt(Number(input.value)));
  };
  input.addEventListener("input", sync);
  sync();
}

/* —— Boot —— */
export function boot(root = document) {
  $$("[data-fh-player]", root).forEach((el) => new FirehorsePlayer(el));
  $$("[data-fh-playlist]", root).forEach(bindPlaylist);
  $$("[data-fh-captions]", root).forEach(bindCaptions);
  $$("[data-fh-reel]", root).forEach(bindReel);
  $$("[data-fh-mixer]", root).forEach((el) => new FirehorseMixer(el));
  $$(".fh-param", root).forEach(bindParam);
  // Standalone waveforms (thumbnails, previews) just draw their peaks.
  $$(".fh-wave[data-peaks]", root).forEach((w) => { if (!w.querySelector(".fh-wave__bars")) renderWave(w, readPeaks(w)); });
  $$("input.fh-scrub:not([data-fh-volume])", root).forEach((r) => {
    if (r.closest(".fh-param, .fh-channel")) return;
    const sync = () => r.style.setProperty("--p", (r.value - (r.min || 0)) / ((r.max || 100) - (r.min || 0)));
    r.addEventListener("input", sync); sync();
  });
}

globalThis.Firehorse = Object.assign(globalThis.Firehorse || {}, { Player: FirehorsePlayer, Mixer: FirehorseMixer, audio: { boot, loadPeaks, peaksFromBuffer, waveMask, renderWave, formatTime } });
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => boot());
else boot();
