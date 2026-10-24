## `src/types/content.ts`

### [Profile](../../../../../src/types/content.ts#L1)

Describes who Tony is and how to reach him: the name, role and hero tagline, the email and the GitHub and LinkedIn handles, the city, the résumé file name in `public/`, the two hero button labels, the résumé link text, the page title and the meta description. `github` and `linkedin` are handles; the components build the URLs.

### [Experience](../../../../../src/types/content.ts#L3)

Describes one row of the Experience section. `dates` is the printed label; `from` and `to` are ISO months (`"2023-01"`) for `<time dateTime>`, and `to` is `null` for the current role. `url` is the company website the row links to, and an empty string means no link. `body` is one or two sentences and `tags` holds three or four tool names.

### [Highlight](../../../../../src/types/content.ts#L5)

Describes one Highlights tile. `figure` is the stat with no words (`"13%"`), `what` completes it as a phrase, and `how` is one sentence naming the action and the company.

### [SkillGroup](../../../../../src/types/content.ts#L7)

Describes one row of the skills table: a group label and its tool names, spelled as the résumé spells them.

### [Education](../../../../../src/types/content.ts#L9)

Describes the degree row under Skills: its label, the printed years with ISO `from` and `to` months, the degree, the institution and the sentence listing the languages Tony speaks.

### [NavSection](../../../../../src/types/content.ts#L11)

Describes one home page section the nav links to: its element `id` and the label shown in the nav and on the section.

### [Colophon](../../../../../src/types/content.ts#L13)

Describes the footer copy: the desktop sentence in `long`, the phone sentence in `short`, and the text of the link to the Workshop.

### [NotFoundCopy](../../../../../src/types/content.ts#L15)

Describes the 404 page copy: the heading, the sentence under it and the button label.
