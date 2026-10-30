import Link from "next/link";
import Arrow from "../_components/Arrow";
import ContactCTA from "../_components/ContactCTA";
import PageHeader from "../_components/PageHeader";
import ProjectCover from "../_components/ProjectCover";
import { projects } from "../_data/projects";

export const metadata = {
  title: "Projets",
  description: "Les projets de Sawwan Akrour en développement web et en cybersécurité.",
};

export default function ProjetsPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Projets — ${String(projects.length).padStart(2, "0")}`}
        title="Projets."
        intro="Refontes de sites en développement web et études en cybersécurité : une sélection des projets réalisés pendant mes études."
      />

      <section className="container-x pb-28 md:pb-40 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/projets/${p.slug}`}
            data-reveal={String((i % 2) + 1)}
            className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
          >
            <ProjectCover project={p} index={i} />
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow">
                  {p.context} · {p.school}
                </p>
                <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  <span className="link-underline">{p.title}</span>
                </h2>
                <p className="mt-3 text-paper/70">{p.summary}</p>
              </div>
              <Arrow className="text-2xl mt-1" />
            </div>
          </Link>
        ))}
      </section>

      <ContactCTA />
    </>
  );
}
