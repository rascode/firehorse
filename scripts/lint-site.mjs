// Site lint: rules on the built site (site/dist), run by npm test after the site is built.
//   Stage rule: a specimen stage ([data-specimen-stage], scripts/specimen.mjs) holds only the component's
//   markup. Any element inside it with a site-* class is an error, named with its page and class.
//   Frame rule: that stage carries class site-stage and data-stage="fill" or data-stage="inline".
//   Demo frame rule: a site-demo__stage carries the same frame (site-stage, data-stage fill or inline).
//   The "no site-* class inside a stage" rule stays on [data-specimen-stage] only.
//   Retired rule: a built page has no site-specimen__stage or site-specimen__preview class.
// node scripts/lint-site.mjs [dir]   (default site/dist; exits 1 on any error)
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { elements } from "./release.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Every site-* class inside a specimen stage in one page's HTML: [{ class, tag }]. */
export const stageViolations = (html) => elements(html, /\sdata-specimen-stage(?=[\s>=])/).flatMap((s) => {
  const inner = html.slice(s.start + s.open.length, s.end);
  return [...inner.matchAll(/<([a-z][\w-]*)\b[^>]*?\sclass="([^"]*)"/gi)]
    .flatMap((m) => m[2].split(/\s+/).filter((c) => /^site-/.test(c)).map((c) => ({ class: c, tag: m[1].toLowerCase() })));
});

const STAGE_OPEN = /\sdata-specimen-stage(?=[\s>=])/;
const RETIRED_STAGE = ["site-specimen__stage", "site-specimen__preview"];

/** Frame rule: [{ kind: "class" | "mode", tag }] for a specimen stage missing site-stage or data-stage="fill|inline". */
export const stageFrameViolations = (html) => elements(html, STAGE_OPEN).flatMap((s) => {
  const out = [];
  const cls = (s.open.match(/\sclass="([^"]*)"/) ?? [, ""])[1].split(/\s+/).filter(Boolean);
  if (!cls.includes("site-stage")) out.push({ kind: "class", tag: s.tag });
  const mode = s.open.match(/\sdata-stage="([^"]*)"/);
  if (!mode || (mode[1] !== "fill" && mode[1] !== "inline")) out.push({ kind: "mode", tag: s.tag });
  return out;
});

const DEMO_STAGE_OPEN = /class="[^"]*\bsite-demo__stage\b/;

/** Demo frame rule: [{ kind: "class" | "mode", tag }] for a site-demo__stage missing site-stage or data-stage="fill|inline". */
export const demoStageFrameViolations = (html) => elements(html, DEMO_STAGE_OPEN).flatMap((s) => {
  const out = [];
  const cls = (s.open.match(/\sclass="([^"]*)"/) ?? [, ""])[1].split(/\s+/).filter(Boolean);
  if (!cls.includes("site-stage")) out.push({ kind: "class", tag: s.tag });
  const mode = s.open.match(/\sdata-stage="([^"]*)"/);
  if (!mode || (mode[1] !== "fill" && mode[1] !== "inline")) out.push({ kind: "mode", tag: s.tag });
  return out;
});

/** Retired rule: site-specimen__stage or site-specimen__preview class tokens on the page. */
export const retiredSpecimenClasses = (html) => {
  const found = new Set();
  for (const m of html.matchAll(/\sclass="([^"]*)"/gi)) {
    for (const token of m[1].split(/\s+/)) if (RETIRED_STAGE.includes(token)) found.add(token);
  }
  return [...found];
};

/** Every stage-rule error in a built site: "path: <tag class="site-x"> inside a specimen stage". */
export const lintSite = (dir = join(root, "site/dist")) => {
  const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : f.endsWith(".html") ? [p] : []; });
  const errors = [];
  let stages = 0;
  for (const file of walk(dir)) {
    const html = readFileSync(file, "utf8");
    const rel = relative(dir, file);
    stages += elements(html, STAGE_OPEN).length;
    for (const v of new Map(stageViolations(html).map((v) => [v.class, v])).values()) errors.push(`${rel}: <${v.tag} class="${v.class}"> inside a specimen stage (no site-* class may sit in a stage)`);
    for (const v of stageFrameViolations(html)) errors.push(v.kind === "class"
      ? `${rel}: a specimen stage has no site-stage class`
      : `${rel}: a specimen stage has no data-stage="fill" or data-stage="inline"`);
    for (const v of demoStageFrameViolations(html)) errors.push(v.kind === "class"
      ? `${rel}: a demo stage has no site-stage class`
      : `${rel}: a demo stage has no data-stage="fill" or data-stage="inline"`);
    for (const name of retiredSpecimenClasses(html)) errors.push(`${rel}: class ${name} is retired (use site-stage)`);
  }
  return { errors, stages };
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dir = process.argv[2] ? join(root, process.argv[2]) : join(root, "site/dist");
  if (!existsSync(dir)) { console.error(`✗ lint-site: no ${relative(root, dir)} (run npm run site)`); process.exit(1); }
  const { errors, stages } = lintSite(dir);
  if (errors.length) { console.error(errors.join("\n") + `\n\n✗ lint-site: ${errors.length} error(s)`); process.exit(1); }
  console.log(`✓ lint-site: ${stages} specimen stages, no site-* class inside one, every stage is site-stage fill or inline, no retired preview class, every demo stage carries the frame`);
}
