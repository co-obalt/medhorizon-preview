# Regulatory and compliance strategy

**Status:** working draft for outside counsel
**Last updated:** 12 November 2026
**Owner:** founder + privacy officer (fractional)

> **Not legal advice.** This is an internal map of the obligations we believe
> apply, written so counsel can review efficiently. Nothing here should be
> repeated publicly as a compliance claim until it is verified and documented.

---

## 1. Our regulatory posture

Causeway is a **technology platform**, not a provider. In the beta:

- Clinical services are delivered by licensed partner organizations.
- Labs are CLIA-certified partners; Causeway does not perform testing.
- Causeway acts as a **business associate** (US) and **processor** (EU) for
  patient data, and as a **controller** for waitlist and account data.
- Causeway does not make diagnostic claims about its software in beta.

This posture reduces, but does not remove, regulatory exposure: the platform's
triage logic, result routing, and any clinical recommendation can become
software as a medical device (SaMD) if it meets the definition.

## 2. United States

### 2.1 HIPAA / HITECH

| Item | Posture |
| --- | --- |
| Role | Business Associate to covered entities and other BAs |
| BAA | Required before any PHI; template under counsel review |
| Safeguards | Administrative, physical, technical; risk analysis before go-live |
| Minimum necessary | Enforced per role and episode; break-glass audited |
| Breach notification | 60-day individual notice; HHS and media thresholds; playbook required |
| Workforce training | Annual HIPAA + security training; tracked completion |
| Retention | 7 years for audit/clinical records unless contract requires longer |
| Subcontractors | BAA flow-down required before onboarding |

**Do not say "HIPAA compliant."** Say "designed to operate under a BAA" until
the risk analysis, policies, and BAAs are executed.

### 2.2 State law

- **California (CMIA):** stricter than HIPAA for medical information; patient
  access and disclosure rules; vendor contracts.
- **Texas HB 300:** privacy training and disclosure requirements.
- **Washington My Health My Data:** consumer health data consent and
  authorization; applies to some non-HIPAA data.
- **State telehealth licensure:** clinician must be licensed where the patient
  is located at the time of care. Enforced as a hard matching constraint.
- **State POC testing rules:** waived tests and site certificates vary; partner
  labs and mobile units must hold the right CLIA certificate for the site.

### 2.3 Other federal

| Area | Relevance | Action |
| --- | --- | --- |
| 42 CFR Part 2 | Substance use disorder records if behavioral health partners join | Segment records; separate consent; legal review before that segment |
| TCPA | Patient SMS and calls | Prior express consent, opt-out, quiet hours; vendor DPA |
| FTC Act / Health Breach Notification | If any consumer-facing health data outside HIPAA | Scope review before DTC features |
| Information blocking (HTI-1) | We are not a certified health IT developer in beta | Monitor; design FHIR APIs to align |
| Anti-Kickback Statute / Stark | Partner incentives, lab revenue share, free software to referral sources | Counsel review of every lab and partner arrangement |
| DEA telemedicine rules | If prescribing controlled substances | Out of scope for beta |

## 3. FDA and diagnostics

| Question | Current position |
| --- | --- |
| Is Causeway a medical device? | Core coordination is workflow, not diagnosis. Triage recommendations, result interpretation, or alarms could create device functions. |
| SaMD classification | Not yet assessed function-by-function; required before any clinical recommendation ships. |
| Predicate strategy | Not applicable until a device function is defined. |
| CLIA | Partner labs hold certificates. Causeway does not perform testing. |
| Waived POC tests | Scope limited to waived assays performed by appropriately certified partners. |
| LDT rule | Monitor; partner labs are responsible for their own compliance. |
| Clinical decision support | Design to fit the CDS exemption (transparent basis, clinician review) where possible; legal confirmation required. |

**Decision rule:** any feature that tells a clinician *what the diagnosis is* or
*what to do next* is reviewed as a potential device before build, not after.

