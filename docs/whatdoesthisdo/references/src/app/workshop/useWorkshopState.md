## `src/app/workshop/useWorkshopState.ts`

### [readCtx(params)](../../../../../../src/app/workshop/useWorkshopState.ts#L19)

Reads the frame settings from the URL for the hooks below.

- In: `params`, the page's search params.
- Out: a frame context; `scheme` is light only for `scheme=light`, `device` is phone only for `device=phone`, `motion` is reduced only for `motion=reduced`; anything else gives the default.

### [useFrameContext()](../../../../../../src/app/workshop/useWorkshopState.ts#L27)

Returns the frame settings in the URL, for the sidebar links, which need nothing else.

- Out: the scheme, device and motion. The value changes when a writer below changes the URL. It reads the search params, so its caller must sit under `Suspense`.

### [useWorkshopState(entry)](../../../../../../src/app/workshop/useWorkshopState.ts#L33)

Keeps all Workshop state in the URL, so every combination of controls and frame settings is a link that can be shared.

- In: `entry`, the entry on screen; its controls decide which params are read.
- Out: the frame context, the coerced args, and three writers. `setArg` sets one control param and removes it when the value is the control's default; `setCtx` sets scheme, device or motion and removes a param that returns to its default; `reset` removes every control param. Writes go through `history.replaceState`, which Next's router picks up, so the page never reloads and every other caller of the hook sees the change.

## Constants

- [`DEFAULT_CTX`](../../../../../../src/app/workshop/useWorkshopState.ts#L13): dark, desktop, full motion; a frame setting equal to its default is removed from the URL to keep links short.
