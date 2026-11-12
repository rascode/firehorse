// Self-hosted npm install: packs the package and serves the tarball from the
// site, so `npm i https://firehorse.rascode.dev/npm/firehorse-<version>.tgz`
// works without the npm registry. Versioned file names keep lockfile
// integrity stable; firehorse-latest.tgz always points at the newest.
// Run after site.mjs (part of `npm run site`).
import { execFileSync } from "node:child_process";
import { mkdirSync, renameSync, copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "site/dist/npm");
mkdirSync(out, { recursive: true });
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const [{ filename, integrity, size }] = JSON.parse(
  execFileSync("npm", ["pack", "--json", "--pack-destination", out], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] }),
);
const versioned = `firehorse-${pkg.version}.tgz`;
renameSync(join(out, filename), join(out, versioned));
copyFileSync(join(out, versioned), join(out, "firehorse-latest.tgz"));
writeFileSync(join(out, "index.json"), JSON.stringify({ name: pkg.name, version: pkg.version, tarball: `https://firehorse.rascode.dev/npm/${versioned}`, integrity, size }, null, 2) + "\n");
console.log(`npm: ${versioned} (${(size / 1024).toFixed(0)} KB) → site/dist/npm/`);
