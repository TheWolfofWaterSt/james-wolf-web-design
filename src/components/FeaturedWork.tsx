import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="work-heading">
      <div className="container-content">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="label-kicker">Featured work</p>
            <h2 id="work-heading" className="heading-section mt-3">
              Concept redesigns for local industries
            </h2>
            <p className="text-body mt-4">
              Case studies for manufacturing, basketball training, and
              plumbing—two personal portfolio projects and a fictional concept
              for demonstration.
            </p>
          </div>
          <Link
            href="/work"
            className="btn-secondary shrink-0 self-start sm:self-auto"
          >
            View all work
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
