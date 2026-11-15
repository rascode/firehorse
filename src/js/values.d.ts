// Firehorse data display contract (values.js). Rules: schema/display-rules.json. Doc: agent/components/values.md.
export type Shape = "text" | "prose" | "number" | "money" | "ratio" | "temporal" | "option" | "options" | "entity" | "file" | "link" | "flag" | "code";
export type Context = "cell" | "record" | "card" | "metric" | "form";
export type Mode = "read" | "edit";
export type Tone = "neutral" | "accent" | "lime" | "sky" | "amber" | "rose" | "teal" | "violet" | "fuchsia" | "orange";

export interface Option { value: string | number | boolean; label?: string; tone?: Tone; icon?: string; description?: string; live?: boolean }
export interface OptionSet { key: string | null; label?: string; kind: "status" | "choice"; ordinal?: boolean; options: (Option & { label: string; tone: Tone })[] }
export interface Entity {
  id: string | number; kind?: "person" | "org" | "record"; label: string; description?: string; image?: string; initials?: string;
  tone?: Tone; key?: string; href?: string; sidecar?: string; stat?: { value: string | number; label?: string; tone?: Tone };
}

/** A field as an endpoint sends it next to its rows. */
export interface ValueField {
  key?: string;
  label?: string;
  /** A devops.semantic_types key (schema/semantic-types.json). */
  semanticType?: string;
  /** One of the datatable's 22 type names (kept as aliases). */
  type?: string;
  shape?: Shape;
  kind?: string;
  /** Entity kind, same as kind for the entity shape. */
  entity?: "person" | "org" | "record";
  multiple?: boolean;
  unit?: string;
  /** ISO 4217 or crypto code; money always knows its currency (rule 4). */
  currency?: string;
  /** A ratio's target: the metric context draws a meter. */
  target?: number;
  readOnly?: boolean;
  optionSet?: string | { key?: string; label?: string; kind?: "status" | "choice"; ordinal?: boolean; options: (Option | string)[] };
  options?: (Option | string)[];
  /** The field may name a variant per context; a surface never can (rule 5). */
  display?: Partial<Record<Context, string | null>>;
}

export interface ResolvedValue {
  shape: Shape; kind: string | null; semanticType: string | null; row: string; context: Context; mode: Mode;
  /** The variant to draw, or null when the grid leaves the field out of this context. */
  variant: string | null; label: string | null; group: string; parts: string[];
  editable: boolean; control: string | null; readOnly: boolean;
  align: "start" | "end"; figures: "tabular" | null; mono: boolean; max: number | null; multiple: boolean;
  unit: string | null; currency: string | null; optionSet: OptionSet | null;
  empty: { text: string; tone: string }; source: "grid" | "field"; warnings: string[];
}

export interface DescribedField {
  shape: Shape; kind: string | null; unit: string | null; semanticType: string | null; alias: string | null;
  multiple: boolean; readOnly: boolean; display: Partial<Record<Context, string | null>>; warnings: string[];
}

export const SHAPES: readonly Shape[];
export const CONTEXTS: readonly Context[];
export const EMPTY: { readonly text: string; readonly tone: string };
export const rules: Record<string, any>;
export const semanticTypes: Record<string, { label: string; shape: Shape; kind: string | null; unit: string | null; options: string[] | null }>;
export function resolveValue(field: ValueField, context?: Context, mode?: Mode, opts?: { optionSets?: Record<string, Omit<OptionSet, "key"> | { options: (Option | string)[] }> }): ResolvedValue;
export function describeField(field: ValueField): DescribedField;
export function optionSetFor(field: ValueField, opts?: { optionSets?: Record<string, any> }): OptionSet | null;
export function toneOf(set: OptionSet | null | undefined, value: unknown): Tone;
export function defaultTone(value: unknown): Tone;
export function isReadOnly(semanticType?: string | null): boolean;
export function isEmpty(value: unknown): boolean;
export function gridRow(described: DescribedField, count?: number | null): Record<string, any>;
