import Image from "next/image";
import type { Project } from "@/lib/projects";
import BrowserFrame from "./BrowserFrame";
import ConceptSitePreview from "./ConceptSitePreview";

type ProjectBrowserPreviewProps = {
  project: Project;
  className?: string;
  priority?: boolean;
  aspectClass?: string;
};

export default function ProjectBrowserPreview({
  project,
  className = "",
  priority = false,
  aspectClass = "aspect-[16/10]",
}: ProjectBrowserPreviewProps) {
  const domain = project.previewDomain ?? `${project.slug}.com/`;
  const normalizedDomain = domain.endsWith("/") ? domain : `${domain}/`;

  return (
    <BrowserFrame domain={normalizedDomain} className={className}>
      <div className={`relative w-full ${aspectClass}`}>
        {project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={`${project.title} redesign preview`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        ) : project.previewConcept ? (
          <ConceptSitePreview
            theme={project.previewConcept}
            className="absolute inset-0"
          />
        ) : (
          <div
            className={`h-full w-full bg-gradient-to-br ${project.accent}`}
            aria-hidden
          />
        )}
      </div>
    </BrowserFrame>
  );
}
