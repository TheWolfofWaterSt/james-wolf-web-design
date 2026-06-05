import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FictionalNotice from "@/components/FictionalNotice";
import ProjectBrowserPreview from "@/components/ProjectBrowserPreview";
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
      <header className="section-padding border-b border-surface-border bg-surface-subtle">
        <div className="container-content">
          <Link
            href="/work"
            className="text-sm font-medium text-ink-muted transition hover:text-accent"
          >
            ← Back to work
          </Link>

          {project.portfolioNote ? (
            <FictionalNotice
              className="mt-8"
              message={project.portfolioNote}
            />
          ) : null}

          <p className="label-kicker mt-10">{project.category}</p>
          <h1 className="heading-display mt-3">{project.title}</h1>
          <p className="text-body mt-6 max-w-2xl">{project.shortDescription}</p>

          {project.liveUrl || project.demoAccess ? (
            <div className="mt-6 flex flex-col gap-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent inline-flex items-center gap-2 text-sm"
                >
                  View live demo →
                </a>
              ) : null}
              {project.demoAccess ? (
                <p className="text-sm text-ink-muted">
                  <span className="font-medium text-ink">
                    {project.demoAccess.label}:
                  </span>{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-ink">
                    {project.demoAccess.value}
                  </code>
                </p>
              ) : null}
            </div>
          ) : null}

          <ProjectBrowserPreview
            project={project}
            className="mt-10"
            aspectClass="aspect-[16/9] sm:aspect-[2/1]"
            priority
            variant="hero"
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
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {decision}
                </li>
              ))}
            </ul>
          </section>

          {project.technicalHighlights?.length ? (
            <section>
              <h2 className="heading-section text-xl sm:text-2xl">
                Technical highlights
              </h2>
              <ul className="mt-6 space-y-4">
                {project.technicalHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-xl border border-surface-border bg-surface px-5 py-4 text-sm text-ink-muted sm:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.stack ? (
            <section>
              <h2 className="heading-section text-xl sm:text-2xl">Stack</h2>
              <p className="text-body mt-4">{project.stack}</p>
            </section>
          ) : null}

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
