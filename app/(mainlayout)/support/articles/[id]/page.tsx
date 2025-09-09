import { use } from "react";
import { ArticleDetail } from "@/components/support/article-detail";

export default function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <ArticleDetail articleId={id} data-oid="jbgei1b" />;
}
