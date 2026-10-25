## `src/app/workshop/_components/EntryStage/EntryStage.tsx`

### [EntryStageProps](../../../../../../../../src/app/workshop/_components/EntryStage/EntryStage.tsx#L11)

Describes the props `WorkshopView` passes to `EntryStage`.

- `entryId`: the id of the entry on screen, a string, since the entry object holds render functions that cannot leave the server.

### [EntryStage({ entryId })](../../../../../../../../src/app/workshop/_components/EntryStage/EntryStage.tsx#L15)

Renders the parts of an entry that depend on the URL search params: the toolbar, the stage and the usage line.

- In: `entryId`, looked up in the entry list on the client. An unknown id renders the 404 page.
- Out: the three parts as siblings in the centre column, all fed by one `useWorkshopState`. The toolbar and the stage write frame settings back through its `setCtx`. While `motion` is reduced it sets `data-motion="reduced"` on `html`, and removes it when the setting changes or the entry unmounts.
