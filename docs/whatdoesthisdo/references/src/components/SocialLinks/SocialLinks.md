## `src/components/SocialLinks/SocialLinks.tsx`

### [SocialLinksProps](../../../../../../src/components/SocialLinks/SocialLinks.tsx#L5)

Describes the props of `SocialLinks`.

- `forced`: the link the Workshop shows in a hover or focus state, as a zero-based `index` and a `state`. Omitted on the site.

### [SocialLinks({ forced })](../../../../../../src/components/SocialLinks/SocialLinks.tsx#L27)

Renders Tony's GitHub, LinkedIn and email links as one wrapping row of short names, for the intro column. It is the site's only list of them: the bottom of the column on desktop, under the buttons on phones.

- In: `forced`, from the Workshop only, puts `data-state` on that one link's `li`, so only its link shows the state.
- Out: a `ul` named `Social links` with three `li`, each holding a social `Link` that reads `GitHub`, `LinkedIn` or `Email`. GitHub and LinkedIn open in a new tab with `rel="noopener noreferrer"`. Email is a `mailto:` link that stays in place.
- Every `li` is flex, so its height is the label's 16.2 px line. A wrapped line then starts 24.2 px below the one above it, not 32 px under the body's 24 px line.

## Constants

- [`LINKS`](../../../../../../src/components/SocialLinks/SocialLinks.tsx#L9): the three links in display order, each with its href, short name and whether it opens a new tab. The hrefs are built from `profile.github`, `profile.linkedin` and `profile.email`; the GitHub and LinkedIn hrefs come from `githubUrl` and `linkedinUrl`, the same helpers the JSON-LD uses.
