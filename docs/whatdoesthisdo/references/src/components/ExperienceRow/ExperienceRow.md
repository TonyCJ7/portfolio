## `src/components/ExperienceRow/ExperienceRow.tsx`

### [ExperienceRowProps](../../../../../../src/components/ExperienceRow/ExperienceRow.tsx#L6)

Describes the props of `ExperienceRow`.

- `entry`: one job from `src/content/experience.ts`.
- `target`: marks the row as the one that stays bright in the Workshop's dimmed state. `false` when omitted.

### [ExperienceRow({ entry, target })](../../../../../../src/components/ExperienceRow/ExperienceRow.tsx#L11)

Renders one job of the experience list as an `li`: the dates in the first column, then the title, place, summary and tools.

- In: `entry`, the job to show. `target`, true only from the Workshop, so the dimmed state knows which row stays bright.
- Out: a two-column grid row (2fr and 6fr, one column on phone). The dates are a `time` whose `dateTime` is the job's `from` month. On desktop the dates sit 4 px down, level with the title's first line. On phone they stack above the title at the row's top, as the phone board draws them. The title reads `<title> · <company>` in an `h3`.
- The title is an external arrow link to the job's `url`. Its `::after` covers the whole row, so a click anywhere opens the link while the focus ring stays on the title. Every job has a `url`, so there is no plain-text title.
- On hover, and when anything inside has focus, a layer behind the row fills with Surface Lift and the lift shadow over 150 ms. The layer reaches 24 px past the row on each side, 16 px on phone. The row is `isolate`, so the layer paints inside it, above any background behind the list. The row's `group` class also moves the title's arrow on row hover.
- The row sets `data-row="target"` when `target` is true, and nothing otherwise.
