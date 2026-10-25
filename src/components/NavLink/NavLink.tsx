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
        className="h-px w-16 origin-left scale-x-50 bg-current transition-transform duration-150 ease-standard group-hover:scale-x-100 group-focus-visible:scale-x-100 group-aria-[current=true]:scale-x-100 motion-reduce:transition-none"
      />
      <span className="-translate-x-8 transition-[translate] duration-150 ease-standard group-hover:translate-x-0 group-focus-visible:translate-x-0 group-aria-[current=true]:translate-x-0 motion-reduce:transition-none">
        <Label interactive>{children}</Label>
      </span>
    </a>
  );
}
