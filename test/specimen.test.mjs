// Specimen pages (scripts/specimen.mjs) and the stage rule (scripts/lint-site.mjs), on the public build that
// test/release.test.mjs leaves in site/dist. No browser. Run: node test/specimen.test.mjs   (part of npm test)
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { isPublic, categoryOf } from "../scripts/release.mjs";
import { SPECIMEN_CATEGORIES, specimenPath, hasSpecimen } from "../scripts/specimen.mjs";
import { stageViolations, lintSite } from "../scripts/lint-site.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "site/dist");
const base = "https://firehorse.rascode.dev";
const errors = [];
const expect = (ok, msg) => { if (!ok) errors.push(msg); };
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : f.endsWith(".html") ? [p] : []; });
const fileOf = (path) => join(dist, path.replace(/^\//, ""), "index.html");
const attrs = (html, name) => [...html.matchAll(new RegExp(`\\s${name}="([^"]+)"`, "g"))].map((m) => m[1]);

// The stage rule, on fixtures: a site-* class anywhere inside a stage is caught, with its class; the stage's own
// class and site chrome outside the stage are not.
const bad = `<section><div class="site-specimen__stage" data-specimen-stage>
<div class="site-variants"><a class="fh-button site-copy" href="#">Go</a></div>
</div><p class="site-specimen__caption">ok</p></section>`;
const good = `<div class="site-demo"><div class="site-specimen__stage" data-specimen-stage><a class="fh-button" href="#">Go</a></div></div>`;
expect(stageViolations(bad).map((v) => v.class).join(" ") === "site-variants site-copy", `stage rule fixture: got ${JSON.stringify(stageViolations(bad))}`);
expect(stageViolations(good).length === 0, "stage rule fixture: a clean stage is flagged");

// Which specimens this build should have: every public family of a specimen category.
const full = JSON.parse(readFileSync(join(root, "dist/full/index.json"), "utf8"));
const want = full.families.filter((f) => SPECIMEN_CATEGORIES.includes(categoryOf(f.id)) && isPublic(f.id));
expect(want.map((f) => f.id).sort().join(" ") === "ACT BTN CHP EYE MRK", `public Actions families: ${want.map((f) => f.id).join(" ")}`);

// The pages: exactly these specimens and no other.
const built = walk(dist).filter((f) => !f.includes("/.release-all/")).map((f) => [f, readFileSync(f, "utf8")]).filter(([, h]) => /\sdata-specimen="[A-Z]{3}"/.test(h));
const builtIds = built.map(([, h]) => h.match(/\sdata-specimen="([A-Z]{3})"/)[1]).sort().join(" ");
expect(builtIds === want.map((f) => f.id).sort().join(" "), `specimen pages built: ${builtIds}`);

for (const f of want) {
  const path = specimenPath(f), file = fileOf(path);
  if (!existsSync(file)) { errors.push(`${path}: not built`); continue; }
  const html = readFileSync(file, "utf8");
  expect((html.match(/<h1\b/g) ?? []).length === 1, `${path}: needs exactly one h1`);
  expect(new RegExp(`<h1[^>]*>${f.name.replace(/&/g, "&amp;").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</h1>`).test(html), `${path}: h1 is not the name ${f.name}`);
  expect(new RegExp(`id="${f.id}">${f.id}</code>`).test(html), `${path}: no ID chip ${f.id}`);
  expect(new RegExp(`data-specimen-tier>${f.tier === "pro" ? "Pro" : "Free"}<`).test(html), `${path}: no tier chip`);
  expect(attrs(html, "data-specimen-panel").join(" ") === "markup classes agent", `${path}: panels are ${attrs(html, "data-specimen-panel").join(" ")}`);
  const order = ["data-specimen-stage", "data-specimen-switcher", 'data-specimen-panel="markup"', 'data-specimen-panel="classes"', 'data-specimen-panel="agent"', 'rel="(?:prev|next)"']
    .map((a) => html.search(new RegExp(a)));
  const hasSwitch = f.variants.some((v) => isPublic(v.id)) || f.groups.some((g) => !g.variants.length && g.markup && isPublic(g.id));
  const seq = order.filter((i, k) => !(k === 1 && !hasSwitch));
  expect(seq.every((i) => i > 0) && seq.every((i, k) => !k || i > seq[k - 1]), `${path}: anatomy out of order (stage, switcher, panels, foot): ${order.join(",")}`);
  // Switcher: every public variant (or variant-less group with its own markup), no held one.
  const shown = attrs(html, "data-specimen-pick");
  const pub = f.groups.flatMap((g) => (g.variants.length ? g.variants : g.markup ? [g.id] : [])).filter(isPublic);
  const held = f.groups.flatMap((g) => (g.variants.length ? g.variants : [g.id])).filter((id) => !isPublic(id));
  expect(shown.join(" ") === pub.join(" "), `${path}: switcher shows ${shown.join(" ")}, want ${pub.join(" ")}`);
  for (const id of held) expect(!html.includes(`"${id}"`) && !html.includes(`#${id}"`), `${path}: held ${id} is on the page`);
  expect(!hasSwitch || attrs(html, "data-specimen-for").filter((x) => x === pub[0]).length >= 2, `${path}: no stage and markup for ${pub[0]}`);
  // The stage holds no site-* class.
  const v = stageViolations(html);
  expect(!v.length, `${path}: site-* inside the stage: ${v.map((x) => x.class).join(" ")}`);
}
// The whole build passes the stage rule.
const lint = lintSite(dist);
expect(!lint.errors.length && lint.stages > 0, `lint-site: ${lint.errors.join("; ") || "no stages found"}`);

// The category grid lists exactly the public Actions families, each linked to its specimen.
const grid = readFileSync(fileOf("/components/actions/"), "utf8");
expect(attrs(grid, "data-specimen-card").join(" ") === want.map((f) => f.id).join(" "), `grid cards: ${attrs(grid, "data-specimen-card").join(" ")}`);
expect(new Set(want.map(specimenPath)).size === want.length, "two families share a specimen address");
for (const f of want) expect(grid.includes(`<a href="${specimenPath(f)}">`), `grid: no link to ${specimenPath(f)}`);
expect(!/class="site-demo\b/.test(grid.match(/<main[\s\S]*<\/main>/)?.[0] ?? ""), "grid page still shows demos");
expect(/<noscript>[\s\S]*href="\/components\/actions\/button\/"/.test(grid), "grid page has no noscript link list");
const map = JSON.parse(grid.match(/<script type="application\/json" id="site-specimen-map">([\s\S]*?)<\/script>/)?.[1] ?? "{}");
expect(map.BTN === "/components/actions/button/" && map["c-button"] === "/components/actions/button/" && map["BTN-1.2"] === "/components/actions/button/#BTN-1.2", "grid: old addresses (#BTN, #c-button, #BTN-1.2) do not map to the specimen");

// Both Index files point each specimen family's url at its page.
for (const file of ["dist/index.json", "dist/full/index.json"]) {
  const index = JSON.parse(readFileSync(join(root, file), "utf8"));
  for (const f of index.families) {
    const url = hasSpecimen(f.id) ? base + specimenPath(f) : null;
    const want = url ?? `${base}${f.page}#${f.id}`;
    expect(f.url === want, `${file}: ${f.id} url is ${f.url}, want ${want}`);
  }
}
const pubIndex = JSON.parse(readFileSync(join(root, "dist/index.json"), "utf8"));
for (const f of want) expect(pubIndex.families.find((x) => x.id === f.id)?.url === base + specimenPath(f), `dist/index.json: ${f.id} does not point at its specimen`);
// The clean family markup carries no site helper.
for (const f of want) expect(!/class="[^"]*\bsite-/.test(f.markup), `${f.id}: Index markup still has a site-* class`);

if (errors.length) { console.error(`✗ specimen: ${errors.length} problem(s)\n  ` + errors.join("\n  ")); process.exit(1); }
console.log(`✓ specimen: ${want.length} pages (${want.map((f) => f.id).join(" ")}), ${lint.stages} stages clean, grid and Index URLs point at them; stage rule caught its fixture`);
