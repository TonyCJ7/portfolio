## `src/app/workshop/_components/EntryTabs/EntryTabs.tsx`

### [EntryTabsProps](../../../../../../../../src/app/workshop/_components/EntryTabs/EntryTabs.tsx#L5)

Describes the props `WorkshopView` passes to `EntryTabs`.

- `controls`: the content of the Controls panel, the `ControlsPanel` under its own `Suspense`.
- `spec`: the content of the Spec panel, the `SpecPanel` rendered on the server.

### [EntryTabs({ controls, spec })](../../../../../../../../src/app/workshop/_components/EntryTabs/EntryTabs.tsx#L14)

Shows the aside's Controls and Spec tabs, with Controls open first.

- In: `controls` and `spec`, the two panels' content.
- Out: a tab list and two tab panels. Both panels are always rendered and the closed one carries `hidden`, so the Spec text is in the prerendered HTML. The tabs follow the ARIA tabs pattern: only the open tab is in the Tab order, and Left and Right arrows move between them.

### [onTabKeyDown(event)](../../../../../../../../src/app/workshop/_components/EntryTabs/EntryTabs.tsx#L18)

Moves the open tab with the arrow keys, wrapping at both ends.

- In: `event`, the key event from a tab button; keys other than ArrowLeft and ArrowRight are ignored.
- Out: nothing. Opens the neighbouring tab and moves focus to it.

## Constants

- [`TABS`](../../../../../../../../src/app/workshop/_components/EntryTabs/EntryTabs.tsx#L10): the aside's two tab ids, `controls` first. Each tab's id is `tab-<name>` and its panel's id is `panel-<name>`.
- [`TAB_LABELS`](../../../../../../../../src/app/workshop/_components/EntryTabs/EntryTabs.tsx#L12): the visible name of each tab.
