"use client";

import type React from "react";
import { Header } from "@/components/layout/header";
import { AppSidebar } from "@/components/layout/sidebar";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();
  return (
    <div className="flex min-h-screen" data-oid="tmvj2-t">
      <div className="relative z-50" data-oid="r7htm30">
        <AppSidebar data-oid="uwjx0qf" />
      </div>
      <div
        className={cn(
          collapsed ? "xl:w-[calc(100%-70px)]" : "xl:w-[calc(100%-250px)]",
          "w-full"
        )}
        data-oid="0rwsah0"
      >
        <Header data-oid="s8_98zr" />
        <main
          className="flex-1 overflow-auto p-3 xxl:p-6 md:p-4"
          data-oid="j-87w62"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
