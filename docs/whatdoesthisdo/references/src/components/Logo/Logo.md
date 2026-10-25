## `src/components/Logo/Logo.tsx`

### [LogoProps](../../../../../../src/components/Logo/Logo.tsx#L3)

Describes the props of `Logo`.

- `size`: the width and height in pixels, `32` when omitted, or `"header"`, the page header's mark: 44 px, 36 px on phones.
- `className`: extra classes for the `svg` element.

### [Logo({ size, className })](../../../../../../src/components/Logo/Logo.tsx#L11)

Draws the tj monogram as an inline SVG: the letters in the current text colour and the dot in Tangerine, so the mark follows light and dark schemes without separate files. The two paths come from `paths.ts`, which the Open Graph image draws too.

- In: `size`, the rendered width and height in pixels, `32` when omitted. `"header"` renders at 44 px and adds `phone:size-9`, so the header mark is 36 px on phones without its caller resizing it. `className`, extra classes for the `svg` element, none when omitted.
- Out: an `svg` with `role="img"` and the accessible name "tj mark", since the link around it carries the name "Home".

## Constants

- [`HEADER_SIZE`](../../../../../../src/components/Logo/Logo.tsx#L8): 44, the header mark's width and height in pixels on desktop.
- [`HEADER_PHONE_CLASS`](../../../../../../src/components/Logo/Logo.tsx#L9): `phone:size-9`, which shrinks the header mark to 36 px on phones.
