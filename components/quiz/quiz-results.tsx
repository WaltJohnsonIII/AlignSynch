"use client";

import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  Clock,
  FileSearch,
  Home,
  Medal,
  MessageSquare,
  RotateCw,
  Star,
  Trophy,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import Link from "next/link";
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

interface Answer {
  questionId: string;
  selectedOptionId: string | null;
  isCorrect: boolean;
  timeSpent: number;
}
interface Question {
  id: string;
  text: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation?: string;
  image?: string | StaticImageData;
}
interface Quiz {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  questions: Question[];
}

interface Results {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  totalTime: number;
  answers: Answer[];
}

interface QuizResultsProps {
  results: Results | null;
  quiz: Quiz;
  onRestart: () => void;
  onReview: () => void;
  onExit: () => void;
}

export function QuizResults({
  results,
  quiz,
  onRestart,
  onReview,
  onExit,
}: QuizResultsProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (results && results.score >= 70) {
      setShowConfetti(true);
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [results]);

  if (!results) return null;

  const { totalQuestions, correctAnswers, score, totalTime } = results;

  // Format total time
  const formatTotalTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  // Get performance message
  const getPerformanceMessage = (score: number) => {
    if (score >= 90) return "Excellent! You're a quiz master!";
    if (score >= 70) return "Great job! You know your stuff!";
    if (score >= 50) return "Good effort! Keep learning!";
    return "Nice try! Practice makes perfect!";
  };

  // Get badge based on score
  const getScoreBadge = (score: number) => {
    if (score >= 90)
      return {
        text: "Expert",
        variant: "success",
        icon: <Trophy className="h-5 w-5" data-oid="po0bl4g" />,
      };
    if (score >= 70)
      return {
        text: "Advanced",
        variant: "success",
        icon: <Medal className="h-5 w-5" data-oid=":k-l3x0" />,
      };
    if (score >= 50)
      return {
        text: "Intermediate",
        variant: "warning",
        icon: <Star className="h-5 w-5" data-oid="abwqn.8" />,
      };
    return {
      text: "Beginner",
      variant: "default",
      icon: <Award className="h-5 w-5" data-oid="mi9xqe8" />,
    };
  };

  const badge = getScoreBadge(score);

  // Calculate average time per question
  const avgTimePerQuestion = Math.round(totalTime / totalQuestions);

  return (
    <div className="mx-auto max-w-2xl" data-oid="9fv:5_2">
      <Card
        className="mb-8 overflow-hidden border-2 shadow-lg"
        data-oid="ddt6tkz"
      >
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white"
          data-oid="b35dyw0"
        >
          <h2 className="mb-2 font-bold text-3xl" data-oid="ej8_i2c">
            Quiz Completed!
          </h2>
          <p className="opacity-90" data-oid="82:1fmj">
            {getPerformanceMessage(score)}
          </p>
        </div>

        <CardContent className="p-6 xl:pt-8" data-oid="uv.7dw.">
          <div className="mb-8 flex flex-col items-center" data-oid="148a2nf">
            <div className="relative mb-4" data-oid="er:kjto">
              <svg className="h-40 w-40" data-oid="c2vylp2">
                <circle
                  cx="80"
                  cy="80"
                  data-oid="916pz.t"
                  fill="none"
                  r="70"
                  stroke="#e6e6e6"
                  strokeWidth="12"
                />

                <motion.circle
                  animate={{ strokeDashoffset: 439.8 - (score / 100) * 439.8 }}
                  cx="80"
                  cy="80"
                  data-oid="dnh5907"
                  fill="none"
                  initial={{ strokeDashoffset: 439.8 }}
                  r="70"
                  stroke={
                    score >= 70
                      ? "#22c55e"
                      : score >= 50
                        ? "#eab308"
                        : "#ef4444"
                  }
                  strokeDasharray="439.8"
                  strokeDashoffset={439.8 - (score / 100) * 439.8}
                  strokeLinecap="round"
                  strokeWidth="12"
                  transform="rotate(-90 80 80)"
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                <text
                  data-oid="xwhma6-"
                  dominantBaseline="middle"
                  fill="currentColor"
                  fontSize="32"
                  fontWeight="bold"
                  textAnchor="middle"
                  x="80"
                  y="80"
                >
                  {score}%
                </text>
                <text
                  data-oid="4cmstpc"
                  dominantBaseline="middle"
                  fill="currentColor"
                  fontSize="14"
                  opacity="0.7"
                  textAnchor="middle"
                  x="80"
                  y="105"
                >
                  Score
                </text>
              </svg>

              <div
                className="-translate-y-1/2 absolute top-0 right-0 translate-x-1/2 transform"
                data-oid="7u6f_ab"
              >
                <div
                  className="rounded-full bg-white p-2 shadow-lg"
                  data-oid="6ezwy3:"
                >
                  {badge.icon}
                </div>
              </div>
            </div>

            <div className="mb-2 flex items-center gap-2" data-oid="i2e3s.t">
              <Badge
                className="px-3 py-1 text-sm"
                data-oid=":_3dllr"
                variant={badge.variant as any}
              >
                {badge.text}
              </Badge>
              <Badge
                className="px-3 py-1 text-sm"
                data-oid="eps48rg"
                variant="outline"
              >
                {quiz.category}
              </Badge>
              <Badge
                className="px-3 py-1 text-sm"
                data-oid="w0gl6ak"
                variant="outline"
              >
                {quiz.difficulty}
              </Badge>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-4" data-oid="pkp99pb">
            <Card
              className="border-green-100 bg-green-500/20"
              data-oid="36duob7"
            >
              <CardContent
                className="p-4 text-center xl:pt-6"
                data-oid="oc7.9p0"
              >
                <div
                  className="mb-2 flex justify-center text-green-600"
                  data-oid="l5wlyar"
                >
                  <CheckCircle className="h-6 w-6" data-oid="8qgf8s_" />
                </div>
                <div
                  className="mb-1 text-muted-foreground text-sm"
                  data-oid="exv.d8c"
                >
                  Correct Answers
                </div>
                <div
                  className="font-bold text-2xl text-green-700"
                  data-oid="q3-h.39"
                >
                  {correctAnswers}/{totalQuestions}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-blue-500/20" data-oid="fme4y52">
              <CardContent
                className="p-4 text-center xl:pt-6"
                data-oid=".s32vx2"
              >
                <div
                  className="mb-2 flex justify-center text-blue-600"
                  data-oid="24v-f.a"
                >
                  <Clock className="h-6 w-6" data-oid="4nsgq5-" />
                </div>
                <div
                  className="mb-1 text-muted-foreground text-sm"
                  data-oid="fuf43za"
                >
                  Time Taken
                </div>
                <div
                  className="font-bold text-2xl text-blue-700"
                  data-oid="v8pr20h"
                >
                  {formatTotalTime(totalTime)}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-6 space-y-4" data-oid="-6h3j03">
            <div className="flex justify-between text-sm" data-oid="t-_eu.z">
              <span className="text-muted-foreground" data-oid="hpn0hh0">
                Average time per question
              </span>
              <span className="font-medium" data-oid="78:whs3">
                {avgTimePerQuestion} seconds
              </span>
            </div>

            <div className="flex justify-between text-sm" data-oid="jozg0lu">
              <span className="text-muted-foreground" data-oid="w99n:pl">
                Accuracy rate
              </span>
              <span className="font-medium" data-oid="dt-3jog">
                {Math.round((correctAnswers / totalQuestions) * 100)}%
              </span>
            </div>

            <div className="flex justify-between text-sm" data-oid="nwnfozi">
              <span className="text-muted-foreground" data-oid="g_..5ls">
                Quiz completed
              </span>
              <span className="font-medium" data-oid="jjxkynr">
                Yes
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter
          className="flex flex-col gap-3 p-6 pt-0 sm:flex-row"
          data-oid="-0rmz2l"
        >
          <Button
            className="flex w-full items-center gap-2 sm:w-auto"
            data-oid=":_vec6a"
            onClick={onReview}
            variant="outline"
          >
            <FileSearch className="h-4 w-4" data-oid="6cthvbu" />
            Review Answers
          </Button>
          <Button
            asChild
            className="flex w-full items-center gap-2 sm:w-auto"
            data-oid="gs13mvm"
            variant="outline"
          >
            <Link data-oid="-v1:ncg" href={`/quiz/${quiz.id}/discussion`}>
              <MessageSquare className="h-4 w-4" data-oid="eds._vy" />
              Join Discussion
            </Link>
          </Button>
          <Button
            className="flex w-full items-center gap-2 sm:w-auto"
            data-oid="mwhgmr."
            onClick={onRestart}
            variant="outline"
          >
            <RotateCw className="h-4 w-4" data-oid="er9a5mk" />
            Try Again
          </Button>
          <Button
            className="flex w-full items-center gap-2 sm:w-auto"
            data-oid="kpwlmo."
            onClick={onExit}
            variant="default"
          >
            <Home className="h-4 w-4" data-oid=":c10sl_" />
            Exit Quiz
          </Button>
        </CardFooter>
      </Card>

      <Card className="border shadow-md" data-oid="jgftl2r">
        <CardHeader className="pb-3" data-oid="1duemjf">
          <CardTitle
            className="flex items-center gap-2 text-lg"
            data-oid="e7bk.9c"
          >
            <Trophy className="h-5 w-5 text-yellow-500" data-oid="0uman:f" />
            Achievements Unlocked
          </CardTitle>
        </CardHeader>

        <CardContent data-oid="t096e:t">
          <div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            data-oid="d.l7z-h"
          >
            {score >= 100 && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 rounded-md border bg-gradient-to-r from-yellow-50 to-amber-50 p-4"
                data-oid="eu3.mzp"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
              >
                <div
                  className="rounded-full bg-yellow-500/20 p-2"
                  data-oid="f7v8w__"
                >
                  <Trophy
                    className="h-5 w-5 text-yellow-600"
                    data-oid="30o8dlo"
                  />
                </div>
                <div data-oid="0r32kgf">
                  <div className="font-medium" data-oid="gl0_n7r">
                    Perfect Score
                  </div>
                  <div
                    className="text-muted-foreground text-sm"
                    data-oid="c.i6uae"
                  >
                    Answered all questions correctly
                  </div>
                </div>
              </motion.div>
            )}

            {totalTime < totalQuestions * 10 && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 rounded-md border bg-gradient-to-r from-blue-50 to-cyan-50 p-4"
                data-oid=":gddduk"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                <div
                  className="rounded-full bg-blue-500/20 p-2"
                  data-oid="yr9fec_"
                >
                  <Clock className="h-5 w-5 text-blue-600" data-oid="9utes_m" />
                </div>
                <div data-oid="2egu_pf">
                  <div className="font-medium" data-oid="48wz9hn">
                    Speed Demon
                  </div>
                  <div
                    className="text-muted-foreground text-sm"
                    data-oid="7djzfym"
                  >
                    Completed the quiz in record time
                  </div>
                </div>
              </motion.div>
            )}

            {score >= 70 && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 rounded-md border bg-gradient-to-r from-green-50 to-emerald-50 p-4"
                data-oid="prt.ol-"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                <div
                  className="rounded-full bg-green-100 p-2"
                  data-oid="_::28w_"
                >
                  <CheckCircle
                    className="h-5 w-5 text-green-600"
                    data-oid="7axlr_:"
                  />
                </div>
                <div data-oid="f:32hfn">
                  <div className="font-medium" data-oid="kzc8e6q">
                    Knowledge Master
                  </div>
                  <div
                    className="text-muted-foreground text-sm"
                    data-oid="15:s46z"
                  >
                    Scored over 70% on this quiz
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 rounded-md border bg-gradient-to-r from-purple-50 to-violet-50 p-4"
              data-oid="vvhdmz:"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="rounded-full bg-purple-100 p-2"
                data-oid="dk-eheg"
              >
                <Award className="h-5 w-5 text-purple-600" data-oid="pqbr_4:" />
              </div>
              <div data-oid="v4up6z9">
                <div className="font-medium" data-oid="oabq.um">
                  Quiz Completed
                </div>
                <div
                  className="text-muted-foreground text-sm"
                  data-oid="bn5ry3p"
                >
                  Finished the {quiz.title}
                </div>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
