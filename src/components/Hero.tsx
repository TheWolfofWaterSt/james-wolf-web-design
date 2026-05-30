import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-surface-border bg-surface-subtle section-padding">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="container-content relative">
        <p className="label-kicker">James Wolf Web Design</p>
        <h1 className="heading-display mt-4 max-w-3xl">
          Modern websites for local businesses that turn visitors into customers
        </h1>
        <p className="text-body mt-6 max-w-2xl">
          I design and build fast, clean, mobile-first websites for
          service-based businesses.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/contact" className="btn-primary">
            Get started
          </Link>
          <Link href="/work" className="btn-secondary">
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
