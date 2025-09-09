"use client";
import { Award, ChevronLeft, ChevronRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import cardCover from "@/public/card-cover.png";

// Sample top players data
const topPlayers = [
  {
    id: 1,
    name: "Alex Johnson",
    username: "alexmaster",
    avatar: "/avatars/alex.png",
    country: "United States",
    countryCode: "us",
    rank: 1,
    rankTitle: "Grandmaster",
    totalWins: 42,
    winAmount: 1250.75,
    change: "up",
    followers: 1248,
    following: 356,
  },
  {
    id: 2,
    name: "Sarah Williams",
    username: "quizwizard",
    avatar: "/avatars/wizard.webp",
    country: "Canada",
    countryCode: "ca",
    rank: 2,
    rankTitle: "Master",
    totalWins: 38,
    winAmount: 980.5,
    change: "up",
    followers: 987,
    following: 412,
  },
  {
    id: 3,
    name: "Michael Brown",
    username: "brainiacsarah",
    avatar: "/avatars/sarah.webp",
    country: "United Kingdom",
    countryCode: "gb",
    rank: 3,
    rankTitle: "Expert",
    totalWins: 35,
    winAmount: 875.25,
    change: "same",
    followers: 756,
    following: 289,
  },
  {
    id: 4,
    name: "Emily Davis",
    username: "triviaking",
    avatar: "/avatars/king.webp",
    country: "Australia",
    countryCode: "au",
    rank: 4,
    rankTitle: "Pro",
    totalWins: 31,
    winAmount: 720.8,
    change: "down",
    followers: 645,
    following: 178,
  },
  {
    id: 5,
    name: "David Wilson",
    username: "quizchampion",
    avatar: "/avatars/champion.png",
    country: "Germany",
    countryCode: "de",
    rank: 5,
    rankTitle: "Pro",
    totalWins: 29,
    winAmount: 695.4,
    change: "up",
    followers: 532,
    following: 245,
  },
  {
    id: 6,
    name: "Jessica Taylor",
    username: "mindmaster",
    avatar: "/avatars/mind.webp",
    country: "France",
    countryCode: "fr",
    rank: 6,
    rankTitle: "Elite",
    totalWins: 27,
    winAmount: 650.2,
    change: "same",
    followers: 487,
    following: 312,
  },
  {
    id: 7,
    name: "Ryan Martinez",
    username: "quizgenius",
    avatar: "/avatars/genious.png",
    country: "Spain",
    countryCode: "es",
    rank: 7,
    rankTitle: "Advanced",
    totalWins: 25,
    winAmount: 620.75,
    change: "up",
    followers: 423,
    following: 198,
  },
  {
    id: 8,
    name: "Olivia Anderson",
    username: "brainpower",
    avatar: "/avatars/brain.png",
    country: "Italy",
    countryCode: "it",
    rank: 8,
    rankTitle: "Advanced",
    totalWins: 23,
    winAmount: 580.3,
    change: "down",
    followers: 378,
    following: 267,
  },
];

export function TopPlayersCarousel() {
  // Get badge color based on rank title
  const getBadgeVariant = (rankTitle: string) => {
    switch (rankTitle) {
      case "Grandmaster":
        return "purple";
      case "Master":
        return "blue";
      case "Expert":
        return "yellow";
      case "Pro":
        return "success";
      case "Elite":
        return "default";
      default:
        return "outline";
    }
  };

  // Format number with k for thousands
  const formatNumber = (num: number) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
  };

  return (
    <section
      className="space-y-4 bg-indigo-50 px-4 py-10 xl:px-8 dark:bg-slate-900"
      data-oid="m9nhos5"
    >
      <div className="flex items-center justify-between" data-oid="bq1ai6y">
        <div className="flex items-center gap-2" data-oid="_8fmix8">
          <Award className="h-6 w-6 text-primary" data-oid=".a:i37v" />
          <h2 className="font-bold text-2xl tracking-tight" data-oid="2exl8iu">
            Top Players
          </h2>
        </div>
        <div className="flex items-center gap-2" data-oid="99e5gc4">
          <Button
            className="prev-player"
            data-oid="6z4:5qu"
            size="icon"
            variant="outline"
          >
            <ChevronLeft className="h-4 w-4" data-oid="2l_v0.8" />
          </Button>
          <Button
            className="next-player"
            data-oid="r0dzb1v"
            size="icon"
            variant="outline"
          >
            <ChevronRight className="h-4 w-4" data-oid="rf3iig8" />
          </Button>
        </div>
      </div>

      <div className="w-full" data-oid="i5mp:fr">
        <Swiper
          data-oid="cpkv-vq"
          loop
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: ".next-player", prevEl: ".prev-player" }}
          slidesPerView={"auto"}
          spaceBetween={16}
        >
          {topPlayers.map((player) => (
            <SwiperSlide
              className="max-w-[340px]"
              data-oid="8gg_t1c"
              key={player.id}
            >
              <Card
                className="h-full overflow-hidden shadow-md transition-shadow hover:shadow-lg"
                data-oid="d-67t0t"
              >
                <CardContent className="!p-0" data-oid="3f7cc7p">
                  <div className="relative" data-oid="fuu0w:4">
                    <Image
                      alt="cover img"
                      className="size-full w-full object-cover"
                      data-oid="_asw:sw"
                      src={cardCover}
                    />

                    {/* Avatar */}
                    <div
                      className="-bottom-10 -translate-x-1/2 absolute left-1/2 z-10"
                      data-oid="rh9_.xw"
                    >
                      <Avatar
                        className="h-20 w-20 border-4 border-white bg-background shadow-md"
                        data-oid="8dex98_"
                      >
                        <AvatarImage
                          alt={player.name}
                          className="object-cover object-center"
                          data-oid="-f76bed"
                          src={player.avatar || "/placeholder.svg"}
                        />

                        <AvatarFallback data-oid="ql9px4f">
                          {player.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Badge */}
                    <Badge
                      className="absolute top-3 right-3 rounded-full px-2 py-0.5 text-xs"
                      data-oid="k.dillc"
                      variant={getBadgeVariant(player.rankTitle) as any}
                    >
                      {player.rankTitle}
                    </Badge>
                  </div>

                  <div
                    className="px-4 pt-14 pb-4 text-center"
                    data-oid="8soke1q"
                  >
                    {/* Name */}
                    <h3
                      className="font-semibold text-base text-foreground"
                      data-oid="yjblm3."
                    >
                      <Link
                        className="hover:underline"
                        data-oid="4el7iim"
                        href={`/profile/${player.username}`}
                      >
                        {player.name}
                      </Link>
                    </h3>

                    {/* Country */}
                    <div
                      className="mt-1 mb-4 flex items-center justify-center gap-1 text-muted-foreground text-sm"
                      data-oid="29:e6tv"
                    >
                      <Image
                        alt={player.country}
                        className="h-3"
                        data-oid="3tump4x"
                        height={12}
                        src={`https://flagcdn.com/16x12/${player.countryCode}.png`}
                        unoptimized
                        width={16}
                      />

                      <span data-oid="h6__-v4">{player.country}</span>
                    </div>

                    {/* Stats */}
                    <div
                      className="mb-5 grid grid-cols-3 gap-4 text-center"
                      data-oid="_9jl0rf"
                    >
                      <div className="space-y-1" data-oid="rfo3:b0">
                        <div
                          className="flex items-center justify-center"
                          data-oid="xbug2y4"
                        >
                          <div
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-muted font-semibold text-xs"
                            data-oid="m5xe6hv"
                          >
                            {player.rank}
                          </div>
                        </div>
                        <p
                          className="text-muted-foreground text-xs"
                          data-oid="zmc46ul"
                        >
                          Rank
                        </p>
                      </div>
                      <div className="space-y-1" data-oid="kraas_j">
                        <p
                          className="font-semibold text-foreground"
                          data-oid="c56.ez4"
                        >
                          {player.totalWins}
                        </p>
                        <p
                          className="text-muted-foreground text-xs"
                          data-oid="kq2b94a"
                        >
                          Wins
                        </p>
                      </div>
                      <div className="space-y-1" data-oid="3rg6_eg">
                        <p
                          className="font-semibold text-green-600"
                          data-oid="qa5572w"
                        >
                          ${player.winAmount.toLocaleString()}
                        </p>
                        <p
                          className="text-muted-foreground text-xs"
                          data-oid="q4eweuu"
                        >
                          Earned
                        </p>
                      </div>
                    </div>

                    {/* Follower & Following */}
                    <div
                      className="grid grid-cols-2 gap-3 text-center"
                      data-oid="j00:w:i"
                    >
                      <div
                        className="flex flex-col items-center rounded-lg bg-muted/80 p-2"
                        data-oid="c-8b_tq"
                      >
                        <div
                          className="mb-1 flex items-center gap-1 text-muted-foreground text-xs"
                          data-oid="413.jhe"
                        >
                          <Users className="h-3 w-3" data-oid="yqqana4" />
                          <span data-oid="a5-ntam">Followers</span>
                        </div>
                        <p className="font-semibold" data-oid="toh-9sj">
                          {formatNumber(player.followers)}
                        </p>
                      </div>
                      <div
                        className="flex flex-col items-center rounded-lg bg-muted/80 p-2"
                        data-oid="_jpc95s"
                      >
                        <div
                          className="mb-1 flex items-center gap-1 text-muted-foreground text-xs"
                          data-oid="hvdc61v"
                        >
                          <Users className="h-3 w-3" data-oid="k5kfca_" />
                          <span data-oid="idiist.">Following</span>
                        </div>
                        <p className="font-semibold" data-oid=".1p9821">
                          {formatNumber(player.following)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center" data-oid="gxjc1ag">
        <Button asChild data-oid="f509yq." variant="outline">
          <Link data-oid="qq7.j_g" href="/leaderboard">
            View Full Leaderboard
          </Link>
        </Button>
      </div>
    </section>
  );
}
