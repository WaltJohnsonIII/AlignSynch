"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  role: string;
  rating: number;
  text: string;
  tournament: string;
};

export function TournamentTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/avatars/alex.png",
      role: "History Enthusiast",
      rating: 5,
      text: "The World History Tournament was incredibly well-organized! The questions were challenging but fair, and the live competition format kept me on the edge of my seat. I learned so much while having fun.",
      tournament: "World History Championship",
    },
    {
      id: 2,
      name: "Sarah Williams",
      avatar: "/avatars/sarah.webp",
      role: "Science Teacher",
      rating: 5,
      text: "As a science teacher, I was impressed by the depth and accuracy of questions in the Science Spectacular tournament. My students and I participated together, and it became a wonderful learning experience for all of us.",
      tournament: "Science Spectacular",
    },
    {
      id: 3,
      name: "Michael Chen",
      avatar: "/avatars/wizard.webp",
      role: "Quiz Champion",
      rating: 4,
      text: "I've participated in dozens of online quiz competitions, and this platform offers the best tournament experience by far. The real-time scoring and global competition make every round exciting!",
      tournament: "General Knowledge Masters",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      avatar: "/avatars/guru.png",
      role: "Literature Lover",
      rating: 5,
      text: "The Classic Literature tournament exceeded my expectations. The questions were thoughtfully crafted and covered a wide range of works. I connected with other book lovers and even won some amazing prizes!",
      tournament: "Classic Literature Challenge",
    },
    {
      id: 5,
      name: "David Kim",
      avatar: "/avatars/king.webp",
      role: "Math Enthusiast",
      rating: 4,
      text: "The Math & Logic tournament was both challenging and rewarding. The timed rounds really tested my problem-solving abilities under pressure. The community is supportive and the prizes were great!",
      tournament: "Math & Logic Masters",
    },
    {
      id: 6,
      name: "Jessica Taylor",
      avatar: "/testimonials/jessica.png",
      role: "Trivia Buff",
      rating: 5,
      text: "I love how the tournaments are structured with qualifying rounds and finals. It gives everyone a fair chance while still rewarding skill and knowledge. The Pop Culture tournament was my favorite so far!",
      tournament: "Pop Culture Showdown",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section className="mt-8 py-16" data-oid="-8_7e.r">
      <div className="mb-12 text-center" data-oid="6r_0uc4">
        <h2 className="mb-4 font-bold text-3xl" data-oid="l56741y">
          What Tournament Players Say
        </h2>
        <p
          className="mx-auto max-w-2xl text-muted-foreground"
          data-oid="03o4hr0"
        >
          Hear from our community of quiz enthusiasts who have participated in
          our tournaments
        </p>
      </div>

      <div
        className="relative mx-auto max-w-4xl px-4"
        data-oid="tmhfrb-"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <button
          aria-label="Previous testimonial"
          className="-translate-y-1/2 absolute top-1/2 left-0 z-10 rounded-full border border-border bg-background/80 p-2 shadow-md backdrop-blur-sm transition-colors hover:bg-muted"
          data-oid="x.hj_9g"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-6 w-6" data-oid=":g:5ru6" />
        </button>

        <div className="overflow-hidden" data-oid="mp:rr4v">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            data-oid="f9:_7ta"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                className="w-full flex-shrink-0 px-4"
                data-oid="_ukcnag"
                key={testimonial.id}
              >
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-border bg-card p-8 shadow-lg"
                  data-oid="z4dpzgz"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6 flex items-center" data-oid="0cy5c-g">
                    <div className="mr-4" data-oid="1l:bn50">
                      <Image
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full border-2 border-primary object-cover"
                        data-oid="uk3y8dj"
                        height={48}
                        src={testimonial.avatar || "/placeholder.svg"}
                        width={48}
                      />
                    </div>
                    <div data-oid="f2qg7pl">
                      <h3 className="font-bold text-lg" data-oid="acj.ig1">
                        {testimonial.name}
                      </h3>
                      <p
                        className="text-muted-foreground text-sm"
                        data-oid="g:2wnkh"
                      >
                        {testimonial.role}
                      </p>
                      <div className="mt-1 flex" data-oid="j:8t666">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                            data-oid="1d5qk3t"
                            key={i}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <blockquote className="relative" data-oid="_6rh36b">
                    <span
                      className="absolute top-0 left-0 text-6xl text-primary/20"
                      data-oid="2qjs-.u"
                    >
                      "
                    </span>
                    <p
                      className="pt-2 pl-6 text-muted-foreground italic"
                      data-oid="lxs-plg"
                    >
                      {testimonial.text}
                    </p>
                  </blockquote>

                  <div
                    className="mt-6 border-border border-t pt-4"
                    data-oid="6m_816h"
                  >
                    <p className="font-medium text-sm" data-oid="-q04t:b">
                      Tournament:{" "}
                      <span className="text-primary" data-oid="0t9a5l6">
                        {testimonial.tournament}
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Next testimonial"
          className="-translate-y-1/2 absolute top-1/2 right-0 z-10 rounded-full border border-border bg-background/80 p-2 shadow-md backdrop-blur-sm transition-colors hover:bg-muted"
          data-oid="77044iu"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" data-oid="tzoie48" />
        </button>

        {/* Dots navigation */}
        <div className="mt-6 flex justify-center space-x-2" data-oid="i:k1qn_">
          {testimonials.map((_, index) => (
            <button
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted hover:bg-primary/50"}`}
              data-oid="xuf.ehb"
              key={index}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center" data-oid="bos1xha">
        <p className="mb-4 font-medium text-lg" data-oid="1nf6-gy">
          Join over 50,000 quiz enthusiasts in our tournaments
        </p>
        <button
          className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
          data-oid="11fd232"
        >
          View Upcoming Tournaments
        </button>
      </div>
    </section>
  );
}
