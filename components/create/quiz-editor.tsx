"use client";

import {
  ChevronDown,
  ChevronUp,
  Eye,
  PlusCircle,
  Save,
  Trash,
  Trash2,
  Upload,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import type { Question, Quiz } from "@/types/quiz";

interface QuizEditorProps {
  initialQuizzes?: Quiz[];
}

export function QuizEditor({ initialQuizzes = [] }: QuizEditorProps) {
  const [activeQuizIndex, setActiveQuizIndex] = useState(0);
  const [quizzes, setQuizzes] = useState(
    initialQuizzes.length > 0
      ? initialQuizzes
      : [
          {
            id: 1,
            title: "Untitled Quiz",
            description: "Quiz description",
            difficulty: "medium",
            tags: [],
            questions: [
              {
                id: 1,
                text: "Question 1",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: 0,
                explanation: "Explanation for the correct answer",
              },
            ],

            settings: {
              timeLimit: 0,
              randomizeQuestions: false,
              showExplanations: true,
              passingScore: 70,
              visibility: "private",
              allowRetakes: true,
              questionTimer: 0,
            },
          },
        ]
  );
  const [newTag, setNewTag] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewQuestionIndex, setPreviewQuestionIndex] = useState(0);
  const [previewSelectedAnswer, setPreviewSelectedAnswer] = useState<
    number | null
  >(null);
  const [previewAnswerSubmitted, setPreviewAnswerSubmitted] = useState(false);

  const activeQuiz = quizzes[activeQuizIndex];

  const handleQuizChange = (field: string, value: string) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[activeQuizIndex] = {
      ...updatedQuizzes[activeQuizIndex],
      [field]: value,
    };
    setQuizzes(updatedQuizzes);
  };

  const handleSettingChange = (
    field: string,
    value: string | number | boolean
  ) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[activeQuizIndex].settings = {
      ...updatedQuizzes[activeQuizIndex].settings,
      [field]: value,
    };
    setQuizzes(updatedQuizzes);
  };

  const handleQuestionChange = (
    questionIndex: number,
    field: string,
    value: string
  ) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[activeQuizIndex].questions[questionIndex] = {
      ...updatedQuizzes[activeQuizIndex].questions[questionIndex],
      [field]: value,
    };
    setQuizzes(updatedQuizzes);
  };

  const handleOptionChange = (
    questionIndex: number,
    optionIndex: number,
    value: string
  ) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[activeQuizIndex].questions[questionIndex].options[
      optionIndex
    ] = value;
    setQuizzes(updatedQuizzes);
  };

  const handleCorrectAnswerChange = (
    questionIndex: number,
    optionIndex: number
  ) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[activeQuizIndex].questions[questionIndex].correctAnswer =
      optionIndex;
    setQuizzes(updatedQuizzes);
  };

  const addQuestion = () => {
    const updatedQuizzes = [...quizzes];
    const newQuestionId = updatedQuizzes[activeQuizIndex].questions.length + 1;
    updatedQuizzes[activeQuizIndex].questions.push({
      id: newQuestionId,
      text: `Question ${newQuestionId}`,
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0,
      explanation: "Explanation for the correct answer",
    });
    setQuizzes(updatedQuizzes);
  };

  const removeQuestion = (questionIndex: number) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[activeQuizIndex].questions.splice(questionIndex, 1);
    setQuizzes(updatedQuizzes);
  };

  const moveQuestion = (questionIndex: number, direction: "up" | "down") => {
    if (
      (direction === "up" && questionIndex === 0) ||
      (direction === "down" &&
        questionIndex === activeQuiz.questions.length - 1)
    ) {
      return;
    }

    const updatedQuizzes = [...quizzes];
    const questions = [...updatedQuizzes[activeQuizIndex].questions];
    const newIndex = direction === "up" ? questionIndex - 1 : questionIndex + 1;

    // Swap questions
    const temp = questions[questionIndex];
    questions[questionIndex] = questions[newIndex];
    questions[newIndex] = temp;

    updatedQuizzes[activeQuizIndex].questions = questions;
    setQuizzes(updatedQuizzes);
  };

  const addTag = () => {
    if (!newTag.trim() || activeQuiz.tags.includes(newTag.trim())) return;

    const updatedQuizzes = [...quizzes];
    updatedQuizzes[activeQuizIndex].tags.push(newTag.trim());
    setQuizzes(updatedQuizzes);
    setNewTag("");
  };

  const removeTag = (tagIndex: number) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[activeQuizIndex].tags.splice(tagIndex, 1);
    setQuizzes(updatedQuizzes);
  };

  const addQuiz = () => {
    const newQuiz = {
      id: quizzes.length + 1,
      title: `Untitled Quiz ${quizzes.length + 1}`,
      description: "Quiz description",
      difficulty: "medium",
      tags: [],
      questions: [
        {
          id: 1,
          text: "Question 1",
          options: ["Option 1", "Option 2", "Option 3", "Option 4"],
          correctAnswer: 0,
          explanation: "Explanation for the correct answer",
        },
      ],

      settings: {
        timeLimit: 0,
        randomizeQuestions: false,
        showExplanations: true,
        passingScore: 70,
        visibility: "private",
        allowRetakes: true,
        questionTimer: 0,
      },
    };
    setQuizzes([...quizzes, newQuiz]);
    setActiveQuizIndex(quizzes.length);
  };

  const deleteQuiz = () => {
    if (quizzes.length <= 1) {
      return;
    }

    const updatedQuizzes = [...quizzes];
    updatedQuizzes.splice(activeQuizIndex, 1);
    setQuizzes(updatedQuizzes);
    setActiveQuizIndex(Math.max(0, activeQuizIndex - 1));
  };

  const saveQuiz = () => {
    console.log("Saving quiz:", activeQuiz);
    // Here you would typically save the quiz to your backend
    toast.success("Quiz saved successfully!", {
      description: "Your changes have been saved.",
    });
  };

  const publishQuiz = () => {
    console.log("Publishing quiz:", activeQuiz);
    // Here you would typically publish the quiz to your backend
    toast.success("Quiz published successfully!", {
      description: "Your changes have been published.",
    });
  };

  const openPreview = () => {
    setPreviewQuestionIndex(0);
    setPreviewSelectedAnswer(null);
    setPreviewAnswerSubmitted(false);
    setIsPreviewOpen(true);
  };

  const handlePreviewAnswer = (optionIndex: number) => {
    if (previewAnswerSubmitted) return;
    setPreviewSelectedAnswer(optionIndex);
  };

  const submitPreviewAnswer = () => {
    if (previewSelectedAnswer === null) return;
    setPreviewAnswerSubmitted(true);
  };

  const nextPreviewQuestion = () => {
    if (previewQuestionIndex < activeQuiz.questions.length - 1) {
      setPreviewQuestionIndex(previewQuestionIndex + 1);
      setPreviewSelectedAnswer(null);
      setPreviewAnswerSubmitted(false);
    } else {
      setIsPreviewOpen(false);
    }
  };

  return (
    <div className="space-y-6" data-oid="-xl4d:j">
      {quizzes.length > 1 && (
        <div className="mb-6" data-oid="trh.79c">
          <Label data-oid=":ivn-fd" htmlFor="active-quiz">
            Select Quiz to Edit
          </Label>
          <Select
            data-oid="a9pgz4g"
            onValueChange={(value) =>
              setActiveQuizIndex(Number.parseInt(value))
            }
            value={activeQuizIndex.toString()}
          >
            <SelectTrigger className="mt-1" data-oid="h1o6sig" id="active-quiz">
              <SelectValue data-oid="1.dcp.e" placeholder="Select quiz" />
            </SelectTrigger>
            <SelectContent data-oid="vmparq_">
              {quizzes.map((quiz, index) => (
                <SelectItem
                  data-oid=":s5r6q8"
                  key={quiz.id}
                  value={index.toString()}
                >
                  {quiz.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <Tabs className="w-full" data-oid="2zsbqrk" defaultValue="details">
        <TabsList className="grid w-full grid-cols-3" data-oid="qxijgqf">
          <TabsTrigger data-oid="5h4:rqo" value="details">
            Quiz Details
          </TabsTrigger>
          <TabsTrigger data-oid="1efvo9h" value="questions">
            Questions
          </TabsTrigger>
          <TabsTrigger data-oid="i9dbskc" value="settings">
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent
          className="space-y-4 pt-4"
          data-oid="zmee2do"
          value="details"
        >
          <Card data-oid="zpva0pj">
            <CardHeader data-oid="n.xmu5w">
              <CardTitle data-oid="pz4291s">Quiz Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="ombir:l">
              <div className="space-y-2" data-oid="_71x0jv">
                <Label data-oid="2:0q42k" htmlFor="title">
                  Quiz Title
                </Label>
                <Input
                  data-oid="alztyx0"
                  id="title"
                  onChange={(e) => handleQuizChange("title", e.target.value)}
                  value={activeQuiz.title}
                />
              </div>

              <div className="space-y-2" data-oid="po8_fz0">
                <Label data-oid="ht2h_0d" htmlFor="description">
                  Description
                </Label>
                <Textarea
                  data-oid="66:yoth"
                  id="description"
                  onChange={(e) =>
                    handleQuizChange("description", e.target.value)
                  }
                  value={activeQuiz.description}
                />
              </div>

              <div className="space-y-2" data-oid="9oskve6">
                <Label data-oid="tqj1cf6" htmlFor="difficulty">
                  Difficulty Level
                </Label>
                <Select
                  data-oid=":lemh:w"
                  onValueChange={(value) =>
                    handleQuizChange("difficulty", value)
                  }
                  value={activeQuiz.difficulty}
                >
                  <SelectTrigger data-oid="y48m0yz" id="difficulty">
                    <SelectValue
                      data-oid="89n38p3"
                      placeholder="Select difficulty"
                    />
                  </SelectTrigger>
                  <SelectContent data-oid="i8hw8ue">
                    <SelectItem data-oid="k1oy-nc" value="easy">
                      Easy
                    </SelectItem>
                    <SelectItem data-oid="_oc2zur" value="medium">
                      Medium
                    </SelectItem>
                    <SelectItem data-oid="pztoh8m" value="hard">
                      Hard
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2" data-oid="ys0yg2w">
                <Label data-oid="18z-m1h">Tags</Label>
                <div className="mb-2 flex flex-wrap gap-2" data-oid="g1ofd7t">
                  {activeQuiz.tags.map((tag: string, index: number) => (
                    <Badge
                      className="px-2 py-1"
                      data-oid="24zxrjw"
                      key={index}
                      variant="secondary"
                    >
                      {tag}
                      <button
                        className="ml-1 text-muted-foreground hover:text-foreground"
                        data-oid="xx90.j:"
                        onClick={() => removeTag(index)}
                        type="button"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2" data-oid="2t-krk.">
                  <Input
                    data-oid="xonj-1v"
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTag()}
                    placeholder="Add a tag"
                    value={newTag}
                  />

                  <Button
                    data-oid="mm.ptay"
                    onClick={addTag}
                    type="button"
                    variant="outline"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          className="space-y-4 pt-4"
          data-oid="gl2ez.7"
          value="questions"
        >
          <div className="flex items-center justify-between" data-oid="q8bjkrw">
            <h3 className="font-medium text-lg" data-oid="a4m3ydd">
              Questions
            </h3>
            <Button data-oid="z07l:8h" onClick={addQuestion} size="sm">
              <PlusCircle className="mr-2 h-4 w-4" data-oid="a-70g.k" /> Add
              Question
            </Button>
          </div>

          <Accordion
            className="w-full"
            collapsible
            data-oid="-gij8_l"
            type="single"
          >
            {activeQuiz.questions.map(
              (question: Question, questionIndex: number) => (
                <AccordionItem
                  data-oid="ifbc6ms"
                  key={question.id}
                  value={`question-${question.id}`}
                >
                  <AccordionTrigger
                    className="rounded-md px-4 hover:bg-muted/50"
                    data-oid="ko-1cf5"
                  >
                    <div
                      className="flex w-full items-center justify-between pr-4"
                      data-oid="8iyzako"
                    >
                      <span data-oid="t0nza_i">
                        Question {questionIndex + 1}
                      </span>
                      <div
                        className="flex items-center space-x-2"
                        data-oid="ros5p67"
                      >
                        <span
                          data-oid="ics7rfx"
                          onClick={(e) => {
                            e.stopPropagation();
                            moveQuestion(questionIndex, "up");
                          }}
                        >
                          <ChevronUp className="h-4 w-4" data-oid="kkzd2rq" />
                        </span>
                        <span
                          data-oid="_-6a9in"
                          onClick={(e) => {
                            e.stopPropagation();
                            moveQuestion(questionIndex, "down");
                          }}
                        >
                          <ChevronDown className="h-4 w-4" data-oid="s2unna7" />
                        </span>
                        <span
                          data-oid="gzlf33n"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeQuestion(questionIndex);
                          }}
                        >
                          <Trash2
                            className="h-4 w-4 text-destructive"
                            data-oid="lt7b6of"
                          />
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-2" data-oid="rwdo0jn">
                    <div className="space-y-4" data-oid="3imezee">
                      <div className="space-y-2" data-oid="---yssh">
                        <Label
                          data-oid="mpucm69"
                          htmlFor={`question-${question.id}-text`}
                        >
                          Question Text
                        </Label>
                        <Textarea
                          data-oid="409fzgr"
                          id={`question-${question.id}-text`}
                          onChange={(e) =>
                            handleQuestionChange(
                              questionIndex,
                              "text",
                              e.target.value
                            )
                          }
                          value={question.text}
                        />
                      </div>

                      <div className="space-y-2" data-oid=":f1fvl-">
                        <Label data-oid="lt-wma.">Options</Label>
                        <RadioGroup
                          data-oid="49wnbuz"
                          onValueChange={(value) =>
                            handleCorrectAnswerChange(
                              questionIndex,
                              Number.parseInt(value)
                            )
                          }
                          value={question.correctAnswer.toString()}
                        >
                          {question.options.map(
                            (option: string, optionIndex: number) => (
                              <div
                                className="mb-2 flex items-center space-x-2"
                                data-oid="-dtg2jl"
                                key={optionIndex}
                              >
                                <RadioGroupItem
                                  data-oid="grum4_c"
                                  id={`q${question.id}-option-${optionIndex}`}
                                  value={optionIndex.toString()}
                                />

                                <Input
                                  className="flex-1"
                                  data-oid="7z-5eub"
                                  onChange={(e) =>
                                    handleOptionChange(
                                      questionIndex,
                                      optionIndex,
                                      e.target.value
                                    )
                                  }
                                  value={option}
                                />
                              </div>
                            )
                          )}
                        </RadioGroup>
                      </div>

                      <div className="space-y-2" data-oid="bgb7q7s">
                        <Label
                          data-oid="s6_4_ju"
                          htmlFor={`question-${question.id}-explanation`}
                        >
                          Explanation (shown after answering)
                        </Label>
                        <Textarea
                          data-oid="vitsoio"
                          id={`question-${question.id}-explanation`}
                          onChange={(e) =>
                            handleQuestionChange(
                              questionIndex,
                              "explanation",
                              e.target.value
                            )
                          }
                          value={question.explanation}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </TabsContent>

        <TabsContent
          className="space-y-4 pt-4"
          data-oid="it22l_k"
          value="settings"
        >
          <Card data-oid="cwb8jq6">
            <CardHeader data-oid="h8bymwt">
              <CardTitle data-oid="r84bue7">Quiz Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="rdv4vwq">
              <div className="space-y-2" data-oid="ikrc.kn">
                <Label data-oid="z:agb80" htmlFor="time-limit">
                  Time Limit (minutes)
                </Label>
                <Select
                  data-oid="l07kceu"
                  onValueChange={(value) =>
                    handleSettingChange("timeLimit", Number.parseInt(value))
                  }
                  value={activeQuiz?.settings?.timeLimit?.toString()}
                >
                  <SelectTrigger data-oid="w52huh6" id="time-limit">
                    <SelectValue
                      data-oid="bzu5fg6"
                      placeholder="Select time limit"
                    />
                  </SelectTrigger>
                  <SelectContent data-oid=".bknz7i">
                    <SelectItem data-oid="6kzcxjw" value="0">
                      No time limit
                    </SelectItem>
                    <SelectItem data-oid="v:p9uhf" value="5">
                      5 minutes
                    </SelectItem>
                    <SelectItem data-oid="fch16-g" value="10">
                      10 minutes
                    </SelectItem>
                    <SelectItem data-oid="7y:ikc2" value="15">
                      15 minutes
                    </SelectItem>
                    <SelectItem data-oid="tz8liye" value="30">
                      30 minutes
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2" data-oid="e093hth">
                <Label data-oid="eqccn6f" htmlFor="question-timer">
                  Time Per Question (seconds)
                </Label>
                <Select
                  data-oid="x2jp:sx"
                  onValueChange={(value) =>
                    handleSettingChange("questionTimer", Number.parseInt(value))
                  }
                  value={activeQuiz?.settings?.questionTimer?.toString()}
                >
                  <SelectTrigger data-oid="scwnize" id="question-timer">
                    <SelectValue
                      data-oid="fu8uyv0"
                      placeholder="Select time per question"
                    />
                  </SelectTrigger>
                  <SelectContent data-oid="q.n9j9w">
                    <SelectItem data-oid="cv6pe:j" value="0">
                      No limit per question
                    </SelectItem>
                    <SelectItem data-oid="mcki7y-" value="10">
                      10 seconds
                    </SelectItem>
                    <SelectItem data-oid="jc1d.u4" value="15">
                      15 seconds
                    </SelectItem>
                    <SelectItem data-oid="5-ah-0i" value="30">
                      30 seconds
                    </SelectItem>
                    <SelectItem data-oid="t:34sjm" value="45">
                      45 seconds
                    </SelectItem>
                    <SelectItem data-oid="t6dcmde" value="60">
                      60 seconds
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="_0q4ja_"
              >
                <Label data-oid="ajv6i88" htmlFor="randomize-questions">
                  Randomize Questions
                </Label>
                <Switch
                  checked={activeQuiz?.settings?.randomizeQuestions}
                  data-oid="28qg5:1"
                  id="randomize-questions"
                  onCheckedChange={(checked) =>
                    handleSettingChange("randomizeQuestions", checked)
                  }
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="dh7j_pj"
              >
                <Label data-oid="tic8twx" htmlFor="show-explanations">
                  Show Explanations After Answering
                </Label>
                <Switch
                  checked={activeQuiz?.settings?.showExplanations}
                  data-oid="vfleup9"
                  id="show-explanations"
                  onCheckedChange={(checked) =>
                    handleSettingChange("showExplanations", checked)
                  }
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="tg17:bc"
              >
                <Label data-oid="leab2h9" htmlFor="allow-retakes">
                  Allow Retakes
                </Label>
                <Switch
                  checked={activeQuiz?.settings?.allowRetakes}
                  data-oid="rzhd9oe"
                  id="allow-retakes"
                  onCheckedChange={(checked) =>
                    handleSettingChange("allowRetakes", checked)
                  }
                />
              </div>

              <div className="space-y-2" data-oid="rfaa4.c">
                <div className="flex justify-between" data-oid="fahjj5e">
                  <Label data-oid="qs1e8ue" htmlFor="passing-score">
                    Passing Score: {activeQuiz?.settings?.passingScore || 70}%
                  </Label>
                </div>
                <Slider
                  data-oid="crn4l7_"
                  id="passing-score"
                  max={100}
                  min={0}
                  onValueChange={(value) =>
                    handleSettingChange("passingScore", value[0])
                  }
                  step={5}
                  value={[activeQuiz?.settings?.passingScore || 70]}
                />
              </div>

              <div className="space-y-2" data-oid="sohgw:h">
                <Label data-oid=".k2hola" htmlFor="visibility">
                  Quiz Visibility
                </Label>
                <Select
                  data-oid="d21yv-h"
                  onValueChange={(value) =>
                    handleSettingChange("visibility", value)
                  }
                  value={activeQuiz?.settings?.visibility}
                >
                  <SelectTrigger data-oid="rkf1eui" id="visibility">
                    <SelectValue
                      data-oid="p.ypfdo"
                      placeholder="Select visibility"
                    />
                  </SelectTrigger>
                  <SelectContent data-oid="c0q2fn0">
                    <SelectItem data-oid="ahuqean" value="private">
                      Private (Only you can see)
                    </SelectItem>
                    <SelectItem data-oid=":r:8y_v" value="unlisted">
                      Unlisted (Anyone with link)
                    </SelectItem>
                    <SelectItem data-oid="fyhme-1" value="public">
                      Public (Listed in explore)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div
        className="mt-8 flex flex-wrap justify-between gap-2"
        data-oid="38:2h5n"
      >
        <div className="flex flex-wrap gap-2" data-oid="c7z8lv2">
          <Button data-oid="4tz67g_" onClick={addQuiz} variant="outline">
            <PlusCircle className="mr-2 h-4 w-4" data-oid=":b0.d.s" /> New Quiz
          </Button>

          <Dialog
            data-oid="b8bwlgp"
            onOpenChange={setIsPreviewOpen}
            open={isPreviewOpen}
          >
            <DialogTrigger asChild data-oid="f5d6bne">
              <Button
                data-oid="y7269ks"
                onClick={openPreview}
                variant="outline"
              >
                <Eye className="mr-2 h-4 w-4" data-oid="gn881hx" /> Preview
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]" data-oid="svoafcs">
              <DialogHeader data-oid="2uobt.t">
                <DialogTitle data-oid="0f4cn0r">Quiz Preview</DialogTitle>
              </DialogHeader>
              {activeQuiz.questions.length > 0 && (
                <div className="space-y-4" data-oid="kaa35:i">
                  <div
                    className="flex justify-between text-muted-foreground text-sm"
                    data-oid="bucuvno"
                  >
                    <span data-oid="q4qqkru">
                      Question {previewQuestionIndex + 1} of{" "}
                      {activeQuiz.questions.length}
                    </span>
                    <span data-oid="f96lqdu">Preview Mode</span>
                  </div>

                  <div className="rounded-md border p-4" data-oid="xjj0.o4">
                    <h3 className="mb-4 font-medium text-lg" data-oid="ewm20d9">
                      {activeQuiz.questions[previewQuestionIndex].text}
                    </h3>

                    <div className="space-y-2" data-oid="jh52.7l">
                      {activeQuiz.questions[previewQuestionIndex].options.map(
                        (option: string, index: number) => (
                          <div
                            className={`cursor-pointer rounded-md border p-3 ${previewSelectedAnswer === index ? "border-primary" : ""} ${previewAnswerSubmitted && index === activeQuiz.questions[previewQuestionIndex].correctAnswer ? "border-green-500 bg-green-500/20" : previewAnswerSubmitted && previewSelectedAnswer === index ? "border-red-500 bg-red-500/20" : ""}`}
                            data-oid="1_1yoky"
                            key={index}
                            onClick={() => handlePreviewAnswer(index)}
                          >
                            <div
                              className="flex items-center"
                              data-oid="zv5-3ol"
                            >
                              <span
                                className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-muted"
                                data-oid="0:-b4v."
                              >
                                {String.fromCharCode(65 + index)}
                              </span>
                              {option}
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {previewAnswerSubmitted &&
                      activeQuiz.settings.showExplanations && (
                        <div
                          className="mt-4 rounded-md bg-muted/50 p-3"
                          data-oid="4hd476z"
                        >
                          <p className="font-medium" data-oid="0f50nkw">
                            Explanation:
                          </p>
                          <p data-oid="l05g7_3">
                            {
                              activeQuiz.questions[previewQuestionIndex]
                                .explanation
                            }
                          </p>
                        </div>
                      )}
                  </div>

                  <div className="flex justify-end gap-2" data-oid="gwxwj31">
                    {previewAnswerSubmitted ? (
                      <Button data-oid="3k4ojv8" onClick={nextPreviewQuestion}>
                        {previewQuestionIndex < activeQuiz.questions.length - 1
                          ? "Next Question"
                          : "Finish Preview"}
                      </Button>
                    ) : (
                      <Button
                        data-oid="sicm_fk"
                        disabled={previewSelectedAnswer === null}
                        onClick={submitPreviewAnswer}
                      >
                        Submit Answer
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-wrap gap-2" data-oid="i2hcjgv">
          <AlertDialog data-oid=":nzlxo5">
            <AlertDialogTrigger asChild data-oid="0n:e9r3">
              <Button data-oid="jo.i.46" variant="destructive">
                <Trash className="mr-2 h-4 w-4" data-oid="6ool3oh" /> Delete
                Quiz
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent data-oid="jeyn:r4">
              <AlertDialogHeader data-oid="nj0lnxm">
                <AlertDialogTitle data-oid="hfwah25">
                  Are you sure?
                </AlertDialogTitle>
                <AlertDialogDescription data-oid="r685:d2">
                  This action cannot be undone. This will permanently delete the
                  quiz "{activeQuiz.title}" and remove it from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter data-oid="yk_o.eq">
                <AlertDialogCancel data-oid=".zn9isa">Cancel</AlertDialogCancel>
                <AlertDialogAction data-oid="400dw7t" onClick={deleteQuiz}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Button data-oid="_pey:o_" onClick={saveQuiz} variant="outline">
            <Save className="mr-2 h-4 w-4" data-oid="g:7nqjg" /> Save Draft
          </Button>

          <Button data-oid="iv.hzc_" onClick={publishQuiz}>
            <Upload className="mr-2 h-4 w-4" data-oid="cnaf1vw" /> Publish Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}
