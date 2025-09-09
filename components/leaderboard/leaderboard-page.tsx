"use client";

import {
  BadgeCheck,
  Calendar,
  ChevronDown,
  Globe,
  Medal,
  Search,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeaderboardFilters } from "./leaderboard-filters";
import { LeaderboardPodium } from "./leaderboard-podium";
import { LeaderboardStats } from "./leaderboard-stats";
import { LeaderboardTable } from "./leaderboard-table";

// Sample leaderboard data
export const leaderboardData = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/avatars/alex.png",
    score: 9850,
    quizzes: 42,
    rank: 1,
    badge: "Diamond",
    winStreak: 15,
    lastActive: "Today",
    country: "United States",
    level: 78,
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "/avatars/sarah.webp",
    score: 8720,
    quizzes: 38,
    rank: 2,
    badge: "Platinum",
    winStreak: 8,
    lastActive: "Today",
    country: "Canada",
    level: 65,
  },
  {
    id: 3,
    name: "Michael Brown",
    avatar: "/avatars/wizard.webp",
    score: 7640,
    quizzes: 35,
    rank: 3,
    badge: "Gold",
    winStreak: 6,
    lastActive: "Yesterday",
    country: "United Kingdom",
    level: 59,
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "/avatars/champion.png",
    score: 6980,
    quizzes: 31,
    rank: 4,
    badge: "Gold",
    winStreak: 4,
    lastActive: "Today",
    country: "Australia",
    level: 52,
  },
  {
    id: 5,
    name: "David Wilson",
    avatar: "/avatars/king.webp",
    score: 6540,
    quizzes: 29,
    rank: 5,
    badge: "Silver",
    winStreak: 3,
    lastActive: "2 days ago",
    country: "Germany",
    level: 48,
  },
  {
    id: 6,
    name: "Jessica Taylor",
    avatar: "/avatars/mind.webp",
    score: 5920,
    quizzes: 27,
    rank: 6,
    badge: "Silver",
    winStreak: 5,
    lastActive: "Today",
    country: "France",
    level: 45,
  },
  {
    id: 7,
    name: "Ryan Martinez",
    avatar: "/avatars/genious.png",
    score: 5480,
    quizzes: 25,
    rank: 7,
    badge: "Bronze",
    winStreak: 2,
    lastActive: "Yesterday",
    country: "Spain",
    level: 41,
  },
  {
    id: 8,
    name: "Olivia Anderson",
    avatar: "/avatars/brain.png",
    score: 5120,
    quizzes: 23,
    rank: 8,
    badge: "Bronze",
    winStreak: 0,
    lastActive: "3 days ago",
    country: "Italy",
    level: 38,
  },
  {
    id: 9,
    name: "Daniel Thomas",
    avatar: "/avatars/guru.png",
    score: 4780,
    quizzes: 21,
    rank: 9,
    badge: "Bronze",
    winStreak: 1,
    lastActive: "Today",
    country: "Japan",
    level: 36,
  },
  {
    id: 10,
    name: "Sophia Garcia",
    avatar: "/avatars/master.png",
    score: 4350,
    quizzes: 19,
    rank: 10,
    badge: "Bronze",
    winStreak: 2,
    lastActive: "Yesterday",
    country: "Brazil",
    level: 33,
  },
  {
    id: 11,
    name: "James Miller",
    avatar: "/abstract-geometric-shapes.png",
    score: 4120,
    quizzes: 18,
    rank: 11,
    badge: "Bronze",
    winStreak: 0,
    lastActive: "4 days ago",
    country: "Mexico",
    level: 31,
  },
  {
    id: 12,
    name: "Emma Wilson",
    avatar: "/abstract-geometric-shapes.png",
    score: 3980,
    quizzes: 17,
    rank: 12,
    badge: "Bronze",
    winStreak: 1,
    lastActive: "Today",
    country: "South Korea",
    level: 30,
  },
  {
    id: 13,
    name: "Liam Harris",
    avatar: "/abstract-geometric-shapes.png",
    score: 3750,
    quizzes: 16,
    rank: 13,
    badge: "Bronze",
    winStreak: 0,
    lastActive: "Yesterday",
    country: "India",
    level: 28,
  },
  {
    id: 14,
    name: "Ava Martin",
    avatar: "/abstract-geometric-shapes.png",
    score: 3620,
    quizzes: 15,
    rank: 14,
    badge: "Bronze",
    winStreak: 0,
    lastActive: "5 days ago",
    country: "Russia",
    level: 27,
  },
  {
    id: 15,
    name: "Noah Thompson",
    avatar: "/abstract-geometric-shapes.png",
    score: 3480,
    quizzes: 14,
    rank: 15,
    badge: "Bronze",
    winStreak: 2,
    lastActive: "Today",
    country: "China",
    level: 26,
  },
];

