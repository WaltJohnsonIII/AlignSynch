"use client";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AffiliateHero() {
  return (
    <section
      className="bg-slate-50 py-10 sm:px-4 md:py-16 lg:px-8 xl:py-20 dark:bg-slate-900"
      data-oid="q7a5y-2"
    >
      <div className="container mx-auto px-4" data-oid="zrmni9k">
        <div
          className="grid items-center gap-12 lg:grid-cols-2"
          data-oid="shw7z44"
        >
          {/* Left column - Text content */}
          <div className="mx-auto max-w-xl lg:mx-0" data-oid="7b:iz5e">
            <div
              className="mb-6 inline-flex items-center rounded-full bg-purple-100 px-3 py-1 font-medium text-purple-600 text-sm dark:bg-purple-900/30 dark:text-purple-400"
              data-oid="r6:aamz"
            >
              <span
                className="mr-2 flex h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400"
                data-oid="nigh9ah"
              />
              Affiliate Program
            </div>

            <h1
              className="mb-6 font-bold text-3xl text-slate-900 sm:text-4xl md:text-5xl dark:text-white"
              data-oid="rskthlr"
            >
              Turn Your Audience Into{" "}
              <span
                className="text-purple-600 dark:text-purple-400"
                data-oid="gkenpvm"
              >
                Revenue
              </span>
            </h1>

            <p
              className="mb-8 text-lg text-slate-600 dark:text-slate-300"
              data-oid="09w4ans"
            >
              Join our affiliate program and earn up to 30% commission on every
              referral. Share quality quiz content and get rewarded for every
              new user you bring.
            </p>

            <div className="mb-8 space-y-4" data-oid="_hkois0">
              {[
                "Earn 30% commission on all referral purchases",
                "Get paid monthly with no minimum threshold",
                "Access detailed analytics and performance tracking",
                "Receive marketing materials and dedicated support",
              ].map((benefit, index) => (
                <div
                  className="flex items-start"
                  data-oid="u7-nl32"
                  key={index}
                >
                  <CheckCircle
                    className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-purple-600 dark:text-purple-400"
                    data-oid="eg64yft"
                  />

                  <p
                    className="text-slate-700 dark:text-slate-300"
                    data-oid="go-ew6e"
                  >
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mb-10 flex flex-col gap-4 sm:flex-row"
              data-oid="tay2gu5"
            >
              <Button data-oid="ojh38c3" variant={"gradient"}>
                Become an Affiliate
                <ArrowRight className="h-4 w-4" data-oid="di7x-p7" />
              </Button>
              <Button
                className="flex items-center gap-2 border-slate-300 px-6 text-base dark:border-slate-700"
                data-oid="v098zrf"
                variant="outline"
              >
                Learn More
              </Button>
            </div>

            <div
              className="grid max-w-md grid-cols-2 gap-4 md:grid-cols-3"
              data-oid="ls6x5-j"
            >
              <div
                className="rounded-lg bg-white p-4 text-center shadow-sm dark:bg-slate-800"
                data-oid="3zw4--:"
              >
                <div
                  className="font-bold text-3xl text-purple-600 dark:text-purple-400"
                  data-oid=".c5u6tt"
                >
                  30%
                </div>
                <div
                  className="text-slate-600 text-sm dark:text-slate-400"
                  data-oid="_o:uws9"
                >
                  Commission
                </div>
              </div>
              <div
                className="rounded-lg bg-white p-4 text-center shadow-sm dark:bg-slate-800"
                data-oid="8rsrnmj"
              >
                <div
                  className="font-bold text-3xl text-purple-600 dark:text-purple-400"
                  data-oid="c23_4z_"
                >
                  10k+
                </div>
                <div
                  className="text-slate-600 text-sm dark:text-slate-400"
                  data-oid="e5l.58s"
                >
                  Affiliates
                </div>
              </div>
              <div
                className="rounded-lg bg-white p-4 text-center shadow-sm dark:bg-slate-800"
                data-oid="12y2f0i"
              >
                <div
                  className="font-bold text-3xl text-purple-600 dark:text-purple-400"
                  data-oid="m8z4t5p"
                >
                  $1M+
                </div>
                <div
                  className="text-slate-600 text-sm dark:text-slate-400"
                  data-oid=":5dzz._"
                >
                  Paid Out
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Illustration */}
          <div className="relative" data-oid="qarru0e">
            <div
              className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg sm:p-6 md:p-8 dark:border-slate-700 dark:bg-slate-800"
              data-oid="x57sjnb"
            >
              <div className="mb-6" data-oid="xuzlpkd">
                <h3
                  className="mb-2 font-semibold text-slate-900 text-xl dark:text-white"
                  data-oid="66q4-fk"
                >
                  Affiliate Dashboard
                </h3>
                <p
                  className="text-slate-600 text-sm dark:text-slate-300"
                  data-oid="qr.iaqu"
                >
                  Track your performance and earnings in real-time
                </p>
              </div>

              <div
                className="mb-6 rounded-lg bg-slate-50 p-4 dark:bg-slate-900"
                data-oid="1.04pjj"
              >
                <div
                  className="mb-4 flex items-center justify-between"
                  data-oid="3bzyj.o"
                >
                  <div data-oid="pfglbag">
                    <p
                      className="text-slate-500 text-sm dark:text-slate-400"
                      data-oid="9y9ix6f"
                    >
                      This Month
                    </p>
                    <p
                      className="font-bold text-2xl text-slate-900 dark:text-white"
                      data-oid="j3b18c6"
                    >
                      $1,240.50
                    </p>
                  </div>
                  <div
                    className="rounded bg-green-100 px-2 py-1 text-green-600 text-sm dark:bg-green-900/30 dark:text-green-400"
                    data-oid="afb6s1p"
                  >
                    +12.5%
                  </div>
                </div>

                <div
                  className="mb-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700"
                  data-oid="os:7ei9"
                >
                  <div
                    className="h-2 w-3/4 rounded-full bg-purple-600 dark:bg-purple-500"
                    data-oid="f973wpf"
                  />
                </div>
                <p
                  className="text-slate-500 text-xs dark:text-slate-400"
                  data-oid="ho_ww0-"
                >
                  75% of monthly goal
                </p>
              </div>

              <div className="space-y-4" data-oid="7gtphkd">
                <div
                  className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-900"
                  data-oid="qal0k.x"
                >
                  <div className="flex items-center" data-oid="90g9gv0">
                    <div
                      className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30"
                      data-oid="bna1pbt"
                    >
                      <span
                        className="font-medium text-blue-600 text-sm dark:text-blue-400"
                        data-oid="gzmh8tr"
                      >
                        1
                      </span>
                    </div>
                    <span
                      className="text-slate-700 dark:text-slate-300"
                      data-oid="s0fo2_i"
                    >
                      New Signups
                    </span>
                  </div>
                  <span
                    className="font-semibold text-slate-900 dark:text-white"
                    data-oid="_2.u5x3"
                  >
                    42
                  </span>
                </div>

                <div
                  className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-900"
                  data-oid="h409ncb"
                >
                  <div className="flex items-center" data-oid="8b21x:.">
                    <div
                      className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30"
                      data-oid="9:z47yg"
                    >
                      <span
                        className="font-medium text-purple-600 text-sm dark:text-purple-400"
                        data-oid="dmqd-zl"
                      >
                        2
                      </span>
                    </div>
                    <span
                      className="text-slate-700 dark:text-slate-300"
                      data-oid="cj.jtxe"
                    >
                      Conversions
                    </span>
                  </div>
                  <span
                    className="font-semibold text-slate-900 dark:text-white"
                    data-oid="lin-a-c"
                  >
                    18
                  </span>
                </div>

                <div
                  className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-900"
                  data-oid="9n4p46j"
                >
                  <div className="flex items-center" data-oid="0rgkqha">
                    <div
                      className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
                      data-oid="wx:-vsh"
                    >
                      <span
                        className="font-medium text-green-600 text-sm dark:text-green-400"
                        data-oid="8kex3w3"
                      >
                        3
                      </span>
                    </div>
                    <span
                      className="text-slate-700 dark:text-slate-300"
                      data-oid="o9hfa-f"
                    >
                      Commission Rate
                    </span>
                  </div>
                  <span
                    className="font-semibold text-slate-900 dark:text-white"
                    data-oid="1pv4llo"
                  >
                    30%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
