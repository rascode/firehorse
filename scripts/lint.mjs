// Firehorse lint: enforces the system's own rules on its source.
// node scripts/lint.mjs   (exits 1 on any error)
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith(".css") && files.push(p); } })(src);

const errors = [];
const defined = new Set();
const read = (f) => readFileSync(f, "utf8").replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "));
for (const f of files) for (const m of read(f).matchAll(/(--[\w-]+)\s*:/g)) defined.add(m[1]);
for (const f of files) for (const m of read(f).matchAll(/@property\s+(--[\w-]+)/g)) defined.add(m[1]);

const PRIMITIVE = /--fh-(gray|ember|sky|lime|orange|teal|fuchsia|violet|rose|amber|green|red)-\d+/;
for (const f of files) {
  const rel = relative(src, f);
  const isToken = rel.startsWith("tokens/") || rel.startsWith("themes/");
  // integrations/ style a third-party library (reveal.js), so its own class names are allowed.
  const isIntegration = rel.startsWith("integrations/");
  const css = read(f);
  const lines = css.split("\n");
  lines.forEach((line, i) => {
    const at = `${rel}:${i + 1}`;
    if (!isToken && /#[0-9a-f]{3,8}\b/i.test(line) && !/url\(/.test(line)) errors.push(`${at} raw hex color — use a token`);
    if (!isToken && /\brgba?\(/.test(line)) errors.push(`${at} raw rgb() color — use a token`);
    if (!isToken && PRIMITIVE.test(line)) errors.push(`${at} primitive token in component — use a semantic token`);
    if (/!important/.test(line) && !/(reset\.css|document\.css)/.test(rel)) errors.push(`${at} !important outside reset/motion safety`);
    const mq = line.match(/@media\s+([^{]+)/);
    if (mq && /(min|max)-width|width\s*[<>]/.test(mq[1])) errors.push(`${at} viewport width media query — use @container`);
    for (const m of line.matchAll(/var\((--[\w-]+)\s*(,)?/g)) {
      const [, name, hasFallback] = m;
      if (!defined.has(name) && !hasFallback && !name.startsWith("--font-rascode")) errors.push(`${at} ${name} is never defined and has no fallback`);
    }
    for (const m of line.matchAll(/(?<![\w-])\.([a-zA-Z][\w-]*)(?=[\s,.:{>+~)\[]|$)/g)) {
      const cls = m[1];
      if (/^\d/.test(cls) || /^(5|25|35|55|65|75|85|95)/.test(cls)) continue;
      if (/:\s*[^{]*$/.test(line.split(m[0])[0]) && !line.trim().startsWith(".") && !line.includes("{") && !line.trim().startsWith("&") && !line.trim().startsWith(":")) continue; // inside a value
      if (!cls.startsWith("fh-") && !isIntegration) errors.push(`${at} class .${cls} is not fh- prefixed`);
    }
  });
}

if (errors.length) { console.error(errors.join("\n")); console.error(`\n✗ ${errors.length} lint error(s)`); process.exit(1); }
console.log(`✓ lint: ${files.length} files, ${defined.size} custom properties, 0 errors`);
