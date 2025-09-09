import { use } from "react";
import { QuizPlay } from "@/components/quiz/quiz-play";

export default function QuizPlayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <QuizPlay data-oid="56i8fmz" id={id} />;
}
