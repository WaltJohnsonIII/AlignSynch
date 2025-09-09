import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedTips } from "@/data/creator-tips-data";

export default function FeaturedTips() {
  const featuredTips = getFeaturedTips();

  if (featuredTips.length === 0) {
    return null;
  }

  return (
    <div className="mb-12" data-oid="thbu05-">
      <h2 className="mb-6 font-bold text-2xl" data-oid="ko8bcep">
        Featured Tips
      </h2>

      <div
        className="grid grid-cols-1 xxl:grid-cols-4 gap-6 lg:grid-cols-2 xl:grid-cols-3"
        data-oid="xqq0wlb"
      >
        {featuredTips.map((tip) => (
          <Link
            className="group relative overflow-hidden rounded-xl border border-gray-200 transition-all hover:border-purple-300 hover:shadow-md dark:border-gray-700"
            data-oid="_cd.6ul"
            href={`/creator-tips/${tip.slug}`}
            key={tip.id}
          >
            <div className="relative aspect-video" data-oid="28.bugj">
              <Image
                alt={tip.title}
                className="object-cover"
                data-oid="y9gvkh3"
                fill
                src={tip.image || "/placeholder.svg"}
              />
            </div>

            <div className="p-6" data-oid="w:zmt.v">
              <div className="mb-3 flex items-center" data-oid="1:ncdu:">
                <span
                  className="rounded-full bg-purple-100 px-3 py-1 font-medium text-purple-800 text-xs"
                  data-oid="bw5:wms"
                >
                  {tip.category
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </span>
                <div
                  className="ml-auto flex items-center text-gray-500 text-sm dark:text-gray-200"
                  data-oid="h5kw2lv"
                >
                  <Clock className="mr-1" data-oid="qj-gp3." size={14} />
                  {tip.readTime} min read
                </div>
              </div>

              <h3
                className="mb-2 font-bold text-xl transition-colors group-hover:text-purple-700"
                data-oid="rl37lbi"
              >
                {tip.title}
              </h3>

              <p
                className="mb-4 text-gray-600 dark:text-gray-100"
                data-oid=":kwq6k."
              >
                {tip.excerpt}
              </p>

              <div
                className="flex items-center justify-between"
                data-oid="9-pxj_4"
              >
                <div className="flex items-center" data-oid="2xpjxvi">
                  <div
                    className="mr-2 h-8 w-8 overflow-hidden rounded-full"
                    data-oid=":9bnhqo"
                  >
                    <Image
                      alt={tip.author.name}
                      className="object-cover"
                      data-oid="s5_e95k"
                      height={32}
                      src={tip.author.avatar || "/placeholder.svg"}
                      width={32}
                    />
                  </div>
                  <span className="font-medium text-sm" data-oid="w640j:v">
                    {tip.author.name}
                  </span>
                </div>

                <span
                  className="flex items-center text-purple-600 transition-transform group-hover:translate-x-1"
                  data-oid="b-9ofn5"
                >
                  Read more{" "}
                  <ArrowRight className="ml-1" data-oid="zy1cvr1" size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
