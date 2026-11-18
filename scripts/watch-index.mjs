// Firehorse dev watcher (npm run dev): reruns gen-index when a component or a docs page changes, so the Index an
// app reads in development (dist/index.json, dist/full/index.json) follows the source. Apps read the CSS and JS
// themselves straight from src/ through the "development" export condition, so nothing else needs rebuilding.
// Runs gen-index --dist once at start (dist/ may be older than the source), then on every change, debounced.
// Pro pages (../firehorse-pro/site/pages) are watched too when Pro is beside Firehorse.
import { existsSync, statSync, watch } from "node:fs";
import { spawn } from "node:child_process";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dirs = [join(root, "src/components"), join(root, "src/patterns"), join(root, "src/admin"), join(root, "site/pages"), join(root, "release.json"), join(root, "schema/composition.json"), join(root, "..", "firehorse-pro/site/pages")].filter(existsSync);

let running = false;
let again = false;
let timer;
const run = (why) => {
  if (running) { again = true; return; }
  running = true;
  const started = Date.now();
  const child = spawn(process.execPath, [join(root, "scripts/gen-index.mjs"), "--dist"], { cwd: root, stdio: ["ignore", "pipe", "pipe"] });
  let err = "";
  child.stdout.on("data", () => {});
  child.stderr.on("data", (d) => { err += d; });
  child.on("close", (code) => {
    running = false;
    const at = new Date().toLocaleTimeString();
    if (code) console.error(`[${at}] gen-index failed (${why}):\n${err.trim()}`);
    else console.log(`[${at}] index rebuilt in ${Date.now() - started} ms (${why})`);
    if (again) { again = false; run("queued change"); }
  });
};

for (const d of dirs) {
  const isDir = statSync(d).isDirectory();
  watch(d, { recursive: isDir }, (_event, file) => {
    if (file && !/\.(css|html|json)$/.test(file)) return;
    clearTimeout(timer);
    timer = setTimeout(() => run(relative(root, isDir ? join(d, file ?? "") : d)), 150);
  });
}
console.log(`firehorse dev: watching ${dirs.map((d) => relative(root, d)).join(", ")}`);
run("start");
