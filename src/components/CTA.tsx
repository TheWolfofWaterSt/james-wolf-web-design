import Link from "next/link";

type CTAProps = {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "compact";
};

export default function CTA({
  headline = "Need a new website—or a better one?",
  subtext = "Tell me about your business and your goals, and I'll reply with clear next steps.",
  primaryLabel = "Contact Me",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  variant = "default",
}: CTAProps) {
  return (
    <section
      className={
        variant === "compact"
          ? "py-8"
          : "section-padding border-t border-surface-border bg-surface-subtle"
      }
      aria-labelledby="cta-heading"
    >
      <div className="container-content">
        <div
          className={`rounded-2xl border border-surface-border bg-surface p-8 shadow-glow-card sm:p-12 ${
            variant === "default" ? "text-center" : ""
          }`}
        >
          <h2
            id="cta-heading"
            className={`font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl ${
              variant === "default" ? "mx-auto max-w-xl" : ""
            }`}
          >
            {headline}
          </h2>
          {subtext && (
            <p
              className={`text-body mt-4 ${
                variant === "default" ? "mx-auto max-w-lg" : "max-w-xl"
              }`}
            >
              {subtext}
            </p>
          )}
          <div
            className={`mt-8 flex flex-col gap-4 sm:flex-row sm:items-center ${
              variant === "default" ? "justify-center" : ""
            }`}
          >
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="btn-secondary">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
