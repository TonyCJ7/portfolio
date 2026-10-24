## `src/app/workshop/_components/WorkshopView/WorkshopView.tsx`

### [WorkshopView({ entryId })](../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L22)

Lays out one Workshop entry on the client: sidebar, title and lede, toolbar, stage, usage line, and the aside with its Controls and Spec tabs.

- In: `entryId`, the `[entry]` segment of the URL; the entry itself is looked up here because its render function cannot cross the server boundary.
- Out: the three-column grid (236 px sidebar, fluid stage, 340 px aside) that becomes one column under `phone:`. An unknown id renders the 404 page. The tab choice is local state; everything else comes from the URL through `useWorkshopState`.

## Constants

- [`TABS`](../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L18): the aside's two tab ids, `controls` first.
- [`TAB_LABELS`](../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L20): the visible name of each tab.
