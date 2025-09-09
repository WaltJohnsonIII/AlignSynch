"use client";

import { Grid3X3, List, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ExploreHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export function ExploreHeader({
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
}: ExploreHeaderProps) {
  return (
    <div className="space-y-4" data-oid="or1f-0a">
      <div
        className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        data-oid="bp2wnd9"
      >
        <div data-oid="1y:bdb2">
          <h1 className="font-bold text-3xl tracking-tight" data-oid="2uuq7y0">
            Explore Quizzes
          </h1>
          <p className="mt-1 text-muted-foreground" data-oid="jm5hr0c">
            Discover and play quizzes from our community
          </p>
        </div>
      </div>

      <div
        className="flex flex-col gap-4 md:flex-row md:items-center"
        data-oid="28ei7yj"
      >
        <div className="relative flex-1" data-oid="ctqwh2n">
          <Search
            className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
            data-oid="4r42cg7"
          />

          <Input
            className="pl-10"
            data-oid="udokbje"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search quizzes by title, category, or creator..."
            value={searchQuery}
          />
        </div>

        <div
          className="flex items-center rounded-md border bg-muted/40"
          data-oid="m9.c_zl"
        >
          <Button
            className="h-8 w-8"
            data-oid="-3qdvzo"
            onClick={() => setViewMode("grid")}
            size="icon"
            variant={viewMode === "grid" ? "secondary" : "ghost"}
          >
            <Grid3X3 className="h-4 w-4" data-oid="w0nqmbn" />
            <span className="sr-only" data-oid="d38x9lv">
              Grid view
            </span>
          </Button>
          <Button
            className="h-8 w-8"
            data-oid="wv462mt"
            onClick={() => setViewMode("list")}
            size="icon"
            variant={viewMode === "list" ? "secondary" : "ghost"}
          >
            <List className="h-4 w-4" data-oid="z7orrjq" />
            <span className="sr-only" data-oid="v4730or">
              List view
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
