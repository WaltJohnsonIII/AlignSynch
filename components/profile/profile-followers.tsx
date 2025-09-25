"use client";

import { UserCheck, UserPlus, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserAvatar } from "@/components/ui/user-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getUserFollowers, type User } from "@/lib/data/users";

interface ProfileFollowersProps {
  userId: string;
}

export function ProfileFollowers({ userId }: ProfileFollowersProps) {
  const [followers, setFollowers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [followingStatus, setFollowingStatus] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const data = await getUserFollowers(userId);
        setFollowers(data);

        // Initialize following status
        const initialStatus: Record<string, boolean> = {};
        data.forEach((follower) => {
          initialStatus[follower.id] = Math.random() > 0.5; // Random for demo
        });
        setFollowingStatus(initialStatus);
      } catch (error) {
        console.error("Failed to fetch followers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, [userId]);

  const handleFollowToggle = (followerId: string) => {
    setFollowingStatus((prev) => ({
      ...prev,
      [followerId]: !prev[followerId],
    }));
  };

  if (loading) {
    return (
      <Card data-oid="5t:ihk3">
        <CardContent
          className="flex items-center justify-center p-8"
          data-oid="gf:ljnu"
        >
          <div
            className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"
            data-oid="b44oow3"
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card data-oid="r3y.k_z">
      <CardContent className="p-0" data-oid="f5avbo:">
        <div className="divide-y" data-oid="uaiex6u">
          {followers.map((follower) => (
            <div
              className="flex items-center justify-between p-4"
              data-oid="hnjww-g"
              key={follower.id}
            >
              <div className="flex items-center gap-3" data-oid="15d4qcu">
                <UserAvatar className="size-10" name={follower.name} src={follower.avatar || null} />
                <div data-oid="jue-2d1">
                  <Link
                    className="font-medium hover:underline"
                    data-oid="_4.kuj2"
                    href={`/profile/${follower.username}`}
                  >
                    {follower.name}
                  </Link>
                  <div
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                    data-oid="l-acs0d"
                  >
                    <span data-oid="d0zi7zx">@{follower.username}</span>
                    {follower.isVerified && (
                      <Badge
                        className="h-5 gap-1 px-1.5 py-0"
                        data-oid="rbjrfq0"
                        variant="secondary"
                      >
                        <svg
                          className="h-3 w-3 text-blue-500"
                          data-oid="bd:c-c6"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                            data-oid="cria:dp"
                          />

                          <polyline
                            data-oid="akaoyjk"
                            points="22 4 12 14.01 9 11.01"
                          />
                        </svg>
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <Button
                data-oid="6icuth-"
                onClick={() => handleFollowToggle(follower.id)}
                size="sm"
                variant={followingStatus[follower.id] ? "secondary" : "outline"}
              >
                {followingStatus[follower.id] ? (
                  <>
                    <UserCheck className="mr-1.5 h-4 w-4" data-oid="duwgrsq" />
                    Following
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-1.5 h-4 w-4" data-oid="v5g279a" />
                    Follow
                  </>
                )}
              </Button>
            </div>
          ))}

          {followers.length === 0 && (
            <div
              className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground"
              data-oid="iyf09xc"
            >
              <Users className="mb-2 h-10 w-10 opacity-20" data-oid="il:nn19" />
              <p data-oid="w-p9b05">No followers yet</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
