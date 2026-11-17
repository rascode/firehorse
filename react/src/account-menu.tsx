/**
 * Firehorse AccountMenu (PRF-2): the profile picker's menu on the new look. A popover of rows (the sidebar's recipe) under an
 * identity row; a row with details opens its panel inside the same menu. Style from @rascode/firehorse
 * profile-picker.css; the behaviour (slide, keys, focus) from dist/account-menu.js, which this file loads.
 *
 *   <button className="fh-profile" popovertarget="me" style={{ anchorName: "--me" }}>…</button>
 *   <AccountMenu id="me" label="Account" anchor="--me" panels={<>
 *     <AccountPanel name="presence" label="Presence">…</AccountPanel>
 *   </>}>
 *     <AccountIdentity name="Justin Rascoe" email="justin@rascode.dev" initials="JR" facts="Member since 2019 · 214 ideas" badge="Prod" />
 *     <hr />
 *     <AccountRow icon="activity" tone="teal" label="Presence" value="Active" panel="presence" />
 *     <AccountRow icon="user" tone="sky" label="Profile" href="/profile" />
 *     <hr />
 *     <AccountRow icon="log-out" label="Sign out" danger onSelect={signOut} />
 *     <AccountNow now={today} label="Now" period={{ summary: ["C6", "Y1", "Ch4"], facts: [{ label: "House", value: "Ember" }], progress: 0.71, progressLabel: "Period", links: [{ label: "Open the year", href: "/year" }] }} onNavigate={go} />
 *   </AccountMenu>
 *
 * Firehorse knows nothing about who is signed in: the host fills the identity, the rows and the panels.
 */
import * as React from "react";
import "@rascode/firehorse/account-menu";
import { accountNowParts, accountNowValue, initAccountMenu } from "@rascode/firehorse/account-menu";
import type { AccountPanelDetail } from "@rascode/firehorse/account-menu";

export type { AccountPanelDetail };
type Tone = "sky" | "teal" | "lime" | "amber" | "orange" | "accent" | "rose" | "fuchsia" | "violet" | "neutral";
const cx = (...c: Array<string | false | undefined | null>) => c.filter(Boolean).join(" ");

const MenuId = React.createContext("");

export type AccountMenuProps = {
  /** The popover's id, the one the trigger's popovertarget names. */
  id: string;
  /** The menu's name, for assistive tech. */
  label?: string;
  /** The trigger's anchor-name (for example "--me"), so the menu opens under it. */
  anchor?: string;
  /** The main list: the identity, the rows and the rules between them. */
  children: React.ReactNode;
  /** The panels rows open (AccountPanel), in the same menu. */
  panels?: React.ReactNode;
  /** A panel opened or closed; panel is "main" for the list. */
  onPanelChange?: (detail: AccountPanelDetail) => void;
  /** Draw the menu in the page instead of as a popover (specimens, previews). */
  static?: boolean;
  className?: string;
};

/** The menu: a popover whose stage holds the main list and the panels, one shown at a time. */
export function AccountMenu({ id, label = "Account", anchor, children, panels, onPanelChange, static: inPage, className }: AccountMenuProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const change = React.useRef(onPanelChange);
  change.current = onPanelChange;
  const rows: React.ReactNode[] = [];
  const nowPanels: React.ReactNode[] = [];
  React.Children.forEach(children, (child) => {
    rows.push(child);
    if (React.isValidElement<AccountNowProps>(child) && child.type === AccountNow) {
      nowPanels.push(<AccountNowPanel key={`fh-now-${String(child.key ?? "row")}`} {...child.props} />);
    }
  });

  React.useEffect(() => {
    const menu = ref.current;
    if (!menu) return;
    initAccountMenu(menu);
    const on = (event: Event) => change.current?.((event as CustomEvent<AccountPanelDetail>).detail);
    menu.addEventListener("fh:account-panel", on);
    return () => menu.removeEventListener("fh:account-panel", on);
  }, []);

  return (
    <MenuId.Provider value={id}>
      <div ref={ref} id={id} popover={inPage ? undefined : "auto"} role="menu" aria-label={label}
        className={cx("fh-account-menu", inPage && "fh-account-menu--static", className)}
        style={anchor ? ({ positionAnchor: anchor } as React.CSSProperties) : undefined}>
        <div className="fh-account-menu__stage">
          <div className="fh-account-menu__panel" data-fh-panel="main" data-state="active">{rows}</div>
          {nowPanels}
          {panels}
        </div>
      </div>
    </MenuId.Provider>
  );
}

export type AccountIdentityProps = {
  name: string;
  email?: string;
  /** One muted line, for example "Member since 2019 · 214 ideas · 51 remarks". */
  facts?: string;
  /** An image URL for the avatar; without it the initials show. */
  image?: string;
  initials?: string;
  tone?: Tone;
  /** The environment badge at the end. */
  badge?: string;
  badgeTone?: Tone;
};

/** The identity row: a rounded-square avatar, the name in bold, the email, a line of facts, the environment. */
export function AccountIdentity({ name, email, facts, image, initials, tone = "sky", badge, badgeTone }: AccountIdentityProps) {
  return (
    <div className="fh-account-identity">
      <span className="fh-avatar" data-tone={tone}>{image ? <img src={image} alt="" /> : (initials ?? name.trim().charAt(0).toUpperCase())}</span>
      <span className="fh-account-identity__who">
        <b>{name}</b>
        {email ? <small>{email}</small> : null}
        {facts ? <small className="fh-account-identity__facts">{facts}</small> : null}
      </span>
      {badge ? <span className="fh-badge" data-tone={badgeTone ?? tone}>{badge}</span> : null}
    </div>
  );
}

