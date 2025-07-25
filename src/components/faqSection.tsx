"use client";

import { useState } from "react";
import Image from "next/image";
import { faqs } from "@/utils/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#7b7451] py-20 px-4 relative">
      <p
        className="text-6xl font-instrument-serif tracking-tightest opacity-80 translate-y-4 max-w-6xl mx-auto relative z-50"
        style={{ fontFamily: '"Instrument Serif", serif' }}
      >
        Informacje
      </p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left side - Title and Image */}
        <div className="md:w-1/2 relative">
          <div className="relative w-full aspect-[9/16] md:h-[500px] h-[400px]">
            <Image
              src="/jpg/bridge.jpg"
              alt="Kobieta w kontemplacji"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#f5f1e6]/30">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex justify-between items-center py-4 text-left text-[#f5f1e6] hover:text-[#f5f1e6]/80 transition-colors"
                >
                  <span className="font-serif text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-[#f5f1e6]/90 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
