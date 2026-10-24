## `src/components/Label/Label.tsx`

### [Label(props)](../../../../../../src/components/Label/Label.tsx#L23)

Renders the small mono caption the site uses for section names, dates, places and nav items: Geist Mono, uppercase through CSS, letter-spaced.

- In: `tone`, `muted` (default, the grey), `active` (the text colour) or `accent` (Tangerine Text). `size`, `12` (default) or `11`, the smaller place line. `as`, `span` (default), `time` with a required `dateTime`, or `a` with a required `href`. `className`, extra classes. `children`, the caption text, typed in sentence case.
- Out: the chosen element with the label type step and tone classes. The link form adds a 2 px radius so the focus ring follows it.

## Constants

- [`TONE_CLASS`](../../../../../../src/components/Label/Label.tsx#L17): the text colour class for each tone.
