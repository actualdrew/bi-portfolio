import "./globals.css";
import type { ReactNode } from "react";
import SciFiNavbar from "@/components/SciFiNavbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      </body>
    </html>
  );
}
