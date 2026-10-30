"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fait apparaître les éléments [data-reveal] quand ils entrent dans l'écran
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    // Ce qui est déjà à l'écran apparaît tout de suite, le reste au scroll
    document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      else observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
