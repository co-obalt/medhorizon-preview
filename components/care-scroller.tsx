"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./care-scroller.module.css";

export type CareItem = {
  title: string;
  body: string;
  meta: string;
  image: string;
  alt: string;
};

export default function CareScroller({ items }: { items: CareItem[] }) {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    const windowEl = track.parentElement;
    let frame = 0;
    let lastMax = 0;

    const update = () => {
      frame = 0;
      if (!windowEl) return;

      const narrow = window.matchMedia("(max-width: 900px)").matches;

      // Reduced motion is handled in CSS: the section unpins and stacks.
      if (narrow) {
        pin.style.height = "";
        track.style.transform = "";
        if (barRef.current) barRef.current.style.transform = "scaleX(0)";
        return;
      }

      const max = Math.max(0, track.scrollWidth - windowEl.clientWidth);
      lastMax = max;
      // One pixel of page scroll moves the track one pixel sideways.
      pin.style.height = `${Math.round(window.innerHeight + max)}px`;

      const total = Math.max(1, pin.offsetHeight - window.innerHeight);
      const rect = pin.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / total));

      track.style.transform = `translate3d(${-p * max}px, 0, 0)`;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${p})`;
      }
    };

    const onScroll = () => {
      if (document.hidden) {
        update();
        return;
      }
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();

    // Layout can settle after fonts and images arrive; keep the maths honest.
    const observer = new ResizeObserver(update);
    observer.observe(track);
    observer.observe(windowEl ?? track);
    const settle = [
      window.setTimeout(update, 250),
      window.setTimeout(update, 1200),
    ];

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("load", update);
    document.addEventListener("visibilitychange", onScroll);

    return () => {
      observer.disconnect();
      settle.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", update);
      document.removeEventListener("visibilitychange", onScroll);
      if (frame) cancelAnimationFrame(frame);
      pin.style.height = "";
      track.style.transform = "";
      void lastMax;
    };
  }, []);

  return (
    <div className={styles.pin} ref={pinRef}>
      <div className={styles.sticky}>
        <div className={styles.viewport}>
          <div className={styles.windowEl}>
            <div
              className={styles.track}
              ref={trackRef}
              aria-label="Ways to be seen"
            >
              {items.map((item, index) => (
                <article key={item.title} className={styles.card}>
                  <div className={styles.media}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 900px) 86vw, 40vw"
                      className={styles.img}
                    />
                  </div>

                  <div className={styles.body}>
                    <p className={styles.index} aria-hidden="true">
                      0{index + 1} / 0{items.length}
                    </p>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.text}>{item.body}</p>
                    <p className={styles.meta}>{item.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.progress} aria-hidden="true">
            <span ref={barRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
