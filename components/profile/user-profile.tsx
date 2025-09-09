"use client";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MessageModal } from "@/components/profile/message-modal";
import { ProfileAchievements } from "@/components/profile/profile-achievements";
import { ProfileActivity } from "@/components/profile/profile-activity";
import { ProfileCreatedQuizzes } from "@/components/profile/profile-created-quizzes";
import { ProfileFollowers } from "@/components/profile/profile-followers";
import { ProfileFollowing } from "@/components/profile/profile-following";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileQuizHistory } from "@/components/profile/profile-quiz-history";
import { ProfileStats } from "@/components/profile/profile-stats";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { User } from "@/lib/data/users";

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const handleFollowToggle = () => {
    // In a real app, this would call an API to follow/unfollow
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="container mx-auto max-w-6xl py-6" data-oid="btr_s2_">
      <div className="mb-6" data-oid="4xh8n.6">
        <Link
          className="text-muted-foreground text-sm hover:text-primary"
          data-oid="9f18aza"
          href="/leaderboard"
        >
          ← Back to Leaderboard
        </Link>
      </div>

      <ProfileHeader
        data-oid="bh:5gjz"
        isFollowing={isFollowing}
        onFollowToggle={handleFollowToggle}
        onMessageClick={() => setIsMessageModalOpen(true)}
        user={user}
      />

      <div
        className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3"
        data-oid="pb8.ncc"
      >
        <div className="lg:col-span-2" data-oid="23ay-uh">
          <Tabs className="w-full" data-oid="j-y6-h9" defaultValue="activity">
            <TabsList className="grid w-full grid-cols-5" data-oid="z:1t58t">
              <TabsTrigger data-oid="::s9agj" value="activity">
                Activity
              </TabsTrigger>
              <TabsTrigger data-oid="ypd_bgp" value="quizzes">
                Quizzes Taken
              </TabsTrigger>
              <TabsTrigger data-oid="h-c4jay" value="created">
                Created Quizzes
              </TabsTrigger>
              <TabsTrigger data-oid="q:d6z8t" value="followers">
                Followers
              </TabsTrigger>
              <TabsTrigger data-oid="fkieof7" value="following">
                Following
              </TabsTrigger>
            </TabsList>
            <TabsContent className="mt-4" data-oid="ulf:smi" value="activity">
              <ProfileActivity
                activities={user.recentActivity}
                data-oid="mk-8zns"
              />
            </TabsContent>
            <TabsContent className="mt-4" data-oid="nf:il3o" value="quizzes">
              <ProfileQuizHistory
                data-oid="ia4opwz"
                quizHistory={user.quizHistory}
              />
            </TabsContent>
            <TabsContent className="mt-4" data-oid="eitlq2j" value="created">
              <ProfileCreatedQuizzes data-oid="fi_jn.u" user={user} />
            </TabsContent>
            <TabsContent className="mt-4" data-oid="8vu60p6" value="followers">
              <ProfileFollowers data-oid="qnac-6h" userId={user.id} />
            </TabsContent>
            <TabsContent className="mt-4" data-oid="o0k3r7v" value="following">
              <ProfileFollowing data-oid="s8ls.p1" userId={user.id} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6" data-oid="yy8j_6b">
          <ProfileStats data-oid="8pnum76" stats={user.stats} />
          <ProfileAchievements
            achievements={user.achievements}
            data-oid="b2j9ef_"
          />

          <div
            className="rounded-lg border bg-card p-4 shadow-sm"
            data-oid="ncz0443"
          >
            <h3 className="mb-3 font-semibold" data-oid="v0ydr6v">
              Contact
            </h3>
            <Button
              className="w-full"
              data-oid="18v9:cs"
              onClick={() => setIsMessageModalOpen(true)}
              variant="outline"
            >
              <MessageSquare className="mr-2 h-4 w-4" data-oid="xp1fim:" />
              Send Message
            </Button>
          </div>
        </div>
      </div>

      <MessageModal
        data-oid="nu_o2nt"
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
        recipient={user}
      />
    </div>
  );
}
