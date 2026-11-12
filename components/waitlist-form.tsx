"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./waitlist-form.module.css";

const CITIES = [
  "Sacramento",
  "Folsom",
  "Roseville",
  "Auburn",
  "Elsewhere in Greater Sacramento",
];

const INTERESTS = [
  "A patient",
  "A caregiver or family member",
  "A clinician",
  "A partner organization",
];

type Status = "idle" | "submitting" | "success" | "error";

type Success = {
  duplicate: boolean;
  email: string;
  city: string;
};

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Success | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      city: String(data.get("city") ?? ""),
      interest: String(data.get("interest") ?? ""),
      note: String(data.get("note") ?? "").trim(),
      website: String(data.get("website") ?? ""),
    };

    const errors: Record<string, string> = {};

    if (payload.name.length < 2) {
      errors.name = "Please enter your name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!payload.city) {
      errors.city = "Choose the city closest to you.";
    }
    if (!payload.interest) {
      errors.interest = "Choose the closest fit.";
    }
    if (data.get("consent") !== "on") {
      errors.consent = "Please agree to be contacted about early access.";
    }

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await response.json()) as {
        error?: string;
        duplicate?: boolean;
      };

      if (!response.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }

      setResult({
        duplicate: Boolean(json.duplicate),
        email: payload.email,
        city: payload.city,
      });
      setStatus("success");
      form.reset();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  if (status === "success" && result) {
    return (
      <div className={styles.card}>
        <div className={styles.success} role="status">
          <p className="kicker">
            {result.duplicate ? "Already on the list" : "You're in early"}
          </p>
          <h2 className={styles.successTitle}>
            {result.duplicate ? (
              <>
                You already have <em>your place.</em>
              </>
            ) : (
              <>
                Your place is <em>saved.</em>
              </>
            )}
          </h2>
          <p className={styles.successBody}>
            {result.duplicate
              ? "We kept your original spot. You'll still get the first appointments and founding-patient pricing when your city opens."
              : `We'll email ${result.email} before appointments open in ${result.city} — with founding-patient pricing and the first pick of times.`}
          </p>

          <p className={styles.successFoot}>
            One email when we open near you · No newsletter · Details removed on
            request
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.cardTitle}>Get early access</span>
        <span className={styles.cardHint}>About a minute</span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            className={`${styles.input} ${fieldErrors.name ? styles.invalid : ""}`}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name ? (
            <p className={styles.errorText} id="name-error">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            className={`${styles.input} ${fieldErrors.email ? styles.invalid : ""}`}
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? (
            <p className={styles.errorText} id="email-error">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="city">
              City
            </label>
            <select
              id="city"
              name="city"
              defaultValue=""
              className={`${styles.select} ${fieldErrors.city ? styles.invalid : ""}`}
              aria-invalid={Boolean(fieldErrors.city)}
              aria-describedby={fieldErrors.city ? "city-error" : undefined}
            >
              <option value="" disabled>
                Select your city
              </option>
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {fieldErrors.city ? (
              <p className={styles.errorText} id="city-error">
                {fieldErrors.city}
              </p>
            ) : null}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="interest">
              I&apos;m joining as
            </label>
            <select
              id="interest"
              name="interest"
              defaultValue=""
              className={`${styles.select} ${fieldErrors.interest ? styles.invalid : ""}`}
              aria-invalid={Boolean(fieldErrors.interest)}
              aria-describedby={
                fieldErrors.interest ? "interest-error" : undefined
              }
            >
              <option value="" disabled>
                Select one
              </option>
              {INTERESTS.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
            {fieldErrors.interest ? (
              <p className={styles.errorText} id="interest-error">
                {fieldErrors.interest}
              </p>
            ) : null}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="note">
            Anything you&apos;d like us to know?{" "}
            <span className={styles.optional}>(optional)</span>
          </label>
          <textarea
            id="note"
            name="note"
            className={styles.textarea}
            maxLength={600}
            placeholder="A condition you'd like help managing, or what's hardest about getting care right now."
          />
        </div>

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label className={styles.consentRow} htmlFor="consent">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className={styles.checkbox}
              aria-invalid={Boolean(fieldErrors.consent)}
              aria-describedby={
                fieldErrors.consent ? "consent-error" : undefined
              }
            />
            <span>
              Email me when MedHorizon opens in my city. I&apos;ve read the{" "}
              <a className={styles.consentLink} href="/privacy">
                privacy notice
              </a>
              .
            </span>
          </label>
          {fieldErrors.consent ? (
            <p className={styles.errorText} id="consent-error">
              {fieldErrors.consent}
            </p>
          ) : null}
        </div>

        {status === "error" && error ? (
          <p className={styles.formError} role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className={`btn btn--primary ${styles.submit}`}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting…" : "Get early access"}
          {status === "submitting" ? null : (
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          )}
        </button>

        <p className={styles.formFoot}>
          Founding-patient pricing · One email when we open near you · Never
          sold or shared with advertisers
        </p>
      </form>
    </div>
  );
}
