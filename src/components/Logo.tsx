import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent bg-surface-subtle font-display text-[11px] font-bold tracking-tight text-ink"
        aria-hidden
      >
        {site.monogram}
      </span>
      <span
        className="h-6 w-px shrink-0 bg-surface-border"
        aria-hidden
      />
      <span className="font-display text-sm font-semibold leading-tight sm:text-base">
        <span className="text-ink">{site.brandName} </span>
        <span className="text-accent">{site.brandSuffix}</span>
      </span>
    </span>
  );
}
