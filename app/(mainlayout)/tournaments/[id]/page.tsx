import type { Metadata } from "next";
import { use } from "react";
import { TournamentDetail } from "@/components/tournaments/tournament-detail";

export const metadata: Metadata = {
  title: "Tournament Details | QuizHub",
  description: "View details, rules, and standings for this quiz tournament.",
};

export default function TournamentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <TournamentDetail data-oid="0a:8g3s" id={id} />;
}
