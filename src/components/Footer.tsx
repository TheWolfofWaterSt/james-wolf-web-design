import Link from "next/link";
import { site } from "@/lib/site";

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
              className="mt-4 inline-block text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"
            aria-label="Footer navigation"
          >
            <Link href="/work" className="hover:text-ink">
              Work
            </Link>
            <Link href="/about" className="hover:text-ink">
              About
            </Link>
            <Link href="/contact" className="hover:text-ink">
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
