import type { Metadata } from "next";
import { LeaderboardPage } from "@/components/leaderboard/leaderboard-page";

export const metadata: Metadata = {
  title: "Leaderboard | QuizHub",
  description: "See who's leading the pack in our global quiz rankings.",
};

export default function LeaderboardRoute() {
  return <LeaderboardPage data-oid="7a0t1zn" />;
}
