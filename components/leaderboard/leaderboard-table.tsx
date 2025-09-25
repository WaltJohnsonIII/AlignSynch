"use client";

import {
  ChevronLeft,
  ChevronRight,
  FlameIcon as Fire,
  Star,
  TrendingUp,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { UserAvatar } from "@/components/ui/user-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { LeaderboardItem } from "./leaderboard-podium";

interface LeaderboardTableProps {
  leaderboardData: LeaderboardItem[];
  showPagination?: boolean;
  enhanced?: boolean;
}

export function LeaderboardTable({
  leaderboardData,
  showPagination = false,
  enhanced = false,
}: LeaderboardTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = leaderboardData.slice(startIndex, endIndex);

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Diamond":
        return "success";
      case "Platinum":
        return "purple";
      case "Gold":
        return "yellow";
      case "Silver":
        return "blue";
      default:
        return "outline";
    }
  };

  const getProgressColor = (rank: number) => {
    if (rank === 1) return "bg-amber-500";
    if (rank === 2) return "bg-gray-300";
    if (rank === 3) return "bg-amber-700";
    if (rank <= 10) return "bg-blue-500";
    return "bg-muted";
  };

  return (
    <div
      className="w-full space-y-4 overflow-x-auto whitespace-nowrap"
      data-oid="ovr70vs"
    >
      <div
        className={cn(
          enhanced ? "overflow-hidden rounded-xl" : "rounded-md border",
          "min-w-[600px]"
        )}
        data-oid="df1xo2y"
      >
        <div
          className={`grid grid-cols-12 gap-2 border-b ${enhanced ? "bg-muted/30 p-5 font-medium" : "bg-muted/50 p-4 font-medium"}`}
          data-oid="9mc7i.2"
        >
          <div className="col-span-1" data-oid="2gorq3s">
            Rank
          </div>
          <div className="col-span-3" data-oid="p83yjma">
            User
          </div>
          <div className="col-span-2 text-right" data-oid="_.oub0p">
            Score
          </div>
          <div
            className="hidden md:col-span-2 md:block md:text-right"
            data-oid="mi7pxu6"
          >
            Level
          </div>
          <div className="col-span-2 text-right" data-oid="g5.-:nd">
            Quizzes
          </div>
          <div className="col-span-2 text-right" data-oid="pzofquv">
            Badge
          </div>
        </div>
        {currentData.map((user) => (
          <div
            className={`grid grid-cols-10 gap-2 border-b md:grid-cols-12 ${enhanced ? "p-5 transition-colors hover:bg-muted/10" : "p-4"} last:border-0 ${user.rank <= 3 ? "bg-muted/5" : ""}`}
            data-oid="3mjg0ua"
            key={user.id}
          >
            <div
              className="col-span-1 flex items-center font-medium"
              data-oid="uchebb8"
            >
              {user.rank <= 3 ? (
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${user.rank === 1 ? "bg-amber-500" : user.rank === 2 ? "bg-gray-300" : user.rank === 3 ? "bg-amber-700" : ""} text-white`}
                  data-oid="l8kwufr"
                >
                  {user.rank}
                </div>
              ) : (
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground"
                  data-oid="605-1i1"
                >
                  {user.rank}
                </div>
              )}
            </div>
            <div
              className="col-span-3 flex items-center gap-3"
              data-oid="rt0v3mf"
            >
              <Link
                className="block"
                data-oid="5s_p1x_"
                href={`/profile/${user.name.toLowerCase().replace(/\s+/g, "")}`}
              >
                <div className={`h-10 w-10 rounded-full ${user.rank <= 3 ? "ring-2 ring-offset-2" + (user.rank === 1 ? " ring-amber-500" : user.rank === 2 ? " ring-gray-300" : " ring-amber-700") : ""}`} data-oid="8:m-l.w">
                  <UserAvatar className="object-cover object-center" name={user.name} size={40} src={user.avatar || null} />
                </div>
              </Link>
              <div data-oid="t45j1hk">
                <Link
                  className="font-medium hover:underline"
                  data-oid=":m:nbkm"
                  href={`/profile/${user.name.toLowerCase().replace(/\s+/g, "")}`}
                >
                  {user.name}
                </Link>
                <div
                  className="flex items-center text-muted-foreground text-xs"
                  data-oid="q-.0fy0"
                >
                  {user.country}
                  {user.winStreak >= 3 && (
                    <div
                      className="ml-2 flex items-center text-amber-500"
                      data-oid="lyq:gpe"
                    >
                      <Fire className="mr-1 h-3 w-3" data-oid="sj0u3ey" />
                      {user.winStreak} streak
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className="col-span-2 flex items-center justify-end"
              data-oid="c6f3cff"
            >
              <div className="text-right" data-oid="jxhub35">
                <div className="font-medium" data-oid="xuiiizh">
                  {user.score.toLocaleString()}
                </div>
                {enhanced && (
                  <div className="mt-1 h-1.5 w-16" data-oid="sd.30so">
                    <Progress
                      className={`h-1.5 ${getProgressColor(user.rank)}`}
                      data-oid="ivdfegr"
                      value={100 * (user.score / 10_000)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div
              className="hidden items-center justify-end md:col-span-2 md:flex"
              data-oid="vj8.n:a"
            >
              <div
                className="flex items-center rounded-full bg-muted/80 px-2.5 py-1 font-medium text-xs"
                data-oid="5i:oxrf"
              >
                <Star
                  className="mr-1 h-3.5 w-3.5 text-amber-500"
                  data-oid="647nhqv"
                />

                {user.level}
              </div>
            </div>
            <div
              className="col-span-2 flex items-center justify-end"
              data-oid="_jbx1jz"
            >
              <div className="text-right" data-oid="4uwrazy">
                <div className="font-medium" data-oid="s_poqoj">
                  {user.quizzes}
                </div>
                {enhanced && user.rank <= 5 && (
                  <div
                    className="mt-1 text-muted-foreground text-xs"
                    data-oid="1ku6prk"
                  >
                    <TrendingUp
                      className="mr-1 inline h-3 w-3 text-green-500"
                      data-oid="i6cp-b1"
                    />
                    Active
                  </div>
                )}
              </div>
            </div>
            <div
              className="col-span-2 flex items-center justify-end"
              data-oid="3y86whu"
            >
              <Badge
                className={enhanced ? "px-3 py-1" : ""}
                data-oid="l49g6km"
                variant={getBadgeVariant(user.badge)}
              >
                {(user.badge === "Diamond" ||
                  user.badge === "Platinum" ||
                  user.badge === "Gold") && (
                  <Trophy className="mr-1.5 h-3.5 w-3.5" data-oid="x-y4d4c" />
                )}
                {user.badge}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {showPagination && totalPages > 1 && (
        <div
          className="flex items-center justify-between pt-2"
          data-oid="k:89fg9"
        >
          <div className="text-muted-foreground text-sm" data-oid=":x7.6g9">
            Showing {startIndex + 1}-
            {Math.min(endIndex, leaderboardData.length)} of{" "}
            {leaderboardData.length} users
          </div>
          <div className="flex items-center space-x-2" data-oid="ivwg8w.">
            <Button
              data-oid="zpw1cir"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              size="sm"
              variant="outline"
            >
              <ChevronLeft className="mr-1 h-4 w-4" data-oid="u9z03:f" />
              Previous
            </Button>
            <Button
              data-oid="vuk.g49"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              size="sm"
              variant="outline"
            >
              Next
              <ChevronRight className="ml-1 h-4 w-4" data-oid="azbp1_a" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
