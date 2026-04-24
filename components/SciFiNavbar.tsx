"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SciFiNavbar() {
  const pathname = usePathname();

  const linkBase =
    "relative px-3 py-1.5 text-xs tracking-[0.22em] uppercase transition-colors";
  const activeGlow =
    "text-cyan-300 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-gradient-to-r after:from-transparent after:via-cyan-400 after:to-transparent after:blur-[1px]";
  const inactive =
    "text-slate-300/70 hover:text-cyan-200";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050712]/70 border-b border-cyan-500/20 shadow-[0_0_25px_rgba(14,165,233,0.15)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-xs tracking-[0.18em] uppercase text-cyan-200">
            29
          </div>
          <span className="text-sm tracking-[0.22em] uppercase text-cyan-200/80">
            BI Interface
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`${linkBase} ${
              pathname === "/" ? activeGlow : inactive
            }`}
          >
            Home
          </Link>

          <Link
            href="/projects"
            className={`${linkBase} ${
              pathname.startsWith("/projects") ? activeGlow : inactive
            }`}
          >
            Projects
          </Link>

          <Link
            href="/about"
            className={`${linkBase} ${
              pathname.startsWith("/about") ? activeGlow : inactive
            }`}
          >
            About
          </Link>

          <a
            href="mailto:andrew@example.com"
            className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-xs tracking-[0.22em] uppercase text-cyan-200 hover:border-cyan-300 hover:bg-cyan-500/20 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
