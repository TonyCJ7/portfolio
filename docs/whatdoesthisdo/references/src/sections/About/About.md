## `src/sections/About/About.tsx`

### [About()](../../../../../../src/sections/About/About.tsx#L5)

Renders the About section, the first section of the home page's right column.

- Out: a `section` with the id `about` that opens with a SectionLabel. The label text comes from `sectionLabel("about")`, so it matches the nav item word for word.
- The section's `aria-labelledby` points at the label's id, `about-label`. Its accessible name is the heading text, "About".
- The three paragraphs come from `about` in `src/content/about.ts`. They are body type in Text 2, capped at the measure width (36rem) and 16 px apart.
- The paragraphs start 24 px below the label on desktop and 16 px below it on a phone.
- `scroll-mt-24 phone:scroll-mt-14` keeps a hash jump to `#about` clear of the sticky phone bar.
- It sets no background, gutter or overflow. The home page layout supplies the column and the `--gutter` the sticky bar reaches into.
