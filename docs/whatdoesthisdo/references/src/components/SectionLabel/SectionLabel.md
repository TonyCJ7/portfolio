## `src/components/SectionLabel/SectionLabel.tsx`

### [SectionLabelProps](../../../../../../src/components/SectionLabel/SectionLabel.tsx#L3)

Describes the props of `SectionLabel`: `id` and `children`.

- `id`: the id of the heading. The section that uses it points at this id with `aria-labelledby`.
- `children`: the label text.

### [SectionLabel({ id, children })](../../../../../../src/components/SectionLabel/SectionLabel.tsx#L8)

Renders the uppercase heading that opens a page section. On a phone it becomes a bar that sticks to the top of the scrolling area.

- In: the `SectionLabelProps`.
- Out: an `h2` with the given `id` that holds a mono uppercase Label with `size="heading"`: 14 px at 700 weight on desktop, one step above the 12 px nav and date labels. The label is Text on every layout (`tone="active"`), and on desktop the heading is plain.
- On a phone the heading sticks at the top, with Ground at 60% opacity, an 8 px backdrop blur and a 1 px bottom border. The label is 16 px at 700 weight there, from Label's own heading size. Its line is still shorter than the heading's line box, so the bar keeps its height and the 56 px hash-jump offset still clears it. The bar reaches the page gutter on both sides through `--gutter`.
- Used by: the page sections. Each `section` carries `aria-labelledby` with this `id`, plus `scroll-mt-24 phone:scroll-mt-14`, which sets the landing offset of a hash jump: 96 px on desktop, 56 px on a phone.
