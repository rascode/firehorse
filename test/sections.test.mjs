// sections.json surface members (relay L8a): every object with an id lists the Index codes it is built from.
// Reads sections.json and dist/full/index.json (npm run build writes it). No browser. Run: node test/sections.test.mjs   (part of npm test)
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (f) => JSON.parse(readFileSync(join(root, f), "utf8"));
const sections = read("sections.json");
const index = read("dist/full/index.json");
const errors = [];
const expect = (ok, msg) => { if (!ok) errors.push(msg); };

// Surfaces that honestly have no member: their markup holds no class another Index code owns.
const NONE = new Set(["REF"]);

const codes = new Set(index.families.flatMap((f) => [f.id, ...f.groups.map((g) => g.id), ...f.variants.map((v) => v.id)]));
const surfaces = [];
const walk = (o, at) => {
  if (!o || typeof o !== "object") return;
  if (!Array.isArray(o) && typeof o.id === "string") surfaces.push({ at, ...o });
  for (const [k, v] of Object.entries(o)) walk(v, `${at}.${k}`);
};
walk(sections, "sections");

// A code and its family or group, or a variant of it, are the same surface: SDC-1.1 is no member of SDC.
const related = (a, b) => a === b || b.startsWith(`${a}-`) || b.startsWith(`${a}.`) || a.startsWith(`${b}-`) || a.startsWith(`${b}.`);

let total = 0;
for (const s of surfaces) {
  const where = `${s.at} (${s.id})`;
  expect(codes.has(s.id), `${where}: the surface itself is not an Index code`);
  if (!Array.isArray(s.members)) { errors.push(`${where}: no members array`); continue; }
  total += s.members.length;
  if (NONE.has(s.id)) expect(!s.members.length, `${where}: listed as having no member, but lists ${s.members.join(" ")}`);
  else expect(s.members.length > 0, `${where}: no member (if it honestly has none, add it to NONE in test/sections.test.mjs)`);
  expect(new Set(s.members).size === s.members.length, `${where}: a member is listed twice`);
  for (const m of s.members) {
    expect(codes.has(m), `${where}: member ${m} is not a code of dist/full/index.json`);
    expect(!related(s.id, m), `${where}: member ${m} is the surface itself`);
  }
}
expect(surfaces.length > 0, "sections.json: no surface with an id");

if (errors.length) { console.error(`✗ sections: ${errors.length} problem(s)\n  ` + errors.join("\n  ")); process.exit(1); }
console.log(`✓ sections: ${surfaces.length} surfaces, ${total} members, every one an Index code and none the surface itself; no member: ${[...NONE].join(" ")}`);
