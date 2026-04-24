import "./globals.css";
import type { ReactNode } from "react";
import SciFiNavbar from "@/components/SciFiNavbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Andrew | Data & BI Portfolio",
  description: "Power BI, Data Engineering, and Analytics Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SciFiNavbar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
