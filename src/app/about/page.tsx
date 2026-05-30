import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "James Wolf — freelance web designer and developer focused on modern websites for local businesses.",
};

const principles = [
  {
    title: "Simplicity",
    text: "Every section earns its place. No filler, no distracting effects—just clear communication.",
  },
  {
    title: "Clarity",
    text: "Visitors should know what you do, where you serve, and how to reach you within seconds.",
  },
  {
    title: "Performance",
    text: "Lean pages that load fast on mobile networks—the experience local customers expect.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="Hi, I'm James Wolf"
        description="Freelance web designer and developer helping local service businesses look professional online and convert more visitors into leads."
      />

      <section className="section-padding">
        <div className="container-content max-w-3xl space-y-10">
          <div className="prose-spacing space-y-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              I work solo by choice. That means you work directly with the person
              designing and building your site—no handoffs, no agency overhead, no
              mystery about who is actually doing the work.
            </p>
            <p>
              My focus is local businesses: HVAC, plumbing, contractors,
              restaurants, and other service providers who need a website that
              feels modern, loads fast, and makes it easy for customers to call,
              book, or request a quote.
            </p>
            <p>
              The work in this portfolio is intentionally fictional—concept
              redesigns that show how I think about layout, hierarchy, and
              conversion for each industry. When we work together, the process
              is straightforward: understand your goals, design with your
              customers in mind, and ship something you are proud to share.
            </p>
          </div>

          <div>
            <h2 className="heading-section text-xl sm:text-2xl">How I work</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-3">
              {principles.map((item) => (
                <li key={item.title} className="card">
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA
        headline="Ready to talk about your site?"
        primaryLabel="Get in touch"
        secondaryLabel="See concept work"
        secondaryHref="/work"
      />
    </>
  );
}
