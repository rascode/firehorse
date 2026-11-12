// Release manifest (release.json): the public build shows live items only, --all still builds everything.
// Builds the site twice (no browser): --all into site/dist/.release-all, then the public site into site/dist
// (which clears the first). Run: node test/release.test.mjs   (part of npm test)
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "../scripts/pages.mjs";
import { isPublic, pageStatus, familiesIn, liveFieldTypes, heldPagePaths } from "../scripts/release.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "site/dist");
const errors = [];
const expect = (ok, msg) => { if (!ok) errors.push(msg); };
const run = (script, args = [], env = {}) => execFileSync(process.execPath, [join(root, script), ...args], { cwd: root, env: { ...process.env, ...env, FH_RELEASE: "" }, stdio: ["ignore", "ignore", "inherit"] });
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });

const list = pages();
const families = [...new Set(list.flatMap((p) => familiesIn(p.main)))];
const held = families.filter((id) => !isPublic(id));
const publicFams = families.filter(isPublic);
const heldPages = heldPagePaths(list);
const fileOf = (dir, path) => join(dir, path.endsWith(".html") ? path.slice(1) : path.replace(/^\//, "") + "index.html");

// --all: every page builds.
for (const s of ["scripts/gen-index.mjs", "scripts/agent-docs.mjs", "scripts/patterns-docs.mjs"]) run(s);
const allOut = join(dist, ".release-all");
run("scripts/site.mjs", ["--all"], { FH_SITE_OUT: allOut });
for (const p of list) expect(existsSync(fileOf(allOut, p.path)), `--all: ${p.path} was not built`);
for (const path of heldPages.filter((x) => x.endsWith(".html"))) expect(existsSync(fileOf(allOut, path)), `--all: ${path} was not built`);
expect(held.length === 0 || /data-fh-release="(hold|draft)"/.test(readFileSync(fileOf(allOut, "/components/actions/"), "utf8")), "--all: held demos carry data-fh-release");

// The public build.
run("scripts/site.mjs", ["--check"]);
const files = walk(dist).filter((f) => f.endsWith(".html"));
const heldSet = new Set(held);
for (const f of files) {
  const html = readFileSync(f, "utf8"), rel = f.slice(root.length + 1);
  for (const m of html.matchAll(/data-fh-id="([A-Z]{3})(?:-[\d.]+)?"/g)) if (heldSet.has(m[1])) errors.push(`${rel}: held family ${m[1]} as data-fh-id`);
  for (const m of html.matchAll(/href="[^"]*#([A-Z]{3})(?:-[\d.]+)?"/g)) if (heldSet.has(m[1])) errors.push(`${rel}: link to held #${m[1]}`);
}
for (const path of heldPages) expect(!existsSync(fileOf(dist, path)), `held page ${path} is in site/dist`);

// The public Index holds exactly the public families.
const index = JSON.parse(readFileSync(join(root, "dist/index.json"), "utf8"));
const got = index.families.map((f) => f.id).sort().join(" "), want = [...publicFams].sort().join(" ");
expect(got === want, `dist/index.json families differ from the public set:\n    got  ${got}\n    want ${want}`);
expect(index.families.every((f) => f.variants.every((v) => isPublic(v.id))), "dist/index.json has a held variant");
const full = JSON.parse(readFileSync(join(root, "dist/full/index.json"), "utf8"));
expect(full.families.length === families.length && full.families.every((f) => f.status && f.tier), "dist/full/index.json lists every family with status and tier");

// Agent files and llms.txt name no held family or page.
const named = (text, id) => new RegExp(`(?:\`|## |### |#### |#)${id}(?:-[\\d.]+)?\\b`).test(text);
for (const file of ["agent/index.md", "agent/components.md", "agent/patterns.md"]) {
  const text = readFileSync(join(root, file), "utf8");
  for (const id of held) if (named(text, id)) errors.push(`${file} names held family ${id}`);
}
const llms = readFileSync(join(dist, "llms.txt"), "utf8");
for (const path of heldPages) if (llms.includes(`https://firehorse.dev${path}`)) errors.push(`llms.txt lists held page ${path}`);
for (const id of held) if (named(llms, id)) errors.push(`llms.txt names held family ${id}`);
const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
for (const path of heldPages) if (sitemap.includes(`<loc>https://firehorse.dev${path}</loc>`)) errors.push(`sitemap.xml lists held page ${path}`);

// Forms shows exactly the live field types (credential types live on the Pro Keys page, not here).
const forms = readFileSync(join(dist, "forms/index.html"), "utf8");
const shown = [...forms.matchAll(/data-fh-sample-type="([^"]+)"/g)].map((m) => m[1]);
const keyTypes = new Set(JSON.parse(readFileSync(join(root, "schema/semantic-types.json"), "utf8")).types.filter((t) => t.htmlInputType === "password" || /^vault:/.test(t.example ?? "")).map((t) => t.key));
const live = liveFieldTypes().filter((k) => !keyTypes.has(k));
expect(shown.slice().sort().join(" ") === live.slice().sort().join(" "), `Forms field types differ from the live set: ${shown.length} shown, ${live.length} live`);
expect(forms.includes(`publishes, ${live.length} in all`), `Forms field types text does not say ${live.length}`);
expect(!/data-fh-release=/.test(forms), "Forms (public) carries a release marker");

if (errors.length) { console.error(`✗ release: ${errors.length} problem(s)\n  ` + errors.slice(0, 60).join("\n  ")); process.exit(1); }
console.log(`✓ release: ${publicFams.length} public families, ${list.filter((p) => pageStatus(p.path, familiesIn(p.main)) === "live").length} live docs pages, ${live.length} live field types; ${held.length} held families and ${heldPages.length} held pages kept out of site/dist; --all builds all ${list.length} pages`);
