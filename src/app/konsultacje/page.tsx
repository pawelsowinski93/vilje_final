import Section from "@/components/atoms/section";
import ParallaxSection from "@/components/parallaxSection";
import FAQSection from "@/components/faqSection";
import { expectations } from "@/utils/constants";
import Image from "next/image";

export default function Konsultacje() {
  return (
    <div>
      <section className="relative md:h-[50vh] h-[38vh] w-full overflow-hidden">
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
          <h1 className="md:text-7xl text-4xl font-serif font-normal italic leading-tight">
            Konsultacje online
          </h1>
        </div>
        {/* Łuk wypukły nachodzący na zdjęcie */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] md:h-[120px] h-[50px]"
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
      {/* How this Works section */}
      <section className="w-full bg-[#f5f1e6] py-20 px-2 flex flex-col items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          {/* Step 1 */}
          <div className="rounded-2xl border border-[#d6cdb2] p-8 flex flex-col items-center bg-[#f5f1e6] relative md:mb-10">
            <div className="bg-[#f5f1e6] absolute -top-9 p-2 -right-13 -translate-x-1/2 text-[72px] text-[#bdb085] font-serif font-light select-none leading-[4rem]">
              01
            </div>
            <h3 className="text-2xl font-serif text-[#bdb085] mb-4 mt-4">
              Darmowa konsultacja
            </h3>
            <h3 className="text-xl font-serif text-[#bdb085] mb-4">
              10-15 minut
            </h3>
            <p className="text-[#a89c6d] text-center">
              Porozmawiamy o Twoich potrzebach i sprawdzimy, czy to, co oferuję,
              będzie dla Ciebie pomocne. Zapraszam, jeśli od dawna zastanawiasz
              się nad terapią, i nie wiesz czy taka forma będzie odpowiednia dla
              Ciebie.
            </p>
          </div>
          {/* Step 2 */}
          <div className="rounded-2xl border border-[#d6cdb2] p-8 flex flex-col items-center bg-[#f5f1e6] relative md:mt-10">
            <div className="bg-[#f5f1e6] absolute -top-9 p-2 -right-14 -translate-x-1/2 text-[72px] text-[#bdb085] font-serif font-light select-none leading-[4rem]">
              02
            </div>
            <h3 className="text-2xl font-serif text-[#bdb085] mb-4 mt-4">
              Konsultacja psychologiczna / psychotraumatologiczna
            </h3>
            <h3 className="text-xl font-serif text-[#bdb085] mb-4">
              50 minut-230 zł
            </h3>
            <p className="text-[#a89c6d] text-center">
              Pierwsze 1–3 spotkania służą poznaniu się i omówieniu Twoich
              potrzeb oraz możliwości współpracy.
            </p>
          </div>
          {/* Step 3 */}
          <div className="rounded-2xl border border-[#d6cdb2] p-8 flex flex-col items-center bg-[#f5f1e6] relative md:mb-10">
            <div className="bg-[#f5f1e6] absolute -top-9 p-2 -right-15 -translate-x-1/2 text-[72px] text-[#bdb085] font-serif font-light select-none leading-[4rem]">
              03
            </div>
            <h3 className="text-2xl font-serif text-[#bdb085] mb-4 mt-4">
              Sesja indywidualna
            </h3>
            <h3 className="text-xl font-serif text-[#bdb085] mb-4">
              50 minut-230 zł
            </h3>
            <p className="text-[#a89c6d] text-center">
              W bezpiecznej i wspierającej przestrzeni masz okazję lepiej
              poznawać siebie – swoje ciało, emocje i potrzeby. Uczysz się
              zatrzymywać i przyglądać się swoim doświadczeniom.
            </p>
          </div>
        </div>
      </section>

      <ParallaxSection
        title="Ciało, które czuje się bezpiecznie, zaczyna opowiadać swoją historię."
        button={{ title: "UMÓW SIĘ", href: "/kontakt" }}
      />
      <Section className="bg-[#D2CBB6]">
        <div className="w-full flex flex-col justify-center md:pr-12 gap-18 items-center md:p-0 p-4">
          <p
            className="text-4xl font-instrument-serif tracking-tightest text-gray-800"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Czego możesz się spodziewać
          </p>
          <div className="flex flex-col md:flex-row text-gray-800">
            <div className="flex flex-col gap-18 md:border-r border-r-0 md:border-l-0 border-l border-[#8a7e56 md:pb-8 md:pt-18">
              {expectations.left.map((expectation, index) => (
                <div
                  key={index}
                  className="w-full flex md:flex-row flex-row-reverse gap-4 items-center justify-center"
                >
                  <div className="md:flex hidden h-full justify-start items-start md:order-0 order-2">
                    {`0${index === 0 ? 1 : index + 2}`}
                  </div>
                  <div className="md:hidden h-full flex justify-start items-start md:order-0 order-2">
                    {`0${index + 1}`}
                  </div>
                  <div className="w-full flex flex-col gap-2 justify-center items-start md:order-0 order-1">
                    <p className="font-serif text-gray-800 md:order-0 order-1">
                      {expectation.title}
                    </p>
                    <p className="text-gray-800 text-sm text-left max-w-sm md:order-0 order-1">
                      {expectation.description}
                    </p>
                  </div>
                  <div className="md:h-[2px] h-[1px] md:w-10 w-6 bg-[#8a7e56] md:order-0 order-3" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-18 border-l border-[#8a7e56] md:pt-28 pt-18 md:pb-18">
              {expectations.right.map((expectation, index) => (
                <div
                  key={index}
                  className="w-full flex flex-row-reverse gap-4 items-center justify-center"
                >
                  <div className="md:flex hidden h-full justify-start items-start order-2">
                    {`0${index === 0 ? 2 : index + 3}`}
                  </div>
                  <div className="md:hidden h-full flex justify-start items-start order-2">
                    {`0${index + 3}`}
                  </div>
                  <div className="w-full flex flex-col gap-2 justify-center items-start order-1">
                    <p className="font-serif text-gray-800">
                      {expectation.title}
                    </p>
                    <p className="text-gray-800 text-sm text-left max-w-sm order-1">
                      {expectation.description}
                    </p>
                  </div>
                  <div className="md:h-[2px] h-[1px] md:w-10 w-6 bg-[#8a7e56] order-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FAQSection />
    </div>
  );
}
