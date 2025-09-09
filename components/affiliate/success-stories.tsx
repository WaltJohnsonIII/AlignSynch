"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      image: "/avatars/wizard.webp",
      quote:
        "I've been promoting QuizHub  to my audience for 6 months now and the results have been incredible. The 30% commission is one of the best in the industry, and the recurring revenue has added a reliable income stream to my business.",
      earnings: "$2,450/month",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Education Blogger",
      image: "/avatars/sarah.webp",
      quote:
        "What I love about QuizHub 's affiliate program is how easy they make it to promote. The marketing materials are top-notch, and my audience loves the product. I'm earning more with QuizHub  than with any other affiliate program I've tried.",
      earnings: "$1,875/month",
      rating: 5,
    },
    {
      name: "Jessica Williams",
      role: "YouTube Educator",
      image: "/avatars/king.webp",
      quote:
        "As someone who creates educational content, QuizHub  was a natural fit for my audience. The affiliate dashboard makes it easy to track my performance, and the team is always responsive when I have questions. Highly recommended!",
      earnings: "$3,200/month",
      rating: 5,
    },
  ];

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };

  return (
    <section
      className="bg-white py-10 xl:py-16 dark:bg-slate-900"
      data-oid="hm9q7j9"
    >
      <div className="container mx-auto px-4" data-oid="ia3v507">
        <div className="mx-auto mb-12 max-w-3xl text-center" data-oid="xyj5yi9">
          <h2 className="mb-4 font-bold text-3xl" data-oid="rl_jxz9">
            Success Stories
          </h2>
          <p className="text-slate-600 dark:text-slate-400" data-oid="4s6q5kp">
            Hear from our top-performing affiliates who are earning consistent
            income by promoting QuizHub .
          </p>
        </div>

        <div className="mx-auto max-w-4xl" data-oid="qurgw49">
          <div
            className="relative rounded-xl bg-slate-50 p-8 shadow-sm dark:bg-slate-800"
            data-oid="l4orfb3"
          >
            <div
              className="flex flex-col items-center gap-8 md:flex-row"
              data-oid="5mhgt5_"
            >
              <div
                className="flex w-full justify-center md:w-1/3"
                data-oid="hn1cz3j"
              >
                <div className="relative h-32 w-32" data-oid="i:rq9au">
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/40"
                    data-oid="m8pjpp0"
                  />

                  <Image
                    alt={stories[currentIndex].name}
                    className="rounded-full border-4 border-white object-cover dark:border-slate-700"
                    data-oid="pg2yihc"
                    height={128}
                    onError={(e) => {
                      // Fallback to a default avatar if image fails to load
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                    src={stories[currentIndex].image || "/placeholder.svg"}
                    width={128}
                  />
                </div>
              </div>
              <div
                className="w-full text-center md:w-2/3 md:text-left"
                data-oid="032mh7v"
              >
                <div
                  className="mb-2 flex justify-center md:justify-start"
                  data-oid="w_l3il9"
                >
                  {[...Array(stories[currentIndex].rating)].map((_, i) => (
                    <Star
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      data-oid="n:pxe1x"
                      key={i}
                    />
                  ))}
                </div>
                <blockquote
                  className="mb-4 text-slate-700 italic dark:text-slate-300"
                  data-oid="14lavom"
                >
                  "{stories[currentIndex].quote}"
                </blockquote>
                <div className="font-medium text-lg" data-oid="lc-:r5q">
                  {stories[currentIndex].name}
                </div>
                <div
                  className="mb-2 text-slate-600 text-sm dark:text-slate-400"
                  data-oid="vxbqu8r"
                >
                  {stories[currentIndex].role}
                </div>
                <div
                  className="inline-block rounded-full bg-green-100 px-3 py-1 font-medium text-green-800 text-sm dark:bg-green-900 dark:text-green-100"
                  data-oid="pqg_s67"
                >
                  Earning {stories[currentIndex].earnings}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-2" data-oid="lpxgc.2">
              {stories.map((_, index) => (
                <button
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full ${index === currentIndex ? "bg-primary" : "bg-slate-300 dark:bg-slate-600"}`}
                  data-oid="z5w0to_"
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <button
              aria-label="Previous testimonial"
              className="-translate-y-1/2 absolute top-1/2 left-4 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-slate-50 dark:bg-slate-700 dark:hover:bg-slate-600"
              data-oid="yv6p0:v"
              onClick={prevStory}
            >
              <ChevronLeft className="h-5 w-5" data-oid="kj_573c" />
            </button>
            <button
              aria-label="Next testimonial"
              className="-translate-y-1/2 absolute top-1/2 right-4 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-slate-50 dark:bg-slate-700 dark:hover:bg-slate-600"
              data-oid="9-m4dqx"
              onClick={nextStory}
            >
              <ChevronRight className="h-5 w-5" data-oid="t4n8nyl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
