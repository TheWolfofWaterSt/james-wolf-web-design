import Link from "next/link";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
];

export default function HeroNav() {
  return (
    <header className="bg-surface-subtle">
      <nav
        className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-6 px-5 py-5"
        aria-label="Main navigation"
      >
        <Link href="/" className="font-display text-sm font-semibold text-ink sm:text-base">
          James Wolf{" "}
          <span className="text-accent">Web Design</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-ink-muted transition hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="rounded-lg bg-charcoal px-5 py-2.5 text-sm font-medium text-surface transition hover:opacity-90"
        >
          Get a free review
        </Link>
      </nav>
    </header>
  );
}
