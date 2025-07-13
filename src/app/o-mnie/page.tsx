import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[50vh] w-full overflow-hidden">
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
            Kilka słów o <span className="not-italic font-bold">mnie</span>
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
      {/* Sekcja bio z tekstem po lewej i zdjęciem po prawej */}
      <section className="relative bg-[#f5f1e6] py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-0">
          {/* Lewa kolumna */}
          <div className="md:w-1/2 w-full flex flex-col justify-center md:pr-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2b251a] mb-4">
              Dzień dobry, z tej strony <br />
              Katarzyna Sowińska
            </h2>
            <p className="text-[#6f684e] mb-4 text-sm">
              Psycholog ze specjalnością: kliniczna i osobowości. Ukończyłam 2
              letnie studia podyplomowe z psychotraumatologii oraz
              psychodietetyki. Obecnie kształcę się w szkole psychoterapii
              skierowanej na pracę z traumą Pomorskiego Centrum
              Psychotraumatologii oraz w metodzie Somatic Experiencing, której
              twórcą jest Peter A. Levine (w trakcie szkolenia). Jestem także
              praktykiem Brainspotting.
            </p>
            <p className="text-[#6f684e] mb-4 text-sm">
              Niezmiernie ważne jest dla mnie jest podejście holistyczne.
              Kluczem do niego, jest uszanowanie i zrozumienie wzajemnych
              powiązań między ciałem, umysłem i emocjami. Zaproszenie każdej z
              tych sfer pozwala na całościową integrację w celu osiągnięcia
              równowagi i harmonii w życiu.
            </p>
            <p className="text-[#6f684e] text-sm">
              Podczas spotkań integruję różne poznane metody pracy, dostosowując
              je do indywidualnych potrzeb. Będziemy przyglądać się Twoim
              emocjom, odczuciom, myślom i doświadczeniom w atmosferze
              akceptacji, zrozumienia i szacunku.
            </p>
          </div>
          {/* Linia pionowa na desktopie */}
          <div className="hidden md:flex w-px bg-[#b3a477] mx-8" />
          {/* Prawa kolumna */}
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center relative mt-12 md:mt-0">
            {/* <div className="w-3/8 h-full bg-[#56471B] flex items-center justify-end p-12"> */}
            <div className="flex items-center justify-center border h-[510px] w-94 rounded-[50%] border-black/45">
              <Image
                src="/jpg/flower-1.jpg"
                alt="about"
                width={500}
                height={500}
                className="rounded-[50%] object-cover h-[500px] w-92 p-2"
              />
            </div>
            {/* </div> */}
            {/* Dekoracyjny napis w prawym górnym rogu */}
            <span
              className="absolute top-0 right-0 text-[#6f684e] text-xl italic select-none hidden md:block"
              style={{ transform: "rotate(8deg)", fontFamily: "cursive" }}
            >
              expertly
              <br />
              capturing your
              <br />
              story
            </span>
          </div>
        </div>
      </section>
      {/* Sekcja: During our coaching sessions, we will... */}
      <section className="relative bg-[#b3a477] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#f5f1e6] text-center mb-16">
            To co dla mnie ważne to.....
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
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
                możesz bezpiecznie szukać, odkrywać i być
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
                zatrzymać, poszukać i odnaleźć. Tobą. Wierzę, że zmiana zachodzi
                wtedy, gdy w relacji pojawia się zaufanie, cierpliwość oraz
                otwartość.
              </p>
            </div>
            {/* Karta 3 */}
            <div className="relative bg-[#f5f1e6] rounded-2xl shadow-md px-8 pt-16 pb-8 flex-1 flex flex-col items-center text-center min-w-[260px] max-w-sm mx-auto">
              <Image
                src="/svg/3.svg"
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
        <div className="max-w-5xl mx-auto px-4 pt-32 pb-20 text-center relative z-20">
          <p className="text-3xl md:text-4xl font-serif mb-0">
            Wszystko, czego szukasz na zewnątrz, już jest w Tobie.
            <br />
            Twoje zasoby są tam, czekając aż po nie sięgniesz.
          </p>
          <div className="absolute bottom-0 right-[-7%] z-30 rotate-16">
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
                src="/jpg/forest-mushroom.jpg"
                alt="Nature woman"
                width={900}
                height={600}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
          </div>
          {/* Prawa kolumna: tekst */}
          <div className="md:w-1/2 w-full bg-[#f5f1e6] flex flex-col justify-center px-18 py-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#b3a477] mb-10">
              Niektóre z etapów mojej edukacji...
            </h2>
            <ul className="space-y-6 text-[#2b251a] text-lg">
              <li className="flex items-center gap-3">
                <span className="mt-1 text-xl">✺</span>
                <span className="text-sm">
                  5-letnie studia magisterskie specjalność: psychologia
                  kliniczna i osobowości WSB-NLU
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✺</span>
                <span className="text-sm">
                  2-letnie studia podyplomowe z zakresu: psychotraumatologii,
                  psychodietetyki oraz przygotowania pedagogicznego dla
                  psychologów
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✺</span>
                <span className="text-sm">
                  Terapia ACT skoncentrowana na traumie-Russ Harris
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✺</span>
                <span className="text-sm">
                  SE-Intro-Instytut Terapii Psychosomatycznej
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✺</span>
                <span className="text-sm">Brainspotting-Faza 1</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✺</span>
                <span className="text-sm">Trener Bajkoterapii</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-xl">✺</span>
                <span className="text-sm">
                  Integracyjna psychoterapia C-PTSD i zaburzeń dysocjacyjnych-
                  Kathy Steele
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✺</span>
                <span className="text-sm">
                  Obecnie kształcę się w szkole psychoterapii skierowanej na
                  pracę z traumą organizowanego przez Pomorskie Centrum
                  Psychotraumatologii w nurcie
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✺</span>
                <span className="text-sm">
                  psychoanalitycznym (2024-obecnie) oraz w 3-letnim kursie
                  metody Somatic Experiencing (2025-obecnie)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Sekcja: Call to action z owalnym zdjęciem i motylem */}
      <section className="relative bg-[#b3a477] py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Lewa kolumna: tekst */}
          <div className="md:w-1/2 w-full flex flex-col items-start justify-center md:pl-8 mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-serif text-[#f5f1e6] mb-8">
              Jeśli czujesz, że to może być dobre miejsce dla Ciebie{" "}
              <span className="italic font-normal">
                – zapraszam do kontaktu.
              </span>
            </h2>
            <button className="mt-4 bg-[#f5f1e6] text-[#b3a477] px-12 py-4 rounded-none tracking-wide text-base font-medium shadow-none border border-[#f5f1e6] hover:bg-[#ede8d9] transition">
              UMÓW SIĘ
            </button>
          </div>
          {/* Prawa kolumna: owalne zdjęcie z motylem */}
          <div className="md:w-1/2 w-full flex items-center justify-center relative">
            <div className="relative w-[340px] h-[440px] md:w-[400px] md:h-[520px]">
              <Image
                src="/jpg/forest-mushroom.jpg"
                alt="Portrait"
                fill
                className="object-cover rounded-[48%/50%] grayscale"
                style={{ borderRadius: "48% / 50%" }}
              />
              {/* Motyl */}
              <div className="absolute -bottom-0 left-2 z-10 -rotate-16">
                <Image
                  src="/svg/3.svg"
                  alt="Butterfly"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
