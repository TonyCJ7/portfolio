## `src/types/theme.ts`

### [Theme](../../../../../src/types/theme.ts#L1)

Names the two colour schemes the site can show: `"dark"` (the default) and `"light"`. The theme script, the theme hook and the toggle all speak this type, and it is the only value `data-theme` may take.

## Constants

- [`THEME_KEY`](../../../../../src/types/theme.ts#L3): `"tj-theme"`, the `localStorage` key that holds the visitor's chosen scheme. Read by the inline theme script and written by the theme toggle.
