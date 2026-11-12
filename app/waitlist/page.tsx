import Link from "next/link";
import WaitlistForm from "@/components/waitlist-form";
import styles from "./waitlist.module.css";

const earlyAccess = [
  {
    title: "First appointments",
    body: "When your city opens, you book before we publish availability to anyone else.",
  },
  {
    title: "Founding-patient pricing",
    body: "The introductory visit price, locked in for your first year with MedHorizon.",
  },
  {
    title: "A say in what we build",
    body: "Short, optional questions about what would actually make care easier for you.",
  },
];

const cities = [
  "Sacramento",
  "Folsom",
  "Roseville",
  "Auburn",
  "Elsewhere in Greater Sacramento",
];

const faqs = [
  {
    question: "When will MedHorizon be available?",
    answer:
      "We're opening city by city across Greater Sacramento, starting with Sacramento and Folsom. The waitlist is how you'll hear first. We'd rather say 'soon' than promise a date we can't keep.",
  },
  {
    question: "Does joining cost anything?",
    answer:
      "No. It's free, it doesn't commit you to an appointment, and you can ask us to delete your details at any time.",
  },
  {
    question: "What can be handled by video?",
    answer:
      "Most everyday, non-emergency concerns: rashes, respiratory symptoms, urinary symptoms, medication questions, and follow-ups. Your clinician will tell you plainly if you need to be seen in person — and we can send someone to you.",
  },
  {
    question: "What happens during a mobile visit?",
    answer:
      "A California-licensed clinician comes to you to perform an exam, collect a sample, or run a rapid test ordered during your video visit. Results are reviewed with you before the visit ends whenever possible.",
  },
  {
    question: "Will you take my insurance?",
    answer:
      "We're contracting with commercial insurers and will publish accepted plans before launch. If we're not in network yet, you'll see a flat self-pay price before you book — no surprise fees.",
  },
  {
    question: "What happens to my information?",
    answer:
      "We store only what you enter on this form, use it to contact you about early access, and never sell it. Our privacy notice explains exactly what is stored and how to have it removed.",
  },
];

export default function WaitlistPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link href="/" className={styles.back}>
          <span aria-hidden="true">←</span> Back to MedHorizon
        </Link>

        <div className={styles.grid}>
          <div>
            <p className="kicker">Early access · Greater Sacramento</p>

            <h1 className={`display ${styles.title}`}>
              Get the first appointment <em>in your city.</em>
            </h1>

            <p className={`lede ${styles.lede}`}>
              We&apos;re opening Greater Sacramento one city at a time. This
              list hears first, books first, and keeps the founding-patient
              price. Two minutes now saves you the scramble later.
            </p>

            <ul className={styles.list}>
              {earlyAccess.map((item, index) => (
                <li key={item.title} className={styles.listItem}>
                  <span className={styles.listNum} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span>
                    <span className={styles.listTitle}>{item.title}</span>
                    <span className={styles.listBody}>{item.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.citySection}>
              <p className={styles.cityTitle}>Cities opening first</p>
              <ul className={styles.cities}>
                {cities.map((city) => (
                  <li key={city} className={styles.cityChip}>
                    {city}
                  </li>
                ))}
              </ul>
            </div>

            <p className={styles.contact}>
              Caring for a parent, or work in a clinic nearby?{" "}
              <a href="mailto:hello@medhorizonhealth.com">
                hello@medhorizonhealth.com
              </a>{" "}
              reaches our team directly.
            </p>
          </div>

          <WaitlistForm />
        </div>

        <section className={styles.faqSection} aria-labelledby="faq-heading">
          <div className={styles.faqGrid}>
            <div>
              <p className="kicker">Straight answers</p>
              <h2 className={styles.faqTitle} id="faq-heading">
                Before you sign up.
              </h2>
              <p className={styles.faqNote}>
                Something we haven&apos;t answered? Write to{" "}
                <a href="mailto:hello@medhorizonhealth.com">
                  hello@medhorizonhealth.com
                </a>
                . A person replies.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <details key={faq.question} className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    <span>{faq.question}</span>
                    <span className={styles.faqPlus} aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
