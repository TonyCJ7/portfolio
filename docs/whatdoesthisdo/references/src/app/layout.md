## `src/app/layout.tsx`

### [RootLayout({ children })](../../../../../src/app/layout.tsx#L26)

Wraps every page of the portfolio in the `html` and `body` elements and hands the two font variables to the whole document.

- In: `children`, the page Next.js renders for the current route.
- Out: the document shell. The `head` starts with the inline theme script, so a stored scheme and its browser bar colour are applied before the first paint. There is no `viewport.themeColor`: the script creates the `theme-color` meta itself. The `html` element carries the font class names and `suppressHydrationWarning`, because that script sets `data-theme` on it before React hydrates. It also carries `data-scroll-behavior="smooth"`, which tells Next that the smooth scrolling in `globals.css` is intended, so the router turns it off during its own route transitions. The `body` is at least the viewport height.

## Constants

- [`dmSans`](../../../../../src/app/layout.tsx#L9): the DM Sans face loaded by next/font, exposed to CSS as `--font-dm-sans` and mapped to `font-sans` in `globals.css`.
- [`geistMono`](../../../../../src/app/layout.tsx#L14): the Geist Mono face loaded by next/font, exposed to CSS as `--font-geist-mono` and mapped to `font-mono`.
- [`metadata`](../../../../../src/app/layout.tsx#L19): the head tags every page starts from. `metadataBase` is `siteUrl`, so relative URLs become absolute. The title is `profile.pageTitle`, and child pages get `titleTemplate`, `%s · Tony Cherian Jacob`. The description is `profile.metaDescription`, and the Twitter card is `summary_large_image`. The canonical link and the Open Graph block are left to each page, so no route inherits the home page's URL. Robots fields are left out, so pages are indexable by default and Next.js's `noindex` on a 404 stands alone.
