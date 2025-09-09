"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  Gift,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ResourcesAndReferral() {
  const [copied, setCopied] = useState(false);
  const referralCode = "QUIZ2024FRIEND";
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollCards = (direction: "left" | "right") => {
    if (!cardsRef.current) return;
    const scrollAmount = direction === "left" ? -280 : 280;
    cardsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Quiz creator tips data
  const creatorTips = [
    {
      id: 1,
      title: "How to create high-converting quizzes",
      icon: (
        <TrendingUp className="h-5 w-5 text-purple-500" data-oid="e5b-qd-" />
      ),

      description:
        "Learn the psychology behind quizzes that engage users and drive conversions.",
    },
    {
      id: 2,
      title: "Top quiz formats that boost earnings",
      icon: (
        <DollarSign className="h-5 w-5 text-green-500" data-oid="-gd1pgt" />
      ),

      description:
        "Discover the most profitable quiz formats and how to implement them effectively.",
    },
    {
      id: 3,
      title: "Writing questions that keep players coming back",
      icon: <Lightbulb className="h-5 w-5 text-amber-500" data-oid="0-s03zv" />,
      description:
        "Craft engaging questions that challenge players and encourage repeat participation.",
    },
    {
      id: 4,
      title: "Quiz design best practices",
      icon: <Lightbulb className="h-5 w-5 text-blue-500" data-oid="jlxjfuo" />,
      description:
        "Learn visual design tips to make your quizzes stand out and improve completion rates.",
    },
    {
      id: 5,
      title: "Optimizing quiz length for maximum engagement",
      icon: <Clock className="h-5 w-5 text-indigo-500" data-oid="zw:5qa5" />,
      description:
        "Find the sweet spot for quiz length to keep players engaged without dropping off.",
    },
    {
      id: 6,
      title: "Effective strategies for promoting your quiz",
      icon: <Gift className="h-5 w-5 text-pink-500" data-oid="d71qzgs" />,
      description:
        "Learn how to market your quizzes and reach a wider audience.",
    },
  ];

  return (
    <section
      className="bg-white py-10 xl:py-16 dark:bg-slate-950"
      data-oid="pd7ppk4"
    >
      <div className="container mx-auto xl:px-4" data-oid="oxwhw4u">
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-12"
          data-oid="3tnlbtb"
        >
          {/* Referral Program CTA - 5 columns */}
          <div className="md:col-span-5" data-oid="qspwxfz">
            <Card
              className="h-full overflow-hidden border-0 bg-[url('/refer-bg.png')] shadow-md"
              data-oid="8pxslmu"
            >
              <CardContent className="h-full p-6 xl:pt-6" data-oid="6t97a3j">
                <div className="flex h-full flex-col" data-oid="2k43j80">
                  <div
                    className="mb-4 flex items-start justify-between"
                    data-oid="e1sg2:n"
                  >
                    <div data-oid="0g5bnig">
                      <h2
                        className="font-bold text-2xl text-slate-50 xl:text-4xl"
                        data-oid="tiw.:ma"
                      >
                        Refer & Earn
                      </h2>
                      <p
                        className="text-slate-100 xl:text-lg"
                        data-oid="s:2duev"
                      >
                        Invite friends and earn bonus rewards!
                      </p>
                    </div>
                    <Badge
                      className="bg-amber-500 hover:bg-amber-600"
                      data-oid="0yyyiky"
                    >
                      Earn up to $10
                    </Badge>
                  </div>

                  <div
                    className="flex h-full flex-1 items-end justify-between"
                    data-oid="mnpitag"
                  >
                    <Button
                      className="w-full"
                      data-oid="mxslu08"
                      variant={"outline"}
                    >
                      <Gift className="mr-2 h-4 w-4" data-oid="cwa_8fi" />
                      Invite Friends
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quiz Creator Tips - 7 columns */}
          <div className="md:col-span-7" data-oid="vmi921q">
            <div className="flex h-full flex-col" data-oid="2dn9d8g">
              <div
                className="mb-6 flex flex-wrap items-center justify-between gap-3"
                data-oid="zn0ustk"
              >
                <div data-oid="pg.5884">
                  <h2
                    className="font-bold text-2xl text-slate-800 dark:text-slate-200"
                    data-oid="jbieqse"
                  >
                    Quiz Creator Tips
                  </h2>
                  <p
                    className="text-slate-600 dark:text-slate-400"
                    data-oid="yg0sm1m"
                  >
                    Grow faster with expert advice
                  </p>
                </div>
                <div className="flex items-center gap-4" data-oid="lhuw.4t">
                  <Button data-oid="tpcwt7s" variant="outline">
                    View All Resources
                  </Button>
                  <div className="flex gap-2" data-oid="hc68--.">
                    <Button
                      className="prev-tip"
                      data-oid="pf:269m"
                      onClick={() => scrollCards("left")}
                      size="icon"
                      variant="outline"
                    >
                      <ChevronLeft data-oid=".mzre__" />
                    </Button>
                    <Button
                      className="next-tip"
                      data-oid="uj9gosc"
                      onClick={() => scrollCards("right")}
                      size="icon"
                      variant="outline"
                    >
                      <ChevronRight data-oid="ze2h7c_" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative flex-1" data-oid="98rkzze">
                <div
                  className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto"
                  data-oid="442-47p"
                  ref={cardsRef}
                >
                  <Swiper
                    autoplay
                    data-oid="5:4:fyy"
                    loop
                    modules={[Navigation, Autoplay]}
                    navigation={{
                      nextEl: ".next-tip",
                      prevEl: ".prev-tip",
                    }}
                    slidesPerView={"auto"}
                    spaceBetween={16}
                  >
                    {creatorTips.map((tip) => (
                      <SwiperSlide className="max-w-[270px]" data-oid="3:w3tkf">
                        <div
                          className="min-w-[270px] max-w-[270px] snap-start"
                          data-oid="yxqa6my"
                          key={tip.id}
                        >
                          <Card
                            className="h-full border border-slate-200 transition-colors hover:border-indigo-200 dark:border-slate-800 dark:hover:border-indigo-800/50"
                            data-oid="c-32h6p"
                          >
                            <CardContent
                              className="p-5 xl:pt-5"
                              data-oid="fiyh1ug"
                            >
                              <div
                                className="flex h-full flex-col"
                                data-oid="f-ieycs"
                              >
                                <div
                                  className="mb-3 w-fit rounded-full bg-slate-100 p-2 dark:bg-slate-800"
                                  data-oid="th7lye-"
                                >
                                  {tip.icon}
                                </div>
                                <h3
                                  className="mb-2 line-clamp-2 font-semibold text-lg"
                                  data-oid="wjzlem9"
                                >
                                  {tip.title}
                                </h3>
                                <p
                                  className="mb-4 line-clamp-3 flex-1 text-slate-600 text-sm dark:text-slate-400"
                                  data-oid="3qjld3a"
                                >
                                  {tip.description}
                                </p>
                                <Button
                                  className="h-auto justify-start p-0 text-indigo-600 hover:bg-transparent hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                                  data-oid="-jqvc2:"
                                  variant="ghost"
                                >
                                  Read more
                                  <ArrowRight
                                    className="ml-1 h-4 w-4"
                                    data-oid="mz4is5v"
                                  />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
