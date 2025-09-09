"use client";

import { ChevronRight, DollarSign, TrendingUp, Trophy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Player = {
  id: number;
  username: string;
  avatar: string;
  earnings?: number;
  quizzes: number;
  badge: string;
  score?: number;
};
type TopPlayers = {
  earnings: Player[];
  score: Player[];
};
// Sample top players data
const topPlayers: TopPlayers = {
  earnings: [
    {
      id: 1,
      username: "AlexMaster",
      avatar: "/avatars/alex.png",
      earnings: 1250.75,
      quizzes: 42,
      badge: "diamond",
    },
    {
      id: 2,
      username: "QuizWizard",
      avatar: "/avatars/wizard.webp",
      earnings: 980.5,
      quizzes: 38,
      badge: "platinum",
    },
    {
      id: 3,
      username: "BrainiacSarah",
      avatar: "/avatars/sarah.webp",
      earnings: 875.25,
      quizzes: 35,
      badge: "gold",
    },
    {
      id: 4,
      username: "TriviaKing",
      avatar: "/avatars/king.webp",
      earnings: 720.8,
      quizzes: 31,
      badge: "gold",
    },
    {
      id: 5,
      username: "QuizChampion",
      avatar: "/avatars/champion.png",
      earnings: 695.4,
      quizzes: 29,
      badge: "silver",
    },
  ],

  score: [
    {
      id: 6,
      username: "MindMaster",
      avatar: "/avatars/mind.webp",
      score: 9850,
      quizzes: 47,
      badge: "diamond",
    },
    {
      id: 7,
      username: "QuizGenius",
      avatar: "/avatars/genious.png",
      score: 8720,
      quizzes: 42,
      badge: "platinum",
    },
    {
      id: 8,
      username: "BrainPower",
      avatar: "/avatars/brain.png",
      score: 7640,
      quizzes: 38,
      badge: "gold",
    },
    {
      id: 9,
      username: "KnowledgeGuru",
      avatar: "/avatars/guru.png",
      score: 6980,
      quizzes: 35,
      badge: "gold",
    },
    {
      id: 10,
      username: "QuizMaster",
      avatar: "/avatars/master.png",
      score: 6540,
      quizzes: 32,
      badge: "silver",
    },
  ],
};

export function TopPlayers() {
  const [leaderboardType, setLeaderboardType] = useState("earnings");

  // Get badge color based on badge type
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "diamond":
        return "bg-gradient-to-r from-blue-400 to-purple-500";
      case "platinum":
        return "bg-gradient-to-r from-slate-300 to-slate-400";
      case "gold":
        return "bg-gradient-to-r from-amber-300 to-yellow-500";
      case "silver":
        return "bg-gradient-to-r from-slate-200 to-slate-300";
      default:
        return "bg-gradient-to-r from-stone-300 to-stone-400";
    }
  };

  // Get players based on selected leaderboard type
  const players =
    leaderboardType === "earnings" ? topPlayers.earnings : topPlayers.score;

  return (
    <section className="space-y-4" data-oid="5balpw-">
      <div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        data-oid="4z_7hy1"
      >
        <div className="space-y-1" data-oid="tosmoo_">
          <div className="flex items-center gap-2" data-oid="dv2h5qs">
            <Trophy className="h-6 w-6 text-amber-500" data-oid=".un9c:x" />
            <h2
              className="font-bold text-2xl tracking-tight"
              data-oid="a6xyjo5"
            >
              Top Players
            </h2>
          </div>
          <p className="text-muted-foreground" data-oid="bsfe4zl">
            This week's highest performers
          </p>
        </div>

        <Tabs
          className="w-full sm:w-auto"
          data-oid="crlb-qk"
          defaultValue="earnings"
          onValueChange={setLeaderboardType}
          value={leaderboardType}
        >
          <TabsList
            className="grid w-full grid-cols-2 sm:w-auto"
            data-oid="plgdei_"
          >
            <TabsTrigger
              className="flex items-center gap-1"
              data-oid="i34_7fj"
              value="earnings"
            >
              <DollarSign className="h-3.5 w-3.5" data-oid="1u7gnza" />
              <span data-oid=":c3k78h">Top Earners</span>
            </TabsTrigger>
            <TabsTrigger
              className="flex items-center gap-1"
              data-oid="hvq_ga6"
              value="score"
            >
              <TrendingUp className="h-3.5 w-3.5" data-oid="d5cqtll" />
              <span data-oid=":jmr5et">High Scores</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Card data-oid="l:58si8">
        <CardHeader className="pb-3" data-oid="7fufszz">
          <CardTitle className="text-lg" data-oid="og8zjh8">
            Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent data-oid="l_vmj_i">
          <div className="space-y-4" data-oid="d5m0qwf">
            {players.map((player: Player, index) => (
              <div
                className="flex items-center justify-between"
                data-oid="-jr:ipp"
                key={player.id}
              >
                <div className="flex items-center gap-3" data-oid="cy:4px9">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-muted font-semibold"
                    data-oid="vim7k_7"
                  >
                    {index + 1}
                  </div>
                  <Avatar
                    className="h-10 w-10 border-2"
                    data-oid="gm.9o6:"
                    style={{
                      borderColor: `var(--${player.badge}-color, #e2e8f0)`,
                    }}
                  >
                    <AvatarImage
                      alt={player.username}
                      data-oid="345gyh:"
                      src={
                        player.avatar ||
                        `/placeholder.svg?height=40&width=40&query=avatar ${player.username}`
                      }
                    />

                    <AvatarFallback
                      className={getBadgeColor(player.badge)}
                      data-oid="wdgtdit"
                    >
                      {player.username.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div data-oid="dbw46hr">
                    <div className="flex items-center gap-2" data-oid="mn7dp2:">
                      <span className="font-medium" data-oid="lm72dca">
                        {player.username}
                      </span>
                      <Badge
                        className="text-xs capitalize"
                        data-oid="w6c5nmf"
                        variant="outline"
                      >
                        {player.badge}
                      </Badge>
                    </div>
                    <p
                      className="text-muted-foreground text-xs"
                      data-oid="a6ug-wy"
                    >
                      {player.quizzes} quizzes completed
                    </p>
                  </div>
                </div>
                <div className="text-right" data-oid="tgz5rca">
                  <div className="font-semibold" data-oid="o.p5x:n">
                    {leaderboardType === "earnings" ? (
                      <span className="text-green-600" data-oid="zph8pm.">
                        ${player.earnings!.toFixed(2)}
                      </span>
                    ) : (
                      <span data-oid="tnsgm42">
                        {player?.score?.toLocaleString()} pts
                      </span>
                    )}
                  </div>
                  <p
                    className="text-muted-foreground text-xs"
                    data-oid="podg.2k"
                  >
                    This week
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-2" data-oid="ht1lrbl">
              <Button
                asChild
                className="w-full"
                data-oid="nkduii6"
                variant="outline"
              >
                <Link
                  className="flex items-center justify-center gap-1"
                  data-oid="a9:uvw2"
                  href="/leaderboard"
                >
                  View Full Leaderboard
                  <ChevronRight className="h-4 w-4" data-oid="841l9ce" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
