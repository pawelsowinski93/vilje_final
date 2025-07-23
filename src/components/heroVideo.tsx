"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-screen bg-gray-400 flex flex-col items-end justify-center relative">
      <div
        ref={containerRef}
        className="w-full h-[70vh] overflow-hidden flex items-center justify-center"
      >
        {isVisible && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/video/las-2-poster-720p.jpg"
            className="absolute w-full h-full object-cover filter contrast-100"
          >
            {/* Desktop - 720p */}
            <source
              src="/video/las-2-720p.mp4"
              type="video/mp4"
              media="(min-width: 768px)"
            />
            {/* Mobile - 480p */}
            <source
              src="/video/las-2-480p.mp4"
              type="video/mp4"
              media="(max-width: 767px)"
            />
            {/* Fallback */}
            <source src="/video/las-2-720p.mp4" type="video/mp4" />
          </video>
        )}
        {/* Placeholder when video is not loaded - responsive poster */}
        {!isVisible && (
          <>
            {/* Desktop poster */}
            <div
              className="absolute w-full h-full bg-cover bg-center hidden md:block"
              style={{ backgroundImage: "url(/video/las-2-poster-720p.jpg)" }}
            />
            {/* Mobile poster */}
            <div
              className="absolute w-full h-full bg-cover bg-center md:hidden"
              style={{ backgroundImage: "url(/video/las-2-poster-480p.jpg)" }}
            />
          </>
        )}
        {/* <div className="absolute bottom-[-1px] left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent grain" /> */}
      </div>
      <p className="text-white z-10 transform -translate-y-2 mr-6 font-the-impressionist md:text-3xl text-xl leading-0 font-normal">
        Psycholog & psychotraumatolog
      </p>
      <div className="bg-[#56471B] w-full h-8 z-1 grain" />
    </section>
  );
}
