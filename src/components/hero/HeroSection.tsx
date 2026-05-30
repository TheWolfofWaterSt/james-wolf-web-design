import Link from "next/link";
import SplitComparison from "./SplitComparison";
import TrustStrip from "./TrustStrip";

export default function HeroSection() {
  return (
    <section className="bg-surface-subtle pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-[1100px] px-5 pt-10 md:pt-14">
        <div
          className="animate-fade-up mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-accent-ring bg-accent-light px-3.5 py-1.5"
          style={{ animationDelay: "0ms" }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            Web design for local businesses
          </span>
        </div>

        <h1
          className="animate-fade-up mx-auto max-w-[720px] text-center font-display text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-ink md:text-[clamp(36px,5vw,60px)] md:tracking-[-0.05em]"
          style={{ animationDelay: "100ms" }}
        >
          Your website should work
          <br />
          as hard as <span className="text-accent">you do.</span>
        </h1>

        <p
          className="animate-fade-up mx-auto mb-9 mt-6 max-w-[500px] text-center text-lg font-normal leading-relaxed text-ink-muted"
          style={{ animationDelay: "200ms" }}
        >
          I rebuild outdated local business websites into modern, professional
          tools that actually bring in customers.
        </p>

        <div
          className="animate-fade-up mb-16 flex justify-center"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            href="/work"
            className="rounded-xl bg-accent px-7 py-3.5 text-[15px] font-semibold text-surface transition-colors duration-150 hover:bg-accent-hover"
          >
            See my work
          </Link>
        </div>
      </div>

      <div className="px-5">
        <SplitComparison />
        <TrustStrip />
      </div>
    </section>
  );
}
