## `src/components/Intro/Intro.tsx`

### [IntroProps](../../../../../../src/components/Intro/Intro.tsx#L10)

The props of `Intro`: `profile`, the site's `Profile`, and `cvHref`, the CV file's URL, which is optional.

### [enterDelay(index)](../../../../../../src/components/Intro/Intro.tsx#L17)

Returns the inline style that staggers one top row's enter animation.

- In: `index`, the row's place in the top block, from 0 (the mark row) to 5 (the nav list).
- Out: `{ animationDelay }` of 50 ms plus 50 ms per place, so the six rows start at 50, 100 and so on up to 300 ms.

### [Intro({ profile, cvHref })](../../../../../../src/components/Intro/Intro.tsx#L21)

Renders the home page's left column as a `header`: the tj mark and the theme toggle, the name, role and tagline, the two buttons, the nav list and the social links.

- In: `profile`, the content from `src/content/profile.ts`, read for the name, role, tagline and both button labels. `cvHref`, the URL of the CV file. The page passes it only when the file exists.
- Out: on desktop a column stuck to the top of the viewport, one viewport tall, with 96 px of block padding. The top block sits at the top and the social links at the bottom. When the content is taller than the viewport, the column scrolls on its own, so wheel and Tab still reach the nav list and social links. Its 4 px inline padding, offset by a -4 px margin, keeps the focus ring of edge items inside the scrolling box, which would otherwise clip it. On phones the header is static and as tall as its content, with 48 px of padding, and the nav list and social links are hidden.
- The primary button links to `#contact`. Without `cvHref` the ghost Download CV button is not rendered.
- The six top rows fade in and rise 8 px once on load, 50 ms apart. Under reduced motion they do not animate and show at once.

## Constants

- [`ENTER`](../../../../../../src/components/Intro/Intro.tsx#L15): the enter animation class each top row carries, gated on motion being allowed.
