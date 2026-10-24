## `src/components/SkipLink/SkipLink.workshop.tsx`

## Constants

- [`FRAME_STATE`](../../../../../../src/components/SkipLink/SkipLink.workshop.tsx#L6): maps the entry's state control to the `data-state` the scene wrapper carries: `focused` becomes `focus`, which fires the `focus-visible:` variant and the focus ring inside the wrapper; `hidden` sets no attribute.
- [`HEADER_WORDS`](../../../../../../src/components/SkipLink/SkipLink.workshop.tsx#L11): three muted labels that stand in for a page header, so the pill can be seen sitting over it.
- [`entry`](../../../../../../src/components/SkipLink/SkipLink.workshop.tsx#L13): the Skip link Workshop entry with one state select, `hidden` or `focused`, `focused` by default. The scene is a 240 px tall box with a fake header row, the tj mark and the header words, and the link inside it. The frame is transformed, so the fixed pill is placed against the frame's top left corner, not the page's.
