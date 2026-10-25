import Link from "next/link";
import Logo from "./Logo";

type LogoLinkProps = {
  size?: 44 | 36 | 28 | "header";
  href?: string;
  className?: string;
};

export default function LogoLink({
  size = 44,
  href = "/",
  className = "",
}: LogoLinkProps) {
  return (
    <Link
      href={href}
      aria-label="Home"
      className={`group inline-block rounded-lg ${className}`.trim()}
    >
      <Logo
        size={size}
        className="origin-[50%_60%] motion-safe:group-hover:animate-wiggle"
      />
    </Link>
  );
}
