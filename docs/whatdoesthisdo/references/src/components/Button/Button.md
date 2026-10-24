## `src/components/Button/Button.tsx`

### [ButtonProps](../../../../../../src/components/Button/Button.tsx#L4)

Describes the props of `Button`: `variant`, `arrow` and `children`, plus either `href` or `onClick`.

- `variant`: `"primary"` or `"ghost"`, `"primary"` when omitted.
- `arrow`: whether the `→` shows after the label. It is on for primary and off for ghost when omitted.
- `children`: the label.
- `href`: makes the button a link. A button with `href` cannot take `onClick`.
- `onClick`: the click handler of a button without `href`.

### [Button({ variant, href, onClick, arrow, children })](../../../../../../src/components/Button/Button.tsx#L22)

Renders the pill button of the hero and the contact section, as a button or as a link.

- In: the `ButtonProps`. `href` decides the element; the other props style it.
- Out: without `href`, a `button` of type `button` that calls `onClick`. With an `href` that starts with `/`, a `next/link` anchor, so internal pages route on the client. With any other `href` (`#section`, `mailto:`, a full URL), a plain `a`.
- The pill is at least 44 px high. Primary is ink text on a tangerine fill and turns to the Accent Hover fill, #FF8A5C in both schemes, on hover and focus. Ghost has a Line border and fills with Surface on hover and focus, and with Surface Hover when pressed. Pressing scales the pill to 0.98. The arrow slides 4 px right on hover. Under reduced motion the scale does not run and the arrow does not move.

## Constants

- [`BASE_CLASSES`](../../../../../../src/components/Button/Button.tsx#L12): the classes both variants share: size, shape, type step, the 150 ms transition and the pressed scale.
- [`VARIANT_CLASSES`](../../../../../../src/components/Button/Button.tsx#L15): the colour classes of each variant, keyed by `variant`.
