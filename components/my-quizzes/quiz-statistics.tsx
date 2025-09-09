"use client";

import { format } from "date-fns";
import {
  ArrowLeft,
  BarChart3,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Filter,
  Globe,
  PieChartIcon,
  Timer,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for the quiz
const getQuizData = (id: string) => {
  const quiz = {
    stats: {
      questionStats: [
        { id: 1, correctRate: 92, avgTimeSpent: 15 },
        { id: 2, correctRate: 85, avgTimeSpent: 22 },
        { id: 3, correctRate: 78, avgTimeSpent: 30 },
        { id: 4, correctRate: 65, avgTimeSpent: 45 },
        { id: 5, correctRate: 89, avgTimeSpent: 18 },
        { id: 6, correctRate: 72, avgTimeSpent: 25 },
        { id: 7, correctRate: 94, avgTimeSpent: 12 },
        { id: 8, correctRate: 81, avgTimeSpent: 20 },
        { id: 9, correctRate: 68, avgTimeSpent: 35 },
        { id: 10, correctRate: 75, avgTimeSpent: 28 },
        { id: 11, correctRate: 90, avgTimeSpent: 17 },
        { id: 12, correctRate: 45, avgTimeSpent: 50 }, // Most missed question
        { id: 13, correctRate: 82, avgTimeSpent: 23 },
        { id: 14, correctRate: 79, avgTimeSpent: 26 },
        { id: 15, correctRate: 88, avgTimeSpent: 19 },
        { id: 16, correctRate: 76, avgTimeSpent: 27 },
        { id: 17, correctRate: 83, avgTimeSpent: 21 },
        { id: 18, correctRate: 71, avgTimeSpent: 32 },
        { id: 19, correctRate: 87, avgTimeSpent: 24 },
        { id: 20, correctRate: 80, avgTimeSpent: 29 },
      ],
    },
  };
  return {
    id,
    title: "World Geography Challenge",
    description:
      "Test your knowledge of world geography with this challenging quiz!",
    image: "/world-map-quiz.png",
    category: "Geography",
    difficulty: "medium",
    questions: 20,
    plays: 1245,
    averageScore: 76,
    rating: 4.7,
    createdAt: "2023-01-15T10:30:00Z",
    updatedAt: "2023-02-10T14:20:00Z",
    published: true,
    featured: true,
    isTournament: false,
    stats: {
      completionRate: 87,
      averageTimeSpent: 840, // in seconds
      mostMissedQuestion: 12,
      highestScore: 100,
      lowestScore: 35,
      questionStats: [
        { id: 1, correctRate: 92, avgTimeSpent: 15 },
        { id: 2, correctRate: 85, avgTimeSpent: 22 },
        { id: 3, correctRate: 78, avgTimeSpent: 30 },
        { id: 4, correctRate: 65, avgTimeSpent: 45 },
        { id: 5, correctRate: 89, avgTimeSpent: 18 },
        { id: 6, correctRate: 72, avgTimeSpent: 25 },
        { id: 7, correctRate: 94, avgTimeSpent: 12 },
        { id: 8, correctRate: 81, avgTimeSpent: 20 },
        { id: 9, correctRate: 68, avgTimeSpent: 35 },
        { id: 10, correctRate: 75, avgTimeSpent: 28 },
        { id: 11, correctRate: 90, avgTimeSpent: 17 },
        { id: 12, correctRate: 45, avgTimeSpent: 50 }, // Most missed question
        { id: 13, correctRate: 82, avgTimeSpent: 23 },
        { id: 14, correctRate: 79, avgTimeSpent: 26 },
        { id: 15, correctRate: 88, avgTimeSpent: 19 },
        { id: 16, correctRate: 76, avgTimeSpent: 27 },
        { id: 17, correctRate: 83, avgTimeSpent: 21 },
        { id: 18, correctRate: 71, avgTimeSpent: 32 },
        { id: 19, correctRate: 87, avgTimeSpent: 24 },
        { id: 20, correctRate: 80, avgTimeSpent: 29 },
      ],

      playerDemographics: {
        ageGroups: [
          { group: "13-17", percentage: 15 },
          { group: "18-24", percentage: 35 },
          { group: "25-34", percentage: 25 },
          { group: "35-44", percentage: 15 },
          { group: "45+", percentage: 10 },
        ],

        genderDistribution: [
          { gender: "Male", percentage: 55 },
          { gender: "Female", percentage: 42 },
          { gender: "Other", percentage: 3 },
        ],

        topCountries: [
          { country: "United States", percentage: 30 },
          { country: "United Kingdom", percentage: 15 },
          { country: "Canada", percentage: 12 },
          { country: "Australia", percentage: 10 },
          { country: "Germany", percentage: 8 },
          { country: "France", percentage: 6 },
          { country: "India", percentage: 5 },
          { country: "Brazil", percentage: 4 },
          { country: "Japan", percentage: 3 },
          { country: "Other", percentage: 7 },
        ],
      },
      playTimeDistribution: [
        { hour: "00:00", count: 15 },
        { hour: "01:00", count: 10 },
        { hour: "02:00", count: 5 },
        { hour: "03:00", count: 3 },
        { hour: "04:00", count: 2 },
        { hour: "05:00", count: 4 },
        { hour: "06:00", count: 8 },
        { hour: "07:00", count: 20 },
        { hour: "08:00", count: 35 },
        { hour: "09:00", count: 50 },
        { hour: "10:00", count: 65 },
        { hour: "11:00", count: 75 },
        { hour: "12:00", count: 85 },
        { hour: "13:00", count: 90 },
        { hour: "14:00", count: 95 },
        { hour: "15:00", count: 100 },
        { hour: "16:00", count: 110 },
        { hour: "17:00", count: 120 },
        { hour: "18:00", count: 115 },
        { hour: "19:00", count: 105 },
        { hour: "20:00", count: 90 },
        { hour: "21:00", count: 70 },
        { hour: "22:00", count: 45 },
        { hour: "23:00", count: 25 },
      ],

      scoreDistribution: [
        { range: "0-10%", count: 5, color: "#ef4444" },
        { range: "11-20%", count: 10, color: "#f97316" },
        { range: "21-30%", count: 15, color: "#f59e0b" },
        { range: "31-40%", count: 25, color: "#eab308" },
        { range: "41-50%", count: 45, color: "#84cc16" },
        { range: "51-60%", count: 75, color: "#22c55e" },
        { range: "61-70%", count: 120, color: "#10b981" },
        { range: "71-80%", count: 180, color: "#06b6d4" },
        { range: "81-90%", count: 150, color: "#0ea5e9" },
        { range: "91-100%", count: 95, color: "#3b82f6" },
      ],

      dailyPlayers: [
        { date: "2023-01-01", players: 45 },
        { date: "2023-01-02", players: 52 },
        { date: "2023-01-03", players: 49 },
        { date: "2023-01-04", players: 63 },
        { date: "2023-01-05", players: 58 },
        { date: "2023-01-06", players: 72 },
        { date: "2023-01-07", players: 85 },
        { date: "2023-01-08", players: 68 },
        { date: "2023-01-09", players: 74 },
        { date: "2023-01-10", players: 89 },
        { date: "2023-01-11", players: 95 },
        { date: "2023-01-12", players: 86 },
        { date: "2023-01-13", players: 92 },
        { date: "2023-01-14", players: 105 },
      ],

      completionAnalysis: [
        { name: "Completed", value: 87, color: "#22c55e" },
        { name: "Abandoned", value: 13, color: "#ef4444" },
      ],

      completionRateOverTime: [
        { date: "2023-01-01", rate: 82 },
        { date: "2023-01-02", rate: 83 },
        { date: "2023-01-03", rate: 81 },
        { date: "2023-01-04", rate: 84 },
        { date: "2023-01-05", rate: 85 },
        { date: "2023-01-06", rate: 86 },
        { date: "2023-01-07", rate: 87 },
        { date: "2023-01-08", rate: 85 },
        { date: "2023-01-09", rate: 86 },
        { date: "2023-01-10", rate: 88 },
        { date: "2023-01-11", rate: 89 },
        { date: "2023-01-12", rate: 87 },
        { date: "2023-01-13", rate: 88 },
        { date: "2023-01-14", rate: 90 },
      ],

      averageTimeSpentOverTime: [
        { date: "2023-01-01", time: 820 },
        { date: "2023-01-02", time: 825 },
        { date: "2023-01-03", time: 815 },
        { date: "2023-01-04", time: 830 },
        { date: "2023-01-05", time: 835 },
        { date: "2023-01-06", time: 840 },
        { date: "2023-01-07", time: 845 },
        { date: "2023-01-08", time: 835 },
        { date: "2023-01-09", time: 840 },
        { date: "2023-01-10", time: 850 },
        { date: "2023-01-11", time: 855 },
        { date: "2023-01-12", time: 845 },
        { date: "2023-01-13", time: 850 },
        { date: "2023-01-14", time: 860 },
      ],

      playerRetention: [
        { day: "Day 1", retention: 100 },
        { day: "Day 2", retention: 65 },
        { day: "Day 3", retention: 48 },
        { day: "Day 7", retention: 32 },
        { day: "Day 14", retention: 24 },
        { day: "Day 30", retention: 18 },
        { day: "Day 60", retention: 12 },
        { day: "Day 90", retention: 8 },
      ],

      questionPerformanceData: quiz.stats.questionStats.map((q) => ({
        id: q.id,
        correctRate: q.correctRate,
        avgTimeSpent: q.avgTimeSpent,
        difficulty:
          q.correctRate >= 80
            ? "Easy"
            : q.correctRate >= 60
              ? "Medium"
              : "Hard",
      })),
    },
  };
};

// Format time from seconds to minutes:seconds
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

// Format date for charts
const formatDate = (dateString: string) => {
  return format(new Date(dateString), "MMM d");
};

export function QuizStatistics({ id }: { id: string }) {
  const quiz = getQuizData(id);
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "90d" | "all">(
    "30d"
  );

  // Custom colors for charts
  const COLORS = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
  ];

  const RADIAN = Math.PI / 180;

  // Custom label for pie charts
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        data-oid="ovqc7o0"
        dominantBaseline="central"
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        x={x}
        y={y}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="container mx-auto max-w-7xl py-6" data-oid="mlpo6k_">
      {/* Header */}
      <div
        className="mb-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
        data-oid="blrlzi6"
      >
        <div data-oid="zj5zp9c">
          <Link
            className="mb-2 flex items-center text-muted-foreground text-sm hover:text-foreground"
            data-oid="cvjvsxu"
            href={`/my-quizzes/${id}`}
          >
            <ArrowLeft className="mr-1 h-4 w-4" data-oid="9l25z-a" /> Back to
            Quiz Details
          </Link>
          <h1 className="font-bold text-2xl" data-oid="dydmwel">
            {quiz.title} - Statistics
          </h1>
          <p className="text-muted-foreground" data-oid="w4bc0d7">
            Analyze performance and engagement metrics for your quiz
          </p>
        </div>
        <div className="flex items-center gap-2" data-oid="i-..nt:">
          <DropdownMenu data-oid="x0p:f7.">
            <DropdownMenuTrigger asChild data-oid="y4eibm_">
              <Button data-oid="t_fl.os" size="sm" variant="outline">
                <Filter className="mr-2 h-4 w-4" data-oid="1z_m37s" />
                {timeRange === "7d"
                  ? "Last 7 days"
                  : timeRange === "30d"
                    ? "Last 30 days"
                    : timeRange === "90d"
                      ? "Last 90 days"
                      : "All time"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-oid="a0o04.2">
              <DropdownMenuItem
                data-oid="milud9d"
                onClick={() => setTimeRange("7d")}
              >
                Last 7 days
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="px0kk:o"
                onClick={() => setTimeRange("30d")}
              >
                Last 30 days
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="o6u-zbz"
                onClick={() => setTimeRange("90d")}
              >
                Last 90 days
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="tn.iikr"
                onClick={() => setTimeRange("all")}
              >
                All time
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button data-oid="5jyx1sd" size="sm" variant="outline">
            <Download className="mr-2 h-4 w-4" data-oid="h.nsim7" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Quiz Info */}
      <Card className="mb-6" data-oid="sl-zsop">
        <div className="flex flex-col md:flex-row" data-oid="h06n5q5">
          <div
            className="relative h-48 w-full md:h-auto md:w-64"
            data-oid="-vaeio2"
          >
            <Image
              alt={quiz.title}
              className="object-cover md:rounded-l-lg"
              data-oid=".bonr6e"
              fill
              height={350}
              src={quiz.image || "/placeholder.svg"}
              width={600}
            />
          </div>
          <div className="flex flex-1 flex-col p-6" data-oid="cb3ph_c">
            <div className="mb-4" data-oid="o1i0.0f">
              <h2 className="font-semibold text-xl" data-oid="zuopk.s">
                {quiz.title}
              </h2>
              <p className="text-muted-foreground" data-oid="2mlrsy7">
                {quiz.description}
              </p>
            </div>
            <div className="mb-4 flex flex-wrap gap-2" data-oid="sww6a-x">
              <Badge
                className="bg-background"
                data-oid="ho063:1"
                variant="outline"
              >
                {quiz.category}
              </Badge>
              <Badge
                className={`
                  ${quiz.difficulty === "easy" ? "border-green-500 bg-green-50 text-green-700" : quiz.difficulty === "medium" ? "border-yellow-500 bg-yellow-50 text-yellow-700" : "border-red-500 bg-red-50 text-red-700"}
                `}
                data-oid="18jbwi:"
                variant="outline"
              >
                {quiz.difficulty.charAt(0).toUpperCase() +
                  quiz.difficulty.slice(1)}
              </Badge>
              <Badge
                className="bg-background"
                data-oid="jr50t9q"
                variant="outline"
              >
                {quiz.questions} Questions
              </Badge>
              <Badge
                className="bg-background"
                data-oid="77:pqj7"
                variant="outline"
              >
                <Calendar className="mr-1 h-3.5 w-3.5" data-oid="z3a9r:z" />
                {format(new Date(quiz.createdAt), "MMM d, yyyy")}
              </Badge>
            </div>
            <div
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
              data-oid="rwzse0b"
            >
              <div data-oid="8w_ubjm">
                <p className="text-muted-foreground text-sm" data-oid=".2bifyl">
                  Total Plays
                </p>
                <p className="font-bold text-2xl" data-oid="ab6ntce">
                  {quiz.plays.toLocaleString()}
                </p>
              </div>
              <div data-oid="n7:mps0">
                <p className="text-muted-foreground text-sm" data-oid="sg.b122">
                  Avg. Score
                </p>
                <p className="font-bold text-2xl" data-oid="jybree3">
                  {quiz.averageScore}%
                </p>
              </div>
              <div data-oid="vg:cz2l">
                <p className="text-muted-foreground text-sm" data-oid="qjnl-re">
                  Completion Rate
                </p>
                <p className="font-bold text-2xl" data-oid="j_djqzz">
                  {quiz.stats.completionRate}%
                </p>
              </div>
              <div data-oid="6ma9fgj">
                <p className="text-muted-foreground text-sm" data-oid="o3g1aqt">
                  Avg. Time
                </p>
                <p className="font-bold text-2xl" data-oid="xs5p3ug">
                  {formatTime(quiz.stats.averageTimeSpent)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs data-oid="_:9.u:0" defaultValue="overview">
        <TabsList className="mb-6" data-oid="stauxn2">
          <TabsTrigger data-oid="sjv.l5k" value="overview">
            Overview
          </TabsTrigger>
          <TabsTrigger data-oid="9viu4-x" value="questions">
            Question Analysis
          </TabsTrigger>
          <TabsTrigger data-oid="6_hag9." value="players">
            Player Demographics
          </TabsTrigger>
          <TabsTrigger data-oid="3a4kyqv" value="engagement">
            Engagement
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent className="space-y-6" data-oid="5:bt8x0" value="overview">
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            data-oid="o.kqh31"
          >
            <Card data-oid="3kyddas">
              <CardHeader data-oid="x9fsg8m">
                <CardTitle className="flex items-center" data-oid="m3g.-av">
                  <BarChart3 className="mr-2 h-5 w-5" data-oid="8deo3_4" />
                  Score Distribution
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="bp.dmdd">
                <div className="h-64 w-full" data-oid="r5qhfho">
                  <ChartContainer
                    className="h-full"
                    config={{
                      count: {
                        label: "Number of Players",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    data-oid="swxfzve"
                  >
                    <ResponsiveContainer
                      data-oid="w4e8pa7"
                      height="100%"
                      width="100%"
                    >
                      <BarChart
                        data={quiz.stats.scoreDistribution}
                        data-oid="2en::yl"
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid
                          data-oid="20jr57o"
                          strokeDasharray="3 3"
                        />

                        <XAxis data-oid="yemv57w" dataKey="range" />
                        <YAxis data-oid="umh1ld-" />
                        <ChartTooltip
                          content={<ChartTooltipContent data-oid="pm8p894" />}
                          data-oid="zts4:qs"
                        />

                        <Bar
                          data-oid="my-j04e"
                          dataKey="count"
                          name="Players"
                          radius={[4, 4, 0, 0]}
                        >
                          {quiz.stats.scoreDistribution.map((entry, index) => (
                            <Cell
                              data-oid="n_mkm2n"
                              fill={entry.color}
                              key={`cell-${index}`}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card data-oid="b48e6vj">
              <CardHeader data-oid="0myzxjt">
                <CardTitle className="flex items-center" data-oid="yagkej:">
                  <Clock className="mr-2 h-5 w-5" data-oid="t203.9w" />
                  Play Time Distribution
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="zejaf89">
                <div className="h-64 w-full" data-oid=":wyr479">
                  <ChartContainer
                    className="h-full"
                    config={{
                      count: {
                        label: "Number of Plays",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    data-oid="xmj:kyl"
                  >
                    <ResponsiveContainer
                      data-oid="qgg_p5w"
                      height="100%"
                      width="100%"
                    >
                      <AreaChart
                        data={quiz.stats.playTimeDistribution}
                        data-oid="b8zdl42"
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid
                          data-oid="f.aty_5"
                          strokeDasharray="3 3"
                        />

                        <XAxis data-oid="2j6ctol" dataKey="hour" />
                        <YAxis data-oid="p:lve:h" />
                        <ChartTooltip
                          content={<ChartTooltipContent data-oid="0si97mb" />}
                          data-oid="30l15zd"
                        />

                        <Area
                          data-oid="enpoq9o"
                          dataKey="count"
                          fill="var(--color-count)"
                          fillOpacity={0.3}
                          name="Plays"
                          stroke="var(--color-count)"
                          type="monotone"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card data-oid="4kqzwu5">
              <CardHeader data-oid="nbg:g_w">
                <CardTitle className="flex items-center" data-oid="__8uwyj">
                  <Users className="mr-2 h-5 w-5" data-oid="9rmtn.4" />
                  Daily Players
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="9-ytdji">
                <div className="h-64 w-full" data-oid="g7y2dha">
                  <ChartContainer
                    className="h-full"
                    config={{
                      players: {
                        label: "Players",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                    data-oid="-xaamed"
                  >
                    <ResponsiveContainer
                      data-oid="4x7f_uv"
                      height="100%"
                      width="100%"
                    >
                      <LineChart
                        data={quiz.stats.dailyPlayers}
                        data-oid="jaefsvv"
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid
                          data-oid="fup_nm_"
                          strokeDasharray="3 3"
                        />

                        <XAxis
                          data-oid="jxh-6uc"
                          dataKey="date"
                          tickFormatter={formatDate}
                        />

                        <YAxis data-oid="cbsmjzc" />
                        <ChartTooltip
                          content={<ChartTooltipContent data-oid=":jb13v9" />}
                          data-oid="s5ah57:"
                        />

                        <Line
                          activeDot={{ r: 6 }}
                          data-oid="r119.4b"
                          dataKey="players"
                          dot={{ r: 4 }}
                          name="Players"
                          stroke="var(--color-players)"
                          strokeWidth={2}
                          type="monotone"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card data-oid="zmsz2kw">
              <CardHeader data-oid="saczin_">
                <CardTitle className="flex items-center" data-oid="3xhl8iz">
                  <PieChartIcon className="mr-2 h-5 w-5" data-oid="7-j46iy" />
                  Completion Analysis
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="ftk1qzj">
                <div className="h-64 w-full" data-oid="ffwrl_b">
                  <ResponsiveContainer
                    data-oid="h7ypwv6"
                    height="100%"
                    width="100%"
                  >
                    <PieChart data-oid=".cfzcue">
                      <Pie
                        cx="50%"
                        cy="50%"
                        data={quiz.stats.completionAnalysis}
                        data-oid="wjb:k94"
                        dataKey="value"
                        fill="#8884d8"
                        label={renderCustomizedLabel}
                        labelLine={false}
                        outerRadius={80}
                      >
                        {quiz.stats.completionAnalysis.map((entry, index) => (
                          <Cell
                            data-oid="ocz5y1g"
                            fill={entry.color}
                            key={`cell-${index}`}
                          />
                        ))}
                      </Pie>
                      <Legend data-oid="nzrt5xb" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Question Analysis Tab */}
        <TabsContent className="space-y-6" data-oid="m:344l9" value="questions">
          <Card className="mb-6" data-oid="fz05imt">
            <CardHeader data-oid="vb5-8ps">
              <CardTitle data-oid="evct1qs">
                Question Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="x_1k5om">
              <div className="h-full w-full" data-oid="kq..rjg">
                <ChartContainer
                  className="h-80 w-full"
                  config={{
                    correctRate: {
                      label: "Correct Rate (%)",
                      color: "hsl(var(--chart-1))",
                    },
                    avgTimeSpent: {
                      label: "Avg. Time (sec)",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  data-oid="lkf0vei"
                >
                  <ResponsiveContainer
                    data-oid="6eo1fq9"
                    height="100%"
                    width="100%"
                  >
                    <BarChart
                      data={quiz.stats.questionStats}
                      data-oid="wyy9afh"
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid data-oid="9y-_7:7" strokeDasharray="3 3" />
                      <XAxis data-oid="t8_7w4g" dataKey="id" />
                      <YAxis
                        data-oid="v6n0wru"
                        orientation="left"
                        stroke="var(--color-correctRate)"
                        yAxisId="left"
                      />

                      <YAxis
                        data-oid="qp_:.ho"
                        domain={[0, 60]}
                        orientation="right"
                        stroke="var(--color-avgTimeSpent)"
                        yAxisId="right"
                      />

                      <ChartTooltip
                        content={<ChartTooltipContent data-oid="asd3b2u" />}
                        data-oid="ce3oaeh"
                      />

                      <Legend data-oid="dy_dya2" />
                      <Bar
                        data-oid=".uwrbzh"
                        dataKey="correctRate"
                        fill="var(--color-correctRate)"
                        name="Correct Rate"
                        radius={[4, 4, 0, 0]}
                        yAxisId="left"
                      >
                        {quiz.stats.questionStats.map((entry, index) => (
                          <Cell
                            data-oid="phr87q8"
                            fill={
                              entry.correctRate >= 80
                                ? "#22c55e"
                                : entry.correctRate >= 60
                                  ? "#eab308"
                                  : "#ef4444"
                            }
                            key={`cell-${index}`}
                          />
                        ))}
                      </Bar>
                      <Line
                        data-oid="xle4ph2"
                        dataKey="avgTimeSpent"
                        dot={{ r: 4 }}
                        name="Avg. Time"
                        stroke="var(--color-avgTimeSpent)"
                        strokeWidth={2}
                        type="monotone"
                        yAxisId="right"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="bne-i67">
            <CardHeader data-oid="mfz8e2r">
              <CardTitle data-oid="l3w:s6d">
                Question Difficulty Analysis
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="j89r6pw">
              <div className="h-80 w-full" data-oid="gx29ide">
                <ResponsiveContainer
                  data-oid="plgy9i."
                  height="100%"
                  width="100%"
                >
                  <ScatterChart
                    data-oid="k1:g1rp"
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid data-oid="m166zpe" strokeDasharray="3 3" />
                    <XAxis
                      data-oid="ri_3p73"
                      dataKey="correctRate"
                      domain={[0, 100]}
                      label={{
                        value: "Correct Rate (%)",
                        position: "insideBottom",
                        offset: -5,
                      }}
                      name="Correct Rate"
                      type="number"
                    />

                    <YAxis
                      data-oid="emjlveu"
                      dataKey="avgTimeSpent"
                      label={{
                        value: "Avg. Time (sec)",
                        angle: -90,
                        position: "insideLeft",
                      }}
                      name="Avg. Time"
                      type="number"
                    />

                    <ZAxis
                      data-oid="sff-0.u"
                      range={[100, 500]}
                      type="number"
                    />

                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div
                              className="rounded-lg border bg-background p-2 shadow-sm"
                              data-oid="k9ezoga"
                            >
                              <p
                                className="font-medium text-sm"
                                data-oid="3s01cvy"
                              >
                                Question {data.id}
                              </p>
                              <p
                                className="text-muted-foreground text-sm"
                                data-oid="9o:5-wz"
                              >
                                Correct Rate: {data.correctRate}%
                              </p>
                              <p
                                className="text-muted-foreground text-sm"
                                data-oid="wvhdzoa"
                              >
                                Avg. Time: {data.avgTimeSpent} sec
                              </p>
                              <p
                                className="text-muted-foreground text-sm"
                                data-oid="7:w3l_y"
                              >
                                Difficulty: {data.difficulty}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                      cursor={{ strokeDasharray: "3 3" }}
                      data-oid="tdcw_tr"
                    />

                    <Scatter
                      data={quiz.stats.questionStats.map((q) => ({
                        ...q,
                        difficulty:
                          q.correctRate >= 80
                            ? "Easy"
                            : q.correctRate >= 60
                              ? "Medium"
                              : "Hard",
                      }))}
                      data-oid="gv:ohp6"
                      fill="#8884d8"
                      name="Questions"
                    >
                      {quiz.stats.questionStats.map((entry, index) => (
                        <Cell
                          data-oid="ptssokn"
                          fill={
                            entry.correctRate >= 80
                              ? "#22c55e"
                              : entry.correctRate >= 60
                                ? "#eab308"
                                : "#ef4444"
                          }
                          key={`cell-${index}`}
                        />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="1d-sqto">
            <CardHeader data-oid="byn8foh">
              <CardTitle data-oid="x8ujwv:">Question Performance</CardTitle>
            </CardHeader>
            <CardContent data-oid="cwx5fm0">
              <div className="space-y-6" data-oid="ixyc_su">
                <div className="rounded-md border" data-oid="3sxt-c7">
                  <table className="w-full" data-oid=".7zkgq8">
                    <thead data-oid="fel5t0o">
                      <tr className="border-b bg-muted/50" data-oid="jv8_9is">
                        <th
                          className="px-4 py-3 text-left font-medium text-sm"
                          data-oid="duwb68j"
                        >
                          Question #
                        </th>
                        <th
                          className="px-4 py-3 text-left font-medium text-sm"
                          data-oid=".m.sk7u"
                        >
                          Correct Rate
                        </th>
                        <th
                          className="px-4 py-3 text-left font-medium text-sm"
                          data-oid="4z632wb"
                        >
                          Avg. Time Spent
                        </th>
                        <th
                          className="px-4 py-3 text-left font-medium text-sm"
                          data-oid="vt:7tms"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody data-oid=".g6x1f-">
                      {quiz.stats.questionStats.map((question) => (
                        <tr
                          className="border-b"
                          data-oid=".frpnki"
                          key={question.id}
                        >
                          <td className="px-4 py-3 text-sm" data-oid="1thiwnm">
                            Question {question.id}
                          </td>
                          <td className="px-4 py-3 text-sm" data-oid="4y:6.om">
                            <div
                              className="flex items-center"
                              data-oid="a-3e-f8"
                            >
                              <div
                                className="mr-2 h-2 w-16 overflow-hidden rounded-full bg-gray-200"
                                data-oid="oysuk_d"
                              >
                                <div
                                  className={`h-full ${question.correctRate >= 80 ? "bg-green-500" : question.correctRate >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
                                  data-oid="gnv:1ia"
                                  style={{ width: `${question.correctRate}%` }}
                                />
                              </div>
                              <span data-oid="t99sp9d">
                                {question.correctRate}%
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm" data-oid="5vw-i8s">
                            {question.avgTimeSpent} seconds
                          </td>
                          <td className="px-4 py-3 text-sm" data-oid="jya3wu:">
                            {question.id === quiz.stats.mostMissedQuestion ? (
                              <Badge data-oid="5p62:js" variant="destructive">
                                Most Missed
                              </Badge>
                            ) : question.correctRate >= 90 ? (
                              <Badge
                                className="border-green-500 bg-green-50 text-green-700"
                                data-oid="847p0lj"
                                variant="outline"
                              >
                                Easy
                              </Badge>
                            ) : question.correctRate <= 50 ? (
                              <Badge
                                className="border-red-500 bg-red-50 text-red-700"
                                data-oid="nvvl6e_"
                                variant="outline"
                              >
                                Difficult
                              </Badge>
                            ) : (
                              <Badge
                                className="border-yellow-500 bg-yellow-50 text-yellow-700"
                                data-oid="ckg:24k"
                                variant="outline"
                              >
                                Average
                              </Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Player Demographics Tab */}
        <TabsContent className="space-y-6" data-oid="d1e5vgq" value="players">
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            data-oid="qbpbww1"
          >
            <Card data-oid="l-fcla.">
              <CardHeader data-oid="q5u6gy-">
                <CardTitle data-oid="4vyowh9">Age Distribution</CardTitle>
              </CardHeader>
              <CardContent data-oid="xj.qsd5">
                <div className="h-64 w-full" data-oid="-2_4na9">
                  <ResponsiveContainer
                    data-oid="uv8g0k5"
                    height="100%"
                    width="100%"
                  >
                    <PieChart data-oid="1.3552z">
                      <Pie
                        cx="50%"
                        cy="50%"
                        data={quiz.stats.playerDemographics.ageGroups}
                        data-oid="6vjaax1"
                        dataKey="percentage"
                        fill="#8884d8"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                        labelLine={true}
                        nameKey="group"
                        outerRadius={80}
                      >
                        {quiz.stats.playerDemographics.ageGroups.map(
                          (entry, index) => (
                            <Cell
                              data-oid=":02m.ya"
                              fill={COLORS[index % COLORS.length]}
                              key={`cell-${index}`}
                            />
                          )
                        )}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div
                                className="rounded-lg border bg-background p-2 shadow-sm"
                                data-oid="i8ly0us"
                              >
                                <p
                                  className="font-medium text-sm"
                                  data-oid="3876au7"
                                >
                                  {payload[0].name}
                                </p>
                                <p
                                  className="text-muted-foreground text-sm"
                                  data-oid="rm8.u.w"
                                >
                                  {payload[0].value}% of players
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                        data-oid="09xvpl1"
                        formatter={(value) => [`${value}%`, "Percentage"]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card data-oid="mp52ezr">
              <CardHeader data-oid="kn-ew6x">
                <CardTitle data-oid="sqibuv-">Gender Distribution</CardTitle>
              </CardHeader>
              <CardContent data-oid="06ohxrh">
                <div className="h-64 w-full" data-oid="469yu:l">
                  <ResponsiveContainer
                    data-oid="du28him"
                    height="100%"
                    width="100%"
                  >
                    <PieChart data-oid="_9lbct5">
                      <Pie
                        cx="50%"
                        cy="50%"
                        data={quiz.stats.playerDemographics.genderDistribution}
                        data-oid=".wbhesi"
                        dataKey="percentage"
                        fill="#8884d8"
                        label={renderCustomizedLabel}
                        labelLine={false}
                        nameKey="gender"
                        outerRadius={80}
                      >
                        {quiz.stats.playerDemographics.genderDistribution.map(
                          (entry, index) => (
                            <Cell
                              data-oid="yj9hhec"
                              fill={COLORS[index % COLORS.length]}
                              key={`cell-${index}`}
                            />
                          )
                        )}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div
                                className="rounded-lg border bg-background p-2 shadow-sm"
                                data-oid="h4ds-ez"
                              >
                                <p
                                  className="font-medium text-sm"
                                  data-oid="jn2xfd5"
                                >
                                  {payload[0].name}
                                </p>
                                <p
                                  className="text-muted-foreground text-sm"
                                  data-oid="w6ul7e4"
                                >
                                  {payload[0].value}% of players
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                        data-oid="r6u5_4c"
                        formatter={(value) => [`${value}%`, "Percentage"]}
                      />

                      <Legend data-oid="l6hlhh7" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2" data-oid="0ec1zt2">
              <CardHeader data-oid="q_17526">
                <CardTitle className="flex items-center" data-oid="q_yw_ot">
                  <Globe className="mr-2 h-5 w-5" data-oid="l_2:8w_" />
                  Geographic Distribution
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="a3ui93u">
                <div className="h-80 w-full" data-oid="35l8_xk">
                  <ChartContainer
                    className="h-full w-full"
                    config={{
                      percentage: {
                        label: "Percentage of Players",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    data-oid="dqu94fa"
                  >
                    <ResponsiveContainer
                      data-oid="7-qn6f."
                      height="100%"
                      width="100%"
                    >
                      <BarChart
                        data={quiz.stats.playerDemographics.topCountries}
                        data-oid="2br_mna"
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid
                          data-oid="-9uz2fh"
                          strokeDasharray="3 3"
                        />

                        <XAxis
                          data-oid="hpgtiar"
                          domain={[0, 100]}
                          type="number"
                        />

                        <YAxis
                          data-oid="h1q48jj"
                          dataKey="country"
                          tick={{ fontSize: 12 }}
                          type="category"
                          width={80}
                        />

                        <ChartTooltip
                          content={<ChartTooltipContent data-oid="0.-nd6i" />}
                          data-oid="5wwjeuq"
                        />

                        <Bar
                          data-oid="::s_ue9"
                          dataKey="percentage"
                          fill="var(--color-percentage)"
                          name="Percentage"
                          radius={[0, 4, 4, 0]}
                        >
                          {quiz.stats.playerDemographics.topCountries.map(
                            (entry, index) => (
                              <Cell
                                data-oid="iirfbj6"
                                fill={COLORS[index % COLORS.length]}
                                key={`cell-${index}`}
                              />
                            )
                          )}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent
          className="space-y-6"
          data-oid=":f38jo7"
          value="engagement"
        >
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            data-oid="nl.2r1_"
          >
            <Card data-oid="rncegx-">
              <CardHeader data-oid="-a5ongz">
                <CardTitle className="flex items-center" data-oid="b4_zemt">
                  <CheckCircle className="mr-2 h-5 w-5" data-oid="zzd8o83" />
                  Completion Rate Over Time
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="f.h06fi">
                <div className="h-64 w-full" data-oid="3_h3kef">
                  <ChartContainer
                    className="h-full"
                    config={{
                      rate: {
                        label: "Completion Rate (%)",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    data-oid="x9w-tcz"
                  >
                    <ResponsiveContainer
                      data-oid="686yc75"
                      height="100%"
                      width="100%"
                    >
                      <LineChart
                        data={quiz.stats.completionRateOverTime}
                        data-oid="ylg7xra"
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid
                          data-oid="uagajv9"
                          strokeDasharray="3 3"
                        />

                        <XAxis
                          data-oid="j-ah5:3"
                          dataKey="date"
                          tickFormatter={formatDate}
                        />

                        <YAxis data-oid="rjf.52y" domain={[70, 100]} />
                        <ChartTooltip
                          content={<ChartTooltipContent data-oid="6c.839y" />}
                          data-oid="4fs1o96"
                        />

                        <Line
                          activeDot={{ r: 6 }}
                          data-oid="pfewxy0"
                          dataKey="rate"
                          dot={{ r: 4 }}
                          name="Completion Rate"
                          stroke="var(--color-rate)"
                          strokeWidth={2}
                          type="monotone"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card data-oid="p_rcdax">
              <CardHeader data-oid="ewsrb7:">
                <CardTitle className="flex items-center" data-oid="2m9dzjp">
                  <Timer className="mr-2 h-5 w-5" data-oid="7y91-5e" />
                  Average Time Spent
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="ip-_ouw">
                <div className="h-64 w-full" data-oid="zsgp-m7">
                  <ChartContainer
                    className="h-full"
                    config={{
                      time: {
                        label: "Time (seconds)",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    data-oid="ev3_xdo"
                  >
                    <ResponsiveContainer
                      data-oid="mu19jbg"
                      height="100%"
                      width="100%"
                    >
                      <AreaChart
                        data={quiz.stats.averageTimeSpentOverTime}
                        data-oid="xa01:4c"
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid
                          data-oid="920h4sp"
                          strokeDasharray="3 3"
                        />

                        <XAxis
                          data-oid="zf2g7ep"
                          dataKey="date"
                          tickFormatter={formatDate}
                        />

                        <YAxis data-oid=":r0fplv" domain={[800, 900]} />
                        <ChartTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div
                                  className="rounded-lg border bg-background p-2 shadow-sm"
                                  data-oid="gqw.wvi"
                                >
                                  <p
                                    className="font-medium text-sm"
                                    data-oid="8l7vu:v"
                                  >
                                    {formatDate(label)}
                                  </p>
                                  <p
                                    className="text-muted-foreground text-sm"
                                    data-oid="_dx.r_v"
                                  >
                                    Average Time:{" "}
                                    {formatTime(payload[0]?.value as number)}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                          data-oid="32qlapy"
                        />

                        <Area
                          data-oid="b6t_sm9"
                          dataKey="time"
                          fill="var(--color-time)"
                          fillOpacity={0.3}
                          name="Average Time"
                          stroke="var(--color-time)"
                          type="monotone"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2" data-oid=".iys2_v">
              <CardHeader data-oid="y6xwn.5">
                <CardTitle className="flex items-center" data-oid="beu3s3m">
                  <TrendingUp className="mr-2 h-5 w-5" data-oid="yrfayt." />
                  Player Retention
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="z.kxhwy">
                <div className="h-64 w-full" data-oid="h4n0w24">
                  <ChartContainer
                    className="size-full"
                    config={{
                      retention: {
                        label: "Retention Rate (%)",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                    data-oid="bm.7.54"
                  >
                    <ResponsiveContainer
                      data-oid="s5ytyty"
                      height="100%"
                      width="100%"
                    >
                      <LineChart
                        data={quiz.stats.playerRetention}
                        data-oid="wpc-1:w"
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid
                          data-oid="v0t11ee"
                          strokeDasharray="3 3"
                        />

                        <XAxis data-oid="uopjgvl" dataKey="day" />
                        <YAxis data-oid="th727k0" />
                        <ChartTooltip
                          content={<ChartTooltipContent data-oid="l7u844s" />}
                          data-oid="224-6e9"
                        />

                        <Line
                          activeDot={{ r: 6 }}
                          data-oid="o1ryh4s"
                          dataKey="retention"
                          dot={{ r: 4 }}
                          name="Retention Rate"
                          stroke="var(--color-retention)"
                          strokeWidth={2}
                          type="monotone"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
