# Portfolio build: components, Workshop, sections, page

Date: 2026-10-24. Status: builder-checked, awaiting Tony's approval. Nothing in this document is built.

## Intent

Turn the finished design (DESIGN.md, the components canvas, the home page canvas, the interactive HTML storybook)
into the live site in this repository, in small commits, in an order that lets every piece be checked where it
renders. The site is one long home page plus one more route, the Workshop, which shows every component the site is
built from, with live controls, and is linked from the home page. The Workshop is the recruiter's proof that the
site is a sample of Tony's work and the developer's way in.

Why this order (parts, then the Workshop shell, then sections, then the page): a component that has nowhere to
render cannot be checked, and a page assembled from unchecked parts is checked twenty times at once. The Workshop
shell comes right after the tokens so that each component commit ships with its Workshop entry and is accepted
there. Tony chose this order on 2026-10-24 over "all components first".

Why the plan has to be exhaustive: Tony will run the build with Claude Opus, not the model that wrote the design.
The plan therefore leaves no judgement calls: every commit is a card with the files, the exact props, the token
names, the states, the checks and the commit subject. House rules that hold across every card live in the
repository extension so each session loads them.

## Goals

1. Twenty components in build order, each one commit, each with a Workshop entry that shows its states, variants,
   both schemes and both devices.
2. The Workshop at `/workshop`, built from the real components, with URL-addressable state, shipped in production
   and linked from the home page colophon.
3. Five sections and the home page assembled from those components, with the résumé content written through the
   resume-portfolio-writer skill, not typed into JSX.
4. Every commit passes lint, type check and build, and the states its card names are seen in Chrome at the
   breakpoints below without overflow.
5. The finished page meets WCAG AA (contrast, keyboard, focus, reduced motion, landmarks), carries complete SEO
   metadata and structured data, and is readable by generative engines (plain facts, one canonical page, JSON-LD
   Person, `llms.txt`).

## Non-goals

- No projects section, writing, blog or extra routes. The résumé lists no projects; PRODUCT.md forbids inventing.
- No Storybook, Ladle or any gallery dependency. No test runner in this build (see Verification).
- No CMS, no MDX, no i18n. Content is TypeScript data.
- No expanded experience row. Tony has not chosen it; the row's only link is the title to the company site.
- No tablet-specific layout beyond what the container queries give between the two designed widths.

## Anti-goals

- A build that is right only in dark mode or only on desktop. Both schemes and both devices are checked for every
  component, every time.
- A `dark:` prefix, a colour literal or a spacing literal in a component. Those make the Workshop frame lie.
- A Workshop that re-implements components in HTML the way the Claude artifact did. The Workshop imports the
  component; if it cannot render there, the component is wrong.
- A commit that touches more than its card says. Opus follows cards; a card that says "and tidy up" is a defect.
- Copy invented in a JSX file. Any sentence about Tony's work comes from the résumé through the writer skill.

## Constraints

- Repo: Next.js 16.4 App Router, React 19.3, Tailwind CSS 4, TypeScript strict, ESLint 9 with
  `eslint-config-next`. The Next version differs from training data: before writing code for a Next API, read the
  matching file under `node_modules/next/dist/docs/01-app/` (AGENTS.md). The cards name which file.
- Deployable on Vercel or a plain Node host (PRODUCT.md): no Vercel-only APIs, no `runtime` exports. Every route
  prerenders; `output: "standalone"` is set once if Tony picks the VPS. `output: "export"` is not a target.
- DESIGN.md, PRODUCT.md, `.impeccable/` and `design/logo/` are gitignored. Every design value the code needs
  lives in the code (globals.css tokens, Workshop spec text, content files). The Workshop spec panel is the
  committed record of each component's design.
- Tony's global rules apply: no commit without an instruction; a commit request means review first, then a
  question; no AI attribution; types outside component files except a component's own props; no comments unless
  a "why" the code cannot say; Simplicity ladder; WhatDoesThisDo pages for every function, type and constant.
- Résumé facts only. Phone number never on the site. Email `tonycj1996@gmail.com`, LinkedIn `tonycj`, GitHub
  `TonyCJ7`, Dubai, UAE.
- Motion: durations 75, 150, 300, 500 ms and the 833 ms spring; standard curve `cubic-bezier(0.4, 0, 0.2, 1)`,
  out curve `cubic-bezier(0.17, 0, 0.21, 1.01)`; transform and opacity only; everything gated behind reduced
  motion.

