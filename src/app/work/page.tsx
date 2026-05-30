import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FictionalNotice from "@/components/FictionalNotice";
import CTA from "@/components/CTA";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Fictional concept redesign case studies for local HVAC, restaurant, and plumbing businesses.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        kicker="Portfolio"
        title="Concept redesigns"
        description="Three fictional projects showcasing design thinking for service-based local businesses. None of these are real clients—all names and content are placeholders."
      />

      <section className="section-padding !pt-8">
        <div className="container-content">
          <FictionalNotice className="mb-12" />

          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="card group flex h-full flex-col"
                >
                  <div
                    className={`mb-6 h-40 rounded-xl bg-gradient-to-br ${project.accent} border border-surface-border transition group-hover:opacity-90`}
                    aria-hidden
                  />
                  <p className="label-kicker">{project.category}</p>
                  <h2 className="mt-2 text-xl font-semibold text-ink group-hover:text-brand-800">
                    {project.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-ink-muted">
                    {project.shortDescription}
                  </p>
                  <span className="mt-6 text-sm font-medium text-brand-700">
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
        subtext="I build custom sites for local service businesses—not template reskins."
        secondaryLabel="About me"
        secondaryHref="/about"
      />
    </>
  );
}
