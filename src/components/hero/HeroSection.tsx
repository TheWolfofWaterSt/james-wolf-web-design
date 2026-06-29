import Link from "next/link";
import SplitComparison from "./SplitComparison";
import TrustStrip from "./TrustStrip";

export default function HeroSection() {
  return (
    <section className="bg-surface-subtle pb-16 md:pb-20">
      <div className="mx-auto w-full max-w-[1100px] px-5 pt-10 md:pt-14">
        <h1
          className="animate-fade-up mx-auto max-w-[840px] text-center font-display text-[clamp(28px,4.5vw,60px)] font-bold leading-[1.08] tracking-[-0.04em] text-ink md:tracking-[-0.05em]"
          style={{ animationDelay: "0ms" }}
        >
          Your work is great.
          <br />
          <span className="inline-block whitespace-nowrap">
            Your <span className="text-accent">website</span> should be too.
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mb-9 mt-6 max-w-[500px] text-center text-lg font-normal leading-relaxed text-ink-muted"
          style={{ animationDelay: "100ms" }}
        >
          I help small businesses get online without the tech headaches—whether
          you&apos;re starting from scratch or finally replacing an outdated
          site. I handle the design, build, and setup so you can focus on your
          customers.
        </p>

        <div
          className="animate-fade-up mb-16 flex justify-center"
          style={{ animationDelay: "200ms" }}
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
