"use client";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import avatarAlex from "@/public/avatars/alex.png";
import avatarBrain from "@/public/avatars/brain.png";
import avatarChampion from "@/public/avatars/champion.png";
import avatarGenius from "@/public/avatars/genious.png";
import avatarSarah from "@/public/avatars/sarah.webp";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Quiz Creator",
    avatar: avatarSarah,
    rating: 5,
    testimonial:
      "I've created over 50 quizzes and earned more than $2,000 in just three months. The platform makes it incredibly easy to monetize my knowledge!",
    stats: { earnings: "$2,000+", quizzes: 50, followers: "1.2k" },
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Top Earner",
    avatar: avatarAlex,
    rating: 5,
    testimonial:
      "Quitting my part-time job was the best decision ever. I now make double creating fun quizzes about topics I'm passionate about. The community is amazing!",
    stats: { earnings: "$3,500+", quizzes: 78, followers: "3.4k" },
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Teacher",
    avatar: avatarBrain,
    rating: 4,
    testimonial:
      "As an educator, I use this platform to create supplementary quizzes for my students. They love the interactive format, and I earn extra income. Win-win!",
    stats: { earnings: "$1,200+", quizzes: 35, followers: "850" },
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Content Creator",
    avatar: avatarGenius,
    rating: 5,
    testimonial:
      "I've integrated these quizzes into my content strategy and seen engagement skyrocket. The analytics help me understand what my audience loves.",
    stats: { earnings: "$2,800+", quizzes: 42, followers: "2.7k" },
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Trivia Enthusiast",
    avatar: avatarChampion,
    rating: 5,
    testimonial:
      "From quiz player to creator, this platform changed my hobby into a profitable side hustle. The referral program helped me build a solid player base quickly.",
    stats: { earnings: "$1,800+", quizzes: 28, followers: "1.5k" },
  },
];

