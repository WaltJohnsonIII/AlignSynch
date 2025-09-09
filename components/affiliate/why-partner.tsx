"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  DollarSign,
  Gift,
  LifeBuoy,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function WhyPartner() {
  const benefits = [
    {
      icon: (
        <DollarSign
          className="h-6 w-6 text-green-600 dark:text-green-500"
          data-oid="7nc3lws"
        />
      ),

      title: "High Commission Rates",
      description:
        "Earn up to 30% commission on all referred subscriptions, with lifetime tracking for recurring revenue.",
    },
    {
      icon: (
        <TrendingUp
          className="h-6 w-6 text-blue-600 dark:text-blue-500"
          data-oid=":-j1mg9"
        />
      ),

      title: "Strong Conversion Rates",
      description:
        "Our optimized landing pages and product quality ensure high conversion rates for your referrals.",
    },
    {
      icon: (
        <Clock
          className="h-6 w-6 text-purple-600 dark:text-purple-500"
          data-oid="l:a:nb2"
        />
      ),

      title: "Fast Payouts",
      description:
        "Get paid reliably every month with low minimum thresholds and multiple payout options.",
    },
    {
      icon: (
        <LifeBuoy
          className="h-6 w-6 text-indigo-600 dark:text-indigo-500"
          data-oid="4uit-vz"
        />
      ),

      title: "Dedicated Support",
      description:
        "Access to a dedicated affiliate manager and priority support to help maximize your earnings.",
    },
    {
      icon: (
        <Gift
          className="h-6 w-6 text-pink-600 dark:text-pink-500"
          data-oid="t9qovxd"
        />
      ),

      title: "Exclusive Promotions",
      description:
        "Get access to special offers and promotional materials to boost your conversion rates.",
    },
    {
      icon: (
        <CheckCircle
          className="h-6 w-6 text-teal-600 dark:text-teal-500"
          data-oid="682z195"
        />
      ),

      title: "Easy Integration",
      description:
        "Simple tracking links, API access, and ready-to-use marketing materials for seamless promotion.",
    },
  ];

  const testimonials = [
    {
      quote:
        "I've been part of many affiliate programs, but QuizHub 's stands out with its high commission rates and reliable tracking. I've earned over $5,000 monthly since joining.",
      author: "Sarah Johnson",
      role: "Educational Content Creator",
      image: "/avatars/sarah.webp",
    },
    {
      quote:
        "The conversion rates are incredible. The product sells itself, and the affiliate team provides amazing support whenever I need help optimizing my campaigns.",
      author: "Michael Chen",
      role: "Digital Marketing Specialist",
      image: "/avatars/alex.png",
    },
  ];

  return (
    <section
      className="bg-white py-10 sm:px-4 xl:px-8 xl:py-20 dark:bg-slate-900"
      data-oid="fod77eq"
    >
      <div className="container mx-auto px-4" data-oid="61pti8f">
        <div className="mb-16 text-center" data-oid="04hdf-1">
          <motion.div
            data-oid="2rxa6ok"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2
              className="mb-4 font-bold text-3xl md:text-4xl"
              data-oid="e3g2pdn"
            >
              Why Partner With Us?
            </h2>
            <div
              className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-green-600 to-teal-600"
              data-oid="citqz-x"
            />
            <p
              className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400"
              data-oid="43wx_wt"
            >
              Join thousands of successful affiliates who are earning
              substantial income by promoting QuizHub{" "}
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div
          className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          data-oid="iksghwe"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              data-oid="z0u6v21"
              initial={{ opacity: 0, y: 20 }}
              key={index}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card
                className="h-full border border-slate-200 transition-shadow duration-300 hover:shadow-md dark:border-slate-700"
                data-oid="bhi:8kp"
              >
                <CardContent className="p-6 xl:pt-6" data-oid="3zvlv36">
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 p-3 dark:bg-slate-800"
                    data-oid="76zhvtg"
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="mb-2 font-bold text-xl" data-oid="x4xst3j">
                    {benefit.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-400"
                    data-oid="tpd.pbm"
                  >
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          data-oid="2ztk6_6"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div
            className="rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 p-4 md:p-8 xl:p-12 dark:from-slate-800 dark:to-slate-900"
            data-oid="a_7.hmz"
          >
            <h3
              className="mb-8 text-center font-bold text-2xl"
              data-oid="fuvj1cz"
            >
              Success Stories
            </h3>

            <div className="grid gap-8 md:grid-cols-2" data-oid="dldqmt4">
              {testimonials.map((testimonial, index) => (
                <div
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                  data-oid="pcmz:56"
                  key={index}
                >
                  <div
                    className="mb-4 flex items-center gap-4"
                    data-oid="ue.e2-9"
                  >
                    <div
                      className="h-12 w-12 overflow-hidden rounded-full"
                      data-oid="2pm5lxz"
                    >
                      <Image
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                        data-oid="7s1jd6-"
                        height={48}
                        src={testimonial.image || "/placeholder.svg"}
                        width={48}
                      />
                    </div>
                    <div data-oid="3ig:3jl">
                      <p className="font-semibold" data-oid="wobzhfo">
                        {testimonial.author}
                      </p>
                      <p
                        className="text-slate-600 text-sm dark:text-slate-400"
                        data-oid="ly-k134"
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-slate-600 italic dark:text-slate-400"
                    data-oid="orrktsp"
                  >
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center" data-oid="x7:25d8">
              <div
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white dark:bg-slate-800"
                data-oid="zz6ozis"
              >
                <span data-oid=".7d08av">
                  Join our successful partners today
                </span>
                <svg
                  className="h-5 w-5"
                  data-oid="399bs_p"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    data-oid="0i4d5y1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison */}
        <motion.div
          className="mt-16"
          data-oid="5t4lux3"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div
            className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
            data-oid="8zjmvf2"
          >
            <div
              className="border-slate-200 border-b bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800"
              data-oid="k0vdp_0"
            >
              <h3 className="font-bold text-xl" data-oid="3pb1sna">
                How We Compare
              </h3>
            </div>
            <div className="overflow-x-auto" data-oid="_:4-huz">
              <table className="w-full" data-oid="95ow_i-">
                <thead data-oid="b.7peeo">
                  <tr
                    className="bg-slate-50 dark:bg-slate-800"
                    data-oid="i_ri792"
                  >
                    <th
                      className="p-4 text-left font-medium"
                      data-oid="py7j-tg"
                    >
                      Feature
                    </th>
                    <th
                      className="p-4 text-center font-medium"
                      data-oid="8k1bmrk"
                    >
                      QuizHub Affiliate
                    </th>
                    <th
                      className="p-4 text-center font-medium"
                      data-oid="8runri-"
                    >
                      Other Programs
                    </th>
                  </tr>
                </thead>
                <tbody data-oid="ynmw71c">
                  <tr
                    className="border-slate-200 border-t dark:border-slate-700"
                    data-oid="-2..jnn"
                  >
                    <td
                      className="p-4 text-slate-600 dark:text-slate-400"
                      data-oid="v7b:0g-"
                    >
                      Commission Rate
                    </td>
                    <td
                      className="p-4 text-center font-medium"
                      data-oid="ib0vl:m"
                    >
                      Up to 30%
                    </td>
                    <td
                      className="p-4 text-center text-slate-600 dark:text-slate-400"
                      data-oid="gp125qr"
                    >
                      10-20%
                    </td>
                  </tr>
                  <tr
                    className="border-slate-200 border-t dark:border-slate-700"
                    data-oid="4z_2nhd"
                  >
                    <td
                      className="p-4 text-slate-600 dark:text-slate-400"
                      data-oid="o2hwrjx"
                    >
                      Cookie Duration
                    </td>
                    <td
                      className="p-4 text-center font-medium"
                      data-oid="e_s.5qa"
                    >
                      90 days
                    </td>
                    <td
                      className="p-4 text-center text-slate-600 dark:text-slate-400"
                      data-oid="twhkb8x"
                    >
                      30 days
                    </td>
                  </tr>
                  <tr
                    className="border-slate-200 border-t dark:border-slate-700"
                    data-oid="7kf7lyu"
                  >
                    <td
                      className="p-4 text-slate-600 dark:text-slate-400"
                      data-oid=":yoki_u"
                    >
                      Minimum Payout
                    </td>
                    <td
                      className="p-4 text-center font-medium"
                      data-oid="5qivems"
                    >
                      $50
                    </td>
                    <td
                      className="p-4 text-center text-slate-600 dark:text-slate-400"
                      data-oid="hxqb3tb"
                    >
                      $100
                    </td>
                  </tr>
                  <tr
                    className="border-slate-200 border-t dark:border-slate-700"
                    data-oid="helz5bi"
                  >
                    <td
                      className="p-4 text-slate-600 dark:text-slate-400"
                      data-oid="r1rxcgv"
                    >
                      Dedicated Support
                    </td>
                    <td
                      className="p-4 text-center font-medium"
                      data-oid="cgc_x2a"
                    >
                      <svg
                        className="mx-auto h-6 w-6 text-green-600"
                        data-oid="3gp2pck"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          data-oid="_mgptxw"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </td>
                    <td
                      className="p-4 text-center text-slate-600 dark:text-slate-400"
                      data-oid="sx_4l8s"
                    >
                      <svg
                        className="mx-auto h-6 w-6 text-red-600"
                        data-oid="3fbv1gc"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M6 18L18 6M6 6l12 12"
                          data-oid="p:npxss"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr
                    className="border-slate-200 border-t dark:border-slate-700"
                    data-oid="-ycbgin"
                  >
                    <td
                      className="p-4 text-slate-600 dark:text-slate-400"
                      data-oid="vy5oeep"
                    >
                      Marketing Materials
                    </td>
                    <td
                      className="p-4 text-center font-medium"
                      data-oid="_txzliq"
                    >
                      <svg
                        className="mx-auto h-6 w-6 text-green-600"
                        data-oid="n779cqh"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          data-oid="3gt3m5n"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </td>
                    <td
                      className="p-4 text-center text-slate-600 dark:text-slate-400"
                      data-oid="io:239y"
                    >
                      Limited
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
