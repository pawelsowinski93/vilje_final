import Button from "@/components/atoms/button";
import StarListElement from "@/components/atoms/starListElement";
import { education } from "@/utils/constants";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <section className="relative md:h-[50vh] h-[38vh] w-full overflow-hidden">
        <Image
          src="/jpg/bush.jpg"
          alt="Hero"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for darkening the image */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-[#f5f1e6] text-center px-4 z-20">
          <h1 className="md:text-7xl text-4xl font-serif font-normal italic leading-tight">
            Kilka słów o <span className="not-italic font-bold">mnie</span>
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
      {/* Sekcja bio z tekstem po lewej i zdjęciem po prawej */}
      <section className="relative bg-[#f5f1e6] md:py-12 py-8 md:pt-6 md:px-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch">
          {/* Lewa kolumna */}
          <div className="md:w-1/2 w-full flex flex-col justify-center md:pr-12 gap-3">
            <p
              className="text-4xl font-instrument-serif tracking-tightest text-gray-800"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              <em>Katarzyna Sowińska</em>
            </p>
            <p className="text-[#6f684e] mb-4 text-sm">
              Jestem magistrem psychologii (specjalność: psychologia kliniczna i osobowości), dyplomowanym psychotraumatologiem oraz psychodietetykiem. Specjalizuję się w terapii traumy i terapii psychosomatycznej, opierając swoją pracę na wiedzy z zakresu psychologii, neuropsychologii oraz nowoczesnych metod somatycznych. Jestem praktykiem metody neuro-doświadczeniowej Brainspotting. Obecnie w trakcie specjalizacji z metody Somatic Experiencing® (in spe) oraz pogłębiania wiedzy i umiejętności z zakresu psychotraumatologii praktycznej w Pomorskim Centrum Psychotraumatologii.
            </p>
            <p className="text-[#6f684e] mb-4 text-sm">
              Niezmiernie ważne jest dla mnie podejście holistyczne, skupiam się na integracji ciała, emocji i umysłu, co pozwala na zbudowanie poczucia bezpieczeństwa, równowagi psychofizycznej oraz wewnętrznej stabilności.
            </p>
            <p className="text-[#6f684e] mb-4 text-sm">
              Jestem także Trenerem Bajkoterapii, wykorzystującym metaforę i wyobraźnię jako narzędzia wspierające.
            </p>
            <p className="text-[#6f684e] text-sm">
              W pracy terapeutycznej łączę podejścia psychologiczne z metodami pracy z ciałem i układem nerwowym. Zastosowanie tego typu metod pozwala dotrzeć do źródeł traumy, lęku czy stresu, zapisanych w układzie nerwowym, często niedostępnych dla świadomości.
            </p>
          </div>
          {/* Linia pionowa na desktopie */}
          <div className="hidden md:flex w-px bg-black/20 mx-8" />
          {/* Prawa kolumna */}
          <div className="hidden md:flex md:w-1/2 w-full flex-col items-center justify-center relative mt-12 md:mt-0">
            <div className="flex items-center justify-center border rounded-[50%] border-black/45">
              <Image
                src="/jpg/kasia1.jpg"
                alt="about"
                width={350}
                height={350}
                className="rounded-[50%] object-cover  p-2"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Sekcja: During our coaching sessions, we will... */}
      <section className="relative bg-[#b3a477] md:py-12 py-14 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-14 justify-center items-center">
          <p
            className="text-4xl font-instrument-serif tracking-tightest"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            To co dla mnie <em>ważne to</em>...
          </p>
          <div className="flex flex-col md:flex-row md:gap-8 gap-12 justify-center items-stretch md:p-0 p-2">
            {/* Karta 1 */}
            <div className="relative bg-[#f5f1e6] rounded-2xl shadow-md px-8 pt-16 pb-8 flex-1 flex flex-col items-center text-center min-w-[260px] max-w-sm mx-auto">
              <Image
                src="/svg/3.svg"
                alt="Butterfly"
                width={90}
                height={90}
                className="absolute -top-10 left-1/2 -translate-x-1/2"
              />
              <div className="font-semibold text-[#56471B] mb-2">
                Autentyczność
              </div>
              <p className="text-[#6f684e] text-sm">
                To dla mnie bycie obecną w relacji – bez oceniania, bez
                udawania. Ważne dla mnie jest tworzenie przestrzeni, w której
                możesz bezpiecznie szukać, odkrywać i być.
              </p>
            </div>
            {/* Karta 2 */}
            <div className="relative bg-[#f5f1e6] rounded-2xl shadow-md px-8 pt-16 pb-8 flex-1 flex flex-col items-center text-center min-w-[260px] max-w-sm mx-auto">
              <Image
                src="/svg/4.svg"
                alt="Flower"
                width={90}
                height={90}
                className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full object-cover"
              />
              <div className="font-semibold text-[#56471B] mb-2">
                Zaangażowanie
              </div>
              <p className="text-[#6f684e] text-sm">
                Wspólnie budujemy bezpieczne miejsce, w którym możesz się
                zatrzymać. Wierzę, że zmiana zachodzi wtedy, gdy obecne są
                zaufanie, cierpliwość oraz otwartość.
              </p>
            </div>
            {/* Karta 3 */}
            <div className="relative bg-[#f5f1e6] rounded-2xl shadow-md px-8 pt-16 pb-8 flex-1 flex flex-col items-center text-center min-w-[260px] max-w-sm mx-auto">
              <Image
                src="/svg/2.svg"
                alt="Butterfly"
                width={90}
                height={90}
                className="absolute -top-10 left-1/2 -translate-x-1/2"
              />
              <div className="font-semibold text-[#56471B] mb-2">Szacunek</div>
              <p className="text-[#6f684e] text-sm">
                Każda osoba ma swoją indywidualną historię, tempo i sposób bycia
                w świecie. Wierzę, że Ty jesteś ekspertem od swojego
                doświadczenia – a ja mogę pomóc Ci stworzyć przestrzeń, w której
                to doświadczenie zostanie zauważone i usłyszane.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#f5f1e6] text-[#b3a477] z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:pt-32 pt-20 pb-20 text-center relative z-20">
          <p
            className="text-4xl font-instrument-serif tracking-tightest"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Wszystko, czego szukasz na zewnątrz, już jest w Tobie.
            <br />
            Twoje zasoby są tam, czekając aż po nie sięgniesz.
          </p>
          <div className="absolute md:bottom-0 bottom-3/5 right-[-7%] z-30 rotate-16">
            <Image src="/svg/3.svg" alt="Butterfly" width={120} height={120} />
          </div>
        </div>
      </section>
      {/* Sekcja: This is for you if... */}
      <section className="relative w-full bg-[#b3a477]">
        <div className="mx-auto flex flex-col md:flex-row min-h-[500px]">
          {/* Lewa kolumna: zdjęcie */}
          <div className="md:w-1/2 w-full h-[350px] md:h-auto">
            <div className="w-full h-full">
              <Image
                src="/jpg/forestKasia.jpg"
                alt="Nature woman"
                width={900}
                height={900}
                className="w-full h-full object-cover object-bottom max-h-[600px]"
                priority={false}
              />
            </div>
          </div>
          {/* Prawa kolumna: tekst */}
          <div className="md:w-1/2 w-full bg-[#f5f1e6] flex gap-8 flex-col justify-center md:px-18 px-6 md:py-12 py-8 text-[#8a7e56]">
            <p
              className="text-4xl font-instrument-serif tracking-tightest"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Niektóre z etapów <em>mojej edukacji</em>...
            </p>
            <div className="flex flex-col gap-3">
              {education.map((edu, index) => (
                <StarListElement
                  key={index}
                  title={edu.title}
                  label={edu.text}
                />
              ))}
            </div>
            <p className="text-sm">
              Dbając o Twoje dobro, nieustannie poszerzam swoją wiedzę, biorę
              udział w kursach oraz webinarach oraz doskonalę umiejętności
              terapeutyczne. Pracuję zgodnie z etyką zawodową i superwizuję
              swoją pracę.
            </p>
          </div>
        </div>
      </section>
      {/* Sekcja: Call to action z owalnym zdjęciem i motylem */}
      <section className="flex flex-row w-full justify-center items-center relative bg-[#b3a477] md:py-18 py-12 md:px-4 px-6 z-10">
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center md:pl-8 md:mb-0 gap-6">
          <p
            className="text-4xl font-instrument-serif tracking-tightest text-center"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Jeśli czujesz, że to może być dobre miejsce dla Ciebie{" "}
            <em>– zapraszam do kontaktu.</em>
          </p>
          <Button
            type="link"
            href="/kontakt"
            label="Umów się"
            className="w-full px-6 py-5 text-xs font-extralight tracking-tightest hover:text-[#8a7e56] text-center bg-[#E9E5DB]"
          />
        </div>
      </section>
    </div>
  );
}
