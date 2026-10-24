import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <li className="rounded-full bg-accent-soft px-3 py-1 text-small font-medium text-accent-text wrap-anywhere">
      {children}
    </li>
  );
}
