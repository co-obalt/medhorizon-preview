import styles from "./logo.module.css";

type LogoProps = {
  light?: boolean;
  className?: string;
};

/**
 * Text lockup based on the supplied MedHorizon logo: bold blue wordmark with
 * a small tracked subline. The original PNG is half-cropped, so the name is
 * rendered live rather than stretched from the image.
 */
export default function Logo({ light = false, className }: LogoProps) {
  return (
    <span
      className={`${styles.logo} ${light ? styles.light : ""} ${className ?? ""}`}
      aria-label="MedHorizon Management Service"
      role="img"
    >
      <span className={styles.name} aria-hidden="true">
        MedHorizon
      </span>
      <span className={styles.sub} aria-hidden="true">
        Management Service
      </span>
    </span>
  );
}
