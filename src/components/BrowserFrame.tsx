import type { ReactNode } from "react";

type BrowserChromeProps = {
  variant: "before" | "after";
  domain: string;
};

export function BrowserChrome({ variant, domain }: BrowserChromeProps) {
  const isBefore = variant === "before";

  return (
    <div
      className={`flex h-9 shrink-0 flex-row items-center gap-2 px-4 ${
        isBefore ? "bg-[#e8e8e3]" : "bg-charcoal"
      }`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden />
      <div
        className={`mx-3 flex h-5 flex-1 items-center rounded px-2.5 text-[11px] ${
          isBefore
            ? "bg-[#d8d8d3] text-ink-muted"
            : "bg-ink-secondary text-ink-faint"
        }`}
      >
        {domain}
      </div>
    </div>
  );
}

type BrowserFrameProps = {
  variant?: "before" | "after";
  domain: string;
  children: ReactNode;
  className?: string;
};

export default function BrowserFrame({
  variant = "after",
  domain,
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-surface-border bg-charcoal shadow-glow-soft ${className}`}
    >
      <BrowserChrome variant={variant} domain={domain} />
      <div className="relative min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}
