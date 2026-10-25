## `src/components/ProjectRow/ProjectRow.workshop.tsx`

## Functions

### [findSample(id)](../../../../../../src/components/ProjectRow/ProjectRow.workshop.tsx#L18)

Finds the project the Project control names.

- In: `id`, a project `id` from `src/content/projects.ts` or `"extreme"`.
- Out: the project with that `id`. Any other value, `"extreme"` included, returns the `extreme` sample.

### [withNeighbors(chosen)](../../../../../../src/components/ProjectRow/ProjectRow.workshop.tsx#L22)

Puts the chosen project between two others, so hover, focus and dimmed can be seen against siblings.

- In: `chosen`, the project to show.
- Out: three projects: the first project that is not `chosen`, then `chosen`, then the second.

### [sampleSource(id)](../../../../../../src/components/ProjectRow/ProjectRow.workshop.tsx#L28)

Names the chosen project the way the usage line quotes it.

- In: `id`, the Project control's value.
- Out: `extreme` for the extreme sample; otherwise `projects[<index>]`, the project's place in the content.

## Constants

- [`extreme`](../../../../../../src/components/ProjectRow/ProjectRow.workshop.tsx#L6): a made-up GitHub project with a 24-character owner that wraps in the label column, an unbroken 56-character title, four tags and an unbroken 40-character tag, to prove the row wraps without sideways scroll and the GitHub mark stays on the title's last line.
- [`ROW_STATES`](../../../../../../src/components/ProjectRow/ProjectRow.workshop.tsx#L16): the State control's options: rest, hover, focus and dimmed.
- [`entry`](../../../../../../src/components/ProjectRow/ProjectRow.workshop.tsx#L36): the Project row Workshop entry in the Composites group, with a Project select (every project plus `extreme`), a State select and a With siblings toggle. Dimmed marks the chosen row as the target, so its siblings fade.
