"use client";

import { Award, Clock, Crown, Flame, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample featured quiz data
const featuredQuizzes = [
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
    almostFull: false,
    recentPlayers: [
      { name: "Alex J.", avatar: "/avatars/alex.png" },
      { name: "Sarah W.", avatar: "/avatars/wizard.webp" },
      { name: "Mike B.", avatar: "/avatars/sarah.webp" },
      { name: "Emily D.", avatar: "/avatars/king.webp" },
    ],
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
    almostFull: true,
    recentPlayers: [
      { name: "David W.", avatar: "/avatars/champion.png" },
      { name: "Jessica T.", avatar: "/avatars/mind.webp" },
      { name: "Ryan M.", avatar: "/avatars/genious.png" },
      { name: "Olivia A.", avatar: "/avatars/brain.png" },
    ],
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
    almostFull: false,
    recentPlayers: [
      { name: "James K.", avatar: "/avatars/alex.png" },
      { name: "Sophia L.", avatar: "/avatars/wizard.webp" },
      { name: "Noah P.", avatar: "/avatars/sarah.webp" },
      { name: "Emma R.", avatar: "/avatars/king.webp" },
    ],
  },
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
    almostFull: true,
    recentPlayers: [
      { name: "William T.", avatar: "/avatars/champion.png" },
      { name: "Ava M.", avatar: "/avatars/mind.webp" },
      { name: "Liam S.", avatar: "/avatars/genious.png" },
      { name: "Mia J.", avatar: "/avatars/brain.png" },
    ],
  },
];

