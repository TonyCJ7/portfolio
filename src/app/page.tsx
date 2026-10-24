import { existsSync } from "node:fs";
import { join } from "node:path";
import Colophon from "@/components/Colophon/Colophon";
import Intro from "@/components/Intro/Intro";
import SkipLink from "@/components/SkipLink/SkipLink";
import Spotlight from "@/components/Spotlight/Spotlight";
import { profile } from "@/content/profile";
import About from "@/sections/About/About";
import Contact from "@/sections/Contact/Contact";
import ExperienceSection from "@/sections/Experience/Experience";
import Highlights from "@/sections/Highlights/Highlights";
import Skills from "@/sections/Skills/Skills";

export default function Home() {
  const cvHref = existsSync(join(process.cwd(), "public", profile.cvFile))
    ? `/${profile.cvFile}`
    : undefined;

  return (
    <>
      <SkipLink />
      <Spotlight />
      <div className="mx-auto grid max-w-page grid-cols-[48fr_52fr] gap-x-12 px-24 phone:block phone:px-(--gutter)">
        <Intro profile={profile} cvHref={cvHref} />
        <div className="py-24 phone:py-0 phone:pb-12">
          <main id="main" tabIndex={-1}>
            <div className="space-y-36 phone:space-y-24">
              <About />
              <ExperienceSection cvHref={cvHref} />
              <Highlights />
              <Skills />
              <Contact />
            </div>
          </main>
          <Colophon />
        </div>
      </div>
    </>
  );
}
