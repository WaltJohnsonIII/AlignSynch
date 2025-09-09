"use client";
import { useState } from "react";
import { CompletedChallenge } from "./completed-challenge";
import { DailyChallengeHeader } from "./daily-challenge-header";
import { DailyHistory } from "./daily-history";
import { DailyLeaderboard } from "./daily-leaderboard";
import { DailyQuiz, dailyQuizData } from "./daily-quiz";
import { DailyRewards } from "./daily-rewards";
import { DailyStats } from "./daily-stats";

function DailyChallengePage() {
  const [hasCompleted, setHasCompleted] = useState(false);
  const [userResult, setUserResult] = useState<{
    score: number;
    totalQuestions: number;
    timeTaken: number;
    rank: number;
    correctAnswers: number;
  } | null>(null);

  const handleChallengeComplete = (result: {
    score: number;
    totalQuestions: number;
    timeTaken: number;
    rank: number;
    correctAnswers: number;
  }) => {
    setUserResult(result);
    setHasCompleted(true);
    // In a real app, you would save this to the server
  };

  const resetChallenge = () => {
    setHasCompleted(false);
    setUserResult(null);
  };

  return (
    <div className="container mx-auto" data-oid="dssx3j1">
      <DailyChallengeHeader data-oid="vhg_f-i" />

      <div
        className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3"
        data-oid="o.qc80t"
      >
        <div className="lg:col-span-2" data-oid="u5wetb-">
          {hasCompleted && userResult ? (
            <CompletedChallenge
              dailyQuizData={dailyQuizData}
              data-oid="joz2fc3"
              onReset={resetChallenge}
              result={userResult}
              selectedAnswers={[]}
            />
          ) : (
            <DailyQuiz
              data-oid="g-b7872"
              onComplete={handleChallengeComplete}
            />
          )}

          <div className="mt-8" data-oid="9083bzt">
            <DailyStats data-oid="6uf27_d" />
          </div>

          <div className="mt-8" data-oid="21ege0d">
            <DailyHistory data-oid="lyb867-" />
          </div>
        </div>

        <div className="space-y-8" data-oid=".812df8">
          <DailyLeaderboard data-oid="mlnf6w7" />
          <DailyRewards data-oid="4c6nq5y" />
        </div>
      </div>
    </div>
  );
}

export default DailyChallengePage;
