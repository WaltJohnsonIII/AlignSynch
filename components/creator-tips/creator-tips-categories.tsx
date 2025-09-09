"use client";

import type { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

interface CreatorTipsCategoriesProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export default function CreatorTipsCategories({
  categories,
  selectedCategory,
  onSelectCategory,
}: CreatorTipsCategoriesProps) {
  // Dynamically get the icon component
  const getIconComponent = (iconName: string): LucideIcon => {
    return (
      (LucideIcons[iconName as keyof typeof LucideIcons] as LucideIcon) ||
      LucideIcons.HelpCircle
    );
  };

  return (
    <div className="mb-12" data-oid="5eq3ynx">
      <h2 className="mb-6 text-center font-bold text-2xl" data-oid="ytusnp6">
        Browse by Category
      </h2>

      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        data-oid="xe14-5x"
      >
        {categories.map((category) => {
          const Icon = getIconComponent(category.icon);
          const isSelected = selectedCategory === category.id;

          return (
            <button
              className={cn(
                "flex items-start rounded-lg p-4 transition-all",
                "border hover:border-purple-300 hover:shadow-md",
                isSelected
                  ? "border-purple-500 bg-purple-500/20"
                  : "border-gray-200 dark:border-gray-700"
              )}
              data-oid="gmyl_.k"
              key={category.id}
              onClick={() => onSelectCategory(isSelected ? null : category.id)}
            >
              <div
                className={cn(
                  "mr-4 rounded-full p-2",
                  isSelected
                    ? "bg-purple-100 text-purple-600"
                    : "bg-gray-100 text-gray-600"
                )}
                data-oid="xw_tu3_"
              >
                <Icon data-oid="5krmfmy" size={24} />
              </div>

              <div className="text-left" data-oid="cclvm0a">
                <h3 className="font-medium" data-oid="kkgfc5:">
                  {category.name}
                </h3>
                <p
                  className="mt-1 text-gray-500 text-sm dark:text-gray-200"
                  data-oid="6y.j4oe"
                >
                  {category.description}
                </p>
                <span
                  className="mt-2 inline-block text-purple-600 text-xs"
                  data-oid="y3cpe_d"
                >
                  {category.count} articles
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedCategory && (
        <button
          className="mx-auto mt-4 flex items-center text-purple-600 text-sm hover:text-purple-800"
          data-oid="x8voxp1"
          onClick={() => onSelectCategory(null)}
        >
          <LucideIcons.X className="mr-1" data-oid="omxc_n2" size={16} />
          Clear filter
        </button>
      )}
    </div>
  );
}
