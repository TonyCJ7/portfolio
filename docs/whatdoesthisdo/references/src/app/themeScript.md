## `src/app/themeScript.ts`

## Constants

- [`THEME_SCRIPT`](../../../../../src/app/themeScript.ts#L3): the inline script the root layout places first in `head`. It reads `localStorage["tj-theme"]` and, when the value is `"light"` or `"dark"`, sets `data-theme` on `html` before the first paint. Any other value, and a storage that throws, leaves the attribute unset, which is the dark default.
