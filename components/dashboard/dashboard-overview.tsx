import {
  BarChart3,
  Clock,
  DollarSign,
  Eye,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { EarningsChart } from "@/components/dashboard/earnings-chart";
import { RecentQuizzes } from "@/components/dashboard/recent-quizzes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DashboardOverview() {
  return (
    <div className="space-y-6" data-oid="t9qbc:4">
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="xf836yv"
      >
        <Card data-oid="4fk1ra.">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="di94al5"
          >
            <CardTitle className="font-medium text-sm" data-oid="pzrp5m4">
              Total Balance
            </CardTitle>
            <DollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="qd2c.vj"
            />
          </CardHeader>
          <CardContent data-oid="t4tzqvg">
            <div className="font-bold text-2xl" data-oid="5bc-wxf">
              $124.50
            </div>
            <div
              className="flex items-center text-muted-foreground text-xs"
              data-oid="hi7.gd5"
            >
              <TrendingUp
                className="mr-1 h-3 w-3 text-green-500"
                data-oid="t6e32lb"
              />

              <span className="text-green-500" data-oid="q07-2cb">
                +12%
              </span>
              <span className="ml-1" data-oid=".ym:0k1">
                from last month
              </span>
            </div>
            <Button
              className="mt-3 w-full"
              data-oid="_vwiz56"
              size="sm"
              variant="outline"
            >
              Withdraw
            </Button>
          </CardContent>
        </Card>

        <Card data-oid="x89zn5y">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="_86orn_"
          >
            <CardTitle className="font-medium text-sm" data-oid="snitjey">
              Total Quizzes
            </CardTitle>
            <BarChart3
              className="h-4 w-4 text-muted-foreground"
              data-oid="ajx6dbv"
            />
          </CardHeader>
          <CardContent data-oid="d7j1:u1">
            <div className="font-bold text-2xl" data-oid="4x5lqft">
              24
            </div>
            <p className="text-muted-foreground text-xs" data-oid="d--plav">
              +4 from last month
            </p>
          </CardContent>
        </Card>

        <Card data-oid="n-hwe1d">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="6gzy45_"
          >
            <CardTitle className="font-medium text-sm" data-oid="ggp13tg">
              Total Players
            </CardTitle>
            <Users
              className="h-4 w-4 text-muted-foreground"
              data-oid="u:mp_ax"
            />
          </CardHeader>
          <CardContent data-oid="kx4rv_2">
            <div className="font-bold text-2xl" data-oid="9fhcykv">
              573
            </div>
            <p className="text-muted-foreground text-xs" data-oid="4:j31js">
              +118 from last month
            </p>
          </CardContent>
        </Card>

        <Card data-oid="yk.wm7r">
          <CardHeader
            className="flex flex-row items-center justify-between space-y-0 pb-2"
            data-oid="lg1oji_"
          >
            <CardTitle className="font-medium text-sm" data-oid="mj4y6i6">
              Completion Rate
            </CardTitle>
            <Trophy
              className="h-4 w-4 text-muted-foreground"
              data-oid="eb3bv1f"
            />
          </CardHeader>
          <CardContent data-oid="5af1jfm">
            <div className="font-bold text-2xl" data-oid="coawpoa">
              78.3%
            </div>
            <p className="text-muted-foreground text-xs" data-oid="i_f9ywn">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-7"
        data-oid="8ajbzs-"
      >
        <Card className="lg:col-span-4" data-oid="d56mygf">
          <CardHeader data-oid="hoo:vxj">
            <CardTitle data-oid="g:fxdhx">Earnings Overview</CardTitle>
            <CardDescription data-oid="02fya9k">
              Your earnings for the past 30 days
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="soqwq-:">
            <EarningsChart data-oid="-4gidzg" />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3" data-oid="sdiucxm">
          <CardHeader data-oid="tvil9jp">
            <CardTitle data-oid="cuskq1g">Recent Quizzes</CardTitle>
            <CardDescription data-oid="tn.o-zz">
              Your recently created quizzes
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="kqo_g93">
            <RecentQuizzes data-oid="6wuwbub" />
          </CardContent>
        </Card>
      </div>

      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        data-oid="ev8ezto"
      >
        <Card data-oid="50vrj:r">
          <CardHeader data-oid="s0v19hh">
            <CardTitle data-oid="ij3-e2k">Affiliate Stats</CardTitle>
            <CardDescription data-oid="58kzrzq">
              Your referral performance
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="nhfzi8h">
            <div className="space-y-4" data-oid="_2.-i8-">
              <div
                className="flex items-center justify-between"
                data-oid="8yr5agw"
              >
                <div className="flex items-center" data-oid="fl1h6h.">
                  <Users
                    className="mr-2 h-4 w-4 text-muted-foreground"
                    data-oid="kt29xq1"
                  />

                  <span className="text-sm" data-oid="3phxggb">
                    Total Referrals
                  </span>
                </div>
                <span className="font-medium" data-oid="xf_jrku">
                  42
                </span>
              </div>
              <div
                className="flex items-center justify-between"
                data-oid="dqj3476"
              >
                <div className="flex items-center" data-oid="7kbdn1g">
                  <DollarSign
                    className="mr-2 h-4 w-4 text-muted-foreground"
                    data-oid="xjv26_3"
                  />

                  <span className="text-sm" data-oid="sy9lxn:">
                    Commission Earned
                  </span>
                </div>
                <span className="font-medium" data-oid="fx5aj23">
                  $78.25
                </span>
              </div>
              <div
                className="flex items-center justify-between"
                data-oid="yubsdw8"
              >
                <div className="flex items-center" data-oid="vat.3zu">
                  <TrendingUp
                    className="mr-2 h-4 w-4 text-muted-foreground"
                    data-oid="w3o0s4b"
                  />

                  <span className="text-sm" data-oid="j9loa4e">
                    Conversion Rate
                  </span>
                </div>
                <span className="font-medium" data-oid="7:.gjw-">
                  24.8%
                </span>
              </div>
              <Button
                className="w-full"
                data-oid="9r_kyd:"
                size="sm"
                variant="outline"
              >
                View Affiliate Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="yzi73v.">
          <CardHeader data-oid="xyq623z">
            <CardTitle data-oid="s2ud8e6">Quiz Performance</CardTitle>
            <CardDescription data-oid="9-y61wg">
              How your quizzes are doing
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="h52k:-o">
            <div className="space-y-4" data-oid="f2p4pqf">
              <div
                className="flex items-center justify-between"
                data-oid="fb3qmwy"
              >
                <div className="flex items-center" data-oid="pu0uz-a">
                  <Eye
                    className="mr-2 h-4 w-4 text-muted-foreground"
                    data-oid="b5hf8lx"
                  />

                  <span className="text-sm" data-oid="sbjzrxu">
                    Total Views
                  </span>
                </div>
                <span className="font-medium" data-oid="y2wdfxf">
                  2,845
                </span>
              </div>
              <div
                className="flex items-center justify-between"
                data-oid="nda2woj"
              >
                <div className="flex items-center" data-oid="ssow4.q">
                  <Clock
                    className="mr-2 h-4 w-4 text-muted-foreground"
                    data-oid="c1w1li9"
                  />

                  <span className="text-sm" data-oid="hxbs92k">
                    Avg. Completion Time
                  </span>
                </div>
                <span className="font-medium" data-oid="73tcphp">
                  4m 12s
                </span>
              </div>
              <div
                className="flex items-center justify-between"
                data-oid="_4s7o9-"
              >
                <div className="flex items-center" data-oid="j21.f99">
                  <Trophy
                    className="mr-2 h-4 w-4 text-muted-foreground"
                    data-oid="xoweq66"
                  />

                  <span className="text-sm" data-oid="4_q_o:d">
                    Highest Scoring Quiz
                  </span>
                </div>
                <span className="font-medium" data-oid="kx96yoa">
                  Science Quiz
                </span>
              </div>
              <Button
                className="w-full"
                data-oid="n9-v.xt"
                size="sm"
                variant="outline"
              >
                View All Analytics
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="qhg:sxe">
          <CardHeader data-oid="8ih-vop">
            <CardTitle data-oid="vtukzhq">Recent Activity</CardTitle>
            <CardDescription data-oid="z85d2eb">
              Latest events on your account
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="f1vcj.o">
            <div className="space-y-4" data-oid="fds8c1t">
              <div
                className="border-primary border-l-2 pl-3"
                data-oid=":5t.3s."
              >
                <p className="font-medium text-sm" data-oid="ai.kdk9">
                  Quiz Completed
                </p>
                <p className="text-muted-foreground text-xs" data-oid="05yk_:c">
                  Someone completed "World Geography"
                </p>
                <p className="text-muted-foreground text-xs" data-oid="3e:ugwg">
                  2 hours ago
                </p>
              </div>
              <div
                className="border-green-500 border-l-2 pl-3"
                data-oid=".:oe6lz"
              >
                <p className="font-medium text-sm" data-oid="iz4--.1">
                  Earnings Received
                </p>
                <p className="text-muted-foreground text-xs" data-oid="3yn3wg4">
                  You earned $2.50 from quiz plays
                </p>
                <p className="text-muted-foreground text-xs" data-oid="w0g8utr">
                  Yesterday
                </p>
              </div>
              <div
                className="border-blue-500 border-l-2 pl-3"
                data-oid="x8g-n4m"
              >
                <p className="font-medium text-sm" data-oid="wqk1i0b">
                  New Referral
                </p>
                <p className="text-muted-foreground text-xs" data-oid="12k3-re">
                  User "JohnDoe" signed up using your link
                </p>
                <p className="text-muted-foreground text-xs" data-oid="88-q8h8">
                  2 days ago
                </p>
              </div>
              <div
                className="border-orange-500 border-l-2 pl-3"
                data-oid="sk7n9:a"
              >
                <p className="font-medium text-sm" data-oid="6:dv07r">
                  Quiz Created
                </p>
                <p className="text-muted-foreground text-xs" data-oid="_j5ibto">
                  You created "Science Trivia"
                </p>
                <p className="text-muted-foreground text-xs" data-oid="u3sr8yo">
                  3 days ago
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
