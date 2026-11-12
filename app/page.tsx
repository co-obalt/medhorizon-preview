import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import AreaMap from "@/components/area-map";
import CareScroller from "@/components/care-scroller";
import Reveal from "@/components/reveal";
import ScrollStory from "@/components/scroll-story";
import styles from "./page.module.css";

const assurances = [
  "California-licensed clinicians",
  "Video, home visit, and rapid test in one request",
  "Your price before you book",
];

const care = [
  {
    title: "Video visits",
    body: "Talk to a California-licensed clinician about what's actually bothering you — often the same day, evenings included. Prescriptions and a plan, without a waiting room.",
    meta: "Answers today, not next month",
    image: "/images/video-call.jpg",
    alt: "A nurse in scrubs on a video visit with a patient.",
  },
  {
    title: "Care at home",
    body: "When an exam or a sample can't wait, we send a mobile clinician to your home, your office, or wherever you're staying. No drive, no lobby, no half-day off.",
    meta: "A clinician at your door",
    image: "/images/home-exam.jpg",
    alt: "A clinician listening to a child's chest during a visit at home.",
  },
  {
    title: "Rapid testing",
    body: "Point-of-care tests for common infections and conditions, run during your visit. You and your clinician decide the next step with the answer already in hand.",
    meta: "Results before you leave",
    image: "/images/rapid-test.jpg",
    alt: "A clinician reading a rapid test with a family during a home visit.",
  },
];

const steps = [
  {
    title: "Tell us what's wrong",
    body: "Two minutes of questions, your price up front, and a time that fits your day.",
  },
  {
    title: "Meet your clinician",
    body: "A video visit with a California-licensed physician or nurse practitioner — evenings and weekends included.",
  },
  {
    title: "We come to you",
    body: "Need a test or a hands-on exam? We dispatch the nearest mobile clinician with the kit already on the way.",
  },
  {
    title: "Leave with a plan",
    body: "Results, treatment if you need it, and a summary sent to you and your care team.",
  },
];

const principles = [
  {
    title: "The right setting, not the default one",
    body: "Video when it's enough. In person when it isn't. You shouldn't have to guess which one you need.",
  },
  {
    title: "One record, one story",
    body: "Your visit, your tests, and your results in one place — not across four portals and a fax machine.",
  },
  {
    title: "The price before the appointment",
    body: "Know what you'll pay before you book. No surprise facility fee for a home visit.",
  },
];

const clinicianPoints = [
  "Flexible video and mobile shifts",
  "A coordinator owns dispatch, kits, and logistics",
  "One platform for notes, orders, and results",
  "Founding-clinician input on how it works",
];

