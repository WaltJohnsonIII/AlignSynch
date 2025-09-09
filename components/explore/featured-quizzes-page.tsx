"use client";

import {
  Award,
  ChevronLeft,
  Clock,
  Filter,
  Flame,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample featured quiz data - expanded with more quizzes
const featuredQuizzes = {
  trending: [
    {
      id: 1,
      title: "Science Quiz: Space Exploration",
      image: "/space-exploration-quiz.png",
      category: "Entertainment",
      badge: { type: "hot", label: "Hot 🔥" },
      rating: 4.9,
      players: 2453,
      maxPlayers: 3000,
      spotsLeft: 547,
      reward: "$10.00",
      limitedTime: true,
      expiresIn: 172_800, // 48 hours in seconds
      createdBy: "MarvelFan",
      creatorAvatar: "/avatars/alex.png",
    },
    {
      id: 2,
      title: "World Geography Challenge: Capitals & Landmarks",
      image: "/world-landmarks.png",
      category: "Geography",
      badge: { type: "editors", label: "Editor's Choice ✨" },
      rating: 4.8,
      players: 1872,
      maxPlayers: 2000,
      spotsLeft: 128,
      reward: "$7.50",
      expiresIn: 172_800,
      limitedTime: false,
      createdBy: "GeoExplorer",
      creatorAvatar: "/avatars/wizard.webp",
    },
    {
      id: 3,
      title: "Brain Teasers & Logic Puzzles",
      image: "/brain-teasers-puzzles.png",
      category: "Puzzles",
      badge: { type: "trending", label: "Trending 📈" },
      rating: 4.7,
      players: 3241,
      maxPlayers: 5000,
      spotsLeft: 1759,
      reward: "$8.00",
      limitedTime: true,
      expiresIn: 86_400, // 24 hours in seconds
      createdBy: "PuzzleMaster",
      creatorAvatar: "/avatars/sarah.webp",
    },
    {
      id: 10,
      title: "Ancient Civilizations: Egypt, Greece & Rome",
      image: "/ancient-civilizations-quiz.png",
      category: "History",
      badge: { type: "hot", label: "Hot 🔥" },
      rating: 4.8,
      players: 1987,
      maxPlayers: 2500,
      spotsLeft: 513,
      reward: "$9.00",
      limitedTime: true,
      expiresIn: 129_600, // 36 hours in seconds
      createdBy: "HistoryBuff",
      creatorAvatar: "/avatars/king.webp",
    },
    {
      id: 11,
      title: "Mathematical Puzzles & Brain Teasers",
      image: "/math-puzzles-quiz.png",
      category: "Mathematics",
      badge: { type: "trending", label: "Trending 📈" },
      rating: 4.6,
      players: 1543,
      maxPlayers: 2000,
      spotsLeft: 457,
      reward: "$6.50",
      limitedTime: false,
      expiresIn: 172_800,
      createdBy: "MathWhiz",
      creatorAvatar: "/avatars/genious.png",
    },
    {
      id: 12,
      title: "World of Fantasy Literature",
      image: "/classic-novels-quiz.png",
      category: "Literature",
      badge: { type: "hot", label: "Hot 🔥" },
      rating: 4.7,
      players: 1876,
      maxPlayers: 2200,
      spotsLeft: 324,
      reward: "$7.00",
      limitedTime: true,
      expiresIn: 43_200, // 12 hours in seconds
      createdBy: "BookWorm",
      creatorAvatar: "/avatars/mind.webp",
    },
  ],

  popular: [
    {
      id: 4,
      title: "History's Greatest Mysteries",
      image: "/history-mysteries.png",
      category: "History",
      badge: { type: "topRated", label: "Top Rated ⭐" },
      rating: 4.9,
      players: 1563,
      maxPlayers: 1600,
      expiresIn: 172_800,
      spotsLeft: 37,
      reward: "$6.50",
      limitedTime: false,
      createdBy: "HistoryBuff",
      creatorAvatar: "/avatars/king.webp",
    },
    {
      id: 5,
      title: "Science Quiz: Space Exploration",
      image: "/space-exploration-quiz.png",
      category: "Science",
      badge: { type: "popular", label: "Popular 👑" },
      rating: 4.8,
      players: 2105,
      maxPlayers: 2500,
      spotsLeft: 395,
      expiresIn: 172_800,
      reward: "$7.50",
      limitedTime: false,
      createdBy: "CosmicMind",
      creatorAvatar: "/avatars/champion.png",
    },
    {
      id: 6,
      title: "Literature: Classic Novels",
      image: "/classic-novels-quiz.png",
      category: "Literature",
      badge: { type: "topRated", label: "Top Rated ⭐" },
      rating: 4.9,
      players: 1298,
      maxPlayers: 1500,
      spotsLeft: 202,
      expiresIn: 172_800,
      reward: "$5.00",
      limitedTime: false,
      createdBy: "BookWorm",
      creatorAvatar: "/avatars/mind.webp",
    },
    {
      id: 13,
      title: "World Cup Football History",
      image: "/sports-trivia-quiz.png",
      category: "Sports",
      badge: { type: "popular", label: "Popular 👑" },
      rating: 4.8,
      players: 2341,
      maxPlayers: 3000,
      spotsLeft: 659,
      expiresIn: 172_800,
      reward: "$8.50",
      limitedTime: false,
      createdBy: "SportsNut",
      creatorAvatar: "/avatars/guru.png",
    },
    {
      id: 14,
      title: "Blockbuster Movies Trivia",
      image: "/space-exploration-quiz.png",
      category: "Entertainment",
      badge: { type: "topRated", label: "Top Rated ⭐" },
      rating: 4.9,
      players: 3102,
      maxPlayers: 3500,
      spotsLeft: 398,
      reward: "$9.50",
      expiresIn: 172_800,
      limitedTime: false,
      createdBy: "MovieBuff",
      creatorAvatar: "/avatars/brain.png",
    },
    {
      id: 15,
      title: "Wonders of the Natural World",
      image: "/world-landmarks.png",
      category: "Nature",
      badge: { type: "popular", label: "Popular 👑" },
      rating: 4.7,
      players: 1876,
      maxPlayers: 2000,
      spotsLeft: 124,
      expiresIn: 172_800,
      reward: "$6.00",
      limitedTime: false,
      createdBy: "NatureExplorer",
      creatorAvatar: "/avatars/master.png",
    },
  ],

  new: [
    {
      id: 7,
      title: "Music Through the Decades",
      image: "/music-quiz.png",
      category: "Music",
      badge: { type: "new", label: "New ✨" },
      rating: 4.5,
      players: 210,
      maxPlayers: 1000,
      spotsLeft: 790,
      expiresIn: 172_800,
      reward: "$5.50",
      limitedTime: false,
      createdBy: "MusicMaestro",
      creatorAvatar: "/avatars/genious.png",
    },
    {
      id: 8,
      title: "Technology & Gadgets",
      image: "/technology-quiz.png",
      category: "Technology",
      badge: { type: "new", label: "New ✨" },
      rating: 4.6,
      players: 175,
      maxPlayers: 1000,
      spotsLeft: 825,
      reward: "$7.00",
      limitedTime: false,
      expiresIn: 172_800,
      createdBy: "TechGuru",
      creatorAvatar: "/avatars/brain.png",
    },
    {
      id: 9,
      title: "Sports Trivia Challenge",
      image: "/sports-trivia-quiz.png",
      category: "Sports",
      badge: { type: "new", label: "New ✨" },
      rating: 4.4,
      players: 124,
      maxPlayers: 1000,
      spotsLeft: 876,
      expiresIn: 172_800,
      reward: "$3.00",
      limitedTime: false,
      createdBy: "SportsNut",
      creatorAvatar: "/avatars/guru.png",
    },
    {
      id: 16,
      title: "Culinary World Tour",
      image: "/easy-quiz-1.png",
      category: "Food",
      badge: { type: "new", label: "New ✨" },
      rating: 4.3,
      players: 98,
      maxPlayers: 1000,
      expiresIn: 172_800,
      spotsLeft: 902,
      reward: "$4.50",
      limitedTime: false,
      createdBy: "FoodieChef",
      creatorAvatar: "/avatars/alex.png",
    },
    {
      id: 17,
      title: "Artistic Masterpieces",
      image: "/easy-quiz-2.png",
      category: "Art",
      badge: { type: "new", label: "New ✨" },
      rating: 4.2,
      players: 87,
      maxPlayers: 1000,
      expiresIn: 172_800,
      spotsLeft: 913,
      reward: "$4.00",
      limitedTime: false,
      createdBy: "ArtLover",
      creatorAvatar: "/avatars/sarah.webp",
    },
    {
      id: 18,
      title: "Famous Inventors & Discoveries",
      image: "/easy-quiz-3.png",
      category: "Science",
      badge: { type: "new", label: "New ✨" },
      rating: 4.4,
      players: 112,
      expiresIn: 172_800,
      maxPlayers: 1000,
      spotsLeft: 888,
      reward: "$5.00",
      limitedTime: false,
      createdBy: "ScienceGeek",
      creatorAvatar: "/avatars/wizard.webp",
    },
  ],
};
type Tabs = "trending" | "popular" | "new";
export function FeaturedQuizzesPage() {
  const [activeTab, setActiveTab] = useState<Tabs>("trending");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  // Get badge icon based on type
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case "hot":
        return <Flame className="mr-1 h-3 w-3" data-oid="1vf1zjn" />;
      case "editors":
        return <Award className="mr-1 h-3 w-3" data-oid="ik9d-0i" />;
      case "trending":
        return <TrendingUp className="mr-1 h-3 w-3" data-oid="7jtta3k" />;
      case "topRated":
        return <Star className="mr-1 h-3 w-3" data-oid="080pbfg" />;
      case "popular":
        return <Award className="mr-1 h-3 w-3" data-oid="t7-tu2m" />;
      case "new":
        return <Award className="mr-1 h-3 w-3" data-oid="rfsh-gt" />;
      default:
        return null;
    }
  };

  // Get badge variant based on type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "hot":
        return "destructive";
      case "editors":
        return "purple";
      case "trending":
        return "blue";
      case "topRated":
        return "yellow";
      case "popular":
        return "purple";
      case "new":
        return "blue";
      default:
        return "default";
    }
  };

  // Calculate progress percentage
  const calculateProgress = (players: number, maxPlayers: number) => {
    return (players / maxPlayers) * 100;
  };

  // Format player count
  const formatPlayerCount = (count: number) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
  };

  // Get current quizzes based on pagination
  const getCurrentQuizzes = () => {
    const allQuizzes = featuredQuizzes[activeTab];
    const startIndex = (currentPage - 1) * itemsPerPage;
    return allQuizzes.slice(startIndex, startIndex + itemsPerPage);
  };

  // Calculate total pages
  const totalPages = Math.ceil(
    featuredQuizzes[activeTab].length / itemsPerPage
  );

  return (
    <div className="space-y-8" data-oid="2ufniwi">
      {/* Header with back button */}
      <div className="flex items-center justify-between" data-oid="a6wp3aj">
        <div className="flex items-center gap-2" data-oid="9t:oh18">
          <Button asChild data-oid=":htznx0" size="icon" variant="ghost">
            <Link data-oid="y35nl7u" href="/explore">
              <ChevronLeft className="h-5 w-5" data-oid="v1vs.wn" />
            </Link>
          </Button>
          <h1 className="font-bold text-2xl" data-oid=".qz9tvi">
            Featured Quizzes
          </h1>
        </div>

        <div className="flex items-center gap-3" data-oid="3c8edk7">
          <div className="flex items-center gap-2" data-oid="88pqn1p">
            <Filter
              className="h-4 w-4 text-muted-foreground"
              data-oid="xmg3msb"
            />

            <span
              className="hidden text-muted-foreground text-sm sm:inline"
              data-oid="ew75vg_"
            >
              Sort by:
            </span>
          </div>
          <Select data-oid="ye:.l6h" onValueChange={setSortBy} value={sortBy}>
            <SelectTrigger className="w-[140px]" data-oid="-d1wglu">
              <SelectValue data-oid="c:z-:-w" placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent data-oid="nn9s4:o">
              <SelectItem data-oid="pa0kbcs" value="popular">
                Most Popular
              </SelectItem>
              <SelectItem data-oid="bb17-86" value="newest">
                Newest First
              </SelectItem>
              <SelectItem data-oid="ay7fj9h" value="highest">
                Highest Reward
              </SelectItem>
              <SelectItem data-oid="5y_lc7h" value="rating">
                Top Rated
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Category tabs */}
      <Tabs
        data-oid="ef4676k"
        defaultValue="trending"
        onValueChange={(value) => {
          setActiveTab(value as Tabs);
          setCurrentPage(1); // Reset to first page when changing tabs
        }}
        value={activeTab}
      >
        <TabsList className="mb-6 w-full justify-start" data-oid="60c2zd4">
          <TabsTrigger
            className="flex-1 sm:flex-none"
            data-oid="5f2-7_i"
            value="trending"
          >
            Trending
            <span
              className="ml-1.5 rounded-full bg-primary/10 px-2 py-0.5 font-medium text-xs"
              data-oid="1lksvok"
            >
              {featuredQuizzes.trending.length}
            </span>
          </TabsTrigger>
          <TabsTrigger
            className="flex-1 sm:flex-none"
            data-oid="k3p9t3u"
            value="popular"
          >
            Popular
            <span
              className="ml-1.5 rounded-full bg-primary/10 px-2 py-0.5 font-medium text-xs"
              data-oid="al4r67j"
            >
              {featuredQuizzes.popular.length}
            </span>
          </TabsTrigger>
          <TabsTrigger
            className="flex-1 sm:flex-none"
            data-oid="0hskj2x"
            value="new"
          >
            New
            <span
              className="ml-1.5 rounded-full bg-primary/10 px-2 py-0.5 font-medium text-xs"
              data-oid="zi0r95q"
            >
              {featuredQuizzes.new.length}
            </span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Quiz grid */}
      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        data-oid="tlst060"
      >
        {getCurrentQuizzes().map((quiz) => (
          <Card
            className="group overflow-hidden"
            data-oid="nt63ect"
            key={quiz.id}
          >
            <div className="relative" data-oid="ev7m04z">
              <Image
                alt={quiz.title}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-oid="hoeqjb5"
                height={350}
                src={quiz.image || "/placeholder.svg"}
                width={600}
              />

              <div
                className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4"
                data-oid="jpus26k"
              >
                <h3
                  className="line-clamp-2 font-semibold text-white"
                  data-oid="jtvgtaa"
                >
                  {quiz.title}
                </h3>
                <div
                  className="mt-2 flex items-center justify-between"
                  data-oid="7t75g6:"
                >
                  <p className="text-sm text-white/80" data-oid="s1mtvpw">
                    {quiz.category}
                  </p>
                  <Badge
                    className="flex items-center"
                    data-oid="9:gcies"
                    variant={getBadgeVariant(quiz.badge.type)}
                  >
                    {getBadgeIcon(quiz.badge.type)}
                    {quiz.badge.label}
                  </Badge>
                </div>
              </div>

              {quiz.limitedTime && (
                <div
                  className="absolute top-2 left-2 flex items-center rounded-full bg-black/60 px-2 py-1 text-white text-xs"
                  data-oid="rlwr0at"
                >
                  <Clock className="mr-1 h-3 w-3" data-oid=":4_gqnk" />
                  {quiz.expiresIn > 86_400
                    ? `${Math.floor(quiz.expiresIn / 86_400)}d left`
                    : `${Math.floor(quiz.expiresIn / 3600)}h left`}
                </div>
              )}
            </div>

            <CardContent className="space-y-3 p-4" data-oid="cvxd1_e">
              <div
                className="flex items-center justify-between"
                data-oid=":i9_dku"
              >
                <div className="flex items-center gap-2" data-oid="47fps3x">
                  <Avatar className="h-6 w-6" data-oid="d3-r06a">
                    <AvatarImage
                      alt={quiz.createdBy}
                      data-oid="y0mh_-t"
                      src={quiz.creatorAvatar || "/placeholder.svg"}
                    />

                    <AvatarFallback data-oid="39gqcut">
                      {quiz.createdBy.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span
                    className="text-muted-foreground text-sm"
                    data-oid="c-6q_aa"
                  >
                    {quiz.createdBy}
                  </span>
                </div>
                <div className="flex items-center" data-oid="mt:anlf">
                  <Star
                    className="mr-1 h-4 w-4 text-yellow-500"
                    data-oid="47ev.g8"
                  />

                  <span className="font-medium" data-oid="5pw9t-f">
                    {quiz.rating}
                  </span>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="u608ocz"
              >
                <div className="flex items-center gap-1.5" data-oid="08-c94a">
                  <Users
                    className="h-3.5 w-3.5 text-muted-foreground"
                    data-oid="be78xi1"
                  />

                  <span className="text-sm" data-oid="cw8-6m:">
                    {formatPlayerCount(quiz.players)} players
                  </span>
                </div>
                <span className="font-medium text-green-600" data-oid="juvf__t">
                  {quiz.reward}
                </span>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="3gidp0o"
              >
                <p className="text-muted-foreground text-xs" data-oid="p7n0p-9">
                  {quiz.spotsLeft} spots left
                </p>
                <CircularProgress
                  color={
                    quiz.spotsLeft <= 20
                      ? "hsl(var(--destructive))"
                      : quiz.spotsLeft <= 50
                        ? "hsl(var(--warning))"
                        : "hsl(var(--primary))"
                  }
                  data-oid="v2jrd8e"
                  size={36}
                  strokeWidth={3}
                  value={calculateProgress(quiz.players, quiz.maxPlayers)}
                />
              </div>

              <Button asChild className="w-full" data-oid="skb.jcx">
                <Link data-oid="qu5_ajd" href={`/quiz/${quiz.id}`}>
                  Play Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-8" data-oid="9ntneyb">
          <PaginationContent data-oid="b41gax0">
            <PaginationItem data-oid="9w3k459">
              <PaginationPrevious
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
                data-oid=":8:96-5"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;

              // Show first page, current page, last page, and one page before and after current
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                pageNumber === currentPage ||
                pageNumber === currentPage - 1 ||
                pageNumber === currentPage + 1
              ) {
                return (
                  <PaginationItem data-oid="bc1uf_9" key={pageNumber}>
                    <PaginationLink
                      data-oid="oe5whbv"
                      isActive={pageNumber === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(pageNumber);
                      }}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              }

              // Show ellipsis if there's a gap
              if (
                (pageNumber === 2 && currentPage > 3) ||
                (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
              ) {
                return (
                  <PaginationItem data-oid="w7el7qq" key={pageNumber}>
                    <PaginationEllipsis data-oid=".2__zfh" />
                  </PaginationItem>
                );
              }

              return null;
            })}

            <PaginationItem data-oid="-rqi8w0">
              <PaginationNext
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
                data-oid="ueimy:o"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
