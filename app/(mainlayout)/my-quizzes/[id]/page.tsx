import { QuizDetails } from "@/components/my-quizzes/quiz-details";

export default function QuizDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return <QuizDetails data-oid="j0z68f_" id={params.id} />;
}
