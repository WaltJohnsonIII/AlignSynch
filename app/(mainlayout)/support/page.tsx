import type { Metadata } from "next";
import { SupportPage } from "@/components/support/support-page";

export const metadata: Metadata = {
  title: "Support - QuizHub",
  description: "Get help and support for your QuizHub  account",
};

export default function Support() {
  return <SupportPage data-oid="mkv5.y9" />;
}
