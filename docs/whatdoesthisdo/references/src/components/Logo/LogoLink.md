## `src/components/Logo/LogoLink.tsx`

### [LogoLinkProps](../../../../../../src/components/Logo/LogoLink.tsx#L4)

The props of `LogoLink`: `size` is 44, 36 or 28 pixels, `href` is the link target, and `className` adds classes to the link. All three are optional.

### [LogoLink({ size, href, className })](../../../../../../src/components/Logo/LogoLink.tsx#L10)

Wraps the tj mark in a link home, for the Workshop header and the site header.

- In: `size`, the mark's width and height in pixels, `44` when omitted; `28` is the Workshop header. `href`, the link target, `"/"` when omitted. `className`, extra classes appended to the anchor's own. The Intro column passes `phone:[&_svg]:size-9` so the mark shrinks to 36 px on phones.
- Out: a `next/link` anchor named "Home" with rounded corners, so the focus ring follows them. On hover the mark rotates 0, -6, 0 degrees once over 833 ms around a point 60% down the mark. Under reduced motion it does not move.
