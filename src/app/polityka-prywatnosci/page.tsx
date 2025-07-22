/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative md:h-[50vh] h-[38vh] w-full overflow-hidden">
        <Image
          src="/jpg/forest.jpg"
          alt="Polityka Prywatności"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for darkening the image */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-[#f5f1e6] text-center px-4 z-20">
          <h1 className="md:text-7xl text-4xl font-serif font-normal italic leading-tight">
            Polityka <span className="not-italic font-bold">Prywatności</span>
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

      {/* Content Section */}
      <section className="relative bg-[#f5f1e6] md:py-12 py-8 md:px-12 px-6 text-black font-roboto-slab">
        <div className="max-w-4xl mx-auto font-roboto-slab text-black">
          <div className="prose prose-lg max-w-none text-black">
            {/* 1. Informacje ogólne */}
            <div className="mb-8">
              <h2 className="text-3xl font-instrument-serif tracking-tightest text-black mb-4 font-roboto-slab">
                1. Informacje ogólne
              </h2>
              <p className="mb-4">
                Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
                adresem url: <strong>vilje-psycholog.pl</strong>
              </p>
              <p className="mb-4">
                Operatorem serwisu oraz Administratorem danych osobowych jest:{" "}
                <strong>Katarzyna Sowińska</strong>
              </p>
              <p className="mb-4">
                Adres kontaktowy poczty elektronicznej operatora:{" "}
                <strong>vilje.katarzynapsycholog@gmail.com</strong>
              </p>
              <p className="mb-4">
                Operator jest Administratorem Twoich danych osobowych w
                odniesieniu do danych podanych dobrowolnie w Serwisie.
              </p>

              <p className="mb-2 font-semibold">
                Serwis wykorzystuje dane osobowe w następujących celach:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Prowadzenie newslettera</li>
                <li>Obsługa zapytań przez formularz</li>
                <li>Realizacja zamówionych usług</li>
                <li>Prezentacja oferty lub informacji</li>
              </ul>

              <p className="mb-2 font-semibold">
                Serwis realizuje funkcje pozyskiwania informacji o użytkownikach
                i ich zachowaniu w następujący sposób:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Poprzez dobrowolnie wprowadzone w formularzach dane, które
                  zostają wprowadzone do systemów Operatora.
                </li>
                <li>
                  Poprzez zapisywanie w urządzeniach końcowych plików cookie
                  (tzw. „ciasteczka").
                </li>
              </ul>
            </div>

            {/* 2. Metody ochrony danych */}
            <div className="mb-8">
              <h2 className="text-3xl font-instrument-serif tracking-tightest text-black mb-4 font-roboto-slab">
                2. Wybrane metody ochrony danych stosowane przez Operatora
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Miejsca logowania i wprowadzania danych osobowych są chronione
                  w warstwie transmisji (certyfikat SSL). Dzięki temu dane
                  osobowe i dane logowania, wprowadzone na stronie, zostają
                  zaszyfrowane w komputerze użytkownika i mogą być odczytane
                  jedynie na docelowym serwerze.
                </li>
                <li>Operator okresowo zmienia swoje hasła administracyjne.</li>
                <li>
                  Istotnym elementem ochrony danych jest regularna aktualizacja
                  wszelkiego oprogramowania, wykorzystywanego przez Operatora do
                  przetwarzania danych osobowych, co w szczególności oznacza
                  regularne aktualizacje komponentów programistycznych.
                </li>
              </ul>
            </div>

            {/* 3. Hosting */}
            <div className="mb-8">
              <h2 className="text-3xl font-instrument-serif tracking-tightest text-black mb-4 font-roboto-slab">
                3. Hosting
              </h2>
              <p className="mb-4">
                Serwis jest hostowany (technicznie utrzymywany) na serwerach
                operatora: <strong>inna firma</strong>
              </p>
              <p className="mb-4">
                Firma hostingowa w celu zapewnienia niezawodności technicznej
                prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  zasoby określone identyfikatorem URL (adresy żądanych zasobów
                  – stron, plików),
                </li>
                <li>czas nadejścia zapytania,</li>
                <li>czas wysłania odpowiedzi,</li>
                <li>
                  nazwę stacji klienta – identyfikacja realizowana przez
                  protokół HTTP,
                </li>
                <li>
                  informacje o błędach jakie nastąpiły przy realizacji
                  transakcji HTTP,
                </li>
                <li>
                  adres URL strony poprzednio odwiedzanej przez użytkownika
                  (referer link) – w przypadku gdy przejście do Serwisu
                  nastąpiło przez odnośnik,
                </li>
                <li>informacje o przeglądarce użytkownika,</li>
                <li>informacje o adresie IP,</li>
                <li>
                  informacje diagnostyczne związane z procesem samodzielnego
                  zamawiania usług poprzez rejestratory na stronie,
                </li>
                <li>
                  informacje związane z obsługą poczty elektronicznej kierowanej
                  do Operatora oraz wysyłanej przez Operatora.
                </li>
              </ul>
            </div>

            {/* 4. Twoje prawa i dodatkowe informacje */}
            <div className="mb-8">
              <h2 className="text-3xl font-instrument-serif tracking-tightest text-black mb-4 font-roboto-slab">
                4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania
                danych
              </h2>
              <p className="mb-4">
                W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
                dane osobowe innym odbiorcom, jeśli będzie to niezbędne do
                wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków
                ciążących na Administratorze. Dotyczy to takich grup odbiorców:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>firma hostingowa na zasadzie powierzenia</li>
                <li>operatorzy płatności</li>
                <li>organy publiczne</li>
                <li>
                  firmy, świadczące usługi marketingu na rzecz Administratora
                </li>
              </ul>

              <p className="mb-4">
                Twoje dane osobowe przetwarzane przez Administratora nie dłużej,
                niż jest to konieczne do wykonania związanych z nimi czynności
                określonych osobnymi przepisami (np. o prowadzeniu
                rachunkowości). W odniesieniu do danych marketingowych dane nie
                będą przetwarzane dłużej niż przez 3 lata.
              </p>

              <p className="mb-2 font-semibold">
                Przysługuje Ci prawo żądania od Administratora:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                <li>ich sprostowania,</li>
                <li>usunięcia,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>oraz przenoszenia danych.</li>
              </ul>

              <p className="mb-4">
                Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
                przetwarzania wskazanego w pkt 3.2 wobec przetwarzania danych
                osobowych w celu wykonania prawnie uzasadnionych interesów
                realizowanych przez Administratora, w tym profilowania, przy
                czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku
                istnienia ważnych prawnie uzasadnionych podstaw do
                przetwarzania, nadrzędnych wobec Ciebie interesów, praw i
                wolności, w szczególności ustalenia, dochodzenia lub obrony
                roszczeń.
              </p>

              <p className="mb-4">
                Na działania Administratora przysługuje skarga do Prezesa Urzędu
                Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
              </p>

              <p className="mb-4">
                Podanie danych osobowych jest dobrowolne, lecz niezbędne do
                obsługi Serwisu.
              </p>

              <p className="mb-4">
                W stosunku do Ciebie mogą być podejmowane czynności polegające
                na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w
                celu świadczenia usług w ramach zawartej umowy oraz w celu
                prowadzenia przez Administratora marketingu bezpośredniego.
              </p>

              <p className="mb-4">
                Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu
                przepisów o ochronie danych osobowych. Oznacza to, że nie
                przesyłamy ich poza teren Unii Europejskiej.
              </p>
            </div>

            {/* 5. Informacje w formularzach */}
            <div className="mb-8">
              <h2 className="text-3xl font-instrument-serif tracking-tightest text-black mb-4">
                5. Informacje w formularzach
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Serwis zbiera informacje podane dobrowolnie przez użytkownika,
                  w tym dane osobowe, o ile zostaną one podane.
                </li>
                <li>
                  Serwis może zapisać informacje o parametrach połączenia
                  (oznaczenie czasu, adres IP).
                </li>
                <li>
                  Serwis, w niektórych wypadkach, może zapisać informację
                  ułatwiającą powiązanie danych w formularzu z adresem e-mail
                  użytkownika wypełniającego formularz. W takim wypadku adres
                  e-mail użytkownika pojawia się wewnątrz adresu url strony
                  zawierającej formularz.
                </li>
                <li>
                  Dane podane w formularzu są przetwarzane w celu wynikającym z
                  funkcji konkretnego formularza, np. w celu dokonania procesu
                  obsługi zgłoszenia serwisowego lub kontaktu handlowego,
                  rejestracji usług itp. Każdorazowo kontekst i opis formularza
                  w czytelny sposób informuje, do czego on służy.
                </li>
              </ul>
            </div>

            {/* 6. Logi Administratora */}
            <div className="mb-8">
              <h2 className="text-3xl font-instrument-serif tracking-tightest text-black mb-4">
                6. Logi Administratora
              </h2>
              <p className="mb-4">
                Informacje zachowaniu użytkowników w serwisie mogą podlegać
                logowaniu. Dane te są wykorzystywane w celu administrowania
                serwisem.
              </p>
            </div>

            {/* 7. Istotne techniki marketingowe */}
            <div className="mb-8">
              <h2 className="text-3xl font-instrument-serif tracking-tightest text-black mb-4">
                7. Istotne techniki marketingowe
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Operator stosuje analizę statystyczną ruchu na stronie,
                  poprzez Google Analytics (Google Inc. z siedzibą w USA).
                  Operator nie przekazuje do operatora tej usługi danych
                  osobowych, a jedynie zanonimizowane informacje. Usługa bazuje
                  na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
                  W zakresie informacji o preferencjach użytkownika gromadzonych
                  przez sieć reklamową Google użytkownik może przeglądać i
                  edytować informacje wynikające z plików cookies przy pomocy
                  narzędzia:{" "}
                  <a
                    href="https://www.google.com/ads/preferences/"
                    className="underline text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.google.com/ads/preferences/
                  </a>
                </li>
                <li>
                  Operator stosuje techniki remarketingowe, pozwalające na
                  dopasowanie przekazów reklamowych do zachowania użytkownika na
                  stronie, co może dawać złudzenie, że dane osobowe użytkownika
                  są wykorzystywane do jego śledzenia, jednak w praktyce nie
                  dochodzi do przekazania żadnych danych osobowych od Operatora
                  do operatorom reklam. Technologicznym warunkiem takich działań
                  jest włączona obsługa plików cookie.
                </li>
                <li>
                  Operator stosuje korzysta z piksela Facebooka. Ta technologia
                  powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA)
                  wie, że dana osoba w nim zarejestrowana korzysta z Serwisu.
                  Bazuje w tym wypadku na danych, wobec których sam jest
                  administratorem, Operator nie przekazuje od siebie żadnych
                  dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje
                  na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
                </li>
                <li>
                  Operator stosuje rozwiązanie badające zachowanie użytkowników
                  poprzez tworzenie map ciepła oraz nagrywanie zachowania na
                  stronie. Te informacje są anonimizowane zanim zostaną
                  przesłane do operatora usługi tak, że nie wie on jakiej osoby
                  fizycznej one dotyczą. W szczególności nagrywaniu nie
                  podlegają wpisywane hasła oraz inne dane osobowe.
                </li>
                <li>
                  Operator stosuje rozwiązanie automatyzujące działanie Serwisu
                  w odniesieniu do użytkowników, np. mogące przesłać maila do
                  użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził
                  on zgodę na otrzymywanie korespondencji handlowej od
                  Operatora.
                </li>
                <li>
                  Operator może stosować profilowanie w rozumieniu przepisów o
                  ochronie danych osobowych
                </li>
              </ul>
            </div>

            {/* 8. Informacja o plikach cookies */}
            <div className="mb-8">
              <h2 className="text-3xl font-instrument-serif tracking-tightest text-black mb-4">
                8. Informacja o plikach cookies
              </h2>
              <p className="mb-4">Serwis korzysta z plików cookies.</p>
              <p className="mb-4">
                Pliki cookies (tzw. „ciasteczka") stanowią dane informatyczne, w
                szczególności pliki tekstowe, które przechowywane są w
                urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do
                korzystania ze stron internetowych Serwisu. Cookies zazwyczaj
                zawierają nazwę strony internetowej, z której pochodzą, czas
                przechowywania ich na urządzeniu końcowym oraz unikalny numer.
              </p>
              <p className="mb-4">
                Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
                Serwisu pliki cookies oraz uzyskującym do nich dostęp jest
                operator Serwisu.
              </p>

              <p className="mb-2 font-semibold">
                Pliki cookies wykorzystywane są w następujących celach:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki
                  której użytkownik nie musi na każdej podstronie Serwisu
                  ponownie wpisywać loginu i hasła;
                </li>
                <li>
                  realizacji celów określonych powyżej w części "Istotne
                  techniki marketingowe";
                </li>
              </ul>

              <p className="mb-4">
                W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików
                cookies: „sesyjne" (session cookies) oraz „stałe" (persistent
                cookies). Cookies „sesyjne" są plikami tymczasowymi, które
                przechowywane są w urządzeniu końcowym Użytkownika do czasu
                wylogowania, opuszczenia strony internetowej lub wyłączenia
                oprogramowania (przeglądarki internetowej). „Stałe" pliki
                cookies przechowywane są w urządzeniu końcowym Użytkownika przez
                czas określony w parametrach plików cookies lub do czasu ich
                usunięcia przez Użytkownika.
              </p>

              <p className="mb-4">
                Oprogramowanie do przeglądania stron internetowych (przeglądarka
                internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików
                cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu
                mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka
                internetowa umożliwia usunięcie plików cookies. Możliwe jest
                także automatyczne blokowanie plików cookies Szczegółowe
                informacje na ten temat zawiera pomoc lub dokumentacja
                przeglądarki internetowej.
              </p>

              <p className="mb-4">
                Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre
                funkcjonalności dostępne na stronach internetowych Serwisu.
              </p>

              <p className="mb-4">
                Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika
                Serwisu wykorzystywane mogą być również przez współpracujące z
                operatorem Serwisu podmioty, w szczególności dotyczy to firm:
                Google (Google Inc. z siedzibą w USA).
              </p>
            </div>

            {/* 9. Zarządzanie plikami cookies */}
            <div className="mb-8">
              <h2 className="text-3xl font-instrument-serif tracking-tightest text-black mb-4">
                9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać
                zgodę?
              </h2>
              <p className="mb-4">
                Jeśli użytkownik nie chce otrzymywać plików cookies, może
                zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie
                obsługi plików cookies niezbędnych dla procesów
                uwierzytelniania, bezpieczeństwa, utrzymania preferencji
                użytkownika może utrudnić, a w skrajnych przypadkach może
                uniemożliwić korzystanie ze stron www
              </p>
              <p className="mb-2 font-semibold">
                W celu zarządzania ustawienia cookies wybierz z listy poniżej
                przeglądarkę internetową, której używasz i postępuj zgodnie z
                instrukcjami:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Edge</li>
                <li>Internet Explorer</li>
                <li>Chrome</li>
                <li>Safari</li>
                <li>Firefox</li>
                <li>Opera</li>
              </ul>
              <p className="mb-2 font-semibold">Urządzenia mobilne:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Android</li>
                <li>Safari (iOS)</li>
                <li>Windows Phone</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
