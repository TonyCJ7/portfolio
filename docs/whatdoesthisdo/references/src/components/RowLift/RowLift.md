## `src/components/RowLift/RowLift.tsx`

### [RowLift()](../../../../../../src/components/RowLift/RowLift.tsx#L1)

Renders the hover and focus layer behind a list row, shared by the experience and project rows.

- Out: an `aria-hidden` `span`, absolutely placed 16 px above and below the row and 24 px past each side (16 px on phone), behind the row's content (`-z-10`) with a 6 px radius.
- It fills with Surface Lift and the lift shadow over 150 ms while the row (the nearest `group`) is hovered, or holds keyboard focus inside it (`group-focus-visible-within`, never after a mouse click).
- The row must be `group relative isolate`, so the layer paints inside the row, above any background behind the list.