export function FeaturedQuizzes() {
  const [filter, setFilter] = useState("all");

  // Format time remaining
  const formatTimeRemaining = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `${days} day${days !== 1 ? "s" : ""} left`;
    }

    if (hours > 0) {
      return `${hours}h ${minutes}m left`;
    }

    return `${minutes}m left`;
  };

  // Format player count
  const formatPlayerCount = (count: number) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
  };

  // Get badge icon based on type
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case "hot":
        return <Flame className="mr-1 h-3 w-3" data-oid="7265hfv" />;
      case "editors":
        return <Award className="mr-1 h-3 w-3" data-oid="dxfojtc" />;
      case "trending":
        return <TrendingUp className="mr-1 h-3 w-3" data-oid="5rrl.f5" />;
      case "topRated":
        return <Star className="mr-1 h-3 w-3" data-oid="kly9et2" />;
      default:
        return <Crown className="mr-1 h-3 w-3" data-oid="n0jm-pc" />;
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
      default:
        return "default";
    }
  };

  // Calculate progress percentage
  const calculateProgress = (players: number, maxPlayers: number) => {
    return (players / maxPlayers) * 100;
  };

  // Filter quizzes based on selected filter
  const filteredQuizzes =
    filter === "all"
      ? featuredQuizzes
      : featuredQuizzes.filter((quiz) => quiz.badge.type === filter);

  return (
    <section className="space-y-4" data-oid="5yo3o27">
      <div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        data-oid="d5v9c.x"
      >
        <div className="space-y-1" data-oid="wanhrcc">
          <h2 className="font-bold text-2xl tracking-tight" data-oid="n6vx2kr">
            Featured Quizzes
          </h2>
          <p className="text-muted-foreground" data-oid="cutg3.q">
            Specially selected quizzes you don't want to miss
          </p>
        </div>

        <Tabs
          className="w-full sm:w-auto"
          data-oid="t8b_4ix"
          defaultValue="all"
          onValueChange={setFilter}
          value={filter}
        >
          <TabsList
            className="grid w-full grid-cols-4 sm:w-auto"
            data-oid="pz.akyo"
          >
            <TabsTrigger data-oid="657m_ss" value="all">
              All
            </TabsTrigger>
            <TabsTrigger data-oid="gx1i0ws" value="hot">
              Hot
            </TabsTrigger>
            <TabsTrigger data-oid="rcc:21g" value="trending">
              Trending
            </TabsTrigger>
            <TabsTrigger data-oid=".20kboe" value="editors">
              Editor's
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        data-oid="61s1g94"
      >
        {filteredQuizzes.map((quiz) => (
          <Card
            className="group overflow-hidden"
            data-oid="7ztfsy6"
            key={quiz.id}
          >
            <div className="relative overflow-hidden" data-oid="m2dgcd8">
              <Image
                alt={quiz.title}
                className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-oid="y7gax:y"
                height={350}
                src={quiz.image || "/placeholder.svg"}
                width={600}
              />

              <div
                className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4"
                data-oid="uga6ppi"
              >
                <h3
                  className="line-clamp-1 font-semibold text-white"
                  data-oid="ubz8p9c"
                >
                  {quiz.title}
                </h3>
                <p className="text-sm text-white/80" data-oid="7-9gnu:">
                  {quiz.category}
                </p>
              </div>

              <Badge
                className="absolute top-2 right-2 flex items-center"
                data-oid="e-114eb"
                variant={getBadgeVariant(quiz.badge.type)}
              >
                {getBadgeIcon(quiz.badge.type)}
                {quiz.badge.label}
              </Badge>

              {quiz.limitedTime && (
                <div
                  className="absolute top-2 left-2 flex items-center rounded-full bg-black/60 px-2 py-1 text-white text-xs"
                  data-oid="4uhiv90"
                >
                  <Clock className="mr-1 h-3 w-3" data-oid="9tzkf:8" />
                  {formatTimeRemaining(quiz.expiresIn as number)}
                </div>
              )}
            </div>

            <CardContent
              className="space-y-4 p-4 xl:space-y-6 xl:p-6"
              data-oid="10c69y7"
            >
              <div
                className="flex items-center justify-between gap-2"
                data-oid="2a09xu9"
              >
                <div className="flex items-center gap-3" data-oid=":3n0w.h">
                  <Image
                    alt="creator"
                    className="size-9 rounded-full object-cover object-center"
                    data-oid="26-9kbg"
                    height={36}
                    src={"/avatars/alex.png"}
                    width={36}
                  />

                  <div className="items-centere flex gap-2" data-oid="jnd_z9l">
                    <span className="font-medium" data-oid="faesai3">
                      Alex Smith
                    </span>
                    <div className="flex items-center" data-oid="vsw2_nd">
                      <Star
                        className="mr-1 h-4 w-4 fill-current text-yellow-500"
                        data-oid="gx28h73"
                      />

                      <span data-oid="7k5rz53">{quiz.rating}</span>
                    </div>
                  </div>
                </div>
                <div data-oid="b.otx65">
                  <p
                    className="text-muted-foreground text-xs"
                    data-oid="y1cnhyf"
                  >
                    Reward
                  </p>
                  <div
                    className="flex items-center justify-between text-sm"
                    data-oid="z5u4ned"
                  >
                    <span
                      className="font-medium text-green-600"
                      data-oid="ywag6nd"
                    >
                      {quiz.reward}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5" data-oid="974b_gt">
                <div className="flex items-center gap-3" data-oid="vcnx79z">
                  <CircularProgress
                    color={
                      quiz.spotsLeft < 20
                        ? "hsl(var(--destructive))"
                        : quiz.spotsLeft < 50
                          ? "hsl(var(--warning))"
                          : "hsl(var(--primary))"
                    }
                    data-oid="u:x3bt8"
                    showValue
                    size={36}
                    strokeWidth={3}
                    value={calculateProgress(quiz.players, quiz.maxPlayers)}
                  />

                  <div data-oid="0y42s4l">
                    <div
                      className="flex items-center gap-1.5"
                      data-oid=":q:9uzz"
                    >
                      <div className="-space-x-2 flex" data-oid="jnhafht">
                        {quiz.recentPlayers.slice(0, 3).map((player, index) => (
                          <Avatar
                            className="h-6 w-6 border-2 border-background"
                            data-oid=".j6-_5s"
                            key={index}
                          >
                            <AvatarImage
                              alt={player.name}
                              data-oid="w5:mo_d"
                              src={player.avatar || "/placeholder.svg"}
                            />

                            <AvatarFallback data-oid="oxysx88">
                              {player.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="font-medium text-sm" data-oid="ranuisw">
                        {formatPlayerCount(quiz.players)} players joined
                      </span>
                    </div>
                    <div
                      className="flex items-center justify-between"
                      data-oid="ifj1dy8"
                    >
                      {quiz.spotsLeft < 50 ? (
                        <p
                          className="font-medium text-amber-600 text-xs"
                          data-oid="qrp2mhw"
                        >
                          Only {quiz.spotsLeft} spots left
                        </p>
                      ) : (
                        <p
                          className="text-muted-foreground text-xs"
                          data-oid="ys8njbi"
                        >
                          {quiz.spotsLeft} spots available
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0" data-oid="eh7foj9">
              <Button asChild className="w-full" data-oid="2y7l7pb">
                <Link data-oid="pr2yphk" href={`/quiz/${quiz.id}`}>
                  Play Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
