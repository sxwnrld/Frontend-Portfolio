import ContactCTA from "../_components/ContactCTA";
import PageHeader from "../_components/PageHeader";
import ProjectGrid from "../_components/ProjectGrid";
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

      <ProjectGrid projects={projects} />

      <ContactCTA />
    </>
  );
}
