# Risk register and open questions

**Status:** living document · review monthly
**Last updated:** 12 November 2026

**Scale:** likelihood and impact are Low / Medium / High. "Trigger" is the
observable signal that the risk is materializing, not a feeling.

---

## 1. Risk register

| ID | Risk | L | I | Mitigation | Trigger | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| R1 | **Clinical harm from a lost or delayed result** | M | H | Custody at every boundary; critical-value protocol; 100% audit in beta; human release only | Any missed critical value or > 2 h custody gap | Clinical lead |
| R2 | **A feature is classified as a medical device** | M | H | Function-by-function review; launch coordination-only; counsel sign-off before recommendations | Marketing asks to say "recommends treatment" | Founder |
| R3 | **PHI breach or insider misuse** | L | H | Least privilege, audit logs, break-glass review, encryption, pen test before GA | Anomalous bulk access; lost device | Privacy officer |
| R4 | **Labs or couriers see Causeway as disintermediation** | M | H | Revenue share, co-branded pilots, data shared both ways, no direct sales to their customers without consent | Partner withholds volume or pricing | Founder |
| R5 | **Enterprise sales cycles outrun runway** | H | H | Beachhead mobile care first; 90-day pilots; annual prepay; keep burn low | Pipeline stalls > 90 days at legal | Founder |
| R6 | **HL7/FHIR integration variance breaks onboarding** | H | M | One EHR and one LIS deeply; interface engine partner; fixed-scope integration playbook | Integration exceeds 6 weeks | Engineering |
| R7 | **Founder bandwidth** | H | H | Hire platform engineer in Q4; fractional clinical and compliance; ruthless scope | Two deals slip in one month | Founder |
| R8 | **Partner clinical capacity is unreliable** | M | M | Multi-partner per metro; SLA with overflow pool; transparent capacity dashboard | Assignment SLA misses 2 weeks running | Operations |
| R9 | **Usage pricing misaligns with value** | M | M | Test flat vs. usage in first 5 contracts; cap overage in year one | Customers suppress orders to control cost | Founder |
| R10 | **EU expansion cost and complexity** | M | M | Defer until a committed EU design partner; use same code, separate data plane | EU partner demands residency before revenue | Engineering |
| R11 | **Single lab dependency in beachhead** | M | H | Sign a secondary lab before 5 customers; portable order routing | Lab changes pricing or priorities | Founder |
| R12 | **Reimbursement policy shifts** | M | M | Sell to operators with diversified payers; avoid single-payer dependence | Payer pauses home program | Founder |
| R13 | **Supply-chain or dependency compromise** | L | H | SBOM, dependency review, signed builds, least-privilege CI | Critical CVE in a core dependency | Engineering |
| R14 | **Overbuilding before validation** | H | M | Wedge scope frozen; no billing, no AI, no patient app in beta | Roadmap adds a module before custody is proven | Founder |
| R15 | **Brand reads as generic health-tech** | M | L | Specific narrative, schematic visual language, named wedge, no stock imagery | Inbound says "another telehealth app" | Founder |

## 2. Top three risks, expanded

### R1 — Clinical harm from a lost result

This is the risk that ends the company. The mitigation is not a policy
document; it is an operational invariant: **no specimen without a custodian, no
result without an owner, no critical value without a documented read-back.**
Beta audits 100% of critical values and samples custody chains weekly. Any
miss triggers a stop-and-fix, not a retrospective.

### R5 — Sales cycles vs. runway

Health system procurement can take 9 months. The plan deliberately starts with
mobile care operators who can sign in 6–10 weeks, and uses a 90-day pilot to
create urgency. If the first three pilots do not convert by month nine, the
response is to narrow the wedge further — not to hire salespeople.

### R4 — Partner channel conflict

Labs and couriers have reason to fear a layer that owns the customer
relationship. Our position must be demonstrably collaborative: partners keep
their brand and their customer, we route demand and share performance data,
and we never poach. This needs to be in the partner agreement, not just the
pitch.

## 3. Assumptions log

| # | Assumption | Why it matters | How to validate | Status |
| --- | --- | --- | --- | --- |
| A1 | Mobile care orgs will pay $8k+/mo for coordination | Entire pricing model | 10 priced conversations, 3 LOIs | Untested |
| A2 | Labs will share order and result data via HL7/FHIR | Product feasibility | 5 lab technical conversations | Untested |
| A3 | 30% rejection reduction is achievable in 90 days | Pilot success criteria | Baseline + pilot measurement | Untested |
| A4 | Clinicians will accept a second workflow surface | Adoption | Time-on-task study with 10 clinicians | Untested |
| A5 | Consent-scoped access is a buying criterion, not just compliance | Differentiation | Buyer interviews; security questionnaires | Untested |
| A6 | A single metro has enough density for unit economics | GTM plan | Route density analysis with courier partner | Untested |
| A7 | We can stay out of device regulation for 12 months | Speed and cost | Counsel memo on MVP features | In progress |
| A8 | Design partners will accept 50% pricing for input | Program design | Signed pilot terms | Untested |

## 4. Open questions

**Strategy**

1. Are we a product company or a network company? The answer changes the moat,
   the margin, and the fundraise.
2. If a lab incumbent builds this, what do we have that they don't? (Answer must
   be cross-vendor neutrality + workflow depth, not features.)
3. Is the beachhead a metro or a care segment? Pick one axis.

**Product**

4. Who owns the patient identity when four organizations each have a different
   MRN?
5. Do we need a patient-facing app in year one, or is a secure link enough?
6. What is the minimum viable clinical dataset for a partner to trust the
   timeline?
7. How do we handle paper and phone partners without building a call center?

**Commercial**

8. Can we sell to payers directly, or always through providers?
9. What contract term is realistic for a 90-day pilot conversion?
10. Does the lab revenue share create an Anti-Kickback problem when the lab is
    also a referral source?

**Regulatory**

11. Does routing + triage constitute CDS or a device function?
12. What is the EU entity and data residency timeline?
13. Do we need a UK representative before UK design partners?

**Team**

14. Does the first clinical hire need to be an MD, or can it be an RN with a
    medical director advisor?
15. What is the smallest team that can support 10 customers without burning
    trust?

## 5. Kill criteria (be honest early)

We should stop or pivot if, by **June 2027**:

- Fewer than 2 design partners have live episodes, or
- Custody completeness cannot exceed 90% with reasonable engineering effort, or
- Fewer than 3 of 10 interviewed buyers will sign a priced LOI, or
- A lab or EHR incumbent offers the same workflow bundled at no incremental
  cost and buyers accept it.

Stopping is not failure; continuing without evidence is.