export function LeaderboardPage() {
  const [timeFilter, setTimeFilter] = useState("all-time");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("score");

  return (
    <div className="space-y-6" data-oid="_t.vvc6">
      <div
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        data-oid="gw472b1"
      >
        <div data-oid="767cl3x">
          <h1 className="font-bold text-3xl tracking-tight" data-oid="-t6dhvz">
            Leaderboard
          </h1>
          <p className="text-muted-foreground" data-oid="39uw684">
            See who's leading the pack in our global quiz rankings.
          </p>
        </div>
        <div className="flex items-center gap-2" data-oid="i3ue8-z">
          <Button data-oid="d:ec0gn" size="sm" variant="outline">
            <Users className="mr-2 h-4 w-4" data-oid="6r2o8fk" />
            Find Friends
          </Button>
          <Button data-oid="8xar.ed" size="sm">
            <Trophy className="mr-2 h-4 w-4" data-oid="tgaz-8k" />
            Your Ranking
          </Button>
        </div>
      </div>

      <div className="gap-6 lg:grid lg:grid-cols-3" data-oid="tlaba00">
        <LeaderboardStats data-oid="9egpits" />
        <Card className="lg:col-span-2" data-oid=":67qzsm">
          <CardHeader className="pb-3" data-oid="h.gohzj">
            <CardTitle data-oid="aw2hgbh">Leaderboard Highlights</CardTitle>
            <CardDescription data-oid="hfq8klr">
              Top performers across different categories and time periods
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="4zedbw5">
            <Tabs className="w-full" data-oid="0-xd-1d" defaultValue="global">
              <TabsList
                className="flex gap-2 overflow-x-auto sm:grid sm:grid-cols-3"
                data-oid="wxk1nws"
              >
                <TabsTrigger data-oid="2vr-wd0" value="global">
                  <Globe className="mr-2 h-4 w-4" data-oid="czsm0s." />
                  Global
                </TabsTrigger>
                <TabsTrigger data-oid="h8cudh0" value="categories">
                  <BadgeCheck className="mr-2 h-4 w-4" data-oid="mg1g6g7" />
                  By Category
                </TabsTrigger>
                <TabsTrigger data-oid="nvo.909" value="trending">
                  <TrendingUp className="mr-2 h-4 w-4" data-oid="cj09:l2" />
                  Trending
                </TabsTrigger>
              </TabsList>
              <TabsContent className="pt-4" data-oid="m1:h0u8" value="global">
                <LeaderboardFilters
                  categoryFilter={categoryFilter}
                  data-oid="hew:bm9"
                  setCategoryFilter={setCategoryFilter}
                  setTimeFilter={setTimeFilter}
                  timeFilter={timeFilter}
                />

                <LeaderboardPodium
                  data-oid="yy_yf0f"
                  leaderboardData={leaderboardData.slice(0, 3)}
                />
              </TabsContent>
              <TabsContent
                className="pt-4"
                data-oid=".5djvci"
                value="categories"
              >
                <div
                  className="mb-6 flex items-center justify-between"
                  data-oid="c4uf8gu"
                >
                  <h3 className="font-medium text-lg" data-oid="ho0clct">
                    Science Category Leaders
                  </h3>
                  <Button data-oid="8u7mall" size="sm" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" data-oid="t:.9fek" />
                    This Month
                  </Button>
                </div>
                <LeaderboardTable
                  data-oid="b2s1zcw"
                  leaderboardData={leaderboardData.slice(0, 5)}
                />
              </TabsContent>
              <TabsContent className="pt-4" data-oid="yl4esvd" value="trending">
                <div
                  className="mb-6 flex items-center justify-between"
                  data-oid="3nfzox3"
                >
                  <h3 className="font-medium text-lg" data-oid="odeptbn">
                    Rising Stars This Week
                  </h3>
                  <Button data-oid="gac5p.x" size="sm" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" data-oid="cmacksb" />
                    This Week
                  </Button>
                </div>
                <LeaderboardTable
                  data-oid="d_i3gw3"
                  leaderboardData={[...leaderboardData]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 5)}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Global Leaderboard Section */}
      <Card className="overflow-hidden border-0 shadow-lg" data-oid="logb2u8">
        <div
          className="bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white"
          data-oid="uuqh.l8"
        >
          <div
            className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
            data-oid="f_dv3:6"
          >
            <div data-oid="qbe22rt">
              <h2
                className="font-bold text-2xl tracking-tight"
                data-oid="_-oqavz"
              >
                Global Leaderboard
              </h2>
              <p className="text-white/80" data-oid="4n1c0zc">
                Compete with the best quiz masters from around the world
              </p>
            </div>
            <div
              className="flex flex-wrap items-center gap-2"
              data-oid="_a0byk0"
            >
              <Button data-oid="4_j47uj" size="sm" variant="secondary">
                <Medal className="mr-2 h-4 w-4" data-oid="6770qo7" />
                Hall of Fame
              </Button>
              <Button data-oid="tp53nvd" size="sm" variant="secondary">
                <Trophy className="mr-2 h-4 w-4" data-oid="l-gjtjn" />
                Seasonal Awards
              </Button>
            </div>
          </div>
        </div>

        <CardContent className="p-6 xl:pt-6" data-oid="-f-7y83">
          <div
            className="mb-6 flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center sm:justify-between"
            data-oid="caecz:e"
          >
            <div className="relative w-full max-w-sm" data-oid="giojouo">
              <Search
                className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground"
                data-oid="z7xlt83"
              />

              <Input
                className="pl-9"
                data-oid="f2akbxr"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search players..."
                value={searchQuery}
              />
            </div>

            <div
              className="flex flex-wrap items-center gap-2"
              data-oid="zc:8-.k"
            >
              <DropdownMenu data-oid="qbi0i3b">
                <DropdownMenuTrigger asChild data-oid="ybpi3dd">
                  <Button data-oid="d:it.va" size="sm" variant="outline">
                    Sort by:{" "}
                    {sortBy === "score"
                      ? "Score"
                      : sortBy === "level"
                        ? "Level"
                        : "Quizzes"}
                    <ChevronDown className="ml-2 h-4 w-4" data-oid="5osariz" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" data-oid="_70sj_j">
                  <DropdownMenuItem
                    data-oid="ts-zsur"
                    onClick={() => setSortBy("score")}
                  >
                    Score
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    data-oid=":c:toz0"
                    onClick={() => setSortBy("level")}
                  >
                    Level
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    data-oid="dk:9d1v"
                    onClick={() => setSortBy("quizzes")}
                  >
                    Quizzes Completed
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu data-oid="a-nwn04">
                <DropdownMenuTrigger asChild data-oid="gym:s5_">
                  <Button data-oid="j_ltozr" size="sm" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" data-oid="h-tqz39" />
                    {timeFilter === "all-time"
                      ? "All Time"
                      : timeFilter === "monthly"
                        ? "This Month"
                        : "This Week"}
                    <ChevronDown className="ml-2 h-4 w-4" data-oid="z2q5wk6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" data-oid="t_xnhsa">
                  <DropdownMenuItem
                    data-oid="z2viozy"
                    onClick={() => setTimeFilter("all-time")}
                  >
                    All Time
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    data-oid="6baa67o"
                    onClick={() => setTimeFilter("monthly")}
                  >
                    This Month
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    data-oid="jd-8brj"
                    onClick={() => setTimeFilter("weekly")}
                  >
                    This Week
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div
            className="rounded-xl border bg-card shadow-sm"
            data-oid="6uaerz7"
          >
            <LeaderboardTable
              data-oid="8rs6_61"
              enhanced
              leaderboardData={leaderboardData.filter((user) =>
                user.name.toLowerCase().includes(searchQuery.toLowerCase())
              )}
              showPagination
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
