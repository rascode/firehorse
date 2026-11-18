// Firehorse docs, live: builds the site (npm run site), serves site/dist and rebuilds on a change.
//   node scripts/site-dev.mjs [--port 3030]   (npm run site:dev; pnpm dev runs it on 3030 in the platform)
// A change under src/ rebuilds the library first (npm run build), then the site; a change to the docs (site/,
// scripts/, release.json, schema/) rebuilds the site only. Pro pages and Pro source (../firehorse-pro) are watched
// when Pro is beside Firehorse. Reload the page to see the result; the server answers 503 while a build runs.
import http from "node:http";
import { createReadStream, existsSync, statSync, watch } from "node:fs";
import { spawn } from "node:child_process";
import { dirname, extname, join, normalize, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "site/dist");
const arg = (name, fallback) => { const i = process.argv.indexOf(`--${name}`); return i > 0 ? process.argv[i + 1] : fallback; };
const port = Number(arg("port", process.env.PORT ?? 3030));
const pro = join(root, "..", "firehorse-pro");

const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif",
  ".gif": "image/gif", ".ico": "image/x-icon", ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf", ".txt": "text/plain; charset=utf-8", ".md": "text/markdown; charset=utf-8",
  ".xml": "application/xml; charset=utf-8", ".mp4": "video/mp4", ".webm": "video/webm", ".mp3": "audio/mpeg", ".wav": "audio/wav", ".pdf": "application/pdf", ".tgz": "application/gzip" };

// —— build ——————————————————————————————————————————————————————————————————
let building = false;
let lastEnd = 0;
let pending = null; // "lib" (library + site) or "site"
const sh = (command) => new Promise((done) => spawn(command, { cwd: root, shell: true, stdio: "inherit" }).on("close", (code) => done(code ?? 1)));
async function build(kind, why) {
  if (building) { pending = pending === "lib" || kind === "lib" ? "lib" : "site"; return; }
  building = true;
  const started = Date.now();
  console.log(`\n[site-dev] ${kind === "lib" ? "library + site" : "site"} build (${why})`);
  const code = (kind === "lib" && (await sh("npm run build"))) || (await sh("npm run site"));
  console.log(code ? `[site-dev] build failed (exit ${code}); serving what is there` : `[site-dev] built in ${((Date.now() - started) / 1000).toFixed(1)} s · http://127.0.0.1:${port}`);
  building = false;
  lastEnd = Date.now();
  if (pending) { const next = pending; pending = null; build(next, "queued change"); }
}

// —— watch ——————————————————————————————————————————————————————————————————
const watched = [
  [join(root, "src"), "lib"], [join(pro, "src"), "lib"],
  [join(root, "site"), "site"], [join(root, "scripts"), "site"], [join(root, "schema"), "site"], [join(root, "agent"), "site"], [join(root, "release.json"), "site"], [join(pro, "site"), "site"],
].filter(([p]) => existsSync(p));
let timer;
let queued = null;
for (const [path, kind] of watched) {
  const isDir = statSync(path).isDirectory();
  watch(path, { recursive: isDir }, (_e, file) => {
    const rel = relative(root, isDir ? join(path, file ?? "") : path);
    // The build itself writes into watched folders (agent/*.md, generated pages, themes): ignore what happens
    // while it runs and just after, or every build would start the next one.
    if (building || Date.now() - lastEnd < 1500 || rel.startsWith("site/dist") || rel.includes("node_modules")) return;
    queued = queued === "lib" || kind === "lib" ? "lib" : "site";
    clearTimeout(timer);
    timer = setTimeout(() => { const k = queued; queued = null; build(k, rel); }, 300);
  });
}

// —— serve ——————————————————————————————————————————————————————————————————
const resolveFile = (urlPath) => {
  const clean = normalize(decodeURIComponent(urlPath.split("?")[0])).replace(/^(\.\.[/\\])+/, "");
  let file = join(out, clean);
  if (!file.startsWith(out)) return null;
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  else if (!existsSync(file) && existsSync(`${file}.html`)) file = `${file}.html`;
  return existsSync(file) ? file : null;
};
http.createServer((req, res) => {
  if (building && !existsSync(join(out, "index.html"))) return res.writeHead(503, { "content-type": "text/plain", "retry-after": "5" }).end("Firehorse docs are building; reload in a moment.");
  const send = (f, status) => { res.writeHead(status, { "content-type": TYPES[extname(f)] ?? "application/octet-stream", "cache-control": "no-cache" }); createReadStream(f).pipe(res); };
  const file = resolveFile(req.url ?? "/");
  if (file) return send(file, 200);
  const nf = join(out, "404.html");
  if (existsSync(nf)) return send(nf, 404);
  res.writeHead(404, { "content-type": "text/plain" }).end("Not found");
}).listen(port, "127.0.0.1", () => console.log(`[site-dev] Firehorse docs on http://127.0.0.1:${port} · watching ${watched.map(([p]) => relative(root, p)).join(", ")}`));

build(existsSync(join(root, "dist/firehorse.css")) ? "site" : "lib", "start");
