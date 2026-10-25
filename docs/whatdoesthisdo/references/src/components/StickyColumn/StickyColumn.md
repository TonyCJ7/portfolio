## `src/components/StickyColumn/StickyColumn.tsx`

### [StickyColumnProps](../../../../../../src/components/StickyColumn/StickyColumn.tsx#L5)

Describes the props of `StickyColumn`: `className`, extra classes appended after its own (the intro passes `phone:static`), and `children`.

### [StickyColumn({ className, children })](../../../../../../src/components/StickyColumn/StickyColumn.tsx#L10)

Renders a column that stays on screen beside a longer one without a scrollbar of its own, the behaviour of `react-sticky-box` in about 40 lines.

- Out: a `div`, `position: sticky` with `align-self: start`, so as a grid or flex item it keeps its own height instead of stretching to the row.
- When it fits the viewport, `top` stays `0` and it is a plain sticky column.
- When it is taller, every scroll moves `top` by the scroll distance in the opposite direction, clamped between `0` and `viewport height − column height`. Scrolling down, it moves with the page until its bottom meets the viewport's bottom, then holds; scrolling up, it moves with the page at once until its top meets the viewport's top. A jump (a hash link, End) lands it clamped at the right end.
- It re-clamps when its own height changes (ResizeObserver) or the window resizes, and removes its listeners on unmount. The scroll listener is passive and reads only `scrollY`; it writes one inline `top` per event.
- It follows the window's scroll only. Inside another scroll container (the Workshop frame has none) it would track the wrong scroller.
