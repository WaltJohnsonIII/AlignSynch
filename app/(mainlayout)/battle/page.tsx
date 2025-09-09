import type { Metadata } from "next";
import { BattlePage } from "@/components/battle/battle-page";

export const metadata: Metadata = {
  title: "Quiz Battle | QuizHub",
  description: "Challenge friends or random players to real-time quiz battles",
};

export default function Battle() {
  return <BattlePage data-oid="9ur:44j" />;
}
