type SkipLinkProps = {
  href?: string;
};

export default function SkipLink({ href = "#main" }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="fixed left-4 top-4 z-50 -translate-y-24 rounded-full bg-surface px-4 py-2.5 text-title text-fg shadow-lift focus-visible:translate-y-0"
    >
      Skip to content
    </a>
  );
}
