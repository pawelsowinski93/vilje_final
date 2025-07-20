import BlogSection from "@/components/blogSection";
import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <section className="relative h-[25vh] w-full overflow-hidden">
        <Image
          src="/jpg/forest-mushroom.jpg"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for darkening the image */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-[#f5f1e6] text-center px-4 z-20">
          <h1 className="text-5xl md:text-7xl font-serif font-normal italic leading-tight">
            Blog <span className="not-italic font-bold">blog</span>
          </h1>
        </div>
        {/* Łuk wypukły nachodzący na zdjęcie */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
              fill="#f5f1e6"
            />
          </svg>
        </div>
      </section>
      <BlogSection />
    </div>
  );
}
