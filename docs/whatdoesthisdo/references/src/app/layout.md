## `src/app/layout.tsx`

### [RootLayout({ children })](../../../../../src/app/layout.tsx#L24)

Wraps every page of the portfolio in the `html` and `body` elements and hands the two font variables to the whole document.

- In: `children`, the page Next.js renders for the current route.
- Out: the document shell. The `html` element carries the font class names and `suppressHydrationWarning`, because the theme script sets `data-theme` on it before React hydrates. The `body` is at least the viewport height.

## Constants

- [`dmSans`](../../../../../src/app/layout.tsx#L5): the DM Sans face loaded by next/font, exposed to CSS as `--font-dm-sans` and mapped to `font-sans` in `globals.css`.
- [`geistMono`](../../../../../src/app/layout.tsx#L10): the Geist Mono face loaded by next/font, exposed to CSS as `--font-geist-mono` and mapped to `font-mono`.
- [`metadata`](../../../../../src/app/layout.tsx#L15): the site title and description Next.js writes into the document head on every page.
- [`viewport`](../../../../../src/app/layout.tsx#L20): the browser theme colour, Tangerine `#FF5C1A`, so the mobile browser chrome matches the brand.
