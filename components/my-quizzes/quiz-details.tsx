"use client";

import {
  AlertCircle,
  ArrowLeft,
  Award,
  BarChart3,
  Calendar,
  CheckCheck,
  CheckCircle,
  Clock,
  Copy,
  DollarSign,
  Edit,
  ExternalLink,
  Share2,
  Trash2,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample quiz data
const quizData = {
  id: "1",
  title: "World Geography Challenge",
  image: "/world-map-quiz.png",
  category: "Geography",
  difficulty: "Medium",
  status: "active",
  timeLimit: 15,
  reward: "$5.00",
  players: 285,
  maxPlayers: 300,
  spotsLeft: 15,
  createdAt: "2023-11-15T10:30:00Z",
  lastUpdated: "2023-12-01T14:20:00Z",
  description:
    "Test your knowledge of world geography with this challenging quiz covering countries, capitals, landmarks, and geographical features from all continents.",
  stats: {
    completionRate: 78,
    averageScore: 72,
    revenue: 1425.0,
    totalQuestions: 15,
    averageTimePerQuestion: 42, // seconds
  },
  questions: [
    {
      id: 1,
      text: "What is the capital of Australia?",
      options: [
        { id: 1, text: "Sydney", isCorrect: false },
        { id: 2, text: "Melbourne", isCorrect: false },
        { id: 3, text: "Canberra", isCorrect: true },
        { id: 4, text: "Perth", isCorrect: false },
      ],

      correctPercentage: 65,
    },
    {
      id: 2,
      text: "Which mountain range separates Europe from Asia?",
      options: [
        { id: 1, text: "Alps", isCorrect: false },
        { id: 2, text: "Andes", isCorrect: false },
        { id: 3, text: "Himalayas", isCorrect: false },
        { id: 4, text: "Ural Mountains", isCorrect: true },
      ],

      correctPercentage: 58,
    },
    {
      id: 3,
      text: "Which country has the largest land area in the world?",
      options: [
        { id: 1, text: "China", isCorrect: false },
        { id: 2, text: "Russia", isCorrect: true },
        { id: 3, text: "United States", isCorrect: false },
        { id: 4, text: "Canada", isCorrect: false },
      ],

      correctPercentage: 82,
    },
  ],

  recentPlayers: [
    {
      name: "Alex Johnson",
      avatar: "/avatars/alex.png",
      score: 85,
      date: "2023-12-10T14:30:00Z",
    },
    {
      name: "Sarah Williams",
      avatar: "/avatars/wizard.webp",
      score: 92,
      date: "2023-12-09T16:45:00Z",
    },
    {
      name: "Michael Brown",
      avatar: "/avatars/sarah.webp",
      score: 78,
      date: "2023-12-08T11:20:00Z",
    },
    {
      name: "Emily Davis",
      avatar: "/avatars/king.webp",
      score: 88,
      date: "2023-12-07T09:15:00Z",
    },
    {
      name: "David Wilson",
      avatar: "/avatars/champion.png",
      score: 95,
      date: "2023-12-06T17:30:00Z",
    },
  ],
};

export function QuizDetails({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  // Get difficulty badge variant
  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "success";
      case "Medium":
        return "warning";
      case "Hard":
        return "destructive";
      default:
        return "default";
    }
  };

  // Get status badge variant
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "success";
      case "draft":
        return "outline";
      case "completed":
        return "blue";
      default:
        return "default";
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  // Calculate progress percentage
  const calculateProgress = (players: number, maxPlayers: number) => {
    return (players / maxPlayers) * 100;
  };

  // Copy share link
  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}/quiz/${id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6" data-oid="xintefi">
      {/* Back button and actions */}
      <div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        data-oid="madmuaa"
      >
        <Button asChild className="w-fit" data-oid="2dbke1a" variant="ghost">
          <Link
            className="flex items-center gap-2"
            data-oid="kmjz7uj"
            href="/my-quizzes"
          >
            <ArrowLeft className="h-4 w-4" data-oid="_m.t4jm" />
            <span data-oid="x8nnjrg">Back to My Quizzes</span>
          </Link>
        </Button>
        <div className="flex items-center gap-2" data-oid="j4us0ns">
          <Button asChild data-oid="ek:1wxi" variant="outline">
            <Link
              className="flex items-center gap-2"
              data-oid="w.efw-0"
              href={`/create/editor?id=${id}`}
            >
              <Edit className="h-4 w-4" data-oid="494m2od" />
              <span data-oid="1:f38am">Edit Quiz</span>
            </Link>
          </Button>
          <Button
            className="flex items-center gap-2"
            data-oid="plzhrui"
            onClick={handleCopyLink}
            variant="outline"
          >
            {copied ? (
              <>
                <CheckCheck className="h-4 w-4" data-oid="72cn-e:" />
                <span data-oid="ca42qkk">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4" data-oid="jpudock" />
                <span data-oid="4t4o:yz">Share</span>
              </>
            )}
          </Button>
          <Button
            className="flex items-center gap-2"
            data-oid="jhjx721"
            variant="destructive"
          >
            <Trash2 className="h-4 w-4" data-oid="1fmmv:3" />
            <span data-oid="93rja40">Delete</span>
          </Button>
        </div>
      </div>

      {/* Quiz header */}
      <div className="relative overflow-hidden rounded-xl" data-oid="osn_oe9">
        <div className="h-64 w-full" data-oid="r0_y0fp">
          <Image
            alt={quizData.title}
            className="h-full w-full object-cover"
            data-oid="mn548a9"
            src={quizData.image || "/placeholder.svg"}
          />

          <div
            className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6"
            data-oid="qh0y-op"
          >
            <div className="mb-3 flex flex-wrap gap-2" data-oid=":zllcu-">
              <Badge
                className="font-medium"
                data-oid="igq9w_4"
                variant={getDifficultyVariant(quizData.difficulty)}
              >
                {quizData.difficulty}
              </Badge>
              <Badge
                className="capitalize"
                data-oid="r7vkr5g"
                variant={getStatusVariant(quizData.status)}
              >
                {quizData.status}
              </Badge>
              <Badge
                className="bg-white/20 text-white"
                data-oid="w0pql.j"
                variant="outline"
              >
                {quizData.category}
              </Badge>
            </div>
            <h1
              className="mb-2 font-bold text-3xl text-white"
              data-oid="0gcd-o3"
            >
              {quizData.title}
            </h1>
            <div
              className="flex flex-wrap items-center gap-4 text-white/80"
              data-oid="wml0ls-"
            >
              <div className="flex items-center gap-1" data-oid="rvw8he:">
                <Clock className="h-4 w-4" data-oid="_7m:bjr" />
                <span data-oid="z4.uf:4">{quizData.timeLimit} minutes</span>
              </div>
              <div className="flex items-center gap-1" data-oid="hxdr8fq">
                <DollarSign className="h-4 w-4" data-oid="tbh5y-s" />
                <span data-oid="bb17afq">{quizData.reward} reward</span>
              </div>
              <div className="flex items-center gap-1" data-oid="3d55o61">
                <Calendar className="h-4 w-4" data-oid="s2v1y2t" />
                <span data-oid="cbzlm:7">
                  Created {formatDate(quizData.createdAt)}
                </span>
              </div>
              <div className="flex items-center gap-1" data-oid="d.0snhl">
                <Users className="h-4 w-4" data-oid="9lyykv-" />
                <span data-oid="2t_7xk.">{quizData.players} players</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3" data-oid="cgmumoa">
        {/* Left column - Quiz details */}
        <div className="space-y-6 lg:col-span-2" data-oid="toy1hbf">
          <Tabs data-oid="m7ozuy." defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3" data-oid="th.v99a">
              <TabsTrigger data-oid="ow6n1i8" value="overview">
                Overview
              </TabsTrigger>
              <TabsTrigger data-oid="vm:eqr8" value="questions">
                Questions
              </TabsTrigger>
              <TabsTrigger data-oid="7b:dy14" value="players">
                Players
              </TabsTrigger>
            </TabsList>

            <TabsContent
              className="space-y-6 pt-6"
              data-oid="-bv:t3z"
              value="overview"
            >
              <Card data-oid="q:w3g01">
                <CardHeader data-oid="yenowl-">
                  <CardTitle data-oid="eji5dg9">Quiz Description</CardTitle>
                </CardHeader>
                <CardContent data-oid="a5ubjjt">
                  <p data-oid="zmx5j7e">{quizData.description}</p>
                </CardContent>
              </Card>

              <Card data-oid="56z6uf1">
                <CardHeader data-oid="xpat66g">
                  <CardTitle data-oid="gafxqjn">Performance Overview</CardTitle>
                </CardHeader>
                <CardContent data-oid=".vb4l46">
                  <div
                    className="grid grid-cols-2 gap-4 md:grid-cols-4"
                    data-oid="vxyb6n2"
                  >
                    <div
                      className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-800"
                      data-oid="hwwqhv4"
                    >
                      <div
                        className="mb-1 text-muted-foreground text-sm"
                        data-oid="w-0_u:."
                      >
                        Completion Rate
                      </div>
                      <div className="font-bold text-2xl" data-oid="hok3s.6">
                        {quizData.stats.completionRate}%
                      </div>
                    </div>
                    <div
                      className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-800"
                      data-oid="j-jk-.y"
                    >
                      <div
                        className="mb-1 text-muted-foreground text-sm"
                        data-oid="dsvskcs"
                      >
                        Average Score
                      </div>
                      <div className="font-bold text-2xl" data-oid="523agnc">
                        {quizData.stats.averageScore}%
                      </div>
                    </div>
                    <div
                      className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-800"
                      data-oid="0se:44a"
                    >
                      <div
                        className="mb-1 text-muted-foreground text-sm"
                        data-oid="omf_gpz"
                      >
                        Avg. Time/Question
                      </div>
                      <div className="font-bold text-2xl" data-oid="cmc:c2k">
                        {quizData.stats.averageTimePerQuestion}s
                      </div>
                    </div>
                    <div
                      className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-800"
                      data-oid="o134s_5"
                    >
                      <div
                        className="mb-1 text-green-600 text-sm"
                        data-oid="fk1jdrd"
                      >
                        Total Revenue
                      </div>
                      <div
                        className="font-bold text-2xl text-green-600"
                        data-oid="tf:8h7d"
                      >
                        ${quizData.stats.revenue.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card data-oid=".cj9jte">
                <CardHeader data-oid="8i31unl">
                  <CardTitle data-oid="7rt92m1">Top Performers</CardTitle>
                </CardHeader>
                <CardContent data-oid="qy-xqit">
                  <div className="space-y-4" data-oid="5094:1x">
                    {quizData.recentPlayers.slice(0, 3).map((player, index) => (
                      <div
                        className="flex items-center justify-between"
                        data-oid="fcx15ah"
                        key={index}
                      >
                        <div
                          className="flex items-center gap-3"
                          data-oid="xrlo_z6"
                        >
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground"
                            data-oid=".x.nhdm"
                          >
                            {index + 1}
                          </div>
                          <Avatar className="h-10 w-10" data-oid="8.incfo">
                            <AvatarImage
                              alt={player.name}
                              data-oid="sgl-gsr"
                              src={player.avatar || "/placeholder.svg"}
                            />

                            <AvatarFallback data-oid="al4gcpi">
                              {player.name.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div data-oid="ttgv-46">
                            <p className="font-medium" data-oid="c_e:sjm">
                              {player.name}
                            </p>
                            <p
                              className="text-muted-foreground text-sm"
                              data-oid="aq4-g88"
                            >
                              {formatDate(player.date)}
                            </p>
                          </div>
                        </div>
                        <div
                          className="flex items-center gap-2"
                          data-oid="llo85ql"
                        >
                          <Award
                            className="h-5 w-5 text-yellow-500"
                            data-oid="j2k:xgl"
                          />

                          <span className="font-bold" data-oid="_vs2e4_">
                            {player.score}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              className="space-y-6 pt-6"
              data-oid="6vq-_ro"
              value="questions"
            >
              <Card data-oid="f_bfvvq">
                <CardHeader data-oid="mq5s6o3">
                  <CardTitle data-oid="2ryxu-w">Quiz Questions</CardTitle>
                </CardHeader>
                <CardContent data-oid="7q:2tqa">
                  <Accordion
                    className="w-full"
                    collapsible
                    data-oid=":8gy7tl"
                    type="single"
                  >
                    {quizData.questions.map((question, index) => (
                      <AccordionItem
                        data-oid="c:oinlp"
                        key={question.id}
                        value={`question-${question.id}`}
                      >
                        <AccordionTrigger
                          className="hover:no-underline"
                          data-oid="ya:njq6"
                        >
                          <div
                            className="flex items-center gap-3 text-left"
                            data-oid="d8_o8fa"
                          >
                            <div
                              className="flex h-6 w-6 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground text-sm"
                              data-oid="eyskeqp"
                            >
                              {index + 1}
                            </div>
                            <span data-oid="ufoolcc">{question.text}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent data-oid="0jpz9xt">
                          <div className="space-y-4 pl-9" data-oid="zvo80e2">
                            <div className="space-y-2" data-oid="k4pmm7v">
                              {question.options.map((option) => (
                                <div
                                  className={`flex items-center rounded-md border p-3 ${option.isCorrect ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/20" : "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800"}`}
                                  data-oid="9zv70bi"
                                  key={option.id}
                                >
                                  {option.isCorrect && (
                                    <CheckCircle
                                      className="mr-2 h-5 w-5 flex-shrink-0 text-green-600"
                                      data-oid="fdi.kyp"
                                    />
                                  )}
                                  <span data-oid="_p:azwi">{option.text}</span>
                                </div>
                              ))}
                            </div>
                            <div
                              className="flex items-center justify-between text-sm"
                              data-oid="4tm401y"
                            >
                              <span
                                className="text-muted-foreground"
                                data-oid="fe9lcoi"
                              >
                                {question.correctPercentage}% of players
                                answered correctly
                              </span>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              className="space-y-6 pt-6"
              data-oid="jew7qkc"
              value="players"
            >
              <Card data-oid="6wzruwp">
                <CardHeader data-oid="x_j-0qm">
                  <CardTitle data-oid="ml2-qpx">Recent Players</CardTitle>
                </CardHeader>
                <CardContent data-oid=".j02krr">
                  <Table data-oid="twu84ux">
                    <TableHeader data-oid="2-pi-19">
                      <TableRow data-oid="v3gbgeo">
                        <TableHead data-oid="73s8:pt">Player</TableHead>
                        <TableHead data-oid="j3tgf4d">Date</TableHead>
                        <TableHead data-oid="lzk66jc">Score</TableHead>
                        <TableHead className="text-right" data-oid="yjc7a35">
                          Status
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody data-oid="r0qcir6">
                      {quizData.recentPlayers.map((player, index) => (
                        <TableRow data-oid="nzw4mh5" key={index}>
                          <TableCell data-oid="f:vu6cu">
                            <div
                              className="flex items-center gap-2"
                              data-oid="-gwl60k"
                            >
                              <Avatar className="h-8 w-8" data-oid="._e70yo">
                                <AvatarImage
                                  alt={player.name}
                                  data-oid="hoymbnu"
                                  src={player.avatar || "/placeholder.svg"}
                                />

                                <AvatarFallback data-oid="iep9j.o">
                                  {player.name.substring(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <span data-oid="yaiz9.n">{player.name}</span>
                            </div>
                          </TableCell>
                          <TableCell data-oid="0zedmw_">
                            {formatDate(player.date)}
                          </TableCell>
                          <TableCell data-oid="oifj5jh">
                            {player.score}%
                          </TableCell>
                          <TableCell className="text-right" data-oid="60mf3av">
                            <Badge
                              data-oid=":9u.6p7"
                              variant={
                                player.score >= 70 ? "success" : "warning"
                              }
                            >
                              {player.score >= 70 ? "Passed" : "Failed"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right column - Stats and actions */}
        <div className="space-y-6" data-oid="5jo0rg_">
          <Card data-oid="ud._0iw">
            <CardHeader data-oid="8jilc8v">
              <CardTitle data-oid="u756l63">Quiz Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6" data-oid="5txo2:a">
              <div className="flex flex-col items-center" data-oid="htg096k">
                <CircularProgress
                  color={
                    quizData.spotsLeft <= 20
                      ? "hsl(var(--destructive))"
                      : quizData.spotsLeft <= 50
                        ? "hsl(var(--warning))"
                        : "hsl(var(--primary))"
                  }
                  data-oid="63wgqwi"
                  showValue={true}
                  size={120}
                  strokeWidth={8}
                  value={calculateProgress(
                    quizData.players,
                    quizData.maxPlayers
                  )}
                  valueSize={24}
                />

                <div className="mt-4 text-center" data-oid="ue.rua1">
                  <p className="font-medium text-lg" data-oid="o8.f4bd">
                    {quizData.players} / {quizData.maxPlayers}
                  </p>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="-7fkc.0"
                  >
                    Players
                  </p>
                </div>
                {quizData.spotsLeft <= 20 ? (
                  <div
                    className="mt-2 flex items-center text-destructive"
                    data-oid="779jrvo"
                  >
                    <AlertCircle className="mr-1 h-4 w-4" data-oid="c09.a8y" />
                    <span className="font-medium text-sm" data-oid="3jl9i:p">
                      Only {quizData.spotsLeft} spots left!
                    </span>
                  </div>
                ) : (
                  <p
                    className="mt-2 text-muted-foreground text-sm"
                    data-oid=".mdizvz"
                  >
                    {quizData.spotsLeft} spots available
                  </p>
                )}
              </div>

              <div className="space-y-2" data-oid="hz43cn.">
                <div
                  className="flex justify-between text-sm"
                  data-oid="ol0te.p"
                >
                  <span className="text-muted-foreground" data-oid="01az6-1">
                    Status
                  </span>
                  <Badge
                    className="capitalize"
                    data-oid="4_z:9h6"
                    variant={getStatusVariant(quizData.status)}
                  >
                    {quizData.status}
                  </Badge>
                </div>
                <div
                  className="flex justify-between text-sm"
                  data-oid="rawrd2k"
                >
                  <span className="text-muted-foreground" data-oid="7jb9u4z">
                    Created
                  </span>
                  <span data-oid="csre1xl">
                    {formatDate(quizData.createdAt)}
                  </span>
                </div>
                <div
                  className="flex justify-between text-sm"
                  data-oid="916ohof"
                >
                  <span className="text-muted-foreground" data-oid="60vydx6">
                    Last Updated
                  </span>
                  <span data-oid="vdqws5w">
                    {formatDate(quizData.lastUpdated)}
                  </span>
                </div>
                <div
                  className="flex justify-between text-sm"
                  data-oid="s68sj31"
                >
                  <span className="text-muted-foreground" data-oid="taaoww_">
                    Time Limit
                  </span>
                  <span data-oid="1b:_660">{quizData.timeLimit} minutes</span>
                </div>
                <div
                  className="flex justify-between text-sm"
                  data-oid="23ygq4c"
                >
                  <span className="text-muted-foreground" data-oid="z-gqnip">
                    Questions
                  </span>
                  <span data-oid="x3f99-1">
                    {quizData.stats.totalQuestions}
                  </span>
                </div>
                <div
                  className="flex justify-between text-sm"
                  data-oid="yzsu5gp"
                >
                  <span className="text-green-600" data-oid="vc7.2zq">
                    Reward
                  </span>
                  <span
                    className="font-medium text-green-600"
                    data-oid="::-pa-7"
                  >
                    {quizData.reward}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="5to0r:r">
            <CardHeader data-oid="g2mu4vn">
              <CardTitle data-oid="zgaj:p3">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="bvcw_rg">
              <Button
                asChild
                className="flex w-full items-center gap-2"
                data-oid="rllbcex"
              >
                <Link data-oid="qudyge-" href={`/analytics?quiz=${id}`}>
                  <BarChart3 className="h-4 w-4" data-oid="ykgq1c6" />
                  <span data-oid="f1pxzmn">View Full Analytics</span>
                </Link>
              </Button>
              <Button
                className="flex w-full items-center gap-2"
                data-oid="1jlh6jt"
                onClick={handleCopyLink}
                variant="outline"
              >
                {copied ? (
                  <>
                    <CheckCheck className="h-4 w-4" data-oid="m0h5q6-" />
                    <span data-oid="9_9oo8_">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" data-oid="_lf6fh7" />
                    <span data-oid=":sxn9:4">Copy Share Link</span>
                  </>
                )}
              </Button>
              <Button
                asChild
                className="flex w-full items-center gap-2"
                data-oid="ys22rlw"
                variant="outline"
              >
                <Link data-oid=":j4uxzi" href={`/quiz/${id}`} target="_blank">
                  <ExternalLink className="h-4 w-4" data-oid="3jdgbd5" />
                  <span data-oid="zld:8xd">Preview Quiz</span>
                </Link>
              </Button>
              <Button
                asChild
                className="flex w-full items-center gap-2"
                data-oid="t7xr828"
                variant="outline"
              >
                <Link
                  data-oid="xwtg:9t"
                  href={`/create/editor?id=${id}&duplicate=true`}
                >
                  <Copy className="h-4 w-4" data-oid="md937d1" />
                  <span data-oid="8x_ok6u">Duplicate Quiz</span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
