## `src/app/workshop/_components/SidebarFromUrl/SidebarFromUrl.tsx`

### [SidebarFromUrlProps](../../../../../../../../src/app/workshop/_components/SidebarFromUrl/SidebarFromUrl.tsx#L6)

Describes the props `WorkshopView` passes to `SidebarFromUrl`.

- `currentId`: the id of the entry on screen.

### [SidebarFromUrl({ currentId })](../../../../../../../../src/app/workshop/_components/SidebarFromUrl/SidebarFromUrl.tsx#L10)

Renders the `Sidebar` with the frame settings read from the URL, so every entry link keeps the scheme, device and motion.

- In: `currentId`, passed through to `Sidebar`.
- Out: the sidebar. It reads the search params, so it renders only after hydration; until then the prerendered `Sidebar` without settings stands in.
