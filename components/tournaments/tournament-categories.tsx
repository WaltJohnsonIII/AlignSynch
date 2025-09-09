"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface TournamentCategoriesProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export function TournamentCategories({
  activeCategory,
  setActiveCategory,
}: TournamentCategoriesProps) {
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "general", name: "General Knowledge" },
    { id: "science", name: "Science" },
    { id: "history", name: "History" },
    { id: "geography", name: "Geography" },
    { id: "entertainment", name: "Entertainment" },
    { id: "sports", name: "Sports" },
    { id: "literature", name: "Literature" },
    { id: "technology", name: "Technology" },
    { id: "art", name: "Art & Culture" },
  ];

  return (
    <div className="mb-8" data-oid=":7zic1-">
      <ScrollArea className="w-full whitespace-nowrap" data-oid="hhxrr0s">
        <div className="flex space-x-2 pb-2" data-oid="h0n793j">
          {categories.map((category) => (
            <Button
              className="rounded-full"
              data-oid="km4xk-9"
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              size="sm"
              variant={activeCategory === category.id ? "default" : "outline"}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar data-oid="ml2yarr" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
