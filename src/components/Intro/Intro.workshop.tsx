import { defineEntry, text, toggle } from "@/app/workshop/controls";
import { profile } from "@/content/profile";
import Intro from "./Intro";

export const entry = defineEntry({
  id: "intro",
  name: "Intro column",
  stage: 2,
  center: false,
  lede: "The sticky left column of the home page: the mark with the theme toggle, the name, the role with the location under it, the tagline, the two buttons, the nav list on desktop and the social links, the site's only copy of them.",
  controls: {
    name: text("Name", profile.name, 32),
    role: text("Role", profile.role, 32),
    tagline: text("Tagline", profile.tagline, 140),
    cv: toggle("CV file present", true),
  },
  spec: {
    folder: "src/components/Intro/",
    props: [
      "profile: the Profile from src/content/profile.ts; name, role, tagline and both button labels come from it",
      "cvHref: the CV file's URL; omitted, the Full résumé button is not rendered",
    ],
    tokens: [
      "Column: a StickyColumn, at least the viewport height (dvh), 96 px block padding (64 px on desktop windows under 896 px tall); top block and social links pushed apart",
      "Short viewport: no inner scrollbar; the column scrolls with the page until its bottom meets the viewport's bottom, holds while the sections scroll, and moves back with the page on any scroll up until its top meets the top",
      "Mark row: LogoLink 44 px and ThemeToggle at either end; the mark is 36 px on phones",
      "Name: text-display Text, 24 px below the mark; role: text-tagline Text, 12 px below; location: profile.location in a muted Label, 8 px below the role; tagline: text-body Text 2, 16 px below, capped at the lede width; name, role and tagline wrap anywhere",
      "Buttons: primary Get in touch to #contact and ghost Full résumé, 32 px below, 12 px gap, wrapping",
      "Desktop: nav list 28 px below the buttons; social links at the bottom of the column",
      "Phone: static, auto height, 48 px block padding; no nav list; the social links sit 24 px below the buttons, the header's gap",
    ],
    motion: [
      "Enter: the six top rows fade in and rise 8 px over 300 ms with the out curve, once on load, 50 ms apart from 50 to 300 ms; the location shares the role's row at 150 ms; on phone the social links take the hidden nav list's 300 ms slot, on desktop they do not animate",
      "Reduced motion: no enter animation; every row is visible at once",
    ],
    a11y: [
      "A header holding the page's only h1, the name",
      "The mark is a link named Home; the nav is named In this page; the location is text, so Tab skips it",
      "Social links: one list on every layout, so Tab reaches GitHub, LinkedIn and Email once, after the buttons on phone and after the nav on desktop",
      "The CV button is left out, not disabled, when there is no file",
    ],
  },
  render: (args) => (
    <div className="[&_header]:min-h-[800px]">
      <Intro
        profile={{
          ...profile,
          name: args.name,
          role: args.role,
          tagline: args.tagline,
        }}
        cvHref={args.cv ? "/x.pdf" : undefined}
      />
    </div>
  ),
  usage: (args) => {
    if (args.cv) {
      return "<Intro profile={profile} cvHref=\"/x.pdf\" />";
    }

    return "<Intro profile={profile} />";
  },
});
