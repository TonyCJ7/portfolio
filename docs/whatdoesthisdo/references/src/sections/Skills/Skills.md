## `src/sections/Skills/Skills.tsx`

### [Skills()](../../../../../../src/sections/Skills/Skills.tsx#L6)

Renders the Skills section of the home page's right column: the label and the skill table.

- Out: a `section` with the id `skills` that opens with a SectionLabel. The label text comes from `sectionLabel("skills")`, so it matches the nav item word for word.
- The section's `aria-labelledby` points at the label's id, `skills-label`. Its accessible name is the heading text, "Skills".
- The groups come from `skills` in `src/content/skills.ts`. They sit in a SkillTable 32 px below the label.
- `scroll-mt-24 phone:scroll-mt-14` sets the landing offset of a hash jump to `#skills`: 96 px below the top on desktop, 56 px on a phone.
- It sets no background, gutter or overflow. The home page layout supplies the column and the `--gutter` the sticky bar reaches into.
