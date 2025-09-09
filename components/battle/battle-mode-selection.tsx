"use client";

import {
  Clock,
  Globe,
  ListChecks,
  Lock,
  Swords,
  Trophy,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import type { BattleState } from "./battle-page";

interface BattleModeSelectionProps {
  onModeSelect: (
    mode: "1v1" | "group",
    type: "public" | "private",
    settings: Partial<BattleState>
  ) => void;
}

export function BattleModeSelection({
  onModeSelect,
}: BattleModeSelectionProps) {
  const [activeTab, setActiveTab] = useState<"1v1" | "group">("1v1");
  const [battleType, setBattleType] = useState<"public" | "private">("public");
  const [category, setCategory] = useState<string>("random");
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "medium"
  );
  const [timePerQuestion, setTimePerQuestion] = useState<number>(10);
  const [totalQuestions, setTotalQuestions] = useState<number>(10);
  const [roomCode, setRoomCode] = useState<string>("");

  const handleStartBattle = () => {
    onModeSelect(activeTab, battleType, {
      category: category !== "random" ? category : undefined,
      difficulty,
      timePerQuestion,
      totalQuestions,
      roomCode: battleType === "private" ? roomCode : undefined,
    });
  };

  return (
    <div className="mx-auto max-w-4xl" data-oid="2vb560z">
      <div className="mb-8 text-center" data-oid="a92yy1w">
        <h1 className="mb-2 font-bold text-3xl" data-oid="t454l11">
          Quiz Battle
        </h1>
        <p className="text-muted-foreground" data-oid="7eslr.5">
          Challenge friends or random players to real-time quiz battles
        </p>
      </div>

      <Tabs
        className="w-full"
        data-oid="_0vv.6b"
        defaultValue="1v1"
        onValueChange={(value) => setActiveTab(value as "1v1" | "group")}
      >
        <TabsList
          className="mb-6 flex grid-cols-2 gap-4 overflow-x-auto sm:grid"
          data-oid="9syp_y8"
        >
          <TabsTrigger
            className="flex items-center gap-2"
            data-oid="sm4nqau"
            value="1v1"
          >
            <Swords className="h-4 w-4" data-oid="nh1ith8" />
            <span data-oid="d-fzrdg">1v1 Battle</span>
          </TabsTrigger>
          <TabsTrigger
            className="flex items-center gap-2"
            data-oid="5jr6k43"
            value="group"
          >
            <Users className="h-4 w-4" data-oid="kpnb8sm" />
            <span data-oid="z.xan3r">Group Battle (3-10 players)</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent className="space-y-6" data-oid=".:k_ti-" value="1v1">
          <Card data-oid="-_an_2l">
            <CardHeader data-oid="07m2_ew">
              <CardTitle data-oid="1iq9a:2">1v1 Battle</CardTitle>
              <CardDescription data-oid="1.pew.n">
                Challenge a friend or get matched with a random player for a
                head-to-head quiz battle.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="seliho3">
              <div
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
                data-oid="t:xyxgq"
              >
                <div className="space-y-2" data-oid="klepkft">
                  <Label data-oid="e94vqdx" htmlFor="battle-type">
                    Battle Type
                  </Label>
                  <div className="grid grid-cols-2 gap-2" data-oid="bn840ch">
                    <Button
                      className="flex w-full items-center justify-center gap-2"
                      data-oid=":m2nq.7"
                      onClick={() => setBattleType("public")}
                      variant={battleType === "public" ? "default" : "outline"}
                    >
                      <Globe className="h-4 w-4" data-oid="gqdppzv" />
                      <span data-oid="p_o6-ke">Public</span>
                    </Button>
                    <Button
                      className="flex w-full items-center justify-center gap-2"
                      data-oid="_3k-ss0"
                      onClick={() => setBattleType("private")}
                      variant={battleType === "private" ? "default" : "outline"}
                    >
                      <Lock className="h-4 w-4" data-oid="438t_ts" />
                      <span data-oid="_i5bgxh">Private</span>
                    </Button>
                  </div>
                </div>

                {battleType === "private" && (
                  <div className="space-y-2" data-oid="1kmvhar">
                    <Label data-oid="-4cgeeh" htmlFor="room-code">
                      Room Code
                    </Label>
                    <Input
                      data-oid="skekfq-"
                      id="room-code"
                      onChange={(e) => setRoomCode(e.target.value)}
                      placeholder="Enter or generate room code"
                      value={roomCode}
                    />
                  </div>
                )}

                <div className="space-y-2" data-oid="jc3-atc">
                  <Label data-oid="q3i_uuf" htmlFor="category">
                    Category
                  </Label>
                  <Select
                    data-oid="--sxd9d"
                    onValueChange={setCategory}
                    value={category}
                  >
                    <SelectTrigger data-oid="6n-dolz" id="category">
                      <SelectValue
                        data-oid="v1dted-"
                        placeholder="Select category"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="lnlk7fa">
                      <SelectItem data-oid="wuy::zn" value="random">
                        Random
                      </SelectItem>
                      <SelectItem data-oid="7erv4:5" value="science">
                        Science
                      </SelectItem>
                      <SelectItem data-oid="iit.rch" value="history">
                        History
                      </SelectItem>
                      <SelectItem data-oid=".bal6kv" value="geography">
                        Geography
                      </SelectItem>
                      <SelectItem data-oid="73-ab8t" value="entertainment">
                        Entertainment
                      </SelectItem>
                      <SelectItem data-oid="lxhs-70" value="sports">
                        Sports
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="tjaftdo">
                  <Label data-oid="j7kxotl" htmlFor="difficulty">
                    Difficulty
                  </Label>
                  <Select
                    data-oid="ynjhd.w"
                    onValueChange={(value) =>
                      setDifficulty(value as "easy" | "medium" | "hard")
                    }
                    value={difficulty}
                  >
                    <SelectTrigger data-oid="b_ra-lk" id="difficulty">
                      <SelectValue
                        data-oid="o53.6dn"
                        placeholder="Select difficulty"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="x3w457x">
                      <SelectItem data-oid="1j5ua:6" value="easy">
                        Easy
                      </SelectItem>
                      <SelectItem data-oid="ys1y5he" value="medium">
                        Medium
                      </SelectItem>
                      <SelectItem data-oid="2h::rwk" value="hard">
                        Hard
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="txm64lu">
                  <Label data-oid=":ila3y6" htmlFor="time-per-question">
                    Time Per Question (seconds)
                  </Label>
                  <Select
                    data-oid="e0wda_6"
                    onValueChange={(value) =>
                      setTimePerQuestion(Number.parseInt(value))
                    }
                    value={timePerQuestion.toString()}
                  >
                    <SelectTrigger data-oid="zjsdm0r" id="time-per-question">
                      <SelectValue
                        data-oid="3npz94x"
                        placeholder="Select time"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="i5sb0pc">
                      <SelectItem data-oid="8.8wno:" value="5">
                        5 seconds
                      </SelectItem>
                      <SelectItem data-oid="evae385" value="10">
                        10 seconds
                      </SelectItem>
                      <SelectItem data-oid="ja3m42:" value="15">
                        15 seconds
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="bu4-pww">
                  <Label data-oid="bm_dx-g" htmlFor="total-questions">
                    Number of Questions
                  </Label>
                  <Select
                    data-oid="_xvv_fw"
                    onValueChange={(value) =>
                      setTotalQuestions(Number.parseInt(value))
                    }
                    value={totalQuestions.toString()}
                  >
                    <SelectTrigger data-oid="ziof8ux" id="total-questions">
                      <SelectValue
                        data-oid="z2x4618"
                        placeholder="Select number"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="h:gfmmw">
                      <SelectItem data-oid="06-np4b" value="5">
                        5 questions
                      </SelectItem>
                      <SelectItem data-oid="usk:ixo" value="10">
                        10 questions
                      </SelectItem>
                      <SelectItem data-oid="1:zo-3b" value="15">
                        15 questions
                      </SelectItem>
                      <SelectItem data-oid="fmygqdk" value="20">
                        20 questions
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter data-oid="czjk8fd">
              <Button
                className="w-full"
                data-oid=".f1svke"
                onClick={handleStartBattle}
              >
                Start 1v1 Battle
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent className="space-y-6" data-oid="xu1ppjl" value="group">
          <Card data-oid="4.9v249">
            <CardHeader data-oid="_wnkmcp">
              <CardTitle data-oid="nj4rb-9">Group Battle</CardTitle>
              <CardDescription data-oid=":tz:w-t">
                Create or join a group battle with 3-10 players competing
                simultaneously.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="d4uy5pr">
              <div
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
                data-oid="trum6av"
              >
                <div className="space-y-2" data-oid="7595vdy">
                  <Label data-oid="wvigfng" htmlFor="battle-type-group">
                    Battle Type
                  </Label>
                  <div className="grid grid-cols-2 gap-2" data-oid="xp8q0iz">
                    <Button
                      className="flex w-full items-center justify-center gap-2"
                      data-oid=".:o.1i2"
                      onClick={() => setBattleType("public")}
                      variant={battleType === "public" ? "default" : "outline"}
                    >
                      <Globe className="h-4 w-4" data-oid="0h1qny6" />
                      <span data-oid="yi92m:e">Public</span>
                    </Button>
                    <Button
                      className="flex w-full items-center justify-center gap-2"
                      data-oid="zun2np5"
                      onClick={() => setBattleType("private")}
                      variant={battleType === "private" ? "default" : "outline"}
                    >
                      <Lock className="h-4 w-4" data-oid="5xe4pnz" />
                      <span data-oid="t1:hw6y">Private</span>
                    </Button>
                  </div>
                </div>

                {battleType === "private" && (
                  <div className="space-y-2" data-oid="o95ql0q">
                    <Label data-oid="z4_z.el" htmlFor="room-code-group">
                      Room Code
                    </Label>
                    <Input
                      data-oid="g0lgszb"
                      id="room-code-group"
                      onChange={(e) => setRoomCode(e.target.value)}
                      placeholder="Enter or generate room code"
                      value={roomCode}
                    />
                  </div>
                )}

                <div className="space-y-2" data-oid="ucvjw7c">
                  <Label data-oid="w7ks4bo" htmlFor="category-group">
                    Category
                  </Label>
                  <Select
                    data-oid="77fv376"
                    onValueChange={setCategory}
                    value={category}
                  >
                    <SelectTrigger data-oid="-wvhcpt" id="category-group">
                      <SelectValue
                        data-oid="g0mg_gu"
                        placeholder="Select category"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="el:dawj">
                      <SelectItem data-oid=".08fnqk" value="random">
                        Random
                      </SelectItem>
                      <SelectItem data-oid="p675ziv" value="science">
                        Science
                      </SelectItem>
                      <SelectItem data-oid="iny9wm9" value="history">
                        History
                      </SelectItem>
                      <SelectItem data-oid="utkd-hn" value="geography">
                        Geography
                      </SelectItem>
                      <SelectItem data-oid="yxm.ztd" value="entertainment">
                        Entertainment
                      </SelectItem>
                      <SelectItem data-oid="v_xzz88" value="sports">
                        Sports
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="0a73usx">
                  <Label data-oid="-g-ri:z" htmlFor="difficulty-group">
                    Difficulty
                  </Label>
                  <Select
                    data-oid="yc4hao4"
                    onValueChange={(value) =>
                      setDifficulty(value as "easy" | "medium" | "hard")
                    }
                    value={difficulty}
                  >
                    <SelectTrigger data-oid="3:kqyj1" id="difficulty-group">
                      <SelectValue
                        data-oid="9myi08h"
                        placeholder="Select difficulty"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="v_sb6k-">
                      <SelectItem data-oid="56ed101" value="easy">
                        Easy
                      </SelectItem>
                      <SelectItem data-oid="6lcvxi_" value="medium">
                        Medium
                      </SelectItem>
                      <SelectItem data-oid="8kuo8cu" value="hard">
                        Hard
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="8ls83ws">
                  <Label data-oid="91h1_5k" htmlFor="time-per-question-group">
                    Time Per Question (seconds)
                  </Label>
                  <Select
                    data-oid="7m7fwl6"
                    onValueChange={(value) =>
                      setTimePerQuestion(Number.parseInt(value))
                    }
                    value={timePerQuestion.toString()}
                  >
                    <SelectTrigger
                      data-oid="cb7cyh7"
                      id="time-per-question-group"
                    >
                      <SelectValue
                        data-oid="81x_.gx"
                        placeholder="Select time"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="5cwk0pb">
                      <SelectItem data-oid="pz7ugjr" value="5">
                        5 seconds
                      </SelectItem>
                      <SelectItem data-oid="7tzz::w" value="10">
                        10 seconds
                      </SelectItem>
                      <SelectItem data-oid="xh.mm3m" value="15">
                        15 seconds
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2" data-oid="p53mtad">
                  <Label data-oid="1948ihx" htmlFor="total-questions-group">
                    Number of Questions
                  </Label>
                  <Select
                    data-oid="k-.vszh"
                    onValueChange={(value) =>
                      setTotalQuestions(Number.parseInt(value))
                    }
                    value={totalQuestions.toString()}
                  >
                    <SelectTrigger
                      data-oid="atjsuzx"
                      id="total-questions-group"
                    >
                      <SelectValue
                        data-oid="sqnfxvo"
                        placeholder="Select number"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="vsa:-g9">
                      <SelectItem data-oid="i8h5m38" value="5">
                        5 questions
                      </SelectItem>
                      <SelectItem data-oid="7wj5oh_" value="10">
                        10 questions
                      </SelectItem>
                      <SelectItem data-oid="s_6j-g5" value="15">
                        15 questions
                      </SelectItem>
                      <SelectItem data-oid="o-btp77" value="20">
                        20 questions
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter data-oid="f4wpb9z">
              <Button
                className="w-full"
                data-oid="wm-5ln0"
                onClick={handleStartBattle}
              >
                Start Group Battle
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div
        className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
        data-oid="in5q5eh"
      >
        <Card data-oid="y_7b9-y">
          <CardHeader className="pb-2" data-oid="km26i-c">
            <CardTitle
              className="flex items-center gap-2 text-lg"
              data-oid="ex00ztf"
            >
              <Trophy className="h-5 w-5 text-yellow-500" data-oid="smiv83m" />
              Rewards
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="tkb1t2c">
            <ul className="space-y-1 text-sm" data-oid="vk_24fb">
              <li className="flex items-center gap-2" data-oid="c6j4gxa">
                <div
                  className="h-2 w-2 rounded-full bg-green-500"
                  data-oid="eb6eo_o"
                />
                <span data-oid="r:j4bf-">Earn XP based on performance</span>
              </li>
              <li className="flex items-center gap-2" data-oid="ctbc.b-">
                <div
                  className="h-2 w-2 rounded-full bg-green-500"
                  data-oid="29scpvf"
                />
                <span data-oid="ylcxpzx">Win streak bonuses</span>
              </li>
              <li className="flex items-center gap-2" data-oid="kgo6ii2">
                <div
                  className="h-2 w-2 rounded-full bg-green-500"
                  data-oid="o4_g2pw"
                />
                <span data-oid="g__uls-">Unlock special badges</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card data-oid="lspclzb">
          <CardHeader className="pb-2" data-oid="0xayj_m">
            <CardTitle
              className="flex items-center gap-2 text-lg"
              data-oid="52ce2_p"
            >
              <Clock className="h-5 w-5 text-blue-500" data-oid="3d5z0tk" />
              Battle Rules
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="kkk_nxs">
            <ul className="space-y-1 text-sm" data-oid="vw99p_x">
              <li className="flex items-center gap-2" data-oid="b3bm40j">
                <div
                  className="h-2 w-2 rounded-full bg-blue-500"
                  data-oid="5hml3zd"
                />
                <span data-oid="7d9yke.">No back navigation</span>
              </li>
              <li className="flex items-center gap-2" data-oid="jiy9p._">
                <div
                  className="h-2 w-2 rounded-full bg-blue-500"
                  data-oid="6a3r3xc"
                />
                <span data-oid="0wxreaf">Auto-submit when time's up</span>
              </li>
              <li className="flex items-center gap-2" data-oid="ftuwwv0">
                <div
                  className="h-2 w-2 rounded-full bg-blue-500"
                  data-oid="dnq8cq."
                />
                <span data-oid="si3t52k">Score based on speed & accuracy</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card data-oid=":67p6sw">
          <CardHeader className="pb-2" data-oid="90z3j1i">
            <CardTitle
              className="flex items-center gap-2 text-lg"
              data-oid="9v_k9-t"
            >
              <ListChecks
                className="h-5 w-5 text-purple-500"
                data-oid="po:glo4"
              />
              Ranking System
            </CardTitle>
          </CardHeader>
          <CardContent data-oid="4yypix3">
            <ul className="space-y-1 text-sm" data-oid="eclp9.8">
              <li className="flex items-center gap-2" data-oid="mzrzx:m">
                <div
                  className="h-2 w-2 rounded-full bg-purple-500"
                  data-oid="d-cjflg"
                />
                <span data-oid="..x50yp">Bronze → Silver → Gold → Diamond</span>
              </li>
              <li className="flex items-center gap-2" data-oid="g56tv63">
                <div
                  className="h-2 w-2 rounded-full bg-purple-500"
                  data-oid="pqo40hi"
                />
                <span data-oid="g0m:w6o">Seasonal leaderboards</span>
              </li>
              <li className="flex items-center gap-2" data-oid="6je.r5_">
                <div
                  className="h-2 w-2 rounded-full bg-purple-500"
                  data-oid="_sg_kw1"
                />
                <span data-oid="6hw-ijw">Special rewards for top players</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
