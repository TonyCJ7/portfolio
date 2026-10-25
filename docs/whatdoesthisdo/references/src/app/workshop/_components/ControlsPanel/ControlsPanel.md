## `src/app/workshop/_components/ControlsPanel/ControlsPanel.tsx`

### [ControlsPanelProps](../../../../../../../../src/app/workshop/_components/ControlsPanel/ControlsPanel.tsx#L8)

Describes the props `WorkshopView` passes to `ControlsPanel`.

- `entryId`: the id of the entry on screen, a string, since the entry object holds render functions that cannot leave the server.

### [ControlsPanel({ entryId })](../../../../../../../../src/app/workshop/_components/ControlsPanel/ControlsPanel.tsx#L14)

Renders one field per control of the open entry, plus a Reset button, and writes every edit to the URL.

- In: `entryId`, looked up in the entry list on the client. An unknown id renders the 404 page.
- Out: a `select` for a select control, a checkbox for a toggle, and a text input with a `used/max` counter for a text control. Values come from `useWorkshopState`; an edit calls its `setArg` and Reset calls its `reset`. An entry without controls shows a one-line note instead. It reads the search params, so it renders only after hydration.

## Constants

- [`FIELD_CLASS`](../../../../../../../../src/app/workshop/_components/ControlsPanel/ControlsPanel.tsx#L12): the shared classes of the select and text fields.
