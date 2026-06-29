const iconClass = "h-5 w-5 shrink-0 text-accent";

function SmartphoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function MousePointerClickIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden
    >
      <path d="M14 4.1 12 6" />
      <path d="m5.1 8.9-2.9-.8" />
      <path d="m6 12-1.9 2" />
      <path d="M7.2 2.2 8 5.1" />
      <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const trustPoints = [
  {
    icon: UserIcon,
    title: "No tech experience needed",
    description:
      "Never built a website before? That's fine. I walk you through what I need from you—and handle everything else.",
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile-first design",
    description:
      "Most customers search on their phones. Your site will look great and work well on every screen size.",
  },
  {
    icon: MousePointerClickIcon,
    title: "Built to bring in customers",
    description:
      "Clear calls to action, easy contact paths, and layouts that help visitors decide to reach out.",
  },
  {
    icon: CheckCircleIcon,
    title: "Hands-off launch",
    description:
      "You buy the domain. I handle hosting, your contact form, and getting everything connected and live.",
  },
] as const;

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
            You focus on your business. I&apos;ll handle the website.
          </h2>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <li key={title} className="text-center sm:text-left">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 sm:mx-0">
                <Icon />
              </div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
