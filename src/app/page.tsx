import Button from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import Section from "@/components/atoms/section";
import StarListElement from "@/components/atoms/starListElement";
import HeroVideo from "@/components/heroVideo";
import { meetingSteps, symptoms } from "@/utils/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroVideo />
      <Section className="bg-[#E9E5DB]">
        <div className="flex items-center justify-between w-full gap-6">
          <div className="flex flex-col w-full justify-between items-center gap-4">
            <div className="text-2xl font-bold">JEŚLI ZAUWAŻASZ U SIEBIE</div>
            <div>
              {symptoms.map((symptom, index) => (
                <StarListElement
                  key={index}
                  title={symptom.title}
                  label={symptom.text}
                />
              ))}
            </div>
            <Button type="link" label="JAK MOGE CI POMÓC?" href="/contact" />
          </div>
          <div className="flex w-full justify-center items-center ">
            <Image
              src="/jpg/flower-1.jpg"
              alt="about"
              width={500}
              height={500}
              className="rounded-[50%] object-cover h-[500px] w-92 p-2"
            />
          </div>
        </div>
      </Section>
      <section className="bg-[#E9E5DB] text-black flex items-center justify-between w-full h-[640px]">
        <div className="w-3/8 h-full bg-[#56471B] flex items-center justify-end p-12">
          <div className="flex items-center justify-center border h-[510px] w-94 rounded-[50%] border-amber-50/45">
            <Image
              src="/jpg/flower-1.jpg"
              alt="about"
              width={500}
              height={500}
              className="rounded-[50%] object-cover h-[500px] w-92 p-2"
            />
          </div>
        </div>
        <div className="bg-[#D2CBB6] w-5/8 h-full flex flex-col gap-4 justify-center items-start p-12 grain">
          <div>NA CZYM SKUPIAMY SIĘ PODCZAS SPOTKAŃ</div>
          <div>
            {meetingSteps.map((step, index) => (
              <StarListElement
                key={index}
                title={step.title}
                label={step.text}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[url('/jpg/forest-mushroom.jpg')] bg-cover bg-center bg-no-repeat w-full h-[640px]">
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          <div>
            <Image
              src="/svg/3.svg"
              alt="about"
              width={250}
              height={250}
              className=""
            />
          </div>
          <div className="text-white text-4xl font-bold">
            Porozmawiajmy o tym, co dla Ciebie ważne.
          </div>
          <div>
            <Button type="link" label="KONTAKT" href="/contact" />
          </div>
        </div>
      </section>
      <Section className="bg-[#D2CBB6]">
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <div>Zapraszam Cię do mojego newslettera</div>
          <div className="flex flex-row gap-4 w-full justify-center items-center">
            <Input type="text" placeholder="imię" value="" />
            <Input type="text" placeholder="adres email" value="" />
            <Button type="button" label="Wyślij" />
          </div>
        </div>
      </Section>
    </div>
  );
}
