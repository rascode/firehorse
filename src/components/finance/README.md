# Finance

Money views from the same tokens: a balance hero with its Business / Personal and per-entity split, a segment switch, account cards, a ledger that reads pending and declined at a glance, virtual card tiles and connection health. Built for Chicken and Egg and Helm's Finance view; nothing in here is specific to a provider.

Docs: https://firehorse.dev/finance/

| ID  | Component          | Class            |
| --- | ------------------ | ---------------- |
| BAL | Balance            | `.fh-balance`    |
| SEG | Segment switch     | `.fh-segment`    |
| ACN | Account card       | `.fh-account`    |
| LDG | Ledger             | `.fh-ledger`     |
| VCD | Virtual card       | `.fh-vcard`      |
| CNX | Connection status  | `.fh-connection` |

## Conventions

- Amounts are tabular figures in `--fh-font-figure`. Money out reads plain; money in carries `data-flow="in"` and the success tone; owed balances carry `data-flow="owed"`.
- Status is a word, never colour alone: `data-status="pending|posted|declined|reversed"` on a ledger row shows a labelled pill.
- Segments use tones: Business takes `amber`, Personal takes `sky`. An entity chip carries the entity's own tone when it has one.
- Figures can be hidden for screen sharing with `data-fh-private` on any ancestor: amounts blur until hovered or focused.
