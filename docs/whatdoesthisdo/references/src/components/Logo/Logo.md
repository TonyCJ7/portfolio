## `src/components/Logo/Logo.tsx`

### [Logo({ size, className })](../../../../../../src/components/Logo/Logo.tsx#L11)

Draws the tj monogram as an inline SVG: the letters in the current text colour and the dot in Tangerine, so the mark follows light and dark schemes without separate files.

- In: `size`, the rendered width and height in pixels, `32` when omitted. `className`, extra classes for the `svg` element, none when omitted.
- Out: an `svg` with `role="img"` and the accessible name "tj mark", since the link around it carries the name "Home".

## Constants

- [`GLYPH`](../../../../../../src/components/Logo/Logo.tsx#L6): the SVG path of the t and the j on the 256 unit grid, from the final logo master `design/logo/final/tj-symbol-color.svg`.
- [`DOT`](../../../../../../src/components/Logo/Logo.tsx#L8): the SVG path of the j's dot, the only part of the mark drawn in the accent colour.
