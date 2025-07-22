export interface NewsletterSubscription {
  subscribed: boolean;
  email: string;
  name: string;
  subscribedAt: string;
}

/**
 * Parse newsletter subscription cookie from document.cookie
 * @param cookieString - The cookie string from document.cookie
 * @returns Parsed newsletter subscription data or null if not found/invalid
 */
export function parseNewsletterCookie(
  cookieString: string
): NewsletterSubscription | null {
  try {
    const cookies = cookieString.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      if (key && value) {
        acc[key] = decodeURIComponent(value);
      }
      return acc;
    }, {} as Record<string, string>);

    const newsletterCookie = cookies["newsletter_subscription"];
    if (!newsletterCookie) {
      return null;
    }

    const parsed = JSON.parse(newsletterCookie);

    // Validate the parsed data
    if (
      parsed.subscribed &&
      parsed.email &&
      parsed.name &&
      parsed.subscribedAt
    ) {
      return parsed as NewsletterSubscription;
    }

    return null;
  } catch (error) {
    console.error("Error parsing newsletter cookie:", error);
    return null;
  }
}

/**
 * Get newsletter subscription data from cookies (client-side)
 * @returns Newsletter subscription data or null if not found
 */
export function getNewsletterSubscription(): NewsletterSubscription | null {
  if (typeof document === "undefined") {
    return null; // Server-side rendering
  }

  return parseNewsletterCookie(document.cookie);
}

/**
 * Check if user is subscribed to newsletter
 * @returns boolean indicating subscription status
 */
export function isNewsletterSubscribed(): boolean {
  const subscription = getNewsletterSubscription();
  return subscription?.subscribed === true;
}
