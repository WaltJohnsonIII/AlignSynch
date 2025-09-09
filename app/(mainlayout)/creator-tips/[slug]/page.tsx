import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";
import TipDetail from "@/components/creator-tips/tip-detail";
import { Footer } from "@/components/layout/footer";
import { getTipBySlug, tips } from "@/data/creator-tips-data";

export function generateStaticParams() {
  return tips.map((tip) => ({
    slug: tip.slug,
  }));
}

export function GenerateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = use(params);
  const tip = getTipBySlug(slug);

  if (!tip) {
    return {
      title: "Tip Not Found",
      description: "The requested tip could not be found.",
    };
  }

  return {
    title: `${tip.title} - Quiz Creator Tips`,
    description: tip.excerpt,
  };
}

export default function TipPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const tip = getTipBySlug(slug);

  if (!tip) {
    notFound();
  }

  return (
    <>
      <TipDetail data-oid="n.berv:" tip={tip} />
      <Footer data-oid="5rkplaz" />
    </>
  );
}
