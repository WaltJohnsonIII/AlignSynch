"use client";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "../ui/progress";

// Sample quiz data by difficulty
const quizzesByDifficulty = {
  easy: [
    {
      id: 1,
      title: "General Knowledge Basics",
      category: "General",
      estimatedTime: 10,
      reward: 3.0,
      players: 15,
      maxPlayers: 100,
      spotsLeft: 85,
      img: "/quiz/q13.png",
    },
    {
      id: 2,
      title: "Pop Culture Essentials",
      category: "Entertainment",
      estimatedTime: 8,
      reward: 2.5,
      players: 60,
      maxPlayers: 100,
      spotsLeft: 40,
      img: "/quiz/q6.png",
    },
    {
      id: 3,
      title: "Science for Beginners",
      category: "Science",
      estimatedTime: 12,
      reward: 3.5,
      players: 90,
      maxPlayers: 100,
      spotsLeft: 10,
      img: "/quiz/q12.png",
    },
    {
      id: 4,
      title: "Sports Fundamentals",
      category: "Sports",
      estimatedTime: 10,
      reward: 3.0,
      players: 40,
      maxPlayers: 100,
      spotsLeft: 60,
      img: "/quiz/q15.png",
    },
    {
      id: 5,
      title: "Geography Starters",
      category: "Geography",
      estimatedTime: 15,
      reward: 4.0,
      players: 75,
      maxPlayers: 100,
      spotsLeft: 25,
      img: "/quiz/q17.png",
    },
    {
      id: 6,
      title: "History Basics",
      category: "History",
      estimatedTime: 12,
      reward: 3.5,
      players: 50,
      maxPlayers: 100,
      spotsLeft: 50,
      img: "/quiz/q6.png",
    },
    {
      id: 7,
      title: "Mathematics Basics",
      category: "Mathematics",
      estimatedTime: 10,
      reward: 3.0,
      players: 30,
      maxPlayers: 100,
      spotsLeft: 70,
      img: "/quiz/q7.png",
    },
  ],

  medium: [
    {
      id: 6,
      title: "History Through the Ages",
      category: "History",
      estimatedTime: 15,
      reward: 5.0,
      players: 25,
      maxPlayers: 50,
      spotsLeft: 25,
      img: "/quiz/q6.png",
    },
    {
      id: 7,
      title: "Science & Technology",
      category: "Science",
      estimatedTime: 18,
      reward: 6.0,
      players: 40,
      maxPlayers: 50,
      spotsLeft: 10,
      img: "/quiz/q7.png",
    },
    {
      id: 8,
      title: "World Literature Classics",
      category: "Literature",
      estimatedTime: 20,
      reward: 6.5,
      players: 10,
      maxPlayers: 50,
      spotsLeft: 40,
      img: "/quiz/q8.png",
    },
    {
      id: 9,
      title: "Mathematical Challenges",
      category: "Mathematics",
      estimatedTime: 25,
      reward: 7.0,
      players: 30,
      maxPlayers: 50,
      spotsLeft: 20,
      img: "/quiz/q9.png",
    },
    {
      id: 10,
      title: "Music Through Decades",
      category: "Music",
      estimatedTime: 15,
      reward: 5.5,
      players: 5,
      maxPlayers: 50,
      spotsLeft: 45,
      img: "/quiz/q10.png",
    },
    {
      id: 11,
      title: "Geography Adventures",
      category: "Geography",
      estimatedTime: 20,
      reward: 6.0,
      players: 15,
      maxPlayers: 50,
      spotsLeft: 35,
      img: "/quiz/q11.png",
    },
  ],

  hard: [
    {
      id: 11,
      title: "Advanced Quantum Physics",
      category: "Science",
      estimatedTime: 30,
      reward: 10.0,
      players: 75,
      maxPlayers: 100,
      spotsLeft: 25,
      img: "/quiz/q11.png",
    },
    {
      id: 12,
      title: "Ancient Civilizations Deep Dive",
      category: "History",
      estimatedTime: 25,
      reward: 9.0,
      players: 90,
      maxPlayers: 100,
      spotsLeft: 10,
      img: "/quiz/q12.png",
    },
    {
      id: 13,
      title: "Complex Mathematical Theories",
      category: "Mathematics",
      estimatedTime: 35,
      reward: 12.0,
      players: 50,
      maxPlayers: 100,
      spotsLeft: 50,
      img: "/quiz/q13.png",
    },
    {
      id: 14,
      title: "Philosophy & Ethics",
      category: "Philosophy",
      estimatedTime: 30,
      reward: 10.5,
      players: 20,
      maxPlayers: 100,
      spotsLeft: 80,
      img: "/quiz/q14.png",
    },
    {
      id: 15,
      title: "Advanced Programming Concepts",
      category: "Technology",
      estimatedTime: 40,
      reward: 15.0,
      players: 60,
      maxPlayers: 100,
      spotsLeft: 40,
      img: "/quiz/q15.png",
    },
    {
      id: 16,
      title: "World History Through Time",
      category: "History",
      estimatedTime: 35,
      reward: 12.5,
      players: 30,
      maxPlayers: 100,
      spotsLeft: 70,
      img: "/quiz/q16.png",
    },
  ],
};

