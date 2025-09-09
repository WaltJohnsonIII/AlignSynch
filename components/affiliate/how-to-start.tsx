"use client";

import { BarChart, DollarSign, Link, UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HowToStart() {
  const steps = [
    {
      icon: <UserPlus className="h-6 w-6 text-primary" data-oid="kgnn.i0" />,
      title: "Sign Up",
      description:
        "Create your free affiliate account in less than 2 minutes with just a few simple steps.",
      color: "border-l-primary",
    },
    {
      icon: <Link className="h-6 w-6 text-indigo-500" data-oid="5ezfltn" />,
      title: "Share Your Link",
      description:
        "Get your unique referral link and share it with your audience through social media, email, or your website.",
      color: "border-l-indigo-500",
    },
    {
      icon: <Users className="h-6 w-6 text-violet-500" data-oid="l26j_sm" />,
      title: "Refer Users",
      description:
        "Your audience signs up using your unique referral link. We track all referrals automatically.",
      color: "border-l-violet-500",
    },
    {
      icon: (
        <DollarSign className="h-6 w-6 text-emerald-500" data-oid="vg2eqv2" />
      ),

      title: "Earn Commission",
      description:
        "Earn up to 30% commission on all referred user subscriptions for the lifetime of their account.",
      color: "border-l-emerald-500",
    },
    {
      icon: <BarChart className="h-6 w-6 text-amber-500" data-oid="sn1rb6q" />,
      title: "Track Performance",
      description:
        "Monitor your earnings and optimize your strategy with our comprehensive analytics dashboard.",
      color: "border-l-amber-500",
    },
  ];

  return (
    <section
      className="bg-white py-10 md:py-16 dark:bg-slate-900"
      data-oid="5u9c-e7"
    >
      <div className="container mx-auto px-4" data-oid="n67zu6y">
        <div className="mx-auto mb-12 max-w-3xl text-center" data-oid="-u21my8">
          <h2 className="mb-4 font-bold text-3xl" data-oid="ywqvffb">
            How to Start Earning
          </h2>
          <p
            className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400"
            data-oid="rxzo5z."
          >
            Getting started with our affiliate program is simple. Follow these
            steps and start earning passive income by sharing QuizHub with your
            audience.
          </p>
        </div>

        <div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          data-oid="tmx27an"
        >
          {steps.map((step, index) => (
            <div
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
              data-oid="0.-hzbu"
              key={index}
            >
              <div
                className={`border-l-4 ${step.color} flex h-full flex-col`}
                data-oid="1jsdl0n"
              >
                <div className="flex-1 p-6" data-oid="75pebti">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700"
                    data-oid="lm-4cv:"
                  >
                    {step.icon}
                  </div>
                  <div className="mb-3 flex items-center" data-oid="kinb_.o">
                    <span
                      className="mr-2 font-medium text-slate-400 text-sm dark:text-slate-500"
                      data-oid="rv1lw_t"
                    >
                      STEP {index + 1}
                    </span>
                  </div>
                  <h3 className="mb-2 font-bold text-xl" data-oid="diyb5ax">
                    {step.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-400"
                    data-oid="kjcfs1:"
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-oid="403r-6h">
          <Button className="px-8" data-oid="0clm_:m" size="lg">
            Become an Affiliate
          </Button>
          <p
            className="mt-4 text-slate-500 text-sm dark:text-slate-400"
            data-oid="l.gva6h"
          >
            Already an affiliate?{" "}
            <Link
              className="text-primary hover:underline"
              data-oid="-ts.yi1"
              href="#"
            >
              Sign in to your dashboard
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
