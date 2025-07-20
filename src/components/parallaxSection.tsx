"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/atoms/button";

export default function ParallaxSection({
  title,
  button,
}: {
  title: string;
  button?: { title: string; href: string };
}) {
  const parallaxRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrolled = window.pageYOffset;
          const rateY = scrolled * -0.1; // Delikatny ruch w pionie
          const rateX = scrolled * -0.05; // Delikatny ruch w poziomie

          setScrollY(rateY);
          setScrollX(rateX);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="relative overflow-hidden w-full h-[600px]"
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/jpg/forest-mushroom.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `translate(${scrollX}px, ${scrollY}px) scale(1.5)`,
          minHeight: "180%",
          minWidth: "150%",
          top: "-25%",
          left: "-25%",
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-18 py-32">
        <div className="relative w-full h-full">
          <Image
            src="/svg/3.svg"
            alt="about"
            width={180}
            height={180}
            className="rotate-12 absolute md:-top-10 -top-20 left-1/2 -translate-x-1/2 z-20"
          />
        </div>
        <p
          className="text-[#EFEADD] text-5xl font-medium tracking-tightest px-6 text-center"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          {title}
        </p>
        {button && (
          <div>
            <Button
              type="link"
              label={button.title}
              href={button.href}
              className="px-18 py-5 text-xs font-extralight tracking-tightest hover:text-[#8a7e56] md:w-auto w-full text-center bg-[#EFEADD]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
