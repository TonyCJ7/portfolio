## `src/lib/social.ts`

### [githubUrl(handle)](../../../../../src/lib/social.ts#L1), [linkedinUrl(handle)](../../../../../src/lib/social.ts#L5)

Build Tony's profile links from the handles in `profile`, so the social links row and the JSON-LD `sameAs` list point at the same pages.

- In: `handle`, the bare user name as stored in `profile.github` or `profile.linkedin`, for example `TonyCJ7`.
- Out: `https://github.com/<handle>` or `https://www.linkedin.com/in/<handle>`.
