## `src/app/layout.tsx`

### [RootLayout({ children })](../../../../../src/app/layout.tsx#L24)

Wraps every page of the portfolio in the `html` and `body` elements and hands the two Geist font variables to the whole document.

- In: `children`, the page Next.js renders for the current route.
- Out: the document shell. The `html` element carries the font class names and `h-full`; the `body` is a full-height flex column so a page can push its footer to the bottom.

## Constants

- [`geistSans`](../../../../../src/app/layout.tsx#L5): the Geist sans face loaded by next/font, exposed to CSS as `--font-geist-sans`.
- [`geistMono`](../../../../../src/app/layout.tsx#L10): the Geist Mono face loaded by next/font, exposed to CSS as `--font-geist-mono`.
- [`metadata`](../../../../../src/app/layout.tsx#L15): the site title and description Next.js writes into the document head on every page.
- [`viewport`](../../../../../src/app/layout.tsx#L20): the browser theme colour, Tangerine `#FF5C1A`, so the mobile browser chrome matches the brand.
