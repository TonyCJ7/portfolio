## `src/lib/siteUrl.ts`

## Constants

- [`siteUrl`](../../../../../src/lib/siteUrl.ts#L1): the site's public origin as a `URL`, read from `NEXT_PUBLIC_SITE_URL` and `https://tonycj.dev` when that variable is unset; the metadata base, the canonical links, the robots and sitemap files and the JSON-LD `url` are built from it. The fallback is a placeholder until the real domain is chosen.
