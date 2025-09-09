"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, Globe, Users } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function AboutQuizHub() {
  const stats = [
    {
      icon: (
        <Users
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          data-oid="in_tolq"
        />
      ),

      value: "2M+",
      label: "Active Users",
    },
    {
      icon: (
        <Award
          className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
          data-oid="bwk68ml"
        />
      ),

      value: "10M+",
      label: "Quizzes Taken",
    },
    {
      icon: (
        <Globe
          className="h-5 w-5 text-blue-600 dark:text-blue-400"
          data-oid="bmo67e3"
        />
      ),

      value: "150+",
      label: "Countries",
    },
    {
      icon: (
        <BookOpen
          className="h-5 w-5 text-green-600 dark:text-green-400"
          data-oid="hvfv24."
        />
      ),

      value: "500K+",
      label: "Quizzes Created",
    },
  ];

  return (
    <section
      className="overflow-hidden bg-slate-50 py-10 sm:px-4 xl:px-8 xl:py-20 dark:bg-slate-800"
      data-oid="iwqakua"
    >
      <div className="container mx-auto px-4" data-oid="r:t::7a">
        <div className="mb-12 text-center" data-oid="_h65q_v">
          <motion.div
            data-oid="7b.jzqc"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2
              className="mb-4 font-bold text-3xl md:text-4xl"
              data-oid="fizobe_"
            >
              About QuizHub{" "}
            </h2>
            <div
              className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600"
              data-oid="1dkmavh"
            />
            <p
              className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400"
              data-oid="w_r973a"
            >
              The leading platform revolutionizing how people create, share, and
              experience quizzes worldwide
            </p>
          </motion.div>
        </div>

        <div
          className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
          data-oid="h9z6ukd"
        >
          {/* Left column - Image */}
          <motion.div
            className="relative"
            data-oid="px4g.db"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div
              className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-700"
              data-oid="cfrug01"
            >
              <Image
                alt="QuizMaker Platform"
                className="h-auto w-full"
                data-oid="j4s6b5a"
                height={400}
                src="/about-affiliate.png"
                width={600}
              />
            </div>
            {/* Decorative elements */}
            <div
              className="-translate-x-1/2 -translate-y-1/2 -z-10 absolute top-1/2 left-1/2 h-full max-h-[90%] w-full max-w-[90%] rounded-2xl border border-purple-200 dark:border-purple-900/30"
              data-oid="srndvse"
            />
            <div
              className="-translate-x-1/2 -translate-y-1/2 -z-20 absolute top-1/2 left-1/2 h-full max-h-[80%] w-full max-w-[80%] rounded-2xl border border-indigo-200 dark:border-indigo-900/30"
              data-oid="ttnz4l_"
            />
          </motion.div>

          {/* Right column - Text content */}
          <motion.div
            className="space-y-8"
            data-oid="hlqzj7y"
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div data-oid="12u7hwp">
              <h3 className="mb-4 font-bold text-2xl" data-oid="4.us7:5">
                Our Story
              </h3>
              <p
                className="mb-4 text-slate-600 dark:text-slate-400"
                data-oid=":wa8m0p"
              >
                Founded in 2018, QuizHub began with a simple mission: to
                transform learning into an engaging, interactive experience.
                What started as a small project has grown into a global platform
                used by educators, businesses, and quiz enthusiasts in over 150
                countries.
              </p>
              <p
                className="text-slate-600 dark:text-slate-400"
                data-oid="fwczlz."
              >
                Our platform combines cutting-edge technology with user-friendly
                design to make quiz creation and participation accessible to
                everyone. With AI-powered tools and a vibrant community, we're
                redefining how knowledge is shared and tested online.
              </p>
            </div>

            <div data-oid="so0pybc">
              <h3 className="mb-4 font-bold text-2xl" data-oid="_m6-k6c">
                Our Mission
              </h3>
              <div
                className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
                data-oid="ji7u.4x"
              >
                <p
                  className="text-slate-600 italic dark:text-slate-400"
                  data-oid="mju2pgu"
                >
                  "To empower people worldwide to create, share, and experience
                  knowledge in the most engaging way possible, making learning
                  fun, accessible, and rewarding for everyone."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4" data-oid="uyaw69m">
              {stats.map((stat, index) => (
                <Card
                  className="border border-slate-200 dark:border-slate-700"
                  data-oid="c4a6941"
                  key={index}
                >
                  <CardContent className="p-6 xl:pt-6" data-oid="5pc7vic">
                    <div
                      className="mb-2 flex items-center gap-3"
                      data-oid="2om:k8c"
                    >
                      <div
                        className="rounded-full bg-slate-100 p-2 dark:bg-slate-700"
                        data-oid="u4pn_bz"
                      >
                        {stat.icon}
                      </div>
                      <span
                        className="font-medium text-slate-600 text-sm dark:text-slate-400"
                        data-oid="i:71-x7"
                      >
                        {stat.label}
                      </span>
                    </div>
                    <div className="font-bold text-3xl" data-oid="1iov6.r">
                      {stat.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
