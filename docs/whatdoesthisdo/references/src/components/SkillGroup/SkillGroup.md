## `src/components/SkillGroup/SkillGroup.tsx`

### [SkillGroupProps](../../../../../../src/components/SkillGroup/SkillGroup.tsx#L5)

Describes the props of `SkillGroup`.

- `group`: one skill group from `src/content/skills.ts`, a name and the technologies under it.

### [SkillGroup({ group })](../../../../../../src/components/SkillGroup/SkillGroup.tsx#L9)

Renders one row of the skills table: the group's name beside the tags it names.

- In: `group`, the skill group. Its name becomes a muted `Label` in a `dt`. The label is a block with 6 px top padding, so its first line sits level with the first row of tags. As a block it also keeps its own 16.2 px line height when a long name wraps. Its items become a `TagList` in a `dd`, and the list is read out under the group's name.
- Out: a `div` holding one `dt` and one `dd`, valid inside a `dl`. A Border hairline runs above the row, with 16 px of padding above and below.
- On desktop the label sits in a 156 px column and the tags take the rest (`grid-cols-label`, the same grid as the experience rows, so both sections share one content edge), with a 24 px gap. On phone the row is one column, the label above the tags with an 8 px gap.
