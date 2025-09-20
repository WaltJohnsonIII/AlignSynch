"use client";

import type React from "react";
import { cn, buildGradientCSS, getInitials } from "@/lib/utils";

export interface GradientImageProps {
  name?: string | null;
  seed?: string | null;
  width?: number;
  height?: number;
  rounded?: boolean;
  className?: string;
  children?: React.ReactNode;
  textClassName?: string;
  title?: string;
}

export function GradientImage({
  name,
  seed,
  width = 40,
  height = 40,
  rounded = true,
  className,
  children,
  textClassName,
  title,
}: GradientImageProps) {
  const basis = seed || name || "placeholder";
  const style: React.CSSProperties = {
    width,
    height,
    background: buildGradientCSS(basis),
  };

  const text = children ?? getInitials(name);

  return (
    <div
      aria-label={typeof title === "string" ? title : undefined}
      className={cn(
        "flex items-center justify-center font-medium text-white",
        rounded ? "rounded-full" : "rounded-md",
        className
      )}
      role="img"
      style={style}
      title={typeof title === "string" ? title : undefined}
    >
      <span className={cn("select-none", textClassName)}>{text}</span>
    </div>
  );
}
