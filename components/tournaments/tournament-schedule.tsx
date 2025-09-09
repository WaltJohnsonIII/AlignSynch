"use client";

import { CalendarDays, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TournamentSchedule() {
  // Mock schedule data
  const scheduleData = [
    {
      round: 1,
      date: "May 15, 2024",
      time: "14:00 - 15:00",
      description: "Qualifying Round - General Knowledge",
    },
    {
      round: 2,
      date: "May 22, 2024",
      time: "14:00 - 15:00",
      description: "Semi-Finals - Science & Technology",
    },
    {
      round: 3,
      date: "May 29, 2024",
      time: "14:00 - 16:00",
      description: "Final Round - Mixed Categories",
    },
  ];

  return (
    <Card data-oid=":dr2ffb">
      <CardHeader data-oid="bvy264:">
        <CardTitle data-oid="uuhw603">Tournament Schedule</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="35bkb.o">
        {scheduleData.map((item) => (
          <div
            className="rounded-md border p-4"
            data-oid="u4_y-h5"
            key={item.round}
          >
            <div
              className="mb-2 flex items-center justify-between"
              data-oid="zfo.7yx"
            >
              <h3 className="font-medium text-lg" data-oid="qlhwu.1">
                Round {item.round}
              </h3>
              <Badge data-oid="3nekqf0" variant="outline">
                Qualifying
              </Badge>
            </div>
            <div
              className="flex items-center gap-2 text-muted-foreground text-sm"
              data-oid="dp9bkb7"
            >
              <CalendarDays className="h-4 w-4" data-oid=".7dnet:" />
              <span data-oid="7-4z4a.">{item.date}</span>
              <Clock className="ml-4 h-4 w-4" data-oid="chkx4pp" />
              <span data-oid="tnjsoo1">{item.time}</span>
            </div>
            <p className="mt-2 text-sm" data-oid="cq6-isz">
              {item.description}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
