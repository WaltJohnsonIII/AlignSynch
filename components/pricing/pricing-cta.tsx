import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingCta() {
  return (
    <section className="py-20" data-oid="mb8mqzr">
      <div className="container mx-auto px-4" data-oid="-5q12ls">
        <div
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl"
          data-oid=":nif8va"
        >
          <div className="grid md:grid-cols-2" data-oid="oi81m0h">
            <div className="p-8 md:p-12" data-oid="80kewe:">
              <h2
                className="mb-4 font-bold text-3xl text-white"
                data-oid="4l0d:93"
              >
                Ready to create amazing quizzes?
              </h2>
              <p className="mb-6 text-purple-100" data-oid="doe5usu">
                Join thousands of educators, content creators, and businesses
                who are engaging their audience with interactive quizzes.
              </p>

              <ul className="mb-8 space-y-3" data-oid="fsp0x18">
                {[
                  "No credit card required to start",
                  "14-day free trial on all paid plans",
                  "Cancel anytime, no questions asked",
                  "Dedicated support to help you succeed",
                ].map((item, i) => (
                  <li
                    className="flex items-center text-white"
                    data-oid="wc5qym1"
                    key={i}
                  >
                    <Check
                      className="mr-2 h-5 w-5 text-purple-200"
                      data-oid="4zwc:ir"
                    />

                    <span data-oid="d2wa-au">{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className="flex flex-col gap-4 sm:flex-row"
                data-oid="yp.s6s8"
              >
                <Button
                  className="border-0 bg-white text-purple-600 hover:bg-purple-50"
                  data-oid="rrvgp9k"
                  size="lg"
                >
                  Get Started Free
                </Button>
                <Button
                  className="border-white hover:bg-white/10"
                  data-oid="frch6o9"
                  size="lg"
                  variant="outline"
                >
                  View Demo{" "}
                  <ArrowRight className="ml-2 h-4 w-4" data-oid="pecbt7q" />
                </Button>
              </div>
            </div>

            <div className="relative hidden md:block" data-oid="-:zlc2a">
              <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm"
                data-oid="c-8i36k"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                data-oid="j.lh--z"
              >
                <div
                  className="flex aspect-square w-3/4 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 backdrop-blur-md"
                  data-oid="jy_qwk8"
                >
                  <div
                    className="flex aspect-square w-2/3 items-center justify-center rounded-full bg-gradient-to-br from-indigo-300/40 to-purple-300/40 backdrop-blur-md"
                    data-oid="8l2c6s2"
                  >
                    <div
                      className="aspect-square w-1/2 rounded-full bg-white/30 backdrop-blur-md"
                      data-oid="ifitnm_"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
