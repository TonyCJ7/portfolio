## `src/components/SocialLinks/SocialLinks.workshop.tsx`

### [forcedItem(itemState, item)](../../../../../../src/components/SocialLinks/SocialLinks.workshop.tsx#L5)

Turns the State and On item controls into the `forced` prop of `SocialLinks`.

- In: `itemState`, the State control's value: `"rest"`, `"hover"` or `"focus"`. `item`, the On item control's value, `"1"` to `"3"`.
- Out: undefined for `"rest"`, so no item is forced. Otherwise the state with the zero-based index, one less than the item number.

## Constants

- [`entry`](../../../../../../src/components/SocialLinks/SocialLinks.workshop.tsx#L16): the Social links Workshop entry: Handles, State and On item controls, centered in the frame. The State control is keyed `itemState`, not `state`, because the Stage writes a `state` control onto the frame's `data-state`, which would force every item.
