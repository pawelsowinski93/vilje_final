"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as Toast from "@radix-ui/react-toast";
import {
  getNewsletterSubscription,
  isNewsletterSubscribed,
} from "@/utils/cookies";

const newsletterSchema = z.object({
  name: z.string().min(1, "Imię jest wymagane"),
  email: z.string().email("Nieprawidłowy format email"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  useEffect(() => {
    const subscription = getNewsletterSubscription();

    if (subscription && isNewsletterSubscribed()) {
      setIsSubscribed(true);
      setValue("name", subscription.name);
      setValue("email", subscription.email);
      setSubmitStatus("success");
      setSubmitMessage("Jesteś już zapisany do newslettera!");
      setOpen(true);
    }
  }, [setValue]);

  const onSubmit = async (data: NewsletterFormData) => {
    if (isSubscribed) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);
        setOpen(true);
        setIsSubscribed(true);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.error || "Wystąpił błąd podczas zapisywania do newslettera"
        );
        setOpen(true);
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Wystąpił błąd podczas zapisywania do newslettera");
      setOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Toast.Provider swipeDirection="right">
      <div className="w-full md:px-18 px-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex md:flex-row flex-col gap-4 w-full justify-center items-center max-w-[1170px] md:px-0 px-4"
        >
          <input
            type="text"
            placeholder="IMIĘ"
            {...register("name")}
            onChange={(e) => setValue("name", e.target.value)}
            className={`w-full p-2 border border-black/20 px-6 py-4 text-md font-extralight tracking-wide focus:outline-0 placeholder:text-xs ${
              errors.name ? "border-red-500" : ""
            } ${isSubscribed ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubscribed}
          />
          {errors.name && (
            <p className="text-sm text-red-600 md:col-span-2">
              {errors.name.message}
            </p>
          )}

          <input
            type="email"
            placeholder="ADRES EMAIL"
            {...register("email")}
            onChange={(e) => setValue("email", e.target.value)}
            className={`w-full p-2 border border-black/20 px-6 py-4 text-md font-extralight tracking-wide focus:outline-0 placeholder:text-xs placeholder:text-gray-400 ${
              errors.email ? "border-red-500" : ""
            } ${isSubscribed ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubscribed}
          />
          {errors.email && (
            <p className="text-sm text-red-600 md:col-span-2">
              {errors.email.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || isSubscribed}
            className="hover:cursor-pointer w-full px-6 py-5 text-xs font-extralight tracking-tightest bg-transparent border border-[#8a7e56] hover:text-white hover:bg-[#8a7e56] text-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? "Zapisywanie..."
              : isSubscribed && submitStatus === "success"
              ? "Zapisany"
              : "Zapisz się"}
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
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.5 14.1667L3.33333 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6.66667V10M10 13.3333H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  ? "Zapisano do newslettera!"
                  : "Błąd zapisywania"}
              </Toast.Title>
              <Toast.Description asChild>
                <div
                  className={`mt-1 text-sm leading-5 ${
                    submitStatus === "success"
                      ? "text-[#7b7451]"
                      : "text-red-700"
                  }`}
                >
                  {submitMessage}
                </div>
              </Toast.Description>
            </div>
            <Toast.Close className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Toast.Close>
          </div>
        </Toast.Root>
      </div>
    </Toast.Provider>
  );
}
