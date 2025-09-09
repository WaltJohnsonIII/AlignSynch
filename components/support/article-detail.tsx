"use client";

import {
  ArrowRight,
  Bookmark,
  BookOpen,
  ChevronLeft,
  Clock,
  Printer,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  articlesData,
  type KnowledgeBaseArticle,
} from "@/data/knowledge-base-data";

interface ArticleDetailProps {
  articleId: string;
}

export function ArticleDetail({ articleId }: ArticleDetailProps) {
  const [article, setArticle] = useState<KnowledgeBaseArticle>();
  const [loading, setLoading] = useState(true);
  const [helpful, setHelpful] = useState<boolean | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<
    KnowledgeBaseArticle[]
  >([]);

  useEffect(() => {
    // Simulate fetching article data
    const fetchArticle = () => {
      setLoading(true);

      // Find the article in our data
      const foundArticle = articlesData.find(
        (article) => article.id === articleId
      );

      if (foundArticle) {
        setArticle(foundArticle);

        // Get related articles from the same category
        const related = articlesData
          .filter(
            (a) => a.category === foundArticle.category && a.id !== articleId
          )
          .slice(0, 3);

        setRelatedArticles(related);
      }

      setLoading(false);
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-4xl py-4" data-oid="8-7kw:8">
        <div className="animate-pulse" data-oid="k_l-oml">
          <div
            className="mb-6 h-8 w-3/4 rounded bg-gray-200"
            data-oid="y_sn0_x"
          />
          <div
            className="mb-8 h-4 w-1/4 rounded bg-gray-200"
            data-oid="ajqf9_i"
          />
          <div
            className="mb-4 h-4 w-full rounded bg-gray-200"
            data-oid="-yb_ous"
          />
          <div
            className="mb-4 h-4 w-full rounded bg-gray-200"
            data-oid="fa5dkod"
          />
          <div
            className="mb-8 h-4 w-3/4 rounded bg-gray-200"
            data-oid="94qpp0:"
          />
          <div
            className="mb-8 h-64 w-full rounded bg-gray-200"
            data-oid="yr2u.08"
          />
          <div
            className="mb-4 h-4 w-full rounded bg-gray-200"
            data-oid="lnu73_8"
          />
          <div
            className="mb-4 h-4 w-full rounded bg-gray-200"
            data-oid="de460:h"
          />
          <div
            className="mb-4 h-4 w-5/6 rounded bg-gray-200"
            data-oid="n7tzkei"
          />
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto max-w-4xl py-4" data-oid="_yn8.k5">
        <Card className="p-8 text-center" data-oid="la_9y3p">
          <h2 className="mb-4 font-bold text-2xl" data-oid="cw5z50o">
            Article Not Found
          </h2>
          <p className="mb-6" data-oid="p7pfbvb">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild data-oid="rnexm9i">
            <Link data-oid="kk:gw1p" href="/support">
              Return to Support Center
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

  const getCategoryName = (categorySlug: string) => {
    const categories: Record<string, string> = {
      account: "Account",
      billing: "Billing",
      "quiz-creation": "Quiz Creation",
      tournaments: "Tournaments",
      privacy: "Privacy",
      technical: "Technical Issues",
      general: "General",
    };

    return categories[categorySlug] || categorySlug;
  };

  return (
    <div className="container mx-auto max-w-4xl py-4" data-oid="jinn2fe">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center text-sm" data-oid="9mgrflw">
        <Link
          className="text-muted-foreground transition-colors hover:text-foreground"
          data-oid="38g9d-0"
          href="/support"
        >
          Support Center
        </Link>
        <ChevronLeft
          className="mx-2 h-4 w-4 rotate-180 text-muted-foreground"
          data-oid="-.eeh-q"
        />

        <Link
          className="text-muted-foreground transition-colors hover:text-foreground"
          data-oid="q8nn1io"
          href="/support"
        >
          Knowledge Base
        </Link>
        <ChevronLeft
          className="mx-2 h-4 w-4 rotate-180 text-muted-foreground"
          data-oid="h21ewvg"
        />

        <span className="font-medium" data-oid="w87crf5">
          {article.title}
        </span>
      </div>

      <Card className="p-3 md:p-8" data-oid="kel19tr">
        {/* Article header */}
        <div className="mb-8" data-oid="80kczu:">
          <div className="mb-3 flex items-center" data-oid="9ra99ig">
            <Badge className="mr-2" data-oid="sgads5f" variant="outline">
              {getCategoryName(article.category)}
            </Badge>
            <div
              className="flex items-center text-muted-foreground text-sm"
              data-oid="9xkwzyx"
            >
              <Clock className="mr-1 h-3 w-3" data-oid="_x.pkb_" />
              <span data-oid="uhm763t">{article.readTime} min read</span>
            </div>
          </div>

          <h1 className="mb-4 font-bold text-3xl" data-oid="rfh.547">
            {article.title}
          </h1>
          <p className="text-muted-foreground" data-oid="01.8_4q">
            {article.description}
          </p>
        </div>

        <Separator className="my-6" data-oid="q.h0a10" />

        {/* Article content */}
        <div className="prose max-w-none" data-oid="9r3o_r_">
          {article.content.map((section, index) => (
            <div className="mb-8" data-oid=".3rsbj1" key={index}>
              {section.heading && (
                <h2 className="mb-4 font-semibold text-xl" data-oid="7qq4y59">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((paragraph: string, pIndex: number) => (
                <p className="mb-4" data-oid="mfufofl" key={pIndex}>
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="my-4 space-y-2" data-oid="_4lvzla">
                  {section.list.map((item: string, lIndex: number) => (
                    <li
                      className="ml-6 list-disc"
                      data-oid="prl1ue1"
                      key={lIndex}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <div
                  className="my-4 rounded-md bg-muted p-4 text-sm"
                  data-oid=".dy_lf4"
                >
                  <strong data-oid="qb_d3_-">Note:</strong> {section.note}
                </div>
              )}
            </div>
          ))}
        </div>

        <Separator className="my-6" data-oid="gqsy6vj" />

        {/* Article feedback */}
        <div className="mt-8" data-oid="9vt3::w">
          <h3 className="mb-4 font-medium text-lg" data-oid="j92cxe2">
            Was this article helpful?
          </h3>
          <div className="flex space-x-4" data-oid="3oppvi-">
            <Button
              className="flex items-center"
              data-oid="pa_6s88"
              onClick={() => setHelpful(true)}
              size="sm"
              variant={helpful === true ? "default" : "outline"}
            >
              <ThumbsUp className="mr-2 h-4 w-4" data-oid="lwg94sy" />
              Yes, it helped
            </Button>
            <Button
              className="flex items-center"
              data-oid="94ywy7g"
              onClick={() => setHelpful(false)}
              size="sm"
              variant={helpful === false ? "default" : "outline"}
            >
              <ThumbsDown className="mr-2 h-4 w-4" data-oid="-z:swbu" />
              No, I need more help
            </Button>
          </div>

          {helpful === false && (
            <div className="mt-4 rounded-md bg-muted p-4" data-oid="w:c978m">
              <p className="mb-2" data-oid="4q3_g-d">
                We're sorry this article didn't help. Would you like to:
              </p>
              <div className="mt-2 flex flex-wrap gap-2" data-oid="i_vd9fd">
                <Button asChild data-oid="cc9o1iy" size="sm" variant="outline">
                  <Link data-oid="nzx_pts" href="/support">
                    Browse other articles
                  </Link>
                </Button>
                <Button asChild data-oid="aclqdvh" size="sm">
                  <Link data-oid="zb.f-:d" href="/support?tab=contact">
                    Contact support
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Article actions */}
        <div className="mt-8 flex flex-wrap gap-2" data-oid=".:g0-jo">
          <Button
            className="flex items-center"
            data-oid="u531ae6"
            size="sm"
            variant="outline"
          >
            <Share2 className="mr-2 h-4 w-4" data-oid="2_xqnc:" />
            Share
          </Button>
          <Button
            className="flex items-center"
            data-oid="6ollf8j"
            size="sm"
            variant="outline"
          >
            <Bookmark className="mr-2 h-4 w-4" data-oid="avrn2_1" />
            Save
          </Button>
          <Button
            className="flex items-center"
            data-oid="c4bsat4"
            size="sm"
            variant="outline"
          >
            <Printer className="mr-2 h-4 w-4" data-oid="dbscpuu" />
            Print
          </Button>
        </div>
      </Card>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-8" data-oid="m97mnfl">
          <h2 className="mb-4 font-bold text-xl" data-oid="gk2cv7j">
            Related Articles
          </h2>
          <div
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            data-oid="wyr:p4q"
          >
            {relatedArticles.map((relatedArticle) => (
              <Card
                className="overflow-hidden border transition-colors hover:border-primary/50"
                data-oid="gm6ri1f"
                key={relatedArticle.id}
              >
                <Link
                  className="block p-4"
                  data-oid="po901c5"
                  href={`/support/articles/${relatedArticle.id}`}
                >
                  <div className="mb-2 flex items-center" data-oid=":l0o597">
                    <BookOpen
                      className="mr-2 h-4 w-4 text-primary"
                      data-oid="9-8sdjj"
                    />

                    <Badge
                      className="text-xs"
                      data-oid="o9ovnkx"
                      variant="outline"
                    >
                      {getCategoryName(relatedArticle.category)}
                    </Badge>
                  </div>
                  <h3 className="mb-2 font-medium" data-oid="4vi4c6q">
                    {relatedArticle.title}
                  </h3>
                  <p
                    className="mb-4 line-clamp-2 text-muted-foreground text-sm"
                    data-oid="ebwn:qr"
                  >
                    {relatedArticle.description}
                  </p>
                  <div
                    className="flex items-center text-primary text-sm"
                    data-oid="jrx8tx-"
                  >
                    <span data-oid=".-iijqr">Read article</span>
                    <ArrowRight className="ml-1 h-3 w-3" data-oid="1gn3m7." />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
