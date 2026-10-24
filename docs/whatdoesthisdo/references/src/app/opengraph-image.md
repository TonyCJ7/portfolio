## `src/app/opengraph-image.tsx`

### [OpengraphImage()](../../../../../src/app/opengraph-image.tsx#L26)

Draws the 1200 by 630 PNG that link previews show for every page of the site, served at `/opengraph-image` and named in the `og:image` and `twitter:image` tags.

- Out: an `ImageResponse` on the Ink ground `#16161A` with 80 px padding. The tj mark sits at the top left, 160 px, with Paper letters and a Tangerine dot. It is shifted left by `markInset`, so its leftmost ink lines up with the name and the role dot at x 80. Tony's name sits at the bottom left in DM Sans Bold 72 px, Paper. Below it a 12 px Tangerine dot comes before the role, 32 px, in `#ADADB2`.
- The colours are literals because `ImageResponse` has no CSS variables. The only font file is DM Sans Bold, so the role is drawn in Bold too.
- The build renders it once and the server serves that file.

## Constants

- [`alt`](../../../../../src/app/opengraph-image.tsx#L8): the image's alt text from `ogImage`, "Tony Cherian Jacob, Senior Frontend Engineer"; Next.js writes it as `og:image:alt` and `twitter:image:alt`.
- [`size`](../../../../../src/app/opengraph-image.tsx#L10): the image size from `ogImage`, 1200 by 630, the shape link previews expect; written as `og:image:width` and `og:image:height`.
- [`contentType`](../../../../../src/app/opengraph-image.tsx#L12): `image/png` from `ogImage`, written as `og:image:type`.
- [`dmSansBold`](../../../../../src/app/opengraph-image.tsx#L14): the bytes of `src/assets/fonts/DMSans-Bold.ttf`, read once when the module loads. The file is the static DM Sans Bold from `https://raw.githubusercontent.com/googlefonts/dm-fonts/4412393b7d2de9fe7a92064c2dce9b5af5d7fd26/Sans/fonts/ttf/DMSans-Bold.ttf`, under the OFL licence in `OFL.txt` beside it, from the same commit.
- [`markSize`](../../../../../src/app/opengraph-image.tsx#L18): the mark's width and height in the image, 160 px.
- [`markInset`](../../../../../src/app/opengraph-image.tsx#L21): how far the mark's leftmost ink, the j's lower cap, sits inside its box: 46.4 of 256 grid units, 29 px at 160 px. The svg moves left by this much.
- [`unbrokenName`](../../../../../src/app/opengraph-image.tsx#L24): Tony's name with its spaces turned into non-breaking spaces. The image renderer widens each word by the kerning inside it, so "Tony" had a gap 8 px wider than the next one. One unbroken run moves that slack to the end of the name.
