"use client";

import { UserCheck, UserPlus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserAvatar } from "@/components/ui/user-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getUserFollowing, type User } from "@/lib/data/users";

interface ProfileFollowingProps {
  userId: string;
}

export function ProfileFollowing({ userId }: ProfileFollowingProps) {
  const [following, setFollowing] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const data = await getUserFollowing(userId);
        setFollowing(data);
      } catch (error) {
        console.error("Failed to fetch following:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowing();
  }, [userId]);

  const handleUnfollow = (followingId: string) => {
    // In a real app, this would call an API to unfollow
    setFollowing((prev) => prev.filter((user) => user.id !== followingId));
  };

  if (loading) {
    return (
      <Card data-oid="fs8nvdx">
        <CardContent
          className="flex items-center justify-center p-8"
          data-oid="5frasv3"
        >
          <div
            className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"
            data-oid="pww5h.x"
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card data-oid="xnrtrrl">
      <CardContent className="p-0" data-oid="_w-e:az">
        <div className="divide-y" data-oid="zvg61qi">
          {following.map((user) => (
            <div
              className="flex items-center justify-between p-4"
              data-oid="es611eh"
              key={user.id}
            >
              <div className="flex items-center gap-3" data-oid=":l42-rp">
                <UserAvatar className="size-10" name={user.name} src={user.avatar || null} />
                <div data-oid="565-l26">
                  <Link
                    className="font-medium hover:underline"
                    data-oid="12jllvo"
                    href={`/profile/${user.username}`}
                  >
                    {user.name}
                  </Link>
                  <div
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                    data-oid="qrh:-2l"
                  >
                    <span data-oid="nj6qdv3">@{user.username}</span>
                    {user.isVerified && (
                      <Badge
                        className="h-5 gap-1 px-1.5 py-0"
                        data-oid="m75k90j"
                        variant="secondary"
                      >
                        <svg
                          className="h-3 w-3 text-blue-500"
                          data-oid="fcv8gsh"
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
                            data-oid="6mnonhu"
                          />

                          <polyline
                            data-oid="tcdldee"
                            points="22 4 12 14.01 9 11.01"
                          />
                        </svg>
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <Button
                data-oid="uxuyz39"
                onClick={() => handleUnfollow(user.id)}
                size="sm"
                variant="secondary"
              >
                <UserCheck className="mr-1.5 h-4 w-4" data-oid="uut8wsh" />
                Following
              </Button>
            </div>
          ))}

          {following.length === 0 && (
            <div
              className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground"
              data-oid="thoaqtq"
            >
              <UserPlus
                className="mb-2 h-10 w-10 opacity-20"
                data-oid="03zy0p4"
              />

              <p data-oid="b.hz-v_">Not following anyone yet</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
