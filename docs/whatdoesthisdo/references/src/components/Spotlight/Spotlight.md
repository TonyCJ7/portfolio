## `src/components/Spotlight/Spotlight.tsx`

### [Spotlight()](../../../../../../src/components/Spotlight/Spotlight.tsx#L10)

Renders the tangerine glow that follows the cursor under the page content, for the site layout to mount once.

- Out: a fixed, full-size `div` at `-z-10` with `aria-hidden` and `pointer-events: none`, painted with a 600 px radial gradient of `--spot`. It starts at opacity 0. The first `pointermove` on `window` fades it in over 300 ms on the standard curve. Under reduced motion (`useReducedMotion`) or on a coarse pointer (`useCoarsePointer`) it is `null`. The server always renders the layer, and the client removes it after hydration in those cases.
- Each pointer move stores the position and asks for one animation frame. That frame reads the layer's rect once and writes `--x` and `--y` as the pointer's offset from the layer's top left corner. React state never changes on a move.
- The offset from the rect lets it run inside a Workshop frame, whose `transform` makes the frame the containing block of the fixed layer. On the site the rect is the viewport. When the Workshop scales the frame below 1, the glow sits nearer the frame's top left than the pointer. The offset is in screen pixels and the gradient in unscaled frame pixels.

## Constants

- [`SPOTLIGHT_CLASSES`](../../../../../../src/components/Spotlight/Spotlight.tsx#L7): the layer's fixed position, stacking, starting opacity, 300 ms opacity transition and the radial gradient read from `--x`, `--y` and `--spot`.
