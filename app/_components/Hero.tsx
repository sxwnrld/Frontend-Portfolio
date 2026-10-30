import Link from "next/link";
import Arrow from "./Arrow";
import HeroGlobe from "./HeroGlobe";
import { site } from "../_data/site";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pt-32 pb-12 md:pb-16 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[120vw] max-w-[1400px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(157,107,255,0.16),transparent_60%)] pointer-events-none"
      />

      <HeroGlobe />

      {/* Sol en grille qui défile vers le spectateur */}
      <div aria-hidden="true" className="hero-floor">
        <div className="hero-floor-plane" />
      </div>

      <div className="container-x relative min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-14 fade-up">
          <p className="eyebrow">Portfolio — {new Date().getFullYear()}</p>
          <p className="eyebrow inline-flex items-center gap-2.5 text-paper">
            <span className="status-dot" /> Disponible pour un stage
          </p>
        </div>

        {/* Taille calculée pour que "AKROUR." + le décalage tiennent dans la largeur (Syne est très large) */}
        <h1 className="font-display font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-[clamp(2.4rem,8.2vw,8rem)]">
          <span className="line-mask">
            <span className="rise">{site.firstName}</span>
          </span>
          <span className="line-mask">
            <span className="rise [animation-delay:120ms] md:pl-[0.75em]">
              {site.lastName}
              <span className="text-accent">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-12 md:mt-16 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="fade-up [animation-delay:450ms] md:col-span-7 lg:col-span-6 text-lg md:text-xl text-paper/75 leading-relaxed">
            Étudiant en développement web à l’IIM. Je conçois des sites et des applications web, du front-end au
            back-end, avec une attention particulière à l’expérience utilisateur.
          </p>
          <div className="fade-up [animation-delay:600ms] md:col-span-5 lg:col-span-6 flex flex-wrap gap-3 md:justify-end">
            <Link href="/projets" className="group btn btn-primary">
              Voir mes projets <Arrow />
            </Link>
            <Link href="/a-propos" className="group btn btn-ghost">
              À propos <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
