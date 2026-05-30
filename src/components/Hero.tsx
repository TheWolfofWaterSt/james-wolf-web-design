import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-padding border-b border-surface-border bg-surface">
      <div className="container-content">
        <p className="label-kicker">James Wolf Web Design</p>
        <h1 className="heading-display mt-4 max-w-3xl">
          Modern websites for local businesses that turn visitors into customers
        </h1>
        <p className="text-body mt-6 max-w-2xl">
          I design and build fast, clean, mobile-first websites for
          service-based businesses.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/work" className="btn-primary">
            View Work
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
