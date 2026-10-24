## `src/sections/Highlights/Highlights.tsx`

### [Highlights()](../../../../../../src/sections/Highlights/Highlights.tsx#L6)

Renders the Highlights section of the home page's right column: the label and the grid of highlight tiles.

- Out: a `section` with the id `highlights` that opens with a SectionLabel. The label text comes from `sectionLabel("highlights")`, so it matches the nav item word for word.
- The section's `aria-labelledby` points at the label's id, `highlights-label`. Its accessible name is the heading text, "Highlights".
- The tiles come from `highlights` in `src/content/highlights.ts`. They sit in a HighlightGrid 32 px below the label: two columns on desktop, one on a phone.
- Hovering a tile with a mouse lifts it to a z-index of 10, the same as the sticky label bar on a phone. The grid is `isolate`, so the lifted tile stacks only among the tiles and the bar stays on top.
- Nothing between the section and the grid may get a z-index of 10 or more. A wrapper at 10 still wins over the bar, because it comes later in the page.
- `scroll-mt-24 phone:scroll-mt-14` sets the landing offset of a hash jump to `#highlights`: 96 px below the top on desktop, 56 px on a phone.
- It sets no background, gutter or overflow. The home page layout supplies the column and the `--gutter` the sticky bar reaches into.
