import { mailerService } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "Imię jest wymagane"),
  lastName: z.string().min(1, "Nazwisko jest wymagane"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z
    .string()
    .min(1, "Telefon jest wymagany")
    .max(9, "Nieprawidłowy numer telefonu"),
  preferredTime: z.array(z.enum(["morning", "evening"])).optional(),
  contactMethod: z.array(z.enum(["phone", "email"])).optional(),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    await mailerService.sendEmail(
      validatedData.email,
      validatedData.firstName,
      validatedData.lastName,
      "Nowa wiadomość z formularza kontaktowego",
      validatedData.message,
      validatedData.phone,
      validatedData.preferredTime?.join(", ") || "",
      validatedData.contactMethod?.join(", ") || ""
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Wiadomość została wysłana pomyślnie. Skontaktuje się z Tobą wkrótce.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Błąd podczas przetwarzania formularza:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Błąd walidacji danych",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.",
      },
      { status: 500 }
    );
  }
}
