## `src/app/workshop/_components/Sidebar/Sidebar.tsx`

### [SidebarProps](../../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L9)

Describes the props of `Sidebar`.

- `currentId`: the id of the entry on screen.
- `ctx`: the frame settings from the URL, which every entry link carries along. `SidebarFromUrl` sets it; the prerendered fallback in `WorkshopView` leaves it out.

### [ctxQuery(ctx)](../../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L20)

Builds the query string that carries the frame settings from one entry to the next, for the links below.

- In: `ctx`, the current frame settings, or undefined before the URL has been read.
- Out: `?scheme=…&device=…&motion=…` holding only the settings that differ from their defaults. An empty string when nothing differs or `ctx` is undefined.

### [Sidebar({ currentId, ctx })](../../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L44)

Lists every entry grouped by build stage, with a filter box, and marks the open one.

- In: `currentId`, the open entry's id, shown with `aria-current="page"`. `ctx`, the frame settings every link keeps; without it the links carry no query.
- Out: on desktop a filterable list under the headings Primitives, Composites and Sections; under `phone:` a single `select` that navigates on change. The entries come from the Workshop entry list in build order. The filter matches the entry name, ignoring case.

## Constants

- [`STAGES`](../../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L14): the three build stages and their headings, in order.
