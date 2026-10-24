## `src/components/Tag/TagList.tsx`

### [TagListProps](../../../../../../src/components/Tag/TagList.tsx#L3)

Describes the props of `TagList`.

- `items`: the names to show, one pill each.
- `label`: the optional accessible name of the list, `Tools` when omitted.
- `className`: extra classes appended after the list's own, such as the experience row's top margin.

### [TagList(props)](../../../../../../src/components/Tag/TagList.tsx#L9)

Renders a labeled, wrapping row of Tag pills.

- In: `items`, the names, one Tag each (the name is the React key, so names must be unique). `label`, the accessible name of the list, `Tools` by default. `className`, extra classes.
- Out: a `ul` with that `aria-label`, flex-wrapped with an 8 px gap.
