## `src/components/ExperienceRow/ExperienceList.tsx`

### [ExperienceListProps](../../../../../../src/components/ExperienceRow/ExperienceList.tsx#L4)

Describes the props of `ExperienceList`.

- `items`: the jobs to show, in display order.
- `targetId`: the `id` of the job that stays bright in the Workshop's dimmed state. Omitted on the site.

### [ExperienceList({ items, targetId })](../../../../../../src/components/ExperienceRow/ExperienceList.tsx#L9)

Renders the experience section's ordered list, one `ExperienceRow` per job, 48 px apart.

- In: `items`, the jobs. `targetId`, the job whose row gets `target`, from the Workshop only.
- Out: an `ol` with the `exp-list` class. Its rules in `globals.css` fade every other row to 50% opacity while one row holds focus. Hover fades them only on devices that hover, so a tapped row on touch leaves no siblings dimmed. Under `[data-state="dimmed"]` every row except the target fades. The fade takes 150 ms and is instant under reduced motion.
