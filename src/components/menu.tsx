"use client";
import Image from "next/image";
import Button from "./atoms/button";
import MenuLink from "./atoms/menuLink";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-center items-center bg-[#E9E5DB] relative z-20">
        <div className="text-[#56471B] p-4 max-w-[1480px] w-full flex justify-between items-center text-bold text-sm">
          <h1 className="my-0 md:my-2">
            <MenuLink href="/" className="cursor-pointer">
              <Image src="/logo.webp" alt="Vilje" width={35} height={35} />
            </MenuLink>
          </h1>

          <ul className="hidden md:flex gap-6 items-center justify-center">
            {[
              { href: "/o-mnie", label: "O MNIE" },
              { href: "/konsultacje", label: "KONSULTACJE" },
              { href: "/jak-pomagam", label: "JAK POMAGAM" },
              { href: "/blog", label: "BLOG" },
            ].map((item) => (
              <li key={item.href}>
                <MenuLink
                  href={item.href}
                  className="hover:text-[#C5BDA3] font-semibold transition-colors tracking-widest cursor-pointer"
                >
                  {item.label}
                </MenuLink>
              </li>
            ))}
            <li>
              <Button type="link" label="KONTAKT" href="/kontakt" />
            </li>
          </ul>
          <div className="md:hidden">
            <button
              type="button"
              className="text-marshland pt-2 cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full pt-26 bg-[#E9E5DB] text-[#56471B] z-10">
          <ul className="flex flex-col gap-2 px-4">
            {[
              { href: "/o-mnie", label: "O MNIE" },
              { href: "/konsultacje", label: "KONSULTACJE" },
              { href: "/jak-pomagam", label: "JAK POMAGAM" },
              { href: "/blog", label: "BLOG" },
            ].map((item) => (
              <li key={item.href}>
                <MenuLink
                  href={item.href}
                  className="block px-3 py-2 text-marshland hover:text-foreground font-medium cursor-pointer text-sm"
                >
                  {item.label}
                </MenuLink>
              </li>
            ))}
            <div className="h-px w-full bg-[#56471B] opacity-10" />
            <MenuLink
              href="/kontakt"
              className="block px-3 py-2 text-marshland hover:text-foreground text-base font-medium cursor-pointer"
            >
              KONTAKT
            </MenuLink>
          </ul>
        </div>
      )}
    </>
  );
}
