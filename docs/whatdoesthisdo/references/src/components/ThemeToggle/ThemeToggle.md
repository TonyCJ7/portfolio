## `src/components/ThemeToggle/ThemeToggle.tsx`

### [ThemeToggleProps](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L7)

Describes the one prop of `ThemeToggle`.

- `size`: `"auto"`, `"text"` or `"icon"`, `"auto"` when omitted. Auto shows the dot and the scheme name on desktop and only the dot under `phone:`. Text always shows the name. Icon never does.

### [ThemeToggle({ size })](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L26)

Renders the pill that switches between the dark and light schemes, for the intro's mark row and the Workshop header.

- In: `size`, from `ThemeToggleProps`.
- Out: a `button` with a 10 px dot and the current scheme name as a muted `Label`. The dot is Tangerine in dark and a 2 px Text ring in light. Hover, focus and pressed turn the name to Text. Hover adds a Surface fill and a Line border; pressed adds the Surface fill and scales the dot to 0.6 over 75 ms. The hit area is at least 44 by 44 px in every size.
- `aria-pressed` is true in light. `aria-label` names the scheme a click switches to, for example `Switch to light theme`.
- Inside a Workshop frame a click switches only the frame. Elsewhere it switches the site and saves the choice; `useTheme` does the switching.

## Constants

- [`BUTTON_CLASSES`](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L11): the pill's size, shape, colours per state and its 150 ms colour transition.
- [`DOT_CLASSES`](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L14): the dot's size and pressed scale; its two looks come from the `.theme-dot` rule in `globals.css`.
- [`WORD_COLOR_CLASSES`](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L17): turns the muted scheme name to Text while the pill is hovered, focused or pressed.
- [`WORD_VISIBILITY`](../../../../../../src/components/ThemeToggle/ThemeToggle.tsx#L20): the class that hides the scheme name for each `size`.
