## `src/app/manifest.ts`

### [manifest()](../../../../../src/app/manifest.ts#L3)

Builds the web app manifest Next.js serves at `/manifest.webmanifest`, so the site can be installed to a home screen with the tj icon.

- Out: the manifest object: name, short name `TCJ`, description, standalone display, Paper `#F5F5F4` as background colour, Tangerine `#FF5C1A` as theme colour, and the three PNG icons in `public/icons` (192, 512 and the 512 maskable one).
