export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Company";

export function withBrand(suffix: string): string {
  return `${suffix} | ${APP_NAME}`;
}
