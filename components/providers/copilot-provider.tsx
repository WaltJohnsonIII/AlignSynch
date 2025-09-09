"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import type React from "react";

type CopilotProviderProps = {
  children: React.ReactNode;
};

export function CopilotProvider({ children }: CopilotProviderProps) {
  return (
    <CopilotKit
      publicApiKey={process.env.NEXT_PUBLIC_COPILOT_API_KEY}
      runtimeUrl="/api/copilotkit"
    >
      <CopilotSidebar
        defaultOpen={false}
        instructions="You are an AI assistant for the AlignSynch quiz platform. Help users with interface modifications, data connections, and project navigation. Focus on React components, Next.js routing, and database operations."
        labels={{
          title: "AlignSynch AI Assistant",
          initial:
            "Hi! I'm your AI assistant for the AlignSynch quiz platform. I can help you with:\n\n• Interface modifications and component updates\n• Data connections and database operations\n• Project navigation and code exploration\n• React/Next.js development tasks\n\nWhat would you like to work on?",
        }}
      >
        {children}
      </CopilotSidebar>
    </CopilotKit>
  );
}
