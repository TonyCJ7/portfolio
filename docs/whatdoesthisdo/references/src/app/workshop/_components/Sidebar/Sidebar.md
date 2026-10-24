## `src/app/workshop/_components/Sidebar/Sidebar.tsx`

### [ctxQuery(ctx)](../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L20)

Builds the query string that carries the frame settings from one entry to the next, for the links below.

- In: `ctx`, the current frame settings.
- Out: `?scheme=…&device=…&motion=…` holding only the settings that differ from their defaults, or an empty string.

### [Sidebar({ entries, currentId, ctx })](../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L40)

Lists every entry grouped by build stage, with a filter box, and marks the open one.

- In: `entries`, the entry list in build order. `currentId`, the open entry's id, shown with `aria-current="page"`. `ctx`, the frame settings every link keeps.
- Out: on desktop a filterable list under the headings Primitives, Composites and Sections; under `phone:` a single `select` that navigates on change. The filter matches the entry name, ignoring case.

## Constants

- [`STAGES`](../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L14): the three build stages and their headings, in order.
