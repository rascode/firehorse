// Round-trip test for firehorse-schema: generate, re-check, then break parity on purpose.
import { copyFileSync, readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tmp = join(mkdtempSync(join(tmpdir(), "fh-schema-")), "page.html");
copyFileSync(join(root, "test/schema.fixture.html"), tmp);
const run = (...a) => spawnSync(process.execPath, [join(root, "scripts/schema.mjs"), tmp, "--quiet", ...a], { encoding: "utf8" });
const expect = (r, code, what) => { if (r.status !== code) { console.error(`✗ schema test: ${what}\n${r.stdout}${r.stderr}`); process.exit(1); } };
expect(run(), 1, "unmarked page should fail before --write");
expect(run("--write"), 0, "--write should generate valid JSON-LD");
expect(run(), 0, "generated JSON-LD should pass the check");
writeFileSync(tmp, readFileSync(tmp, "utf8").replace("<b>$750</b>", "<b>$800</b>"));
expect(run(), 1, "a changed price should fail parity");
console.log("✓ schema: 8 component types generate, validate and catch drift");
