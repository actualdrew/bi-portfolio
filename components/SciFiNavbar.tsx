"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function SciFiNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkBase =
    "relative px-3 py-1.5 text-xs tracking-[0.22em] uppercase transition-colors";
  const activeGlow =
    "text-cyan-300 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-gradient-to-r after:from-transparent after:via-cyan-400 after:to-transparent after:blur-[1px]";
  const inactive = "text-slate-300/70 hover:text-cyan-200";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050712]/70 border-b border-cyan-500/20 shadow-[0_0_25px_rgba(14,165,233,0.15)]">
      <div className="max-w-6xl mx-auto px-5 py-2 flex items-center justify-between">

        {/* LOGO + TITLE */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/AA_scifi_logo.png"
            alt="AA Logo"
            width={64}
            height={64}
            priority
            className="
              h-8 w-auto sm:h-10
              transition-all duration-500
              drop-shadow-[0_0_12px_rgba(0,255,255,0.4)]
              group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]
            "
          />

          <span
            className="
              text-sm sm:text-base
              tracking-[0.22em] uppercase
              text-cyan-200/80
              group-hover:text-cyan-200
              transition-colors
              whitespace-nowrap
            "
          >
            2A Analytics
          </span>
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          className="sm:hidden text-cyan-200 flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className="w-5 h-0.5 bg-cyan-300"></span>
          <span className="w-5 h-0.5 bg-cyan-300"></span>
          <span className="w-5 h-0.5 bg-cyan-300"></span>
        </button>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden sm:flex items-center gap-6">
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
            className="
              rounded-full border border-cyan-500/40 bg-cyan-500/10
              px-4 py-1.5 text-xs tracking-[0.22em] uppercase text-cyan-200
              hover:border-cyan-300 hover:bg-cyan-500/20 transition-colors
            "
          >
            Contact
          </a>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div className="sm:hidden px-5 pb-4 pt-2 bg-[#050712]/90 border-t border-cyan-500/20">
          <div className="flex flex-col gap-4 text-xs tracking-[0.22em] uppercase">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`${pathname === "/" ? "text-cyan-300" : "text-slate-300/80"} hover:text-cyan-200`}
            >
              Home
            </Link>

            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className={`${pathname.startsWith("/projects") ? "text-cyan-300" : "text-slate-300/80"} hover:text-cyan-200`}
            >
              Projects
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className={`${pathname.startsWith("/about") ? "text-cyan-300" : "text-slate-300/80"} hover:text-cyan-200`}
            >
              About
            </Link>

            <a
              href="mailto:andrewadamson52@gmail.com"
              onClick={() => setOpen(false)}
              className="text-slate-300/80 hover:text-cyan-200"
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}
