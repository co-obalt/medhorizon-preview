# Causeway — Company one-pager

**Status:** pre-launch · private beta planned Q1 2027
**Last updated:** 12 November 2026
**Owner:** founders
**Entity (planned):** Causeway Health, Inc., Delaware, USA

---

## In one line

Causeway is the coordination layer for distributed care: one network for clinicians, mobile medical teams, diagnostic labs, and the logistics that move between them.

## The thesis

Care is leaving the building faster than the software that coordinates it.

Three shifts are happening at once:

1. **The site of care moved.** Home visits, mobile units, retail clinics, and employer sites now sit alongside hospitals — but the operational record still assumes everyone is in one building.
2. **Diagnostics moved to the patient.** Point-of-care devices and home collection make the specimen the unit of coordination, not the appointment.
3. **The workforce became a network.** Clinicians, mobile teams, lab couriers, and partner labs are separate organizations with separate systems and separate incentives.

The result is an **archipelago**: islands of excellent care separated by water nobody owns. The missing layer is not another EHR, portal, or DTC brand. It is an operational spine that makes the order, the specimen, the result, and the handoff legible across organizations — with consent and audit attached.

## What we sell

One platform, four operational surfaces, one event spine.

| Surface | Buyer's job | Core capability |
| --- | --- | --- |
| Clinical network | Get the right licensed clinician onto the episode | Async triage, e-consults, video, credential/scope matching, FHIR writeback |
| Mobile care | Run visits outside four walls | Routing, kits and inventory, offline-first documentation, POC device capture |
| Diagnostics | Get from order to actionable result | Lab catalog and routing, barcode chain of custody, result triage and release |
| Real-time logistics | Move people and specimens reliably | Dispatch, ETA, cold chain, proof of handoff, exception queues |

## Who buys

- **Health systems and payers** running home-based or mobile programs.
- **Mobile and home care organizations** with 20–500 clinicians.
- **Diagnostic labs** that want cleaner orders and fewer rejected specimens.
- **Logistics operators** serving healthcare who need custody, not just delivery.

Beachhead: mid-market mobile diagnostics and home care organizations in one US metro, paired with a regional CLIA lab and a courier partner.

## The wedge

**Specimen custody + dispatch.** It is the most visible, most measurable failure in distributed care: samples lost, rejected, delayed, or unaccounted for. Fixing custody proves the platform's value in weeks, creates a data moat (routes, turnaround, rejection reasons), and earns the right to coordinate clinical capacity next.

## Business model (summary)

- Platform subscription: **$3k–$25k+/month** depending on surface and scale.
- Usage: **$2 per routed order**, **$0.75 per custody scan**, **8% of logistics spend** (or $2.50/stop).
- Implementation: **$25k–$150k** for enterprise; waived for design partners.
- Design partners: founder pricing locked for 24 months.

Full detail in [06-business-model.md](06-business-model.md).

## Three-year goal

Become the default coordination layer for distributed care in two US metros and one EU region: **250 connected organizations**, **40k completed episodes per week**, and a defensible dataset of cross-organizational care handoffs.

## Non-goals (for now)

- **Not a DTC clinic or consumer brand.** We do not want to own the patient relationship.
- **Not an EHR.** We integrate and write back; the chart of record stays where it is.
- **Not a lab or a courier fleet.** We partner and coordinate; asset-heavy operations are out of scope.
- **Not a payer.** We sell to payers, not risk-bearing.
- **Not a diagnostic device maker.** We integrate POC devices and respect their regulatory clearance.

## Founding principles

1. **The record follows the patient.** One timeline across organizations, not four portals.
2. **Every handoff has an owner and a timestamp.** Ambiguity is the enemy of safety.
3. **Compliance is architecture.** Consent, minimum necessary, and audit are enforced in code.
4. **Integrate, don't replace.** Respect the systems clinicians already use.
5. **Boring reliability beats clever demos.** A specimen tracked beats an AI feature announced.

## Current status (November 2026)

| Area | State |
| --- | --- |
| Brand and narrative | Defined — see [10-brand.md](10-brand.md) |
| Website and waitlist | Built and running locally; deployment pending |
| Product specification | v0.3 — see [03-product.md](03-product.md) |
| Clinical model | Drafted — see [04-clinical-operations.md](04-clinical-operations.md) |
| Regulatory strategy | Drafted; outside counsel selection in progress |
| Design partners | 0 signed / 12 target slots |
| Team | 1 founder; hiring founding engineer and clinical lead |

## Open decisions

1. **Launch metro.** Shortlist: Atlanta, Dallas, Rotterdam. Criteria: mobile care density, lab partner willingness, state licensure friction.
2. **Lab partnership structure.** Revenue share vs. flat integration fee vs. preferred-network agreement.
3. **Dispatch engine.** Build on an existing routing API (Mapbox/Onfleet) vs. in-house constraint solver.
4. **EU entity timing.** Needed before EU production data; not needed for design-partner discovery.
5. **First clinical claim.** Diagnostics coordination is lower-risk than triage recommendations; sequence accordingly.

## Contacts

- General: hello@causeway.health
- Design partners: partners@causeway.health
- Privacy: privacy@causeway.health
