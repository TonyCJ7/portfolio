import type { CSSProperties } from "react";
import Button from "@/components/Button/Button";
import LogoLink from "@/components/Logo/LogoLink";
import NavList from "@/components/NavList/NavList";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { nav } from "@/content/nav";
import type { Profile } from "@/types/content";

type IntroProps = {
  profile: Profile;
  cvHref?: string;
};

const ENTER = "motion-safe:animate-enter";

function enterDelay(index: number): CSSProperties {
  return { animationDelay: `${50 + index * 50}ms` };
}

export default function Intro({ profile, cvHref }: IntroProps) {
  // -mx-1 px-1 keeps edge focus rings inside the scroll box that overflow-y-auto creates.
  return (
    <header className="sticky top-0 -mx-1 flex h-dvh flex-col justify-between gap-6 overflow-y-auto px-1 py-24 phone:static phone:h-auto phone:overflow-visible phone:py-12">
      <div>
        <div
          className={`flex items-center justify-between ${ENTER}`}
          style={enterDelay(0)}
        >
          <LogoLink size={44} className="phone:[&_svg]:size-9" />
          <ThemeToggle />
        </div>
        <h1
          className={`mt-6 text-display text-fg wrap-anywhere ${ENTER}`}
          style={enterDelay(1)}
        >
          {profile.name}
        </h1>
        <p
          className={`mt-3 text-tagline text-fg wrap-anywhere ${ENTER}`}
          style={enterDelay(2)}
        >
          {profile.role}
        </p>
        <p
          className={`mt-4 max-w-lede text-body text-fg-2 wrap-anywhere ${ENTER}`}
          style={enterDelay(3)}
        >
          {profile.tagline}
        </p>
        <div
          className={`mt-8 flex flex-wrap gap-3 ${ENTER}`}
          style={enterDelay(4)}
        >
          <Button href="#contact">{profile.primaryCta}</Button>
          {cvHref && (
            <Button variant="ghost" href={cvHref}>
              {profile.cvCta}
            </Button>
          )}
        </div>
        <div className={`mt-7 phone:hidden ${ENTER}`} style={enterDelay(5)}>
          <NavList sections={nav} />
        </div>
      </div>
      <div className="phone:hidden">
        <SocialLinks />
      </div>
    </header>
  );
}
