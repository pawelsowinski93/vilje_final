import Link from "next/link";

export default function Button({
  label,
  handleClick,
  type = "button",
  href,
}: {
  label: string;
  type?: "link" | "button";
  handleClick?: () => void;
  href?: string;
}) {
  return (
    <>
      {type === "link" ? (
        <Link
          href={href || "/"}
          className="bg-[#D2CBB6] text-[#56471B] font-semibold text-sm px-8 py-3 cursor-pointer hover:bg-[#56471B] hover:text-white transition-colors tracking-widest"
        >
          {label.toUpperCase()}
        </Link>
      ) : (
        <button
          className="bg-[#D2CBB6] text-[#56471B] font-semibold text-sm px-8 py-3 cursor-pointer hover:bg-[#56471B] hover:text-white transition-colors tracking-widest"
          onClick={handleClick}
        >
          {label.toUpperCase()}
        </button>
      )}
    </>
  );
}
