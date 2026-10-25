import Link from "@/components/Link/Link";
import { profile } from "@/content/profile";
import { githubUrl, linkedinUrl } from "@/lib/social";

type SocialLinksProps = {
  forced?: { index: number; state: "hover" | "focus" };
};

const LINKS = [
  {
    href: githubUrl(profile.github),
    name: "GitHub",
    external: true,
  },
  {
    href: linkedinUrl(profile.linkedin),
    name: "LinkedIn",
    external: true,
  },
  {
    href: `mailto:${profile.email}`,
    name: "Email",
    external: false,
  },
];

export default function SocialLinks({ forced }: SocialLinksProps) {
  return (
    <ul aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-2">
      {LINKS.map((link, index) => (
        <li
          key={link.href}
          className="flex"
          data-state={forced?.index === index ? forced.state : undefined}
        >
          <Link kind="social" href={link.href} external={link.external}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
