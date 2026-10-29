/**
 * @rascode/firehorse-react
 * Radix primitives handle focus, keyboard, typeahead, collision-aware
 * positioning and ARIA; Firehorse classes handle every pixel. The core CSS
 * stays framework-free; this package is only for React apps that want those
 * behaviors (comboboxes, menus with typeahead, toasts with swipe) done for them.
 *
 *   import "@rascode/firehorse";
 *   import { Button, Dialog, DropdownMenu, Select, Tabs } from "@rascode/firehorse-react";
 */
import * as React from "react";
import { Dialog as D, DropdownMenu as M, Popover as P, Tooltip as T, Tabs as Tb, Accordion as A, Select as S, Switch as Sw, Checkbox as C, Toast as To } from "radix-ui";

type Tone = "sky" | "teal" | "lime" | "amber" | "orange" | "accent" | "rose" | "fuchsia" | "violet" | "neutral";
const cx = (...c: Array<string | false | undefined | null>) => c.filter(Boolean).join(" ");

/* —— Primitives that are only markup —— */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "plain" | "secondary" | "ghost" | "outline"; size?: "sm" | "md" | "lg"; tone?: Tone };
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ variant = "primary", size = "md", tone, className, ...p }, ref) => (
  <button ref={ref} data-tone={tone} className={cx("fh-button", variant !== "primary" && `fh-button--${variant}`, size !== "md" && `fh-button--${size}`, className)} {...p} />
));
Button.displayName = "Button";

export const Chip = ({ variant, tone, className, ...p }: React.HTMLAttributes<HTMLSpanElement> & { variant?: "solid" | "tone" | "underline" | "indexed"; tone?: Tone }) => (
  <span data-tone={tone} className={cx("fh-chip", variant && `fh-chip--${variant}`, className)} {...p} />
);
export const Icon = ({ name, className, ...p }: React.HTMLAttributes<HTMLElement> & { name: string }) => <i aria-hidden="true" className={cx("fh-icon", `fh-icon--${name}`, className)} {...p} />;
export const Avatar = ({ src, name, shape, size, className }: { src?: string; name: string; shape?: "circle" | "square" | "squircle" | "oval" | "rounded"; size?: "xs" | "sm" | "lg" | "xl" | "2xl"; className?: string }) => (
  <span className={cx("fh-avatar", shape && `fh-avatar--${shape}`, size && `fh-avatar--${size}`, className)} title={name}>{src ? <img src={src} alt="" /> : name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("")}</span>
);

/* —— Dialog & sheet —— */
export const Dialog = D.Root;
export const DialogTrigger = D.Trigger;
export const DialogClose = D.Close;
export function DialogContent({ title, description, variant, children, className, ...p }: React.ComponentProps<typeof D.Content> & { title: React.ReactNode; description?: React.ReactNode; variant?: "sheet" | "float" | "bottom" }) {
  return (
    <D.Portal>
      <D.Overlay className="fh-rx-overlay" />
      <D.Content className={cx("fh-dialog", "fh-rx-dialog", variant && `fh-dialog--${variant}`, className)} {...p}>
        <div className="fh-dialog__header"><div className="fh-stack fh-stack--xs"><D.Title className="fh-subheading">{title}</D.Title>{description && <D.Description className="fh-muted">{description}</D.Description>}</div><D.Close className="fh-close" aria-label="Close" /></div>
        <div className="fh-dialog__body">{children}</div>
      </D.Content>
    </D.Portal>
  );
}

