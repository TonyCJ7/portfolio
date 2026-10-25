## `src/components/Colophon/Colophon.tsx`

### [Colophon()](../../../../../../src/components/Colophon/Colophon.tsx#L4)

Renders the small footer under the home page's right column: one sentence on how the site is built and a link to the Workshop.

- Out: a `footer` 48 px below the sections, capped at the measure width, in the small type step and Text Muted. Desktop shows the long sentence from `colophon.long`. Phones show the shorter `colophon.short`. The other sentence is `display: none`, so a screen reader hears only one.
- The link sits 8 px below the sentence. It is a small arrow link to `/workshop` with the text `colophon.workshopLink`, and `/workshop` redirects to the Tokens entry.
- The link is 14 px like the footer, at medium weight in Text. It reads as a link beside the muted sentence without growing past it. Hover and focus turn it Tangerine Text, as on every arrow link.
