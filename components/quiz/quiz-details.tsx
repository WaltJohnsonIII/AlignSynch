"use client";

import {
  ArrowLeft,
  Award,
  Bookmark,
  Clock,
  Share2,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ReviewModal } from "@/components/quiz/review-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample quiz data - in a real app, you would fetch this based on the ID
const quizData = {
  id: "1",
  title: "Space Exploration Quiz",
  image: "/quiz/q17.png",
  category: "Science & Technology",
  difficulty: "Medium",
  timeLimit: 20,
  reward: "$5.00",
  players: 285,
  maxPlayers: 300,
  spotsLeft: 15,
  questions: 25,
  rating: 4.8,
  ratingCount: 156,
  description:
    "Test your knowledge of the Space Exploration with this comprehensive trivia quiz. From Iron Man to the latest releases, this quiz covers characters, plot points, Easter eggs, and behind-the-scenes facts that only true fans would know.",
  requirements:
    "Basic knowledge of Marvel movies and TV shows. No specific preparation needed.",
  creator: {
    name: "MarvelFan2023",
    avatar: "/avatars/alex.png",
    level: "Expert Quiz Creator",
    quizzes: 42,
    lastUpdate: "2023-10-15",
  },
  tags: ["Marvel", "Superheroes", "Movies", "MCU", "Avengers"],
  leaderboard: [
    {
      rank: 1,
      name: "ThorFan",
      avatar: "/avatars/wizard.webp",
      score: 98,
      time: "12:45",
    },
    {
      rank: 2,
      name: "IronManRules",
      avatar: "/avatars/sarah.webp",
      score: 95,
      time: "13:20",
    },
    {
      rank: 3,
      name: "CaptainAmerica",
      avatar: "/avatars/king.webp",
      score: 92,
      time: "14:05",
    },
    {
      rank: 4,
      name: "BlackWidow",
      avatar: "/avatars/champion.png",
      score: 90,
      time: "15:30",
    },
    {
      rank: 5,
      name: "HulkSmash",
      avatar: "/avatars/mind.webp",
      score: 88,
      time: "16:15",
    },
  ],

  reviews: [
    {
      name: "MarvelFan",
      avatar: "/avatars/genious.png",
      rating: 5,
      comment: "Excellent quiz! Really tests your knowledge of the MCU.",
    },
    {
      name: "QuizLover",
      avatar: "/avatars/brain.png",
      rating: 4,
      comment: "Good variety of questions, some were quite challenging.",
    },
    {
      name: "Avenger",
      avatar: "/avatars/guru.png",
      rating: 5,
      comment: "Perfect for Marvel fans. I learned some new facts too!",
    },
  ],

  relatedQuizzes: [
    {
      id: 2,
      title: "DC Extended Universe Quiz",
      image: "/world-landmarks.png",
      difficulty: "Hard",
    },
    {
      id: 3,
      title: "Star Wars Saga Trivia",
      image: "/brain-teasers-puzzles.png",
      difficulty: "Medium",
    },
    {
      id: 4,
      title: "Harry Potter Wizarding World",
      image: "/history-mysteries.png",
      difficulty: "Easy",
    },
  ],
};

