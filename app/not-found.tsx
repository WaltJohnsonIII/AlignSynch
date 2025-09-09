"use client";

import {
  ArrowLeft,
  BookOpen,
  Brain,
  Home,
  Search,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  const [floatingElements, setFloatingElements] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
      data-oid="7owyc.d"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0" data-oid="3aiv0_2">
        {floatingElements.map((element) => (
          <div
            className="absolute animate-pulse"
            data-oid="a678rc:"
            key={element.id}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
            }}
          >
            {element.id % 3 === 0 && (
              <Brain
                className="h-6 w-6 text-purple-300 opacity-20"
                data-oid="9y39zq8"
              />
            )}
            {element.id % 3 === 1 && (
              <Zap
                className="h-4 w-4 text-blue-300 opacity-20"
                data-oid="zh7zo9:"
              />
            )}
            {element.id % 3 === 2 && (
              <Star
                className="h-5 w-5 text-indigo-300 opacity-20"
                data-oid="v-3m5nf"
              />
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 flex min-h-screen items-center justify-center p-4"
        data-oid="ml3qe5d"
      >
        <div className="mx-auto max-w-2xl text-center" data-oid="lypk5i8">
          {/* 404 Animation */}
          <div className="mb-8" data-oid="wrpkq-t">
            <div className="relative" data-oid="okswc2m">
              <h1
                className="animate-pulse bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-bold text-9xl text-transparent md:text-[12rem]"
                data-oid="rjs:-kp"
              >
                404
              </h1>
              <div
                className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 transform"
                data-oid="-iqgd8o"
              >
                <div
                  className="flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  data-oid="te2ajms"
                >
                  <BookOpen
                    className="h-12 w-12 text-white"
                    data-oid="5.wl4rm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <Card
            className="mb-8 border-white/20 bg-white/10 backdrop-blur-lg xl:pt-6"
            data-oid="sue99ra"
          >
            <CardContent className="p-8" data-oid="n.04.ij">
              <h2
                className="mb-4 font-bold text-3xl text-white md:text-4xl"
                data-oid="scfidxd"
              >
                Oops! Quiz Not Found
              </h2>
              <p
                className="mb-6 text-gray-200 text-lg leading-relaxed"
                data-oid="3s6gxki"
              >
                Looks like this page decided to play hide and seek! 🎯
                <br data-oid="xg9cdjd" />
                {"Don't worry, even the best quiz masters get lost sometimes."}
              </p>

              {/* Fun Quiz Fact */}
              <div
                className="mb-6 rounded-lg border border-white/10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4"
                data-oid="wpwp67a"
              >
                <div
                  className="mb-2 flex items-center justify-center"
                  data-oid="c:sm0ag"
                >
                  <Trophy
                    className="mr-2 h-5 w-5 text-yellow-400"
                    data-oid="-vm_udt"
                  />

                  <span
                    className="font-semibold text-sm text-yellow-400"
                    data-oid="77owu.m"
                  >
                    Fun Quiz Fact
                  </span>
                </div>
                <p className="text-gray-200 text-sm" data-oid="84pjbu2">
                  The HTTP 404 error was named after room 404 at CERN, where the
                  original web servers were located!
                </p>
              </div>

              {/* Action Buttons */}
              <div
                className="flex flex-col justify-center gap-4 sm:flex-row"
                data-oid="5mt1oy:"
              >
                <Link data-oid="kra0h0h" href="/">
                  <Button data-oid="ccmnyuc" variant={"default"}>
                    <Home className="mr-2 h-5 w-5" data-oid="d:rrz5d" />
                    Back to Home
                  </Button>
                </Link>

                <Button
                  data-oid="ghh5tua"
                  onClick={() => window.history.back()}
                  variant="outline"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" data-oid="3r8_l7z" />
                  Go Back
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search Suggestion */}
          <div className="text-center" data-oid="e5vf27f">
            <p className="mb-4 text-gray-300" data-oid="zpk:vjr">
              Looking for something specific?
            </p>
            <div
              className="flex justify-center space-x-4 text-sm"
              data-oid="rxfkim."
            >
              <Link
                className="flex items-center text-purple-400 transition-colors hover:text-purple-300"
                data-oid="0emen0y"
                href="/explore"
              >
                <Search className="mr-1 h-4 w-4" data-oid="qpegs87" />
                Browse Quizzes
              </Link>
              <Link
                className="flex items-center text-blue-400 transition-colors hover:text-blue-300"
                data-oid="jymfjl_"
                href="/categories"
              >
                <Brain className="mr-1 h-4 w-4" data-oid="_-u:0nm" />
                Categories
              </Link>
              <Link
                className="flex items-center text-yellow-400 transition-colors hover:text-yellow-300"
                data-oid="y1p_8_8"
                href="/leaderboard"
              >
                <Trophy className="mr-1 h-4 w-4" data-oid=":2kmn0x" />
                Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute right-0 bottom-0 left-0" data-oid="du3xal7">
        <svg
          className="h-20 w-full fill-white/5"
          data-oid="4uidq8b"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            data-oid="ncgqeec"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            data-oid="e1-g383"
            opacity=".5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            data-oid="j6mi1s1"
          />
        </svg>
      </div>
    </div>
  );
}
