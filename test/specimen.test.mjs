// Specimen pages (scripts/specimen.mjs) and the stage rule (scripts/lint-site.mjs), on the public build that
// test/release.test.mjs leaves in site/dist. No browser. Run: node test/specimen.test.mjs   (part of npm test)
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { isPublic, categoryOf, release, pageStatus, heldLinks } from "../scripts/release.mjs";
import { SPECIMEN_CATEGORIES, specimenPath, hasSpecimen, stageMode, NARROW_STAGE, entriesOf } from "../scripts/specimen.mjs";
import { stageViolations, lintSite, stageFrameViolations, retiredSpecimenClasses } from "../scripts/lint-site.mjs";

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
const bad = `<section><div class="site-stage" data-stage="fill" data-specimen-stage>
<div class="site-variants"><a class="fh-button site-copy" href="#">Go</a></div>
</div><p class="site-specimen__caption">ok</p></section>`;
const good = `<div class="site-demo"><div class="site-stage" data-stage="inline" data-specimen-stage><a class="fh-button" href="#">Go</a></div></div>`;
expect(stageViolations(bad).map((v) => v.class).join(" ") === "site-variants site-copy", `stage rule fixture: got ${JSON.stringify(stageViolations(bad))}`);
expect(stageViolations(good).length === 0, "stage rule fixture: a clean stage is flagged");

// Frame rule: a specimen stage carries class site-stage and data-stage="fill" or "inline".
const missingClass = `<div data-specimen-stage data-stage="fill"><span>x</span></div>`;
const missingMode = `<div class="site-stage" data-specimen-stage><span>x</span></div>`;
const wrongMode = `<div class="site-stage" data-stage="wide" data-specimen-stage><span>x</span></div>`;
const framed = `<div class="site-stage" data-stage="fill" data-specimen-stage><span>x</span></div>`;
expect(
  stageFrameViolations(missingClass).map((v) => v.kind).join(" ") === "class"
  && stageFrameViolations(missingMode).map((v) => v.kind).join(" ") === "mode"
  && stageFrameViolations(wrongMode).map((v) => v.kind).join(" ") === "mode"
  && stageFrameViolations(framed).length === 0,
  `frame rule: got class ${JSON.stringify(stageFrameViolations(missingClass))} mode ${JSON.stringify(stageFrameViolations(missingMode))} wide ${JSON.stringify(stageFrameViolations(wrongMode))}`);

// Retired rule: the old stage and preview classes are an error. A longer name (site-specimen__stages) is not.
const retired = `<div class="fh-card__media site-specimen__preview"></div><div class="site-specimen__stage"></div>`;
expect(
  retiredSpecimenClasses(retired).sort().join(" ") === "site-specimen__preview site-specimen__stage"
  && retiredSpecimenClasses(framed).length === 0
  && retiredSpecimenClasses(`<div class="site-specimen__stages"></div>`).length === 0,
  `retired rule: got ${retiredSpecimenClasses(retired).join(" ")}`);

// The generator's choice: inline roots, a block root, and the narrow family map.
expect(stageMode(`<a class="fh-button" href="#">Go</a>\n<button type="button">Stop</button>`) === "inline", "inline choice: every root is an inline tag");
expect(stageMode(`<div class="fh-card"><a class="fh-button" href="#">Go</a></div>`) === "fill", "fill choice: a div root is fill");
expect([...NARROW_STAGE].sort().join(" ") === "CHO CKL FLD KVL TAG UPL" && !NARROW_STAGE.has("BTN"), "narrow choice: FLD CHO UPL TAG KVL CKL");

// Which specimens this build should have: every public family of a specimen category. The list names live
// categories only, and every live family of each one (read from release.json itself) is in the Index.
const full = JSON.parse(readFileSync(join(root, "dist/full/index.json"), "utf8"));
const want = full.families.filter((f) => SPECIMEN_CATEGORIES.includes(categoryOf(f.id)) && isPublic(f.id));
const live = new Set(release.categories.filter((c) => c.status === "live").map((c) => c.key));
for (const k of SPECIMEN_CATEGORIES) expect(live.has(k), `SPECIMEN_CATEGORIES names ${k}, which is not a live category`);
const manifest = release.components.filter((c) => SPECIMEN_CATEGORIES.includes(c.category) && c.status === "live").map((c) => c.id).sort();
expect(manifest.join(" ") === want.map((f) => f.id).sort().join(" "), `live families of the specimen categories: release.json ${manifest.join(" ")}, Index ${want.map((f) => f.id).sort().join(" ")}`);
const heldFams = full.families.filter((f) => SPECIMEN_CATEGORIES.includes(categoryOf(f.id)) && !isPublic(f.id));
for (const f of heldFams) expect(!existsSync(fileOf(specimenPath(f))), `held ${f.id} has a specimen page in the public build`);

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
  const order = ["data-specimen-stage", "data-specimen-switcher", 'data-specimen-panel="markup"', 'data-specimen-panel="classes"', 'data-specimen-panel="agent"', 'class="fh-section site-specimen site-specimen__foot"']
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
  const markups = entriesOf(f).flatMap((g) => g.items);
  const roots = markups.length ? markups : [{ markup: f.markup }];
  const opens = html.match(/<div class="site-stage" data-stage="(?:fill|inline)"(?: data-stage-width="narrow")? data-specimen-stage>/g) ?? [];
  expect(opens.length === roots.length, `${path}: ${opens.length} stages, want ${roots.length}`);
  const modes = opens.map((t) => t.match(/data-stage="(fill|inline)"/)[1]);
  expect(modes.join(" ") === roots.map((e) => stageMode(e.markup)).join(" "), `${path}: stage modes ${modes.join(" ")}, want ${roots.map((e) => stageMode(e.markup)).join(" ")}`);
  const narrows = (html.match(/data-stage-width="narrow"/g) ?? []).length;
  expect(narrows === (NARROW_STAGE.has(f.id) ? roots.length : 0), `${path}: ${narrows} narrow stages`);
}
// The whole build passes the stage rule.
const lint = lintSite(dist);
expect(!lint.errors.length && lint.stages > 0, `lint-site: ${lint.errors.join("; ") || "no stages found"}`);

