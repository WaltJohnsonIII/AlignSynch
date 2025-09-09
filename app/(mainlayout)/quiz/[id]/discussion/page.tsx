import { use } from "react";
import { QuizDiscussion } from "@/components/quiz/quiz-discustion";

export default function QuizDiscussionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return <QuizDiscussion data-oid="ui7xj6f" id={slug} />;
}
