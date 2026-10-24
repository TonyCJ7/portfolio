"use client";

import { useEffect, useRef } from "react";
import { useCoarsePointer } from "@/hooks/useCoarsePointer";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SPOTLIGHT_CLASSES =
  "pointer-events-none fixed inset-0 -z-10 opacity-0 transition-opacity duration-300 ease-standard [background:radial-gradient(600px_at_var(--x)_var(--y),var(--spot),transparent_80%)]";

export default function Spotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const coarsePointer = useCoarsePointer();
  const hidden = reducedMotion || coarsePointer;

  useEffect(() => {
    const spot = spotRef.current;

    if (hidden || spot === null) {
      return;
    }

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paint = () => {
      const rect = spot.getBoundingClientRect();

      frame = 0;
      spot.style.setProperty("--x", `${pointerX - rect.left}px`);
      spot.style.setProperty("--y", `${pointerY - rect.top}px`);
      spot.classList.replace("opacity-0", "opacity-100");
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (frame === 0) {
        frame = requestAnimationFrame(paint);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, [hidden]);

  if (hidden) {
    return null;
  }

  return <div ref={spotRef} aria-hidden className={SPOTLIGHT_CLASSES} />;
}
