import Link from "@/components/Link/Link";
import { profile } from "@/content/profile";

type SocialLinksProps = {
  handles?: boolean;
  forced?: { index: number; state: "hover" | "focus" };
};

const LINKS = [
  {
    href: `https://github.com/${profile.github}`,
    name: "GitHub",
    handle: `GitHub · ${profile.github}`,
    external: true,
  },
  {
    href: `https://www.linkedin.com/in/${profile.linkedin}`,
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
    </ul>
  );
}
