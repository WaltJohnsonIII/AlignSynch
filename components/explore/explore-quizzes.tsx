"use client";

import {
  Clock,
  DollarSign,
  Filter,
  Grid3X3,
  List,
  Search,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample quiz data
const quizzes = [
  {
    id: 1,
    title: "World Geography Challenge",
    image: "/world-map-quiz.png",
    category: "Geography",
    difficulty: "Medium",
    timeLimit: 15,
    reward: "$5.00",
    players: 285,
    maxPlayers: 300,
    spotsLeft: 15,
    almostFull: true,
    createdBy: "GeoExplorer",
    creatorAvatar: "/avatars/alex.png",
    rating: 4.8,
    totalRatings: 124,
    recentPlayers: [
      { name: "Alex J.", avatar: "/avatars/alex.png" },
      { name: "Sarah W.", avatar: "/avatars/wizard.webp" },
      { name: "Mike B.", avatar: "/avatars/sarah.webp" },
    ],
  },
  {
    id: 2,
    title: "Science Quiz: Space Exploration",
    image: "/space-exploration-quiz.png",
    category: "Science",
    difficulty: "Hard",
    timeLimit: 20,
    reward: "$7.50",
    players: 178,
    maxPlayers: 500,
    spotsLeft: 322,
    almostFull: false,
    createdBy: "CosmicMind",
    creatorAvatar: "/avatars/wizard.webp",
    rating: 4.9,
    totalRatings: 89,
    recentPlayers: [
      { name: "Emily D.", avatar: "/avatars/king.webp" },
      { name: "David W.", avatar: "/avatars/champion.png" },
      { name: "Jessica T.", avatar: "/avatars/mind.webp" },
    ],
  },
  {
    id: 3,
    title: "History: Ancient Civilizations",
    image: "/ancient-civilizations-quiz.png",
    category: "History",
    difficulty: "Medium",
    timeLimit: 15,
    reward: "$5.00",
    players: 412,
    maxPlayers: 450,
    spotsLeft: 38,
    almostFull: true,
    createdBy: "HistoryBuff",
    creatorAvatar: "/avatars/sarah.webp",
    rating: 4.7,
    totalRatings: 156,
    recentPlayers: [
      { name: "Ryan M.", avatar: "/avatars/genious.png" },
      { name: "Olivia A.", avatar: "/avatars/brain.png" },
      { name: "James K.", avatar: "/avatars/alex.png" },
    ],
  },
  {
    id: 4,
    title: "Math Puzzles & Problems",
    image: "/math-puzzles-quiz.png",
    category: "Mathematics",
    difficulty: "Hard",
    timeLimit: 25,
    reward: "$8.00",
    players: 156,
    maxPlayers: 300,
    spotsLeft: 144,
    almostFull: false,
    createdBy: "MathGenius",
    creatorAvatar: "/avatars/king.webp",
    rating: 4.6,
    totalRatings: 78,
    recentPlayers: [
      { name: "Sophia L.", avatar: "/avatars/wizard.webp" },
      { name: "Noah P.", avatar: "/avatars/sarah.webp" },
      { name: "Emma R.", avatar: "/avatars/king.webp" },
    ],
  },
  {
    id: 5,
    title: "Literature: Classic Novels",
    image: "/classic-novels-quiz.png",
    category: "Literature",
    difficulty: "Medium",
    timeLimit: 15,
    reward: "$5.00",
    players: 298,
    maxPlayers: 300,
    spotsLeft: 2,
    almostFull: true,
    createdBy: "BookWorm",
    creatorAvatar: "/avatars/champion.png",
    rating: 4.9,
    totalRatings: 112,
    recentPlayers: [
      { name: "William T.", avatar: "/avatars/champion.png" },
      { name: "Ava M.", avatar: "/avatars/mind.webp" },
      { name: "Liam S.", avatar: "/avatars/genious.png" },
    ],
  },
  {
    id: 6,
    title: "Sports Trivia Challenge",
    image: "/sports-trivia-quiz.png",
    category: "Sports",
    difficulty: "Easy",
    timeLimit: 10,
    reward: "$3.00",
    players: 124,
    maxPlayers: 250,
    spotsLeft: 126,
    almostFull: false,
    createdBy: "SportsNut",
    creatorAvatar: "/avatars/brain.png",
    rating: 4.5,
    totalRatings: 67,
    recentPlayers: [
      { name: "Mia J.", avatar: "/avatars/brain.png" },
      { name: "Lucas P.", avatar: "/avatars/alex.png" },
      { name: "Isabella K.", avatar: "/avatars/wizard.webp" },
    ],
  },
  {
    id: 7,
    title: "Music Through the Decades",
    image: "/music-quiz.png",
    category: "Music",
    difficulty: "Medium",
    timeLimit: 15,
    reward: "$5.50",
    players: 210,
    maxPlayers: 300,
    spotsLeft: 90,
    almostFull: false,
    createdBy: "MusicMaestro",
    creatorAvatar: "/avatars/genious.png",
    rating: 4.7,
    totalRatings: 94,
    recentPlayers: [
      { name: "Oliver B.", avatar: "/avatars/brain.png" },
      { name: "Charlotte D.", avatar: "/avatars/alex.png" },
      { name: "Henry F.", avatar: "/avatars/wizard.webp" },
    ],
  },
  {
    id: 8,
    title: "Technology & Gadgets",
    image: "/technology-quiz.png",
    category: "Technology",
    difficulty: "Hard",
    timeLimit: 20,
    reward: "$7.00",
    players: 175,
    maxPlayers: 250,
    spotsLeft: 75,
    almostFull: false,
    createdBy: "TechGuru",
    creatorAvatar: "/avatars/mind.webp",
    rating: 4.8,
    totalRatings: 82,
    recentPlayers: [
      { name: "Amelia H.", avatar: "/avatars/champion.png" },
      { name: "Theodore J.", avatar: "/avatars/mind.webp" },
      { name: "Violet L.", avatar: "/avatars/genious.png" },
    ],
  },
];

// Categories
const categories = [
  "All Categories",
  "Science",
  "History",
  "Geography",
  "Mathematics",
  "Literature",
  "Sports",
  "Music",
  "Technology",
  "Art",
  "Movies",
  "General Knowledge",
];

export function ExploreQuizzes() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Get difficulty badge variant
  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "success";
      case "Medium":
        return "warning";
      case "Hard":
        return "destructive";
      default:
        return "default";
    }
  };

  // Format player count
  const formatPlayerCount = (count: number) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
  };

  // Calculate progress percentage
  const calculateProgress = (players: number, maxPlayers: number) => {
    return (players / maxPlayers) * 100;
  };

  return (
    <div className="space-y-6" data-oid="6xoj6in">
      <div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        data-oid="ihcwzqi"
      >
        <div data-oid="-lf-ug1">
          <h1 className="font-bold text-3xl tracking-tight" data-oid="8l9x0r3">
            Explore Quizzes
          </h1>
          <p className="mt-1 text-muted-foreground" data-oid="5_dv9xa">
            Discover and play quizzes from our community
          </p>
        </div>
      </div>

      {/* Search and filters */}
      <div
        className="flex flex-col gap-4 md:flex-row md:items-center"
        data-oid="8ck-bq1"
      >
        <div className="relative flex-1" data-oid="h.oa.0.">
          <Search
            className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
            data-oid="-icrume"
          />

          <Input
            className="pl-10"
            data-oid="ix1cme:"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search quizzes by title, category, or creator..."
            value={searchQuery}
          />
        </div>

        <div className="flex items-center gap-2" data-oid="dtmrn3u">
          <Select data-oid="y8421km" defaultValue="All Categories">
            <SelectTrigger className="w-[180px]" data-oid="10vl1z-">
              <SelectValue data-oid="n40u:aj" placeholder="Select category" />
            </SelectTrigger>
            <SelectContent data-oid="a.b_zct">
              <SelectGroup data-oid="8179y9m">
                <SelectLabel data-oid="fppr0j_">Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem
                    data-oid="8yqguyr"
                    key={category}
                    value={category}
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select data-oid="0tjk9be" defaultValue="All">
            <SelectTrigger className="w-[140px]" data-oid="p3jjux8">
              <SelectValue data-oid="ays3kj6" placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent data-oid="zucp2wo">
              <SelectGroup data-oid="y9._7y-">
                <SelectLabel data-oid="dsn75t7">Difficulty</SelectLabel>
                <SelectItem data-oid="x824ug8" value="All">
                  All Levels
                </SelectItem>
                <SelectItem data-oid="6owd0ch" value="Easy">
                  Easy
                </SelectItem>
                <SelectItem data-oid="wkr:v7m" value="Medium">
                  Medium
                </SelectItem>
                <SelectItem data-oid="1-jfx-k" value="Hard">
                  Hard
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <DropdownMenu data-oid="5h3o943">
            <DropdownMenuTrigger asChild data-oid="6ij09hq">
              <Button data-oid=":70s5j_" size="icon" variant="outline">
                <Filter className="h-4 w-4" data-oid="ao3.krg" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56"
              data-oid="x_4w6v4"
            >
              <DropdownMenuLabel data-oid="ys0a_6:">Sort By</DropdownMenuLabel>
              <DropdownMenuSeparator data-oid="glp0v00" />
              <DropdownMenuGroup data-oid="q7:s0zj">
                <DropdownMenuItem data-oid="zf7rei2">Newest</DropdownMenuItem>
                <DropdownMenuItem data-oid="4dns1.f">
                  Most Popular
                </DropdownMenuItem>
                <DropdownMenuItem data-oid="r8lbbv_">
                  Highest Rated
                </DropdownMenuItem>
                <DropdownMenuItem data-oid="kpgq-jz">
                  Highest Reward
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator data-oid="9dzeoj2" />
              <DropdownMenuLabel data-oid="95fy-ry">Filter</DropdownMenuLabel>
              <DropdownMenuSeparator data-oid="0jaelms" />
              <DropdownMenuGroup data-oid=":9ekev4">
                <DropdownMenuItem data-oid="919lyfa">
                  Available Spots
                </DropdownMenuItem>
                <DropdownMenuItem data-oid="jml.h4-">
                  Almost Full
                </DropdownMenuItem>
                <DropdownMenuItem data-oid="orbpm:b">
                  Short Duration
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div
            className="flex items-center rounded-md border bg-muted/40"
            data-oid="5qwtx5."
          >
            <Button
              className="h-8 w-8"
              data-oid="maa4436"
              onClick={() => setViewMode("grid")}
              size="icon"
              variant={viewMode === "grid" ? "secondary" : "ghost"}
            >
              <Grid3X3 className="h-4 w-4" data-oid="jfp4zes" />
              <span className="sr-only" data-oid="rvqaz3a">
                Grid view
              </span>
            </Button>
            <Button
              className="h-8 w-8"
              data-oid="dtus-ha"
              onClick={() => setViewMode("list")}
              size="icon"
              variant={viewMode === "list" ? "secondary" : "ghost"}
            >
              <List className="h-4 w-4" data-oid="xkg5vbg" />
              <span className="sr-only" data-oid="teu6cyp">
                List view
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs data-oid="tcy13pt" defaultValue="all">
        <TabsList data-oid="zgr6f_t">
          <TabsTrigger data-oid="f.mnrsl" value="all">
            All Quizzes
          </TabsTrigger>
          <TabsTrigger data-oid=":wjamo-" value="trending">
            Trending
          </TabsTrigger>
          <TabsTrigger data-oid="w6d_vzd" value="new">
            New
          </TabsTrigger>
          <TabsTrigger data-oid="cnzp84c" value="popular">
            Popular
          </TabsTrigger>
          <TabsTrigger data-oid="._7trq3" value="rewards">
            High Rewards
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          data-oid="_0x:50r"
        >
          {quizzes.map((quiz) => (
            <Card
              className="overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-600"
              data-oid="dydda9a"
              key={quiz.id}
            >
              {/* Image with overlay */}
              <div className="relative h-48" data-oid="5_sifwn">
                <Image
                  alt={quiz.title}
                  className="h-full w-full object-cover"
                  data-oid="1gxwq4-"
                  height={600}
                  src={quiz.image || "/placeholder.svg"}
                  width={1000}
                />

                <div
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4"
                  data-oid="2xvs3h8"
                >
                  <div className="w-full" data-oid="j0jb_3x">
                    <div
                      className="mb-2 flex items-center justify-between"
                      data-oid="gzwfhq7"
                    >
                      <Badge
                        className="font-medium"
                        data-oid="ewfhufr"
                        variant={getDifficultyVariant(quiz.difficulty)}
                      >
                        {quiz.difficulty}
                      </Badge>
                      <div
                        className="flex items-center gap-1 text-sm text-white"
                        data-oid="74:7:9o"
                      >
                        <Clock className="h-3.5 w-3.5" data-oid=":8dnyme" />
                        <span data-oid="fg9tl68">{quiz.timeLimit} min</span>
                      </div>
                    </div>
                    <h3
                      className="line-clamp-2 font-semibold text-white"
                      data-oid="njf6ve."
                    >
                      {quiz.title}
                    </h3>
                  </div>
                </div>
              </div>

              <CardContent className="space-y-4 p-4" data-oid="lnef2r2">
                {/* Creator and category */}
                <div
                  className="flex items-center justify-between"
                  data-oid="cuap0il"
                >
                  <div className="flex items-center gap-2" data-oid="e1cz9_5">
                    <Avatar className="h-6 w-6" data-oid="k55k0ok">
                      <AvatarImage
                        alt={quiz.createdBy}
                        data-oid="8z2x:lp"
                        src={quiz.creatorAvatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="n3voa71">
                        {quiz.createdBy.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className="text-muted-foreground text-sm"
                      data-oid="5_jn7hq"
                    >
                      {quiz.createdBy}
                    </span>
                  </div>
                  <Badge
                    className="bg-slate-50 dark:bg-slate-800"
                    data-oid="vj8q76o"
                    variant="outline"
                  >
                    {quiz.category}
                  </Badge>
                </div>

                {/* Rating and reward */}
                <div
                  className="flex items-center justify-between"
                  data-oid="ek3_bfn"
                >
                  <div className="flex items-center gap-1" data-oid="mcxdern">
                    <svg
                      className="h-4 w-4 fill-current text-yellow-400"
                      data-oid="ls8bx7u"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                        data-oid="6f-z-im"
                      />
                    </svg>
                    <span className="font-medium text-sm" data-oid="uau9wpe">
                      {quiz.rating}{" "}
                      <span
                        className="text-muted-foreground"
                        data-oid="1ysh3wh"
                      >
                        ({quiz.totalRatings})
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 font-medium text-green-600"
                    data-oid="t-a9r5a"
                  >
                    <DollarSign className="h-4 w-4" data-oid="xv7nfma" />
                    <span data-oid="n:rp-lj">{quiz.reward}</span>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="space-y-2" data-oid="7b1-v8o">
                  <div
                    className="flex items-center justify-between"
                    data-oid="55qf3pj"
                  >
                    <div
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                      data-oid="_wgidg1"
                    >
                      <Users className="h-3.5 w-3.5" data-oid="qg.x14g" />
                      <span data-oid="2co9sxy">
                        {formatPlayerCount(quiz.players)} players
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid=":z0gmju">
                      <span
                        className="text-slate-600 text-sm dark:text-slate-400"
                        data-oid="g1b6l1v"
                      >
                        {quiz.spotsLeft} spots left
                      </span>
                      <CircularProgress
                        color={
                          quiz.spotsLeft <= 20
                            ? "hsl(var(--destructive))"
                            : quiz.spotsLeft <= 50
                              ? "hsl(var(--warning))"
                              : "hsl(var(--primary))"
                        }
                        data-oid="hit-2xm"
                        size={36}
                        strokeWidth={3}
                        value={calculateProgress(quiz.players, quiz.maxPlayers)}
                      />
                    </div>
                  </div>

                  {quiz.spotsLeft <= 20 && (
                    <p
                      className="font-medium text-destructive text-xs"
                      data-oid="mycpx.3"
                    >
                      Almost full! Only {quiz.spotsLeft} spots left
                    </p>
                  )}
                </div>
              </CardContent>

              <CardFooter className="px-4 pt-0 pb-4" data-oid="f1hue83">
                <Button className="w-full" data-oid="is.zpnj">
                  Play Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-4" data-oid="gxkglgp">
          {quizzes.map((quiz) => (
            <Card
              className="overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-600"
              data-oid="aozqnc7"
              key={quiz.id}
            >
              <div className="flex flex-col sm:flex-row" data-oid="u9_us2z">
                {/* Image */}
                <div
                  className="relative h-48 sm:h-auto sm:w-48 md:w-64"
                  data-oid="e3:j2zx"
                >
                  <Image
                    alt={quiz.title}
                    className="h-full w-full object-cover"
                    data-oid="jorcxig"
                    height={350}
                    src={quiz.image || "/placeholder.svg"}
                    width={600}
                  />

                  <Badge
                    className="absolute top-2 left-2 font-medium"
                    data-oid="kx3q5zv"
                    variant={getDifficultyVariant(quiz.difficulty)}
                  >
                    {quiz.difficulty}
                  </Badge>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4" data-oid="rwi-:dk">
                  <div
                    className="mb-2 flex items-center justify-between"
                    data-oid="t9c:z6f"
                  >
                    <Badge
                      className="bg-slate-50 dark:bg-slate-800"
                      data-oid="cc1-bv8"
                      variant="outline"
                    >
                      {quiz.category}
                    </Badge>
                    <div
                      className="flex items-center gap-1 text-muted-foreground text-sm"
                      data-oid="mib_cco"
                    >
                      <Clock className="h-3.5 w-3.5" data-oid="rxef9ji" />
                      <span data-oid="6x9qn_m">{quiz.timeLimit} min</span>
                    </div>
                  </div>

                  <h3 className="mb-2 font-semibold text-xl" data-oid="7sxot_a">
                    {quiz.title}
                  </h3>

                  <div
                    className="mb-4 flex items-center gap-2"
                    data-oid="aczeyny"
                  >
                    <Avatar className="h-6 w-6" data-oid="_0o-v1i">
                      <AvatarImage
                        alt={quiz.createdBy}
                        data-oid="vfqu-5z"
                        src={quiz.creatorAvatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="s9727s6">
                        {quiz.createdBy.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className="text-muted-foreground text-sm"
                      data-oid="9f.xzhs"
                    >
                      by {quiz.createdBy}
                    </span>
                    <div
                      className="ml-2 flex items-center gap-1"
                      data-oid="439l0ns"
                    >
                      <svg
                        className="h-4 w-4 fill-current text-yellow-400"
                        data-oid="emd_esh"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                          data-oid="h9k-:sz"
                        />
                      </svg>
                      <span className="font-medium text-sm" data-oid="ufjeiyw">
                        {quiz.rating}{" "}
                        <span
                          className="text-muted-foreground"
                          data-oid=":llosnx"
                        >
                          ({quiz.totalRatings})
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto space-y-3" data-oid="mmnm-mb">
                    <div
                      className="flex items-center justify-between"
                      data-oid="._pby1l"
                    >
                      <div
                        className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                        data-oid="qi31759"
                      >
                        <Users className="h-3.5 w-3.5" data-oid="4ds:::r" />
                        <span data-oid="c0djusa">
                          {formatPlayerCount(quiz.players)} players
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        data-oid="fdzu:6h"
                      >
                        <span
                          className="text-slate-600 dark:text-slate-400"
                          data-oid="sr6tgep"
                        >
                          {quiz.spotsLeft} spots left
                        </span>
                        <CircularProgress
                          color={
                            quiz.spotsLeft <= 20
                              ? "hsl(var(--destructive))"
                              : quiz.spotsLeft <= 50
                                ? "hsl(var(--warning))"
                                : "hsl(var(--primary))"
                          }
                          data-oid="vtq30jc"
                          size={36}
                          strokeWidth={3}
                          value={calculateProgress(
                            quiz.players,
                            quiz.maxPlayers
                          )}
                        />
                      </div>
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="82mmkmf"
                    >
                      {quiz.spotsLeft <= 20 ? (
                        <p
                          className="font-medium text-destructive text-xs"
                          data-oid="2yu0pl5"
                        >
                          Almost full! Only {quiz.spotsLeft} spots left
                        </p>
                      ) : (
                        <p
                          className="text-muted-foreground text-xs"
                          data-oid="lxwftnw"
                        >
                          {quiz.spotsLeft} spots available
                        </p>
                      )}

                      <Button data-oid="am4_-uh">Play Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between" data-oid="yy2mr6h">
        <p className="text-muted-foreground text-sm" data-oid="7n4d1cm">
          Showing 8 of 48 quizzes
        </p>
        <div className="flex items-center gap-2" data-oid="nyolwte">
          <Button data-oid="umhva7:" disabled size="sm" variant="outline">
            Previous
          </Button>
          <Button
            className="bg-primary text-primary-foreground"
            data-oid="0i7wih:"
            size="sm"
            variant="outline"
          >
            1
          </Button>
          <Button data-oid="9up2tmh" size="sm" variant="outline">
            2
          </Button>
          <Button data-oid="wlqmpzu" size="sm" variant="outline">
            3
          </Button>
          <Button data-oid="n.fsbb." size="sm" variant="outline">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
