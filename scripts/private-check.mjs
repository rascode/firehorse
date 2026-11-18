#!/usr/bin/env node
// Private check: nothing under packages/firehorse may depend on or carry Firehorse Pro, because this folder is
// copied with its history to the public rascode/firehorse repo and published to npm (firehorse-publish.yml).
//   node scripts/private-check.mjs        (exits 1 on any finding)
// What fails:
//   1. a reference to the private package or repo: @rascode/firehorse-pro, rascode/firehorse-pro, firehorse-pro.git
//   2. a Pro file: Pro's licence header, a firehorse-pro.* stylesheet or script, a file named like Pro's own source
//      (keyfield.js, calendar.js…) in src/ or dist/, or any folder named pro/ other than the public /pro/ page
//   3. a copy of a Pro file: the same bytes as a file in packages/firehorse-pro/{src,dist,site} (when Pro is beside us)
//   4. FireKit's private sources (packages/fire-kit, the iOS parts): a path to one of its source files
//      (Sources/FireKit/<file>.swift), or the same bytes as one of its sources (when FireKit is beside us)
// What passes: naming the product. The public site sells Firehorse Pro (the /pro/ page, the lead form's
// "firehorse-pro" option) and loads /firehorse-pro.css when the site build had Pro to copy; none of that is Pro.
// Files checked: what git would publish (tracked, plus untracked files that are not ignored).
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pro = join(root, "..", "firehorse-pro");
const fireKit = join(root, "..", "fire-kit");
const self = relative(root, fileURLToPath(import.meta.url));

const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "--", "."], { cwd: root, encoding: "utf8" })
  .split("\n").filter(Boolean).filter((f) => existsSync(join(root, f)));

const REFERENCES = [/@rascode\/firehorse-pro\b/, /rascode\/firehorse-pro\b/, /firehorse-pro\.git\b/];
const FIREKIT_SOURCE = /Sources\/FireKit\/[\w./-]+\.swift\b/;
const MARKERS = [/licensed to Pro subscribers/i];
const PUBLIC_PRO = new Set(["site/pages/pro/index.html"]);
const TEXT = /\.(css|js|mjs|cjs|ts|tsx|jsx|json|jsonc|html|md|txt|yml|yaml|svg|sh)$/;

const walk = (d) => readdirSync(d).flatMap((n) => {
  const p = join(d, n);
  if (n === "node_modules" || n === ".turbo") return [];
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const sha = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");

// Pro's own files: their hashes, and the names of its source and built files. Only the product (src, dist, the
// Pro docs pages): Pro's marketing and skills hold copies of public Firehorse assets, which are not Pro's.
const proHashes = new Map();
const proNames = new Set();
for (const dir of ["src", "dist", "site"].map((d) => join(pro, d)).filter(existsSync)) {
  for (const p of walk(dir)) {
    const rel = relative(pro, p);
    if (rel === "package.json" || statSync(p).size < 64) continue; // tiny files (a bare "{}") match by accident
    proHashes.set(sha(p), rel);
    if (/^(src|dist)\/[^/]+\.(js|css)$/.test(rel)) proNames.add(basename(rel));
  }
}
const fireKitHashes = new Map();
for (const dir of ["Sources", "Tests"].map((d) => join(fireKit, d)).filter(existsSync)) {
  for (const p of walk(dir)) if (statSync(p).size >= 64) fireKitHashes.set(sha(p), relative(fireKit, p));
}

const findings = [];
for (const f of files) {
  if (f === self) continue;
  const p = join(root, f);
  if (/(^|\/)pro\//.test(f) && !PUBLIC_PRO.has(f)) findings.push(`${f}: a pro/ folder (Pro files live in packages/firehorse-pro)`);
  if (/(^|\/)firehorse-pro[.\w-]*\.(css|js)$/.test(f)) findings.push(`${f}: a Firehorse Pro stylesheet or script`);
  if (/^(src|dist)\//.test(f) && proNames.has(basename(f))) findings.push(`${f}: has the name of a Pro file (packages/firehorse-pro/src/${basename(f)})`);
  const hash = proHashes.size || fireKitHashes.size ? sha(p) : null;
  if (hash && proHashes.has(hash)) findings.push(`${f}: the same file as packages/firehorse-pro/${proHashes.get(hash)}`);
  if (hash && fireKitHashes.has(hash)) findings.push(`${f}: the same file as packages/fire-kit/${fireKitHashes.get(hash)}`);
  if (!TEXT.test(f)) continue;
  const lines = readFileSync(p, "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const re of REFERENCES) if (re.test(line)) findings.push(`${f}:${i + 1}: references the private package (${line.match(re)[0]})`);
    if (FIREKIT_SOURCE.test(line)) findings.push(`${f}:${i + 1}: references a FireKit source (${line.match(FIREKIT_SOURCE)[0]})`);
    for (const re of MARKERS) if (re.test(line)) findings.push(`${f}:${i + 1}: carries the Firehorse Pro licence header`);
  });
}

if (findings.length) {
  console.error(`✗ private-check: ${findings.length} finding${findings.length === 1 ? "" : "s"} under packages/firehorse\n  ${findings.join("\n  ")}`);
  process.exit(1);
}
console.log(`✓ private-check: ${files.length} files under packages/firehorse, no Firehorse Pro or FireKit reference or file${proHashes.size ? ` (compared with ${proHashes.size} Pro files)` : " (Pro not beside this checkout; name and reference rules only)"}${fireKitHashes.size ? ` (and ${fireKitHashes.size} FireKit files)` : ""}`);
