"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-surface-subtle/90 backdrop-blur-md">
      <nav
        className="container-content flex items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-ink transition hover:text-brand-700 sm:text-base"
        >
          {site.name}
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/work" && pathname.startsWith("/work"));

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition sm:px-4 ${
                    isActive
                      ? "bg-brand-100 text-ink"
                      : "text-ink-muted hover:bg-brand-50 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