export function QuizDetails({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [userReviews, setUserReviews] = useState(quizData.reviews);

  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "success";
      case "Medium":
        return "yellow";
      case "Hard":
        return "destructive";
      default:
        return "default";
    }
  };

  // Calculate progress percentage
  const progressPercentage = (quizData.players / quizData.maxPlayers) * 100;

  const handleReviewSubmit = (review: { rating: number; comment: string }) => {
    const newReview = {
      name: "You",
      avatar: "/avatars/master.png",
      rating: review.rating,
      comment: review.comment,
    };
    setUserReviews([newReview, ...userReviews]);
  };
  const route = useRouter();
  const playNow = () => {
    route.push(`/quiz/${id}/play`);
  };
  return (
    <div className="container mx-auto" data-oid="94hawrt">
      <div className="mb-6" data-oid="pjmu9u:">
        <Button
          asChild
          className="mb-4"
          data-oid="lyz5lr-"
          size="sm"
          variant="ghost"
        >
          <Link
            className="flex items-center gap-1"
            data-oid="andmh8u"
            href="/explore"
          >
            <ArrowLeft className="h-4 w-4" data-oid="30j:l_4" />
            Back to Explore
          </Link>
        </Button>

        <div
          className="relative mb-6 h-64 overflow-hidden rounded-xl md:h-80"
          data-oid="a683-p1"
        >
          <Image
            alt={quizData.title}
            className="h-full w-full object-cover"
            data-oid="i.omdsr"
            src={quizData.image || "/placeholder.svg"}
          />

          <div
            className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6"
            data-oid="vsdnqjd"
          >
            <div className="mb-3 flex flex-wrap gap-2" data-oid="l0z42:0">
              <Badge
                data-oid="xuea:qm"
                variant={getDifficultyVariant(quizData.difficulty)}
              >
                {quizData.difficulty}
              </Badge>
              <Badge
                className="border-0 bg-purple-500/80 text-white"
                data-oid="aachw.2"
                variant="secondary"
              >
                Featured
              </Badge>
              <Badge
                className="border-0 bg-blue-500/80 text-white"
                data-oid="9irm8ti"
                variant="secondary"
              >
                Popular
              </Badge>
            </div>
            <h1
              className="mb-2 font-bold text-2xl text-white md:text-3xl lg:text-4xl"
              data-oid="i5.kgcz"
            >
              {quizData.title}
            </h1>
            <div
              className="flex flex-wrap gap-4 text-white/90"
              data-oid="2_.ewnb"
            >
              <div className="flex items-center gap-1" data-oid="fvi42r0">
                <Clock className="h-4 w-4" data-oid="7ucg0um" />
                <span data-oid="itugdn9">{quizData.timeLimit} min</span>
              </div>
              <div className="flex items-center gap-1" data-oid="69a1kxg">
                <Users className="h-4 w-4" data-oid="4ql2zi1" />
                <span data-oid="jtezdsh">{quizData.players} players</span>
              </div>
              <div className="flex items-center gap-1" data-oid="87ohg9w">
                <Award className="h-4 w-4" data-oid="72g:-yz" />
                <span data-oid="eiuaysf">{quizData.questions} questions</span>
              </div>
              <div className="flex items-center gap-1" data-oid="s97bx_l">
                <Star
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  data-oid="ata3:7v"
                />

                <span data-oid="eay1kn7">
                  {quizData.rating} ({quizData.ratingCount} ratings)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          data-oid="il2fl55"
        >
          <div className="lg:col-span-2" data-oid="hpr_z-q">
            <Tabs
              className="w-full"
              data-oid="gy8-:dw"
              defaultValue="overview"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-3" data-oid="wa524sz">
                <TabsTrigger data-oid="k7ei49o" value="overview">
                  Overview
                </TabsTrigger>
                <TabsTrigger data-oid="a:nehpy" value="leaderboard">
                  Leaderboard
                </TabsTrigger>
                <TabsTrigger data-oid="lanb:jw" value="reviews">
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent
                className="mt-6 space-y-6"
                data-oid="q:cat80"
                value="overview"
              >
                <div data-oid="2kaaez8">
                  <h2 className="mb-2 font-semibold text-xl" data-oid="b0bfvzv">
                    Description
                  </h2>
                  <p className="text-muted-foreground" data-oid="tbj8mtk">
                    {quizData.description}
                  </p>
                </div>

                <div data-oid="c32a.pm">
                  <h2 className="mb-2 font-semibold text-xl" data-oid="cw15_vf">
                    Requirements
                  </h2>
                  <p className="text-muted-foreground" data-oid="3ozu2m0">
                    {quizData.requirements}
                  </p>
                </div>

                <div data-oid="917y9w.">
                  <h2 className="mb-2 font-semibold text-xl" data-oid="4q6zw6l">
                    Tags
                  </h2>
                  <div className="flex flex-wrap gap-2" data-oid="bbmt31_">
                    {quizData.tags.map((tag, index) => (
                      <Badge data-oid="nixv79u" key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div data-oid="8mtyvp6">
                  <h2 className="mb-4 font-semibold text-xl" data-oid="39aqrze">
                    Related Quizzes
                  </h2>
                  <div
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
                    data-oid="7qlo58n"
                  >
                    {quizData.relatedQuizzes.map((quiz) => (
                      <Card
                        className="overflow-hidden"
                        data-oid=":nwf5c3"
                        key={quiz.id}
                      >
                        <div className="relative h-32" data-oid="iwhkzs5">
                          <Image
                            alt={quiz.title}
                            className="h-full w-full object-cover"
                            data-oid="w4k.h71"
                            height={350}
                            src={quiz.image || "/placeholder.svg"}
                            width={600}
                          />

                          <div
                            className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-3"
                            data-oid="g8sb.g5"
                          >
                            <div data-oid="pv9atna">
                              <Badge
                                className="mb-1"
                                data-oid="0ve_w74"
                                variant={getDifficultyVariant(quiz.difficulty)}
                              >
                                {quiz.difficulty}
                              </Badge>
                              <h3
                                className="font-medium text-sm text-white"
                                data-oid="03fgbhl"
                              >
                                {quiz.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                className="mt-6"
                data-oid="2gom8oh"
                value="leaderboard"
              >
                <div className="rounded-md border" data-oid="t.g034f">
                  <div
                    className="grid grid-cols-12 bg-muted/50 p-3 font-medium text-sm"
                    data-oid=".ola3vo"
                  >
                    <div className="col-span-1 text-center" data-oid="g4pkjy4">
                      #
                    </div>
                    <div className="col-span-5" data-oid="5frk1ea">
                      Player
                    </div>
                    <div className="col-span-3 text-center" data-oid="qfthgi4">
                      Score
                    </div>
                    <div className="col-span-3 text-center" data-oid="yi3l0hu">
                      Time
                    </div>
                  </div>
                  {quizData.leaderboard.map((player) => (
                    <div
                      className="grid grid-cols-12 border-t p-3 text-sm"
                      data-oid="xm9:_f:"
                      key={player.rank}
                    >
                      <div
                        className="col-span-1 text-center font-medium"
                        data-oid="6btuxwi"
                      >
                        {player.rank}
                      </div>
                      <div
                        className="col-span-5 flex items-center gap-2"
                        data-oid="mjmw1:0"
                      >
                        <Avatar className="h-8 w-8" data-oid="95beskg">
                          <AvatarImage
                            alt={player.name}
                            data-oid="co.1twa"
                            src={player.avatar || "/placeholder.svg"}
                          />

                          <AvatarFallback data-oid="q9t2-7b">
                            {player.name.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <span data-oid="kv8ewj6">{player.name}</span>
                      </div>
                      <div
                        className="col-span-3 text-center"
                        data-oid="pog29x6"
                      >
                        {player.score}%
                      </div>
                      <div
                        className="col-span-3 text-center"
                        data-oid="8aeum4b"
                      >
                        {player.time}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent
                className="mt-6 space-y-4"
                data-oid="d5_ba.q"
                value="reviews"
              >
                <div
                  className="mb-4 flex items-center justify-between"
                  data-oid="tjo-:t3"
                >
                  <h2 className="font-semibold text-xl" data-oid="tqrnb0o">
                    Reviews
                  </h2>
                  <Button
                    data-oid="-10qdqd"
                    onClick={() => setIsReviewModalOpen(true)}
                  >
                    Write a Review
                  </Button>
                </div>

                {userReviews.length === 0 ? (
                  <Card data-oid="mij21os">
                    <CardContent className="p-6 text-center" data-oid="glwt3_n">
                      <p className="text-muted-foreground" data-oid="m6ago81">
                        No reviews yet. Be the first to review!
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  userReviews.map((review, index) => (
                    <Card data-oid="5.thv5w" key={index}>
                      <CardContent className="p-4" data-oid="_tjcbhv">
                        <div
                          className="flex items-start gap-3"
                          data-oid="_d_v3.y"
                        >
                          <Avatar data-oid="xfnfe_a">
                            <AvatarImage
                              alt={review.name}
                              data-oid="8o-9430"
                              src={review.avatar || "/placeholder.svg"}
                            />

                            <AvatarFallback data-oid="i8i7srr">
                              {review.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1" data-oid=":rv_fy_">
                            <div
                              className="flex items-center justify-between"
                              data-oid="6pkg-65"
                            >
                              <h3 className="font-medium" data-oid="o8dc8wb">
                                {review.name}
                              </h3>
                              <div
                                className="flex items-center"
                                data-oid="aa345gf"
                              >
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                    data-oid="w3kt_9:"
                                    key={i}
                                  />
                                ))}
                              </div>
                            </div>
                            <p
                              className="mt-1 text-muted-foreground text-sm"
                              data-oid="xxvgxqv"
                            >
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </TabsContent>
            </Tabs>
          </div>

          <div data-oid="b3i7i5r">
            <Card data-oid=":vd0--s">
              <CardContent className="space-y-6 p-6" data-oid="3k2tgor">
                <div className="space-y-2" data-oid="8h.:8sz">
                  <div
                    className="flex items-center justify-between"
                    data-oid="rpmhmb8"
                  >
                    <span
                      className="text-muted-foreground text-sm"
                      data-oid="ppnlqre"
                    >
                      Spots filled
                    </span>
                    <span className="font-medium text-sm" data-oid="wj6t2ii">
                      {quizData.players}/{quizData.maxPlayers}
                    </span>
                  </div>
                  <Progress
                    className="h-2"
                    data-oid="kx4s-_a"
                    value={progressPercentage}
                  />

                  {quizData.spotsLeft <= 20 && (
                    <p
                      className="font-medium text-destructive text-xs"
                      data-oid="q1kyra7"
                    >
                      Almost full! Only {quizData.spotsLeft} spots left
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3" data-oid=":-kvclf">
                  <div className="rounded-lg border p-3" data-oid=":59h.kh">
                    <div
                      className="mb-1 text-muted-foreground text-xs"
                      data-oid="ln-68n4"
                    >
                      Category
                    </div>
                    <div className="font-medium" data-oid="f0.foy_">
                      {quizData.category}
                    </div>
                  </div>
                  <div className="rounded-lg border p-3" data-oid="traovr2">
                    <div
                      className="mb-1 text-muted-foreground text-xs"
                      data-oid="ap-4onv"
                    >
                      Questions
                    </div>
                    <div className="font-medium" data-oid="xkc8tq1">
                      {quizData.questions}
                    </div>
                  </div>
                  <div className="rounded-lg border p-3" data-oid="7_4ler8">
                    <div
                      className="mb-1 text-muted-foreground text-xs"
                      data-oid="btf_y5z"
                    >
                      Time Limit
                    </div>
                    <div className="font-medium" data-oid="rd09-eh">
                      {quizData.timeLimit} min
                    </div>
                  </div>
                  <div className="rounded-lg border p-3" data-oid="k-sllzw">
                    <div
                      className="mb-1 text-muted-foreground text-xs"
                      data-oid="vpoexti"
                    >
                      Difficulty
                    </div>
                    <div className="font-medium" data-oid="gd.ne5f">
                      {quizData.difficulty}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4" data-oid="gdr7nfc">
                  <div className="flex items-center gap-3" data-oid="rcijn30">
                    <Avatar data-oid=".921_50">
                      <AvatarImage
                        alt={quizData.creator.name}
                        data-oid="s-mvpj3"
                        src={quizData.creator.avatar || "/placeholder.svg"}
                      />

                      <AvatarFallback data-oid="1n:sh3h">
                        {quizData.creator.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div data-oid="ong.:f8">
                      <div className="font-medium" data-oid="su3nvba">
                        {quizData.creator.name}
                      </div>
                      <div
                        className="text-muted-foreground text-xs"
                        data-oid="pw._iqi"
                      >
                        {quizData.creator.level}
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-3 grid grid-cols-2 gap-2 text-sm"
                    data-oid="xq6-0.2"
                  >
                    <div data-oid="_qd:dwt">
                      <span
                        className="text-muted-foreground"
                        data-oid="nfxz_eu"
                      >
                        Quizzes:{" "}
                      </span>
                      <span className="font-medium" data-oid="lh:6l9d">
                        {quizData.creator.quizzes}
                      </span>
                    </div>
                    <div data-oid="pciiyvg">
                      <span
                        className="text-muted-foreground"
                        data-oid="irzng:r"
                      >
                        Updated:{" "}
                      </span>
                      <span className="font-medium" data-oid="rjhqh2s">
                        {quizData.creator.lastUpdate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3" data-oid="7iy5rr-">
                  <Button
                    className="w-full"
                    data-oid="k2oamaa"
                    onClick={playNow}
                    size="lg"
                  >
                    Play Now
                  </Button>

                  <div className="flex justify-center gap-3" data-oid="96ru44:">
                    <Button
                      className="aspect-square"
                      data-oid="rgmtdf."
                      size="icon"
                      variant="outline"
                    >
                      <Bookmark className="h-5 w-5" data-oid="urlpi_6" />
                    </Button>
                    <Button
                      className="aspect-square"
                      data-oid="7tsi3ny"
                      size="icon"
                      variant="outline"
                    >
                      <Share2 className="h-5 w-5" data-oid="5u2x9hg" />
                    </Button>
                    <Button
                      className="aspect-square"
                      data-oid="lx4whlf"
                      size="icon"
                      variant="outline"
                    >
                      <Award className="h-5 w-5" data-oid="rlh2rer" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <ReviewModal
        data-oid="i54rc30"
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleReviewSubmit}
        quizTitle={quizData.title}
      />
    </div>
  );
}
