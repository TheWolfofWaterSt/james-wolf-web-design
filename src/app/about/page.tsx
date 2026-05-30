import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";
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

const interests = [
  "Traveling to new places",
  "Gaming on PC or PS5",
  "Reading a good book",
  "Exploring local coffee shops and restaurants",
  "Spending time with my wife and pets"
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="Hi, I'm James Wolf"
        description="Freelance web designer and developer helping local service businesses look professional online and convert more visitors into leads. You work directly with me—no agency handoffs, no mystery about who is building your site."
      />

      <section className="section-padding !pt-8">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-6">
            <p className="label-kicker">The person behind the work</p>
            <div className="space-y-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              <p>
                I work solo by choice. That means you work directly with the
                person designing and building your site. No handoffs, no agency
                overhead, and no wondering who is actually doing the work.
              </p>
              <p>
                My focus is local businesses: service providers who need a website that
                feels modern, loads fast, and makes it easy for customers to
                call, book, or request a quote.
              </p>
              <p>
                The work in this portfolio is intentionally fictional. There are 
                concept redesigns that show how I think about layout, hierarchy, and
                conversion for each industry. When we work together, the goal is
                the same: understand your business, design with your customers
                in mind, and ship something you are proud to share.
              </p>
            </div>

            <ul className="space-y-3 border-t border-surface-border pt-8 text-sm text-ink-muted">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                Solo freelancer—you work directly with me on every project
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                Focused on local service businesses across Wisconsin and beyond
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                Clear timelines and straightforward communication from day one
              </li>
            </ul>
          </div>

          <figure className="animate-fade-up w-full lg:pt-8">
            <Image
              src="/images/james-canyon-overlook.jpg"
              alt="James Wolf sitting at a canyon overlook in Utah"
              width={2048}
              height={1365}
              className="h-auto w-full rounded-2xl shadow-glow-soft"
              sizes="(max-width: 1024px) 90vw, 560px"
              quality={90}
              priority
            />
          </figure>
        </div>
      </section>

      <Process introDescription="When we work together, here's what to expect at every step." />

      <section
        className="section-padding bg-surface"
        aria-labelledby="principles-heading"
      >
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="label-kicker">Approach</p>
            <h2 id="principles-heading" className="heading-section mt-3">
              What I prioritize on every project
            </h2>
            <p className="text-body mt-4">
              These guide every layout decision, content choice, and line of
              code—whether it&apos;s a concept redesign or a live client site.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
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
      </section>

      <section className="section-padding" aria-labelledby="personal-heading">
        <div className="container-content max-w-2xl">
          <p className="label-kicker">Beyond the screen</p>
          <h2 id="personal-heading" className="heading-section mt-3">
            A little context outside of client work
          </h2>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            <p>
              When I&apos;m not designing or building sites, you&apos;ll usually
              find me traveling, playing video games, or with my head buried in a book. 
              The photo above is from a hike in Bryce Canyon. Getting away from the desk 
              helps me come back with a clearer head.
            </p>
            <p>
              I&apos;m based in Wisconsin, but I work with local businesses
              wherever they are. Good web design doesn&apos;t require being in
              the same room; it requires clear communication and a shared
              understanding of your customers.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-surface-border bg-surface px-4 py-2 text-sm text-ink-muted"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        headline="Ready to talk about your site?"
        subtext="Tell me about your business and your goals. You'll hear back from me directly, not a sales team."
        primaryLabel="Get in touch"
        secondaryLabel="See concept work"
        secondaryHref="/work"
      />
    </>
  );
}