// Each category page shows a grid listing exactly its public families, in Index order, each linked to its
// specimen; none of their demos is left on the page.
expect(new Set(want.map(specimenPath)).size === want.length, "two families share a specimen address");
const gridPages = [...new Set(want.map((f) => f.page))];
for (const page of gridPages) {
  const html = readFileSync(fileOf(page), "utf8"), main = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? "";
  const fams = want.filter((f) => f.page === page);
  expect(attrs(html, "data-specimen-card").join(" ") === fams.map((f) => f.id).join(" "), `${page} grid cards: ${attrs(html, "data-specimen-card").join(" ")}, want ${fams.map((f) => f.id).join(" ")}`);
  for (const f of fams) expect(main.includes(`<a href="${specimenPath(f)}">`), `${page} grid: no link to ${specimenPath(f)}`);
  for (const f of fams) expect(!main.includes(`data-fh-id="${f.id}`), `${page}: grid page still shows the ${f.id} demo`);
  expect(new RegExp(`<noscript>[\\s\\S]*href="${specimenPath(fams[0])}"`).test(html), `${page}: grid page has no noscript link list`);
  expect((main.match(/class="site-stage site-stage--card" data-stage="(?:fill|inline)"/g) ?? []).length === fams.length, `${page}: a card has no preview`);
  for (const f of fams) expect(main.includes(`class="site-stage site-stage--card" data-stage="${stageMode(f.markup)}"`), `${page}: ${f.id} preview is not ${stageMode(f.markup)}`);
  expect(!/class="[^"]*site-specimen__(?:stage|preview)"/.test(main), `${page}: retired preview class`);
}
const grid = readFileSync(fileOf("/components/actions/"), "utf8");
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

// Nav: the header, drawer, ⌘K and footer (everything outside <main>) name no held category and link to none of
// its pages. They are the same on every page; the home page is read.
const home = readFileSync(join(dist, "index.html"), "utf8");
const chrome = home.replace(/<main[\s\S]*<\/main>/, "");
const heldCats = release.categories.filter((c) => c.status !== "live");
const linkTexts = [...chrome.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)].map((m) => m[1].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim());
for (const c of heldCats) {
  expect(!linkTexts.includes(c.name), `nav names the held category ${c.name}`);
  for (const page of new Set(full.families.filter((f) => categoryOf(f.id) === c.key).map((f) => f.page))) {
    if (pageStatus(page, full.families.filter((f) => f.page === page).map((f) => f.id)) === "live") continue;
    expect(!new RegExp(`\\shref="${page}(?:#[^"]*)?"`).test(chrome), `nav links to ${page}, a page of the held category ${c.name}`);
  }
}
// Home: every local link on the home page (its main, header, drawer, ⌘K and footer) opens a page in this build,
// with its #target when it names one. Pages other build steps write (/stable/) count when release.json lists them live.
const ids = new Map();
const idsOf = (file) => ids.get(file) ?? ids.set(file, new Set(attrs(readFileSync(file, "utf8"), "id"))).get(file);
const dead = [];
for (const href of new Set(attrs(home, "href"))) {
  const local = href.replace(/^https:\/\/firehorse\.rascode\.dev(?=\/)/, "");
  if (/^[a-z][\w+.-]*:/i.test(local) || local.startsWith("//")) continue;
  const [rest, hash] = local.split("#"), path = rest.split("?")[0];
  const file = !path ? join(dist, "index.html") : path.endsWith("/") ? fileOf(path) : join(dist, path.replace(/^\//, ""));
  if (!existsSync(file) || statSync(file).isDirectory()) { if (!(path.endsWith("/") && pageStatus(path) === "live" && !full.families.some((f) => f.page === path))) dead.push(`${href} (no page)`); continue; }
  if (hash && file.endsWith(".html") && !idsOf(file).has(hash)) dead.push(`${href} (no #${hash} on ${path || "/"})`);
}
expect(!dead.length, `home: dead link(s): ${dead.join(", ")}`);
// And no link anywhere in the public build points at a held page or family (release.mjs --links, run here too).
const held = await heldLinks(dist);
expect(!held.length, `held link(s): ${held.join("; ")}`);

if (errors.length) { console.error(`✗ specimen: ${errors.length} problem(s)\n  ` + errors.join("\n  ")); process.exit(1); }
console.log(`✓ specimen: ${want.length} pages in ${SPECIMEN_CATEGORIES.length} categories, ${gridPages.length} grids, ${lint.stages} stages clean, Index URLs point at them; nav names no held category; home links all land; stage, frame and retired rules caught their fixtures`);
