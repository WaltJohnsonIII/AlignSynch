"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Button } from "../ui/button";

// Dynamically import Swiper components
const Swiper = dynamic(
  () => import("swiper/react").then((mod) => ({ default: mod.Swiper })),
  {
    ssr: false,
    loading: () => <div className="h-32 animate-pulse rounded-xl bg-muted" />,
  }
);

const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => ({ default: mod.SwiperSlide })),
  {
    ssr: false,
  }
);

export function CategoriesSlider() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-bold text-2xl tracking-tight">Quiz Categories</h2>
        <div className="flex items-center gap-4">
          <Button className="prev-category" size={"icon"} variant={"outline"}>
            <ChevronLeft />
          </Button>
          <Button className="next-category" size={"icon"} variant={"outline"}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <Swiper
        autoplay={{ delay: 2500 }}
        className="rounded-xl"
        loop
        modules={[
          import("swiper/modules").then((mod) => mod.Navigation),
          import("swiper/modules").then((mod) => mod.Autoplay),
        ]}
        navigation={{ nextEl: ".next-category", prevEl: ".prev-category" }}
        slidesPerView={"auto"}
        spaceBetween={16}
        wrapperClass="rounded-xl"
      >
        {categories.map(({ id, image, name, slug, count }) => (
          <SwiperSlide className="max-w-[330px]" key={id}>
            <Link
              className="group relative block overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
              href={`/categories/${slug}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  alt={name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  height={300}
                  src={image}
                  width={400}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute right-4 bottom-4 left-4">
                <h3 className="font-semibold text-white">{name}</h3>
                <p className="text-sm text-white/80">{count} quizzes</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
