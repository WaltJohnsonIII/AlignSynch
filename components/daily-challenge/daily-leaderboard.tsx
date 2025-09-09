"use client";

import { Award, Medal, Trophy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for the leaderboard
const leaderboardData = {
  today: [
    {
      id: 1,
      username: "QuizMaster",
      score: 100,
      time: 67,
      avatar: "/avatars/wizard.webp",
    },
    {
      id: 2,
      username: "BrainGenius",
      score: 100,
      time: 82,
      avatar: "/avatars/genious.png",
    },
    {
      id: 3,
      username: "KnowledgeKing",
      score: 80,
      time: 63,
      avatar: "/avatars/king.webp",
    },
    {
      id: 4,
      username: "QuizChampion",
      score: 80,
      time: 91,
      avatar: "/avatars/champion.png",
    },
    {
      id: 5,
      username: "MindGuru",
      score: 80,
      time: 104,
      avatar: "/avatars/guru.png",
    },
    {
      id: 6,
      username: "BrainMaster",
      score: 60,
      time: 75,
      avatar: "/avatars/brain.png",
    },
    {
      id: 7,
      username: "QuizWhiz",
      score: 60,
      time: 88,
      avatar: "/avatars/mind.webp",
    },
    {
      id: 8,
      username: "TriviaExpert",
      score: 60,
      time: 95,
      avatar: "/avatars/master.png",
    },
    {
      id: 9,
      username: "KnowledgeSeeker",
      score: 40,
      time: 72,
      avatar: "/avatars/alex.png",
    },
    {
      id: 10,
      username: "QuizNinja",
      score: 40,
      time: 86,
      avatar: "/avatars/sarah.webp",
    },
  ],

  week: [
    {
      id: 2,
      username: "BrainGenius",
      score: 680,
      time: 582,
      avatar: "/avatars/genious.png",
    },
    {
      id: 1,
      username: "QuizMaster",
      score: 640,
      time: 567,
      avatar: "/avatars/wizard.webp",
    },
    {
      id: 5,
      username: "MindGuru",
      score: 620,
      time: 604,
      avatar: "/avatars/guru.png",
    },
    {
      id: 3,
      username: "KnowledgeKing",
      score: 580,
      time: 563,
      avatar: "/avatars/king.webp",
    },
    {
      id: 4,
      username: "QuizChampion",
      score: 560,
      time: 591,
      avatar: "/avatars/champion.png",
    },
    {
      id: 8,
      username: "TriviaExpert",
      score: 520,
      time: 595,
      avatar: "/avatars/master.png",
    },
    {
      id: 7,
      username: "QuizWhiz",
      score: 500,
      time: 588,
      avatar: "/avatars/mind.webp",
    },
    {
      id: 6,
      username: "BrainMaster",
      score: 480,
      time: 575,
      avatar: "/avatars/brain.png",
    },
    {
      id: 10,
      username: "QuizNinja",
      score: 440,
      time: 586,
      avatar: "/avatars/sarah.webp",
    },
    {
      id: 9,
      username: "KnowledgeSeeker",
      score: 400,
      time: 572,
      avatar: "/avatars/alex.png",
    },
  ],

  allTime: [
    {
      id: 1,
      username: "QuizMaster",
      score: 9840,
      time: 8567,
      avatar: "/avatars/wizard.webp",
    },
    {
      id: 2,
      username: "BrainGenius",
      score: 9680,
      time: 8582,
      avatar: "/avatars/genious.png",
    },
    {
      id: 3,
      username: "KnowledgeKing",
      score: 9580,
      time: 8563,
      avatar: "/avatars/king.webp",
    },
    {
      id: 5,
      username: "MindGuru",
      score: 9320,
      time: 8604,
      avatar: "/avatars/guru.png",
    },
    {
      id: 4,
      username: "QuizChampion",
      score: 9160,
      time: 8591,
      avatar: "/avatars/champion.png",
    },
    {
      id: 8,
      username: "TriviaExpert",
      score: 8920,
      time: 8595,
      avatar: "/avatars/master.png",
    },
    {
      id: 6,
      username: "BrainMaster",
      score: 8780,
      time: 8575,
      avatar: "/avatars/brain.png",
    },
    {
      id: 7,
      username: "QuizWhiz",
      score: 8500,
      time: 8588,
      avatar: "/avatars/mind.webp",
    },
    {
      id: 10,
      username: "QuizNinja",
      score: 8240,
      time: 8586,
      avatar: "/avatars/sarah.webp",
    },
    {
      id: 9,
      username: "KnowledgeSeeker",
      score: 8000,
      time: 8572,
      avatar: "/avatars/alex.png",
    },
  ],
};

export function DailyLeaderboard() {
  const [activeTab, setActiveTab] = useState("today");

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getLeaderboardData = () => {
    switch (activeTab) {
      case "week":
        return leaderboardData.week;
      case "allTime":
        return leaderboardData.allTime;
      default:
        return leaderboardData.today;
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 0)
      return <Trophy className="h-5 w-5 text-amber-500" data-oid="xodeym:" />;
    if (rank === 1)
      return <Medal className="h-5 w-5 text-slate-400" data-oid="-izq_1j" />;
    if (rank === 2)
      return <Award className="h-5 w-5 text-amber-700" data-oid="u73audi" />;
    return null;
  };

  return (
    <Card className="shadow-sm" data-oid="-2kd4db">
      <CardHeader className="px-2 pb-2 md:px-4" data-oid="0eymjh_">
        <CardTitle className="text-xl" data-oid="vp4wiae">
          Leaderboard
        </CardTitle>
      </CardHeader>

      <Tabs data-oid="-4ncuvi" onValueChange={setActiveTab} value={activeTab}>
        <div className="px-2 md:px-4" data-oid="kxl0cbk">
          <TabsList className="grid w-full grid-cols-3" data-oid="eut0a9u">
            <TabsTrigger data-oid="ep4nao:" value="today">
              Today
            </TabsTrigger>
            <TabsTrigger data-oid="aka.5pu" value="week">
              Week
            </TabsTrigger>
            <TabsTrigger data-oid="-0ciqcr" value="allTime">
              All Time
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent className="m-0" data-oid="bddlic6" value={activeTab}>
          <CardContent className="p-2 md:p-4 xl:pt-6" data-oid=":7j-kwd">
            <div className="space-y-2" data-oid="8swy2x4">
              {getLeaderboardData().map((user, index) => (
                <div
                  className={`flex items-center justify-between rounded-lg p-2 ${index < 3 ? "bg-muted/50" : ""}`}
                  data-oid="jl4bjz6"
                  key={user.id}
                >
                  <div
                    className="flex items-center space-x-2 md:space-x-3"
                    data-oid="3aiuw-n"
                  >
                    <div
                      className="flex w-6 items-center justify-center"
                      data-oid="7uh8c3r"
                    >
                      {index < 3 ? (
                        getRankIcon(index)
                      ) : (
                        <span
                          className="font-medium text-muted-foreground text-sm"
                          data-oid="r_l::ua"
                        >
                          {index + 1}
                        </span>
                      )}
                    </div>

                    <Avatar className="h-8 w-8" data-oid="64a3w0q">
                      <AvatarImage
                        alt={user.username}
                        data-oid="z9:8v1-"
                        src={user.avatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="3041-o3">
                        {user.username.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    <Link
                      className="max-w-[100px] truncate font-medium text-sm duration-300 hover:underline sm:max-w-[150px]"
                      data-oid="zrvpiot"
                      href={`/profile/${user.username}`}
                    >
                      {user.username}
                    </Link>
                  </div>

                  <div
                    className="flex items-center space-x-4"
                    data-oid="v18nb2t"
                  >
                    <div className="text-sm" data-oid="2hfrg6e">
                      <span className="font-medium" data-oid="ipispaj">
                        {user.score}
                      </span>
                      <span
                        className="ml-1 text-muted-foreground text-xs"
                        data-oid="1nh9dlj"
                      >
                        pts
                      </span>
                    </div>

                    <div
                      className="text-muted-foreground text-xs"
                      data-oid="or9kf:k"
                    >
                      {activeTab === "today" ? formatTime(user.time) : ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
