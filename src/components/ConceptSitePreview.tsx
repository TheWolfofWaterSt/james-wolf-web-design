type ConceptTheme = "hvac" | "plumbing";

const themes: Record<
  ConceptTheme,
  {
    page: string;
    nav: string;
    headline: string;
    subline: string;
    cta: string;
    card: string;
  }
> = {
  hvac: {
    page: "bg-gradient-to-br from-stone-100 via-amber-50/80 to-orange-100/60",
    nav: "border-stone-200/80 bg-white/90",
    headline: "bg-stone-700/70",
    subline: "bg-stone-500/40",
    cta: "bg-amber-600/90",
    card: "bg-white/80 border-stone-200/60",
  },
  plumbing: {
    page: "bg-gradient-to-br from-slate-100 via-sky-50/80 to-blue-100/50",
    nav: "border-sky-200/60 bg-white/90",
    headline: "bg-slate-700/70",
    subline: "bg-slate-500/40",
    cta: "bg-sky-600/90",
    card: "bg-white/80 border-sky-200/60",
  },
};

type ConceptSitePreviewProps = {
  theme: ConceptTheme;
  className?: string;
};

export default function ConceptSitePreview({
  theme,
  className = "",
}: ConceptSitePreviewProps) {
  const colors = themes[theme];

  return (
    <div className={`flex h-full min-h-[160px] flex-col ${colors.page} ${className}`}>
      <div
        className={`flex items-center justify-between border-b px-3 py-2 ${colors.nav}`}
      >
        <div className="h-2 w-10 rounded-sm bg-stone-400/50" aria-hidden />
        <div className="flex gap-1.5" aria-hidden>
          <div className="h-1.5 w-5 rounded-full bg-stone-300/70" />
          <div className="h-1.5 w-5 rounded-full bg-stone-300/70" />
          <div className="h-1.5 w-5 rounded-full bg-stone-300/70" />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center px-4 py-4">
        <div
          className={`h-2.5 w-[78%] rounded-sm ${colors.headline}`}
          aria-hidden
        />
        <div
          className={`mt-2 h-2 w-[52%] rounded-sm ${colors.subline}`}
          aria-hidden
        />
        <div
          className={`mt-3.5 h-4 w-14 rounded-md ${colors.cta}`}
          aria-hidden
        />
      </div>

      <div className="grid grid-cols-3 gap-1.5 px-3 pb-3" aria-hidden>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`rounded-md border p-2 ${colors.card}`}
          >
            <div className="h-1.5 w-full rounded-sm bg-stone-300/60" />
            <div className="mt-1.5 h-1 w-[66%] rounded-sm bg-stone-200/80" />
          </div>
        ))}
      </div>
    </div>
  );
}
