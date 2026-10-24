type LogoProps = {
  size?: number;
  className?: string;
};

const GLYPH =
  "M60.4 97.9 L120.4 97.9 A11.5 11.5 0 0 1 120.4 120.9 L60.4 120.9 A11.5 11.5 0 0 1 60.4 97.9 Z M74.5 70.6 A12.4 12.4 0 0 1 99.2 70.6 L99.2 139.5 A23.0 23.0 0 0 0 130.1 161.0 A12.4 12.4 0 0 1 138.5 184.3 A47.7 47.7 0 0 1 74.5 139.5 Z M184.0 70.6 A12.4 12.4 0 0 1 208.7 70.6 L208.7 139.5 A86.5 86.5 0 0 1 47.3 182.7 A12.4 12.4 0 0 1 68.7 170.4 A61.8 61.8 0 0 0 184.0 139.5 Z";
const DOT =
  "M183.1 35.2 A13.2 13.2 0 1 1 209.6 35.2 A13.2 13.2 0 1 1 183.1 35.2 Z";

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
