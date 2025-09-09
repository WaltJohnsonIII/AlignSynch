"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TournamentFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function TournamentFilters({
  activeFilter,
  setActiveFilter,
}: TournamentFiltersProps) {
  return (
    <div className="flex items-center space-x-4" data-oid="qu2w0z7">
      <Select
        data-oid="vr5l8k1"
        onValueChange={setActiveFilter}
        value={activeFilter}
      >
        <SelectTrigger className="w-[180px]" data-oid="3xrd2j:">
          <SelectValue data-oid="3mnu8to" placeholder="Filter tournaments" />
        </SelectTrigger>
        <SelectContent data-oid="5s38ieb">
          <SelectItem data-oid="i8q58:f" value="all">
            All Tournaments
          </SelectItem>
          <SelectItem data-oid="7k-.02v" value="upcoming">
            Upcoming
          </SelectItem>
          <SelectItem data-oid="hlfkpb5" value="ongoing">
            Ongoing
          </SelectItem>
          <SelectItem data-oid="whqslpq" value="completed">
            Completed
          </SelectItem>
          <SelectItem data-oid="06lqruj" value="registration">
            Registration Open
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
