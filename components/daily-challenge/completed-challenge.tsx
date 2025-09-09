"use client";
import confetti from "canvas-confetti";
import {
  Award,
  Clock,
  Facebook,
  Link,
  Medal,
  Share2,
  Trophy,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";

type dailyQuizData = {
  title: string;
  description: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
};
interface CompletedChallengeProps {
  result: {
    score: number;
    totalQuestions: number;
    timeTaken: number;
    rank: number;
    correctAnswers: number;
  };
  onReset: () => void;
  dailyQuizData: dailyQuizData;
  selectedAnswers: string[];
}

export function CompletedChallenge({
  result,
  onReset,
  dailyQuizData,
  selectedAnswers,
}: CompletedChallengeProps) {
  const [activeTab, setActiveTab] = useState("summary");

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return "Excellent! You're a quiz master!";
    if (score >= 70) return "Great job! You know your stuff!";
    if (score >= 50) return "Good effort! Keep learning!";
    return "Nice try! There's room for improvement.";
  };

  const getRankEmoji = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank <= 3) return "🥈";
    if (rank <= 10) return "🥉";
    return "🏅";
  };

  const handleShare = (platform: string) => {
    const message = `I scored ${result.score}% and ranked #${result.rank} in today's quiz challenge! Can you beat me?`;

    // In a real app, these would open share dialogs or copy to clipboard
    if (platform === "twitter") {
      console.log("Sharing to Twitter:", message);
      toast({
        title: "Shared to Twitter",
        description: "Your results have been shared to Twitter.",
      });
    } else if (platform === "facebook") {
      console.log("Sharing to Facebook:", message);
      toast({
        title: "Shared to Facebook",
        description: "Your results have been shared to Facebook.",
      });
    } else if (platform === "copy") {
      navigator.clipboard.writeText(message);
      toast({
        title: "Link Copied",
        description: "Challenge link copied to clipboard.",
      });
    }
  };
  useEffect(() => {
    if (result && result.score >= 70) {
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
  }, [result]);

  return (
    <Card className="shadow-md" data-oid="ummwi4-">
      <CardHeader className="pb-4" data-oid="o-_4bbn">
        <CardTitle className="text-center" data-oid="scip_px">
          Challenge Completed!
        </CardTitle>
        <CardDescription className="text-center" data-oid="6w5-37k">
          {getScoreMessage(result.score)}
        </CardDescription>
      </CardHeader>

      <CardContent data-oid="jz1ejxu">
        <div
          className="mb-6 flex flex-col items-center justify-center"
          data-oid="qpc1qp4"
        >
          <div className="relative" data-oid="ot:27f-">
            <CircularProgress
              data-oid="4s-492_"
              size={180}
              strokeWidth={10}
              value={result.score}
            />

            <div
              className="absolute inset-0 flex flex-col items-center justify-center"
              data-oid=".ts7a94"
            >
              <span className="font-bold text-4xl" data-oid="dh.mji.">
                {result.score}%
              </span>
              <span
                className="text-muted-foreground text-sm"
                data-oid="-0y_mxe"
              >
                Your Score
              </span>
            </div>
          </div>
        </div>

        <div
          className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4"
          data-oid="x3gida9"
        >
          <div
            className="flex flex-col items-center rounded-lg bg-muted/30 p-3"
            data-oid="y9c.14_"
          >
            <Trophy
              className="mb-1 h-5 w-5 text-amber-500"
              data-oid="pk1cvbn"
            />

            <span className="text-muted-foreground text-sm" data-oid="b9-kxur">
              Rank
            </span>
            <span className="font-bold text-xl" data-oid="pybus1c">
              {getRankEmoji(result.rank)} #{result.rank}
            </span>
          </div>

          <div
            className="flex flex-col items-center rounded-lg bg-muted/30 p-3"
            data-oid="t0mexn5"
          >
            <Clock className="mb-1 h-5 w-5 text-blue-500" data-oid="vbkgfk2" />
            <span className="text-muted-foreground text-sm" data-oid="2jcxv_s">
              Time
            </span>
            <span className="font-bold text-xl" data-oid="3_3kh22">
              {formatTime(result.timeTaken)}
            </span>
          </div>

          <div
            className="flex flex-col items-center rounded-lg bg-muted/30 p-3"
            data-oid="xrqcmbz"
          >
            <Award className="mb-1 h-5 w-5 text-green-500" data-oid="z2ahpsy" />
            <span className="text-muted-foreground text-sm" data-oid="54wn3sp">
              Correct
            </span>
            <span className="font-bold text-xl" data-oid="rqxd-:p">
              {result.correctAnswers}/{result.totalQuestions}
            </span>
          </div>

          <div
            className="flex flex-col items-center rounded-lg bg-muted/30 p-3"
            data-oid="a3dcp81"
          >
            <Medal
              className="mb-1 h-5 w-5 text-purple-500"
              data-oid="vdcf7ts"
            />

            <span className="text-muted-foreground text-sm" data-oid="2_b12y5">
              Earned
            </span>
            <span className="font-bold text-xl" data-oid="dk3z9wr">
              +125 XP
            </span>
          </div>
        </div>

        <Tabs
          className="w-full"
          data-oid="hgmew89"
          onValueChange={setActiveTab}
          value={activeTab}
        >
          <TabsList className="mb-4 grid grid-cols-3" data-oid="qcxpa43">
            <TabsTrigger data-oid="amlc_3i" value="summary">
              Summary
            </TabsTrigger>
            <TabsTrigger data-oid="eb_j.-a" value="rewards">
              Rewards
            </TabsTrigger>
            <TabsTrigger data-oid="nt-qow_" value="answers">
              Answers
            </TabsTrigger>
          </TabsList>

          <TabsContent className="space-y-4" data-oid="0nvefb6" value="summary">
            <div className="space-y-2" data-oid="jmfxidr">
              <h3 className="font-medium" data-oid="d39pkc0">
                Your Performance
              </h3>
              <p className="text-muted-foreground text-sm" data-oid="3_3yb:8">
                You completed today's challenge in{" "}
                {formatTime(result.timeTaken)}, which is faster than 65% of
                participants.
              </p>
              <p className="text-muted-foreground text-sm" data-oid="ydxvv8w">
                Your score of {result.score}% places you in the top{" "}
                {result.rank <= 10 ? "10%" : "30%"} of today's participants.
              </p>
            </div>

            <Separator data-oid="x7s_w7k" />

            <div className="space-y-2" data-oid="k492htg">
              <h3 className="font-medium" data-oid="he:ip:v">
                Streak Update
              </h3>
              <p className="text-muted-foreground text-sm" data-oid="bvvre0e">
                You've maintained a 4-day streak! Keep it up to earn bonus
                rewards.
              </p>
              <div className="mt-2 flex space-x-1" data-oid="5gk.7vf">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div
                    className={`h-2 w-full rounded-full ${day <= 4 ? "bg-green-500" : "bg-muted"}`}
                    data-oid="s8rddnx"
                    key={day}
                  />
                ))}
              </div>
              <p
                className="mt-1 text-right text-muted-foreground text-xs"
                data-oid="peclyfk"
              >
                3 days until 7-day streak badge
              </p>
            </div>
          </TabsContent>

          <TabsContent className="space-y-4" data-oid="w_9o33y" value="rewards">
            <div
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
              data-oid="6_vywwh"
            >
              <div
                className="flex items-center space-x-3 rounded-lg border p-4"
                data-oid="v69wk2:"
              >
                <div
                  className="rounded-full bg-amber-100 p-2 dark:bg-amber-900"
                  data-oid="81prw:d"
                >
                  <Trophy
                    className="h-5 w-5 text-amber-600 dark:text-amber-400"
                    data-oid="y1rp7:l"
                  />
                </div>
                <div data-oid="qgydhg6">
                  <h4 className="font-medium" data-oid="ox.frd_">
                    Daily Participant
                  </h4>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="aiajg6w"
                  >
                    +50 Coins
                  </p>
                </div>
              </div>

              <div
                className="flex items-center space-x-3 rounded-lg border p-4"
                data-oid="kdr57lm"
              >
                <div
                  className="rounded-full bg-blue-100 p-2 dark:bg-blue-900"
                  data-oid="-7trr5_"
                >
                  <Award
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    data-oid="f_5i-th"
                  />
                </div>
                <div data-oid="o4mgin0">
                  <h4 className="font-medium" data-oid="sn2.xq0">
                    Score Bonus
                  </h4>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="anzc6l."
                  >
                    +{result.score} XP
                  </p>
                </div>
              </div>

              <div
                className="flex items-center space-x-3 rounded-lg border p-4"
                data-oid="gws2-jm"
              >
                <div
                  className="rounded-full bg-green-100 p-2 dark:bg-green-900"
                  data-oid="5pixfvo"
                >
                  <Medal
                    className="h-5 w-5 text-green-600 dark:text-green-400"
                    data-oid="mw.l222"
                  />
                </div>
                <div data-oid="4osj317">
                  <h4 className="font-medium" data-oid="lquf-7c">
                    Streak Bonus
                  </h4>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="-4io-r4"
                  >
                    +25 Coins (4-day streak)
                  </p>
                </div>
              </div>

              <div
                className="flex items-center space-x-3 rounded-lg border p-4"
                data-oid="p:w_tgl"
              >
                <div
                  className="rounded-full bg-purple-100 p-2 dark:bg-purple-900"
                  data-oid="b_gavz."
                >
                  <Trophy
                    className="h-5 w-5 text-purple-600 dark:text-purple-400"
                    data-oid="hrg1p.q"
                  />
                </div>
                <div data-oid="y:sjcbm">
                  <h4 className="font-medium" data-oid="hv1:j96">
                    Top 50 Rank
                  </h4>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="e4s3n27"
                  >
                    +50 XP
                  </p>
                </div>
              </div>
            </div>

            <Separator data-oid="ar_c87x" />

            <div className="text-center" data-oid="6yvvfzm">
              <p className="font-medium" data-oid="-9tzvwu">
                Total Earned
              </p>
              <div
                className="mt-2 flex justify-center space-x-4"
                data-oid="_4e2l:i"
              >
                <div className="flex items-center" data-oid="0k_b:gr">
                  <div
                    className="mr-2 rounded-full bg-amber-100 p-1 dark:bg-amber-900"
                    data-oid="6-1yi.6"
                  >
                    <span
                      className="font-bold text-amber-600 text-xs dark:text-amber-400"
                      data-oid="bt8wq3-"
                    >
                      $
                    </span>
                  </div>
                  <span className="font-bold" data-oid="5aq9khw">
                    +75 Coins
                  </span>
                </div>
                <div className="flex items-center" data-oid="43tuk4w">
                  <div
                    className="mr-2 rounded-full bg-blue-100 p-1 dark:bg-blue-900"
                    data-oid="yy45akl"
                  >
                    <span
                      className="font-bold text-blue-600 text-xs dark:text-blue-400"
                      data-oid="4tr_os-"
                    >
                      XP
                    </span>
                  </div>
                  <span className="font-bold" data-oid="uut5ra7">
                    +125 XP
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent className="space-y-4" data-oid="6.9pbs0" value="answers">
            <p
              className="mb-4 text-muted-foreground text-sm"
              data-oid="44dtz37"
            >
              Review your answers and see the correct solutions.
            </p>

            <div className="space-y-4" data-oid="031.nm7">
              {dailyQuizData.questions.map((q, index) => {
                const userAnswer = selectedAnswers[index] || "Not answered";
                const isCorrect = userAnswer === q.correctAnswer;

                return (
                  <div
                    className="rounded-lg border p-4"
                    data-oid="d_aksx9"
                    key={q.id}
                  >
                    <div
                      className="flex items-start justify-between"
                      data-oid="srt59i:"
                    >
                      <h4 className="font-medium" data-oid="u3sd1_l">
                        {index + 1}. {q.question}
                      </h4>
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${isCorrect ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"}`}
                        data-oid="ygc28n8"
                      >
                        {isCorrect ? "Correct" : "Incorrect"}
                      </span>
                    </div>

                    <div className="mt-2 space-y-1 text-sm" data-oid="eha284u">
                      <p data-oid="n95ol_w">
                        <span
                          className="text-muted-foreground"
                          data-oid="6_x20gx"
                        >
                          Your answer:{" "}
                        </span>
                        <span
                          className={
                            isCorrect
                              ? "font-medium text-green-600 dark:text-green-400"
                              : "font-medium text-red-600 dark:text-red-400"
                          }
                          data-oid="1sn0t0c"
                        >
                          {userAnswer}
                        </span>
                      </p>

                      {!isCorrect && (
                        <p data-oid="n3pg.8x">
                          <span
                            className="text-muted-foreground"
                            data-oid="12y3euw"
                          >
                            Correct answer:{" "}
                          </span>
                          <span
                            className="font-medium text-green-600 dark:text-green-400"
                            data-oid="cybxd22"
                          >
                            {q.correctAnswer}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter
        className="flex flex-col justify-between gap-4 pt-4 sm:flex-row"
        data-oid="9s3nvft"
      >
        <Button data-oid="n75py.u" onClick={onReset} variant="outline">
          View Challenge Details
        </Button>

        <div className="flex space-x-2" data-oid="oyvwr10">
          <Popover data-oid="tdr7llm">
            <PopoverTrigger asChild data-oid=":-jg3_q">
              <Button
                className="bg-green-600 hover:bg-green-700"
                data-oid="fc.sk8f"
              >
                <Share2 className="mr-2 h-4 w-4" data-oid="3o_l9uu" />
                Share Results
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-auto p-2"
              data-oid=":lrczec"
            >
              <div className="flex space-x-2" data-oid="hop068n">
                <Button
                  className="flex items-center"
                  data-oid="y0hpl.7"
                  onClick={() => handleShare("twitter")}
                  size="sm"
                  variant="outline"
                >
                  <Twitter className="mr-2 h-4 w-4" data-oid="rzq8ez5" />
                  Twitter
                </Button>
                <Button
                  className="flex items-center"
                  data-oid=":wk_:7j"
                  onClick={() => handleShare("facebook")}
                  size="sm"
                  variant="outline"
                >
                  <Facebook className="mr-2 h-4 w-4" data-oid="40ysvcy" />
                  Facebook
                </Button>
                <Button
                  className="flex items-center"
                  data-oid="salmhvm"
                  onClick={() => handleShare("copy")}
                  size="sm"
                  variant="outline"
                >
                  <Link className="mr-2 h-4 w-4" data-oid="zjbwcen" />
                  Copy
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardFooter>
    </Card>
  );
}
