## `src/components/SkillGroup/SkillTable.tsx`

### [SkillTableProps](../../../../../../src/components/SkillGroup/SkillTable.tsx#L4)

Describes the props of `SkillTable`.

- `groups`: the skill groups to show, in display order, from `src/content/skills.ts`.

### [SkillTable({ groups })](../../../../../../src/components/SkillGroup/SkillTable.tsx#L8)

Renders the skills section's definition list, one `SkillGroup` row per group.

- In: `groups`, the skill groups. Each row is keyed by its group's name, so the names must be unique.
- Out: a `dl` with a Border hairline below it. Each row draws the hairline above itself, so the table reads as rows between lines.
