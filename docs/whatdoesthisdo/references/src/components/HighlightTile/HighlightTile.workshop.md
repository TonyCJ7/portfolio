## `src/components/HighlightTile/HighlightTile.workshop.tsx`

### [liftedIndex(hovered)](../../../../../../src/components/HighlightTile/HighlightTile.workshop.tsx#L5)

Turns the Lifted tile control into the grid's `liftedIndex`.

- In: `hovered`, the control's value: `"none"` or a tile number from `"1"` to `"4"`.
- Out: undefined for `"none"`, so no tile lifts. Otherwise the zero-based index, one less than the tile number.

## Constants

- [`entry`](../../../../../../src/components/HighlightTile/HighlightTile.workshop.tsx#L13): the Highlight tile Workshop entry: Lifted tile and Tiles controls, rendered as a `HighlightGrid` of the first four or two highlights, not centered in the frame. It uses no frame-level state; the lifted tile carries `data-state="hover"` itself.
