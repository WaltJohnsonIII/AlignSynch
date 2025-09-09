import type { Metadata } from "next";
import { TournamentPage } from "@/components/tournaments/tournament-page";

export const metadata: Metadata = {
  title: "Quiz Tournaments | QuizHub",
  description:
    "Participate in exciting quiz tournaments and win amazing prizes.",
};

export default function Tournaments() {
  return <TournamentPage data-oid="ys04rw4" />;
}
