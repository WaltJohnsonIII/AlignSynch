"use client";

import { Bookmark, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Tip } from "@/data/creator-tips-data";

interface TipCardProps {
  tip: Tip;
}

export default function TipCard({ tip }: TipCardProps) {
  return (
    <Link
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 transition-all hover:border-purple-300 hover:shadow-md dark:border-gray-700"
      data-oid="pr:hli2"
      href={`/creator-tips/${tip.slug}`}
    >
      <div className="relative aspect-video" data-oid="6cl_.nz">
        <Image
          alt={tip.title}
          className="object-cover"
          data-oid="nsx5eqq"
          fill
          src={tip.image || "/placeholder.svg"}
        />
      </div>

      <div className="flex flex-grow flex-col p-5" data-oid="8y578s:">
        <div className="mb-3 flex items-center" data-oid="mq5pr8i">
          <span
            className="rounded-full bg-purple-100 px-2.5 py-0.5 font-medium text-purple-800 text-xs"
            data-oid="mkm4qhi"
          >
            {tip.category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </span>
          <div
            className="ml-auto flex items-center text-gray-500 text-sm"
            data-oid="y0ef-1o"
          >
            <Clock className="mr-1" data-oid="92x7wu8" size={14} />
            {tip.readTime} min
          </div>
        </div>

        <h3
          className="mb-2 font-bold text-lg transition-colors group-hover:text-purple-700"
          data-oid="pdscqwv"
        >
          {tip.title}
        </h3>

        <p
          className="mb-4 flex-grow text-gray-600 text-sm dark:text-gray-100"
          data-oid="pjv43o3"
        >
          {tip.excerpt}
        </p>

        <div
          className="mt-auto flex items-center border-gray-100 border-t pt-3 dark:border-gray-700"
          data-oid="hu-c6rt"
        >
          <div className="flex items-center" data-oid="p6y2gtm">
            <div
              className="mr-2 h-6 w-6 overflow-hidden rounded-full"
              data-oid="zscw5f0"
            >
              <Image
                alt={tip.author.name}
                className="object-cover"
                data-oid="ljb_p5_"
                height={24}
                src={tip.author.avatar || "/placeholder.svg"}
                width={24}
              />
            </div>
            <span
              className="text-gray-700 text-xs dark:text-gray-200"
              data-oid="-7e1lt7"
            >
              {tip.author.name}
            </span>
          </div>

          <button
            className="ml-auto text-gray-400 transition-colors hover:text-purple-600"
            data-oid="-gqb-lx"
            onClick={(e) => {
              e.preventDefault();
              // Bookmark functionality would go here
            }}
          >
            <Bookmark data-oid="t0v2sc3" size={16} />
          </button>
        </div>
      </div>
    </Link>
  );
}
