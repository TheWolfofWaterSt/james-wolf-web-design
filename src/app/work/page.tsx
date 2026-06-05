import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FictionalNotice from "@/components/FictionalNotice";
import ProjectBrowserPreview from "@/components/ProjectBrowserPreview";
import CTA from "@/components/CTA";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies for manufacturing, a personal travel app, and basketball training.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        kicker="Portfolio"
        title="Portfolio projects"
        description="Three portfolio projects—a manufacturer redesign concept, a full-stack travel tracking app, and a basketball training site."
      />

      <section className="section-padding !pt-8">
        <div className="container-content">
          <FictionalNotice
            className="mb-12"
            message="These case studies mix personal builds and concept redesigns. Each project page notes whether content is fictional, based on public sources, or a live app I maintain."
          />

          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="card group flex h-full flex-col"
                >
                  <ProjectBrowserPreview
                    project={project}
                    className="mb-6 transition group-hover:opacity-95"
                  />
                  <p className="label-kicker">{project.category}</p>
                  <h2 className="mt-2 text-xl font-semibold text-ink transition group-hover:text-accent">
                    {project.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-ink-muted">
                    {project.shortDescription}
                  </p>
                  <span className="link-accent mt-6 text-sm">
                    Read case study →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        headline="Want something similar for your business?"
        subtext="Whether you need a brand new site or a refresh, I'll work with you to create a website that meets your needs."
        secondaryLabel="About me"
        secondaryHref="/about"
      />
    </>
  );
}
