"use client";

import {
  ArrowDown,
  ArrowUp,
  Award,
  Medal,
  Minus,
  Search,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Tournament } from "./tournament-detail";

interface TournamentLeaderboardProps {
  tournament: Tournament;
}

export function TournamentLeaderboard({
  tournament,
}: TournamentLeaderboardProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [roundFilter, setRoundFilter] = useState("all");

  // Mock leaderboard data
  const leaderboardData = [
    {
      rank: 1,
      previousRank: 2,
      username: "QuizWizard",
      name: "Alex Johnson",
      avatar: "/avatars/wizard.webp",
      score: 980,
      accuracy: 98,
      streak: 15,
      country: "US",
    },
    {
      rank: 2,
      previousRank: 1,
      username: "BrainMaster",
      name: "Sarah Chen",
      avatar: "/avatars/brain.png",
      score: 945,
      accuracy: 94,
      streak: 12,
      country: "CA",
    },
    {
      rank: 3,
      previousRank: 5,
      username: "KnowledgeKing",
      name: "Michael Smith",
      avatar: "/avatars/king.webp",
      score: 920,
      accuracy: 92,
      streak: 10,
      country: "UK",
    },
    {
      rank: 4,
      previousRank: 3,
      username: "QuizChampion",
      name: "Emma Wilson",
      avatar: "/avatars/champion.png",
      score: 890,
      accuracy: 89,
      streak: 8,
      country: "AU",
    },
    {
      rank: 5,
      previousRank: 4,
      username: "GeniusQuizzer",
      name: "David Lee",
      avatar: "/avatars/genious.png",
      score: 875,
      accuracy: 87,
      streak: 7,
      country: "SG",
    },
    {
      rank: 6,
      previousRank: 6,
      username: "MindMaster",
      name: "Olivia Brown",
      avatar: "/avatars/mind.webp",
      score: 840,
      accuracy: 84,
      streak: 6,
      country: "DE",
    },
    {
      rank: 7,
      previousRank: 9,
      username: "QuizGuru",
      name: "James Wilson",
      avatar: "/avatars/guru.png",
      score: 820,
      accuracy: 82,
      streak: 5,
      country: "FR",
    },
    {
      rank: 8,
      previousRank: 7,
      username: "KnowledgeMaster",
      name: "Sophia Garcia",
      avatar: "/avatars/master.png",
      score: 795,
      accuracy: 79,
      streak: 4,
      country: "ES",
    },
    {
      rank: 9,
      previousRank: 8,
      username: "QuizGenius",
      name: "Daniel Kim",
      avatar: "/avatars/genious.png",
      score: 780,
      accuracy: 78,
      streak: 3,
      country: "KR",
    },
    {
      rank: 10,
      previousRank: 10,
      username: "BrainWave",
      name: "Ava Martinez",
      avatar: "/avatars/brain.png",
      score: 760,
      accuracy: 76,
      streak: 2,
      country: "MX",
    },
  ];

  // Filter leaderboard data based on search query
  const filteredData = leaderboardData.filter(
    (player) =>
      player.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to render rank change indicator
  const renderRankChange = (current: number, previous: number) => {
    if (current < previous) {
      return (
        <div className="flex items-center text-green-500" data-oid="wy78b76">
          <ArrowUp className="mr-1 h-4 w-4" data-oid="65xryrb" />
          {previous - current}
        </div>
      );
    }
    if (current > previous) {
      return (
        <div className="flex items-center text-red-500" data-oid="z6k_s8s">
          <ArrowDown className="mr-1 h-4 w-4" data-oid="5-q1qw5" />
          {current - previous}
        </div>
      );
    }
    return (
      <div className="flex items-center text-gray-400" data-oid="916b1yz">
        <Minus className="mr-1 h-4 w-4" data-oid="yyi_peo" />0
      </div>
    );
  };

  // Function to render rank medal for top 3
  const renderRankMedal = (rank: number) => {
    if (rank === 1) {
      return <Trophy className="h-5 w-5 text-amber-500" data-oid="jr30too" />;
    }
    if (rank === 2) {
      return <Medal className="h-5 w-5 text-gray-400" data-oid="tz74f49" />;
    }
    if (rank === 3) {
      return <Award className="h-5 w-5 text-amber-700" data-oid="711i4wf" />;
    }
    return (
      <span className="font-medium" data-oid="nj1nynt">
        {rank}
      </span>
    );
  };

  return (
    <div className="space-y-6" data-oid="lcg:qk6">
      <Card data-oid="ny4y33e">
        <CardHeader data-oid="-ywe:ji">
          <div
            className="flex flex-col justify-between gap-4 md:flex-row md:items-center"
            data-oid=":xi.3xd"
          >
            <CardTitle data-oid="bm.54du">Tournament Leaderboard</CardTitle>
            <div className="flex flex-col gap-4 sm:flex-row" data-oid="byftn-8">
              <div className="relative" data-oid="4jmn:bi">
                <Search
                  className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground"
                  data-oid="viqpjws"
                />

                <Input
                  className="w-full pl-8 sm:w-[200px]"
                  data-oid="pmtg3xb"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search players..."
                  value={searchQuery}
                />
              </div>
              <Select
                data-oid="w_so927"
                onValueChange={setRoundFilter}
                value={roundFilter}
              >
                <SelectTrigger
                  className="w-full sm:w-[150px]"
                  data-oid="g735wtk"
                >
                  <SelectValue
                    data-oid="wwx7dbm"
                    placeholder="Filter by round"
                  />
                </SelectTrigger>
                <SelectContent data-oid="9yc1yka">
                  <SelectItem data-oid="ek1qdhu" value="all">
                    All Rounds
                  </SelectItem>
                  <SelectItem data-oid="c9jqmzs" value="1">
                    Round 1
                  </SelectItem>
                  <SelectItem data-oid="za2ga:n" value="2">
                    Round 2
                  </SelectItem>
                  {tournament.rounds >= 3 && (
                    <SelectItem data-oid="44-u6c5" value="3">
                      Round 3
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent data-oid="wqizzv4">
          <div
            className="w-full overflow-x-auto whitespace-nowrap rounded-md border"
            data-oid="lnuewlu"
          >
            <Table data-oid="f3ca7g2">
              <TableHeader data-oid="5uaqnu:">
                <TableRow data-oid="r2i2uft">
                  <TableHead className="w-[80px]" data-oid="ct636tl">
                    Rank
                  </TableHead>
                  <TableHead data-oid=":ypcsun">Player</TableHead>
                  <TableHead className="text-right" data-oid="t.fho8u">
                    Score
                  </TableHead>
                  <TableHead
                    className="hidden text-right md:table-cell"
                    data-oid="_-6x-15"
                  >
                    Accuracy
                  </TableHead>
                  <TableHead
                    className="hidden text-right md:table-cell"
                    data-oid="5-ke78a"
                  >
                    Best Streak
                  </TableHead>
                  <TableHead
                    className="hidden text-right md:table-cell"
                    data-oid="rl50x9n"
                  >
                    Change
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody data-oid="61vxmj1">
                {filteredData.length === 0 ? (
                  <TableRow data-oid="jf-x::k">
                    <TableCell
                      className="py-8 text-center text-muted-foreground"
                      colSpan={6}
                      data-oid="y--4wyu"
                    >
                      No players found matching your search
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredData.map((player) => (
                    <TableRow data-oid="fmu2mdu" key={player.username}>
                      <TableCell className="font-medium" data-oid="kgr501v">
                        <div
                          className="flex items-center justify-center"
                          data-oid="h_dg9_e"
                        >
                          {renderRankMedal(player.rank)}
                        </div>
                      </TableCell>
                      <TableCell data-oid="isq.vso">
                        <div
                          className="flex items-center gap-3"
                          data-oid="41cm_n5"
                        >
                          <div className="relative h-8 w-8" data-oid="mcflqoc">
                            <Image
                              alt={player.username}
                              className="rounded-full object-cover"
                              data-oid="ykp4.de"
                              fill
                              src={player.avatar || "/placeholder.svg"}
                            />

                            <div
                              className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"
                              data-oid="val-92b"
                            />
                          </div>
                          <div data-oid="t8tyoj8">
                            <div className="font-medium" data-oid="6gjfjhk">
                              {player.username}
                            </div>
                            <div
                              className="hidden text-muted-foreground text-xs md:block"
                              data-oid="s.n6vs7"
                            >
                              {player.name}
                            </div>
                          </div>
                          <Badge
                            className="ml-2 hidden lg:inline-flex"
                            data-oid="lhpmlpg"
                            variant="outline"
                          >
                            {player.country}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell
                        className="text-right font-bold"
                        data-oid="z7mib0r"
                      >
                        {player.score}
                      </TableCell>
                      <TableCell
                        className="hidden text-right md:table-cell"
                        data-oid="nstsa-1"
                      >
                        {player.accuracy}%
                      </TableCell>
                      <TableCell
                        className="hidden text-right md:table-cell"
                        data-oid="n32:r8c"
                      >
                        {player.streak}
                      </TableCell>
                      <TableCell
                        className="hidden text-right md:table-cell"
                        data-oid="l6l1u_9"
                      >
                        {renderRankChange(player.rank, player.previousRank)}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <div
            className="mt-4 text-center text-muted-foreground text-sm"
            data-oid="h73jhgc"
          >
            Showing {filteredData.length} of {leaderboardData.length} players
          </div>

          <div className="mt-6 flex justify-center" data-oid="q9bqgc9">
            <Button data-oid="j8e9r9_" size="sm" variant="outline">
              View Full Leaderboard
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card data-oid="b2r8m4-">
        <CardHeader data-oid="yo1e-b2">
          <CardTitle data-oid="r0xbgqd">Your Performance</CardTitle>
        </CardHeader>
        <CardContent data-oid="qwccpl1">
          <div className="rounded-md border p-4" data-oid="7c:1s67">
            <div
              className="flex flex-col items-center justify-between gap-4 sm:flex-row"
              data-oid="8fqsvus"
            >
              <div className="flex items-center gap-3" data-oid="ngf_3co">
                <div className="relative h-12 w-12" data-oid=".-dhc89">
                  <Image
                    alt="Your Avatar"
                    className="rounded-full object-cover"
                    data-oid="3agug72"
                    fill
                    src="/avatars/alex.png"
                  />
                </div>
                <div data-oid=".c1yigz">
                  <div className="font-medium" data-oid="ua5-q_o">
                    Your Rank:{" "}
                    <span
                      className="font-bold text-purple-600"
                      data-oid=":kkr6e_"
                    >
                      #42
                    </span>
                  </div>
                  <div
                    className="text-muted-foreground text-sm"
                    data-oid="v9r:__i"
                  >
                    Top 15% of participants
                  </div>
                </div>
              </div>

              <div
                className="grid grid-cols-3 gap-4 text-center"
                data-oid="hb3z62c"
              >
                <div data-oid=".bpb0rz">
                  <div className="font-bold text-2xl" data-oid="e87rayj">
                    620
                  </div>
                  <div
                    className="text-muted-foreground text-xs"
                    data-oid="zs.xoj9"
                  >
                    Score
                  </div>
                </div>
                <div data-oid="y-wy:vn">
                  <div className="font-bold text-2xl" data-oid="0yxly_s">
                    82%
                  </div>
                  <div
                    className="text-muted-foreground text-xs"
                    data-oid="_1ui7z8"
                  >
                    Accuracy
                  </div>
                </div>
                <div data-oid="49jj_bq">
                  <div className="font-bold text-2xl" data-oid="bgcjkd5">
                    5
                  </div>
                  <div
                    className="text-muted-foreground text-xs"
                    data-oid="t:kd0fa"
                  >
                    Best Streak
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
