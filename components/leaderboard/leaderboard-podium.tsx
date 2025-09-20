import { Crown, Medal, Star } from "lucide-react";
import { AvatarFallback } from "@/components/ui/avatar";
import { UserAvatar } from "@/components/ui/user-avatar";
import { Badge } from "@/components/ui/badge";
export type LeaderboardItem = {
  id: number;
  name: string;
  avatar: string;
  score: number;
  quizzes: number;
  rank: number;
  badge: string;
  winStreak: number;
  lastActive: string;
  country: string;
  level: number;
};
interface LeaderboardPodiumProps {
  leaderboardData: LeaderboardItem[];
}

export function LeaderboardPodium({ leaderboardData }: LeaderboardPodiumProps) {
  if (leaderboardData.length < 3) return null;

  const podiumOrder = [1, 0, 2]; // 2nd, 1st, 3rd places
  const podiumHeights = ["h-28", "h-36", "h-24"];
  const avatarSizes = ["h-16 w-16", "h-24 w-24", "h-14 w-14"];
  const borderColors = ["ring-gray-300", "ring-amber-500", "ring-amber-700"];
  const bgColors = ["bg-gray-300", "bg-amber-500", "bg-amber-700"];
  const textSizes = ["text-lg", "text-xl", "text-base"];

  return (
    <div className="mt-6 mb-8" data-oid=".qm.95x">
      <div
        className="flex flex-wrap items-end justify-center gap-4"
        data-oid="93wo711"
      >
        {podiumOrder.map((index, i) => {
          const user = leaderboardData[index];
          const position = index + 1;
          return (
            <div
              className="flex flex-col items-center"
              data-oid="fwdfg2v"
              key={user.id}
            >
              <div className="relative mb-2" data-oid="9pdzqln">
                <div
                  className={`${avatarSizes[i]} ring-2 ring-offset-2 ${borderColors[i]} rounded-full`}
                  data-oid="06f-0qn"
                >
                  <UserAvatar
                    className="object-cover object-center"
                    name={user.name}
                    size={i === 0 ? 64 : i === 1 ? 96 : 56}
                    src={user.avatar || null}
                  />
                </div>
                {i === 1 && (
                  <div
                    className="-top-6 -translate-x-1/2 absolute left-1/2"
                    data-oid="h8:azbx"
                  >
                    <Crown
                      className="h-8 w-8 text-amber-500"
                      data-oid="4nul5bk"
                    />
                  </div>
                )}
                <div
                  className={`-bottom-2 -translate-x-1/2 absolute left-1/2 flex h-6 w-6 items-center justify-center rounded-full ${bgColors[i]} font-bold text-sm text-white`}
                  data-oid="8jl0fd:"
                >
                  {position}
                </div>
              </div>
              <h3
                className={`${textSizes[i]} font-semibold`}
                data-oid="x5wzyl:"
              >
                {user.name}
              </h3>
              <div
                className="flex items-center gap-1 text-muted-foreground"
                data-oid="37o._p-"
              >
                <span data-oid="lwamqhh">{user.score.toLocaleString()}</span>
                <span data-oid="b4nk0cw">pts</span>
              </div>
              <div
                className="mt-1 flex items-center gap-1.5"
                data-oid="_7r40d7"
              >
                <Badge
                  className="px-2 py-0.5"
                  data-oid="t-68pqg"
                  variant={
                    i === 1 ? "default" : i === 0 ? "secondary" : "outline"
                  }
                >
                  {i === 1 && (
                    <Medal className="mr-1 h-3 w-3" data-oid="qck9k62" />
                  )}
                  {user.badge}
                </Badge>
                <div
                  className="flex items-center rounded-full bg-muted/80 px-1.5 py-0.5 text-xs"
                  data-oid="4pz9ac1"
                >
                  <Star
                    className="mr-0.5 h-3 w-3 text-amber-500"
                    data-oid="3w5bs_."
                  />

                  {user.level}
                </div>
              </div>
              <div
                className={`mt-3 w-full ${podiumHeights[i]} rounded-t-lg bg-gradient-to-t from-muted/80 to-muted/20`}
                data-oid="l-ukj:8"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
