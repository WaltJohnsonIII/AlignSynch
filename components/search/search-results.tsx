"use client";

import {
  Award,
  Clock,
  FileQuestion,
  FileText,
  Filter,
  Search,
  Tag,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock search data
const mockSearchData = {
  quizzes: [
    {
      id: "q1",
      title: "World Geography Quiz",
      category: "Geography",
      difficulty: "Medium",
      creator: "geographyexpert",
      plays: 1245,
      rating: 4.7,
    },
    {
      id: "q2",
      title: "Marvel Cinematic Universe Trivia",
      category: "Entertainment",
      difficulty: "Hard",
      creator: "marveladdict",
      plays: 3782,
      rating: 4.9,
    },
    {
      id: "q3",
      title: "Basic Mathematics",
      category: "Education",
      difficulty: "Easy",
      creator: "mathteacher",
      plays: 2156,
      rating: 4.5,
    },
    {
      id: "q4",
      title: "History of Ancient Civilizations",
      category: "History",
      difficulty: "Medium",
      creator: "historyprof",
      plays: 1876,
      rating: 4.6,
    },
    {
      id: "q5",
      title: "Programming Fundamentals",
      category: "Technology",
      difficulty: "Medium",
      creator: "codemaster",
      plays: 1543,
      rating: 4.4,
    },
    {
      id: "q6",
      title: "Famous Paintings and Artists",
      category: "Art",
      difficulty: "Hard",
      creator: "artlover",
      plays: 987,
      rating: 4.8,
    },
    {
      id: "q7",
      title: "World Capitals",
      category: "Geography",
      difficulty: "Medium",
      creator: "geographyexpert",
      plays: 2345,
      rating: 4.5,
    },
    {
      id: "q8",
      title: "Human Anatomy",
      category: "Science",
      difficulty: "Hard",
      creator: "doctorwho",
      plays: 1432,
      rating: 4.7,
    },
  ],

  categories: [
    { id: "c1", name: "Science", quizCount: 42, icon: "🔬" },
    { id: "c2", name: "History", quizCount: 38, icon: "📜" },
    { id: "c3", name: "Entertainment", quizCount: 65, icon: "🎬" },
    { id: "c4", name: "Sports", quizCount: 29, icon: "⚽" },
    { id: "c5", name: "Geography", quizCount: 31, icon: "🌍" },
    { id: "c6", name: "Technology", quizCount: 27, icon: "💻" },
  ],

  creators: [
    {
      id: "u1",
      username: "quizmaster",
      name: "Quiz Master",
      quizCount: 87,
      followers: 1243,
      bio: "Creating the best quizzes for all knowledge enthusiasts",
    },
    {
      id: "u2",
      username: "historyprof",
      name: "History Professor",
      quizCount: 34,
      followers: 567,
      bio: "History teacher with a passion for making learning fun",
    },
    {
      id: "u3",
      username: "scienceguru",
      name: "Science Guru",
      quizCount: 56,
      followers: 892,
      bio: "Explaining complex science concepts through engaging quizzes",
    },
    {
      id: "u4",
      username: "geographyexpert",
      name: "Geography Expert",
      quizCount: 29,
      followers: 421,
      bio: "Travel the world through my geography quizzes",
    },
  ],

  pages: [
    {
      id: "p1",
      title: "Tournaments",
      path: "/tournaments",
      description: "Compete in quiz tournaments and win prizes",
    },
    {
      id: "p2",
      title: "Leaderboard",
      path: "/leaderboard",
      description: "See who's topping the charts in our global rankings",
    },
    {
      id: "p3",
      title: "Creator Tips",
      path: "/creator-tips",
      description: "Learn how to create engaging and educational quizzes",
    },
    {
      id: "p4",
      title: "Quiz Discussions",
      path: "/quiz-discussions",
      description: "Join conversations about quizzes and share your insights",
    },
  ],
};

export function SearchResults({ query }: { query: string }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(query);
  const [activeTab, setActiveTab] = useState("all");
  const [sortOption, setSortOption] = useState("relevance");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Filter and sort results based on query and filters
  const getFilteredResults = () => {
    if (!searchQuery.trim())
      return { quizzes: [], categories: [], creators: [], pages: [] };

    const q = searchQuery.toLowerCase().trim();

    // Filter by query
    let filteredQuizzes = mockSearchData.quizzes.filter(
      (quiz) =>
        quiz.title.toLowerCase().includes(q) ||
        quiz.category.toLowerCase().includes(q) ||
        quiz.creator.toLowerCase().includes(q)
    );

    // Apply difficulty filter
    if (difficultyFilter !== "all") {
      filteredQuizzes = filteredQuizzes.filter(
        (quiz) =>
          quiz.difficulty.toLowerCase() === difficultyFilter.toLowerCase()
      );
    }

    // Sort quizzes
    if (sortOption === "plays") {
      filteredQuizzes.sort((a, b) => b.plays - a.plays);
    } else if (sortOption === "rating") {
      filteredQuizzes.sort((a, b) => b.rating - a.rating);
    }
    // relevance is default (no additional sorting)

    return {
      quizzes: filteredQuizzes,
      categories: mockSearchData.categories.filter((category) =>
        category.name.toLowerCase().includes(q)
      ),
      creators: mockSearchData.creators.filter(
        (creator) =>
          creator.name.toLowerCase().includes(q) ||
          creator.username.toLowerCase().includes(q) ||
          creator.bio.toLowerCase().includes(q)
      ),
      pages: mockSearchData.pages.filter(
        (page) =>
          page.title.toLowerCase().includes(q) ||
          page.description.toLowerCase().includes(q)
      ),
    };
  };

  const results = getFilteredResults();
  const totalResults =
    results.quizzes.length +
    results.categories.length +
    results.creators.length +
    results.pages.length;

  return (
    <div className="container py-8" data-oid="lci4yfw">
      <div className="mb-8" data-oid="pm7adv.">
        <h1 className="mb-6 font-bold text-3xl" data-oid="w9f5bi2">
          Search Results
        </h1>

        <form
          className="flex max-w-2xl gap-2"
          data-oid="at2n9:a"
          onSubmit={handleSearch}
        >
          <div className="relative flex-1" data-oid="fpt4w8f">
            <Search
              className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
              data-oid="0wdoj1z"
            />

            <Input
              className="pl-10"
              data-oid="zmr8i.q"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search quizzes, categories, creators..."
              type="search"
              value={searchQuery}
            />
          </div>
          <Button data-oid="m8vnh3j" type="submit">
            Search
          </Button>
        </form>
      </div>

      {searchQuery.trim() ? (
        <>
          <div
            className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
            data-oid="jpsfu.e"
          >
            <p className="text-muted-foreground" data-oid="-efdx.r">
              {totalResults} results for "{searchQuery}"
            </p>

            <div className="flex flex-wrap gap-2" data-oid="271lxd9">
              <Select
                data-oid="1iocg3a"
                onValueChange={setDifficultyFilter}
                value={difficultyFilter}
              >
                <SelectTrigger className="w-[180px]" data-oid="zr72zha">
                  <Filter className="mr-2 h-4 w-4" data-oid="1pa4t0l" />
                  <SelectValue data-oid="1.wx4f3" placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent data-oid="z0siga0">
                  <SelectItem data-oid="udlrwlk" value="all">
                    All Difficulties
                  </SelectItem>
                  <SelectItem data-oid="lfn3rov" value="easy">
                    Easy
                  </SelectItem>
                  <SelectItem data-oid="ipa3h.n" value="medium">
                    Medium
                  </SelectItem>
                  <SelectItem data-oid="n85fc16" value="hard">
                    Hard
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select
                data-oid="lul6xt9"
                onValueChange={setSortOption}
                value={sortOption}
              >
                <SelectTrigger className="w-[180px]" data-oid="jhvym-3">
                  <Clock className="mr-2 h-4 w-4" data-oid="kri92_a" />
                  <SelectValue data-oid="ccps6zt" placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent data-oid="ku3mo9-">
                  <SelectItem data-oid="2v9he-7" value="relevance">
                    Relevance
                  </SelectItem>
                  <SelectItem data-oid="pxoagfu" value="plays">
                    Most Played
                  </SelectItem>
                  <SelectItem data-oid="iodg5-m" value="rating">
                    Highest Rated
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs
            className="mb-8"
            data-oid="_eckj:t"
            defaultValue="all"
            onValueChange={setActiveTab}
            value={activeTab}
          >
            <TabsList
              className="mb-6 w-full overflow-x-auto"
              data-oid="qg24641"
            >
              <TabsTrigger data-oid=".53n8jg" value="all">
                All Results ({totalResults})
              </TabsTrigger>
              <TabsTrigger data-oid="7_5pqut" value="quizzes">
                Quizzes ({results.quizzes.length})
              </TabsTrigger>
              <TabsTrigger data-oid=".8t1wt0" value="categories">
                Categories ({results.categories.length})
              </TabsTrigger>
              <TabsTrigger data-oid="qbk1fu3" value="creators">
                Creators ({results.creators.length})
              </TabsTrigger>
              <TabsTrigger data-oid="k.9l:pv" value="pages">
                Pages ({results.pages.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent className="space-y-8" data-oid="pn4:xdu" value="all">
              {/* Quizzes Section */}
              {results.quizzes.length > 0 && (
                <div data-oid="ordi1jo">
                  <div
                    className="mb-4 flex items-center justify-between"
                    data-oid="a0evbfm"
                  >
                    <h2
                      className="flex items-center gap-2 font-semibold text-xl"
                      data-oid="8gog3yo"
                    >
                      <FileQuestion className="h-5 w-5" data-oid="zlzz4ov" />
                      Quizzes
                    </h2>
                    {results.quizzes.length > 4 && (
                      <Button
                        data-oid="bn4zq3."
                        onClick={() => setActiveTab("quizzes")}
                        size="sm"
                        variant="ghost"
                      >
                        View all ({results.quizzes.length})
                      </Button>
                    )}
                  </div>

                  <div
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    data-oid="c.tkwho"
                  >
                    {results.quizzes.slice(0, 4).map((quiz) => (
                      <Link
                        className="block"
                        data-oid="w0lwan4"
                        href={`/quiz/${quiz.id}`}
                        key={quiz.id}
                      >
                        <Card
                          className="h-full transition-shadow hover:shadow-md"
                          data-oid="9llje39"
                        >
                          <CardHeader className="pb-2" data-oid="ps3a_2n">
                            <CardTitle
                              className="line-clamp-2 text-lg"
                              data-oid="84x9vwy"
                            >
                              {quiz.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2" data-oid="-i8tk.b">
                            <div
                              className="mb-2 flex flex-wrap gap-2"
                              data-oid="lc:nelt"
                            >
                              <Badge data-oid="b075zv0" variant="outline">
                                {quiz.category}
                              </Badge>
                              <Badge data-oid="eb8zuwy" variant="outline">
                                {quiz.difficulty}
                              </Badge>
                            </div>
                            <p
                              className="text-muted-foreground text-sm"
                              data-oid="f_7z4.y"
                            >
                              By @{quiz.creator}
                            </p>
                          </CardContent>
                          <CardFooter
                            className="flex justify-between text-muted-foreground text-sm"
                            data-oid="gz.eg88"
                          >
                            <div
                              className="flex items-center gap-1"
                              data-oid="zzjg7vq"
                            >
                              <Award className="h-4 w-4" data-oid="5p75lf-" />
                              <span data-oid="_tjzk31">{quiz.rating}/5</span>
                            </div>
                            <div
                              className="flex items-center gap-1"
                              data-oid="ki0qkob"
                            >
                              <User className="h-4 w-4" data-oid="v3bpp0i" />
                              <span data-oid="qvt6bz2">
                                {quiz.plays.toLocaleString()} plays
                              </span>
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories Section */}
              {results.categories.length > 0 && (
                <div data-oid="gfm-67l">
                  <div
                    className="mb-4 flex items-center justify-between"
                    data-oid="79yt6fo"
                  >
                    <h2
                      className="flex items-center gap-2 font-semibold text-xl"
                      data-oid="khppruf"
                    >
                      <Tag className="h-5 w-5" data-oid="gekb13c" />
                      Categories
                    </h2>
                    {results.categories.length > 3 && (
                      <Button
                        data-oid="muxem9e"
                        onClick={() => setActiveTab("categories")}
                        size="sm"
                        variant="ghost"
                      >
                        View all ({results.categories.length})
                      </Button>
                    )}
                  </div>

                  <div
                    className="grid grid-cols-1 gap-4 md:grid-cols-3"
                    data-oid="gh-wuhz"
                  >
                    {results.categories.slice(0, 3).map((category) => (
                      <Link
                        className="block"
                        data-oid="pk7wm1d"
                        href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                        key={category.id}
                      >
                        <Card
                          className="h-full transition-shadow hover:shadow-md"
                          data-oid="ab8k3-u"
                        >
                          <CardContent
                            className="flex items-center gap-4 p-6"
                            data-oid="21nu-:4"
                          >
                            <div
                              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl"
                              data-oid="yn-7e.a"
                            >
                              {category.icon}
                            </div>
                            <div data-oid="fn9r7_5">
                              <h3
                                className="font-semibold text-lg"
                                data-oid="jvs_27k"
                              >
                                {category.name}
                              </h3>
                              <p
                                className="text-muted-foreground text-sm"
                                data-oid="zid6tmy"
                              >
                                {category.quizCount} quizzes
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Creators Section */}
              {results.creators.length > 0 && (
                <div data-oid="f3fl.t1">
                  <div
                    className="mb-4 flex items-center justify-between"
                    data-oid="6_p2ldi"
                  >
                    <h2
                      className="flex items-center gap-2 font-semibold text-xl"
                      data-oid="t7wrt5."
                    >
                      <User className="h-5 w-5" data-oid="4hccjfc" />
                      Creators
                    </h2>
                    {results.creators.length > 2 && (
                      <Button
                        data-oid="1bqhsue"
                        onClick={() => setActiveTab("creators")}
                        size="sm"
                        variant="ghost"
                      >
                        View all ({results.creators.length})
                      </Button>
                    )}
                  </div>

                  <div
                    className="grid grid-cols-1 gap-4 md:grid-cols-2"
                    data-oid="wmz1ak."
                  >
                    {results.creators.slice(0, 2).map((creator) => (
                      <Link
                        className="block"
                        data-oid="_b:b1.d"
                        href={`/profile/${creator.username}`}
                        key={creator.id}
                      >
                        <Card
                          className="h-full transition-shadow hover:shadow-md"
                          data-oid="cxz93mr"
                        >
                          <CardContent
                            className="flex items-start gap-4 p-6"
                            data-oid="ll72zcr"
                          >
                            <div
                              className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600"
                              data-oid="v0f8r04"
                            >
                              <User className="h-8 w-8" data-oid="u1zxf:a" />
                            </div>
                            <div data-oid="b2z_4zo">
                              <h3
                                className="font-semibold text-lg"
                                data-oid="k9v2tz0"
                              >
                                {creator.name}
                              </h3>
                              <p
                                className="mb-1 text-muted-foreground text-sm"
                                data-oid="4y_50q-"
                              >
                                @{creator.username}
                              </p>
                              <p
                                className="line-clamp-2 text-sm"
                                data-oid=":dev965"
                              >
                                {creator.bio}
                              </p>
                              <div
                                className="mt-2 flex gap-4 text-muted-foreground text-sm"
                                data-oid="t19jvwg"
                              >
                                <span data-oid="xnhu0wk">
                                  {creator.quizCount} quizzes
                                </span>
                                <span data-oid="ab.dyuz">
                                  {creator.followers} followers
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Pages Section */}
              {results.pages.length > 0 && (
                <div data-oid="w2_q5rj">
                  <div
                    className="mb-4 flex items-center justify-between"
                    data-oid="wvf9q.0"
                  >
                    <h2
                      className="flex items-center gap-2 font-semibold text-xl"
                      data-oid="49b66e1"
                    >
                      <FileText className="h-5 w-5" data-oid="kjcq8ai" />
                      Pages
                    </h2>
                    {results.pages.length > 3 && (
                      <Button
                        data-oid="hvn_tq7"
                        onClick={() => setActiveTab("pages")}
                        size="sm"
                        variant="ghost"
                      >
                        View all ({results.pages.length})
                      </Button>
                    )}
                  </div>

                  <div
                    className="grid grid-cols-1 gap-4 md:grid-cols-3"
                    data-oid="0ir4xc7"
                  >
                    {results.pages.slice(0, 3).map((page) => (
                      <Link
                        className="block"
                        data-oid="j.h91gs"
                        href={page.path}
                        key={page.id}
                      >
                        <Card
                          className="h-full transition-shadow hover:shadow-md"
                          data-oid="8ssvjdy"
                        >
                          <CardContent className="p-6" data-oid="pgrdxc-">
                            <div
                              className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-purple-100"
                              data-oid="38e2b-k"
                            >
                              <FileText
                                className="h-5 w-5 text-purple-600"
                                data-oid="v1fjv1_"
                              />
                            </div>
                            <h3
                              className="mb-1 font-semibold text-lg"
                              data-oid="_lo1u_f"
                            >
                              {page.title}
                            </h3>
                            <p
                              className="text-muted-foreground text-sm"
                              data-oid="v3t4b3m"
                            >
                              {page.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {totalResults === 0 && (
                <div className="py-12 text-center" data-oid="82wz214">
                  <Search
                    className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50"
                    data-oid="9u9rmr9"
                  />

                  <h2
                    className="mb-2 font-semibold text-2xl"
                    data-oid="7offt_h"
                  >
                    No results found
                  </h2>
                  <p
                    className="mx-auto max-w-md text-muted-foreground"
                    data-oid="c2rguv9"
                  >
                    We couldn't find anything matching "{searchQuery}". Try
                    different keywords or check your spelling.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent data-oid="_m888b." value="quizzes">
              {results.quizzes.length > 0 ? (
                <div
                  className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  data-oid="idfgk-y"
                >
                  {results.quizzes.map((quiz) => (
                    <Link
                      className="block"
                      data-oid=".-h4868"
                      href={`/quiz/${quiz.id}`}
                      key={quiz.id}
                    >
                      <Card
                        className="h-full transition-shadow hover:shadow-md"
                        data-oid="f.j3u4v"
                      >
                        <CardHeader className="pb-2" data-oid="5j42s9k">
                          <CardTitle
                            className="line-clamp-2 text-lg"
                            data-oid="9xy6rmp"
                          >
                            {quiz.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2" data-oid="eiw.hh6">
                          <div
                            className="mb-2 flex flex-wrap gap-2"
                            data-oid="zi6a:2x"
                          >
                            <Badge data-oid="svxh749" variant="outline">
                              {quiz.category}
                            </Badge>
                            <Badge data-oid="9mhsq2e" variant="outline">
                              {quiz.difficulty}
                            </Badge>
                          </div>
                          <p
                            className="text-muted-foreground text-sm"
                            data-oid="8u6ywxd"
                          >
                            By @{quiz.creator}
                          </p>
                        </CardContent>
                        <CardFooter
                          className="flex justify-between text-muted-foreground text-sm"
                          data-oid="5vc6-9a"
                        >
                          <div
                            className="flex items-center gap-1"
                            data-oid="b2wk8o:"
                          >
                            <Award className="h-4 w-4" data-oid=".7mykel" />
                            <span data-oid="5xx6ndw">{quiz.rating}/5</span>
                          </div>
                          <div
                            className="flex items-center gap-1"
                            data-oid="6.vfhmg"
                          >
                            <User className="h-4 w-4" data-oid="gzcpsoh" />
                            <span data-oid="2nk9o2e">
                              {quiz.plays.toLocaleString()} plays
                            </span>
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center" data-oid="0bb7g0m">
                  <FileQuestion
                    className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50"
                    data-oid="d6yad8l"
                  />

                  <h2 className="mb-2 font-semibold text-xl" data-oid="w8ze7xy">
                    No quizzes found
                  </h2>
                  <p className="text-muted-foreground" data-oid="fnbk3r9">
                    We couldn't find any quizzes matching "{searchQuery}".
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent data-oid="j7h35bp" value="categories">
              {results.categories.length > 0 ? (
                <div
                  className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                  data-oid="_7baie1"
                >
                  {results.categories.map((category) => (
                    <Link
                      className="block"
                      data-oid="rx8il96"
                      href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      key={category.id}
                    >
                      <Card
                        className="h-full transition-shadow hover:shadow-md"
                        data-oid="lsu4:ug"
                      >
                        <CardContent
                          className="flex items-center gap-4 p-6"
                          data-oid="i-3po:_"
                        >
                          <div
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl"
                            data-oid="_p1qpes"
                          >
                            {category.icon}
                          </div>
                          <div data-oid="lad:hrg">
                            <h3
                              className="font-semibold text-xl"
                              data-oid="edczchi"
                            >
                              {category.name}
                            </h3>
                            <p
                              className="text-muted-foreground"
                              data-oid="3vfgprd"
                            >
                              {category.quizCount} quizzes
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center" data-oid="hoeh4fu">
                  <Tag
                    className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50"
                    data-oid="rtyial-"
                  />

                  <h2 className="mb-2 font-semibold text-xl" data-oid="msq:-dc">
                    No categories found
                  </h2>
                  <p className="text-muted-foreground" data-oid="i8j0ap9">
                    We couldn't find any categories matching "{searchQuery}".
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent data-oid="57i9evv" value="creators">
              {results.creators.length > 0 ? (
                <div
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                  data-oid=":s-3x-q"
                >
                  {results.creators.map((creator) => (
                    <Link
                      className="block"
                      data-oid="ca.e3ai"
                      href={`/profile/${creator.username}`}
                      key={creator.id}
                    >
                      <Card
                        className="h-full transition-shadow hover:shadow-md"
                        data-oid=".a08kkr"
                      >
                        <CardContent
                          className="flex items-start gap-4 p-6"
                          data-oid="fnzigl9"
                        >
                          <div
                            className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600"
                            data-oid="os8nf2m"
                          >
                            <User className="h-10 w-10" data-oid="d66o65h" />
                          </div>
                          <div className="flex-1" data-oid="w4js5p-">
                            <h3
                              className="font-semibold text-xl"
                              data-oid="ln9ns4l"
                            >
                              {creator.name}
                            </h3>
                            <p
                              className="mb-2 text-muted-foreground"
                              data-oid="qbl30:f"
                            >
                              @{creator.username}
                            </p>
                            <p className="mb-3" data-oid="edzljag">
                              {creator.bio}
                            </p>
                            <div
                              className="flex gap-6 text-muted-foreground"
                              data-oid="4q0:tt0"
                            >
                              <div
                                className="flex items-center gap-1"
                                data-oid="nlyda8r"
                              >
                                <FileQuestion
                                  className="h-4 w-4"
                                  data-oid="1b1lmw."
                                />

                                <span data-oid="sk7vp_.">
                                  {creator.quizCount} quizzes
                                </span>
                              </div>
                              <div
                                className="flex items-center gap-1"
                                data-oid="c0s2ilc"
                              >
                                <Users className="h-4 w-4" data-oid="7-4sugc" />
                                <span data-oid="1a7bvte">
                                  {creator.followers} followers
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center" data-oid="1u1:v:w">
                  <User
                    className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50"
                    data-oid="3gx5:nq"
                  />

                  <h2 className="mb-2 font-semibold text-xl" data-oid="cu3z2b2">
                    No creators found
                  </h2>
                  <p className="text-muted-foreground" data-oid="nn7sz89">
                    We couldn't find any creators matching "{searchQuery}".
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent data-oid="6p:1y0u" value="pages">
              {results.pages.length > 0 ? (
                <div
                  className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                  data-oid="mjg70_5"
                >
                  {results.pages.map((page) => (
                    <Link
                      className="block"
                      data-oid="ijqji94"
                      href={page.path}
                      key={page.id}
                    >
                      <Card
                        className="h-full transition-shadow hover:shadow-md"
                        data-oid="-zm4als"
                      >
                        <CardContent className="p-6" data-oid="0jxdpue">
                          <div
                            className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-purple-100"
                            data-oid="5jc9mle"
                          >
                            <FileText
                              className="h-6 w-6 text-purple-600"
                              data-oid="rkwn42:"
                            />
                          </div>
                          <h3
                            className="mb-2 font-semibold text-xl"
                            data-oid="8:cle_n"
                          >
                            {page.title}
                          </h3>
                          <p
                            className="text-muted-foreground"
                            data-oid="uz1hv0z"
                          >
                            {page.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center" data-oid="sn9bve3">
                  <FileText
                    className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50"
                    data-oid="8m9us09"
                  />

                  <h2 className="mb-2 font-semibold text-xl" data-oid="6h2sqdj">
                    No pages found
                  </h2>
                  <p className="text-muted-foreground" data-oid="zahwi_o">
                    We couldn't find any pages matching "{searchQuery}".
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <div className="py-16 text-center" data-oid="04.g1to">
          <Search
            className="mx-auto mb-6 h-16 w-16 text-muted-foreground opacity-30"
            data-oid=":ivq:o6"
          />

          <h2 className="mb-3 font-semibold text-2xl" data-oid="yngx7h7">
            Search for quizzes, categories, and more
          </h2>
          <p
            className="mx-auto mb-8 max-w-md text-muted-foreground"
            data-oid="3039h8u"
          >
            Enter a search term above to find quizzes, categories, creators, and
            pages across QuizMaker.
          </p>

          <div className="mx-auto max-w-3xl" data-oid="s__j9bu">
            <h3 className="mb-4 font-medium text-lg" data-oid="iy71p0.">
              Popular searches
            </h3>
            <div
              className="flex flex-wrap justify-center gap-2"
              data-oid="x48z7:m"
            >
              {[
                "History",
                "Science",
                "Geography",
                "Entertainment",
                "Sports",
                "Technology",
                "Art",
                "Music",
                "Food",
                "Movies",
              ].map((term) => (
                <Button
                  data-oid="ugq4j9o"
                  key={term}
                  onClick={() => {
                    setSearchQuery(term);
                    router.push(`/search?q=${encodeURIComponent(term)}`);
                  }}
                  variant="outline"
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
