"use client";

import { ArrowRight, BookOpen, FileText, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { articlesData } from "@/data/knowledge-base-data";
import type { SupportCategory } from "./support-page";

interface KnowledgeBaseProps {
  selectedCategory: SupportCategory;
}

export function KnowledgeBase({ selectedCategory }: KnowledgeBaseProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Get the appropriate articles based on the selected category
  const articles =
    selectedCategory === "all"
      ? articlesData
      : articlesData.filter((article) => article.category === selectedCategory);

  // Filter articles based on search query
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the category name for display
  const getCategoryName = () => {
    switch (selectedCategory) {
      case "all":
        return "All Categories";
      case "account":
        return "Account";
      case "billing":
        return "Billing";
      case "quiz-creation":
        return "Quiz Creation";
      case "tournaments":
        return "Tournaments";
      case "privacy":
        return "Privacy";
      case "technical":
        return "Technical Issues";
      case "general":
        return "General";
      default:
        return "All Categories";
    }
  };

  return (
    <Card className="p-4 xl:p-6" data-oid="g9rkk8x">
      <div
        className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center"
        data-oid="qjl9rsw"
      >
        <h2 className="font-bold text-2xl" data-oid="l21vjdk">
          {getCategoryName()} Knowledge Base
        </h2>
        <div
          className="relative mt-4 w-full md:mt-0 md:w-64"
          data-oid="cmoifhw"
        >
          <Search
            className="absolute top-2.5 left-2 h-4 w-4 text-muted-foreground"
            data-oid="rdi6hl7"
          />

          <Input
            className="pl-8"
            data-oid=".0tg55q"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            value={searchQuery}
          />
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          data-oid="0hwmed_"
        >
          {filteredArticles.map((article) => (
            <Card
              className="overflow-hidden border transition-colors hover:border-primary/50"
              data-oid="9nj4_l8"
              key={article.id}
            >
              <CardContent className="!pt-6" data-oid="vat.j_b">
                <Link
                  className="block"
                  data-oid="5x03ov_"
                  href={`/support/articles/${article.id}`}
                >
                  <Button
                    className="h-full w-full flex-col items-start justify-start p-4"
                    data-oid=":x7smlb"
                    variant="ghost"
                  >
                    <div
                      className="mb-2 flex w-full items-center justify-between"
                      data-oid=":giphq7"
                    >
                      <div className="flex items-center" data-oid="7qrr9t3">
                        <BookOpen
                          className="mr-2 h-4 w-4 text-primary"
                          data-oid="k_s:xiw"
                        />

                        <Badge
                          className="text-xs"
                          data-oid="-gkj09o"
                          variant="outline"
                        >
                          {article.category.charAt(0).toUpperCase() +
                            article.category.slice(1).replace("-", " ")}
                        </Badge>
                      </div>
                      <span
                        className="text-muted-foreground text-xs"
                        data-oid="oo37:.v"
                      >
                        {article.readTime} min read
                      </span>
                    </div>
                    <h3
                      className="mb-2 line-clamp-1 text-left font-medium"
                      data-oid="t_xdwpf"
                    >
                      {article.title}
                    </h3>
                    <p
                      className="mb-4 line-clamp-1 text-left text-muted-foreground text-sm"
                      data-oid="jjytqma"
                    >
                      {article.description}
                    </p>
                    <div
                      className="mt-auto flex items-center text-primary text-sm"
                      data-oid="2hgsbfq"
                    >
                      <span data-oid="0aw-_zm">Read article</span>
                      <ArrowRight className="ml-1 h-3 w-3" data-oid="a0vvwa6" />
                    </div>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center" data-oid="pcho:6l">
          <FileText
            className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-50"
            data-oid=".mn4e6d"
          />

          <p className="text-muted-foreground" data-oid="qycjs52">
            No articles found matching your search.
          </p>
        </div>
      )}
    </Card>
  );
}
