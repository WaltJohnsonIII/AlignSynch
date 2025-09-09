"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { mockQuizzes } from "@/data/mock-quizzes";
import type { Quiz } from "@/types/quiz";
import { QuizEditor } from "./quiz-editor";

// Mock quiz data array with 20 quizzes

export function QuizGenerator() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [questionCount, setQuestionCount] = useState("5");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [generatedQuizzes, setGeneratedQuizzes] = useState<Quiz[]>([]);

  const handleGenerate = () => {
    if (!topic) return;

    setIsGenerating(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Select 5 random quizzes from the mockQuizzes array
      const shuffled = [...mockQuizzes].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 5);

      // Update the topic of the selected quizzes based on user input
      const customizedQuizzes = selected.map((quiz, index) => ({
        ...quiz,
        id: index + 1,
        title: `${topic} - ${quiz.title}`,
        tags: [...quiz.tags, topic.toLowerCase()],
        settings: {
          timeLimit: 0,
          randomizeQuestions: false,
          showExplanations: true,
          passingScore: 70,
          visibility: "private",
          allowRetakes: true,
          questionTimer: 0,
        },
      }));

      setGeneratedQuizzes(customizedQuizzes);
      setIsGenerating(false);
      setIsGenerated(true);
    }, 2000);
  };

  return (
    <div className="space-y-6" data-oid="cmfvdlh">
      <Tabs className="w-full" data-oid="4e7:3.l" defaultValue="generator">
        <TabsList className="grid w-full grid-cols-2" data-oid=":r3sz6v">
          <TabsTrigger data-oid="ww0bprn" value="generator">
            AI Generator
          </TabsTrigger>
          <TabsTrigger
            data-oid="kw28nxi"
            disabled={!isGenerated}
            value="editor"
          >
            Edit Generated Quiz
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="space-y-6 pt-4"
          data-oid="d25iw6t"
          value="generator"
        >
          <Card data-oid="j3l9bgm">
            <CardHeader data-oid="f69xisu">
              <CardTitle data-oid="pywjo8y">AI Quiz Generator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid=":lk9c:t">
              <div className="space-y-2" data-oid="jvdt0lf">
                <Label data-oid="5rhp2tl" htmlFor="topic">
                  Quiz Topic
                </Label>
                <Input
                  data-oid="_n8z0rn"
                  id="topic"
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., World History, Space Exploration, etc."
                  value={topic}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2" data-oid="bd0q.qo">
                <div className="space-y-2" data-oid="9v2_44-">
                  <Label data-oid="2-6859t" htmlFor="difficulty">
                    Difficulty Level
                  </Label>
                  <Select
                    data-oid="riku4c5"
                    onValueChange={setDifficulty}
                    value={difficulty}
                  >
                    <SelectTrigger data-oid="2l:6509" id="difficulty">
                      <SelectValue
                        data-oid="t_s5vlm"
                        placeholder="Select difficulty"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="ln1ivnb">
                      <SelectItem data-oid="1po_wju" value="easy">
                        Easy
                      </SelectItem>
                      <SelectItem data-oid="-x7ne4h" value="medium">
                        Medium
                      </SelectItem>
                      <SelectItem data-oid="ccb3k_e" value="hard">
                        Hard
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="mhmj5jv">
                  <Label data-oid="lich.9p" htmlFor="question-count">
                    Number of Questions
                  </Label>
                  <Select
                    data-oid="05u:hkm"
                    onValueChange={setQuestionCount}
                    value={questionCount}
                  >
                    <SelectTrigger data-oid="wvlowfl" id="question-count">
                      <SelectValue
                        data-oid="8o:quy1"
                        placeholder="Select count"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="yiy7zsx">
                      <SelectItem data-oid="kmruybt" value="5">
                        5 Questions
                      </SelectItem>
                      <SelectItem data-oid="fq2bx7t" value="10">
                        10 Questions
                      </SelectItem>
                      <SelectItem data-oid="l1aoq-y" value="15">
                        15 Questions
                      </SelectItem>
                      <SelectItem data-oid="qmro:np" value="20">
                        20 Questions
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2" data-oid="k9a5q_2">
                <Label data-oid="y50vf2:" htmlFor="additional-info">
                  Additional Information (Optional)
                </Label>
                <Textarea
                  data-oid="kazljt."
                  id="additional-info"
                  placeholder="Any specific requirements or focus areas for the quiz"
                />
              </div>
            </CardContent>
            <CardFooter data-oid="m520.q1">
              <Button
                className="w-full"
                data-oid="apynzyj"
                disabled={!topic || isGenerating}
                onClick={handleGenerate}
              >
                {isGenerating ? (
                  <>Generating Quiz...</>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" data-oid="niy1zat" />{" "}
                    Generate Quiz
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {isGenerated && (
            <div
              className="rounded-lg border bg-muted/50 p-4"
              data-oid="y09.f.h"
            >
              <h3 className="mb-2 font-medium text-lg" data-oid="cipdoaw">
                Quiz Generated Successfully!
              </h3>
              <p className="text-muted-foreground" data-oid="o73u.51">
                Your quiz on "{topic}" has been generated with {questionCount}{" "}
                {difficulty} difficulty questions.
              </p>
              <p className="mt-2 text-muted-foreground" data-oid="ds9k:1t">
                Click the "Edit Generated Quiz" tab above to review and
                customize your quiz before publishing.
              </p>
              <div className="mt-4 space-y-2" data-oid="-gb5i60">
                <h4 className="font-medium" data-oid="-lnp88j">
                  Generated Quizzes:
                </h4>
                <div className="grid gap-2" data-oid="4hl7h9n">
                  {generatedQuizzes.map((quiz) => (
                    <div
                      className="rounded border p-3"
                      data-oid="6i_wm8e"
                      key={quiz.id}
                    >
                      <div
                        className="flex items-center justify-between"
                        data-oid="pj8ve61"
                      >
                        <h5 className="font-medium" data-oid="cs2r9cv">
                          {quiz.title}
                        </h5>
                        <Badge data-oid="44_lmbq" variant="outline">
                          {quiz.difficulty}
                        </Badge>
                      </div>
                      <p
                        className="text-muted-foreground text-sm"
                        data-oid="yr6k.ch"
                      >
                        {quiz.description}
                      </p>
                      <div
                        className="mt-1 flex flex-wrap gap-1"
                        data-oid="wect5dl"
                      >
                        {quiz.tags.map((tag: string) => (
                          <Badge
                            className="text-xs"
                            data-oid="vfkv5x4"
                            key={tag}
                            variant="default"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent data-oid="8adncc:" value="editor">
          {isGenerated && (
            <QuizEditor data-oid="z.01j96" initialQuizzes={generatedQuizzes} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
