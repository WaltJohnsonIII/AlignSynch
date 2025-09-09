import { CalendarDays, Medal, Trophy, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function LeaderboardStats() {
  return (
    <Card data-oid="g:-6r-6">
      <CardHeader className="pb-2" data-oid="jmkv59h">
        <CardTitle data-oid="_1_6xxy">Competition Stats</CardTitle>
        <CardDescription data-oid="b8qj3qj">
          Current season statistics and your ranking
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="gad3::d">
        <div className="space-y-4" data-oid="z33blm9">
          <div className="flex items-center justify-between" data-oid="st9kwci">
            <div className="flex items-center gap-2" data-oid="f1_u067">
              <CalendarDays
                className="h-4 w-4 text-muted-foreground"
                data-oid="1.p6a9_"
              />

              <span className="font-medium text-sm" data-oid="cegwxi5">
                Season 3
              </span>
            </div>
            <Badge data-oid="z6r-:t9" variant="outline">
              28 days left
            </Badge>
          </div>

          <div className="space-y-2" data-oid="g.hjv7b">
            <div
              className="flex items-center justify-between text-sm"
              data-oid="7ffragx"
            >
              <span className="text-muted-foreground" data-oid="_o4phto">
                Active Participants
              </span>
              <span className="font-medium" data-oid=":kkhz:_">
                1,248
              </span>
            </div>
            <div
              className="flex items-center justify-between text-sm"
              data-oid="gp0fsn."
            >
              <span className="text-muted-foreground" data-oid="ije6o9:">
                Top Badge
              </span>
              <div className="flex items-center" data-oid="a4mjpja">
                <Medal
                  className="mr-1 h-3.5 w-3.5 text-amber-500"
                  data-oid="4_t:o99"
                />

                <span className="font-medium" data-oid="34mfhs5">
                  Diamond (5 users)
                </span>
              </div>
            </div>
          </div>

          <div
            className="space-y-2 rounded-lg bg-muted/50 p-3"
            data-oid="idawy:9"
          >
            <div
              className="flex items-center justify-between"
              data-oid="_.u-b8p"
            >
              <div className="flex items-center gap-2" data-oid="sztw1lq">
                <Users
                  className="h-4 w-4 text-muted-foreground"
                  data-oid="f6gkx5s"
                />

                <span className="font-medium text-sm" data-oid="l6c_8o2">
                  Your Rank
                </span>
              </div>
              <Badge data-oid="_xkdi_-">#42</Badge>
            </div>
            <div className="space-y-1" data-oid="0tipo8t">
              <div
                className="flex items-center justify-between text-xs"
                data-oid="24gthbg"
              >
                <span className="text-muted-foreground" data-oid="_47hyyu">
                  Next Level
                </span>
                <span data-oid="vauyael">3,250 / 4,000 points</span>
              </div>
              <Progress className="h-2" data-oid="n3:24yd" value={81.25} />
              <div
                className="flex items-center justify-between text-xs"
                data-oid="tl.wh35"
              >
                <span className="flex items-center" data-oid="qxm6xiw">
                  <Trophy
                    className="mr-1 h-3 w-3 text-amber-500"
                    data-oid="i_069ef"
                  />
                  Silver
                </span>
                <span className="text-muted-foreground" data-oid="r27sqjn">
                  750 points to Gold
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
