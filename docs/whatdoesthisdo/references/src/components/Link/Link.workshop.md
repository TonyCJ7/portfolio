## `src/components/Link/Link.workshop.tsx`

## Constants

- [`DEFAULT_TEXT`](../../../../../../src/components/Link/Link.workshop.tsx#L9): the link text each kind shows when the Text control is empty.
- [`HREF`](../../../../../../src/components/Link/Link.workshop.tsx#L18): the `href` each kind shows in the scene and in the usage line.
- [`entry`](../../../../../../src/components/Link/Link.workshop.tsx#L27): the Link Workshop entry: a kind select (six kinds, `github` among them, shown as WhatDoesThisDo linking to its repository), a state select (rest, hover and focus; pressed looks like hover, so it is not offered) and a text control of up to 40 characters. The prose kind renders inside a short sample sentence; the other kinds render alone. Prose and social links get `external`, so the usage line shows it.
