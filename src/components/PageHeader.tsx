type PageHeaderProps = {
  kicker?: string;
  title: string;
  description?: string;
};

export default function PageHeader({
  kicker,
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="section-padding border-b border-surface-border bg-surface pb-12 sm:pb-16">
      <div className="container-content max-w-3xl">
        {kicker && <p className="label-kicker">{kicker}</p>}
        <h1 className={`heading-display ${kicker ? "mt-4" : ""}`}>{title}</h1>
        {description && <p className="text-body mt-6">{description}</p>}
      </div>
    </header>
  );
}