## Decisions Tony made

| Decision | Value | When |
|---|---|---|
| Build order | tokens → Workshop shell → components (one commit each, entry included) → content → composites → sections → page → SEO, GEO, a11y pass | 2026-10-24 |
| Gallery name and route | Workshop, `/workshop`, folder `src/app/workshop/` | 2026-10-24 |
| Gallery lives in the repo, built from the real components, linked from the home page | yes | 2026-10-24 |
| Commits | small, one deliverable each | 2026-10-24 |
| Executor | Claude Opus, from a plan written at Fable's level of detail | 2026-10-24 |
| Content | written through `~/.claude/skills/resume-portfolio-writer` (portfolio mode), approved by Tony, then typed into content files | 2026-10-24 |
| QA scope | rendering and readability at every breakpoint without breaking; SEO, GEO and accessibility | 2026-10-24 |
| Experience row title | links to the company website; the row is focusable and focus lifts it like hover | 2026-10-24 |
| Spelling | American, the résumé's | 2026-10-24 |
| Deployment | undecided; keep Vercel and VPS open, no `output` setting, origin from `NEXT_PUBLIC_SITE_URL` with a placeholder default | 2026-10-24 |
| Download CV | the ghost button renders only when `public/Tony_CJ_Resume.pdf` exists (phone-free copy Tony supplies later) | 2026-10-24 |
| Default theme | dark, regardless of the OS scheme; visitors switch with the toggle, the choice is stored in `tj-theme` | 2026-10-24 |
| Spotlight light scheme | Tangerine Text `rgba(201, 58, 8, 0.06)`; dark `rgba(255, 92, 26, 0.08)` | 2026-10-24 |
| Logo | final, `src/components/Logo/Logo.tsx`, not reopened | earlier |

## Decisions made for Tony (my calls, each reversible before the plan)

1. **Styling: Tailwind 4 with design tokens as `@theme` values.** Every DESIGN.md colour, type step, radius and
   spacing becomes a token in `src/app/globals.css`. Components use token utilities only (`bg-ground`,
   `text-fg-muted`, `rounded-sm`). Scheme switching swaps the token values; no `dark:` variants anywhere. A
   named-utility block in globals.css holds what utilities express badly: the wiggle keyframes, the experience
   list sibling dimming, the view-transition reveal.
2. **Tokens are defined on two selectors each:** `:root, [data-scheme="dark"]` for dark and
   `:root[data-theme="light"], [data-scheme="light"]` for light. There is no `prefers-color-scheme` rule:
   dark is the default whatever the OS says, and the toggle is how a visitor switches. The same block therefore serves the site root and the Workshop stage frame, which
   sets `data-scheme` on a subtree.
3. **One breakpoint, 1024 px, through a Tailwind custom variant `phone:`.** DESIGN.md has two layouts: desktop
   at 1024 px viewport and above (two columns, section labels as text), phone below (one column, sticky bars).
   The variant fires on `@media (max-width: 1023px)` for any element not inside `[data-device="desktop"]`, and
   always inside `[data-device="phone"]`. The real page never sets `data-device`, so it follows the viewport; the
   Workshop frame sets it, so a phone frame shows the phone layout in a desktop window and a desktop frame stays
   desktop in a narrow one. Verified to compile with Tailwind 4.1 (`@custom-variant` with two `@slot` rules).
   No container queries. Between 640 and 1023 the phone layout runs fluid; there is no tablet layout.
4. **Fonts:** DM Sans (`--font-sans`) and Geist Mono (`--font-mono`) via `next/font/google`, replacing the
   scaffold's Geist.
5. **Theme:** inline head script reads `localStorage["tj-theme"]` and sets `data-theme` on `html` before paint;
   no stored value means dark. `ThemeToggle` writes the same key. Reduced motion: a `useReducedMotion`
   hook reads the media query and `html[data-motion="reduced"]`; global CSS kills transitions and animations
   under either.
