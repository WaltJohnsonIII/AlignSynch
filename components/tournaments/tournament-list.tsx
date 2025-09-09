"use client";

import { ArrowRight, CalendarDays, Clock, Trophy, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";

interface TournamentListProps {
  activeCategory: string;
  activeFilter: string;
}

export function TournamentList({
  activeCategory,
  activeFilter,
}: TournamentListProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  // Mock tournament data - in a real app, this would come from an API
  const tournaments = [
    {
      id: "science-showdown",
      title: "Science Showdown",
      description:
        "Test your scientific knowledge across physics, chemistry, biology and more.",
      image: "/space-exploration-quiz.png", // Fixed image path to use an existing image
      category: "science",
      status: "registration",
      dates: "June 1 - June 15, 2023",
      participants: 342,
      prize: "$1,000",
      registrationEnds: "2 days",
      difficulty: "Medium",
    },
    {
      id: "history-heroes",
      title: "History Heroes",
      description:
        "Journey through time and test your knowledge of historical events and figures.",
      image: "/ancient-civilizations-quiz.png", // Using existing history quiz image
      category: "history",
      status: "upcoming",
      dates: "June 5 - June 20, 2023",
      participants: 215,
      prize: "$750",
      registrationEnds: "5 days",
      difficulty: "Hard",
    },
    {
      id: "pop-culture-party",
      title: "Pop Culture Party",
      description:
        "From movies to music, test your knowledge of all things entertainment.",
      image: "/space-exploration-quiz.png", // Using existing entertainment quiz image
      category: "entertainment",
      status: "ongoing",
      dates: "May 20 - June 5, 2023",
      participants: 567,
      prize: "$1,500",
      registrationEnds: "Closed",
      difficulty: "Easy",
    },
    {
      id: "geography-genius",
      title: "Geography Genius",
      description:
        "Navigate through countries, capitals, landmarks and geographical wonders.",
      image: "/world-map-quiz.png", // Using existing geography quiz image
      category: "geography",
      status: "upcoming",
      dates: "June 10 - June 25, 2023",
      participants: 189,
      prize: "$800",
      registrationEnds: "8 days",
      difficulty: "Medium",
    },
    {
      id: "sports-spectacular",
      title: "Sports Spectacular",
      description:
        "From football to Olympics, test your knowledge of sporting events and athletes.",
      image: "/sports-trivia-quiz.png", // Using existing sports quiz image
      category: "sports",
      status: "registration",
      dates: "June 15 - July 1, 2023",
      participants: 412,
      prize: "$1,200",
      registrationEnds: "10 days",
      difficulty: "Medium",
    },
    {
      id: "tech-titans",
      title: "Tech Titans",
      description:
        "Challenge yourself with questions about technology, coding, and digital innovation.",
      image: "/technology-quiz.png", // Using existing technology quiz image
      category: "technology",
      status: "completed",
      dates: "May 1 - May 15, 2023",
      participants: 623,
      prize: "$2,000",
      registrationEnds: "Closed",
      difficulty: "Hard",
    },
  ];

  // Filter tournaments based on active category and filter
  const filteredTournaments = tournaments.filter((tournament) => {
    const categoryMatch =
      activeCategory === "all" || tournament.category === activeCategory;
    const filterMatch =
      activeFilter === "all" || tournament.status === activeFilter;
    return categoryMatch && filterMatch;
  });

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
    <div data-oid="x3h18ew">
      {filteredTournaments.length === 0 ? (
        <div className="py-12 text-center" data-oid="d4u2nlw">
          <div className="mb-4 text-5xl" data-oid="k1hp-zp">
            🏆
          </div>
          <h3 className="mb-2 font-medium text-xl" data-oid="542c1os">
            No tournaments found
          </h3>
          <p className="text-muted-foreground" data-oid="4eimu8i">
            Try changing your category or filter selection
          </p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          data-oid="t6kl7gy"
        >
          {filteredTournaments.map((tournament) => (
            <Card
              className="overflow-hidden transition-shadow hover:shadow-md"
              data-oid="rvkh86r"
              key={tournament.id}
            >
              <div className="relative h-48" data-oid=".u-7tcy">
                <Image
                  alt={tournament.title}
                  className="object-cover"
                  data-oid="dj9itmx"
                  fill
                  src={
                    tournament.image ||
                    "/placeholder.svg?height=200&width=400&text=Tournament+Image"
                  }
                />

                <div className="absolute top-2 right-2" data-oid="2mh_9p5">
                  <Badge
                    className={`${statusColors[tournament.status]} text-white`}
                    data-oid=":.t9k63"
                  >
                    {statusText[tournament.status]}
                  </Badge>
                </div>
                <div className="absolute bottom-2 left-2" data-oid="fwtoa8-">
                  <Badge
                    className="border-0 bg-black/50 text-white"
                    data-oid="pz4omi2"
                    variant="outline"
                  >
                    {tournament.difficulty}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4 xl:pt-6" data-oid="lfn:t::">
                <h3 className="mb-2 font-bold text-xl" data-oid="y8h_bo9">
                  {tournament.title}
                </h3>
                <p
                  className="mb-4 line-clamp-2 text-muted-foreground text-sm"
                  data-oid="dq0yn57"
                >
                  {tournament.description}
                </p>

                <div
                  className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-sm"
                  data-oid=".7u4i:t"
                >
                  <div className="flex items-center gap-1" data-oid="t7qp43b">
                    <CalendarDays
                      className="h-4 w-4 text-muted-foreground"
                      data-oid="y6pbdbk"
                    />

                    <span data-oid="fbavgg0">{tournament.dates}</span>
                  </div>
                  <div className="flex items-center gap-1" data-oid="00m_y.v">
                    <Users
                      className="h-4 w-4 text-muted-foreground"
                      data-oid="xjnr2db"
                    />

                    <span data-oid="eldfqu1">
                      {tournament.participants} participants
                    </span>
                  </div>
                  <div className="flex items-center gap-1" data-oid="3jloxh9">
                    <Trophy
                      className="h-4 w-4 text-muted-foreground"
                      data-oid="dq92xzq"
                    />

                    <span data-oid=":w3t0ox">{tournament.prize} prize</span>
                  </div>
                </div>

                {tournament.status !== "completed" && (
                  <div
                    className="flex items-center justify-between"
                    data-oid="cm5foqn"
                  >
                    {tournament.status === "registration" && (
                      <div
                        className="flex items-center text-sm"
                        data-oid="jidqsl7"
                      >
                        <Clock
                          className="mr-1 h-4 w-4 text-amber-500"
                          data-oid="fuzmkbn"
                        />

                        <span data-oid="sjz4bzj">
                          Closes in {tournament.registrationEnds}
                        </span>
                      </div>
                    )}
                    <Button
                      className="ml-auto"
                      data-oid="n-0k8kh"
                      onClick={() =>
                        router.push(`/tournaments/${tournament.id}`)
                      }
                      size="sm"
                    >
                      View Details{" "}
                      <ArrowRight className="ml-1 h-4 w-4" data-oid=":2r3n14" />
                    </Button>
                  </div>
                )}

                {tournament.status === "completed" && (
                  <Button
                    className="w-full"
                    data-oid="oid1b-e"
                    onClick={() => router.push(`/tournaments/${tournament.id}`)}
                    size="sm"
                    variant="outline"
                  >
                    View Results{" "}
                    <ArrowRight className="ml-1 h-4 w-4" data-oid="1gydc4j" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {filteredTournaments.length > 0 && (
        <div className="mt-8 flex justify-center" data-oid="lh.xlt5">
          <Pagination
            currentPage={currentPage}
            data-oid="c:l4uu5"
            onChange={setCurrentPage}
            totalPages={3}
          />
        </div>
      )}
    </div>
  );
}
