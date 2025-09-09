"use client";

import { CheckCircle, MessageSquare, Search, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Discussion = {
  id: string;
  quizId: string;
  quizTitle: string;
  lastActivity: string;
  totalComments: number;
  score: {
    correct: number;
    total: number;
  };
  category: string;
  difficulty: string;
  user: {
    name: string;
    avatar: string;
  };
};
// Mock data for recent discussions
const recentDiscussions: Discussion[] = [
  {
    id: "1",
    quizId: "1",
    quizTitle: "Space Exploration Quiz",
    lastActivity: "2023-10-18T14:30:00Z",
    totalComments: 24,
    score: {
      correct: 7,
      total: 10,
    },
    category: "Entertainment",
    difficulty: "Medium",
    user: {
      name: "MarvelFan",
      avatar: "/avatars/alex.png",
    },
  },
  {
    id: "2",
    quizId: "2",
    quizTitle: "World Geography Challenge",
    lastActivity: "2023-10-17T10:15:00Z",
    totalComments: 18,
    score: {
      correct: 8,
      total: 10,
    },
    category: "Education",
    difficulty: "Hard",
    user: {
      name: "GeoExpert",
      avatar: "/avatars/mind.webp",
    },
  },
  {
    id: "3",
    quizId: "3",
    quizTitle: "History of Ancient Civilizations",
    lastActivity: "2023-10-16T09:45:00Z",
    totalComments: 32,
    score: {
      correct: 6,
      total: 10,
    },
    category: "History",
    difficulty: "Medium",
    user: {
      name: "HistoryBuff",
      avatar: "/avatars/sarah.webp",
    },
  },
  {
    id: "4",
    quizId: "4",
    quizTitle: "Science and Technology Trivia",
    lastActivity: "2023-10-15T16:20:00Z",
    totalComments: 15,
    score: {
      correct: 9,
      total: 10,
    },
    category: "Science",
    difficulty: "Easy",
    user: {
      name: "TechWiz",
      avatar: "/avatars/wizard.webp",
    },
  },
  {
    id: "5",
    quizId: "5",
    quizTitle: "Pop Culture Quiz 2023",
    lastActivity: "2023-10-14T11:30:00Z",
    totalComments: 27,
    score: {
      correct: 5,
      total: 10,
    },
    category: "Entertainment",
    difficulty: "Easy",
    user: {
      name: "PopCultureFan",
      avatar: "/avatars/king.webp",
    },
  },
];

// Mock data for popular discussions
const popularDiscussions = [
  {
    id: "6",
    quizId: "6",
    quizTitle: "Harry Potter Wizarding World",
    lastActivity: "2023-10-13T13:45:00Z",
    totalComments: 56,
    score: {
      correct: 8,
      total: 10,
    },
    category: "Entertainment",
    difficulty: "Medium",
    user: {
      name: "WizardingExpert",
      avatar: "/avatars/wizard.webp",
    },
  },
  {
    id: "7",
    quizId: "7",
    quizTitle: "Mathematical Puzzles and Problems",
    lastActivity: "2023-10-12T09:15:00Z",
    totalComments: 42,
    score: {
      correct: 7,
      total: 10,
    },
    category: "Education",
    difficulty: "Hard",
    user: {
      name: "MathGenius",
      avatar: "/avatars/mind.webp",
    },
  },
  {
    id: "3",
    quizId: "3",
    quizTitle: "History of Ancient Civilizations",
    lastActivity: "2023-10-16T09:45:00Z",
    totalComments: 32,
    score: {
      correct: 6,
      total: 10,
    },
    category: "History",
    difficulty: "Medium",
    user: {
      name: "HistoryBuff",
      avatar: "/avatars/guru.png",
    },
  },
  {
    id: "8",
    quizId: "8",
    quizTitle: "Famous Paintings and Artists",
    lastActivity: "2023-10-11T14:30:00Z",
    totalComments: 29,
    score: {
      correct: 9,
      total: 10,
    },
    category: "Art",
    difficulty: "Medium",
    user: {
      name: "ArtLover",
      avatar: "/avatars/sarah.webp",
    },
  },
  {
    id: "9",
    quizId: "9",
    quizTitle: "World Cuisines and Food",
    lastActivity: "2023-10-10T10:45:00Z",
    totalComments: 38,
    score: {
      correct: 8,
      total: 10,
    },
    category: "Food",
    difficulty: "Easy",
    user: {
      name: "FoodieExplorer",
      avatar: "/avatars/champion.png",
    },
  },
];

// Mock data for your discussions
const yourDiscussions = [
  {
    id: "1",
    quizId: "1",
    quizTitle: "Space Exploration Quiz",
    lastActivity: "2023-10-18T14:30:00Z",
    totalComments: 24,
    score: {
      correct: 7,
      total: 10,
    },
    category: "Entertainment",
    difficulty: "Medium",
    user: {
      name: "You",
      avatar: "/avatars/sarah.webp",
    },
  },
  {
    id: "4",
    quizId: "4",
    quizTitle: "Science and Technology Trivia",
    lastActivity: "2023-10-15T16:20:00Z",
    totalComments: 15,
    score: {
      correct: 9,
      total: 10,
    },
    category: "Science",
    difficulty: "Easy",
    user: {
      name: "You",
      avatar: "/avatars/wizard.webp",
    },
  },
  {
    id: "7",
    quizId: "7",
    quizTitle: "Mathematical Puzzles and Problems",
    lastActivity: "2023-10-12T09:15:00Z",
    totalComments: 42,
    score: {
      correct: 7,
      total: 10,
    },
    category: "Education",
    difficulty: "Hard",
    user: {
      name: "You",
      avatar: "/avatars/king.webp",
    },
  },
];

export function QuizDiscussionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <div className="container mx-auto py-4" data-oid="j1o7zj1">
      <div className="mb-8" data-oid="w8r8hv3">
        <h1 className="mb-2 font-bold text-3xl" data-oid="fjhzj:g">
          Quiz Discussions
        </h1>
        <p className="text-muted-foreground" data-oid="06scjdi">
          Join discussions about quizzes, share explanations, and learn from the
          community.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row" data-oid="0xk5.7f">
        <div className="relative flex-1" data-oid="vyix5uf">
          <Search
            className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
            data-oid="bm5e3v_"
          />

          <Input
            className="pl-9"
            data-oid="td1j8.o"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search discussions..."
            value={searchQuery}
          />
        </div>
        <div className="flex gap-2" data-oid="f0_z:io">
          <Button data-oid="8n4l.rh" variant="outline">
            Filter
          </Button>
          <Button data-oid="68awh_2" variant="outline">
            Sort
          </Button>
        </div>
      </div>

      <Tabs
        className="w-full"
        data-oid="-76.j_o"
        defaultValue="recent"
        onValueChange={setActiveTab}
      >
        <TabsList
          className="w-full overflow-x-auto sm:grid sm:grid-cols-3"
          data-oid="mdwp6b6"
        >
          <TabsTrigger data-oid="yee-_0p" value="recent">
            Recent Discussions
          </TabsTrigger>
          <TabsTrigger data-oid="4m11j7w" value="popular">
            Popular Discussions
          </TabsTrigger>
          <TabsTrigger data-oid="v9nak0i" value="yours">
            Your Discussions
          </TabsTrigger>
        </TabsList>

        <TabsContent className="mt-6" data-oid="j_unwcx" value="recent">
          <div className="space-y-4" data-oid="cuiuwlq">
            {recentDiscussions.map((discussion) => (
              <DiscussionCard
                data-oid=".pk1f77"
                discussion={discussion}
                key={discussion.id}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent className="mt-6" data-oid="a13fkrv" value="popular">
          <div className="space-y-4" data-oid="kp8:k7j">
            {popularDiscussions.map((discussion) => (
              <DiscussionCard
                data-oid="lp8c0dj"
                discussion={discussion}
                key={discussion.id}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent className="mt-6" data-oid="8opr8-_" value="yours">
          <div className="space-y-4" data-oid="zphtyc2">
            {yourDiscussions.length > 0 ? (
              yourDiscussions.map((discussion) => (
                <DiscussionCard
                  data-oid="emtf:v6"
                  discussion={discussion}
                  key={discussion.id}
                />
              ))
            ) : (
              <Card data-oid="8rw_224">
                <CardContent
                  className="flex flex-col items-center justify-center py-12 text-center"
                  data-oid="1ee_5r6"
                >
                  <MessageSquare
                    className="mb-4 h-12 w-12 text-muted-foreground opacity-20"
                    data-oid="66iqb6u"
                  />

                  <h3 className="mb-2 font-medium text-lg" data-oid=".ta:r5x">
                    No discussions yet
                  </h3>
                  <p className="mb-4 text-muted-foreground" data-oid="skm61h8">
                    You haven't participated in any quiz discussions yet.
                  </p>
                  <Button asChild data-oid="b5c8dnu">
                    <Link data-oid=".dyte9-" href="/explore">
                      Find Quizzes to Take
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function DiscussionCard({ discussion }: { discussion: Discussion }) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card className="overflow-hidden" data-oid="ytmmigt">
      <CardContent className="p-0 xl:pt-6" data-oid="82khs9w">
        <Link
          className="block transition-colors hover:bg-muted/50"
          data-oid="aozi4_x"
          href={`/quiz/${discussion.id}/discussion`}
        >
          <div className="p-4 md:p-6" data-oid="z00gnbw">
            <div
              className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
              data-oid="1qncyl3"
            >
              <div data-oid="m5gsnvs">
                <h3 className="font-medium text-lg" data-oid="28pdd43">
                  {discussion.quizTitle}
                </h3>
                <div
                  className="mt-1 flex flex-wrap items-center gap-2"
                  data-oid="e8agn1c"
                >
                  <Badge data-oid="se_b-n_" variant="outline">
                    {discussion.category}
                  </Badge>
                  <Badge
                    className={getDifficultyColor(discussion.difficulty)}
                    data-oid="qfwy696"
                  >
                    {discussion.difficulty}
                  </Badge>
                  <span
                    className="text-muted-foreground text-sm"
                    data-oid="liw8_sv"
                  >
                    Last activity: {formatDate(discussion.lastActivity)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3" data-oid="4twxz0k">
                <div
                  className="flex items-center gap-1 text-sm"
                  data-oid="ez_k_9o"
                >
                  <MessageSquare
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="eoassug"
                  />

                  <span data-oid="vc0781f">
                    {discussion.totalComments} comments
                  </span>
                </div>
                <Button asChild data-oid="j31yppn" size="sm" variant="outline">
                  View Discussion
                </Button>
              </div>
            </div>

            <div
              className="flex items-center justify-between"
              data-oid="psooev2"
            >
              <div className="flex items-center gap-2" data-oid="yff:ub-">
                <Avatar className="h-8 w-8" data-oid="pvrgk_m">
                  <AvatarImage
                    alt={discussion.user.name}
                    data-oid="ee5_7ct"
                    src={discussion.user.avatar || "/placeholder.svg"}
                  />

                  <AvatarFallback data-oid="nv0-a88">
                    {discussion.user.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm" data-oid="b8a6j.d">
                  {discussion.user.name}
                </span>
              </div>
              <div className="flex items-center gap-3" data-oid="k2:58h1">
                <div
                  className="flex items-center gap-1 text-green-600 text-sm"
                  data-oid="w2x1f:3"
                >
                  <CheckCircle className="h-4 w-4" data-oid="y_f.pm4" />
                  <span data-oid="lcq_dn-">{discussion.score.correct}</span>
                </div>
                <div
                  className="flex items-center gap-1 text-red-600 text-sm"
                  data-oid="cb0iwek"
                >
                  <XCircle className="h-4 w-4" data-oid="9j88ec7" />
                  <span data-oid="nx-2uno">
                    {discussion.score.total - discussion.score.correct}
                  </span>
                </div>
                <div className="font-medium text-sm" data-oid="dl6lzrv">
                  {Math.round(
                    (discussion.score.correct / discussion.score.total) * 100
                  )}
                  %
                </div>
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
