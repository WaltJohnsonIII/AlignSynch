"use client";
import {
  Award,
  BookOpen,
  Compass,
  DollarSign,
  FileQuestion,
  Home,
  LifeBuoy,
  Lightbulb,
  LogOut,
  Medal,
  Newspaper,
  PackagePlus,
  Sparkles,
  Swords,
  Trophy,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useWindowSize } from "@/hooks/use-window";
import { cn } from "@/lib/utils";
import { getAppName } from "@/lib/config";
import { useSidebar } from "./sidebar-context";

export function AppSidebar() {
  const pathname = usePathname();

  const { collapsed, setCollapsed } = useSidebar();
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <aside
      className={cn(
        "top-0 flex h-screen flex-col border-r bg-background transition-all duration-300 max-xl:fixed max-xl:top-0 max-xl:left-0 max-xl:h-full xl:sticky",
        collapsed ? "w-[250px] xl:w-[70px]" : "w-[250px]",
        collapsed ? "max-xl:-translate-x-full" : "max-xl:translate-x-0"
      )}
      data-oid="k:bbd3_"
    >
      <div
        className={`flex h-16 items-center gap-2 border-b px-4 max-xl:justify-between ${collapsed ? "justify-center" : "justify-between"}`}
        data-oid="n0ghkka"
      >
        <Link
          className="flex items-center justify-center gap-2"
          data-oid="kw-2g2q"
          href="/"
        >
          <BookOpen className="h-6 w-6 text-primary" data-oid="4snbtjo" />
          {!collapsed && (
            <span className="font-bold text-xl" data-oid="2-p8j.p">
              {getAppName()}
            </span>
          )}
        </Link>
        <button
          className="xl:hidden"
          data-oid="73fqqji"
          onClick={() => setCollapsed(!collapsed)}
        >
          <X className="size-5" data-oid="grolw7z" />
        </button>
      </div>

      <div className="flex-1 overflow-auto py-4" data-oid="ppwexca">
        <nav className="grid gap-1 px-2" data-oid="d054et7">
          <NavItem
            active={isActive("/")}
            data-oid="3ev3mmj"
            href="/"
            icon={<Home className="size-5" data-oid="_8t:_u5" />}
            label="Home"
          />

          <NavItem
            active={isActive("/daily-challenge")}
            data-oid="b.t_ifc"
            href="/daily-challenge"
            icon={<Trophy className="size-5" data-oid="uwjllx." />}
            label="Today's Challenge"
          />

          <NavItem
            active={isActive("/categories")}
            data-oid="op5dr4v"
            href="/categories"
            icon={<BookOpen className="size-5" data-oid="o1v8:ot" />}
            label="Categories"
          />

          <NavItem
            active={isActive("/battle")}
            data-oid="vfaezxj"
            href="/battle"
            icon={<Swords className="size-5" data-oid="hk9rceo" />}
            label="Quiz Battle"
          />

          <NavItem
            active={isActive("/news")}
            data-oid=":-_-bv2"
            href="/news"
            icon={<Newspaper className="size-5" data-oid="wnjjibz" />}
            label="News & Updates"
          />

          <NavItem
            active={isActive("/explore")}
            data-oid="6tnbgv."
            href="/explore"
            icon={<Compass className="size-5" data-oid="sl54icn" />}
            label="Explore Quizzes"
          />

          <NavItem
            active={isActive("/tournaments")}
            data-oid="k:bdw2:"
            href="/tournaments"
            icon={<Award className="size-5" data-oid="b-k5q::" />}
            label="Quiz Tournament"
          />

          <NavItem
            active={isActive("/leaderboard")}
            data-oid="20s088y"
            href="/leaderboard"
            icon={<Medal className="size-5" data-oid="n-pelcv" />}
            label="Leaderboard"
          />

          <NavItem
            active={isActive("/creator-tips")}
            data-oid="dkt3zz7"
            href="/creator-tips"
            icon={<Lightbulb className="size-5" data-oid="wpo3e9-" />}
            label="Quiz Creator Tips"
          />

          <NavItem
            active={isActive("/quiz-discussions")}
            data-oid="qy3ukux"
            href="/quiz-discussions"
            icon={<FileQuestion className="size-5" data-oid="fzcor7x" />}
            label="Quiz Discussions"
          />

          <NavItem
            active={isActive("/create/editor")}
            data-oid="mmc6:ca"
            href="/create/editor"
            icon={<PackagePlus className="size-5" data-oid="7ycux0:" />}
            label="Create Quiz"
          />

          <NavItem
            active={isActive("/create/generator")}
            data-oid="9prqb6t"
            href="/create/generator"
            icon={<Sparkles className="size-5" data-oid="7m5hwu2" />}
            label="Ai Quiz Generator"
          />

          <NavItem
            active={isActive("/affiliate")}
            data-oid="5:4.aaq"
            href="/affiliate"
            icon={<Users className="size-5" data-oid="lho_mzu" />}
            label="Affiliate Page"
          />

          <NavItem
            active={isActive("/pricing")}
            data-oid=":_t.i7k"
            href="/pricing"
            icon={<DollarSign className="size-5" data-oid="_t8y.q1" />}
            label="Pricing Plan"
          />

          <NavItem
            active={isActive("/support")}
            data-oid="::knmfl"
            href="/support"
            icon={<LifeBuoy className="size-5" data-oid="j9nxq6z" />}
            label="Support"
          />
        </nav>
      </div>

      <div className="border-t py-4" data-oid="81t27w4">
        <nav className="grid gap-1 px-2" data-oid="sjdf:8d">
          <NavItem
            active={isActive("#")}
            data-oid="v60ub-p"
            href="#"
            icon={<LogOut className="size-5" data-oid="qqw90:m" />}
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
  const { collapsed, setCollapsed } = useSidebar();
  const { width } = useWindowSize();
  const handleClick = () => {
    if (width < 1280) {
      setCollapsed(true);
    }
  };
  if (collapsed) {
    return (
      <div
        className="group relative flex items-center justify-center"
        data-oid="ji0dz:_"
      >
        <Link
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md transition-colors",
            active
              ? "bg-indigo-500 text-white"
              : "hover:bg-accent hover:text-accent-foreground",
            nested && "h-6 w-6"
          )}
          data-oid="z8sice1"
          href={href}
        >
          {icon}
        </Link>
      </div>
    );
  }

  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 font-medium text-sm transition-colors xl:py-2.5",
        active
          ? "bg-indigo-500 text-white"
          : "hover:bg-accent hover:text-accent-foreground",
        nested && "pl-6"
      )}
      data-oid="elt2ue2"
      href={href}
      onClick={handleClick}
    >
      <span data-oid=".ecsolf">{icon}</span>
      <span data-oid="q:52co5">{label}</span>
    </Link>
  );
}
