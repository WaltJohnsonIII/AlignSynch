import { openai } from "@ai-sdk/openai";
import { CopilotRuntime, OpenAIAdapter } from "@copilotkit/runtime";
import type { NextRequest } from "next/server";

const runtime = new CopilotRuntime();

export async function POST(req: NextRequest) {
  const { handleRequest } = runtime;

  return await handleRequest(
    req,
    new OpenAIAdapter({
      model: openai("gpt-4o-mini"),
      // Add your OpenAI API key to environment variables
      // apiKey: process.env.OPENAI_API_KEY,
    })
  );
}
