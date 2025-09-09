import { Clock, FileQuestion } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { QuizHistoryItem } from "@/lib/data/users";

interface ProfileQuizHistoryProps {
  quizHistory: QuizHistoryItem[];
}

export function ProfileQuizHistory({ quizHistory }: ProfileQuizHistoryProps) {
  const formatTimeSpent = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "hard":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 70) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <Card data-oid=".hy76mu">
      <CardContent className="p-0" data-oid="x7njv:x">
        <div className="divide-y" data-oid="agtwhqv">
          {quizHistory.map((quiz) => (
            <div className="p-4" data-oid="ch:03_m" key={quiz.id}>
              <div
                className="flex items-center justify-between"
                data-oid="45fj9q:"
              >
                <Link
                  className="font-medium hover:underline"
                  data-oid="01-sqjv"
                  href={`/quiz/${quiz.quizId}`}
                >
                  {quiz.quizName}
                </Link>
                <Badge
                  className={getDifficultyColor(quiz.difficulty)}
                  data-oid="zm6wdjr"
                  variant="secondary"
                >
                  {quiz.difficulty}
                </Badge>
              </div>

              <div
                className="mt-2 flex items-center justify-between text-sm"
                data-oid="r_cnq_c"
              >
                <div className="flex items-center gap-2" data-oid="ih.52f8">
                  <Badge data-oid=":-ogekm" variant="outline">
                    {quiz.category}
                  </Badge>
                  <span className="text-muted-foreground" data-oid="f8wdu.i">
                    {formatDate(quiz.completedAt)}
                  </span>
                </div>
                <div
                  className="flex items-center gap-1.5 text-muted-foreground"
                  data-oid="0l7wf9o"
                >
                  <Clock className="h-3.5 w-3.5" data-oid="brsvbxz" />
                  <span data-oid="l0uky8r">
                    {formatTimeSpent(quiz.timeSpent)}
                  </span>
                </div>
              </div>

              <div className="mt-3" data-oid="qm43ht8">
                <div
                  className="mb-1 flex items-center justify-between text-sm"
                  data-oid="anobu1i"
                >
                  <span data-oid="_tkrhm1">Score</span>
                  <span data-oid="xgcvsoa">
                    {quiz.score} / {quiz.maxScore} (
                    {Math.round((quiz.score / quiz.maxScore) * 100)}%)
                  </span>
                </div>
                <Progress
                  className={`h-2 ${getScoreColor(quiz.score, quiz.maxScore)}`}
                  data-oid=":ahxu6p"
                  value={(quiz.score / quiz.maxScore) * 100}
                />
              </div>
            </div>
          ))}

          {quizHistory.length === 0 && (
            <div
              className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground"
              data-oid="x9so6du"
            >
              <FileQuestion
                className="mb-2 h-10 w-10 opacity-20"
                data-oid="4n1drx1"
              />

              <p data-oid="orftsso">No quiz history</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
