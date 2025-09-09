"use client";

import {
  BarChart3,
  Clock,
  DollarSign,
  Edit,
  Eye,
  Grid3X3,
  List,
  MoreHorizontal,
  Plus,
  Search,
  Share2,
  Trash2,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Sample quiz data
const myQuizzes = [
  {
    id: 1,
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
    stats: {
      completionRate: 78,
      averageScore: 72,
      revenue: 1425.0,
    },
  },
  {
    id: 2,
    title: "Science Quiz: Space Exploration",
    image: "/space-exploration-quiz.png",
    category: "Science",
    difficulty: "Hard",
    status: "active",
    timeLimit: 20,
    reward: "$7.50",
    players: 178,
    maxPlayers: 500,
    spotsLeft: 322,
    createdAt: "2023-10-22T09:15:00Z",
    lastUpdated: "2023-11-05T11:45:00Z",
    stats: {
      completionRate: 65,
      averageScore: 68,
      revenue: 1335.0,
    },
  },
  {
    id: 3,
    title: "History: Ancient Civilizations",
    image: "/ancient-civilizations-quiz.png",
    category: "History",
    difficulty: "Medium",
    status: "active",
    timeLimit: 15,
    reward: "$5.00",
    players: 412,
    maxPlayers: 450,
    spotsLeft: 38,
    createdAt: "2023-09-18T16:20:00Z",
    lastUpdated: "2023-10-12T08:30:00Z",
    stats: {
      completionRate: 82,
      averageScore: 75,
      revenue: 2060.0,
    },
  },
  {
    id: 4,
    title: "Math Puzzles & Problems",
    image: "/math-puzzles-quiz.png",
    category: "Mathematics",
    difficulty: "Hard",
    status: "draft",
    timeLimit: 25,
    reward: "$8.00",
    players: 0,
    maxPlayers: 300,
    spotsLeft: 300,
    createdAt: "2023-12-05T13:40:00Z",
    lastUpdated: "2023-12-05T13:40:00Z",
    stats: {
      completionRate: 0,
      averageScore: 0,
      revenue: 0,
    },
  },
  {
    id: 5,
    title: "Literature: Classic Novels",
    image: "/classic-novels-quiz.png",
    category: "Literature",
    difficulty: "Medium",
    status: "completed",
    timeLimit: 15,
    reward: "$5.00",
    players: 300,
    maxPlayers: 300,
    spotsLeft: 0,
    createdAt: "2023-08-10T11:25:00Z",
    lastUpdated: "2023-09-01T15:10:00Z",
    stats: {
      completionRate: 91,
      averageScore: 82,
      revenue: 1500.0,
    },
  },
  {
    id: 6,
    title: "Sports Trivia Challenge",
    image: "/sports-trivia-quiz.png",
    category: "Sports",
    difficulty: "Easy",
    status: "active",
    timeLimit: 10,
    reward: "$3.00",
    players: 124,
    maxPlayers: 250,
    spotsLeft: 126,
    createdAt: "2023-11-28T09:50:00Z",
    lastUpdated: "2023-11-30T14:15:00Z",
    stats: {
      completionRate: 85,
      averageScore: 79,
      revenue: 372.0,
    },
  },
];

export function MyQuizzes() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

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
    }).format(date);
  };

  // Calculate progress percentage
  const calculateProgress = (players: number, maxPlayers: number) => {
    return (players / maxPlayers) * 100;
  };

  // Filter quizzes based on status
  const filteredQuizzes = myQuizzes
    .filter((quiz) => {
      if (statusFilter === "all") return true;
      return quiz.status === statusFilter;
    })
    .filter((quiz) => {
      if (!searchQuery) return true;
      return (
        quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quiz.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  return (
    <div className="space-y-6" data-oid="qvty0po">
      <div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        data-oid="2nu4d1g"
      >
        <div data-oid="z3g0l6a">
          <h1 className="font-bold text-3xl tracking-tight" data-oid="d3y9flk">
            My Quizzes
          </h1>
          <p className="mt-1 text-muted-foreground" data-oid="w5_y9w7">
            Manage and track all your created quizzes
          </p>
        </div>
        <Button asChild data-oid="n1-v65j">
          <Link
            className="flex items-center gap-2"
            data-oid="5.9pt6p"
            href="/create/editor"
          >
            <Plus className="h-4 w-4" data-oid="l53x1ij" />
            <span data-oid="918nmkb">Create New Quiz</span>
          </Link>
        </Button>
      </div>

      {/* Search and filters */}
      <div
        className="flex flex-col gap-4 md:flex-row md:items-center"
        data-oid="crqt1ru"
      >
        <div className="relative flex-1" data-oid="evrauy7">
          <Search
            className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
            data-oid="45srr1n"
          />

          <Input
            className="pl-10"
            data-oid=".a-j77g"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your quizzes..."
            value={searchQuery}
          />
        </div>

        <div className="flex items-center gap-2" data-oid="ev7.il9">
          <Select
            data-oid="0-2for5"
            defaultValue="all"
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-[140px]" data-oid="16_wrkw">
              <SelectValue data-oid="_bdl6s_" placeholder="Status" />
            </SelectTrigger>
            <SelectContent data-oid="jk7ss_b">
              <SelectGroup data-oid="d_kc1xb">
                <SelectLabel data-oid="_tufi_e">Status</SelectLabel>
                <SelectItem data-oid=".jqc5_f" value="all">
                  All Status
                </SelectItem>
                <SelectItem data-oid="uuda72j" value="active">
                  Active
                </SelectItem>
                <SelectItem data-oid="tkxtpjh" value="draft">
                  Draft
                </SelectItem>
                <SelectItem data-oid="9lxi92_" value="completed">
                  Completed
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select data-oid="y41qf7z" defaultValue="newest">
            <SelectTrigger className="w-[140px]" data-oid="w3ujw3-">
              <SelectValue data-oid="isyf6g9" placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent data-oid="wevhs9z">
              <SelectGroup data-oid="1diyk_o">
                <SelectLabel data-oid="sg0_6m8">Sort By</SelectLabel>
                <SelectItem data-oid="jugq3ff" value="newest">
                  Newest
                </SelectItem>
                <SelectItem data-oid=".tcmibc" value="oldest">
                  Oldest
                </SelectItem>
                <SelectItem data-oid="d-0.ojv" value="popular">
                  Most Popular
                </SelectItem>
                <SelectItem data-oid="ys3e819" value="revenue">
                  Highest Revenue
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div
            className="flex items-center rounded-md border bg-muted/40"
            data-oid="g.sg2:s"
          >
            <Button
              className="h-8 w-8"
              data-oid="jxdydkm"
              onClick={() => setViewMode("grid")}
              size="icon"
              variant={viewMode === "grid" ? "secondary" : "ghost"}
            >
              <Grid3X3 className="h-4 w-4" data-oid="x:28pa5" />
              <span className="sr-only" data-oid="ri7ytah">
                Grid view
              </span>
            </Button>
            <Button
              className="h-8 w-8"
              data-oid="8:7t7nv"
              onClick={() => setViewMode("list")}
              size="icon"
              variant={viewMode === "list" ? "secondary" : "ghost"}
            >
              <List className="h-4 w-4" data-oid="vudczn2" />
              <span className="sr-only" data-oid="qnko9kt">
                List view
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        data-oid="px:_c0x"
        defaultValue="all"
        onValueChange={setStatusFilter}
      >
        <TabsList data-oid="64x5eyz">
          <TabsTrigger data-oid="i_qwt8r" value="all">
            All Quizzes
          </TabsTrigger>
          <TabsTrigger data-oid="2q2hfn2" value="active">
            Active
          </TabsTrigger>
          <TabsTrigger data-oid="l9ud8x8" value="draft">
            Drafts
          </TabsTrigger>
          <TabsTrigger data-oid="_7nw3g5" value="completed">
            Completed
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {filteredQuizzes.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center py-12 text-center"
          data-oid="dfmv.ao"
        >
          <div className="mb-4 rounded-full bg-muted p-6" data-oid="-d5y-j7">
            <Search
              className="h-10 w-10 text-muted-foreground"
              data-oid=".jh0mh:"
            />
          </div>
          <h3 className="mb-2 font-semibold text-xl" data-oid="cq.lgjp">
            No quizzes found
          </h3>
          <p className="mb-6 max-w-md text-muted-foreground" data-oid="8icw1ec">
            {searchQuery
              ? `No quizzes match your search "${searchQuery}". Try a different search term.`
              : "You don't have any quizzes with the selected filter. Try a different filter or create a new quiz."}
          </p>
          <Button asChild data-oid="disd497">
            <Link
              className="flex items-center gap-2"
              data-oid="bpznn25"
              href="/create/editor"
            >
              <Plus className="h-4 w-4" data-oid="ci4umrg" />
              <span data-oid="-bjp2sv">Create New Quiz</span>
            </Link>
          </Button>
        </div>
      ) : (
        <>
          {/* Grid View */}
          {viewMode === "grid" && (
            <div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              data-oid="o6cyvcz"
            >
              {filteredQuizzes.map((quiz) => (
                <Card
                  className={cn(
                    "overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-600",
                    quiz.status === "draft" && "border-dashed"
                  )}
                  data-oid="6s_ux9u"
                  key={quiz.id}
                >
                  {/* Image with overlay */}
                  <div className="relative h-48" data-oid="hin5ni.">
                    <Image
                      alt={quiz.title}
                      className="h-full w-full object-cover"
                      data-oid="86db-46"
                      height={350}
                      src={quiz.image || "/placeholder.svg"}
                      width={600}
                    />

                    <div
                      className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4"
                      data-oid="wsw71r6"
                    >
                      <div className="w-full" data-oid="1x2_d89">
                        <div
                          className="mb-2 flex items-center justify-between"
                          data-oid="y13jczx"
                        >
                          <Badge
                            className="font-medium"
                            data-oid="i3vqwsc"
                            variant={getDifficultyVariant(quiz.difficulty)}
                          >
                            {quiz.difficulty}
                          </Badge>
                          <Badge
                            className="capitalize"
                            data-oid="a__9hu3"
                            variant={getStatusVariant(quiz.status)}
                          >
                            {quiz.status}
                          </Badge>
                        </div>
                        <h3
                          className="line-clamp-2 font-semibold text-white"
                          data-oid="s366efj"
                        >
                          {quiz.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <CardContent className="space-y-4 p-4" data-oid="-pgjrx.">
                    {/* Category and date */}
                    <div
                      className="flex items-center justify-between"
                      data-oid="qz499s0"
                    >
                      <Badge
                        className="bg-slate-50 dark:bg-slate-800"
                        data-oid=":a1zq1l"
                        variant="outline"
                      >
                        {quiz.category}
                      </Badge>
                      <div
                        className="text-muted-foreground text-xs"
                        data-oid="4e3:u1g"
                      >
                        Created {formatDate(quiz.createdAt)}
                      </div>
                    </div>

                    {/* Stats */}
                    <div
                      className="grid grid-cols-3 gap-2 text-center"
                      data-oid="9r__hsf"
                    >
                      <div
                        className="rounded-md bg-slate-50 p-2 dark:bg-slate-800"
                        data-oid="4jlgna5"
                      >
                        <p
                          className="mb-1 text-muted-foreground text-xs"
                          data-oid="ysh:d_l"
                        >
                          Players
                        </p>
                        <p className="font-medium" data-oid="0fcrkry">
                          {quiz.players}
                        </p>
                      </div>
                      <div
                        className="rounded-md bg-slate-50 p-2 dark:bg-slate-800"
                        data-oid="h.n5po6"
                      >
                        <p
                          className="mb-1 text-muted-foreground text-xs"
                          data-oid="ln1i4wc"
                        >
                          Completion
                        </p>
                        <p className="font-medium" data-oid="mh266y0">
                          {quiz.stats.completionRate}%
                        </p>
                      </div>
                      <div
                        className="rounded-md bg-slate-50 p-2 dark:bg-slate-800"
                        data-oid="vplw4wk"
                      >
                        <p
                          className="mb-1 text-muted-foreground text-xs"
                          data-oid="b_6y0_m"
                        >
                          Revenue
                        </p>
                        <p
                          className="font-medium text-green-600"
                          data-oid="m8uoi8c"
                        >
                          ${quiz.stats.revenue.toFixed(0)}
                        </p>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    {quiz.status !== "draft" && (
                      <div
                        className="flex items-center justify-between"
                        data-oid="52m0vx0"
                      >
                        <div
                          className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                          data-oid="vf253zi"
                        >
                          <Users className="h-3.5 w-3.5" data-oid="r5ltqcb" />
                          <span data-oid="gaku:kj">
                            {quiz.players} / {quiz.maxPlayers}
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
                          data-oid="nhlqzf2"
                          showValue={true}
                          size={36}
                          strokeWidth={3}
                          value={calculateProgress(
                            quiz.players,
                            quiz.maxPlayers
                          )}
                          valueSize={10}
                        />
                      </div>
                    )}
                  </CardContent>

                  <CardFooter
                    className="flex justify-between px-4 pt-0 pb-4"
                    data-oid="mwazbsy"
                  >
                    <Button
                      asChild
                      data-oid="9_tu5e1"
                      size="sm"
                      variant="outline"
                    >
                      <Link
                        className="flex items-center gap-1"
                        data-oid="n9lzg:g"
                        href={`/my-quizzes/${quiz.id}`}
                      >
                        <Eye className="h-3.5 w-3.5" data-oid=":9xphfp" />
                        <span data-oid="ny7dvqo">View</span>
                      </Link>
                    </Button>
                    <DropdownMenu data-oid=":eop5y4">
                      <DropdownMenuTrigger asChild data-oid="9qsuezc">
                        <Button
                          className="h-8 w-8"
                          data-oid="gkn1k5u"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal
                            className="h-4 w-4"
                            data-oid="jr9pvs8"
                          />

                          <span className="sr-only" data-oid="4ng:66v">
                            Actions
                          </span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" data-oid="gh78ije">
                        <DropdownMenuItem data-oid="m5:zvdz">
                          <Edit className="mr-2 h-4 w-4" data-oid="1eex3iv" />
                          <span data-oid=":1s1f:2">Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem data-oid="j_7nmcz">
                          <BarChart3
                            className="mr-2 h-4 w-4"
                            data-oid="s_ewaa."
                          />

                          <span data-oid=".p_6kqh">Analytics</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem data-oid="s_-kzme">
                          <Share2 className="mr-2 h-4 w-4" data-oid="r9-2nxn" />
                          <span data-oid="k0dq6zq">Share</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator data-oid="7yt84pv" />
                        <DropdownMenuItem
                          className="text-destructive focus:text-destructive"
                          data-oid="lk8j476"
                        >
                          <Trash2 className="mr-2 h-4 w-4" data-oid="vo.6dbg" />
                          <span data-oid="fpu:37h">Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div className="space-y-4" data-oid="8sm4pw7">
              {filteredQuizzes.map((quiz) => (
                <Card
                  className={cn(
                    "overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-600",
                    quiz.status === "draft" && "border-dashed"
                  )}
                  data-oid="5ch.gsu"
                  key={quiz.id}
                >
                  <div className="flex flex-col sm:flex-row" data-oid="bmy5:h6">
                    {/* Image */}
                    <div
                      className="relative h-48 sm:h-auto sm:w-48 md:w-64"
                      data-oid="3ae:zfa"
                    >
                      <Image
                        alt={quiz.title}
                        className="h-full w-full object-cover"
                        data-oid="dpfdz5w"
                        height={350}
                        src={quiz.image || "/placeholder.svg"}
                        width={600}
                      />

                      <Badge
                        className="absolute top-2 left-2 font-medium"
                        data-oid="qozwj86"
                        variant={getDifficultyVariant(quiz.difficulty)}
                      >
                        {quiz.difficulty}
                      </Badge>
                      <Badge
                        className="absolute top-2 right-2 capitalize"
                        data-oid="ml_11d5"
                        variant={getStatusVariant(quiz.status)}
                      >
                        {quiz.status}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div
                      className="flex flex-1 flex-col p-4"
                      data-oid="wk57_3s"
                    >
                      <div
                        className="mb-2 flex items-center justify-between"
                        data-oid="zsntegv"
                      >
                        <Badge
                          className="bg-slate-50 dark:bg-slate-800"
                          data-oid="db80b25"
                          variant="outline"
                        >
                          {quiz.category}
                        </Badge>
                        <div
                          className="flex items-center gap-1 text-muted-foreground text-sm"
                          data-oid="bq3a1p7"
                        >
                          <Clock className="h-3.5 w-3.5" data-oid="8bf7-a9" />
                          <span data-oid="26qjlsk">{quiz.timeLimit} min</span>
                        </div>
                      </div>

                      <h3
                        className="mb-2 font-semibold text-xl"
                        data-oid="v8.oz3_"
                      >
                        {quiz.title}
                      </h3>

                      <div
                        className="mb-4 flex items-center gap-4 text-muted-foreground text-sm"
                        data-oid="r2cq1pr"
                      >
                        <div data-oid="9hr1a2q">
                          Created: {formatDate(quiz.createdAt)}
                        </div>
                        <div data-oid="-du3xj1">
                          Updated: {formatDate(quiz.lastUpdated)}
                        </div>
                      </div>

                      <div
                        className="mb-4 grid grid-cols-4 gap-4"
                        data-oid="n5of1sd"
                      >
                        <div className="space-y-1" data-oid=":qxk420">
                          <div
                            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                            data-oid="pi54:u."
                          >
                            <Users className="h-3.5 w-3.5" data-oid="1qw77a2" />
                            <span data-oid="sarzv57">Players</span>
                          </div>
                          <p className="font-medium" data-oid="_xkf4so">
                            {quiz.players} / {quiz.maxPlayers}
                          </p>
                        </div>
                        <div className="space-y-1" data-oid="gwrc7g_">
                          <div
                            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                            data-oid="mixz0pc"
                          >
                            <BarChart3
                              className="h-3.5 w-3.5"
                              data-oid="39bxyn5"
                            />

                            <span data-oid="6tx4ynx">Completion</span>
                          </div>
                          <p className="font-medium" data-oid="c.dbiuu">
                            {quiz.stats.completionRate}%
                          </p>
                        </div>
                        <div className="space-y-1" data-oid="zgmhdzv">
                          <div
                            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400"
                            data-oid=":djlq6i"
                          >
                            <BarChart3
                              className="h-3.5 w-3.5"
                              data-oid="lwr.zcd"
                            />

                            <span data-oid="h..g7r7">Avg. Score</span>
                          </div>
                          <p className="font-medium" data-oid="o4t4fwz">
                            {quiz.stats.averageScore}%
                          </p>
                        </div>
                        <div className="space-y-1" data-oid="x6:u.l.">
                          <div
                            className="flex items-center gap-1.5 text-green-600"
                            data-oid="8yjrxvl"
                          >
                            <DollarSign
                              className="h-3.5 w-3.5"
                              data-oid="hng0me2"
                            />

                            <span data-oid="ch2fn-i">Revenue</span>
                          </div>
                          <p
                            className="font-medium text-green-600"
                            data-oid="onzdj:_"
                          >
                            ${quiz.stats.revenue.toFixed(0)}
                          </p>
                        </div>
                      </div>

                      {quiz.status !== "draft" && (
                        <div
                          className="mt-auto flex items-center justify-between"
                          data-oid="skherdp"
                        >
                          <div
                            className="flex items-center gap-2"
                            data-oid="8.js3ld"
                          >
                            <span
                              className="text-slate-600 text-sm dark:text-slate-400"
                              data-oid="ipvwt-3"
                            >
                              {quiz.spotsLeft} spots left
                            </span>
                            <CircularProgress
                              color={
                                quiz.spotsLeft <= 20
                                  ? "hsl(var(--destructive))"
                                  : quiz.spotsLeft <= 50
                                    ? "hsl(var(--warning))"
                                    : "hsl(var(--primary))"
                              }
                              data-oid="vtb23.n"
                              showValue={true}
                              size={36}
                              strokeWidth={3}
                              value={calculateProgress(
                                quiz.players,
                                quiz.maxPlayers
                              )}
                              valueSize={10}
                            />
                          </div>

                          <div
                            className="flex items-center gap-2"
                            data-oid="yb2r.9g"
                          >
                            <Button
                              asChild
                              data-oid="nttygec"
                              size="sm"
                              variant="outline"
                            >
                              <Link
                                data-oid="gatuk2b"
                                href={`/my-quizzes/${quiz.id}`}
                              >
                                <Eye
                                  className="mr-1 h-3.5 w-3.5"
                                  data-oid="8mm-yb0"
                                />
                                View
                              </Link>
                            </Button>
                            <Button
                              data-oid="gqb.nli"
                              size="sm"
                              variant="outline"
                            >
                              <Edit
                                className="mr-1 h-3.5 w-3.5"
                                data-oid="_qwvfdq"
                              />
                              Edit
                            </Button>
                            <Button
                              data-oid="64yv_nj"
                              size="sm"
                              variant="outline"
                            >
                              <BarChart3
                                className="mr-1 h-3.5 w-3.5"
                                data-oid="dk.zczl"
                              />
                              Analytics
                            </Button>
                            <DropdownMenu data-oid="o-361rz">
                              <DropdownMenuTrigger asChild data-oid="xcpbrxz">
                                <Button
                                  className="h-8 w-8"
                                  data-oid="9mfr.rf"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal
                                    className="h-4 w-4"
                                    data-oid="38_wk3b"
                                  />

                                  <span className="sr-only" data-oid="y87g3lf">
                                    More actions
                                  </span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                data-oid="6o752ph"
                              >
                                <DropdownMenuItem data-oid="2v5io7z">
                                  <Share2
                                    className="mr-2 h-4 w-4"
                                    data-oid="v1ldty8"
                                  />

                                  <span data-oid="ypvv4d2">Share</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator data-oid="r5aorf7" />
                                <DropdownMenuItem
                                  className="text-destructive focus:text-destructive"
                                  data-oid="e4pii4i"
                                >
                                  <Trash2
                                    className="mr-2 h-4 w-4"
                                    data-oid="59j8r-c"
                                  />

                                  <span data-oid="037scum">Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      )}

                      {quiz.status === "draft" && (
                        <div
                          className="mt-auto flex items-center justify-end gap-2"
                          data-oid="qeo8.4n"
                        >
                          <Button
                            asChild
                            data-oid="qycjguz"
                            size="sm"
                            variant="outline"
                          >
                            <Link
                              data-oid="wr44:6s"
                              href={`/create/editor?id=${quiz.id}`}
                            >
                              <Edit
                                className="mr-1 h-3.5 w-3.5"
                                data-oid="3vkil6a"
                              />
                              Continue Editing
                            </Link>
                          </Button>
                          <Button data-oid="3u_hhor" size="sm">
                            Publish
                          </Button>
                          <DropdownMenu data-oid="xltgyam">
                            <DropdownMenuTrigger asChild data-oid="tfbye0p">
                              <Button
                                className="h-8 w-8"
                                data-oid="_638zl:"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal
                                  className="h-4 w-4"
                                  data-oid="msmxb49"
                                />

                                <span className="sr-only" data-oid="bw-a.t3">
                                  More actions
                                </span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" data-oid="yr31q0h">
                              <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                data-oid="8qtj5v9"
                              >
                                <Trash2
                                  className="mr-2 h-4 w-4"
                                  data-oid="rgp9byz"
                                />

                                <span data-oid="6_svp67">Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
