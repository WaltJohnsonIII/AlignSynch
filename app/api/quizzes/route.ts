// Use standard Request/Response types to avoid bundler type resolution issues
import { mockQuizzes } from "@/data/mock-quizzes";
import type { Quiz } from "@/types/quiz";

// In-memory store for runtime mutations (resets on server restart)
let quizzesStore: Quiz[] = [...mockQuizzes];

function json(data: unknown, init?: number | ResponseInit) {
  const status = typeof init === "number" ? init : init?.status ?? 200;
  const headers = new Headers(typeof init === "object" ? init.headers : undefined);
  if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");
  return new Response(JSON.stringify(data), { status, headers });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const difficulty = searchParams.get("difficulty");

  let result = quizzesStore;
  if (category) {
    const lc = category.toLowerCase();
    result = result.filter((q) => q.tags.some((t) => t.toLowerCase() === lc));
  }
  if (difficulty) {
    const ld = difficulty.toLowerCase();
    result = result.filter((q) => q.difficulty.toLowerCase() === ld);
  }

  return json(result, 200);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Quiz;

    // Basic shape validation aligned to types/quiz.ts
    if (
      typeof body?.id !== "number" ||
      typeof body?.title !== "string" ||
      typeof body?.description !== "string" ||
      typeof body?.difficulty !== "string" ||
      !Array.isArray(body?.tags) ||
      !Array.isArray(body?.questions) ||
      typeof body?.settings !== "object"
    ) {
      return json({ error: "Invalid quiz payload" }, 400);
    }

    // Ensure ID uniqueness; if exists, replace (acts like upsert by ID)
    const existingIndex = quizzesStore.findIndex((q) => q.id === body.id);
    if (existingIndex >= 0) {
      quizzesStore[existingIndex] = body;
    } else {
      quizzesStore.push(body);
    }

    return json(body, 201);
  } catch (error) {
    return json({ error: "Invalid JSON" }, 400);
  }
}

