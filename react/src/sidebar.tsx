/**
 * Firehorse Sidebar (SBR). Markup matches the admin demo in
 * site/pages/admin/index.html#c-sidebar; style is src/admin/sidebar.css.
 *
 *   <Sidebar label="Helm" activeId="overview" groups={groups} />
 *
 * `side` and which groups are open are controlled when the value and its
 * change handler are passed, and uncontrolled otherwise (side starts at
 * `defaultSide` or "open"; every labelled group starts open).
 * Width works the same way (`width` with `onWidthChange`, or `defaultWidth`).
 * The nav sets `data-fh-sidebar-ready` so the vanilla resize helper skips it.
 * `renderLink` receives anchor props (including ref) and the area or page.
 * Spread them onto Next's Link. The default is a plain <a>.
 */
import * as React from "react";
import { createPortal } from "react-dom";

type Tone = "sky" | "teal" | "lime" | "amber" | "orange" | "accent" | "rose" | "fuchsia" | "violet" | "neutral";

export type SidebarMetric = {
  value: number;
  kind: "count" | "ratio" | "dot" | "percent";
  max?: number;
  tone?: "neutral" | "warn" | "danger";
  /** "auto" (default): dot for dot, bar for percent and for a ratio with max, otherwise bubble. */
  display?: "auto" | "bubble" | "bar" | "dot";
  /** With no explicit tone, a full share is danger and 80% is warn. */
  cap?: boolean;
  /** Noun in the accessible name, such as "goals" or "actions". */
  label?: string;
};

export type SidebarPage = {
  id: string;
  label: string;
  href: string;
  subgroup?: string | null;
};

export type SidebarArea = {
  id: string;
  label: string;
  href: string;
  icon?: string;
  tone?: Tone;
  metric?: SidebarMetric | null;
  pages?: SidebarPage[];
  /** Pages open in the sliding window instead of inline. */
  window?: boolean;
  /** Renders the soon row (not a link). */
  soon?: boolean;
};

export type SidebarGroup = {
  id: string;
  /** No label: pinned block, list only, no group head. */
  label?: string;
  index?: string;
  areas: SidebarArea[];
};

export type SidebarSide = "open" | "rail";

/** Anchor props for `renderLink`, plus the row's tone and contains-active state. */
export type SidebarLinkProps = React.ComponentPropsWithRef<"a"> & {
  "data-tone"?: string;
  "data-contains-active"?: "true";
};

export type SidebarRenderLink = (
  props: SidebarLinkProps,
  item: SidebarArea | SidebarPage,
) => React.ReactNode;

export type SidebarProps = {
  groups: SidebarGroup[];
  activeId?: string;
  head?: React.ReactNode;
  foot?: React.ReactNode;
  side?: SidebarSide;
  defaultSide?: SidebarSide;
  onSideChange?: (side: SidebarSide) => void;
  /** Open width in rem. Controlled with `onWidthChange`, otherwise `defaultWidth` (15). */
  width?: number;
  defaultWidth?: number;
  /** Settled width only: pointer release, a key on the handle, or a double-click. */
  onWidthChange?: (rem: number) => void;
  /** Lower open width in rem. Default 13. A release between this and `snapAt` lands here. */
  minWidth?: number;
  /** Upper width in rem. Default 24. */
  maxWidth?: number;
  /** Rail lock threshold in rem. Default 9. */
  snapAt?: number;
  /** Resize handle. Default true. */
  resizable?: boolean;
  /** Ids of labelled groups that are open. All labelled groups start open when omitted. */
  openGroups?: string[];
  onOpenGroupsChange?: (ids: string[]) => void;
  renderLink?: SidebarRenderLink;
  /** Accessible name of the nav. Default "Sidebar". */
  label?: string;
};

const cx = (...parts: Array<string | false | undefined | null>) => parts.filter(Boolean).join(" ");

type RowMeta =
  | { kind: "group"; groupId: string }
  | { kind: "area"; areaId: string; window: boolean; inline: boolean }
  | { kind: "page"; areaId: string; place: "inline" | "window" }
  | { kind: "back"; areaId: string }
  | { kind: "soon"; areaId: string };

type FlyoutState = { areaId: string; top: number; left: number };
type WindowMode = { type: "auto" } | { type: "open"; id: string } | { type: "closed" };

function defaultRenderLink(props: SidebarLinkProps) {
  const { "data-tone": tone, "data-contains-active": contains, ...rest } = props;
  return <a {...rest} data-tone={tone} data-contains-active={contains} />;
}

function findArea(groups: SidebarGroup[], id: string) {
  for (const group of groups) {
    const area = group.areas.find((item) => item.id === id);
    if (area) return area;
  }
  return undefined;
}

function windowAreaId(groups: SidebarGroup[], activeId?: string) {
  if (!activeId) return null;
  for (const group of groups) {
    for (const area of group.areas) {
      if (area.window && area.pages?.some((page) => page.id === activeId)) return area.id;
    }
  }
  return null;
}

