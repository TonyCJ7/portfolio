## `src/types/workshop.ts`

### [Scheme](../../../../../src/types/workshop.ts#L3), [Device](../../../../../src/types/workshop.ts#L5), [Motion](../../../../../src/types/workshop.ts#L7)

Name the three frame settings the Workshop toolbar switches: the colour scheme (`"dark"` or `"light"`), the device layout (`"desktop"` or `"phone"`) and the motion setting (`"full"` or `"reduced"`). Each is read from a URL search param of the same name.

### [SelectControl](../../../../../src/types/workshop.ts#L9), [TextControl](../../../../../src/types/workshop.ts#L16), [ToggleControl](../../../../../src/types/workshop.ts#L23), [ControlDef](../../../../../src/types/workshop.ts#L29)

Describe one control in an entry's Controls panel. A select has a fixed list of `options` and a `default` drawn from them; its type parameter remembers the exact option strings so the entry's args are typed by them; a text control has a `default` string and a `max` length; a toggle has a boolean `default`. `ControlDef` is the union of the three, told apart by `kind`.

### [Controls](../../../../../src/types/workshop.ts#L31)

Maps control keys to their definitions. The key is also the URL search param that holds the control's value.

### [ArgValue](../../../../../src/types/workshop.ts#L33)

The value a control can hold: a string for selects and text, a boolean for toggles.

### [Args](../../../../../src/types/workshop.ts#L35)

Derives the argument object an entry's `render` and `usage` receive from its `controls`: a boolean for every toggle, the union of its options for every select, a string for every text control. When the controls are only known as the general `Controls` map, every value is `ArgValue`.

### [FrameContext](../../../../../src/types/workshop.ts#L45)

Bundles the scheme, device and motion the frame is showing, so an entry can render differently per setting.

### [Spec](../../../../../src/types/workshop.ts#L51)

Holds the text of an entry's Spec tab: the component `folder`, and lists of `props`, `tokens`, `motion` rules and `a11y` rules, with an optional `note`.

### [WorkshopEntry](../../../../../src/types/workshop.ts#L60)

Describes one page of the Workshop: its URL `id`, display `name`, build `stage` (1 primitives, 2 composites, 3 sections), one-line `lede`, whether the frame centres its content, its `controls`, its `spec`, a `render` function that returns the live component for the current args and frame, and a `usage` function that returns the JSX string shown under the stage.

### [WorkshopState](../../../../../src/types/workshop.ts#L72)

What the URL-state hook returns to the Workshop view: the current frame context and args, and the three writers `setArg`, `setCtx` and `reset`.
