import { defineEntry } from "@/app/workshop/controls";
import PhoneScrollScene from "@/app/workshop/_components/PhoneScrollScene/PhoneScrollScene";
import Contact from "./Contact";

export const entry = defineEntry({
  id: "contact",
  name: "Contact",
  stage: 3,
  center: false,
  lede: "The last section of the home page's right column: the Contact label, and the intro paragraph that ends with the email address as an inline link; the section is the target of Get in touch. On a phone the label sticks as a bar while the section scrolls under it.",
  controls: {},
  spec: {
    folder: "src/sections/Contact/",
    props: [
      "none; the label comes from sectionLabel(\"contact\") in src/content/nav.ts, the intro from src/content/contact.ts, and the email from src/content/profile.ts",
    ],
    tokens: [
      "Intro: text-body in Text 2, capped at the measure (36rem), 24 px below the label, 16 px on phone",
      "Email: Link kind arrow, a mailto link with the ↗ inline at the end of the intro, after its colon, like the site's other links; Accent Text on hover and focus; it wraps anywhere, so a longer address wraps inside the column instead of overflowing it",
      "Label: SectionLabel, a sticky frosted bar on phone",
    ],
    motion: ["none"],
    a11y: [
      "section with id contact and aria-labelledby contact-label, so its accessible name is the h2's text, Contact",
      "The email link reads the address itself; GitHub and LinkedIn live in the intro column, so Contact holds one link",
      "scroll-mt-24 phone:scroll-mt-14 set the landing offset of a hash jump: 96 px on desktop, 56 px on phone",
    ],
  },
  render: (_args, ctx) => {
    if (ctx.device === "phone") {
      return (
        <PhoneScrollScene>
          <Contact />
        </PhoneScrollScene>
      );
    }

    return <Contact />;
  },
  usage: () => "<Contact />",
});
