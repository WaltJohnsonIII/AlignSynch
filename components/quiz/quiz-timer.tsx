"use client";

import { Clock } from "lucide-react";

interface QuizTimerProps {
  timeRemaining: number;
  formatTime: (seconds: number) => string;
}

export function QuizTimer({ timeRemaining, formatTime }: QuizTimerProps) {
  const isLowTime = timeRemaining < 60; // Less than a minute
  const isMediumTime = timeRemaining < 180 && timeRemaining >= 60; // Less than 3 minutes

  return (
    <div
      className={`flex items-center gap-2 rounded-full px-3 py-1.5 font-medium font-mono text-sm ${isLowTime ? "animate-pulse bg-red-100 text-red-800" : isMediumTime ? "bg-yellow-100 text-yellow-800" : "bg-muted text-muted-foreground"}`}
      data-oid=".vpps_x"
    >
      <Clock
        className={`h-4 w-4 ${isLowTime ? "text-red-600" : isMediumTime ? "text-yellow-600" : ""}`}
        data-oid="20m4o-o"
      />

      <span data-oid="nx6yf2r">{formatTime(timeRemaining)}</span>
    </div>
  );
}
