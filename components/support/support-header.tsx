"use client";

import { BookOpen, HelpCircle, MessageSquare } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SupportHeaderProps {
  activeTab: "faq" | "contact" | "knowledge";
  setActiveTab: (tab: "faq" | "contact" | "knowledge") => void;
}

export function SupportHeader({ activeTab, setActiveTab }: SupportHeaderProps) {
  return (
    <div className="space-y-4" data-oid="z9eoe6.">
      <div className="text-center" data-oid="iq14x2j">
        <h1 className="font-bold text-3xl tracking-tight" data-oid="3-s4_4y">
          Support Center
        </h1>
        <p className="mt-2 text-muted-foreground" data-oid="5oxgwt-">
          Find answers to common questions or get in touch with our support team
        </p>
      </div>

      <Tabs
        className="w-full"
        data-oid="b1.:cqd"
        onValueChange={(value) =>
          setActiveTab(value as "faq" | "contact" | "knowledge")
        }
        value={activeTab}
      >
        <TabsList className="grid w-full grid-cols-3" data-oid="x.46473">
          <TabsTrigger
            className="flex items-center"
            data-oid="6mwdo9k"
            value="faq"
          >
            <HelpCircle className="mr-2 h-4 w-4" data-oid="aey1p33" />
            <span className="hidden sm:inline" data-oid="i6w0hwv">
              Frequently Asked Questions
            </span>
            <span className="sm:hidden" data-oid="zjs6-ca">
              FAQs
            </span>
          </TabsTrigger>
          <TabsTrigger
            className="flex items-center"
            data-oid="wi9yv3a"
            value="contact"
          >
            <MessageSquare className="mr-2 h-4 w-4" data-oid="rdg-0si" />
            <span className="hidden sm:inline" data-oid="xjl:s8_">
              Contact Support
            </span>
            <span className="sm:hidden" data-oid="ulixs3i">
              Contact
            </span>
          </TabsTrigger>
          <TabsTrigger
            className="flex items-center"
            data-oid="ywne.qy"
            value="knowledge"
          >
            <BookOpen className="mr-2 h-4 w-4" data-oid="ahhqwrh" />
            <span className="hidden sm:inline" data-oid="zakpyc5">
              Knowledge Base
            </span>
            <span className="sm:hidden" data-oid="zhg1k_w">
              Articles
            </span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
