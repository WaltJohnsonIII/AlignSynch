import type { Tip } from "@/data/creator-tips-data";
import TipCard from "./tip-card";

interface RelatedTipsProps {
  tips: Tip[];
}

export default function RelatedTips({ tips }: RelatedTipsProps) {
  if (tips.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 border-gray-200 border-t pt-12" data-oid="iph2iom">
      <h2 className="mb-6 font-bold text-2xl" data-oid="phd85j6">
        Related Tips
      </h2>

      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        data-oid="w8t7aco"
      >
        {tips.map((tip) => (
          <TipCard data-oid="p58i_1v" key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
}
