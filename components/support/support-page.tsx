"use client";

import { useState } from "react";
import { ContactForm } from "./contact-form";
import { KnowledgeBase } from "./knowledge-base";
import { SupportCategories } from "./support-categories";
import { SupportFAQ } from "./support-faq";
import { SupportHeader } from "./support-header";

export type SupportCategory =
  | "all"
  | "account"
  | "billing"
  | "quiz-creation"
  | "tournaments"
  | "privacy"
  | "technical"
  | "general";

export function SupportPage() {
  const [activeTab, setActiveTab] = useState<"faq" | "contact" | "knowledge">(
    "faq"
  );
  const [selectedCategory, setSelectedCategory] =
    useState<SupportCategory>("all");

  return (
    <div className="container mx-auto py-4" data-oid="3:qdym0">
      <SupportHeader
        activeTab={activeTab}
        data-oid="_jut4sb"
        setActiveTab={setActiveTab}
      />

      <div
        className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4"
        data-oid="7emsy8d"
      >
        <div className="md:col-span-1" data-oid="i6uhw1k">
          <SupportCategories
            data-oid="0td23oh"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="md:col-span-3" data-oid="yqz-dd4">
          {activeTab === "faq" && (
            <SupportFAQ
              data-oid="h_buenk"
              selectedCategory={selectedCategory}
            />
          )}
          {activeTab === "contact" && (
            <ContactForm
              data-oid="n7u:25y"
              selectedCategory={selectedCategory}
            />
          )}
          {activeTab === "knowledge" && (
            <KnowledgeBase
              data-oid="cqh.e7s"
              selectedCategory={selectedCategory}
            />
          )}
        </div>
      </div>
    </div>
  );
}
