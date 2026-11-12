# Brand strategy and messaging

**Status:** v1 · implemented on the website
**Last updated:** 12 November 2026

---

## 1. The name

**Causeway** — a raised road built across water or unstable ground, so a path
can continue where it otherwise would not.

The name does three jobs:

1. **Explains the product.** Care is fragmented into islands. We build the
   structure that connects them.
2. **Signals infrastructure, not another app.** A causeway is civil
   engineering: unglamorous, load-bearing, built to last.
3. **Sets the emotional tone.** Calm, human, purposeful — not clinical,
   not futuristic.

**Legal note:** trademark clearance and domain strategy are pending. "Causeway"
is used by companies in other categories; counsel must assess healthcare and
software classes before launch.

## 2. Brand idea

> **The span, not the island.**

Every competitor wants to own a point of care. Causeway owns the distance
between points. That is the strategic and creative territory: the handoff, the
gap, the thing that gets lost — and the structure that makes it hold.

## 3. Positioning

**Category:** care coordination infrastructure.

**For:** organizations that deliver care outside four walls.

**Who:** are tired of stitching together portals, spreadsheets, couriers, and
phone calls to finish a single episode.

**Causeway is:** the coordination layer that connects clinical capacity,
diagnostics, and logistics on one patient timeline.

**Unlike:** virtual care platforms or home care software, which own one surface
and leave the handoffs to humans.

**Proof:** every order, specimen, result, and custodian is tracked, consented,
and auditable across organizations.

## 4. Messaging architecture

### One-liner

> Causeway is the coordination layer for distributed care.

### 25 words

> Causeway connects clinicians, mobile medical teams, diagnostic labs, and
> real-time logistics on one patient timeline — so every handoff is tracked,
> consented, and accounted for.

### 100 words

> Care has moved out of the building, but the systems that coordinate it
> haven't. Orders leave the chart for a fax queue. Specimens travel without
> custody. Results land in portals nobody watches. Causeway is the coordination
> layer for distributed care: one network for clinicians, mobile medical teams,
> diagnostic labs, and the logistics that move between them. Every order, visit,
> specimen, result, and handoff appends to a single patient timeline — with
> consent attached and an audit trail behind it. It is infrastructure, not
> another portal. It integrates with the chart of record instead of replacing
> it.

### Campaign line

> **Care is an archipelago. We built the causeway.**

### Product line

> **Every handoff, accounted for.**

### Audience-specific openers

| Audience | Opener |
| --- | --- |
| Mobile care | "You're paying for visits you can't prove and specimens you can't find." |
| Diagnostic lab | "You receive samples without context and chase orders all day." |
| Health system | "Your home program leaks patients between referral and result." |
| Payer | "You can't see whether the home visit actually happened." |

## 5. Voice

**Precise, calm, candid — an engineer's empathy.**

| We sound like | We do not sound like |
| --- | --- |
| "Every handoff has an owner and a timestamp." | "Revolutionizing healthcare with AI." |
| "Designed to operate under a BAA." | "HIPAA certified." |
| "Illustrative timings, not a service commitment." | "Results in minutes, guaranteed." |
| "We don't replace your EHR." | "The EHR killer." |
| Short declaratives, concrete nouns, numbers with sources | Superlatives, emoji, exclamation marks, vague "seamless" |

**Rules**

1. Name the specific failure before the solution.
2. If a number is a model input, say so. Never invent a statistic.
3. Prefer "coordination" to "orchestration" in customer copy; the latter is
   internal vocabulary.
4. Never imply Causeway provides clinical care in beta.
5. Use "patient" in clinical contexts and "person" in access contexts; do not
   use "consumer" for people receiving care.
6. Avoid "ecosystem" unless describing partners concretely.

## 6. Lexicon

| Use | Avoid | Why |
| --- | --- | --- |
| coordination layer, event spine | platform, solution, ecosystem | Specific and defensible |
| episode | journey, encounter (except FHIR) | Matches the product unit |
| handoff, custody, chain of custody | transfer, movement | Operational and auditable |
| clinician, mobile team, lab, courier | provider, resource, vendor | Human and precise |
| designed to operate under a BAA | compliant, certified | Legally accurate |
| reference topology, illustrative | demo, simulated data (as a claim) | Shows the artifact honestly |

## 7. Visual direction

Live implementation: `app/globals.css` (tokens) and the component CSS modules.

- **Palette:** warm paper (#F5F2EA), deep pine (#0E3A2D), ink (#0B1310),
  signal lime (#C9F26B) used only for live state, highlights, and calls to
  action. Clay (#B8563A) for errors only.
- **Type:** Instrument Serif for editorial statements; Inter Tight for UI and
  body; JetBrains Mono for labels, data, and credentials.
- **Graphic language:** engineered schematics, hairline rules, registration
  marks, aqueduct arches, node-and-edge diagrams. No glossy blobs, no purple
  gradients, no stock photography.
- **Layout:** generous paper, strict grid, asymmetric editorial headers, small
  mono labels against large serif statements.
- **Signature detail:** the arch mark and the moving packet on the network map —
  used sparingly.

## 8. Logo system

| Asset | Use |
| --- | --- |
| Mark (arch tile) | Favicon, app icon, avatar, small spaces |
| Wordmark | When the name is not already present |
| Lockup (mark + wordmark) | Site header, documents, signatures |
| Clear space | At least the height of the arch on all sides |
| Minimum size | Mark 16 px; lockup 96 px wide |
| Color | Pine tile with paper glyph; paper tile with pine glyph on dark |

**Do not:** rotate, outline, add gradients, place on busy photography, stretch,
or recolor the arch signal lime except for the dot (the dot is the signal).

## 9. Boilerplate

**50 words**

> Causeway is the coordination layer for distributed care. It connects
> clinicians, mobile medical teams, diagnostic labs, and real-time logistics on
> one patient timeline, so every order, specimen, result, and handoff is
> tracked, consented, and auditable. Causeway is pre-launch and onboarding
> design partners in the US and EU.

**100 words**

> Causeway is care infrastructure for distributed medicine. Its platform
> connects four operational surfaces — clinical capacity, mobile care,
> diagnostics, and real-time logistics — on a single FHIR-native event spine.
> Organizations use Causeway to route orders, dispatch teams, track specimens
> through chain of custody, and return results to the clinician and patient who
> need them. The company is pre-launch, working with a small cohort of design
> partners across the US and EU. It is not a telehealth app, an EHR, or a lab;
> it is the layer that makes the handoffs between them legible, consented, and
> accountable.

## 10. Launch asset checklist

- [x] Wordmark and mark (SVG)
- [x] Site and waitlist
- [x] Design tokens and component styles
- [ ] Trademark clearance
- [ ] Social avatars and OG image (SVG draft exists)
- [ ] One-page PDF for partners
- [ ] Three flagship essays (custody, rejection cost, completion)
- [ ] Pitch deck (only after two paying customers)
