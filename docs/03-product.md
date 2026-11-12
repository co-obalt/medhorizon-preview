# Product and platform specification

**Version:** 0.3 · **Status:** pre-build specification
**Last updated:** 12 November 2026

---

## 1. Product definition

Causeway is a multi-tenant coordination platform with four operational
surfaces and one clinical event spine. It does **not** replace the EHR, the
lab information system (LIS), or the courier's dispatch system. It sits between
them, owns the cross-organizational workflow, and writes back.

**Primary unit of work:** an **episode** — a patient, an order, a location, and
a set of participants working against a shared clock.

## 2. Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│  Surfaces                                                            │
│  Clinical network │ Mobile care │ Diagnostics │ Logistics            │
└───────────────┬───────────┬───────────┬───────────┬──────────────────┘
                │           │           │           │
        ┌───────▼───────────▼───────────▼───────────▼───────┐
        │  Coordination services                            │
        │  matching · scheduling · routing · custody        │
        │  consent · notifications · exception handling     │
        └───────────────────────┬───────────────────────────┘
                                │
        ┌───────────────────────▼───────────────────────────┐
        │  Event spine (append-only, per-tenant)            │
        │  order.* · visit.* · specimen.* · result.*        │
        │  consent.* · handoff.* · exception.*              │
        └───────┬───────────────────────────┬───────────────┘
                │                           │
     ┌──────────▼─────────┐      ┌──────────▼──────────────┐
     │  Integration layer │      │  Analytics / projections │
     │  FHIR · HL7 v2     │      │  timelines, SLA, quality │
     │  SMART · webhooks  │      └─────────────────────────┘
     └──────────┬─────────┘
                │
   EHR · LIS · POC devices · courier APIs · identity · payments
