# Waitlist and design partner program

**Status:** implemented locally; not yet deployed
**Last updated:** 12 November 2026

---

## 1. Purpose

The product is not ready. The waitlist has three jobs:

1. **Qualify demand** — find organizations with a real handoff problem and a
   budget owner, not just email collectors.
2. **Recruit 12 design partners** — a cohort small enough to support well.
3. **Learn** — every optional note is product research.

It is not a newsletter list. We do not promise a launch date.

## 2. What exists today

| Piece | Location | Notes |
| --- | --- | --- |
| Landing page | `/` | Narrative, platform, trust, CTA |
| Application page | `/waitlist` | Full form + FAQ |
| Form component | `components/waitlist-form.tsx` | Client validation, success state, referral code |
| API | `app/api/waitlist/route.ts` | Validation, rate limit, honeypot, dedupe |
| Storage adapter | `lib/waitlist.ts` | Appends to `data/waitlist.jsonl` |
| Privacy notice | `/privacy` | Covers waitlist data only |

**Local storage is a stub.** It does not survive a redeploy on ephemeral
hosting and has no backups. Before public launch, swap the adapter for a
transactional database. No patient data is collected here.

## 3. Fields and rationale

| Field | Required | Why we ask | Used for |
| --- | --- | --- | --- |
| Full name | Yes | Personal follow-up | Email greeting, call |
| Work email | Yes | Dedupe and contact | Primary key (normalized lowercase) |
| Organization | Yes | Fit scoring, context | Qualification |
| Role | Yes | Route to the right conversation | Segment scoring |
| Region | Yes | Residency and regulatory path | Cohort grouping |
| Note | No | Product discovery | Research coding, not automated decisions |
| Consent | Yes | Lawful contact | Audit trail |

We deliberately do **not** ask for phone number, company size, or budget. Those
belong in the discovery call, and asking early suppresses conversion.

## 4. Qualification scoring

Score each application 0–5. Anything ≥ 3 gets a call within two business days.

| Signal | Points |
| --- | --- |
| Role is clinician/ops, mobile care, lab, or health system | +2 |
| Organization matches ICP size or type | +2 |
| Note names a specific handoff, custody, or turnaround problem | +1 |
| Region is US or EU | +0 (required for beta) |
| Note is generic ("interested", "keep me posted") | −1 |
| Investor or student | −2 (polite decline, keep on list) |

**Do not** score on name, email domain prestige, or geography beyond beta
eligibility.

## 5. Response playbook

| When | Action | Channel |
| --- | --- | --- |
| Immediately | Success state with position and referral code | On screen |
| Within 2 business days | Human review; tag segment and score | Internal |
| Day 2–3 | Personal reply: call invite or "not yet" | Email |
| Day 7 | If no reply, one follow-up; then stop | Email |
| Day 30 | Relevant essay or pilot update, only if opted in | Email |
| Monthly | Cohort update to active applicants | Email |

**Reply templates**

*Call invite:*

> Subject: Your Causeway application — 20 minutes?
>
> Hi {name} — thanks for applying. The handoff you described ({specific}) is
> exactly the kind of thing we're building around. Would 20 minutes in the next
> week work to understand your current workflow? No deck; I'd rather listen.
>
> — {founder}

*Not yet:*

> Subject: Your Causeway application
>
> Hi {name} — thank you for the detail. We're keeping the first cohort focused
> on {segment} in {metro}, so we're not the right fit today. I'd like to stay in
> touch and will write when that changes. If your situation shifts, reply here
> and it comes straight to me.

*Investor:*

> Thanks for the interest. We're not raising right now; if that changes I'll
> reach out with metrics rather than a deck.

## 6. Referral codes

Each applicant receives `CW-XXXXX`, derived from a salted hash of their email.
It is stable, non-sequential, and reveals nothing. It is used for:
- Referral tracking (when the referral feature ships).
- Matching a person to a conversation without exposing the email in notes.

The position number is the true insertion order in the local file. It is not
inflated. If the store resets, positions reset — acceptable pre-launch, not
acceptable after launch.

## 7. Anti-abuse

- Honeypot field (`website`) invisible to people; filled submissions rejected.
- Five submissions per IP per 10 minutes; in-memory and therefore per-instance.
- Server-side validation mirrors client validation; never trust the browser.
- No PII in logs — only failure mode and user-agent length.
- Dedupe on normalized email; duplicates keep their original position.

**Before public launch:** add a managed CAPTCHA (Turnstile) behind a feature
flag, move rate limiting to a shared store, and add email verification.

## 8. Metrics

| Metric | Definition | Target (first 90 days) |
| --- | --- | --- |
| Applications | Unique valid submissions | 120 |
| Qualified rate | Score ≥ 3 / applications | ≥ 30% |
| Call rate | Calls held / qualified | ≥ 70% |
| Design partner conversion | Signed pilots / calls | ≥ 20% |
| Time to first reply | Median business hours | < 16 |
| Form completion | Submits / page views | ≥ 8% |
| Segment mix | Mobile care + lab share | ≥ 50% |

## 9. Production migration

1. Replace `appendWaitlistEntry` with an insert into Postgres (or D1).
   Schema:

   ```sql
   create table waitlist_applications (
     id uuid primary key,
     name text not null,
     email citext unique not null,
     organization text not null,
     role text not null,
     region text not null,
     note text,
     position bigint generated always as identity,
     referral_code text not null,
     score smallint,
     status text not null default 'new',
     created_at timestamptz not null default now()
   );
   ```

2. Add double opt-in for marketing email; transactional replies do not require
   it.
3. Move rate limiting to Redis/Upstash with a per-email and per-IP bucket.
4. Add Turnstile or hCaptcha.
5. Send notification to partners@ on qualified applications.
6. Export to CSV for the weekly review; never paste PII into chat tools.

## 10. Open questions

- Do we publish a waitlist count? (Current answer: no — it invites games and
  ages badly.)
- Is a referral incentive appropriate for a clinical audience? (Likely no;
  referral tracking only.)
- How long do we keep declined applications? (Policy: 24 months, then delete.)
- Who owns replies when the founder is unavailable? (Clinical lead, from
  month 3.)
