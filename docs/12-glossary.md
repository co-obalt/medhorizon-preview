# Glossary

Terms used across the docs, the product, and partner conversations. Plain
definitions first; regulatory nuance where it matters.

---

**BAA (Business Associate Agreement)** — A HIPAA contract between a covered
entity and a vendor that handles PHI. Causeway requires one before any patient
data.

**Chain of custody** — The documented sequence of who held a specimen, where,
and when. In Causeway, every transfer is an immutable event with actor,
timestamp, location, and method.

**CLIA** — Clinical Laboratory Improvement Amendments. US certification for
laboratories. A CLIA certificate is held by the lab and, for point-of-care
testing, by the testing site.

**Cold chain** — Temperature-controlled handling of specimens from collection
to analysis. Tracked with probes, logs, and time limits.

**Completed episode** — North-star metric: an order whose result has been
released and acknowledged, or explicitly closed with a documented reason.

**Covered entity** — A HIPAA-regulated provider, plan, or clearinghouse.
Causeway is usually a business associate to these organizations.

**Critical value** — A result dangerous enough to require immediate clinician
notification (e.g., very high potassium). Defined by the medical director.

**DPA (Data Processing Agreement)** — GDPR contract between controller and
processor. Required before EU personal data is processed.

**DPIA** — Data Protection Impact Assessment. Required for high-risk processing
under GDPR; planned before the first EU patient episode.

**EHDS** — European Health Data Space. EU framework for patient-mediated access
and secondary use of health data.

**Episode** — Causeway's unit of work: a patient, an order, a location, and a
set of participants working against a shared clock.

**FHIR (Fast Healthcare Interoperability Resources)** — HL7 standard for
exchanging healthcare data as resources (Patient, ServiceRequest, Specimen,
Observation). Causeway's core data model.

**Handoff** — Any transfer of responsibility or material between
organizations or people: order to clinician, specimen to courier, result to
clinician.

**HL7 v2** — Older but ubiquitous messaging standard, especially for lab orders
(ORM) and results (ORU). Most LIS integrations still use it.

**LIS (Laboratory Information System)** — The lab's system of record for
accessioning, testing, and reporting.

**LOINC** — Standard code system for lab tests and observations. Used to map
panels across labs.

**LDT (Laboratory Developed Test)** — A test designed and used within a single
lab. Subject to evolving US regulation; partner labs own compliance.

**Minimum necessary** — HIPAA principle that access should be limited to the
least information needed for the task. Enforced per role and episode.

**mHealth** — Mobile health: care and monitoring delivered through mobile
devices and apps.

**PHI (Protected Health Information)** — Individually identifiable health
information held by a covered entity or business associate.

**Point-of-care (POC) diagnostics** — Testing performed near the patient rather
than in a central lab. Many assays are CLIA-waived.

**Reference topology** — The illustrative network diagram on the site. It is a
model, not live data.

**SaMD (Software as a Medical Device)** — Software intended for a medical
purpose that is not part of a hardware device. Triggers FDA/MDR review.

**SMART on FHIR** — Standard for launching apps inside EHR workflows with
scoped authorization.

**Specimen rejection** — A sample refused by the lab because of labeling,
volume, container, hemolysis, temperature, or timing. A core quality metric.

**TAT (Turnaround time)** — Time from order or collection to result. Always
specify the start and end points; "TAT" alone is ambiguous.

**Telehealth** — Remote clinical care delivered by video, phone, or
asynchronous messaging.

**Tenant** — A customer organization with isolated data and configuration in
the platform.

**WORM** — Write once, read many. Storage that cannot be altered, used for
audit records in regulated environments.
