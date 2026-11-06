"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "../_data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Ferme le menu mobile à chaque changement de page
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Bloque le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding] duration-500 ${
          scrolled || open ? "bg-ink/80 backdrop-blur-xl border-line py-3" : "border-transparent py-5"
        }`}
      >
        {/* Grille 3 colonnes : logo | liens centrés | statut */}
        <div className="container-x grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-6">
          <Link href="/" className="font-display text-xl font-bold tracking-tight justify-self-start" aria-label="Accueil">
            SA<span className="text-accent">.</span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden md:block">
            <ul className="flex items-center font-mono text-xs uppercase tracking-[0.15em]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link"
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="justify-self-end flex items-center gap-4">
            <button
              className="md:hidden flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em]"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? "Fermer" : "Menu"}
              <span className="relative w-5 h-2.5">
                <span className={`absolute left-0 w-full h-px bg-paper transition-all duration-500 ${open ? "top-1/2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 w-full h-px bg-paper transition-all duration-500 ${open ? "top-1/2 -rotate-45" : "top-full"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile plein écran (hors du header car le flou y crée un nouveau contexte) */}
      {open && (
        <div id="mobile-menu" className="md:hidden fixed inset-0 z-40 bg-ink pt-28 pb-10 container-x flex flex-col">
          <nav aria-label="Navigation mobile" className="flex-1">
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li key={link.href} className="menu-item" style={{ animationDelay: `${i * 70}ms` }}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="flex items-baseline gap-4 py-2 font-display text-5xl font-bold tracking-tight"
                  >
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    {link.label}
                    {isActive(link.href) && <span className="text-accent">.</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="menu-item text-sm text-muted" style={{ animationDelay: "400ms" }}>
            <p>{site.email}</p>
          </div>
        </div>
      )}
    </>
  );
}
