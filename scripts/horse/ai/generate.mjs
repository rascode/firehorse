#!/usr/bin/env node
// Firehorse hero art with an image model: the two horses from Rascode's painting
// (painting.png) redrawn in the exact style of the current mechanical etched horse
// (style-reference.png). Writes candidates to ./out/ for review; nothing touches the site.
//
//   OPENAI_API_KEY=… node scripts/horse/ai/generate.mjs            # 3 candidates
//   OPENAI_API_KEY=… node scripts/horse/ai/generate.mjs --n 2 --note "make the joints larger"
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const key = process.env.OPENAI_API_KEY;
if (!key) { console.error("Set OPENAI_API_KEY first."); process.exit(1); }
const args = process.argv.slice(2);
const n = Number(args[args.indexOf("--n") + 1]) || 3;
const note = args.includes("--note") ? args[args.indexOf("--note") + 1] : "";

const prompt = `Image 1 is a painting of two horses running together: a dark bay horse in front on the left, and a white horse beside it on the right with its head turned toward the viewer and one foreleg raised.
Image 2 is a technical illustration style reference: a horse drawn as a mechanical engineering blueprint, in thin white lines on a near-black background.

Redraw the two horses from image 1 in exactly the style of image 2.
- Keep the composition, poses, overlap and proportions of the two horses from image 1: same head angles, same raised foreleg, same flowing manes, both horses running to the left.
- Draw them the way image 2 draws its horse: thin white etched lines only, double contour lines (one solid, one dashed just inside), jointed mechanical legs with round gear-like pivots at every joint (shoulder, elbow, knee, fetlock, hip, stifle, hock), rigid struts linking joints, large dashed construction circles, dash-dot construction lines running horizontally and vertically past the figures, small crosshair marks, hooves as simple trapezoids.
- Manes and tails as flowing parallel strands of fine dashed lines.
- No saddle, no harness, no bottles, no tack, no text, no labels, no numbers.
- Pure white line art on a flat near-black (#161616) background. No color, no shading, no gradients, no glow, no texture fill.
- Landscape, both horses fully in frame with some margin.${note ? `\n- ${note}` : ""}`;

const form = new FormData();
form.append("model", "gpt-image-1");
form.append("prompt", prompt);
form.append("size", "1536x1024");
form.append("quality", "high");
form.append("n", String(n));
form.append("image[]", new Blob([readFileSync(join(here, "painting.png"))], { type: "image/png" }), "painting.png");
form.append("image[]", new Blob([readFileSync(join(here, "style-reference.png"))], { type: "image/png" }), "style-reference.png");

console.log(`Generating ${n} candidate(s)… (this takes a minute or two)`);
const res = await fetch("https://api.openai.com/v1/images/edits", { method: "POST", headers: { authorization: `Bearer ${key}` }, body: form });
const body = await res.json();
if (!res.ok) { console.error(`✗ ${res.status}: ${body.error?.message ?? JSON.stringify(body)}`); process.exit(1); }
const out = join(here, "out"); mkdirSync(out, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
body.data.forEach((d, i) => {
  const file = join(out, `candidate-${stamp}-${i + 1}.png`);
  writeFileSync(file, Buffer.from(d.b64_json, "base64"));
  console.log(`✓ ${file}`);
});
