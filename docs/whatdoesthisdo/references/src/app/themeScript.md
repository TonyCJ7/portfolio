## `src/app/themeScript.ts`

## Constants

- [`THEME_SCRIPT`](../../../../../src/app/themeScript.ts#L4): the inline script the root layout places first in `head`. It reads `localStorage["tj-theme"]` and, when the value is `"light"` or `"dark"`, sets `data-theme` on `html` before the first paint. Any other value, and a storage that throws, leaves the attribute unset, which is the dark default. It then appends the page's only `theme-color` meta, the browser bar colour, with that scheme's `THEME_COLOR` (Ink when nothing is stored). The script owns this tag rather than the layout's `viewport`, because editing a React-rendered tag before hydration makes React insert a second one ahead of it, and the browser reads the first.
