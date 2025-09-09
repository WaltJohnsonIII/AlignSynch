import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sample data
const recentQuizzes = [
  {
    id: 1,
    title: "World Geography Challenge",
    plays: 42,
    date: "2 days ago",
    status: "active",
  },
  {
    id: 2,
    title: "Science Quiz: Space Exploration",
    plays: 28,
    date: "5 days ago",
    status: "active",
  },
  {
    id: 3,
    title: "History: Ancient Civilizations",
    plays: 15,
    date: "1 week ago",
    status: "active",
  },
  {
    id: 4,
    title: "Math Puzzles & Problems",
    plays: 8,
    date: "2 weeks ago",
    status: "draft",
  },
];

interface RecentQuizzesProps {
  compact?: boolean;
}

export function RecentQuizzes({ compact = false }: RecentQuizzesProps) {
  if (compact) {
    return (
      <div className="space-y-4" data-oid="__mno.i">
        {recentQuizzes.slice(0, 3).map((quiz) => (
          <div
            className="flex items-center justify-between"
            data-oid="5r._z52"
            key={quiz.id}
          >
            <div className="space-y-1" data-oid="2f_kyyb">
              <p className="font-medium text-sm" data-oid="gzeb0z.">
                {quiz.title}
              </p>
              <div
                className="flex items-center gap-2 text-muted-foreground text-xs"
                data-oid="zzdre3a"
              >
                <span data-oid="3sf6r8r">{quiz.plays} plays</span>
                <span data-oid="u799u9v">•</span>
                <span data-oid="nbajh.z">{quiz.date}</span>
              </div>
            </div>
            <Badge
              className="text-xs"
              data-oid="ih-1_58"
              variant={quiz.status === "active" ? "default" : "outline"}
            >
              {quiz.status === "active" ? "Active" : "Draft"}
            </Badge>
          </div>
        ))}
        <Button
          asChild
          className="mt-2 w-full"
          data-oid="1m1pwqj"
          size="sm"
          variant="outline"
        >
          <Link data-oid="0ltbthg" href="/my-quizzes">
            View All Quizzes
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <Card data-oid="ahec.3w">
      <CardHeader data-oid="fr.:hz2">
        <CardTitle data-oid="4v12n9g">Recent Quizzes</CardTitle>
        <CardDescription data-oid="do79nha">
          Your recently created quizzes
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="vm.8x1f">
        <div className="space-y-4" data-oid="far__nz">
          {recentQuizzes.map((quiz) => (
            <div
              className="flex items-center justify-between"
              data-oid="quo4xor"
              key={quiz.id}
            >
              <div className="space-y-1" data-oid="0kz7.kn">
                <p className="font-medium" data-oid=".v4hns2">
                  {quiz.title}
                </p>
                <div
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                  data-oid="87__g-b"
                >
                  <span data-oid="b-v:48h">{quiz.plays} plays</span>
                  <span data-oid="ra_-cr5">•</span>
                  <span data-oid="06gv4k.">{quiz.date}</span>
                </div>
              </div>
              <Badge
                data-oid="xudqaz2"
                variant={quiz.status === "active" ? "default" : "outline"}
              >
                {quiz.status === "active" ? "Active" : "Draft"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter data-oid="q7w36d:">
        <Button asChild className="w-full" data-oid="pkx6p_6" variant="outline">
          <Link data-oid="m7ldw.e" href="/my-quizzes">
            View All Quizzes
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
