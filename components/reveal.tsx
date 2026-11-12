"use client";

import { createElement, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import styles from "./reveal.module.css";

type TagName = "div" | "article" | "li" | "section";

type RevealProps = {
  children: ReactNode;
  as?: TagName;
  className?: string;
  /** Stagger in milliseconds, so siblings arrive one after another. */
  delay?: number;
};

export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `${styles.reveal} ${visible ? styles.visible : ""} ${className}`.trim(),
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  );
}
