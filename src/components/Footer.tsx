import Link from "next/link";
import Logo from "@/components/Logo";
import { site, sitePhoneTel } from "@/lib/site";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="container-content section-padding !py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
            <Link
              href="/"
              className="inline-block transition hover:opacity-90"
              aria-label={site.name}
            >
              <Logo />
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
              Get in touch
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <p className="text-xs text-ink-faint">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="link-accent mt-1 inline-block break-all text-sm sm:break-normal"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-xs text-ink-faint">Phone</p>
                <a
                  href={`tel:${sitePhoneTel}`}
                  className="link-accent mt-1 inline-block text-sm"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer navigation" className="sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
              Pages
            </p>
            <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 lg:flex-col lg:gap-3">
              {footerLinks.map((link) => (
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
          </nav>
        </div>

        <p className="mt-10 border-t border-surface-border pt-8 text-xs leading-relaxed text-ink-faint">
          © {year} {site.name}. Portfolio concept projects are fictional
          demonstrations only.
        </p>
      </div>
    </footer>
  );
}
