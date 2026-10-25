## `src/content/nav.ts`

### [sectionLabel(id)](../../../../../src/content/nav.ts#L12)

Returns the label of a home page section, so every section heading uses the same word as its nav link.

- In: `id`, the section's element id, one of `about`, `experience`, `projects`, `highlights`, `skills` or `contact`.
- Out: the nav label for that section, for example `"Skills"` for `skills`.
- Refuses: any other id, with `No nav section with id "<id>"`, so a mistyped id fails the build.

## Constants

- [`nav`](../../../../../src/content/nav.ts#L3): the six home page sections in page order with their nav labels: About, Experience, Projects, Highlights, Skills and Contact.
