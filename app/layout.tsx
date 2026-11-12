import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-loaded",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medhorizonhealth.com"),
  title: {
    default: "MedHorizon — See a clinician. Skip the waiting room.",
    template: "%s — MedHorizon",
  },
  description:
    "Video visits with California-licensed clinicians, a mobile clinician at your door when you need one, and rapid point-of-care tests that answer during the visit. Opening across Greater Sacramento — join the waitlist for first appointments and founding-patient pricing.",
  keywords: [
    "MedHorizon",
    "telehealth Sacramento",
    "mobile healthcare",
    "point-of-care testing",
    "home medical visit",
    "Folsom",
    "Roseville",
    "Auburn",
  ],
  openGraph: {
    title: "MedHorizon — See a clinician. Skip the waiting room.",
    description:
      "See a California-licensed clinician by video. When testing or a hands-on exam is needed, we come to you — with results before the visit ends.",
    type: "website",
    siteName: "MedHorizon",
    images: [
      {
        url: "/images/hero-visit.jpg",
        width: 1400,
        height: 935,
        alt: "A MedHorizon clinician talking with a patient at home.",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ea",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable}`}
        suppressHydrationWarning
      >
        <noscript>
          <style>{`[class*="__reveal"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
