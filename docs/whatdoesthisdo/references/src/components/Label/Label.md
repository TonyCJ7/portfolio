## `src/components/Label/Label.tsx`

### [LabelBaseProps](../../../../../../src/components/Label/Label.tsx#L3)

Describes the props every form of `Label` takes: `tone`, `size`, `interactive`, `className` and `children`.

- `tone`: `"muted"`, `"active"` or `"accent"`, `"muted"` when omitted.
- `size`: `"heading"`, `12` or `11`, `12` when omitted.
- `interactive`: when true, the label turns Text while its nearest `group` is hovered, focused, pressed or `aria-current`, fading over 150 ms. `false` when omitted.
- `className`: extra classes appended to the label's own, for placement and display only (a block label in a grid, the theme toggle's scheme word).
- `children`: the caption text.

### [LabelProps](../../../../../../src/components/Label/Label.tsx#L11)

Describes the props of `Label`: the `LabelBaseProps` plus the element choice `as`.

- `as`: `"span"` (also when omitted), `"time"`, which requires `dateTime`, or `"a"`, which requires `href`. The union ties each required prop to its element, so a `time` without `dateTime` does not type-check.

### [Label(props)](../../../../../../src/components/Label/Label.tsx#L33)

Renders the small mono caption the site uses for section names, dates, places and nav items: Geist Mono, uppercase through CSS, letter-spaced.

- In: `tone`, `muted` (default, the grey), `active` (the text colour) or `accent` (Tangerine Text). `size`, `12` (default), `"heading"`, the section label at 700 weight, 14 px on desktop and 16 px on phone, or `11`, the smaller place line. `as`, `span` (default), `time` with a required `dateTime`, or `a` with a required `href`. `className`, extra classes. `children`, the caption text, typed in sentence case.
- Out: the chosen element with the label type step and tone classes. The link form adds a 2 px radius so the focus ring follows it.

## Constants

- [`TONE_CLASS`](../../../../../../src/components/Label/Label.tsx#L18): the text colour class for each tone.
- [`SIZE_CLASS`](../../../../../../src/components/Label/Label.tsx#L24): the type step classes for each size: `text-label-lg` with `phone:text-label-xl` for `heading`, `text-label` for 12, `text-label-sm` for 11. The heading's phone step lives here, so a section label never restyles the Label from outside.
- [`INTERACTIVE_CLASS`](../../../../../../src/components/Label/Label.tsx#L30): the classes `interactive` adds: a 150 ms colour transition and Text on the group's hover, focus-visible, active and `aria-current="true"`. The nav link and the theme toggle use it instead of restyling the label themselves.
