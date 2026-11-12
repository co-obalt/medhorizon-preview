# Roadmap, metrics, and team plan

**Status:** plan · dates are targets, not commitments
**Last updated:** 12 November 2026

---

## 1. Phase plan

| Phase | Window | Goal | Exit criteria |
| --- | --- | --- | --- |
| **P0 — Foundation** | Nov–Dec 2026 | Brand, site, waitlist, spec, partner pipeline | Waitlist live; 3 lab/courier conversations; beta scope frozen |
| **P1 — Private beta** | Jan–Mar 2027 | Prove custody + dispatch with 2 partners | 100% custody coverage; rejection rate down 30% |
| **P2 — Clinical expansion** | Apr–Jun 2027 | Add clinician network and result release | 5 partners live; 2 paid contracts |
| **P3 — GA readiness** | Jul–Sep 2027 | Security, support, pricing, documentation | SOC 2 Type I; 10 customers; published pricing |
| **P4 — Scale** | Oct 2027– | Second metro, EU residency, payer programs | $1M ARR run rate; EU design partner live |

## 2. Quarterly roadmap

### Q4 2026 — Foundation

- [x] Brand, narrative, and design system
- [x] Marketing site and waitlist (local; deploy pending)
- [x] Product spec v0.3 and clinical model draft
- [ ] Beachhead metro decision + lab/courier LOIs
- [ ] Security baseline: SSO, RBAC, audit log, secrets
- [ ] Event spine prototype and FHIR facade spike

### Q1 2027 — Beta

- [ ] Order intake, routing, and custody scanning
- [ ] Dispatch with ETA and proof of handoff
- [ ] Offline-first mobile documentation
- [ ] HL7 v2 ORU result ingestion
- [ ] Consent ledger and audit export
- [ ] Design partners #1–2 live
- [ ] Clinical advisory board formed

### Q2 2027 — Clinical

- [ ] Clinician credentialing and scope matching
- [ ] Async triage and video consults (partner vendor)
- [ ] Result triage, critical-value escalation, patient release
- [ ] EHR writeback (one EHR deeply, not five shallowly)
- [ ] Partners #3–6 live; first paid contract
- [ ] SOC 2 Type I readiness assessment

### Q3 2027 — GA readiness

- [ ] Multi-tenant hardening, backup/restore drills
- [ ] Support tiers, status page, incident communications
- [ ] Pricing published; self-serve demo environment
- [ ] SOC 2 Type I report; ISO 27001 gap assessment
- [ ] Partner #7–10; second lab integration

### Q4 2027 — Scale

- [ ] Second metro with existing lab partner
- [ ] EU data residency design and first EU partner
- [ ] Payer program pilot
- [ ] Analytics: network benchmarks and TAT dashboards
- [ ] Hiring: support lead, second engineer, partnerships

## 3. North star and KPI tree

**North star:** **completed episodes per week** — an episode is complete when
the result is released and acted on, not when the visit ends.

```
Completed episodes / week
├── Demand
│   ├── Orders created
│   ├── Orders accepted by a partner
│   └── Order → assignment time
├── Execution
│   ├── Visits completed / scheduled
│   ├── Specimen rejection rate
│   ├── Custody completeness
│   └── Handoff exceptions / 100 episodes
├── Clinical
│   ├── Median order → result time
│   ├── Critical value acknowledgment within 30 min
│   └── Result release rate
└── Retention
    ├── Weekly active organizations
    ├── Net revenue retention
    └── Support tickets / 100 episodes
```

### Metric definitions (use these exactly)

| Metric | Definition |
| --- | --- |
| Completed episode | Result released and acknowledged, or explicitly closed with a documented reason |
| Custody completeness | Specimens with a scan event at every required boundary / all specimens |
| Rejection rate | Rejected specimens / collected specimens, by reason code |
| Order → assignment | Order created to clinician or team assigned, median and p90 |
| Order → result | Order created to result released, median and p90 |
| Handoff exception | A custody or assignment boundary that breached its SLA or required manual intervention |
| WAU org | Organization with ≥ 1 episode event in the last 7 days |

## 4. Instrumentation plan

Events to emit from day one (all carry tenant, actor, episode, timestamp):

- `order.created`, `order.routed`, `order.accepted`, `order.cancelled`
- `visit.scheduled`, `visit.started`, `visit.completed`, `visit.failed`
- `specimen.collected`, `specimen.custody.transferred`, `specimen.received`,
  `specimen.rejected`
- `result.received`, `result.critical`, `result.released`, `result.acknowledged`
- `consent.granted`, `consent.revoked`
- `exception.opened`, `exception.resolved`
- `access.break_glass`

Dashboards: operations (live board), quality (weekly), commercial (monthly).
No per-clinician surveillance metrics; measure workflow, not people.

## 5. Team plan

| Role | When | Why |
| --- | --- | --- |
| Founder / CEO | Now | Sales, product, regulatory |
| Founding engineer (platform) | Q4 2026 | Event spine, integrations, security |
| Clinical lead (fractional → full-time) | Q1 2027 | Protocols, credentialing, partner clinical sign-off |
| Engineer (frontend / mobile) | Q1 2027 | Clinician and courier surfaces |
| Operations lead | Q2 2027 | Partner onboarding, dispatch exceptions |
| Privacy / compliance (fractional) | Q1 2027 | HIPAA, DPIA, BAAs |
| Customer success | Q3 2027 | Retention and expansion |
| Partnerships | Q4 2027 | Lab and courier network |

**Advisors (unpaid or equity-light):** lab operations, home care COO, health
system innovation, regulatory counsel.

## 6. Budget outline (Year 1)

| Category | Amount (USD) | Notes |
| --- | --- | --- |
| Salaries and contractors | $1.05M | 5 FTE blended |
| Cloud and tooling | $60k | Beta scale |
| Legal and regulatory | $120k | BAA/DPA, device assessment, entity |
| Security and audit | $70k | SOC 2 readiness |
| Insurance | $35k | Cyber, professional, D&O |
| GTM and travel | $80k | Partner visits, conferences |
| Design and brand | $25k | Already partially spent |
| Contingency | $160k | 12% |
| **Total** | **≈ $1.6M** | Seed-sized, 12-month runway |

## 7. Operating cadence

- **Monday:** metrics review (north star + exceptions), 45 minutes.
- **Wednesday:** product/engineering demo, 30 minutes.
- **Friday:** partner pipeline and clinical safety review, 45 minutes.
- **Monthly:** clinical governance committee; board-style update.
- **Quarterly:** roadmap reset; pricing and packaging review.

## 8. Decision gates

1. **Metro gate (Dec 2026):** lab + courier LOIs signed, 2 partners committed.
   If not, reconsider metro rather than build more.
2. **Beta gate (Mar 2027):** custody completeness ≥ 95%, rejection down ≥ 20%.
   If not, fix the wedge before adding clinical features.
3. **GA gate (Sep 2027):** SOC 2 Type I, 10 customers, support SLAs proven,
   clinical sign-off. If not, delay GA; do not ship without security proof.
