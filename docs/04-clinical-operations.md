# Clinical operations and care model

**Status:** draft for clinical advisory review
**Last updated:** 12 November 2026
**Owner:** clinical lead (hiring)

> This document describes how care is delivered on Causeway. It is not a
> clinical protocol and must be reviewed and signed off by a credentialed
> medical director before any patient is seen.

---

## 1. Care model

Causeway coordinates three types of episode:

| Episode type | Example | Who delivers | Causeway's role |
| --- | --- | --- | --- |
| **Virtual-first** | Async triage → video → lab order | Partner clinicians | Match, consent, order, result routing |
| **Mobile visit** | Home draw, wound check, vitals | Mobile care partner | Dispatch, kit check, custody, documentation |
| **Hybrid** | Video consult → home specimen → lab result → follow-up | Clinician + mobile team + lab + courier | Own the thread across all four |

The platform does not employ clinicians in the beta. Clinical services are
delivered by partner organizations under their own licenses and malpractice
coverage; Causeway provides the coordination layer and the shared record.

## 2. Roles and responsibilities

| Role | Employed by | Responsibilities | Access |
| --- | --- | --- | --- |
| Treating clinician | Partner org | Assess, order, interpret, prescribe, release results | Episode-scoped clinical record |
| Mobile clinician / phlebotomist | Mobile partner | Visit, draw, document, hand off specimen | Episode + kit + custody |
| Lab scientist | Lab partner | Accession, run, validate, report | Order + specimen + result |
| Courier | Logistics partner | Collect, transport, hand off | Custody events only, no clinical notes |
| Care coordinator | Customer org | Schedule, chase, resolve exceptions | Episode status, no clinical detail |
| Causeway clinical lead | Causeway | Protocol governance, escalation design, training | Aggregate + audit, break-glass only |
| Privacy officer | Causeway | Consent, access reviews, incident response | Audit logs, no clinical content by default |

**Rule:** the minimum necessary view is the default. Couriers never see
diagnosis or result. Coordinators see status, not content. Break-glass is
logged and reviewed weekly.

## 3. Credentialing and scope

Before a clinician can be matched to an episode:

- [ ] Identity verified (government ID + liveness)
- [ ] Active license verified against the state/regional board
- [ ] DEA registration verified where prescribing is in scope
- [ ] Board certification verified for the relevant specialty
- [ ] Malpractice coverage confirmed (limits per partner agreement)
- [ ] Sanctions/exclusion screening (OIG LEIE, SAM, EU equivalents)
- [ ] Training completed: platform, consent, escalation, documentation
- [ ] Attestation signed and dated

**Matching constraints (hard):**

1. License valid in the patient's location at the time of care.
2. Scope includes the requested service (e.g., pediatric, prescribing).
3. Language match or interpreter available.
4. No conflict of interest (prior relationship, family).
5. Capacity within the episode SLA.

Ranking signals (soft): continuity with prior clinician, response time,
patient preference, cost.

## 4. Service-level expectations (beta)

| Step | Target | Escalation if missed |
| --- | --- | --- |
| Order acknowledged | 15 min | Coordinator queue, then ops lead |
| Clinician assigned | 30 min (urgent), 4 h (routine) | Overflow pool |
| Mobile visit scheduled | Same day (urgent), 72 h (routine) | Partner manager |
| Specimen collected → lab received | 4 h metro | Courier exception + lab notification |
| Result returned (routine panel) | 24–48 h | Lab account manager |
| Critical value communicated | 30 min from result | Direct call + documented read-back |
| Patient notified (routine) | 24 h after clinician release | Coordinator follow-up |

These are **design targets**, not contractual SLAs. Contractual SLAs are set
per partner agreement.

## 5. Critical results and escalation

**Definition:** a result meeting the partner's critical-value list (e.g.,
potassium > 6.5 mmol/L, INR > 5, hemoglobin < 7 g/dL, positive blood culture).
The definitive list is owned by the medical director.

**Protocol:**

1. LIS flags critical → Causeway creates a `result.critical` event.
2. Treating clinician is paged (primary), then clinical lead (secondary) after
   10 minutes.
3. Read-back is documented with time, name, and acknowledgment.
4. Patient contact attempt is logged. If unreachable after two attempts and
   30 minutes, emergency services protocol applies per jurisdiction.
5. Incident review within 24 hours; root cause within 5 business days.

**Safety rule:** no automated release of critical or abnormal results to
patients. Human release only.

## 6. Documentation standards

- Every visit note must include: date/time, location, participants, consent
  reference, observations, specimens collected (with identifiers), plan, and
  follow-up owner.
- Free-text is allowed; structured fields are required for anything that drives
  a downstream action (order, result, escalation).
- Offline notes sync with a device timestamp and a sync timestamp; conflicts
  are surfaced to the author, never silently overwritten.
- Corrections are addenda, not edits. The original remains visible in audit.

## 7. Consent and patient communication

- Consent is captured before any clinical interaction, with scope explained in
  plain language and the patient's preferred language.
- Separate consent for: care delivery, diagnostic testing, data sharing across
  partners, and marketing. No bundling.
- Patients can revoke consent; revocation stops future sharing immediately and
  is logged. It does not delete records required for legal/clinical retention.
- Result communication uses clinician-approved templates. No diagnosis is
  delivered by SMS.
- Interpreters are available for every patient interaction; family members are
  not used as interpreters by default.

## 8. Clinical governance

**Committee:** medical director (chair), clinical lead, privacy officer,
quality lead, partner representative. Meets monthly; reviews:

- Critical-value and escalation audits (100% in beta).
- Adverse events and near misses.
- Consent and access exceptions.
- Protocol changes and training.
- Equity metrics (access, completion, follow-up by demographic group).

**Reporting:** any team member can raise a safety concern without retaliation.
Concerns are logged, triaged within 24 hours, and closed with a documented
action.

## 9. Quality metrics

| Metric | Definition | Beta target |
| --- | --- | --- |
| Episode completion | Order → result acted on | ≥ 85% |
| Time to result | Order → released result, median | ≤ 36 h routine |
| Specimen rejection | Rejected / collected | ≤ 2% |
| Handoff integrity | Custody events with actor + timestamp | 100% |
| Critical value acknowledgment | Within 30 min | 100% |
| Consent coverage | Episodes with valid consent at care time | 100% |
| Patient reach | Successful contact for abnormal results | ≥ 95% |
| Complaint rate | Complaints / 1,000 episodes | ≤ 3 |

## 10. Training and onboarding

Every clinical user completes a 90-minute module covering: platform
navigation, consent capture, documentation, specimen custody, escalation,
privacy, and incident reporting. Competency is verified with a scored scenario.
Refresher training is annual and after any material protocol change.

## 11. Open clinical questions

1. Who is the treating clinician of record for a partner-delivered mobile
   visit — the partner or the ordering clinician?
2. How are results released when the ordering clinician is unavailable?
3. What is the policy for pediatric and vulnerable-adult episodes in beta?
4. Which jurisdiction's critical-value list applies for cross-state patients?
5. Do we support controlled-substance prescribing in beta? (Recommendation:
   no.)
