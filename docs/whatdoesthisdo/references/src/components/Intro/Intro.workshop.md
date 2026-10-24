## `src/components/Intro/Intro.workshop.tsx`

## Constants

- [`entry`](../../../../../../src/components/Intro/Intro.workshop.tsx#L5): the Intro column Workshop entry: Name and Role text controls up to 32 characters, a Tagline up to 140, and a CV file present toggle that passes `cvHref` `"/x.pdf"` or nothing. The other profile fields come from `profile`. A wrapper sets the header to 800 px tall, about the viewport of a 1440 by 900 screen. Without it `h-dvh` would take the browser's height inside the frame, and 640 px is too short for the column's content with its 96 px padding. The nested nav list shows About active, because the scroll-spy finds no sections in the Workshop and keeps the first one.
