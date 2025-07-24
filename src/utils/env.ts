// Environment variables utility
export const env = {
  MAILERLITE_SECRET: process.env.MAILERLITE_SECRET,
  GOOGLE_PASS: process.env.GOOGLE_PASS,
  GROUP_ID: process.env.GROUP_ID,
} as const;

// Validation function
export function validateEnv() {
  const required = ["MAILERLITE_SECRET", "GOOGLE_PASS", "GROUP_ID"];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }
}
