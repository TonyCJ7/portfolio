## `src/components/Link/Link.tsx`

### [LinkProps](../../../../../../src/components/Link/Link.tsx#L5)

Describes the props of `Link`: `kind`, `href`, `external`, `className` and `children`.

- `kind`: `"prose"`, `"arrow"`, `"large"` or `"social"`, `"prose"` when omitted.
- `href`: where the link goes. It is required.
- `external`: whether the link opens in a new tab. `false` when omitted.
- `className`: extra classes appended after the kind's own. The experience row passes its whole-row hit area this way.
- `children`: the link text.

### [Link({ kind, href, external, className, children })](../../../../../../src/components/Link/Link.tsx#L27)

Renders a text link in one of the four styles the sections use: inline prose, an arrow link, a large link and a mono social link.

- In: the `LinkProps`. `kind` picks the style, `href` picks the element.
- Out: with an `href` that `isInternalRoute` accepts (it starts with `/` and its last path segment has no file extension), a `next/link` anchor, so internal pages route on the client. With any other `href` (`#section`, `mailto:`, a full URL, a static file such as `/Tony_CJ_Resume.pdf`), a plain `a`. With `external`, a plain `a` also gets `target="_blank"` and `rel="noopener noreferrer"`; a `next/link` anchor does not.
- Prose is medium weight text with a Tangerine underline that shows on hover and focus. Arrow is a title-size inline link that turns Accent Text on hover and focus. Its `↗` is an inline block 4 px after the text, and it moves 4 px right and 4 px up. An inline block is a line break point of its own, so it sits in a `nowrap` span after `WORD_JOINER`. It therefore stays after the last word when the title wraps and never starts a line alone. The link carries 4 px of padding above and after it, and the `↗` has a line height of 1. The focus ring then stays one rectangle with the moved `↗` inside it. Large is a headline-size underlined link that turns Accent Text, switches to the phone headline step on phone, and wraps unbroken strings. Social is a mono uppercase label in Text Muted that turns Text. Pressed looks like hover, so nothing styles `:active`. Prose and social fade their colour over 150 ms. Arrow and large change colour at once. Under reduced motion the arrow jumps to its hover position at once, and the prose and social fades stay.

## Constants

- [`KIND_CLASSES`](../../../../../../src/components/Link/Link.tsx#L13): the classes of each kind, keyed by `kind`.
- [`WORD_JOINER`](../../../../../../src/components/Link/Link.tsx#L25): U+2060, an invisible character that forbids a line break before the arrow.
