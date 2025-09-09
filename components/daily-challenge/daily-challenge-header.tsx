"use client";

import { Calendar, Clock, Flame, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function DailyChallengeHeader() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);

      const difference = midnight.getTime() - now.getTime();

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="space-y-6" data-oid=":p-74x:">
      <div className="flex flex-col space-y-2" data-oid=".rbqric">
        <h1 className="font-bold text-3xl tracking-tight" data-oid="e0ly74q">
          Daily Challenge
        </h1>
        <p className="text-muted-foreground" data-oid="ialqida">
          A new quiz every day. Test your knowledge and compete with others!
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="w:2sgxm"
      >
        <Card
          className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 dark:border-purple-800 dark:from-purple-950 dark:to-purple-900"
          data-oid="ks_qj2g"
        >
          <CardContent
            className="flex items-center space-x-4 p-4 xl:pt-4"
            data-oid="ik_az_n"
          >
            <div
              className="rounded-full bg-purple-100 p-2 dark:bg-purple-800"
              data-oid="t3zya44"
            >
              <Clock
                className="h-5 w-5 text-purple-600 dark:text-purple-300"
                data-oid="rpp-f3w"
              />
            </div>
            <div data-oid="rgx04cl">
              <p
                className="font-medium text-muted-foreground text-sm"
                data-oid="qiw7-31"
              >
                Time Remaining
              </p>
              <p className="font-bold text-xl" data-oid="ndtskph">
                {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
                {formatTime(timeLeft.seconds)}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 dark:border-blue-800 dark:from-blue-950 dark:to-blue-900"
          data-oid="_vfnbyk"
        >
          <CardContent
            className="flex items-center space-x-4 p-4 xl:pt-4"
            data-oid="bno1-gv"
          >
            <div
              className="rounded-full bg-blue-100 p-2 dark:bg-blue-800"
              data-oid="6wi0uz8"
            >
              <Calendar
                className="h-5 w-5 text-blue-600 dark:text-blue-300"
                data-oid="quq.81i"
              />
            </div>
            <div data-oid="4u2ags_">
              <p
                className="font-medium text-muted-foreground text-sm"
                data-oid="cok-43v"
              >
                Today's Theme
              </p>
              <p className="font-bold text-xl" data-oid="c2dunt:">
                Science & Technology
              </p>
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100 dark:border-amber-800 dark:from-amber-950 dark:to-amber-900"
          data-oid="o.030na"
        >
          <CardContent
            className="flex items-center space-x-4 p-4 xl:pt-4"
            data-oid="fy4t2ca"
          >
            <div
              className="rounded-full bg-amber-100 p-2 dark:bg-amber-800"
              data-oid="lu1vj9w"
            >
              <Trophy
                className="h-5 w-5 text-amber-600 dark:text-amber-300"
                data-oid="sff3_hj"
              />
            </div>
            <div data-oid="8nlms:u">
              <p
                className="font-medium text-muted-foreground text-sm"
                data-oid="h3unqyr"
              >
                Top Prize
              </p>
              <p className="font-bold text-xl" data-oid="aar-b__">
                500 Coins
              </p>
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-red-200 bg-gradient-to-br from-red-50 to-red-100 dark:border-red-800 dark:from-red-950 dark:to-red-900"
          data-oid="de-vrou"
        >
          <CardContent
            className="flex items-center space-x-4 p-4 xl:pt-4"
            data-oid="sd9jesk"
          >
            <div
              className="rounded-full bg-red-100 p-2 dark:bg-red-800"
              data-oid="49a_6yi"
            >
              <Flame
                className="h-5 w-5 text-red-600 dark:text-red-300"
                data-oid="gdut8hj"
              />
            </div>
            <div data-oid="1f80.d5">
              <p
                className="font-medium text-muted-foreground text-sm"
                data-oid="xrd_w97"
              >
                Your Streak
              </p>
              <p className="font-bold text-xl" data-oid="xiq0d3x">
                4 Days
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
