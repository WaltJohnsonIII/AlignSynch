"use client";

import {
  CalendarDays,
  Flag,
  MessageSquare,
  Star,
  UserCheck,
  UserPlus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { User } from "@/lib/data/users";

interface ProfileHeaderProps {
  user: User;
  isFollowing: boolean;
  onFollowToggle: () => void;
  onMessageClick: () => void;
}

export function ProfileHeader({
  user,
  isFollowing,
  onFollowToggle,
  onMessageClick,
}: ProfileHeaderProps) {
  const joinedDate = new Date(user.joinedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 p-6 shadow-sm dark:from-purple-950/30 dark:to-blue-950/30"
      data-oid="02-83gq"
    >
      <div
        className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        data-oid="zjk0qil"
      >
        <Avatar
          className="h-24 w-24 border-4 border-background"
          data-oid="p44as32"
        >
          <AvatarImage
            alt={user.name}
            data-oid="vtpu821"
            src={user.avatar || "/placeholder.svg"}
          />

          <AvatarFallback data-oid="g6mx8mn">
            {user.name.substring(0, 2)}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1" data-oid="-lsj4m4">
          <div className="flex flex-wrap items-center gap-2" data-oid="ye.hg:h">
            <h1 className="font-bold text-2xl" data-oid="13alz2_">
              {user.name}
            </h1>
            {user.isVerified && (
              <Badge
                className="h-5 gap-1 px-1.5 py-0"
                data-oid="3dkhxcv"
                variant="secondary"
              >
                <svg
                  className="h-3.5 w-3.5 text-blue-500"
                  data-oid="5:phng6"
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
                    data-oid="pnecfgi"
                  />

                  <polyline data-oid="u0g4eso" points="22 4 12 14.01 9 11.01" />
                </svg>
                <span data-oid="tcgzs:t">Verified</span>
              </Badge>
            )}
            <Badge
              className="gap-1 text-xs"
              data-oid="9y2poya"
              variant="outline"
            >
              <Star
                className="h-3 w-3 fill-amber-500 text-amber-500"
                data-oid="d4a1uqu"
              />
              Level {user.level}
            </Badge>
          </div>

          <div
            className="mt-1 flex items-center gap-2 text-muted-foreground text-sm"
            data-oid="4wcb-fl"
          >
            <span data-oid="bbye:tw">@{user.username}</span>
            <span data-oid="lqt23:r">•</span>
            <div className="flex items-center gap-1" data-oid="-zhlj3m">
              <Flag className="h-3.5 w-3.5" data-oid="58kf__2" />
              <span data-oid="lv5xgb5">{user.country}</span>
            </div>
            <span data-oid="qzdnfri">•</span>
            <div className="flex items-center gap-1" data-oid="meyki6z">
              <CalendarDays className="h-3.5 w-3.5" data-oid="wjzbgs_" />
              <span data-oid="r_.qji_">Joined {joinedDate}</span>
            </div>
          </div>

          <p className="mt-2 text-sm" data-oid="nqmwrkq">
            {user.bio}
          </p>

          <div className="mt-3 flex flex-wrap gap-4 text-sm" data-oid="14-:_ig">
            <div data-oid="z1u.4ze">
              <span className="font-semibold" data-oid="b_vdfwi">
                {user.quizzesTaken.toLocaleString()}
              </span>
              <span className="ml-1 text-muted-foreground" data-oid="rou.664">
                Quizzes Taken
              </span>
            </div>
            <div data-oid="vkgd0rp">
              <span className="font-semibold" data-oid="lth5--o">
                {user.quizzesCreated.toLocaleString()}
              </span>
              <span className="ml-1 text-muted-foreground" data-oid="fmx795c">
                Quizzes Created
              </span>
            </div>
            <div data-oid="im9s0o:">
              <span className="font-semibold" data-oid="0im7wn1">
                {user.followers.toLocaleString()}
              </span>
              <span className="ml-1 text-muted-foreground" data-oid="kbg3_30">
                Followers
              </span>
            </div>
            <div data-oid="vcm13kt">
              <span className="font-semibold" data-oid="s0e08gm">
                {user.following.toLocaleString()}
              </span>
              <span className="ml-1 text-muted-foreground" data-oid="pbkal2p">
                Following
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex gap-2 self-start sm:self-center"
          data-oid="0drqr:d"
        >
          <Button
            data-oid="lt8fvy8"
            onClick={onFollowToggle}
            size="sm"
            variant={isFollowing ? "secondary" : "default"}
          >
            {isFollowing ? (
              <>
                <UserCheck className="mr-1.5 h-4 w-4" data-oid="wbg3ny9" />
                Following
              </>
            ) : (
              <>
                <UserPlus className="mr-1.5 h-4 w-4" data-oid="j6ix6mb" />
                Follow
              </>
            )}
          </Button>
          <Button
            data-oid="byaceog"
            onClick={onMessageClick}
            size="sm"
            variant="outline"
          >
            <MessageSquare className="mr-1.5 h-4 w-4" data-oid="_0xiubt" />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}
