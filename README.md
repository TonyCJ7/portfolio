# Tony Cherian Jacob · portfolio

Personal portfolio of Tony Cherian Jacob, Senior Frontend Engineer. One long home page plus the Workshop, a
gallery of every component the site is built from. Built with Next.js 16 (App Router, Cache Components), React 19,
Tailwind CSS 4 and TypeScript.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000 for the site and http://localhost:3000/workshop for the Workshop.

## Scripts

- `npm run dev` starts the development server.
- `npm run build` creates the production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint.
- `npm run check` runs ESLint, the TypeScript check and the production build. It is the gate for every commit;
  the repository has no test runner.

## Release gate: `NEXT_PUBLIC_SITE_URL`

Set `NEXT_PUBLIC_SITE_URL` to the live origin before the production build, for example
`NEXT_PUBLIC_SITE_URL=https://example.com npm run build`. Every absolute URL the site prints comes from it: the
canonical links, the Open Graph and Twitter tags, `sitemap.xml`, the sitemap line in `robots.txt` and the JSON-LD
`url`. When it is unset, all of them point at the placeholder `https://tonycj.dev`, which stands in until the real
domain is chosen. The pages are prerendered, so the value is fixed at build time; changing it needs a new build.

## The Workshop

`/workshop/<entry>` shows one component, composite or section with live controls, a scheme switch (dark, light), a
device frame (desktop 656 px, phone 390 px) and a reduced-motion switch. Every setting lives in the URL, for
example `/workshop/button?variant=ghost&state=hover&scheme=light&device=phone`, so any state is a link that can be
shared. The Spec tab lists each component's props, tokens, motion and accessibility notes.

An entry lives beside its component as `<Name>.workshop.tsx` and is registered in `src/app/workshop/entries.ts`.

## Layout

- `src/app` holds the App Router routes: the home page, the Workshop (`src/app/workshop`), the 404 page, the
  metadata files (robots, sitemap, manifest, Open Graph image, icons) and the global stylesheet with the design
  tokens.
- `src/components` holds the components, one folder each, with the Workshop entry next to the component.
- `src/sections` holds the five home page sections, built from the components.
- `src/content` holds every piece of copy and profile data the pages show.
- `src/hooks` holds the React hooks (theme, active section, reduced motion, coarse pointer).
- `src/lib` holds plain helpers: the site URL, shared metadata, link classification, social links.
- `src/types` holds the shared types.
- `src/proxy.ts` answers an unknown Workshop entry with a 404.
- `public` holds the résumé PDF, `llms.txt` and the manifest icons.
- `docs/whatdoesthisdo` holds the reference pages shown by the WhatDoesThisDo editor extension.

The logo masters (`design/logo`) and the design notes (`DESIGN.md`, `PRODUCT.md`) are kept out of git.
