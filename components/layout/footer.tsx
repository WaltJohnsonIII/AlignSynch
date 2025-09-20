import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAppName } from "@/lib/config";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100 pt-16 pb-8 sm:px-4 xl:px-8 dark:from-slate-950 dark:to-slate-900"
      data-oid="y0hsvp4"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"
        data-oid="5ohqrr6"
      />
      <div
        className="-top-32 -right-32 absolute h-64 w-64 rounded-full bg-indigo-100 opacity-70 blur-3xl dark:bg-indigo-900/20"
        data-oid="0iw34ea"
      />
      <div
        className="-bottom-32 -left-32 absolute h-64 w-64 rounded-full bg-purple-100 opacity-70 blur-3xl dark:bg-purple-900/20"
        data-oid="4pmj8:f"
      />

      <div className="container relative z-10 mx-auto px-4" data-oid="9z_46z-">
        {/* Main footer content */}
        <div
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12"
          data-oid="f:c.j.t"
        >
          {/* Company info */}
          <div className="space-y-6 lg:col-span-4" data-oid="0onm0dk">
            <div className="flex items-center space-x-2" data-oid="b1o.wjl">
              <div
                className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 p-2"
                data-oid="m4uf1je"
              >
                <BookOpen className="h-6 w-6 text-white" data-oid="ktg1b.s" />
              </div>
              <span
                className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text font-bold text-2xl text-transparent"
                data-oid="kmw643e"
              >
                {getAppName()}
              </span>
            </div>
            <p
              className="max-w-xs text-slate-600 leading-relaxed dark:text-slate-400"
              data-oid=":4mpbz7"
            >
              Create engaging quizzes, challenge others, and earn rewards for
              your knowledge. Join our community of quiz creators and players
              today.
            </p>

            <div className="flex space-x-3" data-oid="kb:4syr">
              <Link aria-label="Facebook" data-oid="fw7blu7" href="#">
                <div
                  className="hover:-translate-y-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                  data-oid="esl7sah"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-600"
                    data-oid="pn4xj0m"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      data-oid="xir.aog"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
              <Link aria-label="Twitter" data-oid="y5af41-" href="#">
                <div
                  className="hover:-translate-y-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                  data-oid="b_q9gnn"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-400"
                    data-oid="e.ab31:"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      data-oid="18y:16e"
                    />
                  </svg>
                </div>
              </Link>
              <Link aria-label="Instagram" data-oid="mdhty23" href="#">
                <div
                  className="hover:-translate-y-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                  data-oid="8lo-.s3"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-pink-500"
                    data-oid="etul4g_"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      data-oid="hu4_d8j"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
              <Link aria-label="YouTube" data-oid="rg8nx7k" href="#">
                <div
                  className="hover:-translate-y-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                  data-oid="pbgn8tn"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-red-500"
                    data-oid="newau2b"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      data-oid="c7qfkea"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8" data-oid="1_7v.jt">
            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
              data-oid="d8is7je"
            >
              {/* Quick Links */}
              <div className="space-y-5" data-oid="j39xvkw">
                <h3
                  className="relative inline-block font-bold text-base"
                  data-oid="uu-l6o-"
                >
                  Quick Links
                  <span
                    className="-bottom-1 absolute left-0 h-0.5 w-12 bg-gradient-to-r from-purple-500 to-indigo-500"
                    data-oid="mg6u5yx"
                  />
                </h3>
                <ul className="space-y-3" data-oid="lion:26">
                  <li data-oid="2osyb_5">
                    <Link
                      className="group flex items-center text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                      data-oid="tfv:_03"
                      href="/dashboard"
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500 dark:bg-slate-700"
                        data-oid="pjojt4i"
                      />
                      Dashboard
                    </Link>
                  </li>
                  <li data-oid="1s2jdxf">
                    <Link
                      className="group flex items-center text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                      data-oid="5e:0soo"
                      href="/create/editor"
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500 dark:bg-slate-700"
                        data-oid="ro.jwte"
                      />
                      Create Quiz
                    </Link>
                  </li>
                  <li data-oid="czv1yhh">
                    <Link
                      className="group flex items-center text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                      data-oid="u9r2sk0"
                      href="/leaderboard"
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500 dark:bg-slate-700"
                        data-oid="i0oa3.f"
                      />
                      Leaderboard
                    </Link>
                  </li>
                  <li data-oid=":5d6ltw">
                    <Link
                      className="group flex items-center text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                      data-oid="coix0h-"
                      href="/affiliate"
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500 dark:bg-slate-700"
                        data-oid="l5u-bmv"
                      />
                      Affiliate Program
                    </Link>
                  </li>
                  <li data-oid="b.0hnfh">
                    <Link
                      className="group flex items-center text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                      data-oid="qxs-c5."
                      href="/pricing"
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500 dark:bg-slate-700"
                        data-oid="46vmioc"
                      />
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div className="space-y-5" data-oid="9vss4ec">
                <h3
                  className="relative inline-block font-bold text-base"
                  data-oid="cpfgkc3"
                >
                  Categories
                  <span
                    className="-bottom-1 absolute left-0 h-0.5 w-12 bg-gradient-to-r from-purple-500 to-indigo-500"
                    data-oid="ttiq_fz"
                  />
                </h3>
                <ul className="space-y-3" data-oid="l3i_-rw">
                  <li data-oid="hy8kp1e">
                    <Link
                      className="group flex items-center text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                      data-oid="9ttu0ij"
                      href="#"
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500 dark:bg-slate-700"
                        data-oid=".bve14i"
                      />
                      Science
                    </Link>
                  </li>
                  <li data-oid="pethuoc">
                    <Link
                      className="group flex items-center text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                      data-oid="3.zb55_"
                      href="#"
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500 dark:bg-slate-700"
                        data-oid="vsb6ur1"
                      />
                      History
                    </Link>
                  </li>
                  <li data-oid="tvmhx1.">
                    <Link
                      className="group flex items-center text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                      data-oid="cucbzhg"
                      href="#"
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500 dark:bg-slate-700"
                        data-oid="-b9fm29"
                      />
                      Mathematics
                    </Link>
                  </li>
                  <li data-oid="dq9y_-u">
                    <Link
                      className="group flex items-center text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                      data-oid="fpfjus."
                      href="#"
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500 dark:bg-slate-700"
                        data-oid="r.h99s5"
                      />
                      Literature
                    </Link>
                  </li>
                  <li data-oid="wfz78dk">
                    <Link
                      className="group flex items-center text-slate-600 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                      data-oid="92ugno2"
                      href="#"
                    >
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500 dark:bg-slate-700"
                        data-oid="22u3ne_"
                      />
                      Sports
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-5" data-oid=":ag:8-e">
                <h3
                  className="relative inline-block font-bold text-base"
                  data-oid="zd6v_o_"
                >
                  Contact
                  <span
                    className="-bottom-1 absolute left-0 h-0.5 w-12 bg-gradient-to-r from-purple-500 to-indigo-500"
                    data-oid="vljs9fc"
                  />
                </h3>
                <ul className="space-y-4" data-oid="efd0wdk">
                  <li className="flex items-start space-x-3" data-oid="7599:v3">
                    <div
                      className="flex-shrink-0 rounded-full border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                      data-oid="kuwxkep"
                    >
                      <MapPin
                        className="h-4 w-4 text-purple-500"
                        data-oid="pzrgcw0"
                      />
                    </div>
                    <span
                      className="text-slate-600 dark:text-slate-400"
                      data-oid="_vry3c3"
                    >
                      123 Quiz Street, Knowledge City, QZ 12345
                    </span>
                  </li>
                  <li
                    className="flex items-center space-x-3"
                    data-oid="-tqign_"
                  >
                    <div
                      className="flex-shrink-0 rounded-full border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                      data-oid="d90cy.w"
                    >
                      <Phone
                        className="h-4 w-4 text-purple-500"
                        data-oid="hq391:1"
                      />
                    </div>
                    <span
                      className="text-slate-600 dark:text-slate-400"
                      data-oid="cvc_sb."
                    >
                      +1 (555) 123-4567
                    </span>
                  </li>
                  <li
                    className="flex items-center space-x-3"
                    data-oid="t621x0v"
                  >
                    <div
                      className="flex-shrink-0 rounded-full border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                      data-oid="mu55s_k"
                    >
                      <Mail
                        className="h-4 w-4 text-purple-500"
                        data-oid="upvi5d:"
                      />
                    </div>
                    <span
                      className="text-slate-600 dark:text-slate-400"
                      data-oid="bz1x3pt"
                    >
                      support@quizhub.com
                    </span>
                  </li>
                </ul>
                <Button data-oid="km7lozl" variant={"gradient"}>
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div
          className="mt-16 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          data-oid="8338gw:"
        >
          <div
            className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
            data-oid="dj.8gp2"
          >
            <div data-oid=".xd9sdj">
              <h3 className="mb-2 font-bold text-xl" data-oid="c43h3tf">
                Subscribe to our newsletter
              </h3>
              <p
                className="text-slate-600 dark:text-slate-400"
                data-oid="lm5_xhn"
              >
                Get the latest news, updates and quiz tips delivered directly to
                your inbox.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row" data-oid="a3lhm6i">
              <div className="relative flex-1" data-oid="_pzaenx">
                <input
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-purple-400"
                  data-oid="ve8ja35"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <Button data-oid="6x9s9mj" variant={"gradient"}>
                Subscribe
                <ArrowRight className="h-4 w-4" data-oid="_twhrvi" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div
          className="mt-16 border-slate-200 border-t pt-8 dark:border-slate-800"
          data-oid="30nwnup"
        >
          <div
            className="flex flex-col items-center justify-between md:flex-row"
            data-oid="-wjf530"
          >
            <p
              className="text-slate-500 dark:text-slate-400"
              data-oid="rk3.4eh"
            >
              © {new Date().getFullYear()} {getAppName()} . All rights reserved.
            </p>
            <div
              className="mt-4 flex flex-wrap justify-center gap-6 md:mt-0"
              data-oid="ck3gi1x"
            >
              <Link
                className="flex items-center gap-1 text-slate-500 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                data-oid="ot25q.p"
                href="#"
              >
                <span data-oid="_s1vwjg">Privacy Policy</span>
                <ExternalLink className="h-3 w-3" data-oid="ww738zw" />
              </Link>
              <Link
                className="flex items-center gap-1 text-slate-500 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                data-oid="vsza-:2"
                href="#"
              >
                <span data-oid="5w6.4-o">Terms of Service</span>
                <ExternalLink className="h-3 w-3" data-oid="_77j68g" />
              </Link>
              <Link
                className="flex items-center gap-1 text-slate-500 transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                data-oid="26ibrl9"
                href="#"
              >
                <span data-oid="fwn6jsv">Cookie Policy</span>
                <ExternalLink className="h-3 w-3" data-oid="qjsh-gp" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
