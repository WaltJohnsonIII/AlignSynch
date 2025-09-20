"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn, getInitials, buildGradientCSS } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    ref={ref}
    {...props}
    data-oid="cah0l2n"
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, alt, ...props }, ref) => {
  return (
    <AvatarPrimitive.Image
      alt={alt}
      className={cn("aspect-square h-full w-full", className)}
      onError={(e) => {
        // Hide broken image; Fallback will be visible
        const target = e.currentTarget as HTMLImageElement;
        target.style.display = "none";
      }}
      ref={ref}
      {...props}
      data-oid="z5:1rol"
    />
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  name?: string | null;
}

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, children, name, style, ...props }, ref) => {
  const initials = children ?? getInitials(name);
  const gradientStyle: React.CSSProperties = {
    background: buildGradientCSS(String(name || initials || "avatar")),
    ...style,
  };
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full text-white",
        className
      )}
      ref={ref}
      style={gradientStyle}
      {...props}
      data-oid="hygk570"
    >
      {initials}
    </AvatarPrimitive.Fallback>
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
