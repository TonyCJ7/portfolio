## `src/app/workshop/_components/UsageLine/UsageLine.tsx`

### [UsageLineProps](../../../../../../../../src/app/workshop/_components/UsageLine/UsageLine.tsx#L1)

Describes the props of `UsageLine`.

- `code`: the JSX string the entry's `usage` function returns for the current controls.

### [UsageLine({ code })](../../../../../../../../src/app/workshop/_components/UsageLine/UsageLine.tsx#L5)

Shows the JSX a page would write for the current controls, under the stage.

- In: `code`, the string the entry's `usage` function returned.
- Out: a mono `pre` block that scrolls sideways instead of wrapping.
