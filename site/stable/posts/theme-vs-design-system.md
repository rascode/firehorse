---
title: A theme is a finished site. A design system is how you build the next one.
slug: theme-vs-design-system
date: 2026-11-07
description: Hand an agent a template URL and it has to guess your design from pixels. Hand it a design system and it follows rules. Here's the difference, and why it decides how your site turns out.
topics: [agents]
author: H. Justin Rascoe
role: Founder, Rascode
---
I've spent the last few weeks browsing themes: templates published by Framer, free ones, paid ones on marketplaces like Envato. A lot of them are genuinely good. Strong type, confident layouts, real taste. They're wonderful resources.

They are not design systems. And now that agents build most of our pages, that difference matters more than it ever has.

**TL;DR**
- :layout-grid: A theme is a finished set of pages. A design system is the rules those pages were made from, written down.
- :eye: Give an agent a theme's URL and it has to reverse-engineer your design from pixels, then guess everything the theme never showed.
- :file-text: Give it the theme's HTML and CSS and it gets values, not intent: it still can't tell a rule from a one-off.
- :hash: Give it a design system and it reads the rules, uses components by ID, and builds pages the theme never had in the same language.
- :check: Same prompt, same result. That's the whole point.


## What you're actually buying

A theme is an answer. Someone made dozens of decisions (the gray of the body text, the gap between a heading and its paragraph, how round a button is, what happens to the nav on a narrow screen) and shipped the result: a homepage, an about page, a pricing page, maybe a blog.

What they didn't ship is the decisions themselves. Those live in the pixels. You can see that the cards have 24px of padding, but not whether that's a rule or just what looked right on that one page. You can see a blue, but not that it's the accent, that it should never sit behind small text, or what it turns into in dark mode.

A design system ships the decisions. Tokens for every value. Components with names, states and exact markup. Layout rules. Themes that hold the choices in one place. Tests that check them. It's not a set of pages; it's the thing you make pages from.

That's the difference between buying a house and buying the building code, the materials and the plans that let you build the next house to match.


## Scenario one: "build my site like this URL"

Say you send an agent a link to a template you love and ask it to build your site in that style. Here's what it has to do before it writes a single line:

- **Sample the look from the rendered page.** Pull colors from screenshots or computed styles, estimate the type scale, eyeball the spacing. Every value it lands on is a measurement with an error bar.
- **Decide which values matter.** The template uses six grays. Are they a scale or an accident? The agent picks one interpretation and moves on.
- **Invent everything it can't see.** A screenshot has no hover state, no focus ring, no disabled button, no error message, no empty table, no loading state, no dark mode. The agent makes all of those up.
- **Invent every page the template doesn't have.** Your site needs an account page, a datatable, a checkout, a settings form. The template has a homepage and a pricing page. Everything else is improvised in the template's "spirit."
- **Do it all again next session.** Agents don't remember last week. Each new page starts from the same guesswork, and guesses drift: a gap goes from 24px to 28, the blue gets a little more purple, the second form doesn't look like the first.

The result can look great on day one. By page fifteen you have a site that resembles the template the way a cover band resembles the record.


## Scenario two: "here's the HTML and CSS"

Better: you bought the template and you hand the agent the source. Now it has real values instead of samples. It still doesn't have a system.

