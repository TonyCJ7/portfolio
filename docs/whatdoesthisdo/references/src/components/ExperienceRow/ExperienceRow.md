## `src/components/ExperienceRow/ExperienceRow.tsx`

### [ExperienceRowProps](../../../../../../src/components/ExperienceRow/ExperienceRow.tsx#L6)

Describes the props of `ExperienceRow`.

- `entry`: one job from `src/content/experience.ts`.
- `target`: marks the row as the one that stays bright in the Workshop's dimmed state. `false` when omitted.

## Constants

- [`MONTH_FORMAT`](../../../../../../src/components/ExperienceRow/ExperienceRow.tsx#L11): an English `Intl.DateTimeFormat` for a short month and the year (`Jan 2026`), fixed to UTC so the server and the browser print the same month.

## Functions

### [formatMonth(isoMonth)](../../../../../../src/components/ExperienceRow/ExperienceRow.tsx#L17)

Prints an ISO month for the date column.

- In: `isoMonth`, a month like `"2021-08"`, as `from` and `to` hold it.
- Out: the short month and year, `Aug 2021`. The label's CSS shows it in capitals.

### [ExperienceRow({ entry, target })](../../../../../../src/components/ExperienceRow/ExperienceRow.tsx#L21)

Renders one job of the experience list as an `li`: the dates in the first column, then the title, place, summary and tools.

- In: `entry`, the job to show. `target`, true only from the Workshop, so the dimmed state knows which row stays bright.
- Out: a two-column grid row (`grid-cols-label`: a 156 px date column and the rest, shared with the skill rows; one column on phone). The dates read `Jan 2021 — Aug 2021`, or `Jan 2026 — Present` when `to` is `null`; each month is its own `time` with its ISO month as `dateTime`. Each month stays on one line and a no-break space ties the dash to the start month, so the widest range (150.5 px) stays on one line in the 156 px column at every desktop width, and if it ever has to wrap (a wider fallback font before the web font loads) it breaks after the dash. On desktop the dates sit 4 px down, level with the title's first line. On phone they stack above the title at the row's top, as the phone board draws them. The title reads `<title> · <company>` in an `h3`. The place line under it reads `<place> · Part time` when the job has `partTime`, so the note sits with the job's details instead of in the date column.
- The title is an external arrow link to the job's `url`. Its `::after` covers the whole row, so a click anywhere opens the link while the focus ring stays on the title. Every job has a `url`, so there is no plain-text title.
- On hover, and while the title has keyboard focus (`:focus-visible`, never after a mouse click), a layer behind the row fills with Surface Lift and the lift shadow over 150 ms. The layer reaches 24 px past the row on each side, 16 px on phone. The row is `isolate`, so the layer paints inside it, above any background behind the list. The row's `group` class also moves the title's arrow on row hover.
- The row sets `data-row="target"` when `target` is true, and nothing otherwise.
