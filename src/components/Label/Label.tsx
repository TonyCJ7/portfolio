import type { ReactNode } from "react";

type LabelBaseProps = {
  tone?: "muted" | "active" | "accent";
  size?: 12 | 11;
  className?: string;
  children: ReactNode;
};

type LabelProps = LabelBaseProps
  & (
    | { as?: "span" }
    | { as: "time"; dateTime: string }
    | { as: "a"; href: string }
  );

const TONE_CLASS = {
  muted: "text-fg-muted",
  active: "text-fg",
  accent: "text-accent-text",
};

export default function Label(props: LabelProps) {
  const { tone = "muted", size = 12, className = "", children } = props;
  const sizeClass = size === 11 ? "text-label-sm" : "text-label";
  const classes = `font-mono uppercase ${sizeClass} ${TONE_CLASS[tone]} ${className}`.trim();

  if (props.as === "time") {
    return (
      <time dateTime={props.dateTime} className={classes}>
        {children}
      </time>
    );
  }

  if (props.as === "a") {
    return (
      <a href={props.href} className={`${classes} rounded-xs`}>
        {children}
      </a>
    );
  }

  return <span className={classes}>{children}</span>;
}
