# @rascode/firehorse-react

Optional React components for [Firehorse](https://firehorse.rascode.dev). **Radix** primitives do the behavior (focus trapping, keyboard and typeahead, collision-aware positioning, ARIA); **Firehorse** classes do every pixel, so these components follow your theme, tones and adaptive color like the rest of the system.

The core Firehorse package stays zero-JavaScript and framework-agnostic. Reach for this only in React apps that want Radix's behavior for menus, selects, popovers, tooltips and toasts.

```sh
npm i @rascode/firehorse @rascode/firehorse-react
```

```tsx
import "@rascode/firehorse";
import "@rascode/firehorse/icons.css";
import "@rascode/firehorse-react/src/firehorse-react.css";
import { Button, Dialog, DialogTrigger, DialogContent, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@rascode/firehorse-react";

<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent title="Agent settings" variant="float">…</DialogContent>
</Dialog>
```

Included: Button, Chip, Icon, Avatar, Dialog (modal, sheet, float), DropdownMenu, Popover, Tooltip, Tabs, Accordion, Select, Switch, Checkbox, Toast, **Toaster** and **toast()**, ThemeSelect, **SideNav / SideNavSection / SideNavItem / SideNavFlyout / NavBadge** (collapsible two-level sidebar, NAV-2), **Sidebar** (admin sidebar, SBR), PasswordInput, **MoneyInput**.

Toasts (DLG). Mount one `<Toaster />`. `toast(title, options)` returns an id. `toast.success` and `toast.error` set the tone. `toast.dismiss(id)` removes one. Tones are `neutral` (default), `success` and `danger`. Duration is 5000ms, or 8000ms for danger. Success and neutral are a polite live region; danger is assertive. An action is `{ label, href }` or `{ label, onClick }`. An `href` that starts with `http://` or `https://` opens in a new tab (`target="_blank"` `rel="noreferrer"`). The close button is `aria-label="Dismiss"`.

```tsx
import { Toaster, toast } from "@rascode/firehorse-react";

<Toaster />
toast("Saved.");
toast.success("Published to X", {
  action: { label: "View on X", href: "https://x.com" },
});
toast.error("Could not publish", {
  description: "The post did not go out.",
});
```

Sidebar (SBR):

```tsx
import { Sidebar } from "@rascode/firehorse-react";

<Sidebar
  label="Helm"
  activeId="components"
  groups={[
    {
      id: "pinned",
      areas: [
        { id: "overview", label: "Overview", href: "/overview", icon: "layout-grid", tone: "amber" },
        { id: "goals", label: "Goals", href: "/goals", icon: "target", tone: "lime", metric: { value: 3, max: 5, kind: "ratio" } },
      ],
    },
    {
      id: "brands",
      label: "Brands",
      index: "02",
      areas: [
        {
          id: "firehorse",
          label: "Firehorse",
          href: "/firehorse",
          icon: "flame",
          tone: "rose",
          pages: [
            { id: "components", label: "Components", href: "/firehorse/components" },
            { id: "releases", label: "Releases", href: "/firehorse/releases" },
          ],
        },
      ],
    },
  ]}
/>
```

`side` is `"open"` or `"rail"` (`defaultSide`, or `side` with `onSideChange`). Width is rem, the same way: `width` with `onWidthChange`, or `defaultWidth` (15). The range is 13 to 24 (`minWidth`, `maxWidth`) and the snap is 9 (`snapAt`). Dragging below the snap locks the rail and keeps the last open width; the toggle and Enter on the handle open that width again. Double-click on the handle resets to `defaultWidth`. `resizable={false}` hides the handle.

```tsx
<Sidebar label="Helm" width={width} onWidthChange={setWidth} groups={groups} />
```

An area with `pages` expands under the row. `window: true` opens those pages in the area window, grouped by `subgroup`. Spread `renderLink` props onto your own link, for example `renderLink={(props) => <Link {...props} />}`. In the rail, an area's pages open in a flyout on hover or focus.

`display` on a metric is `"auto"` (the default), `"bubble"`, `"bar"` or `"dot"`. Auto is a dot for `kind: "dot"`, a bar for `kind: "percent"` and for a ratio that has `max`, and a bubble otherwise. A bar with no share (a count, or a ratio with no max) falls back to a bubble. Counts above 99 draw `99+`. `label` is the noun in the name (`"7 actions"`, `"3 of 5 goals"`), and `cap` sets warn at 80% and danger at full when `tone` is omitted. A percent reads as `"60%"`. `resolveMetricDisplay` and `metricTone` export those rules.

```tsx
metric={{ value: 3, max: 5, kind: "ratio", label: "goals", cap: true }}
```

Themes:

```tsx
import "@rascode/firehorse/themes.css";
import { ThemeSelect, useFirehorseTheme } from "@rascode/firehorse-react";

<ThemeSelect />                                  // Firehorse, Mustang, Friesian, Akhal-Teke
const [theme, setTheme] = useFirehorseTheme();   // build your own control
```

Pass `themes={[{ value: "appaloosa", label: "Appaloosa" }]}` to offer your own. The choice is saved under `fh-theme`, the same key `firehorse.js` uses, so both stay in step.

Money input:

```tsx
import "@rascode/firehorse";
import { MoneyInput } from "@rascode/firehorse-react";

<MoneyInput label="Amount" name="amount" currency="USD" defaultValueMinor="125000" />   // posts amount=125000
<MoneyInput label="Price" name="price" currencies={["USD", "EUR", "JPY"]} value={minor} onValueChange={(m, cur) => setMinor(m)} />
```

`value` and `onValueChange` are whole minor units as a digit string (`"-"` first when negative, `""` when empty), never a float. The hidden input posts them under `name`; the visible input has no name. It formats with the same functions as `@rascode/firehorse/money`, so `money.js` is not needed, and the markup has no `data-fh-money`, so the script never touches it. Also: `allowNegative`, `minorDigits`, `locale`, `hint`, `error`, `currencyName`, `onCurrencyChange`.
