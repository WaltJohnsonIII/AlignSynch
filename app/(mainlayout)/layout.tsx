import type React from "react";
import { MainLayout } from "@/components/layout/main-layout";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MainLayout data-oid="ys-n2y_">{children}</MainLayout>;
}
