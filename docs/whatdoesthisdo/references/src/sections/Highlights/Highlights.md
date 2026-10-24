## `src/sections/Highlights/Highlights.tsx`

### [Highlights()](../../../../../../src/sections/Highlights/Highlights.tsx#L6)

Renders the Highlights section of the home page's right column: the label and the grid of highlight tiles.

- Out: a `section` with the id `highlights` that opens with a SectionLabel. The label text comes from `sectionLabel("highlights")`, so it matches the nav item word for word.
- The section's `aria-labelledby` points at the label's id, `highlights-label`. Its accessible name is the heading text, "Highlights".
- The tiles come from `highlights` in `src/content/highlights.ts`. They sit in a HighlightGrid 32 px below the label: two columns on desktop, one on a phone.
- Hovering a tile with a mouse lifts it above its neighbours. The grid is `isolate`, so a lifted tile never paints over the sticky label bar on a phone.
- `scroll-mt-24 phone:scroll-mt-14` sets the landing offset of a hash jump to `#highlights`: 96 px below the top on desktop, 56 px on a phone.
- It sets no background, gutter or overflow. The home page layout supplies the column and the `--gutter` the sticky bar reaches into.