6. **Workshop architecture:** `src/app/workshop/[entry]/page.tsx`, statically generated for every entry
   (`generateStaticParams`), with `cacheComponents` kept on as scaffolded. Controls, scheme, device and motion live
   in the URL search params (`?variant=ghost&state=hover&scheme=light&device=phone`), read on the client under
   `Suspense` and written with `history.replaceState`, so every state is a shareable link and the route stays
   static on every host. The stage renders nothing until hydration, so a shared link never flashes the default
   state. Nothing in localStorage. Each component folder holds `<Name>.workshop.tsx` exporting one
   `WorkshopEntry` (id, name, stage, lede, controls, spec, render); `src/app/workshop/entries.ts` lists them in
   build order. Forced states use `data-state="hover|focus|pressed|dimmed|active"` on the component root;
   components style `:hover`, `:focus-visible`, `:active` and the matching `data-state` with the same rules.
   The frame is a real-size box (390 px phone, 656 px desktop, unscaled, as the storybook) carrying `data-scheme`,
   `data-device` and a `transform`, so `position: fixed` descendants (Spotlight, Skip link, sticky bars) are
   contained by the frame instead of the viewport.
6a. **Live components inside the frame.** Components are the real ones; the frame gives them what they need:
   - ThemeToggle switches the nearest `[data-scheme]` ancestor when there is one, otherwise `html`, and
     persists `tj-theme` only for `html`. The Workshop watches the frame's attribute and syncs the `scheme`
     param. The Workshop is the second user of that scope rule.
   - SkipLink takes `href` (default `#main`); the Workshop chrome uses it with its own target id. No other
     element in the Workshop carries `id="main"`.
   - NavList shows its states through the forced `data-state` control only; the live scroll-spy is accepted on
     the page card, where the sections exist. No `active` prop.
   - LogoLink is a real link home; its entry shows hover and focus forced.
   - Spotlight runs for real inside the frame, contained by the frame's transform.
7. **Workshop chrome** reuses the site's components (Label, Link, Logo, ThemeToggle, focus ring) and the site's
   tokens; the chrome follows the viewer's theme, the stage frame follows the `scheme` param. Layout as the HTML
   storybook: sidebar of entries grouped by stage with a filter, stage with a dotted grid and a scaled frame
   (desktop 656 px, phone 390 px), aside with Controls and Spec tabs, a Usage line showing the JSX for the current
   state. Below 1100 px the aside drops under the stage; below 760 px the sidebar becomes a select.
8. **Sections are components too**, in `src/sections/<Name>/`, each with a Workshop entry under a third group
   "Sections", so the page is assembled from checked parts and the Workshop shows the whole build.
9. **Content model:** `src/content/` holds `profile.ts`, `experience.ts`, `highlights.ts`, `skills.ts`,
   `education.ts`, `contact.ts`, `colophon.ts`; types in `src/types/content.ts`. Sections import content directly;
   no props plumbing for data that never varies.
10. **Verification without a test runner.** `npm run check` = `eslint && tsc --noEmit && next build`. Each card
    names a Workshop URL and the states to look at in Chrome DevTools MCP at the breakpoints in the QA section.
    Scroll-spy, theme script and URL state get a scripted check in the browser (evaluate_script), written on the
    card. A test runner is added only if Tony asks; it is not needed to accept this build.
11. **Repository extension:** `~/.claude/repos/TonyCJ7/portfolio/repo.md` records the house rules (token names,
    folder shape, Workshop entry template, the check recipe, the QA matrix) so every session loads them without
    the plan. The key is the GitHub `<org>/<repo>` so it survives the remote being added; until the remote exists
    a committed `CLAUDE.md` carries `repo-key: TonyCJ7/portfolio`. Card 3 moves today's `~/.claude/repos/portfolio/`
    (ledger and review runs) under the new key.
12. **Workshop is indexable** with its own title and description; it is part of the portfolio. `llms.txt` lists it.
13. **The CV link** points at `/Tony_CJ_Resume.pdf` in `public/`. The Intro checks for the file at build time
    (`fs.existsSync` in the server component) and renders the ghost button only when it exists.

## The parts

Build order, folder, and the props the Workshop controls expose (from the components canvas and the storybook).
Every component is a server component unless it needs state or the DOM; those are marked client.

