## `src/app/sitemap.ts`

### [sitemap()](../../../../../src/app/sitemap.ts#L4)

Builds the `/sitemap.xml` file that lists the two pages a search engine should index.

- Out: the home page and `/workshop/tokens` as absolute URLs on `siteUrl`, with no `lastModified`. A `new Date()` there would make the route render on each request, and the date would say nothing about when the page changed. The file is prerendered at build time. The Workshop is listed by its first entry because `/workshop` answers with a 307 redirect to it.
