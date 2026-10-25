## `src/app/workshop/_components/WorkshopView/WorkshopView.tsx`

### [WorkshopViewProps](../../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L9)

Describes the props the entry page passes to `WorkshopView`.

- `entryId`: the `[entry]` segment of the URL.

### [WorkshopView({ entryId })](../../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L13)

Lays out one Workshop entry on the server, so the prerendered HTML already holds the title, the lede, the tabs and the Spec panel. The sidebar is not here: it lives in the Workshop layout, which stays mounted across entries, because each entry is its own route segment and Next keeps every segment as a separate tree.

- In: `entryId`, the `[entry]` segment of the URL. An unknown id renders the 404 page.
- Out: the two-column grid (fluid stage, 340 px aside) that becomes one column under `phone:`, placed in the layout's second column. Only the parts that read the URL search params sit under `Suspense`: `EntryStage` and `ControlsPanel` render nothing until hydration, so a shared link never flashes the default state.
