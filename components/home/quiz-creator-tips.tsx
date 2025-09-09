"use client";

import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Sample tips data
const quizTips = [
  {
    id: 1,
    title: "How to Create High-Converting Quizzes",
    excerpt:
      "Learn the psychology behind quizzes that engage users and drive conversions.",
    category: "Strategy",
    readTime: 5,
    icon: TrendingUp,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Top Quiz Formats That Boost Earnings",
    excerpt:
      "Discover the most profitable quiz formats and how to implement them effectively.",
    category: "Monetization",
    readTime: 7,
    icon: DollarSign,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Writing Questions That Keep Players Coming Back",
    excerpt:
      "Craft engaging questions that challenge players and encourage repeat participation.",
    category: "Content",
    readTime: 6,
    icon: BookOpen,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Quiz Design Best Practices",
    excerpt:
      "Visual design tips to make your quizzes stand out and improve completion rates.",
    category: "Design",
    readTime: 8,
    icon: Lightbulb,
    color: "bg-amber-500",
  },
  {
    id: 5,
    title: "Optimizing Quiz Length for Maximum Engagement",
    excerpt:
      "Find the sweet spot for quiz length to keep players engaged without dropping off.",
    category: "Optimization",
    readTime: 4,
    icon: Clock,
    color: "bg-indigo-500",
  },
];

export function QuizCreatorTips() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white py-16 dark:bg-slate-950" data-oid="tix5ye9">
      <div className="container mx-auto px-4" data-oid="s:9uoez">
        <div
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          data-oid="ff02_b1"
        >
          <div className="space-y-1" data-oid="gtu21u1">
            <h2
              className="font-bold text-3xl tracking-tight"
              data-oid=":eer-7e"
            >
              Quiz Creator Resources
            </h2>
            <p className="text-muted-foreground" data-oid="ur-pmx9">
              Expert tips and strategies to create successful quizzes
            </p>
          </div>

          <div className="flex items-center gap-2" data-oid="9xgflny">
            <Button
              data-oid="5l66r_2"
              onClick={() =>
                carouselRef.current?.scrollBy({
                  left: -300,
                  behavior: "smooth",
                })
              }
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="h-4 w-4" data-oid="4s50-vx" />
            </Button>
            <Button
              data-oid="yp3lchp"
              onClick={() =>
                carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" })
              }
              size="icon"
              variant="outline"
            >
              <ChevronRight className="h-4 w-4" data-oid="a13n04u" />
            </Button>
          </div>
        </div>

        <Carousel className="w-full" data-oid="bt9n_t-">
          <CarouselContent
            className="-ml-2 md:-ml-4"
            data-oid="n6lowgp"
            ref={carouselRef}
          >
            {quizTips.map((tip) => (
              <CarouselItem
                className="pl-2 sm:basis-1/2 md:basis-1/3 md:pl-4 lg:basis-1/4"
                data-oid="zv69nw9"
                key={tip.id}
              >
                <Card className="flex h-full flex-col" data-oid="zl8n3w1">
                  <CardContent className="flex-1 p-6" data-oid="0piftrq">
                    <div className="mb-4" data-oid="08y1ckv">
                      <div
                        className={`inline-flex items-center justify-center rounded-lg p-2 ${tip.color}`}
                        data-oid="kc8c72d"
                      >
                        <tip.icon
                          className="h-5 w-5 text-white"
                          data-oid="blmumoo"
                        />
                      </div>
                    </div>
                    <Badge
                      className="mb-2"
                      data-oid="4wy:gw9"
                      variant="outline"
                    >
                      {tip.category}
                    </Badge>
                    <h3
                      className="mb-2 line-clamp-2 font-semibold text-xl"
                      data-oid="oml3kko"
                    >
                      {tip.title}
                    </h3>
                    <p
                      className="line-clamp-3 text-muted-foreground"
                      data-oid="syn584k"
                    >
                      {tip.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="border-t p-6 pt-4" data-oid="j9qb.ay">
                    <div
                      className="flex w-full items-center justify-between"
                      data-oid="zix7.bb"
                    >
                      <div
                        className="flex items-center text-muted-foreground text-sm"
                        data-oid="--e60e3"
                      >
                        <Clock className="mr-1 h-4 w-4" data-oid="72.r43d" />
                        <span data-oid="a5y:rl2">{tip.readTime} min read</span>
                      </div>
                      <Button
                        className="gap-1"
                        data-oid="m9qvtnn"
                        size="sm"
                        variant="ghost"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" data-oid="cjdlb59" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 text-center" data-oid="i5se9qx">
          <Button data-oid="53xwrza" size="lg" variant="outline">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
