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

Included: Button, Chip, Icon, Avatar, Dialog (modal, sheet, float), DropdownMenu, Popover, Tooltip, Tabs, Accordion, Select, Switch, Checkbox, Toast, ThemeSelect, **SideNav / SideNavSection / SideNavItem / SideNavFlyout / NavBadge** (collapsible two-level sidebar, NAV-2), PasswordInput, **MoneyInput**.

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
