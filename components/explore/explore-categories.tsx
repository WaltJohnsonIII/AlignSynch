"use client";

import {
  Atom,
  BookOpen,
  Brain,
  Calculator,
  Code,
  Film,
  Globe,
  History,
  Lightbulb,
  Music,
  Palette,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ExploreCategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  { id: "all", name: "All Categories", icon: Globe },
  { id: "science", name: "Science", icon: Atom },
  { id: "history", name: "History", icon: History },
  { id: "geography", name: "Geography", icon: Globe },
  { id: "mathematics", name: "Mathematics", icon: Calculator },
  { id: "literature", name: "Literature", icon: BookOpen },
  { id: "sports", name: "Sports", icon: Trophy },
  { id: "music", name: "Music", icon: Music },
  { id: "movies", name: "Movies & TV", icon: Film },
  { id: "art", name: "Art", icon: Palette },
  { id: "technology", name: "Technology", icon: Code },
  { id: "general", name: "General Knowledge", icon: Brain },
  { id: "trivia", name: "Trivia", icon: Lightbulb },
];

export function ExploreCategories({
  selectedCategory,
  setSelectedCategory,
}: ExploreCategoriesProps) {
  return (
    <div className="relative" data-oid="k.ijfyw">
      <ScrollArea className="w-full whitespace-nowrap pb-4" data-oid="c:ucqc5">
        <div className="flex w-max space-x-2 p-1" data-oid="9dtg23m">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                className="flex items-center gap-2 rounded-full px-4"
                data-oid="2589ebd"
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
              >
                <Icon className="h-4 w-4" data-oid="60dbzl-" />
                <span data-oid="emy7ym6">{category.name}</span>
              </Button>
            );
          })}
        </div>
        <ScrollBar
          className="invisible"
          data-oid="_ug-cu2"
          orientation="horizontal"
        />
      </ScrollArea>
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background to-transparent"
        data-oid="-qy8_mi"
      />
    </div>
  );
}
