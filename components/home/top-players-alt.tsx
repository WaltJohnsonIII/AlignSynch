"use client";

import { ChevronRight, Trophy } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample top players data
const topPlayers = [
  {
    id: 1,
    username: "AlexMaster",
    avatar: "/avatars/alex.png",
    earnings: 1250.75,
    score: 9850,
    rank: 1,
  },
  {
    id: 2,
    username: "QuizWizard",
    avatar: "/avatars/wizard.webp",
    earnings: 980.5,
    score: 8720,
    rank: 2,
  },
  {
    id: 3,
    username: "BrainiacSarah",
    avatar: "/avatars/sarah.webp",
    earnings: 875.25,
    score: 7640,
    rank: 3,
  },
  {
    id: 4,
    username: "TriviaKing",
    avatar: "/avatars/king.webp",
    earnings: 720.8,
    score: 6980,
    rank: 4,
  },
  {
    id: 5,
    username: "QuizChampion",
    avatar: "/avatars/champion.png",
    earnings: 695.4,
    score: 6540,
    rank: 5,
  },
];

export function TopPlayers() {
  // Get medal color based on rank
  const getMedalColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "text-yellow-500";
      case 2:
        return "text-slate-400";
      case 3:
        return "text-amber-700";
      default:
        return "text-slate-300";
    }
  };

  return (
    <section className="space-y-4" data-oid=":0zjmni">
      <div className="flex items-center justify-between" data-oid="0eqr9x0">
        <div className="flex items-center gap-2" data-oid="t3o8ya-">
          <Trophy className="h-6 w-6 text-yellow-500" data-oid="q:e-7.m" />
          <h2 className="font-bold text-2xl tracking-tight" data-oid="c8tuc-6">
            Weekly Leaderboard
          </h2>
        </div>
        <Tabs
          className="hidden sm:block"
          data-oid="gjn_:d6"
          defaultValue="earnings"
        >
          <TabsList data-oid="l9.mcv5">
            <TabsTrigger data-oid="uee53cc" value="earnings">
              Top Earners
            </TabsTrigger>
            <TabsTrigger data-oid="4rt2d-_" value="score">
              High Scores
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-4 md:grid-cols-3" data-oid="e9eqjk2">
        {/* Top 3 Players - Podium */}
        <Card
          className="overflow-hidden bg-gradient-to-r from-slate-50 to-slate-100 md:col-span-3 dark:from-slate-900 dark:to-slate-800"
          data-oid="56y5q8y"
        >
          <CardContent className="p-0" data-oid="a5ddys4">
            <div
              className="flex flex-col items-center justify-center gap-4 p-6 sm:flex-row sm:gap-8"
              data-oid="2vt5o.x"
            >
              {/* 2nd Place */}
              <div
                className="order-2 flex flex-col items-center sm:order-1"
                data-oid="jvzd4uz"
              >
                <div className="relative mb-2" data-oid="bpe7jw-">
                  <Avatar
                    className="h-20 w-20 border-4 border-slate-300"
                    data-oid="0.i__5p"
                  >
                    <AvatarImage
                      alt={topPlayers[1].username}
                      data-oid="y-8w6rx"
                      src={topPlayers[1].avatar || "/placeholder.svg"}
                    />

                    <AvatarFallback data-oid="5:w1q_i">
                      {topPlayers[1].username.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className="-bottom-2 -translate-x-1/2 absolute left-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 font-bold text-white"
                    data-oid="-91i.rg"
                  >
                    2
                  </div>
                </div>
                <h3 className="font-semibold" data-oid="gn5mst1">
                  {topPlayers[1].username}
                </h3>
                <p className="font-medium text-green-600" data-oid="qa2z056">
                  ${topPlayers[1].earnings.toFixed(2)}
                </p>
              </div>

              {/* 1st Place */}
              <div
                className="order-1 flex flex-col items-center sm:order-2"
                data-oid="cxvp5g2"
              >
                <div className="relative mb-2" data-oid="ytj--kq">
                  <div
                    className="-top-6 -translate-x-1/2 absolute left-1/2 transform"
                    data-oid="21zinjr"
                  >
                    <svg
                      data-oid="xayqhbv"
                      fill="none"
                      height="40"
                      viewBox="0 0 24 24"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4L14.5 9.5L20.5 10L16 14L17.5 20L12 17L6.5 20L8 14L3.5 10L9.5 9.5L12 4Z"
                        data-oid="a7rfmdx"
                        fill="#EAB308"
                        stroke="#EAB308"
                      />
                    </svg>
                  </div>
                  <Avatar
                    className="h-24 w-24 border-4 border-yellow-400"
                    data-oid="3ftrr.x"
                  >
                    <AvatarImage
                      alt={topPlayers[0].username}
                      data-oid="hwh_r7x"
                      src={topPlayers[0].avatar || "/placeholder.svg"}
                    />

                    <AvatarFallback data-oid="63b9.ai">
                      {topPlayers[0].username.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className="-bottom-2 -translate-x-1/2 absolute left-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 font-bold text-white"
                    data-oid="z2kug3n"
                  >
                    1
                  </div>
                </div>
                <h3 className="font-bold text-lg" data-oid="ghrdh-h">
                  {topPlayers[0].username}
                </h3>
                <p className="font-bold text-green-600" data-oid="3wd:cgn">
                  ${topPlayers[0].earnings.toFixed(2)}
                </p>
              </div>

              {/* 3rd Place */}
              <div
                className="order-3 flex flex-col items-center"
                data-oid="ush2_zk"
              >
                <div className="relative mb-2" data-oid="_u6r-c6">
                  <Avatar
                    className="h-16 w-16 border-4 border-amber-700"
                    data-oid="ysh::s."
                  >
                    <AvatarImage
                      alt={topPlayers[2].username}
                      data-oid="9:5c29m"
                      src={topPlayers[2].avatar || "/placeholder.svg"}
                    />

                    <AvatarFallback data-oid="l04:prv">
                      {topPlayers[2].username.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className="-bottom-2 -translate-x-1/2 absolute left-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-700 font-bold text-white"
                    data-oid="aw7p79w"
                  >
                    3
                  </div>
                </div>
                <h3 className="font-semibold" data-oid="u6etn-x">
                  {topPlayers[2].username}
                </h3>
                <p className="font-medium text-green-600" data-oid="_lnp2jr">
                  ${topPlayers[2].earnings.toFixed(2)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Remaining Top Players */}
        <Card className="md:col-span-3" data-oid="aj6x:8:">
          <CardHeader className="pb-2" data-oid="6a_62ap">
            <CardTitle className="text-lg" data-oid="ldigabd">
              Other Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="ajqad-l">
            <div className="space-y-3" data-oid="t6mpxka">
              {topPlayers.slice(3).map((player) => (
                <div
                  className="flex items-center justify-between border-b py-2 last:border-0"
                  data-oid="l5-wgxx"
                  key={player.id}
                >
                  <div className="flex items-center gap-3" data-oid="prfkytb">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-semibold"
                      data-oid="9hcengh"
                    >
                      {player.rank}
                    </div>
                    <Avatar className="h-10 w-10" data-oid="q5jpjul">
                      <AvatarImage
                        alt={player.username}
                        data-oid="ro.k9qe"
                        src={player.avatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="tvdoo25">
                        {player.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium" data-oid=".okl.r6">
                      {player.username}
                    </span>
                  </div>
                  <div
                    className="font-medium text-green-600"
                    data-oid="06jym0q"
                  >
                    ${player.earnings.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4" data-oid="o3htvl7">
              <Button
                asChild
                className="w-full"
                data-oid="0_n6iu1"
                variant="outline"
              >
                <Link
                  className="flex items-center justify-center gap-1"
                  data-oid="uniar4g"
                  href="/leaderboard"
                >
                  View Full Leaderboard
                  <ChevronRight className="h-4 w-4" data-oid="kuopv3j" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
