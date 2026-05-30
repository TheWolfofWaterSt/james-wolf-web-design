import Link from "next/link";
import type { Project } from "@/lib/projects";
import ProjectThumbnail from "./ProjectThumbnail";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className="card flex h-full flex-col">
      <ProjectThumbnail project={project} className="mb-6 h-36 rounded-xl" />

      <p className="label-kicker">{project.category}</p>
      <h3 className="mt-2 text-xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {project.shortDescription}
      </p>

      <div className="mt-6 space-y-3 border-t border-surface-border pt-6 text-sm">
        <div>
          <span className="font-medium text-ink">Problem</span>
          <p className="mt-1 text-ink-muted">{project.problem}</p>
        </div>
        <div>
          <span className="font-medium text-ink">Solution</span>
          <p className="mt-1 text-ink-muted">{project.solution}</p>
        </div>
      </div>

      <Link
        href={`/work/${project.slug}`}
        className="mt-auto pt-6 inline-flex text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
      >
        View case study →
      </Link>
    </article>
  );
}
