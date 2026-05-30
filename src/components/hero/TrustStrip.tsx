import { Clock, Search, Smartphone, Star } from "lucide-react";

const items = [
  { icon: Clock, label: "2–3 week turnaround" },
  { icon: Smartphone, label: "Mobile-first by default" },
  { icon: Search, label: "SEO-ready from day one" },
  { icon: Star, label: "Local business specialists" },
];

export default function TrustStrip() {
  return (
    <div className="mx-auto mt-10 w-full max-w-[1040px] border-t border-surface-border pt-8">
      <ul className="grid grid-cols-2 justify-items-center gap-5 md:flex md:justify-center md:gap-10">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2">
            <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            <span className="text-xs text-ink-muted md:text-[13px]">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
