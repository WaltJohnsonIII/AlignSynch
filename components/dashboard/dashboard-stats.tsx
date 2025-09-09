import { BarChart3, DollarSign, Trophy, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardStats() {
  return (
    <div
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      data-oid="dov31fm"
    >
      <Card data-oid="e:a._co">
        <CardHeader
          className="flex flex-row items-center justify-between space-y-0 pb-2"
          data-oid=".3a:gzn"
        >
          <CardTitle className="font-medium text-sm" data-oid="ug3uizi">
            Total Quizzes
          </CardTitle>
          <BarChart3
            className="h-4 w-4 text-muted-foreground"
            data-oid="ztiews2"
          />
        </CardHeader>
        <CardContent data-oid="pbspu5j">
          <div className="font-bold text-2xl" data-oid="-p0g7vm">
            24
          </div>
          <p className="text-muted-foreground text-xs" data-oid="a46je.:">
            +4 from last month
          </p>
        </CardContent>
      </Card>

      <Card data-oid="l4o8vq_">
        <CardHeader
          className="flex flex-row items-center justify-between space-y-0 pb-2"
          data-oid="7p79hi."
        >
          <CardTitle className="font-medium text-sm" data-oid="ygxorb.">
            Total Players
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" data-oid="rpo_4l3" />
        </CardHeader>
        <CardContent data-oid="6h:so8n">
          <div className="font-bold text-2xl" data-oid="l57its7">
            573
          </div>
          <p className="text-muted-foreground text-xs" data-oid=":i7e63c">
            +118 from last month
          </p>
        </CardContent>
      </Card>

      <Card data-oid="z6erm_z">
        <CardHeader
          className="flex flex-row items-center justify-between space-y-0 pb-2"
          data-oid="bmopvuu"
        >
          <CardTitle className="font-medium text-sm" data-oid="o91.h1i">
            Completion Rate
          </CardTitle>
          <Trophy
            className="h-4 w-4 text-muted-foreground"
            data-oid="50.m2_n"
          />
        </CardHeader>
        <CardContent data-oid="f9wva:8">
          <div className="font-bold text-2xl" data-oid="vgpt9kw">
            78.3%
          </div>
          <p className="text-muted-foreground text-xs" data-oid="el1qxlf">
            +2.1% from last month
          </p>
        </CardContent>
      </Card>

      <Card data-oid="-cd:k.y">
        <CardHeader
          className="flex flex-row items-center justify-between space-y-0 pb-2"
          data-oid="qhqx0fx"
        >
          <CardTitle className="font-medium text-sm" data-oid="b2-hc.4">
            Total Earnings
          </CardTitle>
          <DollarSign
            className="h-4 w-4 text-muted-foreground"
            data-oid=".lwcui0"
          />
        </CardHeader>
        <CardContent data-oid="wggqw60">
          <div className="font-bold text-2xl" data-oid="z8wi:sn">
            $124.50
          </div>
          <p className="text-muted-foreground text-xs" data-oid="n5srr57">
            +$42.50 from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
