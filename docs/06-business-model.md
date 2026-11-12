# Business model, pricing, and unit economics

**Status:** hypothesis · pricing tested only in conversation, not contracts
**Last updated:** 12 November 2026

---

## 1. Revenue model

Causeway earns from four streams. The mix matters: subscription revenue funds
the company; usage revenue tracks the value delivered; logistics and lab fees
require partner agreements and carry different margin and regulatory risk.

| Stream | What it pays for | Price (beta) | Margin profile |
| --- | --- | --- | --- |
| Platform subscription | Access to modules, seats, support | $3k–$25k+/mo | 80–85% gross |
| Order routing | Per order coordinated | $2.00 / order | 85%+ |
| Custody events | Per scan/handoff recorded | $0.75 / scan | 85%+ |
| Logistics coordination | Dispatch and SLA management | 8% of logistics spend or $2.50/stop | 60–70% (integration cost) |
| Implementation | Onboarding, interfaces, training | $25k–$150k one-time | 35–50% |
| Lab network fee | Preferred routing and demand | 3–5% of lab spend (partner-negotiated) | 90%+ |

**Deliberate exclusions:** no markup on clinician time, no per-patient
"platform fee" that punishes access, no charging patients.

## 2. Packaging

| Tier | Who | Included | Price (annual, USD) |
| --- | --- | --- | --- |
| **Core** | Single mobile team or small lab | Orders, custody, dispatch, 10 seats | $3,000/mo |
| **Clinical Ops** | Multi-team mobile/home care org | Core + clinician network + scheduling + 50 seats | $8,000/mo |
| **Network** | Health system, payer program, regional lab | All four surfaces, SSO, audit export, 250 seats | from $25,000/mo |
| **Enterprise** | Multi-region, single-tenant | Network + residency, custom SLA, dedicated support | from $45,000/mo |

Annual prepay: 2 months free. Monthly available above Core with a 15% premium.

**Usage included:** Core includes 2,000 routed orders/mo; Clinical Ops 8,000;
Network 30,000. Overage at list. Custody scans included at 2× order volume.

## 3. Design partner offer (first 12)

- 50% off list for 12 months, then founder pricing locked for 24 months.
- Implementation waived (up to $40k of services).
- Named engineering contact and a monthly roadmap session.
- In exchange: a 90-day pilot with defined success metrics, workflow access,
  and a reference conversation if the pilot succeeds.

No equity, no exclusivity beyond the pilot metro, no license to the partner's
IP.

## 4. Illustrative unit economics

> **Illustrative only.** These are modeled from assumptions, not from signed
> contracts. Replace with pilot data as it arrives.

**Profile:** mid-market mobile diagnostics org

- 45 mobile clinicians, 8,000 visits/month, 3,500 lab orders/month.
- Plan: Clinical Ops ($8,000/mo) + 3,500 orders × $2 ($7,000) + 7,000 custody
  scans × $0.75 ($5,250) + logistics coordination ($6,000).
- **Monthly revenue:** $26,250 → **ARR ≈ $315k**.
- Implementation: $40k one-time.

**Cost to serve (annual):**

| Cost | Amount | Notes |
| --- | --- | --- |
| Cloud and infrastructure | $22k | Event spine, storage, egress |
| Integration support | $28k | 0.2 FTE engineer |
| Customer success | $18k | Shared across 8 accounts |
| Partner/API fees | $12k | Routing, video, SMS |
| Compliance and audit allocation | $10k | SOC 2 amortized |
| **Gross margin** | **≈ 71%** | Before support and hosting scale effects |

**Acquisition:** $35k blended CAC (founder-led sales, 3-month cycle).
**Payback:** ~19 months on gross profit. At scale (implementation paid,
hosting optimized), target payback under 12 months.

**Expansion path:** add mobile surface (+$4k/mo), add second region
(+$3k/mo), increase order volume (+usage). Target net revenue retention 115%.

## 5. Sales and contracting

| Stage | Duration | Artifacts | Exit criteria |
| --- | --- | --- | --- |
| Discover | 2 weeks | Problem brief, stakeholder map | A named painful workflow and a budget owner |
| Scope | 2 weeks | Pilot scope, success metrics | Signed pilot order form |
| Pilot | 90 days | Integration plan, weekly review | Metrics met, clinical sign-off |
| Convert | 4 weeks | MSA, BAA, DPA, SLA, order form | Signed annual contract |

**Contract stack:** MSA → order form → BAA (US) / DPA (EU) → SLA → security
addendum. Pilot uses a short order form under the MSA to avoid legal drag.

**Procurement realities:** health systems take 6–9 months; mobile care 6–10
weeks; labs 3–5 months. Plan cash accordingly.

## 6. Three-year model (illustrative)

| | Year 1 (2027) | Year 2 (2028) | Year 3 (2029) |
| --- | --- | --- | --- |
| Paying organizations | 8 | 30 | 60 |
| Avg. ARR / org | $120k | $145k | $165k |
| Subscription + usage ARR | $0.96M | $4.35M | $9.9M |
| Services revenue | $0.25M | $0.6M | $0.8M |
| Gross margin | 62% | 70% | 74% |
| Headcount | 8 | 22 | 45 |
| Net burn | $1.6M | $2.4M | $2.8M |

These numbers assume the design partner cohort converts at 60% and the first
enterprise contract closes in H2 2027. Both are unproven.

## 7. Pricing principles

1. **Charge for coordination, not access.** No per-patient toll that
   discourages care.
2. **Publish pricing before GA.** Enterprise custom is fine; secrecy is not.
3. **Align with the buyer's metric.** Mobile care buys visits/day; labs buy
   TAT and rejection rate; payers buy completion.
4. **Implementation is not a profit center.** Price it to cover cost and signal
   seriousness.
5. **No lab pay-to-play.** Preferred routing must be disclosed and clinically
   appropriate; counsel reviews every arrangement.

## 8. Open pricing questions

- Does per-scan custody pricing survive contact with high-volume labs, or does
  it need a platform-only tier?
- Should logistics be a percentage of spend or a flat per-stop fee? Percentage
  aligns value but invites audit friction.
- Can payers pay directly, or does the provider always hold the contract?
- What is the right free tier for a two-person mobile team — if any?
- How do we price single-tenant deployments without punishing compliance?
