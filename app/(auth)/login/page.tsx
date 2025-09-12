"use client";

import { BookOpen, Trophy } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen" data-oid="u03.kxi">
      {/* Left Side - Image */}
      <div
        className="relative hidden justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 lg:flex lg:w-1/2"
        data-oid="j9-66.c"
      >
        <div className="absolute inset-0 bg-black/20" data-oid="iax1yt4" />
        <div
          className="relative z-10 flex flex-col items-center justify-center p-12 text-white"
          data-oid="6ifbfsw"
        >
          <div className="mx-auto mb-8 max-w-md" data-oid="aygifi9">
            <div
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
              data-oid="4.0akl1"
            >
              <BookOpen className="h-10 w-10 text-white" data-oid="vnlns:x" />
            </div>
            <h2 className="mb-4 font-bold text-4xl" data-oid="_vu37kn">
              Welcome to QuizHub
            </h2>
            <p
              className="text-white/90 text-xl leading-relaxed"
              data-oid="bywveu0"
            >
              Challenge your mind with thousands of engaging quizzes across
              multiple categories
            </p>
          </div>
          <div
            className="grid w-full max-w-md grid-cols-2 gap-4"
            data-oid="504_bat"
          >
            <div
              className="rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm"
              data-oid="r_kyseh"
            >
              <Trophy
                className="mx-auto mb-2 h-8 w-8 text-yellow-400"
                data-oid="3buowiv"
              />

              <div className="font-bold text-2xl" data-oid="pzy_8a4">
                10K+
              </div>
              <div className="text-sm text-white/80" data-oid="tsotc6_">
                Active Players
              </div>
            </div>
            <div
              className="rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm"
              data-oid="eyr_k-q"
            >
              <BookOpen
                className="mx-auto mb-2 h-8 w-8 text-green-400"
                data-oid="9cjlg41"
              />

              <div className="font-bold text-2xl" data-oid="8xl5pav">
                500+
              </div>
              <div className="text-sm text-white/80" data-oid="xxxtbpw">
                Quiz Categories
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div
          className="absolute top-20 right-20 h-32 w-32 rounded-full bg-white/10 blur-xl"
          data-oid="hdwe3s0"
        />
        <div
          className="absolute bottom-20 left-20 h-24 w-24 rounded-full bg-white/10 blur-xl"
          data-oid="2dvd5_r"
        />
      </div>

      {/* Right Side - Login Form */}
      <div
        className="flex w-full items-center justify-center p-8 lg:w-1/2"
        data-oid="w5n-:zn"
      >
        <Card className="w-full max-w-md border-0 shadow-xl" data-oid="cyb8245">
          <CardHeader className="pb-8 text-center" data-oid="4g40b60">
            <div
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 lg:hidden"
              data-oid="kkk0t5q"
            >
              <BookOpen className="h-6 w-6 text-white" data-oid="d8gtfy9" />
            </div>
            <CardTitle className="font-bold text-3xl" data-oid="7592_ym">
              Welcome Back
            </CardTitle>
            <CardDescription data-oid="3n7cglh">
              Sign in to continue your quiz journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6" data-oid="2c07hcd">
            <div className="space-y-2" data-oid="jwjilft">
              <Label
                className="font-medium text-sm"
                data-oid="68hor4u"
                htmlFor="email"
              >
                Email
              </Label>
              <Input
                className="h-12 border-gray-300"
                data-oid="iz:.r2z"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="space-y-2" data-oid="wbj7ev2">
              <Label
                className="font-medium text-sm"
                data-oid="l71p9v:"
                htmlFor="password"
              >
                Password
              </Label>
              <Input
                className="h-12 border-gray-300"
                data-oid="b.zkhs1"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div
              className="flex items-center justify-between"
              data-oid="by1em4x"
            >
              <div className="flex items-center space-x-2" data-oid="3_3etdb">
                <Checkbox data-oid="_wv98zh" id="remember" />
                <Label
                  className="text-sm"
                  data-oid="kh-m2g9"
                  htmlFor="remember"
                >
                  Remember me
                </Label>
              </div>
              <Link
                className="font-medium text-indigo-600 text-sm"
                data-oid="x367ugo"
                href="#"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              className="w-full"
              data-oid="z3z3nul"
              onClick={() => router.push("/")}
            >
              Sign In
            </Button>
            <div className="text-center text-sm" data-oid="oqhlxc1">
              {"Don't have an account? "}
              <button
                type="button"
                className="text-indigo-600"
                data-oid="f9vzyr_"
                onClick={() => router.push("/register")}
              >
                Sign up here
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
