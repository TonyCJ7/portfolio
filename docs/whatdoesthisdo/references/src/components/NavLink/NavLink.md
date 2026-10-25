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
- The label is an interactive Label: Text Muted at rest, Text on hover, on focus and when active, from Label's own `interactive` mode. A wrapping span carries the slide, so the link never restyles the Label. The 1 px line follows the label colour. In the same three cases it grows from 32 px to 64 px over 150 ms, and the label slides 32 px right with it. The line is 64 px wide and scaled to half from its left edge at rest, and the label sits 32 px left of its place, so the movement uses only `scale` and `translate`, and the link box always holds the moved label inside its focus ring. Under reduced motion the line and the label jump at once; the colour fades stay.
