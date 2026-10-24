## `src/components/NavList/NavList.tsx`

### [NavListProps](../../../../../../src/components/NavList/NavList.tsx#L7)

Describes the props of `NavList`.

- `sections`: the page's sections in order, each an `id` and a `label`. The site passes `nav`.
- `activeId`: the section to mark active. Omitted on the site, so the scroll-spy decides. The Workshop always sets it.
- `forced`: the item the Workshop shows in a hover or focus state, as a section `id` and a `state`. Omitted on the site.

### [NavList({ sections, activeId, forced })](../../../../../../src/components/NavList/NavList.tsx#L13)

Renders the in-page navigation of the sticky left column, one `NavLink` per section, with the section in view marked.

- In: `sections`, the sections to link, in page order. `activeId`, a section id that overrides the scroll-spy. `forced`, from the Workshop only, puts `data-state` on that one `li`, so only its link shows the hover or focus look and the focus ring.
- Out: a `nav` named `In this page` holding a `ul`. Each `li` holds a `NavLink` to `#<id>`. The active one carries `aria-current="true"` and the 64 px line.
- The active section is `activeId` when it is set. Otherwise it is what `useActiveSection` reports for the section ids.
- The whole `nav` is hidden on phones, where each section label becomes a sticky bar instead.