/* —— Dropdown menu —— */
export const DropdownMenu = M.Root;
export const DropdownMenuTrigger = M.Trigger;
export function DropdownMenuContent({ className, ...p }: React.ComponentProps<typeof M.Content>) {
  return <M.Portal><M.Content sideOffset={6} className={cx("fh-menu", "fh-rx-menu", className)} {...p} /></M.Portal>;
}
export const DropdownMenuItem = ({ icon, shortcut, danger, children, className, ...p }: React.ComponentProps<typeof M.Item> & { icon?: string; shortcut?: string; danger?: boolean }) => (
  <M.Item className={cx(danger && "fh-menu__danger", className)} {...p}>{icon && <Icon name={icon} />}{children}{shortcut && <kbd>{shortcut}</kbd>}</M.Item>
);
export const DropdownMenuCheckboxItem = ({ children, ...p }: React.ComponentProps<typeof M.CheckboxItem>) => <M.CheckboxItem {...p}>{children}</M.CheckboxItem>;
export const DropdownMenuLabel = (p: React.ComponentProps<typeof M.Label>) => <M.Label className="fh-menu__label" {...p} />;
export const DropdownMenuSeparator = () => <M.Separator asChild><hr /></M.Separator>;

/* —— Popover & tooltip —— */
export const Popover = P.Root;
export const PopoverTrigger = P.Trigger;
export const PopoverContent = ({ className, ...p }: React.ComponentProps<typeof P.Content>) => <P.Portal><P.Content sideOffset={6} className={cx("fh-dt__panel", "fh-rx-popover", className)} {...p} /></P.Portal>;
export function Tooltip({ content, children }: { content: React.ReactNode; children: React.ReactNode }) {
  return <T.Provider delayDuration={250}><T.Root><T.Trigger asChild>{children}</T.Trigger><T.Portal><T.Content sideOffset={6} className="fh-rx-tooltip">{content}</T.Content></T.Portal></T.Root></T.Provider>;
}

/* —— Tabs (rendered as underline chips) —— */
export const Tabs = Tb.Root;
export const TabsList = ({ className, ...p }: React.ComponentProps<typeof Tb.List>) => <Tb.List className={cx("fh-chips", className)} {...p} />;
export const TabsTrigger = ({ className, tone, ...p }: React.ComponentProps<typeof Tb.Trigger> & { tone?: Tone }) => <Tb.Trigger data-tone={tone} className={cx("fh-chip", "fh-chip--underline", "fh-rx-tab", className)} {...p} />;
export const TabsContent = Tb.Content;

/* —— Accordion —— */
export function Accordion({ items, type = "single" }: { items: Array<{ value: string; title: React.ReactNode; content: React.ReactNode }>; type?: "single" | "multiple" }) {
  const body = items.map((it) => (
    <A.Item key={it.value} value={it.value} className="fh-rx-accordion__item">
      <A.Header asChild><div><A.Trigger className="fh-rx-accordion__trigger">{it.title}</A.Trigger></div></A.Header>
      <A.Content className="fh-rx-accordion__content">{it.content}</A.Content>
    </A.Item>
  ));
  return type === "multiple"
    ? <A.Root type="multiple" className="fh-accordion fh-rx-accordion">{body}</A.Root>
    : <A.Root type="single" collapsible className="fh-accordion fh-rx-accordion">{body}</A.Root>;
}

/* —— Form controls —— */
export function Select({ label, options, placeholder = "Choose…", ...p }: React.ComponentProps<typeof S.Root> & { label: string; options: Array<{ value: string; label: string }>; placeholder?: string }) {
  const id = React.useId();
  return (
    <div className="fh-field">
      <label htmlFor={id}>{label}</label>
      <S.Root {...p}>
        <S.Trigger id={id} className="fh-select fh-rx-select"><S.Value placeholder={placeholder} /><S.Icon><Icon name="chevron-down" /></S.Icon></S.Trigger>
        <S.Portal><S.Content position="popper" sideOffset={4} className="fh-menu fh-rx-menu"><S.Viewport>{options.map((o) => <S.Item key={o.value} value={o.value} className="fh-rx-option"><S.ItemText>{o.label}</S.ItemText><S.ItemIndicator><Icon name="check" /></S.ItemIndicator></S.Item>)}</S.Viewport></S.Content></S.Portal>
      </S.Root>
    </div>
  );
}
export const Switch = ({ label, ...p }: React.ComponentProps<typeof Sw.Root> & { label: string }) => (
  <label className="fh-check fh-rx-switch"><Sw.Root className="fh-rx-switch__root" {...p}><Sw.Thumb className="fh-rx-switch__thumb" /></Sw.Root>{label}</label>
);
export const Checkbox = ({ label, ...p }: React.ComponentProps<typeof C.Root> & { label: string }) => (
  <label className="fh-check fh-rx-checkbox"><C.Root className="fh-rx-checkbox__root" {...p}><C.Indicator><Icon name="check" /></C.Indicator></C.Root>{label}</label>
);

