#!/usr/bin/env node
// Edit an existing horse drawing with an image model. Default job: in
// horses-flipped.png (three horses facing right), remove the trailing horse
// on the left and finish the middle horse's back half in the same style.
// Writes candidates to ./out/ for review; nothing touches the site.
//
//   OPENAI_API_KEY=… node scripts/horse/ai/edit.mjs
//   OPENAI_API_KEY=… node scripts/horse/ai/edit.mjs --image horses-flipped.png --n 3 --note "keep the tail long"
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const key = process.env.OPENAI_API_KEY;
if (!key) { console.error("Set OPENAI_API_KEY first."); process.exit(1); }
const args = process.argv.slice(2);
const arg = (name, fallback) => (args.includes(name) ? args[args.indexOf(name) + 1] : fallback);
const image = arg("--image", "horses-flipped.png");
const n = Number(arg("--n", 3));
const note = arg("--note", "");

const prompt = `This is a pencil blueprint drawing of three horses galloping to the right, drawn with fine etched lines, construction circles at the joints, dashed guide lines and dimension marks.
Remove the left-most (rearmost) horse completely: its head, mane, body, legs and tail.
Keep the other two horses (the middle one and the front one on the right) exactly as they are drawn now: same poses, same linework, same position and size.
Where the removed horse was covering the middle horse, finish the middle horse in the same style: its back, hindquarters, both hind legs with hooves, and a flowing tail, with the same joint circles and construction lines as the rest of the drawing.
Keep the background, the dashed construction lines and the dimension marks (14.8, 18.3, 12.6, 11.2) where they make sense for two horses; drop any that only measured the removed horse.
Same paper, same pencil weight, same level of detail. No new elements, no color.${note ? `\n${note}` : ""}`;

const form = new FormData();
form.append("model", "gpt-image-1");
form.append("prompt", prompt);
form.append("size", "1536x1024");
form.append("quality", "high");
form.append("input_fidelity", "high");
form.append("n", String(n));
form.append("image[]", new Blob([readFileSync(join(here, image))], { type: "image/png" }), image);

console.log(`Editing ${image}: ${n} candidate(s)… (a minute or two)`);
const res = await fetch("https://api.openai.com/v1/images/edits", { method: "POST", headers: { authorization: `Bearer ${key}` }, body: form });
const body = await res.json();
if (!res.ok) { console.error(`✗ ${res.status}: ${body.error?.message ?? JSON.stringify(body)}`); process.exit(1); }
const out = join(here, "out"); mkdirSync(out, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
body.data.forEach((d, i) => { const f = join(out, `two-horses-${stamp}-${i + 1}.png`); writeFileSync(f, Buffer.from(d.b64_json, "base64")); console.log(`✓ ${f}`); });
