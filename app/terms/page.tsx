import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Terms for using the MedHorizon pre-launch website and waitlist.",
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link href="/" className={styles.back}>
          <span aria-hidden="true">←</span> Back to MedHorizon
        </Link>

        <header className={styles.head}>
          <p className="kicker">Legal · Terms</p>
          <h1 className={styles.title}>Terms of use</h1>
          <p className={styles.meta}>Last updated 12 November 2026</p>
          <p className={styles.note}>
            These terms cover this pre-launch website. They are not a clinical
            services agreement, do not create a clinician-patient relationship,
            and do not promise that service will be available in your area.
          </p>
        </header>

        <article className={styles.body}>
          <h2 id="acceptance">1. Acceptance</h2>
          <p>
            By using medhorizonhealth.com, you agree to these terms. If you do not
            agree, please do not use the site. MedHorizon Management Service may
            update these terms; the revision date above will change.
          </p>

          <h2 id="what">2. What this site is</h2>
          <p>
            This site describes a service under development and lets you join a
            waitlist. It is informational only. Nothing here is medical advice,
            diagnosis, or treatment, and using this site does not create a
            clinician-patient relationship.
          </p>
          <p>
            MedHorizon Management Service provides management, technology, and
            administrative services to independent, California-licensed clinical
            practices. It does not practice medicine. Clinical services, when
            they become available, will be delivered by those licensed
            clinicians and practices under their own agreements and consents.
          </p>
          <p>
            <strong>
              If you are experiencing a medical emergency, call 911 or go to the
              nearest emergency department.
            </strong>{" "}
            Do not use this site for urgent or emergency care.
          </p>

          <h2 id="waitlist">3. The waitlist</h2>
          <p>
            Joining the waitlist puts you on a notification list. It is not an
            offer of service, a booking, or a guarantee of access, pricing, or
            availability. We may open cities in any order and may change planned
            services before launch. When appointments open, you will need to
            complete the practice&apos;s registration, consent, and eligibility
            steps separately.
          </p>

          <h2 id="use">4. Acceptable use</h2>
          <ul>
            <li>Do not submit false information or another person&apos;s details.</li>
            <li>Do not attempt to disrupt, scrape at scale, or probe the site.</li>
            <li>Do not submit medical records, test results, or other health information.</li>
            <li>Do not use the site where doing so would break applicable law.</li>
          </ul>

          <h2 id="ip">5. Intellectual property</h2>
          <p>
            The MedHorizon name, mark, copy, design system, and site content are
            owned by MedHorizon Management Service or its licensors. You may view
            and share the site for evaluation; you may not copy it into a
            competing product or remove attribution. Third-party names and marks
            belong to their respective owners and are referenced descriptively.
          </p>

          <h2 id="disclaimer">6. Disclaimers</h2>
          <p>
            The site is provided &ldquo;as is&rdquo; without warranties of any
            kind, express or implied, including fitness for a particular purpose
            and non-infringement. Statements about services, coverage areas,
            insurance, and timing describe current plans, not contractual
            commitments.
          </p>

          <h2 id="liability">7. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, MedHorizon Management Service
            is not liable for indirect, incidental, special, or consequential
            damages, or for lost profits or data, arising from use of this site.
            Our total liability for claims relating to the site is limited to one
            hundred US dollars (US$100).
          </p>

          <h2 id="law">8. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of California,
            United States, without regard to conflict-of-law rules. Exclusive
            jurisdiction lies in the state and federal courts located in
            Sacramento County, California, except where local consumer law gives
            you a different forum.
          </p>

          <h2 id="contact">9. Contact</h2>
          <p>
            MedHorizon Management Service, Sacramento, California, United States.{" "}
            <a href="mailto:legal@medhorizonhealth.com">
              legal@medhorizonhealth.com
            </a>
          </p>
        </article>
      </div>
    </div>
  );
}
