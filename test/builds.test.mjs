// Two builds (relay L2): the public CSS and package hold public families only, the full build is everything.
// Reads what npm run build wrote (and the site release.test.mjs built), stages the public package the way
// pack-site.mjs does and lists it with npm pack --dry-run. No browser. Run: node test/builds.test.mjs   (part of npm test)
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { plan, classesIn, markupClasses, heldPackagePath } from "../scripts/builds.mjs";
import { stage } from "../scripts/pack-site.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const expect = (ok, msg) => { if (!ok) errors.push(msg); };
const read = (f) => readFileSync(join(root, f), "utf8");
const sha = (f) => createHash("sha256").update(readFileSync(join(root, f))).digest("hex");

// The full build is what dist/firehorse.css was before the split (base 633c585).
const BASE_FULL = "763812280da7bfd920ec5bab357091eb61e97f61299a9ebb83b665cfcf8bc5b6";
expect(sha("dist/full/firehorse.css") === BASE_FULL, "dist/full/firehorse.css differs from the base build (633c585 dist/firehorse.css)");
for (const f of ["firehorse.min.css", "firehorse.compat.min.css", "admin.css", "admin.min.css", "index.json"]) expect(existsSync(join(root, "dist/full", f)), `missing dist/full/${f}`);

// No held class is a selector in any public dist/*.css. dist/admin.css and dist/admin.min.css are the old
// admin files, no longer written (admin is in dist/full only); they stay in git until they are removed.
const p = plan();
// reveal.css is built once, as before the split, and is for fh-canvas slides (Media, held): only that class may appear.
const STALE = new Set(["admin.css", "admin.min.css"]);
const SHARED = { "reveal.css": new Set(["fh-canvas"]) };
const publicCss = readdirSync(join(root, "dist")).filter((f) => f.endsWith(".css") && !STALE.has(f));
for (const f of publicCss) {
  const leaked = classesIn(read(`dist/${f}`)).filter((c) => p.heldClasses.has(c) && !SHARED[f]?.has(c));
  expect(!leaked.length, `dist/${f}: ${leaked.length} held class(es) as selectors: ${leaked.slice(0, 8).join(" ")}`);
}

// Every class in the markup of a public family, group or variant that the full CSS defines, the public CSS defines.
const fullClasses = new Set(classesIn(read("dist/full/firehorse.css")));
const pubClasses = new Set(classesIn(read("dist/firehorse.css")));
const index = JSON.parse(read("dist/index.json"));
let checked = 0;
for (const f of index.families) for (const x of [f, ...f.groups, ...f.variants]) for (const c of markupClasses(x.markup)) {
  if (!fullClasses.has(c)) continue;
  checked++;
  expect(pubClasses.has(c), `${x.id}: ${c} is in the full CSS but not the public CSS`);
}
for (const [min, full] of [["dist/firehorse.min.css", "dist/full/firehorse.min.css"], ["dist/firehorse.compat.min.css", "dist/full/firehorse.compat.min.css"]])
  expect(read(min).length < read(full).length, `${min} is not smaller than ${full}`);

// The tarball: the staged public package, listed by npm pack --dry-run.
const dir = join(root, "site/dist/.builds-test-stage");
const pkg = stage(dir);
const [{ files }] = JSON.parse(execFileSync("npm", ["pack", "--dry-run", "--json"], { cwd: dir, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }));
const listed = files.map((f) => f.path);
for (const f of listed) {
  expect(!f.startsWith("dist/full/"), `tarball has ${f}`);
  expect(!/(^|\/)admin(\.min)?\.css$/.test(f) && !f.startsWith("src/admin/"), `tarball has admin CSS: ${f}`);
  expect(!heldPackagePath(f, p), `tarball has held source ${f}`);
}
for (const f of p.left) expect(!listed.includes(f.path), `tarball has held source ${f.path}`);
expect(listed.includes("dist/firehorse.css") && listed.includes("dist/index.json"), "tarball has no dist/firehorse.css or dist/index.json");
expect(sha("dist/firehorse.css") === createHash("sha256").update(readFileSync(join(dir, "dist/firehorse.css"))).digest("hex"), "tarball dist/firehorse.css is not the public build");
const keys = Object.keys(pkg.exports);
expect(!keys.some((k) => /^\.\/(full|admin)/.test(k)), `tarball package.json exports ${keys.filter((k) => /^\.\/(full|admin)/.test(k)).join(" ")}`);

// Every exports target exists, in the repo (git installs) and in the tarball.
const targets = (exports) => Object.entries(exports).flatMap(([k, v]) => (typeof v === "string" ? [[k, v]] : Object.values(v).map((t) => [k, t])));
const exists = (base, t) => existsSync(join(base, t.includes("*") ? dirname(t) : t));
for (const [k, t] of targets(JSON.parse(read("package.json")).exports)) expect(exists(root, t), `export ${k}: ${t} does not exist`);
for (const [k, t] of targets(pkg.exports)) expect(t.includes("*") ? exists(dir, t) : listed.includes(t.replace(/^\.\//, "")), `tarball export ${k}: ${t} is not in the tarball`);
rmSync(dir, { recursive: true, force: true });

// The public site (release.test.mjs builds it into site/dist) serves the public CSS and the chrome sheet.
const site = join(root, "site/dist");
if (existsSync(join(site, "firehorse.css"))) {
  expect(readFileSync(join(site, "firehorse.css"), "utf8") === read("dist/firehorse.css"), "site/dist/firehorse.css is not the public build");
  expect(existsSync(join(site, "site-chrome.css")), "site/dist has no site-chrome.css");
}

if (errors.length) { console.error(`✗ builds: ${errors.length} problem(s)\n  ` + errors.slice(0, 60).join("\n  ")); process.exit(1); }
const kb = (f) => (readFileSync(join(root, f)).length / 1024).toFixed(1);
console.log(`✓ builds: full build matches the base; public CSS ${kb("dist/firehorse.min.css")} KB min (full ${kb("dist/full/firehorse.min.css")} KB), ${p.heldClasses.size} held classes in no public sheet, ${checked} public markup classes defined, ${p.left.length} source files left out; tarball ${listed.length} files, no full build, admin or held source; every export exists`);
