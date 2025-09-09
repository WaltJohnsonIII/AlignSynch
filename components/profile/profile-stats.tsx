import {
  Award,
  BarChart2,
  Clock,
  Flame,
  Percent,
  Star,
  ThumbsUp,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { UserStats } from "@/lib/data/users";

interface ProfileStatsProps {
  stats: UserStats;
}

export function ProfileStats({ stats }: ProfileStatsProps) {
  // Format time played in hours and minutes
  const formatTimePlayed = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <Card data-oid="40.oooi">
      <CardHeader className="pb-2" data-oid=":yloyug">
        <CardTitle className="text-lg" data-oid="x1ur4we">
          Stats & Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="2w2ux7b">
        <div className="grid grid-cols-2 gap-4" data-oid="acfo45_">
          <div className="space-y-1" data-oid="qkf2h.a">
            <div
              className="flex items-center text-muted-foreground text-sm"
              data-oid="zd_st5w"
            >
              <BarChart2 className="mr-1.5 h-3.5 w-3.5" data-oid="-bkju_l" />
              Average Score
            </div>
            <div className="font-semibold" data-oid="h76ny7q">
              {stats.averageScore}%
            </div>
          </div>

          <div className="space-y-1" data-oid="pvj_6kc">
            <div
              className="flex items-center text-muted-foreground text-sm"
              data-oid="u7je46."
            >
              <ThumbsUp className="mr-1.5 h-3.5 w-3.5" data-oid=".hri_kn" />
              Win Rate
            </div>
            <div className="font-semibold" data-oid="psf9p3h">
              {Math.round(stats.winRate * 100)}%
            </div>
          </div>

          <div className="space-y-1" data-oid="sz46269">
            <div
              className="flex items-center text-muted-foreground text-sm"
              data-oid="3sjwrxt"
            >
              <Flame className="mr-1.5 h-3.5 w-3.5" data-oid="3-jh65n" />
              Current Streak
            </div>
            <div className="font-semibold" data-oid="hzkq7wj">
              {stats.currentStreak} quizzes
            </div>
          </div>

          <div className="space-y-1" data-oid="sn:4knh">
            <div
              className="flex items-center text-muted-foreground text-sm"
              data-oid="kqf.ht2"
            >
              <TrendingUp className="mr-1.5 h-3.5 w-3.5" data-oid="8dwubje" />
              Highest Streak
            </div>
            <div className="font-semibold" data-oid="za4tscp">
              {stats.highestStreak} quizzes
            </div>
          </div>

          <div className="space-y-1" data-oid="..jqlwi">
            <div
              className="flex items-center text-muted-foreground text-sm"
              data-oid="0_.k01z"
            >
              <Clock className="mr-1.5 h-3.5 w-3.5" data-oid="x.0rs:x" />
              Time Played
            </div>
            <div className="font-semibold" data-oid="bsy_wbh">
              {formatTimePlayed(stats.totalTimePlayed)}
            </div>
          </div>

          <div className="space-y-1" data-oid="tfxk9w3">
            <div
              className="flex items-center text-muted-foreground text-sm"
              data-oid="_sqj89t"
            >
              <Percent className="mr-1.5 h-3.5 w-3.5" data-oid="ysp2:cu" />
              Completion Rate
            </div>
            <div className="font-semibold" data-oid="kx9q06z">
              {Math.round(stats.quizCompletionRate * 100)}%
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-2" data-oid="j-7z_8g">
          <div data-oid="2id9nn6">
            <div
              className="mb-1 flex items-center justify-between text-sm"
              data-oid=":1aqeh6"
            >
              <div className="flex items-center" data-oid="3dz.c1x">
                <Star
                  className="mr-1.5 h-3.5 w-3.5 text-amber-500"
                  data-oid="vt6qyrc"
                />

                <span data-oid="28g734h">Best Category</span>
              </div>
              <span className="font-medium" data-oid="6n5r5b4">
                {stats.bestCategory}
              </span>
            </div>
            <Progress className="h-1.5" data-oid="utnpqx0" value={95} />
          </div>

          <div data-oid="gx77cdf">
            <div
              className="mb-1 flex items-center justify-between text-sm"
              data-oid="6zulv3q"
            >
              <div className="flex items-center" data-oid="3toqa32">
                <Award
                  className="mr-1.5 h-3.5 w-3.5 text-blue-500"
                  data-oid="d3b28g1"
                />

                <span data-oid="won4gs.">Favorite Category</span>
              </div>
              <span className="font-medium" data-oid="vwv53fd">
                {stats.favoriteCategory}
              </span>
            </div>
            <Progress className="h-1.5" data-oid="6pnmbjv" value={85} />
          </div>

          <div data-oid="yg2dmwq">
            <div
              className="mb-1 flex items-center justify-between text-sm"
              data-oid="duun2k2"
            >
              <div
                className="flex items-center text-muted-foreground"
                data-oid="fx.3rz-"
              >
                <span data-oid="ds5twqu">Weakest Category</span>
              </div>
              <span className="font-medium" data-oid="ek8lhhb">
                {stats.weakestCategory}
              </span>
            </div>
            <Progress className="h-1.5" data-oid="3qsaa-." value={40} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