// Function to format player count
const formatPlayerCount = (count: number) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + "k";
  }
  return count.toString();
};

// Function to calculate progress
const calculateProgress = (players: number, maxPlayers: number) => {
  return (players / maxPlayers) * 100;
};

export function QuizzesByDifficulty() {
  const [activeTab, setActiveTab] = useState("easy");
  // Get current carousel ref based on active tab

  return (
    <section className="space-y-4" data-oid="i3__4ze">
      <div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        data-oid=".4bfj9v"
      >
        <div className="space-y-1" data-oid="::n6wvp">
          <h2 className="font-bold text-2xl tracking-tight" data-oid="b3cc6p2">
            Quizzes by Difficulty
          </h2>
          <p className="text-muted-foreground" data-oid="3gik7g1">
            Choose challenges according to your skill level
          </p>
        </div>

        <div className="flex items-center gap-2" data-oid="i_b-2d0">
          <Tabs
            className="w-full sm:w-auto"
            data-oid=":xwc6b3"
            onValueChange={setActiveTab}
            value={activeTab}
          >
            <TabsList className="grid w-full grid-cols-3" data-oid="kmqm-m1">
              <TabsTrigger
                className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
                data-oid="ukzfno0"
                value="easy"
              >
                Easy
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
                data-oid="70y9s9u"
                value="medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                data-oid="1fo9e86"
                value="hard"
              >
                Hard
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="hidden items-center gap-2 sm:flex" data-oid="vy4pvau">
            <Button
              className="prev-card"
              data-oid="1-uliuh"
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="h-4 w-4" data-oid="2dngqvh" />
            </Button>
            <Button
              className="next-card"
              data-oid="..3otwq"
              size="icon"
              variant="outline"
            >
              <ChevronRight className="h-4 w-4" data-oid="6nn_7tn" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative" data-oid="cbt2goa">
        {/* Easy Quizzes */}
        <div
          className={activeTab === "easy" ? "block" : "hidden"}
          data-oid="gzc3rf2"
        >
          <Swiper
            autoplay
            data-oid="2ube9:_"
            loop
            modules={[Navigation]}
            navigation={{ nextEl: ".next-card", prevEl: ".prev-card" }}
            slidesPerView={"auto"}
            spaceBetween={16}
          >
            {quizzesByDifficulty.easy.map((quiz) => (
              <SwiperSlide
                className="max-w-[306px]"
                data-oid="rh8lw4q"
                key={quiz.id}
              >
                <Card className="h-full overflow-hidden" data-oid="6mc-wr1">
                  <div className="relative" data-oid="fgmh_ld">
                    <Image
                      alt={quiz.title}
                      className="h-40 w-full object-cover"
                      data-oid="w8_hv2c"
                      height={350}
                      src={quiz.img}
                      width={600}
                    />

                    <Badge
                      className="absolute top-2 right-2"
                      data-oid="zp2s8gi"
                      variant="success"
                    >
                      Easy
                    </Badge>
                    <div
                      className="absolute right-0 bottom-0 left-0 flex items-center justify-between gap-2 bg-gradient-to-b from-transparent to-black px-3 pb-3"
                      data-oid="fld87jd"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-oid="bx6og2o"
                      >
                        <Image
                          alt="creator"
                          className="size-9 rounded-full object-cover object-center"
                          data-oid="j8l4x_j"
                          height={36}
                          src={"/avatars/alex.png"}
                          width={36}
                        />

                        <div
                          className="items-centere flex gap-2"
                          data-oid="b9ks05l"
                        >
                          <span
                            className="font-medium text-white"
                            data-oid="ns-j92t"
                          >
                            Alex Smith
                          </span>
                        </div>
                      </div>
                      <div className="text-center" data-oid="ay4v0qh">
                        <p className="text-white text-xs" data-oid="l_h.jl0">
                          Reward
                        </p>
                        <span
                          className="font-medium text-green-600"
                          data-oid="-527jfm"
                        >
                          {quiz.reward}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4 xl:pt-6" data-oid="a7skx-3">
                    <div
                      className="mb-2 flex items-center justify-between"
                      data-oid="69ha2zw"
                    >
                      <Badge data-oid="gax4:0t" variant="outline">
                        {quiz.category}
                      </Badge>
                      <div
                        className="flex items-center gap-1 text-muted-foreground text-sm"
                        data-oid="6kcyo5r"
                      >
                        <Clock className="h-3 w-3" data-oid="gzwh_8j" />
                        <span data-oid="tn2mylz">{quiz.estimatedTime} min</span>
                      </div>
                    </div>
                    <h3
                      className="mb-2 line-clamp-1 font-semibold"
                      data-oid="qhobd23"
                    >
                      {quiz.title}
                    </h3>

                    <div className="space-y-1.5" data-oid="k5yid0n">
                      <div className="" data-oid="19aga2w">
                        <div
                          className="mb-3 flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                          data-oid="2ood4ep"
                        >
                          <Users className="h-3.5 w-3.5" data-oid="i7b-gx-" />
                          <span data-oid="-15-lm1">
                            {formatPlayerCount(quiz.players)} players
                          </span>
                        </div>

                        <Progress
                          data-oid="lfdvtms"
                          value={calculateProgress(
                            quiz.players,
                            quiz.maxPlayers
                          )}
                        />
                      </div>

                      {quiz.spotsLeft <= 20 ? (
                        <p
                          className="font-medium text-destructive text-xs"
                          data-oid="-yy5hhw"
                        >
                          Only {quiz.spotsLeft} spots left!
                        </p>
                      ) : quiz.spotsLeft <= 50 ? (
                        <p
                          className="font-medium text-amber-600 text-xs"
                          data-oid="y80r:3w"
                        >
                          Only {quiz.spotsLeft} spots left
                        </p>
                      ) : (
                        <p
                          className="text-muted-foreground text-xs"
                          data-oid="ueby57t"
                        >
                          {quiz.spotsLeft} spots available
                        </p>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="!pt-0 p-4" data-oid="-7z4dzb">
                    <Button className="w-full" data-oid="lrgu.e-">
                      <Link
                        className="w-full"
                        data-oid="to._pc1"
                        href={`/quiz/${quiz.id}`}
                      >
                        Start Quiz
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Medium Quizzes */}
        <div
          className={activeTab === "medium" ? "block" : "hidden"}
          data-oid="j9c9bk3"
        >
          <Carousel className="w-full" data-oid="b-xw6py">
            <CarouselContent className="-ml-2 md:-ml-4" data-oid="_it-nt-">
              {quizzesByDifficulty.medium.map((quiz) => (
                <CarouselItem
                  className="pl-2 sm:basis-1/2 md:basis-1/3 md:pl-4 lg:basis-1/4 xl:basis-1/5"
                  data-oid="jj3z450"
                  key={quiz.id}
                >
                  <Card className="h-full overflow-hidden" data-oid="c4k5lxa">
                    <div className="relative" data-oid="fosvb85">
                      <Image
                        alt={quiz.title}
                        className="h-40 w-full object-cover"
                        data-oid="293cx1d"
                        height={350}
                        src={quiz.img}
                        width={600}
                      />

                      <Badge
                        className="absolute top-2 right-2"
                        data-oid="fwnm0_n"
                        variant="yellow"
                      >
                        Medium
                      </Badge>
                    </div>

                    <CardContent className="p-4 xl:pt-6" data-oid="54vywnr">
                      <div
                        className="mb-2 flex items-center justify-between"
                        data-oid="4qg.q:h"
                      >
                        <Badge data-oid="t3yixea" variant="outline">
                          {quiz.category}
                        </Badge>
                        <div
                          className="flex items-center gap-1 text-muted-foreground text-sm"
                          data-oid="te207xn"
                        >
                          <Clock className="h-3 w-3" data-oid="hkyicyr" />
                          <span data-oid="r40z-iu">
                            {quiz.estimatedTime} min
                          </span>
                        </div>
                      </div>
                      <h3
                        className="mb-2 line-clamp-1 font-semibold"
                        data-oid="_fbbvnn"
                      >
                        {quiz.title}
                      </h3>
                      <div
                        className="mb-3 flex items-center justify-between gap-2"
                        data-oid="razl76f"
                      >
                        <div
                          className="flex items-center text-green-600"
                          data-oid="kgfyzy:"
                        >
                          <DollarSign className="h-4 w-4" data-oid="im:g.4o" />
                          <span className="font-medium" data-oid="n3zfl21">
                            {quiz.reward.toFixed(2)}
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                          data-oid="u2q0009"
                        >
                          <Users className="h-3.5 w-3.5" data-oid="ovyp2w3" />
                          <span data-oid="bj_90w4">
                            {formatPlayerCount(quiz.players)} players
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1.5" data-oid="jonzve0">
                        <Progress
                          data-oid="yj__o_q"
                          value={calculateProgress(
                            quiz.players,
                            quiz.maxPlayers
                          )}
                        />

                        {quiz.spotsLeft <= 20 ? (
                          <p
                            className="font-medium text-destructive text-xs"
                            data-oid="f-1unli"
                          >
                            Only {quiz.spotsLeft} spots left!
                          </p>
                        ) : quiz.spotsLeft <= 50 ? (
                          <p
                            className="font-medium text-amber-600 text-xs"
                            data-oid="k4e24qe"
                          >
                            Only {quiz.spotsLeft} spots left
                          </p>
                        ) : (
                          <p
                            className="text-muted-foreground text-xs"
                            data-oid="yzjr9tq"
                          >
                            {quiz.spotsLeft} spots available
                          </p>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="!pt-0 p-4" data-oid="y66.5wk">
                      <Button className="w-full" data-oid="epehcjg">
                        <Link
                          className="w-full"
                          data-oid="hst8xss"
                          href={`/quiz/${quiz.id}`}
                        >
                          Start Quiz
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Hard Quizzes */}
        <div
          className={activeTab === "hard" ? "block" : "hidden"}
          data-oid="iftu1u4"
        >
          <Carousel className="w-full" data-oid=".up-_zt">
            <CarouselContent className="-ml-2 md:-ml-4" data-oid="462zdp6">
              {quizzesByDifficulty.hard.map((quiz) => (
                <CarouselItem
                  className="pl-2 sm:basis-1/2 md:basis-1/3 md:pl-4 lg:basis-1/4 xl:basis-1/5"
                  data-oid="kqnhqaf"
                  key={quiz.id}
                >
                  <Card className="h-full overflow-hidden" data-oid="zfc4bio">
                    <div className="relative" data-oid="c42f4t-">
                      <Image
                        alt={quiz.title}
                        className="h-40 w-full object-cover"
                        data-oid="ui-yr-k"
                        height={350}
                        src={quiz.img}
                        width={600}
                      />

                      <Badge
                        className="absolute top-2 right-2"
                        data-oid=".ca:fr-"
                        variant="destructive"
                      >
                        Hard
                      </Badge>
                    </div>

                    <CardContent className="p-4 xl:pt-6" data-oid="w.8c1vd">
                      <div
                        className="mb-2 flex items-center justify-between"
                        data-oid="3dz75:."
                      >
                        <Badge data-oid="wq3hh.q" variant="outline">
                          {quiz.category}
                        </Badge>
                        <div
                          className="flex items-center gap-1 text-muted-foreground text-sm"
                          data-oid="vkcba7i"
                        >
                          <Clock className="h-3 w-3" data-oid="zwactdi" />
                          <span data-oid="pc_v5jy">
                            {quiz.estimatedTime} min
                          </span>
                        </div>
                      </div>
                      <h3
                        className="mb-2 line-clamp-1 font-semibold"
                        data-oid="t0jhjr."
                      >
                        {quiz.title}
                      </h3>
                      <div
                        className="flex items-center text-green-600"
                        data-oid=":1w2rh:"
                      >
                        <DollarSign className="h-4 w-4" data-oid="n53kaql" />
                        <span className="font-medium" data-oid="3_-bu-9">
                          {quiz.reward.toFixed(2)}
                        </span>
                      </div>
                      <div className="space-y-1.5" data-oid="p-vjk-z">
                        <div
                          className="flex items-center justify-between"
                          data-oid="ll.0m97"
                        >
                          <div
                            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                            data-oid="1o7yonn"
                          >
                            <Users className="h-3.5 w-3.5" data-oid="97eu4yw" />
                            <span data-oid="l3oex_z">
                              {formatPlayerCount(quiz.players)} players
                            </span>
                          </div>
                          <CircularProgress
                            color={
                              quiz.spotsLeft <= 20
                                ? "hsl(var(--destructive))"
                                : quiz.spotsLeft <= 50
                                  ? "hsl(var(--warning))"
                                  : "hsl(var(--primary))"
                            }
                            data-oid="or8t7t1"
                            size={36}
                            strokeWidth={3}
                            value={calculateProgress(
                              quiz.players,
                              quiz.maxPlayers
                            )}
                          />
                        </div>

                        {quiz.spotsLeft <= 20 ? (
                          <p
                            className="font-medium text-destructive text-xs"
                            data-oid="-req:ne"
                          >
                            Only {quiz.spotsLeft} spots left!
                          </p>
                        ) : quiz.spotsLeft <= 50 ? (
                          <p
                            className="font-medium text-amber-600 text-xs"
                            data-oid="dh5clfj"
                          >
                            Only {quiz.spotsLeft} spots left
                          </p>
                        ) : (
                          <p
                            className="text-muted-foreground text-xs"
                            data-oid="pif75-h"
                          >
                            {quiz.spotsLeft} spots available
                          </p>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="!pt-0 p-4" data-oid="ubwfrqq">
                      <Button className="w-full" data-oid="7-eh4fp">
                        <Link
                          className="w-full"
                          data-oid="ksnipm-"
                          href={`/quiz/${quiz.id}`}
                        >
                          Start Quiz
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
