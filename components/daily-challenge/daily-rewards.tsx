import { Award, Calendar, Clock, Gift, Star, Trophy, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DailyRewards() {
  return (
    <Card className="shadow-sm" data-oid="8h:brg:">
      <CardHeader className="pb-2" data-oid="_nwpfit">
        <CardTitle className="text-xl" data-oid=":7_1zuy">
          Rewards & Streaks
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4" data-oid="iubsqzi">
        <div className="space-y-4" data-oid="53y0vig">
          <div className="space-y-2" data-oid="n5xyrd_">
            <h3
              className="flex items-center font-medium text-sm"
              data-oid="ebdl_ll"
            >
              <Calendar
                className="mr-2 h-4 w-4 text-blue-500"
                data-oid="sp4yict"
              />
              Daily Streak
            </h3>

            <div className="flex space-x-1" data-oid="k7q9kwn">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full border ${day <= 4 ? "border-blue-300 bg-blue-100 dark:border-blue-700 dark:bg-blue-900" : "border-muted bg-muted/30"}`}
                  data-oid="d27omv7"
                  key={day}
                >
                  <span className="font-medium text-xs" data-oid="_rkv:z8">
                    {day}
                  </span>
                  {day === 7 && (
                    <div
                      className="-top-1 -right-1 absolute"
                      data-oid="_sdr_n8"
                    >
                      <Trophy
                        className="h-3 w-3 text-amber-500"
                        data-oid="d59ei_9"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-xs" data-oid="pbeaod2">
              Current streak: 4 days. Keep playing daily!
            </p>
          </div>

          <div className="space-y-2" data-oid="sw:i6fb">
            <h3
              className="flex items-center font-medium text-sm"
              data-oid="xb3dblc"
            >
              <Award
                className="mr-2 h-4 w-4 text-amber-500"
                data-oid="5-5tcnm"
              />
              Streak Rewards
            </h3>

            <div className="grid grid-cols-2 gap-2" data-oid="nfc4xd:">
              <div
                className="flex flex-col items-center rounded-lg border p-2 text-center"
                data-oid="mcxg8wu"
              >
                <Badge className="mb-1" data-oid="x9_0v6g" variant="outline">
                  3 Days
                </Badge>
                <span className="font-medium text-xs" data-oid="i-u.nzl">
                  +50 Coins
                </span>
              </div>

              <div
                className="flex flex-col items-center rounded-lg border p-2 text-center"
                data-oid="c5qje6."
              >
                <Badge className="mb-1" data-oid="hh13ze2" variant="outline">
                  5 Days
                </Badge>
                <span className="font-medium text-xs" data-oid="du82rqg">
                  +100 Coins
                </span>
              </div>

              <div
                className="flex flex-col items-center rounded-lg border p-2 text-center"
                data-oid="udc_dcg"
              >
                <Badge className="mb-1" data-oid="lakjn7t" variant="outline">
                  7 Days
                </Badge>
                <span className="font-medium text-xs" data-oid="mot:ime">
                  Special Badge
                </span>
              </div>

              <div
                className="flex flex-col items-center rounded-lg border p-2 text-center"
                data-oid="vf4gel-"
              >
                <Badge className="mb-1" data-oid="oy8h_le" variant="outline">
                  14 Days
                </Badge>
                <span className="font-medium text-xs" data-oid=".e854:q">
                  Premium Theme
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2" data-oid="5r8_xrd">
            <h3
              className="flex items-center font-medium text-sm"
              data-oid="jytw5g7"
            >
              <Trophy
                className="mr-2 h-4 w-4 text-purple-500"
                data-oid="oh1.ae0"
              />
              Daily Challenge Badges
            </h3>

            <div className="grid grid-cols-3 gap-2" data-oid="wnzy4uy">
              <div
                className="flex flex-col items-center rounded-lg border p-2 text-center"
                data-oid="i:pihln"
              >
                <div
                  className="mb-1 rounded-full bg-green-100 p-1 dark:bg-green-900"
                  data-oid="l:ds1e8"
                >
                  <Zap
                    className="h-3 w-3 text-green-600 dark:text-green-400"
                    data-oid="jchq2fl"
                  />
                </div>
                <span className="text-xs" data-oid="u.eylf_">
                  First Try
                </span>
              </div>

              <div
                className="flex flex-col items-center rounded-lg border p-2 text-center"
                data-oid="0p58cfw"
              >
                <div
                  className="mb-1 rounded-full bg-blue-100 p-1 dark:bg-blue-900"
                  data-oid="zh5d3ly"
                >
                  <Clock
                    className="h-3 w-3 text-blue-600 dark:text-blue-400"
                    data-oid="x7kkkix"
                  />
                </div>
                <span className="text-xs" data-oid="r9g1-pv">
                  Speedster
                </span>
              </div>

              <div
                className="flex flex-col items-center rounded-lg border p-2 text-center"
                data-oid="njv2:0g"
              >
                <div
                  className="mb-1 rounded-full bg-purple-100 p-1 dark:bg-purple-900"
                  data-oid="u78z8_1"
                >
                  <Star
                    className="h-3 w-3 text-purple-600 dark:text-purple-400"
                    data-oid="tm4d_rw"
                  />
                </div>
                <span className="text-xs" data-oid="j5da74y">
                  Perfect
                </span>
              </div>

              <div
                className="flex flex-col items-center rounded-lg border p-2 text-center opacity-50"
                data-oid="00qww-h"
              >
                <div
                  className="mb-1 rounded-full bg-amber-100 p-1 dark:bg-amber-900"
                  data-oid="uwzyom1"
                >
                  <Trophy
                    className="h-3 w-3 text-amber-600 dark:text-amber-400"
                    data-oid="nnnmf_o"
                  />
                </div>
                <span className="text-xs" data-oid="1-hm8g7">
                  Top 3
                </span>
              </div>

              <div
                className="flex flex-col items-center rounded-lg border p-2 text-center opacity-50"
                data-oid="kj6aklv"
              >
                <div
                  className="mb-1 rounded-full bg-red-100 p-1 dark:bg-red-900"
                  data-oid="vsnjemf"
                >
                  <Gift
                    className="h-3 w-3 text-red-600 dark:text-red-400"
                    data-oid="6lat57a"
                  />
                </div>
                <span className="text-xs" data-oid="47cg:d2">
                  Generous
                </span>
              </div>

              <div
                className="flex flex-col items-center rounded-lg border p-2 text-center opacity-50"
                data-oid="m1pcsek"
              >
                <div
                  className="mb-1 rounded-full bg-slate-100 p-1 dark:bg-slate-900"
                  data-oid="34oy-a3"
                >
                  <Award
                    className="h-3 w-3 text-slate-600 dark:text-slate-400"
                    data-oid="amfk3yh"
                  />
                </div>
                <span className="text-xs" data-oid="ym-3259">
                  Veteran
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
