"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import * as Toast from "@radix-ui/react-toast";
import Link from "next/link";

// Schema walidacji
const contactFormSchema = z.object({
  firstName: z.string().min(1, "Imię jest wymagane"),
  lastName: z.string().min(1, "Nazwisko jest wymagane"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().min(1, "Telefon jest wymagany"),
  preferredTime: z
    .array(z.enum(["morning", "evening"]))
    .min(1, "Wybierz co najmniej jedną preferowaną godzinę"),
  contactMethod: z
    .array(z.enum(["phone", "email"]))
    .min(1, "Wybierz co najmniej jeden sposób kontaktu"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Musisz zaakceptować politykę prywatności",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  className?: string;
}

// Funkcja do zapisywania danych do cookie
const saveFormDataToCookie = (data: ContactFormData) => {
  const expiryDate = new Date();
  expiryDate.setMinutes(expiryDate.getMinutes() + 15); // 15 minut

  Cookies.set("contactFormData", JSON.stringify(data), {
    expires: expiryDate,
    secure: true,
    sameSite: "strict",
  });

  // Zapisujemy też timestamp blokady
  Cookies.set("contactFormBlocked", "true", {
    expires: expiryDate,
    secure: true,
    sameSite: "strict",
  });
};

// Funkcja do pobierania danych z cookie
const getFormDataFromCookie = (): ContactFormData | null => {
  const data = Cookies.get("contactFormData");
  const isBlocked = Cookies.get("contactFormBlocked");

  if (data && isBlocked) {
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  return null;
};

// Funkcja do sprawdzania czy formularz jest zablokowany
const isFormBlocked = (): boolean => {
  return !!Cookies.get("contactFormBlocked");
};

export default function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTimeLeft, setBlockTimeLeft] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      preferredTime: ["morning"],
      contactMethod: ["phone"],
      privacyPolicy: false,
    },
  });

  // Sprawdzanie cookie przy ładowaniu komponentu
  useEffect(() => {
    const savedData = getFormDataFromCookie();
    const blocked = isFormBlocked();

    if (savedData && blocked) {
      // Wypełniamy formularz danymi z cookie
      setValue("firstName", savedData.firstName);
      setValue("lastName", savedData.lastName);
      setValue("email", savedData.email);
      setValue("phone", savedData.phone);
      setValue("preferredTime", savedData.preferredTime);
      setValue("contactMethod", savedData.contactMethod);
      setValue("message", savedData.message);
      setValue("privacyPolicy", savedData.privacyPolicy || false);

      setIsBlocked(true);
      setSubmitStatus("success");
      setSubmitMessage(
        "Formularz został już wysłany. Możesz wysłać kolejny za 15 minut od poprzedniego wysłania."
      );
      setOpen(true);

      // Obliczamy pozostały czas blokady
      const calculateTimeLeft = () => {
        const cookie = Cookies.get("contactFormBlocked");
        if (cookie) {
          const expiry = new Date(Cookies.get("contactFormBlocked") || "");
          const now = new Date();
          const diff = Math.max(
            0,
            Math.floor((expiry.getTime() - now.getTime()) / 1000)
          );
          setBlockTimeLeft(diff);

          if (diff <= 0) {
            setIsBlocked(false);
            setSubmitStatus("idle");
            setSubmitMessage("");
            Cookies.remove("contactFormData");
            Cookies.remove("contactFormBlocked");
          }
        }
      };

      calculateTimeLeft();
      const interval = setInterval(calculateTimeLeft, 1000);

      return () => clearInterval(interval);
    }
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    if (isBlocked) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);
        setOpen(true);

        // Zapisujemy dane do cookie
        saveFormDataToCookie(data);
        setIsBlocked(true);

        // Nie resetujemy formularza, bo chcemy pokazać dane
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || "Wystąpił błąd podczas wysyłania wiadomości"
        );
        setOpen(true);
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Wystąpił błąd podczas wysyłania wiadomości");
      setOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <Toast.Provider swipeDirection="right">
      <div className={className}>
        <h2 className="md:block hidden absolute -top-5 left-1/2 -translate-x-1/2 text-gray-800 text-5xl font-instrument-serif tracking-tightest">
          FORMULARZ KONTAKTOWY
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <p className="text-gray-800 font-regular text-md tracking-widest">
              IMIĘ *
            </p>
            <input
              type="text"
              {...register("firstName")}
              disabled={isBlocked}
              className={`w-full p-2 border-b border-black px-6 py-4 text-md font-extralight tracking-wide focus:outline-0 placeholder:text-xs pl-0 text-black bg-transparent focus:outline-none ${
                errors.firstName ? "border-red-500" : ""
              } ${isBlocked ? "opacity-50 cursor-not-allowed" : ""}`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <p className="text-gray-800 font-regular text-md tracking-widest">
              NAZWISKO *
            </p>
            <input
              type="text"
              {...register("lastName")}
              disabled={isBlocked}
              className={`w-full p-2 border-b border-black px-6 py-4 text-md font-extralight tracking-wide focus:outline-0 placeholder:text-xs pl-0 text-black bg-transparent focus:outline-none ${
                errors.lastName ? "border-red-500" : ""
              } ${isBlocked ? "opacity-50 cursor-not-allowed" : ""}`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <p className="text-gray-800 font-regular text-md tracking-widest">
              EMAIL *
            </p>
            <input
              type="email"
              {...register("email")}
              disabled={isBlocked}
              className={`w-full p-2 border-b border-black px-6 py-4 text-md font-extralight tracking-wide focus:outline-0 placeholder:text-xs pl-0 text-black bg-transparent focus:outline-none ${
                errors.email ? "border-red-500" : ""
              } ${isBlocked ? "opacity-50 cursor-not-allowed" : ""}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <p className="text-gray-800 font-regular text-md tracking-widest">
              NUMER TELEFONU *
            </p>
            <input
              type="tel"
              {...register("phone")}
              disabled={isBlocked}
              className={`w-full p-2 border-b border-black px-6 py-4 text-md font-extralight tracking-wide focus:outline-0 placeholder:text-xs pl-0 text-black bg-transparent focus:outline-none ${
                errors.phone ? "border-red-500" : ""
              } ${isBlocked ? "opacity-50 cursor-not-allowed" : ""}`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 pb-4 border-b border-black">
            <p className="text-gray-800 mb-2 font-regular text-md tracking-widest">
              PREFEROWANA GODZINA SPOTKANIA W TYGODNIU:
            </p>
            <fieldset disabled={isBlocked}>
              <legend className="sr-only">Godzina spotkania</legend>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        {...register("preferredTime")}
                        value="morning"
                        type="checkbox"
                        disabled={isBlocked}
                        className={`col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-[#7b7451] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                          isBlocked ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                      >
                        <path
                          d="M3 7L6 10L11 4"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label className="font-medium text-gray-900">Rano</label>{" "}
                    <span className="text-gray-500">do godziny 16:00</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        {...register("preferredTime")}
                        value="evening"
                        type="checkbox"
                        disabled={isBlocked}
                        className={`col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-[#7b7451] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                          isBlocked ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                      >
                        <path
                          d="M3 7L6 10L11 4"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label className="font-medium text-gray-900">
                      Wieczorem
                    </label>{" "}
                    <span className="text-gray-500">od godziny 16:00</span>
                  </div>
                </div>
              </div>
            </fieldset>
            {errors.preferredTime && (
              <p className="mt-1 text-sm text-red-600">
                {errors.preferredTime.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 pb-4">
            <p className="text-gray-800 mb-2 font-regular text-md tracking-widest">
              PREFEROWANY SPOSÓB KONTAKTU:
            </p>
            <fieldset disabled={isBlocked}>
              <legend className="sr-only">Sposób kontaktu</legend>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        {...register("contactMethod")}
                        value="phone"
                        type="checkbox"
                        disabled={isBlocked}
                        className={`col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-[#7b7451] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                          isBlocked ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                      >
                        <path
                          d="M3 7L6 10L11 4"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label className="font-medium text-gray-900">Telefon</label>{" "}
                    <span className="text-gray-500">
                      skontaktuję się z Tobą drogą telefoniczną
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        {...register("contactMethod")}
                        value="email"
                        type="checkbox"
                        disabled={isBlocked}
                        className={`col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-[#7b7451] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                          isBlocked ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                      >
                        <path
                          d="M3 7L6 10L11 4"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label className="font-medium text-gray-900">E-mail</label>{" "}
                    <span className="text-gray-500">
                      skontaktuję się z Tobą drogą mailową
                    </span>
                  </div>
                </div>
              </div>
            </fieldset>
            {errors.contactMethod && (
              <p className="mt-1 text-sm text-red-600">
                {errors.contactMethod.message}
              </p>
            )}
          </div>

          <div className="border-b border-gray-200 pb-px focus-within:border-b-2 focus-within:border-black focus-within:pb-0">
            <p className="text-gray-800 mb-2 font-regular text-md tracking-widest">
              JAK MOGĘ CI POMÓC?
            </p>
            <textarea
              {...register("message")}
              rows={5}
              disabled={isBlocked}
              className={`block w-full resize-none text-base text-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border bg-transparent p-4 ${
                errors.message ? "border-red-500" : "border-black"
              } ${isBlocked ? "opacity-50 cursor-not-allowed" : ""}`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  {...register("privacyPolicy")}
                  type="checkbox"
                  disabled={isBlocked}
                  className={`col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-[#7b7451] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    isBlocked ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                >
                  <path
                    d="M3 7L6 10L11 4"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-checked:opacity-100"
                  />
                </svg>
              </div>
            </div>
            <div className="text-sm/6">
              <label
                htmlFor="privacyPolicy"
                className="font-medium text-gray-900"
              >
                Wyrażam zgodę na przetwarzanie moich danych osobowych przez
                Vilje Katarzyna Sowińska oraz akceptuję{" "}
                <Link
                  id="privacyPolicy"
                  href="/polityka-prywatnosci"
                  className="underline text-gray-500"
                >
                  politykę prywatności
                </Link>
              </label>
            </div>
          </div>
          {errors.privacyPolicy && (
            <p className="mt-1 text-sm text-red-600">
              {errors.privacyPolicy.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || isBlocked}
            className="cursor-pointer w-full px-6 py-5 text-xs font-extralight tracking-tightest bg-transparent border border-black hover:text-[#EFEADD] hover:bg-[#8a7e56] hover:border-[#8a7e56] text-black text-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? "Wysyłanie..."
              : isBlocked
              ? "Formularz wysłany"
              : "Wyślij wiadomość"}
          </button>
        </form>

        <Toast.Root
          className={`group relative flex w-full items-center justify-between overflow-hidden rounded-xl border bg-white/95 backdrop-blur-sm p-4 shadow-2xl transition-all duration-300 data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:animate-swipeOut ${
            submitStatus === "success"
              ? "border-[#8a7e56]/20 shadow-[#8a7e56]/10"
              : "border-red-200 shadow-red-500/10"
          }`}
          open={open}
          onOpenChange={setOpen}
        >
          <div className="flex items-start gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                submitStatus === "success"
                  ? "bg-[#8a7e56]/10 text-[#8a7e56]"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {submitStatus === "success" ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <Toast.Title
                className={`text-sm font-semibold leading-6 ${
                  submitStatus === "success" ? "text-[#8a7e56]" : "text-red-800"
                }`}
              >
                {submitStatus === "success"
                  ? "Wiadomość wysłana pomyślnie"
                  : "Błąd wysyłania"}
              </Toast.Title>
              <Toast.Description asChild>
                <div
                  className={`mt-1 text-sm leading-5 ${
                    submitStatus === "success"
                      ? "text-[#7b7451]"
                      : "text-red-700"
                  }`}
                >
                  {submitMessage ===
                  "Formularz został już wysłany. Możesz wysłać kolejny za 15 minut od poprzedniego wysłania."
                    ? `Możesz wysłać kolejny formularz za: ${formatTime(
                        blockTimeLeft
                      )}`
                    : submitMessage ===
                      "Wystąpił błąd podczas wysyłania wiadomości"
                    ? "Spróbuj ponownie za chwilę"
                    : submitMessage}
                </div>
              </Toast.Description>
            </div>
          </div>
          <Toast.Action asChild altText="Zamknij powiadomienie">
            <button className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8a7e56] focus:ring-offset-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M12.5 3.5l-9 9m0-9l9 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 z-[2147483647] outline-none" />
        <p className="md:block hidden absolute -bottom-6 -right-5 -rotate-16 text-[#8a7e56] z-10 font-the-impressionist text-3xl font-normal">
          Dziekuje za <br />
          zaufanie
        </p>
      </div>
    </Toast.Provider>
  );
}
