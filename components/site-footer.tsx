import Link from "next/link";
import Logo from "@/components/logo";
import styles from "./site-footer.module.css";

const columns = [
  {
    title: "Care",
    links: [
      { label: "Telehealth visits", href: "/#care" },
      { label: "Mobile care", href: "/#care" },
      { label: "Rapid testing", href: "/#care" },
      { label: "How it works", href: "/#how" },
    ],
  },
  {
    title: "MedHorizon",
    links: [
      { label: "Our approach", href: "/#approach" },
      { label: "Areas we serve", href: "/#areas" },
      { label: "For clinicians", href: "/#clinicians" },
      { label: "Contact", href: "mailto:hello@medhorizonhealth.com" },
    ],
  },
  {
    title: "Patients",
    links: [
      { label: "Get early access", href: "/waitlist" },
      { label: "Questions", href: "/waitlist#faq" },
      { label: "Privacy notice", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <Logo />
            <p className={styles.tagline}>
              The visit comes to you — video, home, rapid tests.
            </p>
            <p className={styles.status}>
              <span className={styles.dot} aria-hidden="true" />
              Launching in Greater Sacramento
            </p>
          </div>

          <div className={styles.cols}>
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className={styles.colTitle}>{column.title}</h2>
                <ul className={styles.colList}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.colLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 MedHorizon Management Service.</p>
          <p className={styles.coverage}>
            Sacramento · Folsom · Roseville · Auburn
          </p>
          <nav className={styles.legal} aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="mailto:hello@medhorizonhealth.com">
              hello@medhorizonhealth.com
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
