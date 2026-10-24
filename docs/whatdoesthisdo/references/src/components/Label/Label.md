## `src/components/Label/Label.tsx`

### [LabelBaseProps](../../../../../../src/components/Label/Label.tsx#L3)

Describes the props every form of `Label` takes: `tone`, `size`, `className` and `children`.

- `tone`: `"muted"`, `"active"` or `"accent"`, `"muted"` when omitted.
- `size`: `12` or `11`, `12` when omitted.
- `className`: extra classes appended to the label's own.
- `children`: the caption text.

### [LabelProps](../../../../../../src/components/Label/Label.tsx#L10)

Describes the props of `Label`: the `LabelBaseProps` plus the element choice `as`.

- `as`: `"span"` (also when omitted), `"time"`, which requires `dateTime`, or `"a"`, which requires `href`. The union ties each required prop to its element, so a `time` without `dateTime` does not type-check.

### [Label(props)](../../../../../../src/components/Label/Label.tsx#L23)

Renders the small mono caption the site uses for section names, dates, places and nav items: Geist Mono, uppercase through CSS, letter-spaced.

- In: `tone`, `muted` (default, the grey), `active` (the text colour) or `accent` (Tangerine Text). `size`, `12` (default) or `11`, the smaller place line. `as`, `span` (default), `time` with a required `dateTime`, or `a` with a required `href`. `className`, extra classes. `children`, the caption text, typed in sentence case.
- Out: the chosen element with the label type step and tone classes. The link form adds a 2 px radius so the focus ring follows it.

## Constants

- [`TONE_CLASS`](../../../../../../src/components/Label/Label.tsx#L17): the text colour class for each tone.
