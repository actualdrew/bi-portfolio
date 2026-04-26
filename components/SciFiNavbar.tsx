"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
      <div className="max-w-6xl mx-auto px-5 py-0 flex items-center justify-between">

        {/* LOGO + TITLE */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            <Image
              src="/AA scifi logo.png"
              alt="AA Logo"
              width={88}
              height={88}
              className="transition-all duration-500 drop-shadow-[0_0_12px_rgba(0,255,255,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"
            />
          </div>

          <span className="text-sm tracking-[0.22em] uppercase text-cyan-200/80 group-hover:text-cyan-200 transition-colors">
            2A Analytics
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
            href="mailto:andrewadamson52@gmail.com"
            className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-xs tracking-[0.22em] uppercase text-cyan-200 hover:border-cyan-300 hover:bg-cyan-500/20 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
