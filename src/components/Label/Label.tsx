import type { ReactNode } from "react";

type LabelBaseProps = {
  tone?: "muted" | "active" | "accent";
  size?: "heading" | 12 | 11;
  interactive?: boolean;
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

const SIZE_CLASS = {
  heading: "text-label-lg phone:text-label-xl",
  12: "text-label",
  11: "text-label-sm",
};

const INTERACTIVE_CLASS =
  "transition-colors duration-150 ease-standard group-hover:text-fg group-focus-visible:text-fg group-active:text-fg group-aria-[current=true]:text-fg";

export default function Label(props: LabelProps) {
  const { tone = "muted", size = 12, interactive = false, className = "", children } = props;
  const classes = [
    "font-mono uppercase",
    SIZE_CLASS[size],
    TONE_CLASS[tone],
    interactive && INTERACTIVE_CLASS,
    className,
  ].filter(Boolean).join(" ");

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
