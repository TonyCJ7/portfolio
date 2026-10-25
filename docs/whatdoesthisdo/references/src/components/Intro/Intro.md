## `src/components/Intro/Intro.tsx`

### [IntroProps](../../../../../../src/components/Intro/Intro.tsx#L12)

The props of `Intro`: `profile`, the site's `Profile`, and `cvHref`, the CV file's URL, which is optional.

### [enterDelay(index)](../../../../../../src/components/Intro/Intro.tsx#L19)

Returns the inline style that staggers one top row's enter animation.

- In: `index`, the row's place in the cascade, from 0 (the mark row) to 5. Place 2 is the role and the location line under it, which enter together. Place 5 is the nav list on desktop and the social links on phones, where the nav list is hidden.
- Out: `{ animationDelay }` of 50 ms plus 50 ms per place, so the six rows start at 50, 100 and so on up to 300 ms.

### [Intro({ profile, cvHref })](../../../../../../src/components/Intro/Intro.tsx#L23)

Renders the home page's left column as a `header`: the tj mark and the theme toggle, the name, the role with the location under it, the tagline, the two buttons, the nav list and the social links. The social links appear nowhere else on the site.

- In: `profile`, the content from `src/content/profile.ts`, read for the name, role, location, tagline and both button labels. `cvHref`, the URL of the CV file. The page passes it only when the file exists.
- Out: on desktop a `header` inside a `StickyColumn`, at least one viewport tall, with 96 px of block padding, 64 px on desktop windows under 896 px tall (`short:`), so the whole column fits from 831 px up. The top block sits at the top and the social links at the bottom. When the viewport is shorter than the content, the column never scrolls on its own: it moves with the page until its bottom meets the viewport's bottom, stays there while the right column scrolls, and moves back with the page as soon as the page scrolls up, until its top meets the viewport's top. Wheel and Tab reach every item through the page's one scrollbar. On phones the header is static and as tall as its content, with 48 px of padding. The nav list is hidden there, and the social links sit 24 px below the buttons, the header's own gap.
- The location, `profile.location` ("Dubai, UAE"), is a muted Label 8 px below the role and 16 px above the tagline. It is a block, so its box is the label's 16.2 px line. It is plain text, so Tab skips it.
- The primary button links to `#contact`. Without `cvHref` the ghost Full résumé button is not rendered.
- The six top rows fade in and rise 8 px once on load, 50 ms apart from 50 to 300 ms. The location enters with the role at 150 ms. On phones the social links enter at 300 ms; on desktop they do not animate. Under reduced motion nothing animates and every row shows at once.

## Constants

- [`ENTER`](../../../../../../src/components/Intro/Intro.tsx#L17): the enter animation class each top row carries, gated on motion being allowed. The social links use their own phone-only form of it, `phone:motion-safe:animate-enter`.
