import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Derive initials from a display name or email-like string.
 */
export function getInitials(name?: string | null): string {
  if (!name) return "";
  const trimmed = name.trim();
  if (!trimmed) return "";
  // Split by whitespace; fallback to first two chars when single token
  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    const token = parts[0];
    // If it looks like an email, use local part
    const local = token.includes("@") ? token.split("@")[0] : token;
    const chars = Array.from(local).slice(0, 2);
    return chars.join("").toUpperCase();
  }
  const first = parts[0][0] ?? "";
  const last = parts[parts.length - 1][0] ?? "";
  return `${first}${last}`.toUpperCase();
}

/**
 * Generate a deterministic integer hash for a string.
 */
export function stringHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Pick a pleasing gradient (two hex colors) deterministically from an input string.
 */
export function pickDeterministicGradient(input: string): [string, string] {
  const gradients: Array<[string, string]> = [
    ["#3B82F6", "#8B5CF6"], // blue → violet
    ["#06B6D4", "#3B82F6"], // cyan → blue
    ["#10B981", "#06B6D4"], // emerald → cyan
    ["#F59E0B", "#EF4444"], // amber → red
    ["#EC4899", "#8B5CF6"], // pink → violet
    ["#F43F5E", "#F59E0B"], // rose → amber
    ["#14B8A6", "#22D3EE"], // teal → light cyan
    ["#A78BFA", "#60A5FA"], // violet → light blue
  ];
  const index = stringHash(input) % gradients.length;
  return gradients[index];
}

/**
 * Build a CSS linear-gradient background string for a given input.
 */
export function buildGradientCSS(input: string): string {
  const [from, to] = pickDeterministicGradient(input);
  return `linear-gradient(135deg, ${from}, ${to})`;
}