CSS is output, not intent. When we audited the old [rascode.dev](https://rascode.dev) stylesheet before building Firehorse, it had 481 hard-coded colors, 83 font sizes and more than 30 breakpoints. Nothing was broken. But an agent reading that file can't tell which `#1a1a1a` is the text token and which is a one-off someone typed at midnight. Most template CSS looks like that, because it was written to finish pages, not to define rules.

The class names describe the page, not the parts: `.hero-2-left`, `.section-dark-alt`, `.pricing-card-featured`. There's no `card` with variants, so to build a new card the agent copies the nearest section and edits it. Every copy is a fork. Breakpoints are tuned to the template's own layouts, so the moment you put a component somewhere new it breaks in a way nobody planned for. And there's no file that says when to use what: which button is primary, how many accents a page can carry, what a form error looks like.

So the agent does what any new hire would do with a codebase and no docs. It copies, adapts and improvises. You've given it better raw material, but it's still guessing.


## Scenario three: "use the design system"

Now give the agent Firehorse. One URL, [llms.txt](/llms.txt), and it reads:

- **[The rules](/agent/system.md)** in about 4K tokens: use only `fh-*` classes and `--fh-*` tokens, how sections and slots work, how many accents, how forms behave.
- **[The exact markup for every component](/agent/components.md)**, generated from the docs site so it can't drift from what you see.
- **[An ID for every component](/components/#c-index).** You don't say "the filled chip with the little icon." You say `CHP-1.3`, and there's exactly one thing that means.
- **Tokens instead of values.** It never picks a gray. It uses `--fh-color-text-muted`, and the [theme](/theming/) decides what that is.

Then the things the template never had stop being guesses. Hover, focus, disabled and error states are part of each component. Dark mode is built in. Text colors are [computed from the background](/foundations/#adaptive), so a card can be cream or navy and stay readable, and a test checks 432 text and background pairs against WCAG AA. Layout responds to [the container, not the screen](/layout/), so a component works in a sidebar or a wide column without a new breakpoint. And the account page, the [datatable](/data/), the [checkout](/commerce/) and the settings form aren't improvised in anyone's spirit: they're built from the same parts as the homepage.

Next session, the agent reads the same rules and builds the same way. Run the same prompt twice and you get the same page.


## Side by side

| | Template URL | Template HTML + CSS | Design system |
|---|---|---|---|
| What the agent gets | Pixels | Values | Rules, components, tokens |
| Colors, type, spacing | Sampled and estimated | Exact but unlabeled | Named tokens |
| States (hover, error, empty, dark) | Invented | Partly there | Built in |
| Pages the template lacks | Improvised | Copied and edited | Built from the same parts |
| Talking about UI | "The card near the top" | Class names tied to one page | An ID: `CAT-2.1` |
| Accessibility | Hoped for | Whatever shipped | Tested |
| Next session | Re-guessed | Re-copied | Same rules, same result |
| Changing the look | Touch every page | Find and replace | Edit one theme |


## Why it changes the outcome

**Consistency.** One source of truth means the fifteenth page matches the first. Not because someone checked, but because there was nothing to decide differently.

**Coverage.** Real products are mostly the parts templates don't show: forms, tables, errors, empty states, settings. A design system defines them up front, so the agent isn't inventing your product's least glamorous and most used screens.

**Fewer correction rounds.** Every guess an agent makes is a thing you might have to correct. Rules remove the guesses, so your feedback goes to content and ideas instead of "that's the wrong gray again."

**A shared language.** IDs give you, your team and your agent the same words. A number in a ticket six months ago still means the same component.

**Change without a rebuild.** In Firehorse, how round avatars are, whether cards are outlined or glass, whether buttons are pills: all of it lives in [one theme file](/theming/). Change the theme and the whole site follows, and the contrast tests run against the new look. With a template, a refresh means editing every page you've built since.

**You can check it.** Every Firehorse component carries an ID in its markup, so an audit can show you exactly what on a page isn't connected to the system. You can't audit a site against a screenshot.


## A word on "themes"

Firehorse has themes too, and the word is doing two different jobs. A marketplace theme is a finished site. A [Firehorse theme](/theming/) is one file of design decisions (type, color, radius, density and how each component family looks) sitting on top of the system. Mustang, Friesian and Akhal-Teke ship today, and you can build your own. The look can change; the rules underneath don't.


## Keep the template you love

None of this means templates are a mistake. For a one-page launch, a portfolio, or a quick look at what's possible, a great template is the fastest route there is. And they're some of the best design inspiration on the internet.

The point is what you hand your agent when the site has to grow. If you've found a template whose look you love, the move isn't to point an agent at it and hope. It's to turn that look into a system. That's what the [Firehorse Pro builder skill](/pro/#builder) does: it reads a site and turns its real colors, type and spacing into a Firehorse theme, so you keep the look and gain the rules. Pro is in [early access](/pro/).


## What a design system won't do

It won't make a weak idea strong, and it won't write your content. You can build a confusing page out of perfectly consistent parts. And a system only helps while it's kept true, so treat it like code: review it, version it, ship it.

But if you want the twentieth page an agent builds to look like it belongs next to the first, give it rules, not a reference.

🐎 [firehorse.rascode.dev](/)
⭐ [github.com/rascode/firehorse](https://github.com/rascode/firehorse)
