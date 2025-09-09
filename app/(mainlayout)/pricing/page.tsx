import { Footer } from "@/components/layout/footer";
import { PricingCta } from "@/components/pricing/pricing-cta";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { PricingPlans } from "@/components/pricing/pricing-plans";

export default function PricingPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
      data-oid="ubelodu"
    >
      <PricingPlans data-oid="03qdj7j" />
      <PricingFaq data-oid="yl25vip" />
      <PricingCta data-oid="zz4-7_c" />
      <Footer data-oid="bgzina0" />
    </div>
  );
}
