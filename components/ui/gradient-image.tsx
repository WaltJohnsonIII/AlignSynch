"use client";

import Image from "next/image";

interface GradientImageProps {
  width: number;
  height: number;
  colors: [string, string];
  radius?: number;
}

export function GradientImage({ width, height, colors, radius = 0 }: GradientImageProps) {
  const svg = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stop-color='${colors[0]}' />
          <stop offset='100%' stop-color='${colors[1]}' />
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' rx='${radius}' ry='${radius}' fill='url(#g)' />
    </svg>
  `);
  return (
    <Image alt="Gradient placeholder" height={height} src={`data:image/svg+xml;charset=utf-8,${svg}`} width={width} />
  );
}

