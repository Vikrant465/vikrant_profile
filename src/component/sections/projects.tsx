import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/component/ui/project-card";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Projects</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
