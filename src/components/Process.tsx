import { Fragment } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We talk about your business, your customers, and what you need the site to do. No technical background required—just a clear picture of what you offer and who you're trying to reach.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We map out pages, content, and how visitors will reach you. I'll tell you what I need from you and handle the rest—no guesswork once design begins.",
  },
  {
    number: "03",
    title: "Design & build",
    description:
      "I design and develop your site mobile-first. Clean layouts, fast load times, and structure that helps local customers find you—without template bloat or jargon.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "You purchase your domain; I handle hosting, connect your contact form so inquiries land in your inbox, and get everything live. When we launch, it just works.",
  },
] as const;

function StepConnector() {
  return (
    <li
      aria-hidden
      className="flex shrink-0 items-center justify-center py-3 lg:w-14 lg:py-0"
    >
      <div className="h-10 w-0.5 rounded-full bg-accent/40 lg:h-0.5 lg:w-12" />
    </li>
  );
}

type ProcessProps = {
  introDescription?: string;
  className?: string;
};

export default function Process({
  introDescription = "Never had a website before? No problem. I'll guide you through the few decisions only you can make, and handle the rest—from design through launch.",
  className = "",
}: ProcessProps) {
  return (
    <section
      id="process"
      className={`section-padding ${className}`.trim()}
      aria-labelledby="process-heading"
    >
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="label-kicker">How it works</p>
          <h2 id="process-heading" className="heading-section mt-3">
            From first conversation to live site
          </h2>
          <p className="text-body mt-4">{introDescription}</p>
        </div>

        <ol className="mt-14 flex list-none flex-col lg:mt-16 lg:flex-row lg:items-stretch">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              {index > 0 && <StepConnector />}
              <li className="card flex min-w-0 flex-1 flex-col">
                <span className="font-display text-sm font-semibold tracking-tight text-accent/50">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {step.description}
                </p>
                <div className="flex-1" aria-hidden />
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
