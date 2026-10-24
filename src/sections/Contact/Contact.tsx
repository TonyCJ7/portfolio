import Link from "@/components/Link/Link";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { contact } from "@/content/contact";
import { sectionLabel } from "@/content/nav";
import { profile } from "@/content/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-label"
      className="scroll-mt-24 phone:scroll-mt-14"
    >
      <SectionLabel id="contact-label">{sectionLabel("contact")}</SectionLabel>
      <p className="mt-6 max-w-measure text-body text-fg-2">{contact.intro}</p>
      <p className="mt-6">
        <Link kind="large" href={`mailto:${profile.email}`}>
          {profile.email}
        </Link>
      </p>
      <div className="mt-6">
        <SocialLinks handles />
      </div>
    </section>
  );
}
