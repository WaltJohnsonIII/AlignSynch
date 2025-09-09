"use client";

import {
  Award,
  Clock,
  Gift,
  Medal,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tournament } from "./tournament-detail";

interface TournamentPrizesProps {
  tournament: Tournament;
}

export function TournamentPrizes({ tournament }: TournamentPrizesProps) {
  // Determine prize amounts based on tournament prize pool
  const prizePool = Number.parseInt(
    tournament?.prize?.replace(/[^0-9]/g, "") || "10000"
  );
  const firstPrize = Math.floor(prizePool * 0.5);
  const secondPrize = Math.floor(prizePool * 0.25);
  const thirdPrize = Math.floor(prizePool * 0.15);
  const runnerUpPrize = Math.floor(prizePool * 0.02);

  return (
    <div className="space-y-6" data-oid="vyu4ydv">
      <Card data-oid="utxus_l">
        <CardHeader data-oid="jlxerfb">
          <CardTitle className="flex items-center gap-2" data-oid="yhwuhcd">
            <Trophy className="h-5 w-5 text-amber-500" data-oid=":g-qp4b" />
            Prize Distribution
          </CardTitle>
        </CardHeader>
        <CardContent data-oid="fra-bck">
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            data-oid="_n...x8"
          >
            <div className="md:order-2" data-oid="offk:hy">
              <div
                className="transform rounded-lg border border-amber-200 bg-gradient-to-b from-amber-100 to-amber-300 p-6 text-center shadow-lg transition-all duration-200"
                data-oid="1x.3772"
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500"
                  data-oid="jzg7cid"
                >
                  <Trophy className="h-8 w-8 text-white" data-oid="3l458_q" />
                </div>
                <h3 className="mb-1 font-bold text-xl" data-oid="3an:d4n">
                  1st Place
                </h3>
                <div
                  className="font-bold text-3xl text-amber-900"
                  data-oid="z6vjih4"
                >
                  ${firstPrize}
                </div>
                <div
                  className="mt-4 space-y-2 text-amber-900 text-sm"
                  data-oid="m7oq8c2"
                >
                  <div
                    className="flex items-center justify-center gap-1"
                    data-oid="4ng_hk2"
                  >
                    <Star className="h-4 w-4" data-oid="9bofsxd" />
                    <span data-oid="5:xbf-x">Champion Badge</span>
                  </div>
                  <div
                    className="flex items-center justify-center gap-1"
                    data-oid="fqpzfoy"
                  >
                    <Zap className="h-4 w-4" data-oid="k7tw594" />
                    <span data-oid="pduxyvv">1 Year Premium</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:order-1" data-oid="u4:e6b-">
              <div
                className="transform rounded-lg border border-gray-200 bg-gradient-to-b from-gray-100 to-gray-300 p-6 text-center shadow-md transition-all duration-200 hover:shadow-lg"
                data-oid="z98.69."
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-500"
                  data-oid="sruti6h"
                >
                  <Medal className="h-7 w-7 text-white" data-oid="l_oer60" />
                </div>
                <h3 className="mb-1 font-bold text-lg" data-oid="175a728">
                  2nd Place
                </h3>
                <div
                  className="font-bold text-2xl text-gray-700"
                  data-oid="c3s90kl"
                >
                  ${secondPrize}
                </div>
                <div
                  className="mt-4 space-y-2 text-gray-700 text-sm"
                  data-oid="6kw.32r"
                >
                  <div
                    className="flex items-center justify-center gap-1"
                    data-oid="d.igi0e"
                  >
                    <Star className="h-4 w-4" data-oid="uia_c.1" />
                    <span data-oid="i9e3ri9">Silver Badge</span>
                  </div>
                  <div
                    className="flex items-center justify-center gap-1"
                    data-oid="379u_7v"
                  >
                    <Zap className="h-4 w-4" data-oid="5f25-nx" />
                    <span data-oid="cn14siy">6 Months Premium</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:order-3" data-oid="qy7vjsc">
              <div
                className="transform rounded-lg border border-amber-100 bg-gradient-to-b from-amber-50 to-amber-200 p-6 text-center shadow-md transition-all duration-200 hover:shadow-lg"
                data-oid="v5p3m6f"
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-700"
                  data-oid="s2gf89."
                >
                  <Award className="h-7 w-7 text-white" data-oid="6yf5eg4" />
                </div>
                <h3 className="mb-1 font-bold text-lg" data-oid="_nmk5k0">
                  3rd Place
                </h3>
                <div
                  className="font-bold text-2xl text-amber-800"
                  data-oid=":betl0y"
                >
                  ${thirdPrize}
                </div>
                <div
                  className="mt-4 space-y-2 text-amber-800 text-sm"
                  data-oid="q4rb12p"
                >
                  <div
                    className="flex items-center justify-center gap-1"
                    data-oid="c0jt4bm"
                  >
                    <Star className="h-4 w-4" data-oid="rpq5wix" />
                    <span data-oid="evpf4l:">Bronze Badge</span>
                  </div>
                  <div
                    className="flex items-center justify-center gap-1"
                    data-oid="h0e-zor"
                  >
                    <Zap className="h-4 w-4" data-oid="2oge56o" />
                    <span data-oid="c64b:uw">3 Months Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            data-oid="h.woxt5"
          >
            <Card
              className="border-l-4 border-l-purple-400 transition-shadow hover:shadow-md"
              data-oid=".40eb88"
            >
              <CardHeader className="pb-2" data-oid="42x4r:r">
                <CardTitle
                  className="flex items-center gap-2 text-base"
                  data-oid="wpwqgot"
                >
                  <Gift
                    className="h-4 w-4 text-purple-500"
                    data-oid="19qa0bt"
                  />
                  Runner-up Prizes (4th-10th)
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="l31j1cc">
                <div className="flex items-center gap-3" data-oid="v17v0r9">
                  <div data-oid="vwd1mb0">
                    <div className="font-medium" data-oid="dq4-t8t">
                      ${runnerUpPrize} each
                    </div>
                    <div
                      className="text-muted-foreground text-sm"
                      data-oid="mj0keb6"
                    >
                      Plus 1 month Premium subscription
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-l-4 border-l-blue-400 transition-shadow hover:shadow-md"
              data-oid="d7dm0vt"
            >
              <CardHeader className="pb-2" data-oid="h0g8-6q">
                <CardTitle
                  className="flex items-center gap-2 text-base"
                  data-oid="xtc:tt8"
                >
                  <Gift className="h-4 w-4 text-blue-500" data-oid="ype-3me" />
                  Participation Rewards
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="9tn075q">
                <div className="flex items-center gap-3" data-oid=".fxb0qs">
                  <div data-oid="9hvhr.5">
                    <div className="font-medium" data-oid=".1d7u84">
                      Tournament Badge
                    </div>
                    <div
                      className="text-muted-foreground text-sm"
                      data-oid="u7jys10"
                    >
                      For all participants who complete the tournament
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8" data-oid="ryyt5bk">
            <Card data-oid="y-8iv2g">
              <CardHeader className="pb-2" data-oid="fjqz3kv">
                <CardTitle
                  className="flex items-center gap-2 text-base"
                  data-oid="-wqjen2"
                >
                  <Sparkles
                    className="h-4 w-4 text-amber-500"
                    data-oid=":aj-i71"
                  />
                  Special Achievements
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="m0d3f..">
                <div
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
                  data-oid="28:cgtd"
                >
                  <div
                    className="flex items-center gap-3 rounded-md bg-blue-50 p-3 dark:bg-blue-950"
                    data-oid="cuk9sle"
                  >
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"
                      data-oid="khff5tz"
                    >
                      <Zap
                        className="h-4 w-4 text-blue-600 dark:text-blue-400"
                        data-oid="rs48sct"
                      />
                    </div>
                    <div data-oid="tbyo6oa">
                      <div className="font-medium" data-oid="eg_o6p:">
                        Perfect Round
                      </div>
                      <div
                        className="text-muted-foreground text-xs"
                        data-oid="c4a0_w:"
                      >
                        100% accuracy in any round
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-3 rounded-md bg-green-50 p-3 dark:bg-green-950"
                    data-oid="8sot6lr"
                  >
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900"
                      data-oid="9wiq8:0"
                    >
                      <Clock
                        className="h-4 w-4 text-green-600 dark:text-green-400"
                        data-oid="sgc7d-4"
                      />
                    </div>
                    <div data-oid="rk6zg70">
                      <div className="font-medium" data-oid="zmxl8mk">
                        Speed Demon
                      </div>
                      <div
                        className="text-muted-foreground text-xs"
                        data-oid="jv:5eq7"
                      >
                        Fastest completion time
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-3 rounded-md bg-purple-50 p-3 dark:bg-purple-950"
                    data-oid="8sh7gm1"
                  >
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900"
                      data-oid="0hds954"
                    >
                      <Target
                        className="h-4 w-4 text-purple-600 dark:text-purple-400"
                        data-oid="azmopq9"
                      />
                    </div>
                    <div data-oid="ladkwwq">
                      <div className="font-medium" data-oid="7-3aw7a">
                        Consistency King
                      </div>
                      <div
                        className="text-muted-foreground text-xs"
                        data-oid="nlxg9pj"
                      >
                        Least score variance across rounds
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8" data-oid="f1mqzc1">
            <Card
              className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900"
              data-oid="znpx21x"
            >
              <CardContent className="pt-6" data-oid="47ammag">
                <div
                  className="flex flex-col items-center justify-between gap-4 md:flex-row"
                  data-oid="2e075q-"
                >
                  <div className="flex items-center gap-4" data-oid="gkbjk8_">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-200 dark:bg-amber-800"
                      data-oid="6pv9m2j"
                    >
                      <Trophy
                        className="h-6 w-6 text-amber-600 dark:text-amber-300"
                        data-oid="5me.pda"
                      />
                    </div>
                    <div data-oid=".hzjgip">
                      <h3 className="font-bold text-lg" data-oid="hjynb0l">
                        Total Prize Pool
                      </h3>
                      <p
                        className="text-muted-foreground text-sm"
                        data-oid="2:-ds0o"
                      >
                        Distributed among winners and special achievements
                      </p>
                    </div>
                  </div>
                  <div
                    className="font-bold text-3xl text-amber-700 dark:text-amber-300"
                    data-oid="6jcdavf"
                  >
                    ${prizePool}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
