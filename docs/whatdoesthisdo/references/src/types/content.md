## `src/types/content.ts`

### [Profile](../../../../../src/types/content.ts#L1)

Describes who Tony is and how to reach him: the name, role and hero tagline, the email and the GitHub and LinkedIn handles, the city, the résumé file name in `public/`, the two hero button labels, the résumé link text, the page title and the meta description. `github` and `linkedin` are handles; the components build the URLs.

### [Experience](../../../../../src/types/content.ts#L3)

Describes one row of the Experience section. `from` and `to` are ISO months (`"2023-01"`); the row prints them as `Jan 2023 — Jan 2026` and uses them for `<time dateTime>`, and `to` is `null` for the current role. `partTime` is `true` for a part-time job and adds `Part time` to the place line; leave it out otherwise. `url` is the company website the row's title links to. Its type only accepts a string that starts with `http://` or `https://`, so an empty url fails the type check instead of rendering a link to the current page. `body` is one or two sentences and `tags` holds three or four tool names.

### [Project](../../../../../src/types/content.ts#L5)

Describes one row of the Projects section. `owner` is who the work was for, printed in the label column (`Personal`, `Almosafer`, `QBurst`). `title` is the project's name or domain. `url` is where the title links, typed like `Experience["url"]`, so it must start with `http://` or `https://`. `github` is `true` when `url` is a GitHub repository, which gives the title the GitHub mark; leave it out for a live site. `body` is one or two sentences and `tags` holds three or four tool names.

### [Highlight](../../../../../src/types/content.ts#L7)

Describes one Highlights tile. `figure` is the stat with no words (`"13%"`), `what` completes it as a phrase, and `how` is one sentence naming the action and the company.

### [SkillGroup](../../../../../src/types/content.ts#L9)

Describes one row of the skills table: a group label and its tool names. The names follow the résumé and are shortened only to fit the 18-character tag budget, which today means `"Testing Library"` for React Testing Library.

### [NavSection](../../../../../src/types/content.ts#L11)

Describes one home page section the nav links to: its element `id` and the label shown in the nav and on the section.

### [Colophon](../../../../../src/types/content.ts#L13)

Describes the footer copy: the desktop sentence in `long`, the phone sentence in `short`, and the text of the link to the Workshop.

### [NotFoundCopy](../../../../../src/types/content.ts#L15)

Describes the 404 page copy: the heading, the sentence under it and the button label.

### [ContactCopy](../../../../../src/types/content.ts#L17)

Describes the Contact section copy: `intro`, the sentences above the email address.
