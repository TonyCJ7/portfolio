import Label from "@/components/Label/Label";
import Link from "@/components/Link/Link";
import { profile } from "@/content/profile";
import { githubUrl, linkedinUrl } from "@/lib/social";

type SocialLinksProps = {
  handles?: boolean;
  forced?: { index: number; state: "hover" | "focus" };
};

const LINKS = [
  {
    href: githubUrl(profile.github),
    name: "GitHub",
    handle: `GitHub · ${profile.github}`,
    external: true,
  },
  {
    href: linkedinUrl(profile.linkedin),
    name: "LinkedIn",
    handle: `LinkedIn · ${profile.linkedin}`,
    external: true,
  },
  {
    href: `mailto:${profile.email}`,
    name: "Email",
    handle: profile.email,
    external: false,
  },
];

export default function SocialLinks({ handles = false, forced }: SocialLinksProps) {
  return (
    <ul aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-2">
      {LINKS.map((link, index) => (
        <li
          key={link.href}
          className="flex"
          data-state={forced?.index === index ? forced.state : undefined}
        >
          <Link kind="social" href={link.href} external={link.external}>
            {handles ? link.handle : link.name}
          </Link>
        </li>
      ))}
      {handles && (
        <li className="flex">
          <Label>{profile.location}</Label>
        </li>
      )}
    </ul>
  );
}
