import Link from "next/link";

export default function Button({
  label,
  handleClick,
  type = "button",
  href,
  className,
}: {
  label: string;
  type?: "link" | "button";
  handleClick?: () => void;
  href?: string;
  className?: string;
}) {
  return (
    <>
      {type === "link" ? (
        <Link
          href={href || "/"}
          className={`bg-[#D2CBB6] text-[#56471B] font-semibold text-sm px-8 py-3 cursor-pointer hover:bg-[#56471B] hover:text-white transition-colors tracking-widest ${className}`}
        >
          {label.toUpperCase()}
        </Link>
      ) : (
        <button
          className={`bg-[#D2CBB6] text-[#56471B] font-semibold text-sm px-8 py-3 cursor-pointer hover:bg-[#56471B] hover:text-white transition-colors tracking-widest ${className}`}
          onClick={handleClick}
        >
          {label.toUpperCase()}
        </button>
      )}
    </>
  );
}