export function PlayerTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  // Generate star rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          data-oid="pjno4xi"
          key={i}
        />
      ));
  };

  return (
    <section
      className="bg-indigo-50 py-10 xl:py-16 dark:bg-slate-900"
      data-oid="zieztnx"
    >
      <div className="container mx-auto px-4" data-oid="f:yijt-">
        <div className="mb-12 text-center" data-oid="iay:7d4">
          <h2
            className="mb-4 font-bold text-3xl text-slate-800 dark:text-slate-200"
            data-oid=":j3cpsu"
          >
            Success Stories
          </h2>
          <p
            className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400"
            data-oid="__a6d21"
          >
            Hear from our community of quiz creators and players who are earning
            rewards and building their audience
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl" data-oid="kekc:_y">
          {/* Desktop view - side by side */}
          <div className="hidden grid-cols-12 gap-6 md:grid" data-oid="75dfbly">
            <div
              className="col-span-5 flex items-center justify-center"
              data-oid="4b_mkqc"
            >
              <div className="relative" data-oid="8zycwvd">
                <div className="-top-6 -left-6 absolute" data-oid="1b6r5xd">
                  <Quote
                    className="h-12 w-12 rotate-180 text-indigo-200 dark:text-indigo-800"
                    data-oid="mld944:"
                  />
                </div>
                <Avatar
                  className="h-64 w-64 border-4 border-white shadow-lg dark:border-slate-800"
                  data-oid="jwg5b3c"
                >
                  <Image
                    alt={testimonials[activeIndex].name}
                    className="object-cover object-center"
                    data-oid="_5uur:j"
                    height={400}
                    src={testimonials[activeIndex].avatar}
                    width={400}
                  />
                </Avatar>
                <Badge
                  className="absolute right-4 bottom-4 bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-700"
                  data-oid="fl7ec49"
                >
                  {testimonials[activeIndex].role}
                </Badge>
              </div>
            </div>

            <div
              className="col-span-7 flex flex-col justify-center"
              data-oid="s:46j37"
            >
              <div className="mb-3 flex" data-oid="gjvzscd">
                {renderStars(testimonials[activeIndex].rating)}
              </div>

              <blockquote
                className="mb-6 font-medium text-slate-800 text-xl italic dark:text-slate-200"
                data-oid="jf-f2ml"
              >
                "{testimonials[activeIndex].testimonial}"
              </blockquote>

              <div className="mb-6" data-oid="zt_1csq">
                <h3 className="font-semibold text-lg" data-oid="ekta64j">
                  {testimonials[activeIndex].name}
                </h3>
                <p
                  className="text-slate-600 dark:text-slate-400"
                  data-oid="wa-erqz"
                >
                  {testimonials[activeIndex].role}
                </p>
              </div>

              <div className="flex flex-wrap gap-6" data-oid="a4lvplq">
                <div className="text-center" data-oid="9ax.pmm">
                  <p
                    className="font-bold text-2xl text-indigo-600 dark:text-indigo-400"
                    data-oid=".j4ua8."
                  >
                    {testimonials[activeIndex].stats.earnings}
                  </p>
                  <p
                    className="text-slate-600 text-sm dark:text-slate-400"
                    data-oid="nzzv6e3"
                  >
                    Earnings
                  </p>
                </div>
                <div className="text-center" data-oid="j.4kdk0">
                  <p
                    className="font-bold text-2xl text-indigo-600 dark:text-indigo-400"
                    data-oid="_4ke7sc"
                  >
                    {testimonials[activeIndex].stats.quizzes}
                  </p>
                  <p
                    className="text-slate-600 text-sm dark:text-slate-400"
                    data-oid="hxbkh:v"
                  >
                    Quizzes
                  </p>
                </div>
                <div className="text-center" data-oid="8ti-1qq">
                  <p
                    className="font-bold text-2xl text-indigo-600 dark:text-indigo-400"
                    data-oid="reg3cjb"
                  >
                    {testimonials[activeIndex].stats.followers}
                  </p>
                  <p
                    className="text-slate-600 text-sm dark:text-slate-400"
                    data-oid="0j_5sv9"
                  >
                    Followers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile view - card based */}
          <div className="md:hidden" data-oid="o_pi7bq">
            <Card
              className="overflow-hidden border-2 border-indigo-100 dark:border-indigo-900/30"
              data-oid="ogrobxe"
            >
              <CardContent className="p-6" data-oid="u2wyej2">
                <div className="mb-6 flex justify-center" data-oid="5kc36bm">
                  <Avatar
                    className="h-24 w-24 border-4 border-white shadow-md dark:border-slate-800"
                    data-oid="444z_q-"
                  >
                    <Image
                      alt={testimonials[activeIndex].name}
                      data-oid=":fhlflq"
                      src={
                        testimonials[activeIndex].avatar ||
                        `/placeholder.svg?height=96&width=96&query=person ${testimonials[activeIndex].name}`
                      }
                    />

                    <AvatarFallback data-oid=".hgr40-">
                      {testimonials[activeIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="mb-4 text-center" data-oid="c60y_-_">
                  <h3 className="font-semibold" data-oid="o.v1ue2">
                    {testimonials[activeIndex].name}
                  </h3>
                  <Badge
                    className="mt-1"
                    data-oid="nksaio5"
                    variant="secondary"
                  >
                    {testimonials[activeIndex].role}
                  </Badge>
                </div>

                <div className="mb-4 flex justify-center" data-oid="r97_2y7">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>

                <blockquote
                  className="mb-6 text-center text-slate-700 italic dark:text-slate-300"
                  data-oid="ai0q:43"
                >
                  "{testimonials[activeIndex].testimonial}"
                </blockquote>

                <div
                  className="grid grid-cols-3 gap-2 text-center"
                  data-oid="fc1x9c2"
                >
                  <div
                    className="rounded-md bg-slate-50 p-2 dark:bg-slate-800"
                    data-oid="8sug012"
                  >
                    <p
                      className="font-bold text-indigo-600 text-lg dark:text-indigo-400"
                      data-oid="6lo5d0-"
                    >
                      {testimonials[activeIndex].stats.earnings}
                    </p>
                    <p
                      className="text-slate-600 text-xs dark:text-slate-400"
                      data-oid="jg.5_p9"
                    >
                      Earnings
                    </p>
                  </div>
                  <div
                    className="rounded-md bg-slate-50 p-2 dark:bg-slate-800"
                    data-oid="oi0ufjp"
                  >
                    <p
                      className="font-bold text-indigo-600 text-lg dark:text-indigo-400"
                      data-oid="0q5r9b4"
                    >
                      {testimonials[activeIndex].stats.quizzes}
                    </p>
                    <p
                      className="text-slate-600 text-xs dark:text-slate-400"
                      data-oid="q265z3p"
                    >
                      Quizzes
                    </p>
                  </div>
                  <div
                    className="rounded-md bg-slate-50 p-2 dark:bg-slate-800"
                    data-oid="o-ul4m1"
                  >
                    <p
                      className="font-bold text-indigo-600 text-lg dark:text-indigo-400"
                      data-oid="fwuqisu"
                    >
                      {testimonials[activeIndex].stats.followers}
                    </p>
                    <p
                      className="text-slate-600 text-xs dark:text-slate-400"
                      data-oid="g3hjy95"
                    >
                      Followers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation dots */}
          <div className="mt-8 flex justify-center gap-2" data-oid="1j_8yr.">
            {testimonials.map((_, index) => (
              <button
                aria-label={`View testimonial ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${index === activeIndex ? "bg-indigo-600 dark:bg-indigo-400" : "bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"}`}
                data-oid="zbl2u3e"
                key={index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div
            className="-translate-y-1/2 pointer-events-none absolute top-1/2 flex w-full justify-between"
            data-oid="d--vm55"
          >
            <Button
              className="pointer-events-auto h-10 w-10 rounded-full bg-white shadow-md dark:bg-slate-800"
              data-oid="iwkf1iy"
              onClick={handlePrev}
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="h-5 w-5" data-oid="p0y1sy2" />
            </Button>
            <Button
              className="pointer-events-auto h-10 w-10 rounded-full bg-white shadow-md dark:bg-slate-800"
              data-oid="8raqpry"
              onClick={handleNext}
              size="icon"
              variant="outline"
            >
              <ChevronRight className="h-5 w-5" data-oid="-7bkyak" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
