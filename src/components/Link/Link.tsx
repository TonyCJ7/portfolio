import NextLink from "next/link";
import type { ReactNode } from "react";
import { isInternalRoute } from "@/lib/href";

type LinkProps = {
  kind?: "prose" | "arrow" | "arrow-small" | "github" | "large" | "social";
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

const ARROW_CLASSES =
  "group pt-1 pe-1 text-fg wrap-anywhere hover:text-accent-text focus-visible:text-accent-text";

const KIND_CLASSES = {
  prose:
    "rounded-xs font-medium text-fg decoration-accent decoration-1 underline-offset-4 wrap-anywhere transition-colors duration-150 ease-standard hover:underline focus-visible:underline",
  arrow: `${ARROW_CLASSES} text-title`,
  "arrow-small": `${ARROW_CLASSES} text-small font-medium`,
  github: `${ARROW_CLASSES} text-title`,
  large:
    "text-headline text-fg underline decoration-accent decoration-1 underline-offset-6 wrap-anywhere hover:text-accent-text focus-visible:text-accent-text phone:text-headline-phone",
  social:
    "font-mono text-label text-fg-muted uppercase transition-colors duration-150 hover:text-fg focus-visible:text-fg",
};

// An inline block is a line break point of its own; the joiner and nowrap keep ↗ on the last word's line.
const WORD_JOINER = "\u2060";

const GITHUB_MARK =
  "M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z";

export default function Link({
  kind = "prose",
  href,
  external = false,
  className = "",
  children,
}: LinkProps) {
  const classes = `${KIND_CLASSES[kind]} ${className}`.trim();
  const content = (
    <>
      {children}
      {(kind === "arrow" || kind === "arrow-small") && (
        <span aria-hidden className="whitespace-nowrap">
          {WORD_JOINER}
          <span className="ms-1 inline-block leading-none transition-transform duration-75 ease-standard group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none">
            ↗
          </span>
        </span>
      )}
      {kind === "github" && (
        <>
          <span className="sr-only"> on GitHub</span>
          <span aria-hidden className="whitespace-nowrap">
            {WORD_JOINER}
            <svg
              viewBox="0 0 16 16"
              className="ms-2 inline-block size-4 align-[-0.125em]"
            >
              <path fill="currentColor" d={GITHUB_MARK} />
            </svg>
          </span>
        </>
      )}
    </>
  );

  if (isInternalRoute(href)) {
    return (
      <NextLink href={href} className={classes}>
        {content}
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {content}
    </a>
  );
}
