# Causeway documentation

Internal startup documentation. Written to be read by a future teammate, a
design partner, or counsel — not scraped for marketing copy.

**Status:** pre-launch · last full revision 12 November 2026

---

## Read in this order

| # | Document | What it answers | Status |
| --- | --- | --- | --- |
| 01 | [Company](01-company.md) | What are we building, for whom, and why now? | Solid draft |
| 02 | [Market](02-market.md) | How big is the problem, who competes, how do we position? | Sizing unvalidated |
| 03 | [Product](03-product.md) | What is the platform, technically? | Spec v0.3 |
| 04 | [Clinical operations](04-clinical-operations.md) | How is care delivered and governed? | Needs clinical review |
| 05 | [Regulatory](05-regulatory-compliance.md) | What rules apply, and what do we do about them? | Needs counsel |
| 06 | [Business model](06-business-model.md) | How do we make money, and what are the economics? | Hypothesis |
| 07 | [Go-to-market](07-go-to-market.md) | Who do we sell to first, and how? | Hypothesis |
| 08 | [Roadmap & metrics](08-roadmap-metrics.md) | What gets built when, and how do we measure it? | Plan |
| 09 | [Risks](09-risks.md) | What could kill us, and what are the open questions? | Living |
| 10 | [Brand](10-brand.md) | What does Causeway mean and sound like? | v1 |
| 11 | [Waitlist program](11-waitlist-program.md) | How do we qualify and onboard design partners? | Implemented locally |
| 12 | [Glossary](12-glossary.md) | What do these acronyms mean? | Living |

Design system: the live tokens and component styles in `app/globals.css` and the
component CSS modules.

## Status legend

| Label | Meaning |
| --- | --- |
| **Solid draft** | We would defend this in a partner conversation |
| **Hypothesis** | Written to be tested; numbers are assumptions |
| **Needs counsel / clinical review** | Not safe to act on without a professional |
| **Living** | Updated as we learn; check the date |

## Conventions used in these docs

- **ASSUMPTION** marks a number or belief that has not been validated.
- Every metric has a definition. "TAT" and "completion" are not used loosely.
- Compliance statements say what is *designed*, never "certified", unless a
  report exists.
- Illustrative traces, timings, and code are labeled as illustrative.
- No patient data, real or synthesized, appears in these documents.

## Before external use

1. Replace market-sizing inputs with primary research (see 02, §7).
2. Have counsel review 05 and the privacy/terms pages.
3. Have a medical director sign 04 and the critical-value protocol.
4. Trademark clearance for the name.
5. Remove internal risk and kill criteria from any investor-facing excerpt
   unless intentional.

## Maintenance

- Update the date at the top of any document you change.
- Keep pricing consistent across 01, 06, and 07. They are cross-referenced.
- If a decision changes, record it in the relevant doc and in 09's open
  questions — do not leave two truths.
