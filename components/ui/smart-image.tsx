"use client";

import Image from "next/image";
import { useState } from "react";
import { useFeatureFlag } from "@/hooks/use-feature-flag";
import { cn, getDeterministicGradient, getInitials } from "@/lib/utils";

interface SmartImageProps {
  src?: string | null;
  alt: string;
  name?: string;
  type?: "avatar" | "generic";
  placeholderType?: "svg" | "css";
  className?: string;
  width?: number;
  height?: number;
  [key: string]: any;
}

export function SmartImage({
  src,
  alt,
  name,
  type = "generic",
  placeholderType = "css",
  className,
  width = 40,
  height = 40,
  ...props
}: SmartImageProps) {
  const [imageError, setImageError] = useState(false);
  const isFeatureEnabled = useFeatureFlag("smart-image-replacement");

  const shouldShowFallback = isFeatureEnabled && (!src || imageError);

  if (shouldShowFallback) {
    const initials = getInitials(name);
    const gradientColors =
      type === "avatar"
        ? getDeterministicGradient(name || initials || "avatar")
        : ["#6B7280", "#9CA3AF"];

    if (placeholderType === "svg") {
      const radius = type === "avatar" ? Math.min(width, height) : 0;
      const textSize =
        type === "avatar"
          ? Math.max(10, Math.floor(Math.min(width, height) / 2.5))
          : 12;
      const svg = encodeURIComponent(`
        <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>
          <defs>
            <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
              <stop offset='0%' stop-color='${gradientColors[0]}' />
              <stop offset='100%' stop-color='${gradientColors[1]}' />
            </linearGradient>
          </defs>
          <rect width='100%' height='100%' rx='${radius}' ry='${radius}' fill='url(#g)' />
          ${
            type === "avatar"
              ? `<text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Inter, system-ui, sans-serif' font-size='${textSize}' font-weight='600'>${initials || "?"}</text>`
              : ""
          }
        </svg>
      `);
      return (
        <Image
          alt={alt}
          className={className}
          height={height}
          onError={() => setImageError(true)}
          src={`data:image/svg+xml;charset=utf-8,${svg}`}
          width={width}
          {...props}
        />
      );
    }

    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-gradient-to-br font-medium text-white",
          type === "avatar" ? "text-sm" : "text-xs",
          className
        )}
        style={{
          width,
          height,
          background: `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        }}
        {...props}
      >
        {type === "avatar" ? initials || "?" : null}
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      height={height}
      onError={() => setImageError(true)}
      src={src || "/placeholder.svg"}
      width={width}
      {...props}
    />
  );
}
