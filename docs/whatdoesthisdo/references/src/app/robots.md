## `src/app/robots.ts`

### [robots()](../../../../../src/app/robots.ts#L4)

Builds the `/robots.txt` file Next.js serves, which lets every crawler read the whole site.

- Out: one rule, `User-Agent: *` with `Allow: /`, and the sitemap line `<siteUrl>sitemap.xml`, so a crawler that reads robots first finds both pages.
