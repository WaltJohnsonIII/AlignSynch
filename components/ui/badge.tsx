import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-white text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-indigo-500 text-white hover:bg-indigo-600",
        secondary: "border-transparent bg-secondary hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive hover:bg-destructive/80",
        success:
          "border-transparent bg-green-400 text-gray-800 hover:bg-green-400/80",
        yellow: "border-transparent bg-yellow-500 hover:bg-yellow-500/80",
        blue: "border-transparent bg-blue-500 hover:bg-blue-500/80",
        purple: "border-transparent bg-purple-500 hover:bg-purple-500/80",
        warning: "border-transparent bg-orange-500 hover:bg-orange-500/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
      data-oid="1godmlu"
    />
  );
}

export { Badge, badgeVariants };
