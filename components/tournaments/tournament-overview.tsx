"use client";

import {
  Calendar,
  CheckCircle,
  Clock,
  HelpCircle,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tournament } from "./tournament-detail";

interface TournamentOverviewProps {
  tournament: Tournament;
}

export function TournamentOverview({ tournament }: TournamentOverviewProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3" data-oid="l6m9l5c">
      <div className="md:col-span-2" data-oid="mof5-17">
        <Card data-oid="w_cdv.c">
          <CardHeader data-oid="zn_0er.">
            <CardTitle data-oid="864e2.4">About This Tournament</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="5oldd2:">
            <p data-oid="8lrj4d-">
              Welcome to the {tournament.title}! This exciting tournament will
              test your knowledge across multiple categories and challenge you
              to compete against quiz enthusiasts from around the world.
            </p>

            <h3 className="font-semibold text-lg" data-oid="3q6rmvi">
              Tournament Format
            </h3>
            <p data-oid="02jnz.m">
              This tournament follows a {tournament.format} format with{" "}
              {tournament.rounds} rounds of competition. Each round consists of{" "}
              {tournament.questionsPerRound} questions across various
              categories, with {tournament.timePerQuestion} seconds allowed per
              question.
            </p>

            <h3 className="font-semibold text-lg" data-oid="zybs.4s">
              Eligibility
            </h3>
            <p data-oid="krk1v2t">
              {tournament.eligibility}. All participants must have a registered
              account on QuizHub and agree to the tournament rules and fair play
              guidelines.
            </p>

            <h3 className="font-semibold text-lg" data-oid="l:xr_7_">
              How to Participate
            </h3>
            <ol
              className="ml-4 list-inside list-decimal space-y-2"
              data-oid="fy2-60b"
            >
              <li data-oid="8frjfp7">
                Register for the tournament before the registration deadline
              </li>
              <li data-oid="bmbzwyf">
                Complete any qualifying rounds if applicable
              </li>
              <li data-oid="td:2sn7">
                Log in during the scheduled tournament times
              </li>
              <li data-oid="-2ld8ze">Answer questions within the time limit</li>
              <li data-oid="rs98e_m">Track your progress on the leaderboard</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mt-6" data-oid="r-ogefa">
          <CardHeader data-oid=".:pg.da">
            <CardTitle data-oid="7bfvmf_">Key Dates</CardTitle>
          </CardHeader>
          <CardContent data-oid="q_whw8y">
            <div className="space-y-4" data-oid="qbqzhlj">
              <div className="flex items-start gap-3" data-oid="s6otv0_">
                <Calendar
                  className="mt-0.5 h-5 w-5 text-purple-500"
                  data-oid="p645wfk"
                />

                <div data-oid="-_z1a1.">
                  <h4 className="font-medium" data-oid="-sno:fk">
                    Registration Period
                  </h4>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="f9rh7us"
                  >
                    May 1 - May 14, 2023
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3" data-oid="sc_.3av">
                <Calendar
                  className="mt-0.5 h-5 w-5 text-blue-500"
                  data-oid="ji06maz"
                />

                <div data-oid="7q3hd4h">
                  <h4 className="font-medium" data-oid="4s4r.yo">
                    Qualifying Round
                  </h4>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="_o.xfwq"
                  >
                    May 15 - May 20, 2023
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3" data-oid="vvtd:h3">
                <Calendar
                  className="mt-0.5 h-5 w-5 text-amber-500"
                  data-oid="yh2j::6"
                />

                <div data-oid="a36wkm3">
                  <h4 className="font-medium" data-oid="b-d4yvt">
                    Main Tournament
                  </h4>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="0lbi52v"
                  >
                    {tournament.dates}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3" data-oid="9glv_sn">
                <Trophy
                  className="mt-0.5 h-5 w-5 text-green-500"
                  data-oid="po7jj8j"
                />

                <div data-oid="kdq.:qz">
                  <h4 className="font-medium" data-oid="jdajd-7">
                    Winners Announcement
                  </h4>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="e32jd8b"
                  >
                    June 12, 2023
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6" data-oid=":66zasz">
        <Card data-oid="-8pf19.">
          <CardHeader data-oid="vzoyoja">
            <CardTitle data-oid="u-qz94r">Tournament Stats</CardTitle>
          </CardHeader>
          <CardContent data-oid="w_f46t9">
            <div className="space-y-4" data-oid="epxirxj">
              <div
                className="flex items-center justify-between"
                data-oid="qa9gq7a"
              >
                <div className="flex items-center gap-2" data-oid="cslx.pj">
                  <Users
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="0_ol9gc"
                  />

                  <span className="text-sm" data-oid="zrct2:h">
                    Participants
                  </span>
                </div>
                <span className="font-medium" data-oid="9cdntne">
                  {tournament.participants}
                </span>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="d3fgaks"
              >
                <div className="flex items-center gap-2" data-oid="i1_3xw8">
                  <Trophy
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="9jpep95"
                  />

                  <span className="text-sm" data-oid="pggzf-y">
                    Prize Pool
                  </span>
                </div>
                <span className="font-medium" data-oid="tcxdda9">
                  {tournament.prize}
                </span>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="bq16q31"
              >
                <div className="flex items-center gap-2" data-oid="i8y1rsc">
                  <Target
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="8znfvtp"
                  />

                  <span className="text-sm" data-oid="y1ta8yy">
                    Difficulty
                  </span>
                </div>
                <span className="font-medium" data-oid="fv-yrqi">
                  {tournament.difficulty}
                </span>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="_as4mc8"
              >
                <div className="flex items-center gap-2" data-oid="syp6m3m">
                  <Clock
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="cg.fav2"
                  />

                  <span className="text-sm" data-oid="_ysev7s">
                    Time per Question
                  </span>
                </div>
                <span className="font-medium" data-oid="5t5547.">
                  {tournament.timePerQuestion} seconds
                </span>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="absb9qb"
              >
                <div className="flex items-center gap-2" data-oid="hjimjgw">
                  <HelpCircle
                    className="h-4 w-4 text-muted-foreground"
                    data-oid="qtbwr9."
                  />

                  <span className="text-sm" data-oid="jevl0vb">
                    Total Questions
                  </span>
                </div>
                <span className="font-medium" data-oid="_xqtg2b">
                  {tournament.rounds * tournament.questionsPerRound}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="sbt.p:b">
          <CardHeader data-oid="9jhu.-1">
            <CardTitle data-oid="0gv7qr2">Categories</CardTitle>
          </CardHeader>
          <CardContent data-oid="-.j-1st">
            <div className="space-y-2" data-oid="qz20_2u">
              <div className="flex items-center gap-2" data-oid="6-038on">
                <CheckCircle
                  className="h-4 w-4 text-green-500"
                  data-oid="4uqm1e1"
                />

                <span data-oid="c5j_hks">General Knowledge</span>
              </div>
              <div className="flex items-center gap-2" data-oid="4y1gz-7">
                <CheckCircle
                  className="h-4 w-4 text-green-500"
                  data-oid="w.qvcum"
                />

                <span data-oid="qf4zaom">Science & Technology</span>
              </div>
              <div className="flex items-center gap-2" data-oid="mvw9te5">
                <CheckCircle
                  className="h-4 w-4 text-green-500"
                  data-oid="3ljstk4"
                />

                <span data-oid="u.5-a.0">History & Geography</span>
              </div>
              <div className="flex items-center gap-2" data-oid="i865dbx">
                <CheckCircle
                  className="h-4 w-4 text-green-500"
                  data-oid="d0i5gpr"
                />

                <span data-oid="p1-v3tf">Entertainment & Pop Culture</span>
              </div>
              <div className="flex items-center gap-2" data-oid="kxh_w81">
                <CheckCircle
                  className="h-4 w-4 text-green-500"
                  data-oid="8w:ktom"
                />

                <span data-oid="5zds4ml">Sports & Leisure</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
