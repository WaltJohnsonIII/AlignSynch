"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { FeaturedQuizzes } from "../home/featured-quizzes";
import { ExploreCategories } from "./explore-categories";
import { ExploreFilters } from "./explore-filters";
import { ExploreHeader } from "./explore-header";
import { ExploreQuizList } from "./explore-quiz-list";

export function ExploreQuizzesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeFilters, setActiveFilters] = useState({
    difficulty: "all",
    sortBy: "popular",
    timeRange: "all",
  });

  // Reset to first page when filters change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory, activeFilters]);

  return (
    <div className="space-y-4 xl:space-y-6" data-oid="ra9_r4_">
      <ExploreHeader
        data-oid="cxosk:r"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setViewMode={setViewMode}
        viewMode={viewMode}
      />

      <ExploreCategories
        data-oid="_-gn.qs"
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {selectedCategory === "all" && (
        <>
          <FeaturedQuizzes data-oid="pecw6tj" />
          <Separator className="my-8" data-oid="ebn14sl" />
        </>
      )}

      <div className="flex flex-col gap-6 md:flex-row" data-oid="g4gb5:t">
        <ExploreFilters
          activeFilters={activeFilters}
          data-oid="3-j_l38"
          setActiveFilters={setActiveFilters}
        />

        <div className="flex-1" data-oid="w5h83na">
          <ExploreQuizList
            category={selectedCategory}
            data-oid=":4oz21_"
            filters={activeFilters}
            searchQuery={searchQuery}
            viewMode={viewMode}
          />
        </div>
      </div>
    </div>
  );
}
