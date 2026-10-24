## `src/components/HighlightTile/HighlightGrid.tsx`

### [HighlightGridProps](../../../../../../src/components/HighlightTile/HighlightGrid.tsx#L4)

Describes the props of `HighlightGrid`.

- `items`: the highlights to show, in display order.
- `liftedIndex`: the position of the tile the Workshop shows lifted. Omitted on the site.

### [HighlightGrid({ items, liftedIndex })](../../../../../../src/components/HighlightTile/HighlightGrid.tsx#L9)

Renders the highlights section's list, one `HighlightTile` per highlight.

- In: `items`, the highlights. `liftedIndex`, the zero-based index whose tile gets `lifted`, from the Workshop only.
- Out: a `ul` grid of two columns, one column on phone. The list paints the Border color and leaves a 1 px gap between tiles. Each tile paints Ground, so the gaps read as 1 px hairlines.
- The list is `isolate`, so a lifted tile's `z-index` stacks only among the tiles. A sticky section bar outside the list stays on top of it.
