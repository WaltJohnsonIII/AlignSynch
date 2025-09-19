import { categories } from "@/data/categories";

export async function GET() {
  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

