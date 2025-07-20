import Button from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import Section from "@/components/atoms/section";
import StarListElement from "@/components/atoms/starListElement";
import HeroVideo from "@/components/heroVideo";
import ParallaxSection from "@/components/parallaxSection";
import { meetingSteps, symptoms } from "@/utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroVideo />
      <Section className="bg-[#E9E5DB]" childrenClassName="max-w-[1000px]!">
        <div className="flex md:flex-row flex-col items-center justify-between w-full gap-6">
          <div className="flex md:p-0 p-6 pt-0 flex-col w-full justify-between gap-8 items-start text-[#8a7e56]">
            <p
              className="text-4xl font-instrument-serif tracking-tightest"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              JEŚLI ZAUWAŻASZ <em>U SIEBIE</em>...
            </p>
            <div className="flex flex-col gap-4">
              {symptoms.map((symptom, index) => (
                <StarListElement
                  key={index}
                  title={symptom.title}
                  label={symptom.text}
                />
              ))}
            </div>
            <Button
              type="link"
              label="JAK MOGĘ CI POMÓC"
              href="/contact"
              className="px-6 py-5 text-xs font-extralight tracking-tightest bg-transparent border border-[#8a7e56] hover:text-[#8a7e56] md:w-auto w-full text-center"
            />
          </div>
          <div className="hidden md:flex w-full justify-center items-center ">
            <div className="flex items-center justify-center border rounded-[50%] border-black/45">
              <Image
                src="/jpg/beach.jpg"
                alt="about"
                width={400}
                height={400}
                className="rounded-[50%] object-cover max-w-[300px]  p-2"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section
        className="bg-[#FCFAF2] "
        childrenClassName="max-w-[1480px]! bg-[#FCFAF2]"
      >
        <div className="flex md:flex-row-reverse flex-col items-center justify-between w-full gap-6">
          <div className="flex md:p-0 p-6 pt-0 flex-col w-full justify-between md:gap-6 gap-8 items-start text-[#8a7e56]">
            <p
              className="text-4xl font-instrument-serif tracking-tightest"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              NA CZYM SKUPIAMY SIĘ PODCZAS SPOTKAŃ
            </p>
            <div className="flex flex-col gap-3">
              {meetingSteps.map((symptom, index) => (
                <StarListElement
                  key={index}
                  title={symptom.title}
                  label={symptom.text}
                />
              ))}
            </div>
          </div>
          <div className="flex w-full justify-center items-center ">
            <div className="flex md:w-1/2 w-full flex-col items-center justify-center relative mt-12 md:mt-0">
              <div className="flex items-center justify-center border rounded-[50%] border-black/45">
                <Image
                  src="/jpg/ladna-fota.jpg"
                  alt="about"
                  width={400}
                  height={400}
                  className="rounded-[50%] object-cover  p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <ParallaxSection
        title="W kontakcie ze sobą – możesz działać z miejsca wolności, a nie lęku."
        button={{ title: "UMÓW SIĘ", href: "/kontakt" }}
      />
      <Section className="bg-[#D2CBB6]">
        <div className="w-full flex flex-col md:gap-8 gap-6 justify-center items-center">
          <p
            className="text-[#8a7e56] text-5xl font-medium tracking-tightest md:px-6 px-2 text-center"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Zapraszam Cię do mojego newslettera
          </p>
          <p className="text-[#8a7e56] text-sm font-medium tracking-tightest md:px-18 px-4 text-center">
            Zapisując się, wyrażasz zgodę na przetwarzanie danych osobowych
            przez Vilje Katarzyna Sowińska, w celu wysyłki materiałów
            marketingowych na swój adres e-mail
          </p>
          <div className="flex md:flex-row flex-col gap-4 w-full justify-center items-center max-w-[1170px] md:px-18 px-4">
            <Input type="text" placeholder="imię" value="" />
            <Input type="text" placeholder="adres email" value="" />
            <Button
              type="button"
              label="Zapisz się"
              className="w-full px-6 py-5 text-xs font-extralight tracking-tightest bg-transparent border border-[#8a7e56] hover:text-[#8a7e56] text-center"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
