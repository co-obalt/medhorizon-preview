import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type WaitlistInput = {
  name: string;
  email: string;
  city: string;
  interest: string;
  note: string;
};

export type WaitlistResult = {
  duplicate: boolean;
};

/**
 * Local, append-only waitlist store.
 *
 * This is deliberately a thin adapter: enough to make the pre-launch site
 * work end to end without a database. Before public launch, replace the
 * body of `appendWaitlistEntry` with a transactional insert (Postgres/D1)
 * and add double opt-in. Callers should not need to change.
 */
const dataFile = path.join(process.cwd(), "data", "waitlist.jsonl");

export async function appendWaitlistEntry(
  input: WaitlistInput,
): Promise<WaitlistResult> {
  const email = input.email.trim().toLowerCase();
  const directory = path.dirname(dataFile);

  await fs.mkdir(directory, { recursive: true });

  let existing = "";
  try {
    existing = await fs.readFile(dataFile, "utf8");
  } catch {
    existing = "";
  }

  const lines = existing.split("\n").filter(Boolean);

  for (const line of lines) {
    try {
      const record = JSON.parse(line) as { email?: string };
      if (record.email === email) {
        return { duplicate: true };
      }
    } catch {
      // Ignore malformed lines rather than failing the whole submission.
    }
  }

  const record = {
    id: randomUUID(),
    name: input.name,
    email,
    city: input.city,
    interest: input.interest,
    note: input.note,
    createdAt: new Date().toISOString(),
    source: "web",
  };

  await fs.appendFile(dataFile, `${JSON.stringify(record)}\n`, "utf8");

  return { duplicate: false };
}
