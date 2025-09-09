import {
  Award,
  CheckCircle,
  Clock,
  PenTool,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Activity } from "@/lib/data/users";

interface ProfileActivityProps {
  activities: Activity[];
}

export function ProfileActivity({ activities }: ProfileActivityProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "quiz_completed":
        return (
          <CheckCircle className="h-4 w-4 text-green-500" data-oid="4rrafg." />
        );

      case "achievement_earned":
        return <Award className="h-4 w-4 text-amber-500" data-oid="1-thyxu" />;
      case "level_up":
        return (
          <TrendingUp className="h-4 w-4 text-blue-500" data-oid="sn2gmam" />
        );

      case "quiz_created":
        return (
          <PenTool className="h-4 w-4 text-purple-500" data-oid="p6c7vf7" />
        );

      case "followed_user":
        return (
          <UserPlus className="h-4 w-4 text-indigo-500" data-oid=".c0vy2n" />
        );

      default:
        return <Clock className="h-4 w-4 text-gray-500" data-oid="v0-iwz5" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getActivityLink = (activity: Activity) => {
    switch (activity.type) {
      case "quiz_completed":
      case "quiz_created":
        return activity.relatedId ? `/quiz/${activity.relatedId}` : undefined;
      case "followed_user":
        return activity.relatedId
          ? `/profile/${activity.relatedId}`
          : undefined;
      default:
        return;
    }
  };

  return (
    <Card data-oid="u8m9k3p">
      <CardContent className="p-0" data-oid="0hzz6--">
        <div className="divide-y" data-oid="lp9gnnm">
          {activities.map((activity) => {
            const activityLink = getActivityLink(activity);

            return (
              <div
                className="flex items-start gap-3 p-4"
                data-oid=".3q5q_w"
                key={activity.id}
              >
                <div
                  className="mt-0.5 rounded-full bg-muted p-1.5"
                  data-oid="thn0b5:"
                >
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1" data-oid="fvtjv_h">
                  <p className="text-sm" data-oid="8_bkf74">
                    {activityLink ? (
                      <>
                        {activity.content
                          .split(activity.relatedName || "")
                          .map((part, i, arr) => {
                            if (i === arr.length - 1) return part;
                            return (
                              <span data-oid="wjzaxb3" key={i}>
                                {part}
                                <Link
                                  className="font-medium text-primary hover:underline"
                                  data-oid="sapo::i"
                                  href={activityLink}
                                >
                                  {activity.relatedName}
                                </Link>
                              </span>
                            );
                          })}
                      </>
                    ) : (
                      activity.content
                    )}
                  </p>
                  <p
                    className="mt-1 text-muted-foreground text-xs"
                    data-oid="_ufhdv:"
                  >
                    {formatTimestamp(activity.timestamp)}
                  </p>
                </div>
              </div>
            );
          })}

          {activities.length === 0 && (
            <div
              className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground"
              data-oid="1xh3xb6"
            >
              <Clock className="mb-2 h-10 w-10 opacity-20" data-oid="1yc2roh" />
              <p data-oid="v88robl">No recent activity</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
