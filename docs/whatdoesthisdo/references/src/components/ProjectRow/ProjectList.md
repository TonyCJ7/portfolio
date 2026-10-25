## `src/components/ProjectRow/ProjectList.tsx`

### [ProjectListProps](../../../../../../src/components/ProjectRow/ProjectList.tsx#L4)

Describes the props of `ProjectList`.

- `items`: the projects to show, in display order.
- `targetId`: the `id` of the project that stays bright in the Workshop's dimmed state. Omitted on the site.

### [ProjectList({ items, targetId })](../../../../../../src/components/ProjectRow/ProjectList.tsx#L9)

Renders the projects section's ordered list, one `ProjectRow` per project, 48 px apart.

- In: `items`, the projects. `targetId`, the project whose row gets `target`, from the Workshop only.
- Out: an `ol` with the `row-list` class, the same class as the experience list, so its rows dim the same way: siblings fade to 50% while one row is hovered (on hover devices) or holds keyboard focus, and under `[data-state="dimmed"]` every row except the target. The two lists dim independently.
