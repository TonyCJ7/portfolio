## `src/app/workshop/_components/SidebarFromUrl/SidebarFromUrl.tsx`

### [SidebarFromUrl()](../../../../../../../../src/app/workshop/_components/SidebarFromUrl/SidebarFromUrl.tsx#L6)

Renders the `Sidebar` with the frame settings read from the URL, so every entry link keeps the scheme, device and motion.

- Out: the sidebar. It reads the search params, so it renders only after hydration; until then the prerendered `Sidebar` without settings stands in. It sits in the Workshop layout, so it stays mounted while the entries change.
