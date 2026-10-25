## `src/components/Intro/Intro.workshop.tsx`

## Constants

- [`entry`](../../../../../../src/components/Intro/Intro.workshop.tsx#L5): the Intro column Workshop entry: Name and Role text controls up to 32 characters, a Tagline up to 140, and a CV file present toggle that passes `cvHref` `"/x.pdf"` or nothing. The other profile fields come from `profile`. A wrapper gives the header a minimum height of 800 px, about the viewport of a 1440 by 900 screen, through a descendant selector, since the header sits inside StickyColumn's div. Without it `min-h-dvh` would take the browser's height, so the social links would drift lower in a tall window. A header whose content and padding need more than 800 px grows to fit; nothing inside it scrolls. On phone `phone:min-h-0` wins and the header takes its content's height. The nested nav list shows About active, because the scroll-spy finds no sections in the Workshop and keeps the first one.
