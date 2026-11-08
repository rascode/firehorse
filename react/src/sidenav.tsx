/**
 * Firehorse SideNav — collapsible two-level sidebar (NAV / NAV-2.*).
 * Style from @rascode/firehorse sidenav.css; behavior here (expand, flyout, a11y).
 *
 *   <SideNav aria-label="Main">
 *     <SideNavSection …>
 *       <SideNavItem href="…" asChild><Link/></SideNavItem>
 *     </SideNavSection>
 *   </SideNav>
 */
import * as React from "react";

type Tone = "sky" | "teal" | "lime" | "amber" | "orange" | "accent" | "rose" | "fuchsia" | "violet" | "neutral";
const cx = (...c: Array<string | false | undefined | null>) => c.filter(Boolean).join(" ");

/* —— NavBadge (NAV-2.3) —— */
export type NavBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  count: number;
  /** When true (default if count > 0), uses rose/alert tone. */
  alert?: boolean;
  tone?: Tone;
};
export function NavBadge({ count, alert, tone, className, ...p }: NavBadgeProps) {
  if (!count || count < 1) return null;
  const alertTone = alert ?? count > 0;
  return (
    <span
      data-fh="NAV-2.3"
      data-tone={tone ?? (alertTone ? "rose" : "amber")}
      data-alert={alertTone ? "true" : undefined}
      className={cx("fh-badge", "fh-sidenav__badge", className)}
      {...p}
    >
      {count}
    </span>
  );
}

/* —— SideNav root —— */
export type SideNavProps = React.HTMLAttributes<HTMLElement> & {
  label?: string;
  tone?: Tone;
};
export const SideNav = React.forwardRef<HTMLElement, SideNavProps>(
  ({ label = "Main", tone, className, children, ...p }, ref) => (
    <nav ref={ref} data-fh="NAV" data-tone={tone} className={cx("fh-sidenav", className)} aria-label={label} {...p}>
      {children}
    </nav>
  ),
);
SideNav.displayName = "SideNav";

/* —— SideNavItem —— */
export type SideNavItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
  containsActive?: boolean;
  badge?: React.ReactNode;
  icon?: string;
  /** Hide the text label (rail mode uses title/tooltip). */
  labelClassName?: string;
  asChild?: boolean;
  child?: boolean;
};
export const SideNavItem = React.forwardRef<HTMLAnchorElement, SideNavItemProps>(
  ({ active, containsActive, badge, icon, className, labelClassName, children, asChild, child, ...p }, ref) => {
    const cls = cx(
      child ? "fh-sidenav__child" : "fh-sidenav__row",
      className,
    );
    const body = (
      <>
        <span className={cx("fh-cluster", labelClassName)} style={{ ["--fh-gap" as string]: "var(--fh-space-2)" }}>
          {icon ? <i className={cx("fh-icon", `fh-icon--${icon}`)} aria-hidden="true" /> : null}
          <span className="fh-sidenav__label">{children}</span>
        </span>
        {badge}
      </>
    );
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
        ref,
        className: cx(cls, (children as React.ReactElement<{ className?: string }>).props.className),
        "data-fh": child ? "NAV-2.1" : "NAV",
        "data-active": active ? "true" : undefined,
        "data-contains-active": containsActive ? "true" : undefined,
        "aria-current": active ? "page" : undefined,
      });
    }
    return (
      <a
        ref={ref}
        data-fh={child ? "NAV-2.1" : "NAV"}
        data-active={active ? "true" : undefined}
        data-contains-active={containsActive ? "true" : undefined}
        aria-current={active ? "page" : undefined}
        className={cls}
        {...p}
      >
        {body}
      </a>
    );
  },
);
SideNavItem.displayName = "SideNavItem";

