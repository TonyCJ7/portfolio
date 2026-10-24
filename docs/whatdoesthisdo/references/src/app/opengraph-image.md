## `src/app/opengraph-image.tsx`

### [OpengraphImage()](../../../../../src/app/opengraph-image.tsx#L20)

Draws the 1200 by 630 PNG that link previews show for every page of the site, served at `/opengraph-image` and named in the `og:image` and `twitter:image` tags.

- Out: an `ImageResponse` on the Ink ground `#16161A`. The tj mark sits at the top left, 160 px, with Paper letters and a Tangerine dot. Tony's name sits at the bottom left in DM Sans Bold 72 px, Paper. Below it a 12 px Tangerine dot comes before the role, 32 px, in `#ADADB2`.
- The colours are literals because `ImageResponse` has no CSS variables. The only font file is DM Sans Bold, so the role is drawn in Bold too.
- The build renders it once and the server serves that file.

## Constants

- [`alt`](../../../../../src/app/opengraph-image.tsx#L7): the image's alt text, "Tony Cherian Jacob, Senior Frontend Engineer", built from `profile`; Next.js writes it as `og:image:alt` and `twitter:image:alt`.
- [`size`](../../../../../src/app/opengraph-image.tsx#L9): the image size, 1200 by 630, the shape link previews expect; written as `og:image:width` and `og:image:height`.
- [`contentType`](../../../../../src/app/opengraph-image.tsx#L11): `image/png`, written as `og:image:type`.
- [`dmSansBold`](../../../../../src/app/opengraph-image.tsx#L13): the bytes of `src/assets/fonts/DMSans-Bold.ttf`, the static DM Sans Bold from github.com/googlefonts/dm-fonts under the OFL licence in the same folder, read once when the module loads.
- [`unbrokenName`](../../../../../src/app/opengraph-image.tsx#L18): Tony's name with its spaces turned into non-breaking spaces. The image renderer widens each word by the kerning inside it, so "Tony" had a gap 8 px wider than the next one. One unbroken run moves that slack to the end of the name.
