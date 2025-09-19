// Edge-friendly types

// Simple in-memory pub-sub for demo SSE (resets on restart)
type Client = { id: number; controller: ReadableStreamDefaultController };
const clients: Client[] = [];
let nextClientId = 1;

function broadcast(event: string, data: unknown) {
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  clients.forEach((c) => {
    try {
      c.controller.enqueue(new TextEncoder().encode(payload));
    } catch {
      // ignore enqueue errors
    }
  });
}

export async function GET(_req: Request) {
  const stream = new ReadableStream({
    start(controller) {
      const clientId = nextClientId++;
      const client: Client = { id: clientId, controller };
      clients.push(client);

      // Initial ping
      controller.enqueue(
        new TextEncoder().encode(`event: ping\ndata: "connected"\n\n`)
      );

      const interval = setInterval(() => {
        controller.enqueue(
          new TextEncoder().encode(`event: ping\ndata: ${Date.now()}\n\n`)
        );
      }, 15000);

      return () => {
        clearInterval(interval);
        const idx = clients.findIndex((c) => c.id === clientId);
        if (idx >= 0) clients.splice(idx, 1);
      };
    },
    cancel() {
      // handled by return in start
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}

// Utility endpoint broadcaster used by other routes (imported via dynamic edge runtime)
export const battleBroadcaster = { broadcast };

