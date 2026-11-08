/**
 * Firehorse datatable — TypeScript types for `dist/datatable.js`.
 * Keep in sync with `src/js/datatable.js`.
 */

export type FieldKind = "text" | "number" | "option" | "options" | "date" | "bool";

export type BuiltInFieldType =
  | "text"
  | "long"
  | "number"
  | "currency"
  | "percent"
  | "progress"
  | "select"
  | "status"
  | "multi"
  | "tags"
  | "date"
  | "check"
  | "rating"
  | "user"
  | "users"
  | "url"
  | "email"
  | "phone"
  | "link"
  | "attachment"
  | "formula"
  | "sparkline"
  | (string & {});

export interface FieldOption {
  value?: string;
  label?: string;
  tone?: string;
  live?: boolean;
  [key: string]: unknown;
}

export interface DatatableField {
  key: string;
  label?: string;
  type?: BuiltInFieldType;
  tone?: string;
  currency?: string;
  options?: Array<string | FieldOption>;
  overdue?: boolean;
  width?: number | string;
  [key: string]: unknown;
}

export interface DatatableFilter {
  key: string;
  op: string;
  value?: unknown;
}

export interface DatatableSort {
  key: string;
  dir?: "asc" | "desc";
}

export type DatatableView = "grid" | "gallery" | "board";
export type DatatableDensity = "comfortable" | "compact" | "spacious" | (string & {});

export interface DatatableConfig {
  fields: DatatableField[];
  rows: Record<string, unknown>[];
  primary?: string;
  locale?: string;
  currency?: string;
  filters?: DatatableFilter[];
  sort?: DatatableSort[];
  groupBy?: string | null;
  hidden?: string[];
  view?: DatatableView;
  density?: DatatableDensity;
  pageSize?: number;
  boardField?: string;
  /** Toolbar chrome (demos / Helm). */
  title?: string;
  icon?: string;
  tone?: string;
  action?: string;
  footnote?: string;
  bulk?: Array<[string, string, string?] | Record<string, unknown>>;
}

export interface FieldTypeDef {
  icon?: string;
  kind?: FieldKind;
  cell?: string;
  agg?: string;
  render?: (value: unknown, field: DatatableField, table: FirehorseTable, row?: Record<string, unknown>) => string;
  text?: (value: unknown, field?: DatatableField, table?: FirehorseTable) => string;
  values?: (value: unknown) => string[];
  value?: (value: unknown) => number;
  attrs?: (value: unknown, field: DatatableField) => string;
  [key: string]: unknown;
}

export interface DatatableState {
  query: string;
  filters: DatatableFilter[];
  sort: DatatableSort[];
  group: string | null;
  hidden: Set<string>;
  view: DatatableView | string;
  density: DatatableDensity;
  page: number;
  selected: Set<string>;
  collapsed: Set<string>;
  widths: Record<string, number>;
  [key: string]: unknown;
}

/** Custom events bubbled from the table element. */
export interface DatatableRowOpenDetail {
  row: Record<string, unknown>;
  fields: DatatableField[];
  table: FirehorseTable;
}

export interface DatatableChangeDetail {
  row: Record<string, unknown>;
  key: string;
  value: unknown;
}

export interface DatatableBulkDetail {
  action: string;
  rows: Record<string, unknown>[];
}

export declare class FirehorseTable {
  static types: Record<string, FieldTypeDef>;
  static defineType(name: string, def: FieldTypeDef): void;

  el: HTMLElement;
  id: string;
  cfg: DatatableConfig;
  fields: DatatableField[];
  primary: string;
  rows: Record<string, unknown>[];
  locale: string | undefined;
  currency: string;
  nf: Intl.NumberFormat;
  state: DatatableState;
  pageSize: number;
  boardField: string | undefined;

  constructor(el: HTMLElement, config?: DatatableConfig);

  field(key: string): DatatableField | undefined;
  type(f: DatatableField): FieldTypeDef;
  text(f: DatatableField, v: unknown): string;
  values(f: DatatableField, v: unknown): string[];
  num(f: DatatableField, v: unknown): number;
  readonly visible: DatatableField[];
  readonly result: Record<string, unknown>[];
  readonly pageRows: Record<string, unknown>[];

  match(row: Record<string, unknown>, filter: DatatableFilter): boolean;
  compare(f: DatatableField, a: unknown, b: unknown): number;
  aggregate(f: DatatableField, rows: Record<string, unknown>[]): string;

  mount(): void;
  bind(): void;
  emit(name: string, detail?: unknown): void;
  openRow(id: string): void;
  toggleSort(key: string, add?: boolean): void;
  bulk(action: string): void;
  csv(rows?: Record<string, unknown>[], sep?: string): string;
  download(text: string, name: string): void;

  render(): void;
  renderTools(): void;
  renderFilters(): void;
  renderBody(): void;
  renderFooter(): void;
  renderBulk(): void;
  renderPanel(name: string): void;
  cell(f: DatatableField, row: Record<string, unknown>): string;
  grid(rows: Record<string, unknown>[]): string;
  gallery(rows: Record<string, unknown>[]): string;
  board(rows: Record<string, unknown>[]): string;
  cardFields(r: Record<string, unknown>, n?: number, skip?: string | null): DatatableField[];

  setRows(rows: Record<string, unknown>[]): void;
  update(id: string, patch: Record<string, unknown>): void;
}

export declare const types: Record<string, FieldTypeDef>;
export default FirehorseTable;
