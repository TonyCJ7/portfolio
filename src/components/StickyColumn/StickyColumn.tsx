"use client";

import { useEffect, useRef, type ReactNode } from "react";

type StickyColumnProps = {
  className?: string;
  children: ReactNode;
};

export default function StickyColumn({ className = "", children }: StickyColumnProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    let top = 0;
    let lastScrollY = window.scrollY;

    const place = () => {
      const lowest = Math.min(0, window.innerHeight - node.offsetHeight);

      top = Math.min(0, Math.max(lowest, top));
      node.style.top = `${top}px`;
    };

    const onScroll = () => {
      top -= window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      place();
    };

    const observer = new ResizeObserver(place);

    observer.observe(node);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", place);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", place);
    };
  }, []);

  return (
    <div ref={ref} className={`sticky top-0 self-start ${className}`.trim()}>
      {children}
    </div>
  );
}
