import { NextResponse } from "next/server";
import { appendWaitlistEntry } from "@/lib/waitlist";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CITIES = new Set([
  "Sacramento",
  "Folsom",
  "Roseville",
  "Auburn",
  "Elsewhere in Greater Sacramento",
]);

const INTERESTS = new Set([
  "A patient",
  "A caregiver or family member",
  "A clinician",
  "A partner organization",
]);

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    if (attempts.size > 500) {
      for (const [candidate, value] of attempts) {
        if (now > value.resetAt) attempts.delete(candidate);
      }
    }
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "local";
  const userAgent = request.headers.get("user-agent") ?? "";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "We couldn't read that request." },
      { status: 400 },
    );
  }

  // Honeypot: a hidden field only automated submissions fill in.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ error: "Unable to process." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const city = typeof body.city === "string" ? body.city.trim() : "";
  const interest =
    typeof body.interest === "string" ? body.interest.trim() : "";
  const note = typeof body.note === "string" ? body.note.trim() : "";

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json(
      { error: "Please enter your name." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!CITIES.has(city)) {
    return NextResponse.json(
      { error: "Please choose your city." },
      { status: 400 },
    );
  }

  if (!INTERESTS.has(interest)) {
    return NextResponse.json(
      { error: "Please tell us how you'd like to join." },
      { status: 400 },
    );
  }

  if (note.length > 600) {
    return NextResponse.json(
      { error: "Please keep your note under 600 characters." },
      { status: 400 },
    );
  }

  try {
    const result = await appendWaitlistEntry({
      name,
      email,
      city,
      interest,
      note,
    });

    return NextResponse.json(
      { ok: true, duplicate: result.duplicate },
      {
        status: result.duplicate ? 200 : 201,
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch (error) {
    // Log only the failure mode — never names, emails, or free text.
    console.error(
      "[waitlist] write failed",
      error instanceof Error ? error.message : "unknown error",
      { userAgentLength: userAgent.length },
    );
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again." },
      { status: 500 },
    );
  }
}
