import Image from "next/image";

export default function JakPomagam() {
  return (
    <div>
      {/* Sekcja 1: Weddings */}
      <section className="md:hidden relative md:h-[50vh] h-[38vh] w-full overflow-hidden">
        <Image
          src="/jpg/ladyByTheLake.jpeg"
          alt="Hero"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Overlay for darkening the image */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-[#f5f1e6] text-center px-4 z-20">
          <h1 className="md:text-7xl text-4xl font-serif font-normal italic leading-tight">
            Jak <span className="not-italic font-bold">pomagam</span>
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
      <section className="flex w-full flex-col md:flex-row bg-[#f5f1e6] relative min-h-[600px]">
        {/* Duże zdjęcie po lewej */}
        <div className="hidden md:flex md:w-2/5 w-full min-h-[500px] relative">
          <Image
            src="/jpg/ladyByTheLake.jpeg"
            alt="Panna młoda"
            width={500}
            height={500}
            className="w-full h-full xl:px-12 px-6 pt-12 object-cover object-center"
            priority
          />
        </div>
        {/* Treść po prawej */}
        <div className="md:w-3/5 text-[#333] w-full flex flex-col justify-center md:pr-18 pr-8 py-12 md:py-0 md:pl-16 pl-8 relative z-10 gap-4">
          <p
            className="text-4xl font-instrument-serif tracking-tightest text-gray-800"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Praca z ciałem
          </p>
          <p className="text-[#6f684e] mb-4 text-sm">
            W terapii zwracamy uwagę na to, co dzieje się w ciele – bo to
            właśnie ono często pierwsze reaguje na trudne sytuacje. Napięcie,
            bezsenność, lęk czy odrętwienie – to sygnały, że nasz układ nerwowy
            potrzebuje wsparcia. To reakcje naszego układu nerwowego, który
            próbuje nas chronić. W bezpiecznej przestrzeni możesz nauczyć się
            rozpoznawać te reakcje i regulować je – bez presji, w swoim tempie.
            To podejście polega na lepszym zrozumieniu siebie i tego, jak ciało
            i emocje się ze sobą łączą.
          </p>
          <p className="text-[#6f684e] mb-4 text-sm">
            Zamiast walczyć z występującymi objawami – przyglądamy się temu, co
            próbują nam powiedzieć. W ten sposób powoli odzyskujemy wpływ na to,
            jak reagujemy w stresujących sytuacjach. Nasze reakcje – nawet te,
            które wydają się niezrozumiałe – mają sens. Możemy wspólnie
            zrozumieć, skąd się biorą i jak sobie z nimi radzić. Ciało i umysł
            zaczynają ze sobą współpracować, a my zyskujemy więcej wewnętrznego
            spokoju i siły.
          </p>
        </div>
        {/* Małe zdjęcie w rogu */}
        <div className="hidden md:block absolute -bottom-22 left-0 w-[200px] h-[120px] z-20 shadow-lg">
          <Image
            src="/jpg/bush.jpg"
            alt="Para młoda"
            fill
            className="object-cover object-center grayscale"
          />
        </div>
      </section>
      {/* Sekcja 2: Elopments */}
      <section className="w-full text-[#333] flex flex-col md:flex-row bg-[#d2cbb6] md:min-h-[600px]">
        {/* Treść po lewej */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-8 py-12 md:py-0 md:pr-16 gap-4">
          <p
            className="text-4xl font-instrument-serif tracking-tightest text-gray-800"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Praca z myślami i schematami
          </p>
          <p className=" mb-4 text-sm">
            Nasze myśli mają duży wpływ na to, jak się czujemy i jak reagujemy –
            nawet jeśli na co dzień tego nie zauważamy. W głowie toczy się cichy
            dialog, który podcina skrzydła albo budzi niepokój. Uczymy się
            zauważać te myśli – nie po to, by je oceniać, ale by je lepiej
            zrozumieć, spojrzeć na nie z innej perspektywy.
          </p>
          <p className=" mb-4 text-sm">
            Wszyscy nosimy w sobie przekonania o sobie i świecie – niektóre
            wspierające, inne raniące. Czasem powtarzamy w myślach, że „nie
            wystarczamy”, że „musimy być silni”, że „inni są ważniejsi”. Te
            zdania często mają swoje korzenie w przeszłości, ale wciąż wpływają
            na to, jak dziś przeżywamy siebie i relacje. Przyglądamy się im tym
            wzorcom– z uważnością i troską.
          </p>
        </div>
        {/* Duże zdjęcie po prawej */}
        <div className="hidden md:flex md:w-1/2 w-full min-h-[400px] relative">
          <Image
            src="/jpg/squirrel.jpg"
            alt="Elopment couple"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>
      {/* Sekcja 3: Couples */}
      <section className="w-full flex flex-col md:flex-row bg-[#7b7451] min-h-[600px] text-white relative py-12">
        {/* Lewa część: zdjęcia i napis */}
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center relative">
          {/* Duże zdjęcie w ramce */}
          <div className="border-8 border-[#e5e0d3] md:p-1 p-0 bg-[#e5e0d3] relative z-10 md:mt-0 mt-0">
            <Image
              src="/jpg/water.jpg"
              alt="Para"
              width={320}
              height={400}
              className="object-cover object-center"
            />
          </div>
          {/* Małe zdjęcie pod spodem */}
          <div className="absolute left-8 -bottom-0 w-[260px] h-[220px] z-0 hidden md:block">
            <Image
              src="/jpg/flowers.jpg"
              alt="Para w plenerze"
              fill
              className="object-cover object-center rounded"
            />
          </div>
        </div>
        {/* Prawa część: tekst */}
        <div className="md:w-3/5 w-full flex flex-col justify-center px-8 py-8 md:py-0 md:pl-16 gap-4">
          <p
            className="text-4xl font-instrument-serif tracking-tightest"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Brainspotting
          </p>
          <p className=" mb-4 text-sm">
            Brainspotting to metoda, która pozwala dotrzeć do trudnych
            doświadczeń zapisanych w ciele i układzie nerwowym. Jest to
            innowacyjna metoda terapii traumy, która koncentruje się na
            neuro-doświadczaniu poprzez skupioną uważność.
          </p>
          <p className=" mb-4 text-sm">
            W bezpiecznej i wspierającej atmosferze uruchamiają się naturalne
            zdolności mózgu do porządkowania, przetwarzania i regeneracji. Kiedy
            aktywujemy tzw. „brainspot” – punkt związany z daną siecią
            neuronalną – może rozpocząć się proces uwalniania napięć i
            przywracania równowagi w ciele i psychice. Brainspotting umożliwia
            wykorzystanie wrodzonej zdolność mózgu do neuroplastyczności. Pomaga
            nie tylko przepracować konkretne doświadczenie, ale także umożliwia
            przywrócenie poczucia równowagi – zarówno w ciele, jak i w psychice.
          </p>
        </div>
      </section>
      {/* Sekcja 4: Couples Gallery */}
      <section className="w-full bg-[#7b7451] text-white py-16 md:px-2 px-8 relative border-t border-white/20">
        <div className="mx-auto flex flex-col items-center md:gap-8 gap-6">
          <p
            className="text-4xl font-instrument-serif tracking-tightest"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            Jak wygląda sesja brainspotting
          </p>
          <p className="max-w-5xl mb-4 text-sm">
            Podczas sesji terapeuta pomaga odnaleźć odpowiednią pozycję oczu
            tzw.brainspot, czyli konkretny punkt w przestrzeni, na którym
            zatrzymujemy wzrok. Pozwala on dotrzeć do źródeł traumy
            przechowywanej w podkorowych strukturach mózgu. Czasem korzystamy ze
            wskaźnika lub muzyki bilateralnej, ale nie jest to konieczne.
            Wspólnie szukamy punktu skupienia wzroku związanego z wewnętrznym
            przeżyciem. Cały proces odbywa się w relacji – z obecnością i
            wsparciem, bez nacisku.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center max-w-7xl">
            {/* Zdjęcie 1 */}
            <div className="flex flex-col items-start flex-1 gap-2">
              <div className="border-2 border-[#e5e0d3] p-1 mb-4 w-full aspect-[3/4] bg-[#e5e0d3]">
                <Image
                  src="/jpg/pointer.jpeg"
                  alt="Stacy + James"
                  width={400}
                  height={400}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <p className="max-w-5xl text-sm font-bold">Krok pierwszy</p>
              <p className="max-w-5xl text-sm">
                Na początku wybieramy temat, który chcesz poruszyć. Może to być
                coś, co wydarzyło się niedalekiej przeszłości, dawne
                doświadczenie, albo uczucie, które trudno opisać, ale jest
                obecne w ciele. Wspólnie szukamy miejsca, tzw. brainspotu –
                punktu spojrzenia, który „łączy się” z tym doświadczeniem i
                aktywacją w ciele.
              </p>
            </div>
            {/* Zdjęcie 2 */}
            <div className="flex flex-col items-start flex-1 gap-2">
              <div className="border-2 border-[#e5e0d3] p-1 mb-4 w-full aspect-[3/4] bg-[#e5e0d3]">
                <Image
                  src="/jpg/headphones.jpeg"
                  alt="Colbie + Matt"
                  width={320}
                  height={400}
                  className="object-cover object-right w-full h-full"
                />
              </div>
              <p className="max-w-5xl text-sm font-bold">Muzyka bilateralna</p>
              <p className="max-w-5xl text-sm">
                Podczas sesji zwykle korzystamy z muzyki bilateralnej, która
                wspiera proces. Jej obecność nie jest natomiast konieczna–
                Brainspotting jest skuteczny również w ciszy.
              </p>
            </div>
            {/* Zdjęcie 3 */}
            <div className="flex flex-col items-start flex-1 gap-2">
              <div className="border-2 border-[#e5e0d3] p-1 mb-4 w-full aspect-[3/4] bg-[#e5e0d3]">
                <Image
                  src="/jpg/processing.jpeg"
                  alt="Jennifer + Dave"
                  width={320}
                  height={400}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <p className="max-w-5xl text-sm font-bold">Przetwarzanie</p>
              <p className="max-w-5xl text-sm">
                Proces może uruchamiać różne doświadczenia – myśli, emocje,
                obrazy, ale też poczucie wewnętrznego spokoju i kontaktu ze
                sobą.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
