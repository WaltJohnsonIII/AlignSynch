"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for the stats
const performanceData = [
  { day: "Mon", score: 80, avgScore: 65 },
  { day: "Tue", score: 60, avgScore: 68 },
  { day: "Wed", score: 90, avgScore: 70 },
  { day: "Thu", score: 70, avgScore: 67 },
  { day: "Fri", score: 85, avgScore: 72 },
  { day: "Sat", score: 75, avgScore: 69 },
  { day: "Sun", score: 95, avgScore: 71 },
];

const categoryData = [
  { name: "Science", value: 35 },
  { name: "History", value: 25 },
  { name: "Geography", value: 20 },
  { name: "Entertainment", value: 15 },
  { name: "Sports", value: 5 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088fe"];

export function DailyStats() {
  return (
    <Card className="shadow-sm" data-oid="dqplwq.">
      <CardHeader className="pb-2" data-oid="x9u3_3v">
        <CardTitle className="text-xl" data-oid="m.o06_m">
          Your Challenge Stats
        </CardTitle>
      </CardHeader>

      <Tabs data-oid="iv5:rhl" defaultValue="performance">
        <div className="px-6" data-oid="rp0tsbw">
          <TabsList className="grid w-full grid-cols-2" data-oid="imdu-fe">
            <TabsTrigger data-oid="ww1tzx6" value="performance">
              Performance
            </TabsTrigger>
            <TabsTrigger data-oid="8:qkl_7" value="categories">
              Categories
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent className="m-0" data-oid="v9:t89m" value="performance">
          <CardContent className="p-4" data-oid="9zt4uqr">
            <div className="h-[250px] w-full" data-oid="p78a6vf">
              <ResponsiveContainer
                data-oid="mw_mg6i"
                height="100%"
                width="100%"
              >
                <BarChart
                  data={performanceData}
                  data-oid="5l_2i0j"
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid data-oid="37cc:4-" strokeDasharray="3 3" />
                  <XAxis data-oid="c43hzjd" dataKey="day" />
                  <YAxis data-oid="cllz_rs" />
                  <Tooltip
                    data-oid="2vrgo5:"
                    formatter={(value) => [`${value}%`, "Score"]}
                    labelFormatter={(label) => `${label}day`}
                  />

                  <Legend data-oid="05mfkom" />
                  <Bar
                    data-oid="qary_fw"
                    dataKey="score"
                    fill="#8884d8"
                    name="Your Score"
                  />

                  <Bar
                    data-oid="gn5_lwx"
                    dataKey="avgScore"
                    fill="#82ca9d"
                    name="Average Score"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p
              className="mt-2 text-center text-muted-foreground text-xs"
              data-oid="lr0gto7"
            >
              Your daily challenge performance compared to the average
            </p>
          </CardContent>
        </TabsContent>

        <TabsContent className="m-0" data-oid="hg5u4u." value="categories">
          <CardContent className="p-4" data-oid="fax1ie2">
            <div className="h-[250px] w-full" data-oid="tb7_vbv">
              <ResponsiveContainer
                data-oid="o-t.n.s"
                height="100%"
                width="100%"
              >
                <PieChart data-oid="oe7x65r">
                  <Pie
                    cx="50%"
                    cy="50%"
                    data={categoryData}
                    data-oid="r25960t"
                    dataKey="value"
                    fill="#8884d8"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    labelLine={false}
                    outerRadius={80}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        data-oid="zihw8lh"
                        fill={COLORS[index % COLORS.length]}
                        key={`cell-${index}`}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    data-oid=":y_9hd."
                    formatter={(value) => [`${value}%`, "Percentage"]}
                  />

                  <Legend data-oid="3-jrg69" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p
              className="mt-2 text-center text-muted-foreground text-xs"
              data-oid="j8q_t5b"
            >
              Distribution of your correct answers by category
            </p>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
