import type { Metadata } from "next";
import { BattlePage } from "@/components/battle/battle-page";
import { withBrand } from "@/lib/app-config";

export const metadata: Metadata = {
  title: withBrand("Quiz Battle"),
  description: "Challenge friends or random players to real-time quiz battles",
};

export default function Battle() {
  return <BattlePage data-oid="9ur:44j" />;
}
