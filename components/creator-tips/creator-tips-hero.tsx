"use client";

import { Search } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface CreatorTipsHeroProps {
  onSearch: (query: string) => void;
}

export default function CreatorTipsHero({ onSearch }: CreatorTipsHeroProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <div
      className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-700 p-8"
      data-oid="wpalr01"
    >
      <div
        className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
        data-oid=".v6pqvy"
      />

      <div
        className="relative mx-auto max-w-3xl text-center"
        data-oid="izp0.ul"
      >
        <h1
          className="mb-4 font-bold text-3xl text-white md:text-4xl"
          data-oid="6v0lrfi"
        >
          Quiz Creator Tips & Best Practices
        </h1>

        <p className="mb-8 text-lg text-white/90" data-oid="f:8:td7">
          Discover strategies, techniques, and insights to create more engaging
          and effective quizzes
        </p>

        <form
          className="relative mx-auto max-w-md"
          data-oid="azi:b_o"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full rounded-full px-4 py-3 pr-4 pl-12 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-slate-900"
            data-oid="ki32z2-"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for tips..."
            type="text"
            value={searchInput}
          />

          <button
            className="-translate-y-1/2 absolute top-1/2 left-3 transform text-gray-500 dark:text-white"
            data-oid="bsy5if6"
            type="submit"
          >
            <Search data-oid="akwzpka" size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
