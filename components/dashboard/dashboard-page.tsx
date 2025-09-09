"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { AffiliateDashboard } from "@/components/dashboard/affiliate-dashboard";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";
import { MyQuizzesDashboard } from "@/components/dashboard/my-quizzes-dashboard";
import { SettingsDashboard } from "@/components/dashboard/settings-dashboard";
import { WalletDashboard } from "@/components/dashboard/wallet-dashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DashboardPage() {
  const tab = useSearchParams().get("tab");
  const [activeTab, setActiveTab] = useState(tab || "overview");

  return (
    <div className="flex flex-col space-y-6" data-oid=".f:_gdy">
      <DashboardHeader activeTab={activeTab} data-oid="riv4bbe" />

      <Tabs
        className="space-y-6"
        data-oid="abdu3ms"
        defaultValue={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList
          className="flex w-full max-w-4xl gap-4 overflow-x-auto md:grid md:grid-cols-5"
          data-oid="oz53dlx"
        >
          <TabsTrigger data-oid="mpy:odh" value="overview">
            Overview
          </TabsTrigger>
          <TabsTrigger data-oid="h9:-dmk" value="my-quizzes">
            My Quizzes
          </TabsTrigger>
          <TabsTrigger data-oid="cs:7sxm" value="wallet">
            Wallet
          </TabsTrigger>
          <TabsTrigger data-oid="ke48n4r" value="affiliate">
            Affiliate
          </TabsTrigger>
          <TabsTrigger data-oid="cdjzn02" value="settings">
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent className="space-y-6" data-oid="myqa5pb" value="overview">
          <DashboardOverview data-oid="up9j826" />
        </TabsContent>

        <TabsContent
          className="space-y-6"
          data-oid="nsnh.l2"
          value="my-quizzes"
        >
          <MyQuizzesDashboard data-oid="000q2:1" />
        </TabsContent>

        <TabsContent className="space-y-6" data-oid="fme---k" value="wallet">
          <WalletDashboard data-oid="tpffndx" />
        </TabsContent>

        <TabsContent className="space-y-6" data-oid=".oivkzs" value="affiliate">
          <AffiliateDashboard data-oid="2ehos:l" />
        </TabsContent>

        <TabsContent className="space-y-6" data-oid="agxh2z0" value="settings">
          <SettingsDashboard data-oid="ug_bv70" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
