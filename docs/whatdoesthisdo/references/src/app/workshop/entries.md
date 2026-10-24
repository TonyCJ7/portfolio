## `src/app/workshop/entries.ts`

### [findEntry(id)](../../../../../../src/app/workshop/entries.ts#L38)

Looks up the entry behind a Workshop URL.

- In: `id`, the `[entry]` segment of the URL.
- Out: the entry with that `id`, or undefined, which the page turns into a 404.

## Constants

- [`entries`](../../../../../../src/app/workshop/entries.ts#L19): every Workshop entry in build order (Tokens, Focus ring, Label, Tag, Logo, Button, Link, Theme toggle, Nav link, Section label, Spotlight, Skip link, Experience row, Highlight tile, Skill group, Education row, …). Each component task appends its own; the sidebar and the static params come from this list.
