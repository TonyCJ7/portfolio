## `src/components/ExperienceRow/ExperienceRow.workshop.tsx`

### [findSample(id)](../../../../../../src/components/ExperienceRow/ExperienceRow.workshop.tsx#L27)

Returns the job the Entry control names.

- In: `id`, the Entry control's value: a job `id` from `src/content/experience.ts` or `"extreme"`.
- Out: the job with that `id`. Any other value, `"extreme"` included, returns the `extreme` sample.

### [withNeighbors(chosen)](../../../../../../src/components/ExperienceRow/ExperienceRow.workshop.tsx#L31)

Builds the three-row list the "With siblings" toggle shows, with the chosen job in the middle.

- In: `chosen`, the job from the Entry control.
- Out: the first two other jobs of the content, one before and one after `chosen`.

### [sampleSource(id)](../../../../../../src/components/ExperienceRow/ExperienceRow.workshop.tsx#L37)

Names the chosen job the way code would read it, for the usage line.

- In: `id`, the Entry control's value.
- Out: `extreme` for the extreme sample; otherwise `experience[<index>]`, the job's place in the content.

## Constants

- [`extreme`](../../../../../../src/components/ExperienceRow/ExperienceRow.workshop.tsx#L6): a made-up job with a 48-character title, an 18-letter place, five tags and an unbroken 40-character tag, to prove the row wraps without sideways scroll.
- [`ROW_STATES`](../../../../../../src/components/ExperienceRow/ExperienceRow.workshop.tsx#L25): the State options: rest, hover and focus, plus `dimmed`, which the Stage passes to the frame as `data-state="dimmed"`. Pressed is left out because the row has no pressed look of its own; a press shows the hover look.
- [`entry`](../../../../../../src/components/ExperienceRow/ExperienceRow.workshop.tsx#L45): the Experience row Workshop entry: Entry, State and "With siblings" controls, rendered as an `ExperienceList`, not centred in the frame. In the dimmed state the chosen job is the list's `targetId`.
