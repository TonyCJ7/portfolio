## `src/sections/Projects/Projects.tsx`

### [ProjectsSection()](../../../../../../src/sections/Projects/Projects.tsx#L6)

Renders the Projects section of the home page's right column, between Experience and Highlights: the label and the list of projects.

- Out: a `section` with the id `projects` that opens with a SectionLabel. The label text comes from `sectionLabel("projects")`, so it matches the nav item word for word.
- The section's `aria-labelledby` points at the label's id, `projects-label`. Its accessible name is the heading text, "Projects".
- The rows come from `projects` in `src/content/projects.ts` and start 32 px below the label on desktop and 24 px below it on a phone. Hovering one row with a mouse, or focusing inside it with the keyboard, dims the other rows to half opacity.
- `scroll-mt-24 phone:scroll-mt-14` sets the landing offset of a hash jump to `#projects`: 96 px below the top on desktop, 56 px on a phone.
