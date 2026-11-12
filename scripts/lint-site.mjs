// Site lint: rules on the built site (site/dist), run by npm test after the site is built.
//   Stage rule: a specimen stage ([data-specimen-stage], scripts/specimen.mjs) holds only the component's
//   markup. Any element inside it with a site-* class is an error, named with its page and class.
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

/** Every stage-rule error in a built site: "path: <tag class="site-x"> inside a specimen stage". */
export const lintSite = (dir = join(root, "site/dist")) => {
  const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : f.endsWith(".html") ? [p] : []; });
  const errors = [];
  let stages = 0;
  for (const file of walk(dir)) {
    const html = readFileSync(file, "utf8");
    stages += elements(html, /\sdata-specimen-stage(?=[\s>=])/).length;
    for (const v of new Map(stageViolations(html).map((v) => [v.class, v])).values()) errors.push(`${relative(dir, file)}: <${v.tag} class="${v.class}"> inside a specimen stage (no site-* class may sit in a stage)`);
  }
  return { errors, stages };
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dir = process.argv[2] ? join(root, process.argv[2]) : join(root, "site/dist");
  if (!existsSync(dir)) { console.error(`✗ lint-site: no ${relative(root, dir)} (run npm run site)`); process.exit(1); }
  const { errors, stages } = lintSite(dir);
  if (errors.length) { console.error(errors.join("\n") + `\n\n✗ lint-site: ${errors.length} error(s)`); process.exit(1); }
  console.log(`✓ lint-site: ${stages} specimen stages, no site-* class inside one`);
}
