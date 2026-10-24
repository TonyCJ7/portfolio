## `src/sections/Skills/Skills.tsx`

### [SkillsProps](../../../../../../src/sections/Skills/Skills.tsx#L9)

The props of `Skills`: `showEducation`, which is optional and defaults to true.

### [Skills({ showEducation })](../../../../../../src/sections/Skills/Skills.tsx#L13)

Renders the Skills section of the home page's right column: the label, the skill table and the Education part under it.

- In: `showEducation`, true by default. False leaves out the Education subheading and the degree row together. The Workshop's With education toggle sets it.
- Out: a `section` with the id `skills` that opens with a SectionLabel. The label text comes from `sectionLabel("skills")`, so it matches the nav item word for word.
- The section's `aria-labelledby` points at the label's id, `skills-label`. Its accessible name is the heading text, "Skills".
- The groups come from `skills` in `src/content/skills.ts`. They sit in a SkillTable 32 px below the label.
- The Education subheading is an `h3`, 48 px below the table. Its text is `education.label`, shown in a muted Label. Education is part of this section, not a nav section.
- The EducationRow, with its languages line, sits 16 px below the subheading.
- `scroll-mt-24 phone:scroll-mt-14` sets the landing offset of a hash jump to `#skills`: 96 px below the top on desktop, 56 px on a phone.
- It sets no background, gutter or overflow. The home page layout supplies the column and the `--gutter` the sticky bar reaches into.
