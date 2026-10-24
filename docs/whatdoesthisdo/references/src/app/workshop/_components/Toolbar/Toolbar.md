## `src/app/workshop/_components/Toolbar/Toolbar.tsx`

### [Toolbar({ ctx, onChange })](../../../../../../../../src/app/workshop/_components/Toolbar/Toolbar.tsx#L16)

Shows the three segmented switches above the stage: scheme, device and motion.

- In: `ctx`, the current frame settings; the matching button in each group is `aria-pressed`. `onChange`, called with a one-key patch when a button is clicked.
- Out: three `role="group"` rows of buttons, labelled by their setting.

## Constants

- [`GROUPS`](../../../../../../../../src/app/workshop/_components/Toolbar/Toolbar.tsx#L10): the setting key, label and two options of each switch.
