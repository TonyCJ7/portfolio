## `src/components/NavList/NavList.workshop.tsx`

### [sectionId(label)](../../../../../../src/components/NavList/NavList.workshop.tsx#L8)

Turns a label picked in a control back into the section id that `NavList` works with.

- In: `label`, a control's value, such as `"Skills"` or `"none"`.
- Out: the id of the `nav` section with that label, such as `"skills"`. Undefined for `"none"`.

### [forcedItem(hover, focus)](../../../../../../src/components/NavList/NavList.workshop.tsx#L12)

Turns the Pointer on and Keyboard on controls into the `forced` prop of `NavList`.

- In: `hover`, the Pointer on value. `focus`, the Keyboard on value. Each is a section label or `"none"`.
- Out: the focus item when Keyboard on names a section, since only one item can be forced. Otherwise the hover item when Pointer on names one. Undefined when both are `"none"`.

## Constants

- [`LABELS`](../../../../../../src/components/NavList/NavList.workshop.tsx#L6): the section labels from `nav` in page order, the options of all three controls.
- [`entry`](../../../../../../src/components/NavList/NavList.workshop.tsx#L31): the Nav list Workshop entry: Active (in view), Pointer on and Keyboard on controls, centered in the frame. It always passes `activeId`, so the scroll-spy never runs on the Workshop page. No control is keyed `state`, because the Stage writes a `state` control onto the frame's `data-state`, which would force every item.
