"use client";

import {
  ArrowLeft,
  Clock,
  DollarSign,
  Filter,
  Search,
  SortAsc,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CategoryType } from "@/components/categories/categories-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

interface Quiz {
  id: number;
  title: string;
  image: string;
  category: string;
  difficulty: string;
  timeLimit: number;
  reward: string;
  players: number;
  maxPlayers: number;
  spotsLeft: number;
  almostFull: boolean;
  createdBy: string;
  creatorAvatar: string;
  rating: number;
  totalRatings: number;
}
interface CategoryDetailPageProps {
  categoryName?: CategoryType;
}

// Sample quiz data for the category
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
  },
];

export function CategoryDetailPage({ categoryName }: CategoryDetailPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuizzes, setFilteredQuizzes] = useState<Quiz[]>(quizzes);
  const [sortBy, setSortBy] = useState("popular");
  const [difficulty, setDifficulty] = useState("all");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and sort quizzes whenever dependencies change
  useEffect(() => {
    let result = [...quizzes];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (quiz) =>
          quiz.title.toLowerCase().includes(query) ||
          quiz.category.toLowerCase().includes(query)
      );
    }

    // Filter by difficulty
    if (difficulty !== "all") {
      result = result.filter(
        (quiz) => quiz.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
    }

    // Filter by category
    if (category !== "all") {
      result = result.filter(
        (quiz) => quiz.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Sort quizzes
    result = sortQuizzes(result, sortBy);

    setFilteredQuizzes(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, difficulty, category, sortBy]);

  // Function to sort quizzes
  const sortQuizzes = (quizzes: Quiz[], sortMethod: string): Quiz[] => {
    return [...quizzes].sort((a, b) => {
      switch (sortMethod) {
        case "popular":
          return b.players - a.players;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.id - a.id;
        case "reward":
          return (
            Number.parseFloat(b.reward.replace("$", "")) -
            Number.parseFloat(a.reward.replace("$", ""))
          );

        case "difficulty": {
          // Sort by difficulty: Hard > Medium > Easy
          const difficultyOrder = { Hard: 3, Medium: 2, Easy: 1 };
          return (
            (difficultyOrder[b.difficulty as keyof typeof difficultyOrder] ||
              0) -
            (difficultyOrder[a.difficulty as keyof typeof difficultyOrder] || 0)
          );
        }

        default:
          return 0;
      }
    });
  };

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

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle filter changes
  const handleDifficultyChange = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };
  // Calculate progress percentage
  const calculateProgress = (players: number, maxPlayers: number) => {
    return (players / maxPlayers) * 100;
  };
  return (
    <div className="container mx-auto" data-oid="9wb33br">
      {/* Header */}
      <div className="mb-8" data-oid="2tdkow7">
        <div className="mb-4 flex items-center gap-2" data-oid="otf1nw2">
          <Button asChild data-oid=".qq.o2q" size="sm" variant="ghost">
            <Link data-oid="velut:3" href="/categories">
              <ArrowLeft className="mr-1 h-4 w-4" data-oid="qe50n6f" />
              Back to Categories
            </Link>
          </Button>
        </div>

        <div
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          data-oid="-jieu2q"
        >
          <div data-oid="mfn58nq">
            <div className="flex items-center gap-3" data-oid="78xxpmb">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white"
                data-oid="gvayhd6"
              >
                <Target data-oid="dflc2nu" />
              </div>
              <h1 className="font-bold text-3xl" data-oid="f8hj5:f">
                {" "}
                Quizzes
              </h1>
            </div>
            <p
              className="mt-2 max-w-2xl text-muted-foreground"
              data-oid="o9qd.73"
            >
              Browse quizzes in this category.
            </p>
          </div>

          <Button asChild data-oid="d-.xu-1">
            <Link data-oid="edw2md6" href="/create/editor">
              Create Quiz
            </Link>
          </Button>
        </div>
      </div>

      {/* Search and filters */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row" data-oid="ka9e-sl">
        <div className="relative flex-1" data-oid="w2j9fau">
          <Search
            className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
            data-oid="2n1cw_f"
          />

          <Input
            className="pl-10"
            data-oid="q:oq8xr"
            onChange={handleSearchChange}
            placeholder={"Search quizzes..."}
            value={searchQuery}
          />
        </div>

        <div className="flex gap-2" data-oid="zm8z23a">
          <DropdownMenu data-oid=".94z4f.">
            <DropdownMenuTrigger asChild data-oid="ob_kow4">
              <Button className="gap-2" data-oid="r.bhk.n" variant="outline">
                <SortAsc className="h-4 w-4" data-oid="652cfba" />
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-oid="2r7d_:-">
              <DropdownMenuItem
                data-oid="we53v0v"
                onClick={() => handleSortChange("popular")}
              >
                Most Popular
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid=":1hefpo"
                onClick={() => handleSortChange("rating")}
              >
                Highest Rated
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="7d4fcdq"
                onClick={() => handleSortChange("newest")}
              >
                Newest
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid=":iq6fi3"
                onClick={() => handleSortChange("reward")}
              >
                Highest Reward
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu data-oid="ry8zd.9">
            <DropdownMenuTrigger asChild data-oid="6m_seqs">
              <Button className="gap-2" data-oid="d5z-1wk" variant="outline">
                <Filter className="h-4 w-4" data-oid="eb-485d" />
                Difficulty
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-oid=":f:igzq">
              <DropdownMenuItem
                data-oid="tb.li16"
                onClick={() => handleDifficultyChange("all")}
              >
                All Difficulties
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="7jcyqg7"
                onClick={() => handleDifficultyChange("easy")}
              >
                Easy
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="6duogj7"
                onClick={() => handleDifficultyChange("medium")}
              >
                Medium
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="fki-ord"
                onClick={() => handleDifficultyChange("hard")}
              >
                Hard
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Quiz grid */}
      {quizzes.length > 0 ? (
        <div
          className="grid xxl:grid-cols-4 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-oid="03:cgk7"
        >
          {filteredQuizzes.map((quiz) => (
            <Card
              className="overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-600"
              data-oid="jzg2xdo"
              key={quiz.id}
            >
              {/* Image with overlay */}
              <div className="relative h-48" data-oid="tl8ab7q">
                <Image
                  alt={quiz.title}
                  className="h-full w-full object-cover"
                  data-oid="wozer1m"
                  height={500}
                  src={quiz.image || "/placeholder.svg"}
                  width={1000}
                />

                <div
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4"
                  data-oid="6fbdk-9"
                >
                  <div className="w-full" data-oid="bl9oa4a">
                    <div
                      className="mb-2 flex items-center justify-between"
                      data-oid="i8.bt.x"
                    >
                      <Badge
                        className="font-medium"
                        data-oid="dce_190"
                        variant={getDifficultyVariant(quiz.difficulty)}
                      >
                        {quiz.difficulty}
                      </Badge>
                      <div
                        className="flex items-center gap-1 text-sm text-white"
                        data-oid="hzfanhb"
                      >
                        <Clock className="h-3.5 w-3.5" data-oid="d..ugwt" />
                        <span data-oid="w7omuj_">{quiz.timeLimit} min</span>
                      </div>
                    </div>
                    <h3
                      className="line-clamp-2 font-semibold text-white"
                      data-oid="qviuki2"
                    >
                      {quiz.title}
                    </h3>
                  </div>
                </div>
              </div>

              <CardContent className="space-y-4 p-4 xl:pt-6" data-oid="l.csxaz">
                {/* Creator and category */}
                <div
                  className="flex items-center justify-between"
                  data-oid="o3ve23m"
                >
                  <div className="flex items-center gap-2" data-oid="1boki:i">
                    <Avatar className="h-6 w-6" data-oid=".iymhr7">
                      <AvatarImage
                        alt={quiz.createdBy}
                        data-oid="aommegh"
                        src={quiz.creatorAvatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="6:comja">
                        {quiz.createdBy.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className="text-muted-foreground text-sm"
                      data-oid="ig_e2-e"
                    >
                      {quiz.createdBy}
                    </span>
                  </div>
                  <Badge
                    className="bg-slate-50 dark:bg-slate-800"
                    data-oid="svg8thk"
                    variant="outline"
                  >
                    {quiz.category}
                  </Badge>
                </div>

                {/* Rating and reward */}
                <div
                  className="flex items-center justify-between"
                  data-oid="c81wti-"
                >
                  <div className="flex items-center gap-1" data-oid="x66snc3">
                    <svg
                      className="h-4 w-4 fill-current text-yellow-400"
                      data-oid="q.9w3uo"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                        data-oid="ibnkgfn"
                      />
                    </svg>
                    <span className="font-medium text-sm" data-oid="5f4u-hk">
                      {quiz.rating}{" "}
                      <span
                        className="text-muted-foreground"
                        data-oid="bww05.f"
                      >
                        ({quiz.totalRatings})
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 font-medium text-green-600"
                    data-oid="lmtt30e"
                  >
                    <DollarSign className="h-4 w-4" data-oid=":5lznq9" />
                    <span data-oid="t:qoowi">{quiz.reward}</span>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="space-y-2" data-oid="edtyx2h">
                  <div
                    className="flex items-center justify-between"
                    data-oid="qukt0ut"
                  >
                    <div
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                      data-oid="dadrijb"
                    >
                      <Users className="h-3.5 w-3.5" data-oid="ll.g.zr" />
                      <span data-oid="k7kc0k6">{quiz.players} players</span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="0ibj7p:">
                      <span
                        className="text-slate-600 text-sm dark:text-slate-400"
                        data-oid="8-azt1g"
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
                        data-oid="hwp.r_z"
                        size={36}
                        strokeWidth={3}
                        value={calculateProgress(quiz.players, quiz.maxPlayers)}
                      />
                    </div>
                  </div>

                  {quiz.spotsLeft <= 20 && (
                    <p
                      className="font-medium text-destructive text-xs"
                      data-oid="_nbd8vl"
                    >
                      Almost full! Only {quiz.spotsLeft} spots left
                    </p>
                  )}
                </div>
              </CardContent>

              <CardFooter className="px-4 pt-0 pb-4" data-oid="p0ur3v4">
                <Button asChild className="w-full" data-oid="1.4ijvi">
                  <Link data-oid="-kfqm:j" href={`/quiz/${quiz.id}/play`}>
                    Play Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center py-12 text-center"
          data-oid="aa537r:"
        >
          <div className="mb-4 rounded-full bg-muted p-6" data-oid=":x41u8n">
            <Search
              className="h-10 w-10 text-muted-foreground"
              data-oid="0hi-4_3"
            />
          </div>
          <h3 className="mb-2 font-semibold text-xl" data-oid="-70yaar">
            No quizzes found
          </h3>
          <p className="mb-6 max-w-md text-muted-foreground" data-oid="kx6mpov">
            {searchQuery
              ? `No quizzes match your search "${searchQuery}". Try a different search term or filter.`
              : "No quizzes found with the selected filters. Try adjusting your filters."}
          </p>
          <Button
            data-oid="drlvfl5"
            onClick={() => {
              setSearchQuery("");
              setDifficulty("all");
              setSortBy("popular");
            }}
            variant="outline"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
