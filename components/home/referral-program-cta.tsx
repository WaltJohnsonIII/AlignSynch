"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Copy,
  Facebook,
  Mail,
  Share2,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ReferralProgramCTA() {
  const [copied, setCopied] = useState(false);
  const referralCode = "QUIZ2024FRIEND";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16 dark:from-indigo-950/30 dark:to-purple-950/30"
      data-oid="7fxteq8"
    >
      <div className="container mx-auto px-4" data-oid="qdb8scx">
        <div className="mx-auto max-w-4xl" data-oid="l1_sure">
          <div className="mb-10 text-center" data-oid="0m1l3ix">
            <motion.div
              data-oid="k6-zbs6"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2
                className="mb-4 font-bold text-3xl text-slate-800 dark:text-slate-200"
                data-oid="2olvtfb"
              >
                Invite Friends, Earn Together
              </h2>
              <p
                className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400"
                data-oid="-db5goy"
              >
                Share your referral code with friends and earn{" "}
                <span
                  className="font-semibold text-indigo-600 dark:text-indigo-400"
                  data-oid="yzd26lx"
                >
                  $5 bonus
                </span>{" "}
                for each friend who joins. Plus, they'll get a{" "}
                <span
                  className="font-semibold text-indigo-600 dark:text-indigo-400"
                  data-oid="cbttmat"
                >
                  $5 welcome bonus
                </span>{" "}
                too!
              </p>
            </motion.div>
          </div>

          <div
            className="grid items-center gap-8 md:grid-cols-2"
            data-oid=".jukzmt"
          >
            <motion.div
              className="space-y-6"
              data-oid=":d3j1um"
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="space-y-2" data-oid="-sbovqw">
                <h3
                  className="font-semibold text-slate-800 text-xl dark:text-slate-200"
                  data-oid="f7_yy4s"
                >
                  How it works
                </h3>
                <ul className="space-y-3" data-oid="j1mbn3l">
                  <li className="flex items-start gap-2" data-oid="livgmgy">
                    <div
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-medium text-indigo-600 text-sm dark:bg-indigo-900 dark:text-indigo-400"
                      data-oid="qhtw-wm"
                    >
                      1
                    </div>
                    <p
                      className="text-slate-600 dark:text-slate-400"
                      data-oid="-ygtb:h"
                    >
                      Share your unique referral code with friends
                    </p>
                  </li>
                  <li className="flex items-start gap-2" data-oid="087fqzt">
                    <div
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-medium text-indigo-600 text-sm dark:bg-indigo-900 dark:text-indigo-400"
                      data-oid="6jp326h"
                    >
                      2
                    </div>
                    <p
                      className="text-slate-600 dark:text-slate-400"
                      data-oid="i3puz.h"
                    >
                      Friends sign up using your code
                    </p>
                  </li>
                  <li className="flex items-start gap-2" data-oid="6c0j6-o">
                    <div
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-medium text-indigo-600 text-sm dark:bg-indigo-900 dark:text-indigo-400"
                      data-oid="_kxp-qa"
                    >
                      3
                    </div>
                    <p
                      className="text-slate-600 dark:text-slate-400"
                      data-oid="kln7huy"
                    >
                      Both of you receive $5 bonus credit
                    </p>
                  </li>
                  <li className="flex items-start gap-2" data-oid=":_cl-uk">
                    <div
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-medium text-indigo-600 text-sm dark:bg-indigo-900 dark:text-indigo-400"
                      data-oid="zpn1m-2"
                    >
                      4
                    </div>
                    <p
                      className="text-slate-600 dark:text-slate-400"
                      data-oid="vct6f03"
                    >
                      Earn unlimited rewards with more referrals
                    </p>
                  </li>
                </ul>
              </div>

              <div
                className="flex flex-col gap-3 sm:flex-row"
                data-oid="mgntdgo"
              >
                <Button className="flex gap-2" data-oid="zu7i:nq" size="lg">
                  <Share2 className="h-4 w-4" data-oid="g7cs0h3" />
                  <span data-oid="vrgcuy6">Refer Now</span>
                </Button>
                <Button data-oid="lh_usow" size="lg" variant="outline">
                  View Referral Dashboard
                </Button>
              </div>
            </motion.div>

            <motion.div
              data-oid="9orsaft"
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card
                className="overflow-hidden border-2 border-indigo-100 dark:border-indigo-900/50"
                data-oid="ysfd0na"
              >
                <CardContent className="p-6" data-oid="gpf99xg">
                  <div className="space-y-4" data-oid="vjhcyv1">
                    <div
                      className="flex items-center justify-between"
                      data-oid="j_nomlb"
                    >
                      <h4
                        className="font-medium text-slate-800 dark:text-slate-200"
                        data-oid="_kblftp"
                      >
                        Your Referral Code
                      </h4>
                      <div
                        className="rounded-full bg-green-100 px-2 py-1 text-green-700 text-xs dark:bg-green-900/30 dark:text-green-400"
                        data-oid="xohe7be"
                      >
                        Active
                      </div>
                    </div>

                    <div className="relative" data-oid="debndbq">
                      <Input
                        className="border-indigo-100 bg-indigo-50/50 pr-10 text-center font-medium text-lg dark:border-indigo-800 dark:bg-indigo-900/20"
                        data-oid="_:y6v1y"
                        readOnly
                        value={referralCode}
                      />

                      <Button
                        className="-translate-y-1/2 absolute top-1/2 right-1 h-8 w-8 p-0"
                        data-oid="e69bz_d"
                        onClick={handleCopy}
                        size="sm"
                        variant="ghost"
                      >
                        {copied ? (
                          <CheckCircle2
                            className="h-4 w-4 text-green-500"
                            data-oid="izs52pw"
                          />
                        ) : (
                          <Copy className="h-4 w-4" data-oid="nx1dced" />
                        )}
                      </Button>
                    </div>

                    <div className="pt-2" data-oid="9cm5n:k">
                      <p
                        className="mb-3 text-slate-500 text-sm dark:text-slate-400"
                        data-oid="11gnteo"
                      >
                        Share via:
                      </p>
                      <div className="flex gap-2" data-oid="ct21pz3">
                        <Button
                          className="h-10 w-10 rounded-full"
                          data-oid="mzhsxtp"
                          size="icon"
                          variant="outline"
                        >
                          <Facebook
                            className="h-5 w-5 text-blue-600"
                            data-oid="17:ig8c"
                          />

                          <span className="sr-only" data-oid="oz5_f54">
                            Share on Facebook
                          </span>
                        </Button>
                        <Button
                          className="h-10 w-10 rounded-full"
                          data-oid="m8pqcgl"
                          size="icon"
                          variant="outline"
                        >
                          <Twitter
                            className="h-5 w-5 text-sky-500"
                            data-oid="nkc2uwg"
                          />

                          <span className="sr-only" data-oid="qxp9xl8">
                            Share on Twitter
                          </span>
                        </Button>
                        <Button
                          className="h-10 w-10 rounded-full"
                          data-oid="z15adbe"
                          size="icon"
                          variant="outline"
                        >
                          <Mail
                            className="h-5 w-5 text-red-500"
                            data-oid="52sd2a7"
                          />

                          <span className="sr-only" data-oid="44nka6r">
                            Share via Email
                          </span>
                        </Button>
                        <div className="flex-1" data-oid="ax8bikr" />
                        <Button
                          className="rounded-full"
                          data-oid="b20bzo."
                          variant="default"
                        >
                          <Share2 className="mr-2 h-4 w-4" data-oid="j1w7x86" />
                          <span data-oid="pmcf2vg">Share</span>
                        </Button>
                      </div>
                    </div>

                    <div
                      className="mt-4 border-slate-200 border-t border-dashed pt-4 dark:border-slate-700"
                      data-oid="t36ica2"
                    >
                      <div
                        className="flex items-center justify-between text-sm"
                        data-oid="pz2b7pi"
                      >
                        <span
                          className="text-slate-600 dark:text-slate-400"
                          data-oid="yu2:a16"
                        >
                          Total Referrals
                        </span>
                        <span className="font-semibold" data-oid="ent3yum">
                          12
                        </span>
                      </div>
                      <div
                        className="mt-2 flex items-center justify-between text-sm"
                        data-oid="p2yo0cx"
                      >
                        <span
                          className="text-slate-600 dark:text-slate-400"
                          data-oid="bj:34hm"
                        >
                          Earnings
                        </span>
                        <span
                          className="font-semibold text-green-600"
                          data-oid="s3mjpok"
                        >
                          $60.00
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
