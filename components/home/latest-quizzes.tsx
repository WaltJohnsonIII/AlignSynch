"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Sample quiz data
const quizzes = [
  {
    id: 1,
    title: "World Geography Challenge",
    image: "/world-map-quiz.png",
    category: "Geography",
    difficulty: "Medium",
  },
  {
    id: 2,
    title: "Science Quiz: Space Exploration",
    image: "/space-exploration-quiz.png",
    category: "Science",
    difficulty: "Hard",
  },
  {
    id: 3,
    title: "History: Ancient Civilizations",
    image: "/ancient-civilizations-quiz.png",
    category: "History",
    difficulty: "Medium",
  },
  {
    id: 4,
    title: "Mathematical Puzzles",
    image: "/quiz/q9.png",
    category: "Mathematics",
    difficulty: "Hard",
  },
];

export function LatestQuizzes() {
  // Get difficulty badge variant
  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "success";
      case "Medium":
        return "yellow";
      case "Hard":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <section
      className="space-y-6 bg-indigo-50 px-4 py-10 xl:px-8 dark:bg-slate-900"
      data-oid="3yvzp.9"
    >
      <h2 className="font-bold text-2xl tracking-tight" data-oid="c5k0qak">
        Latest Quizzes
      </h2>

      <div
        className="grid xxl:grid-cols-4 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-oid="is15ntz"
      >
        {quizzes.map((quiz) => (
          <Card
            className="overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-600"
            data-oid="8yf7jmh"
            key={quiz.id}
          >
            {/* Image with overlay */}
            <div className="relative h-48" data-oid="sd2hs54">
              <Image
                alt={quiz.title}
                className="h-full w-full object-cover"
                data-oid="i1360m3"
                height={350}
                src={quiz.image || "/placeholder.svg"}
                width={600}
              />

              <div
                className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4"
                data-oid="-c12p_4"
              >
                <div className="w-full" data-oid="m0zlzf-">
                  <div
                    className="mb-2 flex items-center justify-between"
                    data-oid="6t_cs2u"
                  >
                    <Badge
                      className="font-medium"
                      data-oid="2w4-zi3"
                      variant={getDifficultyVariant(quiz.difficulty)}
                    >
                      {quiz.difficulty}
                    </Badge>
                  </div>
                  <h3
                    className="line-clamp-2 font-semibold text-white"
                    data-oid="4v38q.7"
                  >
                    {quiz.title}
                  </h3>
                </div>
              </div>
            </div>

            <CardContent
              className="flex items-center justify-between p-4 xl:pt-6"
              data-oid="wyt1:zz"
            >
              <Badge
                className="bg-slate-50 dark:bg-slate-800"
                data-oid="t_jg573"
                variant="outline"
              >
                {quiz.category}
              </Badge>

              <Button asChild data-oid="sj35hzi" size="sm">
                <Link data-oid="y:jqyxc" href={`/quiz/${quiz.id}`}>
                  Play Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center" data-oid="328aggc">
        <Button asChild data-oid="_33jus." variant="outline">
          <Link data-oid="skrub4l" href="/explore">
            View All Quizzes
          </Link>
        </Button>
      </div>
    </section>
  );
}
