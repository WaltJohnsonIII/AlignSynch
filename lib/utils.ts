import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name?: string): string {
  if (!name) return "";
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  const first = words[0]?.[0] ?? "";
  const last = words.length > 1 ? words[words.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
}

export function hashStringToNumber(input: string, modulo: number): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  const normalized = Math.abs(hash);
  return modulo === 0 ? 0 : normalized % modulo;
}

export function getDeterministicGradient(nameOrKey?: string): [string, string] {
  const palettes: [string, string][] = [
    ["#3B82F6", "#8B5CF6"],
    ["#10B981", "#06B6D4"],
    ["#F59E0B", "#EF4444"],
    ["#EC4899", "#8B5CF6"],
    ["#22C55E", "#3B82F6"],
    ["#F97316", "#F43F5E"],
    ["#06B6D4", "#3B82F6"],
    ["#A78BFA", "#F472B6"],
  ];
  const index = hashStringToNumber(nameOrKey || "default", palettes.length);
  return palettes[index];
}

