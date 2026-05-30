import Link from "next/link";
import type { Project } from "@/lib/projects";
import ProjectBrowserPreview from "./ProjectBrowserPreview";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="card group flex h-full flex-col"
    >
      <ProjectBrowserPreview
        project={project}
        className="mb-6 transition group-hover:opacity-95"
      />

      <p className="label-kicker">{project.category}</p>
      <h3 className="mt-2 text-xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.shortDescription}
      </p>

      <span className="mt-6 inline-flex text-sm">
        <span className="link-accent group-hover:text-accent-hover group-hover:underline">
          View case study
        </span>
        <span
          className="font-medium text-accent transition group-hover:text-accent-hover"
          aria-hidden="true"
        >
          {" →"}
        </span>
      </span>
    </Link>
  );
}
