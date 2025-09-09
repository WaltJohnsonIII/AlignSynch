"use client";

import { ArrowRight, CalendarDays, Clock, Trophy, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function FeaturedTournament() {
  const router = useRouter();

  return (
    <Card className="overflow-hidden border-0 shadow-lg" data-oid="gq9qfc2">
      <div className="relative" data-oid="eqrwrjb">
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-purple-900/90 to-indigo-900/90"
          data-oid="na6r709"
        />

        <Image
          alt="Featured Tournament" // Using existing abstract image for featured tournament
          className="h-40 w-full object-cover xl:h-64"
          data-oid="850r_mj"
          height={400}
          src="/abstract-geometric-shapes.png"
          width={1200}
        />

        <div className="absolute top-4 left-4 z-20" data-oid="5qd_ha9">
          <Badge
            className="bg-red-500 text-white hover:bg-red-600"
            data-oid="wz5f8:9"
          >
            FEATURED
          </Badge>
        </div>
        <CardContent
          className="relative z-20 p-4 text-white md:p-8"
          data-oid="wimezfx"
        >
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            data-oid="wy49loz"
          >
            <div data-oid="kjy:ii4">
              <h2 className="mb-2 font-bold text-3xl" data-oid="z0a270k">
                Global Knowledge Championship
              </h2>
              <p className="mb-4 text-gray-200" data-oid="_4k:vqj">
                Test your knowledge against the best quiz enthusiasts from
                around the world in this premier tournament with multiple rounds
                of challenging questions.
              </p>

              <div className="mb-6 flex flex-wrap gap-4" data-oid="4c493v0">
                <div className="flex items-center gap-2" data-oid="7y5zo8y">
                  <CalendarDays className="h-4 w-4" data-oid="emg.r1b" />
                  <span className="text-sm" data-oid="bldne8a">
                    May 15 - June 10, 2023
                  </span>
                </div>
                <div className="flex items-center gap-2" data-oid="ge3ow5m">
                  <Users className="h-4 w-4" data-oid="3cpifsw" />
                  <span className="text-sm" data-oid="4x6w9p2">
                    1,248 participants
                  </span>
                </div>
                <div className="flex items-center gap-2" data-oid="htp-f-m">
                  <Trophy className="h-4 w-4" data-oid=".c44dfh" />
                  <span className="text-sm" data-oid="dstewmv">
                    $5,000 prize pool
                  </span>
                </div>
              </div>

              <Button
                className="bg-white text-purple-900 hover:bg-gray-100"
                data-oid="xc0odz5"
                onClick={() => router.push("/tournaments/global-championship")}
              >
                Join Tournament{" "}
                <ArrowRight className="ml-2 h-4 w-4" data-oid="bh:4ovg" />
              </Button>
            </div>

            <div className="flex flex-col justify-center" data-oid="i4l:en-">
              <div
                className="rounded-lg bg-white/10 p-4 backdrop-blur-sm"
                data-oid="2o-1y.k"
              >
                <div
                  className="mb-2 flex items-center justify-between"
                  data-oid="tso2_b."
                >
                  <span className="font-medium text-sm" data-oid="y9b:5v6">
                    Registration closes in
                  </span>
                  <div
                    className="flex items-center text-amber-300"
                    data-oid="y8:3pi2"
                  >
                    <Clock className="mr-1 h-4 w-4" data-oid="2vqk1vq" />
                    <span className="font-bold text-sm" data-oid="lpxr8c7">
                      3 days
                    </span>
                  </div>
                </div>
                <Progress className="mb-4 h-2" data-oid="868utez" value={72} />

                <div className="mb-4 grid grid-cols-3 gap-2" data-oid="wdvtvt4">
                  <div
                    className="rounded bg-white/10 p-2 text-center"
                    data-oid="psmkfv6"
                  >
                    <div className="font-bold text-2xl" data-oid="yvx8s.j">
                      3
                    </div>
                    <div className="text-xs" data-oid="h:b76gx">
                      Rounds
                    </div>
                  </div>
                  <div
                    className="rounded bg-white/10 p-2 text-center"
                    data-oid="i1rxmwm"
                  >
                    <div className="font-bold text-2xl" data-oid="6wz5xbk">
                      15
                    </div>
                    <div className="text-xs" data-oid="qie-ic.">
                      Categories
                    </div>
                  </div>
                  <div
                    className="rounded bg-white/10 p-2 text-center"
                    data-oid="gx3khgt"
                  >
                    <div className="font-bold text-2xl" data-oid="3fwbjc6">
                      50
                    </div>
                    <div className="text-xs" data-oid="8ltwpi1">
                      Questions
                    </div>
                  </div>
                </div>

                <div className="text-gray-300 text-xs" data-oid="en8qr7m">
                  Top 100 participants advance to the final round
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
