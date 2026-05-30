const trustPoints = [
  {
    title: "Fast delivery",
    description:
      "Focused scopes and clear milestones—no endless revision cycles.",
  },
  {
    title: "Mobile-first design",
    description:
      "Most local customers search on phones; layouts are built for small screens first.",
  },
  {
    title: "Conversion-focused layouts",
    description:
      "Calls, forms, and booking paths placed where visitors actually decide.",
  },
  {
    title: "Clean modern UX",
    description:
      "Whitespace, hierarchy, and plain language—professional without clutter.",
  },
];

export default function Trust() {
  return (
    <section
      className="section-dark section-padding"
      aria-labelledby="trust-heading"
    >
      <div className="container-content">
        <div className="text-center">
          <p className="label-kicker">Why work with me</p>
          <h2 id="trust-heading" className="heading-section mt-3">
            Built for local businesses that need results
          </h2>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <li key={point.title} className="text-center sm:text-left">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:mx-0">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              </div>
              <h3 className="font-semibold text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
