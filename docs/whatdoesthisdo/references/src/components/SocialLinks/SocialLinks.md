## `src/components/SocialLinks/SocialLinks.tsx`

### [SocialLinksProps](../../../../../../src/components/SocialLinks/SocialLinks.tsx#L4)

Describes the props of `SocialLinks`.

- `handles`: shows the full handles instead of the short names. Defaults to false.
- `forced`: the item the Workshop shows in a hover or focus state, as a zero-based `index` and a `state`. Omitted on the site.

### [SocialLinks({ handles, forced })](../../../../../../src/components/SocialLinks/SocialLinks.tsx#L30)

Renders Tony's GitHub, LinkedIn and email links as one wrapping row, for the intro column and the contact section.

- In: `handles`, false for `GitHub`, `LinkedIn` and `Email`. True for `GitHub · TonyCJ7`, `LinkedIn · tonycj` and the email address. `forced`, from the Workshop only, puts `data-state` on that one `li`, so only its link shows the state.
- Out: a `ul` named `Social links` with three `li`, each holding a social `Link`. GitHub and LinkedIn open in a new tab with `rel="noopener noreferrer"`. Email is a `mailto:` link that stays in place.
- Every `li` is flex, so its height is the label's 16.2 px line. A wrapped line then starts 24.2 px below the one above it, not 32 px under the body's 24 px line.

## Constants

- [`LINKS`](../../../../../../src/components/SocialLinks/SocialLinks.tsx#L9): the three links in display order, each with its href, short name, handle text and whether it opens a new tab. Hrefs and handles are built from `profile.github`, `profile.linkedin` and `profile.email`.
