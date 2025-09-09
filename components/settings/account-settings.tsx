"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "../ui/page-header";
import { AppearanceSettings } from "./appearance-settings";
import { ConnectedAccounts } from "./connected-accounts";
import { NotificationSettings } from "./notification-settings";
import { PrivacySettings } from "./privacy-settings";
import { ProfileSettings } from "./profile-settings";
import { QuizPreferences } from "./quiz-preferences";
import { SecuritySettings } from "./security-settings";
import { SubscriptionSettings } from "./subscription-settings";

export function AccountSettings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="container mx-auto" data-oid="gj9ho.b">
      <PageHeader
        data-oid="_g1cr9:"
        description="Manage your account settings and preferences"
        title="Account Settings"
      />

      <Tabs
        className="mt-6"
        data-oid="xrsw1:q"
        onValueChange={setActiveTab}
        value={activeTab}
      >
        <TabsList
          className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-8"
          data-oid="e7i90bk"
        >
          <TabsTrigger data-oid="l5j.lso" value="profile">
            Profile
          </TabsTrigger>
          <TabsTrigger data-oid="hv9pvf1" value="security">
            Security
          </TabsTrigger>
          <TabsTrigger data-oid="3o3_6ts" value="notifications">
            Notifications
          </TabsTrigger>
          <TabsTrigger data-oid="u4._k2i" value="privacy">
            Privacy
          </TabsTrigger>
          <TabsTrigger data-oid="fm7hvmb" value="appearance">
            Appearance
          </TabsTrigger>
          <TabsTrigger data-oid="ub.4f:." value="quiz">
            Quiz Preferences
          </TabsTrigger>
          <TabsTrigger data-oid="6hp.dx5" value="connected">
            Connected Accounts
          </TabsTrigger>
          <TabsTrigger data-oid="kfj:q9f" value="subscription">
            Subscription
          </TabsTrigger>
        </TabsList>

        <div
          className="rounded-lg border bg-card p-6 shadow-sm"
          data-oid="ygo9r.8"
        >
          <TabsContent data-oid="7gmfpxw" value="profile">
            <ProfileSettings data-oid="8el9j0s" />
          </TabsContent>

          <TabsContent data-oid="em:48g6" value="security">
            <SecuritySettings data-oid="a7dkojj" />
          </TabsContent>

          <TabsContent data-oid="ctff6ln" value="notifications">
            <NotificationSettings data-oid="vn6_z85" />
          </TabsContent>

          <TabsContent data-oid="w58jni." value="privacy">
            <PrivacySettings data-oid="xoynlyd" />
          </TabsContent>

          <TabsContent data-oid="cbgjo:h" value="appearance">
            <AppearanceSettings data-oid="5p2qip7" />
          </TabsContent>

          <TabsContent data-oid="2nk3.9q" value="quiz">
            <QuizPreferences data-oid=":m4mxn0" />
          </TabsContent>

          <TabsContent data-oid="o6-ikf5" value="connected">
            <ConnectedAccounts data-oid="6rcyy12" />
          </TabsContent>

          <TabsContent data-oid="wv1s9kh" value="subscription">
            <SubscriptionSettings data-oid="jmatkxq" />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
