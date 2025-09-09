"use client";
import confetti from "canvas-confetti";
import {
  Award,
  CheckCircle,
  Clock,
  Home,
  RotateCw,
  Share2,
  Trophy,
} from "lucide-react";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BattleState } from "./battle-page";

interface BattleResultsProps {
  battleState: BattleState;
  onRematch: () => void;
  onReturnHome: () => void;
}

export function BattleResults({
  battleState,
  onRematch,
  onReturnHome,
}: BattleResultsProps) {
  const sortedPlayers = [...battleState.players].sort(
    (a, b) => b.score - a.score
  );
  const currentPlayer = sortedPlayers.find((player) => player.isCurrentUser);
  const currentPlayerRank =
    sortedPlayers.findIndex((player) => player.isCurrentUser) + 1;
  const isWinner = currentPlayerRank === 1;

  // Find podium players (top 3)
  const podiumPlayers = sortedPlayers.slice(0, 3);
  useEffect(() => {
    if (currentPlayer?.score && currentPlayer?.score >= 70) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [currentPlayer?.score]);
  return (
    <div className="mx-auto max-w-4xl" data-oid="t2sot__">
      <div className="mb-8 text-center" data-oid="q-1hoy1">
        <h1 className="mb-2 font-bold text-3xl" data-oid="uosokhs">
          Battle Results
        </h1>
        <p className="text-muted-foreground" data-oid="5upfz51">
          {isWinner
            ? "Congratulations! You won the battle!"
            : `You placed ${currentPlayerRank}${currentPlayerRank === 2 ? "nd" : currentPlayerRank === 3 ? "rd" : "th"} in the battle`}
        </p>
      </div>

      {battleState.mode === "group" && (
        <div className="mb-8" data-oid="p33j5mc">
          <h2 className="mb-4 font-bold text-xl" data-oid="5tg4fq.">
            Podium
          </h2>
          <div
            className="flex h-48 items-end justify-center gap-4"
            data-oid="i1mrpus"
          >
            {podiumPlayers.map((player, index) => {
              const podiumHeight =
                index === 1 ? "h-40" : index === 0 ? "h-48" : "h-32";
              const position = index === 1 ? 2 : index === 0 ? 1 : 3;

              return (
                <div
                  className="flex flex-col items-center"
                  data-oid="f33pxhl"
                  key={player.id}
                >
                  <div className="mb-2" data-oid="jgm3ruq">
                    <Avatar
                      className="h-16 w-16 border-4 border-background shadow-lg"
                      data-oid="qs6n52c"
                    >
                      <AvatarImage
                        alt={player.name}
                        data-oid="9dqjz56"
                        src={player.avatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="9c8sa35">
                        {player.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="mb-2 text-center" data-oid="0_sm7l8">
                    <div className="font-bold" data-oid="7lckhg0">
                      {player.name}
                    </div>
                    <div
                      className="text-muted-foreground text-sm"
                      data-oid="fc_:pk7"
                    >
                      {player.score} pts
                    </div>
                  </div>
                  <div
                    className={`${podiumHeight} relative flex w-24 items-center justify-center rounded-t-lg bg-primary/90`}
                    data-oid="lo:ect:"
                  >
                    <span
                      className="font-bold text-2xl text-primary-foreground"
                      data-oid="6qlr:0c"
                    >
                      #{position}
                    </span>
                    {player.isCurrentUser && (
                      <div
                        className="-top-3 -translate-x-1/2 absolute left-1/2 transform"
                        data-oid="2x2pn1c"
                      >
                        <Badge className="bg-yellow-500" data-oid="es5xxyv">
                          You
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3" data-oid=".vlyz_0">
        <div className="md:col-span-2" data-oid="b.3zabq">
          <Card data-oid="sx6pv6r">
            <CardHeader data-oid="6qtfsdq">
              <CardTitle data-oid="dbo46ej">Final Rankings</CardTitle>
              <CardDescription data-oid=".pvvl:6">
                {battleState.mode === "1v1"
                  ? "You vs your opponent"
                  : `All ${battleState.players.length} players ranked by score`}
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="dtn:har">
              <div className="space-y-2" data-oid="9jjshso">
                {sortedPlayers.map((player, index) => (
                  <div
                    className={`flex items-center rounded-lg border p-3 ${player.isCurrentUser ? "border-primary bg-primary/5" : ""}`}
                    data-oid="4hpkj1f"
                    key={player.id}
                  >
                    <div className="w-5 font-bold text-lg" data-oid="8i-mbbh">
                      {index + 1}
                    </div>
                    <Avatar className="mr-3 h-10 w-10" data-oid="xwk1ifo">
                      <AvatarImage
                        alt={player.name}
                        data-oid="jkm_55b"
                        src={player.avatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="_p76:op">
                        {player.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1" data-oid="s.keqq4">
                      <div className="font-medium" data-oid="1:yzxn-">
                        {player.name}
                      </div>
                      <div
                        className="text-muted-foreground text-sm"
                        data-oid="05g9_nu"
                      >
                        {player.correctAnswers} correct • {player.timeElapsed}s
                        total time
                      </div>
                    </div>
                    <div className="text-right" data-oid="-ps-eoj">
                      <div className="font-bold" data-oid="e0.nl1_">
                        {player.score}
                      </div>
                      <div
                        className="text-muted-foreground text-xs"
                        data-oid="a2bcfqu"
                      >
                        points
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter
              className="flex flex-wrap justify-between gap-4"
              data-oid="43-2nxo"
            >
              <Button
                data-oid="ld.onow"
                onClick={onReturnHome}
                variant="outline"
              >
                <Home className="mr-2 h-4 w-4" data-oid="j-5_ham" />
                Return Home
              </Button>
              <div className="flex flex-wrap gap-2" data-oid="prswkr8">
                <Button data-oid="6-mt-df" variant="outline">
                  <Share2 className="mr-2 h-4 w-4" data-oid="361.vrz" />
                  Share Results
                </Button>
                <Button data-oid="93h9u1b" onClick={onRematch}>
                  <RotateCw className="mr-2 h-4 w-4" data-oid="dblwu8g" />
                  Rematch
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6" data-oid="yffb2l1">
          {currentPlayer && (
            <Card data-oid="-4_0.z4">
              <CardHeader className="pb-2" data-oid="k90d412">
                <CardTitle className="text-lg" data-oid="9-yazle">
                  Your Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-oid="5-jmuc6">
                <div
                  className="flex items-center justify-between"
                  data-oid="e.f.kmb"
                >
                  <div className="flex items-center gap-2" data-oid="bd77t36">
                    <Trophy
                      className="h-5 w-5 text-yellow-500"
                      data-oid="l.op2np"
                    />

                    <span data-oid="hfkq6ta">Final Score</span>
                  </div>
                  <span className="font-bold text-xl" data-oid="-w4i8g9">
                    {currentPlayer.score}
                  </span>
                </div>

                <div
                  className="flex items-center justify-between"
                  data-oid="__eelo6"
                >
                  <div className="flex items-center gap-2" data-oid="raxe1x3">
                    <CheckCircle
                      className="h-5 w-5 text-green-500"
                      data-oid="z1.hhc:"
                    />

                    <span data-oid="6k2od-p">Correct Answers</span>
                  </div>
                  <span className="font-bold" data-oid="ygn:6_2">
                    {currentPlayer.correctAnswers}/{battleState.totalQuestions}
                  </span>
                </div>

                <div
                  className="flex items-center justify-between"
                  data-oid="haulvs."
                >
                  <div className="flex items-center gap-2" data-oid="o9pnmxp">
                    <Clock
                      className="h-5 w-5 text-blue-500"
                      data-oid=":ioa8_9"
                    />

                    <span data-oid="t4k119g">Total Time</span>
                  </div>
                  <span className="font-bold" data-oid="1nq_bdq">
                    {currentPlayer.timeElapsed}s
                  </span>
                </div>

                <div
                  className="flex items-center justify-between"
                  data-oid="v7749hv"
                >
                  <div className="flex items-center gap-2" data-oid="za9r0qi">
                    <Award
                      className="h-5 w-5 text-purple-500"
                      data-oid="nk6n-7u"
                    />

                    <span data-oid="f90_dk-">Final Rank</span>
                  </div>
                  <span className="font-bold" data-oid="7rcd74x">
                    #{currentPlayerRank}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}

          <Card data-oid="xov5cy.">
            <CardHeader className="pb-2" data-oid="vxfxs7h">
              <CardTitle className="text-lg" data-oid="-e_dzgb">
                Rewards Earned
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3" data-oid="z-hddur">
              <div
                className="flex items-center justify-between rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-2"
                data-oid="aay0tp3"
              >
                <div className="flex items-center gap-2" data-oid="zg1j7gy">
                  <Trophy
                    className="h-5 w-5 text-yellow-500"
                    data-oid="4iml1ja"
                  />

                  <span data-oid="yq-hzp:">XP Points</span>
                </div>
                <span className="font-bold" data-oid="bannhvu">
                  +{Math.floor(currentPlayer?.score || 0 / 10)}
                </span>
              </div>

              {isWinner && (
                <div
                  className="flex items-center justify-between rounded-lg border border-green-500/20 bg-green-500/10 p-2"
                  data-oid="rlhc_qf"
                >
                  <div className="flex items-center gap-2" data-oid="sb03d4q">
                    <Award
                      className="h-5 w-5 text-green-500"
                      data-oid="rfu1tft"
                    />

                    <span data-oid="_s.9r.s">Victory Badge</span>
                  </div>
                  <span className="font-bold" data-oid="n2tsvpq">
                    Unlocked
                  </span>
                </div>
              )}

              {(currentPlayer?.streak || 0) >= 3 && (
                <div
                  className="flex items-center justify-between rounded-lg border border-blue-500/20 bg-blue-500/10 p-2"
                  data-oid="vd-l8pj"
                >
                  <div className="flex items-center gap-2" data-oid="1z7w1y6">
                    <Award
                      className="h-5 w-5 text-blue-500"
                      data-oid="-naz4l_"
                    />

                    <span data-oid="6gmt9km">Streak Master</span>
                  </div>
                  <span className="font-bold" data-oid="f-as2mk">
                    Unlocked
                  </span>
                </div>
              )}

              <div
                className="flex items-center justify-between rounded-lg border border-purple-500/20 bg-purple-500/10 p-2"
                data-oid="1jfwjkv"
              >
                <div className="flex items-center gap-2" data-oid="zg3hzey">
                  <Award
                    className="h-5 w-5 text-purple-500"
                    data-oid="qhb:h_f"
                  />

                  <span data-oid="ltl36yj">Battle Coins</span>
                </div>
                <span className="font-bold" data-oid=".bw6_co">
                  +{Math.floor((currentPlayer?.score || 0) / 20)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
