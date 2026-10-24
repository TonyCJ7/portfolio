import { DOT, GLYPH } from "./paths";

type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      role="img"
      aria-label="tj mark"
      className={className}
    >
      <path fill="currentColor" d={GLYPH} />
      <path fill="#FF5C1A" d={DOT} />
    </svg>
  );
}
