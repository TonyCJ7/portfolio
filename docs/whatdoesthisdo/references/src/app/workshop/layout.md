## `src/app/workshop/layout.tsx`

### [WorkshopLayout({ children })](../../../../../../src/app/workshop/layout.tsx#L18)

Wraps every Workshop page in the Workshop chrome: a `SkipLink` to `#workshop-main` first, then the header with the `LogoLink` mark linking home, the word "Workshop" in mono label style, and a `ThemeToggle` with its text at the far end.

- In: `children`, the entry page.
- Out: a full-height column with the header above the page, in `main#workshop-main` with `tabIndex={-1}`, so following the skip link moves focus to it. Inside it a grid holds the entry list (`SidebarFromUrl`, with the plain `Sidebar` as its prerendered fallback) in a 236 px column and the entry page beside it, one column under `phone:`. The sidebar lives here, not in the entry page, so choosing an entry swaps only the page: the filter text and the focused link stay. The header toggle sits outside every frame, so it switches the whole Workshop page and saves the choice as `tj-theme`.

## Constants

- [`metadata`](../../../../../../src/app/workshop/layout.tsx#L11): the Workshop title, `workshopDescription`, the canonical `/workshop` and `workshopOpenGraph(\"/workshop\")`. The title `Workshop` comes with `titleTemplate`, so the entry pages still get ` · Tony Cherian Jacob`; a plain string title would stop the template. An entry page sets its own title, canonical and Open Graph block.
