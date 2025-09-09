import { Suspense } from "react";
import { DashboardPage } from "@/components/dashboard/dashboard-page";

export default function Dashboard() {
  return (
    <Suspense
      data-oid="nxmm1-o"
      fallback={<div data-oid="t-u1rc5">Loading...</div>}
    >
      <DashboardPage data-oid="mggjteg" />
    </Suspense>
  );
}
