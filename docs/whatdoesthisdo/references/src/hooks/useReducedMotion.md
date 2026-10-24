## `src/hooks/useReducedMotion.ts`

### [subscribe(onChange)](../../../../../src/hooks/useReducedMotion.ts#L7)

Watches the two sources that can turn reduced motion on, for the hook below.

- In: `onChange`, the callback React hands to an external store; called whenever either source changes.
- Out: a function that stops both watchers. The sources are the `(prefers-reduced-motion: reduce)` media query and the `data-motion` attribute on `html`, watched with a `MutationObserver` on that one attribute.

### [getSnapshot()](../../../../../src/hooks/useReducedMotion.ts#L23)

Reads whether motion is reduced right now in the browser.

- Out: `true` when the OS asks for reduced motion or `html` carries `data-motion="reduced"` (the Workshop sets that attribute); otherwise `false`.

### [getServerSnapshot()](../../../../../src/hooks/useReducedMotion.ts#L30)

Gives the value used while rendering on the server and during hydration.

- Out: always `false`, so server markup is the animated version and the client corrects it on first render without a hydration mismatch.

### [useReducedMotion()](../../../../../src/hooks/useReducedMotion.ts#L34)

Tells a client component whether to skip motion, for the theme reveal, the spotlight and the enter animations.

- Out: `true` when the OS prefers reduced motion or the Workshop forced it with `data-motion="reduced"` on `html`; `false` on the server and otherwise. Updates live when either changes, through `useSyncExternalStore`.

## Constants

- [`REDUCED_MOTION_QUERY`](../../../../../src/hooks/useReducedMotion.ts#L5): the media query string `(prefers-reduced-motion: reduce)`, matched once per read and once for the subscription.
