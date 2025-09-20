import type { Metadata } from "next";
import { LeaderboardPage } from "@/components/leaderboard/leaderboard-page";
import { withBrand } from "@/lib/app-config";

export const metadata: Metadata = {
  title: withBrand("Leaderboard"),
  description: "See who's leading the pack in our global quiz rankings.",
};

export default function LeaderboardRoute() {
  return <LeaderboardPage data-oid="7a0t1zn" />;
}
