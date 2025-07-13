export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`w-full flex items-center justify-center text-[#56471B] py-16 ${className}`}
    >
      <div className="max-w-[1480px] w-full px-4">{children}</div>
    </section>
  );
}
