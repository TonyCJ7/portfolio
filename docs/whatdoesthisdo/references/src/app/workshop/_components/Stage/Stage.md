## `src/app/workshop/_components/Stage/Stage.tsx`

### [StageProps](../../../../../../../../src/app/workshop/_components/Stage/Stage.tsx#L6)

Describes the props `EntryStage` passes to `Stage`.

- `entry`: the Workshop entry to draw.
- `args`: the current control values, keyed by control name.
- `ctx`: the frame settings from the URL: scheme, device and motion.
- `onCtxChange`: writes a change of the frame settings back to the URL; `EntryStage` passes `setCtx`.

### [Stage({ entry, args, ctx, onCtxChange })](../../../../../../../../src/app/workshop/_components/Stage/Stage.tsx#L17)

Draws the entry's component inside a real-size frame on a dotted ground, scaled down when the stage is narrower than the frame.

- In: `entry`, whose `render` fills the frame. `args`, the current control values; a `state` other than `rest` is written as `data-state` on the frame so forced hover, focus and pressed styles fire. `ctx`, the frame settings; `scheme` becomes `data-scheme` on the frame and `device` becomes `data-device` on the wrapper around it, so the frame's own `phone:` padding switches too.
- Out: a 656 px (desktop) or 390 px (phone) frame with the site's ground and text colours, scaled by `fit` from its top-left corner; the wrapper's height follows the scaled frame so the layout below moves with it. A `center` entry gets a centred flex frame at least 192 px tall. Sizes come from a `ResizeObserver` on the stage and on the frame.
- When something inside the frame changes its `data-scheme`, as the theme toggle does, `onCtxChange` gets the new scheme. The toolbar and the `scheme` URL value then follow the frame. It writes only when the attribute differs from `ctx.scheme`. The observer is set up in a layout effect, so React's own write of the attribute is never reported back.

## Constants

- [`FRAME_WIDTH`](../../../../../../../../src/app/workshop/_components/Stage/Stage.tsx#L13): the unscaled frame width per device, 656 and 390.
- [`STAGE_INSET`](../../../../../../../../src/app/workshop/_components/Stage/Stage.tsx#L15): the 32 px the stage padding takes, subtracted before the fit is computed.
