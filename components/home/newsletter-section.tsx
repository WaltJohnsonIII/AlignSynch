"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1000);
  };

  return (
    <section className="relative overflow-hidden py-24" data-oid="_mg2y62">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        data-oid="xjpi92s"
        style={{
          backgroundImage: "url('/newsletter-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-sm"
          data-oid="29ic8jx"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4" data-oid="be.ukbt">
        <div className="mx-auto max-w-3xl" data-oid="us-ubaf">
          <motion.div
            className="text-center"
            data-oid="qxn938s"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div
              className="mb-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-md"
              data-oid="51vsbgt"
            >
              <Mail className="h-6 w-6 text-white" data-oid="ew.i7ly" />
            </div>

            <h2
              className="mb-4 font-bold text-4xl text-white"
              data-oid="r5qw9n0"
            >
              Get Quiz Insights Weekly
            </h2>

            <p
              className="mx-auto mb-8 max-w-2xl text-lg text-white/80"
              data-oid="mln3m-m"
            >
              Join 10,000+ quiz creators and players receiving our weekly tips,
              strategies, and exclusive opportunities
            </p>
          </motion.div>

          <motion.div
            data-oid="m644b93"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {isSubmitted ? (
              <div
                className="rounded-xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-md"
                data-oid="rx0x737"
              >
                <motion.div
                  animate={{ scale: 1 }}
                  className="flex items-center justify-center gap-2 font-medium text-lg text-white"
                  data-oid="6l7f8kn"
                  initial={{ scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <div
                    className="rounded-full bg-green-500 p-1"
                    data-oid="bn_:zv9"
                  >
                    <CheckCircle
                      className="h-6 w-6 text-white"
                      data-oid="6rtr.go"
                    />
                  </div>
                  <span data-oid="s0o46:4">
                    Thank you for subscribing! Check your inbox soon.
                  </span>
                </motion.div>
              </div>
            ) : (
              <div
                className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
                data-oid="8_2r3.b"
              >
                <form
                  className="flex flex-col gap-3 sm:flex-row"
                  data-oid="aavnwep"
                  onSubmit={handleSubmit}
                >
                  <div className="relative flex-1" data-oid="rvjrqqa">
                    <Input
                      className="h-14 border-white/20 bg-white/10 pr-10 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
                      data-oid="51pb.31"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      type="email"
                      value={email}
                    />

                    <Mail
                      className="-translate-y-1/2 absolute top-1/2 right-3 h-5 w-5 text-white/60"
                      data-oid="1i0pq8r"
                    />
                  </div>
                  <Button
                    className="h-14 bg-white px-8 font-medium text-base text-indigo-900 transition-all duration-200 hover:bg-white/90"
                    data-oid=":.3ki:y"
                    disabled={isLoading}
                    type="submit"
                  >
                    {isLoading ? (
                      <span
                        className="flex items-center gap-2"
                        data-oid="-6gdxtk"
                      >
                        <span
                          className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-900 border-t-transparent"
                          data-oid="0m4hq_x"
                        />
                        Subscribing...
                      </span>
                    ) : (
                      <span
                        className="flex items-center gap-2"
                        data-oid="_k982my"
                      >
                        Subscribe
                        <ArrowRight className="h-4 w-4" data-oid="0g1mirj" />
                      </span>
                    )}
                  </Button>
                </form>

                <div
                  className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/80"
                  data-oid="qwp8mz4"
                >
                  <div className="flex items-center" data-oid="1ren3r7">
                    <div
                      className="mr-2 rounded-full bg-white/20 p-1"
                      data-oid="55f6b5_"
                    >
                      <CheckCircle
                        className="h-3 w-3 text-white"
                        data-oid="cu66c6z"
                      />
                    </div>
                    <span data-oid="903p81o">Weekly insights</span>
                  </div>
                  <div className="flex items-center" data-oid="hc4_x0p">
                    <div
                      className="mr-2 rounded-full bg-white/20 p-1"
                      data-oid="lb_zhlk"
                    >
                      <CheckCircle
                        className="h-3 w-3 text-white"
                        data-oid="8z32ybb"
                      />
                    </div>
                    <span data-oid="d3rffr.">Exclusive strategies</span>
                  </div>
                  <div className="flex items-center" data-oid="2k.7mh7">
                    <div
                      className="mr-2 rounded-full bg-white/20 p-1"
                      data-oid="4fp6hwm"
                    >
                      <CheckCircle
                        className="h-3 w-3 text-white"
                        data-oid="qrg677e"
                      />
                    </div>
                    <span data-oid="i271a1h">Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6"
            data-oid="6vbmmc."
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col items-center" data-oid="bd7lgh9">
              <p className="font-bold text-3xl text-white" data-oid="4xqj03h">
                10k+
              </p>
              <p className="text-sm text-white/70" data-oid="keh23ve">
                Subscribers
              </p>
            </div>
            <div
              className="h-12 w-px self-center bg-white/20"
              data-oid="elprq_o"
            />
            <div className="flex flex-col items-center" data-oid="ys3_:hu">
              <p className="font-bold text-3xl text-white" data-oid="j---lfy">
                4.9/5
              </p>
              <p className="text-sm text-white/70" data-oid="8145ik6">
                Satisfaction
              </p>
            </div>
            <div
              className="h-12 w-px self-center bg-white/20"
              data-oid="y55k3tn"
            />
            <div className="flex flex-col items-center" data-oid="8.1e3uo">
              <p className="font-bold text-3xl text-white" data-oid="ovd70cs">
                Weekly
              </p>
              <p className="text-sm text-white/70" data-oid="ze60auq">
                Updates
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="-bottom-10 -left-10 absolute h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"
        data-oid="0a:tpdn"
      />
      <div
        className="-top-10 -right-10 absolute h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"
        data-oid="d-j9an0"
      />
    </section>
  );
}