const faqs = [
  {
    q: "Is MedHorizon available today?",
    a: "Not yet. We're opening across Greater Sacramento, city by city. Join the waitlist and you'll get the first appointment slots in yours — plus founding-patient pricing when we open.",
  },
  {
    q: "How fast can I actually be seen?",
    a: "Our target is same-day video visits, including evenings. When a test or exam is needed, we aim to have a mobile clinician at your door the same day. We'll publish real response times once we open — not guesses.",
  },
  {
    q: "What can be handled by video?",
    a: "Most everyday, non-emergency concerns: rashes, respiratory symptoms, urinary symptoms, medication questions, and follow-ups. Your clinician will tell you plainly if you need to be seen in person — and we can send someone.",
  },
  {
    q: "What happens during a mobile visit?",
    a: "A licensed clinician comes to you to perform an exam, collect a sample, or run a rapid test ordered during your video visit. Results are reviewed with you before the visit ends whenever possible.",
  },
  {
    q: "Do you take insurance?",
    a: "We're contracting with commercial insurers and will publish accepted plans before launch. If we're not in network yet, you'll see a flat self-pay price before you book — no surprise facility fees.",
  },
  {
    q: "Is this for emergencies?",
    a: "No. If you're experiencing a medical emergency, call 911 or go to the nearest emergency department. MedHorizon is built for everyday, non-emergency care.",
  },
  {
    q: "Who provides the care?",
    a: "California-licensed clinicians and partner clinical organizations. MedHorizon Management Service provides the technology, coordination, and administrative support behind the visit.",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="kicker">Greater Sacramento · Early access</p>

            <h1 className={`display ${styles.heroTitle}`}>
              See a clinician. <em>Skip the waiting room.</em>
            </h1>

            <p className={`lede ${styles.heroLede}`}>
              Video visits with California-licensed clinicians. A home visit
              when you need hands-on care. Rapid tests that give you answers
              during the visit. One request, one team, one plan.
            </p>

            <div className={styles.actions}>
              <Link href="/waitlist" className="btn btn--primary">
                Get early access
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <a href="#how" className="btn btn--ghost">
                See how it works
              </a>
            </div>

            <p className={styles.heroNote}>
              <span className={styles.pulse} aria-hidden="true" />
              Opening first in Sacramento, Folsom, Roseville, and Auburn.
              Waitlist patients get the first appointments.
            </p>
          </div>

          <div className={styles.heroArt}>
            <div className={styles.heroPhoto}>
              <Image
                src="/images/hero-visit.jpg"
                alt="A MedHorizon clinician talking with a mother and daughter in their living room."
                fill
                priority
                sizes="(max-width: 1040px) 92vw, 46vw"
                className={styles.heroImg}
              />
              <div className={styles.heroScrim} aria-hidden="true" />

              <span className={styles.floatingPill}>
                <span className={styles.pillDot} aria-hidden="true" />
                Results during your visit
              </span>

              <div className={styles.visitCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardBadge}>Mobile visit</span>
                  <span className={styles.cardTime}>Today · 2:30 PM</span>
                </div>
                <p className={styles.cardTitle}>
                  A clinician is on the way.
                </p>
                <ul className={styles.cardList}>
                  <li>
                    <span className={styles.cardIcon}>
                      <CheckIcon />
                    </span>
                    Video visit completed
                  </li>
                  <li>
                    <span className={styles.cardIcon}>
                      <CheckIcon />
                    </span>
                    Rapid test at home
                  </li>
                  <li>
                    <span className={styles.cardIcon}>
                      <CheckIcon />
                    </span>
                    Results reviewed with you
                  </li>
                </ul>
                <p className={styles.cardFoot}>
                  A look at the visit experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.assurances} aria-label="What to expect">
        <div className="container">
          <ul className={styles.assuranceRow}>
            {assurances.map((item) => (
              <li key={item} className={styles.assurance}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="care">
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className="kicker">What you get</p>
              <h2 className={`section-title ${styles.careTitle}`}>
                One request. <em>Three ways to be seen.</em>
              </h2>
            </div>
            <p className="lede">
              Most care fails at the handoffs — the app that can&apos;t examine
              you, the lab that can&apos;t prescribe, the clinic that can&apos;t
              come to your house. We built the whole visit instead.
            </p>
          </div>

        </div>

        <CareScroller items={care} />

        <div className="container">
          <p className={styles.careNote}>
            Services roll out by area. We&apos;ll confirm exactly what&apos;s
            available when appointments open in your city.
          </p>
        </div>
      </section>

      <section className={`section ${styles.how}`} id="how">
        <div className="container">
          <p className="kicker">How it works</p>
          <h2 className="section-title">
            From &ldquo;something&apos;s wrong&rdquo; to a plan —{" "}
            <em>in one afternoon.</em>
          </h2>

          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                className={styles.step}
                delay={index * 80}
              >
                <span className={styles.stepNum} aria-hidden="true">
                  0{index + 1}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </Reveal>
            ))}
          </ol>

          <p className={styles.emergency}>
            MedHorizon is for non-emergency care. If you&apos;re experiencing an
            emergency, call 911.
          </p>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="container">
          <div className={styles.approach}>
            <div>
              <p className="kicker">Why MedHorizon</p>
              <h2 className={styles.approachTitle}>
                Most care isn&apos;t hard. <em>Getting to it is.</em>
              </h2>
              <p className={styles.approachBody}>
                You take a morning off for a ten-minute question. You tell the
                same story to a receptionist, a nurse, and a clinician. Your
                results land in a portal you stopped checking.
              </p>
              <p className={styles.approachBody}>
                Our answer is deliberately boring: one team, one record, one
                plan. Video when it&apos;s enough, a home visit when it
                isn&apos;t, and a rapid test when the answer changes the
                treatment.
              </p>
            </div>

            <ol className={styles.principles}>
              {principles.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.title}
                  className={styles.principle}
                  delay={index * 80}
                >
                  <span className={styles.principleNum} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className={styles.principleTitle}>{item.title}</h3>
                    <p className={styles.principleBody}>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ScrollStory />

      <section className={`section ${styles.areas}`} id="areas">
        <div className={styles.areaSun} aria-hidden="true" />
        <div className={`container ${styles.areasGrid}`}>
          <div>
            <p className="kicker">Where we&apos;re starting</p>
            <h2 className={styles.areasTitle}>
              Greater Sacramento <em>goes first.</em>
            </h2>
            <p className={styles.areasBody}>
              We&apos;re building the clinical and mobile network city by city.
              Waitlist patients get the first appointments and founding-patient
              pricing when their city opens — everyone else waits for public
              availability.
            </p>
            <p className={styles.areasLink}>
              <Link href="/waitlist" className="text-link">
                Claim your place
                <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>

          <AreaMap />
        </div>
      </section>

      <section className={`section ${styles.clinicians}`} id="clinicians">
        <div className={styles.clinicianArc} aria-hidden="true" />
        <div className={`container ${styles.clinicianGrid}`}>
          <div>
            <p className={`kicker ${styles.kickerLight}`}>
              For clinicians &amp; partners
            </p>
            <h2 className={styles.clinicianTitle}>
              Practise medicine. <em>We&apos;ll handle the rest.</em>
            </h2>
            <p className={styles.clinicianBody}>
              Flexible video and mobile shifts, a coordinator who owns dispatch
              and kits, and one platform for notes, orders, and results. If
              you&apos;re a California-licensed physician or nurse practitioner —
              or a lab, mobile care group, or employer — we want to talk.
            </p>
            <div className={styles.clinicianActions}>
              <a
                href="mailto:clinicians@medhorizonhealth.com"
                className="btn btn--light"
              >
                Join the clinical network
              </a>
              <a
                href="mailto:partners@medhorizonhealth.com"
                className="btn btn--outline-light"
              >
                Partner with us
              </a>
            </div>
          </div>

          <div>
            <div className={styles.clinicianPhoto}>
              <Image
                src="/images/clinician.jpg"
                alt="A California-licensed clinician with a stethoscope and clipboard."
                fill
                sizes="(max-width: 1040px) 92vw, 32vw"
                className={styles.clinicianImg}
              />
            </div>

            <ul className={styles.clinicianList}>
              {clinicianPoints.map((point) => (
                <li key={point} className={styles.clinicianItem}>
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className={styles.faqGrid}>
            <div>
              <p className="kicker">Straight answers</p>
              <h2 className={styles.faqTitle}>
                The questions you&apos;d ask a friend.
              </h2>
              <p className={styles.faqNote}>
                Still unsure? Write to{" "}
                <a
                  href="mailto:hello@medhorizonhealth.com"
                  style={{ color: "var(--blue)" }}
                >
                  hello@medhorizonhealth.com
                </a>
                . A person replies.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    <span>{faq.q}</span>
                    <span className={styles.faqPlus} aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaPanel}>
            <div className={styles.ctaArcs} aria-hidden="true" />
            <div className={styles.ctaContent}>
              <p className={styles.ctaKicker}>Early access</p>
              <h2 className={styles.ctaTitle}>
                Be first through the door <em>in your city.</em>
              </h2>
              <p className={styles.ctaBody}>
                Waitlist patients get the first appointment slots and
                founding-patient pricing when we open in Sacramento, Folsom,
                Roseville, or Auburn. One email when it&apos;s your turn — no
                newsletters, no noise.
              </p>
            </div>
            <div className={styles.ctaAction}>
              <Link href="/waitlist" className="btn btn--light">
                Get early access
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <p className={styles.ctaNote}>Launch news for your city only.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
