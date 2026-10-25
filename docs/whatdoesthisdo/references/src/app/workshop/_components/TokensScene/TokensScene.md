## `src/app/workshop/_components/TokensScene/TokensScene.tsx`

### [TokensSceneProps](../../../../../../../../src/app/workshop/_components/TokensScene/TokensScene.tsx#L6)

Describes the props the Tokens entry passes to `TokensScene`.

- `show`: `"both"`, `"color"` or `"type"`, the value of the entry's Show control.
- `sample`: the text of the entry's Sample control, set in every type step.
- `ctx`: the frame settings; only `scheme` is read, to re-read the swatch values after a scheme change.

### [TokensScene({ show, sample, ctx })](../../../../../../../../src/app/workshop/_components/TokensScene/TokensScene.tsx#L38)

Renders the Tokens entry: the colour swatches with their computed values and the type steps set in a sample text.

- In: `show`, `"both"`, `"color"` or `"type"`, which halves to draw. `sample`, the text set in every type step. `ctx`, the frame settings; a scheme change re-reads the swatch values.
- Out: a two-column swatch grid (one column under `phone:`) and a list of eight type steps whose sample wraps anywhere, so a long word cannot widen the frame. Each swatch's value is read from the computed `--<token>` of the frame after render and written into the `code` element, so the numbers are what the frame really shows.

## Constants

- [`COLOR_TOKENS`](../../../../../../../../src/app/workshop/_components/TokensScene/TokensScene.tsx#L12): the twelve colour tokens in the order of the design system: the ten scheme-dependent ones, then `ink` and `accent-hover`, which keep one value in both schemes.
- [`TYPE_STEPS`](../../../../../../../../src/app/workshop/_components/TokensScene/TokensScene.tsx#L27): the eight type steps with the class each one uses; the classes are spelled out so Tailwind generates them.
