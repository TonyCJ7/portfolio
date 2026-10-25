## `src/app/workshop/_components/Sidebar/Sidebar.tsx`

### [SidebarProps](../../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L10)

Describes the props of `Sidebar`.

- `ctx`: the frame settings from the URL, which every entry link carries along. `SidebarFromUrl` sets it; the prerendered fallback in the Workshop layout leaves it out.

### [ctxQuery(ctx)](../../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L20)

Builds the query string that carries the frame settings from one entry to the next, for the links below.

- In: `ctx`, the current frame settings, or undefined before the URL has been read.
- Out: `?scheme=…&device=…&motion=…` holding only the settings that differ from their defaults. An empty string when nothing differs or `ctx` is undefined.

### [Sidebar({ ctx })](../../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L44)

Lists every entry grouped by build stage, with a filter box, and marks the open one. It reads the open entry from the route segment below the Workshop layout (`useSelectedLayoutSegment`) and marks it with `aria-current="page"` and as the phone select's value.

- In: `ctx`, the frame settings every link keeps; without it the links carry no query.
- Out: on desktop a filterable list under the headings Primitives, Composites and Sections; under `phone:` a single `select` that navigates on change. The entries come from the Workshop entry list in build order. The filter matches the entry name, ignoring case.

## Constants

- [`STAGES`](../../../../../../../../src/app/workshop/_components/Sidebar/Sidebar.tsx#L14): the three build stages and their headings, in order.
