import type { Metadata } from "next";
import type React from "react";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/components/layout/sidebar-context";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import Script from "next/script";
// import { SpecKitBanner } from "@/components/posthog/spec-kit-banner";
import { inter } from "./fonts";
export const metadata: Metadata = {
  title: "Quiz Making Website - Play & Earn Money",
  description:
    "Create quizzes, play games, and earn money with our multi-vendor quiz platform",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${inter.variable}`} data-oid="ja04ctu" lang="en">
      {/* <Suspense>
        <PostHogPageview />
      </Suspense>
      <PostHogProvider> */}
      <body className="" data-oid="eui5ee-">
        {/* <SpecKitBanner /> */}
        <ThemeProvider
          attribute="class"
          data-oid="u29m1rv"
          defaultTheme="dark"
          enableSystem
        >
          <TooltipProvider data-oid="hxf1-ty" delayDuration={0}>
            <SidebarProvider data-oid="m7433b_">
              <Toaster data-oid="shgy5wb" richColors />
              {children}
            </SidebarProvider>
          </TooltipProvider>
        </ThemeProvider>

        <Script
          data-oid="20na-fl"
          id="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
          strategy="afterInteractive"
          type="module"
        />
      </body>
      {/* </PostHogProvider> */}
    </html>
  );
}