export type AccountRowProps = {
  label: string;
  /** A Firehorse icon name for the soft cube; without it the row has no cube. */
  icon?: string;
  tone?: Tone;
  /** The muted mono value at the end. */
  value?: string;
  /** The name of the panel this row opens (an AccountPanel's `name`). The row shows a chevron. */
  panel?: string;
  /** A link row. */
  href?: string;
  /** Picked (a click or Enter) on a row that opens no panel. */
  onSelect?: () => void;
  /** The danger tone, for Sign out. */
  danger?: boolean;
  /** An inline control in place of the value (Theme): the row is then not a button. */
  control?: React.ReactNode;
  className?: string;
};

/** A row: the sidebar row (soft cube, label, value, chevron when it has a panel). */
export function AccountRow({ label, icon, tone, value, panel, href, onSelect, danger, control, className }: AccountRowProps) {
  const menu = React.useContext(MenuId);
  const cls = cx("fh-account-row", control && "fh-account-row--inline", danger && "fh-account-row--danger", className);
  const body = (
    <>
      {icon ? <span className="fh-cube fh-cube--icon" aria-hidden="true"><i className={`fh-icon fh-icon--${icon}`} /></span> : null}
      <span className="fh-account-row__label">{label}</span>
      {control ?? (value ? <span className="fh-account-row__value">{value}</span> : null)}
      {panel ? <i className="fh-icon fh-icon--chevron-right fh-account-row__go" aria-hidden="true" /> : null}
    </>
  );
  if (control) return <div className={cls} role="group" aria-label={label} data-tone={tone}>{body}</div>;
  if (href && !panel) return <a className={cls} href={href} role="menuitem" data-tone={tone}>{body}</a>;
  return (
    <button type="button" className={cls} role="menuitem" data-tone={tone}
      aria-haspopup={panel ? "true" : undefined}
      aria-controls={panel ? `${menu}-${panel}` : undefined} aria-expanded={panel ? false : undefined}
      onClick={panel ? undefined : onSelect}>
      {body}
    </button>
  );
}

export type AccountPanelProps = {
  /** The panel's name: the `panel` of the row that opens it. */
  name: string;
  /** The row's label, shown on the back row. */
  label: string;
  children: React.ReactNode;
};

/** A panel: the back row (‹ and the row's label), a rule, then its content. */
export function AccountPanel({ name, label, children }: AccountPanelProps) {
  const menu = React.useContext(MenuId);
  return (
    <div className="fh-account-menu__panel" id={`${menu}-${name}`} data-fh-panel={name} role="group" aria-label={label}>
      <button type="button" className="fh-account-row fh-account-row--back" role="menuitem" data-fh-back>
        <i className="fh-icon fh-icon--chevron-left" aria-hidden="true" />
        <span className="fh-account-row__label">{label}</span>
      </button>
      <hr />
      {children}
    </div>
  );
}

export type AccountNowFact = { label: string; value: string };
export type AccountNowLink = { label: string; href: string };

export type AccountNowPeriod = {
  /** Short parts after the date on the row, joined with " · ". */
  summary?: string[];
  facts?: AccountNowFact[];
  /** 0 to 1. */
  progress?: number;
  /** The progress bar's name. */
  progressLabel?: string;
  links?: AccountNowLink[];
};

export type AccountNowProps = {
  /** The moment the row shows. Null draws the row with no value, so server and client agree. */
  now: Date | null;
  period?: AccountNowPeriod;
  /** The row's label. Default "Now". */
  label?: string;
  /** A link in the panel foot was chosen. The link still follows its href. */
  onNavigate?: (href: string) => void;
};

function nowPercent(progress: number) {
  return `${Math.round(Math.min(1, Math.max(0, progress)) * 100)}%`;
}

function AccountNowRow({ now, period, label = "Now" }: AccountNowProps) {
  const value = now ? accountNowValue(now, period?.summary) : "";
  return <AccountRow icon="calendar" tone="amber" label={label} value={value || undefined} panel="now" />;
}

function AccountNowPanel({ now, period, label = "Now", onNavigate }: AccountNowProps) {
  const parts = now ? accountNowParts(now) : null;
  const facts: AccountNowFact[] = [
    ...(parts ? [
      { label: "Now", value: parts.label },
      { label: "Day of the year", value: String(parts.day) },
      { label: `Days left in ${parts.year}`, value: String(parts.left) },
    ] : []),
    ...(period?.facts ?? []),
  ];
  const progress = period?.progress;
  const bar = typeof progress === "number" && Number.isFinite(progress) ? Math.min(1, Math.max(0, progress)) : null;
  const barLabel = period?.progressLabel || "Progress";
  return (
    <AccountPanel name="now" label={label}>
      {facts.length ? (
        <dl className="fh-kv fh-kv--single">
          {facts.map((fact, index) => (
            <div key={`${fact.label}-${index}`}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
          ))}
        </dl>
      ) : null}
      {bar !== null ? (
        <div className="fh-progress-field">
          <span>{barLabel}</span>
          <output>{nowPercent(bar)}</output>
          <progress className="fh-progress" value={bar} max={1} aria-label={barLabel}>{nowPercent(bar)}</progress>
        </div>
      ) : null}
      {period?.links?.length ? (
        <div className="fh-menu__foot">
          {period.links.map((link) => (
            <a key={`${link.href}-${link.label}`} className="fh-link" href={link.href} onClick={() => onNavigate?.(link.href)}>{link.label}</a>
          ))}
        </div>
      ) : null}
    </AccountPanel>
  );
}

/** The Now row. AccountMenu lifts its panel out of the main list. */
export function AccountNow(props: AccountNowProps) {
  return <AccountNowRow {...props} />;
}
