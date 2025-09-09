import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AffiliateCta() {
  return (
    <section
      className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white"
      data-oid="ny0gkmu"
    >
      <div className="container mx-auto px-4" data-oid="sy.v0r_">
        <div className="mx-auto max-w-3xl text-center" data-oid="tm-046z">
          <h2
            className="mb-6 font-bold text-3xl md:text-4xl"
            data-oid="1jh4nz3"
          >
            Ready to Start Earning?
          </h2>
          <p
            className="mx-auto mb-8 max-w-2xl text-lg text-purple-100"
            data-oid="2xdwgtq"
          >
            Join thousands of successful affiliates who are earning passive
            income by sharing QuizHub with their audience. It only takes 2
            minutes to get started.
          </p>
          <div
            className="flex flex-col justify-center gap-4 sm:flex-row"
            data-oid="64u08dh"
          >
            <Button
              className="border-0 bg-white text-purple-600 shadow-lg transition-all duration-200 hover:bg-purple-50 hover:shadow-xl"
              data-oid="2jollx-"
              size="lg"
            >
              Join Now
            </Button>
            <Button
              className="border-white text-white hover:bg-white/10 hover:text-white"
              data-oid="arj7rk2"
              size="lg"
              variant="outline"
            >
              Learn More{" "}
              <ArrowRight className="ml-2 h-4 w-4" data-oid="mw0lubi" />
            </Button>
          </div>
          <p className="mt-8 text-purple-200 text-sm" data-oid="_5n8fov">
            Have questions? Contact our affiliate team at{" "}
            <a
              className="underline hover:text-white"
              data-oid="mtmfnig"
              href="mailto:affiliates@quizhub.com"
            >
              affiliates@quizhub.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
