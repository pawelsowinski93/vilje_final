import Button from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import Image from "next/image";

export default function Kontakt() {
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
            Formularz <span className="not-italic font-bold">kontaktowy</span>
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
      <section className="relative bg-[#f5f1e6] md:py-12 py-8 md:pt-6 md:px-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:items-stretch">
          <div className="md:w-1/2 w-full flex flex-col justify-center md:pl-12 gap-12">
            <p
              className="text-6xl font-instrument-serif tracking-tightest text-gray-800"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Formularz kontaktowy
            </p>
            <p className="text-[#6f684e] mb-4 text-sm">
              Psycholog ze specjalnością: kliniczna i osobowości. Ukończyłam 2
              letnie studia podyplomowe z psychotraumatologii oraz
              psychodietetyki. Obecnie kształcę się w szkole psychoterapii
              skierowanej na pracę z traumą Pomorskiego Centrum
              Psychotraumatologii oraz w metodzie Somatic Experiencing, której
              twórcą jest Peter A. Levine (w trakcie szkolenia). Jestem także
              praktykiem Brainspotting.
            </p>
          </div>
          <div className="hidden md:flex md:w-1/2 w-full flex-col items-center justify-center relative mt-12 md:mt-0 md:pl-12">
            <Image
              src="/jpg/flower-1.jpg"
              alt="about"
              width={500}
              height={500}
              className="rounded-[50%] object-cover h-[490px] w-84 p-2"
            />
          </div>
        </div>
      </section>
      <section className="relative bg-[#f5f1e6] flex justify-center items-center md:p-32 p-0 overflow-hidden">
        <Image
          src="/jpg/marmur.webp"
          alt="Marmur background"
          fill
          className="object-cover opacity-10 dark:opacity-30"
        />
        <div className="bg-[#E9E5DB]/90 w-full max-w-5xl md:p-12 flex flex-col p-6 gap-6 relative z-10">
          <Input
            type="text"
            placeholder="Imię"
            value=""
            className="border-0 border-b border-black/20 pl-0 text-black"
          />
          <Input
            type="text"
            placeholder="Nazwisko"
            value=""
            className="border-0 border-b border-black/20 pl-0 text-black"
          />
          <Input
            type="email"
            placeholder="Email"
            value=""
            className="border-0 border-b border-black/20 pl-0 text-black"
          />
          <Input
            type="number"
            placeholder="Telefon"
            value=""
            className="border-0 border-b border-black/20 pl-0 text-black"
          />
          <div className="flex flex-col gap-2 pb-4 border-b border-black/20">
            <p className="text-gray-800 mb-2">
              Preferowana godzina spotkania w tygodniu:
            </p>

            <fieldset>
              <legend className="sr-only">Godzina spotkania</legend>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        defaultChecked
                        id="comments"
                        name="comments"
                        type="checkbox"
                        aria-describedby="comments-description"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-[#7b7451] indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900"
                    >
                      Rano
                    </label>{" "}
                    <span id="comments-description" className="text-gray-500">
                      <span className="sr-only">Rano </span>do godziny 16:00
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        aria-describedby="offers-description"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-[#7b7451] indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label
                      htmlFor="evening"
                      className="font-medium text-gray-900"
                    >
                      Wieczorem
                    </label>{" "}
                    <span id="evening-description" className="text-gray-500">
                      <span className="sr-only">Wieczorem </span>od godziny
                      16:00
                    </span>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="flex flex-col gap-2 pb-4 border-b border-black/20">
            <p className="text-gray-800 mb-2">Preferowany sposób kontaktu:</p>

            <fieldset>
              <legend className="sr-only">Sposób kontaktu</legend>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        defaultChecked
                        id="comments"
                        name="comments"
                        type="checkbox"
                        aria-describedby="comments-description"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-[#7b7451] indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900"
                    >
                      Telefon
                    </label>{" "}
                    <span id="comments-description" className="text-gray-500">
                      <span className="sr-only">Telefon </span>skontaktuję się z
                      Tobą drogą telefoniczną
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        aria-describedby="offers-description"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-[#7b7451] indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-900"
                    >
                      E-mail
                    </label>{" "}
                    <span id="offers-description" className="text-gray-500">
                      <span className="sr-only">Email </span>skontaktuję się z
                      Tobą drogą mailową
                    </span>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="border-b border-gray-200 pb-px focus-within:border-b-2 focus-within:border-black/20 focus-within:pb-0">
            <label htmlFor="comment" className="sr-only">
              Jak mogę Ci pomóc
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={5}
              placeholder="Napisz wiadomość..."
              className="block w-full resize-none text-base text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-b border-black/20"
              defaultValue={""}
            />
          </div>
          <Button
            type="button"
            label="Wyślij wiadomość"
            className="w-full px-6 py-5 text-xs font-extralight tracking-tightest bg-transparent border border-[#8a7e56] hover:text-[#8a7e56] text-center"
          />
        </div>
      </section>
    </div>
  );
}
