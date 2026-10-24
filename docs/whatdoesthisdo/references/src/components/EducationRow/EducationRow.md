## `src/components/EducationRow/EducationRow.tsx`

### [EducationRowProps](../../../../../../src/components/EducationRow/EducationRow.tsx#L4)

Describes the props of `EducationRow`.

- `education`: the one `Education` record from `src/content/education.ts`. The row prints its dates, degree, institution and languages; its `label` is the sub-heading the Skills section prints above the row.
- `showLanguages`: whether the languages sentence prints below the row. It defaults to true.

### [EducationRow({ education, showLanguages })](../../../../../../src/components/EducationRow/EducationRow.tsx#L9)

Renders Tony's degree as one row of a definition list, for the education part of the Skills section.

- In: `education`, the education record. Its printed dates become a muted `Label` in a `time` element, with `from` as the machine date. The label sits in the `dt` as a block with 4 px top padding, so it lines up with the degree's first line. The degree (title type, Text colour) and the institution (small type, Text 2, 4 px below) sit in the `dd`. Both wrap anywhere, so an unbroken name stays inside its column. `showLanguages`, true to print the languages sentence.
- Out: a `div` holding the `dl`, with a Border hairline above and below and 16 px of padding inside. With `showLanguages` true, the languages sentence follows the list as a small Text 2 paragraph 16 px below the lower hairline. With false, the `div` holds only the list.
- On desktop the dates take 2 of 8 columns and the degree takes 6, with a 24 px gap. On phone the row is one column, the dates above the degree with an 8 px gap.
