"use client";

import { useState } from "react";
import { categories, searchTips, tips } from "@/data/creator-tips-data";
import CreatorTipsCategories from "./creator-tips-categories";
import CreatorTipsCta from "./creator-tips-cta";
import CreatorTipsHero from "./creator-tips-hero";
import FeaturedTips from "./featured-tips";
import TipsGrid from "./tips-grid";

export default function CreatorTipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTips = searchQuery
    ? searchTips(searchQuery)
    : selectedCategory
      ? tips.filter((tip) => tip.category === selectedCategory)
      : tips;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setSearchQuery("");
  };

  return (
    <div className="container mx-auto" data-oid="5jjh7ce">
      <CreatorTipsHero data-oid="qxm06sb" onSearch={handleSearch} />

      <CreatorTipsCategories
        categories={categories}
        data-oid="vdtx2u9"
        onSelectCategory={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      {!(searchQuery || selectedCategory) && (
        <FeaturedTips data-oid=":7zzwpg" />
      )}

      <TipsGrid
        data-oid="74n2205"
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        tips={filteredTips}
      />

      <CreatorTipsCta data-oid="z64f80:" />
    </div>
  );
}
