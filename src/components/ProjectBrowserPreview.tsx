import Image from "next/image";
import type { Project } from "@/lib/projects";
import BrowserFrame from "./BrowserFrame";
import ConceptSitePreview from "./ConceptSitePreview";

type ProjectBrowserPreviewProps = {
  project: Project;
  className?: string;
  priority?: boolean;
  aspectClass?: string;
  /** "hero" = full content column (case study); "card" = grid thumbnails (default) */
  variant?: "card" | "hero";
};

const PREVIEW_SIZES = {
  card: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  hero: "(max-width: 1152px) 100vw, 1152px",
} as const;

export default function ProjectBrowserPreview({
  project,
  className = "",
  priority = false,
  aspectClass = "aspect-[16/10]",
  variant = "card",
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
            sizes={PREVIEW_SIZES[variant]}
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
