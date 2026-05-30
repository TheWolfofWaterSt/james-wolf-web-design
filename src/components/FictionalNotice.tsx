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
      className={`rounded-lg border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm text-amber-950 ${className}`}
      role="note"
    >
      <strong className="font-medium">Portfolio note:</strong> {message}
    </aside>
  );
}
