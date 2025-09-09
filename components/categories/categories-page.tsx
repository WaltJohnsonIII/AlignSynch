"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CategoriesCTA } from "@/components/categories/categories-cta";
import { CategoriesHowItWorks } from "@/components/categories/categories-how-it-works";
import { Footer } from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/categories";

export function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div data-oid="f7tmjpz">
      <div className="container mx-auto pb-10" data-oid="wz8:c23">
        <div className="mb-8" data-oid="93v7l_8">
          <h1 className="mb-2 font-bold text-3xl" data-oid="d5d9xyc">
            Quiz Categories
          </h1>
          <p className="text-muted-foreground" data-oid="4qwatl8">
            Browse all quiz categories and find quizzes that match your
            interests.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-8 max-w-md" data-oid="hg33221">
          <Search
            className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
            data-oid="r6:xx.l"
          />

          <Input
            className="pl-10"
            data-oid="2._lgs1"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search categories..."
            value={searchQuery}
          />
        </div>

        {/* Categories grid */}
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6"
          data-oid="69naa3g"
        >
          {filteredCategories.map(({ count, id, image, name, slug }) => (
            <Link
              className={
                "relative flex h-[200px] items-end justify-between overflow-hidden rounded-xl text-white shadow-sm"
              }
              data-oid="2lbne23"
              href={`/categories/${slug}`}
              key={id}
            >
              <Image
                alt=""
                className="absolute inset-0 size-full object-cover object-center"
                data-oid="1s_ahid"
                src={image}
              />

              <div
                className="absolute top-2 right-2 rounded-full bg-white/40 px-2 py-0.5 font-medium text-xs backdrop-blur-sm"
                data-oid="d.a0_z4"
              >
                {count}
              </div>
              <span
                className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1.5 font-semibold text-neutral-100 text-sm tracking-tight backdrop-blur-sm"
                data-oid="1qu1rrq"
              >
                {name}
              </span>
            </Link>
          ))}
        </div>

        {/* No results */}
        {filteredCategories.length === 0 && (
          <div className="py-12 text-center" data-oid="e:z_9c5">
            <div
              className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted"
              data-oid="iusyvcz"
            >
              <Search
                className="h-8 w-8 text-muted-foreground"
                data-oid="nw.8hgu"
              />
            </div>
            <h3 className="mb-2 font-semibold text-xl" data-oid="l2pxap6">
              No categories found
            </h3>
            <p
              className="mx-auto max-w-md text-muted-foreground"
              data-oid="jafi1_3"
            >
              We couldn't find any categories matching "{searchQuery}". Try a
              different search term.
            </p>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <CategoriesCTA data-oid="l.ow468" />

      {/* How It Works Section */}
      <CategoriesHowItWorks data-oid="-ko1h6o" />

      {/* Footer */}
      <Footer data-oid="94zhd28" />
    </div>
  );
}
