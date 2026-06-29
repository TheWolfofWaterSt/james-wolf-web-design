"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface shadow-glow-soft">
      <nav
        className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-6 px-5 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="transition hover:opacity-90"
          aria-label={site.name}
        >
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/work"
                ? pathname.startsWith("/work")
                : link.href.startsWith("/#")
                  ? false
                  : pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition ${
                    isActive
                      ? "font-medium text-accent"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
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
