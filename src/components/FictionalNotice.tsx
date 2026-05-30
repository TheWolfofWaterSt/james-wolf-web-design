const defaultMessage =
  "This is a fictional concept redesign created for portfolio purposes. All business names and content are placeholders.";

export default function FictionalNotice({
  className = "",
  message = defaultMessage,
}: {
  className?: string;
  message?: string;
}) {
  return (
    <aside
      className={`rounded-lg border border-surface-border border-l-4 border-l-accent bg-surface px-4 py-3 text-sm text-ink-muted ${className}`}
      role="note"
    >
      <strong className="font-medium text-ink">Portfolio note:</strong> {message}
    </aside>
  );
}
