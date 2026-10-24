## `src/hooks/useActiveSection.ts`

### [atPageBottom()](../../../../../src/hooks/useActiveSection.ts#L8)

Tells the scroll-spy whether the window is scrolled to the end of the page.

- Out: true when the bottom of the viewport is within 2 px of the document's full height. The last section is often too short to reach the spy band, so at the bottom it is made active by this check.

### [useActiveSection(ids)](../../../../../src/hooks/useActiveSection.ts#L15)

Follows which page section is in view, so the nav list can mark its link as the current one.

- In: `ids`, the element ids of the sections in page order, such as `["about", "experience", "highlights", "skills", "contact"]`.
- Out: the id of the latest section in `ids` order that crosses the spy band, a strip from 40 to 45 percent of the viewport height. At the bottom of the page it is the last id. Before any section is seen, and on the server, it is the first id. An empty `ids` gives `""`.
- When no section crosses the band, the previous answer stays. Ids with no element on the page are skipped.
- When none of the ids has an element on the page, nothing is set up and the answer stays the first id. So the Workshop, which has no sections, keeps the first item active even when its own page is scrolled to the bottom.
- Otherwise the observer, a scroll listener and a resize listener are set up once per list of ids, compared by value. The resize listener marks the last section when a resize, not a scroll, brings the page bottom into view. A caller that passes a new array with the same ids each render does not resubscribe. Both are removed on unmount.

## Constants

- [`SPY_BAND`](../../../../../src/hooks/useActiveSection.ts#L5): the observer's `rootMargin`, `-40% 0px -55% 0px`, which shrinks the viewport to the band a section must cross to become active.
- [`BOTTOM_SLACK`](../../../../../src/hooks/useActiveSection.ts#L6): the 2 px allowance in the bottom-of-page check, for fractional scroll positions that never reach the full height.
