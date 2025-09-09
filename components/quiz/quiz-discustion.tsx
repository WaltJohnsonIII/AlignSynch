"use client";

import {
  ArrowLeft,
  CheckCircle,
  Clock,
  RotateCw,
  Share2,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { QuestionDiscussion } from "@/components/quiz/question-discussion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock quiz result data - in a real app, you would fetch this based on the ID
const mockQuizResult = {
  id: "1",
  title: "Avengers Quiz",
  score: {
    correct: 7,
    wrong: 3,
    total: 10,
    percentage: 70,
  },
  timeTaken: "8m 45s",
  completedAt: "2023-10-15T14:30:00Z",
  questions: [
    {
      id: "q1",
      text: "Who was the first Avenger to be introduced in the MCU?",
      correctAnswer: "Iron Man",
      userAnswer: "Iron Man",
      isCorrect: true,
      difficulty: "easy",
      timeTaken: 12,
      explanation:
        "Iron Man was released in 2008 and was the first film in the Marvel Cinematic Universe.",
      discussions: [
        {
          id: "d1",
          user: {
            id: "u1",
            name: "MarvelFan",
            avatar: "/avatars/genious.png",
          },
          text: "Technically, Captain America existed first in the timeline, but Iron Man was the first movie released.",
          timestamp: "2023-10-15T15:30:00Z",
          likes: 12,
          replies: [
            {
              id: "r1",
              user: {
                id: "u2",
                name: "ComicBookGuru",
                avatar: "/avatars/guru.png",
              },
              text: "That's right! The Captain America movie came out in 2011 but was set during World War II.",
              timestamp: "2023-10-15T16:15:00Z",
              likes: 5,
            },
          ],
        },
      ],
    },
    {
      id: "q2",
      text: "What is the name of Thor's hammer?",
      correctAnswer: "Mjölnir",
      userAnswer: "Mjölnir",
      isCorrect: true,
      difficulty: "easy",
      timeTaken: 8,
      explanation:
        "Mjölnir is the enchanted hammer wielded by Thor, the Norse god of thunder.",
      discussions: [],
    },
    {
      id: "q3",
      text: "What is the real name of the Black Panther?",
      correctAnswer: "T'Challa",
      userAnswer: "T'Challa",
      isCorrect: true,
      difficulty: "medium",
      timeTaken: 15,
      explanation:
        "T'Challa is the king of the fictional African nation of Wakanda and the superhero known as Black Panther.",
      discussions: [],
    },
    {
      id: "q4",
      text: "Which Infinity Stone was located in Loki's scepter?",
      correctAnswer: "Mind Stone",
      userAnswer: "Soul Stone",
      isCorrect: false,
      difficulty: "medium",
      timeTaken: 20,
      explanation:
        "The Mind Stone was housed in Loki's scepter, which was later used to create Vision.",
      discussions: [
        {
          id: "d2",
          user: {
            id: "u3",
            name: "InfinityExpert",
            avatar: "/avatars/brain.png",
          },
          text: "The Mind Stone has a yellow color, while the Soul Stone is orange. This is a common mix-up!",
          timestamp: "2023-10-16T10:45:00Z",
          likes: 8,
          replies: [],
        },
      ],
    },
    {
      id: "q5",
      text: "Who was the main villain in 'Guardians of the Galaxy'?",
      correctAnswer: "Ronan the Accuser",
      userAnswer: "Thanos",
      isCorrect: false,
      difficulty: "medium",
      timeTaken: 18,
      explanation:
        "While Thanos appeared in the film, Ronan the Accuser was the main antagonist in the first Guardians of the Galaxy movie.",
      discussions: [],
    },
    {
      id: "q6",
      text: "What type of doctor is Stephen Strange?",
      correctAnswer: "Neurosurgeon",
      userAnswer: "Neurosurgeon",
      isCorrect: true,
      difficulty: "medium",
      timeTaken: 10,
      explanation:
        "Before becoming the Sorcerer Supreme, Dr. Stephen Strange was a brilliant neurosurgeon.",
      discussions: [],
    },
    {
      id: "q7",
      text: "What is the name of Tony Stark's AI assistant that replaced JARVIS?",
      correctAnswer: "FRIDAY",
      userAnswer: "FRIDAY",
      isCorrect: true,
      difficulty: "hard",
      timeTaken: 22,
      explanation:
        "After JARVIS became Vision, Tony Stark activated FRIDAY as his new AI assistant.",
      discussions: [],
    },
    {
      id: "q8",
      text: "In which film did Spider-Man make his first appearance in the MCU?",
      correctAnswer: "Captain America: Civil War",
      userAnswer: "Captain America: Civil War",
      isCorrect: true,
      difficulty: "medium",
      timeTaken: 14,
      explanation:
        "Spider-Man, played by Tom Holland, first appeared in the MCU in Captain America: Civil War before getting his solo film.",
      discussions: [],
    },
    {
      id: "q9",
      text: "What is the name of the planet where Thor and Hulk reunite in Thor: Ragnarok?",
      correctAnswer: "Sakaar",
      userAnswer: "Asgard",
      isCorrect: false,
      difficulty: "hard",
      timeTaken: 25,
      explanation:
        "Sakaar is the garbage planet ruled by the Grandmaster where Thor is captured and forced to fight in the Contest of Champions.",
      discussions: [],
    },
    {
      id: "q10",
      text: "Who directed 'Avengers: Endgame'?",
      correctAnswer: "The Russo Brothers",
      userAnswer: "The Russo Brothers",
      isCorrect: true,
      difficulty: "medium",
      timeTaken: 16,
      explanation:
        "Anthony and Joe Russo directed both Avengers: Infinity War and Avengers: Endgame.",
      discussions: [],
    },
  ],
};

export function QuizDiscussion({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(5);
  const [filteredQuestions, setFilteredQuestions] = useState(
    mockQuizResult.questions
  );

  // Filter questions based on active tab
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredQuestions(mockQuizResult.questions);
    } else if (activeTab === "correct") {
      setFilteredQuestions(mockQuizResult.questions.filter((q) => q.isCorrect));
    } else if (activeTab === "incorrect") {
      setFilteredQuestions(
        mockQuizResult.questions.filter((q) => !q.isCorrect)
      );
    } else if (activeTab === "discussed") {
      setFilteredQuestions(
        mockQuizResult.questions.filter((q) => q.discussions.length > 0)
      );
    }
    setCurrentPage(1);
  }, [activeTab]);

  // Get current questions for pagination
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

  return (
    <div className="container mx-auto py-4" data-oid="sc547_1">
      <div className="mb-6" data-oid="9d2ueuw">
        <Button
          asChild
          className="mb-4"
          data-oid="2u_8fz:"
          size="sm"
          variant="ghost"
        >
          <Link
            className="flex items-center gap-1"
            data-oid="_8w_1gb"
            href={`/quiz/${id}`}
          >
            <ArrowLeft className="h-4 w-4" data-oid="34v8xq:" />
            Back to Quiz
          </Link>
        </Button>

        <Card className="mb-6" data-oid="r54kt_o">
          <CardHeader className="pb-3" data-oid="1vnb:gk">
            <div
              className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
              data-oid="pgdiaid"
            >
              <div data-oid="a:n8a.q">
                <CardTitle className="text-xl md:text-2xl" data-oid="ixrn09o">
                  {mockQuizResult.title}
                </CardTitle>
                <p
                  className="mt-1 text-muted-foreground text-sm"
                  data-oid="b50b0vr"
                >
                  Completed on{" "}
                  {new Date(mockQuizResult.completedAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-wrap gap-3" data-oid="l0te841">
                <Button
                  className="flex items-center gap-1"
                  data-oid="hm_8f7h"
                  size="sm"
                  variant="outline"
                >
                  <RotateCw className="h-4 w-4" data-oid="ex-4wbe" />
                  <span data-oid="g8:d460">Play Again</span>
                </Button>
                <Button
                  className="flex items-center gap-1"
                  data-oid="zaufnyd"
                  size="sm"
                  variant="outline"
                >
                  <Share2 className="h-4 w-4" data-oid="8brrrzc" />
                  <span data-oid=":hgzndx">Challenge Friend</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent data-oid="sr0ogki">
            <div
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
              data-oid=".5i_onp"
            >
              <div
                className="flex items-center gap-3 rounded-lg border border-green-100 bg-green-50 p-3 dark:border-green-900/30 dark:bg-green-900/20"
                data-oid=":2.6j:t"
              >
                <div
                  className="rounded-full bg-green-100 p-2 dark:bg-green-800"
                  data-oid="xatz1u5"
                >
                  <CheckCircle
                    className="h-5 w-5 text-green-600 dark:text-green-400"
                    data-oid="pq_7vwa"
                  />
                </div>
                <div data-oid="2oaxhem">
                  <div
                    className="text-muted-foreground text-sm"
                    data-oid="988q-.7"
                  >
                    Correct
                  </div>
                  <div className="font-medium" data-oid="j-gnd6n">
                    {mockQuizResult.score.correct} /{" "}
                    {mockQuizResult.score.total}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-3 rounded-lg border border-red-100 bg-red-50 p-3 dark:border-red-900/30 dark:bg-red-900/20"
                data-oid="ceiz3xi"
              >
                <div
                  className="rounded-full bg-red-100 p-2 dark:bg-red-800"
                  data-oid="0t91wk5"
                >
                  <XCircle
                    className="h-5 w-5 text-red-600 dark:text-red-400"
                    data-oid="0x.z:3j"
                  />
                </div>
                <div data-oid="g.l0c16">
                  <div
                    className="text-muted-foreground text-sm"
                    data-oid="tbutobl"
                  >
                    Incorrect
                  </div>
                  <div className="font-medium" data-oid="58gir:f">
                    {mockQuizResult.score.wrong} / {mockQuizResult.score.total}
                  </div>
                </div>
              </div>

              <div
                className="flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-50 p-3 dark:border-blue-900/30 dark:bg-blue-900/20"
                data-oid="ov5sg58"
              >
                <div
                  className="rounded-full bg-blue-100 p-2 dark:bg-blue-800"
                  data-oid="qbsc9vg"
                >
                  <Clock
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    data-oid="uv8m_wl"
                  />
                </div>
                <div data-oid="18_ji7z">
                  <div
                    className="text-muted-foreground text-sm"
                    data-oid="4r34m6e"
                  >
                    Time Taken
                  </div>
                  <div className="font-medium" data-oid="u5f353s">
                    {mockQuizResult.timeTaken}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs
          className="w-full"
          data-oid="g2nakvz"
          defaultValue="all"
          onValueChange={setActiveTab}
        >
          <TabsList
            className="flex w-full overflow-x-auto md:grid md:grid-cols-4"
            data-oid=":tpu_t4"
          >
            <TabsTrigger data-oid="zmc:-4v" value="all">
              All Questions
            </TabsTrigger>
            <TabsTrigger data-oid="vpwg8nh" value="correct">
              Correct ({mockQuizResult.score.correct})
            </TabsTrigger>
            <TabsTrigger data-oid="eu:vdrk" value="incorrect">
              Incorrect ({mockQuizResult.score.wrong})
            </TabsTrigger>
            <TabsTrigger data-oid="0g1ea-n" value="discussed">
              Discussed
            </TabsTrigger>
          </TabsList>

          <TabsContent className="mt-6" data-oid="qjvqd5:" value={activeTab}>
            <div className="space-y-6" data-oid="9.ax0ff">
              {currentQuestions.map((question, index) => (
                <QuestionDiscussion
                  data-oid="1ynuhe7"
                  key={question.id}
                  question={question}
                  questionNumber={indexOfFirstQuestion + index + 1}
                />
              ))}

              {filteredQuestions.length === 0 && (
                <Card data-oid="li0wcs:">
                  <CardContent
                    className="flex flex-col items-center justify-center py-12 text-center"
                    data-oid="volw:xv"
                  >
                    <p
                      className="mb-4 text-muted-foreground"
                      data-oid="i:gdw_3"
                    >
                      No questions found in this category.
                    </p>
                    <Button
                      data-oid="lfw8mgd"
                      onClick={() => setActiveTab("all")}
                      variant="outline"
                    >
                      View All Questions
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center" data-oid="fsihc7u">
                <Pagination data-oid="m0pfzg7">
                  <Button
                    data-oid="_6hfdss"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    size="sm"
                    variant="outline"
                  >
                    Previous
                  </Button>
                  <div className="mx-4 flex items-center" data-oid="3x45rt.">
                    <span className="text-sm" data-oid="vhx3a5:">
                      Page {currentPage} of {totalPages}
                    </span>
                  </div>
                  <Button
                    data-oid="6t.tapk"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    size="sm"
                    variant="outline"
                  >
                    Next
                  </Button>
                </Pagination>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
