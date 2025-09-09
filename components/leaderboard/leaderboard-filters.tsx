"use client";

import { Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LeaderboardFiltersProps {
  timeFilter: string;
  setTimeFilter: (filter: string) => void;
  categoryFilter: string;
  setCategoryFilter: (filter: string) => void;
}

export function LeaderboardFilters({
  timeFilter,
  setTimeFilter,
  categoryFilter,
  setCategoryFilter,
}: LeaderboardFiltersProps) {
  return (
    <div
      className="mb-6 flex flex-wrap items-center justify-between gap-2"
      data-oid="7zn9a55"
    >
      <div className="flex flex-wrap items-center gap-2" data-oid="2uf:2x8">
        <Button
          data-oid="cri--3n"
          onClick={() => setTimeFilter("all-time")}
          size="sm"
          variant={timeFilter === "all-time" ? "default" : "outline"}
        >
          All Time
        </Button>
        <Button
          data-oid="66zlxj6"
          onClick={() => setTimeFilter("monthly")}
          size="sm"
          variant={timeFilter === "monthly" ? "default" : "outline"}
        >
          <Calendar className="mr-2 h-4 w-4" data-oid="qr7:a.e" />
          Monthly
        </Button>
        <Button
          data-oid="3iztq4v"
          onClick={() => setTimeFilter("weekly")}
          size="sm"
          variant={timeFilter === "weekly" ? "default" : "outline"}
        >
          <Calendar className="mr-2 h-4 w-4" data-oid="3dimvq8" />
          Weekly
        </Button>
      </div>

      <DropdownMenu data-oid="wy23duz">
        <DropdownMenuTrigger asChild data-oid="l3hub_g">
          <Button data-oid="2d6_c69" size="sm" variant="outline">
            {categoryFilter === "all" ? "All Categories" : categoryFilter}
            <ChevronDown className="ml-2 h-4 w-4" data-oid="2g8dlbt" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" data-oid="su66-hr">
          <DropdownMenuItem
            data-oid="de.ra93"
            onClick={() => setCategoryFilter("all")}
          >
            All Categories
          </DropdownMenuItem>
          <DropdownMenuItem
            data-oid="-g:fsn_"
            onClick={() => setCategoryFilter("Science")}
          >
            Science
          </DropdownMenuItem>
          <DropdownMenuItem
            data-oid="5dk5d8l"
            onClick={() => setCategoryFilter("History")}
          >
            History
          </DropdownMenuItem>
          <DropdownMenuItem
            data-oid="m.bi-gj"
            onClick={() => setCategoryFilter("Mathematics")}
          >
            Mathematics
          </DropdownMenuItem>
          <DropdownMenuItem
            data-oid="woss2uu"
            onClick={() => setCategoryFilter("Literature")}
          >
            Literature
          </DropdownMenuItem>
          <DropdownMenuItem
            data-oid="sj6jd3z"
            onClick={() => setCategoryFilter("Sports")}
          >
            Sports
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
