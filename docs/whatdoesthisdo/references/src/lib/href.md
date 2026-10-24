## `src/lib/href.ts`

### [isInternalRoute(href)](../../../../../src/lib/href.ts#L1)

Decides whether a link target is a page of this site, so `Button` and `Link` know when to render a `next/link` anchor and when a plain `a`.

- In: `href`, the link target as written in the component's prop, for example `/workshop/tokens`, `/Tony_CJ_Resume.pdf`, `#contact` or a full URL.
- Out: `true` only when `href` starts with `/` and the last segment of its path has no file extension. The path is read up to the first `?` or `#`, so a query or fragment never counts as an extension. `/Tony_CJ_Resume.pdf` is a static file in `public/`, and a `next/link` to it would prefetch and client-route a download, so it is `false`; `#contact`, `mailto:` and `https://` targets are `false` too.
