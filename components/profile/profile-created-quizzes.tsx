"use client";

import { format } from "date-fns";
import {
  AlertTriangle,
  Award,
  BarChart2,
  Calendar,
  Edit,
  Eye,
  Filter,
  Grid,
  List,
  MoreHorizontal,
  Search,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";
import { SmartImage } from "@/components/ui/smart-image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import type { CreatedQuiz, User } from "@/lib/data/users";

interface ProfileCreatedQuizzesProps {
  user: User;
}

export function ProfileCreatedQuizzes({ user }: ProfileCreatedQuizzesProps) {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );
  const [selectedSort, setSelectedSort] = useState<string>("newest");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [quizToDelete, setQuizToDelete] = useState<CreatedQuiz | null>(null);
  const [previewQuiz, setPreviewQuiz] = useState<CreatedQuiz | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  const createdQuizzes = user.createdQuizzes || [];

  // Filter quizzes based on search query, category, and difficulty
  const filteredQuizzes = createdQuizzes.filter((quiz) => {
    const matchesSearch =
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? quiz.category === selectedCategory
      : true;
    const matchesDifficulty = selectedDifficulty
      ? quiz.difficulty === selectedDifficulty
      : true;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  // Sort quizzes based on selected sort option
  const sortedQuizzes = [...filteredQuizzes].sort((a, b) => {
    switch (selectedSort) {
      case "newest":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

      case "oldest":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );

      case "most-played":
        return b.plays - a.plays;
      case "highest-rated":
        return b.rating - a.rating;
      case "highest-score":
        return b.averageScore - a.averageScore;
      default:
        return 0;
    }
  });

  // Get unique categories for filter
  const categories = Array.from(
    new Set(createdQuizzes.map((quiz) => quiz.category))
  );

  // Count tournaments
  const tournamentCount = createdQuizzes.filter(
    (quiz) => quiz.isTournament
  ).length;

  // Calculate total plays
  const totalPlays = createdQuizzes.reduce((sum, quiz) => sum + quiz.plays, 0);

  // Calculate average rating
  const averageRating =
    createdQuizzes.length > 0
      ? createdQuizzes.reduce((sum, quiz) => sum + quiz.rating, 0) /
        createdQuizzes.length
      : 0;

  // Action handlers
  const handleEditQuiz = (quiz: CreatedQuiz) => {
    router.push(`/create/editor?id=${quiz.id}`);
  };

  const handlePreviewQuiz = (quiz: CreatedQuiz) => {
    setPreviewQuiz(quiz);
    setPreviewOpen(true);
  };

  const handleViewStatistics = (quiz: CreatedQuiz) => {
    router.push(`/my-quizzes/${quiz.id}/statistics`);
  };

  const handleDeleteQuiz = (quiz: CreatedQuiz) => {
    setQuizToDelete(quiz);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteQuiz = () => {
    if (!quizToDelete) return;

    // In a real app, you would call an API to delete the quiz
    // For now, we'll just show a toast message
    toast({
      title: "Quiz deleted",
      description: `"${quizToDelete.title}" has been deleted successfully.`,
    });

    setDeleteDialogOpen(false);
    setQuizToDelete(null);
  };

  return (
    <div className="space-y-6" data-oid="l9:cja9">
      {/* Summary Stats */}
      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
        data-oid="o1rk8-i"
      >
        <Card data-oid=".3ly6ss">
          <CardContent
            className="flex flex-col items-center justify-center p-6"
            data-oid="581fz92"
          >
            <div
              className="mb-2 rounded-full bg-indigo-500 p-3"
              data-oid="pf8elqe"
            >
              <Grid className="h-6 w-6 text-neutral-50" data-oid="x58p78b" />
            </div>
            <div className="font-bold text-2xl" data-oid="s8qcdqs">
              {createdQuizzes.length}
            </div>
            <p className="text-muted-foreground text-sm" data-oid="iowo-p7">
              Total Quizzes
            </p>
          </CardContent>
        </Card>

        <Card data-oid="qvp-ue9">
          <CardContent
            className="flex flex-col items-center justify-center p-6"
            data-oid="sqc14n."
          >
            <div
              className="mb-2 rounded-full bg-pink-500 p-3"
              data-oid="clyi15y"
            >
              <Users className="h-6 w-6 text-neutral-50" data-oid="qg96fvx" />
            </div>
            <div className="font-bold text-2xl" data-oid="1ak4uda">
              {totalPlays.toLocaleString()}
            </div>
            <p className="text-muted-foreground text-sm" data-oid="390cp8q">
              Total Plays
            </p>
          </CardContent>
        </Card>

        <Card data-oid="oyt.mio">
          <CardContent
            className="flex flex-col items-center justify-center p-6"
            data-oid="bvaf1um"
          >
            <div
              className="mb-2 rounded-full bg-green-500 p-3"
              data-oid="50.sabl"
            >
              <Trophy className="h-6 w-6 text-neutral-50" data-oid="-2wv:sy" />
            </div>
            <div className="font-bold text-2xl" data-oid="dt53sa1">
              {tournamentCount}
            </div>
            <p className="text-muted-foreground text-sm" data-oid="tabcw2.">
              Tournaments
            </p>
          </CardContent>
        </Card>

        <Card data-oid="r9emz6v">
          <CardContent
            className="flex flex-col items-center justify-center p-6"
            data-oid="7kwts0p"
          >
            <div
              className="mb-2 rounded-full bg-blue-500 p-3"
              data-oid="3-ekwie"
            >
              <Star className="h-6 w-6 text-neutral-50" data-oid="flut_3c" />
            </div>
            <div className="font-bold text-2xl" data-oid="jii5aav">
              {averageRating.toFixed(1)}
            </div>
            <p className="text-muted-foreground text-sm" data-oid="n.gpd66">
              Average Rating
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div
        className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"
        data-oid="ch34x2_"
      >
        <div className="relative w-full md:w-64" data-oid="1rn14ww">
          <Search
            className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground"
            data-oid=":vjqr18"
          />

          <Input
            className="pl-8"
            data-oid="jx1yq4f"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search quizzes..."
            type="search"
            value={searchQuery}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2" data-oid="8hi9x78">
          <DropdownMenu data-oid="r-9po2c">
            <DropdownMenuTrigger asChild data-oid="k7_xsig">
              <Button data-oid="q-fcwo1" size="sm" variant="outline">
                <Filter className="mr-2 h-4 w-4" data-oid="dk5fgw." />
                Category
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-oid="y66.z1l">
              <DropdownMenuItem
                data-oid="tuho94r"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </DropdownMenuItem>
              <DropdownMenuSeparator data-oid="va1g1k9" />
              {categories.map((category) => (
                <DropdownMenuItem
                  data-oid="8ng6kp2"
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu data-oid="l1_f2rf">
            <DropdownMenuTrigger asChild data-oid="94mbmcf">
              <Button data-oid="rhro8rf" size="sm" variant="outline">
                <Filter className="mr-2 h-4 w-4" data-oid="l75594y" />
                Difficulty
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-oid="j.lruhd">
              <DropdownMenuItem
                data-oid="1c:civo"
                onClick={() => setSelectedDifficulty(null)}
              >
                All Difficulties
              </DropdownMenuItem>
              <DropdownMenuSeparator data-oid="xq.x8aj" />
              <DropdownMenuItem
                data-oid=".w8ryi5"
                onClick={() => setSelectedDifficulty("easy")}
              >
                Easy
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="mxandlm"
                onClick={() => setSelectedDifficulty("medium")}
              >
                Medium
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid=":.3h-dj"
                onClick={() => setSelectedDifficulty("hard")}
              >
                Hard
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu data-oid="96k5rui">
            <DropdownMenuTrigger asChild data-oid="6vij-w0">
              <Button data-oid="nui6cxw" size="sm" variant="outline">
                <Filter className="mr-2 h-4 w-4" data-oid="c4h3k.v" />
                Sort By
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-oid="w8s:.xh">
              <DropdownMenuItem
                data-oid="0pci__v"
                onClick={() => setSelectedSort("newest")}
              >
                Newest First
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="myl_z74"
                onClick={() => setSelectedSort("oldest")}
              >
                Oldest First
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid=":913f_b"
                onClick={() => setSelectedSort("most-played")}
              >
                Most Played
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="zjde:gm"
                onClick={() => setSelectedSort("highest-rated")}
              >
                Highest Rated
              </DropdownMenuItem>
              <DropdownMenuItem
                data-oid="e-0pi_x"
                onClick={() => setSelectedSort("highest-score")}
              >
                Highest Average Score
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div
            className="flex items-center rounded-md border bg-background p-1"
            data-oid="mkpq_18"
          >
            <Button
              className="h-8 w-8 p-0"
              data-oid="97faj-m"
              onClick={() => setViewMode("grid")}
              size="sm"
              variant={viewMode === "grid" ? "secondary" : "ghost"}
            >
              <Grid className="h-4 w-4" data-oid="wpq:8vg" />
              <span className="sr-only" data-oid="25l:f8o">
                Grid view
              </span>
            </Button>
            <Button
              className="h-8 w-8 p-0"
              data-oid="cy:3_w6"
              onClick={() => setViewMode("list")}
              size="sm"
              variant={viewMode === "list" ? "secondary" : "ghost"}
            >
              <List className="h-4 w-4" data-oid="detcxvk" />
              <span className="sr-only" data-oid="kh5e9rd">
                List view
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs for All/Regular/Tournament */}
      <Tabs data-oid="o9vfmq3" defaultValue="all">
        <TabsList data-oid="qnlnnr2">
          <TabsTrigger data-oid="qk_c:el" value="all">
            All Quizzes
          </TabsTrigger>
          <TabsTrigger data-oid="n_9xgz2" value="regular">
            Regular Quizzes
          </TabsTrigger>
          <TabsTrigger data-oid="7p3tpjo" value="tournament">
            Tournaments
          </TabsTrigger>
        </TabsList>

        <TabsContent className="mt-4" data-oid="i-zkgrm" value="all">
          {viewMode === "grid" ? (
            <div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
              data-oid="r2ce97:"
            >
              {sortedQuizzes.map((quiz) => (
                <QuizCard
                  data-oid="cyaqhkt"
                  key={quiz.id}
                  onDelete={() => handleDeleteQuiz(quiz)}
                  onEdit={() => handleEditQuiz(quiz)}
                  onPreview={() => handlePreviewQuiz(quiz)}
                  onViewStats={() => handleViewStatistics(quiz)}
                  quiz={quiz}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4" data-oid="-dsn9jd">
              {sortedQuizzes.map((quiz) => (
                <QuizListItem
                  data-oid="ngow1h1"
                  key={quiz.id}
                  onDelete={() => handleDeleteQuiz(quiz)}
                  onEdit={() => handleEditQuiz(quiz)}
                  onPreview={() => handlePreviewQuiz(quiz)}
                  onViewStats={() => handleViewStatistics(quiz)}
                  quiz={quiz}
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent className="mt-4" data-oid="r8q6bkv" value="regular">
          {viewMode === "grid" ? (
            <div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              data-oid="7chh5ty"
            >
              {sortedQuizzes
                .filter((q) => !q.isTournament)
                .map((quiz) => (
                  <QuizCard
                    data-oid="3y59mgj"
                    key={quiz.id}
                    onDelete={() => handleDeleteQuiz(quiz)}
                    onEdit={() => handleEditQuiz(quiz)}
                    onPreview={() => handlePreviewQuiz(quiz)}
                    onViewStats={() => handleViewStatistics(quiz)}
                    quiz={quiz}
                  />
                ))}
            </div>
          ) : (
            <div className="space-y-4" data-oid="11il6p6">
              {sortedQuizzes
                .filter((q) => !q.isTournament)
                .map((quiz) => (
                  <QuizListItem
                    data-oid="yvrcmln"
                    key={quiz.id}
                    onDelete={() => handleDeleteQuiz(quiz)}
                    onEdit={() => handleEditQuiz(quiz)}
                    onPreview={() => handlePreviewQuiz(quiz)}
                    onViewStats={() => handleViewStatistics(quiz)}
                    quiz={quiz}
                  />
                ))}
            </div>
          )}
        </TabsContent>

        <TabsContent className="mt-4" data-oid="n.8vwsy" value="tournament">
          {viewMode === "grid" ? (
            <div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              data-oid="-z045y."
            >
              {sortedQuizzes
                .filter((q) => q.isTournament)
                .map((quiz) => (
                  <QuizCard
                    data-oid="bupo3hi"
                    key={quiz.id}
                    onDelete={() => handleDeleteQuiz(quiz)}
                    onEdit={() => handleEditQuiz(quiz)}
                    onPreview={() => handlePreviewQuiz(quiz)}
                    onViewStats={() => handleViewStatistics(quiz)}
                    quiz={quiz}
                  />
                ))}
            </div>
          ) : (
            <div className="space-y-4" data-oid="u2e4x08">
              {sortedQuizzes
                .filter((q) => q.isTournament)
                .map((quiz) => (
                  <QuizListItem
                    data-oid="5s3eokp"
                    key={quiz.id}
                    onDelete={() => handleDeleteQuiz(quiz)}
                    onEdit={() => handleEditQuiz(quiz)}
                    onPreview={() => handlePreviewQuiz(quiz)}
                    onViewStats={() => handleViewStatistics(quiz)}
                    quiz={quiz}
                  />
                ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Empty State */}
      {sortedQuizzes.length === 0 && (
        <div
          className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center"
          data-oid="laqmr3s"
        >
          <div
            className="mb-3 rounded-full bg-primary/10 p-3"
            data-oid=":.fpx1u"
          >
            <Search className="h-6 w-6 text-primary" data-oid="6oqeu8z" />
          </div>
          <h3 className="mb-1 font-medium text-lg" data-oid="a_-501i">
            No quizzes found
          </h3>
          <p className="text-muted-foreground text-sm" data-oid="18krlhw">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Delete Quiz Dialog */}
      <Dialog
        data-oid="4t1p64i"
        onOpenChange={setDeleteDialogOpen}
        open={deleteDialogOpen}
      >
        <DialogContent data-oid="dpnytkz">
          <DialogHeader data-oid="3fuibtb">
            <DialogTitle className="flex items-center gap-2" data-oid="mz.yybh">
              <AlertTriangle
                className="h-5 w-5 text-destructive"
                data-oid="2zak5al"
              />
              Delete Quiz
            </DialogTitle>
            <DialogDescription data-oid="js.f--.">
              Are you sure you want to delete &quot;{quizToDelete?.title}&quot;?
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter data-oid="0.52qfo">
            <Button
              data-oid="b:._sh:"
              onClick={() => setDeleteDialogOpen(false)}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              data-oid="w4gdldi"
              onClick={confirmDeleteQuiz}
              variant="destructive"
            >
              Delete Quiz
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Quiz Preview Dialog */}
      <Dialog
        data-oid="-9.c-ey"
        onOpenChange={setPreviewOpen}
        open={previewOpen}
      >
        <DialogContent className="sm:max-w-[800px]" data-oid="67621au">
          <DialogHeader data-oid="dq1wq.t">
            <DialogTitle data-oid="w8trvva">
              Quiz Preview: {previewQuiz?.title}
            </DialogTitle>
          </DialogHeader>
          {previewQuiz && (
            <div className="max-h-[70vh] overflow-y-auto" data-oid="i_nrazo">
              <div className="relative aspect-video w-full" data-oid="yrl:le_">
                <SmartImage
                  alt={previewQuiz.title}
                  className="rounded-md object-cover"
                  data-oid="k.syief"
                  fill
                  src={previewQuiz.image || undefined}
                  width={800}
                  height={450}
                />
              </div>

              <div className="mt-4 space-y-4" data-oid="reagr1c">
                <div data-oid="9f6jofd">
                  <h3 className="font-semibold text-lg" data-oid="bxfoqy0">
                    Description
                  </h3>
                  <p className="text-muted-foreground" data-oid="q0-17ux">
                    {previewQuiz.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2" data-oid="bcqmc7s">
                  <Badge
                    className="bg-background"
                    data-oid="yto3ff9"
                    variant="outline"
                  >
                    {previewQuiz.category}
                  </Badge>
                  <Badge
                    className={`
                      ${previewQuiz.difficulty === "easy" ? "border-green-500 bg-green-50 text-green-700" : previewQuiz.difficulty === "medium" ? "border-yellow-500 bg-yellow-50 text-yellow-700" : "border-red-500 bg-red-50 text-red-700"}
                    `}
                    data-oid="yhaehb3"
                    variant="outline"
                  >
                    {previewQuiz.difficulty.charAt(0).toUpperCase() +
                      previewQuiz.difficulty.slice(1)}
                  </Badge>
                  <Badge
                    className="bg-background"
                    data-oid="b21fccr"
                    variant="outline"
                  >
                    {previewQuiz.questions} Questions
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4" data-oid="paxwqex">
                  <Card data-oid=".2:yrbt">
                    <CardContent className="p-4" data-oid="9db70:f">
                      <div
                        className="flex items-center justify-between"
                        data-oid="-71jws8"
                      >
                        <span
                          className="font-medium text-sm"
                          data-oid="wnitk0:"
                        >
                          Total Plays
                        </span>
                        <span className="font-semibold" data-oid="sicpl.1">
                          {previewQuiz.plays.toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card data-oid="gxr4ers">
                    <CardContent className="p-4" data-oid="n-c66-r">
                      <div
                        className="flex items-center justify-between"
                        data-oid=".u4ol7z"
                      >
                        <span
                          className="font-medium text-sm"
                          data-oid="_6om-u1"
                        >
                          Average Score
                        </span>
                        <span className="font-semibold" data-oid="idclf1d">
                          {previewQuiz.averageScore}%
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card data-oid="733_qyg">
                    <CardContent className="p-4" data-oid="ypmd399">
                      <div
                        className="flex items-center justify-between"
                        data-oid="-:jawpv"
                      >
                        <span
                          className="font-medium text-sm"
                          data-oid="7f.:weg"
                        >
                          Rating
                        </span>
                        <span
                          className="flex items-center font-semibold"
                          data-oid="624h3av"
                        >
                          {previewQuiz.rating.toFixed(1)}
                          <Star
                            className="ml-1 h-4 w-4 text-amber-500"
                            data-oid="5xzrmfi"
                          />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card data-oid="8bjs-q:">
                    <CardContent className="p-4" data-oid="u2bxjho">
                      <div
                        className="flex items-center justify-between"
                        data-oid="yjti.tv"
                      >
                        <span
                          className="font-medium text-sm"
                          data-oid="l9ipppq"
                        >
                          Created
                        </span>
                        <span className="font-semibold" data-oid="d.hkd0y">
                          {format(
                            new Date(previewQuiz.createdAt),
                            "MMM d, yyyy"
                          )}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {previewQuiz.isTournament && previewQuiz.tournamentDetails && (
                  <Card
                    className="border-purple-200 bg-purple-50"
                    data-oid="umx-3-4"
                  >
                    <CardHeader className="pb-2" data-oid=".di11.a">
                      <h3
                        className="font-semibold text-base text-purple-800"
                        data-oid="0nr:oum"
                      >
                        Tournament Details
                      </h3>
                    </CardHeader>
                    <CardContent className="pt-0 pb-4" data-oid="914776a">
                      <div
                        className="grid grid-cols-2 gap-2 text-sm"
                        data-oid="lb0bc4v"
                      >
                        <div data-oid="2xwtal-">
                          <span
                            className="font-medium text-purple-700"
                            data-oid="f.k_uju"
                          >
                            Status:
                          </span>{" "}
                          <span
                            className="text-purple-900 capitalize"
                            data-oid="5ak-ls:"
                          >
                            {previewQuiz.tournamentDetails.status}
                          </span>
                        </div>
                        <div data-oid="qkovd0g">
                          <span
                            className="font-medium text-purple-700"
                            data-oid="u60ldpa"
                          >
                            Participants:
                          </span>{" "}
                          <span className="text-purple-900" data-oid="8h6gdef">
                            {previewQuiz.tournamentDetails.participants}
                          </span>
                        </div>
                        <div data-oid="qm2t00w">
                          <span
                            className="font-medium text-purple-700"
                            data-oid="ch5.t2z"
                          >
                            Start Date:
                          </span>{" "}
                          <span className="text-purple-900" data-oid="39xilrx">
                            {format(
                              new Date(previewQuiz.tournamentDetails.startDate),
                              "MMM d, yyyy"
                            )}
                          </span>
                        </div>
                        <div data-oid="5-0rf1k">
                          <span
                            className="font-medium text-purple-700"
                            data-oid="zes0jgo"
                          >
                            End Date:
                          </span>{" "}
                          <span className="text-purple-900" data-oid="e:qacpo">
                            {format(
                              new Date(previewQuiz.tournamentDetails.endDate),
                              "MMM d, yyyy"
                            )}
                          </span>
                        </div>
                        <div className="col-span-2" data-oid="-jdbb.x">
                          <span
                            className="font-medium text-purple-700"
                            data-oid="4.rgjii"
                          >
                            Prize:
                          </span>{" "}
                          <span className="text-purple-900" data-oid="penb-wu">
                            {previewQuiz.tournamentDetails.prize}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
          <DialogFooter data-oid="n38omul">
            <Button
              data-oid=".yi9ztm"
              onClick={() => setPreviewOpen(false)}
              variant="outline"
            >
              Close
            </Button>
            <Button
              data-oid="p9t5pm9"
              onClick={() => {
                setPreviewOpen(false);
                router.push(`/quiz/${previewQuiz?.id}`);
              }}
            >
              View Full Quiz
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface QuizCardProps {
  quiz: CreatedQuiz;
  onEdit: () => void;
  onPreview: () => void;
  onViewStats: () => void;
  onDelete: () => void;
}

function QuizCard({
  quiz,
  onEdit,
  onPreview,
  onViewStats,
  onDelete,
}: QuizCardProps) {
  return (
    <Card
      className="overflow-hidden transition-all hover:shadow-md"
      data-oid="1y0bzfp"
    >
      <div className="relative aspect-video" data-oid="6dxp8l1">
        <SmartImage
          alt={quiz.title}
          className="object-cover"
          data-oid="24h27uo"
          fill
          height={350}
          src={quiz.image || undefined}
          width={600}
        />

        {quiz.featured && (
          <div className="absolute top-2 left-2" data-oid="ciy2t52">
            <Badge
              className="bg-yellow-500/90 text-white hover:bg-yellow-500/90"
              data-oid="ljuvpiu"
              variant="secondary"
            >
              <Star className="mr-1 h-3 w-3" data-oid="dux6o.y" /> Featured
            </Badge>
          </div>
        )}
        {quiz.isTournament && (
          <div className="absolute top-2 right-2" data-oid="4c2kr2r">
            <Badge
              className="bg-purple-500/90 text-white hover:bg-purple-500/90"
              data-oid="n7hq:gr"
              variant="secondary"
            >
              <Trophy className="mr-1 h-3 w-3" data-oid="dz4czzy" /> Tournament
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2" data-oid="wouchwf">
        <div className="flex items-start justify-between" data-oid="ne7-uyi">
          <h3 className="line-clamp-1 font-semibold" data-oid="iq70nfs">
            {quiz.title}
          </h3>
          <DropdownMenu data-oid="2r003qb">
            <DropdownMenuTrigger asChild data-oid="dwaz8w3">
              <Button
                className="h-8 w-8 p-0"
                data-oid="k497pup"
                size="sm"
                variant="ghost"
              >
                <MoreHorizontal className="h-4 w-4" data-oid="u7f1:kt" />
                <span className="sr-only" data-oid="0.cgu9b">
                  Open menu
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-oid="_:kqi9m">
              <DropdownMenuLabel data-oid="zalnskh">Actions</DropdownMenuLabel>
              <DropdownMenuItem data-oid="c8cd09v" onClick={onEdit}>
                <Edit className="mr-2 h-4 w-4" data-oid="64aduvt" /> Edit Quiz
              </DropdownMenuItem>
              <DropdownMenuItem data-oid="7m5tb:f" onClick={onPreview}>
                <Eye className="mr-2 h-4 w-4" data-oid="3u9k_k_" /> Preview
              </DropdownMenuItem>
              <DropdownMenuItem data-oid="1xj66hm" onClick={onViewStats}>
                <BarChart2 className="mr-2 h-4 w-4" data-oid="2l7ysiu" /> View
                Statistics
              </DropdownMenuItem>
              <DropdownMenuSeparator data-oid=".8c707s" />
              <DropdownMenuItem
                className="text-destructive"
                data-oid="w10jip9"
                onClick={onDelete}
              >
                Delete Quiz
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="pb-2" data-oid="aq2tbhl">
        <div
          className="mb-2 flex items-center justify-between text-sm"
          data-oid="iz9pi7f"
        >
          <Badge className="bg-background" data-oid="v:0qebg" variant="outline">
            {quiz.category}
          </Badge>
          <Badge
            className={`
              ${quiz.difficulty === "easy" ? "border-green-500 bg-green-50 text-green-700" : quiz.difficulty === "medium" ? "border-yellow-500 bg-yellow-50 text-yellow-700" : "border-red-500 bg-red-50 text-red-700"}
            `}
            data-oid="wuc9b2b"
            variant="outline"
          >
            {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm" data-oid="q0rsb_2">
          <div className="flex items-center" data-oid="yk1p1hy">
            <Users
              className="mr-1 h-3.5 w-3.5 text-muted-foreground"
              data-oid="j55q2k8"
            />

            <span data-oid="x.40i-6">{quiz.plays.toLocaleString()} plays</span>
          </div>
          <div className="flex items-center" data-oid="u4px467">
            <Star
              className="mr-1 h-3.5 w-3.5 text-amber-500"
              data-oid="7ce55dh"
            />

            <span data-oid="9:mcznu">{quiz.rating.toFixed(1)} rating</span>
          </div>
          <div className="flex items-center" data-oid="k0nppxz">
            <Award
              className="mr-1 h-3.5 w-3.5 text-muted-foreground"
              data-oid="9j0e5b-"
            />

            <span data-oid="gnl8_fk">{quiz.averageScore}% avg. score</span>
          </div>
          <div className="flex items-center" data-oid="x0ncwqp">
            <Calendar
              className="mr-1 h-3.5 w-3.5 text-muted-foreground"
              data-oid="ee54zda"
            />

            <span data-oid="p:d7h9z">
              {format(new Date(quiz.createdAt), "MMM d, yyyy")}
            </span>
          </div>
        </div>

        {quiz.isTournament && quiz.tournamentDetails && (
          <div
            className="mt-3 rounded-md bg-purple-50 p-2 text-xs"
            data-oid="fjqkdr9"
          >
            <div className="font-medium text-purple-800" data-oid="c3-5.fz">
              Tournament Status:{" "}
              {quiz.tournamentDetails.status.charAt(0).toUpperCase() +
                quiz.tournamentDetails.status.slice(1)}
            </div>
            <div
              className="mt-1 flex items-center justify-between"
              data-oid="lidkhkf"
            >
              <span className="text-purple-700" data-oid="4b.7kt1">
                {quiz.tournamentDetails.participants} participants
              </span>
              <span className="font-medium text-purple-800" data-oid="6zrmbtz">
                {quiz.tournamentDetails.prize}
              </span>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2" data-oid="vd.qfv.">
        <div className="flex w-full gap-2" data-oid="u_60ihl">
          <Button
            className="flex-1"
            data-oid="sne1wlb"
            onClick={onEdit}
            size="sm"
            variant="outline"
          >
            <Edit className="mr-2 h-3.5 w-3.5" data-oid="uq5mh_7" />
            Edit
          </Button>
          <Button
            className="flex-1"
            data-oid="pmuy:kj"
            onClick={onViewStats}
            size="sm"
            variant="default"
          >
            <BarChart2 className="mr-2 h-3.5 w-3.5" data-oid="u5las-b" />
            Statistics
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

interface QuizListItemProps {
  quiz: CreatedQuiz;
  onEdit: () => void;
  onPreview: () => void;
  onViewStats: () => void;
  onDelete: () => void;
}

function QuizListItem({
  quiz,
  onEdit,
  onPreview,
  onViewStats,
  onDelete,
}: QuizListItemProps) {
  return (
    <Card data-oid="7pr4lxo">
      <div className="flex flex-col sm:flex-row" data-oid="u6ho595">
        <div
          className="relative h-40 w-full sm:h-auto sm:w-48"
          data-oid=".bum7pu"
        >
          <SmartImage
            alt={quiz.title}
            className="object-cover sm:rounded-l-lg"
            data-oid="yq64sam"
            fill
            height={350}
            src={quiz.image || undefined}
            width={600}
          />

          {quiz.featured && (
            <div className="absolute top-2 left-2" data-oid="d9l6wia">
              <Badge
                className="bg-yellow-500/90 text-white hover:bg-yellow-500/90"
                data-oid="xff8ey_"
                variant="secondary"
              >
                <Star className="mr-1 h-3 w-3" data-oid="3gx.1jg" /> Featured
              </Badge>
            </div>
          )}
          {quiz.isTournament && (
            <div className="absolute top-2 right-2" data-oid="og.ml.f">
              <Badge
                className="bg-purple-500/90 text-white hover:bg-purple-500/90"
                data-oid="4g._6:1"
                variant="secondary"
              >
                <Trophy className="mr-1 h-3 w-3" data-oid="xzso--w" />{" "}
                Tournament
              </Badge>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-4" data-oid="coydvig">
          <div
            className="mb-2 flex items-start justify-between"
            data-oid="xf60n7r"
          >
            <div data-oid="2beea_b">
              <h3 className="font-semibold" data-oid="7xeroy2">
                {quiz.title}
              </h3>
              <p
                className="line-clamp-1 text-muted-foreground text-sm"
                data-oid="zzem__3"
              >
                {quiz.description}
              </p>
            </div>
            <DropdownMenu data-oid="jpnq7z4">
              <DropdownMenuTrigger asChild data-oid="efvz11b">
                <Button
                  className="h-8 w-8 p-0"
                  data-oid="yb0qftd"
                  size="sm"
                  variant="ghost"
                >
                  <MoreHorizontal className="h-4 w-4" data-oid="kf_ta1:" />
                  <span className="sr-only" data-oid="::gl84v">
                    Open menu
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" data-oid="k5a.chy">
                <DropdownMenuLabel data-oid="veofclt">
                  Actions
                </DropdownMenuLabel>
                <DropdownMenuItem data-oid="n51c4.r" onClick={onEdit}>
                  <Edit className="mr-2 h-4 w-4" data-oid="r1:gf-y" /> Edit Quiz
                </DropdownMenuItem>
                <DropdownMenuItem data-oid="4i67qs:" onClick={onPreview}>
                  <Eye className="mr-2 h-4 w-4" data-oid="a_872mn" /> Preview
                </DropdownMenuItem>
                <DropdownMenuItem data-oid="cc6l048" onClick={onViewStats}>
                  <BarChart2 className="mr-2 h-4 w-4" data-oid="2.x4.us" /> View
                  Statistics
                </DropdownMenuItem>
                <DropdownMenuSeparator data-oid="x0uvjaq" />
                <DropdownMenuItem
                  className="text-destructive"
                  data-oid="tevdao4"
                  onClick={onDelete}
                >
                  Delete Quiz
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mb-2 flex flex-wrap gap-2" data-oid="8stpyjc">
            <Badge
              className="bg-background"
              data-oid="x516-8p"
              variant="outline"
            >
              {quiz.category}
            </Badge>
            <Badge
              className={`
                ${quiz.difficulty === "easy" ? "border-green-500 bg-green-50 text-green-700" : quiz.difficulty === "medium" ? "border-yellow-500 bg-yellow-50 text-yellow-700" : "border-red-500 bg-red-50 text-red-700"}
              `}
              data-oid="6leprty"
              variant="outline"
            >
              {quiz.difficulty.charAt(0).toUpperCase() +
                quiz.difficulty.slice(1)}
            </Badge>
            <Badge
              className="bg-background"
              data-oid="l3-qckq"
              variant="outline"
            >
              {quiz.questions} Questions
            </Badge>
          </div>

          <div
            className="mt-auto grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-4"
            data-oid="gx1nso2"
          >
            <div className="flex items-center" data-oid="pkz7qfb">
              <Users
                className="mr-1 h-3.5 w-3.5 text-muted-foreground"
                data-oid="2hcyq.i"
              />

              <span data-oid="bdkvm52">
                {quiz.plays.toLocaleString()} plays
              </span>
            </div>
            <div className="flex items-center" data-oid="u5z1s89">
              <Star
                className="mr-1 h-3.5 w-3.5 text-amber-500"
                data-oid="7w0x8k-"
              />

              <span data-oid=":ff21em">{quiz.rating.toFixed(1)} rating</span>
            </div>
            <div className="flex items-center" data-oid="z9r_0sj">
              <Award
                className="mr-1 h-3.5 w-3.5 text-muted-foreground"
                data-oid=".6u3mbb"
              />

              <span data-oid="nls7kcy">{quiz.averageScore}% avg. score</span>
            </div>
            <div className="flex items-center" data-oid="gcg7ola">
              <Calendar
                className="mr-1 h-3.5 w-3.5 text-muted-foreground"
                data-oid="6ycxhm1"
              />

              <span data-oid="rwug2dw">
                {format(new Date(quiz.createdAt), "MMM d, yyyy")}
              </span>
            </div>
          </div>

          {quiz.isTournament && quiz.tournamentDetails && (
            <div
              className="mt-3 rounded-md bg-purple-50 p-2 text-xs"
              data-oid="gtid0aq"
            >
              <div className="font-medium text-purple-800" data-oid="weao1-3">
                Tournament Status:{" "}
                {quiz.tournamentDetails.status.charAt(0).toUpperCase() +
                  quiz.tournamentDetails.status.slice(1)}
              </div>
              <div
                className="mt-1 flex items-center justify-between"
                data-oid="nzhhq4e"
              >
                <span className="text-purple-700" data-oid=".rn-jzt">
                  {quiz.tournamentDetails.participants} participants
                </span>
                <span
                  className="font-medium text-purple-800"
                  data-oid="6bh7jgw"
                >
                  {quiz.tournamentDetails.prize}
                </span>
              </div>
            </div>
          )}

          <div className="mt-4 flex gap-2" data-oid="uc.jzx3">
            <Button
              data-oid="rp8rto3"
              onClick={onEdit}
              size="sm"
              variant="outline"
            >
              <Edit className="mr-2 h-3.5 w-3.5" data-oid="s6o9_ay" />
              Edit
            </Button>
            <Button
              data-oid="rr4cm2p"
              onClick={onViewStats}
              size="sm"
              variant="default"
            >
              <BarChart2 className="mr-2 h-3.5 w-3.5" data-oid="7s38jsn" />
              Statistics
            </Button>
            <TooltipProvider data-oid="r.y31qu">
              <Tooltip data-oid="2ix2ywu">
                <TooltipTrigger asChild data-oid="lme_ke0">
                  <Button
                    data-oid="cgaxufp"
                    onClick={onPreview}
                    size="sm"
                    variant="ghost"
                  >
                    <Eye className="mr-2 h-3.5 w-3.5" data-oid="5lij2:o" />
                    Preview
                  </Button>
                </TooltipTrigger>
                <TooltipContent data-oid="0dy.2bn">
                  Preview this quiz
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </Card>
  );
}