/* —— Toasts —— */
export const ToastProvider = ({ children }: { children: React.ReactNode }) => <To.Provider swipeDirection="right">{children}<To.Viewport className="fh-toaster" /></To.Provider>;
export const Toast = ({ title, tone = "lime", ...p }: React.ComponentProps<typeof To.Root> & { title: React.ReactNode; tone?: Tone }) => (
  <To.Root className="fh-toast" data-tone={tone} {...p}><To.Title asChild><p>{title}</p></To.Title><To.Close className="fh-close" aria-label="Dismiss" /></To.Root>
);

/* —— Themes ——
 * A theme is the whole look in one attribute: <html data-fh-theme="friesian">.
 * Load the theme CSS (import "@rascode/firehorse/themes.css"), then:
 *
 *   <ThemeSelect />                                   // the built-in themes
 *   const [theme, setTheme] = useFirehorseTheme();     // your own control
 *
 * The choice is saved under "fh-theme" (same key as firehorse.js), and a
 * bubbling "fh:theme" event fires on the element: { theme, previous }. */
export type ThemeOption = { value: string; label: string };
export const FIREHORSE_THEMES: ThemeOption[] = [
  { value: "", label: "Firehorse" },
  { value: "mustang", label: "Mustang" },
  { value: "friesian", label: "Friesian" },
  { value: "akhal-teke", label: "Akhal-Teke" },
];
type ThemeHookOptions = { storageKey?: string | null; target?: () => HTMLElement | null };
export function useFirehorseTheme({ storageKey = "fh-theme", target }: ThemeHookOptions = {}) {
  const el = React.useCallback(() => (typeof document === "undefined" ? null : target?.() ?? document.documentElement), [target]);
  const [theme, setState] = React.useState("");
  const apply = React.useCallback((next: string, persist: boolean) => {
    const node = el();
    if (!node) return;
    const previous = node.getAttribute("data-fh-theme") ?? "";
    next ? node.setAttribute("data-fh-theme", next) : node.removeAttribute("data-fh-theme");
    if (persist && storageKey) { try { localStorage.setItem(storageKey, next); } catch { /* storage blocked */ } }
    if (previous !== next) node.dispatchEvent(new CustomEvent("fh:theme", { bubbles: true, detail: { theme: next, previous } }));
    setState(next);
  }, [el, storageKey]);
  React.useEffect(() => {
    let saved: string | null = null;
    try { saved = storageKey ? localStorage.getItem(storageKey) : null; } catch { /* storage blocked */ }
    if (saved !== null) apply(saved, false);
    else setState(el()?.getAttribute("data-fh-theme") ?? "");
    // Stay in sync with other controls (firehorse.js selects, other hooks).
    const node = el();
    const on = (e: Event) => setState((e as CustomEvent<{ theme: string }>).detail.theme);
    node?.addEventListener("fh:theme", on);
    return () => node?.removeEventListener("fh:theme", on);
  }, [apply, el, storageKey]);
  const setTheme = React.useCallback((next: string) => apply(next, true), [apply]);
  return [theme, setTheme] as const;
}
export type ThemeSelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value" | "defaultValue" | "onChange"> &
  ThemeHookOptions & { themes?: ThemeOption[]; onThemeChange?: (theme: string) => void };
export function ThemeSelect({ themes = FIREHORSE_THEMES, storageKey, target, onThemeChange, className, ...p }: ThemeSelectProps) {
  const [theme, setTheme] = useFirehorseTheme({ storageKey, target });
  return (
    <select aria-label="Theme" {...p} className={cx("fh-select", className)} value={theme} onChange={(e) => { setTheme(e.target.value); onThemeChange?.(e.target.value); }}>
      {themes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
    </select>
  );
}
