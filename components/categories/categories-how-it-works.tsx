"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, Search } from "lucide-react";
import Image from "next/image";
import browse from "@/public/browse-category.png";
import earnReward from "@/public/earn-reward.png";
import takequiz from "@/public/take-quiz.png";
export function CategoriesHowItWorks() {
  const steps = [
    {
      icon: <Search className="h-6 w-6 text-white" data-oid="6scr_6t" />,
      title: "Browse Categories",
      description:
        "Explore our diverse range of quiz categories to find topics interest you.",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-purple-500 to-purple-600",
      delay: 0.3,
      img: browse,
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" data-oid="crpefc1" />,
      title: "Take Quizzes",
      description:
        "Challenge yourself with quizzes of varying difficulty levels and formats.",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-indigo-500 to-indigo-600",
      delay: 0.5,
      img: takequiz,
    },
    {
      icon: <Award className="h-6 w-6 text-white" data-oid="2s298u7" />,
      title: "Earn Rewards",
      description:
        "Collect points, badges, and climb the leaderboards as you complete quizzes.",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-500 to-blue-600",
      delay: 0.7,
      img: earnReward,
    },
  ];

  return (
    <section
      className="bg-white px-3 py-10 xl:py-20 dark:bg-slate-900"
      data-oid="dj7b-2l"
    >
      <div className="container mx-auto xl:px-4" data-oid="0-9f-o6">
        <div className="mb-16 text-center" data-oid="2qaa.ks">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 dark:bg-slate-800"
            data-oid=".poa3jn"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span
              className="font-medium text-slate-800 text-sm dark:text-slate-200"
              data-oid="jiiqrzw"
            >
              Simple Process
            </span>
          </motion.div>

          <motion.h2
            className="mb-4 font-bold text-3xl text-slate-900 dark:text-white"
            data-oid="8o0k5r-"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            How It Works
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400"
            data-oid="r1-0l:p"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Getting started with our quiz platform is easy. Follow these simple
            steps to begin your quiz journey.
          </motion.p>
        </div>

        <div
          className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3"
          data-oid="81juxjp"
        >
          {steps.map((step, index) => (
            <motion.div
              className="relative"
              data-oid="d-38lem"
              initial={{ opacity: 0, y: 20 }}
              key={index}
              transition={{ duration: 0.5, delay: step.delay }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* Connector line */}

              <div
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
                data-oid="c5ux:_e"
              >
                <div className="relative" data-oid="3fw4mi8">
                  <Image
                    alt={step.title}
                    className="aspect-[16/10] w-full border-b object-cover object-center"
                    data-oid="o-2bjbo"
                    height={200}
                    src={step.img || "/placeholder.svg"}
                    width={300}
                  />

                  <div className="absolute top-4 left-4" data-oid="_j2pia_">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${step.color} shadow-lg`}
                      data-oid="-fnzxjw"
                    >
                      {step.icon}
                    </div>
                  </div>
                  <div
                    className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-white font-bold text-sm shadow-md dark:border-slate-700 dark:bg-slate-900"
                    data-oid="sddw9zc"
                  >
                    {index + 1}
                  </div>
                </div>
                <div className="p-6" data-oid="a9e6328">
                  <h3
                    className="mb-2 font-bold text-slate-900 text-xl dark:text-white"
                    data-oid="9su4_wb"
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-400"
                    data-oid="t-hnowq"
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          data-oid="tnsh8qz"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p
            className="mb-6 text-slate-600 dark:text-slate-400"
            data-oid="dzuf5.s"
          >
            Ready to start your quiz journey? Browse categories, find your
            interests, and begin challenging yourself today!
          </p>
          <div
            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800"
            data-oid="an:l_i7"
          >
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-green-500"
              data-oid="9chblwh"
            />
            <span
              className="font-medium text-slate-800 text-sm dark:text-slate-200"
              data-oid="vzisb6q"
            >
              <span className="font-bold" data-oid="yv72_do">
                2,500+
              </span>{" "}
              users online now
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
