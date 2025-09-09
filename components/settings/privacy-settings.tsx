"use client";

import { Eye, Loader2, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Activity, Mail, Trophy, Users } from "./missing-icons";

export function PrivacySettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    quizVisibility: "public",
    showOnLeaderboard: true,
    activityVisibility: "followers",
    allowTagging: true,
    showEmail: false,
    dataCollection: true,
  });

  const handleToggle = (setting: string, value: boolean) => {
    setPrivacy((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  const handleSelectChange = (setting: string, value: string) => {
    setPrivacy((prev) => ({
      ...prev,
      [setting]: value,
    }));
  };

  const handleSave = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Privacy settings saved!");
    }, 1000);
  };

  return (
    <div className="space-y-6" data-oid="_v749__">
      <div data-oid="__:_3n:">
        <h3 className="font-medium text-lg" data-oid="1svbil0">
          Privacy Settings
        </h3>
        <p className="text-muted-foreground text-sm" data-oid="qk-74dx">
          Control your privacy and how your information is shared on QuizHub .
        </p>
      </div>

      <Card data-oid="emhuxwr">
        <CardHeader data-oid="j7h1wj_">
          <CardTitle data-oid="zmq444s">Profile Privacy</CardTitle>
          <CardDescription data-oid="t42w0tr">
            Control who can see your profile and activity.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="r-vkt:6">
          <div className="flex items-center justify-between" data-oid="mdjunw5">
            <div className="flex items-center space-x-4" data-oid="04ughyt">
              <Eye className="h-5 w-5 text-primary" data-oid="bq:nr:z" />
              <div data-oid="jcd9de5">
                <p className="font-medium" data-oid=":z2jxtd">
                  Profile Visibility
                </p>
                <p className="text-muted-foreground text-sm" data-oid="4bbjyd4">
                  Control who can see your profile.
                </p>
              </div>
            </div>
            <Select
              data-oid="lfwhzy-"
              onValueChange={(value) =>
                handleSelectChange("profileVisibility", value)
              }
              value={privacy.profileVisibility}
            >
              <SelectTrigger className="w-[180px]" data-oid="c.rnmtq">
                <SelectValue
                  data-oid="fvmekqe"
                  placeholder="Select visibility"
                />
              </SelectTrigger>
              <SelectContent data-oid="5g4fhpy">
                <SelectItem data-oid="hjpxsad" value="public">
                  Public
                </SelectItem>
                <SelectItem data-oid="tt2som9" value="followers">
                  Followers Only
                </SelectItem>
                <SelectItem data-oid="nb7t3zj" value="private">
                  Private
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator data-oid=":1ft3p1" />

          <div className="flex items-center justify-between" data-oid="afn:zfv">
            <div className="flex items-center space-x-4" data-oid="qm7yyad">
              <Eye className="h-5 w-5 text-primary" data-oid="qkmuaqm" />
              <div data-oid="440efg3">
                <p className="font-medium" data-oid="5nhgx.r">
                  Quiz Visibility
                </p>
                <p className="text-muted-foreground text-sm" data-oid="onkit29">
                  Control who can see your created quizzes.
                </p>
              </div>
            </div>
            <Select
              data-oid="m9paogq"
              onValueChange={(value) =>
                handleSelectChange("quizVisibility", value)
              }
              value={privacy.quizVisibility}
            >
              <SelectTrigger className="w-[180px]" data-oid="g_xz19c">
                <SelectValue
                  data-oid="6zksfwe"
                  placeholder="Select visibility"
                />
              </SelectTrigger>
              <SelectContent data-oid="p3cok8h">
                <SelectItem data-oid="5qlg.ex" value="public">
                  Public
                </SelectItem>
                <SelectItem data-oid="sdh8x5g" value="followers">
                  Followers Only
                </SelectItem>
                <SelectItem data-oid="1pnnzb9" value="private">
                  Private
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator data-oid=":kbd1jh" />

          <div className="flex items-center justify-between" data-oid="4k9825r">
            <div className="flex items-center space-x-4" data-oid="ui9staa">
              <Trophy className="h-5 w-5 text-primary" data-oid="4ckv.ch" />
              <div data-oid="g_4:7c2">
                <p className="font-medium" data-oid="3f68v7l">
                  Leaderboard Visibility
                </p>
                <p className="text-muted-foreground text-sm" data-oid="7nmu8:7">
                  Show your profile on public leaderboards.
                </p>
              </div>
            </div>
            <Switch
              checked={privacy.showOnLeaderboard}
              data-oid="8-.z765"
              onCheckedChange={(value) =>
                handleToggle("showOnLeaderboard", value)
              }
            />
          </div>

          <Separator data-oid="d86a9vi" />

          <div className="flex items-center justify-between" data-oid="smfi1_q">
            <div className="flex items-center space-x-4" data-oid="ta:l20f">
              <Activity className="h-5 w-5 text-primary" data-oid="w-v5s5a" />
              <div data-oid="a5hbefv">
                <p className="font-medium" data-oid="cy15a91">
                  Activity Visibility
                </p>
                <p className="text-muted-foreground text-sm" data-oid="dlwx.9i">
                  Control who can see your activity feed.
                </p>
              </div>
            </div>
            <Select
              data-oid="o4f4zq4"
              onValueChange={(value) =>
                handleSelectChange("activityVisibility", value)
              }
              value={privacy.activityVisibility}
            >
              <SelectTrigger className="w-[180px]" data-oid="4qxeemw">
                <SelectValue
                  data-oid=".rh1lr-"
                  placeholder="Select visibility"
                />
              </SelectTrigger>
              <SelectContent data-oid="gk3t_r_">
                <SelectItem data-oid="y2tbsri" value="public">
                  Public
                </SelectItem>
                <SelectItem data-oid="1auh.o8" value="followers">
                  Followers Only
                </SelectItem>
                <SelectItem data-oid="fjc_jlk" value="private">
                  Private
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card data-oid=":yeq7js">
        <CardHeader data-oid="h4zx3wb">
          <CardTitle data-oid="xm-2-ll">Contact Privacy</CardTitle>
          <CardDescription data-oid="knmrbos">
            Control how others can interact with you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="fc4df1x">
          <div className="flex items-center justify-between" data-oid="jpxdv08">
            <div className="flex items-center space-x-4" data-oid="up3dnd.">
              <Users className="h-5 w-5 text-primary" data-oid="844gj56" />
              <div data-oid="otnts09">
                <p className="font-medium" data-oid="245bm-l">
                  Allow Tagging
                </p>
                <p className="text-muted-foreground text-sm" data-oid="k.ex5ck">
                  Allow others to tag you in quizzes and comments.
                </p>
              </div>
            </div>
            <Switch
              checked={privacy.allowTagging}
              data-oid="ldlg5vh"
              onCheckedChange={(value) => handleToggle("allowTagging", value)}
            />
          </div>

          <Separator data-oid="oi--4vl" />

          <div className="flex items-center justify-between" data-oid="_dv-h0l">
            <div className="flex items-center space-x-4" data-oid="nl5pc55">
              <Mail className="h-5 w-5 text-primary" data-oid="fpj9-c1" />
              <div data-oid="s:rida-">
                <p className="font-medium" data-oid="mcj-pg9">
                  Show Email Address
                </p>
                <p className="text-muted-foreground text-sm" data-oid="ezc6umx">
                  Show your email address on your public profile.
                </p>
              </div>
            </div>
            <Switch
              checked={privacy.showEmail}
              data-oid="rnf2sx9"
              onCheckedChange={(value) => handleToggle("showEmail", value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card data-oid="hoaxj3g">
        <CardHeader data-oid="jbza5aa">
          <CardTitle data-oid="g4dg:yq">Data Privacy</CardTitle>
          <CardDescription data-oid="680r43_">
            Control how your data is used on QuizHub .
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="cpy.zb_">
          <div className="flex items-center justify-between" data-oid="n4585y2">
            <div className="flex items-center space-x-4" data-oid="wnksz3b">
              <Shield className="h-5 w-5 text-primary" data-oid="57brfg4" />
              <div data-oid="7r:hp-9">
                <p className="font-medium" data-oid="66rjh3h">
                  Data Collection
                </p>
                <p className="text-muted-foreground text-sm" data-oid="pll7dk6">
                  Allow QuizHub to collect data to improve your experience.
                </p>
              </div>
            </div>
            <Switch
              checked={privacy.dataCollection}
              data-oid="yr6tsfi"
              onCheckedChange={(value) => handleToggle("dataCollection", value)}
            />
          </div>
        </CardContent>
        <CardFooter data-oid="q6z59g6">
          <Button
            className="w-full"
            data-oid=".5txor_"
            disabled={isLoading}
            onClick={handleSave}
          >
            {isLoading && (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="2up4u82"
              />
            )}
            Save Privacy Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
