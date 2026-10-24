## `src/app/page.tsx`

### [Home()](../../../../../src/app/page.tsx#L28)

Renders the portfolio's home page: the skip link, the spotlight, and the two-column page with the intro on the left and the five sections on the right.

- Out: the skip link and the spotlight come first, as direct children of `body`. They live on this page, not in the root layout, so the Workshop pages get neither a second skip link to a missing `#main` nor a page-wide glow.
- The page grid has two children. The first is the `Intro` header. The second is a column `div` that holds `main#main` with the five sections, then the `Colophon` footer. The footer sits outside `main`, so it is the page's contentinfo landmark. `main` carries `tabIndex={-1}`, so the skip link moves focus to it.
- On desktop the grid is centred at the page width, split 48 to 52, with a 48 px column gap and 96 px side padding. The intro sticks to the top while the page scrolls. Below 1024 px the grid becomes one block with the `--gutter` side padding, and the intro scrolls away as the hero.
- The CV link appears only when `public/<profile.cvFile>` exists on disk at render time. Then `/<profile.cvFile>` goes to both the intro's Download CV button and the Experience section's résumé link. Without the file both links are left out.
- After the grid comes the `personJsonLd` script, `application/ld+json`, with every `<` escaped as `\u003c` so the text can never close the script tag. It is the page's last child, so the skip link stays first.
- Nothing from the grid to `main` sets `overflow`, a `z-index` or a background. The phone section bars need `position: sticky` to keep working. The highlight tiles lift to `z-index` 10 and must stay under those bars. The spotlight at `-z-10` must show through to the ground.

## Constants

- [`metadata`](../../../../../src/app/page.tsx#L17): the home page's own head tags: the canonical `/` and the Open Graph block, type `profile`, with `profile.pageTitle`, `profile.metaDescription`, url `/` and `openGraphBase`. The generated preview image joins it because the image file sits in the same segment.
