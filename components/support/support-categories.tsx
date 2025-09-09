"use client";

import {
  CreditCard,
  FileQuestion,
  HelpCircle,
  Lock,
  Settings,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { SupportCategory } from "./support-page";

interface SupportCategoriesProps {
  selectedCategory: SupportCategory;
  setSelectedCategory: (category: SupportCategory) => void;
}

export function SupportCategories({
  selectedCategory,
  setSelectedCategory,
}: SupportCategoriesProps) {
  const categories = [
    {
      id: "all",
      name: "All Categories",
      icon: <HelpCircle className="h-4 w-4" data-oid="m.qlz20" />,
    },
    {
      id: "account",
      name: "Account",
      icon: <Users className="h-4 w-4" data-oid="iyl8a5e" />,
    },
    {
      id: "billing",
      name: "Billing",
      icon: <CreditCard className="h-4 w-4" data-oid="22kaqr2" />,
    },
    {
      id: "quiz-creation",
      name: "Quiz Creation",
      icon: <FileQuestion className="h-4 w-4" data-oid="3chbzml" />,
    },
    {
      id: "tournaments",
      name: "Tournaments",
      icon: <Trophy className="h-4 w-4" data-oid=":mtchus" />,
    },
    {
      id: "privacy",
      name: "Privacy",
      icon: <Lock className="h-4 w-4" data-oid=":1x48kc" />,
    },
    {
      id: "technical",
      name: "Technical Issues",
      icon: <Settings className="h-4 w-4" data-oid="gytij4m" />,
    },
    {
      id: "general",
      name: "General",
      icon: <HelpCircle className="h-4 w-4" data-oid="81h-4w4" />,
    },
  ];

  return (
    <Card data-oid="do81fc0">
      <CardHeader data-oid="z9o8x_8">
        <CardTitle data-oid="aeqvp4g">Help Categories</CardTitle>
      </CardHeader>
      <CardContent className="p-4" data-oid="igwi-vd">
        <div className="space-y-2" data-oid="4_ka.87">
          {categories.map((category) => (
            <Button
              className={cn(
                "w-full justify-start",
                selectedCategory === category.id
                  ? "bg-indigo-500 text-white"
                  : ""
              )}
              data-oid="kj_n91o"
              key={category.id}
              onClick={() =>
                setSelectedCategory(category.id as SupportCategory)
              }
              variant={selectedCategory === category.id ? "default" : "ghost"}
            >
              <span className="mr-2" data-oid="57g9c60">
                {category.icon}
              </span>
              {category.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
