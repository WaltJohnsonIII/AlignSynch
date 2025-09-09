"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CategoriesCTA() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 py-20 dark:from-purple-950/30 dark:to-indigo-950/30"
      data-oid=":9f5r7x"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"
        data-oid="5yvss21"
      />
      <div
        className="-top-40 -right-40 absolute h-80 w-80 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/20"
        data-oid="8nyyyfb"
      />
      <div
        className="-bottom-40 -left-40 absolute h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-900/20"
        data-oid="6js9:zl"
      />

      <div className="container relative z-10 mx-auto px-4" data-oid="j3vur9x">
        <div className="mx-auto mb-12 max-w-3xl text-center" data-oid="4k63.t_">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-4 py-1.5 shadow-sm dark:border-purple-900/50 dark:bg-slate-800"
            data-oid="5luvpk6"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Sparkles className="h-4 w-4 text-purple-500" data-oid="ps9:0.i" />
            <span
              className="font-medium text-slate-800 text-sm dark:text-slate-200"
              data-oid="4h4_l.."
            >
              Discover Your Next Challenge
            </span>
          </motion.div>

          <motion.h2
            className="mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text font-bold text-3xl text-transparent lg:text-4xl"
            data-oid="rms1ybg"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to Test Your Knowledge?
          </motion.h2>

          <motion.p
            className="mb-8 text-lg text-slate-600 dark:text-slate-400"
            data-oid="0c35vet"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Choose from thousands of quizzes across all categories or create
            your own to challenge friends and the community.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            data-oid="rw8vcd:"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link data-oid="1fe0e9x" href="/explore">
              <Button data-oid="sudoq23" size="lg" variant={"gradient"}>
                Explore Quizzes
                <ArrowRight className="h-4 w-4" data-oid="90lkoms" />
              </Button>
            </Link>
            <Link data-oid="m52m0a-" href="/create/editor">
              <Button data-oid="emcr_1f" size="lg" variant="outline">
                Create Your Own Quiz
              </Button>
            </Link>
          </motion.div>
        </div>

        <div
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3"
          data-oid="7j1zk0m"
        >
          <motion.div
            className="hover:-translate-y-1 rounded-xl border border-purple-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-purple-900/50 dark:bg-slate-800"
            data-oid="f7hamzf"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div
              className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30"
              data-oid="sthrzoh"
            >
              <Trophy
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
                data-oid="-zdsro:"
              />
            </div>
            <h3
              className="mb-2 font-bold text-slate-800 text-xl dark:text-slate-200"
              data-oid="akto1o4"
            >
              Compete & Win
            </h3>
            <p
              className="text-slate-600 dark:text-slate-400"
              data-oid="46v6dch"
            >
              Join tournaments, climb the leaderboards, and earn rewards for
              your knowledge.
            </p>
          </motion.div>

          <motion.div
            className="hover:-translate-y-1 rounded-xl border border-purple-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-purple-900/50 dark:bg-slate-800"
            data-oid="ag6jo26"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div
              className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30"
              data-oid="zdgp:lr"
            >
              <Sparkles
                className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                data-oid="8br4-9_"
              />
            </div>
            <h3
              className="mb-2 font-bold text-slate-800 text-xl dark:text-slate-200"
              data-oid="c5pm84s"
            >
              Learn & Grow
            </h3>
            <p
              className="text-slate-600 dark:text-slate-400"
              data-oid="q:r1-.h"
            >
              Expand your knowledge across 20+ categories with fun, interactive
              quizzes.
            </p>
          </motion.div>

          <motion.div
            className="hover:-translate-y-1 rounded-xl border border-purple-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-purple-900/50 dark:bg-slate-800"
            data-oid="1r.oiwu"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div
              className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30"
              data-oid="_jx.hl9"
            >
              <Users
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                data-oid=".x0coqf"
              />
            </div>
            <h3
              className="mb-2 font-bold text-slate-800 text-xl dark:text-slate-200"
              data-oid="qdhc_n-"
            >
              Connect & Share
            </h3>
            <p
              className="text-slate-600 dark:text-slate-400"
              data-oid="of9tfzt"
            >
              Challenge friends, share results, and join a community of quiz
              enthusiasts.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-3xl"
          data-oid="kf.q2nx"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div
            className="flex flex-col items-center gap-6 rounded-xl border border-purple-100 bg-white p-6 shadow-sm sm:flex-row dark:border-purple-900/50 dark:bg-slate-800"
            data-oid="_73d6k8"
          >
            <div
              className="flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-3"
              data-oid="wmeaj36"
            >
              <Users className="h-6 w-6 text-white" data-oid="s_y.4ju" />
            </div>
            <div className="text-center sm:text-left" data-oid="ce8gjph">
              <p
                className="text-slate-600 dark:text-slate-400"
                data-oid="8_4v_i3"
              >
                <span
                  className="font-bold text-slate-800 dark:text-slate-200"
                  data-oid="1_e7ej6"
                >
                  500,000+
                </span>{" "}
                quiz enthusiasts have joined our community. Will you be next?
              </p>
            </div>
            <div className="sm:ml-auto" data-oid="2ayf096">
              <Link data-oid="6lb87ht" href="/signup">
                <Button data-oid="3z_4o.6" variant={"gradient"}>
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
