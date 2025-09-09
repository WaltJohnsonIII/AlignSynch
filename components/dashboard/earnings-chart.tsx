"use client";

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data
const data = [
  { date: "Jan", earnings: 12 },
  { date: "Feb", earnings: 18 },
  { date: "Mar", earnings: 15 },
  { date: "Apr", earnings: 22 },
  { date: "May", earnings: 28 },
  { date: "Jun", earnings: 35 },
];

export function EarningsChart() {
  return (
    <Card data-oid="764u:ti">
      <CardHeader data-oid="o6k.2pd">
        <CardTitle data-oid="y3-pwo5">Earnings Overview</CardTitle>
        <CardDescription data-oid="abbdzlq">
          Your earnings over the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="ojlj.mx">
        <ChartContainer
          className="h-[300px]"
          config={{
            earnings: {
              label: "Earnings",
              color: "hsl(var(--chart-1))",
            },
          }}
          data-oid="bl9i58q"
        >
          <ResponsiveContainer data-oid="cbsntc3" height="100%" width="100%">
            <LineChart data={data} data-oid=".dhy3so">
              <XAxis data-oid="3ha5wjx" dataKey="date" />
              <YAxis data-oid="l2t_hs0" />
              <ChartTooltip
                content={<ChartTooltipContent data-oid="my:tpie" />}
                data-oid="26ilqlm"
              />

              <Line
                activeDot={{ r: 6 }}
                data-oid="piccuo9"
                dataKey="earnings"
                stroke="var(--color-earnings)"
                strokeWidth={2}
                type="monotone"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
