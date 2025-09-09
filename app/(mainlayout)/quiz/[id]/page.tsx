import { use } from "react";
import { QuizDetails } from "@/components/quiz/quiz-details";

export default function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <QuizDetails data-oid="itl3bfb" id={id} />;
}