function pageGroups(pages: SidebarPage[]) {
  const order: string[] = [];
  const map = new Map<string, SidebarPage[]>();
  for (const page of pages) {
    const key = page.subgroup ?? "";
    if (!map.has(key)) {
      order.push(key);
      map.set(key, []);
    }
    map.get(key)!.push(page);
  }
  return order.map((key) => ({ key: key || "_", label: key ? key : null, pages: map.get(key)! }));
}

const RAIL_REM = 3.5;

function roundRem(n: number) {
  return Math.round(n * 10000) / 10000;
}

function formatMetricNumber(value: number) {
  return Number.isFinite(value) ? String(value) : "0";
}

function clamp01(n: number) {
  if (!Number.isFinite(n)) return 0;
  return Math.min(1, Math.max(0, n));
}

/** Share of a ratio (`value / max`) or a percent (`value / 100`), clamped 0 to 1. */
function metricShare(metric: SidebarMetric): number | null {
  if (metric.kind === "percent") {
    if (!Number.isFinite(metric.value)) return null;
    return clamp01(metric.value / 100);
  }
  if (metric.kind === "ratio" && metric.max != null && Number.isFinite(metric.max) && metric.max > 0 && Number.isFinite(metric.value)) {
    return clamp01(metric.value / metric.max);
  }
  return null;
}

/** Resolved bubble, bar or dot. An explicit display wins, except a bar with no share, which is a bubble. */
export function resolveMetricDisplay(metric: SidebarMetric): "bubble" | "bar" | "dot" {
  const requested = metric.display ?? "auto";
  const share = metricShare(metric);
  if (requested === "bar") return share == null ? "bubble" : "bar";
  if (requested === "bubble" || requested === "dot") return requested;
  if (metric.kind === "dot") return "dot";
  if (metric.kind === "percent" && share != null) return "bar";
  if (metric.kind === "ratio" && metric.max != null && share != null) return "bar";
  return "bubble";
}

/** Explicit `tone` wins. Otherwise `cap` maps a full share to danger and 80% to warn. */
export function metricTone(metric: SidebarMetric): "neutral" | "warn" | "danger" {
  if (metric.tone) return metric.tone;
  if (!metric.cap) return "neutral";
  const share = metricShare(metric);
  if (share == null) return "neutral";
  if (share >= 1) return "danger";
  if (share >= 0.8) return "warn";
  return "neutral";
}

function metricName(metric: SidebarMetric) {
  const noun = metric.label?.trim() ? ` ${metric.label.trim()}` : "";
  if (metric.kind === "percent") return `${formatMetricNumber(metric.value)}%`;
  if (metric.kind === "ratio" || metric.kind === "dot") {
    const base = metric.max == null ? formatMetricNumber(metric.value) : `${formatMetricNumber(metric.value)} of ${formatMetricNumber(metric.max)}`;
    return `${base}${noun}`;
  }
  return `${formatMetricNumber(metric.value)}${noun}`;
}

function metricFigure(metric: SidebarMetric, capCount: boolean): React.ReactNode {
  if (metric.kind === "percent") return `${formatMetricNumber(metric.value)}%`;
  if (metric.kind === "count" && capCount && metric.value > 99) return "99+";
  if ((metric.kind === "ratio" || metric.kind === "dot") && metric.max != null) {
    return <>{formatMetricNumber(metric.value)}<span className="fh-sidebar__metric-denom">/{formatMetricNumber(metric.max)}</span></>;
  }
  return formatMetricNumber(metric.value);
}

function Metric({ metric }: { metric: SidebarMetric }) {
  const display = resolveMetricDisplay(metric);
  const tone = metricTone(metric);
  const toneAttr = tone === "neutral" ? undefined : tone;
  const name = metricName(metric);
  if (display === "dot") {
    return <span className="fh-sidebar__metric" data-kind={metric.kind} data-display="dot" data-tone={toneAttr} aria-label={name} />;
  }
  if (display === "bar") {
    const share = metricShare(metric) ?? 0;
    return (
      <span
        className="fh-sidebar__metric"
        data-kind={metric.kind}
        data-display="bar"
        data-tone={toneAttr}
        aria-label={name}
        style={{ "--fh-metric-value": `${Math.round(share * 100)}%` } as React.CSSProperties}
      >
        <span className="fh-sidebar__metric-track" aria-hidden="true"><span className="fh-sidebar__metric-fill" /></span>
        <span className="fh-sidebar__metric-bubble">{metricFigure(metric, false)}</span>
      </span>
    );
  }
  return (
    <span className="fh-sidebar__metric" data-kind={metric.kind} data-display="bubble" data-tone={toneAttr} aria-label={name}>
      {metricFigure(metric, true)}
    </span>
  );
}

