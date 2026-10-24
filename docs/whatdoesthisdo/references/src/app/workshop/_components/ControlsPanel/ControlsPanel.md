## `src/app/workshop/_components/ControlsPanel/ControlsPanel.tsx`

### [ControlsPanel({ controls, args, onChange, onReset })](../../../../../../../../src/app/workshop/_components/ControlsPanel/ControlsPanel.tsx#L14)

Renders one field per control of the open entry, plus a Reset button.

- In: `controls`, the entry's control definitions. `args`, their current values. `onChange`, called with the key and new value on every edit. `onReset`, called by the Reset button.
- Out: a `select` for a select control, a checkbox for a toggle, and a text input with a `used/max` counter for a text control. An entry without controls shows a one-line note instead.

## Constants

- [`FIELD_CLASS`](../../../../../../../../src/app/workshop/_components/ControlsPanel/ControlsPanel.tsx#L12): the shared classes of the select and text fields.
