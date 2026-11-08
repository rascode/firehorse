/**
 * Scratch type-check for @rascode/firehorse/datatable.
 * Run: npx tsc --noEmit -p test/datatable-types.tsconfig.json
 */
import FirehorseTable, { type DatatableConfig } from "@rascode/firehorse/datatable";

const el = document.createElement("div");
const config: DatatableConfig = {
  fields: [{ key: "name", type: "text" }, { key: "amount", type: "currency" }],
  rows: [{ id: "1", name: "Ada", amount: 100 }],
  pageSize: 25,
  view: "grid",
};

const table = new FirehorseTable(el, config);
table.render();
table.setRows([{ name: "Grace" }]);
FirehorseTable.defineType("sku", {
  icon: "barcode",
  kind: "text",
  render: (v) => String(v ?? ""),
});

// @ts-expect-error — wrong option name must fail type-check
new FirehorseTable(el, { fields: [], rows: [], pageSiz: 10 });

void table.state.selected;
void table.rows;
