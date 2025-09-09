"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface QuizHeaderProps {
  title: string;
  category: string;
  difficulty: string;
  isReviewMode?: boolean;
}

export function QuizHeader({
  title,
  category,
  difficulty,
  isReviewMode = false,
}: QuizHeaderProps) {
  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "success";
      case "medium":
        return "yellow";
      case "hard":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <div className="mb-8" data-oid="h_uhfp.">
      <Button
        asChild
        className="-ml-2 mb-4 hover:bg-transparent"
        data-oid="d602c:4"
        size="sm"
        variant="ghost"
      >
        <Link
          className="flex items-center gap-1 text-muted-foreground"
          data-oid="9s2r6ow"
          href="/explore"
        >
          <ArrowLeft className="h-4 w-4" data-oid="bysm9hl" />
          Back to Explore
        </Link>
      </Button>

      <h1 className="mb-3 font-bold text-2xl md:text-3xl" data-oid="hxd8zng">
        {isReviewMode ? `Review: ${title}` : title}
      </h1>

      <div className="flex flex-wrap gap-2" data-oid="6._so2u">
        <Badge
          className="px-3 py-1 text-sm"
          data-oid="3piok7z"
          variant="outline"
        >
          {category}
        </Badge>
        <Badge
          className="px-3 py-1 text-sm"
          data-oid="s-jv0g."
          variant={getDifficultyVariant(difficulty)}
        >
          {difficulty}
        </Badge>
        {isReviewMode && (
          <Badge
            className="px-3 py-1 text-sm"
            data-oid="dx4o94b"
            variant="secondary"
          >
            Review Mode
          </Badge>
        )}
      </div>
    </div>
  );
}
