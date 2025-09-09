import { QuizStatistics } from "@/components/my-quizzes/quiz-statistics";

export default function QuizStatisticsPage({
  params,
}: {
  params: { id: string };
}) {
  return <QuizStatistics data-oid="5d-ff73" id={params.id} />;
}
