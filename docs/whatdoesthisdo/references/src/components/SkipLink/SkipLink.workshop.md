## `src/components/SkipLink/SkipLink.workshop.tsx`

## Constants

- [`FRAME_STATE`](../../../../../../src/components/SkipLink/SkipLink.workshop.tsx#L6): maps the entry's state control to the `data-state` the scene wrapper carries: `focused` becomes `focus`, which fires the `focus-visible:` variant and the focus ring inside the wrapper; `hidden` sets no attribute.
- [`entry`](../../../../../../src/components/SkipLink/SkipLink.workshop.tsx#L11): the Skip link Workshop entry with one state select, `hidden` or `focused`, `focused` by default. The scene is the home page's top corner: the 44 px tj mark (36 on phone) and the name in Display type, hidden from assistive tech, placed 48 px into the frame's padding (24 on phone) so the mark sits 96 px from the top on desktop as on the page, and the pill lands in the margin above it, not on it. The frame is transformed, so the fixed pill is placed against the frame's top left corner, not the page's.
