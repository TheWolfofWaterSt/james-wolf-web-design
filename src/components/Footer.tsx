import Link from "next/link";
import { site, sitePhoneTel } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface">
      <div className="container-content section-padding !py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-base font-semibold text-ink">{site.name}</p>
            <p className="mt-2 text-sm text-ink-muted">{site.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="link-accent mt-4 inline-block text-sm"
            >
              {site.email}
            </a>
            <a
              href={`tel:${sitePhoneTel}`}
              className="link-accent mt-2 inline-block text-sm"
            >
              {site.phone}
            </a>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"
            aria-label="Footer navigation"
          >
            <Link href="/work" className="transition hover:text-ink">
              Work
            </Link>
            <Link href="/about" className="transition hover:text-ink">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-ink">
              Contact
            </Link>
          </nav>
        </div>

        <p className="mt-10 border-t border-surface-border pt-8 text-xs text-ink-faint">
          © {year} {site.name}. Portfolio concept projects are fictional
          demonstrations only.
        </p>
      </div>
    </footer>
  );
}
