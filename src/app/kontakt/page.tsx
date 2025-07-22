"use client";

import Image from "next/image";
import ContactForm from "@/components/client/ContactForm";
import Button from "@/components/atoms/button";
import { useRef } from "react";
import Link from "next/link";

export default function Kontakt() {
  const formRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="h-[calc(100vh-106px)] relative">
        <Image
          src="/jpg/forestRoad.jpg"
          alt="Contact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-[#f5f1e6] text-center px-4 z-20" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-[#f5f1e6] text-center z-20 gap-6">
          <h1 className="md:text-7xl text-4xl font-serif font-normal italic leading-tight">
            Aby umówić się na spotkanie wypełnij
          </h1>
          <Button
            label="FORMULARZ KONTAKTOWY"
            handleClick={handleScroll}
            className="py-5! bg-transparent text-white border-white border-2 hover:bg-[#D2CBB6] hover:text-black! hover:border-[#D2CBB6]"
          />
        </div>
      </section>
      <section
        ref={formRef}
        className="relative bg-[#f5f1e6] flex justify-center items-center md:p-32 p-0 overflow-hidden"
      >
        <Image
          src="/jpg/marmur.webp"
          alt="Marmur background"
          fill
          className="object-cover opacity-10 dark:opacity-30"
        />
        <div className="bg-[#E9E5DB]/90 w-full max-w-7xl flex flex-col md:p-20 p-6 gap-6 relative z-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
