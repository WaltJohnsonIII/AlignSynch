"use client";
import {
  Bookmark,
  Calendar,
  ChevronLeft,
  Clock,
  Copy,
  Facebook,
  Linkedin,
  MessageSquare,
  Share2,
  ThumbsUp,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SmartImage } from "@/components/ui/smart-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { type Article, newsData } from "@/data/news-data";

export function NewsArticle({ slug }: { slug: string }) {
  const router = useRouter();
  const [article, setArticle] = useState<Article>();
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [comment, setComment] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const currentArticle = newsData.find((a) => a.slug === slug);
    if (!currentArticle) {
      router.push("/news");
      return;
    }

    setArticle(currentArticle);

    // Find related articles based on categories
    if (currentArticle) {
      const related = newsData
        .filter(
          (a) =>
            a.slug !== slug &&
            a.categories.some((cat) => currentArticle.categories.includes(cat))
        )
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [slug, router]);

  if (!article) {
    return (
      <div
        className="container mx-auto px-4 py-12 text-center md:px-6"
        data-oid="j-zw1s4"
      >
        <p data-oid="5cn:3fv">Loading article...</p>
      </div>
    );
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the comment to an API
    toast.success("Comment submitted successfully!");
    setComment("");
  };

  return (
    <div className="container mx-auto" data-oid="pc31lo5">
      <div className="mb-8" data-oid="02kzuoj">
        <Button
          className="mb-4"
          data-oid="5:7unng"
          onClick={() => router.push("/news")}
          size="sm"
          variant="ghost"
        >
          <ChevronLeft className="mr-2 h-4 w-4" data-oid="tg25htr" /> Back to
          News
        </Button>

        <div className="mb-4 flex flex-wrap gap-2" data-oid="8c0rnkw">
          {article.categories.map((category: string) => (
            <Badge data-oid="qitr_2f" key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>

        <h2
          className="mb-4 font-bold text-2xl tracking-tight md:text-3xl xl:text-4xl"
          data-oid="gqzm:m9"
        >
          {article.title}
        </h2>

        <div
          className="mb-6 flex flex-wrap items-center justify-between gap-4"
          data-oid="i66zx3-"
        >
          <div className="flex items-center space-x-4" data-oid="jy4z-.f">
            <Avatar data-oid="9a645ft">
              <AvatarImage
                alt={article.author.name}
                data-oid="--bqplu"
                src={article.author.avatar || undefined}
              />
              <AvatarFallback data-oid="53j-w0c" name={article.author.name}>
                {article.author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div data-oid="z-jv0_5">
              <p className="font-medium" data-oid="vd8f-og">
                {article.author.name}
              </p>
              <div
                className="flex items-center space-x-4 text-muted-foreground text-sm"
                data-oid="xdzcd11"
              >
                <div className="flex items-center" data-oid="w3c72m-">
                  <Calendar className="mr-1 h-3 w-3" data-oid="fcshb-p" />
                  <span data-oid="3ji:tyf">{article.date}</span>
                </div>
                <div className="flex items-center" data-oid="hlbp1n4">
                  <Clock className="mr-1 h-3 w-3" data-oid="-2ryye5" />
                  <span data-oid="xcrt2as">{article.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2" data-oid="1tmnp0:">
            <Popover data-oid=":9vkoes">
              <PopoverTrigger asChild data-oid="0o4in39">
                <Button data-oid="b1zpu2k" size="sm" variant="outline">
                  <Share2 className="mr-2 h-4 w-4" data-oid="q47yd4t" /> Share
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2" data-oid="gk:dglk">
                <div className="flex items-center space-x-2" data-oid="49q7b0b">
                  <Button
                    className="h-8 w-8 rounded-full"
                    data-oid="k-bt5y0"
                    size="icon"
                    variant="outline"
                  >
                    <Twitter className="h-4 w-4" data-oid="u6ney4_" />
                  </Button>
                  <Button
                    className="h-8 w-8 rounded-full"
                    data-oid="pt6f2xd"
                    size="icon"
                    variant="outline"
                  >
                    <Facebook className="h-4 w-4" data-oid="ambxjep" />
                  </Button>
                  <Button
                    className="h-8 w-8 rounded-full"
                    data-oid="z4pf4ht"
                    size="icon"
                    variant="outline"
                  >
                    <Linkedin className="h-4 w-4" data-oid="p_j1b7t" />
                  </Button>
                  <Button
                    className="h-8 w-8 rounded-full"
                    data-oid="mnw110p"
                    onClick={copyToClipboard}
                    size="icon"
                    variant="outline"
                  >
                    <Copy className="h-4 w-4" data-oid="299e_bk" />
                  </Button>
                </div>
                {copied && (
                  <p className="mt-2 text-center text-xs" data-oid="e9nrgxk">
                    Link copied!
                  </p>
                )}
              </PopoverContent>
            </Popover>
            <Button data-oid="1dgqsoe" size="sm" variant="outline">
              <Bookmark className="mr-2 h-4 w-4" data-oid="e8gu016" /> Save
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div
        className="relative mb-8 h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]"
        data-oid="bi0bxaw"
      >
        <SmartImage
          alt={article.title}
          className="object-cover"
          data-oid="bjkyp5u"
          fill
          src={article.coverImage || undefined}
          width={1200}
          height={400}
        />
      </div>

      {/* Article Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3" data-oid="3vgnavw">
        <div className="lg:col-span-2" data-oid="bgk_83a">
          <div className="prose max-w-none" data-oid="-2p1kx8">
            <p className="mb-4 font-medium text-lg" data-oid="fy:uqw0">
              {article.excerpt}
            </p>

            {article.content.map(
              (
                section: {
                  heading?: string;
                  paragraphs: string[];
                  image?: string;
                  imageAlt?: string;
                  imageCaption?: string;
                },
                index: number
              ) => (
                <div className="mb-6" data-oid="l.2rpr." key={index}>
                  {section.heading && (
                    <h2 className="mb-4 font-bold text-2xl" data-oid="gfb40-x">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map(
                    (paragraph: string, pIndex: number) => (
                      <p className="mb-4" data-oid="evhaost" key={pIndex}>
                        {paragraph}
                      </p>
                    )
                  )}
                  {section.image && (
                    <div
                      className="relative my-6 h-[250px] w-full overflow-hidden rounded-lg"
                      data-oid="oz78y91"
                    >
                      <SmartImage
                        alt={section.imageAlt || "Article image"}
                        className="object-cover"
                        data-oid="05bxecj"
                        fill
                        src={section.image || undefined}
                        width={800}
                        height={250}
                      />

                      {section.imageCaption && (
                        <p
                          className="mt-2 text-muted-foreground text-sm"
                          data-oid="7lpx:al"
                        >
                          {section.imageCaption}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          <Separator className="my-8" data-oid="kq0wcvv" />

          {/* Article Actions */}
          <div
            className="mb-8 flex flex-wrap items-center justify-between gap-3"
            data-oid="7re:fyg"
          >
            <div className="flex items-center space-x-4" data-oid="60lpj99">
              <Button data-oid="t:ywt9r" size="sm" variant="outline">
                <ThumbsUp className="mr-2 h-4 w-4" data-oid=":qjr4xh" /> Like
              </Button>
              <Button data-oid="9hzaf66" size="sm" variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" data-oid="_dvmg1s" />{" "}
                Comment
              </Button>
            </div>
            <div className="flex items-center space-x-2" data-oid="vh7glwb">
              <Popover data-oid="j.3ftpv">
                <PopoverTrigger asChild data-oid="e.9:_o_">
                  <Button data-oid="n:8w1lb" size="sm" variant="outline">
                    <Share2 className="mr-2 h-4 w-4" data-oid="wsb24:p" /> Share
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-2" data-oid="n:z46rp">
                  <div
                    className="flex items-center space-x-2"
                    data-oid="ug7s5h_"
                  >
                    <Button
                      className="h-8 w-8 rounded-full"
                      data-oid="qzyb895"
                      size="icon"
                      variant="outline"
                    >
                      <Twitter className="h-4 w-4" data-oid="c.-825s" />
                    </Button>
                    <Button
                      className="h-8 w-8 rounded-full"
                      data-oid="wst0n9n"
                      size="icon"
                      variant="outline"
                    >
                      <Facebook className="h-4 w-4" data-oid="6lg43gx" />
                    </Button>
                    <Button
                      className="h-8 w-8 rounded-full"
                      data-oid="ng5oxow"
                      size="icon"
                      variant="outline"
                    >
                      <Linkedin className="h-4 w-4" data-oid="5vt4zck" />
                    </Button>
                    <Button
                      className="h-8 w-8 rounded-full"
                      data-oid="hx:lkh:"
                      onClick={copyToClipboard}
                      size="icon"
                      variant="outline"
                    >
                      <Copy className="h-4 w-4" data-oid="m93fq5e" />
                    </Button>
                  </div>
                  {copied && (
                    <p className="mt-2 text-center text-xs" data-oid="j1o.4.v">
                      Link copied!
                    </p>
                  )}
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Comments Section */}
          <div data-oid="mzznbmu">
            <h3 className="mb-4 font-bold text-xl" data-oid=":gakd0d">
              Comments (12)
            </h3>

            <Tabs data-oid="wiwlc:q" defaultValue="newest">
              <TabsList className="mb-4" data-oid="gdbefri">
                <TabsTrigger data-oid=".k4ybna" value="newest">
                  Newest
                </TabsTrigger>
                <TabsTrigger data-oid="q2d7jb:" value="popular">
                  Popular
                </TabsTrigger>
              </TabsList>

              <TabsContent data-oid="v-4vg1c" value="newest">
                <form
                  className="mb-6"
                  data-oid="3r-7fmk"
                  onSubmit={handleCommentSubmit}
                >
                  <Textarea
                    className="mb-2"
                    data-oid="uhfo-x-"
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment..."
                    value={comment}
                  />

                  <Button
                    data-oid="qd-:28m"
                    disabled={!comment.trim()}
                    type="submit"
                  >
                    Post Comment
                  </Button>
                </form>

                <div className="space-y-6" data-oid="6:zf.q3">
                  {/* Sample comments */}
                  {[1, 2, 3].map((i) => (
                    <div className="flex space-x-4" data-oid="i11t1fk" key={i}>
                      <Avatar data-oid="fymqsg2">
                        <AvatarImage
                          alt="User"
                          data-oid="5oq9u06"
                          src={`/abstract-geometric-shapes.png?height=40&width=40&query=user${i}`}
                        />

                        <AvatarFallback data-oid="f1ifwvd">U{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1" data-oid="eg68v_-">
                        <div
                          className="mb-1 flex items-center justify-between"
                          data-oid=":c6npq3"
                        >
                          <h4 className="font-medium" data-oid="nbgr4-x">
                            User Name {i}
                          </h4>
                          <span
                            className="text-muted-foreground text-xs"
                            data-oid="-mpl5j2"
                          >
                            2 days ago
                          </span>
                        </div>
                        <p className="mb-2 text-sm" data-oid="h_ijrub">
                          This is a great article! I learned a lot about quiz
                          creation strategies.
                        </p>
                        <div
                          className="flex items-center space-x-4 text-sm"
                          data-oid="m_xz82:"
                        >
                          <button
                            className="flex items-center text-muted-foreground hover:text-foreground"
                            data-oid="b98gqd6"
                          >
                            <ThumbsUp
                              className="mr-1 h-3 w-3"
                              data-oid="6cw4h6g"
                            />{" "}
                            5
                          </button>
                          <button
                            className="text-muted-foreground hover:text-foreground"
                            data-oid="u3edg:m"
                          >
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent data-oid="7s78u22" value="popular">
                <p className="text-muted-foreground" data-oid="0_k__sa">
                  Showing most popular comments first.
                </p>
                <div className="mt-4 space-y-6" data-oid="i_:irj0">
                  {/* Sample popular comments */}
                  {[3, 1, 2].map((i) => (
                    <div className="flex space-x-4" data-oid="vek_l3c" key={i}>
                      <Avatar data-oid="c46ro08">
                        <AvatarImage
                          alt="User"
                          data-oid="ytflky4"
                          src={`/abstract-geometric-shapes.png?height=40&width=40&query=user${i}`}
                        />

                        <AvatarFallback data-oid=".8:h0t2">U{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1" data-oid="v7o7qsh">
                        <div
                          className="mb-1 flex items-center justify-between"
                          data-oid="cr3drjw"
                        >
                          <h4 className="font-medium" data-oid="f4a0ld5">
                            Popular User {i}
                          </h4>
                          <span
                            className="text-muted-foreground text-xs"
                            data-oid="qupqzxg"
                          >
                            3 days ago
                          </span>
                        </div>
                        <p className="mb-2 text-sm" data-oid="2affn9:">
                          I've been using these strategies and my quiz
                          engagement has increased by 45%!
                        </p>
                        <div
                          className="flex items-center space-x-4 text-sm"
                          data-oid="7ex_fvd"
                        >
                          <button
                            className="flex items-center text-muted-foreground hover:text-foreground"
                            data-oid="lsxwgqe"
                          >
                            <ThumbsUp
                              className="mr-1 h-3 w-3"
                              data-oid="jp5p533"
                            />{" "}
                            {10 - i}
                          </button>
                          <button
                            className="text-muted-foreground hover:text-foreground"
                            data-oid="urte1y."
                          >
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar */}
        <div data-oid="dho001u">
          {/* Author Card */}
          <Card className="mb-6" data-oid="2_2dgnn">
            <CardHeader data-oid="aostxu8">
              <h3 className="font-bold text-lg" data-oid="wmrhwfj">
                About the Author
              </h3>
            </CardHeader>
            <CardContent data-oid="vjbolfk">
              <div
                className="mb-4 flex items-center space-x-4"
                data-oid="x_t4qe:"
              >
                <Avatar className="h-12 w-12" data-oid="z-6sxx5">
                  <AvatarImage
                    alt={article.author.name}
                    data-oid="j:2fy5r"
                    src={article.author.avatar || "/placeholder.svg"}
                  />

                  <AvatarFallback data-oid="guyzj0n">
                    {article.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div data-oid="2tjze9o">
                  <p className="font-medium" data-oid="z79bqeq">
                    {article.author.name}
                  </p>
                  <p
                    className="text-muted-foreground text-sm"
                    data-oid="82lsqo_"
                  >
                    {article.author.role}
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm" data-oid="d8:dc6u">
                {article.author.bio}
              </p>
              <Button
                className="w-full"
                data-oid=":emff.l"
                size="sm"
                variant="outline"
              >
                View Profile
              </Button>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <div className="mb-6" data-oid=".7xn0bj">
            <h3 className="mb-4 font-bold text-lg" data-oid="esx0rin">
              Related Articles
            </h3>
            <div className="space-y-4" data-oid="hdj9eue">
              {relatedArticles.map((related) => (
                <Card data-oid="q3mvu0v" key={related.slug}>
                  <div className="flex" data-oid="wwhxcsk">
                    <div className="relative h-24 w-24" data-oid=".cjefi0">
                      <SmartImage
                        alt={related.title}
                        className="object-cover"
                        data-oid="phqj__s"
                        fill
                        src={related.coverImage || undefined}
                        width={96}
                        height={96}
                      />
                    </div>
                    <div className="flex-1 p-3" data-oid="okpc6jv">
                      <Link
                        className="hover:underline"
                        data-oid=".5bx3y0"
                        href={`/news/${related.slug}`}
                      >
                        <h4
                          className="line-clamp-2 font-medium"
                          data-oid="2g:-ftc"
                        >
                          {related.title}
                        </h4>
                      </Link>
                      <div
                        className="mt-2 flex items-center space-x-2 text-muted-foreground text-xs"
                        data-oid="y.onodw"
                      >
                        <span data-oid="y2-perm">{related.date}</span>
                        <span data-oid="yqcx1in">•</span>
                        <span data-oid="q1rao56">
                          {related.readTime} min read
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card data-oid="zikp9s7">
            <CardHeader data-oid="b0zc2k2">
              <h3 className="font-bold text-lg" data-oid="hop4p4v">
                Subscribe to Our Newsletter
              </h3>
            </CardHeader>
            <CardContent data-oid="4xn006j">
              <p
                className="mb-4 text-muted-foreground text-sm"
                data-oid="daazt41"
              >
                Get the latest quiz news, tips, and updates delivered to your
                inbox.
              </p>
              <form className="space-y-2" data-oid="qd_vwax">
                <Input
                  data-oid="lgw761i"
                  placeholder="Your email address"
                  type="email"
                />

                <Button className="w-full" data-oid="3-hlhsa">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
