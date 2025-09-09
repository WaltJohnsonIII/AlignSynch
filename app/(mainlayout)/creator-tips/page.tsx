import type { Metadata } from "next";
import CreatorTipsPage from "@/components/creator-tips/creator-tips-page";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Quiz Creator Tips - Learn How to Create Better Quizzes",
  description:
    "Discover tips, strategies, and best practices for creating engaging and effective quizzes.",
};

export default function CreatorTips() {
  return (
    <>
      <CreatorTipsPage data-oid="qhbhgor" />
      <Footer data-oid="oaj.v0c" />
    </>
  );
}
