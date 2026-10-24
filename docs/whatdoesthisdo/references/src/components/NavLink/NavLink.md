## `src/components/NavLink/NavLink.tsx`

### [NavLinkProps](../../../../../../src/components/NavLink/NavLink.tsx#L3)

Describes the props of `NavLink`: `href`, `active` and `children`.

- `href`: the section hash the link jumps to, for example `#experience`. It is required.
- `active`: whether this link is the current section. `false` when omitted.
- `children`: the label text.

### [NavLink({ href, active, children })](../../../../../../src/components/NavLink/NavLink.tsx#L9)

Renders one link of the sticky section navigation: a short line and a mono uppercase label.

- In: the `NavLinkProps`. `href` is a hash, so the link is a plain `a`, not a `next/link`.
- Out: an `a` with `aria-current="true"` when `active` is true, and no `aria-current` otherwise.
- The label is Text Muted at rest and turns Text on hover, on focus and when active. The 1 px line follows the label colour. It grows from 32 px to 64 px in the same three cases, over 150 ms. Under reduced motion the line jumps to its new width at once; the colour fades stay.
