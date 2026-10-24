import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { siteUrl } from "@/lib/siteUrl";
import { githubUrl, linkedinUrl } from "@/lib/social";

const [current] = experience;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  worksFor: {
    "@type": "Organization",
    name: current.company,
    url: current.url,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  email: `mailto:${profile.email}`,
  sameAs: [githubUrl(profile.github), linkedinUrl(profile.linkedin)],
  knowsAbout: skills.flatMap((group) => group.items),
  url: siteUrl.href,
};
