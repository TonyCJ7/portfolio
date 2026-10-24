## `src/components/Link/Link.tsx`

### [LinkProps](../../../../../../src/components/Link/Link.tsx#L4)

Describes the props of `Link`: `kind`, `href`, `external` and `children`.

- `kind`: `"prose"`, `"arrow"`, `"large"` or `"social"`, `"prose"` when omitted.
- `href`: where the link goes. It is required.
- `external`: whether the link opens in a new tab. `false` when omitted.
- `children`: the link text.

### [Link({ kind, href, external, children })](../../../../../../src/components/Link/Link.tsx#L22)

Renders a text link in one of the four styles the sections use: inline prose, an arrow link, a large link and a mono social link.

- In: the `LinkProps`. `kind` picks the style, `href` picks the element.
- Out: with an `href` that starts with `/`, a `next/link` anchor, so internal pages route on the client. With any other `href` (`#section`, `mailto:`, a full URL), a plain `a`. With `external`, a plain `a` also gets `target="_blank"` and `rel="noopener noreferrer"`; a `next/link` anchor does not.
- Prose is medium weight text with a Tangerine underline that shows on hover and focus. Arrow is a title-size link that turns Accent Text on hover and focus, and its `↗` moves 4 px right and 4 px up. Large is a headline-size underlined link that turns Accent Text, switches to the phone headline step on phone, and wraps unbroken strings. Social is a mono uppercase label in Text Muted that turns Text. Pressed looks like hover, so nothing styles `:active`. Under reduced motion the arrow does not move.

## Constants

- [`KIND_CLASSES`](../../../../../../src/components/Link/Link.tsx#L11): the classes of each kind, keyed by `kind`.