| # | Part | Folder | Props and variants | Client |
|---|---|---|---|---|
| 1 | Tokens and type | `src/app/globals.css` | both scheme blocks, type steps display/stat/headline/tagline/title/body/small/label, radii 6/12/pill, spacing scale, motion tokens | |
| 2 | Focus ring | `src/app/globals.css` | one `:focus-visible` rule: 2px tangerine outline, offset 2px | |
| 3 | Label | `src/components/Label/` | `tone: muted \| active \| accent`, `size: 12 \| 11`, `as: span \| time \| a`, children | |
| 4 | Tag | `src/components/Tag/` | children; `TagList` wraps a `ul` | |
| 5 | Logo link | `src/components/Logo/` | existing `Logo`; add `LogoLink` (home link, wiggle on hover, ring on focus) | |
| 6 | Button | `src/components/Button/` | `variant: primary \| ghost`, `href`, `arrow` (primary only), children | |
| 7 | Link | `src/components/Link/` | `kind: prose \| arrow \| large \| social`, `href`, `external`, children | |
| 8 | Theme toggle | `src/components/ThemeToggle/` | `size: auto \| text \| icon`; reads and writes `tj-theme`, View Transitions reveal | yes |
| 9 | Nav link | `src/components/NavLink/` | `href`, `active`, children | |
| 10 | Section label | `src/components/SectionLabel/` | `id`, children; label on desktop, sticky bar on phone | |
| 11 | Spotlight | `src/components/Spotlight/` | none; fine pointer and no reduced motion only | yes |
| 12 | Skip link | `src/components/SkipLink/` | none; targets `#main` | |
| 13 | Experience row | `src/components/ExperienceRow/` | `entry: Experience` (title is an arrow link to `entry.url`); sibling dimming on the list | |
| 14 | Highlight tile | `src/components/HighlightTile/` | `figure`, `what`, `how`; `HighlightGrid` | |
| 15 | Skill group | `src/components/SkillGroup/` | `group: SkillGroup` | |
| 16 | Education row | `src/components/EducationRow/` | `education: Education`, `languages?: string` | |
| 17 | Social links | `src/components/SocialLinks/` | `handles: boolean` | |
| 18 | Nav list | `src/components/NavList/` | `sections: NavSection[]`; scroll-spy with IntersectionObserver | yes |
| 19 | Intro column | `src/components/Intro/` | `profile: Profile`; mark row with toggle, name, role, tagline, buttons, nav list on desktop | |
| 20 | Colophon | `src/components/Colophon/` | none; the Workshop link lives here | |

Sections (`src/sections/`): About, Experience, Highlights, Skills (with Education and languages), Contact. The
page (`src/app/page.tsx`): skip link, spotlight, two-column layout (sticky intro, scrolling sections) on desktop,
single column with the intro as header and hero on phone.

## Content

Content is written before the composites are built, in one step:

1. Run `resume-portfolio-writer` in portfolio mode on every slot in its slot table (`references/portfolio-copy.md`):
   hero tagline, about (three paragraphs), five experience rows, four highlights, skill groups, education,
   languages, contact intro, colophon, page title, meta description, image alt.
2. The output is the slot table with budgets, proposed copy, character counts and résumé sources. Tony approves
   or edits in the reply.
3. The approved table is typed into `src/content/*.ts` in one commit. Budgets become the `maxLength` of the
   Workshop text controls so an over-budget edit shows in the Workshop as it did in the storybook.
4. Spelling: American, as the résumé. The writer skill's reference records it.
5. The slot table gains a `url` per experience row (company website), confirmed by Tony in the same reply.

Any later copy change follows the same path: writer skill, approval, content file. Never a JSX edit.

## QA

QA is part of every card, not a stage at the end. Two layers.

