# Go-to-market plan

**Status:** hypothesis · 0 design partners signed
**Last updated:** 12 November 2026

---

## 1. Beachhead

**One metro. One wedge. One measurable outcome.**

- **Metro:** shortlist Atlanta, Dallas, Rotterdam. Decide by 15 December 2026.
- **Wedge:** specimen custody + dispatch for mobile diagnostics.
- **Outcome:** specimen rejection rate and order-to-result time, measured
  before and after.
- **Why this wedge:** it is painful, measurable within 30 days, requires no
  diagnostic claims, and creates the cross-org dataset the rest of the platform
  depends on.

Expansion sequence: custody → dispatch → mobile documentation → clinical
network → result release → analytics.

## 2. Ideal customer profile

### Primary ICP — mobile diagnostics / home care

| Attribute | Target |
| --- | --- |
| Size | 20–200 clinicians; 2,000–15,000 visits/month |
| Geography | One metro with a willing lab and courier partner |
| Stack | EHR or scheduling tool + spreadsheets + phone-based coordination |
| Trigger | New home program, rising rejection rate, payer requirement, failed audit |
| Budget owner | COO / VP Operations |
| Pain | "We lose specimens and we can't prove what happened." |

### Secondary ICP — regional diagnostic lab

- 50k–500k accessions/year, CLIA-certified, serves mobile collectors.
- Trigger: order quality, rejection cost, lost referral volume.
- Budget owner: VP Operations / Commercial.

### Disqualifiers (for now)

- No mobile or home program.
- Requires a diagnostic claim or AI interpretation in the pilot.
- Wants a custom build with no product reuse.
- Cannot name a clinical or privacy owner.
- Under 5 clinicians (too small to prove value).

## 3. Value narrative by buyer

| Buyer | Opening line | Proof in 90 days |
| --- | --- | --- |
| Mobile care COO | "You're paying for visits you can't prove and specimens you can't find." | Rejection rate down, visits per team up |
| Lab VP Ops | "You receive samples without context and chase orders all day." | Order accuracy, TAT, fewer re-draws |
| Health system VP | "Your home program leaks patients between referral and result." | Completed episodes, time to result |
| Payer program lead | "You can't see whether the home visit actually happened." | Completion rate, evidence trail |

## 4. Design partner program

**Offer:** 12 slots, 90-day pilot, implementation waived, founder pricing
locked 24 months, named engineer.

**We ask for:**

- One service line and one metro.
- A clinical sponsor and an operations sponsor.
- 2 hours/week of workflow access.
- Permission to measure before/after metrics.
- A reference conversation if success criteria are met.

**Success criteria (agreed before start):**

1. 100% of pilot specimens have complete custody events.
2. Rejection rate improves by ≥ 30% vs. baseline.
3. Median order-to-result time improves by ≥ 15%.
4. Two named users say they would be "very disappointed" without it.
5. Clinical sponsor signs off on documentation and escalation.

## 5. Sales process

| Stage | Owner | Duration | Key artifact |
| --- | --- | --- | --- |
| Warm intro / waitlist | Founder | — | Application score |
| Discovery call | Founder | 30 min | Problem brief |
| Workflow session | Founder + clinical | 60 min | Current-state map |
| Pilot proposal | Founder | 1 week | One-page scope + metrics |
| Pilot | Founder + engineer | 90 days | Weekly scorecard |
| Contract | Founder | 4 weeks | MSA + BAA/DPA + order form |

**Founder-led until 10 customers.** No SDRs, no expensive sales stack. Track in
a simple CRM with five stages; do not build a sales ops function prematurely.

## 6. Channels

1. **Lab partnerships** — a lab introduces Causeway to its mobile collectors.
   Highest-intent channel. One partner can produce 5–10 qualified accounts.
2. **Home care associations and conferences** — state/home care associations,
   regional summits. Speak about custody and completion, not AI.
3. **Payer innovation teams** — longer cycle, larger contracts; start
   conversations in parallel, do not depend on them.
4. **Waitlist and content** — the site's waitlist is the inbound funnel. Publish
   one rigorous piece per month: "What actually happens to a home specimen,"
   "The real cost of a rejected sample."
5. **EHR app marketplaces** — later, after a referenceable integration.
6. **Founder network** — clinical operators, lab executives, courier founders.

## 7. Launch sequence

### Days 0–90 (Nov 2026 – Jan 2027)

- Finalize beachhead metro and sign the first lab + courier partner.
- Ship beta: orders, custody, dispatch, result ingestion.
- Onboard design partners #1–2; run weekly scorecards.
- Publish the waitlist and a single flagship essay.
- Apply to relevant accelerators only if terms are non-dilutive or strategic.

### Days 90–180 (Feb – Apr 2027)

- 4–6 design partners live; publish anonymized outcomes.
- Convert 2 partners to paid annual contracts.
- Add clinician network and result release.
- Begin SOC 2 Type I readiness.
- Hire founding engineer #2 and a clinical lead.

### Days 180–365 (May – Nov 2027)

- 8–10 paying organizations; €/$1M ARR run rate.
- Expand to a second metro with the same lab partner.
- GA readiness: pricing published, support SLAs, security package.
- EU design partner and data residency plan.

## 8. Funnel metrics

| Stage | Metric | 12-month target |
| --- | --- | --- |
| Awareness | Qualified site visits / month | 2,000 |
| Interest | Waitlist applications / month | 40 |
| Qualified | Applications meeting ICP | 12 |
| Discovery | Calls held / month | 8 |
| Pilot | Pilots started / quarter | 3 |
| Conversion | Pilot → paid | 60% |
| Expansion | Net revenue retention | 115% |

## 9. Positioning guardrails

- Lead with **the handoff**, not "AI-powered healthcare."
- Never claim HIPAA certification; say "designed to operate under a BAA."
- Never claim clinical outcomes without a measured pilot.
- Show the product as a schematic and a timeline, not a stock photo of a
  smiling doctor.
- Name the partner ecosystem; do not pretend we own the clinicians, labs, or
  couriers.

## 10. GTM risks

| Risk | Early signal | Response |
| --- | --- | --- |
| Long sales cycles | Discovery stalls at legal | Start with mobile care, not health systems |
| Lab channel conflict | Lab sees us as disintermediation | Revenue share + co-branded pilot |
| Pilot scope creep | Partner asks for billing/claims | Written pilot scope, change order |
| Weak urgency | "Interesting, circle back" | Require a baseline metric before pilot |
| Founder bandwidth | Deals stall while building | Hire #2 engineer before 3rd pilot |
