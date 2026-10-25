import NextLink from "next/link";
import type { ReactNode } from "react";
import { isInternalRoute } from "@/lib/href";

type LinkProps = {
  kind?: "prose" | "arrow" | "large" | "social";
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

const KIND_CLASSES = {
  prose:
    "rounded-xs font-medium text-fg decoration-accent decoration-1 underline-offset-4 transition-colors duration-150 ease-standard hover:underline focus-visible:underline",
  arrow:
    "group pt-1 pe-1 text-title text-fg hover:text-accent-text focus-visible:text-accent-text",
  large:
    "text-headline text-fg underline decoration-accent decoration-1 underline-offset-6 wrap-anywhere hover:text-accent-text focus-visible:text-accent-text phone:text-headline-phone",
  social:
    "font-mono text-label text-fg-muted uppercase transition-colors duration-150 hover:text-fg focus-visible:text-fg",
};

// An inline block is a line break point of its own; the joiner and nowrap keep ↗ on the last word's line.
const WORD_JOINER = "\u2060";

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
      {kind === "arrow" && (
        <span aria-hidden className="whitespace-nowrap">
          {WORD_JOINER}
          <span className="ms-1 inline-block leading-none transition-transform duration-75 ease-standard group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none">
            ↗
          </span>
        </span>
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
