import type { ReactNode } from "react";

type PhoneScrollSceneProps = {
  children: ReactNode;
};

export default function PhoneScrollScene({ children }: PhoneScrollSceneProps) {
  return (
    <div className="-mx-(--gutter) h-[480px] overflow-y-auto px-(--gutter)">
      {children}
    </div>
  );
}
