## `src/app/workshop/_components/Stage/Stage.tsx`

### [Stage({ entry, args, ctx })](../../../../../../../src/app/workshop/_components/Stage/Stage.tsx#L16)

Draws the entry's component inside a real-size frame on a dotted ground, scaled down when the stage is narrower than the frame.

- In: `entry`, whose `render` fills the frame. `args`, the current control values; a `state` other than `rest` is written as `data-state` on the frame so forced hover, focus and pressed styles fire. `ctx`, the frame settings; `scheme` becomes `data-scheme` on the frame and `device` becomes `data-device` on the wrapper around it, so the frame's own `phone:` padding switches too.
- Out: a 656 px (desktop) or 390 px (phone) frame with the site's ground and text colours, scaled by `fit` from its top-left corner; the wrapper's height follows the scaled frame so the layout below moves with it. A `center` entry gets a centred flex frame at least 192 px tall. Sizes come from a `ResizeObserver` on the stage and on the frame.

## Constants

- [`FRAME_WIDTH`](../../../../../../../src/app/workshop/_components/Stage/Stage.tsx#L12): the unscaled frame width per device, 656 and 390.
- [`STAGE_INSET`](../../../../../../../src/app/workshop/_components/Stage/Stage.tsx#L14): the 32 px the stage padding takes, subtracted before the fit is computed.
