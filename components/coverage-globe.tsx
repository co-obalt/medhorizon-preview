"use client";

import dynamic from "next/dynamic";
import styles from "./area-map.module.css";

const OrbitDotGlobe = dynamic(
  () => import("./orbit-globe/orbit-dot-globe"),
  {
    ssr: false,
    loading: () => <div className={styles.globeLoading} aria-hidden="true" />,
  },
);

// Spaced out on purpose: four cities in one metro would sit on top of each
// other at globe scale, so the pins are spread around the region instead.
const LOCATIONS = [
  {
    name: "Sacramento",
    coordinates: "33, -114",
    color: "#C9F26B",
    pulse: true,
    showLabel: true,
    action: "none",
  },
  {
    name: "Folsom",
    coordinates: "30, -86",
    color: "#C9F26B",
    pulse: true,
    showLabel: true,
    action: "none",
  },
  {
    name: "Roseville",
    coordinates: "44, -92",
    color: "#C9F26B",
    pulse: true,
    showLabel: true,
    action: "none",
  },
  {
    name: "Auburn",
    coordinates: "47, -122",
    color: "#C9F26B",
    pulse: true,
    showLabel: true,
    action: "none",
  },
];

export default function CoverageGlobe() {
  return (
    <div className={styles.globeWrap}>
      <OrbitDotGlobe
        oceanColor="#12503D"
        landColor="#F5F2EA"
        dotSize={1.5}
        dotDensity={4}
        autoRotate
        labelStyle="marker"
        showQuickStart={false}
        locations={LOCATIONS}
        popovers={[]}
      />
    </div>
  );
}
