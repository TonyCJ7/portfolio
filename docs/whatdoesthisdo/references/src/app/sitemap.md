## `src/app/sitemap.ts`

### [sitemap()](../../../../../src/app/sitemap.ts#L4)

Builds the `/sitemap.xml` file that lists the two pages a search engine should index.

- Out: the home page and `/workshop/tokens` as absolute URLs on `siteUrl`, both with the request time as `lastModified`. That time makes the route render on each request instead of at build time. The Workshop is listed by its first entry because `/workshop` answers with a 307 redirect to it.
