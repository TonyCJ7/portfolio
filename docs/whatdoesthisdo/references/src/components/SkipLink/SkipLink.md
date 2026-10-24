## `src/components/SkipLink/SkipLink.tsx`

### [SkipLinkProps](../../../../../../src/components/SkipLink/SkipLink.tsx#L1)

Describes the props of `SkipLink`: `href`.

- `href`: the hash of the main landmark the link jumps to. `#main` when omitted; the Workshop layout passes `#workshop-main`.

### [SkipLink({ href })](../../../../../../src/components/SkipLink/SkipLink.tsx#L5)

Renders the "Skip to content" link, the first focusable element on a page, so a keyboard user can jump past the header.

- In: the `SkipLinkProps`. `href` is a hash, so the link is a plain `a`, not a `next/link`.
- Out: a fixed pill 16 px from the top left corner, Surface fill, Text colour, Title type, the Lift shadow and a full radius. At rest it is moved 96 px up, above the viewport. On keyboard focus it moves to its place at once; there is no transition.
- It is never `display: none` or `visibility: hidden`, so it stays in the tab order and in the accessibility tree.
- Used by: the Workshop layout, before the header, pointing at `main#workshop-main`. The site page mounts it first in the body with `main#main`. The target `main` carries `tabIndex={-1}`, so focus lands on it when the link is followed.
