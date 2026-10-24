## `src/components/SocialLinks/SocialLinks.tsx`

### [SocialLinksProps](../../../../../../src/components/SocialLinks/SocialLinks.tsx#L6)

Describes the props of `SocialLinks`.

- `handles`: shows the full handles instead of the short names, and adds the location after them. Defaults to false.
- `forced`: the link the Workshop shows in a hover or focus state, as a zero-based `index` and a `state`. Omitted on the site.

### [SocialLinks({ handles, forced })](../../../../../../src/components/SocialLinks/SocialLinks.tsx#L32)

Renders Tony's GitHub, LinkedIn and email links as one wrapping row, for the intro column and the contact section.

- In: `handles`, false for `GitHub`, `LinkedIn` and `Email`, the intro column's form. True for `GitHub · TonyCJ7`, `LinkedIn · tonycj` and the email address, the contact section's form. `forced`, from the Workshop only, puts `data-state` on that one link's `li`, so only its link shows the state.
- Out: a `ul` named `Social links` with three `li`, each holding a social `Link`. GitHub and LinkedIn open in a new tab with `rel="noopener noreferrer"`. Email is a `mailto:` link that stays in place.
- With `handles`, a fourth `li` follows with `profile.location`, "Dubai, UAE", in a muted Label. It is plain text, not a link, so Tab skips it.
- Every `li` is flex, so its height is the label's 16.2 px line. A wrapped line then starts 24.2 px below the one above it, not 32 px under the body's 24 px line.

## Constants

- [`LINKS`](../../../../../../src/components/SocialLinks/SocialLinks.tsx#L11): the three links in display order, each with its href, short name, handle text and whether it opens a new tab. Hrefs and handles are built from `profile.github`, `profile.linkedin` and `profile.email`; the GitHub and LinkedIn hrefs come from `githubUrl` and `linkedinUrl`, the same helpers the JSON-LD uses.
