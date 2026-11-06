"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "../_data/projects";
import Arrow from "./Arrow";
import ProjectCover from "./ProjectCover";
import ProjectFilter, { ALL } from "./ProjectFilter";

// Recherche insensible à la casse et aux accents
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [domain, setDomain] = useState(ALL);
  const [query, setQuery] = useState("");

  const domains = [
    { label: ALL, count: projects.length },
    ...Array.from(new Set(projects.map((p) => p.domain)), (label) => ({
      label,
      count: projects.filter((p) => p.domain === label).length,
    })),
  ];

  const q = normalize(query.trim());
  const filtered = projects.filter(
    (p) =>
      (domain === ALL || p.domain === domain) &&
      (!q || normalize([p.title, p.client, p.summary, ...p.tags].join(" ")).includes(q))
  );

  const reset = () => {
    setDomain(ALL);
    setQuery("");
  };

  return (
    <section className="container-x pb-28 md:pb-40">
      <ProjectFilter
        domains={domains}
        domain={domain}
        query={query}
        onDomainChange={setDomain}
        onQueryChange={setQuery}
      />

      <p className="mt-8 eyebrow" aria-live="polite">
        {filtered.length} projet{filtered.length > 1 ? "s" : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projets/${p.slug}`}
              className={`group block fade-up ${i % 2 === 1 ? "md:mt-24" : ""}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <ProjectCover project={p} index={projects.indexOf(p)} />
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
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-line bg-surface p-10 md:p-14">
          <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight">Aucun projet trouvé.</p>
          <p className="mt-3 text-paper/70">Essayez un autre mot-clé ou un autre domaine.</p>
          <button type="button" onClick={reset} className="group btn btn-ghost mt-8">
            Réinitialiser les filtres <Arrow />
          </button>
        </div>
      )}
    </section>
  );
}
