import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "ghost";
  arrow?: boolean;
  children: ReactNode;
} & (
  { href: string; onClick?: never } | { href?: undefined; onClick?: () => void }
);

const BASE_CLASSES =
  "group inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-title transition-[background-color,color,scale] duration-150 ease-standard active:scale-98 motion-reduce:transition-[background-color,color] motion-reduce:active:scale-100";

const VARIANT_CLASSES = {
  primary:
    "bg-accent text-ink hover:bg-accent-hover focus-visible:bg-accent-hover",
  ghost:
    "border border-line text-fg hover:bg-surface focus-visible:bg-surface active:bg-surface-hover",
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  arrow = variant === "primary",
  children,
}: ButtonProps) {
  const className = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]}`;
  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden
          className="transition-transform duration-75 ease-standard group-hover:translate-x-1 motion-reduce:transition-none"
        >
          →
        </span>
      )}
    </>
  );

  if (href === undefined) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {content}
      </button>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
