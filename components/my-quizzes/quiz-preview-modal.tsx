"use client";

import { format } from "date-fns";
import { Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { CreatedQuiz } from "@/lib/data/users";

interface QuizPreviewModalProps {
  quiz: CreatedQuiz | null;
  isOpen: boolean;
  onClose: () => void;
  onViewFull: () => void;
}

export function QuizPreviewModal({
  quiz,
  isOpen,
  onClose,
  onViewFull,
}: QuizPreviewModalProps) {
  if (!quiz) return null;

  return (
    <Dialog data-oid="vj-s390" onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-[800px]" data-oid="b1210az">
        <DialogHeader data-oid="h_qn8-_">
          <DialogTitle data-oid="clm_acj">
            Quiz Preview: {quiz.title}
          </DialogTitle>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-auto" data-oid="nk131oc">
          <div className="relative aspect-video w-full" data-oid="j6m30yg">
            <Image
              alt={quiz.title}
              className="rounded-md object-cover"
              data-oid="s6_j8ty"
              fill
              height={350}
              src={quiz.image || "/placeholder.svg"}
              width={600}
            />
          </div>

          <div className="mt-4 space-y-4" data-oid="j9gql0p">
            <div data-oid="3ec9tdt">
              <h3 className="font-semibold text-lg" data-oid="vda-2_z">
                Description
              </h3>
              <p className="text-muted-foreground" data-oid="276j6td">
                {quiz.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2" data-oid="16hja-h">
              <Badge
                className="bg-background"
                data-oid="0kith1y"
                variant="outline"
              >
                {quiz.category}
              </Badge>
              <Badge
                className={`
                  ${quiz.difficulty === "easy" ? "border-green-500 bg-green-50 text-green-700" : quiz.difficulty === "medium" ? "border-yellow-500 bg-yellow-50 text-yellow-700" : "border-red-500 bg-red-50 text-red-700"}
                `}
                data-oid="o3v7h.n"
                variant="outline"
              >
                {quiz.difficulty.charAt(0).toUpperCase() +
                  quiz.difficulty.slice(1)}
              </Badge>
              <Badge
                className="bg-background"
                data-oid="motn5om"
                variant="outline"
              >
                {quiz.questions} Questions
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4" data-oid="q6uo0ws">
              <Card data-oid="dfsg-56">
                <CardContent className="p-4" data-oid="yg2yika">
                  <div
                    className="flex items-center justify-between"
                    data-oid="zduqnf7"
                  >
                    <span className="font-medium text-sm" data-oid="l2u:0v4">
                      Total Plays
                    </span>
                    <span className="font-semibold" data-oid="uw_1qib">
                      {quiz.plays.toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card data-oid="-zq8.o.">
                <CardContent className="p-4" data-oid="rh-bnl0">
                  <div
                    className="flex items-center justify-between"
                    data-oid="uz5kvaf"
                  >
                    <span className="font-medium text-sm" data-oid="j:rs:qa">
                      Average Score
                    </span>
                    <span className="font-semibold" data-oid="evdcizj">
                      {quiz.averageScore}%
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card data-oid="5rm26xj">
                <CardContent className="p-4" data-oid="eap2zn-">
                  <div
                    className="flex items-center justify-between"
                    data-oid="u2:y750"
                  >
                    <span className="font-medium text-sm" data-oid="dfxrwo3">
                      Rating
                    </span>
                    <span
                      className="flex items-center font-semibold"
                      data-oid="cklnag_"
                    >
                      {quiz.rating.toFixed(1)}
                      <Star
                        className="ml-1 h-4 w-4 text-amber-500"
                        data-oid="bcmohe4"
                      />
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card data-oid="sw_7ab4">
                <CardContent className="p-4" data-oid="91cbe39">
                  <div
                    className="flex items-center justify-between"
                    data-oid="vkrf92_"
                  >
                    <span className="font-medium text-sm" data-oid="2dx2qos">
                      Created
                    </span>
                    <span className="font-semibold" data-oid="33ib_ww">
                      {format(new Date(quiz.createdAt), "MMM d, yyyy")}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {quiz.isTournament && quiz.tournamentDetails && (
              <Card
                className="border-purple-200 bg-purple-50"
                data-oid="o7r4dz2"
              >
                <CardContent className="p-4" data-oid="uc4qvpf">
                  <h3
                    className="mb-2 font-semibold text-base text-purple-800"
                    data-oid="dux5q60"
                  >
                    Tournament Details
                  </h3>
                  <div
                    className="grid grid-cols-2 gap-2 text-sm"
                    data-oid=".p90onp"
                  >
                    <div data-oid="3elk8q1">
                      <span
                        className="font-medium text-purple-700"
                        data-oid="xa-5mos"
                      >
                        Status:
                      </span>{" "}
                      <span
                        className="text-purple-900 capitalize"
                        data-oid="zb98glp"
                      >
                        {quiz.tournamentDetails.status}
                      </span>
                    </div>
                    <div data-oid="txhkbid">
                      <span
                        className="font-medium text-purple-700"
                        data-oid="ix-jofw"
                      >
                        Participants:
                      </span>{" "}
                      <span className="text-purple-900" data-oid="zlyf2qv">
                        {quiz.tournamentDetails.participants}
                      </span>
                    </div>
                    <div data-oid="ietj08b">
                      <span
                        className="font-medium text-purple-700"
                        data-oid="nj5ce4j"
                      >
                        Start Date:
                      </span>{" "}
                      <span className="text-purple-900" data-oid="gtmm:ap">
                        {format(
                          new Date(quiz.tournamentDetails.startDate),
                          "MMM d, yyyy"
                        )}
                      </span>
                    </div>
                    <div data-oid="4psyf9v">
                      <span
                        className="font-medium text-purple-700"
                        data-oid="h8s9nk4"
                      >
                        End Date:
                      </span>{" "}
                      <span className="text-purple-900" data-oid="cd_ve:z">
                        {format(
                          new Date(quiz.tournamentDetails.endDate),
                          "MMM d, yyyy"
                        )}
                      </span>
                    </div>
                    <div className="col-span-2" data-oid="ouf1cig">
                      <span
                        className="font-medium text-purple-700"
                        data-oid="oq1w3_l"
                      >
                        Prize:
                      </span>{" "}
                      <span className="text-purple-900" data-oid=".rkzfxh">
                        {quiz.tournamentDetails.prize}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        <DialogFooter data-oid="3:b0uqy">
          <Button data-oid="6j4p.8p" onClick={onClose} variant="outline">
            Close
          </Button>
          <Button data-oid="_cbo6pc" onClick={onViewFull}>
            View Full Quiz
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
