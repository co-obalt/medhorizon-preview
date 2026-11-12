import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How MedHorizon Management Service handles website and waitlist data before launch: what we collect, why, where it is stored, and how to have it removed.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link href="/" className={styles.back}>
          <span aria-hidden="true">←</span> Back to MedHorizon
        </Link>

        <header className={styles.head}>
          <p className="kicker">Legal · Privacy</p>
          <h1 className={styles.title}>Privacy notice</h1>
          <p className={styles.meta}>Last updated 12 November 2026</p>
          <p className={styles.note}>
            MedHorizon is pre-launch. This notice covers this website and the
            waitlist only. It is not a clinical privacy notice or a HIPAA Notice
            of Privacy Practices, and it will be replaced by a reviewed policy
            before any patient information is handled.
          </p>
        </header>

        <article className={styles.body}>
          <h2 id="scope">1. Scope</h2>
          <p>
            This notice explains how MedHorizon Management Service
            (&ldquo;MedHorizon&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
            handles personal information collected through
            medhorizonhealth.com and the early-access waitlist. MedHorizon
            Management Service provides management and administrative services
            to independent, California-licensed clinical practices. Clinical
            care is delivered by those practices and their licensed clinicians,
            and their own privacy practices apply to your care.
          </p>

          <h2 id="collect">2. What we collect</h2>
          <p>When you join the waitlist, we collect:</p>
          <ul>
            <li>Your name, email address, and city.</li>
            <li>Whether you are joining as a patient, caregiver, clinician, or partner.</li>
            <li>An optional note you choose to write.</li>
            <li>
              Limited technical data needed to operate the form: a request
              origin used for rate limiting and your browser user agent.
            </li>
          </ul>
          <p>
            We do not use advertising cookies or third-party tracking scripts on
            this site. Please do not send medical records, test results, or other
            health information through this form — we do not need it to hold
            your place on the waitlist.
          </p>

          <h2 id="why">3. Why we use it</h2>
          <ul>
            <li>To email you when appointments open in or near your city.</li>
            <li>To understand which communities to open first.</li>
            <li>To protect the form from abuse and keep the site available.</li>
            <li>To meet legal, tax, and security obligations.</li>
          </ul>

          <h2 id="basis">4. Legal bases and your choices</h2>
          <p>
            We rely on your consent to email you about early access, and on our
            legitimate interests in operating and securing a pre-launch
            waitlist. You can withdraw consent at any time by writing to us or
            using the unsubscribe link in any email we send.
          </p>
          <p>
            We do not sell personal information and we do not share it for
            cross-context behavioral advertising, as those terms are used in the
            California Consumer Privacy Act (CCPA), as amended by the CPRA. Where
            the GDPR or UK GDPR applies, we rely on consent for marketing email,
            legitimate interests for security, and legal obligation where
            records must be retained.
          </p>

          <h2 id="storage">5. Storage and retention</h2>
          <p>
            Waitlist records are stored in the United States, with access limited
            to the MedHorizon team. We keep them for 24 months from your last
            interaction, or until 12 months after we launch in your area,
            whichever is longer, unless you ask us to delete them sooner.
          </p>

          <h2 id="processors">6. Sharing and service providers</h2>
          <p>
            We do not sell personal information. We share it only with service
            providers that help us run this site and communicate with you —
            hosting, data storage, transactional email, and error monitoring —
            under contracts that limit their use of it to providing those
            services. A current list of providers is available on request.
          </p>
          <p>
            We may also disclose information where required by law, or to protect
            the rights and safety of visitors, patients, or the public.
          </p>

          <h2 id="rights">7. Your rights</h2>
          <p>
            California residents may request to know, access, correct, or delete
            personal information we hold, and may ask us to stop emailing them.
            We will not discriminate against you for exercising these rights.
            Depending on where you live, you may also have the right to object to
            processing, to restrict it, or to data portability.
          </p>
          <p>
            To exercise any of these rights, email{" "}
            <a href="mailto:privacy@medhorizonhealth.com">
              privacy@medhorizonhealth.com
            </a>
            . We respond within 45 days for California requests, or within 30
            days where the GDPR applies, and we may ask you to confirm your
            identity first. You may also complain to your local data protection
            authority.
          </p>

          <h2 id="security">8. Security</h2>
          <p>
            We use encryption in transit, least-privilege access, and logging
            appropriate to a pre-launch system. No system is perfectly secure; if
            a breach affects your information, we will notify you and the
            relevant authority as required by law.
          </p>

          <h2 id="children">9. Children</h2>
          <p>
            This site is intended for people aged 18 and over. We do not knowingly
            collect information from children through the waitlist.
          </p>

          <h2 id="changes">10. Changes and contact</h2>
          <p>
            We will update this notice as the service matures and post the
            revision date here. Questions or requests:{" "}
            <a href="mailto:privacy@medhorizonhealth.com">
              privacy@medhorizonhealth.com
            </a>
            , or MedHorizon Management Service, Sacramento, California, United
            States.
          </p>
        </article>
      </div>
    </div>
  );
}