/* —— SideNavSection (collapsible) —— */
export type SideNavSectionProps = {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  active?: boolean;
  containsActive?: boolean;
  badge?: React.ReactNode;
  /** When false, render as a plain link (no chevron). */
  collapsible?: boolean;
  children?: React.ReactNode;
  /** Render the label link (Next Link etc). */
  renderLabel?: (props: {
    href?: string;
    className: string;
    onClick: (e: React.MouseEvent) => void;
    children: React.ReactNode;
  }) => React.ReactNode;
  className?: string;
};

export function SideNavSection({
  id,
  label,
  href,
  icon,
  open,
  onOpenChange,
  active,
  containsActive,
  badge,
  collapsible = true,
  children,
  renderLabel,
  className,
}: SideNavSectionProps) {
  const panelId = `${id}-panel`;

  const labelInner = (
    <>
      <span className="fh-cluster" style={{ ["--fh-gap" as string]: "var(--fh-space-2)" }}>
        {icon ? <i className={cx("fh-icon", `fh-icon--${icon}`)} aria-hidden="true" /> : null}
        <span className="fh-sidenav__label">{label}</span>
      </span>
      {badge}
    </>
  );

  const onLabelClick = (e: React.MouseEvent) => {
    if (collapsible && !open) onOpenChange(true);
    // Allow navigation; if no href, prevent default
    if (!href) e.preventDefault();
  };

  const labelClass = cx("fh-sidenav__row");
  const labelNode = renderLabel
    ? renderLabel({ href, className: labelClass, onClick: onLabelClick, children: labelInner })
    : href
      ? (
        <a
          href={href}
          className={labelClass}
          data-fh="NAV-2"
          data-active={active ? "true" : undefined}
          data-contains-active={containsActive ? "true" : undefined}
          aria-current={active ? "page" : undefined}
          onClick={onLabelClick}
        >
          {labelInner}
        </a>
      )
      : (
        <button
          type="button"
          className={labelClass}
          data-fh="NAV-2"
          data-active={active ? "true" : undefined}
          data-contains-active={containsActive ? "true" : undefined}
          onClick={onLabelClick}
        >
          {labelInner}
        </button>
      );

  if (!collapsible) {
    return <div className={cx("fh-sidenav__area", className)}>{labelNode}</div>;
  }

  return (
    <div className={cx("fh-sidenav__area", className)} data-fh="NAV-2" data-open={open ? "true" : "false"}>
      <div className="fh-sidenav__area-head">
        {labelNode}
        <button
          type="button"
          className="fh-sidenav__chevron"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? `Collapse ${label}` : `Expand ${label}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onOpenChange(!open);
          }}
        >
          <i className="fh-icon fh-icon--chevron-right" aria-hidden="true" />
        </button>
      </div>
      <div id={panelId} role="region" aria-label={label} className="fh-sidenav__children" data-state={open ? "open" : "closed"} hidden={!open}>
        {children}
      </div>
    </div>
  );
}

/* —— SideNavFlyout (NAV-2.2) —— */
export type SideNavFlyoutProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  anchor?: DOMRect | null;
  children: React.ReactNode;
  /** Grace ms before close on mouse leave (default 150). */
  leaveDelay?: number;
};

export function SideNavFlyout({ title, open, onClose, anchor, children, leaveDelay = 150 }: SideNavFlyoutProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open, onClose]);

  if (!open) return null;

  const style: React.CSSProperties = anchor
    ? { top: anchor.top, left: anchor.right + 8 }
    : { top: 0, left: 0 };

  const clear = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };

  return (
    <div
      ref={ref}
      data-fh="NAV-2.2"
      className="fh-sidenav-flyout"
      role="dialog"
      aria-label={title}
      style={style}
      onMouseEnter={clear}
      onMouseLeave={() => {
        clear();
        timer.current = setTimeout(onClose, leaveDelay);
      }}
    >
      <p className="fh-sidenav-flyout__title">{title}</p>
      <ul className="fh-sidenav-flyout__list">{children}</ul>
    </div>
  );
}
