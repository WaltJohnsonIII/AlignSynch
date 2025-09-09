"use client";

import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Flag,
  MessageSquare,
  Send,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Comment } from "@/components/quiz/comment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

type Reply = {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  text: string;
  timestamp: string;
  likes: number;
};

// Update the Discussion type to make replies required
type Discussion = {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  text: string;
  timestamp: string;
  likes: number;
  replies: Reply[];
};

type Question = {
  id: string;
  text: string;
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean;
  difficulty: string;
  timeTaken: number;
  explanation: string;
  discussions: Discussion[];
};
interface QuestionDiscussionProps {
  question: Question;
  questionNumber: number;
}

export function QuestionDiscussion({
  question,
  questionNumber,
}: QuestionDiscussionProps) {
  const [showDiscussion, setShowDiscussion] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [newExplanation, setNewExplanation] = useState("");
  const [showAddExplanation, setShowAddExplanation] = useState(false);
  const [discussions, setDiscussions] = useState(question.discussions);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "hard":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: `d${Date.now()}`,
      user: {
        id: "current-user",
        name: "You",
        avatar: "/avatars/master.png",
      },
      text: newComment,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: [],
    };

    setDiscussions([...discussions, newCommentObj]);
    setNewComment("");
  };

  const handleAddExplanation = () => {
    if (!newExplanation.trim()) return;

    // In a real app, you would send this to your backend
    toast.success("Explanation submitted successfully!");
    setNewExplanation("");
    setShowAddExplanation(false);
  };

  return (
    <Card
      className={`border-l-4 ${question.isCorrect ? "border-l-green-500" : "border-l-red-500"}`}
      data-oid="nj:sduf"
    >
      <CardHeader className="pb-3" data-oid="b3.eo0g">
        <div
          className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
          data-oid="m411ilx"
        >
          <CardTitle
            className="flex items-center gap-2 text-lg"
            data-oid="xcwq31s"
          >
            <span data-oid="4isrms7">Question {questionNumber}:</span>
            {question.isCorrect ? (
              <CheckCircle
                className="h-5 w-5 text-green-500"
                data-oid="r3wafw9"
              />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" data-oid=":ro2r85" />
            )}
          </CardTitle>
          <div className="flex items-center gap-2" data-oid="7-pyo0y">
            <Badge
              className={getDifficultyColor(question.difficulty)}
              data-oid="rcne4of"
            >
              {question.difficulty}
            </Badge>
            <Badge
              className="flex items-center gap-1"
              data-oid="utr103a"
              variant="outline"
            >
              <Clock className="h-3 w-3" data-oid="zns.a.a" />
              <span data-oid="jwzl41c">{question.timeTaken}s</span>
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="77z01f1">
        <div data-oid="z:fdm-5">
          <p className="mb-4 font-medium" data-oid=".xa06ey">
            {question.text}
          </p>

          <div
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            data-oid="z47-_24"
          >
            <div
              className="rounded-md border border-green-100 bg-green-50 p-3 dark:border-green-900/30 dark:bg-green-900/20"
              data-oid="ea7j36c"
            >
              <div
                className="mb-1 text-muted-foreground text-xs"
                data-oid="yb32eyb"
              >
                Correct Answer
              </div>
              <div
                className="flex items-center gap-1 font-medium"
                data-oid="oukfrv2"
              >
                <CheckCircle
                  className="h-4 w-4 text-green-500"
                  data-oid="mphlqkf"
                />

                <span data-oid="d:_4hv:">{question.correctAnswer}</span>
              </div>
            </div>

            {!question.isCorrect && (
              <div
                className="rounded-md border border-red-100 bg-red-50 p-3 dark:border-red-900/30 dark:bg-red-900/20"
                data-oid="hnx9.rk"
              >
                <div
                  className="mb-1 text-muted-foreground text-xs"
                  data-oid="r7z-j.3"
                >
                  Your Answer
                </div>
                <div
                  className="flex items-center gap-1 font-medium"
                  data-oid="5q6ygvb"
                >
                  <XCircle
                    className="h-4 w-4 text-red-500"
                    data-oid="xgbi745"
                  />

                  <span data-oid="34auhgh">{question.userAnswer}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4" data-oid=":mda.lw">
          <div data-oid="730oi:0">
            <h3 className="mb-2 font-medium text-sm" data-oid="zhexq5g">
              Explanation
            </h3>
            <div
              className="rounded-md border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/20 dark:bg-blue-900/10"
              data-oid="e3i3giy"
            >
              <p className="text-sm" data-oid="l:1ebp_">
                {question.explanation}
              </p>
            </div>
          </div>

          {discussions.length > 0 && (
            <div data-oid="a-4ahs1">
              <div
                className="mb-2 flex items-center justify-between"
                data-oid="o_nrw3n"
              >
                <h3 className="font-medium text-sm" data-oid="70q7brl">
                  Community Explanations & Discussion
                </h3>
                <Button
                  className="flex h-8 items-center gap-1"
                  data-oid="_8pcphz"
                  onClick={() => setShowDiscussion(!showDiscussion)}
                  size="sm"
                  variant="ghost"
                >
                  {showDiscussion ? (
                    <>
                      <ChevronUp className="h-4 w-4" data-oid="kmi:sbu" />
                      <span data-oid="xhhukw0">Hide</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" data-oid="1gwuftl" />
                      <span data-oid="l6hcwqx">
                        Show ({discussions.length})
                      </span>
                    </>
                  )}
                </Button>
              </div>

              {showDiscussion && (
                <div className="space-y-4" data-oid=":3a-.9.">
                  {discussions.map((discussion: Discussion) => (
                    <Comment
                      comment={discussion}
                      data-oid="pu2p246"
                      key={discussion.id}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {showDiscussion || discussions.length === 0 ? (
            <div className="space-y-3" data-oid="5l9j8tl">
              {showAddExplanation ? (
                <div className="space-y-3" data-oid="w-l3jfe">
                  <Textarea
                    className="min-h-[100px]"
                    data-oid="mqdizzy"
                    onChange={(e) => setNewExplanation(e.target.value)}
                    placeholder="Add your explanation or insight about this question..."
                    value={newExplanation}
                  />

                  <div className="flex justify-end gap-2" data-oid="n2_o_uw">
                    <Button
                      data-oid="4c9jfam"
                      onClick={() => setShowAddExplanation(false)}
                      size="sm"
                      variant="outline"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="flex items-center gap-1"
                      data-oid="mjrxa91"
                      onClick={handleAddExplanation}
                      size="sm"
                    >
                      <Send className="h-4 w-4" data-oid="kxtzy.w" />
                      <span data-oid="raz0m32">Submit Explanation</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2" data-oid="9w9-ejg">
                  <Button
                    className="flex items-center gap-1"
                    data-oid="d7k9iq2"
                    onClick={() => setShowAddExplanation(true)}
                    size="sm"
                    variant="outline"
                  >
                    <MessageSquare className="h-4 w-4" data-oid="r2q2ot1" />
                    <span data-oid="qfcbc3_">Add Explanation</span>
                  </Button>
                  <Button
                    className="flex items-center gap-1"
                    data-oid="gsqfshw"
                    size="sm"
                    variant="outline"
                  >
                    <Flag className="h-4 w-4" data-oid="o7ni_yq" />
                    <span data-oid="zh63x.:">Report Question</span>
                  </Button>
                </div>
              )}

              {(showDiscussion || discussions.length === 0) && (
                <>
                  <Separator data-oid="q-0p8dn" />
                  <div className="space-y-3" data-oid="541rqrf">
                    <div className="flex items-center gap-2" data-oid="7bfudm3">
                      <Avatar className="h-8 w-8" data-oid="0sya0vz">
                        <AvatarImage
                          alt="Your Avatar"
                          data-oid="esl3.fo"
                          src="/avatars/master.png"
                        />

                        <AvatarFallback data-oid="jcwd601">YO</AvatarFallback>
                      </Avatar>
                      <Textarea
                        className="flex-1"
                        data-oid=":2556.u"
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment or question..."
                        value={newComment}
                      />
                    </div>
                    <div className="flex justify-end" data-oid="a464xp-">
                      <Button
                        className="flex items-center gap-1"
                        data-oid="m.bq7e4"
                        disabled={!newComment.trim()}
                        onClick={handleAddComment}
                        size="sm"
                      >
                        <Send className="h-4 w-4" data-oid="cw9i-v7" />
                        <span data-oid="v5p17.h">Post</span>
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Button
              className="flex items-center gap-1"
              data-oid="seq4u8q"
              onClick={() => setShowDiscussion(true)}
              size="sm"
              variant="outline"
            >
              <MessageSquare className="h-4 w-4" data-oid="-h5b08e" />
              <span data-oid="7ffo9a1">
                Join Discussion ({discussions.length})
              </span>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