function rootPxNow() {
  if (typeof document === "undefined") return 16;
  const n = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return Number.isFinite(n) && n > 0 ? n : 16;
}

function Cube({ icon, tone }: { icon?: string; tone?: Tone }) {
  return (
    <span className="fh-sidebar__cube" data-tone={tone}>
      {icon ? <i className={cx("fh-icon", `fh-icon--${icon}`)} aria-hidden="true" /> : null}
    </span>
  );
}

function isTextField(el: EventTarget | null) {
  if (!(el instanceof HTMLElement)) return false;
  return el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable;
}

function RailFlyout({
  title,
  top,
  left,
  hostRef,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  children,
}: {
  title: string;
  top: number;
  left: number;
  hostRef: React.Ref<HTMLDivElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
}) {
  if (typeof document === "undefined") return null;
  return createPortal(
    <div
      ref={hostRef}
      data-fh="NAV-2.2"
      className="fh-sidenav-flyout"
      role="dialog"
      aria-label={title}
      style={{ top, left }}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="fh-sidenav-flyout__title">{title}</p>
      <ul className="fh-sidenav-flyout__list">{children}</ul>
    </div>,
    document.body,
  );
}

export function Sidebar({
  groups,
  activeId,
  head,
  foot,
  side: sideProp,
  defaultSide = "open",
  onSideChange,
  width: widthProp,
  defaultWidth = 15,
  onWidthChange,
  minWidth = 13,
  maxWidth = 24,
  snapAt = 9,
  resizable = true,
  openGroups,
  onOpenGroupsChange,
  renderLink = defaultRenderLink,
  label = "Sidebar",
}: SidebarProps) {
  const [innerSide, setInnerSide] = React.useState<SidebarSide>(defaultSide);
  const [innerWidth, setInnerWidth] = React.useState(defaultWidth);
  const [drag, setDrag] = React.useState<{ width: number; moved: boolean } | null>(null);
  const [rootPx, setRootPx] = React.useState(16);
  const [railRem, setRailRem] = React.useState(RAIL_REM);
  const [closedGroups, setClosedGroups] = React.useState<string[]>([]);
  const [inlineClosed, setInlineClosed] = React.useState<string[]>([]);
  const [inlineForced, setInlineForced] = React.useState<string[]>([]);
  const [windowMode, setWindowMode] = React.useState<WindowMode>({ type: "auto" });
  const [flyout, setFlyout] = React.useState<FlyoutState | null>(null);
  const [cursor, setCursor] = React.useState<string | null>(null);

  const committedSide = sideProp ?? innerSide;
  const committedWidth = widthProp ?? innerWidth;
  const activeDrag = drag?.moved ? drag : null;
  const opening = !!(activeDrag && activeDrag.width >= snapAt);
  const side: SidebarSide = opening ? "open" : committedSide;
  const shownWidth = opening && activeDrag ? Math.min(maxWidth, Math.max(0, activeDrag.width)) : committedWidth;
  const navRef = React.useRef<HTMLElement>(null);
  const widthRef = React.useRef(committedWidth);
  const sideRef = React.useRef(committedSide);
  widthRef.current = committedWidth;
  sideRef.current = committedSide;
  const dragSession = React.useRef<{
    pointerId: number;
    startX: number;
    startW: number;
    width: number;
    moved: boolean;
    handle: HTMLDivElement;
  } | null>(null);
  const listenCleanup = React.useRef<(() => void) | null>(null);
  const runtime = React.useRef({
    commitWidth: (_next: number) => {},
    setSide: (_next: SidebarSide) => {},
    minWidth,
    maxWidth,
    snapAt,
  });
  const rowRefs = React.useRef(new Map<string, HTMLElement>());
  const refCallbacks = React.useRef(new Map<string, (el: HTMLElement | null) => void>());
  const metaRef = React.useRef(new Map<string, RowMeta>());
  const visibleKeysRef = React.useRef<string[]>([]);
  const flyoutHostRef = React.useRef<HTMLDivElement>(null);
  const leaveTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  // The scrollbar fades in while the body scrolls (data-scrolling) and out a moment after.
  const scrollTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const markScrolling = React.useCallback((e: React.UIEvent<HTMLElement>) => {
    const el = e.currentTarget;
    el.setAttribute("data-scrolling", "");
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => el.removeAttribute("data-scrolling"), 900);
  }, []);
  const pendingFocus = React.useRef<string | null>(null);
  const groupsRef = React.useRef(groups);
  groupsRef.current = groups;

  const refFor = React.useCallback((key: string) => {
    let cb = refCallbacks.current.get(key);
    if (!cb) {
      cb = (el) => {
        if (el) rowRefs.current.set(key, el);
        else rowRefs.current.delete(key);
      };
      refCallbacks.current.set(key, cb);
    }
    return cb;
  }, []);

  React.useEffect(() => {
    setWindowMode((mode) => (mode.type === "auto" ? mode : { type: "auto" }));
    setInlineClosed((prev) => {
      const next = prev.filter((id) => {
        const area = findArea(groupsRef.current, id);
        return !area?.pages?.some((page) => page.id === activeId);
      });
      return next.length === prev.length ? prev : next;
    });
  }, [activeId]);

  React.useEffect(() => {
    if (side !== "rail") setFlyout(null);
  }, [side]);

  React.useEffect(() => () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    listenCleanup.current?.();
    listenCleanup.current = null;
    dragSession.current = null;
  }, []);

  React.useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const font = rootPxNow();
    setRootPx((prev) => (prev === font ? prev : font));
    const rail = parseFloat(getComputedStyle(nav).getPropertyValue("--fh-sidebar-rail"));
    const nextRail = Number.isFinite(rail) && rail > 0 ? rail : RAIL_REM;
    setRailRem((prev) => (prev === nextRail ? prev : nextRail));
  }, [side, shownWidth]);

  const autoWindow = windowAreaId(groups, activeId);
  const windowId = windowMode.type === "open" ? windowMode.id : windowMode.type === "closed" ? null : autoWindow;
  const windowArea = windowId ? findArea(groups, windowId) : undefined;
  const windowShown = side === "open" && !!windowArea;
  const flyoutArea = flyout && side === "rail" ? findArea(groups, flyout.areaId) : undefined;

  React.useLayoutEffect(() => {
    const key = pendingFocus.current;
    if (!key) return;
    const el = rowRefs.current.get(key);
    if (!el) return;
    pendingFocus.current = null;
    setCursor(key);
    el.focus();
  });

  function clearLeave() {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  }

  function armLeave() {
    clearLeave();
    leaveTimer.current = setTimeout(() => {
      const host = flyoutHostRef.current;
      if (host && host.contains(document.activeElement)) return;
      setFlyout(null);
    }, 150);
  }

  function focusKey(key: string) {
    const el = rowRefs.current.get(key);
    if (!el) {
      pendingFocus.current = key;
      setCursor(key);
      return;
    }
    pendingFocus.current = null;
    setCursor(key);
    el.focus();
  }

  function setSide(next: SidebarSide) {
    const current = sideProp ?? innerSide;
    if (current === next) return;
    if (sideProp === undefined) setInnerSide(next);
    onSideChange?.(next);
  }

  function commitWidth(next: number) {
    const value = roundRem(next);
    if (roundRem(widthRef.current) !== value) {
      widthRef.current = value;
      if (widthProp === undefined) setInnerWidth(value);
    }
    onWidthChange?.(value);
  }

  runtime.current = { commitWidth, setSide, minWidth, maxWidth, snapAt };

  function onResizePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.button !== 0 || dragSession.current) return;
    const handle = event.currentTarget;
    const startW = sideRef.current === "rail" ? runtime.current.snapAt : widthRef.current;
    dragSession.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startW,
      width: startW,
      moved: false,
      handle,
    };
    handle.setPointerCapture(event.pointerId);
    setDrag({ width: startW, moved: false });
    event.preventDefault();

    const onMove = (ev: PointerEvent) => {
      const current = dragSession.current;
      if (!current || ev.pointerId !== current.pointerId) return;
      const dir = document.documentElement.dir === "rtl" ? -1 : 1;
      const remW = current.startW + ((ev.clientX - current.startX) / rootPxNow()) * dir;
      current.width = remW;
      current.moved = true;
      setDrag({ width: remW, moved: true });
    };

    const end = (ev: PointerEvent) => {
      const current = dragSession.current;
      if (!current || ev.pointerId !== current.pointerId) return;
      dragSession.current = null;
      setDrag(null);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      listenCleanup.current = null;
      try {
        if (current.handle.hasPointerCapture(ev.pointerId)) current.handle.releasePointerCapture(ev.pointerId);
      } catch {
        /* pointer already released */
      }
      if (!current.moved) return;
      const live = runtime.current;
      if (current.width < live.snapAt) {
        live.setSide("rail");
        return;
      }
      const settled = current.width < live.minWidth ? live.minWidth : Math.min(live.maxWidth, Math.max(live.minWidth, current.width));
      live.commitWidth(settled);
      live.setSide("open");
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    listenCleanup.current = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      dragSession.current = null;
    };
  }

  function onResizeDoubleClick(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    commitWidth(defaultWidth);
    setSide("open");
  }

  function onResizeKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const rail = sideRef.current === "rail";
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      // Section 18 steps from minWidth while the rail is locked, so one key leaves the lock.
      const base = rail ? minWidth : widthRef.current;
      const step = event.key === "ArrowLeft" ? -1 : 1;
      const w = Math.min(maxWidth, Math.max(0, base + step));
      event.preventDefault();
      event.stopPropagation();
      if (w < snapAt) setSide("rail");
      else {
        commitWidth(w < minWidth ? minWidth : w);
        setSide("open");
      }
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      event.stopPropagation();
      setSide("rail");
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      event.stopPropagation();
      commitWidth(maxWidth);
      setSide("open");
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      setSide(sideRef.current === "rail" ? "open" : "rail");
    }
  }

  function groupOpen(id: string) {
    if (openGroups !== undefined) return openGroups.includes(id);
    return !closedGroups.includes(id);
  }

  function setGroupOpen(id: string, open: boolean) {
    if (openGroups !== undefined) {
      if (openGroups.includes(id) === open) return;
      const next = open ? [...openGroups, id] : openGroups.filter((item) => item !== id);
      onOpenGroupsChange?.(next);
      return;
    }
    const nextClosed = open ? closedGroups.filter((item) => item !== id) : closedGroups.includes(id) ? closedGroups : [...closedGroups, id];
    setClosedGroups(nextClosed);
    onOpenGroupsChange?.(groups.filter((group) => group.label && !nextClosed.includes(group.id)).map((group) => group.id));
  }

  function containsActive(area: SidebarArea) {
    return !!activeId && !!area.pages?.some((page) => page.id === activeId);
  }

  function inlineOpen(area: SidebarArea) {
    if (area.window || area.soon || !area.pages?.length) return false;
    if (inlineForced.includes(area.id)) return true;
    if (inlineClosed.includes(area.id)) return false;
    return containsActive(area);
  }

  function setInline(areaId: string, open: boolean) {
    if (open) {
      setInlineForced((prev) => (prev.includes(areaId) ? prev : [...prev, areaId]));
      setInlineClosed((prev) => prev.filter((id) => id !== areaId));
    } else {
      setInlineForced((prev) => prev.filter((id) => id !== areaId));
      setInlineClosed((prev) => (prev.includes(areaId) ? prev : [...prev, areaId]));
    }
  }

  function openWindow(id: string) {
    pendingFocus.current = `back:${id}`;
    setWindowMode({ type: "open", id });
    setCursor(`back:${id}`);
  }

  function closeWindow() {
    if (!windowId) return;
    pendingFocus.current = `area:${windowId}`;
    setCursor(`area:${windowId}`);
    setWindowMode({ type: "closed" });
  }

  function showFlyout(area: SidebarArea, el: HTMLElement, focusFirst: boolean) {
    if (side !== "rail" || area.soon || !area.pages?.length) return;
    clearLeave();
    const rect = el.getBoundingClientRect();
    setFlyout({ areaId: area.id, top: rect.top, left: rect.right + 8 });
    if (focusFirst) {
      const first = area.pages[0];
      if (first) pendingFocus.current = `flyout:${area.id}:${first.id}`;
    }
  }

  function areaExpanded(area: SidebarArea): boolean | undefined {
    if (area.soon) return undefined;
    const flyoutOpen = flyout?.areaId === area.id && side === "rail";
    if (area.window) return side === "rail" ? (area.pages?.length ? flyoutOpen : undefined) : windowShown && windowId === area.id;
    if (area.pages?.length) return side === "rail" ? flyoutOpen : inlineOpen(area);
    return undefined;
  }

  const visibleKeys: string[] = [];
  const metas = new Map<string, RowMeta>();
  if (!windowShown) {
    for (const group of groups) {
      const labelled = !!group.label;
      const open = !labelled || side === "rail" || groupOpen(group.id);
      if (labelled && side === "open") {
        const headKey = `group:${group.id}`;
        visibleKeys.push(headKey);
        metas.set(headKey, { kind: "group", groupId: group.id });
      }
      if (!open) continue;
      for (const area of group.areas) {
        const areaKey = `area:${area.id}`;
        visibleKeys.push(areaKey);
        const inline = !area.window && !area.soon && !!area.pages?.length;
        metas.set(areaKey, area.soon ? { kind: "soon", areaId: area.id } : { kind: "area", areaId: area.id, window: area.window === true, inline });
        if (inline && side === "open" && inlineOpen(area)) {
          for (const page of area.pages ?? []) {
            const pageKey = `page:${area.id}:${page.id}`;
            visibleKeys.push(pageKey);
            metas.set(pageKey, { kind: "page", areaId: area.id, place: "inline" });
          }
        }
      }
    }
  } else if (windowArea) {
    const backKeyPlan = `back:${windowArea.id}`;
    visibleKeys.push(backKeyPlan);
    metas.set(backKeyPlan, { kind: "back", areaId: windowArea.id });
    for (const page of windowArea.pages ?? []) {
      const pageKey = `page:${windowArea.id}:${page.id}`;
      visibleKeys.push(pageKey);
      metas.set(pageKey, { kind: "page", areaId: windowArea.id, place: "window" });
    }
  }
  visibleKeysRef.current = visibleKeys;
  metaRef.current = metas;

  const preferred = (() => {
    if (activeId) {
      const pageKey = visibleKeys.find((key) => key.startsWith("page:") && key.endsWith(`:${activeId}`));
      if (pageKey) return pageKey;
      if (visibleKeys.includes(`area:${activeId}`)) return `area:${activeId}`;
    }
    return visibleKeys[0] ?? "";
  })();

  function tabFor(key: string) {
    if (cursor === key) return 0;
    const flyoutCursor = !!flyout && !!cursor && cursor.startsWith(`flyout:${flyout.areaId}:`);
    const cursorVisible = !!cursor && (visibleKeys.includes(cursor) || flyoutCursor);
    if (cursorVisible) return -1;
    return key === preferred ? 0 : -1;
  }

  function onAreaClick(event: React.MouseEvent<HTMLAnchorElement>, area: SidebarArea) {
    const hasPanel = !!area.pages?.length || area.window === true;
    if (!hasPanel || side === "rail") return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    // Enter activates the anchor with detail 0 and follows href. A pointer click opens the panel.
    if (event.detail === 0) return;
    event.preventDefault();
    if (area.window) openWindow(area.id);
    else setInline(area.id, !inlineOpen(area));
  }

  function onAreaFocus(key: string, area: SidebarArea, el: HTMLElement) {
    setCursor((current) => (current === key ? current : key));
    if (side === "rail") showFlyout(area, el, false);
  }

  function onAreaBlur(event: React.FocusEvent, areaId: string) {
    const next = event.relatedTarget;
    if (next instanceof Node && flyoutHostRef.current?.contains(next)) return;
    if (flyout?.areaId === areaId) setFlyout(null);
  }

  function moveRow(event: React.KeyboardEvent, key: string) {
    const keys = visibleKeysRef.current;
    const index = keys.indexOf(key);
    if (index < 0) return false;
    let next = -1;
    if (event.key === "ArrowDown") next = Math.min(keys.length - 1, index + 1);
    else if (event.key === "ArrowUp") next = Math.max(0, index - 1);
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = keys.length - 1;
    else return false;
    event.preventDefault();
    if (next !== index) focusKey(keys[next]!);
    return true;
  }

  function onNavKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (isTextField(event.target)) return;
    const target = event.target as HTMLElement;
    let key: string | null = null;
    for (const [rowKey, node] of rowRefs.current) {
      if (node === target) {
        key = rowKey;
        break;
      }
    }

    if (event.key === "Escape") {
      if (flyout && side === "rail") {
        event.preventDefault();
        const areaId = flyout.areaId;
        setFlyout(null);
        focusKey(`area:${areaId}`);
        return;
      }
      if (windowShown) {
        event.preventDefault();
        closeWindow();
      }
      return;
    }

    if (!key || key.startsWith("flyout:")) return;
    if (moveRow(event, key)) return;
    const meta = metaRef.current.get(key);
    if (!meta) return;

    if (event.key === "ArrowRight") {
      if (meta.kind === "group") {
        event.preventDefault();
        setGroupOpen(meta.groupId, true);
        return;
      }
      if (meta.kind !== "area") return;
      const area = findArea(groups, meta.areaId);
      if (!area) return;
      if (side === "rail") {
        if (!area.pages?.length) return;
        event.preventDefault();
        const el = rowRefs.current.get(`area:${area.id}`);
        if (el) showFlyout(area, el, true);
        return;
      }
      if (area.window) {
        event.preventDefault();
        if (windowShown && windowId === area.id) focusKey(`back:${area.id}`);
        else openWindow(area.id);
        return;
      }
      if (meta.inline) {
        event.preventDefault();
        if (!inlineOpen(area)) setInline(area.id, true);
        else if (area.pages?.[0]) focusKey(`page:${area.id}:${area.pages[0].id}`);
      }
      return;
    }

    if (event.key === "ArrowLeft") {
      if (meta.kind === "group") {
        event.preventDefault();
        setGroupOpen(meta.groupId, false);
        return;
      }
      if (meta.kind === "area" && side === "rail" && flyout?.areaId === meta.areaId) {
        event.preventDefault();
        setFlyout(null);
        return;
      }
      if (meta.kind === "area" && meta.inline) {
        const area = findArea(groups, meta.areaId);
        if (area && inlineOpen(area)) {
          event.preventDefault();
          setInline(area.id, false);
        }
        return;
      }
      if (meta.kind === "page" && meta.place === "inline") {
        event.preventDefault();
        setInline(meta.areaId, false);
        focusKey(`area:${meta.areaId}`);
        return;
      }
      if (meta.kind === "back" || (meta.kind === "page" && meta.place === "window")) {
        event.preventDefault();
        closeWindow();
      }
    }
  }

  function onFlyoutKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!flyoutArea?.pages?.length) return;
    if (isTextField(event.target)) return;
    const keys = flyoutArea.pages.map((page) => `flyout:${flyoutArea.id}:${page.id}`);
    const target = event.target as HTMLElement;
    const index = keys.findIndex((item) => rowRefs.current.get(item) === target);
    if (event.key === "Escape" || event.key === "ArrowLeft") {
      event.preventDefault();
      const areaId = flyoutArea.id;
      setFlyout(null);
      focusKey(`area:${areaId}`);
      return;
    }
    if (index < 0) return;
    let next = -1;
    if (event.key === "ArrowDown") next = Math.min(keys.length - 1, index + 1);
    else if (event.key === "ArrowUp") next = Math.max(0, index - 1);
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = keys.length - 1;
    if (next >= 0) {
      event.preventDefault();
      if (next !== index) focusKey(keys[next]!);
    }
  }

  React.useEffect(() => {
    if (!flyout || side !== "rail") return;
    const areaId = flyout.areaId;
    const onDown = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (flyoutHostRef.current?.contains(target)) return;
      const row = rowRefs.current.get(`area:${areaId}`);
      if (row?.contains(target)) return;
      setFlyout(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || isTextField(event.target)) return;
      setFlyout(null);
      const row = rowRefs.current.get(`area:${areaId}`);
      const target = event.target;
      if (target instanceof Node && (row === target || row?.contains(target) || flyoutHostRef.current?.contains(target))) {
        pendingFocus.current = `area:${areaId}`;
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [flyout, side]);

  function renderPage(area: SidebarArea, page: SidebarPage, place: "inline" | "window" | "flyout") {
    const key = place === "flyout" ? `flyout:${area.id}:${page.id}` : `page:${area.id}:${page.id}`;
    const current = page.id === activeId;
    return renderLink(
      {
        href: page.href,
        className: place === "flyout" ? undefined : "fh-sidebar__page",
        "aria-current": current ? "page" : undefined,
        tabIndex: place === "flyout" ? (cursor === key ? 0 : -1) : tabFor(key),
        ref: refFor(key),
        onFocus: place === "flyout" ? () => setCursor(key) : () => setCursor((currentCursor) => (currentCursor === key ? currentCursor : key)),
        children: page.label,
      },
      page,
    );
  }

  function renderArea(area: SidebarArea) {
    const key = `area:${area.id}`;
    const current = area.id === activeId;
    const contains = !current && containsActive(area);
    const inline = !area.window && !area.soon && !!area.pages?.length;
    const expanded = inline && side === "open" && inlineOpen(area);
    const shown = !windowShown;

    const body = (
      <>
        <Cube icon={area.icon} tone={area.tone} />
        <span className="fh-sidebar__label">{area.label}</span>
        {area.metric ? <Metric metric={area.metric} /> : null}
        {area.soon && side === "open" ? <span className="fh-badge">Soon</span> : null}
      </>
    );

    let row: React.ReactNode;
    if (area.soon) {
      row = (
        <span
          ref={refFor(key)}
          className="fh-sidebar__item fh-sidebar__item--soon"
          data-tone={area.tone}
          tabIndex={shown ? tabFor(key) : -1}
          onFocus={() => setCursor(key)}
        >
          {body}
        </span>
      );
    } else {
      const expandedState = areaExpanded(area);
      row = renderLink(
        {
          href: area.href,
          className: "fh-sidebar__item",
          "data-tone": area.tone,
          "data-contains-active": contains ? "true" : undefined,
          "aria-current": current ? "page" : undefined,
          "aria-expanded": expandedState,
          tabIndex: shown ? tabFor(key) : -1,
          ref: refFor(key),
          onClick: (event) => onAreaClick(event, area),
          onFocus: (event) => onAreaFocus(key, area, event.currentTarget),
          onBlur: (event) => onAreaBlur(event, area.id),
          onMouseEnter: (event) => {
            if (side === "rail") showFlyout(area, event.currentTarget, false);
          },
          onMouseLeave: () => {
            if (side === "rail") armLeave();
          },
          children: body,
        },
        area,
      );
    }

    return (
      <li key={area.id}>
        {row}
        {expanded ? (
          <ul className="fh-sidebar__pages">
            {area.pages!.map((page) => (
              <li key={page.id}>{renderPage(area, page, "inline")}</li>
            ))}
          </ul>
        ) : null}
      </li>
    );
  }

  function renderGroup(group: SidebarGroup) {
    const labelled = !!group.label;
    const open = !labelled || side === "rail" || groupOpen(group.id);
    const headKey = `group:${group.id}`;
    const items = open ? group.areas.map((area) => renderArea(area)) : null;

    if (!labelled) {
      return (
        <ul key={group.id} className="fh-sidebar__list" inert={windowShown || undefined}>
          {items}
        </ul>
      );
    }

    return (
      <section key={group.id} className="fh-sidebar__group" inert={windowShown || undefined}>
        <button
          type="button"
          className="fh-sidebar__group-head"
          aria-expanded={side === "rail" ? true : groupOpen(group.id)}
          tabIndex={!windowShown && side === "open" ? tabFor(headKey) : -1}
          ref={refFor(headKey)}
          onClick={() => setGroupOpen(group.id, !groupOpen(group.id))}
          onFocus={() => setCursor(headKey)}
        >
          {group.index ? <span className="fh-sidebar__index">{group.index}</span> : null}
          <span>{group.label}</span>
          <i className="fh-icon fh-icon--chevron-down fh-sidebar__chevron" aria-hidden="true" />
        </button>
        {open ? <ul className="fh-sidebar__list">{items}</ul> : <ul className="fh-sidebar__list" />}
      </section>
    );
  }

  const windowPages = windowShown && windowArea?.pages ? windowArea.pages : [];
  const backKey = windowArea ? `back:${windowArea.id}` : "";
  const flyoutGroups = flyoutArea?.pages?.length ? pageGroups(flyoutArea.pages) : [];

  const snapping = !!(activeDrag && activeDrag.width < snapAt);
  const ariaRem = side === "rail"
    ? railRem
    : snapping && activeDrag
      ? Math.max(0, activeDrag.width)
      : shownWidth;
  const toPx = (rem: number) => Math.round(rem * rootPx);

  return (
    <nav
      ref={navRef}
      className="fh-sidebar"
      data-fh="SBR"
      data-fh-side={side}
      data-fh-sidebar-ready=""
      data-fh-resizing={drag ? "" : undefined}
      data-fh-snap={snapping ? "" : undefined}
      style={{ "--fh-sidebar-width": `${roundRem(shownWidth)}rem` } as React.CSSProperties}
      aria-label={label}
      onKeyDown={onNavKeyDown}
    >
      <div className="fh-sidebar__head">
        {head}
        <button
          type="button"
          className="fh-sidebar__toggle"
          aria-expanded={side === "open"}
          aria-label={side === "open" ? "Collapse sidebar" : "Expand sidebar"}
          onClick={() => setSide(committedSide === "open" ? "rail" : "open")}
        >
          <i className="fh-icon fh-icon--panel-left" aria-hidden="true" />
        </button>
      </div>
      <div className="fh-sidebar__body" onScroll={markScrolling}>
        {groups.map((group) => renderGroup(group))}
        {windowShown && windowArea ? (
          <div className="fh-sidebar__window" data-open="">
            <div className="fh-sidebar__window-head">
              <button
                type="button"
                className="fh-sidebar__window-back"
                aria-label="Back"
                ref={refFor(backKey)}
                tabIndex={tabFor(backKey)}
                onClick={closeWindow}
                onFocus={() => setCursor(backKey)}
              >
                <i className="fh-icon fh-icon--arrow-left" aria-hidden="true" />
              </button>
              <div className="fh-sidebar__window-title">
                <Cube icon={windowArea.icon} tone={windowArea.tone} />
                <span>{windowArea.label}</span>
                {windowArea.metric ? <Metric metric={windowArea.metric} /> : null}
              </div>
            </div>
            <div className="fh-sidebar__window-body">
              {pageGroups(windowPages).map((group) => (
                <section key={group.key} className="fh-sidebar__window-group">
                  {group.label ? <p className="fh-sidebar__window-label">{group.label}</p> : null}
                  <ul className="fh-sidebar__pages">
                    {group.pages.map((page) => (
                      <li key={page.id}>{renderPage(windowArea, page, "window")}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {foot != null ? <div className="fh-sidebar__foot">{foot}</div> : null}
      {flyout && flyoutArea ? (
        <RailFlyout
          title={flyoutArea.label}
          top={flyout.top}
          left={flyout.left}
          hostRef={flyoutHostRef}
          onKeyDown={onFlyoutKeyDown}
          onMouseEnter={clearLeave}
          onMouseLeave={armLeave}
        >
          {flyoutGroups.map((group) => (
            <React.Fragment key={group.key}>
              {group.label ? (
                <li>
                  <span className="fh-sidebar__window-label">{group.label}</span>
                </li>
              ) : null}
              {group.pages.map((page) => (
                <li key={page.id}>{renderPage(flyoutArea, page, "flyout")}</li>
              ))}
            </React.Fragment>
          ))}
        </RailFlyout>
      ) : null}
      {resizable ? (
        <div
          className="fh-sidebar__resize"
          role="separator"
          aria-orientation="vertical"
          tabIndex={0}
          aria-label="Resize sidebar"
          aria-valuemin={toPx(minWidth)}
          aria-valuemax={toPx(maxWidth)}
          aria-valuenow={toPx(ariaRem)}
          onPointerDown={onResizePointerDown}
          onDoubleClick={onResizeDoubleClick}
          onKeyDown={onResizeKeyDown}
        />
      ) : null}
    </nav>
  );
}
