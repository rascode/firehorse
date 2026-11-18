/**
 * Firehorse CrumbTrail (MST-5): the App bar's lead as a trail of two crumbs at most: an area crumb,
 * then one record crumb. A crumb's drop-down chevron shows only on hover, focus or while open. Style from @rascode/firehorse crumb-trail.css; the
 * behaviour (hover intent, keys, filter) from dist/crumb-menu.js, which this file loads.
 *
 *   inside <header className="fh-masthead fh-masthead--app fh-masthead--app-crumbs"> (MST-4.4), tools after it:
 *   <CrumbTrail onLoadSiblings={(source, parent, q) => api.siblings(source, parent, q)}>
 *     <AreaCrumb label="Organizations" cube={{ icon: "building-2", tone: "sky" }} groups={areaGroups} />
 *     <RecordCrumb name="Rascode" noun="organization" tone="amber" logo={logoUrl} source="organizations" parent={null} />
 *   </CrumbTrail>
 *
 * Firehorse knows nothing about organizations or goals: the host fills the marks, labels and
 * rows. A menu has fixed rows (`rows`, `groups`) or fetches them (`source`): when it opens and when the filter
 * changes the trail calls onLoadSiblings(source, parent, q) and shows the loading state until it resolves.
 */
import * as React from "react";
import "@rascode/firehorse/crumb-menu";
import type { CrumbRow } from "@rascode/firehorse/crumb-menu";

export type { CrumbRow };
type Tone = "sky" | "teal" | "lime" | "amber" | "orange" | "accent" | "rose" | "fuchsia" | "violet" | "neutral";
const cx = (...c: Array<string | false | undefined | null>) => c.filter(Boolean).join(" ");

export type CrumbGroup = { heading: string; rows: CrumbRow[] };

export type CrumbTrailProps = {
  /** The landmark's name. */
  label?: string;
  /** Rows for a menu that names a `source`: resolves the siblings matching q (the filter text). */
  onLoadSiblings?: (source: string, parent: string | null, q: string) => Promise<CrumbRow[]>;
  /** A row was chosen. Given, it replaces following the row's link (route in the page). */
  onSelect?: (row: { href: string | null; name: string }) => void;
  children: React.ReactNode;
  className?: string;
};

/** The trail: a `nav` named Breadcrumb holding the crumbs. The last crumb is the current page. */
export function CrumbTrail({ label = "Breadcrumb", onLoadSiblings, onSelect, children, className }: CrumbTrailProps) {
  const ref = React.useRef<HTMLElement>(null);
  const load = React.useRef(onLoadSiblings);
  const pick = React.useRef(onSelect);
  load.current = onLoadSiblings;
  pick.current = onSelect;

  React.useEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    const onLoad = (event: Event) => {
      const { source, parent, q, respond, fail } = (event as CustomEvent<import("@rascode/firehorse/crumb-menu").CrumbLoadDetail>).detail;
      if (!load.current) { fail(); return; }
      load.current(source, parent, q).then(respond, fail);
    };
    const onPick = (event: Event) => {
      if (!pick.current) return;
      const { row, href } = (event as CustomEvent<import("@rascode/firehorse/crumb-menu").CrumbSelectDetail>).detail;
      event.preventDefault();
      pick.current({ href, name: row.querySelector(".fh-crumb__name")?.textContent ?? "" });
    };
    nav.addEventListener("fh:crumb-load", onLoad);
    nav.addEventListener("fh:crumb-select", onPick);
    return () => { nav.removeEventListener("fh:crumb-load", onLoad); nav.removeEventListener("fh:crumb-select", onPick); };
  }, []);

  const items = React.Children.toArray(children).filter(React.isValidElement);
  return (
    <nav ref={ref} className={cx("fh-crumbs", className)} aria-label={label}>
      <ol className="fh-crumbs__list">
        {items.map((child, i) => React.cloneElement(child as React.ReactElement<{ current?: boolean; first?: boolean }>, { current: i === items.length - 1, first: i === 0 }))}
      </ol>
    </nav>
  );
}

const Sep = () => <i className="fh-icon fh-icon--chevron-right fh-crumb__sep" aria-hidden="true" />;
const Caret = () => <i className="fh-icon fh-icon--chevron-down fh-crumb__caret" aria-hidden="true" />;

type MenuProps = {
  /** The menu's name, for assistive tech. */
  menuLabel: string;
  /** The filter field's name and placeholder. */
  filterLabel?: string;
  rows?: CrumbRow[];
  groups?: CrumbGroup[];
  /** Fetch the rows through CrumbTrail's onLoadSiblings. */
  source?: string;
  emptyText?: string;
  id: string;
};

const isImage = (s: string) => /^(https?:|\/|data:image\/)/.test(s);

