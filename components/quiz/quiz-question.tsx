"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface QuestionOption {
  id: string;
  text: string;
}

interface QuestionProps {
  question: {
    id: string;
    text: string;
    options: QuestionOption[];
    correctOptionId: string;
  };
  selectedOptionId: string | null;
  correctOptionId?: string;
  onSelectOption: (questionId: string, optionId: string) => void;
  isReviewMode?: boolean;
}

export function QuizQuestion({
  question,
  selectedOptionId,
  correctOptionId,
  onSelectOption,
  isReviewMode = false,
}: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    selectedOptionId
  );
  const [answered, setAnswered] = useState<boolean>(!!selectedOptionId);

  // Update local state when props change
  useEffect(() => {
    setSelectedOption(selectedOptionId);
    setAnswered(!!selectedOptionId);
  }, [selectedOptionId]);

  const handleOptionSelect = (optionId: string) => {
    if (answered || isReviewMode) return;

    setSelectedOption(optionId);
    setAnswered(true);
    onSelectOption(question.id, optionId);
  };

  const getOptionVariant = (optionId: string) => {
    if (!(answered || isReviewMode)) return "outline";

    if (isReviewMode || answered) {
      if (optionId === question.correctOptionId) return "success";
      if (optionId === selectedOption && optionId !== question.correctOptionId)
        return "destructive";
    }

    return "outline";
  };

  return (
    <div className="space-y-6" data-oid="9cp51l1">
      <h2
        className="font-semibold text-xl leading-tight md:text-2xl"
        data-oid="no5wbcp"
      >
        {question.text}
      </h2>

      <div className="mt-6 space-y-3" data-oid=".x3yjir">
        {question.options.map((option, index) => {
          const isCorrect = option.id === question.correctOptionId;
          const isSelected = option.id === selectedOption;
          const showCorrectIndicator = (isReviewMode || answered) && isCorrect;
          const showIncorrectIndicator =
            (isReviewMode || answered) && isSelected && !isCorrect;

          return (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              data-oid="5a-8f:r"
              initial={{ opacity: 0, y: 10 }}
              key={option.id}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                className={`h-auto w-full justify-start px-6 py-4 text-left ${isSelected ? "border-2 shadow-md" : ""} ${showCorrectIndicator ? "bg-green-50" : ""} ${showIncorrectIndicator ? "bg-red-50" : ""} transition-all duration-200 hover:bg-accent/80`}
                data-oid="7kx315c"
                disabled={answered || isReviewMode}
                onClick={() => handleOptionSelect(option.id)}
                variant={getOptionVariant(option.id)}
              >
                <div
                  className="flex w-full items-center justify-between gap-4"
                  data-oid="g28o_ap"
                >
                  <div className="flex items-center gap-3" data-oid="5bx18k_">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-medium text-muted-foreground"
                      data-oid=":-7fssz"
                    >
                      {option.id.toUpperCase()}
                    </span>
                    <span className="text-base" data-oid="vd-06..">
                      {option.text}
                    </span>
                  </div>
                  {showCorrectIndicator && (
                    <CheckCircle
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      data-oid="4keec_5"
                    />
                  )}
                  {showIncorrectIndicator && (
                    <XCircle
                      className="h-5 w-5 flex-shrink-0 text-red-500"
                      data-oid="va9l0ly"
                    />
                  )}
                </div>
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
