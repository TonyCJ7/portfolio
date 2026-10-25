## `src/app/workshop/[entry]/page.tsx`

### [generateStaticParams()](../../../../../../../src/app/workshop/[entry]/page.tsx#L7)

Lists every entry id so the build prerenders one static page per entry.

- Out: one `{ entry }` object per item in the entry list.

### [generateMetadata({ params })](../../../../../../../src/app/workshop/[entry]/page.tsx#L11)

Gives each entry page its own document title, canonical link and Open Graph block, so search engines index each entry as its own page and a shared link points back at it.

- In: `params`, the route params promise holding the `entry` id.
- Out: the title `<Name> · Workshop`, the canonical `/workshop/<id>`, and `workshopOpenGraph` with that same path as `og:url`; the Workshop layout's template adds ` · Tony Cherian Jacob`. An unknown id gets the title "Workshop" and keeps the layout's canonical and Open Graph block for `/workshop`. That happens only when `proxy` in `src/proxy.ts` is bypassed, since the proxy answers an unknown id with a 404 first.

### [WorkshopEntryPage({ params })](../../../../../../../src/app/workshop/[entry]/page.tsx#L30)

Renders one Workshop entry.

- In: `params`, the route params promise holding the `entry` id.
- Out: the client Workshop view for that id, under a Suspense boundary with no fallback. The stage draws nothing until the URL state is read, so a shared link never flashes the defaults.
- The id is read inside the boundary with `params.then`, so Cache Components can prerender the page shell without it and navigation between entries stays instant.
- The page does not check the id. `proxy` in `src/proxy.ts` answers an unknown id with a 404 before the page runs, because a `notFound()` here would come after the shell streamed with status 200.
