import { ArrowRight, Award, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TournamentCta() {
  return (
    <section className="my-10 xl:my-20" data-oid="f_k-4_j">
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl"
        data-oid="rer-q:r"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 h-full w-full" data-oid="nmttikq">
          <div
            className="-top-24 -right-24 absolute h-48 w-48 rounded-full bg-white/10 blur-2xl"
            data-oid="7yt_l6k"
          />
          <div
            className="-left-24 absolute top-1/2 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            data-oid="s349o92"
          />
          <div
            className="-bottom-12 absolute right-1/3 h-36 w-36 rounded-full bg-white/10 blur-2xl"
            data-oid="bvqz4cs"
          />
        </div>

        <div
          className="relative grid items-center gap-8 p-8 md:grid-cols-2 md:p-12"
          data-oid="u5.cofg"
        >
          <div className="space-y-6" data-oid="x0ngj_n">
            <div
              className="inline-block rounded-lg bg-white/10 px-4 py-2 font-medium text-sm text-white backdrop-blur-sm"
              data-oid="8usg08m"
            >
              Ready for the challenge?
            </div>

            <h2
              className="font-bold text-3xl text-white leading-tight md:text-4xl"
              data-oid="esmkngo"
            >
              Join the ultimate{" "}
              <span className="text-yellow-200" data-oid=".x:u:a0">
                quiz competition!
              </span>
            </h2>

            <p className="max-w-md text-indigo-100 text-lg" data-oid="9haufsg">
              Compete with players from around the world, showcase your
              knowledge, and win amazing prizes in our tournaments.
            </p>

            <div className="space-y-4" data-oid="4bnoipi">
              <div className="flex items-start space-x-3" data-oid="22cqvqb">
                <div className="mt-1 flex-shrink-0" data-oid="dqxji19">
                  <div
                    className="rounded-full bg-white/20 p-1.5"
                    data-oid="tmbcu9a"
                  >
                    <Trophy
                      className="h-4 w-4 text-yellow-200"
                      data-oid="i9isvt:"
                    />
                  </div>
                </div>
                <p className="text-indigo-100" data-oid="9b52h0_">
                  Win exclusive prizes and climb the global leaderboard
                </p>
              </div>

              <div className="flex items-start space-x-3" data-oid="aheeotb">
                <div className="mt-1 flex-shrink-0" data-oid="sny58nx">
                  <div
                    className="rounded-full bg-white/20 p-1.5"
                    data-oid="ufmq7mk"
                  >
                    <Users
                      className="h-4 w-4 text-yellow-200"
                      data-oid=".-k7wu4"
                    />
                  </div>
                </div>
                <p className="text-indigo-100" data-oid="3f6d:to">
                  Connect with a community of quiz enthusiasts
                </p>
              </div>

              <div className="flex items-start space-x-3" data-oid="q-2kios">
                <div className="mt-1 flex-shrink-0" data-oid="rqafcuz">
                  <div
                    className="rounded-full bg-white/20 p-1.5"
                    data-oid="bmmf-1w"
                  >
                    <Award
                      className="h-4 w-4 text-yellow-200"
                      data-oid="6bz.ae9"
                    />
                  </div>
                </div>
                <p className="text-indigo-100" data-oid="5q_s1g-">
                  Earn special badges and achievements
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2" data-oid="86vo0zu">
              <Button
                asChild
                className="bg-white text-indigo-600 hover:bg-indigo-50"
                data-oid="bv2p4ux"
                size="lg"
              >
                <Link data-oid="2v:259q" href="/tournaments/register">
                  Register Now{" "}
                  <ArrowRight className="ml-2 h-4 w-4" data-oid="5yl2lqo" />
                </Link>
              </Button>

              <Button
                asChild
                data-oid="z0o3qx8"
                size="lg"
                variant={"secondary"}
              >
                <Link data-oid="ztm473x" href="/tournaments/create">
                  Host a Tournament
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block" data-oid="0q8r7w0">
            <div
              className="absolute inset-0 flex items-center justify-center"
              data-oid="fe57a6w"
            >
              <div
                className="flex h-64 w-64 animate-pulse-slow items-center justify-center rounded-full bg-white/5 backdrop-blur-sm"
                data-oid=":2lhgvl"
              >
                <div
                  className="flex h-48 w-48 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
                  data-oid="8w7_llv"
                >
                  <div
                    className="flex h-32 w-32 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                    data-oid="x98p3ex"
                  >
                    <div
                      className="h-16 w-16 rounded-full bg-white/30 backdrop-blur-sm"
                      data-oid="m__txx7"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy illustration */}
            <div className="relative z-10" data-oid="b83eopb">
              <div className="relative mx-auto h-40 w-40" data-oid="-m-8tb6">
                {/* Trophy cup */}
                <div
                  className="-translate-x-1/2 absolute top-0 left-1/2 h-24 w-24 transform rounded-t-full bg-yellow-300"
                  data-oid="ilnxpef"
                >
                  <div
                    className="-translate-x-1/2 absolute top-2 left-1/2 h-20 w-20 transform rounded-t-full bg-yellow-400"
                    data-oid="q12cg.6"
                  >
                    <div
                      className="-translate-x-1/2 absolute top-2 left-1/2 h-16 w-16 transform rounded-t-full bg-gradient-to-b from-yellow-200 to-yellow-400"
                      data-oid="qdkvur."
                    />
                  </div>
                </div>

                {/* Trophy handles */}
                <div
                  className="-translate-x-1/2 -ml-16 absolute top-8 left-1/2 h-12 w-8 transform rounded-full border-4 border-yellow-300"
                  data-oid="d7bw-b_"
                />
                <div
                  className="-translate-x-1/2 absolute top-8 left-1/2 ml-8 h-12 w-8 transform rounded-full border-4 border-yellow-300"
                  data-oid="4w36myq"
                />

                {/* Trophy stem */}
                <div
                  className="-translate-x-1/2 absolute top-24 left-1/2 h-12 w-6 transform bg-yellow-300"
                  data-oid="y9gwngw"
                />

                {/* Trophy base */}
                <div
                  className="-translate-x-1/2 absolute top-36 left-1/2 h-4 w-20 transform rounded bg-yellow-400"
                  data-oid="ch20g1:"
                />
                <div
                  className="-translate-x-1/2 absolute top-40 left-1/2 h-4 w-24 transform rounded bg-yellow-300"
                  data-oid="5732p5d"
                />

                {/* Sparkles */}
                <div
                  className="absolute top-0 left-0 h-4 w-4 animate-ping-slow rounded-full bg-white opacity-75"
                  data-oid="git-2.w"
                />
                <div
                  className="animation-delay-300 absolute top-8 right-0 h-3 w-3 animate-ping-slow rounded-full bg-white opacity-75"
                  data-oid="v7r65fv"
                />
                <div
                  className="animation-delay-700 absolute bottom-0 left-8 h-2 w-2 animate-ping-slow rounded-full bg-white opacity-75"
                  data-oid="-ukchn4"
                />
              </div>

              {/* Podium */}
              <div
                className="relative mx-auto mt-8 flex items-end justify-center space-x-2"
                data-oid="o.9:rp:"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-t-md bg-indigo-300 font-bold text-indigo-800 text-lg"
                  data-oid="n01ht89"
                >
                  2
                </div>
                <div
                  className="flex h-24 w-16 items-center justify-center rounded-t-md bg-yellow-300 font-bold text-lg text-yellow-800"
                  data-oid="n0fnm44"
                >
                  1
                </div>
                <div
                  className="flex h-12 w-16 items-center justify-center rounded-t-md bg-purple-300 font-bold text-lg text-purple-800"
                  data-oid="xgw4e68"
                >
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
