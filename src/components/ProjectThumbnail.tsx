import Image from "next/image";
import type { Project } from "@/lib/projects";

type ProjectThumbnailProps = {
  project: Project;
  className?: string;
  priority?: boolean;
  size?: "small" | "large";
};

export default function ProjectThumbnail({
  project,
  className = "",
  priority = false,
  size = "small",
}: ProjectThumbnailProps) {
  const base = "overflow-hidden border border-surface-border";
  const imageSrc =
    size === "large"
      ? (project.heroImageLarge ?? project.heroImage)
      : project.heroImage;

  if (imageSrc) {
    return (
      <div className={`relative ${base} ${className}`}>
        <Image
          src={imageSrc}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          sizes={
            size === "large"
              ? "(max-width: 768px) 100vw, 896px"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-br ${project.accent} ${base} ${className}`}
      aria-hidden
    />
  );
}
