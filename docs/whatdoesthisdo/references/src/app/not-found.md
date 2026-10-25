## `src/app/not-found.tsx`

### [NotFound()](../../../../../src/app/not-found.tsx#L11)

Renders the site's 404 page for any URL no route matches and when a route calls `notFound()`.

- Out: one centred column at the measure width with 24 px between items: the logo link home, the `404` label, the `notFound` heading and sentence, and a primary button back to `/`. The column fills the viewport height, so the text sits in the middle of the screen. The logo link is `self-start`, so its focus ring hugs the 36 px mark and does not stretch across the column.
- It replaces Next's built-in 404, so the page uses the site's tokens and follows the dark default and the light scheme.
- `main` keeps `id="main"` and has no skip link or `tabIndex`: the page has nothing to skip past, and nothing moves focus to it.

## Constants

- [`metadata`](../../../../../src/app/not-found.tsx#L7): the 404's document title `Not found`, which the root layout's template turns into `Not found · Tony Cherian Jacob`; without it the 404 shows the home page's title.
