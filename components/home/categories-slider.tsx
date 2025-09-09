"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "@/data/categories";
import { Button } from "../ui/button";
export function CategoriesSlider() {
  return (
    <section className="space-y-4" data-oid="hs0_a:4">
      <div
        className="flex items-center justify-between gap-3"
        data-oid="clrat8f"
      >
        <h2 className="font-bold text-2xl tracking-tight" data-oid="8l_nnp7">
          Quiz Categories
        </h2>
        <div className="flex items-center gap-4" data-oid="uo77xyk">
          <Button
            className="prev-category"
            data-oid="u48ttla"
            size={"icon"}
            variant={"outline"}
          >
            <ChevronLeft data-oid="gl5r:yd" />
          </Button>
          <Button
            className="next-category"
            data-oid="2.zooi3"
            size={"icon"}
            variant={"outline"}
          >
            <ChevronRight data-oid="txayi2l" />
          </Button>
        </div>
      </div>
      <Swiper
        autoplay={{ delay: 2500 }}
        className="rounded-xl"
        data-oid="_de4y0f"
        loop
        modules={[Navigation, Autoplay]}
        navigation={{ nextEl: ".next-category", prevEl: ".prev-category" }}
        slidesPerView={"auto"}
        spaceBetween={16}
        wrapperClass="rounded-xl"
      >
        {categories.map(({ id, image, name, slug, count }) => (
          <SwiperSlide className="max-w-[330px]" data-oid=".hba5f3" key={id}>
            <Link
              className={
                "relative flex h-[200px] items-end justify-between overflow-hidden rounded-xl text-white shadow-sm"
              }
              data-oid="zlw-q8r"
              href={`/categories/${slug}`}
            >
              <Image
                alt=""
                className="absolute inset-0 size-full object-cover object-center"
                data-oid="9t9pyn2"
                src={image}
              />

              <div
                className="absolute top-2 right-2 rounded-full bg-white/40 px-2 py-0.5 font-medium text-xs backdrop-blur-sm"
                data-oid="fu:kiti"
              >
                {count}
              </div>
              <span
                className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1.5 font-semibold text-neutral-100 text-sm tracking-tight backdrop-blur-sm"
                data-oid="l7e34r1"
              >
                {name}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
