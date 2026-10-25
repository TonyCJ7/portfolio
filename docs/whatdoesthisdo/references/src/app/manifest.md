## `src/app/manifest.ts`

### [manifest()](../../../../../src/app/manifest.ts#L5)

Builds the web app manifest Next.js serves at `/manifest.webmanifest`, so the site can be installed to a home screen with the tj icon.

- Out: the manifest object: name, short name `TCJ`, `profile.metaDescription` as description, standalone display, Ink `#16161A` (`THEME_COLOR.dark`) as both background and theme colour, so an installed app opens on the dark default without a tangerine bar or a white splash, and the three PNG icons in `public/icons` (192, 512 and the 512 maskable one).
