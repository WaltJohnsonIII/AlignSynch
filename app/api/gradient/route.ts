import { NextResponse } from "next/server";

function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

const PALETTE: Array<[string, string]> = [
  ["#3B82F6", "#8B5CF6"],
  ["#06B6D4", "#3B82F6"],
  ["#10B981", "#06B6D4"],
  ["#F59E0B", "#EF4444"],
  ["#EC4899", "#8B5CF6"],
  ["#F43F5E", "#F59E0B"],
  ["#14B8A6", "#22D3EE"],
  ["#A78BFA", "#60A5FA"],
];

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const seed = searchParams.get("seed") || "placeholder";
  const width = Number(searchParams.get("width") || 200);
  const height = Number(searchParams.get("height") || 200);
  const idx = hash(seed) % PALETTE.length;
  const [from, to] = PALETTE[idx];

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}" />
      <stop offset="100%" stop-color="${to}" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)" rx="${Math.min(width, height) / 8}" />
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
