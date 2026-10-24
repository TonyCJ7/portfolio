## `src/hooks/useCoarsePointer.ts`

### [coarsePointerQuery()](../../../../../src/hooks/useCoarsePointer.ts#L9)

Returns the one `MediaQueryList` for `(pointer: coarse)` that the subscription and the reads share.

- Out: the list, created on the first call in the browser and kept for the page's lifetime. It is created lazily because the module is also evaluated on the server, where `matchMedia` does not exist.

### [subscribe(onChange)](../../../../../src/hooks/useCoarsePointer.ts#L15)

Watches the shared media query list for the hook below.

- In: `onChange`, the callback React hands to an external store; called when the main pointer changes between fine and coarse, for example when a tablet docks a trackpad or DevTools turns on touch emulation.
- Out: a function that stops watching.

### [getSnapshot()](../../../../../src/hooks/useCoarsePointer.ts#L23)

Reads whether the main pointer is coarse right now in the browser.

- Out: `true` on a touch screen without a mouse or trackpad; otherwise `false`.

### [getServerSnapshot()](../../../../../src/hooks/useCoarsePointer.ts#L27)

Gives the value used while rendering on the server and during hydration.

- Out: always `false`, so server markup assumes a fine pointer and the client corrects it on first render without a hydration mismatch.

### [useCoarsePointer()](../../../../../src/hooks/useCoarsePointer.ts#L31)

Tells a client component whether the main pointer is a finger, so pointer-following effects like the spotlight can switch off.

- Out: `true` when `(pointer: coarse)` matches; `false` on the server and otherwise. Updates live when the media query changes, through `useSyncExternalStore`.

## Constants

- [`COARSE_POINTER_QUERY`](../../../../../src/hooks/useCoarsePointer.ts#L5): the media query string `(pointer: coarse)`, matched once per page.
- [`coarsePointerMedia`](../../../../../src/hooks/useCoarsePointer.ts#L7): the cached `MediaQueryList`, empty until the first browser read.
