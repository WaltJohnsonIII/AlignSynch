import { FileQuestion } from "lucide-react";
import type { Tip } from "@/data/creator-tips-data";
import TipCard from "./tip-card";

interface TipsGridProps {
  tips: Tip[];
  searchQuery: string;
  selectedCategory: string | null;
}

export default function TipsGrid({
  tips,
  searchQuery,
  selectedCategory,
}: TipsGridProps) {
  if (tips.length === 0) {
    return (
      <div className="py-12 text-center" data-oid="t7l.05r">
        <FileQuestion
          className="mx-auto mb-4 text-gray-400"
          data-oid="q61ljga"
          size={48}
        />

        <h3
          className="mb-2 font-medium text-gray-900 text-xl dark:text-gray-100"
          data-oid="_08:bja"
        >
          No tips found
        </h3>
        <p className="text-gray-500" data-oid="lg10o-i">
          {searchQuery
            ? `No results for "${searchQuery}". Try a different search term.`
            : selectedCategory
              ? "No tips in this category yet. Check back soon!"
              : "No tips available at the moment. Check back soon!"}
        </p>
      </div>
    );
  }

  return (
    <div className="mb-12" data-oid="3jlf53e">
      <h2 className="mb-6 font-bold text-2xl" data-oid="k0ejp7o">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : selectedCategory
            ? `${selectedCategory
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")} Tips`
            : "All Tips"}
      </h2>

      <div
        className="grid grid-cols-1 xxl:grid-cols-4 gap-6 md:grid-cols-2 lg:grid-cols-3"
        data-oid="q.difyb"
      >
        {tips.map((tip) => (
          <TipCard data-oid="iq:-4rd" key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
}
