"use client";

import { useEffect, useState } from "react";

/**
 * Hook untuk melacak section mana yang sedang aktif berdasarkan posisi scroll.
 * Memakai IntersectionObserver - ringan dan tidak memicu re-render berlebihan.
 */
export function useActiveSection(sectionIds: string[], offset = 96) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Margin atas negatif sebesar tinggi navbar agar section dianggap aktif
    // ketika tepat berada di bawah navbar.
    const rootMargin = `-${offset}px 0px -55% 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        // Ambil entry yang paling intersect (visible terbanyak)
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));

    // Edge case: kalau user scroll ke paling atas, set ke section pertama.
    // Kalau scroll ke paling bawah, set ke section terakhir.
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;

      if (scrollY < 50) {
        setActiveId(sectionIds[0]);
      } else if (scrollY + innerHeight >= scrollHeight - 50) {
        setActiveId(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
