import Link from "next/link";
import { navLinks, site } from "../_data/site";
import Arrow from "./Arrow";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x py-14 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight">
            {site.firstName} {site.lastName}
            <span className="text-accent">.</span>
          </Link>
          <p className="mt-3 text-sm text-muted max-w-xs">{site.role}, à la recherche d’un stage.</p>
        </div>

        <nav aria-label="Pied de page" className="md:col-span-3">
          <p className="eyebrow mb-4">Navigation</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow mb-4">Ailleurs</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="link-underline">
                {site.email}
              </a>
            </li>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2">
                  <span className="link-underline">{s.label}</span>
                  <Arrow className="text-xs" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x py-6 border-t border-line flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.15em] text-muted">
        <p>© {new Date().getFullYear()} {site.firstName} {site.lastName}</p>
        <a href="#top" className="link-underline">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}
