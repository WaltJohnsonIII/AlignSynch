"use client";

import {
  BarChart3,
  BookOpen,
  ChevronDown,
  Compass,
  DollarSign,
  Home,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  Settings,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";

export function AppSidebar() {
  const pathname = usePathname();
  const { collapsed } = useSidebar();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside
      className={cn(
        "sticky top-0 flex h-screen flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[250px]"
      )}
      data-oid="1e5-_zr"
    >
      <div
        className="flex h-16 items-center justify-center border-b px-4"
        data-oid="artshy2"
      >
        <Link
          className="flex items-center space-x-2"
          data-oid=".lz2.m2"
          href="/"
        >
          <BookOpen className="h-6 w-6 text-primary" data-oid="ec28ypc" />
          {!collapsed && (
            <span className="font-bold text-xl" data-oid="gw5e011">
              QuizHub
            </span>
          )}
        </Link>
      </div>

      <div className="flex-1 overflow-auto py-4" data-oid="kz-zz8w">
        <nav className="grid gap-1 px-2" data-oid="w0c66-3">
          <NavItem
            active={isActive("/dashboard")}
            data-oid="5.x144t"
            href="/dashboard"
            icon={<LayoutDashboard className="h-5 w-5" data-oid="wzvlfxf" />}
            label="Dashboard"
          />

          <NavItem
            active={isActive("/my-quizzes")}
            data-oid="pqj:29_"
            href="/my-quizzes"
            icon={<Home className="h-5 w-5" data-oid="_ahxb3p" />}
            label="My Quizzes"
          />

          <NavItem
            active={isActive("/explore")}
            data-oid="sii8_6i"
            href="/explore"
            icon={<Compass className="h-5 w-5" data-oid="nja99-9" />}
            label="Explore Quizzes"
          />

          <Collapsible data-oid="781snqs">
            <CollapsibleTrigger
              className="group flex w-full items-center justify-between rounded-md px-3 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
              data-oid="wyg4.uc"
            >
              <div className="flex items-center gap-3" data-oid="wa3wtvf">
                <PlusCircle className="h-5 w-5" data-oid="0.w8g4c" />
                {!collapsed && <span data-oid="f4-5pmp">Create Quiz</span>}
              </div>
              {!collapsed && (
                <ChevronDown className="h-4 w-4" data-oid="bez_2sr" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent data-oid="p68qeqf">
              <div
                className={cn("grid gap-1", collapsed ? "pl-0" : "pl-6")}
                data-oid="u898w3i"
              >
                <NavItem
                  active={isActive("/create/editor")}
                  data-oid="ginbi1z"
                  href="/create/editor"
                  icon={
                    <div
                      className="h-1 w-1 rounded-full bg-current"
                      data-oid="8uobh1a"
                    />
                  }
                  label="Editor"
                  nested
                />

                <NavItem
                  active={isActive("/create/generator")}
                  data-oid="d0d1_se"
                  href="/create/generator"
                  icon={
                    <div
                      className="h-1 w-1 rounded-full bg-current"
                      data-oid="azgj6m4"
                    />
                  }
                  label="Generator"
                  nested
                />
              </div>
            </CollapsibleContent>
          </Collapsible>

          <NavItem
            active={isActive("/categories")}
            data-oid=".doyloz"
            href="/categories"
            icon={<BookOpen className="h-5 w-5" data-oid="j.:jm36" />}
            label="Categories"
          />

          <NavItem
            active={isActive("/leaderboard")}
            data-oid="c.3baj2"
            href="/leaderboard"
            icon={<Trophy className="h-5 w-5" data-oid="4lszrys" />}
            label="Leaderboard"
          />

          <NavItem
            active={isActive("/affiliate")}
            data-oid="o6r3jar"
            href="/affiliate"
            icon={<Users className="h-5 w-5" data-oid="uro7jcx" />}
            label="Affiliate Page"
          />

          <NavItem
            active={isActive("/pricing")}
            data-oid="jbr4g:."
            href="/pricing"
            icon={<DollarSign className="h-5 w-5" data-oid="lsi2o1z" />}
            label="Pricing Plan"
          />

          <NavItem
            active={isActive("/earnings")}
            data-oid="h5vl5vp"
            href="/earnings"
            icon={<DollarSign className="h-5 w-5" data-oid="hzbs6od" />}
            label="Earnings & Wallet"
          />

          <NavItem
            active={isActive("/analytics")}
            data-oid="x6gyqpl"
            href="/analytics"
            icon={<BarChart3 className="h-5 w-5" data-oid="nhkur6p" />}
            label="Results & Analytics"
          />

          <NavItem
            active={isActive("/settings")}
            data-oid="a9isemc"
            href="/settings"
            icon={<Settings className="h-5 w-5" data-oid="z84q516" />}
            label="Account Settings"
          />
        </nav>
      </div>

      <div className="border-t py-4" data-oid="8f4jli8">
        <nav className="grid gap-1 px-2" data-oid=":m6emky">
          <NavItem
            active={isActive("#")}
            data-oid="cpw7t56"
            href="#"
            icon={<LogOut className="h-5 w-5" data-oid=":s7:rd8" />}
            label="Logout"
          />
        </nav>
      </div>
    </aside>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  nested?: boolean;
}

function NavItem({ href, icon, label, active, nested = false }: NavItemProps) {
  const { collapsed } = useSidebar();

  if (collapsed) {
    return (
      <div className="group relative" data-oid="k_ufls8">
        <Link
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md transition-colors",
            active
              ? "bg-accent text-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground",
            nested && "h-6 w-6"
          )}
          data-oid="cvsmyce"
          href={href}
        >
          {icon}
        </Link>
        <div
          className="-translate-y-1/2 invisible absolute top-1/2 left-full z-[100] ml-2 whitespace-nowrap rounded border bg-popover px-2 py-1 font-medium text-popover-foreground text-sm opacity-0 shadow-md transition-all duration-200 group-hover:visible group-hover:opacity-100"
          data-oid="dlmf7j3"
        >
          {label}
        </div>
      </div>
    );
  }

  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 font-medium text-sm transition-colors",
        active
          ? "bg-accent text-accent-foreground"
          : "hover:bg-accent hover:text-accent-foreground",
        nested && "pl-6"
      )}
      data-oid="9yrqp-1"
      href={href}
    >
      <span data-oid="syf_ism">{icon}</span>
      <span data-oid="9j9:r_2">{label}</span>
    </Link>
  );
}
