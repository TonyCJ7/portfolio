## `src/components/ProjectRow/ProjectRow.tsx`

### [ProjectRowProps](../../../../../../src/components/ProjectRow/ProjectRow.tsx#L7)

Describes the props of `ProjectRow`.

- `project`: one project from `src/content/projects.ts`.
- `target`: marks the row as the one that stays bright in the Workshop's dimmed state. `false` when omitted.

### [ProjectRow({ project, target })](../../../../../../src/components/ProjectRow/ProjectRow.tsx#L12)

Renders one project of the projects list as an `li`: who it was for in the first column, then the title, a short description and tools.

- In: `project`, the project to show. `target`, true only from the Workshop, so the dimmed state knows which row stays bright.
- Out: a two-column grid row (`grid-cols-label`: a 156 px label column and the rest, the same grid as the experience and skill rows; one column on phone). The owner (`Personal`, `Almosafer`, `QBurst`) is a muted mono label, 4 px down on desktop so it sits level with the title's first line. The title is an `h3`.
- A project with `github` links its title with Link kind `github`: the GitHub mark after the text and the accessible name "<title> on GitHub". Any other project uses Link kind `arrow`. Both open in a new tab, and the title's `::after` covers the whole row, so a click anywhere opens the link while the focus ring stays on the title.
- `RowLift` is the hover and focus layer. The row is `isolate`, so the layer paints inside it.
- The row sets `data-row="target"` when `target` is true, and nothing otherwise.
