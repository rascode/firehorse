// Starts firehorse-mcp over stdio and calls every phase-1 tool.
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const expect = (ok, msg) => { if (!ok) errors.push(msg); };
const parse = (result) => {
  const t = result?.content?.find((c) => c.type === "text")?.text;
  expect(!!t, "tool returned text");
  try { return JSON.parse(t); } catch { return t; }
};

const transport = new StdioClientTransport({
  command: process.execPath,
  args: [join(root, "mcp/server.mjs")],
  cwd: root,
  stderr: "pipe",
});
const client = new Client({ name: "firehorse-mcp-test", version: "0.0.0" });
await client.connect(transport);

const tools = await client.listTools();
const names = new Set(tools.tools.map((t) => t.name));
for (const n of [
  "list_families", "get_component", "search_components", "get_tokens",
  "get_theme", "list_themes", "get_rules", "compose_page",
]) expect(names.has(n), `missing tool ${n}`);

const families = parse(await client.callTool({ name: "list_families", arguments: {} }));
expect(Array.isArray(families) && families.length > 50, `list_families got ${families?.length}`);
// dist/index.json is the public Index (release.json): only public families, so the checks use live ones.
expect(families.some((f) => f.id === "BTN"), "list_families includes BTN");
expect(!families.some((f) => f.id === "CUB"), "list_families leaves out CUB (held in release.json)");

const button = parse(await client.callTool({ name: "get_component", arguments: { id: "BTN-01" } }));
expect(button.id === "BTN-1.1", `BTN-01 resolves to BTN-1.1 (got ${button.id})`);
expect(button.retired === true, "BTN-01 marked retired");
expect(/fh-button/.test(button.markup || ""), "BTN-1.1 markup has a button");

const search = parse(await client.callTool({ name: "search_components", arguments: { query: "outline" } }));
expect(Array.isArray(search) && search.some((h) => h.id === "BTN-2.1" || (h.classes || []).includes("fh-button--outline")), "search finds the outline button");

const tokens = parse(await client.callTool({ name: "get_tokens", arguments: { prefix: "--fh-color-text" } }));
expect(Array.isArray(tokens) && tokens.length > 0, "get_tokens returns colour text tokens");

const themes = parse(await client.callTool({ name: "list_themes", arguments: {} }));
expect(Array.isArray(themes) && themes.some((t) => t.name === "lipizzaner"), "list_themes includes lipizzaner");

const theme = parse(await client.callTool({ name: "get_theme", arguments: { name: "lipizzaner" } }));
expect(theme.name === "lipizzaner", "get_theme lipizzaner");

const rules = parse(await client.callTool({ name: "get_rules", arguments: {} }));
expect(typeof rules === "string" && /agent contract/i.test(rules), "get_rules returns system.md");

const page = parse(await client.callTool({ name: "compose_page", arguments: { ids: ["CHP-1.1", "BTN-1.1"] } }));
expect(typeof page === "string" && page.includes("firehorse.css") && page.includes('name="design-system"') && page.includes("fh-chip") && page.includes("fh-button"), "compose_page stacks snippets");

await client.close();
await transport.close();

if (errors.length) {
  console.error("✗ mcp:\n  " + errors.join("\n  "));
  process.exit(1);
}
console.log(`✓ mcp: ${names.size} tools, BTN-01 → BTN-1.1, public Index only, all calls returned data`);
