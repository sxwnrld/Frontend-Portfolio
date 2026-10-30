import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "../../_components/Arrow";
import ProjectCover from "../../_components/ProjectCover";
import { getProject, projects } from "../../_data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projet introuvable" };
  return { title: project.title, description: project.summary };
}

export default async function ProjetPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const total = String(projects.length).padStart(2, "0");

  const meta = [
    { label: "Client / Sujet", value: project.client },
    { label: "Contexte", value: `${project.context} — ${project.school}` },
    { label: "Période", value: project.period },
    { label: "Domaine", value: project.domain },
  ];

  return (
    <article>
      <header className="container-x pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 fade-up">
          <Link href="/projets" className="eyebrow link-underline">
            ← Tous les projets
          </Link>
          <p className="eyebrow">
            Projet {String(index + 1).padStart(2, "0")} / {total}
          </p>
        </div>

        <h1 className="mt-10 font-display font-bold tracking-tight leading-[0.95] text-[clamp(2.5rem,7.5vw,6.5rem)] max-w-5xl">
          <span className="line-mask">
            <span className="rise [animation-delay:80ms]">{project.title}</span>
          </span>
        </h1>

        <dl className="fade-up [animation-delay:300ms] mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border-y border-line">
          {meta.map((m) => (
            <div key={m.label} className="bg-ink py-5 pr-4">
              <dt className="eyebrow">{m.label}</dt>
              <dd className="mt-2 text-sm md:text-base">{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="container-x fade-up [animation-delay:450ms]">
        <ProjectCover project={project} index={index} large />
      </div>

      <section className="container-x py-24 md:py-32 grid gap-8 md:grid-cols-12">
        <h2 className="eyebrow md:col-span-4" data-reveal>
          (01) — Le projet
        </h2>
        <div className="md:col-span-8 space-y-6" data-reveal="1">
          {project.description.map((paragraph, i) => (
            <p
              key={paragraph}
              className={i === 0 ? "font-display text-2xl md:text-4xl font-semibold leading-tight tracking-tight" : "text-lg text-paper/75 leading-relaxed"}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="container-x pb-24 md:pb-32 grid gap-8 md:grid-cols-12">
        <h2 className="eyebrow md:col-span-4" data-reveal>
          (02) — Missions
        </h2>
        <ol className="md:col-span-8 border-t border-line">
          {project.missions.map((mission, i) => (
            <li
              key={mission}
              data-reveal={String(Math.min(i + 1, 5))}
              className="grid grid-cols-[3rem_1fr] gap-4 py-6 border-b border-line text-lg"
            >
              <span className="font-mono text-xs text-muted pt-1.5">{String(i + 1).padStart(2, "0")}</span>
              {mission}
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x pb-24 md:pb-32 grid gap-8 md:grid-cols-12">
        <h2 className="eyebrow md:col-span-4" data-reveal>
          (03) — Mots-clés
        </h2>
        <ul className="md:col-span-8 flex flex-wrap gap-3" data-reveal="1">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line-strong px-4 py-2 text-sm">
              {tag}
            </li>
          ))}
        </ul>
      </section>

      {/* Projet suivant */}
      <Link href={`/projets/${next.slug}`} className="group block border-t border-line">
        <div className="container-x py-20 md:py-28">
          <p className="eyebrow">Projet suivant</p>
          <div className="mt-6 flex items-center justify-between gap-6">
            <p className="font-display font-bold tracking-tight leading-[0.95] text-[clamp(2.25rem,7vw,6rem)]">
              <span className="link-underline">{next.title}</span>
            </p>
            <Arrow className="text-4xl md:text-6xl" />
          </div>
        </div>
      </Link>
    </article>
  );
}
