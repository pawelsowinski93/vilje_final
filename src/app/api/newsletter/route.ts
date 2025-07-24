import { env } from "@/utils/env";
import { z } from "zod";

// Schema for newsletter subscription payload
const NewsletterSchema = z.object({
  email: z.string().email("Nieprawidłowy format email"),
  name: z.string().min(1, "Imię jest wymagane"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Parse and validate the payload
    const validatedData = NewsletterSchema.parse(body);
    const { email, name } = validatedData;

    const API_KEY = env.MAILERLITE_SECRET!;
    const GROUP_ID = env.GROUP_ID;

    const res = await fetch(
      `https://api.mailerlite.com/api/v2/groups/${GROUP_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": API_KEY,
        },
        body: JSON.stringify({
          email: email,
          fields: {
            name: name,
          },
          groups: [GROUP_ID],
        }),
      }
    );

    if (res.status >= 400) {
      const text = await res.text();
      return new Response(
        JSON.stringify({ error: `MailerLite error: ${text}` }),
        { status: 500 }
      );
    }

    // Create cookie with newsletter subscription info
    const cookieValue = JSON.stringify({
      subscribed: true,
      email: email,
      name: name,
      subscribedAt: new Date().toISOString(),
    });

    // Calculate 30 days from now
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

    const response = new Response(
      JSON.stringify({ message: "Zapisano do newslettera!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": `newsletter_subscription=${encodeURIComponent(
            cookieValue
          )}; Path=/; Expires=${thirtyDaysFromNow.toUTCString()}; HttpOnly; SameSite=Strict; Secure`,
        },
      }
    );

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          error: "Nieprawidłowe dane",
          details: error.issues,
        }),
        { status: 400 }
      );
    }

    return new Response(JSON.stringify({ error: "Wystąpił błąd serwera" }), {
      status: 500,
    });
  }
}
