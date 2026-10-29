// Builds the hero backdrop symbols from the traced horse (site/parts/horse-art.json,
// made by scripts/horse/trace.py from a CC BY-SA 3.0 photo: see site/parts/HORSE-CREDIT.md).
//   #fh-horse          the engraved horse (relief lines in three weights + silhouette)
//   #fh-horse-outline  the silhouette only, for the motion echoes
//   #fh-horse-sheet    the blueprint sheet: ground, dimensions, callouts, construction
//   #fh-kc             KC's face, cropped from the head
// Output: site/parts/horse.svg (inlined by scripts/site.mjs at {{HORSE}}).
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const art = JSON.parse(readFileSync(join(root, "site/parts/horse-art.json"), "utf8"));

// Photo coordinates → the 1600 × 900 sheet.
const S = 0.9, TX = 296, TY = -131;
const T = ([x, y]) => [Math.round(x * S + TX), Math.round(y * S + TY)];
const place = `transform="translate(${TX} ${TY}) scale(${S})"`;
const paths = (list) => list.map((d) => `<path d="${d}"/>`).join("");

// Landmarks on the photo (mirrored, running right).
const P = {
  eye: [1238, 382], nostril: [1284, 546], withers: [800, 452], croup: [470, 520], shoulder: [1002, 622], hip: [468, 622],
  knee: [1118, 842], hock: [438, 948], tailTip: [44, 918], muzzle: [1310, 560], groundY: 1064, back: [340, 1060], front: [1270, 1062],
};

const sym = [];
// Engraving
sym.push(`<symbol id="fh-horse" viewBox="0 0 1600 900"><g ${place} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
<g stroke-width=".55" opacity=".32">${paths(art.dark)}</g>
<g stroke-width=".65" opacity=".58">${paths(art.mid)}</g>
<g stroke-width=".8" opacity=".9">${paths(art.light)}</g>
<g stroke-width="1.1" opacity=".85">${paths(art.outline)}</g>
<circle cx="${P.eye[0]}" cy="${P.eye[1]}" r="7" stroke-width=".9"/><circle cx="${P.eye[0]}" cy="${P.eye[1]}" r="2.2" fill="currentColor" stroke="none"/>
</g></symbol>`);
sym.push(`<symbol id="fh-horse-outline" viewBox="0 0 1600 900"><g ${place} fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round">${paths(art.outline)}</g></symbol>`);

// Blueprint sheet, in sheet coordinates.
const sheet = { line: [], fine: [], dash: [], text: [] };
const L = (a, b, k = "fine") => sheet[k].push(`<path d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}"/>`);
const C = (c, r, k = "dash") => sheet[k].push(`<circle cx="${c[0]}" cy="${c[1]}" r="${r}"/>`);
const txt = (p, s, a = "start") => sheet.text.push(`<text x="${p[0]}" y="${p[1]}" text-anchor="${a}">${s}</text>`);
const G = T([0, P.groundY])[1];
L([140, G], [1500, G], "line");
for (let x = 140; x <= 1500; x += 20) L([x, G], [x, G + (x % 100 ? 4 : 10)]);
const tick = (p, d) => { L(p, [p[0] + d[0], p[1] + d[1]]); };
function dim(a, b, label, vertical = false) {
  L(a, b);
  const [ux, uy] = vertical ? [0, 1] : [1, 0];
  for (const [p, s] of [[a, 1], [b, -1]]) { L(p, [p[0] + ux * 10 * s + uy * 4, p[1] + uy * 10 * s + ux * 4]); L(p, [p[0] + ux * 10 * s - uy * 4, p[1] + uy * 10 * s - ux * 4]); }
  const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  vertical ? txt([m[0] - 12, m[1] + 4], label, "end") : txt([m[0], m[1] - 8], label, "middle");
}
const back = T(P.back)[0], front = T(P.front)[0];
L([back, G + 14], [back, G + 44]); L([front, G + 14], [front, G + 44]);
dim([back, G + 38], [front, G + 38], "STRIDE · 7.2 M");
const W = T(P.withers);
L(W, [1530, W[1]], "dash");
dim([1530, W[1]], [1530, G], "16.1 HANDS", true);
// Construction: shoulder and hip arcs, the body axis
C(T(P.shoulder), 86); C(T(P.hip), 98); L(T(P.hip), T(P.shoulder), "dash");
for (const p of [P.shoulder, P.hip]) { const c = T(p); C(c, 4, "fine"); L([c[0] - 12, c[1]], [c[0] + 12, c[1]]); L([c[0], c[1] - 12], [c[0], c[1] + 12]); }
// Callouts with leaders
function callout(p, to, lines, anchor = "start") {
  const a = T(p); L(a, to); L(to, [to[0] + (anchor === "end" ? -60 : 60), to[1]]); C(a, 3, "fine");
  lines.forEach((s, i) => txt([to[0] + (anchor === "end" ? -64 : 64), to[1] + 4 + i * 16], s, anchor));
}
callout(P.withers, [700, 150], ["WITHERS", "HIGH, DRIVEN FORWARD"]);
callout(P.knee, [1330, 760], ["KNEE · FOLDED", "FULL FLEXION"]);
callout(P.hock, [250, 690], ["HOCK", "THE ENGINE"], "end");
txt([140, 64], "EQUUS FERUS · WILD");
txt([140, 84], "GALLOP · SUSPENSION PHASE");
txt([1500, 64], "SHEET FH-01", "end");
txt([1500, 84], "FIREHORSE", "end");
const sg = (k, a) => (sheet[k].length ? `<g ${a}>${sheet[k].join("")}</g>` : "");
sym.push(`<symbol id="fh-horse-sheet" viewBox="0 0 1600 900">${sg("dash", 'fill="none" stroke="currentColor" stroke-width=".8" stroke-dasharray="3 5" opacity=".55"')}${sg("fine", 'fill="none" stroke="currentColor" stroke-width=".7" opacity=".7"')}${sg("line", 'fill="none" stroke="currentColor" stroke-width="1" opacity=".8"')}${sg("text", 'fill="currentColor" font-family="ui-monospace, Geist Mono, monospace" font-size="11" letter-spacing="2.2" opacity=".75"')}</symbol>`);

// KC: the head, from the silhouette, heavy enough for an avatar.
sym.push(`<symbol id="fh-kc" viewBox="1110 210 260 260"><g fill="none" stroke="currentColor" stroke-width="9" stroke-linejoin="round" stroke-linecap="round"><g clip-path="url(#fh-kc-clip)">${paths(art.outline)}</g></g><circle cx="${P.eye[0]}" cy="${P.eye[1]}" r="9" fill="currentColor"/><clipPath id="fh-kc-clip"><rect x="1110" y="210" width="260" height="260"/></clipPath></symbol>`);

const out = `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><!-- Horse: traced from "Frison au galop dans la neige" by Fchosson (CC BY-SA 3.0, Wikimedia Commons). This artwork: CC BY-SA 3.0. -->${sym.join("")}</svg>`;
writeFileSync(join(root, "site/parts/horse.svg"), out + "\n");
writeFileSync(join(root, "site/parts/horse-preview.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" style="background:#0b0f14;color:#cfe3ff">${sym.join("")}<use href="#fh-horse-sheet"/><use href="#fh-horse"/></svg>\n`);
console.log(`horse: ${(out.length / 1024).toFixed(0)} KB`);
