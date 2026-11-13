// Two builds (relay L2): the public CSS and package hold public families only, the full build is everything.
// Reads what npm run build wrote (and the site release.test.mjs built), stages the public package the way
// pack-site.mjs does and lists it with npm pack --dry-run. No browser. Run: node test/builds.test.mjs   (part of npm test)
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { plan, classesIn, markupClasses, heldPackagePath } from "../scripts/builds.mjs";
import { stage } from "../scripts/pack-site.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const expect = (ok, msg) => { if (!ok) errors.push(msg); };
const read = (f) => readFileSync(join(root, f), "utf8");
const sha = (f) => createHash("sha256").update(readFileSync(join(root, f))).digest("hex");

// The full build is what dist/firehorse.css was before the split (base 633c585).
const BASE_FULL = "11c9a4dd2fddb4ab5163e1b4b5c4be6d095b4255a21ebe4a04f1df08d8f6d8f6";
expect(sha("dist/full/firehorse.css") === BASE_FULL, "dist/full/firehorse.css differs from the recorded full build (633c585 dist/firehorse.css plus the fh-tpl dialog fix); a source change to a held or live family means recording the new hash here");
for (const f of ["firehorse.min.css", "firehorse.compat.min.css", "admin.css", "admin.min.css", "index.json"]) expect(existsSync(join(root, "dist/full", f)), `missing dist/full/${f}`);

// No held class is a selector in any public sheet: every dist/*.css the public package ships (staged below) and
// every dist/*.css the build writes that the package does not leave out. No exception.
const p = plan();
const leaks = (where, css) => {
  const leaked = classesIn(css).filter((c) => p.heldClasses.has(c));
  expect(!leaked.length, `${where}: ${leaked.length} held class(es) as selectors: ${leaked.slice(0, 8).join(" ")}`);
};
for (const f of readdirSync(join(root, "dist")).filter((f) => f.endsWith(".css") && !heldPackagePath(`dist/${f}`, p))) leaks(`dist/${f}`, read(`dist/${f}`));
// Integration sheets: each one in the full build; a held one (reveal.css: fh-canvas, Media) nowhere public.
for (const i of p.integrations) {
  expect(existsSync(join(root, "dist/full", i.name)), `missing dist/full/${i.name}`);
  if (i.out) expect(heldPackagePath(`dist/${i.name}`, p) && heldPackagePath(i.path, p), `${i.name} is held but the public package keeps it`);
}
expect(p.integrations.some((i) => i.name === "reveal.css" && i.out), "reveal.css should be in the full build only (Media is held)");

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
// The built sheets the tarball ships (src/ is source: a kept file can still name a class stripped at bundle time).
for (const f of listed.filter((f) => /^dist\/.+\.css$/.test(f))) leaks(`tarball ${f}`, readFileSync(join(dir, f), "utf8"));
for (const i of p.integrations.filter((i) => i.out)) expect(!listed.includes(`dist/${i.name}`) && !listed.includes(i.path), `tarball has held integration ${i.name}`);
expect(listed.includes("dist/firehorse.css") && listed.includes("dist/index.json"), "tarball has no dist/firehorse.css or dist/index.json");
expect(sha("dist/firehorse.css") === createHash("sha256").update(readFileSync(join(dir, "dist/firehorse.css"))).digest("hex"), "tarball dist/firehorse.css is not the public build");
const keys = Object.keys(pkg.exports);
expect(!keys.some((k) => /^\.\/(full|admin)/.test(k)), `tarball package.json exports ${keys.filter((k) => /^\.\/(full|admin)/.test(k)).join(" ")}`);

// Every exports target exists, in the repo (git installs) and in the tarball.
const targets = (exports) => Object.entries(exports).flatMap(([k, v]) => (typeof v === "string" ? [[k, v]] : Object.values(v).map((t) => [k, t])));
const exists = (base, t) => existsSync(join(base, t.includes("*") ? dirname(t) : t));
for (const [k, t] of targets(JSON.parse(read("package.json")).exports)) expect(exists(root, t), `export ${k}: ${t} does not exist`);
// Every relative url() in a built sheet points at a file beside it (Helm failed to compile when the full
// build's sheets named art/etch-contours.svg and dist/full/art did not exist).
for (const sheet of ["dist/firehorse.css", "dist/full/firehorse.css", "dist/full/admin.css"]) for (const m of read(sheet).matchAll(/url\(["']?(?!data:|https?:|#)([^"')]+)["']?\)/g)) expect(exists(root, sheet.replace(/[^/]+$/, "") + m[1]), `${sheet}: url(${m[1]}) does not exist`);
for (const [k, t] of targets(pkg.exports)) expect(t.includes("*") ? exists(dir, t) : listed.includes(t.replace(/^\.\//, "")), `tarball export ${k}: ${t} is not in the tarball`);
rmSync(dir, { recursive: true, force: true });

// The public site (release.test.mjs builds it into site/dist) serves the public CSS and the chrome sheet.
const site = join(root, "site/dist");
let served = 0;
if (existsSync(join(site, "firehorse.css"))) {
  expect(readFileSync(join(site, "firehorse.css"), "utf8") === read("dist/firehorse.css"), "site/dist/firehorse.css is not the public build");
  expect(existsSync(join(site, "site-chrome.css")), "site/dist has no site-chrome.css");
  for (const i of p.integrations.filter((i) => i.out)) expect(!existsSync(join(site, i.name)), `site/dist serves held integration ${i.name}`);
  // The developer portal serves (site/dist/src) and links only the source the public package keeps.
  const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
  const srcDir = join(site, "src");
  const servedFiles = existsSync(srcDir) ? walk(srcDir).map((f) => relative(site, f)) : [];
  served = servedFiles.length;
  for (const f of servedFiles) expect(!heldPackagePath(f, p), `site/dist serves left-out source ${f}`);
  for (const f of [...p.left, ...p.integrations.filter((i) => i.out)]) expect(!existsSync(join(site, f.path)), `site/dist serves left-out source ${f.path}`);
  for (const f of walk(site).filter((f) => f.endsWith(".html"))) {
    for (const m of readFileSync(f, "utf8").matchAll(/\s(href|src|data-dev-src)="([^"#?]+)/g)) {
      const path = m[1] === "data-dev-src" ? `src/${m[2].replace(/^\/+/, "")}` : m[2].replace(/^(https:\/\/firehorse\.rascode\.dev)?\//, "");
      if (path.startsWith("src/") && heldPackagePath(path, p)) errors.push(`${relative(root, f)}: ${m[1]}="${m[2]}" points at left-out source`);
    }
  }
}

if (errors.length) { console.error(`✗ builds: ${errors.length} problem(s)\n  ` + errors.slice(0, 60).join("\n  ")); process.exit(1); }
const kb = (f) => (readFileSync(join(root, f)).length / 1024).toFixed(1);
console.log(`✓ builds: full build matches the base; public CSS ${kb("dist/firehorse.min.css")} KB min (full ${kb("dist/full/firehorse.min.css")} KB), ${p.heldClasses.size} held classes in no public sheet, ${checked} public markup classes defined, ${p.left.length} source files left out, full build only: ${p.integrations.filter((i) => i.out).map((i) => i.name).join(" ") || "none"}; tarball ${listed.length} files, no full build, admin, held integration or held source; every export exists; the portal serves ${served} source files, none left out`);
