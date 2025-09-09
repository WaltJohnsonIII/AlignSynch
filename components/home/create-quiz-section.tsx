"use client";
import Image from "next/image";
import Link from "next/link";
import Illustration from "@/public/quiz-ai-illustration.png";
export function CreateQuizSection() {
  return (
    <section className="space-y-6" data-oid=":8dl6n5">
      <h2 className="font-bold text-2xl tracking-tight" data-oid=".rzexb3">
        Create a Quiz
      </h2>

      <div className="grid gap-6 md:grid-cols-2" data-oid="9trqoz.">
        {/* Manual Quiz Editor Card */}
        <div
          className="relative overflow-hidden rounded-xl p-8"
          data-oid="t_73ueu"
        >
          <div
            className="flex h-full flex-col justify-between"
            data-oid="fmjze.j"
          >
            <div className="mb-6" data-oid="0r5vtw-">
              <Image
                alt="Quiz Creator"
                className="mb-6 h-32 w-32"
                data-oid="uxr-ggl"
                src={Illustration}
              />

              <h3 className="mb-2 font-bold text-3xl" data-oid="5u9upev">
                Create a quiz
              </h3>
              <p data-oid=".wv-gbk">Play for free with 300 participants</p>
            </div>

            <Link data-oid="jyd-pv:" href="/create/editor">
              <button
                className="rounded-full bg-emerald-500 px-8 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
                data-oid=".s9kqp0"
              >
                Quiz editor
              </button>
            </Link>
          </div>
        </div>

        {/* AI Quiz Generator Card */}
        <div
          className="relative overflow-hidden rounded-xl p-8"
          data-oid="u0m1qyq"
        >
          <div
            className="flex h-full flex-col justify-between"
            data-oid="z080uw9"
          >
            <div className="mb-6" data-oid="_hh-sq7">
              <Image
                alt="AI Quiz Generator"
                className="mb-6 h-32 w-32"
                data-oid="hkn.76z"
                src="/quiz-ai-illustration.png"
              />

              <h3 className="mb-2 font-bold text-3xl" data-oid=".9fe.hs">
                A.I.
              </h3>
              <p data-oid="r5:s5b0">Generate a quiz from any subject or pdf</p>
            </div>

            <Link data-oid="3p7:gtk" href="/create/generator">
              <button
                className="rounded-full bg-sky-400 px-8 py-3 font-medium text-white transition-colors hover:bg-sky-500"
                data-oid="pz7.k.a"
              >
                Quiz generator
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
