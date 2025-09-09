"use client";

import { motion } from "framer-motion";
import type * as React from "react";
import { cn } from "@/lib/utils";

interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
  valueSize?: number;
  color?: string;
  trailColor?: string;
  animate?: boolean;
}

export function CircularProgress({
  value,
  size = 40,
  strokeWidth = 4,
  showValue = false,
  valueSize = 10,
  color = "hsl(var(--primary))",
  trailColor = "hsl(var(--muted))",
  animate = true,
  className,
  ...props
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
      style={{ width: size, height: size }}
      {...props}
      data-oid="u9l.ybc"
    >
      <svg
        data-oid=".uv06cr"
        fill="none"
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          data-oid="c7til25"
          fill="none"
          r={radius}
          stroke={trailColor}
          strokeWidth={strokeWidth}
        />

        {/* Progress circle */}
        {animate ? (
          <motion.circle
            animate={{ strokeDashoffset }}
            cx={size / 2}
            cy={size / 2}
            data-oid="j_twt:g"
            fill="none"
            initial={{ strokeDashoffset: circumference }}
            r={radius}
            stroke={color}
            strokeDasharray={circumference}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ) : (
          <circle
            cx={size / 2}
            cy={size / 2}
            data-oid="q__99v8"
            fill="none"
            r={radius}
            stroke={color}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        )}
      </svg>
      {showValue && (
        <div
          className="absolute inset-0 flex items-center justify-center font-medium"
          data-oid="ii7otp."
          style={{ fontSize: valueSize }}
        >
          {Math.round(value)}%
        </div>
      )}
    </div>
  );
}
