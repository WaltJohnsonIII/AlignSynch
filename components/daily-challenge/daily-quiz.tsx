"use client";

import { AlertCircle, CheckCircle2, Clock } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Mock data for the daily quiz
export const dailyQuizData = {
  title: "Science & Technology Challenge",
  description:
    "Test your knowledge of scientific discoveries and technological innovations.",
  questions: [
    {
      id: 1,
      question: "Which of these is NOT a programming language?",
      options: ["Java", "Python", "HTML", "Jaguar"],
      correctAnswer: "Jaguar",
    },
    {
      id: 2,
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Processor Utility",
        "Core Processing Unit",
      ],

      correctAnswer: "Central Processing Unit",
    },
    {
      id: 3,
      question: "Which planet has the most moons?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correctAnswer: "Saturn",
    },
    {
      id: 4,
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: "Au",
    },
    {
      id: 5,
      question: "Which of these is a renewable energy source?",
      options: ["Coal", "Natural Gas", "Solar", "Petroleum"],
      correctAnswer: "Solar",
    },
  ],
};

interface DailyQuizProps {
  onComplete: (result: {
    score: number;
    totalQuestions: number;
    timeTaken: number;
    rank: number;
    correctAnswers: number;
  }) => void;
}

export function DailyQuiz({ onComplete }: DailyQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestion < dailyQuizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Calculate score
    let correctCount = 0;
    dailyQuizData.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });

    const score = Math.round(
      (correctCount / dailyQuizData.questions.length) * 100
    );

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      onComplete({
        score,
        totalQuestions: dailyQuizData.questions.length,
        timeTaken: timeElapsed,
        rank: Math.floor(Math.random() * 50) + 1, // Mock rank
        correctAnswers: correctCount,
      });
    }, 1500);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const question = dailyQuizData.questions[currentQuestion];
  const progress =
    ((currentQuestion + 1) / dailyQuizData.questions.length) * 100;
  const isLastQuestion = currentQuestion === dailyQuizData.questions.length - 1;
  const canSubmit =
    Object.keys(selectedAnswers).length === dailyQuizData.questions.length;

  return (
    <Card className="shadow-md" data-oid="7eyhm.j">
      <CardHeader className="pb-4" data-oid="6bjo.io">
        <div
          className="flex flex-wrap items-center justify-between gap-4"
          data-oid="0gmw9:7"
        >
          <div data-oid="jhvc:c_">
            <CardTitle className="mb-2" data-oid=".pu4z1v">
              {dailyQuizData.title}
            </CardTitle>
            <CardDescription data-oid="rb3qgvz">
              {dailyQuizData.description}
            </CardDescription>
          </div>
          <div
            className="flex items-center space-x-2 text-muted-foreground"
            data-oid="mmncewl"
          >
            <Clock className="h-4 w-4" data-oid="kt_0wb4" />
            <span data-oid="o1-__3j">{formatTime(timeElapsed)}</span>
          </div>
        </div>
        <div className="mt-4" data-oid="4dn37w0">
          <Progress className="h-2" data-oid="g61rzmu" value={progress} />
          <div
            className="mt-1 flex justify-between text-muted-foreground text-xs"
            data-oid="x.nc83:"
          >
            <span data-oid="oxev9gn">
              Question {currentQuestion + 1} of {dailyQuizData.questions.length}
            </span>
            <span data-oid="_3vbbj-">{Math.round(progress)}% Complete</span>
          </div>
        </div>
      </CardHeader>

      <CardContent data-oid="ulqpmdu">
        <div className="space-y-6" data-oid="f7-bhaa">
          <div className="font-medium text-lg" data-oid="o._3.7n">
            {question.question}
          </div>

          <RadioGroup
            data-oid="9fj79:x"
            onValueChange={handleAnswerSelect}
            value={selectedAnswers[currentQuestion] || ""}
          >
            <div className="space-y-3" data-oid="cl9ebhh">
              {question.options.map((option, index) => (
                <div
                  className="flex items-center space-x-2 rounded-lg border p-3 transition-colors hover:bg-muted/50"
                  data-oid="pmr6fy_"
                  key={index}
                >
                  <RadioGroupItem
                    data-oid="cou2oh-"
                    id={`option-${index}`}
                    value={option}
                  />

                  <Label
                    className="flex-grow cursor-pointer"
                    data-oid="23ka.dt"
                    htmlFor={`option-${index}`}
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-4" data-oid="y5-9:mc">
        <Button
          data-oid="6hfd2v:"
          disabled={currentQuestion === 0}
          onClick={handlePrevious}
          variant="outline"
        >
          Previous
        </Button>

        <div className="flex space-x-2" data-oid="muvtae8">
          {isLastQuestion ? (
            <Button
              className="bg-green-600 hover:bg-green-700"
              data-oid="_p65soe"
              disabled={!canSubmit || isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? "Submitting..." : "Submit Challenge"}
            </Button>
          ) : (
            <Button
              data-oid="miaewbl"
              disabled={!selectedAnswers[currentQuestion]}
              onClick={handleNext}
            >
              Next Question
            </Button>
          )}
        </div>
      </CardFooter>

      {isLastQuestion && !canSubmit && (
        <div
          className="flex items-center px-6 pb-4 text-amber-600 text-sm"
          data-oid="xi3c_fn"
        >
          <AlertCircle className="mr-2 h-4 w-4" data-oid="58yprjq" />
          <span data-oid="xvk3ggi">
            Please answer all questions before submitting
          </span>
        </div>
      )}

      {isLastQuestion && canSubmit && !isSubmitting && (
        <div
          className="flex items-center px-6 pb-4 text-green-600 text-sm"
          data-oid="qy61--n"
        >
          <CheckCircle2 className="mr-2 h-4 w-4" data-oid="f.k46lt" />
          <span data-oid="wc4cjcb">
            All questions answered! You can submit your challenge.
          </span>
        </div>
      )}
    </Card>
  );
}
