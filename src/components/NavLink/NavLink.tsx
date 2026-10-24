import Label from "@/components/Label/Label";

type NavLinkProps = {
  href: string;
  active?: boolean;
  children: string;
};

export default function NavLink({
  href,
  active = false,
  children,
}: NavLinkProps) {
  return (
    <a
      href={href}
      aria-current={active ? "true" : undefined}
      className="group flex items-center gap-4 py-3 text-fg-muted transition-colors duration-150 ease-standard hover:text-fg focus-visible:text-fg aria-[current=true]:text-fg"
    >
      <span
        aria-hidden
        className="h-px w-8 bg-current transition-[width] duration-150 ease-standard group-hover:w-16 group-focus-visible:w-16 group-aria-[current=true]:w-16 motion-reduce:transition-none"
      />
      <Label
        tone="muted"
        className="transition-colors duration-150 ease-standard group-hover:text-fg group-focus-visible:text-fg group-aria-[current=true]:text-fg"
      >
        {children}
      </Label>
    </a>
  );
}
