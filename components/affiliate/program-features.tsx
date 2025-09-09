"use client";
import { motion } from "framer-motion";
import {
  Award,
  BarChart3,
  Clock,
  DollarSign,
  Globe,
  Headphones,
  Link,
  Shield,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProgramFeatures() {
  const features = [
    {
      icon: (
        <DollarSign
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          data-oid="qlk94:6"
        />
      ),

      title: "High Commission Rates",
      description:
        "Earn up to 30% commission on all referred user subscriptions for the first year.",
    },
    {
      icon: (
        <BarChart3
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          data-oid="pmrr4dl"
        />
      ),

      title: "Real-time Analytics",
      description:
        "Track your performance with detailed analytics and reporting tools.",
    },
    {
      icon: (
        <Link
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          data-oid="ba5zknn"
        />
      ),

      title: "Custom Referral Links",
      description:
        "Create and manage multiple custom referral links for different campaigns.",
    },
    {
      icon: (
        <Clock
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          data-oid="uqc9bpx"
        />
      ),

      title: "90-Day Cookie",
      description:
        "Our 90-day cookie duration ensures you get credit for delayed conversions.",
    },
    {
      icon: (
        <Shield
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          data-oid="4yv4-_l"
        />
      ),

      title: "Secure Payments",
      description:
        "Get paid reliably via PayPal, bank transfer, or cryptocurrency.",
    },
    {
      icon: (
        <Headphones
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          data-oid="p:0v4o7"
        />
      ),

      title: "Dedicated Support",
      description:
        "Access to a dedicated affiliate manager to help optimize your strategy.",
    },
    {
      icon: (
        <Award
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          data-oid="t-rv-2:"
        />
      ),

      title: "Performance Bonuses",
      description:
        "Earn additional bonuses when you exceed your monthly targets.",
    },
    {
      icon: (
        <Zap
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          data-oid="ubhzwza"
        />
      ),

      title: "Instant Approval",
      description: "Get started immediately with our instant approval process.",
    },
    {
      icon: (
        <Globe
          className="h-5 w-5 text-purple-600 dark:text-purple-400"
          data-oid="x37baoe"
        />
      ),

      title: "Global Program",
      description:
        "Our affiliate program is open to partners worldwide with no restrictions.",
    },
  ];

  return (
    <section
      className="bg-white py-10 sm:px-4 xl:px-8 xl:py-20 dark:bg-slate-900"
      data-oid="4f3mf_i"
    >
      <div className="container mx-auto px-4" data-oid="y02v899">
        <div className="mx-auto mb-16 max-w-3xl text-center" data-oid="q4uuzo:">
          <h2
            className="mb-6 font-bold text-3xl md:text-4xl"
            data-oid="sjg5_qn"
          >
            Program Features
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400"
            data-oid="o:c0qas"
          >
            Our affiliate program is designed to maximize your earnings while
            providing all the tools and support you need to succeed.
          </p>
        </div>

        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-oid="ie::506"
        >
          {features.map((feature, index) => (
            <motion.div
              data-oid="dkanp8s"
              initial={{ opacity: 0, y: 20 }}
              key={index}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card
                className="h-full border border-slate-200 transition-shadow duration-300 hover:shadow-md dark:border-slate-700"
                data-oid="4mnp0a6"
              >
                <CardHeader className="pb-2" data-oid="l.z2atz">
                  <div className="flex items-center gap-3" data-oid="tn-_plo">
                    <div
                      className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30"
                      data-oid=".td:33s"
                    >
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg" data-oid="133.:.1">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent data-oid=".c:y_w6">
                  <CardDescription
                    className="text-slate-600 dark:text-slate-400"
                    data-oid="qdd9fvd"
                  >
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
