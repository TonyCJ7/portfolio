# Portfolio Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Tony Cherian Jacob's portfolio: twenty components, the Workshop route that shows them with live controls, five sections, the home page, and the SEO, GEO and accessibility finish, one small commit per task.

**Architecture:** Next.js App Router site with every design value as a Tailwind 4 `@theme` token in `globals.css`; scheme switching swaps token values under `data-theme`/`data-scheme`, one breakpoint at 1024 px through a `phone:` custom variant, and forced component states through overridden `hover:`/`focus-visible:`/`active:` variants that also fire under a `data-state` ancestor. Each component folder carries a `<Name>.workshop.tsx` entry; the Workshop (`/workshop/[entry]`) is statically generated and keeps all its state in the URL. Sections and the page are assembled from the same components.

**Tech Stack:** Next.js 16.4 (App Router, `cacheComponents: true`), React 19.3, Tailwind CSS 4.1, TypeScript strict, ESLint 9. No new dependencies.

**Spec:** `docs/superpowers/specs/2026-10-24-portfolio-build-design.md` (read it first; this plan argues from it). Design values: `DESIGN.md` at the repo root (local, gitignored, present on Tony's machine). Résumé facts: `~/Downloads/Tony_CJ_Resume.md`.

## Global Constraints

- Next.js 16 differs from training data. Before using a Next API, read its file under `node_modules/next/dist/docs/01-app/`; each task names the file.
- No colour, spacing, radius, duration or font literal in a component or section. Tokens only (Task 1 lists them). The only literals allowed there are `duration-[833ms]` and the SVG paths of the mark. Workshop chrome and `*.workshop.tsx` scenes may use layout literals (frame widths, scene heights).
- Never `dark:` and never Tailwind's `sm: md: lg: xl: 2xl:` prefixes. Scheme comes from tokens; layout switches only through `phone:` (Task 1).
- States: write `hover:`, `focus-visible:`, `active:` only. They also fire under `[data-state="hover|focus|pressed"]` (Task 1), which is how the Workshop forces a state. Never add a `state` prop to a component.
- Motion: durations 75, 150, 300, 500 ms and `duration-[833ms]`; `ease-standard` or `ease-out-tj`; transform and opacity only, never layout properties; every animation and every transform transition carries the `motion-reduce:` counterpart the task names.
- Copy: no sentence about Tony's work is typed in a component or section. It comes from `src/content/*.ts` (Task 15), which comes from the writer skill. American spelling. Sentence case; uppercase only via the Label component.
- Phone number never appears. Email `tonycj1996@gmail.com`, GitHub `TonyCJ7`, LinkedIn `tonycj`, Dubai, UAE.
- Types outside component files except a component's own props type; shared types in `src/types/`. No comments unless a "why" the code cannot say. One component per file, one folder per component.
- Every new function, component, type and constant gets its WhatDoesThisDo entry under `docs/whatdoesthisdo/references/` in the same task (skill `whatdoesthisdo`).
- Deployable on Vercel and on a plain Node host: no `runtime` exports, no Vercel-only APIs, no `output: "export"`.
- Git: no commit without Tony's instruction. The final step of every task is "hand over": run `review-changes` on the working tree, report, end the turn with a question, and commit only when Tony says so, with the subject the task gives and no AI attribution.

## Review Focus

The spec's silences most likely to bite a visitor; each has its check pinned to the owning task.

1. A visitor arrives on a shared Workshop link with a control value the entry no longer has (`?variant=outline`). Expected: the default value, no crash. Pinned to Task 3 (`coerceArgs`).
2. `localStorage` throws (private mode, blocked storage). Expected: theme script and toggle fall back to dark silently. Pinned to Task 2 and Task 10.
3. Browser without `document.startViewTransition` (Firefox ESR, older Safari). Expected: the 300 ms crossfade, no error. Pinned to Task 10.
4. An experience title or tag longer than the column (the "extreme" entry, an unbroken 40-character word). Expected: wraps, no horizontal scroll, pill never truncates. Pinned to Tasks 6, 9 and 16.
5. Keyboard-only visitor with reduced motion on: skip link appears, every hover state is reachable by Tab, nothing animates, scroll-spy still updates. Pinned to Task 29.

## Shared conventions (read once, used by every task)

**Folders.** `src/components/<Name>/<Name>.tsx` (component), `src/components/<Name>/<Name>.workshop.tsx` (its entry). Sections: `src/sections/<Name>/<Name>.tsx` and `.workshop.tsx`. Content: `src/content/`. Types: `src/types/`. Hooks: `src/hooks/<useName>.ts`. Workshop internals: `src/app/workshop/` with private UI under `src/app/workshop/_components/<Name>/<Name>.tsx`.

**Tokens (Task 1).** Colours `ground surface surface-hover line fg fg-2 fg-muted accent accent-text accent-soft`, used as `bg-ground text-fg-muted border-line outline-accent bg-accent-soft`. Type steps `text-display text-stat text-headline text-tagline text-title text-body text-small text-label` (each sets size, line-height, letter-spacing, weight). Fonts `font-sans font-mono`. Radii `rounded-xs` 2 px (inline links), `rounded-sm` 6 px, `rounded-lg` 8 px (the mark), `rounded-md` 12 px, `rounded-full`. Widths `max-w-page` 1200 px, `max-w-measure` 36rem, `max-w-lede` 26rem. Shadow `shadow-lift`. Easings `ease-standard`, `ease-out-tj`. Spacing is Tailwind's default 4 px scale (`p-6` = 24 px, `gap-12` = 48 px, `py-24` = 96 px, `space-y-36` = 144 px).

**Variants (Task 1).** `phone:` = viewport under 1024 px unless inside `[data-device="desktop"]`, or always inside `[data-device="phone"]`. `hover:`, `focus-visible:`, `active:` = the real pseudo-class or a `[data-state="hover|focus|pressed"]` ancestor. `motion-reduce:` = `prefers-reduced-motion: reduce` or `html[data-motion="reduced"]`; `motion-safe:` is its inverse. Default styles are the desktop layout; `phone:` overrides.

**Workshop entry template (Task 3 defines the types).**

```tsx
import { defineEntry, select, text, toggle, jsx } from "@/app/workshop/controls";

export const entry = defineEntry({
  id: "button", name: "Button", stage: 1, center: true,
  lede: "…",
  controls: { variant: select("Variant", ["primary", "ghost"], "primary"), state: select("State", STATES, "rest") },
  spec: { folder: "src/components/Button/", props: […], tokens: […], motion: […], a11y: […] },
  render: (args, ctx) => <Button variant={args.variant} href="#">Get in touch</Button>,
  usage: (args) => jsx("Button", { variant: args.variant, href: "#contact" }, "Get in touch"),
});
```

`STATES = ["rest", "hover", "focus", "pressed"] as const` is exported from `controls.ts`. When an entry has a `state` control the frame sets `data-state` from it (`rest` sets none). The `render` output is placed inside the frame, which already carries `data-scheme`, `data-device` and `bg-ground text-fg`.

**Check recipe (every task).** `npm run check` passes (Task 2 adds the script). Then in Chrome DevTools MCP, one tab, sequential calls: open `http://localhost:3000/workshop/<id>` on the dev server already running for this checkout (global "Running things" rule); for each state, variant and scheme the task names, at the widths named, run `evaluate_script` returning `{sw: f.scrollWidth, cw: f.clientWidth, sh: f.scrollHeight, ch: f.clientHeight}` for the frame element `[data-frame]` and expect `sw <= cw`; `take_screenshot`; `list_console_messages` must show no errors or warnings. Default widths: 1440 and 390 (the chrome collapses below 1024). Page tasks use the full matrix 320, 390, 768, 1024, 1280, 1440, 1920.

**Hand-over step (every task).** Run the `review-changes` skill on the working tree against `main`, report findings, end the turn asking Tony whether to commit. On his go: `[ "$(git branch --show-current)" = "main" ] || { echo "wrong branch"; exit 1; }` then `git add <files> && git commit -m "<subject>"`.

---

### Task 1: Design tokens, type scale, fonts, variants

**Files:**
- Modify: `src/app/globals.css` (replace entirely)
- Modify: `src/app/layout.tsx` (fonts, html/body classes)
- Modify: `src/app/page.tsx` (replace the scaffold's literal classes with tokens; content unchanged for now)

**Interfaces:**
- Produces: the token and variant names in "Shared conventions" plus `text-label-sm`, `text-headline-phone`, `animate-wiggle`, `animate-enter`, the `focus-within:` variant and `--gutter`; CSS variables `--ground --surface --surface-hover --line --fg --fg-2 --fg-muted --accent --accent-text --accent-soft --spot --lift-line --lift-shadow`; font variables `--font-dm-sans`, `--font-geist-mono`.

- [ ] **Step 1: Read** `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md` and `11-css.md` (Tailwind section).

- [ ] **Step 2: Write `src/app/globals.css`** with, in this order:
  1. `@import "tailwindcss";`
  2. The five `@custom-variant` rules exactly as verified:
     ```css
     @custom-variant phone { @media (max-width: 1023px) { &:not([data-device="desktop"] *) { @slot; } } [data-device="phone"] & { @slot; } }
     @custom-variant hover { @media (hover: hover) { &:hover { @slot; } } [data-state="hover"] & { @slot; } }
     @custom-variant focus-visible { &:focus-visible { @slot; } [data-state="focus"] & { @slot; } }
     @custom-variant active { &:active { @slot; } [data-state="pressed"] & { @slot; } }
     @custom-variant focus-within { &:focus-within { @slot; } [data-state="focus"] & { @slot; } }
     @custom-variant motion-reduce { @media (prefers-reduced-motion: reduce) { @slot; } html[data-motion="reduced"] & { @slot; } }
     @custom-variant motion-safe { @media (prefers-reduced-motion: no-preference) { html:not([data-motion="reduced"]) & { @slot; } } }
     ```
  3. Scheme blocks. Dark on `:root, [data-scheme="dark"]`: `--ground #16161A; --surface #1D1D22; --surface-hover #232329; --line #2C2C33; --fg #F5F5F4; --fg-2 #ADADB2; --fg-muted #86868E; --accent #FF5C1A; --accent-text #FF8A5C; --accent-soft rgba(255,92,26,0.12); --spot rgba(255,92,26,0.08); --lift-line rgba(245,245,244,0.08); --lift-shadow rgba(0,0,0,0.25); color-scheme: dark`. Light on `:root[data-theme="light"], [data-scheme="light"]` only (no `prefers-color-scheme` block: dark is the default, Tony's decision of 2026-10-24): `--ground #F5F5F4; --surface #FFFFFF; --surface-hover #ECECEA; --line #DCDCDA; --fg #16161A; --fg-2 #4F4F57; --fg-muted #6E6E76; --accent #FF5C1A; --accent-text #C93A08; --accent-soft rgba(255,92,26,0.10); --spot rgba(201,58,8,0.06); --lift-line #DCDCDA; --lift-shadow rgba(22,22,26,0.10); color-scheme: light`.
  4. `@theme inline` mapping: `--color-<name>: var(--<name>)` for the ten colours; `--font-sans: var(--font-dm-sans), system-ui, sans-serif; --font-mono: var(--font-geist-mono), ui-monospace, monospace`; `--radius-sm: 6px; --radius-md: 12px` (`rounded-xs` 2 px and `rounded-lg` 8 px keep Tailwind's defaults); `--container-page: 1200px; --container-measure: 36rem; --container-lede: 26rem`; `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1); --ease-out-tj: cubic-bezier(0.17, 0, 0.21, 1.01)`; `--shadow-lift: inset 0 1px 0 0 var(--lift-line), 0 10px 15px -3px var(--lift-shadow)`; type steps with sub-keys `--text-<step>`, `--text-<step>--line-height`, `--text-<step>--letter-spacing`, `--text-<step>--font-weight`: display `clamp(2.5rem, 5vw, 3.5rem) / 1.05 / -0.025em / 700`; tagline `1.25rem / 1.4 / -0.01em / 500`; stat `2.25rem / 1.1 / -0.02em / 700`; headline `1.5rem / 1.3 / -0.015em / 600`; title `1rem / 1.4 / normal / 500`; body `1rem / 1.625 / normal / 400`; small `0.875rem / 1.55 / normal / 400`; label `0.75rem / 1.35 / 0.06em / 600`; label-sm `0.6875rem / 1.35 / 0.06em / 600` (the place line); headline-phone `1.375rem / 1.3 / -0.015em / 600` (the large link on phone). Animations with their keyframes inside `@theme`: `--animate-wiggle: wiggle 833ms var(--ease-out-tj) 1` with `@keyframes wiggle { 0%, 100% { rotate: 0deg } 40% { rotate: -6deg } }`; `--animate-enter: enter 300ms var(--ease-out-tj) both` with `@keyframes enter { from { opacity: 0; translate: 0 8px } }`.
  5. Base: `:root { --gutter: clamp(24px, 6vw, 48px); }`, `html { background: var(--ground); color: var(--fg); scroll-behavior: smooth; }`, `@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } } html[data-motion="reduced"] { scroll-behavior: auto; }`, `body { font-family: var(--font-sans); -webkit-font-smoothing: antialiased; }`, `::selection { background: var(--accent-soft); }`.

- [ ] **Step 3: Fonts in `src/app/layout.tsx`.** Replace Geist with `DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })` and keep `Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })`; `<html lang="en" className={\`${dmSans.variable} ${geistMono.variable}\`} suppressHydrationWarning>` (needed for Task 2's attribute), `<body className="min-h-dvh">`. Remove `h-full antialiased` and the flex classes.

- [ ] **Step 4: Retoken `src/app/page.tsx`.** Replace every literal class (`bg-[#F5F5F4]`, `dark:*`, `text-zinc-*`, `bg-[#FF5C1A]`, `hover:bg-[#e6500f]`, `text-5xl`…) with tokens: ground/fg come from `html`, the kicker `text-fg-2`, dot `bg-accent`, h1 `text-display`, the link `bg-accent text-ground hover:bg-accent-hover`. Behaviour and copy unchanged; this page is replaced in Task 29.

- [ ] **Step 5: Check.** `npm run lint && npx tsc --noEmit && npm run build` pass. In Chrome at 1440 and 390: the scaffold page renders in DM Sans on ink; with the OS in light mode, on paper; `getComputedStyle(document.documentElement).getPropertyValue("--accent-text")` is `#FF8A5C` dark and `#C93A08` light.

- [ ] **Step 6: Docs.** WhatDoesThisDo: update `docs/whatdoesthisdo/references/src/app/layout.md` for the font constants.

- [ ] **Step 7: Hand over.** Subject `feat: add design tokens and type scale`.

---

### Task 2: Theme script, motion attribute, reduced-motion hook, check script

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/hooks/useReducedMotion.ts`
- Create: `src/types/theme.ts`
- Modify: `package.json` (scripts)

**Interfaces:**
- Produces: `type Theme = "dark" | "light"` and `const THEME_KEY = "tj-theme"` in `src/types/theme.ts`; `useReducedMotion(): boolean`; `npm run check`.

- [ ] **Step 1: Read** `node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md` (theme section).

- [ ] **Step 2: Inline script.** In `layout.tsx`, first child of `<head>`: `<script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />` where `THEME_SCRIPT` (a string constant in `src/app/themeScript.ts`) is a self-invoking function: `try { var t = localStorage.getItem("tj-theme"); if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t); } catch (e) {}`. No value set means dark (the `:root` block in Task 1). Review Focus 2: the try/catch is the fallback.

- [ ] **Step 3: `useReducedMotion(): boolean`** (client hook, `"use client"`): `true` when `matchMedia("(prefers-reduced-motion: reduce)").matches` or `document.documentElement.dataset.motion === "reduced"`; subscribes to the media query `change` event and a `MutationObserver` on `html` attributes `["data-motion"]`; initial value `false` on the server. Implement with `useSyncExternalStore`.

- [ ] **Step 4: `package.json`:** `"check": "eslint && tsc --noEmit && next build"`.

- [ ] **Step 5: Check.** `npm run check` passes. In Chrome: `localStorage.setItem("tj-theme","light")`, reload, `document.documentElement.dataset.theme === "light"` and the page is on paper before any flash (screenshot immediately after `navigate_page`). `localStorage.removeItem("tj-theme")`, reload, no attribute. Emulate reduced motion (`emulate`) and confirm the hook returns `true` by a temporary `console.log` removed before hand-over.

- [ ] **Step 6: Docs** for `THEME_SCRIPT`, `useReducedMotion`, `Theme`, `THEME_KEY`.

- [ ] **Step 7: Hand over.** Subject `feat: add theme script and reduced motion hook`.

---

### Task 3: Workshop shell, controls, URL state, Tokens entry, repository extension

**Files:**
- Create: `src/types/workshop.ts`, `src/app/workshop/controls.ts`, `src/app/workshop/entries.ts`, `src/app/workshop/useWorkshopState.ts`, `src/app/workshop/page.tsx`, `src/app/workshop/layout.tsx`, `src/app/workshop/[entry]/page.tsx`
- Create: `src/app/workshop/_components/WorkshopView/WorkshopView.tsx`, `_components/Toolbar/Toolbar.tsx`, `_components/Sidebar/Sidebar.tsx`, `_components/Stage/Stage.tsx`, `_components/ControlsPanel/ControlsPanel.tsx`, `_components/SpecPanel/SpecPanel.tsx`, `_components/UsageLine/UsageLine.tsx`
- Create: `src/app/workshop/tokens.workshop.tsx`
- Create: `CLAUDE.md` (repo root, two lines: `repo-key: TonyCJ7/portfolio` and a pointer to AGENTS.md)
- Create outside the repo: `~/.claude/repos/TonyCJ7/portfolio/repo.md`; move `~/.claude/repos/portfolio/*` into that folder.

**Interfaces:**
- Produces (`src/types/workshop.ts`):
  ```ts
  export type Scheme = "dark" | "light"; export type Device = "desktop" | "phone"; export type Motion = "full" | "reduced";
  export type ForcedState = "rest" | "hover" | "focus" | "pressed";
  export type ControlDef = { kind: "select"; label: string; options: readonly string[]; default: string } | { kind: "text"; label: string; default: string; max: number } | { kind: "toggle"; label: string; default: boolean };
  export type Controls = Record<string, ControlDef>;
  export type Args<C extends Controls> = { [K in keyof C]: C[K] extends { kind: "toggle" } ? boolean : string };
  export type FrameContext = { scheme: Scheme; device: Device; motion: Motion };
  export type Spec = { folder: string; props: string[]; tokens: string[]; motion: string[]; a11y: string[]; note?: string };
  export type WorkshopEntry<C extends Controls = Controls> = { id: string; name: string; stage: 1 | 2 | 3; lede: string; center?: boolean; controls: C; spec: Spec; render: (args: Args<C>, ctx: FrameContext) => ReactNode; usage: (args: Args<C>, ctx: FrameContext) => string };
  ```
- Produces (`controls.ts`): `select(label, options, def)`, `text(label, def, max)`, `toggle(label, def)` returning the matching `ControlDef`; `STATES`; `defineEntry<C extends Controls>(e: WorkshopEntry<C>): WorkshopEntry` (one cast, here only); `defaultArgs(controls: Controls): Record<string, string | boolean>`; `coerceArgs(controls: Controls, params: URLSearchParams): Record<string, string | boolean>` (a select value not in `options` → default; a text value cut to `max`; toggle from `"1"`/`"0"`); `jsx(name: string, props: Record<string, string | boolean | undefined>, children?: string): string` rendering `<Name prop="v" flag>children</Name>` and dropping `undefined`, `false` and default-looking empties.
- Produces (`entries.ts`): `export const entries: WorkshopEntry[]` in build order and `findEntry(id: string): WorkshopEntry | undefined`. Later tasks append one import and one array item each.
- Produces (`useWorkshopState.ts`): `useWorkshopState(entry: WorkshopEntry): { ctx: FrameContext; args: Record<string, string | boolean>; setArg(key, value): void; setCtx(patch: Partial<FrameContext>): void; reset(): void }`. Reads `useSearchParams` (`scheme`, `device`, `motion`, plus one param per control key); writes with `window.history.replaceState(null, "", "?" + qs)` (Next picks this up, see `use-search-params.md`); `motion` also sets or removes `data-motion="reduced"` on `html`.

- [ ] **Step 1: Read** `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/use-search-params.md`, `generate-static-params.md`, `03-file-conventions/dynamic-routes.md`, `04-functions/redirect.md`.

- [ ] **Step 2: Types and helpers** as in Interfaces. `coerceArgs` is the Review Focus 1 guard.

- [ ] **Step 3: Routes.** `src/app/workshop/page.tsx`: `redirect("/workshop/tokens")`. `layout.tsx` (server): `<header>` with the mark linking home (plain `<a href="/">` with the existing `Logo` at 28 px until Task 5 replaces it with `LogoLink`), a `text-label font-mono uppercase text-fg-muted` word "Workshop", and `{children}`; `generateMetadata` title "Workshop · Tony Cherian Jacob", description "Every component of the site, with live controls." `[entry]/page.tsx` (server): `generateStaticParams` from `entries`, `notFound()` for an unknown id, metadata title `${entry.name} · Workshop`, renders `<Suspense fallback={null}><WorkshopView entryId={params.entry} /></Suspense>`. In Next 16 `params` is a Promise; await it.

- [ ] **Step 4: `WorkshopView`** (`"use client"`): looks up the entry with `findEntry`, calls `useWorkshopState`, renders the grid: `grid-cols-[236px_minmax(0,1fr)_340px] gap-6 p-6 phone:grid-cols-1`. Children: `Toolbar` (three segmented groups scheme/device/motion, buttons with `aria-pressed`), `Sidebar` (filter input + entries grouped by stage with headings "Primitives", "Composites", "Sections"; the current entry `aria-current="page"`; `phone:` renders a `<select>` instead), `Stage`, aside with two tabs (Controls, Spec; `role="tablist"`), `ControlsPanel` (select → `<select>`; text → `<input maxLength={max}>` with a `n/max` counter; toggle → checkbox; Reset button), `UsageLine` (`<pre>` with the entry's `usage(args, ctx)`), `SpecPanel` (five lists from `spec`). All chrome uses tokens and `text-small`/`text-label`.

- [ ] **Step 5: `Stage`.** Dotted ground: `bg-[radial-gradient(var(--line)_1px,transparent_1px)] bg-[size:16px_16px]`. The frame: `<div data-frame data-scheme={ctx.scheme} data-device={ctx.device} data-state={args.state === "rest" ? undefined : args.state} className="origin-top-left bg-ground text-fg rounded-md border border-line p-12 phone:p-(--gutter) [--gutter:24px]" style={{ width: device === "phone" ? 390 : 656, transform: \`scale(${fit})\`, maxWidth: "none" }}>`. `fit = Math.min(1, (stageWidth - 32) / frameWidth)` from a `ResizeObserver` on the stage; the wrapper height is set to `frameHeight * fit` so the layout follows. `center` entries add `flex items-center justify-center min-h-48`. The frame fixes `--gutter` at 24 px so bleeding bars (Task 12) stay inside it; the padding itself proves the variant.

- [ ] **Step 6: Tokens entry** `src/app/workshop/tokens.workshop.tsx`: controls `show: select("Show", ["both", "colour", "type"], "both")`, `sample: text("Sample", "Tony Cherian Jacob", 32)`; renders the ten colour swatches (name, token, computed hex via a small client component reading `getComputedStyle`) and the eight type steps each showing the sample; spec: folder `src/app/globals.css`, props from the spec's Task 1 list, tokens "Colours as listed, both schemes; Radii 6, 12, pill; Space 4 base", motion "75 150 300 500 ms; spring 833 ms; standard and out curves", a11y "Contrast AA in both schemes; every animation behind reduced motion". Register in `entries.ts`.

- [ ] **Step 7: Repository extension.** Create `~/.claude/repos/TonyCJ7/portfolio/repo.md` with front matter `includes: []` and sections: Tokens (the names), Variants, Folder shape, Workshop entry template, Check recipe, QA matrix, Copy rule, "No `dark:`, no responsive prefixes", pointing to this plan for the cards. `mv ~/.claude/repos/portfolio/* ~/.claude/repos/TonyCJ7/portfolio/ && rmdir ~/.claude/repos/portfolio`. Add the repo to the index table in `~/.claude/CLAUDE.md`. Create `CLAUDE.md` at the repo root: `repo-key: TonyCJ7/portfolio` and one line "Project instructions: AGENTS.md; build plan: docs/superpowers/plans/2026-10-24-portfolio-build.md".

- [ ] **Step 8: Check.** `npm run check` passes and the build lists `/workshop/tokens` as static. In Chrome at 1440: `/workshop` lands on `/workshop/tokens`; switching scheme to light recolours only the frame; device phone narrows the frame to 390 and its padding to 24 px; motion reduced sets `html[data-motion="reduced"]`; `?show=bogus` renders "both"; typing in Sample updates the URL and survives reload. At 390: single column, sidebar is a select, no horizontal scroll on `document.documentElement`.

- [ ] **Step 9: Docs** for every exported function and type above.

- [ ] **Step 10: Hand over.** Subject `feat: add workshop shell and tokens entry`.

---

### Task 4: Focus ring

**Files:**
- Modify: `src/app/globals.css`
- Create: `src/app/workshop/focus-ring.workshop.tsx`; modify `entries.ts`

- [ ] **Step 1: CSS** after the base block: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }` and `:focus:not(:focus-visible) { outline: none; }`. Nothing else: components only set `border-radius` so the ring follows their shape.

- [ ] **Step 2: Entry** id `focus-ring`, stage 1, center, lede from the spec ("One rule for every keyboard user…"); control `target: select("Target", ["button", "link", "input"], "button")`; renders a plain `<button>`, `<a>` or `<input>` styled with tokens, wrapped so the frame forces `data-state="focus"` through `state: select("State", ["rest", "focus"], "focus")`; spec tokens "outline-color Tangerine; offset 2px; 3.9:1 on ink, 3.3:1 on paper", a11y "focus-visible only, never :focus; mirrors hover".

- [ ] **Step 3: Check.** `/workshop/focus-ring?state=focus` shows the ring in both schemes; a real Tab into the frame shows it; a mouse click on the button shows none.

- [ ] **Step 4: Docs** for the entry constant. **Step 5: Hand over.** Subject `feat: add focus ring`.

---

### Task 5: Label

**Files:**
- Create: `src/components/Label/Label.tsx`, `Label.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `Label({ tone = "muted", size = 12, as = "span", dateTime, href, className, children }: LabelProps)` with `tone: "muted" | "active" | "accent"`, `size: 12 | 11`, `as: "span" | "time" | "a"`. Classes: `font-mono uppercase` + `text-label` (12) or `text-label-sm` (11) + tone `text-fg-muted` / `text-fg` / `text-accent-text` + `className`.

- [ ] **Step 1: Component** as above; `as="time"` requires `dateTime`; `as="a"` requires `href` and adds `rounded-xs` for the ring.
- [ ] **Step 2: Entry** `label`: controls `tone`, `size: select("Size", ["12", "11"], "12")`, `text: text("Text", "Experience", 24)`, `as`; usage via `jsx("Label", …)`; spec from the design (props, tokens "Geist Mono 600, 0.06em, uppercase via CSS", motion "colour 150 ms when used in NavLink", a11y "uppercase by text-transform; dates in time with datetime").
- [ ] **Step 3: Check** both schemes, three tones; `getComputedStyle(el).textTransform === "uppercase"` and `el.textContent === "Experience"`.
- [ ] **Step 4: Docs. Step 5: Hand over.** Subject `feat: add label component`.

---

### Task 6: Tag and TagList

**Files:**
- Create: `src/components/Tag/Tag.tsx`, `src/components/Tag/TagList.tsx` (two files, one component each), `Tag.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `Tag({ children })` → `<li className="rounded-full bg-accent-soft px-3 py-1 text-small font-medium text-accent-text">`; `TagList({ items, label = "Tools" }: { items: string[]; label?: string })` → `<ul aria-label={label} className="flex flex-wrap gap-2">`.

- [ ] **Step 1: Components.** **Step 2: Entry** `tag`: controls `text: text("Text", "Next.js", 18)`, `many: toggle("Whole Frontend group", false)` (uses a local eleven-item list until Task 15; replace with `skills[0].items` in Task 16). Review Focus 4: with `text` = 18 `W`s the pill wraps the row, never clips (`overflow-wrap: anywhere` on the `li`).
- [ ] **Step 3: Check** frame `scrollWidth <= clientWidth` with the 18-W tag at 390. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add tag component`.

---

### Task 7: Logo link

**Files:**
- Create: `src/components/Logo/LogoLink.tsx`, `Logo.workshop.tsx`; modify `src/components/Logo/Logo.tsx` (aria-label), `src/app/workshop/layout.tsx` (use `LogoLink`), `entries.ts`

**Interfaces:**
- Produces: `LogoLink({ size = 44, href = "/" }: { size?: 44 | 36 | 28; href?: string })` → `<a aria-label="Home" className="group inline-block rounded-lg">` wrapping `<Logo size={size} className="motion-safe:group-hover:animate-wiggle origin-[50%_60%]" />`. `animate-wiggle` comes from Task 1. `Logo` keeps `role="img"` but its `aria-label` becomes "tj mark" (the link carries "Home").

- [ ] **Step 1: Component.** **Step 2: Entry** `logo`: controls `state: select("State", ["rest", "hover", "focus"], "rest")`, `size: select("Size", ["44", "36"], "44")`; spec per design (motion "rotate 0 → -6 → 0 over 833 ms spring, origin 50% 60%; none under reduced motion"). **Step 3:** Workshop header uses `<LogoLink size={28} />`.
- [ ] **Step 4: Check.** Hover in the frame runs the wiggle once (`getAnimations().length === 1` during hover); with motion reduced none. **Step 5: Docs. Step 6: Hand over.** Subject `feat: add logo link with hover and focus states`.

---

### Task 8: Button

**Files:**
- Create: `src/components/Button/Button.tsx`, `Button.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `Button({ variant = "primary", href, onClick, arrow = variant === "primary", children }: ButtonProps)`; `href` → `<a>` (`next/link` when it starts with `/`, plain anchor for `#` and external), else `<button type="button">`. Shared classes: `inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-title transition-[background-color,color,scale] duration-150 ease-standard active:scale-98 motion-reduce:transition-[background-color,color] motion-reduce:active:scale-100`. Primary: `bg-accent text-ground hover:bg-accent-hover focus-visible:bg-accent-hover`. Ghost: `border border-line text-fg hover:bg-surface focus-visible:bg-surface active:bg-surface-hover`. Arrow: `<span aria-hidden className="transition-transform duration-75 ease-standard group-hover:translate-x-1 motion-reduce:transition-none">→</span>` (button root has `group`).

- [ ] **Step 1: Component.** **Step 2: Entry** `button`: controls `variant`, `state: select("State", STATES, "rest")`, `label: text("Label", "Get in touch", 18)`, `arrow: toggle("Arrow (primary)", true)`, `pair: toggle("Show the pair", false)` (renders primary + ghost side by side, `flex flex-wrap gap-3`). Spec per design ("Ink on tangerine 12.4:1", "pressed shown on :active").
- [ ] **Step 3: Check** eight combinations (2 variants × 4 states) × 2 schemes at 1440; the pair at 390 wraps without overflow. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add button component`.

---

### Task 9: Link

**Files:**
- Create: `src/components/Link/Link.tsx`, `Link.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `Link({ kind = "prose", href, external = false, children }: LinkProps)`, `kind: "prose" | "arrow" | "large" | "social"`. Internal paths starting with `/` render `next/link` (imported as `NextLink`); `#`, `mailto:` and external hrefs render `<a>`. `external` adds `target="_blank" rel="noopener noreferrer"`. Classes by kind: prose `font-medium text-fg underline-offset-4 decoration-accent decoration-1 hover:underline focus-visible:underline rounded-xs transition-colors duration-150 ease-standard`; arrow `group inline-flex items-center gap-1 text-title text-fg hover:text-accent-text focus-visible:text-accent-text` with `<span aria-hidden className="transition-transform duration-75 ease-standard group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none">↗</span>`; large `text-headline phone:text-headline-phone text-fg underline decoration-accent decoration-1 underline-offset-6 hover:text-accent-text focus-visible:text-accent-text [overflow-wrap:anywhere]`; social `font-mono text-label uppercase text-fg-muted hover:text-fg focus-visible:text-fg transition-colors duration-150`. Pressed equals hover: no `active:` rules.

- [ ] **Step 1: Component.** **Step 2: Entry** `link`: controls `kind`, `state`, `text: text("Text", "", 40)` (empty → kind's default text: "Almosafer" inside a prose sentence, "Download the full résumé", "tonycj1996@gmail.com", "GitHub"). **Step 3: Check** 4 kinds × 4 states × 2 schemes; the large link with a 40-character unbroken string wraps at 390. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add link component`.

---

### Task 10: Theme toggle

**Files:**
- Create: `src/components/ThemeToggle/ThemeToggle.tsx`, `ThemeToggle.workshop.tsx`, `src/hooks/useTheme.ts`; modify `src/app/globals.css` (view transition CSS, `.theme-dot`), `src/app/workshop/layout.tsx` (header toggle), `entries.ts`, `_components/Stage/Stage.tsx` (observe the frame)

**Interfaces:**
- Produces: `useTheme(scopeRef: RefObject<HTMLElement | null>): { theme: Theme; toggle(event: MouseEvent): void }`. Scope = `scopeRef.current?.closest("[data-scheme]") ?? document.documentElement`. Reading: `data-scheme` on the scope, else `data-theme` on `html`, else `"dark"`. Writing: sets `data-scheme` on a scope that is not `html`, or `data-theme` on `html` plus `localStorage.setItem(THEME_KEY, next)` inside try/catch (Review Focus 2). Transition when scope is `html`, `document.startViewTransition` exists and `useReducedMotion()` is false: set `--vt-x`, `--vt-y` (click coordinates) and `--vt-r` (distance to the farthest corner) on `html`, then `startViewTransition(apply)`; when `startViewTransition` is missing (Review Focus 3): add class `theme-fade` to `html`, apply, remove after 300 ms; reduced motion: apply only.
- Produces: `ThemeToggle({ size = "auto" }: { size?: "auto" | "text" | "icon" })` → `<button type="button" aria-pressed={theme === "light"} aria-label={\`Switch to ${next} theme\`} className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-transparent px-3 text-fg-muted hover:bg-surface hover:border-line hover:text-fg focus-visible:text-fg active:bg-surface active:text-fg transition-colors duration-150 ease-standard">` with the dot `<span aria-hidden className="theme-dot size-2.5 rounded-full transition-transform duration-75 group-active:scale-60 motion-reduce:transition-none">` and the word `<Label tone="active">{theme}</Label>` hidden with `phone:hidden` when `size="auto"`, always hidden for `icon`, always shown for `text`; icon form keeps the 44 px hit area through `min-h-11 min-w-11 justify-center`. The dot's two looks follow the scheme the same way the tokens do, so they are one CSS rule in `globals.css` under `@layer components`: `.theme-dot { background: var(--accent) }` and, on the same three light selectors Task 1 uses, `.theme-dot { background: transparent; box-shadow: inset 0 0 0 2px var(--fg) }`.
- CSS in `globals.css`: `::view-transition-old(root), ::view-transition-new(root) { animation: none; mix-blend-mode: normal }`, `::view-transition-new(root) { animation: reveal 500ms var(--ease-out-tj) }`, `@keyframes reveal { from { clip-path: circle(0 at var(--vt-x) var(--vt-y)) } to { clip-path: circle(var(--vt-r) at var(--vt-x) var(--vt-y)) } }`, `html.theme-fade, html.theme-fade * { transition: background-color 300ms var(--ease-standard), color 300ms var(--ease-standard), border-color 300ms var(--ease-standard) !important }`.
- `Stage` watches the frame's `data-scheme` with a `MutationObserver` and calls `setCtx({ scheme })` so the toolbar and URL follow a click inside the frame.

- [ ] **Step 1: Hook, component, CSS, Stage change.** **Step 2: Entry** `theme-toggle`: controls `state`, `size`; lede "Text pill on desktop, icon-only on phone. Click it here and the frame switches scheme, the same way the site will."
- [ ] **Step 3: Workshop header** gets `<ThemeToggle size="text" />` as the chrome's own toggle (outside any `[data-scheme]`, so it drives `html`).
- [ ] **Step 4: Check.** Clicking the toggle in the frame flips the frame and the `scheme` param, not the chrome. Clicking the header toggle flips `html[data-theme]`, writes `tj-theme`, and in Chromium the circle reveal runs (`document.getAnimations()` shows the `reveal` animation); with `startViewTransition` stubbed to `undefined` the `theme-fade` class appears for 300 ms; with reduced motion neither.
- [ ] **Step 5: Docs. Step 6: Hand over.** Subject `feat: add theme toggle`.

---

### Task 11: Nav link

**Files:**
- Create: `src/components/NavLink/NavLink.tsx`, `NavLink.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `NavLink({ href, active = false, children }: { href: string; active?: boolean; children: string })` → `<a href aria-current={active ? "true" : undefined} className="group flex items-center gap-4 py-3 text-fg-muted hover:text-fg focus-visible:text-fg aria-[current=true]:text-fg transition-colors duration-150 ease-standard">` with the line `<span aria-hidden className="h-px w-8 bg-current transition-[width] duration-150 ease-standard group-hover:w-16 group-focus-visible:w-16 group-aria-[current=true]:w-16 motion-reduce:transition-none" />` and `<Label tone="active" className="text-current">` (Label accepts `className`). Width is the one allowed non-transform transition because it is 1 px tall and the design asks for it; it is still removed under reduced motion.

- [ ] **Step 1: Component.** **Step 2: Entry** `nav-link`: controls `state: select("State", ["rest", "hover", "active", "focus"], "rest")` (active maps to the `active` prop, the others to `data-state`), `text: text("Text", "Experience", 11)`. **Step 3: Check** four states × two schemes; the line is 32 px at rest and 64 px active (`getBoundingClientRect().width`). **Step 4: Docs. Step 5: Hand over.** Subject `feat: add nav link component`.

---

### Task 12: Section label

**Files:**
- Create: `src/components/SectionLabel/SectionLabel.tsx`, `SectionLabel.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `SectionLabel({ id, children }: { id: string; children: string })` → `<h2 id={id} className="phone:sticky phone:top-0 phone:z-10 phone:-mx-(--gutter) phone:border-b phone:border-line phone:bg-ground/60 phone:px-(--gutter) phone:py-4 phone:backdrop-blur-sm"><Label tone="muted" className="phone:text-fg">{children}</Label></h2>`. The section that uses it carries `aria-labelledby={id}` and `scroll-mt-24 phone:scroll-mt-14`. The bar bleeds to the page gutter through `--gutter` (Task 1 defines it, the page and the Workshop frame use it for their padding).

- [ ] **Step 1: Component.** **Step 2: Entry** `section-label`: control `text: text("Text", "Experience", 11)`; render on desktop: the label above a short body paragraph (placeholder text from a constant in the entry file, not Tony's copy); on phone: a 480 px tall scroll scene (`overflow-y-auto h-[480px]`) with the label and enough placeholder paragraphs to scroll so the sticky bar is visible. **Step 3: Check** phone frame: scroll the scene, bar stays at top, `backdropFilter` computed `blur(8px)` (`backdrop-blur-sm`). **Step 4: Docs. Step 5: Hand over.** Subject `feat: add section label`.

---

### Task 13: Spotlight

**Files:**
- Create: `src/components/Spotlight/Spotlight.tsx`, `Spotlight.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `Spotlight()` (client). Renders `null` when `useReducedMotion()` is true or `matchMedia("(pointer: coarse)").matches` (checked in `useSyncExternalStore`, server value `false`, so the server markup has the element and the client removes it on coarse pointers). Otherwise `<div aria-hidden className="pointer-events-none fixed inset-0 -z-10 opacity-0 transition-opacity duration-300 ease-standard [background:radial-gradient(600px_at_var(--x)_var(--y),var(--spot),transparent_80%)]" />`. On `pointermove` (listener on `window`, passive): `el.style.setProperty("--x", \`${e.clientX - rect.left}px\`)`, same for `--y`, where `rect = el.getBoundingClientRect()` read once per frame via `requestAnimationFrame`; on first move set `opacity-100` through a class toggle on the element, not state. No React state per move.

- [ ] **Step 1: Component.** **Step 2: Entry** `spotlight`: controls `on: toggle("Fine pointer", true)` (false renders a note "Hidden: coarse pointer or reduced motion" instead of mounting), `alpha: select("Alpha", ["spec", "0.05", "0.10", "0.14", "0.18", "0.24"], "spec")` which sets `--spot` on a wrapper with the chosen alpha of the scheme's colour (dark `255,92,26`, light `201,58,8`). Lede: "The lamp… Move the pointer over the stage." The frame's `transform` contains the fixed layer. Spec tokens "Dark Tangerine 0.08; light Tangerine Text 0.06, the darker tone so the spot reads on paper".
- [ ] **Step 3: Check** moving the pointer over the frame changes `--x/--y` on the element; the layer stays inside the frame; with motion reduced the element is absent. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add cursor spotlight`.

---

### Task 14: Skip link

**Files:**
- Create: `src/components/SkipLink/SkipLink.tsx`, `SkipLink.workshop.tsx`; modify `entries.ts`, `src/app/workshop/layout.tsx` (add `<SkipLink href="#workshop-main" />` first in the layout and `id="workshop-main" tabIndex={-1}` on its main)

**Interfaces:**
- Produces: `SkipLink({ href = "#main" }: { href?: string })` → `<a href className="fixed left-4 top-4 z-50 -translate-y-24 rounded-full bg-surface px-4 py-2.5 text-title text-fg shadow-lift focus-visible:translate-y-0">Skip to content</a>`. No transition (appears instantly), never `display: none`.

- [ ] **Step 1: Component and layout change.** **Step 2: Entry** `skip-link`: control `state: select("State", ["hidden", "focused"], "focused")` mapped to `data-state="focus"`; render inside a 240 px tall scene with a fake header row so the pill sits over it. **Step 3: Check** Tab from the address bar on `/workshop/skip-link` lands on the chrome's skip link first; Enter moves focus to `#workshop-main`. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add skip link`.

---

### Task 15: Content types and files (writer skill first)

**Files:**
- Create: `src/types/content.ts`, `src/content/profile.ts`, `experience.ts`, `highlights.ts`, `skills.ts`, `education.ts`, `nav.ts`, `about.ts`, `contact.ts`, `colophon.ts`, `notFound.ts`

**Interfaces:**
- Produces:
  ```ts
  export type Profile = { name: string; role: string; tagline: string; email: string; github: string; linkedin: string; location: string; cvFile: string; primaryCta: string; cvCta: string; cvLinkText: string; pageTitle: string; metaDescription: string };
  export type Experience = { id: string; dates: string; from: string; to: string | null; title: string; company: string; url: string; place: string; body: string; tags: string[] };
  export type Highlight = { figure: string; what: string; how: string };
  export type SkillGroup = { name: string; items: string[] };
  export type Education = { label: string; dates: string; from: string; to: string; degree: string; institution: string; languages: string };
  export type NavSection = { id: string; label: string };
  export type Colophon = { long: string; short: string; workshopLink: string };
  export type NotFoundCopy = { title: string; body: string; cta: string };
  ```
  and the constants `profile`, `experience` (five rows, résumé order), `highlights` (four), `skills` (five groups), `education`, `nav` (`about, experience, highlights, skills, contact` with labels About, Experience, Highlights, Skills, Contact) with `sectionLabel(id: string): string`, `about: string[]` (three paragraphs, `about.ts`), `contact: { intro: string }` (`contact.ts`), `colophon`, `notFound` (`notFound.ts`). `from`/`to` are ISO month strings (`"2023-01"`) for `<time dateTime>`; `dates` is the printed label (`"2023 — 2026"`). `cvFile` = `"Tony_CJ_Resume.pdf"`.

- [ ] **Step 1: Write the copy.** Invoke `resume-portfolio-writer` in portfolio mode for every slot in its slot table, American spelling, plus these slots the table does not list yet: a `url` per experience row (company website) for Tony to confirm; the Workshop sentence in the colophon (≤ 60 chars, must contain "workshop"); the Education label (1 word); the not-found title (≤ 40), body (≤ 120) and button (≤ 18). Deliver the slot table in the reply and **end the turn**. Nothing is typed until Tony approves.
- [ ] **Step 2: Type the approved table** into the files above, verbatim, with the character budgets respected. The "extreme" storybook entry is not content; Review Focus 4 is covered by the Workshop controls' `max` values instead.
- [ ] **Step 3: Check.** `npm run check`; a one-off node script in the scratchpad asserts every slot length against the budget table and that no string contains `+971`.
- [ ] **Step 4: Docs** for the types and constants. **Step 5: Hand over.** Subject `feat: add résumé content`.

---

### Task 16: Experience row and list

**Files:**
- Create: `src/components/ExperienceRow/ExperienceRow.tsx`, `src/components/ExperienceRow/ExperienceList.tsx`, `ExperienceRow.workshop.tsx`; modify `src/app/globals.css` (sibling dimming utility), `entries.ts`, `Tag.workshop.tsx` (use `skills[0].items`)

**Interfaces:**
- Produces: `ExperienceRow({ entry }: { entry: Experience })` → `<li className="group relative grid grid-cols-[2fr_6fr] gap-x-6 phone:grid-cols-1 phone:gap-y-2">` with the hover layer `<span aria-hidden className="absolute -inset-y-4 -inset-x-6 phone:inset-x-[-16px] -z-10 rounded-sm transition-[background-color,box-shadow] duration-150 ease-standard group-hover:bg-surface group-hover:shadow-lift group-focus-within:bg-surface group-focus-within:shadow-lift" />`, date `<Label as="time" dateTime={entry.from}>{entry.dates}</Label>` in column 1 (`pt-1`), column 2: title `<Link kind="arrow" href={entry.url} external>{entry.title} · {entry.company}</Link>` wrapped in an `h3 text-title [overflow-wrap:anywhere]` whose anchor gets `after:absolute after:inset-0` so the whole row is the hit area (focus ring stays on the title: `after:` pseudo is not focusable), place `<Label size={11}>{entry.place}</Label>`, body `<p className="mt-2 text-small text-fg-2">`, `<TagList items={entry.tags} className="mt-3" />`. `ExperienceList({ items }: { items: Experience[] })` → `<ol className="exp-list space-y-12">`. In `globals.css` under `@layer components`: `.exp-list:has(li:hover) li:not(:hover), .exp-list:has(li:focus-within) li:not(:focus-within), [data-state="dimmed"] .exp-list li:not([data-row="target"]) { opacity: 0.5 }` with `li { transition: opacity 150ms var(--ease-standard) }` and the `motion-reduce` twin removing the transition. `group-focus-within:` fires under `data-state="focus"` through Task 1's `focus-within` variant.

- [ ] **Step 1: Components, CSS.** **Step 2: Entry** `experience-row`: controls `entry: select("Entry", experience.map(e => e.id).concat("extreme"), experience[1].id)` where `extreme` is a local constant with a 48-character title, an unbroken 40-character tag and five tags; `state: select("State", ["rest", "hover", "focus", "pressed", "dimmed"], "rest")`; `siblings: toggle("With siblings", true)` renders the chosen row inside an `ExperienceList` with two neighbours; for `dimmed` the frame gets `data-state="dimmed"` and the chosen row `data-row="target"`.
- [ ] **Step 3: Check** at 1440 and 390 in both schemes: rest, hover (siblings at `opacity 0.5`), focus (Tab into the frame lifts the row), extreme entry wraps with `scrollWidth <= clientWidth`. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add experience row`.

---

### Task 17: Highlight tile and grid

**Files:**
- Create: `src/components/HighlightTile/HighlightTile.tsx`, `src/components/HighlightTile/HighlightGrid.tsx`, `HighlightTile.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `HighlightTile({ figure, what, how }: Highlight)` → `<li aria-label={\`${figure} ${what}\`} className="rounded-sm p-6 transition-[background-color,box-shadow] duration-150 ease-standard hover:bg-surface hover:shadow-lift">` with `<p className="text-stat text-fg">{figure}</p>`, `<p className="mt-1 text-title text-fg">{what}</p>`, `<p className="mt-2 text-small text-fg-2">{how}</p>`. `HighlightGrid({ items }: { items: Highlight[] })` → `<ul className="grid grid-cols-2 gap-px bg-line phone:grid-cols-1 [&>li]:bg-ground">` (hairlines from the 1 px gap over the line colour; tiles paint the ground). Not a link.

- [ ] **Step 1: Components.** **Step 2: Entry** `highlight-tile`: controls `hovered: select("Lifted tile", ["none", "1", "2", "3", "4"], "1")` (sets `data-state="hover"` on a wrapper around that tile only, so the frame-level `data-state` is not used here), `count: select("Tiles", ["4", "2"], "4")`. **Step 3: Check** 2×2 at 1440, 1 column at 390, hairlines 1 px, figure in Stat. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add highlight tile`.

---

### Task 18: Skill group

**Files:**
- Create: `src/components/SkillGroup/SkillGroup.tsx`, `src/components/SkillGroup/SkillTable.tsx`, `SkillGroup.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `SkillGroup({ group }: { group: SkillGroup })` → a `<div className="grid grid-cols-[2fr_6fr] gap-x-6 border-t border-line py-4 phone:grid-cols-1 phone:gap-y-2">` with `<dt><Label>{group.name}</Label></dt>` and `<dd><TagList items={group.items} label={group.name} /></dd>`; `SkillTable({ groups }: { groups: SkillGroup[] })` → `<dl className="border-b border-line">`. (Type name collides with the component name: import the type as `import type { SkillGroup as SkillGroupData }`.)

- [ ] **Step 1: Components.** **Step 2: Entry** `skill-group`: control `group: select("Group", ["all", ...skills.map(g => g.name)], "all")`. **Step 3: Check** eleven Frontend tags wrap to at most three lines at 656 and never overflow at 390. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add skill group`.

---

### Task 19: Education row

**Files:**
- Create: `src/components/EducationRow/EducationRow.tsx`, `EducationRow.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `EducationRow({ education, showLanguages = true }: { education: Education; showLanguages?: boolean })` → `<dl className="border-y border-line py-4">` with a row `grid grid-cols-[2fr_6fr] gap-x-6 phone:grid-cols-1 phone:gap-y-2`: `<dt><Label as="time" dateTime={education.from}>{education.dates}</Label></dt>`, `<dd><p className="text-title text-fg">{degree}</p><p className="mt-1 text-small text-fg-2">{institution}</p></dd>`; languages as `<p className="mt-4 text-small text-fg-2">{education.languages}</p>` after the `dl`, inside a wrapping `div`.

- [ ] **Step 1: Component.** **Step 2: Entry** `education-row`: control `languages: toggle("Languages line", true)`. **Step 3: Check** both devices. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add education row`.

---

### Task 20: Social links

**Files:**
- Create: `src/components/SocialLinks/SocialLinks.tsx`, `SocialLinks.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `SocialLinks({ handles = false }: { handles?: boolean })` → `<ul aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-2">` with three `<li><Link kind="social" href external>…</Link></li>`: GitHub `https://github.com/TonyCJ7`, LinkedIn `https://www.linkedin.com/in/tonycj`, Email `mailto:${profile.email}` (not external). Text: `GitHub` / `GitHub · TonyCJ7`, `LinkedIn` / `LinkedIn · tonycj`, `Email` / the address, from `profile`.

- [ ] **Step 1: Component.** **Step 2: Entry** `social-links`: controls `handles: toggle("Handles", false)`, `state: select("State", ["rest", "hover", "focus"], "rest")`, `item: select("On item", ["1", "2", "3"], "2")` (wrapper `data-state` around that item). **Step 3: Check** wraps at 390 with handles. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add social links`.

---

### Task 21: Nav list with scroll-spy

**Files:**
- Create: `src/components/NavList/NavList.tsx`, `src/hooks/useActiveSection.ts`, `NavList.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `useActiveSection(ids: string[]): string` (client): `IntersectionObserver` with `rootMargin: "-40% 0px -55% 0px"`, threshold 0, over `document.getElementById(id)` for each id; active = the intersecting id latest in `ids` order; initial `ids[0]`; when `scrollY + innerHeight >= document.documentElement.scrollHeight - 2` active = last id; returns `ids[0]` on the server. `NavList({ sections, activeId }: { sections: NavSection[]; activeId?: string })` → `<nav aria-label="In this page" className="phone:hidden"><ul>` of `NavLink href={\`#${id}\`} active={id === (activeId ?? active)}`; `activeId` undefined → the hook; defined → used as is (the Workshop is the second user). Clicks are plain anchors; smooth scrolling and its reduced-motion twin are Task 1's base rules.

- [ ] **Step 1: Hook and component.** **Step 2: Entry** `nav-list`: controls `active: select("Active (in view)", nav.map(n => n.label), "About")`, `hover: select("Pointer on", ["none", ...labels], "none")`, `focus: select("Keyboard on", ["none", ...labels], "none")` (per-item wrappers with `data-state`). **Step 3: Check** `/workshop/nav-list?active=Skills` marks Skills `aria-current="true"` with a 64 px line. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add nav list with scroll-spy`.

---

### Task 22: Intro column

**Files:**
- Create: `src/components/Intro/Intro.tsx`, `Intro.workshop.tsx`; modify `src/components/Logo/LogoLink.tsx` (`className` prop), `entries.ts`

**Interfaces:**
- Produces: `Intro({ profile, cvHref }: { profile: Profile; cvHref?: string })` → `<header className="flex flex-col justify-between gap-6 py-24 phone:static phone:py-12 sticky top-0 h-dvh phone:h-auto">`. Top block: mark row `flex items-center justify-between` with `<LogoLink size={44} className="phone:[&_svg]:size-9" />` (`LogoLink` passes `className` to the anchor) and `<ThemeToggle />`; `<h1 className="mt-6 text-display text-fg">{profile.name}</h1>`; `<p className="mt-3 text-tagline text-fg">{profile.role}</p>`; `<p className="mt-4 max-w-lede text-body text-fg-2">{profile.tagline}</p>`; `<div className="mt-8 flex flex-wrap gap-3"><Button href="#contact">{profile.primaryCta}</Button>{cvHref && <Button variant="ghost" href={cvHref}>{profile.cvCta}</Button>}</div>`; `<div className="mt-7"><NavList sections={nav} /></div>`. Bottom block: `<SocialLinks />` (`phone:hidden`, the Contact section shows handles on phone). The button labels are `profile.primaryCta` and `profile.cvCta`. Enter animation: each of the six top children gets `motion-safe:animate-enter` (Task 1) with `style={{ animationDelay: \`${50 + i * 50}ms\` }}`.

- [ ] **Step 1: Component.** **Step 2: Entry** `intro`: controls `name: text("Name", profile.name, 32)`, `role: text("Role", profile.role, 32)`, `tagline: text("Tagline", profile.tagline, 140)`, `cv: toggle("CV file present", true)`; renders `Intro` with an overridden profile and `cvHref` `"/x.pdf"` or `undefined`, wrapped in `<div className="[&>header]:h-[640px]">` so the `h-dvh` column has a height inside the frame; the nested NavList's hook returns `about` because no sections exist in the frame. Lede from the spec. **Step 3: Check** 1440: the 640 px column shows the socials at the bottom; 390: header then hero, no nav list, CV toggle off hides the ghost button; enter animation runs once on load and not with motion reduced. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add intro column`.

---

### Task 23: Colophon

**Files:**
- Create: `src/components/Colophon/Colophon.tsx`, `Colophon.workshop.tsx`; modify `entries.ts`

**Interfaces:**
- Produces: `Colophon()` → `<footer className="mt-12 max-w-measure text-small text-fg-muted"><p className="phone:hidden">{colophon.long}</p><p className="hidden phone:block">{colophon.short}</p><p className="mt-2"><Link kind="arrow" href="/workshop">{colophon.workshopLink}</Link></p></footer>`. The sentence is `colophon.workshopLink`.

- [ ] **Step 1: Component.** **Step 2: Entry** `colophon`, no controls. **Step 3: Check** both devices; the link reaches `/workshop/tokens`. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add colophon`.

---

### Task 24: About section

**Files:**
- Create: `src/sections/About/About.tsx`, `About.workshop.tsx`; modify `entries.ts` (stage 3 group)

**Interfaces:**
- Produces: `About()` → `<section id="about" aria-labelledby="about-label" className="scroll-mt-24 phone:scroll-mt-14"><SectionLabel id="about-label">{sectionLabel("about")}</SectionLabel><div className="mt-6 max-w-measure space-y-4 text-body text-fg-2 phone:mt-4">{about.map(p => <p key>)}</div></section>`. Every section takes its label from `sectionLabel(id)` so nav and section labels match exactly.

- [ ] **Step 1: Component.** **Step 2: Entry** `about`, stage 3, no controls; the phone render puts it in a 480 px scroll scene so the bar sticks. **Step 3: Check** measure ≤ 36rem at 1440, bar on 390. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add about section`.

---

### Task 25: Experience section

**Files:**
- Create: `src/sections/Experience/Experience.tsx`, `Experience.workshop.tsx`; modify `entries.ts`

- [ ] **Step 1:** `ExperienceSection()` → section as Task 24 with id `experience`, `<ExperienceList items={experience} className="mt-8" />`, and under it `<p className="mt-8"><Link kind="arrow" href={cvHref} external>…</Link></p>` only when a `cvHref` prop is given (same rule as Intro; text `profile.cvLinkText`). Name the component `ExperienceSection` to avoid clashing with the `Experience` type. **Step 2: Entry** `experience`, stage 3, control `cv: toggle("CV file present", true)`. **Step 3: Check** hover dims siblings on the real list at 1440; 390 stacks. **Step 4: Docs. Step 5: Hand over.** Subject `feat: add experience section`.

---

### Task 26: Highlights section

- [ ] `src/sections/Highlights/Highlights.tsx`: `Highlights()` → section id `highlights`, `<HighlightGrid items={highlights} className="mt-8" />`. Entry `highlights`, stage 3, no controls. Check both devices. Docs. Hand over: `feat: add highlights section`.

---

### Task 27: Skills section (with Education)

- [ ] `src/sections/Skills/Skills.tsx`: `Skills()` → section id `skills` with `<SkillTable groups={skills} className="mt-8" />`, then `<h3 className="mt-12"><Label id="education-label">Education</Label></h3>` and `<EducationRow education={education} className="mt-4" />` (`education.label`, not a nav section). Entry `skills`, stage 3, control `education: toggle("With education", true)`. Check both devices, 320 width too (longest tag row). Docs. Hand over: `feat: add skills section`.

---

### Task 28: Contact section

- [ ] `src/sections/Contact/Contact.tsx`: `Contact()` → section id `contact`: `<p className="mt-6 max-w-measure text-body text-fg-2">{contact.intro}</p>`, `<p className="mt-6"><Link kind="large" href={\`mailto:${profile.email}\`}>{profile.email}</Link></p>`, `<div className="mt-6"><SocialLinks handles /></div>` where `SocialLinks` with `handles` also renders `profile.location` as a fourth, non-link `<li><Label>` item (Task 20's component gains that branch here; `handles` means the Contact form). Entry `contact`, stage 3, no controls. Check the email wraps at 320 (`overflow-wrap: anywhere`). Docs. Hand over: `feat: add contact section`.

---

### Task 29: Page layout and assembly

**Files:**
- Modify: `src/app/page.tsx` (replace), `src/app/layout.tsx` (Spotlight, SkipLink; metadata waits for Task 30)

- [ ] **Step 1: Read** `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`.
- [ ] **Step 2: `layout.tsx` body:** `<body className="min-h-dvh"><SkipLink /><Spotlight />{children}</body>`.
- [ ] **Step 3: `page.tsx`:** compute `cvHref` with `existsSync(join(process.cwd(), "public", profile.cvFile)) ? \`/${profile.cvFile}\` : undefined` (server component, `node:fs`), then `<div className="mx-auto grid max-w-page grid-cols-[48fr_52fr] gap-x-12 px-24 phone:block phone:px-(--gutter)"><Intro profile={profile} cvHref={cvHref} /><main id="main" tabIndex={-1} className="py-24 phone:py-0 phone:pb-12"><div className="space-y-36 phone:space-y-24"><About /><ExperienceSection cvHref={cvHref} /><Highlights /><Skills /><Contact /></div><Colophon /></main></div>`.
- [ ] **Step 4: Check (Review Focus 5 and the matrix).** `npm run check`. At 320, 390, 768, 1024, 1280, 1440, 1920 in both schemes: `document.documentElement.scrollWidth <= clientWidth`; screenshots; at ≥1024 the intro is sticky while sections scroll, the nav active item follows (`evaluate_script` scrolls to each section and reads `[aria-current]`), at the bottom Contact is active; below 1024 no nav list, sticky bars appear in order; keyboard: Tab from the top shows the skip link first, Enter lands on `#main`, Tab reaches every link and the toggle in order, each with the ring; reduced motion emulated: no `getAnimations()` on load, no spotlight, theme toggle switches instantly; the Workshop link in the colophon opens `/workshop/tokens`; console clean. Save screenshots to the scratchpad.
- [ ] **Step 5: Docs** (update `page.md`, `layout.md`). **Step 6: Hand over.** Subject `feat: assemble home page`.

---

### Task 30: Metadata, Open Graph image, robots, sitemap, JSON-LD, llms.txt

**Files:**
- Modify: `src/app/layout.tsx` (metadata), `src/app/page.tsx` (JSON-LD), `src/app/workshop/layout.tsx` (canonical)
- Create: `src/app/opengraph-image.tsx`, `src/app/opengraph-image.alt.txt`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/lib/siteUrl.ts`, `src/assets/fonts/DMSans-Bold.ttf` (+ `OFL.txt`), `public/llms.txt`

- [ ] **Step 1: Read** `03-api-reference/03-file-conventions/01-metadata/opengraph-image.md`, `robots.md`, `sitemap.md`, `04-functions/generate-metadata.md`, `04-functions/image-response.md`.
- [ ] **Step 2: `siteUrl.ts`:** `export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tonycj.dev")`. Placeholder until Tony gives the domain.
- [ ] **Step 3: Metadata in `layout.tsx`:** `metadataBase: siteUrl`, `title: { default: profile.pageTitle, template: "%s · Tony Cherian Jacob" }`, `description: profile.metaDescription`, `alternates: { canonical: "/" }`, `openGraph: { type: "profile", title, description, url: "/", siteName: profile.name, locale: "en_US" }`, `twitter: { card: "summary_large_image" }`, `robots: { index: true, follow: true }`. `pageTitle` and `metaDescription` come from Task 15. Keep `viewport.themeColor` as two entries by media (`#16161A` dark, `#F5F5F4` light).
- [ ] **Step 4: `opengraph-image.tsx`:** `ImageResponse`, 1200 × 630, ink ground `#16161A` (literals are allowed here: ImageResponse has no CSS variables), the mark rendered with the same `GLYPH` and `DOT` paths (export them from `src/components/Logo/paths.ts` and import in `Logo.tsx` and here), letters paper, dot tangerine, name in DM Sans Bold 72 px paper, role in DM Sans 32 px `#ADADB2`, a 12 px tangerine dot before the role. Font loaded with `readFile` from `src/assets/fonts/DMSans-Bold.ttf` (download the static TTF from the DM Sans release on github.com/googlefonts/dm-fonts with its OFL licence file). `alt.txt`: "Tony Cherian Jacob, Senior Frontend Engineer".
- [ ] **Step 5: `robots.ts`** allow all, sitemap `${siteUrl}sitemap.xml`. **`sitemap.ts`:** `/` and `/workshop`, `lastModified: new Date()`.
- [ ] **Step 6: JSON-LD** in `page.tsx`: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />` where `personJsonLd` (`src/content/jsonLd.ts`) is `{ "@context": "https://schema.org", "@type": "Person", name, jobTitle: profile.role, worksFor: { "@type": "Organization", name: experience[0].company, url: experience[0].url }, address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" }, email: \`mailto:${profile.email}\`, sameAs: [github, linkedin], knowsAbout: skills.flatMap(g => g.items), url: siteUrl.href }`.
- [ ] **Step 7: `public/llms.txt`:** `# Tony Cherian Jacob`, one-paragraph summary (`profile.tagline`), `## Pages` with `/` and `/workshop` and one line each, `## Facts` with the four highlights and the five experience rows as `- <dates> · <title> · <company>: <body>`. Generated by hand from the content files; a comment at the top says which files it mirrors.
- [ ] **Step 8: Check.** `npm run check`; `curl -s localhost:3000/robots.txt`, `/sitemap.xml`, `/opengraph-image` (PNG 1200×630, open it and look), `/llms.txt`; `view-source` has one `<title>`, canonical, OG and Twitter tags, the JSON-LD parses (`JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)`), Rich Results test optional. Lighthouse via the Chrome MCP `lighthouse_audit` on `/` phone profile: SEO 100, accessibility 100, performance ≥ 95, best practices 100; record the numbers in the hand-over.
- [ ] **Step 9: Docs. Step 10: Hand over.** Subject `feat: add metadata, open graph image and structured data`.

---

### Task 31: Not-found page

- [ ] Read `03-file-conventions/not-found.md`. Create `src/app/not-found.tsx`: `<main id="main" className="mx-auto flex min-h-dvh max-w-measure flex-col justify-center gap-6 px-6"><LogoLink size={36} /><Label>404</Label><h1 className="text-headline text-fg">{notFound.title}</h1><p className="text-body text-fg-2">{notFound.body}</p><div><Button href="/">{notFound.cta}</Button></div></main>` with the three strings from `notFound` (Task 15). Metadata title "Not found". Check `/nothing` at 390 and 1440 in both schemes, keyboard reaches the button. Docs. Hand over: `feat: add not-found page`.

---

### Task 32: Final QA pass

- [ ] **Step 1:** Run the spec's final pass on `/`, `/workshop/tokens` and `/nothing`: the matrix, IL-001 shapes (temporarily edit content in the Workshop text controls, never in files), keyboard walk, contrast of every token pair measured from computed colours (`fg`, `fg-2`, `fg-muted`, `accent-text` on `ground` and `surface`, both schemes; floors 4.5:1 text, 3:1 label and ring), reduced motion on and off, Lighthouse four categories on both routes.
- [ ] **Step 2:** Every finding goes through the `fix-bug` skill; one commit per fix, subjects `fix: <what>`. Record the pass in `~/.claude/repos/TonyCJ7/portfolio/history.md` (dates, numbers, what was fixed).
- [ ] **Step 3:** Hand over the summary table: route × viewport × scheme × result, Lighthouse numbers, open items (domain, CV file, GitHub remote).
