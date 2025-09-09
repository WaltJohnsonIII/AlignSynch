"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function TournamentHowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Calendar className="h-5 w-5" data-oid="yx2i3ps" />,
      title: "Register",
      description:
        "Browse upcoming tournaments and register for those that match your interests and skill level.",
    },
    {
      number: "02",
      icon: <Users className="h-5 w-5" data-oid="jjwvomy" />,
      title: "Prepare",
      description:
        "Study the tournament topic, practice with similar quizzes, and review the rules.",
    },
    {
      number: "03",
      icon: <CheckCircle className="h-5 w-5" data-oid="k:05.-m" />,
      title: "Compete",
      description:
        "Participate in multiple rounds of challenging quizzes against players from around the world.",
    },
    {
      number: "04",
      icon: <Trophy className="h-5 w-5" data-oid="xxbog9:" />,
      title: "Win",
      description:
        "Top performers win prizes, badges, and recognition on the global leaderboard.",
    },
  ];

  return (
    <section className="bg-background py-10 xl:py-16" data-oid="g_e8pdm">
      <div className="container mx-auto px-4" data-oid=".tu7lek">
        <div className="mb-12 text-center" data-oid="m45yt73">
          <h2 className="mb-4 font-bold text-3xl" data-oid="qlpgln.">
            How Tournaments Work
          </h2>
          <p
            className="mx-auto max-w-2xl text-muted-foreground"
            data-oid="vujxveq"
          >
            Our quiz tournaments offer a fun and competitive way to test your
            knowledge and win prizes.
          </p>
        </div>

        <div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          data-oid="rsrqz20"
        >
          {steps.map((step, index) => (
            <motion.div
              data-oid="qf:_31u"
              initial={{ opacity: 0, y: 20 }}
              key={index}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card
                className="h-full overflow-hidden border border-border transition-colors duration-300 hover:border-primary/20"
                data-oid="5i_4xfl"
              >
                <CardContent className="p-6 xl:pt-6" data-oid="qbgbr9d">
                  <div
                    className="mb-6 flex items-center justify-between"
                    data-oid="fg4heo8"
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
                      data-oid="lgh-alg"
                    >
                      {step.icon}
                    </div>
                    <span
                      className="font-light text-2xl text-muted-foreground/50"
                      data-oid="f.pm_24"
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mb-3 font-semibold text-xl" data-oid="4f7iza:">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground" data-oid="me4ark4">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center" data-oid="l1rg.vx">
          <p className="mb-4 text-lg" data-oid="qeuq2_5">
            Ready to test your knowledge?
          </p>
          <Button className="px-6" data-oid="um0sq:d" size="lg">
            Join a Tournament Today
          </Button>
        </div>
      </div>
    </section>
  );
}
