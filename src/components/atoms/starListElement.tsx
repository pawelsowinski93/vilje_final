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
      <div className="flex items-start gap-3">
        <div className="mt-[1px] text-2xl font-medium leading-5">✺</div>
        <p className="text-sm">{title}</p>
        <p className="text-sm">{label}</p>
      </div>
    </div>
  );
}
