
// Lazy import broadcaster from events route file
let broadcaster: { broadcast: (event: string, data: unknown) => void } | null =
  null;
async function getBroadcaster() {
  if (!broadcaster) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - runtime import within app dir
    const mod = await import("../events/route");
    broadcaster = mod.battleBroadcaster;
  }
  return broadcaster!;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      type: string;
      payload?: unknown;
    };
    const { broadcast } = await getBroadcaster();
    broadcast(body.type || "message", body.payload ?? {});
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

