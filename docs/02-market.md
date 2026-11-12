# Market, competition, and positioning

**Status:** working draft · all sizing inputs are assumptions to validate
**Last updated:** 12 November 2026

> **Read this first:** every number in this document is a *model input*, not a
> researched market fact. Replace the bracketed inputs with primary research
> (interviews, association data, public procurement records) before using any
> figure externally. The structure is the deliverable; the numbers are not yet.

---

## 1. The market we are actually in

Causeway does not sell telehealth minutes, lab tests, or courier runs. It sells
**coordination** across those categories. That makes the budget line
"operations infrastructure" rather than "virtual care" — which is both the
opportunity and the sales challenge.

Three adjacent markets define the demand:

| Adjacent market | What buyers already spend on | Why it pulls Causeway in |
| --- | --- | --- |
| Virtual and distributed care | Clinician platforms, telehealth vendors, navigation | They have supply but no physical coordination layer |
| Home and mobile care | Scheduling, EMR, fleet, kits | They have operations but no clinical/lab spine |
| Diagnostics | Lab services, collection kits, logistics | They have volume but lose context between order and result |

## 2. Bottom-up sizing model (illustrative)

Formula: **TAM = organizations × annual contract value**, before usage revenue.
Ranges are deliberately wide; the base case is what a seed-stage plan should
defend.

| Segment | Definition | Orgs (US+EU) low / base / high | ACV low / base / high (USD) | Base ARR pool |
| --- | --- | --- | --- | --- |
| Health systems with distributed care | Systems running home programs, mobile units, or owned labs | 900 / 2,400 / 4,000 | $80k / $180k / $450k | $432M |
| Mobile and home care | Independent mobile diagnostics, home care, paramedical | 2,000 / 6,000 / 12,000 | $24k / $60k / $150k | $360M |
| Diagnostic labs | Regional and specialty labs buying order + custody workflow | 300 / 1,200 / 3,000 | $36k / $90k / $240k | $108M |
| Payers and employers | Program budgets for in-home assessment and screening | 150 / 600 / 1,500 | $150k / $400k / $1M | $240M |
| **Total platform TAM (base)** | | | | **≈ $1.14B** |

Add usage: at base, assume 30% of platform revenue again from per-order,
custody, and logistics fees → **≈ $1.5B** revenue pool. Serviceable market
(English-speaking US + Benelux + Nordics, mid-market and above) is roughly
**15–20%** of TAM in the first five years.

**SOM, 36 months:** 40 paying organizations, average $140k ARR, plus usage →
**≈ $7–8M ARR**. This is a plan, not a forecast.

### What has to be true

1. Buyers treat coordination as a budgeted problem, not an IT nice-to-have.
2. A single platform can serve clinical, lab, and logistics buyers without
   becoming three products.
3. Lab and courier partners accept a coordinating layer rather than seeing it
   as disintermediation.
4. Integration cost per organization stays under ~$15k of services.

If (1) or (3) fails, the company becomes a services business. That is the
central market risk.

## 3. Competitive landscape

| Player type | Examples | Strength | Gap Causeway exploits |
| --- | --- | --- | --- |
| Virtual care platforms | Teladoc, Amwell, Included Health | Clinician supply, payer contracts, brand | No specimen custody, dispatch, or mobile ops; visit ends at the video call |
| DTC diagnostics and clinics | Function, Neko, Tia, Color | Beautiful patient experience, panel design, owned labs | They own the front door; they do not sell the B2B coordination layer |
| Clinician marketplaces | Wheel, SteadyMD, Zocdoc | Flexible supply, fast onboarding | No physical network, no lab chain of custody, no logistics |
| Lab incumbents | Labcorp, Quest, regional labs | Scale, analyzer network, payer relationships | Closed workflows; third-party order-to-result experience is poor |
| EHR and interoperability | Epic, Oracle Health, Health Gorilla, Particle | Chart of record, FHIR exchange, incumbency | Data exchange is not operations; no dispatch, kits, custody, or SLAs |
| Home care software | WellSky, AlayaCare, AxisCare | Scheduling, billing, caregiver mobile apps | No clinical network, no diagnostics spine, no cross-org event model |
| Point solutions | Routing, courier, e-consent vendors | Cheap, focused | Buyer assembles and maintains the integration burden |

### Positioning statement

> For organizations that deliver care outside four walls, Causeway is the
> coordination layer that connects clinical capacity, diagnostics, and
> logistics on one patient timeline. Unlike virtual care platforms or home
> care software, Causeway is built around the handoff — every order, specimen,
> result, and custodian is tracked, consented, and auditable across
> organizations.

### Positioning map

- **Horizontal ↔ vertical:** Causeway is horizontal infrastructure inside
  healthcare, not a vertical clinic brand.
- **System of record ↔ system of action:** Causeway is a system of action that
  writes to systems of record.
- **Owns supply ↔ orchestrates supply:** orchestrates; asset-light by design.

## 4. Why now

1. **Reimbursement followed the home.** Home-based and mobile care are now
   billable in ways they were not a decade ago, creating operators with budget
   and volume.
2. **Point-of-care diagnostics matured.** More assays are waived and
   instrumented, which moves the coordination bottleneck from the analyzer to
   the workflow around it.
3. **Interoperability is mandated, not optional.** FHIR-based exchange and
   information-blocking rules make a cross-org layer commercially viable;
   buyers no longer accept "our API is the integration."
4. **Labor scarcity forces orchestration.** Organizations cannot hire their way
   out of coordination work; they have to systematize it.
5. **EU data spaces are forming.** EHDS creates pressure and permission for
   cross-border, patient-mediated records — a tailwind for a consent-first
   spine.

## 5. Buyer map

| Buyer | Budget owner | Trigger to buy | Success metric they care about |
| --- | --- | --- | --- |
| Mobile care org | COO / VP Operations | Route density stalls; specimen rejections rise | Visits per team per day; rejection rate |
| Health system | VP Ambulatory / Innovation | Home program launches; leakage reported | Completed referrals; ED avoidance |
| Diagnostic lab | VP Operations / Commercial | Order quality and TAT become a sales issue | TAT, rejection rate, cost per accession |
| Payer | VP Clinical Programs | Home assessment pilot needs infrastructure | Completion rate; time to result |
| Logistics operator | GM / Head of Healthcare | Healthcare volume requires compliance proof | On-time handoff; custody exceptions |

## 6. Market risks to watch

- **Budget confusion:** three buyers, three budget lines. Mitigation: sell one
  measurable outcome to one budget owner first (custody/dispatch).
- **Incumbent bundling:** EHR or lab incumbents add coordination features.
  Mitigation: be cross-vendor and prove switching value; stay integration-first.
- **Partner channel conflict:** labs and couriers may resist a layer that owns
  the customer experience. Mitigation: position as demand and efficiency, not
  disintermediation; share data both ways.
- **Regulatory drag:** device claims could lengthen sales cycles. Mitigation:
  launch non-device coordination first; separate SaMD roadmap.

## 7. Research to complete before fundraising

- [ ] 25 buyer interviews across the four segments; document current stack and
      coordination headcount.
- [ ] 5 lab partnership conversations with volume and pricing terms.
- [ ] 3 courier partnerships with custody/SLA requirements.
- [ ] Verify organization counts from AHA, home care associations, CLIA
      registry, and EU trade bodies.
- [ ] Test willingness to pay with a priced LOI, not a survey.
