## `src/lib/metadata.ts`

### [workshopOpenGraph(url)](../../../../../src/lib/metadata.ts#L18)

Builds the Open Graph block of a Workshop page, so a shared Workshop link previews as the Workshop and points at the page it came from.

- In: `url`, the page's own path, `/workshop/<id>` for an entry or `/workshop` for the layout; it is the same path as the page's canonical.
- Out: type `website`, the title "Workshop · Tony Cherian Jacob", `workshopDescription`, the site name and locale from `openGraphBase`, `url`, and `ogImage` as the image. The image is named here because a segment that sets `openGraph` replaces the root's block, and the file-based image goes with it.

## Constants

- [`titleTemplate`](../../../../../src/lib/metadata.ts#L4): `%s · Tony Cherian Jacob`, built from `profile.name`; the root layout and the Workshop layout both hand it to their child pages.
- [`workshopDescription`](../../../../../src/lib/metadata.ts#L6): the Workshop's meta and Open Graph description, "Every component of the site, with live controls."; `public/llms.txt` repeats it.
- [`openGraphBase`](../../../../../src/lib/metadata.ts#L8): the Open Graph fields every page shares, the site name `profile.name` and the locale `en_US`.
- [`ogImage`](../../../../../src/lib/metadata.ts#L10): the generated preview image as Open Graph sees it: the URL `/opengraph-image`, 1200 by 630, `image/png`, and the alt "Tony Cherian Jacob, Senior Frontend Engineer". The image route exports its `alt`, `size` and `contentType` from it.
