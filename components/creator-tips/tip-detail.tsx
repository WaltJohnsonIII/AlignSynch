"use client";

import { ArrowLeft, Bookmark, Clock, Share2, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { getRelatedTips, type Tip } from "@/data/creator-tips-data";
import { cn } from "@/lib/utils";
import RelatedTips from "./related-tips";

interface TipDetailProps {
  tip: Tip;
}

export default function TipDetail({ tip }: TipDetailProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(45);
  const [hasLiked, setHasLiked] = useState(false);

  const relatedTips = getRelatedTips(tip);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = () => {
    if (hasLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setHasLiked(!hasLiked);
  };

  return (
    <div className="container mx-auto" data-oid="4f6zn9v">
      <Link
        className="mb-6 inline-flex items-center text-purple-600 hover:text-purple-800"
        data-oid="f2xi4cu"
        href="/creator-tips"
      >
        <ArrowLeft className="mr-2" data-oid="iedb8vw" size={16} />
        Back to all tips
      </Link>

      <article className="mx-auto max-w-4xl" data-oid="xhwa-63">
        <header className="mb-8" data-oid=":tvf02a">
          <div className="mb-4 flex items-center" data-oid="f9jwnm3">
            <span
              className="rounded-full bg-purple-500 px-3 py-1 font-medium text-white text-xs"
              data-oid="oihertj"
            >
              {tip.category
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </span>
            <div
              className="ml-4 flex items-center text-gray-500 text-sm dark:text-gray-200"
              data-oid="4vvh92e"
            >
              <Clock className="mr-1" data-oid="1.vy1xd" size={14} />
              {tip.readTime} min read
            </div>
          </div>

          <h1
            className="mb-4 font-bold text-2xl md:text-3xl xl:text-4xl"
            data-oid="d83n7gs"
          >
            {tip.title}
          </h1>

          <p
            className="mb-6 text-gray-600 text-xl dark:text-gray-50"
            data-oid="d_188wq"
          >
            {tip.excerpt}
          </p>
          <Image
            alt={tip.title}
            className="mb-6 aspect-[16/6] object-cover"
            data-oid="0:mj_jm"
            height={300}
            src={tip.image || "/placeholder.svg"}
            width={1000}
          />

          <div
            className="flex flex-wrap items-center justify-between gap-3 border-gray-200 border-b pb-6 dark:border-gray-700"
            data-oid="::fb1cm"
          >
            <div className="flex items-center" data-oid="psp:q71">
              <div
                className="mr-3 h-10 w-10 overflow-hidden rounded-full"
                data-oid="qc-xn34"
              >
                <Image
                  alt={tip.author.name}
                  className="object-cover"
                  data-oid="2zr:x_w"
                  height={40}
                  src={tip.author.avatar || "/placeholder.svg"}
                  width={40}
                />
              </div>
              <div data-oid="as05co3">
                <div className="font-medium" data-oid="c3y4mhs">
                  {tip.author.name}
                </div>
                <div className="text-gray-500 text-sm" data-oid="bs57ozf">
                  {tip.date}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4" data-oid="8ptvuy4">
              <Button
                className={cn(
                  "flex items-center",
                  isBookmarked &&
                    "border-purple-200 bg-purple-50 text-purple-600"
                )}
                data-oid="kq0cr68"
                onClick={handleBookmark}
                size="sm"
                variant="outline"
              >
                <Bookmark className="mr-2" data-oid="pt_5lb9" size={16} />
                {isBookmarked ? "Saved" : "Save"}
              </Button>

              <Button
                className="flex items-center"
                data-oid="3rqhn26"
                onClick={handleLike}
                size="sm"
                variant="outline"
              >
                <ThumbsUp
                  className={cn(
                    "mr-2",
                    hasLiked && "fill-purple-600 text-purple-600"
                  )}
                  data-oid="_3jzjyx"
                  size={16}
                />

                {likeCount}
              </Button>

              <Button
                className="flex items-center"
                data-oid="aw01.y0"
                size="sm"
                variant="outline"
              >
                <Share2 className="mr-2" data-oid="m-ycqzg" size={16} />
                Share
              </Button>
            </div>
          </div>
        </header>

        <div className="prose prose-purple mb-12 max-w-none" data-oid="dkq-qzl">
          <Markdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="mb-6 font-bold text-4xl"
                  {...props}
                  data-oid="idthh2e"
                />
              ),

              h2: ({ node, ...props }) => (
                <h2
                  className="mb-5 font-bold text-3xl"
                  {...props}
                  data-oid="sfmowa_"
                />
              ),

              h3: ({ node, ...props }) => (
                <h3
                  className="mb-4 font-bold text-2xl"
                  {...props}
                  data-oid="-a6rc-q"
                />
              ),

              h4: ({ node, ...props }) => (
                <h4
                  className="mb-3 font-bold text-xl"
                  {...props}
                  data-oid="gjhffo3"
                />
              ),

              h5: ({ node, ...props }) => (
                <h5
                  className="mb-2 font-bold text-lg"
                  {...props}
                  data-oid="cq05:f9"
                />
              ),

              h6: ({ node, ...props }) => (
                <h6
                  className="mb-2 font-bold text-base"
                  {...props}
                  data-oid="klouq46"
                />
              ),

              p: ({ node, ...props }) => (
                <p
                  className="mb-4 text-base leading-relaxed"
                  {...props}
                  data-oid="_jv8esk"
                />
              ),

              a: ({ node, ...props }) => (
                <a
                  className="mb-3 block text-purple-600 hover:text-purple-700"
                  {...props}
                  data-oid="dp2oo2e"
                />
              ),
            }}
            data-oid="-.4w586"
          >
            {tip.content}
          </Markdown>
        </div>
      </article>

      {relatedTips.length > 0 && (
        <RelatedTips data-oid="948r.3c" tips={relatedTips} />
      )}
    </div>
  );
}
