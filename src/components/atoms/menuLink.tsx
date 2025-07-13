import Link from "next/link";

export default function MenuLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <Link
      href={href}
      className={`hover:text-[#C5BDA3] font-semibold transition-colors tracking-widest cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
}
