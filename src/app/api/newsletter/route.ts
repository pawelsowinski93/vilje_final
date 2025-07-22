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

    const API_KEY =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZDJmZjI5N2E2YmYzZGJlN2U5Zjc1YTZkNTA2Y2ZjMTJiNTA5NmNjZGRlZGM2MjZlYjI2NjFmNjBiMzA0ZjAwMDA2NzNmMTlmZTY0NjhmNWUiLCJpYXQiOjE3NTMwMjk2MjcuNDE1NDQ2LCJuYmYiOjE3NTMwMjk2MjcuNDE1NDQ4LCJleHAiOjQ5MDg3MDMyMjcuNDExNjk4LCJzdWIiOiIxNjkyMzA4Iiwic2NvcGVzIjpbXX0.J6z-aTzkCsbcSo6j3IJeBI2KvAKQXOobbZJxrJQo84JZPMlC_oKeF2XfFQNhHwcB-zaNEnE7vgwl8Ye6ta66YVE_Wo16nDHAHaq2SOPFqgXBfRxKRmgHMAqzv_jHVmtsUv7UNSfq0z97wPPnjVJBPfcrg_CKUxJspz_SzOAFv0h30HilNimt7OM9Wo7TTXoOGuDrg3K-s-SZYzAIBFrf2ytxdxU9GPcyip0ssmM9aU8nRf1kupt6zjJBdDVuk7azF8uKgtYcmo1Dtl0epstqM3CAMbtB-JQKdHmuyrLKfIZXoLv-xSBWMrv8HEuZrDOIDhn0FidM0lIw1mS9A7dthR2-FpY215nHNio92NfiHAH0Ov1uSG7wnlSniBzSYheqT7sMZayyiOSTgx_fJv2HAY59oJgj0aomj9cIosXEeOj3_nbNMZkJv98BP4MyMDMLMTjOqF5UZombzQhA_8wgUqxZMjg00OVHJiua0UgkrQzOoQPeMvB4C9d3JerGLdTUPkcJ7PKH2B7OulKysGiuFnPE9suIx-CMP3ppgQqhCiF4WInkSj2iGaIrsB5Y-LhUS-5f6y6o8JKnEbt-jeMvdf9NcKHCP24yG0QT9zqZvFWUyvH-ZuSS5NFoOtGXlTdifdUdOR6kP1tByT0I1hrQUhVuTI5NPjE8BE31ojHFMPY";
    const GROUP_ID = "160463247624897917";

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
