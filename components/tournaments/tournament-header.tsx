"use client";

import { CalendarDays, Clock, Share2, Trophy, Users } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Tournament } from "./tournament-detail";

interface TournamentHeaderProps {
  tournament: Tournament;
}

export function TournamentHeader({ tournament }: TournamentHeaderProps) {
  // Status badge color mapping
  const statusColors: Record<string, string> = {
    registration: "bg-green-500 hover:bg-green-600",
    upcoming: "bg-blue-500 hover:bg-blue-600",
    ongoing: "bg-amber-500 hover:bg-amber-600",
    completed: "bg-gray-500 hover:bg-gray-600",
  };

  // Status text mapping
  const statusText: Record<string, string> = {
    registration: "Registration Open",
    upcoming: "Upcoming",
    ongoing: "Ongoing",
    completed: "Completed",
  };

  return (
    <div className="relative" data-oid="uw9ej50">
      <div
        className="absolute inset-0 z-10 rounded-lg bg-gradient-to-r from-purple-900/90 to-indigo-900/90"
        data-oid="_j7s4wl"
      />

      <Image
        alt={tournament.title}
        className="h-64 w-full rounded-lg object-cover"
        data-oid="hmfjsc2"
        height={400}
        src={"/abstract-geometric-shapes.png"}
        width={1200}
      />

      <div className="absolute top-4 left-4 z-20" data-oid="muan6u.">
        <Badge
          className={`${statusColors[tournament.status]} text-white`}
          data-oid="y.9qbfd"
        >
          {statusText[tournament.status]}
        </Badge>
      </div>
      <div className="absolute top-4 right-4 z-20" data-oid="j2y9tbh">
        <Button
          className="border-white/20 bg-white/10 text-white hover:bg-white/20"
          data-oid="ecf3m0u"
          size="icon"
          variant="outline"
        >
          <Share2 className="h-4 w-4" data-oid="-k65km2" />
        </Button>
      </div>
      <div className="relative z-20 p-4 text-white xl:p-8" data-oid="p201hg.">
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          data-oid="ojhukny"
        >
          <div data-oid="8crfmhg">
            <h1 className="mb-2 font-bold text-3xl" data-oid="6athksj">
              {tournament.title}
            </h1>
            <p className="mb-4 text-gray-200" data-oid="9f-yey6">
              {tournament.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-4" data-oid="zhuafjz">
              <div className="flex items-center gap-2" data-oid="48blry4">
                <CalendarDays className="h-4 w-4" data-oid="c44iahy" />
                <span className="text-sm" data-oid="udfiky2">
                  {tournament.dates}
                </span>
              </div>
              <div className="flex items-center gap-2" data-oid="nv8oi_j">
                <Users className="h-4 w-4" data-oid="rp_2s7q" />
                <span className="text-sm" data-oid=":sk7u6z">
                  {tournament.participants} participants
                </span>
              </div>
              <div className="flex items-center gap-2" data-oid="yjf:goa">
                <Trophy className="h-4 w-4" data-oid="whl5:75" />
                <span className="text-sm" data-oid="m0fq_r7">
                  {tournament.prize} prize pool
                </span>
              </div>
            </div>

            {tournament.status === "registration" && (
              <div className="flex gap-4" data-oid="c2yvni_">
                <Button
                  className="bg-white text-purple-900 hover:bg-gray-100"
                  data-oid="gyr4n8-"
                >
                  Register Now
                </Button>
                <Button
                  className="border-white/30 hover:bg-white/10"
                  data-oid="_f0pprj"
                  variant="outline"
                >
                  Learn More
                </Button>
              </div>
            )}

            {tournament.status === "upcoming" && (
              <Button
                className="border-white/30 hover:bg-white/10"
                data-oid="gxdlu0:"
                variant="outline"
              >
                Set Reminder
              </Button>
            )}

            {tournament.status === "ongoing" && (
              <Button
                className="bg-amber-500 text-white hover:bg-amber-600"
                data-oid="o_-ef1_"
              >
                Join Live
              </Button>
            )}

            {tournament.status === "completed" && (
              <Button
                className="border-white/30 hover:bg-white/10"
                data-oid="2zuq8vt"
                variant="outline"
              >
                View Results
              </Button>
            )}
          </div>

          <div className="flex flex-col justify-center" data-oid="tp3kl.5">
            <div
              className="rounded-lg bg-white/10 p-4 backdrop-blur-sm"
              data-oid="14v-_b9"
            >
              <div
                className="mb-2 flex items-center justify-between"
                data-oid="iq8bs-q"
              >
                <span className="font-medium text-sm" data-oid="150qemr">
                  Organized by
                </span>
                <span className="font-bold text-sm" data-oid="p7pwxpi">
                  {tournament.organizer}
                </span>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-2" data-oid="f.mwx.1">
                <div
                  className="rounded bg-white/10 p-2 text-center"
                  data-oid="lcmj0e_"
                >
                  <div className="font-bold text-2xl" data-oid="h82jmym">
                    {tournament.rounds}
                  </div>
                  <div className="text-xs" data-oid="wunknhc">
                    Rounds
                  </div>
                </div>
                <div
                  className="rounded bg-white/10 p-2 text-center"
                  data-oid="ow3p0ye"
                >
                  <div className="font-bold text-2xl" data-oid="5fdv9p3">
                    {tournament.questionsPerRound}
                  </div>
                  <div className="text-xs" data-oid="6yb5zf.">
                    Questions
                  </div>
                </div>
                <div
                  className="rounded bg-white/10 p-2 text-center"
                  data-oid="t9eiw4q"
                >
                  <div className="font-bold text-2xl" data-oid="d0c2p8f">
                    {tournament.difficulty}
                  </div>
                  <div className="text-xs" data-oid="efrub9q">
                    Difficulty
                  </div>
                </div>
              </div>

              {tournament.status === "registration" && (
                <div
                  className="flex items-center justify-between text-sm"
                  data-oid="5luiexk"
                >
                  <span data-oid="-a0w4zp">Registration closes in</span>
                  <div
                    className="flex items-center text-amber-300"
                    data-oid="re26-rm"
                  >
                    <Clock className="mr-1 h-4 w-4" data-oid="krovzwy" />
                    <span className="font-bold" data-oid="4stjinz">
                      {tournament.registrationEnds}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
