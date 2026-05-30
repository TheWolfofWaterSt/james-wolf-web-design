import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FictionalNotice from "@/components/FictionalNotice";
import CTA from "@/components/CTA";
import { projects, getProjectBySlug } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <header className="section-padding border-b border-surface-border bg-surface">
        <div className="container-content">
          <Link
            href="/work"
            className="text-sm font-medium text-ink-muted hover:text-ink"
          >
            ← Back to work
          </Link>

          <FictionalNotice className="mt-8" />

          <p className="label-kicker mt-10">{project.category}</p>
          <h1 className="heading-display mt-3">{project.title}</h1>
          <p className="text-body mt-6 max-w-2xl">{project.shortDescription}</p>

          <div
            className={`mt-10 h-48 rounded-2xl bg-gradient-to-br sm:h-64 ${project.accent} border border-surface-border`}
            aria-hidden
          />
        </div>
      </header>

      <article className="section-padding">
        <div className="container-content max-w-3xl space-y-14">
          <section>
            <h2 className="heading-section text-xl sm:text-2xl">Overview</h2>
            <p className="text-body mt-4">{project.overview}</p>
          </section>

          <section>
            <h2 className="heading-section text-xl sm:text-2xl">Problem</h2>
            <p className="text-body mt-4">{project.problem}</p>
          </section>

          <section>
            <h2 className="heading-section text-xl sm:text-2xl">Solution</h2>
            <p className="text-body mt-4">{project.solution}</p>
          </section>

          <section>
            <h2 className="heading-section text-xl sm:text-2xl">
              Design decisions
            </h2>
            <ul className="mt-6 space-y-4">
              {project.designDecisions.map((decision) => (
                <li
                  key={decision}
                  className="flex gap-4 rounded-xl border border-surface-border bg-surface px-5 py-4 text-sm text-ink-muted sm:text-base"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"
                    aria-hidden
                  />
                  {decision}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="heading-section text-xl sm:text-2xl">Outcome</h2>
            <p className="text-body mt-4">{project.outcome}</p>
            <p className="mt-4 text-sm italic text-ink-faint">
              Qualitative assessment for portfolio demonstration—not based on
              real analytics or client results.
            </p>
          </section>
        </div>
      </article>

      <CTA variant="compact" />
    </>
  );
}
