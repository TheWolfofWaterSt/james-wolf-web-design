import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for small business websites. One-time setup with an optional monthly care plan for hosting, updates, and support.",
};

const setupIncludes = [
  "Design + development",
  "Mobile optimization",
  "Basic SEO setup",
  "Contact form (sends messages via email)",
  "Deployment + launch",
] as const;

const careIncludes = [
  "Hosting",
  "Contact form (reliable email delivery system)",
  "Security updates",
  "Small edits and content changes",
  "Uptime monitoring",
  "Basic support",
] as const;

const pricingFactors = [
  "Number of pages",
  "Booking/scheduling integrations",
  "Content complexity",
  "SEO depth",
  "Copywriting needs",
] as const;

function PricingBlock({
  label,
  price,
  note,
  includes,
}: {
  label: string;
  price: string;
  note: string;
  includes: readonly string[];
}) {
  return (
    <article className="card flex flex-col lg:row-span-4 lg:grid lg:grid-rows-subgrid">
      <p className="label-kicker">{label}</p>
      <p className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {price}
      </p>
      <p className="mt-3 self-start text-sm leading-relaxed text-ink-muted">
        {note}
      </p>
      <ul className="w-full space-y-3 self-start border-t border-surface-border pt-5 text-sm text-ink-muted">
        {includes.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        kicker="Pricing"
        title="Simple, transparent pricing for small business websites"
        description="Custom-built websites with optional ongoing care for hosting, updates, and support"
      />

      <section className="section-padding !pt-8">
        <div className="container-content max-w-3xl">
          <p className="text-body">
            Most websites include a one-time setup fee followed by an optional
            monthly care plan. Final pricing depends on the size and needs of
            your business.
          </p>
        </div>
      </section>

      <section
        className="section-padding !pt-0"
        aria-labelledby="pricing-blocks-heading"
      >
        <div className="container-content">
          <h2 id="pricing-blocks-heading" className="sr-only">
            Pricing
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_1fr]">
            <PricingBlock
              label="Website Setup"
              price="$1,200 – $2,500"
              note="Most small business websites fall near the lower end of this range."
              includes={setupIncludes}
            />
            <PricingBlock
              label="Website Care Plan"
              price="$50 – $100 / month"
              note="A fully managed experience—I handle hosting, updates, and ongoing maintenance so your website stays reliable and up to date."
              includes={careIncludes}
            />
          </div>
        </div>
      </section>

      <section
        className="section-padding bg-surface"
        aria-labelledby="pricing-factors-heading"
      >
        <div className="container-content max-w-2xl">
          <p className="label-kicker">Pricing factors</p>
          <h2 id="pricing-factors-heading" className="heading-section mt-3">
            What affects pricing
          </h2>
          <p className="text-body mt-4">
            Every business is a little different. These are the main things that
            shape your quote.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink-muted sm:text-base">
            {pricingFactors.map((factor) => (
              <li key={factor} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        headline="Ready to build your website?"
        subtext="Most replies within 24–48 hours"
        primaryLabel="Check availability"
        primaryHref="/contact"
      />
    </>
  );
}
