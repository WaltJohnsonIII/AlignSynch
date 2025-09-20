export const APP_NAME: string =
  process.env.NEXT_PUBLIC_APP_NAME?.trim() || "QuizHub";

export function getAppName(): string {
  return APP_NAME;
}

