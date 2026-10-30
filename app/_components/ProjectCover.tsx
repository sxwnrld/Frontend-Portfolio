import type { Project } from "../_data/projects";

// Position du halo violet, différente pour chaque projet
const glows = [
  { left: "-12%", top: "-25%" },
  { right: "-15%", top: "5%" },
  { left: "15%", bottom: "-40%" },
  { right: "-5%", bottom: "-30%" },
];

// Visuel typographique généré pour chaque projet (à remplacer par une capture si besoin)
export default function ProjectCover({
  project,
  index,
  large = false,
}: {
  project: Project;
  index: number;
  large?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-surface ${
        large ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3]"
      }`}
    >
      <div className="cover-inner absolute inset-0">
        <div className="cover-grid absolute inset-0" />
        <div className="cover-glow" style={glows[index % glows.length]} />
        <span className="text-outline absolute -bottom-[0.2em] right-3 font-display font-extrabold leading-none text-[clamp(7rem,18vw,15rem)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center px-6 text-center font-display font-extrabold tracking-tight leading-none ${
            large ? "text-[clamp(2rem,7vw,6rem)]" : "text-[clamp(1.75rem,3.6vw,3rem)]"
          }`}
        >
          {project.client}
        </span>
      </div>
      <span className="eyebrow absolute left-5 top-5 md:left-7 md:top-7">{project.domain}</span>
      <span className="eyebrow absolute right-5 top-5 md:right-7 md:top-7">{project.year}</span>
    </div>
  );
}
