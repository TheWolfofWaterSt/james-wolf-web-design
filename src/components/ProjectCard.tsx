import Link from "next/link";
import type { Project } from "@/lib/projects";
import ProjectBrowserPreview from "./ProjectBrowserPreview";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card flex h-full flex-col">
      <ProjectBrowserPreview project={project} className="mb-6" />

      <p className="label-kicker">{project.category}</p>
      <h3 className="mt-2 text-xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.shortDescription}
      </p>

      <Link
        href={`/work/${project.slug}`}
        className="link-accent mt-6 inline-flex text-sm"
      >
        View case study →
      </Link>
    </article>
  );
}
