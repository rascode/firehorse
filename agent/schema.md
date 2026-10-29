# Firehorse structured data (Schema.org)

Firehorse publishes Schema.org JSON-LD from the components on the page.
You mark the component; the tool writes the JSON-LD from the visible
content and fails the build if the two ever disagree.

## Workflow

1. Add `data-schema` to components that hold **real** content (table below).
2. Hand-write the page-level nodes in `<head>`: one `Organization` with an
   `@id`, and `WebSite` on the home page. Generated nodes link to the
   Organization as provider or seller.
3. Run `npx firehorse-schema <file.html> --write` after building the page.
   It writes `<script type="application/ld+json" id="fh-schema">` and
   leaves your hand-written blocks alone.
4. In CI run `npx firehorse-schema <file.html>` (no `--write`). It exits 1
   when JSON-LD is invalid, missing required properties, or doesn't match
   the page.

## Components

| Component | Attribute | Schema.org type | Built from | Must match |
| --- | --- | --- | --- | --- |
| `fh-breadcrumb` | `data-schema="breadcrumb"` | BreadcrumbList | Each link becomes a ListItem (position, name, item) in visible order. The current page (aria-current) is the last ListItem. | Same number of items, same names, same order as the visible trail. |
| `fh-accordion` | `data-schema="faq"` | FAQPage | Each <details>: <summary> text → Question.name, the rest of the panel → acceptedAnswer.text. | Every visible question appears once, with the same wording. Only for questions the site itself answers. |
| `fh-tiers` | `data-schema="offers"` | Service with Offer | Each fh-tier: fh-tier__name → name, the number in fh-tier__price → Offer.price, data-currency (default USD) → priceCurrency. | Same tiers and the same prices as the page shows. |
| `fh-card` | `data-schema="service"` | Service | fh-card__title → name, fh-card__body → description, fh-card__meta → serviceType, the page Organization → provider. | Name and description match the card. |
| `fh-testimonial` | `data-schema="review"` | Review | <blockquote> → reviewBody, the name in fh-person → author, data-schema-item → itemReviewed. | Quote text matches. Real, attributable reviews only; never invented or sample quotes. |
| `fh-steps` | `data-schema="howto"` | HowTo | data-schema-name (or the nearest heading) → name; each <li> heading → HowToStep.name, its paragraph → HowToStep.text. | Same steps in the same order. |
| `fh-person` | `data-schema="person"` | Person | The <b> in fh-person__text → name, the line under it → jobTitle, the avatar <img> → image. | Real people only; not agents, mascots or sample personas. |
| `fh-prose` | `data-schema="article"` | Article | First <h1>/<h2> → headline, data-schema-author → author, the first <time datetime> → datePublished. | Headline matches the visible title. |

Extra attributes: `data-currency` (ISO 4217, default USD) on `fh-tiers`,
`data-schema-name` on `fh-tiers` / `fh-steps`, `data-schema-item` on
`fh-testimonial`, `data-schema-author` on `fh-prose`. Use
`data-schema="none"` to silence a hint on content you don't want published.

## Page-level nodes

- **WebSite**: required `name`, `url`. Once per site, usually on the home page. Hand-write it in <head>; the checker validates it.
- **Organization**: required `name`, `url`; recommended `logo`, `sameAs`. Give it an @id (e.g. https://example.com/#org). Generated Service and Offer nodes link to it as provider/seller.

## Required properties the checker enforces

- WebSite: `name`, `url`
- Organization: `name`, `url`
- BreadcrumbList: `itemListElement`
- ListItem: `position`, `name`
- FAQPage: `mainEntity`
- Question: `name`, `acceptedAnswer`
- Answer: `text`
- Service: `name`
- Product: `name`
- Offer: `price`, `priceCurrency`
- Review: `reviewBody`, `author`
- HowTo: `name`, `step`
- HowToStep: `text`
- Person: `name`
- Article: `headline`, `author`, `datePublished`
- SoftwareSourceCode: `name`, `codeRepository`
- SoftwareApplication: `name`
- Thing: `name`

Also: Offer `price` is a plain number and `priceCurrency` a 3-letter code;
BreadcrumbList positions run 1, 2, 3… in order.

## NEVER

- Mark demo, sample or placeholder content with `data-schema`.
- Write JSON-LD that says something the page doesn't show.
- Invent reviews, ratings, prices, people or dates.
- Mark AI agents, mascots or sample personas as `Person`.
- Hand-edit the `#fh-schema` block; change the page and regenerate.
