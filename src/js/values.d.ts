// Firehorse data display contract (values.js). Rules: schema/display-rules.json. Doc: agent/components/values.md.
export type Shape = "text" | "prose" | "number" | "money" | "ratio" | "temporal" | "option" | "options" | "entity" | "file" | "link" | "flag" | "code" | "series";
/** Where a value sits. text is never drawn: it names the plain string for CSV export, aria-label, copy and search. */
export type Context = "cell" | "record" | "card" | "metric" | "form" | "text";
export type DrawnContext = Exclude<Context, "text">;
/** The five state groups of a status option, each with its tone. */
export type State = "done" | "moving" | "waiting" | "failed" | "ended";
export type Mode = "read" | "edit";
export type Tone = "neutral" | "accent" | "lime" | "sky" | "amber" | "rose" | "teal" | "violet" | "fuchsia" | "orange";

export interface Option { value: string | number | boolean; label?: string; tone?: Tone; state?: State; icon?: string; description?: string; live?: boolean }
/** An option set as published in schema/option-sets.json (devops.option_sets), without its key. */
export interface PublishedOptionSet { label?: string; kind?: "status" | "choice" | "code"; ordinal?: boolean; generator?: string; description?: string; options: (Option | string)[] }
export interface OptionSet {
  key: string | null; label?: string; kind: "status" | "choice" | "code"; ordinal: boolean; generator?: string;
  /** Every option with its label and tone; an ordinal choice set's options carry their ramp step (1 to 4). */
  options: (Option & { label: string; tone: Tone; ramp?: number })[];
}
/** What an entity avatar stands for (DR2): a person is a circle; an org, an agent and a record are rounded squares. */
export type AvatarKind = "person" | "org" | "agent" | "record";
export interface Avatar { kind: AvatarKind | null; shape: "circle" | "rounded" | null; size: "inline" | "identity"; token: "--fh-avatar-inline" | "--fh-avatar-identity"; max: number }
export interface Entity {
  id: string | number; kind?: AvatarKind; label: string; description?: string; image?: string; initials?: string;
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
  entity?: AvatarKind;
  multiple?: boolean;
  unit?: string;
  /** ISO 4217 or crypto code; money always knows its currency (rule 4). */
  currency?: string;
  /** The semantic type of the sibling field that names the currency, when the value does not carry one. */
  currencyFrom?: string;
  /** computed_formula: the shape its formula returns (per column); text when unset. */
  resultShape?: Shape;
  resultKind?: string;
  /** A ratio's target: the metric context draws a meter. */
  target?: number;
  readOnly?: boolean;
  optionSet?: string | ({ key?: string } & PublishedOptionSet);
  options?: (Option | string)[];
  /** The field may name a variant per context; a surface never can (rule 5). */
  display?: Partial<Record<DrawnContext, string | null>>;
}

export interface ResolvedValue {
  shape: Shape; kind: string | null; semanticType: string | null; row: string; context: Context; mode: Mode;
  /** The variant to draw, or null when the grid leaves the field out of this context. */
  /** In the text context: the text format (rules.textFormats), or null when the value has no text form (a secret). */
  variant: string | null; /** The variant's Firehorse Index ID (VAL-1.1), the part to draw; null in the text context. */ id: string | null; label: string | null; group: string; parts: string[];
  editable: boolean; control: string | null; readOnly: boolean;
  align: "start" | "end"; figures: "tabular" | null; /** Thousands separators: false for an identifier-like number (chain_id). */ grouping: boolean | null;
  mono: boolean; max: number | null; /** An entity: data-kind, size step and stack max (DR2); null for other shapes. */ avatar: Avatar | null; multiple: boolean;
  unit: string | null; currency: string | null; currencyFrom: string | null; optionSet: OptionSet | null;
  /** The options draw with data-ramp (an ordinal choice set: priority). */ ramp: boolean;
  /** "order": sort by the option set's order, never the alphabet. */ sort: "order" | null;
  /** A series variant: whether the last value shows beside the sparkline. */ last: boolean | null;
  /** Left out of these (computed_button: sort, filter, export). */ excluded: ("sort" | "filter" | "export")[];
  /** The field's text format, in any context. */ text: string | null; formula: boolean;
  empty: { text: string; tone: string }; source: "grid" | "field"; warnings: string[];
}

export interface DescribedField {
  shape: Shape; kind: string | null; unit: string | null; semanticType: string | null; alias: string | null;
  multiple: boolean; readOnly: boolean; optionSet: string | null; currencyFrom: string | null; formula: boolean;
  display: Partial<Record<DrawnContext, string | null>>; warnings: string[];
}

export const SHAPES: readonly Shape[];
export const CONTEXTS: readonly Context[];
export const DRAWN_CONTEXTS: readonly DrawnContext[];
export const STATES: Readonly<Record<State, Tone>>;
export const optionSets: Record<string, PublishedOptionSet>;
export const EMPTY: { readonly text: string; readonly tone: string };
export const rules: Record<string, any>;
export const semanticTypes: Record<string, { label: string; shape: Shape; kind: string | null; unit: string | null; optionSet: string | null; currencyFrom: string | null; options: string[] | null }>;
export function resolveValue(field: ValueField, context?: Context, mode?: Mode, opts?: { optionSets?: Record<string, PublishedOptionSet> }): ResolvedValue;
/** A value's plain string (the text context): "" when empty, null when it has none (a secret). */
export function textOf(field: ValueField, value: unknown, opts?: { optionSets?: Record<string, PublishedOptionSet>; currency?: string }): string | null;
export function isoDuration(seconds: number): string;
export function rampStep(index: number, count: number, steps?: number): number;
export function rampOf(set: OptionSet | null | undefined, value: unknown): number | null;
export function describeField(field: ValueField): DescribedField;
export function optionSetFor(field: ValueField, opts?: { optionSets?: Record<string, any> }): OptionSet | null;
export function toneOf(set: OptionSet | null | undefined, value: unknown): Tone;
export function defaultTone(value: unknown): Tone;
export function isReadOnly(semanticType?: string | null): boolean;
export function isEmpty(value: unknown): boolean;
export const AVATAR_KINDS: readonly AvatarKind[];
export function avatarOf(kind?: string | null, variant?: string | null): Avatar;
/** At most two letters: "Maya Chen" gives "MC". */
export function initialsOf(name: string): string;
/** One avatar with data-kind from the entity kind. */
export function avatarMarkup(entity: Partial<Entity> & { name?: string }, opts?: { kind?: string; alt?: boolean }): string;
/** At most three faces, then +N at the same size and shape. */
export function stackMarkup(list: (Partial<Entity> & { name?: string })[], opts?: { kind?: string; max?: number }): string;
export function gridRow(described: DescribedField, count?: number | null, set?: OptionSet | null): Record<string, any>;
