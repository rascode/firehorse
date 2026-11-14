// Builds the fixture three ways with the Tailwind v4 CLI and reports what wins where.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const { chromium } = await import(join(here, "../../node_modules/playwright/index.mjs"));
const builds = ["naive-after", "naive-before", "bridged"];
mkdirSync(join(here, "out"), { recursive: true });
const page = readFileSync(join(here, "page.html"), "utf8");
for (const b of builds) {
  execSync(`npx tailwindcss -i ${b}.css -o out/${b}.css`, { cwd: here, stdio: "pipe" });
  for (const s of ["light", "dark"]) writeFileSync(join(here, "out", `${b}-${s}.html`), page.replaceAll("__NAME__", b).replace("__SCHEME__", s).replace('href="out/', 'href="'));
}
const shots = process.argv[2];
const browser = await chromium.launch({ channel: "chrome" });
const rows = [];
for (const b of builds) for (const s of ["light", "dark"]) {
  const p = await browser.newPage({ viewport: { width: 1100, height: 1400 } });
  await p.goto("file://" + join(here, "out", `${b}-${s}.html`));
  await p.waitForTimeout(300);
  const r = await p.evaluate(() => {
    const cs = (sel) => getComputedStyle(document.querySelector(sel));
    const probe = (v) => { const d = document.createElement("div"); d.style.color = v; document.body.append(d); const c = getComputedStyle(d).color; d.remove(); return c; };
    const accent = probe("var(--fh-color-accent)"), raised = probe("var(--fh-color-surface-raised)"), canvas = probe("var(--fh-color-canvas)");
    return {
      "fh-button padding": cs("#fh-btn").paddingInline,
      "fh-button bg": cs("#fh-btn").backgroundColor,
      "fh-input border": cs("#fh-in").borderTopWidth + " " + cs("#fh-in").borderTopStyle,
      "fh-tile padding": cs("#fh-tile").padding,
      "utility mt-6 on fh-button": cs("#fh-util").marginTop,
      "utility rounded-none on fh-button": cs("#fh-util").borderTopLeftRadius,
      "fh token utility bg = surface-raised": cs("#tw-theme").backgroundColor === raised,
      "fh token utility font": cs("#tw-theme").fontFamily.split(",")[0],
      "shadcn button bg = fh accent": cs("#cn-btn").backgroundColor === accent,
      "shadcn button bg": cs("#cn-btn").backgroundColor,
      "shadcn button font/tracking/case": `${cs("#cn-btn").fontFamily.split(",")[0]} / ${cs("#cn-btn").letterSpacing} / ${cs("#cn-btn").textTransform}`,
      "shadcn button height": cs("#cn-btn").height,
      "shadcn input height/bg": `${cs("#cn-in").height} / ${cs("#cn-in").backgroundColor}`,
      "body bg = fh canvas": cs("body").backgroundColor === canvas,
      "body bg": cs("body").backgroundColor,
      "plain h1 size/weight": `${cs("h1").fontSize} / ${cs("h1").fontWeight}`,
      "plain ul list-style": cs("ul").listStyleType,
      "plain a colour": cs("main a").color,
      "scheme": cs("html").colorScheme,
    };
  });
  rows.push({ build: `${b} (${s})`, ...r });
  if (shots) await p.screenshot({ path: join(shots, `compat-${b}-${s}.jpg`), type: "jpeg", quality: 70, fullPage: true });
  await p.close();
}
await browser.close();
const keys = Object.keys(rows[0]).filter((k) => k !== "build");
for (const k of keys) { console.log(`\n${k}`); for (const r of rows) console.log(`  ${r.build.padEnd(22)} ${r[k]}`); }
