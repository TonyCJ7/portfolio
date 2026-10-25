## `src/sections/Experience/Experience.tsx`

### [ExperienceSectionProps](../../../../../../src/sections/Experience/Experience.tsx#L8)

The props of `ExperienceSection`: `cvHref`, the URL of the CV file, which is optional.

### [ExperienceSection({ cvHref })](../../../../../../src/sections/Experience/Experience.tsx#L12)

Renders the Experience section of the home page's right column: the label, the list of jobs and a link to the CV.

- In: `cvHref`, the URL of the CV file. The page passes it only when the file exists in `public/`.
- Out: a `section` with the id `experience` that opens with a SectionLabel. The label text comes from `sectionLabel("experience")`, so it matches the nav item word for word.
- The section's `aria-labelledby` points at the label's id, `experience-label`. Its accessible name is the heading text, "Experience".
- The rows come from `experience` in `src/content/experience.ts` and start 32 px below the label on desktop and 24 px below it on a phone. Hovering one row with a mouse, or focusing inside it, dims the other rows to half opacity.
- With `cvHref`, an arrow link reading `profile.cvLinkText` sits 32 px below the last row and opens the file in a new tab. Without `cvHref` the link is not rendered.
- `scroll-mt-24 phone:scroll-mt-14` sets the landing offset of a hash jump to `#experience`: 96 px below the top on desktop, 56 px on a phone.
- It sets no background, gutter or overflow. The home page layout supplies the column and the `--gutter` the sticky bar reaches into.
