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
expect(families.some((f) => f.id === "CUB"), "list_families includes CUB");

const cube = parse(await client.callTool({ name: "get_component", arguments: { id: "CUB-04" } }));
expect(cube.id === "CUB-1.4", `CUB-04 resolves to CUB-1.4 (got ${cube.id})`);
expect(cube.retired === true, "CUB-04 marked retired");
expect(/fh-cube--outline/.test(cube.markup || ""), "CUB-1.4 markup has outline cube");

const search = parse(await client.callTool({ name: "search_components", arguments: { query: "outline" } }));
expect(Array.isArray(search) && search.some((h) => h.id === "CUB-1.4" || (h.classes || []).includes("fh-cube--outline")), "search finds outline cube");

const tokens = parse(await client.callTool({ name: "get_tokens", arguments: { prefix: "--fh-color-text" } }));
expect(Array.isArray(tokens) && tokens.length > 0, "get_tokens returns colour text tokens");

const themes = parse(await client.callTool({ name: "list_themes", arguments: {} }));
expect(Array.isArray(themes) && themes.some((t) => t.name === "lipizzaner"), "list_themes includes lipizzaner");

const theme = parse(await client.callTool({ name: "get_theme", arguments: { name: "lipizzaner" } }));
expect(theme.name === "lipizzaner", "get_theme lipizzaner");

const rules = parse(await client.callTool({ name: "get_rules", arguments: {} }));
expect(typeof rules === "string" && /agent contract/i.test(rules), "get_rules returns system.md");

const page = parse(await client.callTool({ name: "compose_page", arguments: { ids: ["CUB-1.4", "BTN-1.1"] } }));
expect(typeof page === "string" && page.includes("firehorse.css") && page.includes('name="design-system"') && page.includes("fh-cube"), "compose_page stacks snippets");

await client.close();
await transport.close();

if (errors.length) {
  console.error("✗ mcp:\n  " + errors.join("\n  "));
  process.exit(1);
}
console.log(`✓ mcp: ${names.size} tools, CUB-04 → CUB-1.4, all calls returned data`);
