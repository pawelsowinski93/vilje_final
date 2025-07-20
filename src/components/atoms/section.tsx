export default function Section({
  children,
  className,
  childrenClassName,
}: {
  children: React.ReactNode;
  className?: string;
  childrenClassName?: string;
}) {
  return (
    <section
      className={`bg-[#EFEADD] w-full flex items-center justify-center text-[#56471B] py-16 ${className}`}
    >
      <div
        className={`bg-[#EFEADD] max-w-[1480px] w-full px-4 ${childrenClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
