import { use } from "react";
import { NewsArticle } from "@/components/news/news-article";

export const metadata = {
  title: "Article | QuizMaker News",
  description: "Read the latest quiz news and updates.",
};

export default function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return <NewsArticle data-oid="k-8vmdj" slug={slug} />;
}
