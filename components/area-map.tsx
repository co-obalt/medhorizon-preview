import CoverageGlobe from "./coverage-globe";
import styles from "./area-map.module.css";

const WAVES = [
  {
    label: "Wave 1",
    note: "Opening first",
    cities: "Sacramento · Folsom",
  },
  {
    label: "Wave 2",
    note: "Right behind",
    cities: "Roseville · Auburn",
  },
];

export default function AreaMap() {
  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        <span className={styles.headTitle}>Coverage map</span>
        <span className={styles.headMeta}>4 cities · opening in waves</span>
      </div>

      <CoverageGlobe />

      <dl className={styles.legend}>
        {WAVES.map((wave) => (
          <div key={wave.label} className={styles.legendItem}>
            <dt className={styles.legendTerm}>
              <span className={styles.waveDot} aria-hidden="true" />
              {wave.label}
              <span className={styles.waveNote}>{wave.note}</span>
            </dt>
            <dd className={styles.legendCities}>{wave.cities}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
