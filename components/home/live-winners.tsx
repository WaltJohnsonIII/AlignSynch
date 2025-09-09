"use client";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// Sample live winners data
const initialWinners = [
  {
    id: 1,
    name: "Alex J.",
    avatar: "/avatars/alex.png",
    amount: 5.75,
    quiz: "Science Trivia",
    timestamp: new Date("2025-05-20T10:58:00"), // Fixed date
    isNew: true,
    isHighValue: false,
  },
  {
    id: 2,
    name: "Sarah W.",
    avatar: "/avatars/wizard.webp",
    amount: 12.5,
    quiz: "History Masters",
    timestamp: new Date("2025-05-20T10:55:00"), // Fixed date
    isNew: false,
    isHighValue: true,
  },
  {
    id: 3,
    name: "Mike B.",
    avatar: "/avatars/sarah.webp",
    amount: 3.25,
    quiz: "Pop Culture Quiz",
    timestamp: new Date("2025-05-20T10:52:00"), // Fixed date
    isNew: false,
    isHighValue: false,
  },
  {
    id: 4,
    name: "Emily D.",
    avatar: "/avatars/king.webp",
    amount: 7.8,
    quiz: "Geography Challenge",
    timestamp: new Date("2025-05-20T10:48:00"), // Fixed date
    isNew: false,
    isHighValue: false,
  },
  {
    id: 5,
    name: "David W.",
    avatar: "/avatars/champion.png",
    amount: 15.0,
    quiz: "Math Wizards",
    timestamp: new Date("2025-05-20T10:42:00"), // Fixed date
    isNew: false,
    isHighValue: true,
  },
  {
    id: 6,
    name: "Jessica T.",
    avatar: "/avatars/mind.webp",
    amount: 4.5,
    quiz: "Movie Buffs",
    timestamp: new Date("2025-05-20T10:35:00"), // Fixed date
    isNew: false,
    isHighValue: false,
  },
  {
    id: 7,
    name: "Ryan M.",
    avatar: "/avatars/genious.png",
    amount: 9.25,
    quiz: "Sports Trivia",
    timestamp: new Date("2025-05-20T10:25:00"), // Fixed date
    isNew: false,
    isHighValue: false,
  },
  {
    id: 8,
    name: "Olivia A.",
    avatar: "/avatars/brain.png",
    amount: 6.75,
    quiz: "Music Masters",
    timestamp: new Date("2025-05-21T10:15:00"), // Fixed date
    isNew: false,
    isHighValue: false,
  },
];

export function LiveWinners() {
  return (
    <section
      className="space-y-4 bg-slate-50 px-4 py-6 xl:px-8 dark:bg-slate-900"
      data-oid="l21b6_x"
    >
      <div className="flex items-center justify-between" data-oid="kvdg8fv">
        <div className="flex items-center gap-2" data-oid="0ow4hwf">
          <span className="relative flex h-3 w-3" data-oid="rn6us_u">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
              data-oid="ctj02v0"
            />
            <span
              className="relative inline-flex h-3 w-3 rounded-full bg-green-500"
              data-oid="ftk374a"
            />
          </span>
          <h2 className="font-bold text-2xl tracking-tight" data-oid="rjbb9z.">
            Live Winners
          </h2>
        </div>
        <Badge
          className="bg-green-50 dark:bg-green-500"
          data-oid="ggqtmr8"
          variant="outline"
        >
          8 recent winners
        </Badge>
      </div>

      <div className="relative overflow-hidden" data-oid="98iktnj">
        <Swiper
          autoplay={{ delay: 2500 }}
          data-oid="yf_gm72"
          loop
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: ".next-winner", prevEl: ".prev-winner" }}
          slidesPerView={"auto"}
          spaceBetween={16}
        >
          {initialWinners.map((winner) => (
            <SwiperSlide
              className="max-w-[256px] flex-shrink-0"
              data-oid="_n-j4km"
              key={winner.id}
            >
              <Card
                className={`relative w-64 p-4 backdrop-blur-sm ${winner.isHighValue ? "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20" : "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-900/20"} rounded-xl shadow-md transition-all hover:shadow-lg`}
                data-oid="-5-j_2u"
              >
                {winner.isHighValue && (
                  <div
                    className="absolute top-4 right-2 animate-bounce"
                    data-oid="39_pjo2"
                  >
                    <span className="text-2xl" data-oid="ls7p_39">
                      🎉
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3" data-oid="y_230-q">
                  <Avatar
                    className="h-12 w-12 border-2 border-white shadow-sm"
                    data-oid=":-zedgl"
                  >
                    <AvatarImage
                      alt={winner.name}
                      className="object-cover object-center"
                      data-oid="9zehs75"
                      src={winner.avatar || "/placeholder.svg"}
                    />

                    <AvatarFallback data-oid="8nckg-j">
                      {winner.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div data-oid="ks0g-7h">
                    <h3 className="font-medium" data-oid="c2h4wx:">
                      <Link data-oid="afzsls." href={`/profile/${winner.id}`}>
                        {winner.name}
                      </Link>
                    </h3>
                    <p
                      className="text-muted-foreground text-sm"
                      data-oid="6xvu3cj"
                    >
                      {formatDistanceToNow(winner.timestamp, {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
                <div
                  className="mt-3 flex items-center gap-2"
                  data-oid=":2.okv."
                >
                  <span className="text-xl" data-oid="h.vc6mf">
                    💰
                  </span>
                  <p className="text-sm" data-oid="q5i7kxx">
                    Won{" "}
                    <span
                      className="font-semibold text-green-600"
                      data-oid="w7t1938"
                    >
                      ${winner.amount.toFixed(2)}
                    </span>{" "}
                    playing{" "}
                    <span className="font-medium" data-oid=":b9gtk:">
                      "{winner.quiz}"
                    </span>
                  </p>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
