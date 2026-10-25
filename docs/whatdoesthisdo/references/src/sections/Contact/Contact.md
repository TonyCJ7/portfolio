## `src/sections/Contact/Contact.tsx`

### [Contact()](../../../../../../src/sections/Contact/Contact.tsx#L7)

Renders the Contact section, the last section of the home page's right column.

- Out: a `section` with the id `contact` that opens with a SectionLabel. The label text comes from `sectionLabel("contact")`, so it matches the nav item word for word.
- The section's `aria-labelledby` points at the label's id, `contact-label`. Its accessible name is the heading text, "Contact".
- The intro paragraph is `contact.intro` from `src/content/contact.ts`. It is body type in Text 2, capped at the measure width (36rem), 24 px below the label on desktop and 16 px below it on a phone.
- The email address from `profile.email` ends the intro paragraph as an inline `mailto:` Link of the arrow kind, after the intro's closing colon, in body size, with the same `↗` as the site's other links. It is the section's only link; the section is the target of the Get in touch button. GitHub, LinkedIn and the location live in the intro column. The arrow kind wraps anywhere, so a longer address wraps inside the column instead of overflowing it.
- `scroll-mt-24 phone:scroll-mt-14` sets the landing offset of a hash jump to `#contact`: 96 px below the top on desktop, 56 px on a phone.
- It sets no background, gutter or overflow. The home page layout supplies the column and the `--gutter` the sticky bar reaches into.
