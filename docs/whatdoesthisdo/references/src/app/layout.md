## `src/app/layout.tsx`

### [RootLayout({ children })](../../../../../src/app/layout.tsx#L42)

Wraps every page of the portfolio in the `html` and `body` elements and hands the two font variables to the whole document.

- In: `children`, the page Next.js renders for the current route.
- Out: the document shell. The `head` starts with the inline theme script, so a stored scheme is applied before the first paint. The `html` element carries the font class names and `suppressHydrationWarning`, because that script sets `data-theme` on it before React hydrates. It also carries `data-scroll-behavior="smooth"`, which tells Next that the smooth scrolling in `globals.css` is intended, so the router turns it off during its own route transitions. The `body` is at least the viewport height.

## Constants

- [`dmSans`](../../../../../src/app/layout.tsx#L8): the DM Sans face loaded by next/font, exposed to CSS as `--font-dm-sans` and mapped to `font-sans` in `globals.css`.
- [`geistMono`](../../../../../src/app/layout.tsx#L13): the Geist Mono face loaded by next/font, exposed to CSS as `--font-geist-mono` and mapped to `font-mono`.
- [`metadata`](../../../../../src/app/layout.tsx#L18): the head tags every page starts from. `metadataBase` is `siteUrl`, so relative URLs become absolute. The title is `profile.pageTitle`, and child pages get the template `%s · Tony Cherian Jacob`. The description is `profile.metaDescription`. The canonical link is `/`. Open Graph has type `profile`, the same title and description, `siteName` and locale `en_US`. The Twitter card is `summary_large_image`, and robots may index and follow. A child segment that sets one of these fields replaces it whole.
- [`viewport`](../../../../../src/app/layout.tsx#L38): the browser theme colour, Tangerine `#FF5C1A`, so the mobile browser chrome matches the brand.
