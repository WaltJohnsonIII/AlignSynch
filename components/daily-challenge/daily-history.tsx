import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for past challenges
const pastChallenges = [
  {
    id: 1,
    date: "May 19, 2025",
    theme: "History & Culture",
    score: 80,
    rank: 15,
    completed: true,
  },
  {
    id: 2,
    date: "May 18, 2025",
    theme: "Entertainment",
    score: 60,
    rank: 42,
    completed: true,
  },
  {
    id: 3,
    date: "May 17, 2025",
    theme: "Geography",
    score: 90,
    rank: 7,
    completed: true,
  },
  {
    id: 4,
    date: "May 16, 2025",
    theme: "Science & Technology",
    score: 70,
    rank: 23,
    completed: true,
  },
  {
    id: 5,
    date: "May 15, 2025",
    theme: "Sports & Games",
    score: 85,
    rank: 12,
    completed: true,
  },
];

export function DailyHistory() {
  return (
    <Card className="shadow-sm" data-oid="_3h0xx2">
      <CardHeader
        className="flex flex-row flex-wrap items-center justify-between gap-2 pb-2"
        data-oid="35kefww"
      >
        <CardTitle className="text-xl" data-oid="91nso_z">
          Challenge History
        </CardTitle>
        <Button
          className="text-xs"
          data-oid="_mreic0"
          size="sm"
          variant="ghost"
        >
          View All
          <ChevronRight className="ml-1 h-4 w-4" data-oid="iqb8hqd" />
        </Button>
      </CardHeader>

      <CardContent className="p-4" data-oid="f7gdzx8">
        <div className="space-y-3" data-oid="a8c4k7m">
          {pastChallenges.map((challenge) => (
            <div
              className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
              data-oid="m7x02tb"
              key={challenge.id}
            >
              <div data-oid="7.31296">
                <div className="mb-2 font-medium" data-oid="yfnoa-h">
                  {challenge.date}
                </div>
                <div
                  className="flex items-center text-muted-foreground text-sm"
                  data-oid="eac50p3"
                >
                  <Badge className="mr-2" data-oid="wq_6wnb" variant="outline">
                    {challenge.theme}
                  </Badge>
                  {challenge.rank <= 10 && (
                    <Badge className="bg-amber-500" data-oid="m3yw6b-">
                      Top 10
                    </Badge>
                  )}
                </div>
              </div>

              <div className="text-right" data-oid="d:vnwvo">
                <div className="font-medium" data-oid="1:e-gyu">
                  {challenge.score}%
                </div>
                <div
                  className="text-muted-foreground text-sm"
                  data-oid="32t05:9"
                >
                  Rank #{challenge.rank}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
