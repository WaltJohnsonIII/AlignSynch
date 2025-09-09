"use client";
import {
  Copy,
  DollarSign,
  ExternalLink,
  LinkIcon,
  Share2,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Referral = {
  id: number;
  username: string;
  name: string;
  date: string;
  status: string;
  earnings: number;
  avatar: string;
};
// Sample data
const referrals: Referral[] = [
  {
    id: 1,
    username: "johndoe",
    name: "John Doe",
    date: "2023-05-15",
    status: "active",
    earnings: 12.5,
    avatar: "/avatars/alex.png",
  },
  {
    id: 2,
    username: "sarahsmith",
    name: "Sarah Smith",
    date: "2023-05-10",
    status: "active",
    earnings: 8.75,
    avatar: "/avatars/sarah.webp",
  },
  {
    id: 3,
    username: "mikebrown",
    name: "Mike Brown",
    date: "2023-05-03",
    status: "inactive",
    earnings: 5.25,
    avatar: "/avatars/brain.png",
  },
  {
    id: 4,
    username: "emilyjones",
    name: "Emily Jones",
    date: "2023-04-28",
    status: "active",
    earnings: 6.0,
    avatar: "/avatars/guru.png",
  },
];

export function AffiliateDashboard() {
  const referralLink = "https://quizmaker.com/ref/username123";

  const totalReferrals = referrals.length;
  const activeReferrals = referrals.filter((r) => r.status === "active").length;
  const totalEarnings = referrals.reduce((sum, r) => sum + r.earnings, 0);
  const conversionRate = 24.8; // Percentage

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    // Show toast notification
  };

  return (
    <div className="space-y-6" data-oid="vj:x085">
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="y-tm-x."
      >
        <Card data-oid="we-5los">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="9tl9ifp"
          >
            <CardTitle className="font-medium text-sm" data-oid="r6k2mqj">
              Total Referrals
            </CardTitle>
            <Users
              className="h-4 w-4 text-muted-foreground"
              data-oid="-w20fw3"
            />
          </CardHeader>
          <CardContent data-oid="jived9b">
            <div className="font-bold text-2xl" data-oid="7.9r4_:">
              {totalReferrals}
            </div>
            <p className="text-muted-foreground text-xs" data-oid="fkja.w_">
              Users who signed up with your link
            </p>
          </CardContent>
        </Card>

        <Card data-oid="mxekik7">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="nddy_5o"
          >
            <CardTitle className="font-medium text-sm" data-oid="6:5brry">
              Active Referrals
            </CardTitle>
            <Users
              className="h-4 w-4 text-muted-foreground"
              data-oid="ewq3qh."
            />
          </CardHeader>
          <CardContent data-oid="b72zi9i">
            <div className="font-bold text-2xl" data-oid="agf7gdz">
              {activeReferrals}
            </div>
            <p className="text-muted-foreground text-xs" data-oid="8qt6pu_">
              {((activeReferrals / totalReferrals) * 100).toFixed(1)}% of total
              referrals
            </p>
          </CardContent>
        </Card>

        <Card data-oid="jlnvgw7">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="68tb0ls"
          >
            <CardTitle className="font-medium text-sm" data-oid="8wzow17">
              Total Earnings
            </CardTitle>
            <DollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="9no.bm:"
            />
          </CardHeader>
          <CardContent data-oid="phwtvxl">
            <div className="font-bold text-2xl" data-oid="--d05x:">
              ${totalEarnings.toFixed(2)}
            </div>
            <p className="text-muted-foreground text-xs" data-oid="u.th13b">
              From affiliate commissions
            </p>
          </CardContent>
        </Card>

        <Card data-oid="2kprv6d">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="muwozpq"
          >
            <CardTitle className="font-medium text-sm" data-oid="1si135c">
              Conversion Rate
            </CardTitle>
            <TrendingUp
              className="h-4 w-4 text-muted-foreground"
              data-oid="6fyh36v"
            />
          </CardHeader>
          <CardContent data-oid="4uetb2r">
            <div className="font-bold text-2xl" data-oid="v4s1s6u">
              {conversionRate}%
            </div>
            <p className="text-muted-foreground text-xs" data-oid="8blp-iu">
              Of link clicks that convert
            </p>
          </CardContent>
        </Card>
      </div>

      <Card data-oid="u_eas_a">
        <CardHeader data-oid="vhsa2la">
          <CardTitle data-oid="l4gmp-o">Your Referral Link</CardTitle>
          <CardDescription data-oid="_r8mie3">
            Share this link to earn commissions
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="i1as:m7">
          <div className="flex flex-col gap-2 sm:flex-row" data-oid="miz6j-a">
            <div className="relative flex-1" data-oid="elgf41u">
              <LinkIcon
                className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
                data-oid="bs.469l"
              />

              <Input
                className="pl-9"
                data-oid="4--foz8"
                readOnly
                value={referralLink}
              />
            </div>
            <Button data-oid="tf7xp4p" onClick={copyReferralLink}>
              <Copy className="mr-2 h-4 w-4" data-oid="9_--gp8" />
              Copy
            </Button>
            <Button data-oid="2p1bj:r">
              <Share2 className="mr-2 h-4 w-4" data-oid="57ub..r" />
              Share
            </Button>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3" data-oid="zh622-l">
            <Card data-oid="d.0--.:">
              <CardHeader className="p-4" data-oid="0ntlj08">
                <CardTitle className="text-sm" data-oid="8zqfcq8">
                  Commission Rate
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="ygh2ntx">
                <div className="font-bold text-2xl" data-oid="v8yb5bd">
                  20%
                </div>
                <p className="text-muted-foreground text-xs" data-oid="7h8a3zs">
                  Of all earnings from your referrals
                </p>
              </CardContent>
            </Card>

            <Card data-oid="f1m:0jo">
              <CardHeader className="p-4" data-oid="cn:rd7x">
                <CardTitle className="text-sm" data-oid="s2fonlr">
                  Link Clicks
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="3zk01pd">
                <div className="font-bold text-2xl" data-oid="b.gcj9e">
                  169
                </div>
                <p className="text-muted-foreground text-xs" data-oid=":bpn23c">
                  In the last 30 days
                </p>
              </CardContent>
            </Card>

            <Card data-oid="32f046i">
              <CardHeader className="p-4" data-oid="k:psc4f">
                <CardTitle className="text-sm" data-oid="rt2wa1z">
                  Pending Commissions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid=":b4b-q6">
                <div className="font-bold text-2xl" data-oid="46fx59j">
                  $18.25
                </div>
                <p className="text-muted-foreground text-xs" data-oid="m98uw6z">
                  Will be added to your balance soon
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card data-oid="_cp-vi.">
        <CardHeader data-oid="jy-tdyj">
          <CardTitle data-oid="okct_o9">Your Referrals</CardTitle>
          <CardDescription data-oid="p:_c_rp">
            Users who signed up using your referral link
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="z3zydjj">
          <Tabs className="space-y-4" data-oid="9j034km" defaultValue="all">
            <TabsList data-oid="v2-hhzh">
              <TabsTrigger data-oid=".1mcz9c" value="all">
                All Referrals
              </TabsTrigger>
              <TabsTrigger data-oid="-223d:j" value="active">
                Active
              </TabsTrigger>
              <TabsTrigger data-oid="5bhltg3" value="inactive">
                Inactive
              </TabsTrigger>
            </TabsList>

            <TabsContent className="space-y-4" data-oid="-f1q.mt" value="all">
              {referrals.map((referral) => (
                <ReferralCard
                  data-oid="kytbf-9"
                  key={referral.id}
                  referral={referral}
                />
              ))}
            </TabsContent>

            <TabsContent
              className="space-y-4"
              data-oid="mhbb6ai"
              value="active"
            >
              {referrals
                .filter((r) => r.status === "active")
                .map((referral) => (
                  <ReferralCard
                    data-oid="1c2-hgm"
                    key={referral.id}
                    referral={referral}
                  />
                ))}
            </TabsContent>

            <TabsContent
              className="space-y-4"
              data-oid="42gtbcx"
              value="inactive"
            >
              {referrals
                .filter((r) => r.status === "inactive")
                .map((referral) => (
                  <ReferralCard
                    data-oid="cu.c1f5"
                    key={referral.id}
                    referral={referral}
                  />
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card data-oid="maylt9q">
        <CardHeader data-oid="f:e_s:m">
          <CardTitle data-oid="z4.3:h8">Commission Tiers</CardTitle>
          <CardDescription data-oid="sr8:-k-">
            Earn more as you refer more users
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="66hw7k9">
          <div className="space-y-4" data-oid="mpvackr">
            <div className="relative pt-4" data-oid="qkhnv22">
              <div
                className="absolute top-0 left-0 h-2 w-full overflow-hidden rounded-full bg-muted"
                data-oid="g57x7ds"
              >
                <div
                  className="h-full bg-primary"
                  data-oid="aru8m5i"
                  style={{ width: "60%" }}
                />
              </div>
              <div
                className="mt-1 flex justify-between text-muted-foreground text-xs"
                data-oid="5v0z0dg"
              >
                <span data-oid="4-7ie4y">0</span>
                <span data-oid="fzmyi:g">25</span>
                <span data-oid="k8m.-fe">50</span>
                <span data-oid="isqd:h3">100+</span>
              </div>
            </div>

            <div className="space-y-3" data-oid="ekmem30">
              <div
                className="flex items-center justify-between rounded-lg border p-3"
                data-oid="zis7l0."
              >
                <div data-oid="xqzki0i">
                  <p className="font-medium" data-oid="v2u__ee">
                    Basic Tier
                  </p>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="w80og4r"
                  >
                    0-24 active referrals
                  </p>
                </div>
                <Badge data-oid="y23a_71">20% Commission</Badge>
              </div>

              <div
                className="flex items-center justify-between rounded-lg border p-3"
                data-oid="y5mfo.9"
              >
                <div data-oid="572cutp">
                  <p className="font-medium" data-oid="fl9lf5o">
                    Silver Tier
                  </p>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid=":fv9b1c"
                  >
                    25-49 active referrals
                  </p>
                </div>
                <Badge data-oid="no9jq9t" variant="outline">
                  25% Commission
                </Badge>
              </div>

              <div
                className="flex items-center justify-between rounded-lg border p-3"
                data-oid="-geq-.x"
              >
                <div data-oid="c3nbxq8">
                  <p className="font-medium" data-oid="zg1ej_4">
                    Gold Tier
                  </p>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="xwjqauv"
                  >
                    50-99 active referrals
                  </p>
                </div>
                <Badge data-oid="_7_-4j2" variant="outline">
                  30% Commission
                </Badge>
              </div>

              <div
                className="flex items-center justify-between rounded-lg border p-3"
                data-oid="51k-q1z"
              >
                <div data-oid="-dkp2of">
                  <p className="font-medium" data-oid="swkiomo">
                    Platinum Tier
                  </p>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="rwgs3jd"
                  >
                    100+ active referrals
                  </p>
                </div>
                <Badge data-oid="fexoo79" variant="outline">
                  35% Commission
                </Badge>
              </div>
            </div>

            <div className="flex justify-center" data-oid="r9ne.tk">
              <Button asChild data-oid="9-z_yj_" variant="outline">
                <Link data-oid=":d7x5q3" href="/affiliate">
                  <ExternalLink className="mr-2 h-4 w-4" data-oid="0qnay-g" />
                  Learn More About Our Affiliate Program
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ReferralCard({ referral }: { referral: Referral }) {
  return (
    <div
      className="flex items-center justify-between rounded-lg border p-4"
      data-oid="3e21cx3"
    >
      <div className="flex items-center gap-3" data-oid="6b.bp2y">
        <div
          className="relative h-10 w-10 overflow-hidden rounded-full"
          data-oid="n4rj32d"
        >
          <Image
            alt={referral.name}
            className="object-cover"
            data-oid="v70hmwb"
            fill
            src={referral.avatar || "/placeholder.svg"}
          />
        </div>

        <div data-oid="y65os5k">
          <p className="font-medium" data-oid="ru9.hlu">
            {referral.name}
          </p>
          <p className="text-muted-foreground text-sm" data-oid="8bwzfzq">
            @{referral.username}
          </p>
        </div>
      </div>

      <div className="hidden md:block" data-oid="5b:vgh5">
        <p className="text-sm" data-oid="zbnexwj">
          Joined{" "}
          {new Date(referral.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>

      <div className="flex flex-col items-end" data-oid=".h-bn-n">
        <p className="font-medium text-green-600" data-oid="fioyar9">
          ${referral.earnings.toFixed(2)}
        </p>
        <Badge
          className="mt-1"
          data-oid="w1tjifz"
          variant={referral.status === "active" ? "default" : "outline"}
        >
          {referral.status === "active" ? "Active" : "Inactive"}
        </Badge>
      </div>
    </div>
  );
}
