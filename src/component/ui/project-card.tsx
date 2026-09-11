import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-shadow hover:shadow-lg">
      <div className="relative aspect-video w-full bg-background">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="flex-1 text-sm text-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-background px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm font-medium">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Visit project
            </a>
          )}
          {!project.liveUrl && project.liveNote && (
            <span className="text-muted">{project.liveNote}</span>
          )}
        </div>
      </div>
    </div>
  );
}
