"use client";
import { Calendar, ChevronRight, Clock, Filter, Search } from "lucide-react";
import Image from "next/image";
import { SmartImage } from "@/components/ui/smart-image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, newsData } from "@/data/news-data";

export function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const featuredArticles = newsData
    .filter((article) => article.featured)
    .slice(0, 3);

  const filteredArticles = newsData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || article.categories.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto" data-oid="qbswi2d">
      <div
        className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between"
        data-oid="yr5mg49"
      >
        <div data-oid="ja13.2z">
          <h1
            className="font-bold text-2xl tracking-tight md:text-3xl"
            data-oid="--xhgnk"
          >
            Quiz News & Updates
          </h1>
          <p className="mt-1 text-muted-foreground" data-oid="th:v3ib">
            Stay updated with the latest quiz trends, updates, and community
            news
          </p>
        </div>
        <div className="flex items-center space-x-2" data-oid="wfae.ai">
          <div className="relative" data-oid="8qzh15.">
            <Search
              className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground"
              data-oid="l8_s6uw"
            />

            <Input
              className="w-full pl-8 md:w-[260px]"
              data-oid="y5vipou"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              type="search"
              value={searchQuery}
            />
          </div>
          <Button data-oid="1hz1am9" size="icon" variant="outline">
            <Filter className="h-4 w-4" data-oid="9sx7h4m" />
          </Button>
        </div>
      </div>

      {/* Featured Articles */}
      {searchQuery === "" && activeCategory === "all" && (
        <div className="mb-12" data-oid="i2z8tg7">
          <h2 className="mb-6 font-bold text-2xl" data-oid="5ok027w">
            Featured Articles
          </h2>
          <div
            className="grid grid-cols-1 xxl:grid-cols-4 gap-6 md:grid-cols-2 lg:grid-cols-3"
            data-oid=":gp_9yc"
          >
            {featuredArticles.map((article) => (
              <Card
                className="overflow-hidden"
                data-oid="7bp2hxd"
                key={article.slug}
              >
                <div
                  className="relative h-44 w-full xl:h-60"
                  data-oid="dxvteww"
                >
                  <SmartImage
                    alt={article.title}
                    className="aspect-video object-cover"
                    data-oid="4ew224n"
                    fill
                    src={article.coverImage || undefined}
                    width={800}
                    height={240}
                  />

                  <div className="absolute top-2 right-2" data-oid="j8p:4c7">
                    <Badge
                      className="bg-primary text-primary-foreground"
                      data-oid="n2_hyea"
                      variant="secondary"
                    >
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-4" data-oid="a:t.zuz">
                  <div
                    className="mb-2 flex items-center space-x-4 text-muted-foreground text-sm"
                    data-oid="wbnfd4g"
                  >
                    <div className="flex items-center" data-oid="d945fl2">
                      <Calendar className="mr-1 h-3 w-3" data-oid="k6u6:r-" />
                      <span data-oid="apztv_3">{article.date}</span>
                    </div>
                    <div className="flex items-center" data-oid="ggtpq8m">
                      <Clock className="mr-1 h-3 w-3" data-oid="egthnfq" />
                      <span data-oid="w3wdqgz">
                        {article.readTime} min read
                      </span>
                    </div>
                  </div>
                  <Link
                    className="hover:underline"
                    data-oid="rzdqib4"
                    href={`/news/${article.slug}`}
                  >
                    <h3
                      className="line-clamp-2 font-bold text-xl"
                      data-oid="t6c3i7v"
                    >
                      {article.title}
                    </h3>
                  </Link>
                </CardHeader>
                <CardContent className="!pt-0 p-4" data-oid="8rhhjyb">
                  <p className="text-muted-foreground" data-oid="_alohnk">
                    {article.excerpt}
                  </p>
                </CardContent>
                <CardFooter
                  className="!pt-0 flex justify-between p-4"
                  data-oid="k7wdxbn"
                >
                  <div className="flex flex-wrap gap-2" data-oid="atrdu0i">
                    {article.categories.slice(0, 2).map((category) => (
                      <Badge
                        className="text-xs"
                        data-oid="sec:0pi"
                        key={category}
                        variant="outline"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    className="flex items-center font-medium text-primary text-sm"
                    data-oid="joppyip"
                    href={`/news/${article.slug}`}
                  >
                    Read more{" "}
                    <ChevronRight className="ml-1 h-3 w-3" data-oid="5:vy6u-" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Categories and Articles */}
      <Tabs
        className="mb-8"
        data-oid="g8lzk7j"
        defaultValue="all"
        onValueChange={setActiveCategory}
        value={activeCategory}
      >
        <div className="border-b" data-oid="j9oklw:">
          <TabsList
            className="w-full justify-start overflow-x-auto"
            data-oid="1bt:ao:"
          >
            <TabsTrigger data-oid="_s39j05" value="all">
              All
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger data-oid="fx4nu8u" key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent className="mt-6" data-oid="epbhhwk" value={activeCategory}>
          <div
            className="grid grid-cols-1 xxl:grid-cols-4 gap-6 md:grid-cols-2 lg:grid-cols-3"
            data-oid="s1.ww3w"
          >
            {filteredArticles.map((article) => (
              <Card data-oid="2qw.xve" key={article.slug}>
                <div
                  className="relative h-44 w-full xl:h-60"
                  data-oid="zsdcpe-"
                >
                  <SmartImage
                    alt={article.title}
                    className="object-cover"
                    data-oid="_zdqd18"
                    fill
                    src={article.coverImage || undefined}
                    width={800}
                    height={240}
                  />
                </div>
                <CardHeader className="p-4" data-oid="ctomgop">
                  <div
                    className="mb-2 flex items-center space-x-4 text-muted-foreground text-sm"
                    data-oid="3:_hrqp"
                  >
                    <div className="flex items-center" data-oid="tl-iu0u">
                      <Calendar className="mr-1 h-3 w-3" data-oid="3op3w8a" />
                      <span data-oid="-vzcdx5">{article.date}</span>
                    </div>
                    <div className="flex items-center" data-oid="7:q:-yq">
                      <Clock className="mr-1 h-3 w-3" data-oid="1qrf-yt" />
                      <span data-oid="m4hfbc7">
                        {article.readTime} min read
                      </span>
                    </div>
                  </div>
                  <Link
                    className="hover:underline"
                    data-oid="n5xmya5"
                    href={`/news/${article.slug}`}
                  >
                    <h3
                      className="line-clamp-2 font-bold text-lg"
                      data-oid="vfweel."
                    >
                      {article.title}
                    </h3>
                  </Link>
                </CardHeader>
                <CardContent className="p-4 pt-0" data-oid="x65p-g2">
                  <p
                    className="line-clamp-2 text-muted-foreground text-sm"
                    data-oid="hx9kpo3"
                  >
                    {article.excerpt}
                  </p>
                </CardContent>
                <CardFooter
                  className="flex justify-between p-4 pt-0"
                  data-oid="jrodzep"
                >
                  <div className="flex flex-wrap gap-2" data-oid="fclfn:t">
                    {article.categories.slice(0, 2).map((category) => (
                      <Badge
                        className="text-xs"
                        data-oid="rhqtpgw"
                        key={category}
                        variant="outline"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    className="flex items-center font-medium text-primary text-sm"
                    data-oid="snkb43v"
                    href={`/news/${article.slug}`}
                  >
                    Read more{" "}
                    <ChevronRight className="ml-1 h-3 w-3" data-oid="iv_jjg4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-12 text-center" data-oid="-q6g.11">
              <h3 className="mb-2 font-medium text-xl" data-oid="u_ov224">
                No articles found
              </h3>
              <p className="text-muted-foreground" data-oid="n:dr5fh">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      {filteredArticles.length > 0 && (
        <div className="mt-8 flex justify-center" data-oid="7m9nmqq">
          <Pagination data-oid="--qg2_0" />
        </div>
      )}
    </div>
  );
}
