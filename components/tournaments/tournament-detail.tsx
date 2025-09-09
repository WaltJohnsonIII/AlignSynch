"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TournamentDiscussion } from "./tournament-discussion";
import { TournamentHeader } from "./tournament-header";
import { TournamentLeaderboard } from "./tournament-leaderboard";
import { TournamentOverview } from "./tournament-overview";
import { TournamentPrizes } from "./tournament-prizes";
import { TournamentRules } from "./tournament-rules";
import { TournamentSchedule } from "./tournament-schedule";

interface TournamentDetailProps {
  id: string;
}
export type Tournament = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
  dates: string;
  participants: number;
  prize: string;
  registrationEnds: string;
  difficulty: string;
  organizer: string;
  rounds: number;
  questionsPerRound: number;
  timePerQuestion: number;
  format: string;
  eligibility: string;
};
export function TournamentDetail({ id }: TournamentDetailProps) {
  // In a real app, you would fetch the tournament data based on the ID
  // For now, we'll use mock data

  const tournament = {
    id,
    title:
      id === "global-championship"
        ? "Global Knowledge Championship"
        : "Science Showdown",
    description:
      id === "global-championship"
        ? "Test your knowledge against the best quiz enthusiasts from around the world in this premier tournament with multiple rounds of challenging questions."
        : "Test your scientific knowledge across physics, chemistry, biology and more.",
    image:
      id === "global-championship"
        ? "/placeholder.svg?key=85jbh"
        : "/science-quiz-lab.png",
    category: id === "global-championship" ? "general" : "science",
    status: id === "global-championship" ? "registration" : "registration",
    dates:
      id === "global-championship"
        ? "May 15 - June 10, 2023"
        : "June 1 - June 15, 2023",
    participants: id === "global-championship" ? 1248 : 342,
    prize: id === "global-championship" ? "$5,000" : "$1,000",
    registrationEnds: id === "global-championship" ? "3 days" : "2 days",
    difficulty: id === "global-championship" ? "Hard" : "Medium",
    organizer: "QuizHub Official",
    rounds: id === "global-championship" ? 3 : 2,
    questionsPerRound: id === "global-championship" ? 50 : 30,
    timePerQuestion: 60, // seconds
    format: id === "global-championship" ? "Elimination" : "Points-based",
    eligibility: "All registered users",
  };

  return (
    <div className="container mx-auto" data-oid="0frkyw2">
      <TournamentHeader data-oid="f.qy03b" tournament={tournament} />

      <Tabs className="mt-8" data-oid="_kp8q.-" defaultValue="overview">
        <TabsList
          className="mb-8 flex w-full overflow-x-auto"
          data-oid="-py29h7"
        >
          <TabsTrigger data-oid="twj8b5w" value="overview">
            Overview
          </TabsTrigger>
          <TabsTrigger data-oid="hhi..2h" value="rules">
            Rules
          </TabsTrigger>
          <TabsTrigger data-oid="o-q3kr9" value="leaderboard">
            Leaderboard
          </TabsTrigger>
          <TabsTrigger data-oid="knpxa7i" value="prizes">
            Prizes
          </TabsTrigger>
          <TabsTrigger data-oid="onmtq37" value="schedule">
            Schedule
          </TabsTrigger>
          <TabsTrigger data-oid="pb8ba97" value="discussion">
            Discussion
          </TabsTrigger>
        </TabsList>

        <TabsContent data-oid="8es60ew" value="overview">
          <TournamentOverview data-oid="uk9vdk3" tournament={tournament} />
        </TabsContent>

        <TabsContent data-oid="mn2j3:j" value="rules">
          <TournamentRules data-oid="1e9xm0." tournament={tournament} />
        </TabsContent>

        <TabsContent data-oid="eo6dwiu" value="leaderboard">
          <TournamentLeaderboard data-oid="esf5p7w" tournament={tournament} />
        </TabsContent>

        <TabsContent data-oid="c2zwz:3" value="prizes">
          <TournamentPrizes data-oid="_29_dgv" tournament={tournament} />
        </TabsContent>

        <TabsContent data-oid="2.njdl:" value="schedule">
          <TournamentSchedule data-oid="gx0fhc1" />
        </TabsContent>

        <TabsContent data-oid="1-a5drr" value="discussion">
          <TournamentDiscussion
            data-oid="9:yra5f"
            tournamentId={tournament.id}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
