"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/footer";
import { FeaturedTournament } from "./featured-tournament";
import { TournamentCategories } from "./tournament-categories";
import { TournamentCta } from "./tournament-cta";
import { TournamentFilters } from "./tournament-filters";
import { TournamentHowItWorks } from "./tournament-how-it-works";
import { TournamentList } from "./tournament-list";
import { TournamentTestimonials } from "./tournament-testimonials";

export function TournamentPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <>
      <div className="container mx-auto" data-oid="d0g9jae">
        <h1 className="mb-2 font-bold text-3xl" data-oid="p_xoc2h">
          Quiz Tournaments
        </h1>
        <p className="mb-8 text-muted-foreground" data-oid="7dntbeo">
          Compete against other quiz enthusiasts and win amazing prizes
        </p>

        <FeaturedTournament data-oid="_ew8aye" />

        <div className="mt-12" data-oid="olbf6q3">
          <div
            className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center"
            data-oid="jwzq966"
          >
            <h2 className="font-bold text-2xl" data-oid="w5lw9ij">
              All Tournaments
            </h2>
            <TournamentFilters
              activeFilter={activeFilter}
              data-oid="s1c4ba8"
              setActiveFilter={setActiveFilter}
            />
          </div>

          <TournamentCategories
            activeCategory={activeCategory}
            data-oid="4wqiq7s"
            setActiveCategory={setActiveCategory}
          />

          <TournamentList
            activeCategory={activeCategory}
            activeFilter={activeFilter}
            data-oid="c1f9v_x"
          />
        </div>

        {/* Call to Action section */}
        <TournamentCta data-oid="lkcnuzx" />

        {/* How It Works section */}
        <TournamentHowItWorks data-oid="ktudw38" />

        {/* Testimonials section */}
        <TournamentTestimonials data-oid="tk2tmgx" />
      </div>

      {/* Add the Footer */}
      <Footer data-oid="4watc5v" />
    </>
  );
}
