// Checks firehorse-audit against test/audit.fixture.html: every kind of finding, the
// suggestions it makes, and that --fix writes them. Run by npm test.
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const audit = join(root, "scripts/audit.mjs"), fixture = join(root, "test/audit.fixture.html");
const run = (...a) => { try { return { out: execFileSync("node", [audit, ...a], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }), code: 0 }; } catch (e) { return { out: e.stdout, code: e.status }; } };
const errors = [];
const expect = (ok, msg) => { if (!ok) errors.push(msg); };

const r = JSON.parse(run(fixture, "--json").out);
const by = (k) => r.findings.filter((f) => f.kind === k);
expect(by("untagged").some((f) => f.suggest === "EYE-1.2"), "etched eyebrow pill → EYE-1.2");
expect(by("untagged").some((f) => f.suggest === "BTN-2.1"), "outline button → BTN-2.1");
expect(by("retired").some((f) => f.id === "EYE-18" && f.fix === "EYE-5.2"), "EYE-18 retired → EYE-5.2");
expect(by("mismatch").some((f) => f.id === "EYE-1.1"), "chips tagged EYE-1.1 is a mismatch");
expect(by("unknown").some((f) => f.id === "CAT-9.9"), "CAT-9.9 is unknown");
expect(by("unconnected").length === 3, `3 unconnected blocks (got ${by("unconnected").length})`);
expect(r.repeated.some((x) => x.classes === "pricing-box" && x.uses === 2), "pricing-box repeats ×2");
expect(r.candidates.some((c) => c.name === "ticker" && c.uses === 3), "local:ticker ×3 is an upstream candidate");
expect(run(fixture, "--strict").code === 1, "--strict fails on unconnected/unknown/mismatch");
expect(r.system?.key === "firehorse" && r.system.pagesWithoutDeclaration === 1, "the undeclared fixture is audited against Firehorse and counted");
expect(r.actions[0]?.verb === "Declare", "a page with no design-system reference gets a Declare action first");

const dir = mkdtempSync(join(tmpdir(), "fh-audit-"));
const copy = join(dir, "page.html");
writeFileSync(copy, readFileSync(fixture, "utf8"));
run(copy, "--fix");
const fixed = readFileSync(copy, "utf8");
expect(/data-fh="EYE-1.2" class="fh-eyebrow-pill fh-eyebrow-pill--etched"/.test(fixed), "--fix tags the etched pill");
expect(fixed.includes('data-fh="EYE-5.2"') && !fixed.includes('data-fh="EYE-18"'), "--fix rewrites EYE-18");
// A page that declares the design system gets no Declare action.
const declaredPage = join(dir, "declared.html");
writeFileSync(declaredPage, readFileSync(fixture, "utf8").replace("<head>", '<head><meta name="design-system" content="firehorse@0.9.0"><link rel="design-system" href="https://firehorse.rascode.dev/index.json">'));
const d = JSON.parse(run(declaredPage, "--json").out);
expect(d.system.declared?.key === "firehorse" && !d.actions.some((a) => a.verb === "Declare"), "a declared page is read and not asked to declare");
expect(d.actions.some((a) => a.key === "version"), "an older declared version gets an Update action");
// A page on another design system whose index can't be read stops with exit 2, never a wrong verdict.
const other = join(dir, "other.html");
writeFileSync(other, '<!doctype html><html><head><meta name="design-system" content="firegoat@0.1.0"><link rel="design-system" href="http://127.0.0.1:9/index.json"></head><body><p class="fg-pill">x</p></body></html>');
expect(run(other, "--json").code === 2, "an unreadable index for another design system exits 2");
const after = JSON.parse(run(copy, "--json").out);
expect(after.counts.untagged === 0 && after.counts.retired === 0, "nothing left to fix after --fix");

if (errors.length) { console.error("✗ audit:\n  " + errors.join("\n  ")); process.exit(1); }
console.log("✓ audit: findings, suggestions and --fix behave");
