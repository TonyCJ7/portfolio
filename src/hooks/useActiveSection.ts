"use client";

import { useEffect, useState } from "react";

const SPY_BAND = "-40% 0px -55% 0px";
const BOTTOM_SLACK = 2;

function atPageBottom(): boolean {
  return (
    window.scrollY + window.innerHeight
    >= document.documentElement.scrollHeight - BOTTOM_SLACK
  );
}

export function useActiveSection(ids: string[]): string {
  const idsKey = ids.join(" ");
  const firstId = ids[0] ?? "";
  const [active, setActive] = useState(firstId);

  useEffect(() => {
    if (!idsKey) {
      return;
    }

    const sectionIds = idsKey.split(" ");
    const lastId = sectionIds[sectionIds.length - 1];
    const inBand = new Set<string>();

    function update() {
      if (atPageBottom()) {
        setActive(lastId);

        return;
      }

      const latest = sectionIds.findLast((id) => inBand.has(id));

      if (latest) {
        setActive(latest);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            inBand.add(entry.target.id);
          } else {
            inBand.delete(entry.target.id);
          }
        }

        update();
      },
      { rootMargin: SPY_BAND, threshold: 0 },
    );

    for (const id of sectionIds) {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    }

    window.addEventListener("scroll", update, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [idsKey]);

  return ids.includes(active) ? active : firstId;
}
