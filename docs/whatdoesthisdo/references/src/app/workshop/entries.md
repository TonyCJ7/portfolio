## `src/app/workshop/entries.ts`

### [findEntry(id)](../../../../../src/app/workshop/entries.ts#L20)

Looks up the entry behind a Workshop URL.

- In: `id`, the `[entry]` segment of the URL.
- Out: the entry with that `id`, or undefined, which the page turns into a 404.

## Constants

- [`entries`](../../../../../src/app/workshop/entries.ts#L10): every Workshop entry in build order (Tokens, Focus ring, Label, Tag, Logo, Button, Link, …). Each component task appends its own; the sidebar and the static params come from this list.
