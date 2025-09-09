"use client";

import { Clock, DollarSign, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

interface ExploreQuizListProps {
  category: string;
  searchQuery: string;
  viewMode: "grid" | "list";
  filters: {
    difficulty: string;
    sortBy: string;
    timeRange: string;
  };
}

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

export function ExploreQuizList({
  category,
  searchQuery,
  viewMode,
  filters,
}: ExploreQuizListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 6;

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

  // Filter quizzes based on category, search query, and filters
  const filteredQuizzes = quizzes
    .filter((quiz) => {
      if (category === "all") return true;
      return quiz.category.toLowerCase() === category.toLowerCase();
    })
    .filter((quiz) => {
      if (!searchQuery) return true;
      return (
        quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quiz.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quiz.createdBy.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .filter((quiz) => {
      if (filters.difficulty === "all") return true;
      return quiz.difficulty.toLowerCase() === filters.difficulty.toLowerCase();
    });

  // Calculate pagination
  const totalPages = Math.ceil(filteredQuizzes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentQuizzes = filteredQuizzes.slice(startIndex, endIndex);

  // Loading skeleton
  if (isLoading) {
    return (
      <div
        className={
          viewMode === "grid"
            ? "grid gap-6 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3"
            : "space-y-4"
        }
        data-oid="0avu6r3"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <Card className="overflow-hidden" data-oid="zuy7b5n" key={index}>
            <div className="h-48 animate-pulse bg-muted" data-oid="xdi_27j" />
            <CardContent className="space-y-4 p-4" data-oid="f6y86df">
              <div className="flex justify-between" data-oid="92ak0-e">
                <Skeleton className="h-4 w-20" data-oid="qhqbb_m" />
                <Skeleton className="h-4 w-16" data-oid="ur70876" />
              </div>
              <Skeleton className="h-6 w-full" data-oid="9d-fl:l" />
              <div className="flex justify-between" data-oid="65ph_3p">
                <Skeleton className="h-4 w-24" data-oid="ssi-d53" />
                <Skeleton className="h-4 w-16" data-oid="2r7vymh" />
              </div>
              <div className="flex justify-between" data-oid="ev832t2">
                <Skeleton className="h-4 w-32" data-oid="7w4unry" />
                <Skeleton className="h-8 w-8 rounded-full" data-oid="6--t_me" />
              </div>
            </CardContent>
            <CardFooter className="px-4 pt-0 pb-4" data-oid="o83abd6">
              <Skeleton className="h-9 w-full" data-oid="o8x:x9j" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  // No results
  if (filteredQuizzes.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-12 text-center"
        data-oid="ef5hvw5"
      >
        <div className="mb-4 rounded-full bg-muted p-6" data-oid="_6jj933">
          <Users
            className="h-10 w-10 text-muted-foreground"
            data-oid="a5eyide"
          />
        </div>
        <h3 className="mb-2 font-semibold text-xl" data-oid="n0vgvx4">
          No quizzes found
        </h3>
        <p className="mb-6 max-w-md text-muted-foreground" data-oid="k:2q6n6">
          {searchQuery
            ? `No quizzes match your search "${searchQuery}". Try a different search term or filter.`
            : "No quizzes found with the selected filters. Try adjusting your filters."}
        </p>
        <Button
          data-oid="6mobi9r"
          onClick={() => window.location.reload()}
          variant="outline"
        >
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="vhi42km">
      <div className="flex items-center justify-between" data-oid="fq68-st">
        <p className="text-muted-foreground text-sm" data-oid="664tt4:">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredQuizzes.length)}{" "}
          of {filteredQuizzes.length} quizzes
        </p>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div
          className="grid xxl:grid-cols-3 gap-6 sm:grid-cols-2 md:grid-cols-1 min-[900px]:grid-cols-2"
          data-oid="ws4jgp6"
        >
          {currentQuizzes.map((quiz) => (
            <Card
              className="overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-600"
              data-oid="esvrpfj"
              key={quiz.id}
            >
              {/* Image with overlay */}
              <div className="relative h-48" data-oid="fjf6gpb">
                <Image
                  alt={quiz.title}
                  className="h-full w-full object-cover"
                  data-oid="di-1vfa"
                  height={350}
                  src={quiz.image || "/placeholder.svg"}
                  width={600}
                />

                <div
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4"
                  data-oid="fjuzlxi"
                >
                  <div className="w-full" data-oid="n5upf1:">
                    <div
                      className="mb-2 flex items-center justify-between"
                      data-oid="j3bzdl9"
                    >
                      <Badge
                        className="font-medium"
                        data-oid="n4gdnir"
                        variant={getDifficultyVariant(quiz.difficulty)}
                      >
                        {quiz.difficulty}
                      </Badge>
                      <div
                        className="flex items-center gap-1 text-sm text-white"
                        data-oid="i_fui8b"
                      >
                        <Clock className="h-3.5 w-3.5" data-oid=":j2igwu" />
                        <span data-oid="-bdl2lk">{quiz.timeLimit} min</span>
                      </div>
                    </div>
                    <h3
                      className="line-clamp-2 font-semibold text-white"
                      data-oid=".ph8ahk"
                    >
                      {quiz.title}
                    </h3>
                  </div>
                </div>
              </div>

              <CardContent className="space-y-4 p-4 xl:pt-6" data-oid="7q6xgc_">
                {/* Creator and category */}
                <div
                  className="flex items-center justify-between"
                  data-oid="0th3o-d"
                >
                  <div className="flex items-center gap-2" data-oid="5-.qcdc">
                    <Avatar className="h-6 w-6" data-oid="oiho3ww">
                      <AvatarImage
                        alt={quiz.createdBy}
                        data-oid="w2vikgm"
                        src={quiz.creatorAvatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="mgduzdv">
                        {quiz.createdBy.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className="text-muted-foreground text-sm"
                      data-oid="4d:8j:3"
                    >
                      {quiz.createdBy}
                    </span>
                  </div>
                  <Badge
                    className="bg-slate-50 dark:bg-slate-800"
                    data-oid="7kwzww8"
                    variant="outline"
                  >
                    {quiz.category}
                  </Badge>
                </div>

                {/* Rating and reward */}
                <div
                  className="flex items-center justify-between"
                  data-oid="dulf.l5"
                >
                  <div className="flex items-center gap-1" data-oid="a2cviuw">
                    <svg
                      className="h-4 w-4 fill-current text-yellow-400"
                      data-oid="fod7tac"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                        data-oid=".u2ctak"
                      />
                    </svg>
                    <span className="font-medium text-sm" data-oid="gk7j76a">
                      {quiz.rating}{" "}
                      <span
                        className="text-muted-foreground"
                        data-oid="qhanr5k"
                      >
                        ({quiz.totalRatings})
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 font-medium text-green-600"
                    data-oid="o9ab1ci"
                  >
                    <DollarSign className="h-4 w-4" data-oid="93-h7mc" />
                    <span data-oid="vc0h1e2">{quiz.reward}</span>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="space-y-2" data-oid="4bf2c60">
                  <div
                    className="flex items-center justify-between"
                    data-oid="c_8bw7."
                  >
                    <div
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                      data-oid="thbt3ey"
                    >
                      <Users className="h-3.5 w-3.5" data-oid="3tqntm0" />
                      <span data-oid="0gvxil_">
                        {formatPlayerCount(quiz.players)} players
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="1ogrgv8">
                      <span
                        className="text-slate-600 text-sm dark:text-slate-400"
                        data-oid="zp1rc7x"
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
                        data-oid="4d-k7g_"
                        size={36}
                        strokeWidth={3}
                        value={calculateProgress(quiz.players, quiz.maxPlayers)}
                      />
                    </div>
                  </div>

                  {quiz.spotsLeft <= 20 && (
                    <p
                      className="font-medium text-destructive text-xs"
                      data-oid=".g8ivxn"
                    >
                      Almost full! Only {quiz.spotsLeft} spots left
                    </p>
                  )}
                </div>
              </CardContent>

              <CardFooter className="px-4 pt-0 pb-4" data-oid="z-gsicw">
                <Button asChild className="w-full" data-oid="j28lgfp">
                  <Link data-oid=".xcmtv7" href={`/quiz/${quiz.id}`}>
                    Play Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-4" data-oid="yeos4wu">
          {currentQuizzes.map((quiz) => (
            <Card
              className="overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-600"
              data-oid="8aikri8"
              key={quiz.id}
            >
              <div className="flex flex-col sm:flex-row" data-oid="h-b-xgh">
                {/* Image */}
                <div
                  className="relative h-48 sm:h-auto sm:w-48 md:w-64"
                  data-oid="g-i26o8"
                >
                  <Image
                    alt={quiz.title}
                    className="h-full w-full object-cover"
                    data-oid="1_tt0_e"
                    height={350}
                    src={quiz.image || "/placeholder.svg"}
                    width={600}
                  />

                  <Badge
                    className="absolute top-2 left-2 font-medium"
                    data-oid="dsx:ccw"
                    variant={getDifficultyVariant(quiz.difficulty)}
                  >
                    {quiz.difficulty}
                  </Badge>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4" data-oid="8vvw8l9">
                  <div
                    className="mb-2 flex items-center justify-between"
                    data-oid="msw4pzh"
                  >
                    <Badge
                      className="bg-slate-50 dark:bg-slate-800"
                      data-oid="wh1s..4"
                      variant="outline"
                    >
                      {quiz.category}
                    </Badge>
                    <div
                      className="flex items-center gap-1 text-muted-foreground text-sm"
                      data-oid="neds8w2"
                    >
                      <Clock className="h-3.5 w-3.5" data-oid="f0w4_tp" />
                      <span data-oid="mebe1rw">{quiz.timeLimit} min</span>
                    </div>
                  </div>

                  <h3 className="mb-2 font-semibold text-xl" data-oid="vj5vtcj">
                    {quiz.title}
                  </h3>

                  <div
                    className="mb-4 flex items-center gap-2"
                    data-oid="tqel.dp"
                  >
                    <Avatar className="h-6 w-6" data-oid="ldiedx2">
                      <AvatarImage
                        alt={quiz.createdBy}
                        data-oid="yqgqych"
                        src={quiz.creatorAvatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="h:ec.ei">
                        {quiz.createdBy.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className="text-muted-foreground text-sm"
                      data-oid="kkx6bjp"
                    >
                      by {quiz.createdBy}
                    </span>
                    <div
                      className="ml-2 flex items-center gap-1"
                      data-oid="5:gehol"
                    >
                      <svg
                        className="h-4 w-4 fill-current text-yellow-400"
                        data-oid="_ux1o9j"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                          data-oid="rswt-hj"
                        />
                      </svg>
                      <span className="font-medium text-sm" data-oid="kwtdih.">
                        {quiz.rating}{" "}
                        <span
                          className="text-muted-foreground"
                          data-oid="iejgoux"
                        >
                          ({quiz.totalRatings})
                        </span>
                      </span>
                    </div>
                  </div>

                  <div
                    className="mt-auto flex items-center justify-between"
                    data-oid="ubu:uiw"
                  >
                    <div className="flex items-center gap-2" data-oid="7omo226">
                      <div
                        className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                        data-oid="spqkjdx"
                      >
                        <Users className="h-3.5 w-3.5" data-oid="it_mwwu" />
                        <span data-oid="858ta7y">
                          {formatPlayerCount(quiz.players)} players
                        </span>
                      </div>
                      <span
                        className="mx-2 text-slate-600 dark:text-slate-400"
                        data-oid="aj_9e51"
                      >
                        •
                      </span>
                      <span
                        className="text-slate-600 dark:text-slate-400"
                        data-oid="4thn1:-"
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
                        data-oid="uc8hzlz"
                        size={36}
                        strokeWidth={3}
                        value={calculateProgress(quiz.players, quiz.maxPlayers)}
                      />
                    </div>

                    <div className="flex items-center gap-4" data-oid="hiow.td">
                      <div
                        className="font-medium text-green-600"
                        data-oid="bw74o48"
                      >
                        <DollarSign
                          className="mr-1 inline h-4 w-4"
                          data-oid="sj0f6vv"
                        />

                        {quiz.reward}
                      </div>
                      <Button asChild data-oid=".flgou:">
                        <Link data-oid="n.elb2_" href={`/quiz/${quiz.id}`}>
                          Play Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center" data-oid=".am-q-e">
          <Pagination data-oid="gfweerg">
            <PaginationContent data-oid="9sco27r">
              <Button
                className="mr-1"
                data-oid="psuytkd"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                size="sm"
                variant="outline"
              >
                Previous
              </Button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem data-oid="gdrle-w" key={index}>
                  <PaginationLink
                    data-oid="bgjed7g"
                    isActive={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <Button
                className="ml-1"
                data-oid="y_g9--5"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                size="sm"
                variant="outline"
              >
                Next
              </Button>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
