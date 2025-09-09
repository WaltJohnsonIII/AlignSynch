"use client";

import { CheckCircle2, Clock, Copy, ListChecks, Trophy, X } from "lucide-react";
import { useEffect, useState } from "react";
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
import { Progress } from "@/components/ui/progress";
import type { BattleState } from "./battle-page";

interface BattleLobbyProps {
  battleState: BattleState;
  onStartBattle: () => void;
  onCancel: () => void;
}

export function BattleLobby({
  battleState,
  onStartBattle,
  onCancel,
}: BattleLobbyProps) {
  const [countdown, setCountdown] = useState(15);
  const [copied, setCopied] = useState(false);
  const [allReady, setAllReady] = useState(false);

  // Simulate players joining and getting ready
  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  useEffect(() => {
    // Simulate players getting ready
    const readyTimeout = setTimeout(() => {
      setAllReady(true);
    }, 5000);

    return () => clearTimeout(readyTimeout);
  }, []);

  const copyRoomCode = () => {
    if (battleState.roomCode) {
      navigator.clipboard.writeText(battleState.roomCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mx-auto max-w-4xl" data-oid="xuxlvv9">
      <div className="mb-8 text-center" data-oid="_ntpbcs">
        <h1 className="mb-2 font-bold text-3xl" data-oid="7x5nyyq">
          {battleState.mode === "1v1" ? "1v1 Battle" : "Group Battle"} Lobby
        </h1>
        <p className="text-muted-foreground" data-oid="e-g1902">
          {countdown > 0
            ? `Battle starts in ${countdown} seconds`
            : "Ready to start battle!"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3" data-oid="zi61bp7">
        <div className="md:col-span-2" data-oid="dzxqpxj">
          <Card data-oid="0qhtfi9">
            <CardHeader data-oid="4-vykz.">
              <CardTitle data-oid="_3tieac">Players</CardTitle>
              <CardDescription data-oid="sm1s4q:">
                {battleState.mode === "1v1"
                  ? "You and your opponent"
                  : `${battleState.players.length} players in the lobby`}
              </CardDescription>
            </CardHeader>
            <CardContent data-oid=".tibid6">
              <div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
                data-oid="lcymji_"
              >
                {battleState.players.map((player, index) => (
                  <div
                    className="flex flex-col items-center rounded-lg border bg-background p-3"
                    data-oid="yq:p-d2"
                    key={player.id}
                  >
                    <Avatar className="mb-2 h-16 w-16" data-oid="u:1b7gv">
                      <AvatarImage
                        alt={player.name}
                        data-oid="xf:xmel"
                        src={player.avatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="3m.o::k">
                        {player.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center" data-oid="2p:xhyl">
                      <div className="font-medium" data-oid="8q3dlh6">
                        {player.name}
                      </div>
                      <Badge
                        className="mt-1"
                        data-oid="j-bdhp3"
                        variant={player.isReady ? "default" : "outline"}
                      >
                        {player.isReady ? "Ready" : "Waiting..."}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between" data-oid="27zu.xk">
              <Button data-oid="7cz924s" onClick={onCancel} variant="outline">
                <X className="mr-2 h-4 w-4" data-oid="s9js2xb" />
                Cancel
              </Button>
              <Button
                data-oid="6k7fomw"
                disabled={!allReady && countdown > 0}
                onClick={onStartBattle}
              >
                {countdown > 0
                  ? `Starting in ${countdown}s`
                  : "Start Battle Now"}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6" data-oid="s81h-ks">
          <Card data-oid="2fbguzy">
            <CardHeader className="pb-2" data-oid="dt2dv63">
              <CardTitle className="text-lg" data-oid="gkby0xw">
                Battle Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="qg2g3v7">
              <div className="space-y-1" data-oid="f1z-rbx">
                <div
                  className="text-muted-foreground text-sm"
                  data-oid="b9i.xb1"
                >
                  Mode
                </div>
                <div className="font-medium" data-oid="wjt4t.i">
                  {battleState.mode === "1v1" ? "1v1 Battle" : "Group Battle"}
                </div>
              </div>

              <div className="space-y-1" data-oid="vtp0_0k">
                <div
                  className="text-muted-foreground text-sm"
                  data-oid="1f.ven:"
                >
                  Type
                </div>
                <div
                  className="flex items-center font-medium"
                  data-oid="elk6ehz"
                >
                  {battleState.type === "private" ? (
                    <>
                      <span data-oid="2eyv-pu">Private Room</span>
                      {battleState.roomCode && (
                        <Button
                          className="ml-2 h-6 px-2"
                          data-oid="ex7lih0"
                          onClick={copyRoomCode}
                          size="sm"
                          variant="ghost"
                        >
                          {copied ? (
                            <CheckCircle2
                              className="h-3 w-3"
                              data-oid="g:d7uvu"
                            />
                          ) : (
                            <Copy className="h-3 w-3" data-oid="50td908" />
                          )}
                        </Button>
                      )}
                    </>
                  ) : (
                    "Public Match"
                  )}
                </div>
              </div>

              <div className="space-y-1" data-oid="6l5u66s">
                <div
                  className="text-muted-foreground text-sm"
                  data-oid="ivwy621"
                >
                  Category
                </div>
                <div className="font-medium capitalize" data-oid="-4ix5zd">
                  {battleState.category || "Random"}
                </div>
              </div>

              <div className="space-y-1" data-oid="v0a8y5c">
                <div
                  className="text-muted-foreground text-sm"
                  data-oid="9uc5559"
                >
                  Difficulty
                </div>
                <div className="font-medium capitalize" data-oid="q_qoiah">
                  {battleState.difficulty || "Medium"}
                </div>
              </div>

              <div className="space-y-1" data-oid="7.piq2a">
                <div
                  className="text-muted-foreground text-sm"
                  data-oid="e0llmpg"
                >
                  Questions
                </div>
                <div className="font-medium" data-oid="96yctq8">
                  {battleState.totalQuestions} questions
                </div>
              </div>

              <div className="space-y-1" data-oid="49laoqh">
                <div
                  className="text-muted-foreground text-sm"
                  data-oid="qa0o8yz"
                >
                  Time per question
                </div>
                <div className="font-medium" data-oid="995quyz">
                  {battleState.timePerQuestion} seconds
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="rbgl0qd">
            <CardHeader className="pb-2" data-oid="wgrk0y2">
              <CardTitle
                className="flex items-center gap-2 text-lg"
                data-oid="cz3li20"
              >
                <Trophy
                  className="h-5 w-5 text-yellow-500"
                  data-oid="n:0y.5h"
                />
                Battle Rules
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="7xt1c_f">
              <ul className="space-y-2 text-sm" data-oid="xiu6tou">
                <li className="flex items-center gap-2" data-oid="s4q85c3">
                  <Clock className="h-4 w-4 text-blue-500" data-oid="pyty2--" />
                  <span data-oid="da8u9mz">
                    Answer quickly for bonus points
                  </span>
                </li>
                <li className="flex items-center gap-2" data-oid="tm6h9tw">
                  <ListChecks
                    className="h-4 w-4 text-green-500"
                    data-oid="v-u9-gp"
                  />

                  <span data-oid="99mlhem">
                    No changing answers once submitted
                  </span>
                </li>
                <li className="flex items-center gap-2" data-oid="_-t07ry">
                  <Trophy
                    className="h-4 w-4 text-purple-500"
                    data-oid="zn2ghu3"
                  />

                  <span data-oid="z50nsxg">Win streaks earn bonus XP</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6" data-oid="t_wwdt.">
        <div className="mb-2 flex justify-between text-sm" data-oid="7x50gin">
          <span data-oid="lgknxyy">Waiting for players...</span>
          <span data-oid="q6yo-je">
            {allReady ? "All players ready!" : "Getting ready..."}
          </span>
        </div>
        <Progress
          className="h-2"
          data-oid="yf3og:s"
          value={allReady ? 100 : 66}
        />
      </div>
    </div>
  );
}
