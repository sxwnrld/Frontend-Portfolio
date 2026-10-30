import Link from "next/link";
import Arrow from "./_components/Arrow";
import ContactCTA from "./_components/ContactCTA";
import Hero from "./_components/Hero";
import { projects } from "./_data/projects";
import { allSkills } from "./_data/site";

const stats = [
  { value: String(projects.length).padStart(2, "0"), label: "Projets réalisés" },
  { value: String(new Set(allSkills).size), label: "Technologies" },
  { value: "02", label: "Domaines : web & cybersécurité" },
];

export default function Home() {
  return (
    <>
      <Hero />

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
