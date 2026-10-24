## `src/components/Logo/Logo.tsx`

### [Logo({ size, className })](../../../../../../src/components/Logo/Logo.tsx#L8)

Draws the tj monogram as an inline SVG: the letters in the current text colour and the dot in Tangerine, so the mark follows light and dark schemes without separate files. The two paths come from `paths.ts`, which the Open Graph image draws too.

- In: `size`, the rendered width and height in pixels, `32` when omitted. `className`, extra classes for the `svg` element, none when omitted.
- Out: an `svg` with `role="img"` and the accessible name "tj mark", since the link around it carries the name "Home".
