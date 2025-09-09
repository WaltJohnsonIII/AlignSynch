"use client";

import { Copy, Eye, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Quiz = {
  id: number;
  title: string;
  category: string;
  plays: number;
  rating: number;
  date: string;
  status: string;
  image: string;
};
// Sample data
const quizzes: Quiz[] = [
  {
    id: 1,
    title: "World Geography Challenge",
    category: "Geography",
    plays: 42,
    rating: 4.7,
    date: "2023-05-15",
    status: "active",
    image: "/world-map-quiz.png",
  },
  {
    id: 2,
    title: "Science Quiz: Space Exploration",
    category: "Science",
    plays: 28,
    rating: 4.5,
    date: "2023-05-10",
    status: "active",
    image: "/space-exploration-quiz.png",
  },
  {
    id: 3,
    title: "History: Ancient Civilizations",
    category: "History",
    plays: 15,
    rating: 4.2,
    date: "2023-05-03",
    status: "active",
    image: "/ancient-civilizations-quiz.png",
  },
  {
    id: 4,
    title: "Math Puzzles & Problems",
    category: "Mathematics",
    plays: 8,
    rating: 3.9,
    date: "2023-04-28",
    status: "draft",
    image: "/math-puzzles-quiz.png",
  },
  {
    id: 5,
    title: "Literature: Classic Novels",
    category: "Literature",
    plays: 0,
    rating: 0,
    date: "2023-04-25",
    status: "draft",
    image: "/classic-novels-quiz.png",
  },
];

export function MyQuizzesDashboard() {
  const [activeQuizzes, setActiveQuizzes] = useState(
    quizzes.filter((q) => q.status === "active")
  );
  const [draftQuizzes, setDraftQuizzes] = useState(
    quizzes.filter((q) => q.status === "draft")
  );

  return (
    <div className="space-y-6" data-oid="b14egxl">
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="9jwo3q-"
      >
        <Card data-oid="9ml4i0z">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="zbovwcv"
          >
            <CardTitle className="font-medium text-sm" data-oid="9w9m:cr">
              Total Quizzes
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="q5x50p0">
            <div className="font-bold text-2xl" data-oid="fmymmpk">
              {quizzes.length}
            </div>
            <p className="text-muted-foreground text-xs" data-oid="21qil73">
              Across all categories
            </p>
          </CardContent>
        </Card>

        <Card data-oid="l5xvv.i">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="1_e4_s4"
          >
            <CardTitle className="font-medium text-sm" data-oid="qdmkbi8">
              Active Quizzes
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="g2l1kyj">
            <div className="font-bold text-2xl" data-oid="2_aho9f">
              {activeQuizzes.length}
            </div>
            <p className="text-muted-foreground text-xs" data-oid=".mn08tr">
              Published and visible
            </p>
          </CardContent>
        </Card>

        <Card data-oid="bd1al53">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="o3-fd80"
          >
            <CardTitle className="font-medium text-sm" data-oid="4m0qo47">
              Total Plays
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="7rxu1r_">
            <div className="font-bold text-2xl" data-oid="32v-rdm">
              {quizzes.reduce((sum, quiz) => sum + quiz.plays, 0)}
            </div>
            <p className="text-muted-foreground text-xs" data-oid="wk473bm">
              Across all quizzes
            </p>
          </CardContent>
        </Card>

        <Card data-oid="71rhnmf">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="3ic9j6a"
          >
            <CardTitle className="font-medium text-sm" data-oid="asp61t_">
              Average Rating
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="8k:srch">
            <div className="font-bold text-2xl" data-oid="4zs40gi">
              {(
                quizzes.reduce((sum, quiz) => sum + quiz.rating, 0) /
                quizzes.filter((q) => q.rating > 0).length
              ).toFixed(1)}
            </div>
            <p className="text-muted-foreground text-xs" data-oid="4iit5fm">
              Out of 5.0
            </p>
          </CardContent>
        </Card>
      </div>

      <Card data-oid="yjhpupt">
        <CardHeader data-oid="0_83x0:">
          <CardTitle data-oid="k.4c2rv">My Quizzes</CardTitle>
          <CardDescription data-oid="t0z6dgr">
            Manage and monitor all your created quizzes
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="t4jggex">
          <Tabs className="space-y-4" data-oid="e8csd5q" defaultValue="all">
            <TabsList data-oid="c-sm5ol">
              <TabsTrigger data-oid="zdr:gw." value="all">
                All Quizzes
              </TabsTrigger>
              <TabsTrigger data-oid="v3qga_7" value="active">
                Active
              </TabsTrigger>
              <TabsTrigger data-oid="3a5pzvm" value="draft">
                Drafts
              </TabsTrigger>
            </TabsList>

            <TabsContent className="space-y-4" data-oid="z5:vhjg" value="all">
              {quizzes.map((quiz) => (
                <QuizCard data-oid="ty7c8p6" key={quiz.id} quiz={quiz} />
              ))}
            </TabsContent>

            <TabsContent
              className="space-y-4"
              data-oid="a5eo8.2"
              value="active"
            >
              {activeQuizzes.map((quiz) => (
                <QuizCard data-oid="l9x53od" key={quiz.id} quiz={quiz} />
              ))}
            </TabsContent>

            <TabsContent className="space-y-4" data-oid="nlygge5" value="draft">
              {draftQuizzes.map((quiz) => (
                <QuizCard data-oid="cle:1nu" key={quiz.id} quiz={quiz} />
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <div
      className="flex flex-col items-start gap-4 rounded-lg border p-4 md:flex-row md:items-center"
      data-oid="4tr.:-k"
    >
      <div
        className="relative h-24 w-full overflow-hidden rounded-md md:w-24"
        data-oid="ecjb0k1"
      >
        <Image
          alt={quiz.title}
          className="object-cover"
          data-oid="ta95g_9"
          fill
          height={350}
          src={quiz.image || "/placeholder.svg"}
          width={600}
        />
      </div>

      <div className="min-w-0 flex-1" data-oid="y:67c_f">
        <div
          className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between"
          data-oid="gpkyw27"
        >
          <div data-oid="5k-nmcw">
            <h3 className="truncate font-medium" data-oid="0::cq-:">
              {quiz.title}
            </h3>
            <div
              className="flex items-center gap-2 text-muted-foreground text-sm"
              data-oid="piwv0bt"
            >
              <span data-oid="26i-_g3">{quiz.category}</span>
              <span data-oid="ozev7yj">•</span>
              <span data-oid="rkj8am_">{quiz.plays} plays</span>
              {quiz.rating > 0 && (
                <>
                  <span data-oid="hz_xpl4">•</span>
                  <span data-oid="055moja">
                    {quiz.rating.toFixed(1)} rating
                  </span>
                </>
              )}
            </div>
          </div>
          <div data-oid="5847-m3">
            <Badge
              data-oid="fvsf_tm"
              variant={quiz.status === "active" ? "default" : "outline"}
            >
              {quiz.status === "active" ? "Active" : "Draft"}
            </Badge>
          </div>
        </div>
      </div>

      <div
        className="mt-2 flex w-full flex-wrap gap-2 md:mt-0 md:w-auto"
        data-oid="yzkm0h1"
      >
        <Button asChild data-oid="kh-91y4" size="sm" variant="outline">
          <Link data-oid="7.btbxt" href={`/quiz/${quiz.id}`}>
            <Eye className="mr-1 h-3 w-3" data-oid="y-v9r:i" />
            View
          </Link>
        </Button>
        <Button data-oid="qonk897" size="sm" variant="outline">
          <Copy className="mr-1 h-3 w-3" data-oid="a8wuy95" />
          Clone
        </Button>
        <Button
          className="text-destructive hover:text-destructive"
          data-oid="_9zc2.v"
          size="sm"
          variant="outline"
        >
          <Trash2 className="mr-1 h-3 w-3" data-oid="zy1ad18" />
          Delete
        </Button>
      </div>
    </div>
  );
}
