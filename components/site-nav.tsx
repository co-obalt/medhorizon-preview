"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import styles from "./site-nav.module.css";

const links = [
  { href: "/#care", label: "What we do" },
  { href: "/#how", label: "How it works" },
  { href: "/#areas", label: "Areas" },
  { href: "/#clinicians", label: "For clinicians" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="MedHorizon home">
            <Logo />
          </Link>

          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.right}>
            <Link
              href="/waitlist"
              className={`btn btn--primary btn--sm ${styles.desktopCta}`}
            >
              Get early access
            </Link>
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className={styles.bars} aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className={styles.panel}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.panelLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/waitlist"
            className={`btn btn--primary ${styles.panelCta}`}
            onClick={() => setOpen(false)}
          >
            Get early access
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
