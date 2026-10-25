## `src/components/Link/Link.tsx`

### [LinkProps](../../../../../../src/components/Link/Link.tsx#L5)

Describes the props of `Link`: `kind`, `href`, `external`, `className` and `children`.

- `kind`: `"prose"`, `"arrow"`, `"arrow-small"`, `"github"`, `"large"` or `"social"`, `"prose"` when omitted.
- `href`: where the link goes. It is required.
- `external`: whether the link opens in a new tab. `false` when omitted.
- `className`: extra classes appended after the kind's own. The experience row passes its whole-row hit area this way.
- `children`: the link text.

### [Link({ kind, href, external, className, children })](../../../../../../src/components/Link/Link.tsx#L34)

Renders a text link in one of the five styles the sections use: inline prose, an arrow link, a small arrow link, a large link and a mono social link.

- In: the `LinkProps`. `kind` picks the style, `href` picks the element.
- Out: with an `href` that `isInternalRoute` accepts (it starts with `/` and its last path segment has no file extension), a `next/link` anchor, so internal pages route on the client. With any other `href` (`#section`, `mailto:`, a full URL, a static file such as `/Tony_CJ_Resume.pdf`), a plain `a`. With `external`, a plain `a` also gets `target="_blank"` and `rel="noopener noreferrer"`; a `next/link` anchor does not.
- Prose is medium weight text with a Tangerine underline that shows on hover and focus. Arrow is a title-size inline link that turns Accent Text on hover and focus. Its `↗` is an inline block 4 px after the text, and it moves 4 px right and 4 px up. An inline block is a line break point of its own, so it sits in a `nowrap` span after `WORD_JOINER`. It therefore stays after the last word when the title wraps and never starts a line alone. The link carries 4 px of padding above and after it, and the `↗` has a line height of 1. The focus ring then stays one rectangle with the moved `↗` inside it. Arrow small is the same link in the small type step at medium weight, for the colophon's 14 px footer. It keeps the `↗`, the padding and the colours of the arrow kind. GitHub has the arrow kind's type, padding and colours, with the 16 px GitHub mark 8 px after the text in place of the `↗`, joined to the last word the same way; the mark does not move. A visually hidden " on GitHub" completes the accessible name, and the mark is hidden. The personal project rows use it. Large is a headline-size underlined link that turns Accent Text, and switches to the phone headline step on phone. Prose, both arrow kinds and large wrap an unbroken string anywhere, so a long word never pushes past the column. Social is a mono uppercase label in Text Muted that turns Text. Pressed looks like hover, so nothing styles `:active`. Prose and social fade their colour over 150 ms. Both arrow kinds and large change colour at once. Under reduced motion the arrow jumps to its hover position at once, and the prose and social fades stay.

## Constants

- [`ARROW_CLASSES`](../../../../../../src/components/Link/Link.tsx#L13): the classes both arrow kinds share: the `group` that moves the `↗`, the 4 px padding above and after, Text at rest, wrapping anywhere and Accent Text on hover and focus. Each arrow kind adds only its type step.
- [`KIND_CLASSES`](../../../../../../src/components/Link/Link.tsx#L16): the classes of each kind, keyed by `kind`.
- [`WORD_JOINER`](../../../../../../src/components/Link/Link.tsx#L29): U+2060, an invisible character that forbids a line break before the arrow of both arrow kinds.
- [`GITHUB_MARK`](../../../../../../src/components/Link/Link.tsx#L31): the path of GitHub's mark (Octicons `mark-github`, MIT) on a 16 by 16 grid, drawn in `currentColor` by the `github` kind.
