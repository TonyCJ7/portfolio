import { DOT, GLYPH } from "./paths";

type LogoProps = {
  size?: number | "header";
  className?: string;
};

const HEADER_SIZE = 44;
const HEADER_PHONE_CLASS = "phone:size-9";

export default function Logo({ size = 32, className = "" }: LogoProps) {
  const isHeader = size === "header";
  const pixels = isHeader ? HEADER_SIZE : size;
  const classes = isHeader
    ? `${HEADER_PHONE_CLASS} ${className}`.trim()
    : className;

  return (
    <svg
      viewBox="0 0 256 256"
      width={pixels}
      height={pixels}
      role="img"
      aria-label="tj mark"
      className={classes || undefined}
    >
      <path fill="currentColor" d={GLYPH} />
      <path fill="#FF5C1A" d={DOT} />
    </svg>
  );
}
