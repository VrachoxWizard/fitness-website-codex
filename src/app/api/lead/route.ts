import {NextResponse, type NextRequest} from "next/server";
import {leadFormSchema, sanitizeLeadForLog} from "@/lib/lead";

const buckets = new Map<string, {count: number; resetAt: number}>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (!allowRequest(ip)) {
      return NextResponse.json(
        {error: "Too many requests. Please try again later."},
        {status: 429}
      );
    }

    const json = await request.json();
    const parsed = leadFormSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({error: "Invalid form input."}, {status: 400});
    }

    if (parsed.data.honeypot) {
      return NextResponse.json({ok: true});
    }

    const id = crypto.randomUUID();

    console.info("Lead inquiry accepted", {
      id,
      ...sanitizeLeadForLog(parsed.data)
    });

    return NextResponse.json({ok: true, id});
  } catch {
    return NextResponse.json(
      {error: "Something went wrong. Please try again."},
      {status: 500}
    );
  }
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous"
  );
}

function allowRequest(key: string) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, {count: 1, resetAt: now + WINDOW_MS});
    return true;
  }

  if (bucket.count >= MAX_REQUESTS) {
    return false;
  }

  bucket.count += 1;
  return true;
}
