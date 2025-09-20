"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { useFeatureFlag } from "@/hooks/use-feature-flag";
import { cn, getInitials } from "@/lib/utils";

interface SmartImageProps {
  src?: string | StaticImageData | null;
  alt: string;
  name?: string;
  type?: "avatar" | "generic";
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
      type === "avatar" ? ["#3B82F6", "#8B5CF6"] : ["#6B7280", "#9CA3AF"];

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
        {initials || "?"}
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
