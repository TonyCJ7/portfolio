## `src/app/workshop/controls.ts`

### [select(label, options, def)](../../../../../src/app/workshop/controls.ts#L13), [text(label, def, max)](../../../../../src/app/workshop/controls.ts#L21), [toggle(label, def)](../../../../../src/app/workshop/controls.ts#L25)

Build one control definition each for an entry's `controls` map, so the entry file reads as a short table.

- In: `label`, the text shown above the field. `options`, the allowed values of a select. `def`, the value used when the URL has none. `max`, the longest text accepted.
- Out: the matching `SelectControl`, `TextControl` or `ToggleControl`, typed narrowly so toggles produce booleans in the entry's args.

### [defineEntry(entry)](../../../../../src/app/workshop/controls.ts#L29)

Types an entry from its own controls and hands it back as a general `WorkshopEntry` for the entry list.

- In: `entry`, the entry object; its `render` and `usage` are checked against its own controls.
- Out: the same object, widened. This is the one cast in the Workshop, so every other file stays strictly typed.

### [defaultArgs(controls)](../../../../../src/app/workshop/controls.ts#L35)

Builds the args an entry shows before any control is touched.

- In: `controls`, the entry's controls map.
- Out: an object with each control's `default` under its key.

### [coerceArg(control, raw)](../../../../../src/app/workshop/controls.ts#L41)

Turns one raw URL value into a value the control accepts, for the function below.

- In: `control`, the control definition. `raw`, the search param string, or null when absent.
- Out: the default when `raw` is null; for a select, `raw` only when it is one of the options, else the default; for text, `raw` cut to `max` characters; for a toggle, `true` for `"1"`, `false` for `"0"`, else the default.

### [coerceArgs(controls, params)](../../../../../src/app/workshop/controls.ts#L66)

Reads every control's value from the URL so a shared link with a stale or mistyped value still renders.

- In: `controls`, the entry's controls map. `params`, the page's search params.
- Out: an object with one coerced value per control key.

### [serializeArg(value)](../../../../../src/app/workshop/controls.ts#L78)

Writes a control value the way the URL stores it.

- In: `value`, a string or boolean.
- Out: the string unchanged; `"1"` for true and `"0"` for false.

### [jsx(name, props, children)](../../../../../src/app/workshop/controls.ts#L86)

Renders the usage line shown under the stage: the JSX a page would write for the current controls.

- In: `name`, the component name. `props`, prop values by name. `children`, the text between the tags, or none.
- Out: `<Name prop="v" flag>children</Name>`, or `<Name prop="v" />` without children. Props that are undefined, false or empty are left out; a true prop is written as a bare flag.

## Constants

- [`STATES`](../../../../../src/app/workshop/controls.ts#L11): the four forced states an entry's `state` select offers, `rest` first.