```

### Deployment model

- **Multi-tenant SaaS** for standard deployments (US regions first).
- **Single-tenant** in the customer's cloud account for regulated or
  enterprise deployments; same APIs, isolated data plane.
- **EU data residency** as a separate regional stack, not a promise in a DPA.

## 3. The four surfaces

### 3.1 Clinical network

| Capability | MVP | Notes |
| --- | --- | --- |
| Clinician roster and credentials | Yes | License, DEA, board, malpractice, language |
| Scope-of-practice matching | Yes | Hard constraint, not a ranking signal |
| Async intake and triage | Yes | Structured forms + rules-based escalation |
| Video and phone consults | Yes | Embedded vendor initially, not built in-house |
| E-consult / second opinion | Later | Requires specialty network |
| Chart writeback | Yes | FHIR DocumentReference + DiagnosticReport where available |

### 3.2 Mobile care

| Capability | MVP | Notes |
| --- | --- | --- |
| Visit booking and assignment | Yes | Time windows, skills, kit requirements |
| Route sequencing | Yes | Start with routing API; constraint solver later |
| Kit and inventory checks | Yes | Per-visit checklist, lot/expiry capture |
| Offline-first documentation | Yes | Local queue, deterministic conflict resolution |
| POC device capture | Partial | Manual entry + 2 device integrations in beta |
| Cold-chain logging | Yes | Manual + Bluetooth probe integration |

### 3.3 Diagnostics

| Capability | MVP | Notes |
| --- | --- | --- |
| Lab catalog and panel mapping | Yes | LOINC-coded; per-lab availability |
| Order routing | Yes | Coverage, geography, TAT, capability |
| Barcode specimen labels | Yes | Code 128 + QR fallback |
| Chain of custody | Yes | Scan events, actor, timestamp, location |
| Result ingestion | Yes | HL7 v2 ORU first; FHIR DiagnosticReport next |
| Critical value escalation | Yes | Policy-driven, time-boxed, audited |
| Patient release rules | Yes | Clinician-approved templates |

### 3.4 Real-time logistics

| Capability | MVP | Notes |
| --- | --- | --- |
| Dispatch and assignment | Yes | Manual override always available |
| ETA and live status | Yes | Customer-facing link, not a login |
| Cold chain and time windows | Yes | Hard constraints for specimen viability |
| Proof of handoff | Yes | Scan + signature + photo, immutable |
| Exception queues | Yes | Owner, SLA, escalation, credit rules |
| Fleet telematics | Later | Partner APIs only |

## 4. The event spine

All surfaces publish to one append-only log. Projections build:
patient timeline, episode status, SLA timers, custody history, and quality
metrics.

**Event envelope (illustrative):**

```json
{
  "event_id": "evt_8f21c0",
  "tenant_id": "org_218",
  "type": "specimen.custody.transferred",
  "occurred_at": "2026-11-12T14:47:03Z",
  "actor": { "type": "practitioner", "ref": "Practitioner/4410" },
  "subject": { "patient": "Patient/9d1c", "episode": "Episode/ep_771" },
  "payload": {
    "specimen": "Specimen/SP-2291",
    "from": "Unit/04",
    "to": "Courier/12",
    "method": "barcode_scan",
    "temperature_c": 4.1
  },
  "consent_ref": "Consent/cs_552",
  "prev_event": "evt_8f21b7"
}
```

**Rules:**

- Events are immutable. Corrections are new events, never edits.
- Every event carries tenant, actor, subject, and consent reference.
- Consumers are idempotent; delivery is at-least-once.
- Retention: 7 years for clinical/audit events (configurable by jurisdiction).
- Export: full episode as FHIR Bundle + NDJSON event log.

## 5. Data model (core FHIR resources)

| Concept | FHIR resource | Notes |
| --- | --- | --- |
| Patient | `Patient` | Linked identities, no duplicative MPI in v1 |
| Clinician | `Practitioner`, `PractitionerRole` | License and scope in extensions |
| Organization | `Organization`, `Location` | Tenant boundary and service sites |
| Order | `ServiceRequest` | Panel, priority, reason, coverage |
| Visit | `Encounter` | Home, mobile unit, virtual |
| Specimen | `Specimen` | Container, volume, condition, custody |
| Result | `Observation`, `DiagnosticReport` | LOINC, units, reference range |
| Consent | `Consent` | Scope, actor, expiry, revocation |
| Document | `DocumentReference` | Notes, images, PDFs |
| Communication | `Communication` | Patient messages, escalations |

**Identifiers:** internal UUIDs; external identifiers stored as
`Identifier.system/value` and never used as primary keys.

## 6. Consent and access model

- Consent is a first-class record with **scope** (care, diagnostics, billing,
  research), **actor**, **expiry**, and **revocation**.
- Access checks run at read time. A revoked consent invalidates access
  immediately, including cached projections.
- Minimum necessary is enforced per role and per episode, not per tenant.
- Break-glass access exists for emergencies, requires a reason, and pages the
  privacy officer.
- Every read of a patient-scoped resource writes an audit event.

## 7. MVP scope (private beta)

**In scope**

- One US state/metro, 3–5 design partners.
- Clinical matching, order routing, specimen custody, dispatch, result
  ingestion, patient release.
- FHIR facade for patient/order/result; HL7 v2 ORU ingestion.
- Manual lab and courier onboarding with CSV + webhook bridges.
- Audit log, consent ledger, role-based access, SSO.

**Out of scope for MVP**

- Claims adjudication and billing.
- In-house video infrastructure.
- Native mobile apps for patients (responsive web only).
- Automated clinical decision support or triage recommendations.
- Multi-country tax, invoicing, and localization.
- AI-generated summaries (revisit only with a validated use case).

## 8. Non-functional requirements

| Area | Target (beta) | Target (GA) |
| --- | --- | --- |
| Availability | 99.5% monthly | 99.9% monthly |
| Order routing latency | p95 < 800 ms | p95 < 400 ms |
| Event ingestion | 50 events/s/tenant | 500 events/s/tenant |
| Offline capture | 8 hours, 200 visits | 24 hours, 1,000 visits |
| Audit retention | 7 years | 7 years, WORM option |
| RPO / RTO | 15 min / 4 h | 5 min / 1 h |
| Accessibility | WCAG 2.2 AA (clinician UI) | AA + patient-facing audit |

## 9. Integration strategy

| System | Method | Priority |
| --- | --- | --- |
| EHR (Epic, Oracle, athena) | FHIR R4 + SMART launch; HL7 v2 where needed | P0 |
| Lab (LIS) | HL7 v2 ORM/ORU; FHIR later | P0 |
| Courier platforms | REST webhooks + CSV fallback | P0 |
| Identity | OIDC/SAML SSO; SCIM for provisioning | P0 |
| Payments | Stripe (platform fees), invoicing for enterprise | P1 |
| POC devices | Vendor SDK / Bluetooth / manual entry | P1 |
| e-Prescribing | Third-party EPCS vendor | P2 |
| Public health reporting | Jurisdiction-specific; not MVP | P2 |

## 10. Build vs buy

| Capability | Decision | Reason |
| --- | --- | --- |
| Video | Buy | Commodity; differentiate on coordination, not codecs |
| Routing / maps | Buy, wrap | Start with routing API; own constraints and SLAs |
| Consent ledger | Build | Core differentiator and regulatory surface |
| Custody scanning | Build | Simple, high-value, ties to event spine |
| HL7 engine | Buy or partner | Mature vendors exist; avoid protocol maintenance |
| Identity | Buy | Security risk not worth differentiating on |
| Analytics | Build thin, buy warehouse | Start with projections; don't build a BI tool |

## 11. Open technical decisions

1. Event store: Postgres append-only table vs. Kafka + object storage.
2. Multi-tenancy isolation: row-level security vs. schema-per-tenant.
3. Offline conflict resolution: last-write-wins vs. event merge with clinician
   review.
4. FHIR facade: HAPI vs. thin custom layer over the event spine.
5. EU stack: separate cloud account and region from day one, or at first EU
   partner.
6. Device integration order: glucose/INR first, or vitals hub first.
