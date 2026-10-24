## `src/components/ThemeToggle/ThemeToggle.tsx`

### [ThemeToggleProps](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L7)

Describes the one prop of `ThemeToggle`.

- `size`: `"auto"`, `"text"` or `"icon"`, `"auto"` when omitted. Auto shows the dot and the scheme name on desktop and only the dot under `phone:`. Text always shows the name. Icon never does.

### [ThemeToggle({ size })](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L26)

Renders the pill that switches between the dark and light schemes, for the intro's mark row and the Workshop header.

- In: `size`, from `ThemeToggleProps`.
- Out: a `button` with a 10 px dot and the scheme name as a muted `Label`. Both names render, `dark` and `light`. CSS shows the one that matches the nearest scheme, so the first paint is right before React reads the theme. The dot is Tangerine in dark and a 2 px Text ring in light. Hover, focus and pressed turn the name to Text. Hover adds a Surface fill and a Line border; pressed adds the Surface fill and scales the dot to 0.6 over 75 ms. The hit area is at least 44 by 44 px in every size.
- The button has no `aria-pressed`. Its `aria-label` states the current theme, then the action: `dark theme, switch to light`. The visible word is therefore part of the name (WCAG 2.5.3). The label comes from `useTheme`, so on a light page it corrects itself just after hydration.
- Inside a Workshop frame a click switches only the frame. Elsewhere it switches the site and saves the choice; `useTheme` does the switching.

## Constants

- [`BUTTON_CLASSES`](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L11): the pill's size, shape, colours per state and its 150 ms colour transition.
- [`DOT_CLASSES`](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L14): the dot's size and pressed scale; its two looks come from the `.theme-dot` rule in `globals.css`.
- [`WORD_COLOR_CLASSES`](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L17): turns both muted scheme names to Text while the pill is hovered, focused or pressed.
- [`WORD_VISIBILITY`](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L20): the class on the wrapper of both scheme names that hides them for each `size`.
