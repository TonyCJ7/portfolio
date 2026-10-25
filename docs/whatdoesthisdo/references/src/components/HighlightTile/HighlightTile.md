## `src/components/HighlightTile/HighlightTile.tsx`

### [HighlightTileProps](../../../../../../src/components/HighlightTile/HighlightTile.tsx#L3)

Describes the props of `HighlightTile`: one `Highlight` from `src/content/highlights.ts` plus a Workshop flag.

- `figure`, `what`, `how`: the metric, what it measures and how it was reached.
- `lifted`: shows the tile in its hover look without a pointer. `false` when omitted. The site never passes it.

### [HighlightTile({ figure, what, how, lifted })](../../../../../../src/components/HighlightTile/HighlightTile.tsx#L7)

Renders one résumé metric of the highlights section as an `li`.

- In: `figure`, the number shown in the Stat type step. `what`, one Title line under it. `how`, one Small line in Text 2. `lifted`, true only from the Workshop's Lifted tile control.
- Out: a square `li` with 24 px padding. Square corners keep the grid's hairlines 1 px wide where they cross. It is not a link and takes no focus.
- On hover the tile fills with Surface Lift, a step below paper in light, gains the lift shadow over 150 ms, and rises to `z-index` 10 so the next tiles do not cover its shadow. The change is color and shadow only, so reduced motion keeps it.
- With `lifted`, the `li` carries `data-state="hover"`, which fires the same hover look through the `hover` variant in `globals.css`.
