## `src/app/workshop/_components/TokensScene/TokensScene.tsx`

### [TokensScene({ show, sample, ctx })](../../../../../../../src/app/workshop/_components/TokensScene/TokensScene.tsx#L36)

Renders the Tokens entry: the colour swatches with their computed values and the type steps set in a sample text.

- In: `show`, `"both"`, `"color"` or `"type"`, which halves to draw. `sample`, the text set in every type step. `ctx`, the frame settings; a scheme change re-reads the swatch values.
- Out: a two-column swatch grid (one column under `phone:`) and a list of eight type steps. Each swatch's value is read from the computed `--<token>` of the frame after render and written into the `code` element, so the numbers are what the frame really shows.

## Constants

- [`COLOR_TOKENS`](../../../../../../../src/app/workshop/_components/TokensScene/TokensScene.tsx#L12): the ten scheme-dependent colour tokens, in the order of the design system.
- [`TYPE_STEPS`](../../../../../../../src/app/workshop/_components/TokensScene/TokensScene.tsx#L25): the eight type steps with the class each one uses; the classes are spelled out so Tailwind generates them.
