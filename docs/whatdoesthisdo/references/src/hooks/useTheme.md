## `src/hooks/useTheme.ts`

### [UseThemeResult](../../../../../src/hooks/useTheme.ts#L12)

Describes what `useTheme` gives a toggle: the scheme it shows and the click handler that switches it.

- `theme`: `"dark"` or `"light"`, the scheme in force where the toggle sits.
- `toggle`: the click handler that switches to the other scheme.

### [themeScope(element)](../../../../../src/hooks/useTheme.ts#L21)

Finds the element whose scheme a toggle reads and writes.

- In: `element`, the toggle's own DOM node, or null before React attaches it.
- Out: the nearest ancestor with `data-scheme`, which is the Workshop frame. With no such ancestor, or with null, it returns `html`.

### [readTheme(scope)](../../../../../src/hooks/useTheme.ts#L26)

Reads the scheme in force for a toggle.

- In: `scope`, the element `themeScope` chose.
- Out: `"light"` when the scope's `data-scheme` says light. A scope without `data-scheme` falls back to `data-theme` on `html`. Any other value, or no value at all, gives `"dark"`, the site's default.

### [writeTheme(scope, next)](../../../../../src/hooks/useTheme.ts#L32)

Switches one scope to a scheme.

- In: `scope`, the element `themeScope` chose. `next`, the scheme to switch to.
- Out: nothing. A Workshop frame gets `data-scheme` and storage is left alone. `html` gets `data-theme`, and the choice is saved as `tj-theme` so the head script applies it before the next paint.
- Blocked storage throws on `setItem`. The error is swallowed, so the switch still applies on this page.

### [clickOrigin(event)](../../../../../src/hooks/useTheme.ts#L48)

Picks the point the circle reveal grows from.

- In: `event`, the toggle's click.
- Out: the pointer position in viewport pixels. A keyboard press reports `detail` 0 and no pointer position, so the centre of the toggle is used instead.

### [setRevealOrigin(event)](../../../../../src/hooks/useTheme.ts#L58)

Stores the circle's centre and final radius on `html` for the `reveal` keyframes in `globals.css`.

- In: `event`, the toggle's click.
- Out: nothing. Sets `--vt-x` and `--vt-y` to the origin and `--vt-r` to the distance from the origin to the farthest viewport corner, so the circle covers the whole page when it ends.

### [fade(apply)](../../../../../src/hooks/useTheme.ts#L71)

Runs the fallback switch for browsers without View Transitions.

- In: `apply`, the function that writes the new scheme.
- Out: nothing. Adds `theme-fade` to `html` before `apply`, so colours, backgrounds and borders cross-fade over 300 ms. The class is removed after `FADE_MS`. A second click inside that time restarts the timer, so the class stays for the whole second fade.

### [swapInstantly(apply)](../../../../../src/hooks/useTheme.ts#L80)

Switches the scheme in one frame, for reduced motion and for the Workshop frame.

- In: `apply`, the function that writes the new scheme.
- Out: nothing. Adds `theme-instant` to `html`, which turns every transition off. It then runs `apply` and reads a computed style, so the browser takes the new colours while transitions are off. The class is removed right after.
- Without it, the links, nav labels, toggle and tiles that fade their colour on hover would also fade the scheme change over 150 ms.

### [getServerSnapshot()](../../../../../src/hooks/useTheme.ts#L90)

Gives the scheme used on the server and during hydration.

- Out: always `"dark"`. The server cannot read storage, so the markup matches the default. The client then reads the real scheme without a hydration mismatch.

### [useTheme(scopeRef)](../../../../../src/hooks/useTheme.ts#L94)

Connects a theme toggle to the scheme of the place it sits in: the Workshop frame, or the whole site.

- In: `scopeRef`, a ref to the toggle's own element. It locates the scope when the toggle reads, subscribes and clicks.
- Out: `theme`, kept live by a `MutationObserver` on `data-theme` of `html` and on `data-scheme` of the frame. A Workshop toolbar change therefore reaches the toggle too. `toggle`, which switches the scope to the other scheme.
- On `html`, `toggle` runs a View Transition: a circle grows from the click over 500 ms. Without `document.startViewTransition` it runs `fade`. Under reduced motion, from the OS or from `data-motion="reduced"`, it runs `swapInstantly`, so nothing fades. Inside a frame it always runs `swapInstantly`.

## Constants

- [`FADE_MS`](../../../../../src/hooks/useTheme.ts#L17): the 300 ms the fallback cross-fade lasts, matching the transition in `html.theme-fade`.
- [`fadeTimer`](../../../../../src/hooks/useTheme.ts#L19): the pending removal of `theme-fade`, shared by every toggle on the page so a new fade cancels the old removal.
