import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-xl bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat p-6 text-white md:p-10 xl:py-14"
      data-oid="quohl9j"
    >
      <div
        className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        data-oid="s:wboay"
      >
        <div className="max-w-lg space-y-4" data-oid="6rtsuyc">
          <h2
            className="font-bold text-3xl tracking-tight md:text-4xl xl:text-5xl xl:leading-tight"
            data-oid="gq.ol5h"
          >
            Your Quiz Adventure Starts Here: <br data-oid="8dhnt3:" /> Play,
            Share, Earn!
          </h2>
          <p className="text-lg text-white/80" data-oid="luwr01p">
            Build engaging quizzes, challenge others, and earn rewards for your
            knowledge.
          </p>
          <div className="flex flex-wrap gap-4" data-oid="9g8q4q6">
            <Button
              asChild
              className="bg-white text-indigo-600 duration-300 hover:bg-white/90"
              data-oid="m88wfad"
              size="lg"
            >
              <Link data-oid=".ggolnz" href="/create/editor">
                Create Quiz
              </Link>
            </Button>
            <Button
              asChild
              className="bg-indigo-600 text-white duration-300 hover:bg-indigo-700"
              data-oid="kokz5xi"
              size="lg"
            >
              <Link data-oid=":lv2yyh" href="/battle">
                Join Contest
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="-bottom-16 -right-16 absolute h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl"
        data-oid="wabhe1i"
      />
      <div
        className="-left-16 -top-16 absolute h-64 w-64 rounded-full bg-purple-400/20 blur-3xl"
        data-oid=".-0n5d0"
      />
    </section>
  );
}
