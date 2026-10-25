## `src/app/workshop/_components/WorkshopView/WorkshopView.tsx`

### [WorkshopViewProps](../../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L14)

Describes the props the entry page passes to `WorkshopView`.

- `entryId`: the `[entry]` segment of the URL, a string, since the entry object holds render functions that cannot leave the server.

### [WorkshopView({ entryId })](../../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L24)

Lays out one Workshop entry on the client: sidebar, title and lede, toolbar, stage, usage line, and the aside with its Controls and Spec tabs.

- In: `entryId`, the `[entry]` segment of the URL; the entry itself is looked up here because its render function cannot cross the server boundary.
- Out: the three-column grid (236 px sidebar, fluid stage, 340 px aside) that becomes one column under `phone:`. An unknown id renders the 404 page. The tab choice is local state; everything else comes from the URL through `useWorkshopState`. The toolbar and the stage both write frame settings back through its `setCtx`. The tabs follow the ARIA tabs pattern: only the active tab is in the Tab order, and Left and Right arrows move between them.

### [onTabKeyDown(event)](../../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L34)

Moves the active tab with the arrow keys, wrapping at both ends.

- In: `event`, the key event from a tab button; keys other than ArrowLeft and ArrowRight are ignored.
- Out: nothing. Selects the neighbouring tab and moves focus to it.

## Constants

- [`TABS`](../../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L18): the aside's two tab ids, `controls` first.
- [`TAB_LABELS`](../../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L20): the visible name of each tab.
- [`PANEL_ID`](../../../../../../../../src/app/workshop/_components/WorkshopView/WorkshopView.tsx#L22): the id of the one tab panel both tabs control.
