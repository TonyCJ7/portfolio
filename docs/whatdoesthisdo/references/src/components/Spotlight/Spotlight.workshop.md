## `src/components/Spotlight/Spotlight.workshop.tsx`

## Constants

- [`SPOT_RGB`](../../../../../../src/components/Spotlight/Spotlight.workshop.tsx#L5): the RGB triple of the spotlight colour per scheme, Tangerine `255, 92, 26` in dark and Tangerine Text `201, 58, 8` in light; the alpha control adds the alpha.
- [`PLACEHOLDER_LINES`](../../../../../../src/components/Spotlight/Spotlight.workshop.tsx#L10): three neutral filler paragraphs, so the glow can be seen passing under text.
- [`entry`](../../../../../../src/components/Spotlight/Spotlight.workshop.tsx#L16): the Spotlight Workshop entry: a "Fine pointer" toggle and an alpha select from `spec` to `0.24`, rendered left-aligned in a 320 px tall scene. An alpha other than `spec` sets `--spot` on the scene's wrapper with the scheme's colour; `spec` keeps the token. With the toggle off or motion reduced, the scene shows "Hidden: coarse pointer or reduced motion" in place of the layer.