## 4. European Union and UK

| Area | Requirement | Posture |
| --- | --- | --- |
| GDPR | Controller/processor roles, lawful basis, DPA, records of processing, DPIA | DPIA before first EU patient data; DPA template required |
| Data residency | Customer expectation and some member-state rules | Separate EU stack planned before first EU partner |
| International transfers | SCCs + transfer impact assessment | US support access minimized; TIA required |
| EHDS | Patient-mediated access, cross-border use | Design aligns; timeline monitored |
| MDR 2017/745 | Software qualifying as a medical device | Same function-by-function review as FDA |
| IVDR 2017/746 | In-vitro diagnostic services and companion software | Partner labs responsible for assays; coordinate on software |
| EU AI Act | If ML is used for triage or prioritization | Avoid high-risk use until classification is complete |
| UK GDPR / DPA 2018 | UK representative if targeting UK individuals | Appoint before UK launch |
| MHRA | Device classification | Function review before UK clinical claims |
| CQC | Registration if we deliver regulated activities | Avoid by staying a platform; confirm with UK counsel |

## 5. Security and certification roadmap

| Framework | Why | Target |
| --- | --- | --- |
| SOC 2 Type I | Enterprise security questionnaire baseline | Q2 2027 |
| SOC 2 Type II | Enterprise and payer requirement | Q1 2028 |
| ISO 27001 | EU and enterprise credibility | Q3 2027 |
| ISO 27799 | Health-specific information security guidance | With 27001 |
| ISO 13485 | Only if a device function is pursued | Not planned |
| HITRUST | Some US health systems require it | Opportunistic, later |

**Controls to implement before beta:** SSO + MFA, least-privilege RBAC, audit
logging, encryption at rest and in transit, secrets management, vulnerability
scanning, dependency review, backup/restore testing, incident response
runbook, vendor risk review, device management, access reviews.

## 6. Data processing map

| Data | Source | Purpose | Retention | Access |
| --- | --- | --- | --- | --- |
| Waitlist contact data | Website form | Early access | 24 months / launch + 12 | Founders |
| Account and billing | Customers | Contract performance | 7 years (tax) | Finance, admins |
| Patient demographic | EHR / partner | Care coordination | 7 years or contract | Episode-scoped |
| Clinical notes | Partners | Care delivery | 7 years | Treating team |
| Specimen custody | Scanners / couriers | Chain of custody | 7 years | Ops, auditors |
| Result data | LIS / lab | Care delivery | 7 years | Treating team, patient (per release) |
| Audit logs | Platform | Security, compliance | 7 years, WORM option | Privacy officer |
| Support tickets | Customers | Support | 3 years | Support |

## 7. Policy and document inventory

Before the first patient episode:

- [ ] HIPAA security risk analysis
- [ ] HIPAA privacy and security policies
- [ ] BAA template and subprocessor BAAs
- [ ] Incident response and breach notification plan
- [ ] Consent policy and patient-facing consent copy
- [ ] Clinical safety case and escalation protocol sign-off
- [ ] Access control and break-glass policy
- [ ] Vendor risk management policy
- [ ] Records retention and destruction policy
- [ ] Workforce training and sanction policy
- [ ] GDPR records of processing + DPIA template + DPA
- [ ] Privacy notice (site) and candidate/employee notices
- [ ] Insurance: cyber, professional liability, D&O

## 8. Open questions for counsel

1. If Causeway routes an order and applies a partner's protocol, are we a
   provider, a BA, or both?
2. Does the triage questionnaire constitute CDS or a device function?
3. Can we charge labs a per-order fee without implicating the Anti-Kickback
   Statute when the lab also receives referrals from our customers?
4. What is the cleanest structure for a mobile partner's clinician to treat
   under their own license while using our platform?
5. Does the EU AI Act apply to rules-based routing (likely not) and to learned
   prioritization (likely yes)?
6. Which entity signs EU DPAs, and when do we need an EU establishment?
