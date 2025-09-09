"use client";

import {
  Award,
  ChevronRight,
  Clock,
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample featured quiz data
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
      limitedTime: false,
      expiresIn: 172_800,
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
      spotsLeft: 37,
      reward: "$6.50",
      limitedTime: false,
      expiresIn: 172_800,
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
      reward: "$7.50",
      limitedTime: false,
      expiresIn: 172_800,
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
      reward: "$5.00",
      limitedTime: false,
      expiresIn: 172_800,
      createdBy: "BookWorm",
      creatorAvatar: "/avatars/mind.webp",
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
      reward: "$5.50",
      limitedTime: false,
      expiresIn: 172_800,
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
      reward: "$3.00",
      limitedTime: false,
      expiresIn: 172_800,
      createdBy: "SportsNut",
      creatorAvatar: "/avatars/guru.png",
    },
  ],
};
type Tabs = "trending" | "popular" | "new";
export function ExploreFeatured() {
  const [activeTab, setActiveTab] = useState<Tabs>("trending");

  // Get badge icon based on type
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case "hot":
        return <Flame className="mr-1 h-3 w-3" data-oid="1:5_-m3" />;
      case "editors":
        return <Award className="mr-1 h-3 w-3" data-oid="34-dq9d" />;
      case "trending":
        return <TrendingUp className="mr-1 h-3 w-3" data-oid="oio4apm" />;
      case "topRated":
        return <Star className="mr-1 h-3 w-3" data-oid="azxmpui" />;
      case "popular":
        return <Award className="mr-1 h-3 w-3" data-oid="eg8r73v" />;
      case "new":
        return <Award className="mr-1 h-3 w-3" data-oid="h0jxmg2" />;
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

  return (
    <section className="space-y-4" data-oid="l9rxb1t">
      <div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        data-oid="-rfud:h"
      >
        <div data-oid="s9i.fg2">
          <h2 className="font-bold text-2xl tracking-tight" data-oid="haq27k6">
            Featured Quizzes
          </h2>
          <p className="text-muted-foreground" data-oid="j.gl0jw">
            Specially selected quizzes you don't want to miss
          </p>
        </div>

        <Tabs
          data-oid="5ijwd92"
          defaultValue="trending"
          onValueChange={(value) =>
            setActiveTab(value as "trending" | "popular" | "new")
          }
          value={activeTab}
        >
          <TabsList data-oid="0g2363i">
            <TabsTrigger data-oid="r5qeum6" value="trending">
              Trending
            </TabsTrigger>
            <TabsTrigger data-oid=".l4dzxy" value="popular">
              Popular
            </TabsTrigger>
            <TabsTrigger data-oid="1uocnn8" value="new">
              New
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        data-oid="lv3w3d3"
      >
        {featuredQuizzes[activeTab].map((quiz) => (
          <Card
            className="group overflow-hidden"
            data-oid="v5x5f5v"
            key={quiz.id}
          >
            <div className="relative" data-oid="6xtg9vd">
              <Image
                alt={quiz.title}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-oid="jw21lx5"
                height={350}
                src={quiz.image || "/placeholder.svg"}
                width={600}
              />

              <div
                className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4"
                data-oid="uu7tvuw"
              >
                <h3
                  className="line-clamp-2 font-semibold text-white"
                  data-oid="gx1u036"
                >
                  {quiz.title}
                </h3>
                <div
                  className="mt-2 flex items-center justify-between"
                  data-oid="kv3kmv6"
                >
                  <p className="text-sm text-white/80" data-oid=".05oezr">
                    {quiz.category}
                  </p>
                  <Badge
                    className="flex items-center"
                    data-oid="ez33lru"
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
                  data-oid="8gjh173"
                >
                  <Clock className="mr-1 h-3 w-3" data-oid="uzelv5h" />
                  {quiz.expiresIn > 86_400
                    ? `${Math.floor(quiz.expiresIn / 86_400)}d left`
                    : `${Math.floor(quiz.expiresIn / 3600)}h left`}
                </div>
              )}
            </div>

            <CardContent className="space-y-3 p-4" data-oid="zqi5yn0">
              <div
                className="flex items-center justify-between"
                data-oid="g9nnb_9"
              >
                <div className="flex items-center gap-2" data-oid="erzqdc-">
                  <Avatar className="h-6 w-6" data-oid="46ukcip">
                    <AvatarImage
                      alt={quiz.createdBy}
                      data-oid="qhvqhfi"
                      src={quiz.creatorAvatar || "/placeholder.svg"}
                    />

                    <AvatarFallback data-oid="n55k-sz">
                      {quiz.createdBy.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span
                    className="text-muted-foreground text-sm"
                    data-oid="-s93mh3"
                  >
                    {quiz.createdBy}
                  </span>
                </div>
                <div className="flex items-center" data-oid="83wv7bu">
                  <Star
                    className="mr-1 h-4 w-4 text-yellow-500"
                    data-oid="0dbaiik"
                  />

                  <span className="font-medium" data-oid="23fd4.y">
                    {quiz.rating}
                  </span>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="2zot1w4"
              >
                <div className="flex items-center gap-1.5" data-oid="7:ua:cx">
                  <Users
                    className="h-3.5 w-3.5 text-muted-foreground"
                    data-oid="w:dfdje"
                  />

                  <span className="text-sm" data-oid="3o7zpjb">
                    {formatPlayerCount(quiz.players)} players
                  </span>
                </div>
                <span className="font-medium text-green-600" data-oid="vwpvzwd">
                  {quiz.reward}
                </span>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="28yvbrk"
              >
                <p className="text-muted-foreground text-xs" data-oid="c30cf_y">
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
                  data-oid="5ozygni"
                  size={36}
                  strokeWidth={3}
                  value={calculateProgress(quiz.players, quiz.maxPlayers)}
                />
              </div>

              <Button asChild className="w-full" data-oid="xjiva1p">
                <Link data-oid="ubnjmp4" href={`/quiz/${quiz.id}`}>
                  Play Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center" data-oid="gd8u7bw">
        <Button asChild className="gap-1" data-oid="93vz_5k" variant="outline">
          <Link data-oid="vq3o-j6" href="/explore/featured">
            View All Featured Quizzes
            <ChevronRight className="h-4 w-4" data-oid="th27ga7" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
