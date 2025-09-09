"use client";

import {
  Bell,
  DollarSign,
  Loader2,
  MessageSquare,
  Trophy,
  Users,
} from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export function NotificationSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState({
    email: {
      quizComments: true,
      quizLikes: true,
      newFollowers: true,
      tournamentUpdates: true,
      earnings: true,
      newsletter: false,
      productUpdates: true,
    },
    push: {
      quizComments: true,
      quizLikes: false,
      newFollowers: true,
      tournamentUpdates: true,
      earnings: true,
      productUpdates: false,
    },
  });

  const handleToggle = (
    channel: "email" | "push",
    setting: string,
    value: boolean
  ) => {
    setNotifications((prev) => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        [setting]: value,
      },
    }));
  };

  const handleSave = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Notification preferences saved!");
    }, 1000);
  };

  return (
    <div className="space-y-6" data-oid="pi5z2m_">
      <div data-oid="1p8pv70">
        <h3 className="font-medium text-lg" data-oid="pddc__c">
          Notification Preferences
        </h3>
        <p className="text-muted-foreground text-sm" data-oid="33im3ql">
          Manage how and when you receive notifications from QuizHub .
        </p>
      </div>

      <Card data-oid="4ezpzj2">
        <CardHeader data-oid="1-5b:dy">
          <CardTitle data-oid="ebdmkoe">Email Notifications</CardTitle>
          <CardDescription data-oid="9fio2bk">
            Configure which emails you want to receive.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-oid=":54b58g">
          <div className="flex items-center justify-between" data-oid="7rk8_uk">
            <div className="flex items-center space-x-4" data-oid="w.dt1:n">
              <MessageSquare
                className="h-5 w-5 text-primary"
                data-oid="duzd3:x"
              />

              <div data-oid="xzpl272">
                <p className="font-medium" data-oid="dpzsm_9">
                  Quiz Comments
                </p>
                <p className="text-muted-foreground text-sm" data-oid=".dvfket">
                  Receive emails when someone comments on your quizzes.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.email.quizComments}
              data-oid="a8hnrsx"
              onCheckedChange={(value) =>
                handleToggle("email", "quizComments", value)
              }
            />
          </div>

          <Separator data-oid="vbzxbee" />

          <div className="flex items-center justify-between" data-oid="ii5yhx.">
            <div className="flex items-center space-x-4" data-oid="w7gjljd">
              <Bell className="h-5 w-5 text-primary" data-oid="56e._cq" />
              <div data-oid=".:ur4fp">
                <p className="font-medium" data-oid="zhauay8">
                  Quiz Likes
                </p>
                <p className="text-muted-foreground text-sm" data-oid="cva__z9">
                  Receive emails when someone likes your quizzes.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.email.quizLikes}
              data-oid="tfm0znr"
              onCheckedChange={(value) =>
                handleToggle("email", "quizLikes", value)
              }
            />
          </div>

          <Separator data-oid="tvrysps" />

          <div className="flex items-center justify-between" data-oid="cd40cmw">
            <div className="flex items-center space-x-4" data-oid="rd3yvnq">
              <Users className="h-5 w-5 text-primary" data-oid="lxzznv0" />
              <div data-oid="dbi5vx0">
                <p className="font-medium" data-oid=":cb9y10">
                  New Followers
                </p>
                <p className="text-muted-foreground text-sm" data-oid="hgqwf5v">
                  Receive emails when someone follows you.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.email.newFollowers}
              data-oid="86jsds9"
              onCheckedChange={(value) =>
                handleToggle("email", "newFollowers", value)
              }
            />
          </div>

          <Separator data-oid="ntxrabd" />

          <div className="flex items-center justify-between" data-oid="q4t19_7">
            <div className="flex items-center space-x-4" data-oid="h4nxpzq">
              <Trophy className="h-5 w-5 text-primary" data-oid="kh6axzz" />
              <div data-oid="jd0n9m5">
                <p className="font-medium" data-oid="or4fsae">
                  Tournament Updates
                </p>
                <p className="text-muted-foreground text-sm" data-oid="zi8.rf.">
                  Receive emails about tournaments you've joined.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.email.tournamentUpdates}
              data-oid="6dge-0:"
              onCheckedChange={(value) =>
                handleToggle("email", "tournamentUpdates", value)
              }
            />
          </div>

          <Separator data-oid="soun6on" />

          <div className="flex items-center justify-between" data-oid="5jhnmk4">
            <div className="flex items-center space-x-4" data-oid="uhtsf32">
              <DollarSign className="h-5 w-5 text-primary" data-oid="1aiqkhj" />
              <div data-oid="d7zawzf">
                <p className="font-medium" data-oid="xrti_3z">
                  Earnings Updates
                </p>
                <p className="text-muted-foreground text-sm" data-oid="ub4au.:">
                  Receive emails about your earnings and payouts.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.email.earnings}
              data-oid="kizauu-"
              onCheckedChange={(value) =>
                handleToggle("email", "earnings", value)
              }
            />
          </div>

          <Separator data-oid="uqe55_2" />

          <div className="flex items-center justify-between" data-oid="59yxcct">
            <div className="flex items-center space-x-4" data-oid="zmne5el">
              <Bell className="h-5 w-5 text-primary" data-oid="mt8-57o" />
              <div data-oid="eh206mm">
                <p className="font-medium" data-oid="rpg90wy">
                  Newsletter
                </p>
                <p className="text-muted-foreground text-sm" data-oid="8-xc-_f">
                  Receive our monthly newsletter with tips and updates.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.email.newsletter}
              data-oid="dj7mckn"
              onCheckedChange={(value) =>
                handleToggle("email", "newsletter", value)
              }
            />
          </div>

          <Separator data-oid="e6u.1g_" />

          <div className="flex items-center justify-between" data-oid="88808-b">
            <div className="flex items-center space-x-4" data-oid="3o64nx.">
              <Bell className="h-5 w-5 text-primary" data-oid=".kfygdz" />
              <div data-oid="g_s:bbs">
                <p className="font-medium" data-oid="qzybj_z">
                  Product Updates
                </p>
                <p className="text-muted-foreground text-sm" data-oid=".p08-v7">
                  Receive emails about new features and improvements.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.email.productUpdates}
              data-oid="fl5mwt6"
              onCheckedChange={(value) =>
                handleToggle("email", "productUpdates", value)
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card data-oid="_szxcdg">
        <CardHeader data-oid=".uz.cwu">
          <CardTitle data-oid="g5m0-:3">Push Notifications</CardTitle>
          <CardDescription data-oid="vq8wv8v">
            Configure which push notifications you want to receive.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="qumhs-t">
          <div className="flex items-center justify-between" data-oid="pct4g6h">
            <div className="flex items-center space-x-4" data-oid="xo7ev98">
              <MessageSquare
                className="h-5 w-5 text-primary"
                data-oid="a6_nc1v"
              />

              <div data-oid="8m-x.12">
                <p className="font-medium" data-oid="2szqu0x">
                  Quiz Comments
                </p>
                <p className="text-muted-foreground text-sm" data-oid="6q0ecoe">
                  Receive push notifications when someone comments on your
                  quizzes.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.push.quizComments}
              data-oid="kyo2wfv"
              onCheckedChange={(value) =>
                handleToggle("push", "quizComments", value)
              }
            />
          </div>

          <Separator data-oid="96w0b1l" />

          <div className="flex items-center justify-between" data-oid="vyzf.ti">
            <div className="flex items-center space-x-4" data-oid="dhen.a4">
              <Bell className="h-5 w-5 text-primary" data-oid="gdzz96x" />
              <div data-oid="f6ajxo_">
                <p className="font-medium" data-oid="vjqytx4">
                  Quiz Likes
                </p>
                <p className="text-muted-foreground text-sm" data-oid="0qk:gws">
                  Receive push notifications when someone likes your quizzes.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.push.quizLikes}
              data-oid="z7830q8"
              onCheckedChange={(value) =>
                handleToggle("push", "quizLikes", value)
              }
            />
          </div>

          <Separator data-oid="obbaqxm" />

          <div className="flex items-center justify-between" data-oid="2vbd_tt">
            <div className="flex items-center space-x-4" data-oid="9nesrj3">
              <Users className="h-5 w-5 text-primary" data-oid="cro-23z" />
              <div data-oid="srn.dn7">
                <p className="font-medium" data-oid="5-y9w0b">
                  New Followers
                </p>
                <p className="text-muted-foreground text-sm" data-oid="5sygl-h">
                  Receive push notifications when someone follows you.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.push.newFollowers}
              data-oid="gywpmbc"
              onCheckedChange={(value) =>
                handleToggle("push", "newFollowers", value)
              }
            />
          </div>

          <Separator data-oid="_cxolu1" />

          <div className="flex items-center justify-between" data-oid="ho1tr55">
            <div className="flex items-center space-x-4" data-oid=":_dwp67">
              <Trophy className="h-5 w-5 text-primary" data-oid="zylrla8" />
              <div data-oid="x4grjj2">
                <p className="font-medium" data-oid="5o3pf57">
                  Tournament Updates
                </p>
                <p className="text-muted-foreground text-sm" data-oid="gtrac8w">
                  Receive push notifications about tournaments you've joined.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.push.tournamentUpdates}
              data-oid="zdwyuf8"
              onCheckedChange={(value) =>
                handleToggle("push", "tournamentUpdates", value)
              }
            />
          </div>

          <Separator data-oid="39hmz8c" />

          <div className="flex items-center justify-between" data-oid="44l8lja">
            <div className="flex items-center space-x-4" data-oid="vn.p8ec">
              <DollarSign className="h-5 w-5 text-primary" data-oid="qz:lubz" />
              <div data-oid="l33f14u">
                <p className="font-medium" data-oid="odxotaf">
                  Earnings Updates
                </p>
                <p className="text-muted-foreground text-sm" data-oid=":a3_s1f">
                  Receive push notifications about your earnings and payouts.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.push.earnings}
              data-oid="4rhutz1"
              onCheckedChange={(value) =>
                handleToggle("push", "earnings", value)
              }
            />
          </div>

          <Separator data-oid="m-qqhbn" />

          <div className="flex items-center justify-between" data-oid="h:4-l:h">
            <div className="flex items-center space-x-4" data-oid="h:et.7.">
              <Bell className="h-5 w-5 text-primary" data-oid="h8f325e" />
              <div data-oid="mmlw.qx">
                <p className="font-medium" data-oid="v:1.ltd">
                  Product Updates
                </p>
                <p className="text-muted-foreground text-sm" data-oid="-kacme9">
                  Receive push notifications about new features and
                  improvements.
                </p>
              </div>
            </div>
            <Switch
              checked={notifications.push.productUpdates}
              data-oid="3ad0unc"
              onCheckedChange={(value) =>
                handleToggle("push", "productUpdates", value)
              }
            />
          </div>
        </CardContent>
        <CardFooter data-oid="lmg-o28">
          <Button
            className="w-full"
            data-oid="eh6d_vs"
            disabled={isLoading}
            onClick={handleSave}
          >
            {isLoading && (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="v62_jk5"
              />
            )}
            Save Notification Preferences
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
