"use client";

import { Brain, Clock, Globe, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, Lightbulb, Save } from "./missing-icons";

export function QuizPreferences() {
  const [isLoading, setIsLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    defaultTimeLimit: 30,
    defaultDifficulty: "medium",
    autoSave: true,
    showTimer: true,
    showHints: true,
    preferredCategories: ["science", "history"],
    preferredLanguage: "english",
    showCorrectAnswers: true,
  });

  const handleToggle = (setting: string, value: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  const handleSelectChange = (setting: string, value: string) => {
    setPreferences((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  const handleSliderChange = (value: number[]) => {
    setPreferences((prev) => ({
      ...prev,
      defaultTimeLimit: value[0],
    }));
  };

  const handleSave = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Quiz preferences saved!");
    }, 1000);
  };

  return (
    <div className="space-y-6" data-oid="gz1fisk">
      <div data-oid="fo345sx">
        <h3 className="font-medium text-lg" data-oid="5opghht">
          Quiz Preferences
        </h3>
        <p className="text-muted-foreground text-sm" data-oid="w28bbnn">
          Customize your quiz creation and playing experience.
        </p>
      </div>

      <Card data-oid="w77safo">
        <CardHeader data-oid="yqe_cso">
          <CardTitle data-oid="16.w4ts">Default Quiz Settings</CardTitle>
          <CardDescription data-oid="do7p18n">
            Set your default preferences for creating quizzes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6" data-oid="kb_2zfn">
          <div className="space-y-2" data-oid="cp_2ngq">
            <div
              className="flex items-center justify-between"
              data-oid="qv9b06-"
            >
              <div className="flex items-center space-x-4" data-oid="m:a4l6z">
                <Clock className="h-5 w-5 text-primary" data-oid="6-y-7dk" />
                <div data-oid="fr2nb-e">
                  <p className="font-medium" data-oid="crfhu8g">
                    Default Time Limit
                  </p>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="9oolqp5"
                  >
                    Set the default time limit for quiz questions.
                  </p>
                </div>
              </div>
              <span className="font-medium" data-oid="31fhskt">
                {preferences.defaultTimeLimit} seconds
              </span>
            </div>
            <Slider
              className="mt-2"
              data-oid="s6t3p.a"
              max={120}
              min={10}
              onValueChange={handleSliderChange}
              step={5}
              value={[preferences.defaultTimeLimit]}
            />
          </div>

          <Separator data-oid="3s.g_de" />

          <div className="flex items-center justify-between" data-oid="ynfuk:g">
            <div className="flex items-center space-x-4" data-oid="cxli7.7">
              <Brain className="h-5 w-5 text-primary" data-oid="ztbf-8_" />
              <div data-oid="._iwti6">
                <p className="font-medium" data-oid="1k-dfgu">
                  Default Difficulty
                </p>
                <p className="text-muted-foreground text-sm" data-oid="bmecaai">
                  Set the default difficulty for your quizzes.
                </p>
              </div>
            </div>
            <Select
              data-oid="a6a.vps"
              onValueChange={(value) =>
                handleSelectChange("defaultDifficulty", value)
              }
              value={preferences.defaultDifficulty}
            >
              <SelectTrigger className="w-[180px]" data-oid="f8gkj0_">
                <SelectValue
                  data-oid="rzir-is"
                  placeholder="Select difficulty"
                />
              </SelectTrigger>
              <SelectContent data-oid="f4jku5y">
                <SelectItem data-oid="ve-vy2u" value="easy">
                  Easy
                </SelectItem>
                <SelectItem data-oid="6uf.5t3" value="medium">
                  Medium
                </SelectItem>
                <SelectItem data-oid="7uvc44h" value="hard">
                  Hard
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator data-oid=":aofi.t" />

          <div className="flex items-center justify-between" data-oid="iopimlf">
            <div className="flex items-center space-x-4" data-oid="f:-ctg2">
              <Save className="h-5 w-5 text-primary" data-oid="qlqkj20" />
              <div data-oid=":p.7_pu">
                <p className="font-medium" data-oid="iin:8.f">
                  Auto-Save
                </p>
                <p className="text-muted-foreground text-sm" data-oid=":.aepow">
                  Automatically save quiz drafts while editing.
                </p>
              </div>
            </div>
            <Switch
              checked={preferences.autoSave}
              data-oid=".p:u-73"
              onCheckedChange={(value) => handleToggle("autoSave", value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card data-oid="y1regx4">
        <CardHeader data-oid="4mi:zpo">
          <CardTitle data-oid="x2d7mly">Quiz Playing Experience</CardTitle>
          <CardDescription data-oid="elcz..a">
            Customize how you experience quizzes when playing.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="p7.nt-w">
          <div className="flex items-center justify-between" data-oid="d70obsx">
            <div className="flex items-center space-x-4" data-oid="2edvt87">
              <Clock className="h-5 w-5 text-primary" data-oid="frhw-ad" />
              <div data-oid=":p6-wzp">
                <p className="font-medium" data-oid="4rdz5rf">
                  Show Timer
                </p>
                <p className="text-muted-foreground text-sm" data-oid="ln670c.">
                  Show countdown timer when playing quizzes.
                </p>
              </div>
            </div>
            <Switch
              checked={preferences.showTimer}
              data-oid="w6nv9f5"
              onCheckedChange={(value) => handleToggle("showTimer", value)}
            />
          </div>

          <Separator data-oid="_h:a-u6" />

          <div className="flex items-center justify-between" data-oid="j.-i5ok">
            <div className="flex items-center space-x-4" data-oid="s26b5q7">
              <Lightbulb className="h-5 w-5 text-primary" data-oid="ethymb6" />
              <div data-oid="df2jufd">
                <p className="font-medium" data-oid="u4o41pz">
                  Show Hints
                </p>
                <p className="text-muted-foreground text-sm" data-oid="i6n4jj1">
                  Show hints when available in quizzes.
                </p>
              </div>
            </div>
            <Switch
              checked={preferences.showHints}
              data-oid="h878p60"
              onCheckedChange={(value) => handleToggle("showHints", value)}
            />
          </div>

          <Separator data-oid="8p:fked" />

          <div className="flex items-center justify-between" data-oid="_.0zwkg">
            <div className="flex items-center space-x-4" data-oid="7eygqyf">
              <CheckCircle
                className="h-5 w-5 text-primary"
                data-oid="5dau818"
              />

              <div data-oid="svu_ajx">
                <p className="font-medium" data-oid="6h7ldpd">
                  Show Correct Answers
                </p>
                <p className="text-muted-foreground text-sm" data-oid="ufkfczx">
                  Show correct answers after completing a quiz.
                </p>
              </div>
            </div>
            <Switch
              checked={preferences.showCorrectAnswers}
              data-oid="r9yj2t3"
              onCheckedChange={(value) =>
                handleToggle("showCorrectAnswers", value)
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card data-oid="trl7_nn">
        <CardHeader data-oid="qhkaqi-">
          <CardTitle data-oid="k74n7e0">Content Preferences</CardTitle>
          <CardDescription data-oid=".2886w6">
            Set your preferred quiz content and language.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6" data-oid="159z2ve">
          <div className="space-y-2" data-oid="25bd7ku">
            <Label className="font-medium" data-oid="g1.azrm">
              Preferred Categories
            </Label>
            <p
              className="mb-2 text-muted-foreground text-sm"
              data-oid="kz_0dmq"
            >
              Select categories you're most interested in.
            </p>
            <div className="flex flex-wrap gap-2" data-oid="b4p4:be">
              <Badge
                className="cursor-pointer"
                data-oid="-8i8tah"
                onClick={() => {
                  const newCategories =
                    preferences.preferredCategories.includes("science")
                      ? preferences.preferredCategories.filter(
                          (c) => c !== "science"
                        )
                      : [...preferences.preferredCategories, "science"];
                  setPreferences((prev) => ({
                    ...prev,
                    preferredCategories: newCategories,
                  }));
                }}
                variant={
                  preferences.preferredCategories.includes("science")
                    ? "default"
                    : "outline"
                }
              >
                Science
              </Badge>
              <Badge
                className="cursor-pointer"
                data-oid="j7e_9qj"
                onClick={() => {
                  const newCategories =
                    preferences.preferredCategories.includes("history")
                      ? preferences.preferredCategories.filter(
                          (c) => c !== "history"
                        )
                      : [...preferences.preferredCategories, "history"];
                  setPreferences((prev) => ({
                    ...prev,
                    preferredCategories: newCategories,
                  }));
                }}
                variant={
                  preferences.preferredCategories.includes("history")
                    ? "default"
                    : "outline"
                }
              >
                History
              </Badge>
              <Badge
                className="cursor-pointer"
                data-oid="l8iym_x"
                onClick={() => {
                  const newCategories =
                    preferences.preferredCategories.includes("geography")
                      ? preferences.preferredCategories.filter(
                          (c) => c !== "geography"
                        )
                      : [...preferences.preferredCategories, "geography"];
                  setPreferences((prev) => ({
                    ...prev,
                    preferredCategories: newCategories,
                  }));
                }}
                variant={
                  preferences.preferredCategories.includes("geography")
                    ? "default"
                    : "outline"
                }
              >
                Geography
              </Badge>
              <Badge
                className="cursor-pointer"
                data-oid="st:bm9d"
                onClick={() => {
                  const newCategories =
                    preferences.preferredCategories.includes("literature")
                      ? preferences.preferredCategories.filter(
                          (c) => c !== "literature"
                        )
                      : [...preferences.preferredCategories, "literature"];
                  setPreferences((prev) => ({
                    ...prev,
                    preferredCategories: newCategories,
                  }));
                }}
                variant={
                  preferences.preferredCategories.includes("literature")
                    ? "default"
                    : "outline"
                }
              >
                Literature
              </Badge>
              <Badge
                className="cursor-pointer"
                data-oid="ej.qomy"
                onClick={() => {
                  const newCategories =
                    preferences.preferredCategories.includes("movies")
                      ? preferences.preferredCategories.filter(
                          (c) => c !== "movies"
                        )
                      : [...preferences.preferredCategories, "movies"];
                  setPreferences((prev) => ({
                    ...prev,
                    preferredCategories: newCategories,
                  }));
                }}
                variant={
                  preferences.preferredCategories.includes("movies")
                    ? "default"
                    : "outline"
                }
              >
                Movies
              </Badge>
              <Badge
                className="cursor-pointer"
                data-oid="zzte:47"
                onClick={() => {
                  const newCategories =
                    preferences.preferredCategories.includes("music")
                      ? preferences.preferredCategories.filter(
                          (c) => c !== "music"
                        )
                      : [...preferences.preferredCategories, "music"];
                  setPreferences((prev) => ({
                    ...prev,
                    preferredCategories: newCategories,
                  }));
                }}
                variant={
                  preferences.preferredCategories.includes("music")
                    ? "default"
                    : "outline"
                }
              >
                Music
              </Badge>
              <Badge
                className="cursor-pointer"
                data-oid="xwj_fi5"
                onClick={() => {
                  const newCategories =
                    preferences.preferredCategories.includes("sports")
                      ? preferences.preferredCategories.filter(
                          (c) => c !== "sports"
                        )
                      : [...preferences.preferredCategories, "sports"];
                  setPreferences((prev) => ({
                    ...prev,
                    preferredCategories: newCategories,
                  }));
                }}
                variant={
                  preferences.preferredCategories.includes("sports")
                    ? "default"
                    : "outline"
                }
              >
                Sports
              </Badge>
            </div>
          </div>

          <Separator data-oid="tbrbikw" />

          <div className="flex items-center justify-between" data-oid="1:aglff">
            <div className="flex items-center space-x-4" data-oid="fz43jq5">
              <Globe className="h-5 w-5 text-primary" data-oid="a7:pk72" />
              <div data-oid="inc:og3">
                <p className="font-medium" data-oid="ktuvofj">
                  Preferred Language
                </p>
                <p className="text-muted-foreground text-sm" data-oid="-4_-8v3">
                  Set your preferred language for quizzes.
                </p>
              </div>
            </div>
            <Select
              data-oid="0-1f2f_"
              onValueChange={(value) =>
                handleSelectChange("preferredLanguage", value)
              }
              value={preferences.preferredLanguage}
            >
              <SelectTrigger className="w-[180px]" data-oid="bdag5bt">
                <SelectValue data-oid="lbd5l-h" placeholder="Select language" />
              </SelectTrigger>
              <SelectContent data-oid="5ub3g.l">
                <SelectItem data-oid="dv_dmfz" value="english">
                  English
                </SelectItem>
                <SelectItem data-oid="h5egcew" value="spanish">
                  Spanish
                </SelectItem>
                <SelectItem data-oid="zja3g-s" value="french">
                  French
                </SelectItem>
                <SelectItem data-oid="xj.-pu." value="german">
                  German
                </SelectItem>
                <SelectItem data-oid="pxif1bw" value="chinese">
                  Chinese
                </SelectItem>
                <SelectItem data-oid="95_9::j" value="japanese">
                  Japanese
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter data-oid="7plamq9">
          <Button
            className="w-full"
            data-oid="ebsnmj."
            disabled={isLoading}
            onClick={handleSave}
          >
            {isLoading && (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="o497sfh"
              />
            )}
            Save Quiz Preferences
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
