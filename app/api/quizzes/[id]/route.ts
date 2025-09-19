import { mockQuizzes } from "@/data/mock-quizzes";
import type { Quiz } from "@/types/quiz";

// Local module-level store shared across handlers in this module only.
// To keep state consistent with /api/quizzes, consider a shared module if needed.
let quizzesStore: Quiz[] = [...mockQuizzes];

function json(data: unknown, init?: number | ResponseInit) {
  const status = typeof init === "number" ? init : init?.status ?? 200;
  const headers = new Headers(typeof init === "object" ? init.headers : undefined);
  if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");
  return new Response(JSON.stringify(data), { status, headers });
}

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number.parseInt(params.id, 10);
  const quiz = quizzesStore.find((q) => q.id === id);
  if (!quiz) return json({ error: "Not found" }, 404);
  return json(quiz, 200);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number.parseInt(params.id, 10);
  const index = quizzesStore.findIndex((q) => q.id === id);
  if (index === -1) return json({ error: "Not found" }, 404);

  try {
    const body = (await req.json()) as Quiz;
    if (body.id !== id) return json({ error: "ID mismatch" }, 400);

    quizzesStore[index] = body;
    return json(body, 200);
  } catch (e) {
    return json({ error: "Invalid JSON" }, 400);
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number.parseInt(params.id, 10);
  const index = quizzesStore.findIndex((q) => q.id === id);
  if (index === -1) return json({ error: "Not found" }, 404);

  const removed = quizzesStore.splice(index, 1)[0];
  return json(removed, 200);
}