**Per commit (the card's acceptance):** `npm run check` passes; the Workshop URL for the entry is opened in Chrome
DevTools MCP and, for each state and variant the card lists, in both schemes, at each width in the matrix: no
horizontal overflow (`scrollWidth <= clientWidth` on the frame), text readable (no clipping, no truncation of
unbounded strings, the "extreme" entry wraps), focus ring visible on Tab, hover and focus states match, console
clean. One screenshot per width per scheme is saved in the session scratchpad; nothing is committed.

**Viewport matrix:** 320 × 568, 390 × 844, 768 × 1024, 1024 × 768, 1280 × 800, 1440 × 900, 1920 × 1080. The
Workshop frame covers 390 and 656; the page itself is driven through all seven. Device scale 2 for the phone sizes.

**Final pass (the last stage), on the assembled page, both schemes, reduced motion on and off:**

- Rendering and readability: the matrix above plus the IL-001 shapes (longest wrapping value, an unbreakable
  40-character string in every text slot, every optional value absent).
- Accessibility: Lighthouse accessibility 100 via the Chrome MCP audit; manual keyboard walk from skip link to
  colophon in order; every hover state reachable by focus; landmarks `header`, `nav`, `main`, `footer`; one `h1`;
  sections with `aria-labelledby`; contrast of every token pair measured (fg 4.5:1, muted 4.5:1 on ground and
  surface, label 3:1, tangerine text on both grounds); reduced motion removes every animation; the toggle has
  `aria-pressed` and a name; the spotlight is `aria-hidden`.
- SEO: `<title>` ≤ 60, description ≤ 155, canonical, `metadataBase` set to the production origin, Open Graph and
  Twitter card with a generated 1200 × 630 image (ink ground, mark, name, role), `robots.ts`, `sitemap.ts` with
  `/` and `/workshop`, `manifest.ts` already present, Lighthouse SEO 100, Lighthouse performance ≥ 95 on the
  phone profile, LCP under 1.8 s on the throttled run.
- GEO (generative engine readability): JSON-LD `Person` (name, jobTitle, worksFor Almosafer, address Dubai,
  sameAs GitHub and LinkedIn, knowsAbout from the skill groups) in the home page; `llms.txt` in `public/` with
  the one-paragraph summary, the two routes and the facts table; headings that state facts plainly; every number
  in text, not only in images; the résumé PDF linked.

A finding in the final pass is fixed through the `fix-bug` skill per the global "Every fix" rule.

## Making the plan executable by Opus

- One card per commit. Each card: goal in one line; files created and changed with full paths; the exact types,
  props and token names; the Tailwind class recipe for each state; the Workshop entry (controls with their
  options and defaults, spec text); the Next.js docs file to read first, if any; the check steps with the URL and
  states to open; the WhatDoesThisDo page to write; the commit subject. No "as appropriate", no "similar to".
- Shared machinery is defined once, in the shell card, and referenced by path: `WorkshopEntry`, the control
  helpers `select`, `text`, `toggle`, the `data-state` convention, the frame.
- The repository extension holds the house rules. Opus reads it on session start and never has to infer a token
  name or a folder shape from neighbours.
- Cards are independent after their stage's first card, so a session can start anywhere in the sequence; each
  card states which earlier cards it needs.
- The plan is reviewed once by a fresh agent as the builder before it is handed over (builder check), and each
  commit is reviewed with `review-changes` before Tony commits, per the global Git rule.

## Commit sequence

Stage 0, foundation: (1) tokens, type scale, fonts, body ground; (2) theme script, `data-motion`,
`useReducedMotion`, `npm run check`; (3) Workshop shell with the Tokens entry and the repository extension file.

Stage 1, primitives, one commit each with its entry: focus ring, Label, Tag, Logo link, Button, Link, Theme
toggle, Nav link, Section label, Spotlight, Skip link. 11 commits.

Stage 2, content and composites: (15) content types and files from the approved slot table; then Experience row,
Highlight tile, Skill group, Education row, Social links, Nav list, Intro column, Colophon. 9 commits.

Stage 3, sections, one commit each with its entry: About, Experience, Highlights, Skills, Contact. 5 commits.

Stage 4, page: (29) layout and page assembly replacing the scaffold page; (30) metadata, Open Graph image,
robots, sitemap, JSON-LD, `llms.txt`; (31) not-found page; (32) final QA pass fixes, one commit per fix.

About 32 commits. Each is reviewable alone and leaves the site deployable.

## Left to the builder

- Internal structure of the Workshop shell components (how the sidebar, stage and aside split into files) as long
  as the behaviour above holds and each file has one job.
- Exact IntersectionObserver thresholds for the scroll-spy; the spec is "the active item follows the section in
  view", with the last section active at the bottom of the page.
- The shape of the Open Graph image component within the constraints (ink, mark, name, role, tangerine dot).
- The order of Tailwind classes and the split between `@theme` and `@utility` entries, within the rule that no
  component carries a literal.

## Open questions for Tony

1. GitHub repository name, assumed `TonyCJ7/portfolio` for the extension key.
2. The production domain, when known; until then `NEXT_PUBLIC_SITE_URL` defaults to `https://tonycj.dev` as a
   placeholder in the metadata only.
