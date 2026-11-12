import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "MedHorizon is opening in Greater Sacramento — video visits, care at home, and rapid point-of-care testing. Join the waitlist for early access in your city.",
};

export default function WaitlistLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
