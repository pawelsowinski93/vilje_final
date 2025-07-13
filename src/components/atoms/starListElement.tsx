export default function StarListElement({
  label,
  title,
  className,
}: {
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-black rounded-full" />
        <p className="text-sm font-bold">{title}</p>
      </div>
      <p className="text-sm">{label}</p>
    </div>
  );
}