/** A record's mark: a solid cube (the area cube's look) holding a logo or an initial. */
function Cube({ tone, logo, text, icon }: { tone?: string; logo?: string | null; text: string; icon?: string }) {
  return (
    <span className="fh-sidebar__cube fh-crumb__mark" data-tone={tone ?? "neutral"} aria-hidden="true">
      {icon ? <i className={`fh-icon fh-icon--${icon}`} /> : logo ? <img src={logo} alt="" /> : <span className="fh-crumb__initial">{text}</span>}
    </span>
  );
}

function Row({ row }: { row: CrumbRow }) {
  const mark = row.mark;
  const text = typeof mark === "string" && mark ? mark : row.name.trim().charAt(0).toUpperCase();
  const body = (
    <>
      <Cube tone={row.tone} icon={row.icon} logo={isImage(text) ? text : null} text={text} />
      <span className="fh-crumb__name">{row.name}</span>
      {row.meta ? <span className="fh-crumb__meta">{row.meta}</span> : null}
    </>
  );
  const common = { className: "fh-crumb-menu__row", role: "menuitemradio", "aria-checked": !!row.current, tabIndex: -1, "data-depth": row.depth || undefined };
  return row.href ? <a {...common} href={row.href}>{body}</a> : <button {...common} type="button">{body}</button>;
}

function Menu({ menuLabel, filterLabel = "Filter", rows, groups, source, emptyText = "Nothing matches.", id }: MenuProps) {
  // A sourced menu's list belongs to the script (it writes the rows); React leaves it empty.
  const fixed = groups ?? (rows ? [{ heading: "", rows }] : []);
  return (
    <div id={id} popover="manual" className="fh-menu fh-menu--rich fh-crumb-menu" role="menu" aria-label={menuLabel} data-fh-source={source}>
      <div className="fh-crumb-menu__search">
        <input type="search" aria-label={filterLabel} placeholder={filterLabel} autoComplete="off" />
      </div>
      <div className="fh-crumb-menu__list" suppressHydrationWarning>
        {source ? null : fixed.map((g, i) => (
          <React.Fragment key={g.heading || i}>
            {g.heading ? <p className="fh-menu__label">{g.heading}</p> : null}
            {g.rows.map((row, j) => <Row key={row.id ?? row.href ?? `${j}-${row.name}`} row={row} />)}
          </React.Fragment>
        ))}
      </div>
      <p className="fh-crumb-menu__status" data-empty hidden>{emptyText}</p>
    </div>
  );
}

type CrumbInjected = { current?: boolean; first?: boolean };

export type AreaCrumbProps = Omit<MenuProps, "menuLabel" | "id"> & {
  label: string;
  /** The area's cube: the same icon and tone as the sidebar row. */
  cube?: { icon: string; tone?: Tone };
  menuLabel?: string;
} & CrumbInjected;

/** MST-5.1: the area's cube, its label and a caret; opens the areas under group headings. */
export function AreaCrumb({ label, cube, menuLabel = "Areas", current, first: _first, ...menu }: AreaCrumbProps) {
  const id = React.useId();
  return (
    <li className="fh-crumb fh-crumb--area" data-fh-crumb>
      <button className="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls={id}
        aria-current={current ? "page" : undefined} aria-label={`${label}, switch area`}>
        {cube ? <span className="fh-sidebar__cube" data-tone={cube.tone} aria-hidden="true"><i className={`fh-icon fh-icon--${cube.icon}`} /></span> : null}
        <span className="fh-crumb__name">{label}</span>
        <Caret />
      </button>
      <Menu {...menu} menuLabel={menuLabel} id={id} />
    </li>
  );
}

export type RecordCrumbProps = Omit<MenuProps, "menuLabel" | "id"> & {
  name: string;
  /** What this level is, for the button's name: "organization" gives "Rascode, switch organization". */
  noun: string;
  /** The cube's tone. */
  tone?: Tone;
  /** A logo image URL for the cube; without it the cube shows the name's initial. */
  logo?: string | null;
  /** Passed to onLoadSiblings: the record this level sits under. */
  parent?: string | null;
  menuLabel?: string;
} & CrumbInjected;

/** MST-5.2: a solid cube (logo or initial) and the name; opens the switcher (MST-5.3). */
export function RecordCrumb({ name, noun, tone, logo, parent, menuLabel, current, first, ...menu }: RecordCrumbProps) {
  const id = React.useId();
  return (
    <li className="fh-crumb fh-crumb--record" data-fh-crumb data-fh-parent={parent ?? undefined}>
      {first ? null : <Sep />}
      <button className="fh-crumb__button" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls={id}
        aria-current={current ? "page" : undefined}
        aria-label={`${name}, switch ${noun}`}>
        <Cube tone={tone} logo={logo} text={name.trim().charAt(0).toUpperCase()} />
        <span className="fh-crumb__name">{name}</span>
        <Caret />
      </button>
      <Menu {...menu} menuLabel={menuLabel ?? `${noun[0]?.toUpperCase() ?? ""}${noun.slice(1)}s`} id={id} />
    </li>
  );
}
