## `src/sections/Experience/Experience.workshop.tsx`

## Constants

- [`CV_HREF`](../../../../../../src/sections/Experience/Experience.workshop.tsx#L6): the URL of the real CV in `public/`, built from `profile.cvFile`, so the résumé link opens the PDF when it is clicked in the Workshop. The usage line quotes the same URL.
- [`entry`](../../../../../../src/sections/Experience/Experience.workshop.tsx#L8): the Experience Workshop entry in the Sections group, with a CV file present toggle that passes `cvHref` as `CV_HREF` or nothing. On desktop it renders the section as it is. On a phone it renders the section in a 480 px tall scroll area, so the sticky label bar can be seen while the rows scroll under it.
