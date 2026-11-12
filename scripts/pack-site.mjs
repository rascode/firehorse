// Self-hosted npm install: packs the package and serves the tarball from the
// site, so `npm i https://firehorse.rascode.dev/npm/firehorse-<version>.tgz`
// works without the npm registry. Versioned file names keep lockfile
// integrity stable; firehorse-latest.tgz always points at the newest.
// The tarball is the public package (scripts/builds.mjs): it is packed from a staged copy that has no dist/full,
// no admin CSS, no held component source and no ./full* or ./admin* export. The repo's own package.json is left
// as it is, so installs from git (Helm) still get everything.
// Run after site.mjs (part of `npm run site`).
import { execFileSync } from "node:child_process";
import { mkdirSync, renameSync, copyFileSync, readFileSync, writeFileSync, rmSync, cpSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { plan, heldPackagePath, publicExports } from "./builds.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Stage the public package in dir (emptied first). Returns its package.json. */
export const stage = (dir) => {
  const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  const p = plan();
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  for (const f of pkg.files) {
    if (!existsSync(join(root, f))) continue;
    cpSync(join(root, f), join(dir, f), { recursive: true, filter: (from) => !heldPackagePath(relative(root, from), p) });
  }
  const pub = { ...pkg, exports: publicExports(pkg.exports) };
  writeFileSync(join(dir, "package.json"), JSON.stringify(pub, null, 2) + "\n");
  return pub;
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const out = join(root, "site/dist/npm");
  const dir = join(out, ".stage");
  mkdirSync(out, { recursive: true });
  const pkg = stage(dir);
  const [{ filename, integrity, size, entryCount }] = JSON.parse(
    execFileSync("npm", ["pack", "--json", "--pack-destination", out], { cwd: dir, encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] }),
  );
  rmSync(dir, { recursive: true, force: true });
  const versioned = `firehorse-${pkg.version}.tgz`;
  renameSync(join(out, filename), join(out, versioned));
  copyFileSync(join(out, versioned), join(out, "firehorse-latest.tgz"));
  writeFileSync(join(out, "index.json"), JSON.stringify({ name: pkg.name, version: pkg.version, tarball: `https://firehorse.rascode.dev/npm/${versioned}`, integrity, size }, null, 2) + "\n");
  console.log(`npm: ${versioned} (${(size / 1024).toFixed(0)} KB, ${entryCount} files, public package) → site/dist/npm/`);
}
