import Link from "next/link";
import Arrow from "./_components/Arrow";
import ContactCTA from "./_components/ContactCTA";
import { projects } from "./_data/projects";
import { allSkills, site } from "./_data/site";

const stats = [
  { value: String(projects.length).padStart(2, "0"), label: "Projets réalisés" },
  { value: String(new Set(allSkills).size), label: "Technologies" },
  { value: "02", label: "Domaines : web & cybersécurité" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-end pt-32 pb-12 md:pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[120vw] max-w-[1400px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(157,107,255,0.16),transparent_60%)] pointer-events-none"
        />

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

      {/* BANDEAU TECHNOS */}
      <section aria-label="Technologies" className="border-y border-line py-6 marquee">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {allSkills.map((skill) => (
                <li key={skill} className="flex items-center font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  <span className="px-8">{skill}</span>
                  <span className="text-accent text-base">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* PROJETS */}
      <section className="container-x py-28 md:py-40">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="eyebrow" data-reveal>
              (01) — Projets
            </p>
            <h2 data-reveal="1" className="mt-5 font-display font-bold tracking-tight text-[clamp(2.25rem,5vw,4rem)] leading-none">
              Projets sélectionnés
            </h2>
          </div>
          <Link href="/projets" data-reveal="2" className="group inline-flex items-center gap-2 text-sm">
            <span className="link-underline">Tous les projets</span> <Arrow />
          </Link>
        </div>

        <ul className="border-t border-line">
          {projects.map((p, i) => (
            <li key={p.slug} data-reveal={String(i + 1)}>
              <Link
                href={`/projets/${p.slug}`}
                className="group row-link grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1fr_13rem_5rem_auto] items-center gap-4 md:gap-8 py-7 md:py-10 border-b border-line"
              >
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="row-shift">
                  <span className="block font-display text-2xl md:text-4xl font-semibold tracking-tight">{p.title}</span>
                  <span className="block md:hidden mt-1 text-sm text-muted">
                    {p.context} · {p.year}
                  </span>
                </span>
                <span className="hidden md:block text-sm text-muted">{p.domain}</span>
                <span className="hidden md:block font-mono text-xs text-muted">{p.year}</span>
                <Arrow className="text-xl md:text-2xl" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* À PROPOS */}
      <section className="container-x pb-28 md:pb-40 grid gap-12 md:grid-cols-12">
        <p className="eyebrow md:col-span-4" data-reveal>
          (02) — À propos
        </p>
        <div className="md:col-span-8">
          <p data-reveal="1" className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
            Chaque projet est une occasion d’apprendre, d’affiner ma méthode et de livrer des solutions{" "}
            <span className="text-muted">toujours plus abouties.</span>
          </p>

          <dl className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <div key={s.label} data-reveal={String(i + 2)} className="bg-ink p-6 md:p-8">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-5xl font-bold tracking-tight">{s.value}</dd>
                <dd className="mt-3 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>

          <Link href="/a-propos" data-reveal="3" className="group mt-12 inline-flex items-center gap-2 text-sm">
            <span className="link-underline">Mon parcours</span> <Arrow />
          </Link>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
