## `src/app/workshop/_components/PhoneScrollScene/PhoneScrollScene.tsx`

### [PhoneScrollSceneProps](../../../../../../../../src/app/workshop/_components/PhoneScrollScene/PhoneScrollScene.tsx#L3)

The props of `PhoneScrollScene`: `children`, the content to scroll.

### [PhoneScrollScene({ children })](../../../../../../../../src/app/workshop/_components/PhoneScrollScene/PhoneScrollScene.tsx#L7)

Renders the 480 px tall scroll area that Workshop entries use in the phone frame, so a sticky SectionLabel bar can be seen while content scrolls under it.

- In: `children`, the section, or the label and filler text, that the entry shows on a phone.
- Out: a `div` 480 px tall that scrolls vertically. It pulls out into the frame's `--gutter` on both sides and pads it back, so the sticky bar reaches the frame edges as it does on the page.
- The Section label, About, Experience and Highlights entries use it. It exists only in the Workshop; the home page has no such box.
