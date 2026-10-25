## `src/app/workshop/[entry]/page.tsx`

### [generateStaticParams()](../../../../../../../src/app/workshop/[entry]/page.tsx#L8)

Lists every entry id so the build prerenders one static page per entry.

- Out: one `{ entry }` object per item in the entry list.

### [generateMetadata({ params })](../../../../../../../src/app/workshop/[entry]/page.tsx#L12)

Gives each entry page its own document title, canonical link and Open Graph block, so search engines index each entry as its own page and a shared link points back at it.

- In: `params`, the route params promise holding the `entry` id.
- Out: the title `<Name> · Workshop`, the canonical `/workshop/<id>`, and `workshopOpenGraph` with that same path as `og:url`; the Workshop layout's template adds ` · Tony Cherian Jacob`. An unknown id gets the title "Workshop" and keeps the layout's canonical and Open Graph block for `/workshop`.

### [EntryGate({ params })](../../../../../../../src/app/workshop/[entry]/page.tsx#L31)

Reads the entry id and renders the Workshop view for it, inside the page's Suspense boundary.

- In: `params`, the route params promise holding the `entry` id.
- Out: the client Workshop view for a known id; an unknown id renders the 404 page. In practice an unknown id never gets here: `proxy` in `src/proxy.ts` answers it with a real 404 first, because a `notFound()` under this Suspense boundary keeps status 200. It is a separate component so the `await` of the URL data happens under Suspense, which Cache Components needs for instant navigation between entries.

### [WorkshopEntryPage({ params })](../../../../../../../src/app/workshop/[entry]/page.tsx#L43)

Renders one Workshop entry.

- In: `params`, the route params promise, passed down unread.
- Out: the entry gate under a Suspense boundary with no fallback, so the stage draws nothing until the URL state is read and a shared link never flashes the defaults.
