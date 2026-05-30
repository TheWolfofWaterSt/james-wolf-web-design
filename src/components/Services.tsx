const services = [
  {
    title: "Web Design",
    description:
      "Clean, modern layouts tailored to how local customers actually browse and decide.",
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive builds with maintainable code—no bloated templates or plugins.",
  },
  {
    title: "UX/UI Improvements",
    description:
      "Clear navigation, stronger CTAs, and friction removed from contact and booking flows.",
  },
  {
    title: "Local SEO Structure",
    description:
      "Semantic markup, service pages, and on-page structure that support local search visibility.",
  },
];

export default function Services() {
  return (
    <section className="section-padding" aria-labelledby="services-heading">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="label-kicker">Services</p>
          <h2 id="services-heading" className="heading-section mt-3">
            What I help local businesses with
          </h2>
          <p className="text-body mt-4">
            From first impression to contact form—every layer is designed to
            build trust and drive action.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.title} className="card">
              <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
