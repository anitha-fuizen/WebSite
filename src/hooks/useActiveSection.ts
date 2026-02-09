"use client";

import { useEffect, useMemo, useState } from "react";

type UseActiveSectionOptions = {
  sectionIds: string[];
  rootMargin?: string;
};

const DEFAULT_ROOT_MARGIN = "-30% 0px -60% 0px";

export function useActiveSection({
  sectionIds,
  rootMargin = DEFAULT_ROOT_MARGIN,
}: UseActiveSectionOptions) {
  const ids = useMemo(
    () => sectionIds.map((id) => id.replace(/^#/, "")),
    [sectionIds],
  );

  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin, threshold: [0.1, 0.25, 0.5, 0.75] },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return { activeId };
}


