"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import styles from "./scroll-story.module.css";

function RequestCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.cardEyebrow}>New request</span>
        <span className={styles.cardPill}>2 minutes</span>
      </div>

      <div className={styles.field}>
        <span className={styles.fieldLabel}>What&apos;s going on</span>
        <span className={styles.fieldValue}>
          Sore throat, fever since yesterday
        </span>
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <span className={styles.fieldLabel}>Price</span>
          <span className={styles.fieldValue}>Shown before you book</span>
        </div>
        <div className={styles.field}>
          <span className={styles.fieldLabel}>Visit</span>
          <span className={styles.fieldValue}>Today, 2:30 PM</span>
        </div>
      </div>

      <div className={styles.cardFoot}>
        <span className={styles.check} aria-hidden="true">
          <CheckIcon />
        </span>
        A clinician already has your request
      </div>
    </div>
  );
}

function VisitCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.cardEyebrow}>Video visit</span>
        <span className={styles.live}>
          <span className={styles.liveDot} aria-hidden="true" />
          Live
        </span>
      </div>

      <div className={styles.person}>
        <span className={styles.avatar} aria-hidden="true">
          SP
        </span>
        <div>
          <p className={styles.personName}>Sarah P., NP</p>
          <p className={styles.personMeta}>California-licensed · 12 min</p>
        </div>
      </div>

      <p className={styles.quote}>
        &ldquo;Let&apos;s swab for strep now. If it&apos;s positive, I&apos;ll
        send the prescription tonight.&rdquo;
      </p>

      <div className={styles.cardFoot}>
        <span className={styles.check} aria-hidden="true">
          <CheckIcon />
        </span>
        Exam, prescription, and notes in one call
      </div>
    </div>
  );
}

function DoorstepCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.cardEyebrow}>Mobile visit</span>
        <span className={styles.cardPill}>At your door</span>
      </div>

      <ul className={styles.list}>
        <li>
          <CheckIcon />
          Sample collected at home
        </li>
        <li>
          <CheckIcon />
          Rapid test run on site
        </li>
        <li>
          <CheckIcon />
          Result reviewed with you
        </li>
      </ul>

      <div className={styles.cardFoot}>
        <span className={styles.check} aria-hidden="true">
          <CheckIcon />
        </span>
        Plan and visit summary before we leave
      </div>
    </div>
  );
}

const chapters = [
  {
    label: "The request",
    title: "Two minutes, and it's moving.",
    body: "Tell us what's wrong, see the price before you book, and pick a time. No phone tree, no hold music, no \u201cwe'll call you back.\u201d",
    photo: "/images/request.jpg",
    alt: "A patient requesting a visit from her phone at home.",
    visual: <RequestCard />,
  },
  {
    label: "The visit",
    title: "A clinician who has time.",
    body: "Video in minutes, evenings included. Your clinician examines, prescribes, and explains — instead of handing you off to a portal.",
    photo: "/images/consult.jpg",
    alt: "A clinician in a video consultation with a patient.",
    visual: <VisitCard />,
  },
  {
    label: "The doorstep",
    title: "Answers before we leave.",
    body: "If a test or a hands-on exam is needed, a mobile clinician arrives with the kit. You get the result while they're still with you.",
    photo: "/images/bedside.jpg",
    alt: "A clinician checking on a patient lying down at home.",
    visual: <DoorstepCard />,
  },
];

export default function ScrollStory() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const element = wrapRef.current;
      if (!element) return;

      const total = element.offsetHeight - window.innerHeight;
      if (total <= 0) return;

      const rect = element.getBoundingClientRect();
      const next = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(next);
      setActive(
        Math.min(
          chapters.length - 1,
          Math.floor(next * chapters.length * 0.9999),
        ),
      );
    };

    const onScroll = () => {
      // Frames are paused in a hidden tab, so update directly there.
      if (document.hidden) {
        update();
        return;
      }
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("visibilitychange", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className={styles.section} aria-labelledby="story-heading">
      <div className={`container ${styles.header}`}>
        <p className={styles.kicker}>End to end</p>
        <h2 className={styles.heading} id="story-heading">
          One afternoon, <em>start to finish.</em>
        </h2>
        <p className={styles.intro}>
          Scroll through a single visit — from the first message to the result
          in your hand.
        </p>
      </div>

      <div className={styles.wrap} ref={wrapRef}>
        <div className={styles.sticky}>
          <div className={`container ${styles.grid}`}>
            <div className={styles.copy}>
              <div className={styles.track} aria-hidden="true">
                <span
                  className={styles.trackFill}
                  style={{ transform: `scaleY(${progress})` }}
                />
              </div>

              <div className={styles.chapters}>
                {chapters.map((chapter, index) => (
                  <div
                    key={chapter.label}
                    className={`${styles.chapter} ${
                      index === active ? styles.chapterActive : ""
                    }`}
                    aria-hidden={index !== active}
                  >
                    <p className={styles.chapterCount}>
                      0{index + 1} / 0{chapters.length}
                    </p>
                    <p className={styles.chapterLabel}>{chapter.label}</p>
                    <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                    <p className={styles.chapterBody}>{chapter.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.stage}>
              <span className={styles.ghost} aria-hidden="true">
                0{active + 1}
              </span>
              {chapters.map((chapter, index) => (
                <div
                  key={chapter.label}
                  className={`${styles.panel} ${
                    index === active ? styles.panelActive : ""
                  }`}
                >
                  <div className={styles.panelMedia}>
                    <Image
                      src={chapter.photo}
                      alt={chapter.alt}
                      fill
                      sizes="(max-width: 900px) 90vw, 46vw"
                      className={styles.panelImg}
                    />
                  </div>
                  <div className={styles.panelScrim} aria-hidden="true" />
                  {chapter.visual}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ul className={`container ${styles.stack}`}>
        {chapters.map((chapter, index) => (
          <li key={chapter.label} className={styles.stackItem}>
            <div className={styles.stackCopy}>
              <p className={styles.chapterCount}>
                0{index + 1} / 0{chapters.length}
              </p>
              <p className={styles.chapterLabel}>{chapter.label}</p>
              <h3 className={styles.chapterTitle}>{chapter.title}</h3>
              <p className={styles.chapterBody}>{chapter.body}</p>
            </div>
            <div className={styles.stackVisual}>
              <div className={styles.stackPhoto}>
                <Image
                  src={chapter.photo}
                  alt={chapter.alt}
                  fill
                  sizes="92vw"
                  className={styles.panelImg}
                />
              </div>
              {chapter.visual}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
