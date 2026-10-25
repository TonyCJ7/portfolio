## `src/app/workshop/_components/WorkshopView/WorkshopView.tsx`

### [WorkshopViewProps](../../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L11)

Describes the props the entry page passes to `WorkshopView`.

- `entryId`: the `[entry]` segment of the URL.

### [WorkshopView({ entryId })](../../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L15)

Lays out one Workshop entry on the server, so the prerendered HTML already holds the sidebar links, the title, the lede, the tabs and the Spec panel.

- In: `entryId`, the `[entry]` segment of the URL. An unknown id renders the 404 page.
- Out: the three-column grid (236 px sidebar, fluid stage, 340 px aside) that becomes one column under `phone:`. Only the parts that read the URL search params sit under `Suspense`: `EntryStage` and `ControlsPanel` render nothing until hydration, so a shared link never flashes the default state. The sidebar's fallback is the same `Sidebar` with plain links, and `SidebarFromUrl` replaces it after hydration with links that keep the frame settings.
