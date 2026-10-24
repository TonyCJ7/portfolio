import { defineEntry, text, toggle } from "@/app/workshop/controls";
import { profile } from "@/content/profile";
import Intro from "./Intro";

export const entry = defineEntry({
  id: "intro",
  name: "Intro column",
  stage: 2,
  center: false,
  lede: "The sticky left column of the home page: the mark with the theme toggle, the name, role and tagline, the two buttons and, on desktop, the nav list and social links.",
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
      "cvHref: the CV file's URL; omitted, the Download CV button is not rendered",
    ],
    tokens: [
      "Column: sticky at the top, full viewport height (dvh), 96 px block padding; top block and social links pushed apart",
      "Short viewport: the column scrolls on its own, so the nav list and social links stay reachable by wheel and Tab; 4 px inline padding inside a -4 px margin keeps the focus ring unclipped",
      "Mark row: LogoLink 44 px and ThemeToggle at either end; the mark is 36 px on phones",
      "Name: text-display Text, 24 px below the mark; role: text-tagline Text, 12 px below; tagline: text-body Text 2, 16 px below, capped at the lede width; all three wrap anywhere",
      "Buttons: primary Get in touch to #contact and ghost Download CV, 32 px below, 12 px gap, wrapping",
      "Nav list 28 px below the buttons; social links at the bottom of the column",
      "Phone: static, auto height, 48 px block padding; no nav list and no social links (Contact shows the handles)",
    ],
    motion: [
      "Enter: the six top rows fade in and rise 8 px over 300 ms with the out curve, once on load, 50 ms apart from 50 to 300 ms",
      "Reduced motion: no enter animation; every row is visible at once",
    ],
    a11y: [
      "A header holding the page's only h1, the name",
      "The mark is a link named Home; the nav is named In this page",
      "The CV button is left out, not disabled, when there is no file",
    ],
  },
  render: (args) => (
    <div className="[&>header]:h-[800px]">
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
